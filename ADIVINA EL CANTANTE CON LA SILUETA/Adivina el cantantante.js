(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Adivina el cantantante_atlas_", frames: [[0,804,1280,720],[0,1526,1552,249],[1470,1331,82,82],[1282,1370,164,40],[1470,1261,206,68],[1282,804,537,200],[1282,1149,407,58],[1282,1006,523,141],[0,0,1399,802],[1282,1209,470,50],[1282,1261,186,107]]}
];


// symbols:



(lib.backgroundjpgcopy2 = function() {
	this.spriteSheet = ss["Adivina el cantantante_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["Adivina el cantantante_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["Adivina el cantantante_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["Adivina el cantantante_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["Adivina el cantantante_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["Adivina el cantantante_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["Adivina el cantantante_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["Adivina el cantantante_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["Adivina el cantantante_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["Adivina el cantantante_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.logojpgcopy2 = function() {
	this.spriteSheet = ss["Adivina el cantantante_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-203.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.5,-29,407,58);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADByQgQgKgGgRQgGgSAAgiIAAhFQAAgZACgNQACgNAJgMQAIgMAPgHQAPgHAUAAQAbAAASALQASALAFAPQAGAQAAAhIAAAWIg+AAIAAgoQAAgSgCgFQgCgEgGAAQgIAAgCAFQgCAFAAASIAABtQAAASACAFQACAGAHgBQAHABACgGQACgFAAgUIAAgdIA+AAIAAAJQAAAlgFAPQgFAPgSAMQgSAMgaAAQgbAAgSgKgAiZByQgRgJgGgPQgFgOAAgbIAAgPIA5AAIAAAcQAAAOADAEQACADAGAAQAGAAADgEQADgGAAgJQAAgVgFgGQgGgHgXgPQgXgPgIgGQgHgHgFgMQgFgMAAgTQAAgbAHgNQAHgMAPgIQAQgGAWgBQAYAAARAIQARAIAFAMQAGAMAAAcIAAAJIg6AAIAAgSQAAgMgCgDQgCgDgFAAQgGAAgCAEQgDAFAAAJQAAALADAHQADAFAOAJQApAZALAOQALAQAAAjQAAAZgGAMQgGAMgRAJQgRAIgXAAQgYAAgSgKgAoYB0QgQgHgIgLQgIgLgBgNQgCgMAAgoIAAiLIA+AAIAACwQAAAPACAFQABAFAFgBQAGAAACgEQACgFAAgSIAAitIA9AAIAACdQAAAbgCALQgBALgJALQgJAMgOAFQgOAHgTAAQgVAAgRgIgAJ8B2IgghsIAABsIgzAAIAAjrIAzAAIAjBqIAAhqIAzAAIAADrgAGsB2IAAjrIBnAAIAAAvIgpAAIAAAtIAmAAIAAAsIgmAAIAAA0IAtAAIAAAvgAEwB2IAAjrIBmAAIAAAvIgpAAIAAAtIAnAAIAAAsIgnAAIAAA0IAtAAIAAAvgADeB2IAAhOQAAgTgCgFQgEgFgMAAIAABrIg+AAIAAjrIAsAAQArgBAQADQAPAEAKAOQAKAOAAAeQAAAcgHAJQgHAKgUACQASAEAGAHQAHAIABAGQACAGAAAdIAAA+gADMgZQAKAAAEgCQAEgDAAgPIAAgOQAAgLgDgDQgFgEgKAAgAkkB2IAAjrIA+AAIAAC8IAlAAIAAAvgAmWB2IAAjrIA+AAIAAC8IAlAAIAAAvgAqxB2IAAjrIBoAAIAAAvIgrAAIAAAtIAmAAIAAAsIgmAAIAABjg");
	this.shape.setTransform(76.4,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(7.4,8.1,138.1,24.7), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,0,0,0.557)").s().p("AjlD9QgagagTgcIHXncQAeAUAbAbIAVAXIncHlQgOgMgOgNg");
	this.shape.setTransform(27.5,27.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,55,55.6), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/DRIgTAAQgcgEgUgOIgMgJQgagVABguQANg7A8gOQASgEASADIAAiRIAAhoIABAAIATAKIAGADQA1ATAzAXQAzAWAcAsQALARAEAXQAHAngQAZQgKgRgLgNQgLgOgOgLQgpgfgvgbQgBAeAAAgIAACRQAAASgEAPQgQA4hAAJIAAAAIgBAAg");
	this.shape.setTransform(16.8,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,33.6,41.8), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(0,19.8,0.65,0.65,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,356.1,149.6), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.numeroboton = new cjs.Text("", "41px 'Arial'", "#999999");
	this.numeroboton.name = "numeroboton";
	this.numeroboton.textAlign = "center";
	this.numeroboton.lineHeight = 48;
	this.numeroboton.lineWidth = 60;
	this.numeroboton.parent = this;
	this.numeroboton.setTransform(-0.7,-22.3);

	this.instance = new lib.Bitmap10();
	this.instance.parent = this;
	this.instance.setTransform(-41,-41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.numeroboton}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-41,-41,82,82), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-235,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-235,-25,470,50), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-699,-401);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-699,-401,1399,802), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AhsPEQgxgVgegnQgdgogGgwQgFguAAh1IAAiCQAAhyAFgwQAFgwAdgnQAcgnAwgWQAxgVA/AAQA9AAAwAUQAxAUAdAoQAeAoAFAuQAGAwAAB1IAACCQAABygFAvQgGAwgcAoQgcAngxAVQgwAVhAAAQg8AAgwgTgAgWFNQgIALAAA7IAAFjQAABCAFAPQAGAPATAAQATABAGgTQAGgRAAhDIAAldQAAg1gGgOQgGgPgSgBQgPAAgIANgAAvjfIhmlZIAAFZIilAAIAAr3IClAAIBuFWIAAlWIClAAIAAL3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-22.8,-98.3,45.7,196.6), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("EBTAAmOQhagwgahJQgchJAAiHIAAhPIEiAAIAACSQAABEAMATQAMATAfAAQAfAAAPgYQAPgZABgwQAAhqgdggQgeghh1hMQhzhNgngjQglgjgZg9QgYg+AAhfQgBiKAkhAQAjg/BOgkQBOgkBvAAQB6AABWAnQBVAnAcA8QAbA8ABCOIAAAwIkiAAIAAhZQAAg+gLgRQgLgRgaAAQgcAAgOAXQgPAXAAAuQAAA8ARAfQAPAeBJArQDPB8A3BPQA2BPAACwQgBCAgdA9QgeA9hWApQhWAphyAAQh9AAhYgvgEhZTAmOQhZgwgbhJQgchJAAiHIAAhPIEiAAIAACSQAABEAMATQANATAfAAQAeAAAQgYQAPgZAAgwQAAhqgdggQgeghh0hMQh0hNgmgjQglgjgZg9QgZg+AAhfQAAiKAjhAQAjg/BPgkQBOgkBvAAQB6AABVAnQBVAnAdA8QAbA8AACOIAAAwIkiAAIAAhZQAAg+gLgRQgLgRgaAAQgbAAgPAXQgPAXABAuQAAA8AQAfQAQAeBIArQDQB8A2BPQA2BPAACwQAACAgeA9QgeA9hWApQhWAphyAAQh9AAhYgvgEBSMAJLIAAyuIIJAAIAADwIjQAAIAADjIDCAAIAADjIjCAAIAAEIIDkAAIAADwgEhaGAJLIAAyuIIIAAIAADwIjQAAIAADjIDCAAIAADjIjCAAIAAEIIDlAAIAADwgEBT2gUNIAAmyIjcr9IEeAAQBDFfAJB5QAai/A9kZIEeAAIjjL9IAAGygEhYdgUNIAAmyIjcr9IEfAAQBDFfAIB5QAai/A+kZIEeAAIjkL9IAAGyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-588.1,-249.3,1176.3,498.6), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AjHFzQgrgOgYgbQgYgcgLgoQgKgoAAhPIAAieQAAhXATgxQASgwAxgeQAxgeBMAAQBAAAAtAUQAtASAZAfQAZAeAJAhQAJAgAABCIAACYQAABTgIAoQgJAngcAiQgbAigrAQQgrAQg4AAQg/AAgsgOgAh0iIQgGAMAAAwIAAEYQAAAsAGAOQAGANAQAAQARAAAFgMQAGgNAAgoIAAkeQAAgwgGgMQgFgMgRAAQgQAAgGAMgAJ0F2IAAiYICxAAIAACYgAFxF2IAAiYICxAAIAACYgAooF2IhnlZIAAFZIilAAIAAr2IClAAIBvFWIAAlWIClAAIAAL2gAKDC6Igeo6IDQAAIgfI6gAGAC6Igeo6IDQAAIgfI6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-82,-38.5,164.1,77.1), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjiD5IgBgBQgJgBgBgJQgCgwAAgyIABiLIABAAIAAgBIAAAAQADgGAHgCIAAAAIAAgBIBrABIAAAAQAJACABAIIABABIABCKIgBBhIgBAAQgCAJgIACIg2AAIg0AAgAg+DVIgBAAQgKgDgBgMQgBgRAAgTIAAiLIABAAIAAgBIAAgJQAHg9AdgpQAdgoAigjQAFgEADgHIAAgBIAAgKIABAAIAAgBIAAgMIAAgBIAAgMIAAAAIAAgBIAAgOQAHgZAfAFQAFABAFADQAaAUABAtQABAFgBAHIAAAAQAAAIgBAHQgKAsgUAiQABAKAMgBQAggBAgAAIAAgBIAXAAIABAAIAYAAIAAAAIAHAAIAAABQAdAEABAhQAAAggZAJIAPAMQAMALgDAWQgBALgHAFQgJAIgLAFIAMAMQAGAHAAALQABAegYAGQAJAIADAPIAAAAQACAEgBAGIgBAAQgDAagdABIiLAAIAAAAIgbABIgBAAIgUAAIg9gBg");
	this.shape.setTransform(-0.2,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AAXHHIgIAAIgBAAIgHAAIgBAAIgIAAIgBAAIgLAAIgBAAIgHAAIAAAAIgIAAIgdgDQg+gIgwgVQgygUgogdQgqgcghgkQgigkgZgsQgagsgQg1QgRg0gChDIAAAAIAAgVIAAgBIAAgFIAAgBIAAgJQAEhBARg0QASg0AagrQAbgrAhgjQAigkApgcQAkgYApgRIAOgHQAPgFAQgFQAmgMAsgFIAZgCIAHAAIAAAAIAJAAIABAAIAQAAIAAAAIAMAAIABAAQABABAEgBIACAAQBAAFA0ARQA0ASArAaQAqAbAkAiQAjAiAcAqQAbApAUAzQASAzAIA9IABAJIAAAGIABAAIAAAHIAAAAIAAAHIAAAAIAAAIIAAABIAAATIAAABIAAAKIAAABIAAAAIAAAGIAAABIgBAPQgHBAgTAyQgUAygbAqQgcAqgiAjQgkAhgrAcQgqAag0ATQgzARhAAFIgBAAIgGAAIAAAAIgBAAgAjwBiQAAAyABAwQABAJAJABIABABQA0ABA2gBQAJgCABgJIABAAIABhhIgBiJIgBgBQgBgJgJgBIAAgBIhrAAIAAABIAAAAQgHACgDAGIAAABIAAAAIgBAAIAACKgAhNB4QAAATABASQABAMAKACIABAAQApABAoAAIABAAIAbAAIAAgBICLAAQAeAAADgbIAAAAQABgGgBgEIAAAAQgEgPgJgHQAYgHAAgeQgBgKgGgHIgLgMQAKgFAJgJQAHgFACgLQACgVgMgKIgPgNQAZgJAAghQgBghgdgEIAAgBIgGAAIgBAAIgYAAIgBAAIgXAAIAAABQggAAggACQgMAAgBgKQAUgiAKgsQACgHgBgIIAAAAQACgHgCgFQgBgtgagUQgEgDgGgBQgegFgIAaIAAANIAAABIAAAAIAAANIAAABIAAALIAAABIgBAAIAAAKIAAABQgDAHgFAFQghAigeApQgcAogIA+IAAAJIAAABIAAAAIgBCKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-45.5,-45.5,91.1,91.1), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AAXHHIgIAAIgBAAIgHAAIgBAAIgIAAIgBAAIgLAAIgBAAIgHAAIAAAAIgIAAIgdgDQg+gIgwgVQgygUgogdQgqgcghgkQgigkgZgsQgagsgQg1QgRg0gChDIAAAAIAAgVIAAgBIAAgFIAAgBIAAgJQAEhBARg0QASg0AagrQAbgrAhgjQAigkApgcQAkgYApgRIAOgHQAPgFAQgFQAmgMAsgFIAZgCIAHAAIAAAAIAJAAIABAAIAQAAIAAAAIAMAAIABAAQABABAEgBIACAAQBAAFA0ARQA0ASArAaQAqAbAkAiQAjAiAcAqQAbApAUAzQASAzAIA9IABAJIAAAGIABAAIAAAHIAAAAIAAAHIAAAAIAAAIIAAABIAAATIAAABIAAAKIAAABIAAAAIAAAGIAAABIgBAPQgHBAgTAyQgUAygbAqQgcAqgiAjQgkAhgrAcQgqAag0ATQgzARhAAFIgBAAIgGAAIAAAAIgBAAgAjwBiQAAAyABAwQABAJAJABIABABQA0ABA2gBQAJgCABgJIABAAIABhhIgBiJIgBgBQgBgJgJgBIAAgBIhrAAIAAABIAAAAQgHACgDAGIAAABIAAAAIgBAAIAACKgAhNB4QAAATABASQABAMAKACIABAAQApABAoAAIABAAIAbAAIAAgBICLAAQAeAAADgbIAAAAQABgGgBgEIAAAAQgEgPgJgHQAYgHAAgeQgBgKgGgHIgLgMQAKgFAJgJQAHgFACgLQACgVgMgKIgPgNQAZgJAAghQgBghgdgEIAAgBIgGAAIgBAAIgYAAIgBAAIgXAAIAAABQggAAggACQgMAAgBgKQAUgiAKgsQACgHgBgIIAAAAQACgHgCgFQgBgtgagUQgEgDgGgBQgegFgIAaIAAANIAAABIAAAAIAAANIAAABIAAALIAAABIgBAAIAAAKIAAABQgDAHgFAFQghAigeApQgcAogIA+IAAAJIAAABIAAAAIgBCKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjiD5IgBgBQgJgBgBgJQgCgwAAgyIABiLIABAAIAAgBIAAAAQADgGAHgCIAAAAIAAgBIBrABIAAAAQAJACABAIIABABIABCKIgBBhIgBAAQgCAJgIACIg2AAIg0AAgAg+DVIgBAAQgKgDgBgMQgBgRAAgTIAAiLIABAAIAAgBIAAgJQAHg9AdgpQAdgoAigjQAFgEADgHIAAgBIAAgKIABAAIAAgBIAAgMIAAgBIAAgMIAAAAIAAgBIAAgOQAHgZAfAFQAFABAFADQAaAUABAtQABAFgBAHIAAAAQAAAIgBAHQgKAsgUAiQABAKAMgBQAggBAgAAIAAgBIAXAAIABAAIAYAAIAAAAIAHAAIAAABQAdAEABAhQAAAggZAJIAPAMQAMALgDAWQgBALgHAFQgJAIgLAFIAMAMQAGAHAAALQABAegYAGQAJAIADAPIAAAAQACAEgBAGIgBAAQgDAagdABIiLAAIAAAAIgbABIgBAAIgUAAIg9gBg");
	this.shape_1.setTransform(-0.2,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-45.5,-45.5,91.1,91.1), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("AiJCXIAAktIETAA");
	this.shape.setTransform(13.8,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-6,-6,39.6,42.1), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.etiketa = new cjs.Text(" ", "93px 'Impact'", "#FFFFFF");
	this.etiketa.name = "etiketa";
	this.etiketa.textAlign = "center";
	this.etiketa.lineHeight = 115;
	this.etiketa.lineWidth = 164;
	this.etiketa.parent = this;
	this.etiketa.setTransform(0,-55.5,1.246,1.246);

	this.timeline.addTween(cjs.Tween.get(this.etiketa).wait(1));

	// Layer 2
	this.instance = new lib.logojpgcopy2();
	this.instance.parent = this;
	this.instance.setTransform(-110,-71,1.183,1.329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-110,-71,220.1,159.3), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("AiaiWIE1AAIAAEt");
	this.shape.setTransform(15.5,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-6,-6,43.1,42.1), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(17.6,1,1).p("AkXhgQATggAcgcQBYhYB8AAQB8AABYBYQBYBYAAB7QAAB9hYBXQhYBYh8AAQhxAAhThJAkXhgID0BXAkXhgIAAkC");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-36.7,-44.2,73.4,88.6), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,0,0,0.988)").s().p("EghDALjIAA3FMBCHAAAIAAXFg");
	this.shape.setTransform(3.2,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-208.4,-74.7,423.2,147.8), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(17.6,1,1).p("AAWjVIDWDVIjWDWAjrAAIHXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-32.4,-30.2,64.9,60.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(17.7,1,1).p("AD4mrID1AAIAADYAHtDcIAADQIj1AAAnsjTIAAjYIDgAAAkMGsIjgAAIAAjQ");
	this.shape.setTransform(49.3,42.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.557)").s().p("AoXJ6Qi9AAAAi9IAAt5QAAi9C9AAIQvAAQC9AAAAC9IAAN5QAAC9i9AAg");
	this.shape_1.setTransform(48,42.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-24.5,-20.5,145.1,126.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8.4,1,1).p("AjsC0QgBgGAAgFQAAiQBmhmQBmhmCPAAQCQAABmBmQAEAEADAEAjsC0IDIiAAjsC0Ih+iu");
	this.shape.setTransform(-4.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-45.3,-22.1,81.1,44.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmMGNQhghhgoh3QgchWAAhfQAAjnCkilQClikDnAAQDoAAClCkQCjCjABDnIAAACQAADoikClQilCkjoAAQjnAAilikg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-56.1,-56.1,112.2,112.2), null);


(lib.Symbol12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("ACKClIkTAAIAAlJ");
	this.shape.setTransform(13.8,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12_1, new cjs.Rectangle(-6,-6,39.6,45), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("ACbikIAAFJIk1AA");
	this.shape.setTransform(15.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-6,-6,43.1,45), null);


(lib.Tween2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(324.6,266.4,1.33,1.33,-2.8,0,0,0.2,-0.2);

	this.instance_1 = new lib.Symbol23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(500.8,-58.1,2.11,2.11,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.Symbol23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-573.7,-58.1,2.11,2.11,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.Symbol21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-391.5,263.4,1.33,1.33,1.2,0,0,0.2,-0.2);

	this.instance_4 = new lib.Bitmap1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-776,218,1,0.378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-776,-265.3,1552,588.4);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(363,292.2,0.738,0.738,0,0,0,178,74.8);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 0, 0, 0)];
	this.instance.cache(-2,-2,360,154);

	this.instance_1 = new lib.Symbol34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-382.9,292.2,0.738,0.738,0,0,0,178,74.8);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 0, 0, 0)];
	this.instance_1.cache(-2,-2,360,154);

	this.instance_2 = new lib.Symbol22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-11,-44.9);

	this.instance_3 = new lib.Bitmap1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-776,237,1,0.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-776,-294.2,1552,641.6);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(33,33.2,1,1,0,0,0,27.4,27.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/DRIgTAAQgcgEgUgNIgMgKIgDgCQgXgVABgsQANg8A8gNQASgDASACIAAhjIAAgtIAAhpIABAAIATAKIAGADIBOAeIAaALQAmARAaAeQAIAKAHALQALAQAEAXQAHAngQAYQgKgPgLgNQgLgPgOgLIgZgSQgegWghgSQgBAeAAAgIAAAqIAABnQAAATgEAOQgQA4hAAJIAAAAIgBAAg");
	this.shape.setTransform(36.9,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.557)").s().p("AjVELQgOgLgNgOQgbgagSgcQg4hTAAhpQAAiMBlhlQBkhkCMAAQBoAABRA1QAeAUAbAbIAVAXQBPBdAAB9QAACNhkBlQhlBkiNAAQh5AAhchLgAhDAgQg7ANgNA8QgBAsAWAVIADACIANAKQATANAcAEIATAAIABAAIAAAAQBAgJARg4QADgOAAgTIAAhmIAAgrQAAggABgeQAiASAdAWIAaASQAOALALAPQAKAOAKAOQAQgYgHgnQgEgXgLgQQgHgLgHgKQgbgeglgRIgagLIhOgeIgHgDIgTgKIgBAAIAABpIAAAtIAABjIgPgBQgKAAgLACg");
	this.shape_1.setTransform(34.2,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,68.4,68.4), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol37();
	this.instance.parent = this;
	this.instance.setTransform(37,33.2,1,1,0,0,0,16.8,20.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.557)").s().p("AjwDyQhlhlAAiNQAAiMBlhlQBkhkCMAAQCNAABlBkQBkBlAACMQAACNhkBlQhlBkiNAAQiMAAhkhkg");
	this.shape.setTransform(34.2,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,68.4,68.4), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btmute.addEventListener("click", mute.bind(this));
		
		function mute()
		{
			$("#mimusica")[0].muted = true;
			this.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		this.btnomute.addEventListener("click", nomute.bind(this));
		
		function nomute()
		{
			$("#mimusica")[0].muted = false;
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.btmute = new lib.Symbol38();
	this.btmute.parent = this;
	this.btmute.setTransform(447.8,555.2,1,1,0,0,0,34.2,34.2);

	this.btnomute = new lib.Symbol40();
	this.btnomute.parent = this;
	this.btnomute.setTransform(447.8,555.2,1,1,0,0,0,34.2,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btmute}]}).to({state:[{t:this.btnomute}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(413.6,521,68.4,68.4);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.passserv.text = "46792";
		///////////////////////////////////////	
			
		this.cbt0.numeroboton.text = "0";
		this.cbt1.numeroboton.text = "1";
		this.cbt2.numeroboton.text = "2";
		this.cbt3.numeroboton.text = "3";
		this.cbt4.numeroboton.text = "4";
		this.cbt5.numeroboton.text = "5";
		this.cbt6.numeroboton.text = "6";
		this.cbt7.numeroboton.text = "7";
		this.cbt8.numeroboton.text = "8";
		this.cbt9.numeroboton.text = "9";
		this.listo.numeroboton.text = "Ok";
		this.borrar.numeroboton.text = "X";
		
		this.stop();
		
		///////////////////////////////////////////////
		
		this.listo.addEventListener("click", listo.bind(this));
		
		function listo()
		{
		
		if (this.mipass.text == this.passserv.text)
			this.play();
			
		}
		
		
		
		this.borrar.addEventListener("click", borrar.bind(this));
		
		function borrar()
		{
		
				this.mipass.text = "";
				this.mipassxx.text = "";
			
		}
		
		
		
		this.cbt0.addEventListener("click", pass0.bind(this));
		
		function pass0()
		{
		
				this.mipass.text = this.mipass.text + "0";
				this.mipassxx.text = this.mipassxx.text + "x";
		}
		
		
		
		
		this.cbt1.addEventListener("click", pass1.bind(this));
		
		function pass1()
		{
		
				this.mipass.text = this.mipass.text + "1";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		this.cbt2.addEventListener("click", pass2.bind(this));
		
		function pass2()
		{
		
				this.mipass.text = this.mipass.text + "2";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		this.cbt3.addEventListener("click", pass3.bind(this));
		
		function pass3()
		{
		
				this.mipass.text = this.mipass.text + "3";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		this.cbt4.addEventListener("click", pass4.bind(this));
		
		function pass4()
		{
		
				this.mipass.text = this.mipass.text + "4";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		
		this.cbt5.addEventListener("click", pass5.bind(this));
		
		function pass5()
		{
		
				this.mipass.text = this.mipass.text + "5";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		
		this.cbt6.addEventListener("click", pass6.bind(this));
		
		function pass6()
		{
		
				this.mipass.text = this.mipass.text + "6";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		
		this.cbt7.addEventListener("click", pass7.bind(this));
		
		function pass7()
		{
		
				this.mipass.text = this.mipass.text + "7";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		this.cbt8.addEventListener("click", pass8.bind(this));
		
		function pass8()
		{
		
				this.mipass.text = this.mipass.text + "8";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
		
		
		this.cbt9.addEventListener("click", pass9.bind(this));
		
		function pass9()
		{
		
				this.mipass.text = this.mipass.text + "9";
				this.mipassxx.text = this.mipassxx.text + "x";
			
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(353,248);

	this.instance_1 = new lib.Bitmap11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-92,-273);

	this.mipass = new cjs.Text("", "41px 'Arial'", "#FFFFFF");
	this.mipass.name = "mipass";
	this.mipass.textAlign = "center";
	this.mipass.lineHeight = 48;
	this.mipass.lineWidth = 444;
	this.mipass.parent = this;
	this.mipass.setTransform(-889.2,-474.8);

	this.passserv = new cjs.Text("", "41px 'Arial'", "#FFFFFF");
	this.passserv.name = "passserv";
	this.passserv.textAlign = "center";
	this.passserv.lineHeight = 48;
	this.passserv.lineWidth = 444;
	this.passserv.parent = this;
	this.passserv.setTransform(-889.2,-541.8);

	this.borrar = new lib.Symbol30();
	this.borrar.parent = this;
	this.borrar.setTransform(69.4,215.3);

	this.listo = new lib.Symbol30();
	this.listo.parent = this;
	this.listo.setTransform(-21.4,215.3);

	this.cbt0 = new lib.Symbol30();
	this.cbt0.parent = this;
	this.cbt0.setTransform(-112.9,215.3);

	this.cbt3 = new lib.Symbol30();
	this.cbt3.parent = this;
	this.cbt3.setTransform(69.4,121.6);

	this.cbt2 = new lib.Symbol30();
	this.cbt2.parent = this;
	this.cbt2.setTransform(-21.4,121.6);

	this.cbt1 = new lib.Symbol30();
	this.cbt1.parent = this;
	this.cbt1.setTransform(-112.9,121.6);

	this.cbt6 = new lib.Symbol30();
	this.cbt6.parent = this;
	this.cbt6.setTransform(69.4,27.7);

	this.cbt5 = new lib.Symbol30();
	this.cbt5.parent = this;
	this.cbt5.setTransform(-21.4,27.7);

	this.cbt4 = new lib.Symbol30();
	this.cbt4.parent = this;
	this.cbt4.setTransform(-112.9,27.7);

	this.cbt9 = new lib.Symbol30();
	this.cbt9.parent = this;
	this.cbt9.setTransform(69.4,-66.1);

	this.cbt8 = new lib.Symbol30();
	this.cbt8.parent = this;
	this.cbt8.setTransform(-21.4,-66.1);

	this.cbt7 = new lib.Symbol30();
	this.cbt7.parent = this;
	this.cbt7.setTransform(-112.9,-66.1);

	this.mipassxx = new cjs.Text("", "41px 'Arial'", "#FFFFFF");
	this.mipassxx.name = "mipassxx";
	this.mipassxx.textAlign = "center";
	this.mipassxx.lineHeight = 48;
	this.mipassxx.lineWidth = 444;
	this.mipassxx.parent = this;
	this.mipassxx.setTransform(-7.6,-198.4);

	this.instance_2 = new lib.Symbol29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.4,-175.6);
	this.instance_2.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.mipassxx},{t:this.cbt7},{t:this.cbt8},{t:this.cbt9},{t:this.cbt4},{t:this.cbt5},{t:this.cbt6},{t:this.cbt1},{t:this.cbt2},{t:this.cbt3},{t:this.cbt0},{t:this.listo},{t:this.borrar},{t:this.passserv},{t:this.mipass},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(3));

	// Layer 2
	this.instance_3 = new lib.Symbol27();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0.898;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1113,-543.8,1813,944.8);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-9.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.129},28).to({alpha:1},31).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-273,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273,-40,523,141);


(lib.Symbol14copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btplay.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.play();
		}
	}
	this.frame_1 = function() {
		playSound("CORNETAPERDIO");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(130));

	// Layer 2
	this.btplay = new lib.Symbol20();
	this.btplay.parent = this;
	this.btplay.setTransform(-48.6,26,1,1,180);

	this.instance = new lib.Tween2copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-568.4,-251.1,0.022,0.022);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btplay}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},104).to({state:[{t:this.instance}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.11,scaleY:1.11,x:-568.3,y:-250.9},6).to({scaleX:0.94,scaleY:0.94,y:-251},3).to({scaleX:1.06,scaleY:1.06},3).to({regX:-0.1,regY:-0.1,scaleX:0.98,scaleY:0.98,x:-568.4,y:-251.1},3).to({regX:0,regY:0,scaleX:1.06,scaleY:1.06,x:-568.3,y:-251},4).to({startPosition:0},104).to({scaleX:0.02,scaleY:0.02,x:-568.4,y:-251.1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.1,-19.6,91.1,91.1);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btplay.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		this.play();
		}
	}
	this.frame_1 = function() {
		playSound("CORNETAUNAVEZ");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(102));

	// Layer 1
	this.btplay = new lib.Symbol19();
	this.btplay.parent = this;
	this.btplay.setTransform(-48.6,26);

	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(539,-268.5,0.017,0.017);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btplay}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},76).to({state:[{t:this.instance}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.09,scaleY:1.09},6).to({regX:0.1,scaleX:0.91,scaleY:0.81,x:539.1},3).to({regX:0,scaleX:1.02,scaleY:1.02,x:539},3).to({scaleX:0.97,scaleY:0.97},3).to({scaleX:1.02,scaleY:1.02},4).to({startPosition:0},76).to({scaleX:0.02,scaleY:0.02},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.1,-19.6,91.1,91.1);


(lib.Symbol11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(0.6,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#990000","#EBA9A9"],[0,1],-0.8,-17.6,6.6,24).s().p("AlIByQhNhNgfheQF5kSHwB/IAAACQAAC6iDCCQiDCEi5AAQi6AAiEiEg");
	this.shape_1.setTransform(1.1,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("Am/CYQAAi5CCiEQCEiCC5AAQC6AACDCCQCDCDAAC3Qnvh/l6ETQgWhEAAhNg");
	this.shape_2.setTransform(0,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11_1, new cjs.Rectangle(-56.1,-56.1,112.2,112.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(2.1,-0.3,0.769,0.769);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#004C92","#04C0EE"],[0,1],-0.8,-17.6,6.6,24).s().p("AlIByQhNhNgfheQF5kSHwB/IAAACQAAC6iDCCQiDCEi5AAQi6AAiEiEg");
	this.shape.setTransform(1.1,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85A9CB").s().p("Am/CYQAAi5CCiEQCEiCC5AAQC6AACDCCQCDCDAAC3Qnvh/l6ETQgWhEAAhNg");
	this.shape_1.setTransform(0,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-56.1,-56.1,112.2,112.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(5.9,18,1,1,180);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.9,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.557)").s().p("AmiGjQitiuAAj1QAAj0CtitQCuiuD0AAQD1AACtCuQCuCtAAD0QAAD1iuCuQitCtj1AAQj0AAiuitg");
	this.shape.setTransform(0.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-58.8,-58.5,118.4,118.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{resetear:9,ini:0,ini2:1});

	// timeline functions:
	this.frame_0 = function() {
		this.mivar.text = "2";
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
		
		
		if (this.mivar.text == "2")
			$("#movieClip_3")[0].src = "data/"+ this.miruta.text +".mp4";
			$("#mimusica")[0].pause();
			
		
		this.btre.addEventListener("click", hacer2.bind(this));
		
		function hacer2()
		{
			$("#movieClip_3")[0].src = "data/"+ this.miruta.text +".mp4";
		}
		
		
		this.btnext.addEventListener("click", hacer3.bind(this));
		
		function hacer3()
		{
			this.play();
		}
	}
	this.frame_7 = function() {
		this.stop();
		this.miruta.text = this.miruta2.text;
		
		if (this.mivar.text == "2")
			$("#movieClip_3")[0].src = "data/"+ this.miruta2.text +".mp4";
	}
	this.frame_10 = function() {
		if (this.mivar.text == "2")
			$("#movieClip_3")[0].pause();
			$("#mimusica")[0].play();
	}
	this.frame_11 = function() {
		this.gotoAndPlay("ini");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(5).call(this.frame_6).wait(1).call(this.frame_7).wait(3).call(this.frame_10).wait(1).call(this.frame_11).wait(1));

	// Layer 4
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(-382.6,-676.4,1,1,0,0,0,57.6,42);

	this.mimusica = new lib.an_Video({'id': 'mimusica', 'src':'videos/msuica.mp4', 'autoplay':true, 'controls':false, 'loop':true, 'preload':false, 'class':'musica'});

	this.mimusica.setTransform(-252.4,-441.4,0.638,0.478,0,0,0,200,149.9);

	this.miruta2 = new cjs.Text("", "48px 'Arial'");
	this.miruta2.name = "miruta2";
	this.miruta2.textAlign = "center";
	this.miruta2.lineHeight = 56;
	this.miruta2.lineWidth = 81;
	this.miruta2.parent = this;
	this.miruta2.setTransform(1066.4,650.3);

	this.miruta = new cjs.Text("", "48px 'Arial'");
	this.miruta.name = "miruta";
	this.miruta.textAlign = "center";
	this.miruta.lineHeight = 56;
	this.miruta.lineWidth = 97;
	this.miruta.parent = this;
	this.miruta.setTransform(961.8,650.3);

	this.mivar = new cjs.Text("", "48px 'Arial'");
	this.mivar.name = "mivar";
	this.mivar.textAlign = "center";
	this.mivar.lineHeight = 56;
	this.mivar.lineWidth = 89;
	this.mivar.parent = this;
	this.mivar.setTransform(851.3,650.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mivar},{t:this.miruta},{t:this.miruta2},{t:this.mimusica},{t:this.instance}]}).wait(12));

	// Layer 8
	this.movieClip_3 = new lib.an_Video({'id': 'movieClip_3', 'src':'videos/', 'autoplay':true, 'controls':false, 'loop':false, 'preload':false, 'class':'video'});

	this.movieClip_3.setTransform(14.3,-797.3,2.446,1.886,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(5).to({y:-177.3},1).wait(4).to({y:-812.8},1).wait(1));

	// Layer 7
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(500.6,105);

	this.btnext = new lib.Symbol11_1();
	this.btnext.parent = this;
	this.btnext.setTransform(671.3,448.2);

	this.btre = new lib.Symbol9();
	this.btre.parent = this;
	this.btre.setTransform(320.2,448.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btre},{t:this.btnext},{t:this.instance_1}]},6).to({state:[]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380.4,-798,1489.2,1503.9);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(120.2,16.8,1.658,1.658,0,0,0,75.9,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(6.5,-0.3,228.9,41), null);


(lib.Symbol8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1_1();
	this.instance.parent = this;
	this.instance.setTransform(152,47.4,0.899,0.899,0,0,0,122.4,19.8);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(5,-2,233,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Symbol 13
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.8,15.1,1,1,0,0,0,13.8,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-17.7,y:-16.4},24,cjs.Ease.get(1)).to({x:13.8,y:15.1},25,cjs.Ease.get(-1)).wait(1));

	// Symbol 12
	this.instance_2 = new lib.Symbol12_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13.8,80.1,1,1,0,0,0,13.8,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-17.7,y:111.6},24,cjs.Ease.get(1)).to({x:13.8,y:80.1},25,cjs.Ease.get(-1)).wait(1));

	// Symbol 11
	this.instance_3 = new lib.Symbol11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(295.8,80.1,1,1,0,0,0,15.5,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:327.3,y:111.6},24,cjs.Ease.get(1)).to({x:295.8,y:80.1},25,cjs.Ease.get(-1)).wait(1));

	// Symbol 10
	this.instance_4 = new lib.Symbol10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(295.8,15.1,1,1,0,0,0,15.5,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:327.3,y:-16.4},24,cjs.Ease.get(1)).to({x:295.8,y:15.1},25,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(154.1,48.5,0.697,0.544,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,323.3,108.7);


// stage content:
(lib.Adivinaelcantantante = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.fsbtn.addEventListener("click", toggleFullscreen.bind(this));
		
		function toggleFullscreen(event) {
				
		    var element = document.body;
		
		    if (event instanceof HTMLElement) {
		        element = event;
		    }
		
		    var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;
		
		    element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen ||           element.mozRequestFullScreen || function () {
		        return false;
		    };
		    document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen ||           document.mozCancelFullScreen || function () {
		        return false;
		    };
		
		    isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
				this.play();
				//this.fsbtn.gotoAndPlay("estatico");
		}
	}
	this.frame_1 = function() {
		this.stop();
		this.bt1.etiketa.text = "1";
		this.bt2.etiketa.text = "2";
		this.bt3.etiketa.text = "3";
		this.bt4.etiketa.text = "4";
		this.bt5.etiketa.text = "5";
		this.bt6.etiketa.text = "6";
		this.bt7.etiketa.text = "7";
		this.bt8.etiketa.text = "8";
		this.bt9.etiketa.text = "9";
		this.bt10.etiketa.text = "10";
		this.btfull.addEventListener("click", toggleFullscreen2.bind(this));
		
		function toggleFullscreen2(event) {
				
		    var element = document.body;
		
		    if (event instanceof HTMLElement) {
		        element = event;
		    }
		
		    var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;
		
		    element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen ||           element.mozRequestFullScreen || function () {
		        return false;
		    };
		    document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen ||           document.mozCancelFullScreen || function () {
		        return false;
		    };
		
		    isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
		
		}
		
		
		
		this.reini.addEventListener("click", reini.bind(this));
		
		function reini()
		{
		this.bt1.visible = true;
		this.bt2.visible = true;
		this.bt3.visible = true;
		this.bt4.visible = true;
		this.bt5.visible = true;
		this.bt6.visible = true;
		this.bt7.visible = true;
		this.bt8.visible = true;
		this.bt9.visible = true;
		this.bt10.visible = true;
		this.movies.gotoAndPlay("resetear");
		}
		
		
		
		
		
		this.bt1.addEventListener("click", hacer_1.bind(this));
		
		function hacer_1()
		{
		
		this.movies.miruta.text = "1a";
		this.movies.miruta2.text = "1b";	
		this.movies.play();
		
		this.bt1.visible = false;	
		}
		
		
		this.bt2.addEventListener("click", hacer_2x.bind(this));
		
		function hacer_2x()
		{
		
		this.movies.miruta.text = "2a";
		this.movies.miruta2.text = "2b";	
		this.movies.play();
		
		this.bt2.visible = false;	
		}
		
		
		this.bt3.addEventListener("click", hacer_3x.bind(this));
		
		function hacer_3x()
		{
		
		this.movies.miruta.text = "3a";
		this.movies.miruta2.text = "3b";	
		this.movies.play();
		
		this.bt3.visible = false;	
		}
		
		
		this.bt4.addEventListener("click", hacer_4x.bind(this));
		
		function hacer_4x()
		{
		
		this.movies.miruta.text = "4a";
		this.movies.miruta2.text = "4b";	
		this.movies.play();
		
		this.bt4.visible = false;	
		}
		
		
		this.bt5.addEventListener("click", hacer_5x.bind(this));
		
		function hacer_5x()
		{
		
		this.movies.miruta.text = "5a";
		this.movies.miruta2.text = "5b";	
		this.movies.play();
		
		this.bt5.visible = false;	
		}
		
		
		this.bt6.addEventListener("click", hacer_6x.bind(this));
		
		function hacer_6x()
		{
		
		this.movies.miruta.text = "6a";
		this.movies.miruta2.text = "6b";	
		this.movies.play();
		
		this.bt6.visible = false;	
		}
		
		
		this.bt7.addEventListener("click", hacer_7x.bind(this));
		
		function hacer_7x()
		{
		
		this.movies.miruta.text = "7a";
		this.movies.miruta2.text = "7b";	
		this.movies.play();
		
		this.bt7.visible = false;	
		}
		
		
		this.bt8.addEventListener("click", hacer_8x.bind(this));
		
		function hacer_8x()
		{
		
		this.movies.miruta.text = "8a";
		this.movies.miruta2.text = "8b";	
		this.movies.play();
		
		this.bt8.visible = false;	
		}
		
		
		this.bt9.addEventListener("click", hacer_9x.bind(this));
		
		function hacer_9x()
		{
		
		this.movies.miruta.text = "9a";
		this.movies.miruta2.text = "9b";	
		this.movies.play();
		
		this.bt9.visible = false;	
		}
		
		
		this.bt10.addEventListener("click", hacer_10x.bind(this));
		
		function hacer_10x()
		{
		
		this.movies.miruta.text = "10a";
		this.movies.miruta2.text = "10b";	
		this.movies.play();
		
		this.bt10.visible = false;	
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(644.8,349.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 2
	this.movies = new lib.Symbol2();
	this.movies.parent = this;
	this.movies.setTransform(145,206.2,1,1,0,0,0,-0.1,0);
	this.movies._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movies).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.fsbtn = new lib.Symbol8_1();
	this.fsbtn.parent = this;
	this.fsbtn.setTransform(632.5,336.8,1,1,0,0,0,155.7,48.3);

	this.instance_1 = new lib.Symbol14copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1256.9,629.3);

	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(122.7,629.3);

	this.btfull = new lib.Symbol5();
	this.btfull.parent = this;
	this.btfull.setTransform(1231.1,46.4,0.6,0.6,0,0,0,49.2,42.7);

	this.reini = new lib.Symbol4();
	this.reini.parent = this;
	this.reini.setTransform(43.3,42.8,0.578,0.578);

	this.bt10 = new lib.Symbol12();
	this.bt10.parent = this;
	this.bt10.setTransform(1112.5,434,1,1,0,0,0,-0.3,0);

	this.bt9 = new lib.Symbol12();
	this.bt9.parent = this;
	this.bt9.setTransform(873.7,434,1,1,0,0,0,-0.3,0);

	this.bt8 = new lib.Symbol12();
	this.bt8.parent = this;
	this.bt8.setTransform(635,434,1,1,0,0,0,-0.3,0);

	this.bt7 = new lib.Symbol12();
	this.bt7.parent = this;
	this.bt7.setTransform(396.2,434,1,1,0,0,0,-0.3,0);

	this.bt6 = new lib.Symbol12();
	this.bt6.parent = this;
	this.bt6.setTransform(157.8,434,1,1,0,0,0,-0.3,0);

	this.bt5 = new lib.Symbol12();
	this.bt5.parent = this;
	this.bt5.setTransform(1112.5,250.2,1,1,0,0,0,-0.3,0);

	this.bt4 = new lib.Symbol12();
	this.bt4.parent = this;
	this.bt4.setTransform(873.7,250.2,1,1,0,0,0,-0.3,0);

	this.bt3 = new lib.Symbol12();
	this.bt3.parent = this;
	this.bt3.setTransform(635,250.2,1,1,0,0,0,-0.3,0);

	this.bt2 = new lib.Symbol12();
	this.bt2.parent = this;
	this.bt2.setTransform(396.2,250.2,1,1,0,0,0,-0.3,0);

	this.bt1 = new lib.Symbol12();
	this.bt1.parent = this;
	this.bt1.setTransform(157.8,250.2,1,1,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fsbtn}]}).to({state:[{t:this.bt1},{t:this.bt2},{t:this.bt3},{t:this.bt4},{t:this.bt5},{t:this.bt6},{t:this.bt7},{t:this.bt8},{t:this.bt9},{t:this.bt10},{t:this.reini},{t:this.btfull},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.instance_3 = new lib.backgroundjpgcopy2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(171.8,165.9,1813,944.8);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Adivina el cantantante_atlas_.png?1594647925984", id:"Adivina el cantantante_atlas_"},
		{src:"sounds/CORNETAPERDIO.mp3?1594647926038", id:"CORNETAPERDIO"},
		{src:"sounds/CORNETAUNAVEZ.mp3?1594647926038", id:"CORNETAUNAVEZ"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1594647926038", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1594647926038", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1594647926038", id:"an.Video"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;