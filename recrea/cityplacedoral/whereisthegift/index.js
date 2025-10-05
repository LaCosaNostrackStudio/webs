(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[3900,1413,82,82],[2358,1779,164,40],[472,2056,206,68],[2358,1709,200,68],[2562,1538,1399,802],[0,2056,470,50],[3588,1413,310,106],[0,1709,1094,345],[0,0,2560,1707],[2562,0,1024,1536],[1844,1709,512,512],[3588,743,445,668],[3588,0,494,741],[1096,1709,746,505]]}
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
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cityplacedorallogo = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CityPlaceLogoWhite = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CPD_1scaled = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.craiyon_100013_image = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.craiyon_100930_image = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.tarjeta = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
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



(lib.Símbolo17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.craiyon_100013_image();
	this.instance.setTransform(0,0,0.4541,0.4541);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo17, new cjs.Rectangle(0,0,465,697.5), null);


(lib.Símbolo15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj8CBQgigTgRgjQgQgjgBgoQABgtASgjQATgjAkgSQAcgOApAAQA1AAAeAWQAeAXAJAnIg6AKQgGgVgQgMQgRgMgZAAQgmAAgXAYQgWAYAAAwQAAAxAXAaQAXAZAkABQASAAATgIQASgHANgKIAAglIhCAAIAAguIB8AAIAABwQgSASgiAOQgiANgkAAQgtAAghgTgAI6CPIhzi6IAAC6Ig2AAIAAkeIA5AAIB1C/IAAi/IA2AAIAAEegAEgCPIAAkeIA5AAIAAEegADECPIgZhBIhzAAIgXBBIg8AAIBukeIA9AAIBzEegABKAdIBPAAIgohpgAmTCPIgZhBIhzAAIgXBBIg+AAIBwkeIA9AAIBzEegAoNAdIBOAAIgnhpg");
	this.shape.setTransform(62.85,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo15, new cjs.Rectangle(0,0,125.7,29.6), null);


(lib.Símbolo13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFlCPIAAh4IhpilIBDAAIBEBxIBChxIBCAAIhpClIAAB4gAC8CPIgZhBIhzAAIgXBBIg9AAIBvkdIA9AAIBzEdgABCAeIBOAAIgnhpgAj6CPIAAkbIA6AAIAADrICQAAIAAAwgAoGCPIAAkdIBdAAQA0AAAQAEQAZAHARAVQAQAWAAAiQAAAagJASQgKARgPALQgOAKgQADQgUAEgoAAIglAAIAABsgAnMgMIAfAAQAiAAAMgFQAMgEAGgKQAHgKAAgMQAAgQgKgKQgJgKgOgDQgKgCgfAAIgcAAg");
	this.shape.setTransform(143.125,23.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(91.2,9.6,103.89999999999999,28.6), null);


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyOTDMAAAgmFMAkdAAAMAAAAmFg");
	this.shape.setTransform(0.025,0.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.7,-121.8,233.5,243.7);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cityplacedorallogo();
	this.instance.setTransform(-23,60,0.498,0.498);

	this.instance_1 = new lib.tarjeta();
	this.instance_1.setTransform(-63,-23,0.3009,0.3009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-63,-23,224.5,152), null);


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
	this.shape.graphics.f("#FF6600").s().p("EghDALjIAA3FMBCHAAAIAAXFg");
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


(lib.Símbolo3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44ABBC").s().p("AhCAoIAkh9IBgARIhDCag");
	this.shape.setTransform(685.1081,383.5815,1.125,0.9485,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#44ABBC").s().p("AgkAWIAUhFIA1AKIglBVg");
	this.shape_1.setTransform(449.2864,90.1768,1.125,0.9485,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F98732").s().p("AgvAFIAYgvIBHA6IgjAbg");
	this.shape_2.setTransform(465.4578,40.8294,1.125,0.9485,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F95850").s().p("AgkAWIAUhFIA1AKIglBVg");
	this.shape_3.setTransform(300.2279,39.2406,1.125,0.9485,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F95850").s().p("AgkAVIAUhEIA1AKIglBVg");
	this.shape_4.setTransform(673.774,140.9233,1.125,0.9485,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F98732").s().p("AgkAVIAUhEIA1AKIglBVg");
	this.shape_5.setTransform(106.7331,24.7755,1.125,0.9485,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F98732").s().p("AgkAWIAUhFIA1AKIglBVg");
	this.shape_6.setTransform(-32.5943,233.3577,1.125,0.9485,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F98732").s().p("AgkAVIAUhEIA1AKIglBVg");
	this.shape_7.setTransform(337.9144,383.5578,1.125,0.9485,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3E254").s().p("AhIA/QAjgyARg7IAJgyIBUAPQgVA9gqBAIglA1g");
	this.shape_8.setTransform(-32.5943,375.0684,1.125,0.9485,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3E254").s().p("AhIBAQAjgyARg7IAJgzIBUAQQgVA8gqBAIglA1g");
	this.shape_9.setTransform(209.9491,47.2557,1.125,0.9485,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F95850").s().p("AgjgIIgfgoIBCg2QAgA4AUBJQAMAmAEAaIg3AMQgOg8gigzg");
	this.shape_10.setTransform(193.2714,145.4762,1.125,0.9485,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD039").s().p("AhbAxQAngyA7gxQAegZAWgOIAhAuQgxAlgiAzIgYAsg");
	this.shape_11.setTransform(139.8635,378.9811,1.125,0.9485,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#44ABBC").s().p("AgzgIIgkg2IAvgfQAjAzAxAkQAZARATAIIgtBLQgwgogug+g");
	this.shape_12.setTransform(-12.0074,21.2422,1.125,0.9485,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFD039").s().p("AgzgIIgkg2IAvgfQAjAzAxAkQAZARATAJIgsBKQgxgogug+g");
	this.shape_13.setTransform(669.6116,30.3007,1.125,0.9485,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFD039").s().p("AgygIIglg2IAvgfQAjAyAxAlQAZASATAIIgsBKQgwgpgug9g");
	this.shape_14.setTransform(27.5353,268.3111,1.125,0.9485,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFD039").s().p("AgzgIIgkg2IAvgfQAjAzAxAkQAZASATAHIgsBLQgxgogug+g");
	this.shape_15.setTransform(527.6405,380.5462,1.125,0.9485,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F95850").s().p("AgjgIIgfgoIBCg2QAfA3AWBKQAKAlAFAaIg3ANQgNg7gjg0g");
	this.shape_16.setTransform(674.9271,291.6687,1.125,0.9485,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C3E254").s().p("AgjgIIgfgoIBCg2QAgA3AUBKQALAlAFAaIg3ANQgOg7gig0g");
	this.shape_17.setTransform(393.3472,387.6127,1.125,0.9485,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#44ABBC").s().p("AgKA3QgxgugKg/IBZgjIgCA3QAHA9AtAlIghAZQgWgKgZgYg");
	this.shape_18.setTransform(370.2291,18.9183,1.125,0.9485,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F95850").s().p("AgJA4QgygvgLg+IBZgkIgBA3QAHA9AuAlIgiAaQgWgLgYgXg");
	this.shape_19.setTransform(465.1766,201.7005,1.125,0.9485,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F95850").s().p("AhXANIAtgjQA5gjBAAHIAJBfQgUgMgfgFQg9gJgwAhg");
	this.shape_20.setTransform(64.9687,383.044,1.125,0.9485,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F95850").s().p("AhRA+QACgZAPgeQAcg+A4geIA+BKQgYADgdAMQg3AbgUA3g");
	this.shape_21.setTransform(274.8317,387.6127,1.125,0.9485,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7C63C").s().p("AgHALIjAAbIC9gtIgbjAIAtC9IDAgbIi9AtIAbDAg");
	this.shape_22.setTransform(645.6498,90.6036,1.125,0.9485,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7C63C").s().p("AgBAHIhaAkIBVgsIgkhaIAsBVIBagkIhVAsIAkBag");
	this.shape_23.setTransform(616.035,139.9036,1.125,0.9485,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7C63C").s().p("AgDAFIhigBIBhgHIABhiIAIBhIBhACIhhAHIgBBhg");
	this.shape_24.setTransform(34.8195,332.0288,1.125,0.9485,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7C63C").s().p("AgFAGIhzgCIBzgIIACh0IAIBzIB0ACIhzAJIgCBzg");
	this.shape_25.setTransform(398.7752,69.2617,1.125,0.9485,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7C63C").s().p("AgEAFIhhgCIBhgHIABhhIAHBhIBhABIhgAHIgCBig");
	this.shape_26.setTransform(248.1137,156.3132,1.125,0.9485,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F7C63C").s().p("AgNAEIithwIC3BfIBvisIheC2ICtBwIi3hfIhwCsg");
	this.shape_27.setTransform(229.9454,212.7509,1.125,0.9485,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7C63C").s().p("AgEAJIiTAfICPgsIgfiTIAsCPICTgfIiPAsIAfCTg");
	this.shape_28.setTransform(587.4326,350.5963,1.125,0.9485,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F7C63C").ss(2,1).p("AgIgaIARA1");
	this.shape_29.setTransform(661.7235,233.377,1.1248,0.9484,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F7C63C").ss(2,1).p("AAbgIIg1AR");
	this.shape_30.setTransform(641.4492,224.8173,1.1248,0.9484,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F7C63C").ss(2,1).p("AAKAfIgTg9");
	this.shape_31.setTransform(651.4598,207.4371,1.1248,0.9484,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F7C63C").ss(2,1).p("AgbAJIA3gR");
	this.shape_32.setTransform(671.8466,216.2813,1.1248,0.9484,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F7C63C").ss(2,1).p("AhLglICXBL");
	this.shape_33.setTransform(676.5988,228.9667,1.1248,0.9484,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F7C63C").ss(2,1).p("AAmhLIhLCX");
	this.shape_34.setTransform(646.6795,237.3604,1.1248,0.9484,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F7C63C").ss(2,1).p("ABMAmIiXhL");
	this.shape_35.setTransform(636.7251,212.1556,1.1248,0.9484,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F7C63C").ss(2,1).p("AglBMIBLiX");
	this.shape_36.setTransform(666.6163,203.7382,1.1248,0.9484,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F7C63C").ss(2,1).p("AgSgVIAlAr");
	this.shape_37.setTransform(43.794,77.6193,1.1248,0.9484,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F7C63C").ss(2,1).p("AAWgSIgrAl");
	this.shape_38.setTransform(21.1858,76.2441,1.1248,0.9484,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F7C63C").ss(2,1).p("AAVAYIgpgv");
	this.shape_39.setTransform(22.5918,56.9433,1.1248,0.9484,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F7C63C").ss(2,1).p("AgVATIArgl");
	this.shape_40.setTransform(45.4249,58.5794,1.1248,0.9484,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F7C63C").ss(2,1).p("AhUgFICoAL");
	this.shape_41.setTransform(55.5761,68.7514,1.1248,0.9484,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F7C63C").ss(2,1).p("AAGhTIgLCn");
	this.shape_42.setTransform(31.7025,86.1553,1.1248,0.9484,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F7C63C").ss(2,1).p("ABUAGIiogL");
	this.shape_43.setTransform(11.0908,66.0484,1.1248,0.9484,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F7C63C").ss(2,1).p("AgFBUIALin");
	this.shape_44.setTransform(34.9082,48.6445,1.1248,0.9484,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F7C63C").ss(2,1).p("AgIgPIARAf");
	this.shape_45.setTransform(279.8304,93.1975,1.1248,0.9484,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F7C63C").ss(2,1).p("AAQgIIgfAR");
	this.shape_46.setTransform(265.9955,89.8068,1.1248,0.9484,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F7C63C").ss(2,1).p("AAKASIgTgj");
	this.shape_47.setTransform(269.9042,77.9513,1.1248,0.9484,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F7C63C").ss(2,1).p("AgPAJIAfgR");
	this.shape_48.setTransform(283.8515,81.5316,1.1248,0.9484,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#F7C63C").ss(2,1).p("AgzgOIBnAd");
	this.shape_49.setTransform(288.5475,89.0243,1.1248,0.9484,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#F7C63C").ss(2,1).p("AAPgzIgdBn");
	this.shape_50.setTransform(270.9727,97.1335,1.1248,0.9484,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F7C63C").ss(2,1).p("AA0APIhngd");
	this.shape_51.setTransform(261.3277,82.3141,1.1248,0.9484,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#F7C63C").ss(2,1).p("AgOA0IAdhn");
	this.shape_52.setTransform(278.9025,74.1812,1.1248,0.9484,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F7C63C").ss(2,1).p("AgOgJIAeAT");
	this.shape_53.setTransform(484.9071,348.4465,1.1248,0.9484,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#F7C63C").ss(2,1).p("AAKgOIgTAd");
	this.shape_54.setTransform(470.8191,350.9362,1.1248,0.9484,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F7C63C").ss(2,1).p("AARALIghgV");
	this.shape_55.setTransform(467.6697,338.9384,1.1248,0.9484,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#F7C63C").ss(2,1).p("AgJAPIATgd");
	this.shape_56.setTransform(481.9826,336.5673,1.1248,0.9484,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#F7C63C").ss(2,1).p("Ag0ALIBpgV");
	this.shape_57.setTransform(490.2779,341.2858,1.1248,0.9484,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#F7C63C").ss(2,1).p("AgKg0IAVBp");
	this.shape_58.setTransform(479.2832,355.4413,1.1248,0.9484,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#F7C63C").ss(2,1).p("AA1gKIhpAV");
	this.shape_59.setTransform(462.4957,346.1703,1.1248,0.9484,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#F7C63C").ss(2,1).p("AALA1IgVhp");
	this.shape_60.setTransform(473.4905,332.0385,1.1248,0.9484,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#F7C63C").ss(2,1).p("AgcASIA5gj");
	this.shape_61.setTransform(229.7774,353.1887,1.1248,0.9484,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#F7C63C").ss(2,1).p("AgRgcIAjA5");
	this.shape_62.setTransform(223.4224,375.0977,1.1248,0.9484,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#F7C63C").ss(2,1).p("AAhgTIhBAn");
	this.shape_63.setTransform(197.0461,369.9524,1.1248,0.9484,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#F7C63C").ss(2,1).p("AASAdIgjg5");
	this.shape_64.setTransform(203.7949,347.83,1.1248,0.9484,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#F7C63C").ss(2,1).p("AgXBhIAvjB");
	this.shape_65.setTransform(219.8793,339.8869,1.1248,0.9484,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#F7C63C").ss(2,1).p("AhggXIDBAv");
	this.shape_66.setTransform(239.1975,366.7277,1.1248,0.9484,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#F7C63C").ss(2,1).p("AAYhgIgvDB");
	this.shape_67.setTransform(207.3942,383.0409,1.1248,0.9484,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#F7C63C").ss(2,1).p("ABhAYIjBgv");
	this.shape_68.setTransform(188.0478,356.2,1.1248,0.9484,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#44ABBC").s().p("AhCAoIAkh9IBgARIhDCag");
	this.shape_69.setTransform(6.65,14.55);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#44ABBC").s().p("AgkAWIAUhFIA1AKIglBVg");
	this.shape_70.setTransform(216.275,323.875);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F98732").s().p("AgvAFIAYgvIBHA6IgjAbg");
	this.shape_71.setTransform(201.9,375.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F95850").s().p("AgkAWIAUhFIA1AKIglBVg");
	this.shape_72.setTransform(348.775,377.575);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F95850").s().p("AgkAVIAUhEIA1AKIglBVg");
	this.shape_73.setTransform(16.725,270.375);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F98732").s().p("AgkAVIAUhEIA1AKIglBVg");
	this.shape_74.setTransform(520.775,392.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F98732").s().p("AgkAWIAUhFIA1AKIglBVg");
	this.shape_75.setTransform(644.625,172.925);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F98732").s().p("AgkAVIAUhEIA1AKIglBVg");
	this.shape_76.setTransform(315.275,14.575);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C3E254").s().p("AhIA/QAjgyARg7IAJgyIBUAPQgVA9gqBAIglA1g");
	this.shape_77.setTransform(644.625,23.525);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C3E254").s().p("AhIBAQAjgyARg7IAJgzIBUAQQgVA8gqBAIglA1g");
	this.shape_78.setTransform(429.025,369.125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F95850").s().p("AgjgIIgfgoIBCg2QAgA4AUBJQAMAmAEAaIg3AMQgOg8gigzg");
	this.shape_79.setTransform(443.85,265.575);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFD039").s().p("AhbAxQAngyA7gxQAegZAWgOIAhAuQgxAlgiAzIgYAsg");
	this.shape_80.setTransform(491.325,19.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#44ABBC").s().p("AgzgIIgkg2IAvgfQAjAzAxAkQAZARATAIIgtBLQgwgogug+g");
	this.shape_81.setTransform(626.325,396.55);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFD039").s().p("AgzgIIgkg2IAvgfQAjAzAxAkQAZARATAJIgsBKQgxgogug+g");
	this.shape_82.setTransform(20.425,387);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFD039").s().p("AgygIIglg2IAvgfQAjAyAxAlQAZASATAIIgsBKQgwgpgug9g");
	this.shape_83.setTransform(591.175,136.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFD039").s().p("AgzgIIgkg2IAvgfQAjAzAxAkQAZASATAHIgsBLQgxgogug+g");
	this.shape_84.setTransform(146.625,17.75);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F95850").s().p("AgjgIIgfgoIBCg2QAfA3AWBKQAKAlAFAaIg3ANQgNg7gjg0g");
	this.shape_85.setTransform(15.7,111.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C3E254").s().p("AgjgIIgfgoIBCg2QAgA3AUBKQALAlAFAaIg3ANQgOg7gig0g");
	this.shape_86.setTransform(266,10.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#44ABBC").s().p("AgKA3QgxgugKg/IBZgjIgCA3QAHA9AtAlIghAZQgWgKgZgYg");
	this.shape_87.setTransform(286.55,399);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F95850").s().p("AgJA4QgygvgLg+IBZgkIgBA3QAHA9AuAlIgiAaQgWgLgYgXg");
	this.shape_88.setTransform(202.15,206.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F95850").s().p("AhXANIAtgjQA5gjBAAHIAJBfQgUgMgfgFQg9gJgwAhg");
	this.shape_89.setTransform(557.9,15.1167);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F95850").s().p("AhRA+QACgZAPgeQAcg+A4geIA+BKQgYADgdAMQg3AbgUA3g");
	this.shape_90.setTransform(371.35,10.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F7C63C").s().p("AgHALIjAAbIC9gtIgbjAIAtC9IDAgbIi9AtIAbDAg");
	this.shape_91.setTransform(41.725,323.425);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F7C63C").s().p("AgBAHIhaAkIBVgsIgkhaIAsBVIBagkIhVAsIAkBag");
	this.shape_92.setTransform(68.05,271.45);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F7C63C").s().p("AgDAFIhigBIBhgHIABhiIAIBhIBhACIhhAHIgBBhg");
	this.shape_93.setTransform(584.7,68.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F7C63C").s().p("AgFAGIhzgCIBzgIIACh0IAIBzIB0ACIhzAJIgCBzg");
	this.shape_94.setTransform(261.175,345.925);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F7C63C").s().p("AgEAFIhhgCIBhgHIABhhIAHBhIBhABIhgAHIgCBig");
	this.shape_95.setTransform(395.1,254.15);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F7C63C").s().p("AgNAEIithwIC3BfIBvisIheC2ICtBwIi3hfIhwCsg");
	this.shape_96.setTransform(411.25,194.65);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F7C63C").s().p("AgEAJIiTAfICPgsIgfiTIAsCPICTgfIiPAsIAfCTg");
	this.shape_97.setTransform(93.475,49.325);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#F7C63C").ss(2,1).p("AgIgaIARA1");
	this.shape_98.setTransform(27.45,172.925);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#F7C63C").ss(2,1).p("AAbgIIg1AR");
	this.shape_99.setTransform(45.475,181.95);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#F7C63C").ss(2,1).p("AAKAfIgTg9");
	this.shape_100.setTransform(36.575,200.275);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#F7C63C").ss(2,1).p("AgbAJIA3gR");
	this.shape_101.setTransform(18.45,190.95);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#F7C63C").ss(2,1).p("AhLglICXBL");
	this.shape_102.setTransform(14.225,177.575);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#F7C63C").ss(2,1).p("AAmhLIhLCX");
	this.shape_103.setTransform(40.825,168.725);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#F7C63C").ss(2,1).p("ABMAmIiXhL");
	this.shape_104.setTransform(49.675,195.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#F7C63C").ss(2,1).p("AglBMIBLiX");
	this.shape_105.setTransform(23.1,204.175);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#F7C63C").ss(2,1).p("AgSgVIAlAr");
	this.shape_106.setTransform(576.825,337.15);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#F7C63C").ss(2,1).p("AAWgSIgrAl");
	this.shape_107.setTransform(596.925,338.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#F7C63C").ss(2,1).p("AAVAYIgpgv");
	this.shape_108.setTransform(595.675,358.95);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#F7C63C").ss(2,1).p("AgVATIArgl");
	this.shape_109.setTransform(575.375,357.225);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#F7C63C").ss(2,1).p("AhUgFICoAL");
	this.shape_110.setTransform(566.35,346.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#F7C63C").ss(2,1).p("AAGhTIgLCn");
	this.shape_111.setTransform(587.575,328.15);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#F7C63C").ss(2,1).p("ABUAGIiogL");
	this.shape_112.setTransform(605.9,349.35);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#F7C63C").ss(2,1).p("AgFBUIALin");
	this.shape_113.setTransform(584.725,367.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#F7C63C").ss(2,1).p("AgIgPIARAf");
	this.shape_114.setTransform(366.975,320.725);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#F7C63C").ss(2,1).p("AAQgIIgfAR");
	this.shape_115.setTransform(379.275,324.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#F7C63C").ss(2,1).p("AAKASIgTgj");
	this.shape_116.setTransform(375.8,336.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#F7C63C").ss(2,1).p("AgPAJIAfgR");
	this.shape_117.setTransform(363.4,333.025);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#F7C63C").ss(2,1).p("AgzgOIBnAd");
	this.shape_118.setTransform(359.225,325.125);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#F7C63C").ss(2,1).p("AAPgzIgdBn");
	this.shape_119.setTransform(374.85,316.575);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#F7C63C").ss(2,1).p("AA0APIhngd");
	this.shape_120.setTransform(383.425,332.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#F7C63C").ss(2,1).p("AgOA0IAdhn");
	this.shape_121.setTransform(367.8,340.775);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#F7C63C").ss(2,1).p("AgOgJIAeAT");
	this.shape_122.setTransform(184.65,51.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#F7C63C").ss(2,1).p("AAKgOIgTAd");
	this.shape_123.setTransform(197.175,48.975);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#F7C63C").ss(2,1).p("AARALIghgV");
	this.shape_124.setTransform(199.975,61.625);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#F7C63C").ss(2,1).p("AgJAPIATgd");
	this.shape_125.setTransform(187.25,64.125);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#F7C63C").ss(2,1).p("Ag0ALIBpgV");
	this.shape_126.setTransform(179.875,59.15);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#F7C63C").ss(2,1).p("AgKg0IAVBp");
	this.shape_127.setTransform(189.65,44.225);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#F7C63C").ss(2,1).p("AA1gKIhpAV");
	this.shape_128.setTransform(204.575,54);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#F7C63C").ss(2,1).p("AALA1IgVhp");
	this.shape_129.setTransform(194.8,68.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#F7C63C").ss(2,1).p("AgcASIA5gj");
	this.shape_130.setTransform(411.475,46.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#F7C63C").ss(2,1).p("AgRgcIAjA5");
	this.shape_131.setTransform(417.125,23.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#F7C63C").ss(2,1).p("AAhgTIhBAn");
	this.shape_132.setTransform(440.575,28.925);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#F7C63C").ss(2,1).p("AASAdIgjg5");
	this.shape_133.setTransform(434.575,52.25);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#F7C63C").ss(2,1).p("AgXBhIAvjB");
	this.shape_134.setTransform(420.275,60.625);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#F7C63C").ss(2,1).p("AhggXIDBAv");
	this.shape_135.setTransform(403.1,32.325);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#F7C63C").ss(2,1).p("AAYhgIgvDB");
	this.shape_136.setTransform(431.375,15.125);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#F7C63C").ss(2,1).p("ABhAYIjBgv");
	this.shape_137.setTransform(448.575,43.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3_1, new cjs.Rectangle(-40.8,0,733.4,408), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("As2BbQgCgFgBgFQgGg9ADhCQAAgPgEgMIgIgTIAAgBIA8ABIAAAAQASAAgNAKIgBAAQgCAFgCAGIAAABIAAACQABAZgCAWQgCAwAGAsQAEAXAUAIQAaAKAbgLQAZgLgBglIgChGIAAAAIgBgyIAAgBQgEgNgHgLQAOgCATAAQARgBAMAFIAAAAIgOASQABA3ACA2QACBDgrAUQgSAIgdACIgJAAQg/AAgXgrgAPNCCQgUgBgQgFQgTgHgOAKIgBgBQgFgKACgQIAAAAIgBgcIABAAQAIgBACADQAUAYAjAGQAxAJAPgkIAAgBIAAgLQgIgVgXgGQgngKgggRQgcgMABgrQATg9BRAIIAZAEQAOADANgEQADAYgEAZIAAAAQgMgEgIgIQgYgYgpALQgPAEgFAPQgBAIACAGIAAABQAcAYAqAKQAoAJAPAmIAAAaIAAABIgBABQgSA2hFADIAAABIgGABQgDAAgCgCgAnlCAQhrgCgLhjIgBAAIAAgUIABAAIAAgBIAAgGQAThUBagNQASgDAQAFQANAFASAAQAFgEAFABIABAAQACAFABAOIgDAiIgBAAQgMgCgGgIQgXgcguAJQgMACgHAIQgXAXAAArIAAALIAAABQgEBLA6AMIABAAIAJAAIABAAQAsgIAWggQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIACAAQACASgCAWIAAAAQgOAKgSAGQgRAGgVAAIgDAAgAiwB/QgdgBgagCIAKgTIABgBIAAhQIAAgBIhfAAIgBAAQgCAuAGAoQAAABAAABQABAAAAABQAAAAABABQAAAAAAAAQAFAEAAAHQggACghgBIAAgBQADgKAEgIIABAAIAAiyIAAgBQgGgIgEgLIAAgBIBCABIAAAAIgJATIgBAAIAABGIAAABIBdAAIABAAIAAhHIAAgBIgJgRIAAgBQAigDAiADIABAAQgGAJgEAKIgCAAIAACwIAAABQAGALAIAHIAAABQgFAEgJAAIgCAAgAJjB8IgBAAIAAgFQAKgGACgPIAAgBIAAgBIAAieIAAgBIAAgJIgBAAQgGgKgEgLIBAAAIABAAQAqBFApBFIAMAUQAEgRAAgYQAAg0gGgvQgBgIgGgFIgBgCQALgFARABQAQAAAOACIgJATQgEAKAAANIAACuIg0AAIgCAAQgqhEgqhFIgKgUQgDAMABAOIAAACIAAABQABAsgCApIAAABQgBAPADAKIABABQAHAGADAKIgBAAIAAABIgZABIgfgCgAIBB8IAAAAQgBgHAFgBQABgDgBgDQgHgggNgZIgBAAIhPAAIAAABIgTAuQACAOAHAJIAAABIAAABQggABgcgCIgBAAIgBgFQAVgVAKgfQAOgpAQgnIAghUIAvAAIABAAQAhBOAgBOQAMAgAUAZIACAGQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIAAABIgfABIgogCgAHJg3IggBOIABACQAgADAdgCIAAgCQgPgogPgoIAAABgAEJB8IgMgTQgphEgphGIgBAAQgBBHACBEIABAAQAHAIAGAKIAAABQggABgcgCQgBgEACgBQAFgEABgHQAGgmAAgrQAAg3gEgxIgBAAQgHgGgCgJIAAgBIBCABIAAAAIBTCKIAMAUQACgsAAguIAAgBIAAgBIAAgpIAAgBQgBgIgDgGIgCAAQgEgDgCgHQAdgCAeACIAAAAQgEAKgGAJQgDADAAAFIAAACQABBegDBcIAAABIAAABIgXABIgfgCgAAZB8IABgBIAGgMIAAgCQgHgfgOgZIgBAAIhOAAIAAABQgKAVgIAXIAAAKIAAABQAGAHADAIIgBAAIAAABQghABgfgCIAAgBIAAgDQAXgSAJghQAGgUAIgUIAyh+IAuAAIABAAIBACcQAMAgAUAYIADAHQABABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIAAABIggABIgqgCgAgeg3IgdBNIAAABIAAABQAbADAegBIADgBIAAgBIAAgBQgOgogQgnIgBABgAwuB8IAAgBIAAgEQAGgDADgGIABgBQABhZAAhcIAAgBIgKgSIAAgBIAAgBIB3ABIAAAAQAqACATAaQAFAIgBAPQgGAqgtAFQAWAFATAKQARAJAIAUQAEALgDALQgQA1hFgBIAAABIgzABIhBgCgAv0AXIAAABIAABNIAgABQAzAEAGgoQACgMgEgGQgTgagtAAIgXABgAv0gDIAAABIAbAAIACAAQAbABAOgPQAHgIgCgQQgFgjgvADIAAABIgOAAIgBAAIgIAAIAABEgANkhIIABAAQAJgHAAgPIAAgBQgPABgKgIIgBgBQgDgFgBgHIAAgBQAEgLAIgFIAAAAQATgEAJALIABAAQANAggYAUQgGAHgNAAQABgDAIgDg");
	this.shape.setTransform(107.4,14.059);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0.3,0.7,214.29999999999998,26.8), null);


(lib.Símbolo14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo15();
	this.instance.setTransform(140.1,23.9,1,1,0,0,0,62.9,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo14, new cjs.Rectangle(77.2,9.1,125.7,29.6), null);


(lib.Símbolo10 = function(mode,startPosition,loop,reversed) {
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
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Capa_1
	this.instance = new lib.Símbolo3();
	this.instance.setTransform(0.05,331.55,1,1,0,0,0,60.6,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0.05},79,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.5,-83.5,224.4,483.4);


(lib.Símbolo9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo14();
	this.instance.setTransform(0.85,-0.5,1,1,0,0,0,141.7,24.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("A26E8IAAp3MAt1AAAIAAJ3g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(-146.6,-31.5,293.29999999999995,63.1), null);


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ini:0,parada:29};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.gotoAndStop("parada");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(5).call(this.frame_34).wait(1));

	// Capa_1
	this.instance = new lib.Símbolo9();
	this.instance.setTransform(0,175.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},29,cjs.Ease.get(1)).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.6,-31.5,293.29999999999995,238.6);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {a:0,b:1,c:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Capa_2
	this.instance = new lib.Mapadebits6();
	this.instance.setTransform(-78,-116,0.7434,0.6006);

	this.instance_1 = new lib.Símbolo17();
	this.instance_1.setTransform(-78.1,-113.9,0.7899,0.6352,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.Mapadebits5();
	this.instance_2.setTransform(-79,-115,0.8277,0.665);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-116,368.3,445.2);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo13();
	this.instance.setTransform(147.5,31.05,1,1,0,0,0,141.7,24.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A26E7IAAp2MAt1AAAIAAJ2g");
	this.shape.setTransform(146.675,31.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,293.4,63.1), null);


(lib.Símbolo2copia2 = function(mode,startPosition,loop,reversed) {
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
		this.bt.addEventListener("click", play.bind(this));
		
		function play()
		{
		this.play();
		}
		this.stop();
	}
	this.frame_1 = function() {
		playSound("checkpoint");
	}
	this.frame_36 = function() {
		playSound("sonidofindeltiempoterminoeltiempobuzzercornetamalCORTA");
	}
	this.frame_59 = function() {
		this.stop();
		exportRoot.btag.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(35).call(this.frame_36).wait(23).call(this.frame_59).wait(1));

	// Capa_2
	this.bt = new lib.Símbolo6();
	this.bt.name = "bt";
	this.bt.setTransform(115.15,102.95);
	new cjs.ButtonHelper(this.bt, 0, 1, 2, false, new lib.Símbolo6(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(60));

	// Capa_1
	this.caja = new lib.Símbolo5();
	this.caja.name = "caja";
	this.caja.setTransform(116,112.4,1,1,0,0,0,116,112.4);

	this.timeline.addTween(cjs.Tween.get(this.caja).to({y:-95.6},59,cjs.Ease.get(-1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-324,367.3,653.1);


(lib.Símbolo2copia = function(mode,startPosition,loop,reversed) {
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
		this.bt.addEventListener("click", play.bind(this));
		
		function play()
		{
		this.play();
		}
		this.stop();
	}
	this.frame_1 = function() {
		playSound("checkpoint");
	}
	this.frame_46 = function() {
		this.confeti.scaleX = 0;
		this.confeti.scaleY = 0;
		
		createjs.Tween.get(this.confeti)
		    .wait(200) // Espera 0.5 segundos antes de iniciar esta animación
		    .to({ scaleX: 1.5, scaleY: 1.5}, 3000, createjs.Ease.elasticOut);
		
		this.confeti2.scaleX = 0;
		this.confeti2.scaleY = 0;
		
		createjs.Tween.get(this.confeti2)
		    .wait(800) // Espera 0.5 segundos antes de iniciar esta animación
		    .to({ scaleX: 1.5, scaleY: 1.5}, 4000, createjs.Ease.elasticOut);
		playSound("CORNETAUNAVEZ");
	}
	this.frame_59 = function() {
		this.stop();
		exportRoot.btag.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(45).call(this.frame_46).wait(13).call(this.frame_59).wait(1));

	// Capa_4
	this.confeti2 = new lib.Símbolo3_1();
	this.confeti2.name = "confeti2";
	this.confeti2.setTransform(85.25,120.55,1.8134,1.6693,0,-44.9993,135.001,316.9,198.3);

	this.confeti = new lib.Símbolo3_1();
	this.confeti.name = "confeti";
	this.confeti.setTransform(60.95,94.25,1.7451,1.765,0,0,0,317,198.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.confeti},{t:this.confeti2}]},46).wait(14));

	// Capa_2
	this.bt = new lib.Símbolo6();
	this.bt.name = "bt";
	this.bt.setTransform(115.15,102.95);
	new cjs.ButtonHelper(this.bt, 0, 1, 2, false, new lib.Símbolo6(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(60));

	// Capa_1
	this.caja = new lib.Símbolo5();
	this.caja.name = "caja";
	this.caja.setTransform(116,112.4,1,1,0,0,0,116,112.4);

	this.timeline.addTween(cjs.Tween.get(this.caja).to({y:-95.6},59,cjs.Ease.get(-1)).wait(1));

	// Capa_3
	this.instance = new lib.Símbolo3();
	this.instance.setTransform(114.7,147.45,1,1,0,0,0,60.6,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-588.5,-533.3,1352,1364);


(lib.Símbolo2_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Capa_1
	this.caja = new lib.Símbolo5();
	this.caja.name = "caja";
	this.caja.setTransform(116,794.9,1,1,0,0,0,116,112.4);

	this.timeline.addTween(cjs.Tween.get(this.caja).to({regX:-265.6,regY:257.9,x:-265.6,y:257.9},29,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-459.1,-116,748.4000000000001,1127.6);


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
	this.mipass.setTransform(-1121.3,-499.8);

	this.passserv = new cjs.Text("", "41px 'Arial'", "#FFFFFF");
	this.passserv.name = "passserv";
	this.passserv.textAlign = "center";
	this.passserv.lineHeight = 48;
	this.passserv.lineWidth = 307;
	this.passserv.parent = this;
	this.passserv.setTransform(-1129.45,-593.05);

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
p.nominalBounds = new cjs.Rectangle(-1345,-595,2045,996);


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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"ini":0,ini2:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.instance = new lib.Symbol36();
	this.instance.setTransform(695.25,-561.15,0.7461,0.7461,0,0,0,57.6,42);

	this.mimusica = new lib.an_Video({'id': 'mimusica', 'src':'videos/msuica.mp4', 'autoplay':true, 'controls':false, 'loop':true, 'preload':false, 'class':'musica'});

	this.mimusica.name = "mimusica";
	this.mimusica.setTransform(-252.5,-441.45,0.64,0.4801,0,0,0,199.9,149.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mimusica},{t:this.instance}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380.7,-513.6,1392.6,360.90000000000003);


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


(lib.Symbol27_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.Símbolo2();
	this.instance_1.setTransform(265.25,244.25,1,1,0,0,0,107.2,14.3);

	this.instance_2 = new lib.craiyon_100930_image();
	this.instance_2.setTransform(175,59,0.3351,0.3351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27_1, new cjs.Rectangle(158.3,59,214.3,198.39999999999998), null);


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
	this.instance.setTransform(159.7,47.4,0.8991,0.8991,0,0,0,122.4,19.8);

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
(lib.dondecayo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {resetear:1,p1:162,p2:163,p3:164};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,29,39,47,54,64,87,161,162,163,164];
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
		this.gotoAndStop("resetear");
		}
		this.randomNumber.text = Math.floor(Math.random() * 3) + 1;
		
		this.cajaa.caja.gotoAndStop("a");
		this.cajab.caja.gotoAndStop("b");
		this.cajac.caja.gotoAndStop("c");
		playSound("click2");
		this.playbt.addEventListener("click", playbt.bind(this));
		
		function playbt()
		{
		this.play();
		}
	}
	this.frame_2 = function() {
		playSound("click2");
	}
	this.frame_29 = function() {
		playSound("moneda2");
	}
	this.frame_39 = function() {
		playSound("moneda2");
	}
	this.frame_47 = function() {
		playSound("moneda2");
	}
	this.frame_54 = function() {
		playSound("moneda2");
	}
	this.frame_64 = function() {
		playSound("moneda2");
	}
	this.frame_87 = function() {
		playSound("moneda2");
	}
	this.frame_161 = function() {
		this.btag.addEventListener("click", reini2.bind(this));
		
		function reini2()
		{
		this.gotoAndStop("resetear");
		}
		
		this.btag.gotoAndStop("ini");
		if (this.randomNumber.text === 1) {
		    this.gotoAndStop("p1");
		} else if (this.randomNumber.text === 2) {
		    this.gotoAndStop("p2");
		} else {
		    this.gotoAndStop("p3");
		}
		playSound("click");
	}
	this.frame_162 = function() {
		this.stop();
		this.c1.gotoAndStop("ini");
		this.c2.gotoAndStop("ini");
		this.c3.gotoAndStop("ini");
		this.c1.caja.gotoAndStop("b");
		this.c2.caja.gotoAndStop("a");
		this.c3.caja.gotoAndStop("c");
	}
	this.frame_163 = function() {
		this.stop();
		this.c1.gotoAndStop("ini");
		this.c2.gotoAndStop("ini");
		this.c3.gotoAndStop("ini");
		this.c1.caja.gotoAndStop("a");
		this.c2.caja.gotoAndStop("b");
		this.c3.caja.gotoAndStop("c");
	}
	this.frame_164 = function() {
		this.stop();
		this.c1.gotoAndStop("ini");
		this.c2.gotoAndStop("ini");
		this.c3.gotoAndStop("ini");
		this.c1.caja.gotoAndStop("c");
		this.c2.caja.gotoAndStop("b");
		this.c3.caja.gotoAndStop("a");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(27).call(this.frame_29).wait(10).call(this.frame_39).wait(8).call(this.frame_47).wait(7).call(this.frame_54).wait(10).call(this.frame_64).wait(23).call(this.frame_87).wait(74).call(this.frame_161).wait(1).call(this.frame_162).wait(1).call(this.frame_163).wait(1).call(this.frame_164).wait(1));

	// Layer 4
	this.instance = new lib.Symbol28();
	this.instance.setTransform(644.8,349.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(165));

	// Layer 1
	this.fsbtn = new lib.Symbol8();
	this.fsbtn.name = "fsbtn";
	this.fsbtn.setTransform(632.45,336.8,1,1,0,0,0,155.7,48.3);

	this.randomNumber = new cjs.Text("", "bold 40px 'Arial'", "#FFFFFF");
	this.randomNumber.name = "randomNumber";
	this.randomNumber.textAlign = "center";
	this.randomNumber.lineHeight = 47;
	this.randomNumber.lineWidth = 116;
	this.randomNumber.parent = this;
	this.randomNumber.setTransform(1209.3,-96.05);

	this.movies = new lib.Symbol2();
	this.movies.name = "movies";
	this.movies.setTransform(144.95,206.2,1,1,0,0,0,-0.1,0);

	this.myMC = new lib.Symbol49();
	this.myMC.name = "myMC";
	this.myMC.setTransform(644.65,666.7,1,1,0,0,0,626.6,32.8);

	this.btfull = new lib.Symbol5();
	this.btfull.name = "btfull";
	this.btfull.setTransform(1250.3,26.75,0.3732,0.3732,0,0,0,49.1,42.8);

	this.reini = new lib.Symbol4();
	this.reini.name = "reini";
	this.reini.setTransform(1190.35,27.9,0.4229,0.4229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fsbtn}]}).to({state:[{t:this.reini},{t:this.btfull},{t:this.myMC},{t:this.movies},{t:this.randomNumber}]},1).wait(164));

	// Capa_7
	this.instance_1 = new lib.CityPlaceLogoWhite();
	this.instance_1.setTransform(21,18,0.3646,0.3646);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(165));

	// Capa_6
	this.btag = new lib.Símbolo8();
	this.btag.name = "btag";
	this.btag.setTransform(622.35,620.45);
	this.btag._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btag).wait(161).to({_off:false},0).wait(4));

	// Capa_5
	this.c3 = new lib.Símbolo2copia2();
	this.c3.name = "c3";
	this.c3.setTransform(890.9,355.25,1,1,0,0,0,116,112.4);

	this.c2 = new lib.Símbolo2copia2();
	this.c2.name = "c2";
	this.c2.setTransform(359.8,355.25,1,1,0,0,0,116,112.4);

	this.c1 = new lib.Símbolo2copia();
	this.c1.name = "c1";
	this.c1.setTransform(629,437.2,1,1,0,0,0,116,112.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.c1,p:{x:629,y:437.2}},{t:this.c2,p:{x:359.8,y:355.25}},{t:this.c3,p:{y:355.25,x:890.9}}]},162).to({state:[{t:this.c1,p:{x:359.65,y:354.95}},{t:this.c3,p:{y:354.95,x:890.9}},{t:this.c2,p:{x:628.6,y:436.85}}]},1).to({state:[{t:this.c1,p:{x:890.9,y:355.25}},{t:this.c2,p:{x:628.6,y:436.85}},{t:this.c3,p:{y:355.25,x:359.8}}]},1).wait(1));

	// Capa_1
	this.cajaa = new lib.Símbolo2_1();
	this.cajaa.name = "cajaa";
	this.cajaa.setTransform(359.8,220.35,1,1,0,0,0,116,112.4);
	this.cajaa._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cajaa).wait(1).to({_off:false},0).to({y:355.25},28,cjs.Ease.get(1)).wait(1).to({regX:105.2,regY:447.8,x:354.3,y:690.65},0).wait(1).to({x:370.2},0).wait(1).to({x:396.75},0).wait(1).to({x:433.95},0).wait(1).to({x:481.75},0).wait(1).to({x:540.15},0).wait(1).to({x:609.2},0).wait(1).to({x:688.9},0).wait(1).to({x:779.15},0).wait(1).to({regX:116,regY:112.4,x:890.9,y:355.25},0).wait(1).to({regX:105.2,regY:447.8,x:848.55,y:700.5},0).wait(1).to({x:816.7,y:710.45},0).wait(1).to({x:784.45,y:720.55},0).wait(1).to({x:751.9,y:730.75},0).wait(1).to({x:719,y:741.05},0).wait(1).to({x:685.75,y:751.45},0).wait(1).to({x:652.15,y:761.95},0).wait(1).to({regX:116,regY:112.4,x:629,y:437.2},0).wait(1).to({regX:105.2,regY:447.8,x:579.9,y:760.9},0).wait(1).to({x:541.55,y:749.25},0).wait(1).to({x:503.15,y:737.55},0).wait(1).to({x:464.7,y:725.85},0).wait(1).to({x:426.15,y:714.1},0).wait(1).to({x:387.6,y:702.4},0).wait(1).to({regX:116,regY:112.4,x:359.8,y:355.25},0).wait(1).to({regX:105.2,regY:447.8,x:354.3,y:690.65},0).wait(1).to({x:370.2},0).wait(1).to({x:396.75},0).wait(1).to({x:433.95},0).wait(1).to({x:481.75},0).wait(1).to({x:540.15},0).wait(1).to({x:609.2},0).wait(1).to({x:688.9},0).wait(1).to({x:779.15},0).wait(1).to({regX:116,regY:112.4,x:890.9,y:355.25},0).wait(1).to({regX:105.2,regY:447.8,x:869.15,y:694.05},0).wait(1).to({x:858.2,y:697.45},0).wait(1).to({x:847.2,y:700.9},0).wait(1).to({x:836.15,y:704.4},0).wait(1).to({x:825.05,y:707.85},0).wait(1).to({x:813.9,y:711.35},0).wait(1).to({x:802.75,y:714.85},0).wait(1).to({x:791.5,y:718.35},0).wait(1).to({x:780.25,y:721.85},0).wait(1).to({x:768.95,y:725.4},0).wait(1).to({x:757.6,y:728.95},0).wait(1).to({x:746.2,y:732.5},0).wait(1).to({x:734.8,y:736.1},0).wait(1).to({x:723.3,y:739.7},0).wait(1).to({x:711.8,y:743.3},0).wait(1).to({x:700.25,y:746.9},0).wait(1).to({x:688.65,y:750.5},0).wait(1).to({x:677,y:754.15},0).wait(1).to({x:665.3,y:757.8},0).wait(1).to({x:653.6,y:761.5},0).wait(1).to({x:641.85,y:765.15},0).wait(1).to({x:630.05,y:768.85},0).wait(1).to({regX:116,regY:112.4,x:629,y:437.2},0).wait(1).to({regX:105.2,regY:447.8,x:614.55,y:771.45},0).wait(1).to({x:610.95,y:770.35},0).wait(1).to({x:607.3,y:769.25},0).wait(1).to({x:603.7,y:768.15},0).wait(1).to({x:600.05,y:767.05},0).wait(1).to({x:596.45,y:765.95},0).wait(1).to({x:592.85,y:764.85},0).wait(1).to({x:589.2,y:763.75},0).wait(1).to({x:585.6,y:762.65},0).wait(1).to({x:581.95,y:761.55},0).wait(1).to({x:578.35,y:760.45},0).wait(1).to({x:574.7,y:759.35},0).wait(1).to({x:571.1,y:758.25},0).wait(1).to({x:567.45,y:757.15},0).wait(1).to({x:563.85,y:756.05},0).wait(1).to({x:560.2,y:754.95},0).wait(1).to({x:556.55,y:753.8},0).wait(1).to({x:552.95,y:752.7},0).wait(1).to({x:549.3,y:751.6},0).wait(1).to({x:545.7,y:750.5},0).wait(1).to({x:542.05,y:749.4},0).wait(1).to({x:538.45,y:748.3},0).wait(1).to({x:534.8,y:747.2},0).wait(1).to({x:531.15,y:746.1},0).wait(1).to({x:527.55,y:745},0).wait(1).to({x:523.9,y:743.9},0).wait(1).to({x:520.25,y:742.75},0).wait(1).to({x:516.65,y:741.65},0).wait(1).to({x:513,y:740.55},0).wait(1).to({x:509.35,y:739.45},0).wait(1).to({x:505.75,y:738.35},0).wait(1).to({x:502.1,y:737.25},0).wait(1).to({x:498.45,y:736.15},0).wait(1).to({x:494.85,y:735.05},0).wait(1).to({x:491.2,y:733.9},0).wait(1).to({x:487.55,y:732.8},0).wait(1).to({x:483.9,y:731.7},0).wait(1).to({x:480.3,y:730.6},0).wait(1).to({x:476.65,y:729.5},0).wait(1).to({x:473,y:728.4},0).wait(1).to({x:469.35,y:727.25},0).wait(1).to({x:465.7,y:726.15},0).wait(1).to({x:462.1,y:725.05},0).wait(1).to({x:458.45,y:723.95},0).wait(1).to({x:454.8,y:722.85},0).wait(1).to({x:451.15,y:721.75},0).wait(1).to({x:447.5,y:720.6},0).wait(1).to({x:443.85,y:719.5},0).wait(1).to({x:440.25,y:718.4},0).wait(1).to({x:436.6,y:717.3},0).wait(1).to({x:432.95,y:716.2},0).wait(1).to({x:429.3,y:715.1},0).wait(1).to({x:425.65,y:713.95},0).wait(1).to({x:422,y:712.85},0).wait(1).to({x:418.35,y:711.75},0).wait(1).to({x:414.7,y:710.65},0).wait(1).to({x:411.05,y:709.5},0).wait(1).to({x:407.4,y:708.4},0).wait(1).to({x:403.75,y:707.3},0).wait(1).to({x:400.1,y:706.2},0).wait(1).to({x:396.45,y:705.1},0).wait(1).to({x:392.8,y:703.95},0).wait(1).to({x:389.15,y:702.85},0).wait(1).to({x:385.5,y:701.75},0).wait(1).to({x:381.85,y:700.65},0).wait(1).to({x:378.2,y:699.5},0).wait(1).to({x:374.55,y:698.4},0).wait(1).to({x:370.9,y:697.3},0).wait(1).to({x:367.25,y:696.2},0).wait(1).to({x:363.6,y:695.1},0).wait(1).to({x:359.95,y:693.95},0).wait(1).to({x:356.3,y:692.85},0).wait(1).to({x:352.65,y:691.75},0).wait(1).to({regX:116,regY:112.4,x:359.8,y:355.25},0).to({_off:true},1).wait(3));

	// Capa_3
	this.cajab = new lib.Símbolo2_1();
	this.cajab.name = "cajab";
	this.cajab.setTransform(629,221.85,1,1,0,0,0,116,112.4);
	this.cajab._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cajab).wait(1).to({_off:false},0).to({y:437.2},28,cjs.Ease.get(1)).wait(1).to({regX:105.2,regY:447.8,x:615.5,y:771.75},0).wait(1).to({x:607.45,y:769.3},0).wait(1).to({x:594,y:765.2},0).wait(1).to({x:575.2,y:759.45},0).wait(1).to({x:551.05,y:752.1},0).wait(1).to({x:521.5,y:743.05},0).wait(1).to({x:486.6,y:732.4},0).wait(1).to({x:446.3,y:720.15},0).wait(1).to({x:400.65,y:706.2},0).wait(1).to({regX:116,regY:112.4,x:360.45,y:355.25},0).wait(1).to({regX:105.2,regY:447.8,x:413.6,y:690.55},0).wait(1).to({x:478.3,y:690.45},0).wait(1).to({x:543.7,y:690.35},0).wait(1).to({x:609.8,y:690.3},0).wait(1).to({x:676.65,y:690.2},0).wait(1).to({x:744.15,y:690.1},0).wait(1).to({x:812.4,y:690},0).wait(1).to({regX:116,regY:112.4,x:892.15,y:354.55},0).wait(1).to({regX:105.2,regY:447.8,x:843.9,y:701.7},0).wait(1).to({x:806.4,y:713.45},0).wait(1).to({x:768.85,y:725.25},0).wait(1).to({x:731.3,y:737.05},0).wait(1).to({x:693.65,y:748.9},0).wait(1).to({x:655.95,y:760.7},0).wait(1).to({regX:116,regY:112.4,x:629,y:437.2},0).wait(1).to({regX:105.2,regY:447.8,x:615.5,y:771.75},0).wait(1).to({x:607.45,y:769.3},0).wait(1).to({x:594,y:765.2},0).wait(1).to({x:575.2,y:759.45},0).wait(1).to({x:551.05,y:752.1},0).wait(1).to({x:521.5,y:743.05},0).wait(1).to({x:486.6,y:732.4},0).wait(1).to({x:446.3,y:720.15},0).wait(1).to({x:400.65,y:706.2},0).wait(1).to({regX:116,regY:112.4,x:360.45,y:355.25},0).wait(1).to({regX:105.2,regY:447.8,x:371.8,y:690.6},0).wait(1).to({x:394.05,y:690.55},0).wait(1).to({x:416.4},0).wait(1).to({x:438.85,y:690.5},0).wait(1).to({x:461.35},0).wait(1).to({x:483.95,y:690.45},0).wait(1).to({x:506.65,y:690.4},0).wait(1).to({x:529.45},0).wait(1).to({x:552.3,y:690.35},0).wait(1).to({x:575.25},0).wait(1).to({x:598.25,y:690.3},0).wait(1).to({x:621.4,y:690.25},0).wait(1).to({x:644.6},0).wait(1).to({x:667.9,y:690.2},0).wait(1).to({x:691.25},0).wait(1).to({x:714.7,y:690.15},0).wait(1).to({x:738.25,y:690.1},0).wait(1).to({x:761.9},0).wait(1).to({x:785.6,y:690.05},0).wait(1).to({x:809.4,y:690},0).wait(1).to({x:833.3},0).wait(1).to({x:857.25,y:689.95},0).wait(1).to({regX:116,regY:112.4,x:892.15,y:354.55},0).wait(1).to({regX:105.2,regY:447.8,x:877.8,y:691.05},0).wait(1).to({x:874.25,y:692.15},0).wait(1).to({x:870.7,y:693.25},0).wait(1).to({x:867.15,y:694.35},0).wait(1).to({x:863.65,y:695.5},0).wait(1).to({x:860.1,y:696.6},0).wait(1).to({x:856.55,y:697.7},0).wait(1).to({x:853,y:698.8},0).wait(1).to({x:849.45,y:699.95},0).wait(1).to({x:845.9,y:701.05},0).wait(1).to({x:842.4,y:702.15},0).wait(1).to({x:838.85,y:703.25},0).wait(1).to({x:835.3,y:704.4},0).wait(1).to({x:831.75,y:705.5},0).wait(1).to({x:828.2,y:706.6},0).wait(1).to({x:824.65,y:707.7},0).wait(1).to({x:821.1,y:708.85},0).wait(1).to({x:817.55,y:709.95},0).wait(1).to({x:814,y:711.05},0).wait(1).to({x:810.45,y:712.2},0).wait(1).to({x:806.9,y:713.3},0).wait(1).to({x:803.35,y:714.4},0).wait(1).to({x:799.8,y:715.5},0).wait(1).to({x:796.25,y:716.65},0).wait(1).to({x:792.7,y:717.75},0).wait(1).to({x:789.15,y:718.85},0).wait(1).to({x:785.6,y:720},0).wait(1).to({x:782.05,y:721.1},0).wait(1).to({x:778.5,y:722.2},0).wait(1).to({x:774.95,y:723.35},0).wait(1).to({x:771.4,y:724.45},0).wait(1).to({x:767.85,y:725.55},0).wait(1).to({x:764.3,y:726.7},0).wait(1).to({x:760.75,y:727.8},0).wait(1).to({x:757.2,y:728.9},0).wait(1).to({x:753.65,y:730.05},0).wait(1).to({x:750.1,y:731.15},0).wait(1).to({x:746.55,y:732.25},0).wait(1).to({x:742.95,y:733.4},0).wait(1).to({x:739.4,y:734.5},0).wait(1).to({x:735.85,y:735.6},0).wait(1).to({x:732.3,y:736.75},0).wait(1).to({x:728.75,y:737.85},0).wait(1).to({x:725.2,y:738.95},0).wait(1).to({x:721.6,y:740.1},0).wait(1).to({x:718.05,y:741.2},0).wait(1).to({x:714.5,y:742.3},0).wait(1).to({x:710.95,y:743.45},0).wait(1).to({x:707.4,y:744.55},0).wait(1).to({x:703.8,y:745.7},0).wait(1).to({x:700.25,y:746.8},0).wait(1).to({x:696.7,y:747.9},0).wait(1).to({x:693.1,y:749.05},0).wait(1).to({x:689.55,y:750.15},0).wait(1).to({x:686,y:751.25},0).wait(1).to({x:682.45,y:752.4},0).wait(1).to({x:678.85,y:753.5},0).wait(1).to({x:675.3,y:754.65},0).wait(1).to({x:671.75,y:755.75},0).wait(1).to({x:668.15,y:756.85},0).wait(1).to({x:664.6,y:758},0).wait(1).to({x:661.05,y:759.1},0).wait(1).to({x:657.45,y:760.25},0).wait(1).to({x:653.9,y:761.35},0).wait(1).to({x:650.3,y:762.5},0).wait(1).to({x:646.75,y:763.6},0).wait(1).to({x:643.2,y:764.7},0).wait(1).to({x:639.6,y:765.85},0).wait(1).to({x:636.05,y:766.95},0).wait(1).to({x:632.45,y:768.1},0).wait(1).to({x:628.9,y:769.2},0).wait(1).to({x:625.3,y:770.35},0).wait(1).to({x:621.75,y:771.45},0).wait(1).to({regX:116,regY:112.4,x:629,y:437.2},0).to({_off:true},1).wait(3));

	// Capa_2
	this.cajac = new lib.Símbolo2_1();
	this.cajac.name = "cajac";
	this.cajac.setTransform(890.9,220.35,1,1,0,0,0,116,112.4);
	this.cajac._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cajac).wait(1).to({_off:false},0).to({y:355.25},28,cjs.Ease.get(1)).wait(1).to({regX:105.2,regY:447.8,x:877.45,y:691.45},0).wait(1).to({x:869.6,y:693.9},0).wait(1).to({x:856.5,y:698},0).wait(1).to({x:838.15,y:703.75},0).wait(1).to({x:814.6,y:711.1},0).wait(1).to({x:785.8,y:720.15},0).wait(1).to({x:751.75,y:730.8},0).wait(1).to({x:712.45,y:743.05},0).wait(1).to({x:667.95,y:757},0).wait(1).to({regX:116,regY:112.4,x:629,y:437.2},0).wait(1).to({regX:105.2,regY:447.8,x:585.85,y:762.65},0).wait(1).to({x:553.2,y:752.55},0).wait(1).to({x:520.15,y:742.4},0).wait(1).to({x:486.75,y:732.15},0).wait(1).to({x:453,y:721.75},0).wait(1).to({x:418.9,y:711.25},0).wait(1).to({x:384.45,y:700.65},0).wait(1).to({regX:116,regY:112.4,x:360.45,y:354.55},0).wait(1).to({regX:105.2,regY:447.8,x:425.05,y:690},0).wait(1).to({x:500.65,y:690.1},0).wait(1).to({x:576.3,y:690.2},0).wait(1).to({x:652.1,y:690.3},0).wait(1).to({x:727.95,y:690.4},0).wait(1).to({x:803.95,y:690.5},0).wait(1).to({regX:116,regY:112.4,x:890.9,y:355.25},0).wait(1).to({regX:105.2,regY:447.8,x:877.45,y:691.45},0).wait(1).to({x:869.6,y:693.9},0).wait(1).to({x:856.5,y:698},0).wait(1).to({x:838.15,y:703.75},0).wait(1).to({x:814.6,y:711.1},0).wait(1).to({x:785.8,y:720.15},0).wait(1).to({x:751.75,y:730.8},0).wait(1).to({x:712.45,y:743.05},0).wait(1).to({x:667.95,y:757},0).wait(1).to({regX:116,regY:112.4,x:629,y:437.2},0).wait(1).to({regX:105.2,regY:447.8,x:606.95,y:769.15},0).wait(1).to({x:595.75,y:765.65},0).wait(1).to({x:584.45,y:762.2},0).wait(1).to({x:573.1,y:758.7},0).wait(1).to({x:561.75,y:755.2},0).wait(1).to({x:550.3,y:751.7},0).wait(1).to({x:538.85,y:748.15},0).wait(1).to({x:527.35,y:744.6},0).wait(1).to({x:515.8,y:741.05},0).wait(1).to({x:504.2,y:737.5},0).wait(1).to({x:492.6,y:733.9},0).wait(1).to({x:480.9,y:730.35},0).wait(1).to({x:469.2,y:726.7},0).wait(1).to({x:457.45,y:723.1},0).wait(1).to({x:445.65,y:719.45},0).wait(1).to({x:433.8,y:715.8},0).wait(1).to({x:421.9,y:712.15},0).wait(1).to({x:409.95,y:708.5},0).wait(1).to({x:397.95,y:704.8},0).wait(1).to({x:385.95,y:701.1},0).wait(1).to({x:373.9,y:697.4},0).wait(1).to({x:361.8,y:693.65},0).wait(1).to({regX:116,regY:112.4,x:360.45,y:354.55},0).wait(1).to({regX:105.2,regY:447.8,x:356.75,y:689.95},0).wait(1).to({x:363.9},0).wait(1).to({x:371},0).wait(1).to({x:378.15},0).wait(1).to({x:385.3},0).wait(1).to({x:392.45,y:690},0).wait(1).to({x:399.55},0).wait(1).to({x:406.7},0).wait(1).to({x:413.85},0).wait(1).to({x:421},0).wait(1).to({x:428.15,y:690.05},0).wait(1).to({x:435.3},0).wait(1).to({x:442.4},0).wait(1).to({x:449.55},0).wait(1).to({x:456.7},0).wait(1).to({x:463.85,y:690.1},0).wait(1).to({x:471},0).wait(1).to({x:478.15},0).wait(1).to({x:485.3},0).wait(1).to({x:492.45},0).wait(1).to({x:499.6},0).wait(1).to({x:506.75,y:690.15},0).wait(1).to({x:513.9},0).wait(1).to({x:521.05},0).wait(1).to({x:528.25},0).wait(1).to({x:535.4},0).wait(1).to({x:542.55,y:690.2},0).wait(1).to({x:549.7},0).wait(1).to({x:556.85},0).wait(1).to({x:564},0).wait(1).to({x:571.2},0).wait(1).to({x:578.35,y:690.25},0).wait(1).to({x:585.5},0).wait(1).to({x:592.7},0).wait(1).to({x:599.85},0).wait(1).to({x:607},0).wait(1).to({x:614.2},0).wait(1).to({x:621.35,y:690.3},0).wait(1).to({x:628.5},0).wait(1).to({x:635.7},0).wait(1).to({x:642.85},0).wait(1).to({x:650.05},0).wait(1).to({x:657.2,y:690.35},0).wait(1).to({x:664.4},0).wait(1).to({x:671.55},0).wait(1).to({x:678.75},0).wait(1).to({x:685.9},0).wait(1).to({x:693.1,y:690.4},0).wait(1).to({x:700.25},0).wait(1).to({x:707.45},0).wait(1).to({x:714.65},0).wait(1).to({x:721.8},0).wait(1).to({x:729,y:690.45},0).wait(1).to({x:736.2},0).wait(1).to({x:743.35},0).wait(1).to({x:750.55},0).wait(1).to({x:757.75},0).wait(1).to({x:764.95},0).wait(1).to({x:772.1,y:690.5},0).wait(1).to({x:779.3},0).wait(1).to({x:786.5},0).wait(1).to({x:793.7},0).wait(1).to({x:800.9},0).wait(1).to({x:808.1,y:690.55},0).wait(1).to({x:815.25},0).wait(1).to({x:822.45},0).wait(1).to({x:829.65},0).wait(1).to({x:836.85},0).wait(1).to({x:844.05,y:690.6},0).wait(1).to({x:851.25},0).wait(1).to({x:858.45},0).wait(1).to({x:865.65},0).wait(1).to({x:872.85},0).wait(1).to({regX:116,regY:112.4,x:890.9,y:355.25},0).to({_off:true},1).wait(3));

	// Capa_4
	this.instance_2 = new lib.Símbolo10();
	this.instance_2.setTransform(627.7,472.15);

	this.playbt = new lib.Símbolo4();
	this.playbt.name = "playbt";
	this.playbt.setTransform(628.25,594.2,1,1,0,0,0,146.7,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.playbt},{t:this.instance_2}]},1).to({state:[]},28).wait(136));

	// Layer 3
	this.instance_3 = new lib.CPD_1scaled();
	this.instance_3.setTransform(-92,-154,0.5656,0.5656);

	this.instance_4 = new lib.Symbol27_1();
	this.instance_4.setTransform(128.5,111.55,1,1,0,0,0,274.4,170.1);

	this.instance_5 = new lib.Bitmap18();
	this.instance_5.setTransform(540,964);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(165));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,52.6,1416.2,1303.7);
// library properties:
lib.properties = {
	id: '8836C2DACFAB8E498EE877990AFC0D18',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1759673738337", id:"index_atlas_1"},
		{src:"sounds/checkpoint.mp3?1759673738688", id:"checkpoint"},
		{src:"sounds/click.mp3?1759673738688", id:"click"},
		{src:"sounds/click2.mp3?1759673738688", id:"click2"},
		{src:"sounds/CORNETAPERDIO.mp3?1759673738688", id:"CORNETAPERDIO"},
		{src:"sounds/CORNETAUNAVEZ.mp3?1759673738688", id:"CORNETAUNAVEZ"},
		{src:"sounds/moneda2.mp3?1759673738688", id:"moneda2"},
		{src:"sounds/sonidofindeltiempoterminoeltiempobuzzercornetamalCORTA.mp3?1759673738688", id:"sonidofindeltiempoterminoeltiempobuzzercornetamalCORTA"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1759673738688", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1759673738688", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1759673738688", id:"an.Video"}
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
an.compositions['8836C2DACFAB8E498EE877990AFC0D18'] = {
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