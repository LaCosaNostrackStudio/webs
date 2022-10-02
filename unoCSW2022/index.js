(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,466,609,246],[918,457,700,350],[918,0,852,455],[611,466,147,147],[0,877,688,82],[0,1125,807,128],[0,0,916,464],[0,714,791,161],[793,809,791,159],[819,970,791,158],[0,970,817,153],[611,615,139,92],[809,1130,478,112],[690,877,47,45],[1612,809,343,210],[1620,457,343,210],[1612,1021,343,210]]},
		{name:"index_atlas_2", frames: [[0,1412,1698,362],[0,0,1647,859],[0,861,1509,549]]},
		{name:"index_atlas_3", frames: [[0,0,1723,940]]},
		{name:"index_atlas_4", frames: [[0,0,950,1700]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap25();
	this.instance.setTransform(-409,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409,-77,817,153);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FDC410").ss(15,1,1).p("Eg0ggKyMBpBAAAQENAAC+DKQC/DKAAEeIAAAAQAAEfi/DKQi+DKkNAAMhpBAAAQkNAAi/jKQi+jKAAkfIAAAAQAAkeC+jKQC/jKENAAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.5,-76.6,817.1,153.3);


(lib.Symbol42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,688,82), null);


(lib.Symbol41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,147,147), null);


(lib.Symbol40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6BI/QjvAAioipQioioAAjuQAAjtCoioQCoipDvAAMA0EAAAQDuAACnCpQCpCoAADtQAADuipCoQinCpjuAAg");
	this.shape.setTransform(150.6,57.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(-73.5,0,448.2,114.9), null);


(lib.Symbol37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A8hIyQjoAAililQikikgBjpIAAAAQABjoCkikQClilDoAAMA5DAAAQDpAACkClQClCkAADoIAAAAQAADpilCkQikCljpAAg");
	this.shape.setTransform(238.75,56.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,477.5,112.4);


(lib.Symbol36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhA+AtgQlgAAj5j5Qj5j5AAlgMAAAhAbQAAlgD5j5QD5j5FgAAMCB9AAAQFgAAD5D5QD5D5AAFgMAAABAbQAAFgj5D5Qj5D5lgAAg");
	this.shape.setTransform(500.875,291.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1001.8,582.4);


(lib.Symbol35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgvWAGaQiqAAh4h4Qh4h4AAiqQAAipB4h4QB4h4CqAAMBetAAAQCqAAB4B4QB4B4AACpQAACqh4B4Qh4B4iqAAg");
	this.shape.setTransform(344.075,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,688.2,82), null);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC511").s().p("ACSF3IgGgEIgigXQgPgMgOgPQgQgQgKgUQgJgVAAgXIAHhcIAKh0IAHhhQgxAUghASIgLA8QgKA+gIA/IgPBnIhWAfIABgXIAAgcIgCh+QgEhgAAgtQAAg3AEgkICfgtQgGAXgHAjQAigPAmgOQAFg3ALhTQAIgxABgQICmgwQgSAxgPA0QgOA0gKA7QA/gQApgCIgJAyIghAIIg2AQIgRAFIgLBIIgLBAIgLA8IgIAiIgCALQgNA1AAAWQAAAlAXARQAFAFAFAAQAPAAAMgiQANgiALg3IBXAMIADgDQAQgOAdgOQAMAhAYAdQAYAcASAAQAFAAAEgCQAMgIAAgPQAAgPgLgVQgLgWgTgaQgLgPgYgUQgZgXgNgWQgMgVgFgqIgBgJIAAgJQAAg5AlglQAlgmA0gLQAggHAYAAQAvAAAbAdQAbAdADBFIhpA3QgBgngLghQgKgigQAAQgFAAgGAEQgXAUAAAgQAAAYAMAbQAGAOAfAiQAkApAUAgQAUAhABAkQAAAigEAWQgEAYgKARQgLASgTAOQgSAQgeAOQgUAKgVAAQgYAAgXgMQgXgLgUgUQgQgPgNgSQgNAcgSAhQgPAggaAQQgaAQgaAAQgVAAgOgJgAmED3IAHhdIAJhXIALhfQgMACgNAFQgNAEgiAPIgVAJQgGBEgDAwQgDAvAAA1IAAAUIAAAZIiJA0QgIhlAAiAQAAhhAEhkQAFhkAIhYIC9gZQgNAtgIA2QgJA2gJBVIAdgLQAogRAcgFIABgKQAOhTAKg1QAKg1APg2IC9gKQgbA+gWBRQgWBSgQBbQgPBbgJBgQgJBggEBhQhMAQglAGIgyAJIAHhngAiIjAQgNgSAAgUQAAgXASgaQATgcAbgPQAcgOAaABQAcgBAOANQATARAAAbQAAAighAeQgVARgaAKQgaAKgVAAQgbAAgMgOg");
	this.shape.setTransform(61.225,38.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,122.5,76.8), null);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9948EE").s().p("Ar5FcQgWgZAAg3IABgIIAAgJIB/g/QgEAfAAAYQAABBAYAAQAEAAAGgEQAKgGAJgRQAJgRAJgYQAJgZAGgcQAIgcAEgcQgaAOgXAHQgXAHgVAAQgRAAgPgFQglgOgPgaQgQgaAAgpQAAgeAHgjQAGgkAPhCIAEgRICDgkQgKAagIAdQgHAegHAfQgGAegDAbQgDAaAAAUQAAArAOAAQAMAAAOgNQAOgNANgdQAMgdAKgvQAKgyAFhEIB3gpQgCA6gFA8QgGA8gJA3QgKA3gOAxQgOAxgRAkQgRAlgPAXQgPAVgPAOQgPAOgSAIQgTAKghAMQgjANgdAAQglAAgYgZgADGFnQgiAAgagIQgagIgQgOQgSgOgHgQQgJgRABgRQAAgNAEgMQAEgKAFgJIh2ANIACgxIADggIADghIAGgsIgqAEQgYAFgTAGQgFAQgDANIgFAdQgDAYgEAOIiLACQANgxAXhIQAWhFAbhRQAchQAahFQAahHAVgwQAggLAkgDQAhgEAwgCQAgAAAMgCIgEBZQgBAxAAA7QAABqAEBoQADBNAFA9QAQgOAVgMQAggSAugJQAwgJA/AAQAJgPABgNQAAgLgHgJQgIgKgLgIQgzAZgxAAQgpABgYgTQgMgKgJgTQgIgVAAgWQAAgpAYggQAcgkArgaQAsgcAkgGQANgCALAAQAtAAAcAeQAQgiAUgXQASgWAPAAQAIAAAHAGQAOAQAHAQQAHAPAEAYIg3AsQAAgvgQAAQgKAAgOAVQAJAcAAAaQAAAdgMAaQgMAbgYAUQATAUAAAUQAAAZgbAjQAjAKAXAVQAYAVAAAhQAAASgIATQgUA3g9AgQg7AghbAHIgLAAIgKAAgADuCyQgWAPgUAkQgIANgGAPQgEAPAAAMQgBAOAGAKQAGAIANAEQAKADAKAAQAVAAAVgNQAUgOAUgYQALgOAFgRQAFgRAAgQQAAgSgGgNQgGgMgMgBIgHAAIgIAAQgbAAgVAOgAghiWIgbBXQgUBEgKAcIAlgCIAfgCQAEglAEhOQAFhaADgjIgCAAQgNAbgMAigAE/iKQgXAGgRAPQgSAPgQAdQgJARgFATQgGATAAAPQAAARAIAIQAEAEAGAAQAKAAALgNQALgNAVggQARgbALgZQAJgZAAgPQAAgPgJAAIgCAAIgDABgAzaCOQAGg8AHg+QAJg+AIg2QAIg3AIgmQgKABgTAFIgnANIghANIgUAIIAeiQIBNgPIBOgNIBEgNIA5gLIAzgLQACASABAmIgBAiIAAAaQgNgBgVAGIg1AOIgfAJQgEANgEAcIgIBCIgFBPIgCBOQABAkABAdQACAcADAQQgLAEgWALIgvAaIgvAcIgjAVQACgxAGg8gAKpDRIgEgpQgRAYgWANQgWAOgYAAQgfgBgcgWQgagUgKgVQgLgVAAgXQAAgXALgoQANgpAZgTQAagTAqgKQAigKAYgUQAYgVADgVQAEgTAAgPQAAgfgQAAQgHAAgKAJQgKAJgKANQgKAMgHAQQgHAQgCAMIhdgbQAWg1AigcQAjgbApAAQAXAAAYAIQAtAQAUAaQAVAYgBAvQAAAZgGAjQgHApABAxQAAArAEArQAGArAIAgIhqAdIgDgagAKNgTQgQAKgPAOQgOAQgKATQgIASAAATQAAAIACAHQADATAJAKQAIAJAKAAQARAAASgXQAKgMAEgWQADgWACgiQAEgjADgOQgOADgQAKgAviA9QgEhUAAhLQAAg8ADgsQANgIAdgLQAcgLATgCQgBAFAAAKIACAeIADAWQATgdAYgQQAXgQAkgCQAkAAANAeQAOAfABA8IhkAzIAEgTQACgNAAgNQgBgUgDgOQgEgVgNAAQgLAAgMARQgMARgJAeQgHAYAAAlQAAArAKA5QAJA4AQBHQgZADgiAJQgjAJgVAJQgHhNgFhWgASJBXQAMhCAPhIIAIgoQACgMAAgJQAAgRgLAAQgUAAhEA9IgQDsIhbAbIgLl1ICAgwIgHBiQAlgfAegTQAegTAdgMQATgHASAAQAYAAAPAOQAOAOAAAfIAAAGIgBAHQgDAagIArIgTBgIgXBiIgQBCIhrAiQAJhDALhBgANDCzIAAgXIgDhqQgDhQAAgmQAAgvADgfICHglQgHAagJAsIgRBfIgQBnIgMBYIhIAZIABgTgANLjRQgMgQAAgRQAAgTAPgVQAQgZAXgLQAXgMAWAAQAYAAAMALQAQAOAAAXQAAAcgcAaQgSAOgVAIQgXAJgSAAQgWAAgJgMg");
	this.shape.setTransform(131.8,37.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,263.6,74.5), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANWDHQghgagJgzIA2gIQAFAgAVARQAUASAlAAQAmAAASgPQASgQAAgUQAAgTgQgLQgLgHgsgLQg8gPgXgLQgYgLgLgUQgNgTAAgXQAAgVAKgTQAKgSARgMQANgKAWgGQAWgHAZAAQAmAAAcALQAdALANATQAOATAFAfIg1AHQgEgZgRgOQgSgOgfAAQgmAAgQANQgQAMAAARQAAAKAHAJQAGAIAPAFIAwAOQA6AQAXAKQAWAJANATQANATAAAcQAAAbgPAYQgQAYgeANQgeAOgmAAQg/AAghgbgAH/C2QgqgrAAhSQAAhYAxgrQAqgkA8AAQBCAAAqAsQAqArAABMQAAA+gSAkQgTAjgkAUQgjAUgqAAQhEAAgpgsgAIogiQgbAfAAA8QAAA+AbAfQAbAfApAAQAoAAAbgfQAbgfAAg/QAAg7gbgfQgbgegoAAQgpAAgbAegAgNDMQghgVgRgmQgSgmAAgxQAAgwAQgmQAQgoAggVQAfgVAoAAQAdAAAXANQAWAMAPAUIAAigIA2AAIAAG7IgzAAIAAgoQgeAwg8AAQgmAAgfgWgAgBgjQgYAeAAA/QAAA+AZAeQAaAfAjAAQAkAAAZgdQAZgeAAg8QAAhBgZgfQgageglAAQgkAAgYAdgAmMDIQgdgaAAgpQAAgXALgUQALgTARgMQARgMAWgGQAQgEAhgEQBCgIAfgLIAAgOQAAgggPgOQgVgSgpAAQgnAAgSANQgSAOgJAiIg1gIQAHgiAQgVQARgVAggLQAfgMAqAAQApAAAZAKQAaAKAMAPQAMAOAFAXQADAOAAAjIAABJQAABMAEAUQADAUAKASIg5AAQgIgRgDgWQgeAZgcALQgcALggAAQg1AAgcgagAkiBNQgiAFgOAGQgOAGgHAMQgIAMAAAOQAAAWARAOQAQAPAgAAQAgAAAYgOQAZgOALgYQAJgSAAgkIAAgUQgeAMg7AIgAq4DXQgZgLgLgRQgMgQgFgYQgEgQAAgjIAAjGIA3AAIAACxQAAArADAPQAFAVARAMQARANAYAAQAZAAAVgNQAWgNAJgVQAJgWAAgpIAAirIA2AAIAAFAIgxAAIAAgvQglA3hBAAQgcAAgZgLgAwOC3QgogsAAhQQAAg0ARgmQARgnAkgUQAjgUApAAQA1AAAhAbQAhAaAKAxIg1AIQgIgggTgQQgTgRgbAAQgqAAgZAeQgaAdAAA/QAABBAZAdQAZAeAoAAQAgAAAVgUQAWgUAFgpIA2AHQgJA4gkAfQgkAgg1AAQhCAAgogrgAEaDaIAAlAIAxAAIAAAwQATgiAQgLQAQgLATAAQAbAAAdASIgTAzQgUgMgUAAQgSAAgOALQgOAKgGATQgJAcAAAjIAACog");
	this.shape.setTransform(107.925,22.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,215.9,45.2), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAACpIuoOpIipipIOpupIupuoICpipIOoOpIOpupICpCpIupOoIOpOpIipCpg");
	this.shape.setTransform(110.625,110.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,221.3,221.2), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A6VouIJhPnQQ5v3aRnaQ28H51dY3g");
	this.shape.setTransform(168.55,104.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,337.1,209.7), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,343,210), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,343,210), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,343,210), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg8yAJwIAAzfMB5lAAAIAATfg");
	this.shape.setTransform(389.1,62.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,778.2,124.8), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(145,219);

	this.instance_1 = new lib.Bitmap31();
	this.instance_1.setTransform(-108,-61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-108,-61,1509,549), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap23();
	this.instance.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,-2,791,158), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,791,159), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,791,161), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap28();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,950,1700), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-16,-16,916,464), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,0,0.3287,0.3287);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,230.1,115.1), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,304.5,123), null);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol42();
	this.instance.setTransform(0.05,0,1,1,0,0,0,344.1,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-344,-41,688,82);


(lib.Symbol39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap26();
	this.instance.setTransform(173,9);

	this.instance_1 = new lib.Symbol37();
	this.instance_1.setTransform(238.8,56.1,1,1,0,0,0,238.8,56.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Bitmap27();
	this.instance_2.setTransform(8,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,486,124), null);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ini:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_471 = function() {
		exportRoot.gotoAndPlay("reini");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(471).call(this.frame_471).wait(1));

	// Layer_1
	this.instance = new lib.Symbol27();
	this.instance.setTransform(332.25,-356.85,2.2261,2.2261,0,0,0,110.6,110.6);

	this.instance_1 = new lib.Symbol36();
	this.instance_1.setTransform(329,-345.35,1,1,0,0,0,500.9,291.2);
	this.instance_1.alpha = 0.0117;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},451).to({state:[{t:this.instance_1},{t:this.instance}]},20).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgvWAGaQiqAAh4h4Qh4h4AAiqQAAipB4h4QB4h4CqAAMBetAAAQCqAAB4B4QB4B4AACpQAACqh4B4Qh4B4iqAAg");
	var mask_graphics_451 = new cjs.Graphics().p("Eg1vgGZMBrfAAAIAAMzMhrfAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:339.075,y:41}).wait(451).to({graphics:mask_graphics_451,x:339,y:41}).wait(21));

	// Layer_2
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(-350.95,41);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:339.05},451).to({startPosition:0},20).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol35();
	this.instance_3.setTransform(339.1,41,1,1,0,0,0,344.1,41);
	this.instance_3.alpha = 0.5508;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(472));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.9,-636.5,1001.8,718.5);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol31();
	this.instance.setTransform(208.25,61.2,1,1,0,0,0,131.8,37.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEC410","#03FFFA"],[0,1],0,59.3,0,-59.3).s().p("A37JRQj1AAiuiuQiuitAAj2QAAj0CuiuQCuiuD1AAMAv3AAAQD2AACtCuQCuCuAAD0QAAD2iuCtQitCuj2AAg");
	this.shape.setTransform(212.5,59.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,425,118.6), null);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"ini":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
		exportRoot.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Symbol_17
	this.instance = new lib.Symbol29();
	this.instance.setTransform(1664.65,89.3,1,1,0,0,0,107.9,22.6);

	this.instance_1 = new lib.Symbol17();
	this.instance_1.setTransform(419.85,1084.05,1,1,0,0,0,372.2,66.2);
	this.instance_1.alpha = 0.0117;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:836.05,alpha:1},19,cjs.Ease.get(1)).wait(1));

	// Symbol_16
	this.instance_2 = new lib.Symbol16();
	this.instance_2.setTransform(419.85,926.1,1,1,0,0,0,372.2,66.2);
	this.instance_2.alpha = 0.0117;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:678.1,alpha:1},19,cjs.Ease.get(1)).wait(4));

	// Symbol_15
	this.instance_3 = new lib.Symbol15();
	this.instance_3.setTransform(419.85,768.15,1,1,0,0,0,372.2,66.2);
	this.instance_3.alpha = 0.0117;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({y:520.15,alpha:1},19,cjs.Ease.get(1)).wait(7));

	// Symbol_6
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(421.3,443.5,1,1,0,0,0,421.3,195.5);
	this.instance_4.alpha = 0.0117;
	this.instance_4.shadow = new cjs.Shadow("rgba(102,0,102,1)",19,19,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:195.5,alpha:1},19,cjs.Ease.get(1)).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-48,1820.6,1221.9);


(lib.Symbol21copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"ini":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_1 = function() {
		this.stop();
		
		this.bt.addEventListener("click", hacer2.bind(this));
		
		function hacer2(event) {
		exportRoot.tiempo.stop();		
		this.play();
		}
	}
	this.frame_94 = function() {
		this.stop();
		exportRoot.gotoAndPlay("reini");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(93).call(this.frame_94).wait(1));

	// Layer_3
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(1045,61);

	this.instance_1 = new lib.Symbol27();
	this.instance_1.setTransform(78.8,69.05,0.6706,0.6706,0,0,0,110.6,110.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},65).wait(30));

	// Layer_2
	this.instance_2 = new lib.Symbol23();
	this.instance_2.setTransform(401.1,76.5,1,1,0,0,0,171.5,104.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol24();
	this.instance_3.setTransform(401.1,76.5,1,1,0,0,0,171.5,104.9);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol25();
	this.instance_4.setTransform(401.1,76.5,1,1,0,0,0,171.5,104.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({y:30,alpha:0},17).to({_off:true,y:76.5,alpha:1},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},1).to({y:30,alpha:0},13).to({_off:true,y:76.5,alpha:1},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46).to({_off:false},1).to({y:30,alpha:0},17).to({_off:true},1).wait(30));

	// Layer_1
	this.bt = new lib.Symbol22();
	this.bt.name = "bt";
	this.bt.setTransform(398.9,69.75,1,1,0,0,0,389.1,62.4);
	this.bt.alpha = 0.0117;

	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.setTransform(401.05,69.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.setTransform(401.05,69.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bt}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},13).to({state:[{t:this.instance_6}]},50).to({state:[{t:this.instance_6}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({_off:true,alpha:1},13).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},13).to({startPosition:0},50).to({startPosition:0},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-74.9,1099.9,256.5);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"ini":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		this.bt.addEventListener("click", hacer.bind(this));
		
		function hacer(event) {
		exportRoot.tiempo.stop();		
		this.play();
		}
	}
	this.frame_65 = function() {
		exportRoot.puntos.text = String(Number(exportRoot.puntos.text) + Number(1));
	}
	this.frame_94 = function() {
		this.stop();
		exportRoot.gotoAndPlay("reini");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(64).call(this.frame_65).wait(29).call(this.frame_94).wait(1));

	// Layer_3
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(1045,61);

	this.instance_1 = new lib.Symbol26();
	this.instance_1.setTransform(183.25,33.45,1,1,0,0,0,168.6,104.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},65).wait(30));

	// Layer_2
	this.instance_2 = new lib.Symbol23();
	this.instance_2.setTransform(401.1,76.5,1,1,0,0,0,171.5,104.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol24();
	this.instance_3.setTransform(401.1,76.5,1,1,0,0,0,171.5,104.9);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol25();
	this.instance_4.setTransform(401.1,76.5,1,1,0,0,0,171.5,104.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({y:30,alpha:0},17).to({_off:true,y:76.5,alpha:1},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},1).to({y:30,alpha:0},13).to({_off:true,y:76.5,alpha:1},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46).to({_off:false},1).to({y:30,alpha:0},17).to({_off:true},1).wait(30));

	// Layer_1
	this.bt = new lib.Symbol22();
	this.bt.name = "bt";
	this.bt.setTransform(398.9,69.75,1,1,0,0,0,389.1,62.4);
	this.bt.alpha = 0.0117;

	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.setTransform(401.05,69.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.setTransform(401.05,69.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bt}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},13).to({state:[{t:this.instance_6}]},50).to({state:[{t:this.instance_6}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({_off:true,alpha:1},13).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},13).to({startPosition:0},50).to({startPosition:0},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-74.9,1099.9,256.5);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(399.55,261.55,1,1,0,0,0,115,57.5);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(665.6,266.25,1,1,0,0,0,152.2,61.4);
	this.instance_1.shadow = new cjs.Shadow("rgba(153,153,153,1)",3,3,0);

	this.instance_2 = new lib.Bitmap30();
	this.instance_2.setTransform(-93,-93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-93,-93,1647,859), null);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.reiniciar.addEventListener("click", hacer3.bind(this));
		
		function hacer3(event) {
		
		exportRoot.puntos.text = "0";
		exportRoot.jugadas.text = "0";	
		exportRoot.gotoAndPlay("reinicio");
			
		}
		
		this.puntos.text = exportRoot.puntos.text;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(0,3);

	this.puntos = new cjs.Text("", "96px 'CCZoinks'", "#FFFFFF");
	this.puntos.name = "puntos";
	this.puntos.textAlign = "center";
	this.puntos.lineHeight = 120;
	this.puntos.lineWidth = 175;
	this.puntos.parent = this;
	this.puntos.setTransform(500.1,14.4);

	this.reiniciar = new lib.Symbol30();
	this.reiniciar.name = "reiniciar";
	this.reiniciar.setTransform(407.3,638.5,1.407,1.407,0,0,0,212.5,59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.reiniciar},{t:this.puntos},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,3,852,718.8), null);


// stage content:
(lib.triviagame4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {reinicio:0,"ini":1,re1:6,re2:7,re3:8,reini:9,fin:12,ganaste:13};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,4,5,6,7,8,9,10,11,12,13];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btplay.addEventListener("click", hacer4.bind(this));
		
		function hacer4(event) {
		
		this.play();
			
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		exportRoot.cuadros.gotoAndPlay("ini");
	}
	this.frame_2 = function() {
		this.randopregunta.text = Math.floor((Math.random() * 18) + 1);
	}
	this.frame_4 = function() {
		if (this.randopregunta.text == "1") {
			 
			this.pregunta.text = "What does AHT stand for?";
			 
				this.respuesta1.text = "Average Handle Time";
				this.respuesta2.text = "After Hour Time";
				this.respuesta3.text = "Average Hour Time";
		}
		
		 if (this.randopregunta.text == "2") {
			 
			this.pregunta.text = "When did UNO launch its operations?";
			 
				this.respuesta1.text = "2004";
				this.respuesta2.text = "2007";
				this.respuesta3.text = "2002";
		}
		
		 if (this.randopregunta.text == "3") {
			 
			this.pregunta.text = "What is the maximum hold time in a call?";
			 
				this.respuesta1.text = "2 minutes";
				this.respuesta2.text = "1 minute";
				this.respuesta3.text = "30 Seconds";
		}
		
		 if (this.randopregunta.text == "4") {
			 
			this.pregunta.text = "What is the operation manager’s full name?";
			 
				this.respuesta1.text = "Juana Mercedes Duran";
				this.respuesta2.text = "Juana Minerva Duran";
				this.respuesta3.text = "Elvin Tineo";
		}
		
		 if (this.randopregunta.text == "5") {
			 
			this.pregunta.text = "Where can you find your paystub?";
			 
				this.respuesta1.text = "NWS";
				this.respuesta2.text = "Intranet";
				this.respuesta3.text = "Email";
		}
		
		 if (this.randopregunta.text == "6") {
			 
			this.pregunta.text = "What are UNO’s values?";
			 
				this.respuesta1.text = "Integrity - Active Participation - TeamWork - Mutual Respect";
				this.respuesta2.text = "All are correct";
				this.respuesta3.text = "Motivation - Innovation - Charisma ";
		}
		
		 if (this.randopregunta.text == "7") {
			 
			this.pregunta.text = "What is the phone number to call when reporting an absenteeism or lateness?";
			 
				this.respuesta1.text = "829.947.8866 ext. 3000";
				this.respuesta2.text = "809.480.5555";
				this.respuesta3.text = "All are correct";
		}
		
		 if (this.randopregunta.text == "8") {
			 
			this.pregunta.text = "What does UNO stand for?";
			 
				this.respuesta1.text = "United Nearshore Operations";
				this.respuesta2.text = "United Nations Organization";
				this.respuesta3.text = "United Nearshore Organization";
		}
		
		 if (this.randopregunta.text == "9") {
			 
			this.pregunta.text = "Where are Hawk Incentives main offices located?";
			 
				this.respuesta1.text = "Lewisville, Texas";
				this.respuesta2.text = "Fenton, MO";
				this.respuesta3.text = "Pleasanton, California";
		}
		
		 if (this.randopregunta.text == "10") {
			 
			this.pregunta.text = "Where is UNO located?";
			 
				this.respuesta1.text = "Zona Franca D'Clase Corporation";
				this.respuesta2.text = "Gurabo, Sto. Dgo.";
				this.respuesta3.text = "All are correct";
		}
		
		 if (this.randopregunta.text == "11") {
			 
			this.pregunta.text = "What is Hawk Incentives?";
			 
				this.respuesta1.text = "A rewards based incentives company";
				this.respuesta2.text = "A marketing program";
				this.respuesta3.text = "All are correct";
		}
		
		 if (this.randopregunta.text == "12") {
			 
			this.pregunta.text = "When does the daylight saving schedule start?";
			 
				this.respuesta1.text = "The second sunday in March";
				this.respuesta2.text = "The second sunday in May";
				this.respuesta3.text = "The second sunday in February";
		}
		
		 if (this.randopregunta.text == "13") {
			 
			this.pregunta.text = "Which supervisor has the latest schedule?";
			 
				this.respuesta1.text = "Edmundo Dominguez";
				this.respuesta2.text = "Pedro Crisostomo";
				this.respuesta3.text = "Carlos Rodriguez";
		}
		
		 if (this.randopregunta.text == "14") {
			 
			this.pregunta.text = "Who is Cristhian Almonte?";
			 
				this.respuesta1.text = "Quality Assurance Supervisor";
				this.respuesta2.text = "Quality Assurance Manager";
				this.respuesta3.text = "Quality Assurance Analyst";
		}
		
		 if (this.randopregunta.text == "15") {
			 
			this.pregunta.text = "Who is Nikauly Dominguez?";
			 
				this.respuesta1.text = "Operations Assistant Manager";
				this.respuesta2.text = "Operations Supervisor ";
				this.respuesta3.text = "Quality Assurance Manager";
		}
		
		 if (this.randopregunta.text == "16") {
			 
			this.pregunta.text = "What was the last cooking recipe published in the UNO TIPS newsletter?";
			 
				this.respuesta1.text = "Tom Collins Cocktail";
				this.respuesta2.text = "Niño envuelto de jamón y queso";
				this.respuesta3.text = "Quesadilla con carne";
		}
		
		 if (this.randopregunta.text == "17") {
			 
			this.pregunta.text = "What is the maximum score you can get in quality?";
			 
				this.respuesta1.text = "5 points";
				this.respuesta2.text = "4.5 points";
				this.respuesta3.text = "100 points";
		}
		
		 if (this.randopregunta.text == "18") {
			 
			this.pregunta.text = "What do we celebrate the first week of October?";
			 
				this.respuesta1.text = "Customer Service Week";
				this.respuesta2.text = "Consumer Service Week";
				this.respuesta3.text = "Central Service Week";
		}
	}
	this.frame_5 = function() {
		////////////rando//////
		this.rando.text = Math.floor((Math.random() * 3) + 1);
		
		 if (this.rando.text == "1") {
			this.gotoAndPlay("re1");
		}
		
		 if (this.rando.text == "2") {
			this.gotoAndPlay("re2");
		}
		
		 if (this.rando.text == "3") {
			this.gotoAndPlay("re3");
		}
	}
	this.frame_6 = function() {
		this.stop();
		//this.tiempo.gotoAndPlay("ini");
		this.tiempo.play();
		
		/////////snder1/////////
		this.preguntas.text = this.pregunta.text;
		
		this.respuestas1.text = this.respuesta1.text;
		this.respuestas2.text = this.respuesta2.text;
		this.respuestas3.text = this.respuesta3.text;
	}
	this.frame_7 = function() {
		this.stop();
		//this.tiempo.gotoAndPlay("ini");
		this.tiempo.play();
		
		/////////snder1/////////
		this.preguntas.text = this.pregunta.text;
		
		this.respuestas2.text = this.respuesta1.text;
		this.respuestas1.text = this.respuesta2.text;
		this.respuestas3.text = this.respuesta3.text;
	}
	this.frame_8 = function() {
		this.stop();
		//this.tiempo.gotoAndPlay("ini");
		this.tiempo.play();
		
		/////////snder1/////////
		this.preguntas.text = this.pregunta.text;
		
		this.respuestas3.text = this.respuesta1.text;
		this.respuestas2.text = this.respuesta2.text;
		this.respuestas1.text = this.respuesta3.text;
	}
	this.frame_9 = function() {
		exportRoot.jugadas.text = String(Number(exportRoot.jugadas.text) + Number(1));
		
		this.preguntas.text = "";
		
		this.respuestas1.text = "";
		this.respuestas2.text = "";
		this.respuestas3.text = "";
		
		exportRoot.btbien.gotoAndPlay("ini");
		exportRoot.btbmal1.gotoAndPlay("ini");
		exportRoot.btbmal2.gotoAndPlay("ini");
	}
	this.frame_10 = function() {
		if (this.jugadas.text == "6") {
			this.gotoAndPlay("fin");
		}
	}
	this.frame_11 = function() {
		this.gotoAndPlay("ini");
	}
	this.frame_12 = function() {
		this.stop();
		
		 if (this.puntos.text > "3") {
			this.gotoAndPlay("ganaste");
		}
	}
	this.frame_13 = function() {
		this.stop();
		
		this.sifrax.text = "";
		
		
		this.sifra1.text = Math.floor((Math.random() * 10) + 1);
		this.sifra2.text = Math.floor((Math.random() * 10) + 10);
		
		
		this.sifra3.text = String(Number(this.sifra1.text) * Number(this.sifra2.text));
		
		
		this.codigo.text = this.sifrax.text + this.sifra1.text + "-" + this.sifra2.text +"-" +this.sifra3.text;
		
		
		this.btw.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://wa.link/rxv59e", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(2).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(2));

	// Layer_9
	this.instance = new lib.Symbol19();
	this.instance.setTransform(602.15,1570.85,1,1,0,0,0,671.1,213.8);

	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(456.7,156.95,1,1,0,0,0,726.6,332.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(15));

	// Layer_1
	this.btplay = new lib.Symbol39();
	this.btplay.name = "btplay";
	this.btplay.setTransform(482.2,945.25,1,1,0,0,0,238.8,56.1);

	this.randopregunta = new cjs.Text("", "96px 'CCZoinks'");
	this.randopregunta.name = "randopregunta";
	this.randopregunta.textAlign = "center";
	this.randopregunta.lineHeight = 120;
	this.randopregunta.lineWidth = 175;
	this.randopregunta.parent = this;
	this.randopregunta.setTransform(-685.85,375.8);

	this.instance_2 = new lib.Symbol33();
	this.instance_2.setTransform(853.1,212.25,1,1,0,0,0,61.2,38.4);
	this.instance_2.shadow = new cjs.Shadow("rgba(102,51,204,1)",3,3,4);

	this.jugadas = new cjs.Text("", "96px 'CCZoinks'");
	this.jugadas.name = "jugadas";
	this.jugadas.textAlign = "center";
	this.jugadas.lineHeight = 120;
	this.jugadas.lineWidth = 175;
	this.jugadas.parent = this;
	this.jugadas.setTransform(1397.85,215);
	this.jugadas.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.puntos = new cjs.Text("0", "96px 'CCZoinks'", "#FFFFFF");
	this.puntos.name = "puntos";
	this.puntos.textAlign = "center";
	this.puntos.lineHeight = 120;
	this.puntos.lineWidth = 175;
	this.puntos.parent = this;
	this.puntos.setTransform(847.65,259);
	this.puntos.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.rando = new cjs.Text("", "96px 'CCZoinks'");
	this.rando.name = "rando";
	this.rando.textAlign = "center";
	this.rando.lineHeight = 120;
	this.rando.lineWidth = 175;
	this.rando.parent = this;
	this.rando.setTransform(-685.85,575.25);

	this.respuesta3 = new cjs.Text("", "96px 'CCZoinks'");
	this.respuesta3.name = "respuesta3";
	this.respuesta3.textAlign = "center";
	this.respuesta3.lineHeight = 120;
	this.respuesta3.lineWidth = 748;
	this.respuesta3.parent = this;
	this.respuesta3.setTransform(-699.55,1123.05,0.7149,0.7149);

	this.respuesta2 = new cjs.Text("", "96px 'CCZoinks'");
	this.respuesta2.name = "respuesta2";
	this.respuesta2.textAlign = "center";
	this.respuesta2.lineHeight = 120;
	this.respuesta2.lineWidth = 748;
	this.respuesta2.parent = this;
	this.respuesta2.setTransform(-699.55,1030.05,0.7149,0.7149);

	this.respuesta1 = new cjs.Text("", "96px 'CCZoinks'");
	this.respuesta1.name = "respuesta1";
	this.respuesta1.textAlign = "center";
	this.respuesta1.lineHeight = 120;
	this.respuesta1.lineWidth = 748;
	this.respuesta1.parent = this;
	this.respuesta1.setTransform(-699.55,928.9,0.7149,0.7149);

	this.pregunta = new cjs.Text("", "96px 'CCZoinks'");
	this.pregunta.name = "pregunta";
	this.pregunta.textAlign = "center";
	this.pregunta.lineHeight = 120;
	this.pregunta.lineWidth = 748;
	this.pregunta.parent = this;
	this.pregunta.setTransform(-699.55,802.7253,0.7149,0.7149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btplay}]}).to({state:[{t:this.pregunta},{t:this.respuesta1},{t:this.respuesta2},{t:this.respuesta3},{t:this.rando},{t:this.puntos},{t:this.jugadas},{t:this.instance_2},{t:this.randopregunta}]},1).wait(14));

	// Layer_8
	this.tiempo = new lib.Symbol34();
	this.tiempo.name = "tiempo";
	this.tiempo.setTransform(209.65,1312.6,0.8241,0.8241);
	this.tiempo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tiempo).wait(6).to({_off:false},0).to({_off:true},3).wait(6));

	// Layer_4
	this.instance_3 = new lib.CachedBmp_8();
	this.instance_3.setTransform(46.85,339.45,0.5,0.5);

	this.btmal2 = new lib.Symbol21copy();
	this.btmal2.name = "btmal2";
	this.btmal2.setTransform(477.5,1206.4,1,1,0,0,0,401.1,69.1);

	this.btmal1 = new lib.Symbol21copy();
	this.btmal1.name = "btmal1";
	this.btmal1.setTransform(477.5,1052.05,1,1,0,0,0,401.1,69.1);

	this.btbien = new lib.Symbol21();
	this.btbien.name = "btbien";
	this.btbien.setTransform(477.5,896.05,1,1,0,0,0,401.1,69.1);

	this.instance_4 = new lib.Symbol32();
	this.instance_4.setTransform(494.3,795.05,1,1,0,0,0,424.6,360.9);

	this.btw = new lib.Symbol41();
	this.btw.name = "btw";
	this.btw.setTransform(481.5,924.85,1.8879,1.8879,0,0,0,73.4,73.4);

	this.instance_5 = new lib.CachedBmp_9();
	this.instance_5.setTransform(60.05,605.3,0.5,0.5);

	this.sifrax = new cjs.Text("", "55px 'Arial'");
	this.sifrax.name = "sifrax";
	this.sifrax.textAlign = "center";
	this.sifrax.lineHeight = 63;
	this.sifrax.lineWidth = 137;
	this.sifrax.parent = this;
	this.sifrax.setTransform(1145.1,697.55);

	this.codigo = new cjs.Text("", "79px 'Arial'", "#FFFFFF");
	this.codigo.name = "codigo";
	this.codigo.textAlign = "center";
	this.codigo.lineHeight = 90;
	this.codigo.lineWidth = 404;
	this.codigo.parent = this;
	this.codigo.setTransform(490.25,453.3);

	this.sifra3 = new cjs.Text("", "55px 'Arial'");
	this.sifra3.name = "sifra3";
	this.sifra3.textAlign = "center";
	this.sifra3.lineHeight = 63;
	this.sifra3.lineWidth = 137;
	this.sifra3.parent = this;
	this.sifra3.setTransform(1643.65,697.55);

	this.sifra2 = new cjs.Text("", "55px 'Arial'");
	this.sifra2.name = "sifra2";
	this.sifra2.textAlign = "center";
	this.sifra2.lineHeight = 63;
	this.sifra2.lineWidth = 137;
	this.sifra2.parent = this;
	this.sifra2.setTransform(1481.35,697.55);

	this.sifra1 = new cjs.Text("", "55px 'Arial'");
	this.sifra1.name = "sifra1";
	this.sifra1.textAlign = "center";
	this.sifra1.lineHeight = 63;
	this.sifra1.lineWidth = 137;
	this.sifra1.parent = this;
	this.sifra1.setTransform(1321.05,697.55);

	this.instance_6 = new lib.Symbol40();
	this.instance_6.setTransform(496.55,497.65,1,1,0,0,0,161.1,57.5);
	this.instance_6.alpha = 0.3789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[]},1).to({state:[{t:this.btbien,p:{y:896.05}},{t:this.btmal1,p:{y:1052.05}},{t:this.btmal2,p:{y:1206.4}}]},5).to({state:[{t:this.btbien,p:{y:1050.4}},{t:this.btmal2,p:{y:1206.4}},{t:this.btmal1,p:{y:897.7}}]},1).to({state:[{t:this.btbien,p:{y:1207.2}},{t:this.btmal2,p:{y:1052.05}},{t:this.btmal1,p:{y:897.7}}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_6},{t:this.sifra1},{t:this.sifra2},{t:this.sifra3},{t:this.codigo},{t:this.sifrax},{t:this.instance_5},{t:this.btw}]},1).to({state:[]},1).wait(1));

	// Layer_2
	this.respuestas3 = new cjs.Text("", "35px 'Arial'");
	this.respuestas3.name = "respuestas3";
	this.respuestas3.textAlign = "center";
	this.respuestas3.lineHeight = 41;
	this.respuestas3.lineWidth = 613;
	this.respuestas3.parent = this;
	this.respuestas3.setTransform(528.65,1168.65);

	this.respuestas2 = new cjs.Text("", "35px 'Arial'");
	this.respuestas2.name = "respuestas2";
	this.respuestas2.textAlign = "center";
	this.respuestas2.lineHeight = 41;
	this.respuestas2.lineWidth = 613;
	this.respuestas2.parent = this;
	this.respuestas2.setTransform(528.65,1012.6);

	this.respuestas1 = new cjs.Text("", "35px 'Arial'");
	this.respuestas1.name = "respuestas1";
	this.respuestas1.textAlign = "center";
	this.respuestas1.lineHeight = 41;
	this.respuestas1.lineWidth = 613;
	this.respuestas1.parent = this;
	this.respuestas1.setTransform(528.65,856.55);

	this.preguntas = new cjs.Text("", "62px 'Arial'");
	this.preguntas.name = "preguntas";
	this.preguntas.textAlign = "center";
	this.preguntas.lineHeight = 71;
	this.preguntas.lineWidth = 748;
	this.preguntas.parent = this;
	this.preguntas.setTransform(472.2,414.15);

	this.cuadros = new lib.Symbol28();
	this.cuadros.name = "cuadros";
	this.cuadros.setTransform(477.15,825,1,1,0,0,0,421.3,451.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cuadros},{t:this.preguntas},{t:this.respuestas1},{t:this.respuestas2},{t:this.respuestas3}]},1).to({state:[]},11).to({state:[]},1).wait(2));

	// Layer_3
	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(475,850,1,1,0,0,0,475,850);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-499.2,581.3,2327.7,1263.8);
// library properties:
lib.properties = {
	id: '0AD035682460854FA7F26851B3ACEB37',
	width: 950,
	height: 1700,
	fps: 40,
	color: "#4E6EF5",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1664746412117", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1664746412117", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png?1664746412117", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png?1664746412117", id:"index_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0AD035682460854FA7F26851B3ACEB37'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;