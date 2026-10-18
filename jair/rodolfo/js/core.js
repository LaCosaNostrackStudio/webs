(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.RodolfoCore = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const W = 1280, H = 720, GROUND = 580, PLAYER_X = 115, PLAYER_SIZE = 260;
  const overlap = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  const clamp = (n, a, b) => Math.max(a, Math.min(n, b));
  class World {
    constructor(seed = Date.now(), options = {}) {
      this.seed = seed >>> 0 || 1; this.autoSpawn = options.autoSpawn !== false;
      this.time = 0; this.distance = 0; this.speed = 315; this.score = 0; this.collected = 0; this.lives = 3;
      this.playing = true; this.events = []; this.gifts = []; this.obstacles = []; this.particles = [];
      this.player = { foot: GROUND, vy: 0, grounded: true, invincible: 0, buffer: 0, hit: 0 };
      this.nextThrow = .8; this.nextObstacle = 3.9; this.cast = -1; this.shake = 0;
    }
    random() { let n = this.seed; n ^= n << 13; n ^= n >>> 17; n ^= n << 5; this.seed = n >>> 0; return this.seed / 4294967296; }
    range(a, b) { return a + this.random() * (b - a); }
    jump() { if (this.playing) this.player.buffer = .15; }
    playerRect() { return { x: PLAYER_X + 91, y: this.player.foot - 61, w: 105, h: 56 }; }
    pickupRect() { return { x: PLAYER_X + 45, y: this.player.foot - 184, w: 205, h: 180 }; }
    addGift(kind) {
      kind = kind === undefined ? Math.floor(this.random() * 3) : kind;
      const target = GROUND - [33, 220, 310][kind];
      const gift = { x: 1105, y: GROUND - 126, vy: -170, extra: 105, state: 'fall', target, kind, age: 0, size: 48 };
      this.gifts.push(gift); return gift;
    }
    addObstacle() {
      const h = [72, 88, 102][Math.floor(this.random() * 3)];
      const obstacle = { x: W + 55, h, w: Math.round(h * .36) };
      this.obstacles.push(obstacle); return obstacle;
    }
    burst(x, y, color, count = 10) {
      for (let i = 0; i < count; i++) this.particles.push({ x, y, vx: this.range(-125, 125), vy: this.range(-185, -40), life: this.range(.3, .65), color, size: this.range(3, 7) });
    }
    takeEvents() { const e = this.events; this.events = []; return e; }
    step(dt) {
      if (!this.playing) return;
      dt = clamp(dt, 0, .05); this.time += dt; this.speed = Math.min(505, 315 + this.time * 1.5);
      this.distance += this.speed * dt; this.shake = Math.max(0, this.shake - dt);
      const p = this.player;
      p.invincible = Math.max(0, p.invincible - dt); p.hit = Math.max(0, p.hit - dt); p.buffer = Math.max(0, p.buffer - dt);
      if (p.buffer > 0 && p.grounded) { p.vy = -850; p.grounded = false; p.buffer = 0; this.events.push('salto'); }
      if (!p.grounded) {
        p.foot += p.vy * dt + 1025 * dt * dt; p.vy += 2050 * dt;
        if (p.foot >= GROUND) { p.foot = GROUND; p.vy = 0; p.grounded = true; }
      }
      if (this.autoSpawn) {
        this.nextThrow -= dt; this.nextObstacle -= dt;
        if (this.nextThrow <= 0 && this.cast < 0) { this.cast = 0; this.nextThrow = this.range(1.35, 1.9); }
        if (this.nextObstacle <= 0) { this.addObstacle(); this.nextObstacle = this.range(2.85, 4.15) - Math.min(.55, this.time / 240); }
      }
      if (this.cast >= 0) {
        const last = this.cast; this.cast += dt;
        if (last < .26 && this.cast >= .26) { this.addGift(); this.events.push('lanzamiento'); }
        if (this.cast >= .55) this.cast = -1;
      }
      const pickup = this.pickupRect();
      for (const gift of this.gifts) {
        gift.age += dt; gift.x -= (this.speed + gift.extra) * dt; gift.extra *= Math.exp(-2 * dt);
        if (gift.state !== 'float') {
          gift.vy += 1000 * dt; gift.y += gift.vy * dt;
          const floor = GROUND - 27;
          if (gift.state === 'fall' && gift.y >= floor) {
            gift.y = floor; gift.vy = -Math.sqrt(2 * 1000 * Math.max(8, floor - gift.target)); gift.state = 'bounce';
          } else if (gift.state === 'bounce' && gift.vy >= 0) { gift.y = gift.target; gift.vy = 0; gift.state = 'float'; }
        }
        const rect = { x: gift.x - 20, y: gift.y - 20, w: 40, h: 40 };
        if (!gift.dead && overlap(pickup, rect)) {
          gift.dead = true; this.score += 10; this.collected++; this.events.push('regalo');
          this.burst(gift.x, gift.y, ['#ffe36c', '#7cffff', '#fbe093'][gift.kind]);
        }
      }
      this.gifts = this.gifts.filter(g => !g.dead && g.x > -80);
      const body = this.playerRect();
      for (const obstacle of this.obstacles) {
        obstacle.x -= this.speed * dt;
        const r = { x: obstacle.x + 3, y: GROUND - obstacle.h + 7, w: obstacle.w - 6, h: obstacle.h - 7 };
        if (!obstacle.dead && p.invincible <= 0 && overlap(body, r)) {
          obstacle.dead = true; this.lives--; p.invincible = 1.8; p.hit = .4; this.shake = .22; this.events.push('choque');
          this.burst(obstacle.x, GROUND - obstacle.h * .6, '#ffb6cf', 8);
          if (this.lives <= 0) { this.playing = false; this.events.push('game-over'); break; }
        }
      }
      this.obstacles = this.obstacles.filter(o => !o.dead && o.x > -100);
      for (const particle of this.particles) { particle.life -= dt; particle.x += particle.vx * dt; particle.y += particle.vy * dt; particle.vy += 350 * dt; }
      this.particles = this.particles.filter(particle => particle.life > 0);
    }
  }
  return { World, W, H, GROUND, PLAYER_X, PLAYER_SIZE, overlap, clamp };
});
