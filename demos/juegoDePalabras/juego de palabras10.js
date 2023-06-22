(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"juego de palabras10_atlas_1", frames: [[1401,636,82,82],[1401,720,164,40],[1401,566,206,68],[0,0,1399,802],[1401,514,470,50],[1401,0,512,512]]}
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



(lib.Bitmap10 = function() {
	this.initialize(ss["juego de palabras10_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.initialize(ss["juego de palabras10_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.initialize(ss["juego de palabras10_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["juego de palabras10_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["juego de palabras10_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap95 = function() {
	this.initialize(ss["juego de palabras10_atlas_1"]);
	this.gotoAndStop(5);
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


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol122 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A0pqEMApTAAAIAAUJMgpTAAAg");
	this.shape.setTransform(132.2,64.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#660099","#000B32"],[0,1],0,64.5,0,-64.5).s().p("A0pKFIAA0JMApTAAAIAAUJg");
	this.shape_1.setTransform(132.2,64.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6633CC").s().p("A1VIiIBf0GMApMADDIhfUGg");
	this.shape_2.setTransform(134.25,63.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol122, new cjs.Rectangle(-2.3,-10.5,273.2,148.1), null);


(lib.Symbol118 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A1170").s().p("EgMUAykQhvhvAAicQAAieBvhuQBvhvCdgBQCdABBvBvQBvBuAACeQAACchvBvQhvBwidAAQidAAhvhwgEBBLAqVQhEhFAAhhQAAhhBEhFQBFhFBhAAQBhAABFBFQBFBFAABhQAABhhFBFQhFBEhhAAQhhAAhFhEgEAkkATuIFMpAIJAFMIlNJAgEg96ARmQhvhvAAidQAAidBvhvQBvhvCdAAQCdAABvBvQBvBvAACdQAACdhvBvQhvBvidAAQidAAhvhvgEhTRgRrIL9m6IG5L9Ir9G6gAK4phQhvhuAAieQAAicBvhwQBvhvCdAAQCdAABvBvQBvBwAACcQAACehvBuQhvBvidAAQidAAhvhvgEBEKgTpQimimAAjrQAAjrCmimQCmimDrAAQDrAACmCmQCmCmAADrQAADrimCmQimCmjrAAQjrAAimimgEgrTgrTIFMo/IJAFMIlNI/g");
	this.shape.setTransform(648.175,353.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#831F9D","#1E0E4F"],[0,1],-102.1,-213,0,-102.1,-213,937.7).s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_1.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol118, new cjs.Rectangle(0,0,1280,720), null);


(lib.Symbol117 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9E5QgXgXgBgjQABgiAXgXQAXgWAjgBQAiABAXAXQAXAYABAiQgBAigXAXQgXAWgiABQgjgBgXgXgAhMCQIAAgMQAAg+AVglQAXgnAigjQAVgTAWgbQAWgbAAgSQAAgcgUgTQgTgUgcgBQgdABgSAUQgUATgBAcIiHAAQAAhUA8g8QA8g8BTAAQBUAAA8A8QA8A8AABUQAAAogSAaQgTAbgXAXIhCBDQgeAhAMA8g");
	this.shape.setTransform(18.4,31.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0099").s().p("Ag/FOQgjgFgTgZQgVgaAEgiQAFgiAagUQAagTAiADQAiAFATAaQAVAbgDAiQgGAigZATQgVAQgbAAIgMgBgAhvCGIABgLQAIg+AZgiQAcgkAogfQAWgQAZgYQAagYACgRQADgcgRgWQgRgWgcgEQgcgDgVARQgVARgFAcIiGgRQAKhUBDg0QBDg0BTALQBTAKA0BDQA0BDgKBUQgFAngWAYQgWAYgZATQgnAegjAdQgjAdAEA9g");
	this.shape_1.setTransform(22.1806,33.6216);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol117, new cjs.Rectangle(-2,-2,44.5,69.1), null);


(lib.Symbol115 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#200E51").s().p("AkQHJQi4AAAAi4IAAohQAAi4C4AAIIhAAQC4AAAAC4IAAIhQAAC4i4AAg");
	this.shape.setTransform(45.725,45.725);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.5,91.5);


(lib.Symbol114 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#210032").s().p("AkQHJQi4AAAAi4IAAohQAAi4C4AAIIhAAQC4AAAAC4IAAIhQAAC4i4AAg");
	this.shape.setTransform(45.725,45.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol114, new cjs.Rectangle(0,0,91.5,91.5), null);


(lib.Symbol109 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00CCFF").s().p("AnDKMQjIgBAAjHIAAuHQAAjIDIAAIOHAAQDHAAABDIIAAOHQgBDHjHABg");
	this.shape.setTransform(65.15,65.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol109, new cjs.Rectangle(0,0,130.3,130.3), null);


(lib.Symbol106 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag6CnIiOh8IgDgCIgIgLIAAgBQgGgKgBgLIgBgGIAAgCIABgIIANgfIAEgFIACgBIACgCICCh3QAUgRAZACQAYABARATQARATgBAZQAAAPgHAMQgEAGgFAFIgEAEIgPANICfAAQAZAAASASQASASAAAaQAAAPgHAOQgFAHgGAGQgSASgZAAIibAAIASAPQATARACAZQABATgJAPQgDAGgEAFQgRATgZABIgFAAQgWAAgRgPg");
	this.shape.setTransform(22,18.2294);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol106, new cjs.Rectangle(0,0,44,36.5), null);


(lib.Symbol105 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.557)").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBJhKBnAAQBoAABJBKQBJBKAABmQAABohJBJQhJBJhoABQhngBhJhJg");
	this.shape.setTransform(25.025,25.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol105, new cjs.Rectangle(0,0,50.1,50.1), null);


(lib.Symbol104 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CC33CC").s().p("ABRJ+QhYgFg7hCQg8hCAFhYQACg0AYgqQALgVASgTIAPgOIAyguIooAAQhaAAg/g/Qg+g/AAhZQAAg4AbgvQAOgZAVgWQA/g/BaAAIGjAAIB3AAIg8g0QhDg7gGhYQgEhBAfg2QALgTAPgRQA7hDBXgGQBYgGBDA6IHyGzIAHAIIAdAmIABACQAUAiAGAnIACAYIAAAIQAAAPgCAOIgvBsIgOAPIgGAGIgHAHIgOANIm7GRQg+A3hSAAIgLAAg");
	this.shape.setTransform(81.9,63.7848);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCFF00").s().p("ABlJlQhYgFg7hCQg8hCAFhYQAEhZBCg7IAGgGQgYAqgCA0QgFBYA7BCQA8BCBYAFQBZAEBCg7IG7mRIgJATIgOAPIgGAGIgHAHInJGeQg+A3hSAAIgLAAgAoVDCQhZAAg/g/Qg/g/AAhYQAAhYA/g/IAOgNQgbAvAAA5QAABYA/A/QA/A/BZAAIInAAIgyAuIgPAOgAhAkmQg6g5gFhSQgGhYA6hDQAMgNAMgLQgfA2AFBBQAGBYBCA7IA7A0g");
	this.shape_1.setTransform(74.875,72.2627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol104, new cjs.Rectangle(0,0,158.8,133.6), null);


(lib.Symbol99 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AxsRtQg2g2gvg3QhWhmhChvQjYlpAAnCQAAqXHVnVQHVnVKXAAQJeAAG7GGQArAmApApQAtAtApAvQF/G5AAJXQAAKYnVHVQnVHVqYAAQqXAAnVnVgAwPNdQAoAvAtAuQGMGLIuAAQIvAAGLmLQGLmLAAovQAAn5lDl0gAu6u6QmLGMAAIuQAAFlCiEiIf36eQlskunoAAQouAAmMGLg");
	this.shape.setTransform(203.225,114.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol99, new cjs.Rectangle(43,-45.5,320.5,320.4), null);


(lib.Symbol98 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap95();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol98, new cjs.Rectangle(0,0,512,512), null);


(lib.Symbol96 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#66FFCC").s().p("AMfOnQiFhHgvhqIgIgSQgsh3AAjbIAAh/IHVAAIAADtQAABtAVAfQASAfAzAAQAzAAAYgnQAZgoAAhOQAAiMgfg8QgHgOgJgKQgwg1i9h8Qi8h9g9g3Qg+g4gnhkQgohkAAiaQgBiaAchhQAMgsASggQA4hnCAg5QB+g7C1AAQDEAACMA/QCJBAAuBhQAtBggBDoIAABMInVAAIAAiPQABhlgTgcQgRgbgqAAQguAAgXAlQgYAlAABMQAABhAaAxQAPAcAuAkQAhAaAxAdQBAAlA1AjQDtCYBHBnQBXCBABEdQgBDQgvBiQgyBjiKBDQiMBCi4AAQjLAAiQhNgAmrPLIAA+VINJAAIAAGEIlRAAIAAFxIE7AAIAAFwIk7AAIAAGrIFzAAIAAGFgA1FPLIAAq/IlkzWIHRAAQBsI4AODFQAqk3BjnGIHQAAIlwTWIAAK/g");
	this.shape.setTransform(170.55,101.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol96, new cjs.Rectangle(0,0,341.1,202.5), null);


(lib.Symbol78 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ACUF4QgxgVgdgnQgegogFgvQgGgvAAh1IAAiBQAAhyAGgvQAEgxAdgnQAcgnAxgVQAwgWBAAAQA9AAAxAVQAwATAdApQAeAnAFAvQAHAvAAB1IAACBQgBBygFAwQgGAvgbAoQgdAngwAWQgxAUhAABQg9AAgwgUgADrj9QgJALAAA6IAAFiQAABCAGAQQAFAPATAAQAVAAAFgSQAGgRAAhEIAAlcQAAg0gGgPQgGgPgSAAQgPAAgIANgAjZF7IhnlYIAAFYIilAAIAAr1IClAAIBvFWIAAlWIClAAIAAL1g");
	this.shape.setTransform(48.55,39.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol78, new cjs.Rectangle(0,0,97.1,79.1), null);


(lib.Symbol77 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ACUF4QgxgVgdgnQgegogFgvQgGgvAAh1IAAiBQAAhyAGgvQAEgxAdgnQAcgnAxgVQAwgWBAAAQA9AAAxAVQAwATAdApQAeAnAFAvQAHAvAAB1IAACBQgBBygFAwQgGAvgbAoQgdAngwAWQgxAUhAABQg9AAgwgUgADrj9QgJALAAA6IAAFiQAABCAGAQQAFAPATAAQAVAAAFgSQAGgRAAhEIAAlcQAAg0gGgPQgGgPgSAAQgPAAgIANgAjZF7IhnlYIAAFYIilAAIAAr1IClAAIBvFWIAAlWIClAAIAAL1g");
	this.shape.setTransform(48.55,39.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol77, new cjs.Rectangle(0,0,97.1,79.1), null);


(lib.Symbol74 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAmFnIAHhPQglAwgcAOQgmAUgsgEQhYgIgnhXQgohXALh1QAMiDA7hAQA5hCBQAHQAmAEAeATQAeATAWAiIAXj9ICoAPIhDLagAhAgNQgWAbgHBFQgGBBASAgQARAgAeADQAgADAXgdQAYgdAGhEQAGg+gTggQgSghgggDIgFgBQgaAAgVAag");
	this.shape.setTransform(383.5052,66.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZEVQhWgIgvgiQgugjgbhDQgbhEAIhWQAMh8BIhHQBIhHByALQBdAJAzAnQAzAnAWBFQAWBDgJBoIgDAXIlMgfQAAAxAPAaQAVAlAnADQAXADAXgNQAPgJASgWICiAhQgtBMg5AeQgqAXhEAAQgUAAgYgCgAgyh7QgRAXgJAvICjAPQABg7gTgcQgTgbgigDIgIAAQghAAgZAgg");
	this.shape_1.setTransform(326.8246,69.7966);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuFzIAakjQAFgygOgWQgNgVgbgDQgdgCgVAYQgWAbgGBIIgYD/IimgQIBDrZICmAPIgYENQAlgoAjgQQAjgPAtAEQBEAGAjA3QAiA2gJBnIgfFRg");
	this.shape_2.setTransform(270.2026,54.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOEVQh3gLguguQgwgugGhNICmgEQAHAlARARQARARAdADQAiADAUgQQAQgLABgUQACgWgRgOQgNgJg4gSQhVgbgfgSQghgSgUgnQgUgoAEgwQAGg0AcgjQAdgkAsgPQAugPBIAHQBOAHAkASQAjASAXAhQAVAhALA1IifAEQgDgZgOgOQgRgRgcgDQgbgDgOALQgOAMgCARQgCATAPAMQAQALA1ANQBSATAnAYQAmAZASAnQASAngEAtQgEAugbApQgbApgzAWQgmAPg3AAQgUAAgVgCg");
	this.shape_3.setTransform(216.4,59.7347);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhzFlIAwoQIClAPIgxIRgAg9jqIAMiKICmAPIgNCKg");
	this.shape_4.setTransform(178.95,46.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuEPIAakjQAFgxgOgXQgNgWgbgCQgdgDgVAaQgWAagGBIIgYD+IimgPIAwoRICbAOIgIBXQAogyAlgTQAlgUAzAFQBFAGAjA2QAiA2gJBoIgfFQg");
	this.shape_5.setTransform(135.4526,52.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah0FmIAxoRIClAQIgwIQgAg9jqIANiKICkAPIgMCLg");
	this.shape_6.setTransform(95.3,38.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkFFkIBDrZIHIAqIgOCdIkPgZIgLCAIDnAVIgOCSIjngUIgbEqg");
	this.shape_7.setTransform(54.625,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol74, new cjs.Rectangle(2.2,-47.8,433.3,187.39999999999998), null);


(lib.Symbol72 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.996)").s().p("AmCF4QgxgVgdgnQgegogFgvQgGgvAAh1IAAiBQAAhyAGgvQAFgxAcgnQAdgnAwgVQAwgWBAAAQA9AAAxAVQAwATAeApQAdAnAGAvQAGAvAAB1IAACBQAABygGAwQgFAvgcAoQgdAngwAWQgwAUhBABQg9AAgwgUgAkrj9QgJALAAA6IAAFiQAABCAGAQQAFAPAUAAQAUAAAGgSQAFgRAAhEIAAlcQAAg0gFgPQgGgPgTAAQgPAAgIANgAEuF7IhRlFIAAFFIjFAAIAAr1IDFAAIAAEnIBZknIC5AAIhyFXIB9Geg");
	this.shape.setTransform(50.575,39.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol72, new cjs.Rectangle(0,0,101.2,79.1), null);


(lib.Symbol71 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(51,204,255,0.996)").s().p("A0bKOQkPAAi/jAQi/i/AAkPIAAAAQAAkOC/jAQC/i/EPAAMAo3AAAQEPAAC/C/QC/DAAAEOIAAAAQAAEPi/C/Qi/DAkPAAg");
	this.shape.setTransform(196.125,65.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol71, new cjs.Rectangle(0,0,392.3,130.8), null);


(lib.Symbol70 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(102,0,204,0.996)").s().p("A0bKOQkPAAi/jAQi/i/AAkPIAAAAQAAkOC/jAQC/i/EPAAMAo3AAAQEPAAC/C/QC/DAAAEOIAAAAQAAEPi/C/Qi/DAkPAAg");
	this.shape.setTransform(196.125,65.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol70, new cjs.Rectangle(0,0,392.3,130.8), null);


(lib.Symbol57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7000B9","#00DBFF"],[0,1],-3.9,59.7,0.2,-59.7).s().p("AS5IbIAAmGIjFqvIEBAAQA8E8AIBtQAYisA2j9IECAAIjNKvIAAGGgAFBIbIAAw1IDSAAQDMAABHASQBIATAlArQAlArAKA0QAJA0AACaIAAF4QAACRgNAyQgPAwghAcQgiAbgyAMQgyAKhlAAgAJZFjQA+AAANgYQAPgZAAhsIAAmiQgBhJgEgVQgFgUgQgKQgRgKgvAAgAgMIbIgPjCIhkAAIgRDCIkiAAICPw1IGVAAICgQ1gAiDCaIBhAAQgWi2gVkNQgrE0gLCPgAuqIbIAAw1IHUAAIAADYIi8AAIAADMICwAAIAADNIiwAAIAADsIDPAAIAADYgA0bIbIAAlmQAAhWgMgVQgPgVg6AAIAAHmIkYAAIAAw1IDGAAQDHAABGAPQBGAPAtBAQAsA/AACKQAAB9ggAsQgfArhbAJQBTAUAcAiQAdAiAHAeQAHAcAACDIAAEcgA1whyQAvAAAUgMQASgOAAhHIAAg7QAAg0gSgQQgSgQgxAAg");
	this.shape.setTransform(209.05,53.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AS4IbIAAmGIjFqvIEDAAQA7E8AIBtQAYisA2j9IECAAIjMKvIAAGGgAFBIbIAAw1IDTAAQDLAABHASQBIATAlArQAlArAKA0QAJA0AACaIAAF4QAACRgOAyQgNAwgiAcQgiAbgzAMQgxAKhkAAgAJaFjQA8AAAOgYQAOgZAAhsIAAmiQABhJgFgVQgFgUgQgKQgRgKguAAgAgMIbIgOjCIhlAAIgQDCIkjAAICOw1IGVAAIChQ1gAiDCaIBhAAQgVi2gWkNQgrE0gLCPgAuqIbIAAw1IHUAAIAADYIi7AAIAADMICvAAIAADNIivAAIAADsIDOAAIAADYgA0bIbIAAlmQAAhWgNgVQgOgVg6AAIAAHmIkYAAIAAw1IDGAAQDHAABHAPQBFAPAtA/QAsBAAACKQAAB9gfAsQgfArhcAJQBTAUAdAiQAcAiAIAeQAGAcAACDIAAEcgA1whyQAvAAAUgMQASgOAAhHIAAg7QAAg0gSgQQgSgQgxAAg");
	this.shape_1.setTransform(212.6,57.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AgVgKIArAAIgFAVg");
	this.shape_2.setTransform(372.8,161.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol57, new cjs.Rectangle(41.8,0,338.09999999999997,162.3), null);


(lib.Symbol51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF004F").s().p("AjxboQhsgthChYQhBhYgNhoQgMhoAAkDIAAkgQAAj9AMhpQAMhrA/hWQA/hYBrguQBrgwCNAAQCHAABsAtQBrAsBBBYQBCBZAMBnQANBoAAEEIAAEgQAAD9gMBqQgMBpg/BXQg/BXhrAvQhrAviOAAQiGAAhrgsgAgxFzQgTAaAACCIAAMRQAACTANAiQALAiAsAAQArAAANgnQAMgnAAiVIAAsFQAAh2gMgfQgOgigoAAQghAAgSAbgABoiCIjir8IAAL8IluAAIAA6RIFuAAID0L1IAAr1IFtAAIAAaRg");
	this.shape.setTransform(50.575,181.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(0,0,101.2,362.4), null);


(lib.Symbol50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("EgEbAqMQh8hDgnhnQgmhnAAi9IAAhuIGWAAIAADNQAABeARAbQARAbAsAAQAqAAAWgiQAVgiAAhEQAAiUgpguQgpgtiihrQijhsg1gyQg1gwgjhXQgjhWAAiGQAAjBAyhZQAxhZBugzQBugzCcAAQCpAAB5A4QB3A3AoBUQAmBTAADJIAABCImWAAIAAh9QAAhXgQgYQgPgYgkAAQgnAAgUAhQgVAfAABCQAABUAXArQAWArBlA8QEkCtBLBvQBMBvAAD3QAAC0gpBWQgrBUh4A7Qh5A5igAAQiuAAh8hCgAliM3IAA6RILYAAIAAFRIkkAAIAAE/IERAAIAAE/IkRAAIAAFyIFBAAIAAFQgAjPw8IAApgIk0wxIGSAAQBeHtAMCpQAkkNBVmJIGSAAIk/QxIAAJgg");
	this.shape.setTransform(51.575,276.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(0,0,103.2,553.2), null);


(lib.Symbol45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF004F").s().p("AAXHHIgIAAIgBAAIgHAAIgBAAIgIAAIgBAAIgLAAIgBAAIgHAAIAAAAIgIAAIgdgDQg+gIgwgVQgygUgogdQgqgcghgkQgigkgZgsQgagsgQg1QgRg0gDhDIAAgBIAAgUIAAgBIAAgFIAAgBIAAgJQAFhBARg0QASg0AagrQAbgrAhgjQAigkApgcQAkgYApgSIAOgGQAQgFAPgFQAmgMAsgFIAZgCIAIAAIAAgBIAIAAIABAAIAQAAIABAAIALAAIABAAQABACAFgBIABAAQBAAEA0ASQA0ASAqAaQArAbAkAiQAjAiAcAqQAcAqASAyQATAzAIA9IABAJIAAAGIAAAAIAAAHIAAAAIABAHIAAAAIAAAIIAAACIAAASIAAABIAAAKIAAABIgBAAIAAAGIAAABIAAAQQgHA/gTAyQgUAygbAqQgbAqgjAjQgkAhgrAcQgqAag0ATQgyARhCAFIAAAAIgGAAIAAAAIgBAAgAjwBiQgBAyACAwQACAJAIACIABAAQA0ABA2gBQAJgCABgJIABAAIABhhIgBiJIgBgBQgBgJgJgBIAAgBIhrAAIAAABIAAAAQgHACgDAGIAAAAIAAABIgBAAIAACKgAhNB4QAAATABASQABAMAKACIABAAQApABAoAAIABAAIAbAAIAAgBICLAAQAdgBAEgaIAAAAQABgGgBgDIAAgBQgEgOgJgIQAZgHgBgeQgBgKgGgIIgLgLQAKgGAJgIQAHgFABgLQADgUgMgLIgPgNQAZgJAAghQAAghgegEIAAAAIgHgBIAAAAIgYAAIgBAAIgXAAIAAABQggAAgfACQgNAAgBgKQAUgiAKgsQABgGAAgJIABAAQABgHgCgFQgBgtgagUQgEgDgGgBQgegEgIAZIAAANIAAABIAAAAIAAANIAAABIAAALIAAABIgBAAIAAAKIAAABQgDAHgFAFQghAigeAoQgcApgIA+IAAAJIAAABIgBAAIAACKg");
	this.shape.setTransform(45.55,45.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjiD5IgBgBQgJgBgBgJQgCgwAAgyIABiLIABAAIAAgBIAAAAQADgGAHgCIAAAAIAAgBIBrABIAAAAQAJACABAIIABABIABCKIgBBhIgBAAQgCAJgIACIg2AAIg0AAgAg+DVIgBAAQgKgDgBgMQgBgRAAgTIAAiLIABAAIAAgBIAAgJQAHg9AdgpQAdgoAigjQAFgEADgHIAAgBIAAgKIABAAIAAgBIAAgMIAAgBIAAgMIAAAAIAAgBIAAgOQAHgZAfAFQAFABAFADQAaAUABAtQABAFgBAHIAAAAQAAAIgBAHQgKAsgUAiQABAKAMgBQAggBAgAAIAAgBIAXAAIABAAIAYAAIAAAAIAHAAIAAABQAdAEABAhQAAAggZAJIAPAMQAMALgDAWQgBALgHAFQgJAIgLAFIAMAMQAGAHAAALQABAegYAGQAJAIADAPIAAAAQACAEgBAGIgBAAQgDAagdABIiLAAIAAAAIgbABIgBAAIgUAAIg9gBg");
	this.shape_1.setTransform(45.379,41.3907);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,91.1,91.1), null);


(lib.Symbol44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00D1D4").s().p("AAXHHIgIAAIgBAAIgHAAIgBAAIgIAAIgBAAIgLAAIgBAAIgHAAIAAAAIgIAAIgdgDQg+gIgwgVQgygUgogdQgqgcghgkQgigkgZgsQgagsgQg1QgRg0gDhDIAAgBIAAgUIAAgBIAAgFIAAgBIAAgJQAFhBARg0QASg0AagrQAbgrAhgjQAigkApgcQAkgYApgSIAOgGQAQgFAPgFQAmgMAsgFIAZgCIAIAAIAAgBIAIAAIABAAIAQAAIABAAIALAAIABAAQABACAFgBIABAAQBAAEA0ASQA0ASAqAaQArAbAkAiQAjAiAcAqQAcAqASAyQATAzAIA9IABAJIAAAGIAAAAIAAAHIAAAAIABAHIAAAAIAAAIIAAACIAAASIAAABIAAAKIAAABIgBAAIAAAGIAAABIAAAQQgHA/gTAyQgUAygbAqQgbAqgjAjQgkAhgrAcQgqAag0ATQgyARhCAFIAAAAIgGAAIAAAAIgBAAgAjwBiQgBAyACAwQACAJAIACIABAAQA0ABA2gBQAJgCABgJIABAAIABhhIgBiJIgBgBQgBgJgJgBIAAgBIhrAAIAAABIAAAAQgHACgDAGIAAAAIAAABIgBAAIAACKgAhNB4QAAATABASQABAMAKACIABAAQApABAoAAIABAAIAbAAIAAgBICLAAQAdgBAEgaIAAAAQABgGgBgDIAAgBQgEgOgJgIQAZgHgBgeQgBgKgGgIIgLgLQAKgGAJgIQAHgFABgLQADgUgMgLIgPgNQAZgJAAghQAAghgegEIAAAAIgHgBIAAAAIgYAAIgBAAIgXAAIAAABQggAAgfACQgNAAgBgKQAUgiAKgsQABgGAAgJIABAAQABgHgCgFQgBgtgagUQgEgDgGgBQgegEgIAZIAAANIAAABIAAAAIAAANIAAABIAAALIAAABIgBAAIAAAKIAAABQgDAHgFAFQghAigeAoQgcApgIA+IAAAJIAAABIgBAAIAACKg");
	this.shape.setTransform(45.55,45.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjiD5IgBgBQgJgBgBgJQgCgwAAgyIABiLIABAAIAAgBIAAAAQADgGAHgCIAAAAIAAgBIBrABIAAAAQAJACABAIIABABIABCKIgBBhIgBAAQgCAJgIACIg2AAIg0AAgAg+DVIgBAAQgKgDgBgMQgBgRAAgTIAAiLIABAAIAAgBIAAgJQAHg9AdgpQAdgoAigjQAFgEADgHIAAgBIAAgKIABAAIAAgBIAAgMIAAgBIAAgMIAAAAIAAgBIAAgOQAHgZAfAFQAFABAFADQAaAUABAtQABAFgBAHIAAAAQAAAIgBAHQgKAsgUAiQABAKAMgBQAggBAgAAIAAgBIAXAAIABAAIAYAAIAAAAIAHAAIAAABQAdAEABAhQAAAggZAJIAPAMQAMALgDAWQgBALgHAFQgJAIgLAFIAMAMQAGAHAAALQABAegYAGQAJAIADAPIAAAAQACAEgBAGIgBAAQgDAagdABIiLAAIAAAAIgbABIgBAAIgUAAIg9gBg");
	this.shape_1.setTransform(45.379,41.3907);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,91.1,91.1), null);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADByQgQgKgGgRQgGgSAAgiIAAhFQAAgZACgNQACgNAJgMQAIgMAPgHQAPgHAUAAQAbAAASALQASALAFAPQAGAQAAAhIAAAWIg+AAIAAgoQAAgSgCgFQgCgEgGAAQgIAAgCAFQgCAFAAASIAABtQAAASACAFQACAGAHgBQAHABACgGQACgFAAgUIAAgdIA+AAIAAAJQAAAlgFAPQgFAPgSAMQgSAMgaAAQgbAAgSgKgAiZByQgRgJgGgPQgFgOAAgbIAAgPIA5AAIAAAcQAAAOADAEQACADAGAAQAGAAADgEQADgGAAgJQAAgVgFgGQgGgHgXgPQgXgPgIgGQgHgHgFgMQgFgMAAgTQAAgbAHgNQAHgMAPgIQAQgGAWgBQAYAAARAIQARAIAFAMQAGAMAAAcIAAAJIg6AAIAAgSQAAgMgCgDQgCgDgFAAQgGAAgCAEQgDAFAAAJQAAALADAHQADAFAOAJQApAZALAOQALAQAAAjQAAAZgGAMQgGAMgRAJQgRAIgXAAQgYAAgSgKgAoYB0QgQgHgIgLQgIgLgBgNQgCgMAAgoIAAiLIA+AAIAACwQAAAPACAFQABAFAFgBQAGAAACgEQACgFAAgSIAAitIA9AAIAACdQAAAbgCALQgBALgJALQgJAMgOAFQgOAHgTAAQgVAAgRgIgAJ8B2IgghsIAABsIgzAAIAAjrIAzAAIAjBqIAAhqIAzAAIAADrgAGsB2IAAjrIBnAAIAAAvIgpAAIAAAtIAmAAIAAAsIgmAAIAAA0IAtAAIAAAvgAEwB2IAAjrIBmAAIAAAvIgpAAIAAAtIAnAAIAAAsIgnAAIAAA0IAtAAIAAAvgADeB2IAAhOQAAgTgCgFQgEgFgMAAIAABrIg+AAIAAjrIAsAAQArgBAQADQAPAEAKAOQAKAOAAAeQAAAcgHAJQgHAKgUACQASAEAGAHQAHAIABAGQACAGAAAdIAAA+gADMgZQAKAAAEgCQAEgDAAgPIAAgOQAAgLgDgDQgFgEgKAAgAkkB2IAAjrIA+AAIAAC8IAlAAIAAAvgAmWB2IAAjrIA+AAIAAC8IAlAAIAAAvgAqxB2IAAjrIBoAAIAAAvIgrAAIAAAtIAmAAIAAAsIgmAAIAABjg");
	this.shape.setTransform(76.375,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(7.4,8.1,138,24.699999999999996), null);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,0,0,0.557)").s().p("AjlD9QgagagTgcIHXncQAeAUAbAbIAVAXIncHlQgOgMgOgNg");
	this.shape.setTransform(27.475,27.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,55,55.6), null);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/DRIgTAAQgcgEgUgOIgMgJQgagVABguQANg7A8gOQASgEASADIAAiRIAAhoIABAAIATAKIAGADQA1ATAzAXQAzAWAcAsQALARAEAXQAHAngQAZQgKgRgLgNQgLgOgOgLQgpgfgvgbQgBAeAAAgIAACRQAAASgEAPQgQA4hAAJIAAAAIgBAAg");
	this.shape.setTransform(16.782,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,33.6,41.8), null);


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

	// Layer 1
	this.numeroboton = new cjs.Text("", "41px 'Arial'", "#999999");
	this.numeroboton.name = "numeroboton";
	this.numeroboton.textAlign = "center";
	this.numeroboton.lineHeight = 48;
	this.numeroboton.lineWidth = 60;
	this.numeroboton.parent = this;
	this.numeroboton.setTransform(-0.75,-22.3);

	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-41,-41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.numeroboton}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-41,-41,82,82), null);


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

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-235,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-235,-25,470,50), null);


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

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-699,-401);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-699,-401,1399,802), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("AiJCXIAAktIETAA");
	this.shape.setTransform(13.775,15.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-6,-6,39.6,42.1), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("AiaiWIE1AAIAAEt");
	this.shape.setTransform(15.525,15.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-6,-6,43.1,42.1), null);


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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,0,0.988)").s().p("EghDALjIAA3FMBCHAAAIAAXFg");
	this.shape.setTransform(3.175,-0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-208.4,-74.7,423.20000000000005,147.8), null);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(17.7,1,1).p("AD4mrID1AAIAADYAHtDcIAADQIj1AAAnsjTIAAjYIDgAAAkMGsIjgAAIAAjQ");
	this.shape.setTransform(49.275,42.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.557)").s().p("AoXJ6Qi9AAAAi9IAAt5QAAi9C9AAIQvAAQC9AAAAC9IAAN5QAAC9i9AAg");
	this.shape_1.setTransform(47.975,42.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-24.5,-20.5,145,126.9), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8.4,1,1).p("AjsC0QgBgGAAgFQAAiQBmhmQBmhmCPAAQCQAABmBmQAEAEADAEAjsC0IDIiAAjsC0Ih+iu");
	this.shape.setTransform(-4.7625,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-45.3,-22.1,81.1,44.3), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("ACKClIkTAAIAAlJ");
	this.shape.setTransform(13.775,16.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-6,-6,39.6,45), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("ACbikIAAFJIk1AA");
	this.shape.setTransform(15.525,16.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-6,-6,43.1,45), null);


(lib.Symbol121 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.titulo = new cjs.Text("", "bold 26px 'Arial'", "#FFFFFF");
	this.titulo.name = "titulo";
	this.titulo.textAlign = "center";
	this.titulo.lineHeight = 31;
	this.titulo.lineWidth = 258;
	this.titulo.parent = this;
	this.titulo.setTransform(131.05,18.3);

	this.timeline.addTween(cjs.Tween.get(this.titulo).wait(1));

	// Layer_3
	this.minumero = new cjs.Text("", "bold 96px 'Arial'", "#000033");
	this.minumero.name = "minumero";
	this.minumero.textAlign = "center";
	this.minumero.lineHeight = 109;
	this.minumero.lineWidth = 169;
	this.minumero.parent = this;
	this.minumero.setTransform(132.5026,2.8134,1.418,1.418);

	this.timeline.addTween(cjs.Tween.get(this.minumero).wait(1));

	// Layer_1
	this.instance = new lib.Symbol122();
	this.instance.setTransform(132.2,64.5,1,1,0,0,0,132.2,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol121, new cjs.Rectangle(-2.3,-10.5,273.2,168.3), null);


(lib.Symbol116 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.bt.addEventListener("click", hacer_1.bind(this));
		
		function hacer_1()
		{
		
		this.play();
		
		}
	}
	this.frame_1 = function() {
		if (exportRoot.a1.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a1.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.a2.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a2.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.a3.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a3.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.a4.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a4.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.a5.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a5.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.a6.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a6.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.a7.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a7.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.a8.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a8.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.a9.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a9.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.a10.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a10.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.a11.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a11.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.a12.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.a12.gotoAndPlay("ini2");
			}
		
		////////////////////////////////////////
		
		 if (exportRoot.b1.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b1.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.b2.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b2.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.b3.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b3.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.b4.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b4.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.b5.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b5.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.b6.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b6.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.b7.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b7.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.b8.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b8.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.b9.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b9.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.b10.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b10.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.b11.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b11.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.b12.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.b12.gotoAndPlay("ini2");
			}
		
		/////////////////////////
		
		
		 if (exportRoot.c1.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c1.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.c2.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c2.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.c3.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c3.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.c4.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c4.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.c5.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c5.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.c6.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c6.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.c7.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c7.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.c8.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c8.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.c9.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c9.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.c10.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c10.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.c11.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c11.gotoAndPlay("ini2");
			}
		
		 if (exportRoot.c12.letra.text == exportRoot.nada.text) {
		        
		    }else{
				exportRoot.c12.gotoAndPlay("ini2");
			}
		playSound("moneda2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(39));

	// Layer_1
	this.bt = new lib.Symbol117();
	this.bt.name = "bt";
	this.bt.setTransform(20.4,33.6,1,1,0,0,0,20.4,33.6);

	this.timeline.addTween(cjs.Tween.get(this.bt).to({scaleX:0.6951,scaleY:0.6951,x:20.45,y:33.65},10,cjs.Ease.get(1)).wait(1).to({regX:20.3,regY:32.6,x:20.35,y:32.95},0).wait(13).to({regX:20.4,regY:33.6,x:20.45,y:33.65},0).wait(1).to({regX:20.3,regY:32.6,scaleX:0.7148,scaleY:0.7148,x:20.3,y:32.9},0).wait(1).to({scaleX:0.7346,scaleY:0.7346},0).wait(1).to({scaleX:0.7545,scaleY:0.7545,y:32.85},0).wait(1).to({scaleX:0.7745,scaleY:0.7745},0).wait(1).to({scaleX:0.7945,scaleY:0.7945,y:32.8},0).wait(1).to({scaleX:0.8147,scaleY:0.8147},0).wait(1).to({scaleX:0.8349,scaleY:0.8349,y:32.75},0).wait(1).to({scaleX:0.8553,scaleY:0.8553,x:20.25},0).wait(1).to({scaleX:0.8757,scaleY:0.8757,x:20.3,y:32.7},0).wait(1).to({scaleX:0.8962,scaleY:0.8962,x:20.25},0).wait(1).to({scaleX:0.9168,scaleY:0.9168},0).wait(1).to({scaleX:0.9374,scaleY:0.9374,y:32.65},0).wait(1).to({scaleX:0.9582,scaleY:0.9582},0).wait(1).to({scaleX:0.9791,scaleY:0.9791,x:20.2,y:32.6},0).wait(1).to({regX:20.4,regY:33.6,scaleX:1,scaleY:1,x:20.4,y:33.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,44.5,69.1);


(lib.Symbol113 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ini2:3,ini:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.letra.visible = false;
	}
	this.frame_1 = function() {
		this.stop();
		 
		 if (this.letra.text == this.nada.text) {
		        
		    }else{
				this.play();
			}
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.letra.visible = true;
		playSound("moneda2");
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(16).call(this.frame_19).wait(1));

	// Layer_3
	this.instance = new lib.Symbol115();
	this.instance.setTransform(45.7,45.7,1,1,0,0,0,45.7,45.7);

	this.instance_1 = new lib.Symbol114();
	this.instance_1.setTransform(45.7,45.7,1,1,0,0,0,45.7,45.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},16).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:1.7191,scaleY:1.7191,alpha:0},16).to({_off:true},1).wait(1));

	// Layer_2
	this.nada = new cjs.Text("", "bold 95px 'Arial'");
	this.nada.name = "nada";
	this.nada.textAlign = "center";
	this.nada.lineHeight = 108;
	this.nada.lineWidth = 111;
	this.nada.parent = this;
	this.nada.setTransform(16.1,-431.85);

	this.letra = new cjs.Text("", "bold 95px 'Arial'", "#FFFFFF");
	this.letra.name = "letra";
	this.letra.textAlign = "center";
	this.letra.lineHeight = 108;
	this.letra.lineWidth = 91;
	this.letra.parent = this;
	this.letra.setTransform(45.8,5.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.letra},{t:this.nada}]}).wait(20));

	// Layer_1
	this.instance_2 = new lib.Symbol115();
	this.instance_2.setTransform(45.7,45.7,1,1,0,0,0,45.7,45.7);

	this.instance_3 = new lib.Symbol114();
	this.instance_3.setTransform(45.7,45.7,1,1,0,0,0,45.7,45.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-433.8,165.60000000000002,558.2);


(lib.Symbol110 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"ini":4,"ini":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		this.bt.addEventListener("click", hacer.bind(this));
		
		function hacer()
		{
		this.play();
		}
	}
	this.frame_3 = function() {
		if (this.letra.text == exportRoot.a1.letra.text) {
		       exportRoot.a1.play(); 
		    }
		
		 if (this.letra.text == exportRoot.a2.letra.text) {
		       exportRoot.a2.play(); 
		    }
		
		 if (this.letra.text == exportRoot.a3.letra.text) {
		       exportRoot.a3.play(); 
		    }
		
		 if (this.letra.text == exportRoot.a4.letra.text) {
		       exportRoot.a4.play(); 
		    }
		
		 if (this.letra.text == exportRoot.a5.letra.text) {
		       exportRoot.a5.play(); 
		    }
		
		 if (this.letra.text == exportRoot.a6.letra.text) {
		       exportRoot.a6.play(); 
		    }
		
		 if (this.letra.text == exportRoot.a7.letra.text) {
		       exportRoot.a7.play(); 
		    }
		
		 if (this.letra.text == exportRoot.a8.letra.text) {
		       exportRoot.a8.play(); 
		    }
		
		 if (this.letra.text == exportRoot.a9.letra.text) {
		       exportRoot.a9.play(); 
		    }
		
		 if (this.letra.text == exportRoot.a10.letra.text) {
		       exportRoot.a10.play(); 
		    }
		
		 if (this.letra.text == exportRoot.a11.letra.text) {
		       exportRoot.a11.play(); 
		    }
		
		 if (this.letra.text == exportRoot.a12.letra.text) {
		       exportRoot.a12.play(); 
		    }
		
		/////////////////////////////////////////
		
		 if (this.letra.text == exportRoot.b1.letra.text) {
		       exportRoot.b1.play(); 
		    }
		
		 if (this.letra.text == exportRoot.b2.letra.text) {
		       exportRoot.b2.play(); 
		    }
		
		 if (this.letra.text == exportRoot.b3.letra.text) {
		       exportRoot.b3.play(); 
		    }
		
		 if (this.letra.text == exportRoot.b4.letra.text) {
		       exportRoot.b4.play(); 
		    }
		
		 if (this.letra.text == exportRoot.b5.letra.text) {
		       exportRoot.b5.play(); 
		    }
		
		 if (this.letra.text == exportRoot.b6.letra.text) {
		       exportRoot.b6.play(); 
		    }
		
		 if (this.letra.text == exportRoot.b7.letra.text) {
		       exportRoot.b7.play(); 
		    }
		
		 if (this.letra.text == exportRoot.b8.letra.text) {
		       exportRoot.b8.play(); 
		    }
		
		 if (this.letra.text == exportRoot.b9.letra.text) {
		       exportRoot.b9.play(); 
		    }
		
		 if (this.letra.text == exportRoot.b10.letra.text) {
		       exportRoot.b10.play(); 
		    }
		
		 if (this.letra.text == exportRoot.b11.letra.text) {
		       exportRoot.b11.play(); 
		    }
		
		 if (this.letra.text == exportRoot.b12.letra.text) {
		       exportRoot.b12.play(); 
		    }
		
		//////////////////////////////////////
		 if (this.letra.text == exportRoot.c1.letra.text) {
		       exportRoot.c1.play(); 
		    }
		
		 if (this.letra.text == exportRoot.c2.letra.text) {
		       exportRoot.c2.play(); 
		    }
		
		 if (this.letra.text == exportRoot.c3.letra.text) {
		       exportRoot.c3.play(); 
		    }
		
		 if (this.letra.text == exportRoot.c4.letra.text) {
		       exportRoot.c4.play(); 
		    }
		
		 if (this.letra.text == exportRoot.c5.letra.text) {
		       exportRoot.c5.play(); 
		    }
		
		 if (this.letra.text == exportRoot.c6.letra.text) {
		       exportRoot.c6.play(); 
		    }
		
		 if (this.letra.text == exportRoot.c7.letra.text) {
		       exportRoot.c7.play(); 
		    }
		
		 if (this.letra.text == exportRoot.c8.letra.text) {
		       exportRoot.c8.play(); 
		    }
		
		 if (this.letra.text == exportRoot.c9.letra.text) {
		       exportRoot.c9.play(); 
		    }
		
		 if (this.letra.text == exportRoot.c10.letra.text) {
		       exportRoot.c10.play(); 
		    }
		
		 if (this.letra.text == exportRoot.c11.letra.text) {
		       exportRoot.c11.play(); 
		    }
		
		 if (this.letra.text == exportRoot.c12.letra.text) {
		       exportRoot.c12.play(); 
		    }
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(26).call(this.frame_29).wait(1));

	// Layer_5
	this.letra = new cjs.Text("", "bold 95px 'Arial'");
	this.letra.name = "letra";
	this.letra.textAlign = "center";
	this.letra.lineHeight = 108;
	this.letra.lineWidth = 125;
	this.letra.parent = this;
	this.letra.setTransform(65.8,30.05);

	this.timeline.addTween(cjs.Tween.get(this.letra).to({_off:true},4).wait(26));

	// Layer_2
	this.bt = new lib.Symbol109();
	this.bt.name = "bt";
	this.bt.setTransform(65.2,65.2,1,1,0,0,0,65.2,65.2);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1).to({scaleX:0.0461,scaleY:0.0461,x:65.15,y:65.15},27).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.3,139.3);


(lib.Symbol107 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol106();
	this.instance.setTransform(24.95,24.55,0.8849,0.8849,0,0,0,21.9,18.2);

	this.instance_1 = new lib.Symbol105();
	this.instance_1.setTransform(25,25.1,1,1,0,0,0,25,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol107, new cjs.Rectangle(0,0,50.1,50.1), null);


(lib.Symbol103 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol104();
	this.instance.setTransform(74.4,66.8,1,1,0,0,0,79.4,66.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol103, new cjs.Rectangle(-5,0,158.8,133.6), null);


(lib.Symbol102 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.bt.addEventListener("click", hacer_1.bind(this));
		
		function hacer_1()
		{
		
		this.play();
		
		}
	}
	this.frame_1 = function() {
		exportRoot.play();
		playSound("botonpop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(19));

	// Layer_1
	this.bt = new lib.Symbol103();
	this.bt.name = "bt";
	this.bt.setTransform(164.65,114.5,1,1,0,0,0,76.9,63.8);

	this.instance = new lib.Symbol103();
	this.instance.setTransform(164.65,114.5,0.5959,0.5959,0,0,0,76.9,63.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bt).to({_off:true,scaleX:0.5959,scaleY:0.5959},7,cjs.Ease.get(1)).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},7,cjs.Ease.get(1)).wait(4).to({scaleX:1,scaleY:1},8,cjs.Ease.get(-1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82.8,50.7,158.8,133.60000000000002);


(lib.Symbol97 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol98();
	this.instance.setTransform(256,256,1,1,0,0,0,256,256);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,0,204,255,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,516,516);

	this.instance_1 = new lib.Symbol98();
	this.instance_1.setTransform(275.65,288.75,1,1,0,0,0,256,256);
	var instance_1Filter_2 = new cjs.ColorFilter(0,0,0,1,102,0,204,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-2,-2,516,516);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol97, new cjs.Rectangle(0,0,531.7,544.8), null);


(lib.Symbol79 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol78();
	this.instance.setTransform(75.4,80.15,0.6182,0.6182,-8.6662,0,0,48.6,39.6);

	this.instance_1 = new lib.Symbol77();
	this.instance_1.setTransform(75.4,80.2,0.6182,0.6182,0,0,0,48.6,39.6);
	var instance_1Filter_1 = new cjs.ColorFilter(0,0,0,1,204,0,153,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,101,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol79, new cjs.Rectangle(42,51.5,66.7,57.400000000000006), null);


(lib.Symbol76 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
		
		this.bt.addEventListener("click", hacer_1.bind(this));
		
		function hacer_1()
		{
		
		this.play();
		
		}
	}
	this.frame_1 = function() {
		playSound("Cuack");
	}
	this.frame_39 = function() {
		exportRoot.fotos.fotos.reloj.reloj.text = "0";
		exportRoot.fotos.fotos.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(38).call(this.frame_39).wait(11));

	// Layer_3
	this.instance = new lib.Symbol99();
	this.instance.setTransform(-69,-181.75,0.0671,0.0671,0,0,0,160.2,160.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1},14,cjs.Ease.get(1)).wait(24).to({scaleX:0.0671,scaleY:0.0671},10,cjs.Ease.get(-1)).wait(1));

	// Layer_1
	this.bt = new lib.Symbol79();
	this.bt.name = "bt";
	this.bt.setTransform(62.5,60.85,1,1,0,0,0,54,46.4);

	this.instance_1 = new lib.Symbol79();
	this.instance_1.setTransform(62.45,60.85,0.7029,0.7029,0,0,0,53.9,46.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bt).to({_off:true,regX:53.9,scaleX:0.7029,scaleY:0.7029,x:62.45},15,cjs.Ease.get(1)).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},15,cjs.Ease.get(1)).wait(24).to({regX:54,scaleX:1,scaleY:1,x:62.5},10,cjs.Ease.get(-1)).wait(1));
	this.bt.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_1.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.2,-387.5,320.5,510.8);


(lib.Symbol73 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol72();
	this.instance.setTransform(188.1,62.3,1.3973,1.3973,-5.9827,0,0,50.5,39.5);

	this.instance_1 = new lib.Symbol72();
	this.instance_1.setTransform(196.1,68.3,1.3973,1.3973,-5.9827,0,0,50.5,39.5);
	var instance_1Filter_1 = new cjs.ColorFilter(0,0,0,1,102,0,204,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-2,-2,105,83);

	this.instance_2 = new lib.Symbol71();
	this.instance_2.setTransform(196.1,68.25,1,1,0,0,0,196.1,65.3);

	this.instance_3 = new lib.Symbol70();
	this.instance_3.setTransform(202.1,76.25,1,1,0,0,0,196.1,65.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol73, new cjs.Rectangle(0,0,398.3,141.7), null);


(lib.Symbol63 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol96();
	this.instance.setTransform(97.85,113,1,1,0,0,0,170.6,101.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol63, new cjs.Rectangle(-72.7,11.8,341.09999999999997,202.5), null);


(lib.Symbol57copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol74();
	this.instance.setTransform(210.6,74.55,1,1,-5.9998,0,0,206.8,47.1);

	this.instance_1 = new lib.Symbol74();
	this.instance_1.setTransform(214,78.2,1,1,-5.9998,0,0,206.8,47.1);
	var instance_1Filter_1 = new cjs.ColorFilter(0,0,0,1,102,0,204,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(0,-50,437,191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol57copy, new cjs.Rectangle(-2.7,-43.8,453.8,235.3), null);


(lib.Symbol56copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		playSound("Skewready");
	}
	this.frame_73 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(73).call(this.frame_73).wait(1));

	// Layer_1
	this.instance = new lib.Symbol57copy();
	this.instance.setTransform(358,106.3,2.4433,2.4433,0,0,0,213.2,76.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:224.7,regY:77.7,scaleX:2.2438,scaleY:2.2438,x:381.3,y:108.4},0).wait(1).to({scaleX:2.1367,scaleY:2.1367,x:378.7,y:108.3},0).wait(1).to({scaleX:2.0574,scaleY:2.0574,x:376.8,y:108.25},0).wait(1).to({scaleX:1.9932,scaleY:1.9932,x:375.25,y:108.2},0).wait(1).to({scaleX:1.9389,scaleY:1.9389,x:373.95},0).wait(1).to({scaleX:1.8917,scaleY:1.8917,x:372.8},0).wait(1).to({scaleX:1.8499,scaleY:1.8499,x:371.8,y:108.15},0).wait(1).to({scaleX:1.8124,scaleY:1.8124,x:370.9,y:108.1},0).wait(1).to({scaleX:1.7785,scaleY:1.7785,x:370.05,y:108.15},0).wait(1).to({scaleX:1.7475,scaleY:1.7475,x:369.3,y:108.1},0).wait(1).to({scaleX:1.7191,scaleY:1.7191,x:368.65,y:108.05},0).wait(1).to({scaleX:1.6929,scaleY:1.6929,x:368},0).wait(1).to({scaleX:1.6686,scaleY:1.6686,x:367.45},0).wait(1).to({scaleX:1.6461,scaleY:1.6461,x:366.9},0).wait(1).to({scaleX:1.6251,scaleY:1.6251,x:366.3,y:108},0).wait(1).to({scaleX:1.6055,scaleY:1.6055,x:365.85},0).wait(1).to({scaleX:1.5872,scaleY:1.5872,x:365.4},0).wait(1).to({scaleX:1.5701,scaleY:1.5701,x:365},0).wait(1).to({scaleX:1.5539,scaleY:1.5539,x:364.6},0).wait(1).to({scaleX:1.5388,scaleY:1.5388,x:364.2,y:107.95},0).wait(1).to({scaleX:1.5246,scaleY:1.5246,x:363.9},0).wait(1).to({scaleX:1.5112,scaleY:1.5112,x:363.55},0).wait(1).to({scaleX:1.4986,scaleY:1.4986,x:363.3},0).wait(1).to({scaleX:1.4868,scaleY:1.4868,x:362.95,y:107.9},0).wait(1).to({scaleX:1.4756,scaleY:1.4756,x:362.7},0).wait(1).to({scaleX:1.4651,scaleY:1.4651,x:362.45,y:107.95},0).wait(1).to({scaleX:1.4552,scaleY:1.4552,x:362.2,y:107.9},0).wait(1).to({scaleX:1.4458,scaleY:1.4458,x:361.95},0).wait(1).to({scaleX:1.437,scaleY:1.437,x:361.8},0).wait(1).to({scaleX:1.4287,scaleY:1.4287,x:361.6},0).wait(1).to({scaleX:1.4209,scaleY:1.4209,x:361.4},0).wait(1).to({scaleX:1.4136,scaleY:1.4136,x:361.25},0).wait(1).to({scaleX:1.4067,scaleY:1.4067,x:361.05},0).wait(1).to({scaleX:1.4002,scaleY:1.4002,x:360.9},0).wait(1).to({scaleX:1.3942,scaleY:1.3942,x:360.75},0).wait(1).to({scaleX:1.3885,scaleY:1.3885,x:360.6},0).wait(1).to({scaleX:1.3832,scaleY:1.3832,x:360.5,y:107.8},0).wait(1).to({scaleX:1.3782,scaleY:1.3782,x:360.4,y:107.85},0).wait(1).to({scaleX:1.3735,scaleY:1.3735,x:360.25,y:107.8},0).wait(1).to({scaleX:1.3692,scaleY:1.3692,x:360.15},0).wait(1).to({scaleX:1.3652,scaleY:1.3652,x:360.05,y:107.85},0).wait(1).to({scaleX:1.3615,scaleY:1.3615,x:359.95,y:107.8},0).wait(1).to({scaleX:1.358,scaleY:1.358,x:359.85},0).wait(1).to({scaleX:1.3549,scaleY:1.3549,x:359.8},0).wait(1).to({scaleX:1.352,scaleY:1.352,x:359.75},0).wait(1).to({scaleX:1.3493,scaleY:1.3493,x:359.7},0).wait(1).to({scaleX:1.3468,scaleY:1.3468,x:359.6},0).wait(1).to({scaleX:1.3446,scaleY:1.3446,x:359.55},0).wait(1).to({scaleX:1.3426,scaleY:1.3426,x:359.5,y:107.75},0).wait(1).to({scaleX:1.3408,scaleY:1.3408,x:359.45,y:107.8},0).wait(1).to({scaleX:1.3393,scaleY:1.3393},0).wait(1).to({scaleX:1.3378,scaleY:1.3378,x:359.35},0).wait(1).to({scaleX:1.3366,scaleY:1.3366},0).wait(1).to({scaleX:1.3355,scaleY:1.3355,y:107.75},0).wait(1).to({scaleX:1.3346,scaleY:1.3346,x:359.3,y:107.8},0).wait(1).to({scaleX:1.3339,scaleY:1.3339,x:359.25},0).wait(1).to({scaleX:1.3332,scaleY:1.3332},0).wait(1).to({scaleX:1.3327,scaleY:1.3327},0).wait(1).to({scaleX:1.3323,scaleY:1.3323,y:107.75},0).wait(1).to({scaleX:1.332,scaleY:1.332,y:107.8},0).wait(1).to({scaleX:1.3318,scaleY:1.3318},0).wait(1).to({scaleX:1.3317,scaleY:1.3317,y:107.75},0).wait(1).to({scaleX:1.3316,scaleY:1.3316,x:359.2},0).wait(1).to({regX:213.2,regY:76.8,x:343.95,y:106.6},0).wait(1).to({regX:224.7,regY:77.7,x:359.25,y:107.8},0).wait(8).to({regX:213.2,regY:76.8,x:343.95,y:106.6},0).wait(1));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.6,-188.3,1108.8999999999999,574.9000000000001);


(lib.Symbol56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		playSound("Skewready");
	}
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(75).call(this.frame_75).wait(1));

	// Layer_1
	this.instance = new lib.Symbol57();
	this.instance.setTransform(358,106.3,2.4433,2.4433,0,0,0,213.2,76.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:210.8,regY:81.2,scaleX:2.3502,scaleY:2.3502,x:349.8,y:108.5},0).wait(1).to({scaleX:2.3004,scaleY:2.3004,x:348.55,y:103.9},0).wait(1).to({scaleX:2.2636,scaleY:2.2636,x:347.65,y:100.5},0).wait(1).to({scaleX:2.2338,scaleY:2.2338,x:346.95,y:97.75},0).wait(1).to({scaleX:2.2086,scaleY:2.2086,x:346.3,y:95.4},0).wait(1).to({scaleX:2.1867,scaleY:2.1867,x:345.75,y:93.35},0).wait(1).to({scaleX:2.1673,scaleY:2.1673,x:345.25,y:91.6},0).wait(1).to({scaleX:2.1499,scaleY:2.1499,x:344.8,y:89.95},0).wait(1).to({scaleX:2.1342,scaleY:2.1342,x:344.45,y:88.55},0).wait(1).to({scaleX:2.1199,scaleY:2.1199,x:344.05,y:87.25},0).wait(1).to({scaleX:2.1067,scaleY:2.1067,x:343.75,y:86},0).wait(1).to({scaleX:2.0946,scaleY:2.0946,x:343.45,y:84.9},0).wait(1).to({scaleX:2.0834,scaleY:2.0834,x:343.2,y:83.8},0).wait(1).to({scaleX:2.073,scaleY:2.073,x:342.9,y:82.9},0).wait(1).to({scaleX:2.0633,scaleY:2.0633,x:342.65,y:82},0).wait(1).to({scaleX:2.0543,scaleY:2.0543,x:342.45,y:81.15},0).wait(1).to({scaleX:2.0458,scaleY:2.0458,x:342.2,y:80.35},0).wait(1).to({scaleX:2.0379,scaleY:2.0379,x:342.05,y:79.65},0).wait(1).to({scaleX:2.0305,scaleY:2.0305,x:341.85,y:79},0).wait(1).to({scaleX:2.0236,scaleY:2.0236,x:341.65,y:78.3},0).wait(1).to({scaleX:2.017,scaleY:2.017,x:341.5,y:77.75},0).wait(1).to({scaleX:2.0109,scaleY:2.0109,x:341.35,y:77.15},0).wait(1).to({scaleX:2.0051,scaleY:2.0051,x:341.2,y:76.6},0).wait(1).to({scaleX:1.9996,scaleY:1.9996,x:341.05,y:76.1},0).wait(1).to({scaleX:1.9945,scaleY:1.9945,x:340.95,y:75.65},0).wait(1).to({scaleX:1.9897,scaleY:1.9897,x:340.85,y:75.2},0).wait(1).to({scaleX:1.9852,scaleY:1.9852,x:340.7,y:74.8},0).wait(1).to({scaleX:1.9809,scaleY:1.9809,x:340.55,y:74.4},0).wait(1).to({scaleX:1.9769,scaleY:1.9769,x:340.5,y:74},0).wait(1).to({scaleX:1.9731,scaleY:1.9731,x:340.4,y:73.65},0).wait(1).to({scaleX:1.9696,scaleY:1.9696,x:340.35,y:73.35},0).wait(1).to({scaleX:1.9662,scaleY:1.9662,x:340.25,y:73},0).wait(1).to({scaleX:1.9631,scaleY:1.9631,x:340.15,y:72.75},0).wait(1).to({scaleX:1.9602,scaleY:1.9602,x:340.1,y:72.45},0).wait(1).to({scaleX:1.9574,scaleY:1.9574,x:340,y:72.2},0).wait(1).to({scaleX:1.9548,scaleY:1.9548,x:339.95,y:72},0).wait(1).to({scaleX:1.9524,scaleY:1.9524,x:339.85,y:71.75},0).wait(1).to({scaleX:1.9502,scaleY:1.9502,y:71.55},0).wait(1).to({scaleX:1.9481,scaleY:1.9481,x:339.75,y:71.35},0).wait(1).to({scaleX:1.9462,scaleY:1.9462,x:339.7,y:71.2},0).wait(1).to({scaleX:1.9444,scaleY:1.9444,y:71.05},0).wait(1).to({scaleX:1.9427,scaleY:1.9427,x:339.65,y:70.85},0).wait(1).to({scaleX:1.9412,scaleY:1.9412,x:339.6,y:70.7},0).wait(1).to({scaleX:1.9398,scaleY:1.9398,x:339.55,y:70.6},0).wait(1).to({scaleX:1.9385,scaleY:1.9385,y:70.45},0).wait(1).to({scaleX:1.9373,scaleY:1.9373,x:339.5,y:70.35},0).wait(1).to({scaleX:1.9363,scaleY:1.9363,x:339.45,y:70.25},0).wait(1).to({scaleX:1.9353,scaleY:1.9353,y:70.2},0).wait(1).to({scaleX:1.9345,scaleY:1.9345,y:70.1},0).wait(1).to({scaleX:1.9337,scaleY:1.9337,x:339.4,y:70},0).wait(1).to({scaleX:1.933,scaleY:1.933,y:69.95},0).wait(1).to({scaleX:1.9324,scaleY:1.9324,y:69.9},0).wait(1).to({scaleX:1.9319,scaleY:1.9319,y:69.85},0).wait(1).to({scaleX:1.9315,scaleY:1.9315,x:339.35},0).wait(1).to({scaleX:1.9311,scaleY:1.9311,y:69.8},0).wait(1).to({scaleX:1.9308,scaleY:1.9308},0).wait(1).to({scaleX:1.9305,scaleY:1.9305,y:69.7},0).wait(1).to({scaleX:1.9304,scaleY:1.9304,x:339.3},0).wait(1).to({scaleX:1.9302,scaleY:1.9302,x:339.35},0).wait(1).to({scaleX:1.9301,scaleY:1.9301,x:339.3},0).wait(1).to({y:69.65},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:339.35},0).wait(2).to({regX:213.2,regY:76.9,x:344,y:61.15},0).wait(1).to({regX:210.8,regY:81.2,scaleX:1.9293,scaleY:1.9293,x:339.45,y:69.5,alpha:0.9971},0).wait(1).to({scaleX:1.9268,scaleY:1.9268,x:339.4,alpha:0.9874},0).wait(1).to({scaleX:1.9221,scaleY:1.9221,y:69.45,alpha:0.969},0).wait(1).to({scaleX:1.9145,scaleY:1.9145,x:339.45,y:69.4,alpha:0.9395},0).wait(1).to({scaleX:1.9031,scaleY:1.9031,alpha:0.8951},0).wait(1).to({scaleX:1.8865,scaleY:1.8865,x:339.5,y:69.35,alpha:0.8303},0).wait(1).to({scaleX:1.8623,scaleY:1.8623,x:339.6,y:69.2,alpha:0.736},0).wait(1).to({scaleX:1.8264,scaleY:1.8264,x:339.7,y:69.05,alpha:0.5961},0).wait(1).to({scaleX:1.7705,scaleY:1.7705,x:339.8,y:68.85,alpha:0.3782},0).wait(1).to({regX:213.2,regY:76.9,scaleX:1.6735,scaleY:1.6735,x:344.1,y:61.25,alpha:0},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,-87.2,826.1999999999999,402.4);


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

	// Layer 1
	this.instance = new lib.Symbol39();
	this.instance.setTransform(32.95,33.15,1,1,0,0,0,27.4,27.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/DRIgTAAQgcgEgUgNIgMgKIgDgCQgXgVABgsQANg8A8gNQASgDASACIAAhjIAAgtIAAhpIABAAIATAKIAGADIBOAeIAaALQAmARAaAeQAIAKAHALQALAQAEAXQAHAngQAYQgKgPgLgNQgLgPgOgLIgZgSQgegWghgSQgBAeAAAgIAAAqIAABnQAAATgEAOQgQA4hAAJIAAAAIgBAAg");
	this.shape.setTransform(36.9318,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.557)").s().p("AjVELQgOgLgNgOQgbgagSgcQg4hTAAhpQAAiMBlhlQBkhkCMAAQBoAABRA1QAeAUAbAbIAVAXQBPBdAAB9QAACNhkBlQhlBkiNAAQh5AAhchLgAhDAgQg7ANgNA8QgBAsAWAVIADACIANAKQATANAcAEIATAAIABAAIAAAAQBAgJARg4QADgOAAgTIAAhmIAAgrQAAggABgeQAiASAdAWIAaASQAOALALAPQAKAOAKAOQAQgYgHgnQgEgXgLgQQgHgLgHgKQgbgeglgRIgagLIhOgeIgHgDIgTgKIgBAAIAABpIAAAtIAABjIgPgBQgKAAgLACg");
	this.shape_1.setTransform(34.2,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,68.4,68.4), null);


(lib.Symbol38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol37();
	this.instance.setTransform(36.95,33.2,1,1,0,0,0,16.8,20.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.557)").s().p("AjwDyQhlhlAAiNQAAiMBlhlQBkhkCMAAQCNAABlBkQBkBlAACMQAACNhkBlQhlBkiNAAQiMAAhkhkg");
	this.shape.setTransform(34.2,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,68.4,68.4), null);


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
	this.btmute.name = "btmute";
	this.btmute.setTransform(447.8,555.15,1,1,0,0,0,34.2,34.2);

	this.btnomute = new lib.Symbol40();
	this.btnomute.name = "btnomute";
	this.btnomute.setTransform(447.8,555.15,1,1,0,0,0,34.2,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btmute}]}).to({state:[{t:this.btnomute}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(413.6,521,68.39999999999998,68.39999999999998);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var queue = new createjs.LoadQueue(true);
		
		queue.on('complete',completeF,this);
		
		var nameFile = "data.txt";
		
		queue.loadFile(nameFile);
		
		
		function completeF(e)
		{
			this.passserv.text = queue._loadedResults[nameFile];
		}
		
		//////////////////////////////
		
		
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
	this.instance.setTransform(353,248);

	this.instance_1 = new lib.Bitmap11();
	this.instance_1.setTransform(-92,-273);

	this.mipass = new cjs.Text("", "41px 'Arial'", "#FFFFFF");
	this.mipass.name = "mipass";
	this.mipass.textAlign = "center";
	this.mipass.lineHeight = 48;
	this.mipass.lineWidth = 444;
	this.mipass.parent = this;
	this.mipass.setTransform(-981.5,-499.8);

	this.passserv = new cjs.Text("", "41px 'Arial'", "#FFFFFF");
	this.passserv.name = "passserv";
	this.passserv.textAlign = "center";
	this.passserv.lineHeight = 48;
	this.passserv.lineWidth = 307;
	this.passserv.parent = this;
	this.passserv.setTransform(-985.7,-576.2);

	this.borrar = new lib.Symbol30();
	this.borrar.name = "borrar";
	this.borrar.setTransform(69.35,215.3);

	this.listo = new lib.Symbol30();
	this.listo.name = "listo";
	this.listo.setTransform(-21.45,215.3);

	this.cbt0 = new lib.Symbol30();
	this.cbt0.name = "cbt0";
	this.cbt0.setTransform(-112.9,215.3);

	this.cbt3 = new lib.Symbol30();
	this.cbt3.name = "cbt3";
	this.cbt3.setTransform(69.35,121.55);

	this.cbt2 = new lib.Symbol30();
	this.cbt2.name = "cbt2";
	this.cbt2.setTransform(-21.45,121.55);

	this.cbt1 = new lib.Symbol30();
	this.cbt1.name = "cbt1";
	this.cbt1.setTransform(-112.9,121.55);

	this.cbt6 = new lib.Symbol30();
	this.cbt6.name = "cbt6";
	this.cbt6.setTransform(69.35,27.7);

	this.cbt5 = new lib.Symbol30();
	this.cbt5.name = "cbt5";
	this.cbt5.setTransform(-21.45,27.7);

	this.cbt4 = new lib.Symbol30();
	this.cbt4.name = "cbt4";
	this.cbt4.setTransform(-112.9,27.7);

	this.cbt9 = new lib.Symbol30();
	this.cbt9.name = "cbt9";
	this.cbt9.setTransform(69.35,-66.15);

	this.cbt8 = new lib.Symbol30();
	this.cbt8.name = "cbt8";
	this.cbt8.setTransform(-21.45,-66.15);

	this.cbt7 = new lib.Symbol30();
	this.cbt7.name = "cbt7";
	this.cbt7.setTransform(-112.9,-66.15);

	this.mipassxx = new cjs.Text("", "41px 'Arial'", "#FFFFFF");
	this.mipassxx.name = "mipassxx";
	this.mipassxx.textAlign = "center";
	this.mipassxx.lineHeight = 48;
	this.mipassxx.lineWidth = 444;
	this.mipassxx.parent = this;
	this.mipassxx.setTransform(-7.6,-198.45);

	this.instance_2 = new lib.Symbol29();
	this.instance_2.setTransform(-10.4,-175.6);
	this.instance_2.alpha = 0.3516;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.mipassxx},{t:this.cbt7},{t:this.cbt8},{t:this.cbt9},{t:this.cbt4},{t:this.cbt5},{t:this.cbt6},{t:this.cbt1},{t:this.cbt2},{t:this.cbt3},{t:this.cbt0},{t:this.listo},{t:this.borrar},{t:this.passserv},{t:this.mipass},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(3));

	// Layer 2
	this.instance_3 = new lib.Symbol27();
	this.instance_3.alpha = 0.8984;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1205.2,-578.2,1905.2,979.2);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol45();
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,45.6,45.6);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",-3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-53.5,-47.5,104,104), null);


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

	// Layer 1
	this.instance = new lib.Symbol44();
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,45.6,45.6);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-48.5,-48.5,104,104), null);


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

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(5.9,17.95,1,1,180);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(-5.9,-17.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.557)").s().p("AmiGjQitiuAAj1QAAj0CtitQCuiuD0AAQD1AACtCuQCuCtAAD0QAAD1iuCuQitCtj1AAQj0AAiuitg");
	this.shape.setTransform(0.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-58.8,-58.5,118.4,118.4), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.setTransform(120.15,16.8,1.6583,1.6583,0,0,0,75.9,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(6.5,-0.3,228.9,40.9), null);


(lib.Tween2copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Symbol51();
	this.instance.setTransform(453.25,-163.2,1,1,0,0,0,50.6,181.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.setTransform(448.45,-486.45,2.0142,2.0142,180,0,0,0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(349.3,-580.8,196.99999999999994,609.4);


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

	// Layer 1
	this.instance = new lib.Symbol50();
	this.instance.setTransform(-530.45,-95.8,1,1,0,0,0,51.6,276.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(-534.3,-546.5,2.3567,2.3567,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-643.4,-656.8,229,847.4);


(lib.Symbol111 = function(mode,startPosition,loop,reversed) {
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
	this.ene = new lib.Symbol110();
	this.ene.name = "ene";
	this.ene.setTransform(65.2,368,1,1,0,0,0,65.2,69.7);

	this.z = new lib.Symbol110();
	this.z.name = "z";
	this.z.setTransform(927.2,521.85,1,1,0,0,0,65.2,69.7);

	this.ye = new lib.Symbol110();
	this.ye.name = "ye";
	this.ye.setTransform(770.2,521.85,1,1,0,0,0,65.2,69.7);

	this.ex = new lib.Symbol110();
	this.ex.name = "ex";
	this.ex.setTransform(616.3,521.85,1,1,0,0,0,65.2,69.7);

	this.w = new lib.Symbol110();
	this.w.name = "w";
	this.w.setTransform(459.3,521.85,1,1,0,0,0,65.2,69.7);

	this.v = new lib.Symbol110();
	this.v.name = "v";
	this.v.setTransform(307,521.85,1,1,0,0,0,65.2,69.7);

	this.u = new lib.Symbol110();
	this.u.name = "u";
	this.u.setTransform(150,521.85,1,1,0,0,0,65.2,69.7);

	this.t = new lib.Symbol110();
	this.t.name = "t";
	this.t.setTransform(999.4,368,1,1,0,0,0,65.2,69.7);

	this.s = new lib.Symbol110();
	this.s.name = "s";
	this.s.setTransform(842.4,368,1,1,0,0,0,65.2,69.7);

	this.r = new lib.Symbol110();
	this.r.name = "r";
	this.r.setTransform(688.5,368,1,1,0,0,0,65.2,69.7);

	this.q = new lib.Symbol110();
	this.q.name = "q";
	this.q.setTransform(531.5,368,1,1,0,0,0,65.2,69.7);

	this.p = new lib.Symbol110();
	this.p.name = "p";
	this.p.setTransform(379.2,368,1,1,0,0,0,65.2,69.7);

	this.o = new lib.Symbol110();
	this.o.name = "o";
	this.o.setTransform(222.2,368,1,1,0,0,0,65.2,69.7);

	this.n = new lib.Symbol110();
	this.n.name = "n";
	this.n.setTransform(994.7,217.3,1,1,0,0,0,65.2,69.7);

	this.m = new lib.Symbol110();
	this.m.name = "m";
	this.m.setTransform(842.4,217.3,1,1,0,0,0,65.2,69.7);

	this.l = new lib.Symbol110();
	this.l.name = "l";
	this.l.setTransform(685.4,217.3,1,1,0,0,0,65.2,69.7);

	this.k = new lib.Symbol110();
	this.k.name = "k";
	this.k.setTransform(531.5,217.3,1,1,0,0,0,65.2,69.7);

	this.j = new lib.Symbol110();
	this.j.name = "j";
	this.j.setTransform(374.5,217.3,1,1,0,0,0,65.2,69.7);

	this.i = new lib.Symbol110();
	this.i.name = "i";
	this.i.setTransform(222.2,217.3,1,1,0,0,0,65.2,69.7);

	this.h = new lib.Symbol110();
	this.h.name = "h";
	this.h.setTransform(65.2,217.3,1,1,0,0,0,65.2,69.7);

	this.g = new lib.Symbol110();
	this.g.name = "g";
	this.g.setTransform(994.7,69.7,1,1,0,0,0,65.2,69.7);

	this.f = new lib.Symbol110();
	this.f.name = "f";
	this.f.setTransform(842.4,69.7,1,1,0,0,0,65.2,69.7);

	this.e = new lib.Symbol110();
	this.e.name = "e";
	this.e.setTransform(685.4,69.7,1,1,0,0,0,65.2,69.7);

	this.d = new lib.Symbol110();
	this.d.name = "d";
	this.d.setTransform(531.5,69.7,1,1,0,0,0,65.2,69.7);

	this.c = new lib.Symbol110();
	this.c.name = "c";
	this.c.setTransform(374.5,69.7,1,1,0,0,0,65.2,69.7);

	this.b = new lib.Symbol110();
	this.b.name = "b";
	this.b.setTransform(222.2,69.7,1,1,0,0,0,65.2,69.7);

	this.a = new lib.Symbol110();
	this.a.name = "a";
	this.a.setTransform(65.2,69.7,1,1,0,0,0,65.2,69.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.a},{t:this.b},{t:this.c},{t:this.d},{t:this.e},{t:this.f},{t:this.g},{t:this.h},{t:this.i},{t:this.j},{t:this.k},{t:this.l},{t:this.m},{t:this.n},{t:this.o},{t:this.p},{t:this.q},{t:this.r},{t:this.s},{t:this.t},{t:this.u},{t:this.v},{t:this.w},{t:this.ex},{t:this.ye},{t:this.z},{t:this.ene}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1064.5,591.5);


(lib.Symbol65 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol63();
	this.instance.setTransform(147.65,203.7,0.5954,0.5954,7.201,0,0,116.3,117.9);

	this.instance_1 = new lib.Symbol63();
	this.instance_1.setTransform(153.7,205.3,0.5954,0.5954,0.9868,0,0,116.2,117.9);
	var instance_1Filter_1 = new cjs.ColorFilter(0,0,0,1,255,204,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-75,10,345,207);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol65, new cjs.Rectangle(28.8,126.9,216.6,144.99999999999997), null);


(lib.Symbol62 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
		
		this.bt.addEventListener("click", hacer_1.bind(this));
		
		function hacer_1()
		{
		
		this.play();
		
		}
	}
	this.frame_1 = function() {
		playSound("CORNETAUNAVEZ");
	}
	this.frame_44 = function() {
		exportRoot.puntos.puntos.text=String(Number(exportRoot.puntos.puntos.text) + Number(1));
		exportRoot.fotos.fotos.reloj.reloj.text = "0";
		
		exportRoot.fotos.fotos.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(43).call(this.frame_44).wait(11));

	// Layer_4
	this.instance = new lib.Symbol97();
	this.instance.setTransform(427.15,-553.95,0.05,0.05,0,0,0,256,256);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.3233,scaleY:1.3233},13,cjs.Ease.get(1)).wait(30).to({scaleX:0.05,scaleY:0.05},10,cjs.Ease.get(-1)).wait(1));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	// Layer_2
	this.bt = new lib.Symbol65();
	this.bt.name = "bt";
	this.bt.setTransform(125,125.9,1,1,0,0,0,118,120.9);

	this.timeline.addTween(cjs.Tween.get(this.bt).to({regY:120.8,scaleX:0.8177,scaleY:0.8177,x:125.05,y:125.85},14,cjs.Ease.get(1)).wait(1).to({regX:137.1,regY:199.4,scaleX:0.8176,scaleY:0.8176,x:140.65,y:190.1},0).wait(1).to({scaleX:0.8173,scaleY:0.8173,y:190.05},0).wait(1).to({scaleX:0.8167,scaleY:0.8167,x:140.6,y:190},0).wait(1).to({scaleX:0.8159,scaleY:0.8159,y:189.95},0).wait(1).to({scaleX:0.8148,scaleY:0.8148,x:140.55,y:189.85},0).wait(1).to({scaleX:0.8135,scaleY:0.8135,y:189.75},0).wait(1).to({scaleX:0.812,scaleY:0.812,y:189.6},0).wait(1).to({scaleX:0.8103,scaleY:0.8103,x:140.5,y:189.5},0).wait(1).to({scaleX:0.8083,scaleY:0.8083,x:140.45,y:189.35},0).wait(1).to({scaleX:0.8061,scaleY:0.8061,x:140.4,y:189.2},0).wait(1).to({scaleX:0.8037,scaleY:0.8037,y:189},0).wait(1).to({scaleX:0.801,scaleY:0.801,x:140.3,y:188.75},0).wait(1).to({scaleX:0.7981,scaleY:0.7981,x:140.25,y:188.55},0).wait(1).to({scaleX:0.795,scaleY:0.795,x:140.2,y:188.3},0).wait(1).to({scaleX:0.7917,scaleY:0.7917,x:140.15,y:188.05},0).wait(1).to({scaleX:0.7881,scaleY:0.7881,x:140.05,y:187.8},0).wait(1).to({scaleX:0.7842,scaleY:0.7842,x:139.95,y:187.45},0).wait(1).to({scaleX:0.7802,scaleY:0.7802,x:139.9,y:187.15},0).wait(1).to({scaleX:0.7759,scaleY:0.7759,x:139.85,y:186.8},0).wait(1).to({scaleX:0.7714,scaleY:0.7714,x:139.75,y:186.45},0).wait(1).to({scaleX:0.7666,scaleY:0.7666,x:139.65,y:186.1},0).wait(1).to({scaleX:0.7616,scaleY:0.7616,x:139.55,y:185.7},0).wait(1).to({scaleX:0.7564,scaleY:0.7564,x:139.45,y:185.3},0).wait(1).to({scaleX:0.751,scaleY:0.751,x:139.35,y:184.9},0).wait(1).to({scaleX:0.7453,scaleY:0.7453,x:139.25,y:184.4},0).wait(1).to({scaleX:0.7394,scaleY:0.7394,x:139.1,y:184},0).wait(1).to({scaleX:0.7333,scaleY:0.7333,x:139.05,y:183.5},0).wait(1).to({scaleX:0.7269,scaleY:0.7269,x:138.9,y:183},0).wait(1).to({scaleX:0.7203,scaleY:0.7203,x:138.75,y:182.45},0).wait(1).to({regX:118,regY:120.9,scaleX:0.7135,scaleY:0.7135,x:125.05,y:125.9},0).wait(1).to({regX:137.1,regY:199.4,scaleX:0.7413,scaleY:0.7413,x:139.2,y:184.05},0).wait(1).to({scaleX:0.7693,scaleY:0.7693,x:139.7,y:186.25},0).wait(1).to({scaleX:0.7975,scaleY:0.7975,x:140.25,y:188.45},0).wait(1).to({scaleX:0.8259,scaleY:0.8259,x:140.75,y:190.65},0).wait(1).to({scaleX:0.8544,scaleY:0.8544,x:141.3,y:192.9},0).wait(1).to({scaleX:0.8832,scaleY:0.8832,x:141.9,y:195.15},0).wait(1).to({scaleX:0.9121,scaleY:0.9121,x:142.4,y:197.4},0).wait(1).to({scaleX:0.9412,scaleY:0.9412,x:142.95,y:199.75},0).wait(1).to({scaleX:0.9705,scaleY:0.9705,x:143.5,y:202},0).wait(1).to({regX:118,regY:120.9,scaleX:1,scaleY:1,x:125,y:125.9},0).wait(1));
	this.bt.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.8,-892.7,756.1,1169.6);


(lib.Symbol14copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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
	this.btplay.name = "btplay";
	this.btplay.setTransform(-48.6,25.95,1,1,180);

	this.instance = new lib.Tween2copy("synched",0);
	this.instance.setTransform(-568.4,-251.1,0.0225,0.0225);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btplay}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},104).to({state:[{t:this.instance}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.1102,scaleY:1.1102,x:-568.3,y:-250.95},6).to({scaleX:0.936,scaleY:0.936,y:-251},3).to({scaleX:1.0585,scaleY:1.0585},3).to({regX:-0.1,regY:-0.1,scaleX:0.9812,scaleY:0.9812,x:-568.4,y:-251.1},3).to({regX:0,regY:0,scaleX:1.0585,scaleY:1.0585,x:-568.3,y:-251},4).to({startPosition:0},104).to({scaleX:0.0225,scaleY:0.0225,x:-568.4,y:-251.1},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-568.3,-895.4,605.6999999999999,977.8);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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
	this.btplay.name = "btplay";
	this.btplay.setTransform(-48.6,25.95);

	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(539,-268.5,0.0171,0.0171);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btplay}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},76).to({state:[{t:this.instance}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.0944,scaleY:1.0944},6).to({regX:0.1,scaleX:0.9117,scaleY:0.8145,x:539.1},3).to({regX:0,scaleX:1.0167,scaleY:1.0167,x:539},3).to({scaleX:0.9732,scaleY:0.9732},3).to({scaleX:1.0167,scaleY:1.0167},4).to({startPosition:0},76).to({scaleX:0.0171,scaleY:0.0171},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.8,-987,706.8,1068.4);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(151.95,47.4,0.8991,0.8991,0,0,0,122.4,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Symbol 13
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(13.8,15.1,1,1,0,0,0,13.8,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-17.7,y:-16.4},24,cjs.Ease.get(1)).to({x:13.8,y:15.1},25,cjs.Ease.get(-1)).wait(1));

	// Symbol 12
	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(13.8,80.1,1,1,0,0,0,13.8,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-17.7,y:111.6},24,cjs.Ease.get(1)).to({x:13.8,y:80.1},25,cjs.Ease.get(-1)).wait(1));

	// Symbol 11
	this.instance_3 = new lib.Symbol11();
	this.instance_3.setTransform(295.75,80.1,1,1,0,0,0,15.5,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:327.25,y:111.6},24,cjs.Ease.get(1)).to({x:295.75,y:80.1},25,cjs.Ease.get(-1)).wait(1));

	// Symbol 10
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(295.75,15.1,1,1,0,0,0,15.5,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:327.25,y:-16.4},24,cjs.Ease.get(1)).to({x:295.75,y:15.1},25,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(154.05,48.5,0.6974,0.5441,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.5,386.3,171.7);


(lib.Symbol49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.mal = new lib.Symbol14copy();
	this.mal.name = "mal";
	this.mal.setTransform(1253.15,13.3,0.6776,0.6776);

	this.bien = new lib.Symbol14();
	this.bien.name = "bien";
	this.bien.setTransform(63.8,17.2,0.6778,0.6778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bien},{t:this.mal}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(-3,-2,1260.3,78.9), null);


// stage content:
(lib.juegodepalabras10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"ini":1,c1:2,c2:13,c3:24,c4:35,c5:46,c6:57};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67];
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
		
		/////full scream and reset /////////////////
		
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
		location.reload();
		}
		this.stop();
		this.ready.play();
		
		this.btbackx.addEventListener("click", atras.bind(this));
		
		function atras()
		{
		
		this.gotoAndStop("ini");
		
		}
		
		/////titulos////////
		
		this.t1.text = "Refranes en ingles";
		this.t2.text = "Refranes en espanol";
		this.t3.text = "Movies from Disney";
		this.t4.text = "Products newborns ";
		this.t5.text = "Productos que un bebé recién nacido necesita";
		this.t6.text = "?";
		this.t7.text = "?";
		this.t8.text = "?";
		
		this.t9.text = "?";
		this.t10.text = "?";
		this.t11.text = "?";
		this.t12.text = "?";
		this.t13.text = "?";
		this.t14.text = "?";
		this.t15.text = "?";
		this.t16.text = "?";
		
		
		
		//////titulos a casillas////////
		this.ct1.titulo.text = this.t1.text;
		this.ct2.titulo.text = this.t2.text;
		this.ct3.titulo.text = this.t3.text;
		this.ct4.titulo.text = this.t4.text;
		this.ct5.titulo.text = this.t5.text;
		this.ct6.titulo.text = this.t6.text;
		this.ct7.titulo.text = this.t7.text;
		this.ct8.titulo.text = this.t8.text;
		
		this.ct9.titulo.text = this.t9.text;
		this.ct10.titulo.text = this.t10.text;
		this.ct11.titulo.text = this.t11.text;
		this.ct12.titulo.text = this.t12.text;
		this.ct13.titulo.text = this.t13.text;
		this.ct14.titulo.text = this.t14.text;
		this.ct15.titulo.text = this.t15.text;
		this.ct16.titulo.text = this.t16.text;
		
		this.ct1.minumero.text = "1";
		this.ct2.minumero.text = "2";
		this.ct3.minumero.text = "3";
		this.ct4.minumero.text = "4";
		this.ct5.minumero.text = "5";
		this.ct6.minumero.text = "6";
		this.ct7.minumero.text = "7";
		this.ct8.minumero.text = "8";
		
		this.ct9.minumero.text = "9";
		this.ct10.minumero.text = "10";
		this.ct11.minumero.text = "11";
		this.ct12.minumero.text = "12";
		this.ct13.minumero.text = "13";
		this.ct14.minumero.text = "14";
		this.ct15.minumero.text = "15";
		this.ct16.minumero.text = "16";
		
		/////////accion//////////
		
		this.ct1.addEventListener("click", hacer_1.bind(this));
		
		function hacer_1()
		{
		
		this.gotoAndStop("c1");
		
		}
		
		this.ct2.addEventListener("click", hacer_2.bind(this));
		
		function hacer_2()
		{
		
		this.gotoAndStop("c2");
		
		}
		
		this.ct3.addEventListener("click", hacer_3.bind(this));
		
		function hacer_3()
		{
		
		this.gotoAndStop("c3");
		
		}
		
		this.ct4.addEventListener("click", hacer_4.bind(this));
		
		function hacer_4()
		{
		
		this.gotoAndStop("c4");
		
		}
		
		this.ct5.addEventListener("click", hacer_5.bind(this));
		
		function hacer_5()
		{
		
		this.gotoAndStop("c5");
		
		}
		
		this.ct6.addEventListener("click", hacer_6.bind(this));
		
		function hacer_6()
		{
		
		this.gotoAndStop("c6");
		
		}
		
		
		this.ct7.addEventListener("click", hacer_7.bind(this));
		
		function hacer_7()
		{
		
		this.gotoAndStop("c7");
		
		}
		
		this.ct8.addEventListener("click", hacer_8.bind(this));
		
		function hacer_8()
		{
		
		this.gotoAndStop("c8");
		
		}
		
		this.ct9.addEventListener("click", hacer_9.bind(this));
		
		function hacer_9()
		{
		
		this.gotoAndStop("c9");
		
		}
		
		this.ct10.addEventListener("click", hacer_10.bind(this));
		
		function hacer_10()
		{
		
		this.gotoAndStop("c10");
		
		}
		
		this.ct11.addEventListener("click", hacer_11.bind(this));
		
		function hacer_11()
		{
		
		this.gotoAndStop("c11");
		
		}
		
		this.ct12.addEventListener("click", hacer_12.bind(this));
		
		function hacer_12()
		{
		
		this.gotoAndStop("c12");
		
		}
		
		
		this.ct13.addEventListener("click", hacer_13.bind(this));
		
		function hacer_13()
		{
		
		this.gotoAndStop("c13");
		
		}
		
		this.ct14.addEventListener("click", hacer_14.bind(this));
		
		function hacer_14()
		{
		
		this.gotoAndStop("c14");
		
		}
		
		
		this.ct15.addEventListener("click", hacer_15.bind(this));
		
		function hacer_15()
		{
		
		this.gotoAndStop("c15");
		
		}
		
		this.ct16.addEventListener("click", hacer_16.bind(this));
		
		function hacer_16()
		{
		
		this.gotoAndStop("c16");
		
		}
	}
	this.frame_2 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*A PENNY SAVED IS A PENNY EARNED.*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "A";
		this.a4.letra.text = "";
		this.a5.letra.text = "P";
		this.a6.letra.text = "E";
		this.a7.letra.text = "N";
		this.a8.letra.text = "N";
		this.a9.letra.text = "Y";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "S";
		this.b3.letra.text = "A";
		this.b4.letra.text = "V";
		this.b5.letra.text = "E";
		this.b6.letra.text = "D";
		this.b7.letra.text = "";
		this.b8.letra.text = "I";
		this.b9.letra.text = "S";
		this.b10.letra.text = "";
		this.b11.letra.text = "A";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "P";
		this.c2.letra.text = "E";
		this.c3.letra.text = "N";
		this.c4.letra.text = "N";
		this.c5.letra.text = "Y";
		this.c6.letra.text = "";
		this.c7.letra.text = "E";
		this.c8.letra.text = "A";
		this.c9.letra.text = "R";
		this.c10.letra.text = "N";
		this.c11.letra.text = "E";
		this.c12.letra.text = "D";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
		this.titulo.text = this.t1.text;
		
		this.a.letra.text = "A";
		this.b.letra.text = "B";
		this.c.letra.text = "C";
		this.d.letra.text = "D";
		this.e.letra.text = "E";
		this.f.letra.text = "F";
		this.g.letra.text = "G";
		
		this.h.letra.text = "H";
		this.i.letra.text = "I";
		this.j.letra.text = "J";
		this.k.letra.text = "K";
		this.l.letra.text = "L";
		this.m.letra.text = "M";
		this.n.letra.text = "N";
		
		this.ene.letra.text = "Ñ";
		this.o.letra.text = "O";
		this.p.letra.text = "P";
		this.q.letra.text = "Q";
		this.r.letra.text = "R";
		this.s.letra.text = "S";
		this.t.letra.text = "T";
		
		this.u.letra.text = "U";
		this.v.letra.text = "V";
		this.w.letra.text = "W";
		this.ex.letra.text = "X";
		this.ye.letra.text = "Y";
		this.z.letra.text = "Z";
	}
	this.frame_3 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*A stitch in time saves nine*/
		
		this.a1.letra.text = "A";
		this.a2.letra.text = "";
		this.a3.letra.text = "S";
		this.a4.letra.text = "T";
		this.a5.letra.text = "I";
		this.a6.letra.text = "T";
		this.a7.letra.text = "C";
		this.a8.letra.text = "H";
		this.a9.letra.text = "";
		this.a10.letra.text = "I";
		this.a11.letra.text = "N";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "T";
		this.b2.letra.text = "I";
		this.b3.letra.text = "M";
		this.b4.letra.text = "E";
		this.b5.letra.text = "";
		this.b6.letra.text = "S";
		this.b7.letra.text = "A";
		this.b8.letra.text = "V";
		this.b9.letra.text = "E";
		this.b10.letra.text = "S";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "N";
		this.c6.letra.text = "I";
		this.c7.letra.text = "N";
		this.c8.letra.text = "E";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_4 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*When in Rome, do as the Romans do*/
		
		this.a1.letra.text = "W";
		this.a2.letra.text = "H";
		this.a3.letra.text = "E";
		this.a4.letra.text = "N";
		this.a5.letra.text = "";
		this.a6.letra.text = "I";
		this.a7.letra.text = "N";
		this.a8.letra.text = "";
		this.a9.letra.text = "R";
		this.a10.letra.text = "O";
		this.a11.letra.text = "M";
		this.a12.letra.text = "E";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "D";
		this.b3.letra.text = "O";
		this.b4.letra.text = "";
		this.b5.letra.text = "A";
		this.b6.letra.text = "S";
		this.b7.letra.text = "";
		this.b8.letra.text = "T";
		this.b9.letra.text = "H";
		this.b10.letra.text = "E";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "R";
		this.c2.letra.text = "O";
		this.c3.letra.text = "M";
		this.c4.letra.text = "A";
		this.c5.letra.text = "N";
		this.c6.letra.text = "S";
		this.c7.letra.text = "";
		this.c8.letra.text = "D";
		this.c9.letra.text = "O";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_5 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Actions speak louder than words.*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "A";
		this.a4.letra.text = "C";
		this.a5.letra.text = "T";
		this.a6.letra.text = "I";
		this.a7.letra.text = "O";
		this.a8.letra.text = "N";
		this.a9.letra.text = "S";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "S";
		this.b2.letra.text = "P";
		this.b3.letra.text = "E";
		this.b4.letra.text = "A";
		this.b5.letra.text = "K";
		this.b6.letra.text = "";
		this.b7.letra.text = "L";
		this.b8.letra.text = "O";
		this.b9.letra.text = "U";
		this.b10.letra.text = "D";
		this.b11.letra.text = "E";
		this.b12.letra.text = "R";
		
		this.c1.letra.text = "T";
		this.c2.letra.text = "H";
		this.c3.letra.text = "A";
		this.c4.letra.text = "N";
		this.c5.letra.text = "";
		this.c6.letra.text = "W";
		this.c7.letra.text = "O";
		this.c8.letra.text = "R";
		this.c9.letra.text = "D";
		this.c10.letra.text = "S";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_6 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*You can't judge a book by its cover*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "Y";
		this.a4.letra.text = "O";
		this.a5.letra.text = "U";
		this.a6.letra.text = "";
		this.a7.letra.text = "C";
		this.a8.letra.text = "A";
		this.a9.letra.text = "N";
		this.a10.letra.text = "T";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "J";
		this.b2.letra.text = "U";
		this.b3.letra.text = "D";
		this.b4.letra.text = "G";
		this.b5.letra.text = "E";
		this.b6.letra.text = "";
		this.b7.letra.text = "A";
		this.b8.letra.text = "";
		this.b9.letra.text = "B";
		this.b10.letra.text = "O";
		this.b11.letra.text = "O";
		this.b12.letra.text = "K";
		
		this.c1.letra.text = "B";
		this.c2.letra.text = "Y";
		this.c3.letra.text = "";
		this.c4.letra.text = "I";
		this.c5.letra.text = "T";
		this.c6.letra.text = "S";
		this.c7.letra.text = "";
		this.c8.letra.text = "C";
		this.c9.letra.text = "O";
		this.c10.letra.text = "V";
		this.c11.letra.text = "E";
		this.c12.letra.text = "R";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_7 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*The early bird catches the worm*/
		
		this.a1.letra.text = "T";
		this.a2.letra.text = "H";
		this.a3.letra.text = "E";
		this.a4.letra.text = "";
		this.a5.letra.text = "E";
		this.a6.letra.text = "A";
		this.a7.letra.text = "R";
		this.a8.letra.text = "L";
		this.a9.letra.text = "Y";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "B";
		this.b2.letra.text = "I";
		this.b3.letra.text = "R";
		this.b4.letra.text = "D";
		this.b5.letra.text = "";
		this.b6.letra.text = "C";
		this.b7.letra.text = "A";
		this.b8.letra.text = "T";
		this.b9.letra.text = "C";
		this.b10.letra.text = "H";
		this.b11.letra.text = "E";
		this.b12.letra.text = "S";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "T";
		this.c5.letra.text = "H";
		this.c6.letra.text = "E";
		this.c7.letra.text = "";
		this.c8.letra.text = "W";
		this.c9.letra.text = "O";
		this.c10.letra.text = "R";
		this.c11.letra.text = "M";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_8 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Practice makes perfect*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "P";
		this.a4.letra.text = "R";
		this.a5.letra.text = "A";
		this.a6.letra.text = "C";
		this.a7.letra.text = "T";
		this.a8.letra.text = "I";
		this.a9.letra.text = "C";
		this.a10.letra.text = "E";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "M";
		this.b5.letra.text = "A";
		this.b6.letra.text = "K";
		this.b7.letra.text = "E";
		this.b8.letra.text = "S";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "P";
		this.c5.letra.text = "E";
		this.c6.letra.text = "R";
		this.c7.letra.text = "F";
		this.c8.letra.text = "E";
		this.c9.letra.text = "C";
		this.c10.letra.text = "T";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_9 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*All's fair in love and war.*/
		
		this.a1.letra.text = "A";
		this.a2.letra.text = "L";
		this.a3.letra.text = "L";
		this.a4.letra.text = "S";
		this.a5.letra.text = "";
		this.a6.letra.text = "F";
		this.a7.letra.text = "A";
		this.a8.letra.text = "I";
		this.a9.letra.text = "R";
		this.a10.letra.text = "";
		this.a11.letra.text = "I";
		this.a12.letra.text = "N";
		
		this.b1.letra.text = "L";
		this.b2.letra.text = "O";
		this.b3.letra.text = "V";
		this.b4.letra.text = "E";
		this.b5.letra.text = "";
		this.b6.letra.text = "A";
		this.b7.letra.text = "N";
		this.b8.letra.text = "D";
		this.b9.letra.text = "";
		this.b10.letra.text = "W";
		this.b11.letra.text = "A";
		this.b12.letra.text = "R";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_10 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Rome wasn't built in a day*/
		
		this.a1.letra.text = "R";
		this.a2.letra.text = "O";
		this.a3.letra.text = "M";
		this.a4.letra.text = "E";
		this.a5.letra.text = "";
		this.a6.letra.text = "W";
		this.a7.letra.text = "A";
		this.a8.letra.text = "S";
		this.a9.letra.text = "N";
		this.a10.letra.text = "T";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "B";
		this.b4.letra.text = "U";
		this.b5.letra.text = "I";
		this.b6.letra.text = "L";
		this.b7.letra.text = "T";
		this.b8.letra.text = "";
		this.b9.letra.text = "I";
		this.b10.letra.text = "N";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "A";
		this.c5.letra.text = "";
		this.c6.letra.text = "D";
		this.c7.letra.text = "A";
		this.c8.letra.text = "Y";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_11 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Two wrongs don't make a right*/
		
		this.a1.letra.text = "T";
		this.a2.letra.text = "W";
		this.a3.letra.text = "O";
		this.a4.letra.text = "";
		this.a5.letra.text = "W";
		this.a6.letra.text = "R";
		this.a7.letra.text = "O";
		this.a8.letra.text = "N";
		this.a9.letra.text = "G";
		this.a10.letra.text = "S";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "D";
		this.b2.letra.text = "O";
		this.b3.letra.text = "N";
		this.b4.letra.text = "T";
		this.b5.letra.text = "";
		this.b6.letra.text = "M";
		this.b7.letra.text = "A";
		this.b8.letra.text = "K";
		this.b9.letra.text = "E";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "A";
		this.c5.letra.text = "";
		this.c6.letra.text = "R";
		this.c7.letra.text = "I";
		this.c8.letra.text = "G";
		this.c9.letra.text = "H";
		this.c10.letra.text = "T";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_12 = function() {
		this.stop();
		
		this.btplay.addEventListener("click", atras2.bind(this));
		
		function atras2()
		{
		
		this.gotoAndStop("ini");
		
		}
	}
	this.frame_13 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Más vale tarde que nunca*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "M";
		this.a4.letra.text = "A";
		this.a5.letra.text = "S";
		this.a6.letra.text = "";
		this.a7.letra.text = "V";
		this.a8.letra.text = "A";
		this.a9.letra.text = "L";
		this.a10.letra.text = "E";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "T";
		this.b3.letra.text = "A";
		this.b4.letra.text = "R";
		this.b5.letra.text = "D";
		this.b6.letra.text = "E";
		this.b7.letra.text = "";
		this.b8.letra.text = "Q";
		this.b9.letra.text = "U";
		this.b10.letra.text = "E";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "N";
		this.c6.letra.text = "U";
		this.c7.letra.text = "N";
		this.c8.letra.text = "C";
		this.c9.letra.text = "A";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
		this.titulo.text = this.t2.text;
		
		this.a.letra.text = "A";
		this.b.letra.text = "B";
		this.c.letra.text = "C";
		this.d.letra.text = "D";
		this.e.letra.text = "E";
		this.f.letra.text = "F";
		this.g.letra.text = "G";
		
		this.h.letra.text = "H";
		this.i.letra.text = "I";
		this.j.letra.text = "J";
		this.k.letra.text = "K";
		this.l.letra.text = "L";
		this.m.letra.text = "M";
		this.n.letra.text = "N";
		
		this.ene.letra.text = "Ñ";
		this.o.letra.text = "O";
		this.p.letra.text = "P";
		this.q.letra.text = "Q";
		this.r.letra.text = "R";
		this.s.letra.text = "S";
		this.t.letra.text = "T";
		
		this.u.letra.text = "U";
		this.v.letra.text = "V";
		this.w.letra.text = "W";
		this.ex.letra.text = "X";
		this.ye.letra.text = "Y";
		this.z.letra.text = "Z";
	}
	this.frame_14 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*No hay mal que por bien no venga*/
		
		this.a1.letra.text = "N";
		this.a2.letra.text = "O";
		this.a3.letra.text = "";
		this.a4.letra.text = "H";
		this.a5.letra.text = "A";
		this.a6.letra.text = "Y";
		this.a7.letra.text = "";
		this.a8.letra.text = "M";
		this.a9.letra.text = "A";
		this.a10.letra.text = "L";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "Q";
		this.b2.letra.text = "U";
		this.b3.letra.text = "E";
		this.b4.letra.text = "";
		this.b5.letra.text = "P";
		this.b6.letra.text = "O";
		this.b7.letra.text = "R";
		this.b8.letra.text = "";
		this.b9.letra.text = "B";
		this.b10.letra.text = "I";
		this.b11.letra.text = "E";
		this.b12.letra.text = "N";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "N";
		this.c4.letra.text = "O";
		this.c5.letra.text = "";
		this.c6.letra.text = "V";
		this.c7.letra.text = "E";
		this.c8.letra.text = "N";
		this.c9.letra.text = "G";
		this.c10.letra.text = "A";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_15 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*No todo lo que brilla es oro*/
		
		this.a1.letra.text = "N";
		this.a2.letra.text = "O";
		this.a3.letra.text = "";
		this.a4.letra.text = "T";
		this.a5.letra.text = "O";
		this.a6.letra.text = "D";
		this.a7.letra.text = "O";
		this.a8.letra.text = "";
		this.a9.letra.text = "L";
		this.a10.letra.text = "O";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "Q";
		this.b2.letra.text = "U";
		this.b3.letra.text = "E";
		this.b4.letra.text = "";
		this.b5.letra.text = "B";
		this.b6.letra.text = "R";
		this.b7.letra.text = "I";
		this.b8.letra.text = "L";
		this.b9.letra.text = "L";
		this.b10.letra.text = "A";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "E";
		this.c6.letra.text = "S";
		this.c7.letra.text = "";
		this.c8.letra.text = "O";
		this.c9.letra.text = "R";
		this.c10.letra.text = "O";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_16 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*El que mucho abarca poco aprieta.*/
		
		this.a1.letra.text = "E";
		this.a2.letra.text = "L";
		this.a3.letra.text = "";
		this.a4.letra.text = "Q";
		this.a5.letra.text = "U";
		this.a6.letra.text = "E";
		this.a7.letra.text = "";
		this.a8.letra.text = "M";
		this.a9.letra.text = "U";
		this.a10.letra.text = "C";
		this.a11.letra.text = "H";
		this.a12.letra.text = "O";
		
		this.b1.letra.text = "A";
		this.b2.letra.text = "B";
		this.b3.letra.text = "A";
		this.b4.letra.text = "R";
		this.b5.letra.text = "C";
		this.b6.letra.text = "A";
		this.b7.letra.text = "";
		this.b8.letra.text = "P";
		this.b9.letra.text = "O";
		this.b10.letra.text = "C";
		this.b11.letra.text = "O";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "A";
		this.c4.letra.text = "P";
		this.c5.letra.text = "R";
		this.c6.letra.text = "I";
		this.c7.letra.text = "E";
		this.c8.letra.text = "T";
		this.c9.letra.text = "A";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_17 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Al mal tiempo, buena cara*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "A";
		this.a5.letra.text = "L";
		this.a6.letra.text = "";
		this.a7.letra.text = "M";
		this.a8.letra.text = "A";
		this.a9.letra.text = "L";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "T";
		this.b2.letra.text = "I";
		this.b3.letra.text = "E";
		this.b4.letra.text = "M";
		this.b5.letra.text = "P";
		this.b6.letra.text = "O";
		this.b7.letra.text = "";
		this.b8.letra.text = "B";
		this.b9.letra.text = "U";
		this.b10.letra.text = "E";
		this.b11.letra.text = "N";
		this.b12.letra.text = "A";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "C";
		this.c6.letra.text = "A";
		this.c7.letra.text = "R";
		this.c8.letra.text = "A";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_18 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*La curiosidad mató al gato*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "L";
		this.a6.letra.text = "A";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "C";
		this.b3.letra.text = "U";
		this.b4.letra.text = "R";
		this.b5.letra.text = "I";
		this.b6.letra.text = "O";
		this.b7.letra.text = "S";
		this.b8.letra.text = "I";
		this.b9.letra.text = "D";
		this.b10.letra.text = "A";
		this.b11.letra.text = "D";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "M";
		this.c2.letra.text = "A";
		this.c3.letra.text = "T";
		this.c4.letra.text = "O";
		this.c5.letra.text = "";
		this.c6.letra.text = "A";
		this.c7.letra.text = "L";
		this.c8.letra.text = "";
		this.c9.letra.text = "G";
		this.c10.letra.text = "A";
		this.c11.letra.text = "T";
		this.c12.letra.text = "O";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_19 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*El tiempo todo lo cura*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "E";
		this.a3.letra.text = "L";
		this.a4.letra.text = "";
		this.a5.letra.text = "T";
		this.a6.letra.text = "I";
		this.a7.letra.text = "E";
		this.a8.letra.text = "M";
		this.a9.letra.text = "P";
		this.a10.letra.text = "O";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "T";
		this.b2.letra.text = "O";
		this.b3.letra.text = "D";
		this.b4.letra.text = "O";
		this.b5.letra.text = "";
		this.b6.letra.text = "L";
		this.b7.letra.text = "O";
		this.b8.letra.text = "";
		this.b9.letra.text = "C";
		this.b10.letra.text = "U";
		this.b11.letra.text = "R";
		this.b12.letra.text = "A";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_20 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*El que ríe al último, ríe mejor*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "E";
		this.a3.letra.text = "L";
		this.a4.letra.text = "";
		this.a5.letra.text = "Q";
		this.a6.letra.text = "U";
		this.a7.letra.text = "E";
		this.a8.letra.text = "";
		this.a9.letra.text = "R";
		this.a10.letra.text = "I";
		this.a11.letra.text = "E";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "A";
		this.b3.letra.text = "L";
		this.b4.letra.text = "";
		this.b5.letra.text = "U";
		this.b6.letra.text = "L";
		this.b7.letra.text = "T";
		this.b8.letra.text = "I";
		this.b9.letra.text = "M";
		this.b10.letra.text = "O";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "R";
		this.c4.letra.text = "I";
		this.c5.letra.text = "E";
		this.c6.letra.text = "";
		this.c7.letra.text = "M";
		this.c8.letra.text = "E";
		this.c9.letra.text = "J";
		this.c10.letra.text = "O";
		this.c11.letra.text = "R";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_21 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Zapatero a tus zapatos*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "Z";
		this.a3.letra.text = "A";
		this.a4.letra.text = "P";
		this.a5.letra.text = "A";
		this.a6.letra.text = "T";
		this.a7.letra.text = "E";
		this.a8.letra.text = "R";
		this.a9.letra.text = "O";
		this.a10.letra.text = "";
		this.a11.letra.text = "A";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "T";
		this.b3.letra.text = "U";
		this.b4.letra.text = "S";
		this.b5.letra.text = "";
		this.b6.letra.text = "Z";
		this.b7.letra.text = "A";
		this.b8.letra.text = "P";
		this.b9.letra.text = "A";
		this.b10.letra.text = "T";
		this.b11.letra.text = "O";
		this.b12.letra.text = "S";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_22 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Haz el bien sin mirar a quién*/
		
		this.a1.letra.text = "H";
		this.a2.letra.text = "A";
		this.a3.letra.text = "Z";
		this.a4.letra.text = "";
		this.a5.letra.text = "E";
		this.a6.letra.text = "L";
		this.a7.letra.text = "";
		this.a8.letra.text = "B";
		this.a9.letra.text = "I";
		this.a10.letra.text = "E";
		this.a11.letra.text = "N";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "S";
		this.b4.letra.text = "I";
		this.b5.letra.text = "N";
		this.b6.letra.text = "";
		this.b7.letra.text = "M";
		this.b8.letra.text = "I";
		this.b9.letra.text = "R";
		this.b10.letra.text = "A";
		this.b11.letra.text = "R";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "A";
		this.c5.letra.text = "";
		this.c6.letra.text = "Q";
		this.c7.letra.text = "U";
		this.c8.letra.text = "I";
		this.c9.letra.text = "E";
		this.c10.letra.text = "N";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_23 = function() {
		this.stop();
		
		this.btplay.addEventListener("click", atras2.bind(this));
		
		function atras2()
		{
		
		this.gotoAndStop("ini");
		
		}
	}
	this.frame_24 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*The Lion King*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "T";
		this.a4.letra.text = "H";
		this.a5.letra.text = "E";
		this.a6.letra.text = "";
		this.a7.letra.text = "L";
		this.a8.letra.text = "I";
		this.a9.letra.text = "O";
		this.a10.letra.text = "N";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "K";
		this.b6.letra.text = "I";
		this.b7.letra.text = "N";
		this.b8.letra.text = "G";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
		this.titulo.text = this.t3.text;
		
		this.a.letra.text = "A";
		this.b.letra.text = "B";
		this.c.letra.text = "C";
		this.d.letra.text = "D";
		this.e.letra.text = "E";
		this.f.letra.text = "F";
		this.g.letra.text = "G";
		
		this.h.letra.text = "H";
		this.i.letra.text = "I";
		this.j.letra.text = "J";
		this.k.letra.text = "K";
		this.l.letra.text = "L";
		this.m.letra.text = "M";
		this.n.letra.text = "N";
		
		this.ene.letra.text = "Ñ";
		this.o.letra.text = "O";
		this.p.letra.text = "P";
		this.q.letra.text = "Q";
		this.r.letra.text = "R";
		this.s.letra.text = "S";
		this.t.letra.text = "T";
		
		this.u.letra.text = "U";
		this.v.letra.text = "V";
		this.w.letra.text = "W";
		this.ex.letra.text = "X";
		this.ye.letra.text = "Y";
		this.z.letra.text = "Z";
	}
	this.frame_25 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Beauty and the Beast*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "B";
		this.a3.letra.text = "E";
		this.a4.letra.text = "A";
		this.a5.letra.text = "U";
		this.a6.letra.text = "T";
		this.a7.letra.text = "Y";
		this.a8.letra.text = "";
		this.a9.letra.text = "A";
		this.a10.letra.text = "N";
		this.a11.letra.text = "D";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "T";
		this.b4.letra.text = "H";
		this.b5.letra.text = "E";
		this.b6.letra.text = "";
		this.b7.letra.text = "B";
		this.b8.letra.text = "E";
		this.b9.letra.text = "A";
		this.b10.letra.text = "S";
		this.b11.letra.text = "T";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_26 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Aladdin*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "A";
		this.b4.letra.text = "L";
		this.b5.letra.text = "A";
		this.b6.letra.text = "D";
		this.b7.letra.text = "D";
		this.b8.letra.text = "I";
		this.b9.letra.text = "N";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_27 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Mulan*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "M";
		this.b6.letra.text = "U";
		this.b7.letra.text = "L";
		this.b8.letra.text = "A";
		this.b9.letra.text = "N";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_28 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Pocahontas*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "P";
		this.b3.letra.text = "O";
		this.b4.letra.text = "C";
		this.b5.letra.text = "A";
		this.b6.letra.text = "H";
		this.b7.letra.text = "O";
		this.b8.letra.text = "N";
		this.b9.letra.text = "T";
		this.b10.letra.text = "A";
		this.b11.letra.text = "S";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_29 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Toy Story*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "T";
		this.b3.letra.text = "O";
		this.b4.letra.text = "Y";
		this.b5.letra.text = "";
		this.b6.letra.text = "S";
		this.b7.letra.text = "T";
		this.b8.letra.text = "O";
		this.b9.letra.text = "R";
		this.b10.letra.text = "Y";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_30 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Finding Nemo*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "F";
		this.b2.letra.text = "I";
		this.b3.letra.text = "N";
		this.b4.letra.text = "D";
		this.b5.letra.text = "I";
		this.b6.letra.text = "N";
		this.b7.letra.text = "G";
		this.b8.letra.text = "";
		this.b9.letra.text = "N";
		this.b10.letra.text = "E";
		this.b11.letra.text = "M";
		this.b12.letra.text = "O";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_31 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Wall-E*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "W";
		this.b5.letra.text = "A";
		this.b6.letra.text = "L";
		this.b7.letra.text = "L";
		this.b8.letra.text = "";
		this.b9.letra.text = "E";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_32 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*The Incredibles*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "T";
		this.a6.letra.text = "H";
		this.a7.letra.text = "E";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "I";
		this.b3.letra.text = "N";
		this.b4.letra.text = "C";
		this.b5.letra.text = "R";
		this.b6.letra.text = "E";
		this.b7.letra.text = "D";
		this.b8.letra.text = "I";
		this.b9.letra.text = "B";
		this.b10.letra.text = "L";
		this.b11.letra.text = "E";
		this.b12.letra.text = "S";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_33 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Frozen*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "F";
		this.b5.letra.text = "R";
		this.b6.letra.text = "O";
		this.b7.letra.text = "Z";
		this.b8.letra.text = "E";
		this.b9.letra.text = "N";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_34 = function() {
		this.stop();
		
		this.btplay.addEventListener("click", atras2.bind(this));
		
		function atras2()
		{
		
		this.gotoAndStop("ini");
		
		}
	}
	this.frame_35 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Diapers*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "D";
		this.b5.letra.text = "I";
		this.b6.letra.text = "A";
		this.b7.letra.text = "P";
		this.b8.letra.text = "E";
		this.b9.letra.text = "R";
		this.b10.letra.text = "S";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
		this.titulo.text = this.t4.text;
		
		this.a.letra.text = "A";
		this.b.letra.text = "B";
		this.c.letra.text = "C";
		this.d.letra.text = "D";
		this.e.letra.text = "E";
		this.f.letra.text = "F";
		this.g.letra.text = "G";
		
		this.h.letra.text = "H";
		this.i.letra.text = "I";
		this.j.letra.text = "J";
		this.k.letra.text = "K";
		this.l.letra.text = "L";
		this.m.letra.text = "M";
		this.n.letra.text = "N";
		
		this.ene.letra.text = "Ñ";
		this.o.letra.text = "O";
		this.p.letra.text = "P";
		this.q.letra.text = "Q";
		this.r.letra.text = "R";
		this.s.letra.text = "S";
		this.t.letra.text = "T";
		
		this.u.letra.text = "U";
		this.v.letra.text = "V";
		this.w.letra.text = "W";
		this.ex.letra.text = "X";
		this.ye.letra.text = "Y";
		this.z.letra.text = "Z";
	}
	this.frame_36 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Baby wipes*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "B";
		this.b3.letra.text = "A";
		this.b4.letra.text = "B";
		this.b5.letra.text = "Y";
		this.b6.letra.text = "";
		this.b7.letra.text = "W";
		this.b8.letra.text = "I";
		this.b9.letra.text = "P";
		this.b10.letra.text = "E";
		this.b11.letra.text = "S";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_37 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Comfortable clothing */
		
		this.a1.letra.text = "C";
		this.a2.letra.text = "O";
		this.a3.letra.text = "M";
		this.a4.letra.text = "F";
		this.a5.letra.text = "O";
		this.a6.letra.text = "R";
		this.a7.letra.text = "T";
		this.a8.letra.text = "A";
		this.a9.letra.text = "B";
		this.a10.letra.text = "L";
		this.a11.letra.text = "E";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "C";
		this.b4.letra.text = "L";
		this.b5.letra.text = "O";
		this.b6.letra.text = "T";
		this.b7.letra.text = "H";
		this.b8.letra.text = "I";
		this.b9.letra.text = "N";
		this.b10.letra.text = "G";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_38 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Swaddling blankets*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "S";
		this.a3.letra.text = "W";
		this.a4.letra.text = "A";
		this.a5.letra.text = "D";
		this.a6.letra.text = "D";
		this.a7.letra.text = "L";
		this.a8.letra.text = "I";
		this.a9.letra.text = "N";
		this.a10.letra.text = "G";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "B";
		this.b5.letra.text = "L";
		this.b6.letra.text = "A";
		this.b7.letra.text = "N";
		this.b8.letra.text = "K";
		this.b9.letra.text = "E";
		this.b10.letra.text = "T";
		this.b11.letra.text = "S";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_39 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Stroller or carriage*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "S";
		this.a4.letra.text = "T";
		this.a5.letra.text = "R";
		this.a6.letra.text = "O";
		this.a7.letra.text = "L";
		this.a8.letra.text = "L";
		this.a9.letra.text = "E";
		this.a10.letra.text = "R";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "O";
		this.b2.letra.text = "R";
		this.b3.letra.text = "";
		this.b4.letra.text = "C";
		this.b5.letra.text = "A";
		this.b6.letra.text = "R";
		this.b7.letra.text = "R";
		this.b8.letra.text = "I";
		this.b9.letra.text = "A";
		this.b10.letra.text = "G";
		this.b11.letra.text = "E";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_40 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Car seat*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "C";
		this.b4.letra.text = "A";
		this.b5.letra.text = "R";
		this.b6.letra.text = "";
		this.b7.letra.text = "S";
		this.b8.letra.text = "E";
		this.b9.letra.text = "A";
		this.b10.letra.text = "T";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_41 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Bottles and nipples*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "B";
		this.a3.letra.text = "O";
		this.a4.letra.text = "T";
		this.a5.letra.text = "T";
		this.a6.letra.text = "L";
		this.a7.letra.text = "E";
		this.a8.letra.text = "S";
		this.a9.letra.text = "";
		this.a10.letra.text = "A";
		this.a11.letra.text = "N";
		this.a12.letra.text = "D";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "N";
		this.b5.letra.text = "I";
		this.b6.letra.text = "P";
		this.b7.letra.text = "P";
		this.b8.letra.text = "L";
		this.b9.letra.text = "E";
		this.b10.letra.text = "S";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_42 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Formula or breast pump*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "F";
		this.a3.letra.text = "O";
		this.a4.letra.text = "R";
		this.a5.letra.text = "M";
		this.a6.letra.text = "U";
		this.a7.letra.text = "L";
		this.a8.letra.text = "A";
		this.a9.letra.text = "";
		this.a10.letra.text = "O";
		this.a11.letra.text = "R";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "B";
		this.b3.letra.text = "R";
		this.b4.letra.text = "E";
		this.b5.letra.text = "A";
		this.b6.letra.text = "S";
		this.b7.letra.text = "T";
		this.b8.letra.text = "";
		this.b9.letra.text = "P";
		this.b10.letra.text = "U";
		this.b11.letra.text = "M";
		this.b12.letra.text = "P";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_43 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Pacifiers*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "P";
		this.b3.letra.text = "A";
		this.b4.letra.text = "C";
		this.b5.letra.text = "I";
		this.b6.letra.text = "F";
		this.b7.letra.text = "I";
		this.b8.letra.text = "E";
		this.b9.letra.text = "R";
		this.b10.letra.text = "S";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_44 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Baby thermometer*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "B";
		this.a6.letra.text = "A";
		this.a7.letra.text = "B";
		this.a8.letra.text = "Y";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "T";
		this.b3.letra.text = "H";
		this.b4.letra.text = "E";
		this.b5.letra.text = "R";
		this.b6.letra.text = "M";
		this.b7.letra.text = "O";
		this.b8.letra.text = "M";
		this.b9.letra.text = "E";
		this.b10.letra.text = "T";
		this.b11.letra.text = "E";
		this.b12.letra.text = "R";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_45 = function() {
		this.stop();
		
		this.btplay.addEventListener("click", atras2.bind(this));
		
		function atras2()
		{
		
		this.gotoAndStop("ini");
		
		}
	}
	this.frame_46 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Pañales*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "P";
		this.b4.letra.text = "A";
		this.b5.letra.text = "Ñ";
		this.b6.letra.text = "A";
		this.b7.letra.text = "L";
		this.b8.letra.text = "E";
		this.b9.letra.text = "S";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
		this.titulo.text = this.t5.text;
		
		this.a.letra.text = "A";
		this.b.letra.text = "B";
		this.c.letra.text = "C";
		this.d.letra.text = "D";
		this.e.letra.text = "E";
		this.f.letra.text = "F";
		this.g.letra.text = "G";
		
		this.h.letra.text = "H";
		this.i.letra.text = "I";
		this.j.letra.text = "J";
		this.k.letra.text = "K";
		this.l.letra.text = "L";
		this.m.letra.text = "M";
		this.n.letra.text = "N";
		
		this.ene.letra.text = "Ñ";
		this.o.letra.text = "O";
		this.p.letra.text = "P";
		this.q.letra.text = "Q";
		this.r.letra.text = "R";
		this.s.letra.text = "S";
		this.t.letra.text = "T";
		
		this.u.letra.text = "U";
		this.v.letra.text = "V";
		this.w.letra.text = "W";
		this.ex.letra.text = "X";
		this.ye.letra.text = "Y";
		this.z.letra.text = "Z";
	}
	this.frame_47 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Toallitas húmedas para bebé*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "T";
		this.a3.letra.text = "O";
		this.a4.letra.text = "A";
		this.a5.letra.text = "L";
		this.a6.letra.text = "L";
		this.a7.letra.text = "I";
		this.a8.letra.text = "T";
		this.a9.letra.text = "A";
		this.a10.letra.text = "S";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "H";
		this.b4.letra.text = "U";
		this.b5.letra.text = "M";
		this.b6.letra.text = "E";
		this.b7.letra.text = "D";
		this.b8.letra.text = "A";
		this.b9.letra.text = "S";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "P";
		this.c3.letra.text = "A";
		this.c4.letra.text = "R";
		this.c5.letra.text = "A";
		this.c6.letra.text = "";
		this.c7.letra.text = "B";
		this.c8.letra.text = "E";
		this.c9.letra.text = "B";
		this.c10.letra.text = "E";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_48 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Silla para el automóvil*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "S";
		this.a3.letra.text = "I";
		this.a4.letra.text = "L";
		this.a5.letra.text = "L";
		this.a6.letra.text = "A";
		this.a7.letra.text = "";
		this.a8.letra.text = "P";
		this.a9.letra.text = "A";
		this.a10.letra.text = "R";
		this.a11.letra.text = "A";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "E";
		this.b2.letra.text = "L";
		this.b3.letra.text = "";
		this.b4.letra.text = "A";
		this.b5.letra.text = "U";
		this.b6.letra.text = "T";
		this.b7.letra.text = "O";
		this.b8.letra.text = "M";
		this.b9.letra.text = "O";
		this.b10.letra.text = "V";
		this.b11.letra.text = "I";
		this.b12.letra.text = "L";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_49 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Cobijas o mantas*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "C";
		this.a4.letra.text = "O";
		this.a5.letra.text = "B";
		this.a6.letra.text = "I";
		this.a7.letra.text = "J";
		this.a8.letra.text = "A";
		this.a9.letra.text = "S";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "O";
		this.b3.letra.text = "";
		this.b4.letra.text = "M";
		this.b5.letra.text = "A";
		this.b6.letra.text = "N";
		this.b7.letra.text = "T";
		this.b8.letra.text = "A";
		this.b9.letra.text = "S";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_50 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Biberones y tetinas*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "B";
		this.a3.letra.text = "I";
		this.a4.letra.text = "B";
		this.a5.letra.text = "E";
		this.a6.letra.text = "R";
		this.a7.letra.text = "O";
		this.a8.letra.text = "N";
		this.a9.letra.text = "E";
		this.a10.letra.text = "S";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "Y";
		this.b3.letra.text = "";
		this.b4.letra.text = "T";
		this.b5.letra.text = "E";
		this.b6.letra.text = "T";
		this.b7.letra.text = "I";
		this.b8.letra.text = "N";
		this.b9.letra.text = "A";
		this.b10.letra.text = "S";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_51 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Chupones*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "C";
		this.b4.letra.text = "H";
		this.b5.letra.text = "U";
		this.b6.letra.text = "P";
		this.b7.letra.text = "O";
		this.b8.letra.text = "N";
		this.b9.letra.text = "E";
		this.b10.letra.text = "S";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_52 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Termómetro para bebé*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "T";
		this.a3.letra.text = "E";
		this.a4.letra.text = "R";
		this.a5.letra.text = "M";
		this.a6.letra.text = "O";
		this.a7.letra.text = "M";
		this.a8.letra.text = "E";
		this.a9.letra.text = "T";
		this.a10.letra.text = "R";
		this.a11.letra.text = "O";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "P";
		this.b4.letra.text = "A";
		this.b5.letra.text = "R";
		this.b6.letra.text = "A";
		this.b7.letra.text = "";
		this.b8.letra.text = "B";
		this.b9.letra.text = "E";
		this.b10.letra.text = "B";
		this.b11.letra.text = "E";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_53 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Crema para pañal*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "C";
		this.a6.letra.text = "R";
		this.a7.letra.text = "E";
		this.a8.letra.text = "M";
		this.a9.letra.text = "A";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "P";
		this.b2.letra.text = "A";
		this.b3.letra.text = "R";
		this.b4.letra.text = "A";
		this.b5.letra.text = "";
		this.b6.letra.text = "P";
		this.b7.letra.text = "A";
		this.b8.letra.text = "Ñ";
		this.b9.letra.text = "A";
		this.b10.letra.text = "L";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_54 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Bañera para bebé*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "B";
		this.a5.letra.text = "A";
		this.a6.letra.text = "Ñ";
		this.a7.letra.text = "E";
		this.a8.letra.text = "R";
		this.a9.letra.text = "A";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "P";
		this.b3.letra.text = "A";
		this.b4.letra.text = "R";
		this.b5.letra.text = "A";
		this.b6.letra.text = "";
		this.b7.letra.text = "B";
		this.b8.letra.text = "E";
		this.b9.letra.text = "B";
		this.b10.letra.text = "E";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_55 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*Cuna o moisés*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "C";
		this.a6.letra.text = "U";
		this.a7.letra.text = "N";
		this.a8.letra.text = "A";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "O";
		this.b3.letra.text = "";
		this.b4.letra.text = "M";
		this.b5.letra.text = "O";
		this.b6.letra.text = "I";
		this.b7.letra.text = "S";
		this.b8.letra.text = "E";
		this.b9.letra.text = "S";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_56 = function() {
		this.stop();
		
		this.btplay.addEventListener("click", atras2.bind(this));
		
		function atras2()
		{
		
		this.gotoAndStop("ini");
		
		}
	}
	this.frame_57 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*...*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "";
		this.b6.letra.text = "";
		this.b7.letra.text = "";
		this.b8.letra.text = "";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
		this.titulo.text = this.t6.text;
		
		this.a.letra.text = "A";
		this.b.letra.text = "B";
		this.c.letra.text = "C";
		this.d.letra.text = "D";
		this.e.letra.text = "E";
		this.f.letra.text = "F";
		this.g.letra.text = "G";
		
		this.h.letra.text = "H";
		this.i.letra.text = "I";
		this.j.letra.text = "J";
		this.k.letra.text = "K";
		this.l.letra.text = "L";
		this.m.letra.text = "M";
		this.n.letra.text = "N";
		
		this.ene.letra.text = "Ñ";
		this.o.letra.text = "O";
		this.p.letra.text = "P";
		this.q.letra.text = "Q";
		this.r.letra.text = "R";
		this.s.letra.text = "S";
		this.t.letra.text = "T";
		
		this.u.letra.text = "U";
		this.v.letra.text = "V";
		this.w.letra.text = "W";
		this.ex.letra.text = "X";
		this.ye.letra.text = "Y";
		this.z.letra.text = "Z";
	}
	this.frame_58 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*...*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "";
		this.b6.letra.text = "";
		this.b7.letra.text = "";
		this.b8.letra.text = "";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_59 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*...*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "";
		this.b6.letra.text = "";
		this.b7.letra.text = "";
		this.b8.letra.text = "";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_60 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*...*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "";
		this.b6.letra.text = "";
		this.b7.letra.text = "";
		this.b8.letra.text = "";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_61 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*...*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "";
		this.b6.letra.text = "";
		this.b7.letra.text = "";
		this.b8.letra.text = "";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_62 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*...*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "";
		this.b6.letra.text = "";
		this.b7.letra.text = "";
		this.b8.letra.text = "";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_63 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*...*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "";
		this.b6.letra.text = "";
		this.b7.letra.text = "";
		this.b8.letra.text = "";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_64 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*...*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "";
		this.b6.letra.text = "";
		this.b7.letra.text = "";
		this.b8.letra.text = "";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_65 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*...*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "";
		this.b6.letra.text = "";
		this.b7.letra.text = "";
		this.b8.letra.text = "";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_66 = function() {
		this.stop();
		this.ready.play();
		/////////////////palabra o frace////////////////////
		/*...*/
		
		this.a1.letra.text = "";
		this.a2.letra.text = "";
		this.a3.letra.text = "";
		this.a4.letra.text = "";
		this.a5.letra.text = "";
		this.a6.letra.text = "";
		this.a7.letra.text = "";
		this.a8.letra.text = "";
		this.a9.letra.text = "";
		this.a10.letra.text = "";
		this.a11.letra.text = "";
		this.a12.letra.text = "";
		
		this.b1.letra.text = "";
		this.b2.letra.text = "";
		this.b3.letra.text = "";
		this.b4.letra.text = "";
		this.b5.letra.text = "";
		this.b6.letra.text = "";
		this.b7.letra.text = "";
		this.b8.letra.text = "";
		this.b9.letra.text = "";
		this.b10.letra.text = "";
		this.b11.letra.text = "";
		this.b12.letra.text = "";
		
		this.c1.letra.text = "";
		this.c2.letra.text = "";
		this.c3.letra.text = "";
		this.c4.letra.text = "";
		this.c5.letra.text = "";
		this.c6.letra.text = "";
		this.c7.letra.text = "";
		this.c8.letra.text = "";
		this.c9.letra.text = "";
		this.c10.letra.text = "";
		this.c11.letra.text = "";
		this.c12.letra.text = "";
		
		
		{////////reini////////////
		this.a1.gotoAndPlay("ini");
		this.a2.gotoAndPlay("ini");
		this.a3.gotoAndPlay("ini");
		this.a4.gotoAndPlay("ini");
		this.a5.gotoAndPlay("ini");
		this.a6.gotoAndPlay("ini");
		this.a7.gotoAndPlay("ini");
		this.a8.gotoAndPlay("ini");
		this.a9.gotoAndPlay("ini");
		this.a10.gotoAndPlay("ini");
		this.a11.gotoAndPlay("ini");
		this.a12.gotoAndPlay("ini");
		
		this.b1.gotoAndPlay("ini");
		this.b2.gotoAndPlay("ini");
		this.b3.gotoAndPlay("ini");
		this.b4.gotoAndPlay("ini");
		this.b5.gotoAndPlay("ini");
		this.b6.gotoAndPlay("ini");
		this.b7.gotoAndPlay("ini");
		this.b8.gotoAndPlay("ini");
		this.b9.gotoAndPlay("ini");
		this.b10.gotoAndPlay("ini");
		this.b11.gotoAndPlay("ini");
		this.b12.gotoAndPlay("ini");
		
		this.c1.gotoAndPlay("ini");
		this.c2.gotoAndPlay("ini");
		this.c3.gotoAndPlay("ini");
		this.c4.gotoAndPlay("ini");
		this.c5.gotoAndPlay("ini");
		this.c6.gotoAndPlay("ini");
		this.c7.gotoAndPlay("ini");
		this.c8.gotoAndPlay("ini");
		this.c9.gotoAndPlay("ini");
		this.c10.gotoAndPlay("ini");
		this.c11.gotoAndPlay("ini");
		this.c12.gotoAndPlay("ini");
		
		///////////abcdario//////////
		
		this.a.gotoAndPlay("ini");
		this.b.gotoAndPlay("ini");
		this.c.gotoAndPlay("ini");
		this.d.gotoAndPlay("ini");
		this.e.gotoAndPlay("ini");
		this.f.gotoAndPlay("ini");
		this.g.gotoAndPlay("ini");
		this.h.gotoAndPlay("ini");
		this.i.gotoAndPlay("ini");
		this.j.gotoAndPlay("ini");
		this.k.gotoAndPlay("ini");
		this.l.gotoAndPlay("ini");
		
		this.m.gotoAndPlay("ini");
		this.n.gotoAndPlay("ini");
		this.ene.gotoAndPlay("ini");
		this.o.gotoAndPlay("ini");
		this.p.gotoAndPlay("ini");
		this.q.gotoAndPlay("ini");
		this.r.gotoAndPlay("ini");
		this.s.gotoAndPlay("ini");
		this.t.gotoAndPlay("ini");
		this.u.gotoAndPlay("ini");
		this.v.gotoAndPlay("ini");
		this.w.gotoAndPlay("ini");
		
		this.ex.gotoAndPlay("ini");
		this.ye.gotoAndPlay("ini");
		this.z.gotoAndPlay("ini");
		}
	}
	this.frame_67 = function() {
		this.stop();
		
		this.btplay.addEventListener("click", atras2.bind(this));
		
		function atras2()
		{
		
		this.gotoAndStop("ini");
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(1).call(this.frame_32).wait(1).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(1).call(this.frame_39).wait(1).call(this.frame_40).wait(1).call(this.frame_41).wait(1).call(this.frame_42).wait(1).call(this.frame_43).wait(1).call(this.frame_44).wait(1).call(this.frame_45).wait(1).call(this.frame_46).wait(1).call(this.frame_47).wait(1).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1).call(this.frame_52).wait(1).call(this.frame_53).wait(1).call(this.frame_54).wait(1).call(this.frame_55).wait(1).call(this.frame_56).wait(1).call(this.frame_57).wait(1).call(this.frame_58).wait(1).call(this.frame_59).wait(1).call(this.frame_60).wait(1).call(this.frame_61).wait(1).call(this.frame_62).wait(1).call(this.frame_63).wait(1).call(this.frame_64).wait(1).call(this.frame_65).wait(1).call(this.frame_66).wait(1).call(this.frame_67).wait(1));

	// Layer_5
	this.instance = new lib.Symbol28();
	this.instance.setTransform(636.75,355.95);

	this.instance_1 = new lib.Bitmap13();
	this.instance_1.setTransform(1092,658,0.8244,0.8244);

	this.instance_2 = new lib.Symbol36();
	this.instance_2.setTransform(835.8,-357.6,0.7505,0.7505,0,0,0,57.7,41.9);

	this.mimusica = new lib.an_Video({'id': 'mimusica', 'src':'videos/msuica.mp4', 'autoplay':true, 'controls':false, 'loop':true, 'preload':false, 'class':'musica'});

	this.mimusica.name = "mimusica";
	this.mimusica.setTransform(1404.65,-113.85,0.6384,0.4784,0,0,0,200,149.9);

	this.myMC = new lib.Symbol49();
	this.myMC.name = "myMC";
	this.myMC.setTransform(642.5,843.25,1,1,0,0,0,626.6,32.8);

	this.btfull = new lib.Symbol5();
	this.btfull.name = "btfull";
	this.btfull.setTransform(1250.3,26.75,0.3732,0.3732,0,0,0,49.1,42.8);

	this.reini = new lib.Symbol4();
	this.reini.name = "reini";
	this.reini.setTransform(1190.35,27.9,0.4229,0.4229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.reini},{t:this.btfull},{t:this.myMC},{t:this.mimusica},{t:this.instance_2},{t:this.instance_1}]},1).wait(67));

	// Layer_6
	this.btbackx = new lib.Symbol107();
	this.btbackx.name = "btbackx";
	this.btbackx.setTransform(-9.15,-96.05,1,1,0,0,0,25,25.1);

	this.instance_3 = new lib.Symbol102();
	this.instance_3.setTransform(569.85,782.55,0.4645,0.4645,0,0,0,0.1,0);

	this.instance_4 = new lib.Symbol116();
	this.instance_4.setTransform(895.95,834.85,1,1,0,0,0,20.4,33.6);

	this.btno = new lib.Symbol76();
	this.btno.name = "btno";
	this.btno.setTransform(672,719.5,1.2371,1.2371);

	this.btsi = new lib.Symbol62();
	this.btsi.name = "btsi";
	this.btsi.setTransform(427.45,738.1,0.4868,0.4868);

	this.ct16 = new lib.Symbol121();
	this.ct16.name = "ct16";
	this.ct16.setTransform(1042.5,580.45,1,1,0,0,0,132.2,64.5);

	this.ct15 = new lib.Symbol121();
	this.ct15.name = "ct15";
	this.ct15.setTransform(769.1,580.45,1,1,0,0,0,132.2,64.5);

	this.ct14 = new lib.Symbol121();
	this.ct14.name = "ct14";
	this.ct14.setTransform(495.4,580.45,1,1,0,0,0,132.2,64.5);

	this.ct13 = new lib.Symbol121();
	this.ct13.name = "ct13";
	this.ct13.setTransform(222,580.45,1,1,0,0,0,132.2,64.5);

	this.ct12 = new lib.Symbol121();
	this.ct12.name = "ct12";
	this.ct12.setTransform(1042.5,439.35,1,1,0,0,0,132.2,64.5);

	this.ct11 = new lib.Symbol121();
	this.ct11.name = "ct11";
	this.ct11.setTransform(769.1,439.35,1,1,0,0,0,132.2,64.5);

	this.ct10 = new lib.Symbol121();
	this.ct10.name = "ct10";
	this.ct10.setTransform(495.4,439.35,1,1,0,0,0,132.2,64.5);

	this.ct9 = new lib.Symbol121();
	this.ct9.name = "ct9";
	this.ct9.setTransform(222,439.35,1,1,0,0,0,132.2,64.5);

	this.ct8 = new lib.Symbol121();
	this.ct8.name = "ct8";
	this.ct8.setTransform(1042.5,296.95,1,1,0,0,0,132.2,64.5);

	this.ct7 = new lib.Symbol121();
	this.ct7.name = "ct7";
	this.ct7.setTransform(769.1,296.95,1,1,0,0,0,132.2,64.5);

	this.ct6 = new lib.Symbol121();
	this.ct6.name = "ct6";
	this.ct6.setTransform(495.4,296.95,1,1,0,0,0,132.2,64.5);

	this.ct5 = new lib.Symbol121();
	this.ct5.name = "ct5";
	this.ct5.setTransform(222,296.95,1,1,0,0,0,132.2,64.5);

	this.ct4 = new lib.Symbol121();
	this.ct4.name = "ct4";
	this.ct4.setTransform(1042.5,155.85,1,1,0,0,0,132.2,64.5);

	this.ct3 = new lib.Symbol121();
	this.ct3.name = "ct3";
	this.ct3.setTransform(769.1,155.85,1,1,0,0,0,132.2,64.5);

	this.ct2 = new lib.Symbol121();
	this.ct2.name = "ct2";
	this.ct2.setTransform(495.4,155.85,1,1,0,0,0,132.2,64.5);

	this.ct1 = new lib.Symbol121();
	this.ct1.name = "ct1";
	this.ct1.setTransform(222,155.85,1,1,0,0,0,132.2,64.5);

	this.instance_5 = new lib.Symbol56copy();
	this.instance_5.setTransform(594.75,276.55,1,1,0,0,0,334.7,115.9);

	this.btplay = new lib.Symbol73();
	this.btplay.name = "btplay";
	this.btplay.setTransform(621.95,562.7,1,1,0,0,0,199.1,70.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ct1},{t:this.ct2},{t:this.ct3},{t:this.ct4},{t:this.ct5},{t:this.ct6},{t:this.ct7},{t:this.ct8},{t:this.ct9},{t:this.ct10},{t:this.ct11},{t:this.ct12},{t:this.ct13},{t:this.ct14},{t:this.ct15},{t:this.ct16},{t:this.btsi,p:{y:738.1}},{t:this.btno,p:{y:719.5}},{t:this.instance_4,p:{y:834.85}},{t:this.instance_3,p:{y:782.55}},{t:this.btbackx,p:{x:-9.15,y:-96.05}}]},1).to({state:[{t:this.btsi,p:{y:574.75}},{t:this.btno,p:{y:556.15}},{t:this.instance_4,p:{y:671.5}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:619.2}}]},1).to({state:[{t:this.btsi,p:{y:745.25}},{t:this.btno,p:{y:726.65}},{t:this.instance_4,p:{y:842}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:789.7}},{t:this.btplay},{t:this.instance_5}]},10).to({state:[{t:this.btsi,p:{y:574.75}},{t:this.btno,p:{y:556.15}},{t:this.instance_4,p:{y:671.5}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:619.2}}]},1).to({state:[{t:this.btsi,p:{y:745.25}},{t:this.btno,p:{y:726.65}},{t:this.instance_4,p:{y:842}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:789.7}},{t:this.btplay},{t:this.instance_5}]},10).to({state:[{t:this.btsi,p:{y:574.75}},{t:this.btno,p:{y:556.15}},{t:this.instance_4,p:{y:671.5}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:619.2}}]},1).to({state:[{t:this.btsi,p:{y:745.25}},{t:this.btno,p:{y:726.65}},{t:this.instance_4,p:{y:842}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:789.7}},{t:this.btplay},{t:this.instance_5}]},10).to({state:[{t:this.btsi,p:{y:574.75}},{t:this.btno,p:{y:556.15}},{t:this.instance_4,p:{y:671.5}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:619.2}}]},1).to({state:[{t:this.btsi,p:{y:745.25}},{t:this.btno,p:{y:726.65}},{t:this.instance_4,p:{y:842}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:789.7}},{t:this.btplay},{t:this.instance_5}]},10).to({state:[{t:this.btsi,p:{y:574.75}},{t:this.btno,p:{y:556.15}},{t:this.instance_4,p:{y:671.5}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:619.2}}]},1).to({state:[{t:this.btsi,p:{y:745.25}},{t:this.btno,p:{y:726.65}},{t:this.instance_4,p:{y:842}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:789.7}},{t:this.btplay},{t:this.instance_5}]},10).to({state:[{t:this.btsi,p:{y:574.75}},{t:this.btno,p:{y:556.15}},{t:this.instance_4,p:{y:671.5}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:619.2}}]},1).to({state:[{t:this.btsi,p:{y:745.25}},{t:this.btno,p:{y:726.65}},{t:this.instance_4,p:{y:842}},{t:this.btbackx,p:{x:30.85,y:30.75}},{t:this.instance_3,p:{y:789.7}},{t:this.btplay},{t:this.instance_5}]},10).wait(1));
	this.btplay.addEventListener("tick", AdobeAn.handleFilterCache);

	// Layer_4
	this.ready = new lib.Symbol56();
	this.ready.name = "ready";
	this.ready.setTransform(648.2,1163.95,1,1,0,0,0,334.7,115.9);
	this.ready._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ready).wait(1).to({_off:false},0).wait(1).to({x:614.55,y:353.15},0).wait(10).to({x:689.85,y:1139.05},0).wait(1).to({x:614.55,y:353.15},0).wait(10).to({x:689.85,y:1139.05},0).wait(1).to({x:614.55,y:353.15},0).wait(10).to({x:689.85,y:1139.05},0).wait(1).to({x:614.55,y:353.15},0).wait(10).to({x:689.85,y:1139.05},0).wait(1).to({x:614.55,y:353.15},0).wait(10).to({x:689.85,y:1139.05},0).wait(1).to({x:614.55,y:353.15},0).wait(10).to({x:689.85,y:1139.05},0).wait(1));

	// Layer_3
	this.fsbtn = new lib.Symbol8();
	this.fsbtn.name = "fsbtn";
	this.fsbtn.setTransform(632.45,336.8,1,1,0,0,0,155.7,48.3);

	this.titulo = new cjs.Text("", "bold 45px 'Arial'", "#FFFFFF");
	this.titulo.name = "titulo";
	this.titulo.textAlign = "center";
	this.titulo.lineHeight = 46;
	this.titulo.lineWidth = 937;
	this.titulo.parent = this;
	this.titulo.setTransform(610.7,27.7);

	this.nada = new cjs.Text("", "39px 'Arial'");
	this.nada.name = "nada";
	this.nada.textAlign = "center";
	this.nada.lineHeight = 46;
	this.nada.lineWidth = 111;
	this.nada.parent = this;
	this.nada.setTransform(-145.75,-111.1);

	this.c12 = new lib.Symbol113();
	this.c12.name = "c12";
	this.c12.setTransform(1205,366.45,1,1,0,0,0,45.7,45.7);

	this.c11 = new lib.Symbol113();
	this.c11.name = "c11";
	this.c11.setTransform(1101.2,366.45,1,1,0,0,0,45.7,45.7);

	this.c10 = new lib.Symbol113();
	this.c10.name = "c10";
	this.c10.setTransform(998.7,366.45,1,1,0,0,0,45.7,45.7);

	this.c9 = new lib.Symbol113();
	this.c9.name = "c9";
	this.c9.setTransform(896.15,366.45,1,1,0,0,0,45.7,45.7);

	this.c8 = new lib.Symbol113();
	this.c8.name = "c8";
	this.c8.setTransform(791.2,366.45,1,1,0,0,0,45.7,45.7);

	this.c7 = new lib.Symbol113();
	this.c7.name = "c7";
	this.c7.setTransform(688.65,366.45,1,1,0,0,0,45.7,45.7);

	this.c6 = new lib.Symbol113();
	this.c6.name = "c6";
	this.c6.setTransform(586.15,366.45,1,1,0,0,0,45.7,45.7);

	this.c5 = new lib.Symbol113();
	this.c5.name = "c5";
	this.c5.setTransform(483.6,366.45,1,1,0,0,0,45.7,45.7);

	this.c4 = new lib.Symbol113();
	this.c4.name = "c4";
	this.c4.setTransform(381.15,366.45,1,1,0,0,0,45.7,45.7);

	this.c3 = new lib.Symbol113();
	this.c3.name = "c3";
	this.c3.setTransform(278.6,366.45,1,1,0,0,0,45.7,45.7);

	this.c2 = new lib.Symbol113();
	this.c2.name = "c2";
	this.c2.setTransform(177.35,366.45,1,1,0,0,0,45.7,45.7);

	this.c1 = new lib.Symbol113();
	this.c1.name = "c1";
	this.c1.setTransform(74.8,366.45,1,1,0,0,0,45.7,45.7);

	this.b12 = new lib.Symbol113();
	this.b12.name = "b12";
	this.b12.setTransform(1205,266.5,1,1,0,0,0,45.7,45.7);

	this.b11 = new lib.Symbol113();
	this.b11.name = "b11";
	this.b11.setTransform(1101.2,266.5,1,1,0,0,0,45.7,45.7);

	this.b10 = new lib.Symbol113();
	this.b10.name = "b10";
	this.b10.setTransform(998.7,266.5,1,1,0,0,0,45.7,45.7);

	this.b9 = new lib.Symbol113();
	this.b9.name = "b9";
	this.b9.setTransform(896.15,266.5,1,1,0,0,0,45.7,45.7);

	this.b8 = new lib.Symbol113();
	this.b8.name = "b8";
	this.b8.setTransform(791.2,266.5,1,1,0,0,0,45.7,45.7);

	this.b7 = new lib.Symbol113();
	this.b7.name = "b7";
	this.b7.setTransform(688.65,266.5,1,1,0,0,0,45.7,45.7);

	this.b6 = new lib.Symbol113();
	this.b6.name = "b6";
	this.b6.setTransform(586.15,266.5,1,1,0,0,0,45.7,45.7);

	this.b5 = new lib.Symbol113();
	this.b5.name = "b5";
	this.b5.setTransform(483.6,266.5,1,1,0,0,0,45.7,45.7);

	this.b4 = new lib.Symbol113();
	this.b4.name = "b4";
	this.b4.setTransform(381.15,266.5,1,1,0,0,0,45.7,45.7);

	this.b3 = new lib.Symbol113();
	this.b3.name = "b3";
	this.b3.setTransform(278.6,266.5,1,1,0,0,0,45.7,45.7);

	this.b2 = new lib.Symbol113();
	this.b2.name = "b2";
	this.b2.setTransform(177.35,266.5,1,1,0,0,0,45.7,45.7);

	this.b1 = new lib.Symbol113();
	this.b1.name = "b1";
	this.b1.setTransform(74.8,266.5,1,1,0,0,0,45.7,45.7);

	this.a12 = new lib.Symbol113();
	this.a12.name = "a12";
	this.a12.setTransform(1205,167.8,1,1,0,0,0,45.7,45.7);

	this.a11 = new lib.Symbol113();
	this.a11.name = "a11";
	this.a11.setTransform(1101.2,167.8,1,1,0,0,0,45.7,45.7);

	this.a10 = new lib.Symbol113();
	this.a10.name = "a10";
	this.a10.setTransform(998.7,167.8,1,1,0,0,0,45.7,45.7);

	this.a9 = new lib.Symbol113();
	this.a9.name = "a9";
	this.a9.setTransform(896.15,167.8,1,1,0,0,0,45.7,45.7);

	this.a8 = new lib.Symbol113();
	this.a8.name = "a8";
	this.a8.setTransform(791.2,167.8,1,1,0,0,0,45.7,45.7);

	this.a7 = new lib.Symbol113();
	this.a7.name = "a7";
	this.a7.setTransform(688.65,167.8,1,1,0,0,0,45.7,45.7);

	this.a6 = new lib.Symbol113();
	this.a6.name = "a6";
	this.a6.setTransform(586.15,167.8,1,1,0,0,0,45.7,45.7);

	this.a5 = new lib.Symbol113();
	this.a5.name = "a5";
	this.a5.setTransform(483.6,167.8,1,1,0,0,0,45.7,45.7);

	this.a4 = new lib.Symbol113();
	this.a4.name = "a4";
	this.a4.setTransform(381.15,167.8,1,1,0,0,0,45.7,45.7);

	this.a3 = new lib.Symbol113();
	this.a3.name = "a3";
	this.a3.setTransform(278.6,167.8,1,1,0,0,0,45.7,45.7);

	this.a2 = new lib.Symbol113();
	this.a2.name = "a2";
	this.a2.setTransform(177.35,167.8,1,1,0,0,0,45.7,45.7);

	this.a1 = new lib.Symbol113();
	this.a1.name = "a1";
	this.a1.setTransform(74.8,167.8,1,1,0,0,0,45.7,45.7);

	this.instance_6 = new lib.Symbol111("synched",0);
	this.instance_6.setTransform(-994.55,-176.8,1,1,0,0,0,532.2,295.7);

	this.ene = new lib.Symbol110();
	this.ene.name = "ene";
	this.ene.setTransform(108.1,587.25,0.5743,0.5743,0,0,0,65.2,69.7);

	this.z = new lib.Symbol110();
	this.z.name = "z";
	this.z.setTransform(1181.35,587.25,0.5743,0.5743,0,0,0,65.1,69.7);

	this.ye = new lib.Symbol110();
	this.ye.name = "ye";
	this.ye.setTransform(1091.2,587.25,0.5743,0.5743,0,0,0,65.2,69.7);

	this.ex = new lib.Symbol110();
	this.ex.name = "ex";
	this.ex.setTransform(1002.8,587.25,0.5743,0.5743,0,0,0,65.1,69.7);

	this.w = new lib.Symbol110();
	this.w.name = "w";
	this.w.setTransform(912.65,587.25,0.5743,0.5743,0,0,0,65.2,69.7);

	this.v = new lib.Symbol110();
	this.v.name = "v";
	this.v.setTransform(825.2,587.25,0.5743,0.5743,0,0,0,65.2,69.7);

	this.u = new lib.Symbol110();
	this.u.name = "u";
	this.u.setTransform(735.05,587.25,0.5743,0.5743,0,0,0,65.2,69.7);

	this.t = new lib.Symbol110();
	this.t.name = "t";
	this.t.setTransform(644.6,587.25,0.5743,0.5743,0,0,0,65.2,69.7);

	this.s = new lib.Symbol110();
	this.s.name = "s";
	this.s.setTransform(554.4,587.25,0.5743,0.5743,0,0,0,65.1,69.7);

	this.r = new lib.Symbol110();
	this.r.name = "r";
	this.r.setTransform(466.05,587.25,0.5743,0.5743,0,0,0,65.2,69.7);

	this.q = new lib.Symbol110();
	this.q.name = "q";
	this.q.setTransform(375.85,587.25,0.5743,0.5743,0,0,0,65.1,69.7);

	this.p = new lib.Symbol110();
	this.p.name = "p";
	this.p.setTransform(288.4,587.25,0.5743,0.5743,0,0,0,65.2,69.7);

	this.o = new lib.Symbol110();
	this.o.name = "o";
	this.o.setTransform(198.25,587.25,0.5743,0.5743,0,0,0,65.2,69.7);

	this.n = new lib.Symbol110();
	this.n.name = "n";
	this.n.setTransform(1217.1,488.95,0.5743,0.5743,0,0,0,65.2,69.7);

	this.m = new lib.Symbol110();
	this.m.name = "m";
	this.m.setTransform(1129.6,488.95,0.5743,0.5743,0,0,0,65.1,69.7);

	this.l = new lib.Symbol110();
	this.l.name = "l";
	this.l.setTransform(1039.45,488.95,0.5743,0.5743,0,0,0,65.2,69.7);

	this.k = new lib.Symbol110();
	this.k.name = "k";
	this.k.setTransform(951.05,488.95,0.5743,0.5743,0,0,0,65.1,69.7);

	this.j = new lib.Symbol110();
	this.j.name = "j";
	this.j.setTransform(860.9,488.95,0.5743,0.5743,0,0,0,65.2,69.7);

	this.i = new lib.Symbol110();
	this.i.name = "i";
	this.i.setTransform(773.45,488.95,0.5743,0.5743,0,0,0,65.2,69.7);

	this.h = new lib.Symbol110();
	this.h.name = "h";
	this.h.setTransform(683.3,488.95,0.5743,0.5743,0,0,0,65.2,69.7);

	this.g = new lib.Symbol110();
	this.g.name = "g";
	this.g.setTransform(595.15,489,0.5743,0.5743,0,0,0,65.2,69.8);

	this.f = new lib.Symbol110();
	this.f.name = "f";
	this.f.setTransform(507.65,489,0.5743,0.5743,0,0,0,65.1,69.8);

	this.e = new lib.Symbol110();
	this.e.name = "e";
	this.e.setTransform(417.5,489,0.5743,0.5743,0,0,0,65.2,69.8);

	this.d = new lib.Symbol110();
	this.d.name = "d";
	this.d.setTransform(329.1,489,0.5743,0.5743,0,0,0,65.1,69.8);

	this.c = new lib.Symbol110();
	this.c.name = "c";
	this.c.setTransform(238.95,489,0.5743,0.5743,0,0,0,65.2,69.8);

	this.b = new lib.Symbol110();
	this.b.name = "b";
	this.b.setTransform(151.5,489,0.5743,0.5743,0,0,0,65.2,69.8);

	this.a = new lib.Symbol110();
	this.a.name = "a";
	this.a.setTransform(61.35,489,0.5743,0.5743,0,0,0,65.2,69.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fsbtn}]}).to({state:[]},1).to({state:[{t:this.a},{t:this.b},{t:this.c},{t:this.d},{t:this.e},{t:this.f},{t:this.g},{t:this.h},{t:this.i},{t:this.j},{t:this.k},{t:this.l},{t:this.m},{t:this.n},{t:this.o},{t:this.p},{t:this.q},{t:this.r},{t:this.s},{t:this.t},{t:this.u},{t:this.v},{t:this.w},{t:this.ex},{t:this.ye},{t:this.z},{t:this.ene},{t:this.instance_6},{t:this.a1},{t:this.a2},{t:this.a3},{t:this.a4},{t:this.a5},{t:this.a6},{t:this.a7},{t:this.a8},{t:this.a9},{t:this.a10},{t:this.a11},{t:this.a12},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5},{t:this.b6},{t:this.b7},{t:this.b8},{t:this.b9},{t:this.b10},{t:this.b11},{t:this.b12},{t:this.c1},{t:this.c2},{t:this.c3},{t:this.c4},{t:this.c5},{t:this.c6},{t:this.c7},{t:this.c8},{t:this.c9},{t:this.c10},{t:this.c11},{t:this.c12},{t:this.nada},{t:this.titulo}]},1).to({state:[]},10).to({state:[{t:this.a},{t:this.b},{t:this.c},{t:this.d},{t:this.e},{t:this.f},{t:this.g},{t:this.h},{t:this.i},{t:this.j},{t:this.k},{t:this.l},{t:this.m},{t:this.n},{t:this.o},{t:this.p},{t:this.q},{t:this.r},{t:this.s},{t:this.t},{t:this.u},{t:this.v},{t:this.w},{t:this.ex},{t:this.ye},{t:this.z},{t:this.ene},{t:this.instance_6},{t:this.a1},{t:this.a2},{t:this.a3},{t:this.a4},{t:this.a5},{t:this.a6},{t:this.a7},{t:this.a8},{t:this.a9},{t:this.a10},{t:this.a11},{t:this.a12},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5},{t:this.b6},{t:this.b7},{t:this.b8},{t:this.b9},{t:this.b10},{t:this.b11},{t:this.b12},{t:this.c1},{t:this.c2},{t:this.c3},{t:this.c4},{t:this.c5},{t:this.c6},{t:this.c7},{t:this.c8},{t:this.c9},{t:this.c10},{t:this.c11},{t:this.c12},{t:this.nada},{t:this.titulo}]},1).to({state:[]},10).to({state:[{t:this.a},{t:this.b},{t:this.c},{t:this.d},{t:this.e},{t:this.f},{t:this.g},{t:this.h},{t:this.i},{t:this.j},{t:this.k},{t:this.l},{t:this.m},{t:this.n},{t:this.o},{t:this.p},{t:this.q},{t:this.r},{t:this.s},{t:this.t},{t:this.u},{t:this.v},{t:this.w},{t:this.ex},{t:this.ye},{t:this.z},{t:this.ene},{t:this.instance_6},{t:this.a1},{t:this.a2},{t:this.a3},{t:this.a4},{t:this.a5},{t:this.a6},{t:this.a7},{t:this.a8},{t:this.a9},{t:this.a10},{t:this.a11},{t:this.a12},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5},{t:this.b6},{t:this.b7},{t:this.b8},{t:this.b9},{t:this.b10},{t:this.b11},{t:this.b12},{t:this.c1},{t:this.c2},{t:this.c3},{t:this.c4},{t:this.c5},{t:this.c6},{t:this.c7},{t:this.c8},{t:this.c9},{t:this.c10},{t:this.c11},{t:this.c12},{t:this.nada},{t:this.titulo}]},1).to({state:[]},10).to({state:[{t:this.a},{t:this.b},{t:this.c},{t:this.d},{t:this.e},{t:this.f},{t:this.g},{t:this.h},{t:this.i},{t:this.j},{t:this.k},{t:this.l},{t:this.m},{t:this.n},{t:this.o},{t:this.p},{t:this.q},{t:this.r},{t:this.s},{t:this.t},{t:this.u},{t:this.v},{t:this.w},{t:this.ex},{t:this.ye},{t:this.z},{t:this.ene},{t:this.instance_6},{t:this.a1},{t:this.a2},{t:this.a3},{t:this.a4},{t:this.a5},{t:this.a6},{t:this.a7},{t:this.a8},{t:this.a9},{t:this.a10},{t:this.a11},{t:this.a12},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5},{t:this.b6},{t:this.b7},{t:this.b8},{t:this.b9},{t:this.b10},{t:this.b11},{t:this.b12},{t:this.c1},{t:this.c2},{t:this.c3},{t:this.c4},{t:this.c5},{t:this.c6},{t:this.c7},{t:this.c8},{t:this.c9},{t:this.c10},{t:this.c11},{t:this.c12},{t:this.nada},{t:this.titulo}]},1).to({state:[]},10).to({state:[{t:this.a},{t:this.b},{t:this.c},{t:this.d},{t:this.e},{t:this.f},{t:this.g},{t:this.h},{t:this.i},{t:this.j},{t:this.k},{t:this.l},{t:this.m},{t:this.n},{t:this.o},{t:this.p},{t:this.q},{t:this.r},{t:this.s},{t:this.t},{t:this.u},{t:this.v},{t:this.w},{t:this.ex},{t:this.ye},{t:this.z},{t:this.ene},{t:this.instance_6},{t:this.a1},{t:this.a2},{t:this.a3},{t:this.a4},{t:this.a5},{t:this.a6},{t:this.a7},{t:this.a8},{t:this.a9},{t:this.a10},{t:this.a11},{t:this.a12},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5},{t:this.b6},{t:this.b7},{t:this.b8},{t:this.b9},{t:this.b10},{t:this.b11},{t:this.b12},{t:this.c1},{t:this.c2},{t:this.c3},{t:this.c4},{t:this.c5},{t:this.c6},{t:this.c7},{t:this.c8},{t:this.c9},{t:this.c10},{t:this.c11},{t:this.c12},{t:this.nada},{t:this.titulo}]},1).to({state:[]},10).to({state:[{t:this.a},{t:this.b},{t:this.c},{t:this.d},{t:this.e},{t:this.f},{t:this.g},{t:this.h},{t:this.i},{t:this.j},{t:this.k},{t:this.l},{t:this.m},{t:this.n},{t:this.o},{t:this.p},{t:this.q},{t:this.r},{t:this.s},{t:this.t},{t:this.u},{t:this.v},{t:this.w},{t:this.ex},{t:this.ye},{t:this.z},{t:this.ene},{t:this.instance_6},{t:this.a1},{t:this.a2},{t:this.a3},{t:this.a4},{t:this.a5},{t:this.a6},{t:this.a7},{t:this.a8},{t:this.a9},{t:this.a10},{t:this.a11},{t:this.a12},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5},{t:this.b6},{t:this.b7},{t:this.b8},{t:this.b9},{t:this.b10},{t:this.b11},{t:this.b12},{t:this.c1},{t:this.c2},{t:this.c3},{t:this.c4},{t:this.c5},{t:this.c6},{t:this.c7},{t:this.c8},{t:this.c9},{t:this.c10},{t:this.c11},{t:this.c12},{t:this.nada},{t:this.titulo}]},1).to({state:[]},10).wait(1));

	// Layer_2
	this.t16 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t16.name = "t16";
	this.t16.textAlign = "center";
	this.t16.lineHeight = 31;
	this.t16.lineWidth = 380;
	this.t16.parent = this;
	this.t16.setTransform(1510.4,835.5);

	this.t15 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t15.name = "t15";
	this.t15.textAlign = "center";
	this.t15.lineHeight = 31;
	this.t15.lineWidth = 380;
	this.t15.parent = this;
	this.t15.setTransform(1510.4,779.1);

	this.t14 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t14.name = "t14";
	this.t14.textAlign = "center";
	this.t14.lineHeight = 31;
	this.t14.lineWidth = 380;
	this.t14.parent = this;
	this.t14.setTransform(1510.4,725.2);

	this.t13 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t13.name = "t13";
	this.t13.textAlign = "center";
	this.t13.lineHeight = 31;
	this.t13.lineWidth = 380;
	this.t13.parent = this;
	this.t13.setTransform(1510.4,671.35);

	this.t12 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t12.name = "t12";
	this.t12.textAlign = "center";
	this.t12.lineHeight = 31;
	this.t12.lineWidth = 380;
	this.t12.parent = this;
	this.t12.setTransform(1510.4,618.75);

	this.t11 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t11.name = "t11";
	this.t11.textAlign = "center";
	this.t11.lineHeight = 31;
	this.t11.lineWidth = 380;
	this.t11.parent = this;
	this.t11.setTransform(1510.4,564.9);

	this.t10 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t10.name = "t10";
	this.t10.textAlign = "center";
	this.t10.lineHeight = 31;
	this.t10.lineWidth = 380;
	this.t10.parent = this;
	this.t10.setTransform(1510.4,511);

	this.t9 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t9.name = "t9";
	this.t9.textAlign = "center";
	this.t9.lineHeight = 31;
	this.t9.lineWidth = 380;
	this.t9.parent = this;
	this.t9.setTransform(1510.4,457.15);

	this.t8 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t8.name = "t8";
	this.t8.textAlign = "center";
	this.t8.lineHeight = 31;
	this.t8.lineWidth = 380;
	this.t8.parent = this;
	this.t8.setTransform(1510.4,363.2);

	this.t7 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t7.name = "t7";
	this.t7.textAlign = "center";
	this.t7.lineHeight = 31;
	this.t7.lineWidth = 380;
	this.t7.parent = this;
	this.t7.setTransform(1510.4,309.3);

	this.t6 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t6.name = "t6";
	this.t6.textAlign = "center";
	this.t6.lineHeight = 31;
	this.t6.lineWidth = 380;
	this.t6.parent = this;
	this.t6.setTransform(1510.4,255.45);

	this.t5 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t5.name = "t5";
	this.t5.textAlign = "center";
	this.t5.lineHeight = 31;
	this.t5.lineWidth = 380;
	this.t5.parent = this;
	this.t5.setTransform(1510.4,202.85);

	this.t4 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t4.name = "t4";
	this.t4.textAlign = "center";
	this.t4.lineHeight = 31;
	this.t4.lineWidth = 380;
	this.t4.parent = this;
	this.t4.setTransform(1510.4,149);

	this.t3 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t3.name = "t3";
	this.t3.textAlign = "center";
	this.t3.lineHeight = 31;
	this.t3.lineWidth = 380;
	this.t3.parent = this;
	this.t3.setTransform(1510.4,95.1);

	this.t2 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t2.name = "t2";
	this.t2.textAlign = "center";
	this.t2.lineHeight = 31;
	this.t2.lineWidth = 380;
	this.t2.parent = this;
	this.t2.setTransform(1510.4,41.25);

	this.t1 = new cjs.Text("", "26px 'Arial'", "#FFFFFF");
	this.t1.name = "t1";
	this.t1.textAlign = "center";
	this.t1.lineHeight = 31;
	this.t1.lineWidth = 380;
	this.t1.parent = this;
	this.t1.setTransform(1510.4,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5},{t:this.t6},{t:this.t7},{t:this.t8},{t:this.t9},{t:this.t10},{t:this.t11},{t:this.t12},{t:this.t13},{t:this.t14},{t:this.t15},{t:this.t16}]}).wait(68));

	// Layer_1
	this.instance_7 = new lib.Symbol118();
	this.instance_7.setTransform(640,360,1,1,0,0,0,640,360);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6633FF").s().p("EAAAA4QMAAAhwfIAAAAMAAABwfg");
	this.shape.setTransform(1280.025,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_7}]}).wait(68));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-886.7,-112.5,2589,1475.8);
// library properties:
lib.properties = {
	id: 'AC3F281CFECE7942901C1473D55A6D7C',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/juego de palabras10_atlas_1.png?1677180292136", id:"juego de palabras10_atlas_1"},
		{src:"sounds/botonpop.mp3?1677180292429", id:"botonpop"},
		{src:"sounds/CORNETAPERDIO.mp3?1677180292429", id:"CORNETAPERDIO"},
		{src:"sounds/CORNETAUNAVEZ.mp3?1677180292429", id:"CORNETAUNAVEZ"},
		{src:"sounds/Cuack.mp3?1677180292429", id:"Cuack"},
		{src:"sounds/moneda2.mp3?1677180292429", id:"moneda2"},
		{src:"sounds/Skewready.mp3?1677180292429", id:"Skewready"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1677180292429", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1677180292429", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1677180292429", id:"an.Video"}
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
an.compositions['AC3F281CFECE7942901C1473D55A6D7C'] = {
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
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
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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