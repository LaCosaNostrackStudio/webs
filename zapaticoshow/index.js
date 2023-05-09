(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,599,2008],[601,0,1119,681],[601,1234,117,365],[1015,1116,381,214],[601,683,794,307],[601,992,412,240],[1397,683,300,431]]}
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



(lib.Bitmap1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.frame = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
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


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap32();
	this.instance.setTransform(-206,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-120,412,240);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap29();
	this.instance.setTransform(-397,-153.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397,-153.5,794,307);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap27();
	this.instance.setTransform(-58.5,-182.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-182.5,117,365);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0099","#FFC668"],[0,1],-176.9,0,177,0).s().p("A3vD7QhnAAhKhJQhJhJAAhnIAAgDQAAhnBJhJQBKhKBnABMAvfAAAQBngBBJBKQBKBJAABnIAAADQAABnhKBJQhJBJhnAAg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-177,-25.1,354,50.3), null);


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
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_1"],6);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(1,0,0,1,-150,-277.8)).s().p("A3bX8MAAAgv3MAu3AAAMAAAAv3g")
	}.bind(this);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-150,-153.1,300,306.29999999999995), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcCpIgEgPIgBgaIAAg+QAAgYgHgJQgIgJgRAAIgTAAIAACRIg1AAIAAlRIBPAAQAoAAATATQATATAAAoIAAAUQAAA1gjAOIAAABQATAFAIASQAIASAAAeIAAA7IABAYQABAJAEAIgAgcgXIAUAAQAPAAAIgIQAHgJAAgTIAAgaQAAgSgGgJQgHgIgMAAIgZAAg");
	this.shape.setTransform(69.775,-2.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmCpIgKhDIAAABIg7AAIgKBCIgxAAIA3lRIBHAAIA3FRgAgZA5IAvAAIgXimIgBAAg");
	this.shape_1.setTransform(49.85,-2.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6CYQgUgVAAgqIAAixQAAgpAUgWQAUgWAmAAQAnAAAUAWQAUAWAAApIAAAdIgyAAIAAggQAAgigbAAQgbAAAAAiIAAC4QAAAhAbAAQAbAAAAghIAAhCIgaAAIAAgvIBMAAIAABtQAAAqgUAVQgUAWgnAAQgmAAgUgWg");
	this.shape_2.setTransform(30.775,-2.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcCpIgEgPIgBgaIAAg+QAAgYgHgJQgIgJgRAAIgTAAIAACRIg1AAIAAlRIBPAAQAoAAATATQATATAAAoIAAAUQAAA1gjAOIAAABQATAFAIASQAIASAAAeIAAA7IABAYQABAJAEAIgAgcgXIAUAAQAPAAAIgIQAHgJAAgTIAAgaQAAgSgGgJQgHgIgMAAIgZAAg");
	this.shape_3.setTransform(11.925,-2.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmCpIgKhDIAAABIg7AAIgKBCIgxAAIA3lRIBHAAIA3FRgAgZA5IAvAAIgXimIgBAAg");
	this.shape_4.setTransform(-7.95,-2.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5CYQgUgVAAgoIAAi1QAAgoAUgVQAUgWAlAAQAmAAAUAWQAUAVAAAoIAAAkIgyAAIAAgnQAAgggaAAQgaAAAAAgIAAC8QAAAfAaAAQAaAAAAgfIAAg0IAyAAIAAAwQAAAogUAVQgUAWgmAAQglAAgUgWg");
	this.shape_5.setTransform(-26.675,-2.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7CYQgTgVgBgqIAAgTIAzAAIAAAXQAAAhAcAAQAMAAAHgIQAHgIAAgSQAAgVgJgRQgKgQgZgWQghgdgNgXQgNgYgBgdQAAgoAVgWQAUgWAmAAQAmAAAUAWQATAWABApIAAAOIgzAAIAAgRQAAgSgHgIQgHgHgNgBQgaAAAAAhQAAATAKAPQALAQAZAXQAhAcANAYQANAYAAAfQgBAqgUAWQgVAWgmAAQgmAAgVgWg");
	this.shape_6.setTransform(-45.15,-2.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHCpIAAlRICQAAIAAAwIhcAAIAABaIBJAAIAAAvIhJAAIAABoIBcAAIAAAwg");
	this.shape_7.setTransform(-62.45,-2.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhPCpIAAlRIBQAAQAnAAAUAVQAUAVAAApIAACrQAAApgUAVQgUAVgnAAgAgaB5IAaAAQANAAAHgIQAHgIAAgRIAAivQAAgRgHgIQgHgIgNAAIgaAAg");
	this.shape_8.setTransform(-81.325,-2.425);

	this.instance = new lib.Symbol5();
	this.instance.setTransform(0.05,-3.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-176.9,-30.2,353.9,60.5), null);


// stage content:
(lib.KitdemarketingListosParaelVerano4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//////////brocures////////
		this.bt1.addEventListener("click", bt1);
		
		function bt1() {
			window.open("https://drive.google.com/file/d/1dioQYWVIedmQtzP_QiASlZndaYScwAKK/view?usp=share_link", "_blank");
		}
		
		//////////carta////////
		this.bt2.addEventListener("click", bt2);
		
		function bt2() {
			window.open("https://docs.google.com/document/d/1f_LcIYG6Y2TXx282b8zalFM_3EuiuTfZ/edit?usp=share_link&ouid=100364395878856135707&rtpof=true&sd=true", "_blank");
		}
		
		
		//////////video vertical////////
		this.bt3.addEventListener("click", bt3);
		
		function bt3() {
			window.open("https://drive.google.com/file/d/16hTVBpaGyPHqte8XUERThs_rnUGEWe76/view?usp=share_link", "_blank");
		}
		
		
		//////////video horizontal////////
		this.bt4.addEventListener("click", bt4);
		
		function bt4() {
			window.open("https://drive.google.com/file/d/1TuZ_VQqog7CMvEPme2_wskmnqflHbayU/view?usp=share_link", "_blank");
		}
		
		
		
		
		
		//////////flyers////////
		this.bt5.addEventListener("click", bt5);
		
		function bt5() {
			window.open("https://drive.google.com/file/d/1hBCbkyraFJ61t83g3WwADs21RD3f4jzO/view?usp=share_link", "_blank");
		}
		
		
		this.bt6.addEventListener("click", bt6);
		
		function bt6() {
			window.open("https://drive.google.com/file/d/1mUgQpzcOAmdNfbnbfS_YzOjZGbtn7oWc/view?usp=share_link", "_blank");
		}
		
		
		this.bt7.addEventListener("click", bt7);
		
		function bt7() {
			window.open("https://drive.google.com/file/d/1-UCrw_tIJ6P8ZgNfqlJxszMWemqsb4zc/view?usp=share_link", "_blank");
			
		}
		
		this.bt8.addEventListener("click", bt8);
		
		function bt8() {
			window.open("https://drive.google.com/file/d/1el-kvWA48DmRBdOJrlDHKVOclFN8FJlD/view?usp=share_link", "_blank");
			
		}
		
		
		this.bt9.addEventListener("click", bt9);
		
		function bt9() {
			window.open("https://drive.google.com/file/d/1BS-Pl7QBU1916kWKKXM21l0a9Suo8ouw/view?usp=share_link", "_blank");
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOBOIAAglIhDAAIAAgSIBGhkIAQAAIAABkIAVAAIAAASIgVAAIAAAlgAgiAXIAwAAIAAhFg");
	this.shape.setTransform(245.025,1186.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBPIAAiaIARAAIAAAOQAGgIAHgFQAIgEAKAAQAOAAALAHQAMAIAFANQAGAOAAAQQgBARgFANQgHAOgLAHQgMAHgNAAQgJAAgIgEQgHgEgEgGIAAA3gAgVg0QgJAMAAAVQAAAVAJAKQAIALANAAQALAAAJgLQAJgLAAgVQAAgWgJgKQgIgLgMAAQgMAAgJALg");
	this.shape_1.setTransform(233.7,1190.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5A5IAAhFQAAgMgCgFQgCgFgFgDQgEgDgHAAQgMAAgHAIQgJAIABARIAABAIgSAAIAAhIQAAgMgFgHQgFgGgLAAQgHAAgHAEQgHAEgDAJQgDAIAAAPIAAA5IgTAAIAAhvIARAAIAAAQQAFgIAJgFQAJgFALAAQANAAAHAFQAHAFADAJQAOgTAVAAQARAAAJAJQAJAJAAATIAABMg");
	this.shape_2.setTransform(218.45,1188.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_3.setTransform(206.4,1193.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBOIAAibIASAAIAACbg");
	this.shape_4.setTransform(200.9,1186.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpAxQgJgIAAgOQgBgJAEgHQAEgGAGgEQAGgDAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgHAFQgGAFgDALIgTgCQADgMAGgIQAGgHALgDQALgEANgBQAPAAAIAEQAJADAFAFQAEAGABAHIABARIAAAZQAAAaACAIQABAGADAHIgTAAQgDgGgBgIQgLAJgKAEQgIAEgLgBQgTAAgKgJgAgDAHQgNABgFACQgEADgDAEQgDAEABAFQgBAIAHAEQAFAGALAAQAKAAAJgFQAJgFADgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_5.setTransform(192.5,1188.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCBJQgGgDgCgFQgDgFAAgSIAAhAIgNAAIAAgOIANAAIAAgcIASgMIAAAoIAUAAIAAAOIgUAAIAABBQAAAJABACQABACADABIAGABIAJAAIACARIgOABQgKABgFgEg");
	this.shape_6.setTransform(183.625,1186.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgMgCgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHAAAWIAAA8IgTAAIAAhvIARAAIAAAQQAMgSAXAAQAKAAAJADQAIAEAFAGQADAGACAIIABASIAABEg");
	this.shape_7.setTransform(174.5,1188.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHAMQgGANgNAHQgMAGgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_8.setTransform(162.425,1188.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxA4IAAgQIBHhRIgWABIgsAAIAAgPIBaAAIAAAMIg7BGIgMANIAYgBIAzAAIAAARg");
	this.shape_9.setTransform(151.025,1188.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJBOIAAhwIASAAIAABwgAgJg2IAAgXIASAAIAAAXg");
	this.shape_10.setTransform(143.25,1186.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdA5IAAhvIAQAAIAAARQAHgMAGgEQAFgDAGAAQAKAAAJAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgCAKAAANIAAA5g");
	this.shape_11.setTransform(138.1,1188.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHAMQgGANgNAHQgMAGgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_12.setTransform(127.575,1188.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAbBOIAAhHQAAgOgHgHQgFgGgMAAQgHAAgIAEQgHAFgEAIQgDAGAAANIAAA+IgSAAIAAibIASAAIAAA4QAOgPATAAQAMAAAJAEQAJAFAFAJQAEAJAAAQIAABHg");
	this.shape_13.setTransform(115.6,1186.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHAMQgGANgNAHQgMAGgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_14.setTransform(97.525,1188.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgMgCgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHABAWIAAA8IgUAAIAAhvIARAAIAAAQQAMgSAXAAQAKAAAJADQAIAEAFAGQADAGACAIIACASIAABEg");
	this.shape_15.setTransform(85.5,1188.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpAxQgJgIAAgOQAAgJADgHQAEgGAGgEQAGgDAIgDIARgCQAVgDAMgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgHAFQgGAFgDALIgTgCQADgMAGgIQAFgHALgDQAMgEANgBQAPAAAIAEQAKADAEAFQAEAGACAHIABARIAAAZQAAAaABAIQABAGADAHIgTAAQgDgGgBgIQgLAJgKAEQgIAEgMgBQgSAAgKgJgAgEAHQgLABgGACQgEADgDAEQgCAEgBAFQAAAIAHAEQAFAGALAAQAKAAAJgFQAJgFADgIQADgHABgMIAAgHQgLAEgUADg");
	this.shape_16.setTransform(73.45,1188.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdA5IAAhvIAQAAIAAARQAHgMAGgEQAFgDAGAAQAKAAAJAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgDAKAAANIAAA5g");
	this.shape_17.setTransform(64.75,1188.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAOgPAXgBQAWAAAOAPQAPAQAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgFASgMAJQgNAKgTgBQgYAAgOgOgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_18.setTransform(54.275,1188.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKBOIg8ibIAWAAIApBwIAHAaIAIgaIAqhwIAVAAIg9Cbg");
	this.shape_19.setTransform(41.025,1186.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcAJIAAgRIA5AAIAAARg");
	this.shape_20.setTransform(30.275,1188.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgyBOQAAgHACgGQAEgLAJgKQAIgKAQgOQAZgUAJgLQAIgMAAgLQAAgLgIgIQgIgIgNAAQgMAAgJAIQgIAIAAAPIgUgCQACgWANgLQAOgMAVAAQAWAAANANQANAMAAASQAAAKgEAJQgEAIgIAJQgJAKgVASIgVATQgFAFgDAFIBLAAIAAATg");
	this.shape_21.setTransform(20.375,1186.675);

	this.bt2 = new lib.Symbol6();
	this.bt2.name = "bt2";
	this.bt2.setTransform(190.3,745.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgfAxQgLgIgEgTIATgDQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgHgGgDQgDgDgQgDQgUgGgIgDQgIgDgEgHQgEgHAAgIQAAgIADgGQADgGAGgFQAFgDAIgCQAHgDAJAAQAMAAAKAEQAKAEAFAHQAFAGABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAJgGAJQgGAJgKAEQgKAFgOgBQgVAAgLgJg");
	this.shape_22.setTransform(280.825,682.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAOgQAXAAQAWAAAOAPQAPAQAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgFASgMAJQgNAKgTgBQgYAAgOgOgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_23.setTransform(269.425,682.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAbA5IAAhDQgBgMgCgFQgCgGgFgEQgHgDgHAAQgLAAgJAIQgJAHAAAWIAAA8IgTAAIAAhvIASAAIAAAQQAMgSAWAAQAKAAAJADQAIAEAEAGQAFAGABAIIABASIAABEg");
	this.shape_24.setTransform(257.45,682.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgMAGgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_25.setTransform(245.375,682.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIASAAIAABwgAgIg2IAAgXIASAAIAAAXg");
	this.shape_26.setTransform(237,680);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgcQAAgSAGgOQAGgNANgHQAMgHANAAQATABALAIQAMAKADARIgSADQgDgMgHgFQgGgGgKAAQgNAAgJAKQgJALAAAVQAAAXAIAKQAJAKANAAQALAAAIgHQAHgHACgOIATADQgDASgNALQgMALgTAAQgWAAgOgOg");
	this.shape_27.setTransform(229.525,682.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgZA1QgJgDgEgGQgEgGgCgIIgBgSIAAhEIATAAIAAA9QAAAPACAFQABAHAGAFQAGAEAIAAQAIAAAIgEQAHgFADgHQAEgIgBgOIAAg7IATAAIAABvIgQAAIAAgRQgOATgVAAQgKAAgJgEg");
	this.shape_28.setTransform(217.7,682.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCBJQgGgDgCgFQgDgFAAgSIAAhAIgNAAIAAgOIANAAIAAgcIASgMIAAAoIAUAAIAAAOIgUAAIAABBQAAAJABACQABACADABIAGABIAJAAIACARIgOABQgKABgFgEg");
	this.shape_29.setTransform(208.875,680.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIASAAIAABwgAgIg2IAAgXIASAAIAAAXg");
	this.shape_30.setTransform(203.35,680);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCBJQgGgDgCgFQgDgFAAgSIAAhAIgNAAIAAgOIANAAIAAgcIASgMIAAAoIAUAAIAAAOIgUAAIAABBQAAAJABACQABACADABIAGABIAJAAIACARIgOABQgKABgFgEg");
	this.shape_31.setTransform(198.075,680.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgfAxQgLgIgEgTIATgDQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgHgGgDQgDgDgQgDQgUgGgIgDQgIgDgEgHQgEgHAAgIQAAgIADgGQADgGAGgFQAFgDAIgCQAHgDAJAAQAMAAAKAEQAKAEAFAHQAFAGABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAJgGAJQgGAJgKAEQgKAFgOgBQgVAAgLgJg");
	this.shape_32.setTransform(189.425,682.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgMgCgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHAAAWIAAA8IgTAAIAAhvIARAAIAAAQQAMgSAXAAQAKAAAJADQAIAEAFAGQADAGACAIIABASIAABEg");
	this.shape_33.setTransform(178.1,682.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIARAAIAABwgAgIg2IAAgXIARAAIAAAXg");
	this.shape_34.setTransform(169.7,680);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgpAxQgKgIAAgOQABgJADgHQAEgHAGgDQAGgDAHgDIARgDQAXgCALgEIAAgFQgBgMgFgEQgHgHgOAAQgNAAgGAFQgHAEgDANIgSgDQACgMAGgIQAGgHAKgDQAMgEANgBQAOABAKADQAIADAEAFQAFAGACAHIABARIAAAZQAAAaABAIQABAGAEAHIgUAAQgDgGgBgIQgKAJgKAEQgJADgMAAQgSAAgKgJgAgEAHQgLABgFACQgFADgDAEQgDAEAAAFQABAIAFAEQAGAGALAAQAKgBAJgEQAIgFAFgIQADgHAAgMIAAgHQgLAEgUADg");
	this.shape_35.setTransform(155.2,682.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgpAxQgJgIAAgOQgBgJAEgHQAEgHAGgDQAGgDAIgDIARgDQAWgCAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgHAFQgGAEgDANIgSgDQACgMAGgIQAGgHALgDQALgEANgBQAPABAIADQAJADAFAFQAEAGABAHIABARIAAAZQAAAaACAIQABAGADAHIgTAAQgDgGgBgIQgLAJgKAEQgIADgLAAQgTAAgKgJgAgDAHQgNABgFACQgEADgDAEQgDAEABAFQgBAIAHAEQAFAGALAAQAKgBAJgEQAJgFADgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_36.setTransform(137.15,682.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgGgNQgHgOAAgRQABgRAFgMQAGgOALgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IASAAIAACaIgRAAIAAgOQgLARgUAAQgMAAgMgIgAgUgLQgIAKAAAVQAAAWAJAKQAJALAMAAQAMAAAIgKQAKgKgBgVQABgWgKgLQgJgLgMAAQgMAAgJALg");
	this.shape_37.setTransform(124.75,680.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIASAAIAABwgAgIg2IAAgXIASAAIAAAXg");
	this.shape_38.setTransform(116.75,680);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AghBHQgMgJAAgSIATADQABAIAFAEQAHAFAMABQANgBAHgFQAHgGADgJQABgFAAgTQgNAPgRAAQgXAAgNgRQgNgRAAgWQAAgQAHgOQAFgNALgIQALgHAPAAQATAAANAQIAAgOIARAAIAABhQAAAZgFALQgGAMgLAFQgLAHgRAAQgTAAgNgJgAgUg1QgJAKAAAUQAAAXAJAJQAIAKANAAQANAAAJgKQAJgKAAgVQAAgVgJgKQgKgKgMAAQgMAAgJAKg");
	this.shape_39.setTransform(108,684.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJBOIAAhwIASAAIAABwgAgJg2IAAgXIASAAIAAAXg");
	this.shape_40.setTransform(99.95,680);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIARAAIAAARQAHgMAGgEQAFgDAGAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgDAKAAANIAAA5g");
	this.shape_41.setTransform(94.8,682.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIBOIAAhwIASAAIAABwgAgIg2IAAgXIASAAIAAAXg");
	this.shape_42.setTransform(87.95,680);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgGgNQgHgOABgRQAAgRAFgMQAGgOALgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IATAAIAACaIgSAAIAAgOQgKARgVAAQgNAAgLgIgAgUgLQgIAKAAAVQAAAWAJAKQAJALAMAAQAMAAAJgKQAJgKAAgVQAAgWgJgLQgKgLgNAAQgLAAgJALg");
	this.shape_43.setTransform(79.1,680.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgpAxQgKgIABgOQAAgJADgHQAEgHAGgDQAGgDAIgDIARgDQAWgCALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgHAFQgGAEgDANIgTgDQADgMAGgIQAFgHALgDQALgEAOgBQAPABAJADQAIADAFAFQAEAGACAHIABARIAAAZQgBAaACAIQABAGADAHIgTAAQgDgGgBgIQgKAJgKAEQgJADgMAAQgSAAgKgJgAgEAHQgLABgGACQgEADgDAEQgCAEgBAFQAAAIAHAEQAFAGALAAQAKgBAJgEQAJgFADgIQAEgHAAgMIAAgHQgLAEgUADg");
	this.shape_44.setTransform(61.4,682.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgCBJQgGgDgCgFQgDgFAAgSIAAhAIgNAAIAAgOIANAAIAAgcIASgMIAAAoIAUAAIAAAOIgUAAIAABBQAAAJABACQABACADABIAGABIAJAAIACARIgOABQgKABgFgEg");
	this.shape_45.setTransform(52.575,680.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIASAAIAAARQAGgMAGgEQAFgDAGAAQAKAAAKAGIgHARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgDAKAAANIAAA5g");
	this.shape_46.setTransform(46.7,682.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgpAxQgKgIAAgOQABgJADgHQAEgHAGgDQAGgDAHgDIASgDQAWgCALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgHAFQgGAEgDANIgTgDQADgMAGgIQAFgHALgDQALgEAOgBQAPABAJADQAIADAEAFQAFAGACAHIABARIAAAZQgBAaACAIQABAGADAHIgTAAQgDgGgBgIQgKAJgKAEQgJADgMAAQgSAAgKgJgAgEAHQgLABgGACQgEADgDAEQgCAEgBAFQAAAIAHAEQAFAGALAAQAKgBAJgEQAJgFADgIQAEgHAAgMIAAgHQgLAEgUADg");
	this.shape_47.setTransform(36.2,682.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgjBGQgQgKgIgTQgIgUAAgVQAAgYAJgTQAJgRARgKQARgJAUAAQAXAAAQAMQAQALAGAWIgUAFQgGgRgKgIQgKgHgQgBQgRAAgMAJQgMAIgEAPQgFAOAAAQQAAATAFAPQAGAOAMAHQAMAIAOAAQARAAAMgKQAMgKAEgUIAUAFQgGAZgRAOQgQANgZAAQgYAAgPgKg");
	this.shape_48.setTransform(22.525,680);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#33FFFF").s().p("AAmCpIgKhDIAAABIg7AAIgKBCIgxAAIA3lRIBHAAIA3FRgAgZA5IAvAAIgXimIgBAAg");
	this.shape_49.setTransform(99.35,634.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#33FFFF").s().p("AgaCpIAAkhIg3AAIAAgwICjAAIAAAwIg4AAIAAEhg");
	this.shape_50.setTransform(80.875,634.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#33FFFF").s().p("AAcCpIgEgPIgBgaIAAg+QAAgYgHgJQgIgJgRAAIgTAAIAACRIg1AAIAAlRIBPAAQAoAAATATQATATAAAoIAAAUQAAA1gjAOIAAABQATAFAIASQAIASAAAeIAAA7IABAYQABAJAEAIgAgcgXIAUAAQAPAAAIgIQAHgJAAgTIAAgaQAAgSgGgJQgHgIgMAAIgZAAg");
	this.shape_51.setTransform(62.725,634.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#33FFFF").s().p("AAmCpIgKhDIAAABIg8AAIgJBCIgxAAIA3lRIBHAAIA3FRgAgZA5IAvAAIgXimIgBAAg");
	this.shape_52.setTransform(42.85,634.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#33FFFF").s().p("Ag5CZQgUgWAAgoIAAi0QAAgoAUgWQAUgWAlAAQAmAAAUAWQAUAWAAAoIAAAjIgyAAIAAgnQAAgggaABQgagBAAAgIAAC8QAAAfAaAAQAaAAAAgfIAAg0IAyAAIAAAwQAAAogUAWQgUAVgmAAQglAAgUgVg");
	this.shape_53.setTransform(24.075,634.15);

	this.bt4 = new lib.Symbol6();
	this.bt4.name = "bt4";
	this.bt4.setTransform(190.3,1240.65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AghBHQgMgJABgSIASADQABAIAFAEQAIAFAMABQAMgBAHgFQAHgGACgJQACgFAAgTQgMAPgSAAQgXAAgNgRQgNgRAAgWQABgQAFgOQAGgNALgIQALgHAPAAQATAAANAQIAAgOIARAAIAABhQABAZgGALQgFAMgMAFQgLAHgQAAQgVAAgMgJgAgUg1QgJAKAAAUQAAAXAJAJQAJAKAMAAQANAAAIgKQAJgKAAgVQAAgVgJgKQgIgKgOAAQgLAAgJAKg");
	this.shape_54.setTransform(166.9,2020.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgvBPIAAiaIARAAIAAAOQAGgIAHgFQAIgEAKAAQAOAAALAHQALAIAGANQAGAOAAAQQgBARgFANQgGAOgNAHQgLAHgNAAQgJAAgIgEQgHgEgEgGIAAA3gAgVg0QgJAMAAAVQgBAVAKAKQAIALAMAAQAMAAAJgLQAJgLAAgVQAAgWgIgKQgKgLgLAAQgMAAgJALg");
	this.shape_55.setTransform(155.5,2020.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgVBiIAEgQIAJACQAGAAACgEQACgEABgQIAAh0IASAAIAAB1QAAAVgEAIQgIAKgPAAQgHAAgIgCgAADhNIAAgWIASAAIAAAWg");
	this.shape_56.setTransform(145.55,2018.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_57.setTransform(141.45,2022.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgjBCQgNgMgCgTIAUgCQACAPAIAHQAIAHALAAQANAAAKgKQAJgKAAgSQAAgQgJgIQgJgKgOAAQgJAAgHAFQgIAEgEAFIgSgCIAPhPIBMAAIAAATIg9AAIgIApQAOgJAOAAQAVAAANAOQAOANAAAWQAAAVgMAPQgPATgZAAQgVAAgNgMg");
	this.shape_58.setTransform(132.375,2016.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AglAsQgPgQAAgcQAAgfASgOQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHAMQgGANgNAHQgMAGgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_59.setTransform(114.275,2018.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgeA+IAAAOIgSAAIAAiaIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAHQAGAIADALQAEAJAAAMQAAAdgPAQQgOAQgUAAQgTAAgLgRgAgVgLQgJALAAATQAAAUAFAJQAJAPAQAAQALAAAJgLQAJgLAAgVQAAgVgIgKQgJgLgMAAQgMAAgJALg");
	this.shape_60.setTransform(102.575,2016.175);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AA5A5IAAhFQAAgMgCgFQgCgFgFgDQgFgDgGAAQgMAAgIAIQgIAIAAARIAABAIgRAAIAAhIQgBgMgEgHQgFgGgKAAQgJAAgGAEQgHAEgDAJQgDAIAAAPIAAA5IgTAAIAAhvIARAAIAAAQQAFgIAJgFQAIgFAMAAQANAAAIAFQAGAFAEAJQANgTAVAAQARAAAJAJQAJAJAAATIAABMg");
	this.shape_61.setTransform(87.35,2018.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AglAsQgPgQAAgcQAAgfASgOQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHAMQgGANgNAHQgMAGgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_62.setTransform(72.225,2018.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgcQAAgSAGgOQAGgNANgHQAMgHANAAQATABALAIQAMAKADARIgSADQgDgMgHgFQgGgGgKAAQgNAAgJAKQgJALAAAVQAAAXAIAJQAJALANAAQALAAAIgHQAHgHACgOIATADQgDASgNALQgMALgTAAQgWAAgOgOg");
	this.shape_63.setTransform(61.175,2018.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgcAKIAAgSIA5AAIAAASg");
	this.shape_64.setTransform(51.875,2018.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgjBCQgNgMgCgTIAUgCQACAPAIAHQAIAHALAAQANAAAKgKQAJgKAAgSQAAgQgJgIQgJgKgOAAQgJAAgHAFQgIAEgEAFIgSgCIAPhPIBMAAIAAATIg9AAIgIApQAOgJAOAAQAVAAANAOQAOANAAAWQAAAVgMAPQgPATgZAAQgVAAgNgMg");
	this.shape_65.setTransform(42.225,2016.275);

	this.bt9 = new lib.Symbol6();
	this.bt9.name = "bt9";
	this.bt9.setTransform(188.2,2068.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AghBHQgMgJABgSIASADQABAIAFAEQAIAFAMABQAMgBAHgFQAHgGACgJQACgFAAgTQgMAOgSABQgXgBgNgQQgNgRAAgWQABgQAFgOQAGgNALgIQALgHAPAAQATAAANAQIAAgOIARAAIAABhQABAZgGAMQgFAKgMAHQgLAGgQAAQgVAAgMgJgAgUg1QgJAKAAAUQAAAXAJAJQAJAKAMAAQANAAAIgKQAJgKAAgVQAAgVgJgKQgIgLgOABQgLgBgJALg");
	this.shape_66.setTransform(166.9,1888.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgvBPIAAiaIARAAIAAAOQAGgIAHgFQAIgEAKAAQAOAAALAHQALAIAGANQAGAOAAAQQgBARgFANQgGAOgNAHQgLAHgNAAQgJAAgIgEQgHgEgEgGIAAA3gAgVg0QgJAMAAAVQgBAVAKAKQAIALAMAAQAMAAAJgLQAJgLAAgVQAAgWgIgKQgKgLgLAAQgMAAgJALg");
	this.shape_67.setTransform(155.5,1888.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgVBiIAEgQIAJACQAGAAACgEQACgEABgQIAAh0IASAAIAAB1QAAAVgEAIQgIAKgPAAQgHAAgIgCgAADhNIAAgWIASAAIAAAWg");
	this.shape_68.setTransform(145.55,1886.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_69.setTransform(141.45,1891.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAOBOIAAgmIhDAAIAAgRIBGhkIAQAAIAABkIAVAAIAAARIgVAAIAAAmgAgiAXIAwAAIAAhFg");
	this.shape_70.setTransform(131.975,1884.55);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAQAAAbQAAAUgHAMQgGANgNAGQgMAHgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAWAJAKQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_71.setTransform(114.275,1886.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgeA+IAAAOIgSAAIAAiaIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAHQAGAIADALQAEAJAAAMQAAAdgPAQQgOAQgUAAQgTAAgLgRgAgVgLQgJALAAATQAAAUAFAJQAJAPAQAAQALAAAJgLQAJgLAAgVQAAgVgIgKQgJgLgMAAQgMAAgJALg");
	this.shape_72.setTransform(102.575,1884.675);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AA5A5IAAhFQAAgMgCgFQgCgFgFgDQgFgDgGAAQgMAAgIAIQgIAIAAARIAABAIgRAAIAAhIQgBgMgEgHQgFgGgKAAQgJAAgGAEQgHAEgDAJQgDAIAAAPIAAA5IgTAAIAAhvIARAAIAAAQQAFgIAJgFQAIgFAMAAQANAAAIAFQAGAFAEAJQANgTAVAAQARAAAJAJQAJAJAAATIAABMg");
	this.shape_73.setTransform(87.35,1886.575);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAQAAAbQAAAUgHAMQgGANgNAGQgMAHgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAWAJAKQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_74.setTransform(72.225,1886.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgcQAAgSAGgOQAGgNANgHQAMgHANAAQATABALAIQAMAKADARIgSADQgDgMgHgFQgGgGgKAAQgNAAgJAKQgJALAAAVQAAAXAIAJQAJALANAAQALAAAIgHQAHgHACgOIATADQgDASgNALQgMALgTAAQgWAAgOgOg");
	this.shape_75.setTransform(61.175,1886.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgcAKIAAgSIA5AAIAAASg");
	this.shape_76.setTransform(51.875,1886.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAOBOIAAgmIhDAAIAAgRIBGhkIAQAAIAABkIAVAAIAAARIgVAAIAAAmgAgiAXIAwAAIAAhFg");
	this.shape_77.setTransform(41.825,1884.55);

	this.bt8 = new lib.Symbol6();
	this.bt8.name = "bt8";
	this.bt8.setTransform(188.2,1937.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AghBHQgMgJAAgSIATACQABAJAFAEQAHAFAMAAQAMAAAIgFQAHgGACgJQACgGAAgSQgNAOgRAAQgXAAgNgQQgMgRAAgWQAAgRAFgNQAGgOALgHQALgHAPAAQATAAANAQIAAgNIASAAIAABfQgBAagFAMQgGAKgLAGQgMAHgQAAQgTAAgNgJgAgUg1QgJAKAAAVQAAAVAJAJQAJALAMAAQANAAAJgLQAIgJABgVQgBgUgIgLQgKgLgNAAQgLAAgJALg");
	this.shape_78.setTransform(169,1749.85);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgwBPIAAiaIARAAIAAAOQAHgIAIgFQAHgEAKAAQAOAAAMAHQAKAIAGANQAFAOAAAQQABARgHANQgFAOgNAHQgMAHgMAAQgJAAgHgEQgIgEgFgGIAAA3gAgVg0QgKAMAAAVQAAAVAJAKQAJALAMAAQAMAAAJgLQAJgLAAgVQAAgWgIgKQgKgLgLAAQgMAAgJALg");
	this.shape_79.setTransform(157.6,1749.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgUBiIADgQIAJACQAGAAACgEQACgEAAgQIAAh0IATAAIAAB1QAAAVgEAIQgHAKgQAAQgHAAgHgCgAAChNIAAgWIATAAIAAAWg");
	this.shape_80.setTransform(147.65,1747.825);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_81.setTransform(143.55,1752.225);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgiBDQgOgMgCgUIATgCQAEAQAIAIQAHAGAMABQAMAAAJgKQAKgJAAgOQAAgNgJgIQgJgJgNAAQgEAAgIACIACgQIADAAQALABAKgHQAKgGAAgNQAAgKgHgIQgIgGgKAAQgLAAgHAGQgIAIgCAOIgTgEQAEgTAMgLQAMgKATAAQAMAAAKAFQALAGAGAJQAFAKAAAKQAAAKgFAIQgGAJgKAFQAOADAHAJQAIAKAAAPQAAAUgPAOQgPAOgVAAQgVAAgNgMg");
	this.shape_82.setTransform(134.425,1745.65);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AglArQgPgPAAgcQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHAMQgGANgNAGQgMAIgPAAQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_83.setTransform(116.375,1747.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgeA+IAAAOIgSAAIAAiaIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAHQAGAIADALQAEAJAAAMQAAAdgPAQQgOAQgUAAQgTAAgLgRgAgVgLQgJALAAATQAAAUAFAJQAJAPAQAAQALAAAJgLQAJgLAAgVQAAgVgIgKQgJgLgMAAQgMAAgJALg");
	this.shape_84.setTransform(104.675,1745.675);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AA5A5IAAhFQAAgMgCgFQgCgFgEgDQgGgDgGAAQgMAAgIAIQgHAIgBARIAABAIgSAAIAAhIQABgMgFgHQgFgGgLAAQgHAAgHAEQgHAEgDAJQgDAIAAAPIAAA5IgTAAIAAhvIARAAIAAAQQAFgIAJgFQAJgFALAAQAMAAAJAFQAGAFADAJQAOgTAVAAQARAAAJAJQAJAJAAATIAABMg");
	this.shape_85.setTransform(89.45,1747.575);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AglArQgPgPAAgcQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHAMQgGANgNAGQgMAIgPAAQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_86.setTransform(74.325,1747.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgiArQgOgOAAgdQAAgRAGgNQAGgOANgHQAMgGANAAQATgBALAKQAMAJADARIgSACQgDgKgHgHQgGgFgKAAQgNAAgJALQgJAKAAAVQAAAWAIAKQAJALANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMAKgTABQgWgBgOgPg");
	this.shape_87.setTransform(63.275,1747.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgcAJIAAgSIA5AAIAAASg");
	this.shape_88.setTransform(53.975,1747.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgiBDQgOgMgCgUIATgCQAEAQAIAIQAHAGAMABQAMAAAJgKQAKgJAAgOQAAgNgJgIQgJgJgNAAQgEAAgIACIACgQIADAAQALABAKgHQAKgGAAgNQAAgKgHgIQgIgGgKAAQgLAAgHAGQgIAIgCAOIgTgEQAEgTAMgLQAMgKATAAQAMAAAKAFQALAGAGAJQAFAKAAAKQAAAKgFAIQgGAJgKAFQAOADAHAJQAIAKAAAPQAAAUgPAOQgPAOgVAAQgVAAgNgMg");
	this.shape_89.setTransform(44.275,1745.65);

	this.bt7 = new lib.Symbol6();
	this.bt7.name = "bt7";
	this.bt7.setTransform(190.3,1798.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AghBHQgMgJABgSIASACQABAJAFAEQAIAGAMgBQAMABAHgGQAHgFACgKQACgGAAgSQgMAPgSAAQgXAAgNgRQgNgRAAgWQABgQAFgOQAGgNALgIQALgHAPAAQATAAANAQIAAgOIARAAIAABgQABAagGALQgFAMgMAFQgLAHgQAAQgVAAgMgJgAgUg1QgJAKAAAUQAAAWAJAJQAJALAMAAQANAAAIgLQAJgIAAgWQAAgVgJgKQgIgKgOAAQgLAAgJAKg");
	this.shape_90.setTransform(166.9,1620.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgvBPIAAiaIARAAIAAAOQAGgIAHgFQAIgEAKAAQAOAAALAHQALAIAGANQAGAOAAAQQgBARgFANQgGAOgNAHQgLAHgNAAQgJAAgIgEQgHgEgEgGIAAA3gAgVg0QgJAMAAAVQgBAVAKAKQAIALAMAAQAMAAAJgLQAJgLAAgVQAAgWgIgKQgKgLgLAAQgMAAgJALg");
	this.shape_91.setTransform(155.5,1620.375);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgVBiIAEgQIAJACQAGAAACgEQACgEABgQIAAh0IASAAIAAB1QAAAVgEAIQgIAKgPAAQgHAAgIgCgAADhNIAAgWIASAAIAAAWg");
	this.shape_92.setTransform(145.55,1618.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_93.setTransform(141.45,1622.875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgyBOQAAgHACgGQAEgLAJgKQAIgKAQgOQAZgUAJgLQAIgMAAgLQAAgLgIgIQgIgIgNAAQgMAAgJAIQgIAIAAAPIgUgCQACgWANgLQAOgMAVAAQAWAAANANQANAMAAASQAAAKgEAJQgEAIgIAJQgJAKgVASIgVATQgFAFgDAFIBLAAIAAATg");
	this.shape_94.setTransform(132.125,1616.175);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AglArQgPgOAAgdQAAgfASgPQAOgLAUAAQAXAAAPAOQAPAPAAAbQAAAVgHANQgGAMgNAHQgMAGgPABQgXAAgOgQgAgXggQgJALAAAVQAAAVAJALQAKALANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_95.setTransform(114.275,1618.35);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgeA+IAAAOIgSAAIAAiaIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAHQAGAIADALQAEAJAAAMQAAAdgPAQQgOAQgUAAQgTAAgLgRgAgVgLQgJALAAATQAAAUAFAJQAJAPAQAAQALAAAJgLQAJgLAAgVQAAgVgIgKQgJgLgMAAQgMAAgJALg");
	this.shape_96.setTransform(102.575,1616.325);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AA5A5IAAhFQAAgMgCgFQgCgFgFgDQgFgDgGAAQgMAAgIAIQgIAIAAARIAABAIgRAAIAAhIQgBgMgEgHQgFgGgKAAQgJAAgGAEQgHAEgDAJQgDAIAAAPIAAA5IgTAAIAAhvIARAAIAAAQQAFgIAJgFQAIgFAMAAQANAAAIAFQAGAFAEAJQANgTAVAAQARAAAJAJQAJAJAAATIAABMg");
	this.shape_97.setTransform(87.35,1618.225);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AglArQgPgOAAgdQAAgfASgPQAOgLAUAAQAXAAAPAOQAPAPAAAbQAAAVgHANQgGAMgNAHQgMAGgPABQgXAAgOgQgAgXggQgJALAAAVQAAAVAJALQAKALANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_98.setTransform(72.225,1618.35);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgiArQgOgPAAgcQAAgRAGgNQAGgOANgHQAMgHANABQATAAALAJQAMAJADARIgSADQgDgMgHgGQgGgFgKAAQgNAAgJAKQgJAKAAAWQAAAWAIALQAJAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNAKQgMAMgTAAQgWAAgOgQg");
	this.shape_99.setTransform(61.175,1618.35);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgcAJIAAgSIA5AAIAAASg");
	this.shape_100.setTransform(51.875,1618.35);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgyBOQAAgHACgGQAEgLAJgKQAIgKAQgOQAZgUAJgLQAIgMAAgLQAAgLgIgIQgIgIgNAAQgMAAgJAIQgIAIAAAPIgUgCQACgWANgLQAOgMAVAAQAWAAANANQANAMAAASQAAAKgEAJQgEAIgIAJQgJAKgVASIgVATQgFAFgDAFIBLAAIAAATg");
	this.shape_101.setTransform(41.975,1616.175);

	this.bt6 = new lib.Symbol6();
	this.bt6.name = "bt6";
	this.bt6.setTransform(188.2,1668.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AghBHQgMgJABgSIASADQABAIAFAEQAIAGAMAAQAMAAAHgGQAHgFACgKQACgGAAgSQgMAOgSAAQgXAAgNgQQgNgRAAgWQABgRAFgNQAGgOALgHQALgHAPAAQATAAANAQIAAgNIARAAIAABgQABAZgGAMQgFAKgMAHQgLAGgQAAQgVAAgMgJgAgUg1QgJAKAAAVQAAAVAJAJQAJALAMAAQANAAAIgLQAJgIAAgWQAAgUgJgLQgIgLgOAAQgLAAgJALg");
	this.shape_102.setTransform(166.9,1507.05);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgvBPIAAiaIARAAIAAAOQAGgIAHgFQAIgEAKAAQAOAAALAHQALAIAGANQAGAOAAAQQgBARgFANQgGAOgNAHQgLAHgNAAQgJAAgIgEQgHgEgEgGIAAA3gAgVg0QgJAMAAAVQgBAVAKAKQAIALAMAAQAMAAAJgLQAJgLAAgVQAAgWgIgKQgKgLgLAAQgMAAgJALg");
	this.shape_103.setTransform(155.5,1506.925);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgVBiIAEgQIAJACQAGAAACgEQACgEABgQIAAh0IASAAIAAB1QAAAVgEAIQgIAKgPAAQgHAAgIgCgAADhNIAAgWIASAAIAAAWg");
	this.shape_104.setTransform(145.55,1505.025);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_105.setTransform(141.45,1509.425);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAJBOIAAh4QgGAGgLAHQgLAGgJAEIAAgTQAQgHAMgLQAMgLAEgKIAMAAIAACbg");
	this.shape_106.setTransform(131.55,1502.725);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AglArQgPgPAAgcQAAgeASgQQAOgMAUAAQAXABAPAPQAPAOAAAbQAAAVgHAMQgGANgNAGQgMAIgPgBQgXABgOgQgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKALg");
	this.shape_107.setTransform(114.275,1504.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgeA+IAAAOIgSAAIAAiaIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAHQAGAIADALQAEAJAAAMQAAAdgPAQQgOAQgUAAQgTAAgLgRgAgVgLQgJALAAATQAAAUAFAJQAJAPAQAAQALAAAJgLQAJgLAAgVQAAgVgIgKQgJgLgMAAQgMAAgJALg");
	this.shape_108.setTransform(102.575,1502.875);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AA5A5IAAhFQAAgMgCgFQgCgFgFgDQgFgDgGAAQgMAAgIAIQgIAIAAARIAABAIgRAAIAAhIQgBgMgEgHQgFgGgKAAQgJAAgGAEQgHAEgDAJQgDAIAAAPIAAA5IgTAAIAAhvIARAAIAAAQQAFgIAJgFQAIgFAMAAQANAAAIAFQAGAFAEAJQANgTAVAAQARAAAJAJQAJAJAAATIAABMg");
	this.shape_109.setTransform(87.35,1504.775);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AglArQgPgPAAgcQAAgeASgQQAOgMAUAAQAXABAPAPQAPAOAAAbQAAAVgHAMQgGANgNAGQgMAIgPgBQgXABgOgQgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKALg");
	this.shape_110.setTransform(72.225,1504.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgiArQgOgPAAgbQAAgSAGgOQAGgNANgHQAMgGANgBQATAAALAJQAMAKADARIgSACQgDgKgHgHQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIAKQAJALANAAQALAAAIgHQAHgHACgOIATADQgDASgNAMQgMALgTgBQgWABgOgQg");
	this.shape_111.setTransform(61.175,1504.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgcAKIAAgTIA5AAIAAATg");
	this.shape_112.setTransform(51.875,1504.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAKBOIAAh4QgIAGgJAHQgLAGgKAEIAAgTQARgHALgLQALgLAFgKIANAAIAACbg");
	this.shape_113.setTransform(41.4,1502.725);

	this.bt5 = new lib.Symbol6();
	this.bt5.name = "bt5";
	this.bt5.setTransform(188.2,1555.25);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_114.setTransform(266.95,1456.025);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgfAyQgLgKgEgRIATgEQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgGgGgEQgDgCgQgFQgUgFgIgDQgIgEgEgHQgEgGAAgJQAAgHADgGQADgHAGgEQAFgDAIgDQAHgBAJAAQAMgBAKAEQAKAEAFAGQAFAHABALIgSADQgCgJgGgFQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAGAIADQAHACAFAHQAFAHAAAJQAAAKgGAIQgGAIgKAFQgKAEgOABQgVgBgLgIg");
	this.shape_115.setTransform(258.425,1451.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgPAXAAQAWgBAOAPQAPAQAAAbIgBAFIhSAAQABATAJAJQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFARgMAJQgNAKgTAAQgYgBgOgPgAgUgiQgJAJgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_116.setTransform(247.025,1451.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgCBJQgGgDgCgGQgDgEAAgSIAAg/IgNAAIAAgPIANAAIAAgcIASgLIAAAnIAUAAIAAAPIgUAAIAABAQAAAJABABQABADADABIAGACIAJgBIACARIgOACQgKAAgFgEg");
	this.shape_117.setTransform(238.175,1449.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAbA5IAAhDQgBgMgCgFQgCgGgFgEQgHgDgHAAQgLAAgJAIQgIAHgBAWIAAA8IgSAAIAAhvIARAAIAAAQQALgSAXAAQAKAAAJADQAIAEAEAGQAFAGACAIIABASIAABEg");
	this.shape_118.setTransform(229,1451.375);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgPAXAAQAWgBAOAPQAPAQAAAbIgBAFIhSAAQABATAJAJQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFARgMAJQgNAKgTAAQgYgBgOgPgAgUgiQgJAJgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_119.setTransform(216.975,1451.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIASAAIAAARQAGgMAGgEQAFgDAGAAQAKAAAKAGIgHARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgDAKAAANIAAA5g");
	this.shape_120.setTransform(208.25,1451.375);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgPAXAAQAWgBAOAPQAPAQAAAbIgBAFIhSAAQABATAJAJQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFARgMAJQgNAKgTAAQgYgBgOgPgAgUgiQgJAJgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_121.setTransform(197.725,1451.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgPBPIAAhhIgRAAIAAgOIARAAIAAgMQAAgMACgFQADgIAHgEQAGgFAMAAQAIAAAKACIgDARIgLgBQgJAAgDADQgEAEAAAKIAAALIAWAAIAAAOIgWAAIAABhg");
	this.shape_122.setTransform(189.225,1449.225);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgIBNIAAhuIASAAIAABugAgIg3IAAgVIASAAIAAAVg");
	this.shape_123.setTransform(183.35,1449.35);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgGgNQgHgOAAgRQABgRAFgMQAGgOALgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IATAAIAACaIgSAAIAAgOQgKARgVAAQgNAAgLgIgAgUgLQgIAKAAAVQAAAWAJAKQAJALAMAAQAMAAAJgKQAJgKAAgVQAAgWgJgLQgKgLgNAAQgLAAgJALg");
	this.shape_124.setTransform(174.5,1449.475);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgfAyQgLgKgEgRIATgEQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgGgGgEQgDgCgQgFQgUgFgIgDQgIgEgEgHQgEgGAAgJQAAgHADgGQADgHAGgEQAFgDAIgDQAHgBAJAAQAMgBAKAEQAKAEAFAGQAFAHABALIgSADQgCgJgGgFQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAGAIADQAHACAFAHQAFAHAAAJQAAAKgGAIQgGAIgKAFQgKAEgOABQgVgBgLgIg");
	this.shape_125.setTransform(157.425,1451.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHANQgGAMgNAHQgMAHgPAAQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_126.setTransform(146.025,1451.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgeA+IAAAOIgSAAIAAiaIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAHQAGAIADALQAEAJAAAMQAAAdgPAQQgOAQgUAAQgTAAgLgRgAgVgLQgJALAAATQAAAUAFAJQAJAPAQAAQALAAAJgLQAJgLAAgVQAAgVgIgKQgJgLgMAAQgMAAgJALg");
	this.shape_127.setTransform(134.325,1449.475);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AA5A5IAAhFQAAgMgCgFQgCgFgEgDQgGgDgGAAQgMAAgIAIQgHAIgBARIAABAIgSAAIAAhIQABgMgFgHQgFgGgLAAQgIAAgGAEQgHAEgDAJQgDAIAAAPIAAA5IgTAAIAAhvIARAAIAAAQQAFgIAJgFQAIgFAMAAQAMAAAJAFQAGAFADAJQAOgTAVAAQARAAAJAJQAJAJAAATIAABMg");
	this.shape_128.setTransform(119.05,1451.375);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHANQgGAMgNAHQgMAHgPAAQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_129.setTransform(103.975,1451.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgiArQgOgPAAgcQAAgRAGgNQAGgOANgHQAMgGANAAQATgBALAKQAMAJADARIgSACQgDgKgHgHQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIALQAJAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMAKgTABQgWgBgOgPg");
	this.shape_130.setTransform(92.925,1451.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHANQgGAMgNAHQgMAHgPAAQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_131.setTransform(75.125,1451.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgiArQgOgPAAgcQAAgRAGgNQAGgOANgHQAMgGANAAQATgBALAKQAMAJADARIgSACQgDgKgHgHQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIALQAJAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMAKgTABQgWgBgOgPg");
	this.shape_132.setTransform(64.025,1451.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAbA5IAAhDQAAgMgDgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHABAWIAAA8IgTAAIAAhvIAQAAIAAAQQAMgSAXAAQAKAAAJADQAIAEAFAGQADAGADAIIABASIAABEg");
	this.shape_133.setTransform(52.3,1451.375);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg3IAAgVIASAAIAAAVg");
	this.shape_134.setTransform(43.9,1449.35);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgjBGQgQgKgIgTQgIgUAAgVQAAgZAJgRQAJgTARgIQARgKAUAAQAXAAAQAMQAQALAGAWIgUAFQgGgRgKgIQgKgIgQAAQgRAAgMAJQgMAIgEAPQgFAOAAAQQAAASAFAPQAGAPAMAIQAMAGAOAAQARAAAMgKQAMgKAEgTIAUAFQgGAZgRAOQgQANgZAAQgYAAgPgKg");
	this.shape_135.setTransform(33.775,1449.35);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgQAXAAQAWAAAOAQQAPAPAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUACQgFASgMAJQgNAJgTABQgYgBgOgPgAgUghQgJAIgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_136.setTransform(402.125,1426.05);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgHgNQgFgOAAgRQgBgRAGgMQAFgOAMgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IASAAIAACaIgRAAIAAgOQgKARgVAAQgMAAgMgIgAgTgLQgJAKAAAVQAAAWAJAKQAJALALAAQANAAAJgKQAIgKABgVQgBgWgIgLQgKgLgNAAQgLAAgIALg");
	this.shape_137.setTransform(389.75,1424.025);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgfAxQgLgJgEgSIATgCQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgDgQgEQgUgFgIgDQgIgDgEgIQgEgGAAgIQAAgIADgGQADgGAGgFQAFgDAIgDQAHgCAJAAQAMABAKADQAKAEAFAGQAFAHABALIgSADQgCgKgGgEQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAJgGAJQgGAIgKAFQgKAEgOABQgVAAgLgKg");
	this.shape_138.setTransform(372.625,1426.05);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgQAXAAQAWAAAOAQQAPAPAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUACQgFASgMAJQgNAJgTABQgYgBgOgPgAgUghQgJAIgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_139.setTransform(361.275,1426.05);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgMgCgFQgCgGgFgEQgHgDgHAAQgLAAgJAIQgJAHAAAWIAAA8IgTAAIAAhvIASAAIAAAQQAMgSAWAAQAKAAAJADQAIAEAEAGQAFAGABAIIABASIAABEg");
	this.shape_140.setTransform(349.25,1425.925);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AglArQgPgPAAgcQAAgfASgPQAOgMAUAAQAXAAAPAQQAPAOAAAbQAAAVgHAMQgGANgNAGQgMAIgPAAQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_141.setTransform(337.225,1426.05);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg3IAAgVIASAAIAAAVg");
	this.shape_142.setTransform(328.85,1423.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgiArQgOgOAAgdQAAgRAGgNQAGgOANgHQAMgGANgBQATAAALAJQAMAKADARIgSACQgDgLgHgGQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIAKQAJALANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMALgTAAQgWgBgOgPg");
	this.shape_143.setTransform(321.325,1426.05);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgpAxQgKgJAAgOQABgIADgGQAEgIAGgEQAGgCAHgDIARgDQAXgCALgEIAAgFQgBgMgFgFQgHgGgOAAQgNAAgGAFQgHAEgDAMIgSgCQACgMAGgHQAGgIAKgEQAMgEANAAQAOABAKACQAIAEAEAFQAFAGACAHIABASIAAAYQAAAbABAGQABAIAEAGIgUAAQgDgGgBgIQgKAJgKAEQgJADgMABQgSAAgKgKgAgEAHQgLABgFADQgFACgDAEQgDAEAAAFQABAHAFAGQAGAEALAAQAKABAJgFQAIgFAFgJQADgGAAgNIAAgGQgLAEgUADg");
	this.shape_144.setTransform(309.55,1426.05);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgiArQgOgOAAgdQAAgRAGgNQAGgOANgHQAMgGANgBQATAAALAJQAMAKADARIgSACQgDgLgHgGQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIAKQAJALANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMALgTAAQgWgBgOgPg");
	this.shape_145.setTransform(298.475,1426.05);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgIBNIAAhuIASAAIAABugAgIg3IAAgVIASAAIAAAVg");
	this.shape_146.setTransform(290.35,1423.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgPBPIAAhhIgRAAIAAgOIARAAIAAgMQAAgMACgFQADgIAHgEQAGgFAMAAQAIAAAKACIgDARIgLgBQgJAAgDADQgEAEAAAKIAAALIAWAAIAAAOIgWAAIAABhg");
	this.shape_147.setTransform(285.425,1423.775);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgIBNIAAhuIASAAIAABugAgIg3IAAgVIASAAIAAAVg");
	this.shape_148.setTransform(279.55,1423.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgfAxQgLgJgEgSIATgCQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgDgQgEQgUgFgIgDQgIgDgEgIQgEgGAAgIQAAgIADgGQADgGAGgFQAFgDAIgDQAHgCAJAAQAMABAKADQAKAEAFAGQAFAHABALIgSADQgCgKgGgEQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAJgGAJQgGAIgKAFQgKAEgOABQgVAAgLgKg");
	this.shape_149.setTransform(271.625,1426.05);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgQAXAAQAWAAAOAQQAPAPAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUACQgFASgMAJQgNAJgTABQgYgBgOgPgAgUghQgJAIgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_150.setTransform(260.275,1426.05);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgvBPIAAiaIARAAIAAAOQAGgIAHgFQAIgEAKAAQAOAAALAHQAMAIAFANQAGAOAAAQQgBARgFANQgHAOgLAHQgMAHgNAAQgJAAgIgEQgHgEgEgGIAAA3gAgVg0QgJAMAAAVQAAAVAJAKQAIALAMAAQAMAAAJgLQAJgLAAgVQAAgWgJgKQgIgLgMAAQgMAAgJALg");
	this.shape_151.setTransform(248.55,1428.075);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgfAxQgLgJgEgSIATgCQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgDgQgEQgUgFgIgDQgIgDgEgIQgEgGAAgIQAAgIADgGQADgGAGgFQAFgDAIgDQAHgCAJAAQAMABAKADQAKAEAFAGQAFAHABALIgSADQgCgKgGgEQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAJgGAJQgGAIgKAFQgKAEgOABQgVAAgLgKg");
	this.shape_152.setTransform(236.775,1426.05);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgQAXAAQAWAAAOAQQAPAPAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUACQgFASgMAJQgNAJgTABQgYgBgOgPgAgUghQgJAIgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_153.setTransform(225.375,1426.05);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgfAxQgLgJgEgSIATgCQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgDgQgEQgUgFgIgDQgIgDgEgIQgEgGAAgIQAAgIADgGQADgGAGgFQAFgDAIgDQAHgCAJAAQAMABAKADQAKAEAFAGQAFAHABALIgSADQgCgKgGgEQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAJgGAJQgGAIgKAFQgKAEgOABQgVAAgLgKg");
	this.shape_154.setTransform(207.925,1426.05);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgpAxQgKgJAAgOQABgIADgGQAEgIAGgEQAGgCAHgDIARgDQAXgCALgEIAAgFQgBgMgFgFQgHgGgOAAQgNAAgGAFQgHAEgDAMIgTgCQADgMAGgHQAFgIALgEQALgEAOAAQAPABAJACQAIAEAEAFQAFAGACAHIABASIAAAYQgBAbACAGQABAIAEAGIgUAAQgDgGgBgIQgLAJgJAEQgJADgMABQgSAAgKgKgAgEAHQgLABgGADQgEACgDAEQgDAEAAAFQABAHAFAGQAGAEALAAQAKABAJgFQAIgFAEgJQAEgGAAgNIAAgGQgLAEgUADg");
	this.shape_155.setTransform(196.5,1426.05);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgJBNIAAiZIATAAIAACZg");
	this.shape_156.setTransform(188.1,1423.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgMgCgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHABAWIAAA8IgUAAIAAhvIARAAIAAAQQAMgSAXAAQAKAAAJADQAIAEAFAGQADAGACAIIACASIAABEg");
	this.shape_157.setTransform(173.7,1425.925);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AglArQgPgPAAgcQAAgfASgPQAOgMAUAAQAXAAAPAQQAPAOAAAbQAAAVgHAMQgGANgNAGQgMAIgPAAQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_158.setTransform(161.675,1426.05);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgiArQgOgOAAgdQAAgRAGgNQAGgOANgHQAMgGANgBQATAAALAJQAMAKADARIgSACQgDgLgHgGQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIAKQAJALANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMALgTAAQgWgBgOgPg");
	this.shape_159.setTransform(150.575,1426.05);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgfAxQgLgJgEgSIATgCQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgDgQgEQgUgFgIgDQgIgDgEgIQgEgGAAgIQAAgIADgGQADgGAGgFQAFgDAIgDQAHgCAJAAQAMABAKADQAKAEAFAGQAFAHABALIgSADQgCgKgGgEQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAJgGAJQgGAIgKAFQgKAEgOABQgVAAgLgKg");
	this.shape_160.setTransform(133.375,1426.05);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIARAAIAAARQAHgMAGgEQAFgDAGAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgDAKgBANIAAA5g");
	this.shape_161.setTransform(125.3,1425.925);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgQAXAAQAWAAAOAQQAPAPAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUACQgFASgMAJQgNAJgTABQgYgBgOgPgAgUghQgJAIgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_162.setTransform(114.775,1426.05);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgoBMIgCgRIAKABQAHAAADgCQAEgCADgEIAFgOIACgFIgqhvIAUAAIAYBBQAEAMADANQADgMAEgNIAYhBIATAAIgrBxIgJAaQgFAJgGAEQgHAFgKAAQgFAAgGgDg");
	this.shape_163.setTransform(103.5,1428.325);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgJBNIAAiZIASAAIAACZg");
	this.shape_164.setTransform(95.55,1423.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgPBPIAAhhIgRAAIAAgOIARAAIAAgMQAAgMACgFQADgIAHgEQAGgFAMAAQAIAAAKACIgDARIgLgBQgJAAgDADQgEAEAAAKIAAALIAWAAIAAAOIgWAAIAABhg");
	this.shape_165.setTransform(90.675,1423.775);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AglArQgPgPAAgcQAAgfASgPQAOgMAUAAQAXAAAPAQQAPAOAAAbQAAAVgHAMQgGANgNAGQgMAIgPAAQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_166.setTransform(75.125,1426.05);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgiArQgOgOAAgdQAAgRAGgNQAGgOANgHQAMgGANgBQATAAALAJQAMAKADARIgSACQgDgLgHgGQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIAKQAJALANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMALgTAAQgWgBgOgPg");
	this.shape_167.setTransform(64.025,1426.05);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAbA5IAAhDQAAgMgDgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHABAWIAAA8IgTAAIAAhvIAQAAIAAAQQAMgSAXAAQAKAAAJADQAIAEAFAGQADAGADAIIABASIAABEg");
	this.shape_168.setTransform(52.3,1425.925);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg3IAAgVIASAAIAAAVg");
	this.shape_169.setTransform(43.9,1423.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgjBGQgQgKgIgUQgIgTAAgVQAAgZAJgRQAJgTARgIQARgKAUAAQAXAAAQAMQAQAMAGAVIgUAFQgGgRgKgIQgKgIgQABQgRgBgMAJQgMAJgEAOQgFAPAAAPQAAASAFAPQAGAPAMAIQAMAGAOABQARAAAMgLQAMgJAEgUIAUAGQgGAYgRAOQgQANgZAAQgYAAgPgKg");
	this.shape_170.setTransform(33.775,1423.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#33FFFF").s().p("Ag7CYQgTgVgBgqIAAgTIAzAAIAAAXQAAAhAcAAQAMAAAHgIQAHgIAAgSQAAgVgJgRQgKgPgZgXQghgcgNgYQgOgYAAgdQABgoAUgWQAUgWAmAAQAmAAAUAWQAUAWAAApIAAAPIgzAAIAAgSQAAgRgHgJQgHgHgNgBQgaAAAAAhQABATAJAPQALAQAZAXQAhAcANAYQANAYAAAgQAAApgVAWQgVAWgmAAQgmAAgVgWg");
	this.shape_171.setTransform(124.25,1378.05);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#33FFFF").s().p("AAcCpIgEgPIgBgaIAAg+QAAgYgHgJQgIgJgRAAIgTAAIAACRIg1AAIAAlRIBPAAQAoAAATATQATATAAAoIAAAUQAAA1gjAOIAAABQATAFAIASQAIASAAAeIAAA7IABAYQABAJAEAIgAgcgXIAUAAQAPAAAIgIQAHgJAAgTIAAgaQAAgSgGgJQgHgIgMAAIgZAAg");
	this.shape_172.setTransform(105.925,1378.075);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#33FFFF").s().p("AhICpIAAlRICQAAIAAAwIhbAAIAABaIBIAAIAAAvIhIAAIAABoIBbAAIAAAwg");
	this.shape_173.setTransform(87.45,1378.075);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#33FFFF").s().p("AgaCpIAAiQIhAjBIA5AAIAjB8IABAAIAkh8IA0AAIhADBIAACQg");
	this.shape_174.setTransform(68.675,1378.075);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#33FFFF").s().p("AhFCpIAAlRIA1AAIAAEhIBWAAIAAAwg");
	this.shape_175.setTransform(51.525,1378.075);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#33FFFF").s().p("AhFCpIAAlRICLAAIAAAwIhWAAIAABeIBDAAIAAAwIhDAAIAACTg");
	this.shape_176.setTransform(34.875,1378.075);

	this.bt3 = new lib.Symbol6();
	this.bt3.name = "bt3";
	this.bt3.setTransform(190.3,1122.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAOBOIAAglIhDAAIAAgSIBGhjIAQAAIAABjIAVAAIAAASIgVAAIAAAlgAgiAXIAwAAIAAhFg");
	this.shape_177.setTransform(219.775,1067.75);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgvBPIAAiaIARAAIAAAOQAGgIAHgFQAIgEAKAAQAOAAAMAHQALAIAFANQAGAOgBAQQAAARgFANQgHAOgLAHQgNAHgMAAQgJAAgIgEQgHgEgEgGIAAA3gAgVg0QgKAMABAVQAAAVAJAKQAIALANAAQALAAAJgLQAJgLAAgVQAAgWgJgKQgIgLgMAAQgMAAgJALg");
	this.shape_178.setTransform(208.4,1071.925);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AA5A5IAAhFQAAgMgCgFQgCgFgFgDQgEgDgHAAQgMAAgHAIQgIAIAAARIAABAIgSAAIAAhIQAAgMgFgHQgFgGgLAAQgHAAgHAEQgHAEgDAJQgDAIAAAPIAAA5IgTAAIAAhvIARAAIAAAQQAFgIAJgFQAIgFAMAAQANAAAHAFQAHAFADAJQAOgTAVAAQARAAAJAJQAJAJAAATIAABMg");
	this.shape_179.setTransform(193.15,1069.775);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_180.setTransform(181.15,1074.425);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgJBOIAAiaIASAAIAACag");
	this.shape_181.setTransform(175.65,1067.75);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgpAyQgKgKABgOQAAgIADgGQAEgHAGgFQAGgDAIgCIAQgDQAWgDALgDIAAgFQABgMgGgFQgHgGgOAAQgNAAgHAFQgGAFgDAMIgSgDQACgMAGgIQAGgHALgEQAKgDAOAAQAOAAAJACQAJAEAFAFQAEAFABAIIABARIAAAZQAAAaACAIQABAGADAHIgTAAQgDgGgBgIQgKAJgLAEQgIADgLABQgTgBgKgIgAgDAHQgNACgEABQgFADgDAEQgDAEABAFQAAAHAFAGQAGAEALAAQAKAAAJgEQAJgFAEgJQACgGAAgNIAAgGQgKAEgTADg");
	this.shape_182.setTransform(167.2,1069.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgiArQgOgPAAgcQAAgRAGgNQAGgOANgHQAMgHANABQATgBALAKQAMAJADARIgSACQgDgKgHgHQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIALQAJAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMAKgTABQgWgBgOgPg");
	this.shape_183.setTransform(156.175,1069.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgJBOIAAhvIATAAIAABvgAgJg3IAAgVIATAAIAAAVg");
	this.shape_184.setTransform(148.05,1067.75);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgCBJQgGgDgCgGQgDgEAAgSIAAg/IgNAAIAAgPIANAAIAAgcIASgLIAAAnIAUAAIAAAPIgUAAIAABAQAAAJABABQABADADACIAGABIAJgBIACARIgOACQgKAAgFgEg");
	this.shape_185.setTransform(142.775,1068);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgEAKAAANIAAA5g");
	this.shape_186.setTransform(136.9,1069.775);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgbAPgQQAOgPAXAAQAWgBAOAPQAPAQAAAbIgBAFIhSAAQABATAJAJQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFAQgMAKQgNAKgTAAQgYgBgOgPgAgUgiQgJAJgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_187.setTransform(126.375,1069.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgIA4IgqhvIAUAAIAYBCIAGAWIAHgUIAZhEIAUAAIgrBvg");
	this.shape_188.setTransform(115,1069.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHANQgGAMgNAGQgMAIgPAAQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_189.setTransform(97.525,1069.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgMgCgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHABAWIAAA8IgUAAIAAhvIARAAIAAAQQAMgSAXAAQAKAAAJADQAIAEAFAGQADAGACAIIACASIAABEg");
	this.shape_190.setTransform(85.5,1069.775);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgpAyQgJgKAAgOQAAgIADgGQAEgHAGgFQAGgDAIgCIARgDQAVgDAMgDIAAgFQAAgMgGgFQgHgGgOAAQgNAAgHAFQgGAFgDAMIgTgDQADgMAGgIQAFgHALgEQAMgDANAAQAPAAAIACQAKAEAEAFQAEAFACAIIABARIAAAZQAAAaABAIQABAGADAHIgTAAQgDgGgBgIQgLAJgKAEQgIADgMABQgSgBgKgIgAgEAHQgLACgGABQgEADgDAEQgCAEgBAFQAAAHAHAGQAFAEALAAQAKAAAJgEQAJgFADgJQADgGABgNIAAgGQgLAEgUADg");
	this.shape_191.setTransform(73.45,1069.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgdA5IAAhvIAQAAIAAARQAHgMAGgEQAFgDAGAAQAKAAAJAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgDAKAAANIAAA5g");
	this.shape_192.setTransform(64.75,1069.775);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgbAPgQQAOgPAXAAQAWgBAOAPQAPAQAAAbIgBAFIhSAAQABATAJAJQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFAQgMAKQgNAKgTAAQgYgBgOgPgAgUgiQgJAJgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_193.setTransform(54.275,1069.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgKBOIg8iaIAWAAIApBvIAHAZIAIgZIAqhvIAVAAIg9Cag");
	this.shape_194.setTransform(41.025,1067.75);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgcAJIAAgSIA5AAIAAASg");
	this.shape_195.setTransform(30.275,1069.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AAKBOIAAh4QgIAGgJAHQgLAGgKAEIAAgTQARgHALgLQALgLAFgKIANAAIAACbg");
	this.shape_196.setTransform(19.8,1067.725);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgfAxQgLgIgEgTIATgCQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgCgQgEQgUgGgIgDQgIgEgEgHQgEgGAAgIQAAgIADgGQADgHAGgEQAFgDAIgDQAHgCAJAAQAMABAKADQAKAEAFAHQAFAGABALIgSACQgCgJgGgEQgGgFgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAGAAAKQAAAJgGAJQgGAIgKAFQgKAEgOAAQgVAAgLgJg");
	this.shape_197.setTransform(236.325,1019);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AglAsQgPgQAAgcQAAgeASgPQAOgMAUgBQAXABAPAPQAPAPAAAbQAAAUgHAMQgGANgNAGQgMAIgPgBQgXAAgOgOgAgXggQgJAMAAAUQAAAWAJAKQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_198.setTransform(224.975,1019);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg2IAAgXIASAAIAAAXg");
	this.shape_199.setTransform(216.6,1016.85);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgdA5IAAhvIAQAAIAAARQAHgMAGgEQAFgDAGAAQAKAAAJAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgCAKAAANIAAA5g");
	this.shape_200.setTransform(211.45,1018.875);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgpAxQgJgIgBgOQABgJADgGQAEgIAGgDQAGgEAHgCIASgCQAWgDALgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgHAFQgGAEgDAMIgTgCQADgMAGgHQAFgIALgDQALgFAOAAQAPAAAJAEQAIADAEAFQAFAFACAIIABASIAAAYQgBAbACAGQABAIADAGIgTAAQgDgGgBgIQgKAJgKAEQgJAEgMgBQgSAAgKgJgAgEAHQgLACgGACQgEACgDAEQgCAEgBAFQAAAIAHAEQAFAFALABQAKAAAJgFQAJgFADgIQAEgHAAgNIAAgGQgLAEgUADg");
	this.shape_201.setTransform(200.9,1019);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgCBJQgGgDgCgFQgDgGAAgRIAAhAIgNAAIAAgOIANAAIAAgcIASgMIAAAoIAUAAIAAAOIgUAAIAABBQAAAIABADQABACADABIAGABIAJAAIACARIgOABQgKAAgFgDg");
	this.shape_202.setTransform(192.075,1017.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg2IAAgXIASAAIAAAXg");
	this.shape_203.setTransform(186.55,1016.85);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgiAsQgOgQAAgbQAAgSAGgOQAGgNANgHQAMgGANgBQATABALAIQAMAKADARIgSACQgDgKgHgGQgGgGgKAAQgNAAgJAKQgJALAAAVQAAAXAIAJQAJALANAAQALAAAIgHQAHgHACgOIATADQgDASgNAMQgMALgTgBQgWAAgOgOg");
	this.shape_204.setTransform(179.075,1019);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg2IAAgXIASAAIAAAXg");
	this.shape_205.setTransform(170.9,1016.85);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgJBNIAAiaIATAAIAACag");
	this.shape_206.setTransform(166.05,1016.85);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgeA+IAAAOIgSAAIAAiaIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAHQAGAIADALQAEAJAAAMQAAAdgPAQQgOAQgUAAQgTAAgLgRgAgVgLQgJALAAATQAAAUAFAJQAJAPAQAAQALAAAJgLQAJgLAAgVQAAgVgIgKQgJgLgMAAQgMAAgJALg");
	this.shape_207.setTransform(157.975,1016.975);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgZA1QgJgDgEgGQgEgGgCgIIgBgSIAAhEIATAAIAAA9IABAUQADAHAFAFQAGAEAJAAQAHAAAIgEQAHgFADgHQAEgIgBgOIAAg7IATAAIAABvIgRAAIAAgRQgNATgWAAQgJAAgJgEg");
	this.shape_208.setTransform(145.6,1019.125);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgwBPIAAiaIARAAIAAAOQAGgIAJgFQAHgEAKAAQAPAAALAHQALAIAFANQAGAOgBAQQAAARgFANQgHAOgLAHQgMAHgNAAQgJAAgHgEQgIgEgEgGIAAA3gAgVg0QgKAMAAAVQABAVAIAKQAJALANAAQALAAAJgLQAJgLAAgVQAAgWgJgKQgJgLgLAAQgMAAgJALg");
	this.shape_209.setTransform(133.95,1021.025);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgfAxQgLgIgEgTIATgCQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgCgQgEQgUgGgIgDQgIgEgEgHQgEgGAAgIQAAgIADgGQADgHAGgEQAFgDAIgDQAHgCAJAAQAMABAKADQAKAEAFAHQAFAGABALIgSACQgCgJgGgEQgGgFgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAGAAAKQAAAJgGAJQgGAIgKAFQgKAEgOAAQgVAAgLgJg");
	this.shape_210.setTransform(116.125,1019);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AglAsQgPgQAAgcQAAgeASgPQAOgMAUgBQAXABAPAPQAPAPAAAbQAAAUgHAMQgGANgNAGQgMAIgPgBQgXAAgOgOgAgXggQgJAMAAAUQAAAWAJAKQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_211.setTransform(104.725,1019);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAXAAQAWABAOAPQAPAPAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUACQgFARgMAKQgNAJgTAAQgYAAgOgOgAgUghQgJAJgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_212.setTransform(92.725,1019);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgHgNQgFgOgBgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IASAAIAACaIgRAAIAAgOQgLARgUAAQgMAAgMgIgAgUgLQgIAKAAAVQAAAWAJAKQAJALAMAAQAMAAAIgKQAKgKgBgVQABgWgKgLQgIgLgNAAQgMAAgJALg");
	this.shape_213.setTransform(80.3,1016.975);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgIBNIAAhuIASAAIAABugAgIg2IAAgXIASAAIAAAXg");
	this.shape_214.setTransform(72.3,1016.85);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgIA4IgrhvIAVAAIAYBCIAGAWIAHgVIAZhDIAUAAIgrBvg");
	this.shape_215.setTransform(64.5,1019);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgfAxQgLgIgEgTIATgCQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgCgQgEQgUgGgIgDQgIgEgEgHQgEgGAAgIQAAgIADgGQADgHAGgEQAFgDAIgDQAHgCAJAAQAMABAKADQAKAEAFAHQAFAGABALIgSACQgCgJgGgEQgGgFgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAGAAAKQAAAJgGAJQgGAIgKAFQgKAEgOAAQgVAAgLgJg");
	this.shape_216.setTransform(47.575,1019);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AglAsQgPgQAAgcQAAgeASgPQAOgMAUgBQAXABAPAPQAPAPAAAbQAAAUgHAMQgGANgNAGQgMAIgPgBQgXAAgOgOgAgXggQgJAMAAAUQAAAWAJAKQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_217.setTransform(36.225,1019);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("Ag/BNIAAiaIA2AAQAQABAKACQANADAKAIQAMAKAGARQAGAQAAAUQAAARgEANQgEAOgGAJQgHAJgIAFQgHAFgLADQgLACgNAAgAgrA7IAiAAQAOAAAJgDQAJgCAEgGQAIgHAEgMQAEgMAAgRQAAgZgIgMQgIgOgLgEQgJgDgRAAIghAAg");
	this.shape_218.setTransform(22.65,1016.85);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#33FFFF").s().p("Ag7CYQgTgVgBgqIAAgTIAzAAIAAAXQAAAhAcAAQAMAAAHgIQAHgIAAgSQAAgVgJgRQgKgQgZgWQghgdgNgXQgNgXgBgeQAAgoAVgWQAUgWAmAAQAmAAAUAWQATAWABApIAAAOIgzAAIAAgRQAAgSgHgIQgHgHgNgBQgaAAAAAhQAAASAKAQQALAQAZAXQAhAcANAYQANAYAAAfQAAAqgVAWQgVAWgmAAQgnAAgUgWg");
	this.shape_219.setTransform(107.95,971);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#33FFFF").s().p("Ag7CYQgVgWAAgpIAAixQAAgpAVgVQAVgXAmAAQAnAAAVAXQAVAVAAApIAACxQAAApgVAWQgVAWgnAAQgmAAgVgWgAgbhbIAAC4QAAAhAbAAQAbAAAAghIAAi4QAAgigbAAQgbAAAAAig");
	this.shape_220.setTransform(89.275,971);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#33FFFF").s().p("AhICpIAAlRICQAAIAAAwIhbAAIAABaIBIAAIAAAvIhIAAIAABoIBbAAIAAAwg");
	this.shape_221.setTransform(71.25,971.025);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#33FFFF").s().p("AhPCpIAAlRIBQAAQAnAAAUAVQAUAVAAApIAACrQAAApgUAVQgUAVgnAAgAgaB5IAaAAQANAAAHgIQAHgIAAgRIAAivQAAgRgHgIQgHgIgNAAIgaAAg");
	this.shape_222.setTransform(52.425,971.025);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#33FFFF").s().p("AgaCpIAAlRIA1AAIAAFRg");
	this.shape_223.setTransform(37.75,971.025);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#33FFFF").s().p("AgiCpIgzlRIA1AAIAiEFIABAAIAjkFIAwAAIgzFRg");
	this.shape_224.setTransform(23.85,971.025);

	this.bt1 = new lib.Symbol6();
	this.bt1.name = "bt1";
	this.bt1.setTransform(190.3,569.95);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#999999").s().p("AgdA5IAAhvIARAAIAAARQAGgMAGgEQAEgDAHAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgCAKAAANIAAA5g");
	this.shape_225.setTransform(500,2421.375);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#999999").s().p("AglAsQgPgQAAgcQAAgfASgOQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgMAGgPABQgXAAgOgPgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_226.setTransform(489.475,2421.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#999999").s().p("AgwBPIAAiaIASAAIAAAOQAFgIAIgFQAIgEAKAAQAPAAAKAHQALAIAGANQAFAOABAQQAAARgHANQgFAOgNAHQgMAHgMAAQgJAAgIgEQgHgEgFgGIAAA3gAgVg0QgJAMAAAVQgBAVAKAKQAIALAMAAQAMAAAJgLQAJgLAAgVQAAgWgIgKQgKgLgLAAQgMAAgJALg");
	this.shape_227.setTransform(477.8,2423.525);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#999999").s().p("AglAsQgPgQAAgcQAAgfASgOQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgMAGgPABQgXAAgOgPgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_228.setTransform(459.425,2421.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#999999").s().p("AgYBHQgLgHgHgNQgFgOAAgRQgBgRAGgMQAFgOAMgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IATAAIAACaIgSAAIAAgOQgKARgVAAQgMAAgMgIgAgTgLQgJAKAAAVQAAAWAJAKQAJALALAAQANAAAJgKQAIgKABgVQgBgWgIgLQgKgLgNAAQgLAAgIALg");
	this.shape_229.setTransform(447,2419.475);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#999999").s().p("AgpAxQgKgIAAgPQABgIADgHQAEgHAGgEQAGgCAHgDIASgDQAWgDALgDIAAgFQAAgMgGgFQgHgGgOAAQgNAAgHAFQgGAFgDAMIgTgDQADgMAGgIQAFgHALgDQALgFAOAAQAPAAAJADQAIAEAEAFQAFAGACAHIABARIAAAZQgBAbACAHQABAGADAHIgTAAQgDgGgBgIQgKAJgKAEQgJAEgMAAQgSAAgKgKgAgEAHQgLABgGACQgEADgDAEQgCAEgBAFQAAAIAHAEQAFAGALAAQAKgBAJgEQAJgFADgIQAEgHAAgMIAAgHQgLAEgUADg");
	this.shape_230.setTransform(435.35,2421.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#999999").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAOgQAXAAQAWAAAOAPQAPAQAAAbIgBAFIhSAAQABATAJAJQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgFASgMAJQgNAJgTABQgYAAgOgPgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_231.setTransform(423.325,2421.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#999999").s().p("AgdA5IAAhvIARAAIAAARQAGgMAGgEQAEgDAHAAQAKAAAKAGIgHARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgCAKAAANIAAA5g");
	this.shape_232.setTransform(414.6,2421.375);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#999999").s().p("AgjBGQgQgKgIgUQgIgTAAgVQAAgYAJgTQAJgRARgKQARgJAUAAQAXAAAQAMQAQALAGAWIgUAFQgGgRgKgIQgKgIgQAAQgRAAgMAJQgMAIgEAPQgFAOAAAQQAAATAFAOQAGAPAMAHQAMAIAOgBQARABAMgLQAMgJAEgUIAUAFQgGAZgRAOQgQANgZAAQgYAAgPgKg");
	this.shape_233.setTransform(402.475,2419.35);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFF66").s().p("AAYCaIgVjPIgBAAIgVDPIhBAAIgfkzIAvAAIAVDsIABAAIAXjsIA0AAIAXDsIAAAAIAWjsIAqAAIgfEzg");
	this.shape_234.setTransform(907.475,275.075);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFF66").s().p("Ag1CJQgTgTAAgmIAAigQAAglATgUQATgUAiAAQAkAAATAUQASAUAAAlIAACgQAAAmgSATQgTAVgkAAQgiAAgTgVgAgYhTIAACmQAAAfAYAAQAZAAAAgfIAAimQAAgfgZAAQgYAAAAAfg");
	this.shape_235.setTransform(886.425,275.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFF66").s().p("AAaCaIAAiLIgzAAIAACLIgwAAIAAkzIAwAAIAAB+IAzAAIAAh+IAwAAIAAEzg");
	this.shape_236.setTransform(868.425,275.075);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFF66").s().p("Ag1CKQgSgUAAgmIAAgRIAuAAIAAAVQAAAeAZAAQALAAAHgHQAGgIAAgQQAAgTgJgOQgJgPgWgVQgegagMgVQgMgVAAgbQAAglATgTQASgUAiAAQAjAAASAUQASATAAAmIAAANIgvAAIAAgQQAAgQgFgHQgHgIgLAAQgYAAAAAeQAAARAJAOQAJAPAXAUQAeAZAMAWQALAWAAAcQAAAngSATQgTAVgjAAQgjAAgSgUg");
	this.shape_237.setTransform(851.05,275.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFF66").s().p("Ag1CJQgTgTAAgmIAAigQAAglATgUQATgUAiAAQAkAAATAUQASAUAAAlIAACgQAAAmgSATQgTAVgkAAQgiAAgTgVgAgYhTIAACmQAAAfAYAAQAZAAAAgfIAAimQAAgfgZAAQgYAAAAAfg");
	this.shape_238.setTransform(827.075,275.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFF66").s().p("Ag0CKQgSgTAAglIAAikQAAgkASgTQASgUAiAAQAiAAATAUQASATAAAkIAAAhIgtAAIAAgkQAAgdgZAAQgXAAAAAdIAACrQAAAcAXAAQAZAAAAgcIAAgvIAtAAIAAArQAAAlgSATQgTAUgiAAQgiAAgSgUg");
	this.shape_239.setTransform(810.05,275.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFF66").s().p("AgXCaIAAkzIAvAAIAAEzg");
	this.shape_240.setTransform(797.2,275.075);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFF66").s().p("AgXCaIAAkHIgzAAIAAgsICVAAIAAAsIgzAAIAAEHg");
	this.shape_241.setTransform(785.05,275.075);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFF66").s().p("AAiCaIgJg9IAAABIg2AAIgIA8IgtAAIAykzIBAAAIAzEzgAgXA0IArAAIgViXIgBAAg");
	this.shape_242.setTransform(768.275,275.075);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFF66").s().p("AhHCaIAAkzIBHAAQAkAAASAUQARATABAlIAAAfQgBAlgRASQgSAUgkAAIgXAAIAAB9gAgXgOIAXAAQALAAAHgHQAFgGABgQIAAglQgBgPgFgHQgHgHgLAAIgXAAg");
	this.shape_243.setTransform(751.45,275.075);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFF66").s().p("AAiCaIgJg9IAAABIg2AAIgIA8IgtAAIAykzIBAAAIAzEzgAgXA0IArAAIgViXIgBAAg");
	this.shape_244.setTransform(733.725,275.075);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFF66").s().p("AhGCaIAAgrIBZjcIhUAAIAAgsICIAAIAAArIhZDcIBZAAIAAAsg");
	this.shape_245.setTransform(716.9,275.075);

	this.instance = new lib.Symbol4();
	this.instance.setTransform(867.6,2412.8,0.4946,0.4946);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#511479").s().p("AA5A5IAAhFQAAgMgCgFQgCgFgEgDQgGgDgGAAQgMAAgIAIQgIAIAAARIAABAIgSAAIAAhIQAAgMgEgHQgFgGgKAAQgJAAgGAEQgHAEgDAJQgDAIAAAPIAAA5IgTAAIAAhvIARAAIAAAQQAFgIAJgFQAIgFAMAAQAMAAAJAFQAGAFAEAJQANgTAVAAQARAAAJAJQAJAJAAATIAABMg");
	this.shape_246.setTransform(590.55,2454.975);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#511479").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHAMQgGANgNAGQgMAHgPAAQgXAAgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_247.setTransform(575.475,2455.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#511479").s().p("AgiArQgOgPAAgcQAAgRAGgOQAGgNANgHQAMgHANABQATgBALAKQAMAJADARIgSACQgDgKgHgHQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAXAIAJQAJALANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMAKgTAAQgWAAgOgPg");
	this.shape_248.setTransform(564.375,2455.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#511479").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_249.setTransform(555.7,2459.625);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#511479").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHAMQgGANgNAGQgMAHgPAAQgXAAgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_250.setTransform(546.575,2455.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#511479").s().p("AgJBNIAAhuIATAAIAABugAgJg3IAAgWIATAAIAAAWg");
	this.shape_251.setTransform(538.2,2452.95);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#511479").s().p("AgYBHQgLgHgHgNQgFgOgBgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IASAAIAACaIgRAAIAAgOQgLARgUAAQgMAAgMgIgAgUgLQgIAKAAAVQAAAWAJAKQAJALAMAAQAMAAAIgKQAKgKgBgVQABgWgKgLQgIgLgNAAQgMAAgJALg");
	this.shape_252.setTransform(529.4,2453.075);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#511479").s().p("AgZA1QgIgDgFgGQgEgGgBgIIgBgSIAAhEIATAAIAAA9IABAUQACAHAFAFQAGAEAIAAQAIAAAHgEQAIgFADgHQAEgIAAgOIAAg7IATAAIAABvIgRAAIAAgRQgOATgVAAQgKAAgJgEg");
	this.shape_253.setTransform(517.7,2455.225);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#511479").s().p("AgCBJQgGgDgCgGQgDgEAAgSIAAg/IgNAAIAAgPIANAAIAAgcIASgLIAAAnIAUAAIAAAPIgUAAIAABAQAAAIABACQABADADACIAGABIAJgBIACARIgOACQgKgBgFgDg");
	this.shape_254.setTransform(508.875,2453.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#511479").s().p("AgfAyQgLgKgEgRIATgDQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgDgQgEQgUgFgIgDQgIgDgEgIQgEgGAAgJQAAgHADgGQADgGAGgFQAFgDAIgDQAHgBAJAAQAMgBAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAKgGAIQgGAIgKAFQgKAEgOAAQgVAAgLgIg");
	this.shape_255.setTransform(500.275,2455.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#511479").s().p("AAXBNIgkg5IgOANIAAAsIgTAAIAAiaIATAAIAABYIAsgsIAZAAIgqAoIAuBGg");
	this.shape_256.setTransform(490.2,2452.95);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#511479").s().p("AgiArQgOgPAAgcQAAgRAGgOQAGgNANgHQAMgHANABQATgBALAKQAMAJADARIgSACQgDgKgHgHQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAXAIAJQAJALANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMAKgTAAQgWAAgOgPg");
	this.shape_257.setTransform(479.025,2455.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#511479").s().p("AgpAyQgJgKAAgOQgBgIAEgGQAEgIAGgEQAGgDAIgCIARgDQAVgDAMgDIAAgFQAAgMgGgFQgHgGgOAAQgNAAgHAFQgGAEgDAMIgTgCQADgMAGgIQAFgHAMgEQALgDANAAQAPgBAIADQAKAEAEAFQAEAFACAIIABARIAAAZQAAAaABAHQABAHADAHIgTAAQgDgGgBgIQgLAJgKAEQgIADgMAAQgSAAgKgIgAgEAHQgLABgGACQgEADgDAEQgCAEgBAFQAAAHAHAGQAFAEALAAQAKABAJgFQAJgFADgJQADgGABgNIAAgGQgLAEgUADg");
	this.shape_258.setTransform(467.2,2455.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#511479").s().p("AgdA5IAAhvIAQAAIAAARQAHgMAGgEQAFgDAGAAQAKAAAJAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgCAKAAANIAAA5g");
	this.shape_259.setTransform(458.5,2454.975);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#511479").s().p("AgCBJQgGgDgCgGQgDgEAAgSIAAg/IgNAAIAAgPIANAAIAAgcIASgLIAAAnIAUAAIAAAPIgUAAIAABAQAAAIABACQABADADACIAGABIAJgBIACARIgOACQgKgBgFgDg");
	this.shape_260.setTransform(451.175,2453.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#511479").s().p("AgfAyQgLgKgEgRIATgDQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgDgQgEQgUgFgIgDQgIgDgEgIQgEgGAAgJQAAgHADgGQADgGAGgFQAFgDAIgDQAHgBAJAAQAMgBAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAKgGAIQgGAIgKAFQgKAEgOAAQgVAAgLgIg");
	this.shape_261.setTransform(442.575,2455.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#511479").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHAMQgGANgNAGQgMAHgPAAQgXAAgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_262.setTransform(431.175,2455.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#511479").s().p("AAaA5IAAhDQABgMgDgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHAAAWIAAA8IgTAAIAAhvIARAAIAAAQQANgSAWAAQAKAAAJADQAIAEAFAGQAEAGABAIIABASIAABEg");
	this.shape_263.setTransform(419.2,2454.975);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#511479").s().p("AgpAyQgKgKAAgOQABgIADgGQAEgIAGgEQAGgDAHgCIASgDQAWgDALgDIAAgFQgBgMgFgFQgHgGgOAAQgNAAgGAFQgHAEgDAMIgTgCQADgMAGgIQAFgHALgEQALgDAOAAQAPgBAJADQAIAEAEAFQAFAFACAIIABARIAAAZQgBAaACAHQABAHAEAHIgUAAQgDgGgBgIQgLAJgJAEQgJADgMAAQgSAAgKgIgAgEAHQgLABgGACQgEADgDAEQgDAEAAAFQABAHAFAGQAGAEALAAQAKABAJgFQAIgFAEgJQAEgGAAgNIAAgGQgLAEgUADg");
	this.shape_264.setTransform(407.1,2455.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#511479").s().p("AgfAyQgLgKgEgRIATgDQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgDgQgEQgUgFgIgDQgIgDgEgIQgEgGAAgJQAAgHADgGQADgGAGgFQAFgDAIgDQAHgBAJAAQAMgBAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAKgGAIQgGAIgKAFQgKAEgOAAQgVAAgLgIg");
	this.shape_265.setTransform(395.675,2455.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#511479").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHAMQgGANgNAGQgMAHgPAAQgXAAgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_266.setTransform(384.275,2455.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#511479").s().p("AgiArQgOgPAAgcQAAgRAGgOQAGgNANgHQAMgHANABQATgBALAKQAMAJADARIgSACQgDgKgHgHQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAXAIAJQAJALANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMAKgTAAQgWAAgOgPg");
	this.shape_267.setTransform(373.225,2455.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#511479").s().p("AgpAyQgKgKAAgOQAAgIAEgGQAEgIAGgEQAGgDAHgCIARgDQAWgDALgDIAAgFQAAgMgFgFQgHgGgOAAQgNAAgGAFQgHAEgDAMIgSgCQACgMAGgIQAGgHAKgEQAMgDANAAQAOgBAKADQAJAEADAFQAFAFACAIIAAARIAAAZQABAaABAHQABAHAEAHIgUAAQgDgGgBgIQgKAJgKAEQgJADgLAAQgTAAgKgIgAgDAHQgMABgFACQgFADgDAEQgCAEAAAFQAAAHAFAGQAGAEALAAQAKABAJgFQAIgFAFgJQACgGAAgNIAAgGQgKAEgTADg");
	this.shape_268.setTransform(361.4,2455.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#511479").s().p("AgIBNIAAiaIASAAIAACag");
	this.shape_269.setTransform(353,2452.95);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#511479").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_270.setTransform(347.7,2459.625);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#511479").s().p("AAWA4IgRhCIgFgTIgVBVIgVAAIgihvIAUAAIASA/IAHAYIAFgXIAShAIASAAIARBAIAGAWIAHgXIATg/IASAAIgjBvg");
	this.shape_271.setTransform(336.75,2455.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#511479").s().p("AAWA4IgShCIgEgTIgWBVIgUAAIgihvIAUAAIARA/IAHAYIAGgXIAShAIASAAIASBAIAFAWIAGgXIATg/IATAAIgjBvg");
	this.shape_272.setTransform(321.15,2455.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#511479").s().p("AAWA4IgShCIgEgTIgWBVIgTAAIgjhvIAUAAIARA/IAIAYIAFgXIAShAIATAAIARBAIAFAWIAHgXIASg/IATAAIgjBvg");
	this.shape_273.setTransform(305.55,2455.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgfAyQgLgKgEgRIATgDQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgCgQgFQgUgFgIgDQgIgDgEgIQgEgGAAgJQAAgHADgGQADgGAGgFQAFgDAIgDQAHgBAJAAQAMAAAKADQAKAEAFAGQAFAHABALIgSADQgCgKgGgEQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAKgGAIQgGAJgKAEQgKAEgOABQgVAAgLgJg");
	this.shape_274.setTransform(359.025,518.75);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgOQABgIADgGQAEgHAGgFQAGgDAHgCIASgDQAWgDALgDIAAgFQAAgMgGgFQgHgGgOAAQgNAAgHAFQgGAEgDAMIgTgCQADgMAGgHQAFgIALgEQALgDAOAAQAPAAAJACQAIAEAEAFQAFAGACAHIABASIAAAYQgBAbACAGQABAIADAGIgTAAQgDgGgBgIQgKAJgKAEQgJADgMABQgSAAgKgJgAgEAHQgLABgGADQgEACgDAEQgCAEgBAFQAAAHAHAGQAFAEALAAQAKABAJgFQAJgFADgJQAEgGAAgNIAAgGQgLAEgUADg");
	this.shape_275.setTransform(347.6,518.75);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgHgNQgFgOAAgRQgBgRAGgMQAFgOAMgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IASAAIAACaIgRAAIAAgOQgLARgUAAQgMAAgMgIgAgTgLQgJAKAAAVQAAAWAJAKQAJALALAAQANAAAIgKQAJgKAAgVQAAgWgJgLQgIgLgOAAQgLAAgIALg");
	this.shape_276.setTransform(335.2,516.725);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgpAyQgJgKAAgOQgBgIAEgGQAEgHAGgFQAGgDAIgCIARgDQAWgDAKgDIAAgFQABgMgGgFQgHgGgOAAQgNAAgHAFQgGAEgDAMIgTgCQADgMAGgHQAFgIAMgEQALgDANAAQAPAAAIACQAJAEAFAFQAEAGABAHIACASIAAAYQAAAbABAGQABAIADAGIgTAAQgDgGgBgIQgLAJgKAEQgIADgMABQgSAAgKgJgAgDAHQgNABgFADQgEACgDAEQgCAEgBAFQAAAHAHAGQAFAEALAAQAKABAJgFQAJgFADgJQADgGAAgNIAAgGQgKAEgTADg");
	this.shape_277.setTransform(323.55,518.75);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AghBHQgMgJAAgSIATACQABAJAFAEQAHAGAMgBQAMABAIgGQAHgGACgJQACgGAAgSQgNAOgRAAQgXAAgNgQQgMgRAAgWQAAgRAFgNQAGgOALgHQALgHAPAAQATAAANAQIAAgNIASAAIAABfQgBAagFAMQgGAKgLAGQgMAHgQAAQgTAAgNgJgAgUg1QgJAKAAAVQAAAVAJAJQAJALAMAAQANAAAJgLQAIgJABgVQgBgUgIgLQgKgLgNAAQgLAAgJALg");
	this.shape_278.setTransform(311.2,520.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgJBNIAAiZIASAAIAACZg");
	this.shape_279.setTransform(303.1,516.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgZA1QgJgDgDgGQgFgGgBgIIgBgSIAAhEIASAAIAAA9IABAUQACAHAGAFQAGAEAJAAQAHAAAHgEQAIgFADgHQADgIABgOIAAg7IATAAIAABvIgSAAIAAgRQgNATgWAAQgJAAgJgEg");
	this.shape_280.setTransform(294.7,518.875);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgvBPIAAiaIAQAAIAAAOQAGgIAIgFQAIgEAKAAQAPAAALAHQALAIAFANQAGAOgBAQQAAARgFANQgHAOgLAHQgNAHgMAAQgJAAgIgEQgHgEgEgGIAAA3gAgVg0QgKAMAAAVQABAVAIAKQAJALANAAQALAAAJgLQAJgLAAgVQAAgWgJgKQgIgLgMAAQgMAAgJALg");
	this.shape_281.setTransform(283,520.775);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AAJBOIAAh4QgGAGgLAHQgLAGgJAEIAAgTQAQgHAMgLQAMgLAEgKIAMAAIAACbg");
	this.shape_282.setTransform(263.85,516.575);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AAKBOIAAh4QgIAGgJAHQgMAGgIAEIAAgTQAQgHALgLQALgLAGgKIALAAIAACbg");
	this.shape_283.setTransform(251.85,516.575);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AAdA4IgXgjIgGgJIgcAsIgYAAIAqg6Igng1IAYAAIASAaIAHAMIAIgMIATgaIAWAAIgmA0IAqA7g");
	this.shape_284.setTransform(235.2,518.75);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgjBCQgNgMgCgTIAUgCQACAPAIAHQAIAHALAAQANAAAKgKQAJgKAAgSQAAgQgJgIQgJgKgOAAQgJAAgHAFQgIAEgEAFIgSgCIAPhPIBMAAIAAATIg9AAIgIApQAOgJAOAAQAVAAANAOQAOANAAAWQAAAVgMAPQgPATgZAAQgVAAgNgMg");
	this.shape_285.setTransform(217.775,516.825);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_286.setTransform(208.8,523.275);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgkBCQgOgOAAgVQAAgOAIgLQAHgJAOgDQgLgFgGgIQgGgIAAgLQAAgRAMgMQANgLATAAQAUAAAMAMQAMAMAAAQQABALgGAIQgGAIgLAFQAOAEAHAJQAIALAAAOQAAAUgOAOQgOANgXAAQgWAAgOgNgAgWAKQgIAIAAAOQAAAIADAIQAEAHAIAEQAHAFAIAAQANgBAKgIQAJgJAAgOQAAgOgJgIQgKgJgNAAQgNAAgJAJgAgSg4QgGAHAAAKQAAAMAGAGQAIAHAKAAQALAAAHgHQAHgGAAgLQAAgKgHgHQgIgIgKABQgKAAgIAGg");
	this.shape_287.setTransform(199.7,516.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgMgCgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHAAAWIAAA8IgTAAIAAhvIARAAIAAAQQAMgSAXAAQAKAAAJADQAIAEAFAGQADAGACAIIABASIAABEg");
	this.shape_288.setTransform(181.7,518.625);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgPAXAAQAWgBAOAQQAPAPAAAbIgBAFIhSAAQABATAJAJQAKAKANAAQAKAAAIgFQAHgGAEgMIAUADQgFARgMAJQgNAKgTAAQgYgBgOgPgAgUghQgJAIgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_289.setTransform(169.625,518.75);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AAbA5IAAhDQgBgMgCgFQgCgGgFgEQgHgDgHAAQgLAAgJAIQgIAHgBAWIAAA8IgSAAIAAhvIARAAIAAAQQALgSAXAAQAKAAAJADQAIAEAEAGQAFAGACAIIAAASIAABEg");
	this.shape_290.setTransform(151.6,518.625);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AglBAQgPgPAAgcQAAgfASgPQAOgMAUAAQAXAAAPAPQAPAPAAAaQAAAWgHAMQgGANgNAGQgMAHgPAAQgXAAgOgPgAgXgLQgJALAAAVQAAAVAJAKQAKAMANAAQAOAAAKgMQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALgAgKgxIAOgdIAYAAIgXAdg");
	this.shape_291.setTransform(139.575,516.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg3IAAgVIASAAIAAAVg");
	this.shape_292.setTransform(131.2,516.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgfAyQgLgKgEgRIATgDQACALAHAGQAHAGAMAAQANAAAHgFQAGgGAAgHQAAgHgGgDQgDgCgQgFQgUgFgIgDQgIgDgEgIQgEgGAAgJQAAgHADgGQADgGAGgFQAFgDAIgDQAHgBAJAAQAMAAAKADQAKAEAFAGQAFAHABALIgSADQgCgKgGgEQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAFAIAEQAHACAFAHQAFAHAAAJQAAAKgGAIQgGAJgKAEQgKAEgOABQgVAAgLgJg");
	this.shape_293.setTransform(123.275,518.75);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgPAXAAQAWgBAOAQQAPAPAAAbIgBAFIhSAAQABATAJAJQAKAKANAAQAKAAAIgFQAHgGAEgMIAUADQgFARgMAJQgNAKgTAAQgYgBgOgPgAgUghQgJAIgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_294.setTransform(111.925,518.75);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgdA5IAAhvIARAAIAAARQAGgMAGgEQAEgDAHAAQAKAAAKAGIgHARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgCAKAAANIAAA5g");
	this.shape_295.setTransform(103.2,518.625);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgwBPIAAiaIARAAIAAAOQAGgIAJgFQAHgEAKAAQAPAAALAHQALAIAFANQAGAOgBAQQAAARgFANQgHAOgLAHQgMAHgNAAQgJAAgHgEQgIgEgEgGIAAA3gAgVg0QgKAMAAAVQABAVAIAKQAJALANAAQALAAAJgLQAJgLAAgVQAAgWgJgKQgJgLgLAAQgMAAgJALg");
	this.shape_296.setTransform(93,520.775);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AA5A5IAAhFQAAgMgCgFQgCgFgEgDQgGgDgGAAQgMAAgIAIQgHAIgBARIAABAIgSAAIAAhIQABgMgFgHQgFgGgLAAQgHAAgHAEQgHAEgDAJQgDAIAAAPIAAA5IgTAAIAAhvIARAAIAAAQQAFgIAJgFQAJgFALAAQAMAAAJAFQAGAFADAJQAOgTAVAAQARAAAJAJQAJAJAAATIAABMg");
	this.shape_297.setTransform(77.75,518.625);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg3IAAgVIASAAIAAAVg");
	this.shape_298.setTransform(66.3,516.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgOQAAgIAEgGQAEgHAGgFQAGgDAHgCIARgDQAWgDAMgDIAAgFQgBgMgFgFQgHgGgOAAQgNAAgGAFQgHAEgDAMIgSgCQACgMAGgHQAGgIAKgEQAMgDANAAQAOAAAKACQAJAEADAFQAFAGACAHIAAASIAAAYQABAbABAGQABAIAEAGIgUAAQgDgGgBgIQgKAJgKAEQgJADgLABQgTAAgKgJgAgDAHQgMABgFADQgFACgDAEQgCAEAAAFQAAAHAFAGQAGAEALAAQAKABAJgFQAIgFAFgJQACgGABgNIAAgGQgLAEgTADg");
	this.shape_299.setTransform(51.8,518.75);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIASAAIAAARQAGgMAGgEQAFgDAGAAQAKAAAKAGIgHARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgDAKAAANIAAA5g");
	this.shape_300.setTransform(43.1,518.625);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgOQABgIADgGQAEgHAGgFQAGgDAHgCIASgDQAWgDALgDIAAgFQAAgMgGgFQgHgGgOAAQgNAAgHAFQgGAEgDAMIgTgCQADgMAGgHQAFgIALgEQALgDAOAAQAPAAAJACQAIAEAFAFQAEAGACAHIABASIAAAYQgBAbACAGQABAIADAGIgTAAQgDgGgBgIQgKAJgKAEQgJADgMABQgSAAgKgJgAgEAHQgLABgGADQgEACgDAEQgCAEgBAFQAAAHAHAGQAFAEALAAQAKABAJgFQAJgFADgJQAEgGAAgNIAAgGQgLAEgUADg");
	this.shape_301.setTransform(32.6,518.75);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgwBPIAAiaIARAAIAAAOQAHgIAIgFQAHgEAKAAQAOAAAMAHQAKAIAGANQAFAOAAAQQABARgHANQgGAOgMAHQgLAHgNAAQgJAAgHgEQgIgEgFgGIAAA3gAgVg0QgKAMAAAVQABAVAIAKQAJALANAAQALAAAJgLQAJgLAAgVQAAgWgJgKQgJgLgLAAQgMAAgJALg");
	this.shape_302.setTransform(20.9,520.775);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgfAyQgLgKgEgRIATgEQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgHgGgDQgDgDgQgDQgUgGgIgDQgIgEgEgGQgEgHAAgJQAAgHADgGQADgGAGgFQAFgDAIgCQAHgCAJAAQAMAAAKADQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAFAAAGQAAADACADQADADAFACIAPAFQAVAGAIADQAHACAFAHQAFAGAAAKQAAAJgGAJQgGAIgKAFQgKAFgOAAQgVgBgLgIg");
	this.shape_303.setTransform(399.925,493.25);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgPAXAAQAWAAAOAOQAPAQAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFAQgMAKQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_304.setTransform(388.525,493.25);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgIBOIAAiaIASAAIAACag");
	this.shape_305.setTransform(380.1,491.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgPAXAAQAWAAAOAOQAPAQAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFAQgMAKQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_306.setTransform(371.725,493.25);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AAdA4IgXgjIgGgKIgcAtIgYAAIAqg5Igng2IAYAAIASAaIAHAMIAIgLIATgbIAWAAIgmA1IAqA6g");
	this.shape_307.setTransform(360.3,493.25);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgJBOIAAhwIASAAIAABwgAgJg3IAAgVIASAAIAAAVg");
	this.shape_308.setTransform(352.5,491.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgvBPIAAiaIARAAIAAAOQAGgIAHgFQAIgEAKAAQAOAAALAHQAMAIAFANQAGAOAAAQQgBARgFANQgHAOgLAHQgMAHgNAAQgJAAgIgEQgHgEgEgGIAAA3gAgVg0QgJAMAAAVQAAAVAJAKQAIALANAAQALAAAJgLQAJgLAAgVQAAgWgJgKQgIgLgMAAQgMAAgJALg");
	this.shape_309.setTransform(344.4,495.275);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgjBCQgNgMgCgTIAUgCQACAPAIAHQAIAHALAAQANAAAKgKQAJgKAAgSQAAgQgJgIQgJgKgOAAQgJAAgHAFQgIAEgEAFIgSgCIAPhPIBMAAIAAATIg9AAIgIApQAOgJAOAAQAVAAANAOQAOANAAAWQAAAVgMAPQgPATgZAAQgVAAgNgMg");
	this.shape_310.setTransform(326.075,491.325);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgbBNQAAgTAHgZQAHgbANgXQALgXAPgRIhLAAIAAgSIBjAAIAAAOQgPAQgOAaQgPAagHAbQgFATgCAYg");
	this.shape_311.setTransform(314.025,491.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgyBOQAAgHACgGQAEgLAJgKQAIgKAQgOQAZgUAJgLQAIgMAAgLQAAgLgIgIQgIgIgNAAQgMAAgJAIQgIAIAAAPIgUgCQACgWANgLQAOgMAVAAQAWAAANANQANAMAAASQAAAKgEAJQgEAIgIAJQgJAKgVASIgVATQgFAFgDAFIBLAAIAAATg");
	this.shape_312.setTransform(301.775,491.075);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AAJBOIAAh4QgGAGgLAHQgLAGgJAEIAAgTQAQgHAMgLQAMgLAEgKIAMAAIAACbg");
	this.shape_313.setTransform(289.15,491.075);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AAdA4IgXgjIgGgKIgcAtIgYAAIAqg5Igng2IAYAAIASAaIAHAMIAIgLIATgbIAWAAIgmA1IAqA6g");
	this.shape_314.setTransform(272.55,493.25);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgiA/QgPgTAAgsQgBgaAGgRQAGgRALgJQALgJAQAAQANAAAJAFQAJAFAHAKQAGAJADANQADAOABAWQgBAbgFARQgGARgLAJQgLAJgRAAQgWAAgMgQgAgUgzQgKAOAAAlQAAAnAJAMQAJAMAMAAQANAAAJgMQAJgNAAgmQAAglgJgMQgJgNgNgBQgNAAgHAMg");
	this.shape_315.setTransform(255.05,491.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgjBCQgNgMgCgTIAUgCQACAPAIAHQAIAHALAAQANAAAKgKQAJgKAAgSQAAgQgJgIQgJgKgOAAQgJAAgHAFQgIAEgEAFIgSgCIAPhPIBMAAIAAATIg9AAIgIApQAOgJAOAAQAVAAANAOQAOANAAAWQAAAVgMAPQgPATgZAAQgVAAgNgMg");
	this.shape_316.setTransform(243.075,491.325);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgjA9QgPgRAAgoQAAgsAQgVQAPgRAXAAQATAAALAKQAMAKACATIgTABQgCgLgFgFQgHgJgMAAQgIAAgHAGQgJAGgFANQgFAMAAAYQAHgLAKgFQAKgFAJAAQATAAAOAOQANANAAAWQAAAPgGAMQgGANgLAGQgLAHgOAAQgXAAgPgSgAgTACQgJAKAAAOQAAAKAEAJQAEAJAIAFQAHAFAHgBQAMAAAJgJQAJgKAAgRQAAgPgJgKQgIgIgNAAQgMAAgJAIg");
	this.shape_317.setTransform(230.975,491.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AAJBOIAAh4QgHAGgKAHQgLAGgIAEIAAgTQAPgHAMgLQALgLAGgKIALAAIAACbg");
	this.shape_318.setTransform(218.2,491.075);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgPAXAAQAWAAAOAOQAPAQAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFAQgMAKQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_319.setTransform(200.925,493.25);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgGgNQgHgOAAgRQABgRAFgMQAGgOALgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IATAAIAACaIgSAAIAAgOQgKARgVAAQgNAAgLgIgAgUgLQgIAKAAAVQAAAWAJAKQAJALAMAAQAMAAAJgKQAJgKgBgVQABgWgJgLQgKgLgMAAQgMAAgJALg");
	this.shape_320.setTransform(188.55,491.225);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgfAyQgLgKgEgRIATgEQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgHgGgDQgDgDgQgDQgUgGgIgDQgIgEgEgGQgEgHAAgJQAAgHADgGQADgGAGgFQAFgDAIgCQAHgCAJAAQAMAAAKADQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAFAAAGQAAADACADQADADAFACIAPAFQAVAGAIADQAHACAFAHQAFAGAAAKQAAAJgGAJQgGAIgKAFQgKAFgOAAQgVgBgLgIg");
	this.shape_321.setTransform(171.425,493.25);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgPAXAAQAWAAAOAOQAPAQAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFAQgMAKQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_322.setTransform(160.075,493.25);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQAAgMgCgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHABAWIAAA8IgUAAIAAhvIARAAIAAAQQAMgSAXAAQAKAAAJADQAIAEAFAGQADAGACAIIACASIAABEg");
	this.shape_323.setTransform(148.05,493.125);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgfASgOQAOgMAUAAQAXAAAPAOQAPAPAAAcQAAAUgHANQgGAMgNAHQgMAGgPABQgXAAgOgPgAgXggQgJALAAAVQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_324.setTransform(135.975,493.25);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgJBOIAAhwIASAAIAABwgAgJg3IAAgVIASAAIAAAVg");
	this.shape_325.setTransform(127.6,491.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgNQAGgOANgHQAMgHANABQATAAALAJQAMAJADARIgSADQgDgMgHgFQgGgGgKAAQgNAAgJAKQgJAKAAAWQAAAWAIALQAJAKANAAQALAAAIgHQAHgHACgOIATADQgDATgNAKQgMAMgTAAQgWAAgOgPg");
	this.shape_326.setTransform(120.125,493.25);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgZA1QgIgDgEgGQgFgGgBgIIgBgSIAAhEIATAAIAAA9IABAUQACAHAFAFQAGAEAIAAQAIAAAHgEQAIgFADgHQADgIABgOIAAg7IATAAIAABvIgRAAIAAgRQgOATgWAAQgJAAgJgEg");
	this.shape_327.setTransform(108.3,493.375);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgJBOIAAiaIATAAIAACag");
	this.shape_328.setTransform(99.9,491.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgfASgOQAOgMAUAAQAXAAAPAOQAPAPAAAcQAAAUgHANQgGAMgNAHQgMAGgPABQgXAAgOgPgAgXggQgJALAAAVQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_329.setTransform(91.525,493.25);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgfAyQgLgKgEgRIATgEQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgHgGgDQgDgDgQgDQgUgGgIgDQgIgEgEgGQgEgHAAgJQAAgHADgGQADgGAGgFQAFgDAIgCQAHgCAJAAQAMAAAKADQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAFAAAGQAAADACADQADADAFACIAPAFQAVAGAIADQAHACAFAHQAFAGAAAKQAAAJgGAJQgGAIgKAFQgKAFgOAAQgVgBgLgIg");
	this.shape_330.setTransform(80.025,493.25);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgPAXAAQAWAAAOAOQAPAQAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFAQgMAKQgNAKgTAAQgYAAgOgPgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_331.setTransform(68.675,493.25);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgEAKAAANIAAA5g");
	this.shape_332.setTransform(59.95,493.125);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQABgMgDgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHAAAWIAAA8IgTAAIAAhvIARAAIAAAQQANgSAWAAQAKAAAJADQAIAEAFAGQADAGACAIIABASIAABEg");
	this.shape_333.setTransform(43.45,493.125);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgfASgOQAOgMAUAAQAXAAAPAOQAPAPAAAcQAAAUgHANQgGAMgNAHQgMAGgPABQgXAAgOgPgAgXggQgJALAAAVQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_334.setTransform(31.425,493.25);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgNQAGgOANgHQAMgHANABQATAAALAJQAMAJADARIgSADQgDgMgHgFQgGgGgKAAQgNAAgJAKQgJAKAAAWQAAAWAIALQAJAKANAAQALAAAIgHQAHgHACgOIATADQgDATgNAKQgMAMgTAAQgWAAgOgPg");
	this.shape_335.setTransform(20.325,493.25);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AAMAcIgFgdIAAgZIAVAAIAAAZIgFAdgAgWAcIgFgdIAAgZIAVAAIAAAZIgEAdg");
	this.shape_336.setTransform(391.575,460.65);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgwBPIAAiaIARAAIAAAOQAGgIAJgFQAHgEAKAAQAPAAAKAHQALAIAGANQAFAOABAQQAAARgHANQgFAOgNAHQgMAHgMAAQgJAAgHgEQgIgEgFgGIAAA3gAgVg0QgKAMAAAVQAAAVAJAKQAJALAMAAQAMAAAJgLQAJgLAAgVQAAgWgIgKQgKgLgLAAQgMAAgJALg");
	this.shape_337.setTransform(382.05,469.825);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg3IAAgVIASAAIAAAVg");
	this.shape_338.setTransform(373.3,465.65);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgxA4IAAgPIBHhRIgWAAIgsAAIAAgPIBaAAIAAAMIg7BGIgMAOIAYgBIAzAAIAAAQg");
	this.shape_339.setTransform(365.475,467.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_340.setTransform(357.15,472.325);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgbAPgQQAOgPAXAAQAWgBAOAPQAPAQAAAbIgBAFIhSAAQABATAJAJQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFARgMAJQgNAKgTAAQgYgBgOgPgAgUgiQgJAJgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_341.setTransform(348.025,467.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAALAGIgHARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgEAKAAANIAAA5g");
	this.shape_342.setTransform(339.3,467.675);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgZA1QgIgDgEgGQgFgGgBgIIgBgSIAAhEIATAAIAAA9IAAAUQADAHAFAFQAGAEAIAAQAIAAAHgEQAIgFADgHQADgIABgOIAAg7IATAAIAABvIgSAAIAAgRQgNATgWAAQgJAAgJgEg");
	this.shape_343.setTransform(328.8,467.925);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AAaBNIAAhHQAAgNgFgGQgHgHgLAAQgHAAgIAFQgIAEgCAIQgDAGAAANIAAA9IgUAAIAAiZIAUAAIAAA3QAMgPAUAAQANAAAJAFQAIAFAEAIQAEAJABAPIAABHg");
	this.shape_344.setTransform(316.8,465.65);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgiArQgOgPAAgcQAAgRAGgNQAGgOANgHQAMgHANABQATgBALAKQAMAJADARIgSADQgDgLgHgHQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIALQAJAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMAKgTABQgWgBgOgPg");
	this.shape_345.setTransform(305.725,467.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHANQgGAMgNAGQgMAHgPABQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_346.setTransform(293.925,467.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgdA5IAAhvIAQAAIAAARQAHgMAGgEQAFgDAGAAQAKAAAJAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgCAKAAANIAAA5g");
	this.shape_347.setTransform(285.25,467.675);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgeA+IAAAOIgSAAIAAiaIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAHQAGAIADALQAEAJAAAMQAAAdgPAQQgOAQgUAAQgTAAgLgRgAgVgLQgJALAAATQAAAUAFAJQAJAPAQAAQALAAAJgLQAJgLAAgVQAAgVgIgKQgJgLgMAAQgMAAgJALg");
	this.shape_348.setTransform(275.025,465.775);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AAMAcIgFgdIAAgZIAVAAIAAAZIgFAdgAgWAcIgFgdIAAgZIAVAAIAAAZIgEAdg");
	this.shape_349.setTransform(264.925,460.65);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHANQgGAMgNAGQgMAHgPABQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_350.setTransform(249.025,467.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgIA4IgrhvIAVAAIAYBCIAGAWIAHgUIAZhEIAUAAIgrBvg");
	this.shape_351.setTransform(237.65,467.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg3IAAgVIASAAIAAAVg");
	this.shape_352.setTransform(229.85,465.65);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AAaBNIAAhHQAAgNgFgGQgHgHgLAAQgHAAgIAFQgIAEgCAIQgDAGAAANIAAA9IgUAAIAAiZIAUAAIAAA3QAMgPAUAAQANAAAJAFQAIAFAEAIQAEAJABAPIAABHg");
	this.shape_353.setTransform(221.4,465.65);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgiArQgOgPAAgcQAAgRAGgNQAGgOANgHQAMgHANABQATgBALAKQAMAJADARIgSADQgDgLgHgHQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIALQAJAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMAKgTABQgWgBgOgPg");
	this.shape_354.setTransform(210.325,467.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AgdA5IAAhvIARAAIAAARQAGgMAGgEQAFgDAGAAQAKAAAKAGIgHARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgDAKAAANIAAA5g");
	this.shape_355.setTransform(201.85,467.675);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgpAyQgJgKAAgOQAAgIADgGQAEgHAGgFQAGgDAIgCIARgDQAVgDAMgDIAAgFQAAgMgGgFQgHgGgOAAQgNAAgHAFQgGAEgDANIgTgDQADgMAGgIQAFgHAMgEQALgDANAAQAPAAAIACQAKAEAEAFQAEAFACAIIABARIAAAZQAAAaABAHQABAIADAGIgTAAQgDgGgBgIQgLAJgKAEQgIADgMABQgSgBgKgIgAgEAHQgLACgGABQgEADgDAEQgCAEgBAFQAAAHAHAGQAFAEALAAQAKAAAJgEQAJgFADgJQADgGABgNIAAgGQgLAEgUADg");
	this.shape_356.setTransform(191.35,467.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AAbA5IAAhDQAAgMgDgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHABAWIAAA8IgTAAIAAhvIAQAAIAAAQQAMgSAXAAQAKAAAJADQAIAEAFAGQADAGADAIIABASIAABEg");
	this.shape_357.setTransform(173.35,467.675);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgZA1QgJgDgDgGQgFgGgCgIIgBgSIAAhEIATAAIAAA9IABAUQACAHAGAFQAGAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgOIAAg7IATAAIAABvIgRAAIAAgRQgNATgWAAQgJAAgJgEg");
	this.shape_358.setTransform(161.25,467.925);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQABgMgDgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHAAAWIAAA8IgTAAIAAhvIARAAIAAAQQANgSAWAAQAKAAAJADQAIAEAEAGQAFAGABAIIABASIAABEg");
	this.shape_359.setTransform(143.25,467.675);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgbAPgQQAOgPAXAAQAWgBAOAPQAPAQAAAbIgBAFIhSAAQABATAJAJQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFARgMAJQgNAKgTAAQgYgBgOgPgAgUgiQgJAJgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_360.setTransform(131.225,467.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgfAyQgLgKgEgRIATgEQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgGgGgEQgDgDgQgEQgUgFgIgDQgIgDgEgIQgEgGAAgJQAAgHADgGQADgHAGgEQAFgDAIgDQAHgBAJAAQAMgBAKAEQAKAEAFAGQAFAHABALIgSADQgCgKgGgEQgGgFgKAAQgNAAgFAEQgGAFAAAFQAAAEACADQADADAFACIAPAFQAVAGAIADQAHACAFAHQAFAHAAAJQAAAKgGAIQgGAIgKAFQgKAEgOABQgVgBgLgIg");
	this.shape_361.setTransform(113.725,467.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHANQgGAMgNAGQgMAHgPABQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_362.setTransform(102.375,467.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgHgNQgFgOAAgRQgBgRAGgMQAFgOAMgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IASAAIAACaIgRAAIAAgOQgLARgUAAQgMAAgMgIgAgTgLQgJAKAAAVQAAAWAJAKQAJALALAAQANAAAIgKQAJgKAAgVQAAgWgJgLQgIgLgNAAQgMAAgIALg");
	this.shape_363.setTransform(89.95,465.775);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgJBNIAAhuIASAAIAABugAgJg3IAAgVIASAAIAAAVg");
	this.shape_364.setTransform(81.95,465.65);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AAbA5IAAhDQAAgMgDgFQgCgGgFgEQgHgDgHAAQgLAAgJAIQgIAHAAAWIAAA8IgTAAIAAhvIARAAIAAAQQALgSAXAAQAKAAAJADQAIAEAFAGQAEAGACAIIABASIAABEg");
	this.shape_365.setTransform(73.55,467.675);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgbAPgQQAOgPAXAAQAWgBAOAPQAPAQAAAbIgBAFIhSAAQABATAJAJQAKAKANAAQAKAAAIgGQAHgFAEgMIAUADQgFARgMAJQgNAKgTAAQgYgBgOgPgAgUgiQgJAJgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_366.setTransform(61.475,467.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgCBJQgGgDgCgGQgDgEAAgSIAAg/IgNAAIAAgPIANAAIAAgcIASgLIAAAnIAUAAIAAAPIgUAAIAABAQAAAJABABQABADADACIAGABIAJgBIACARIgOACQgKAAgFgEg");
	this.shape_367.setTransform(52.625,465.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQABgMgDgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHAAAWIAAA8IgTAAIAAhvIARAAIAAAQQANgSAWAAQAKAAAJADQAIAEAFAGQADAGACAIIABASIAABEg");
	this.shape_368.setTransform(43.45,467.675);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AglArQgPgOAAgdQAAgfASgPQAOgMAUABQAXgBAPAPQAPAQAAAaQAAAVgHANQgGAMgNAGQgMAHgPABQgXgBgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_369.setTransform(31.425,467.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AgiArQgOgPAAgcQAAgRAGgNQAGgOANgHQAMgHANABQATgBALAKQAMAJADARIgSADQgDgLgHgHQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIALQAJAKANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMAKgTABQgWgBgOgPg");
	this.shape_370.setTransform(20.325,467.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AghBHQgMgJAAgSIATADQABAIAFAEQAHAGAMAAQAMAAAIgGQAHgGACgJQACgGAAgSQgNAOgRAAQgXAAgNgQQgMgRAAgWQAAgRAFgNQAGgOALgHQALgHAPAAQATAAANAQIAAgNIASAAIAABgQgBAZgFAMQgGAKgLAHQgMAGgQAAQgTAAgNgJgAgUg1QgJAKAAAVQAAAWAJAIQAJALAMAAQANAAAJgLQAIgIABgWQgBgUgIgLQgKgLgNAAQgLAAgJALg");
	this.shape_371.setTransform(289.6,444.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgwBPIAAiaIARAAIAAAOQAHgIAIgFQAHgEAKAAQAOAAAMAHQAKAIAGANQAFAOAAAQQABARgHANQgFAOgNAHQgMAHgMAAQgJAAgHgEQgIgEgFgGIAAA3gAgVg0QgKAMAAAVQAAAVAJAKQAJALAMAAQAMAAAJgLQAJgLAAgVQAAgWgIgKQgKgLgLAAQgMAAgJALg");
	this.shape_372.setTransform(278.2,444.375);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgUBiIADgQIAJACQAGAAACgEQACgEAAgQIAAh0IATAAIAAB1QAAAVgEAIQgIAKgPAAQgHAAgHgCgAAChNIAAgWIATAAIAAAWg");
	this.shape_373.setTransform(268.25,442.475);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_374.setTransform(264.15,446.875);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("Ag6BNIAAiaIA6AAQARAAALAGQALAEAGAKQAGAJAAALQAAAKgFAJQgGAJgLAFQAOAEAIAJQAIAKgBANQABALgFAKQgFAJgGAFQgIAFgJADQgLADgOgBgAglA7IAmAAIANgBQAIgBAEgCQAFgEADgFQADgGAAgIQAAgIgFgGQgEgHgIgCQgHgDgOAAIgkAAgAglgMIAhAAQANABAGgCQAHgDAFgFQADgFAAgIQABgIgEgGQgEgGgGgCQgIgCgPAAIgfAAg");
	this.shape_375.setTransform(254.1,440.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AglArQgPgPAAgcQAAgfASgPQAOgMAUAAQAXABAPAPQAPAOAAAbQAAAVgHAMQgGANgNAGQgMAIgPgBQgXAAgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_376.setTransform(234.575,442.35);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgHgNQgFgOgBgRQAAgRAGgMQAGgOALgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IASAAIAACaIgRAAIAAgOQgLARgUAAQgNAAgLgIgAgTgLQgJAKAAAVQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgKAAgVQAAgWgJgLQgIgLgNAAQgMAAgIALg");
	this.shape_377.setTransform(222.15,440.325);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgpAxQgJgJAAgOQgBgIAEgGQAEgIAGgDQAGgEAIgCIARgCQAWgDAKgEIAAgFQABgMgGgFQgHgGgOAAQgNAAgHAFQgGAEgDAMIgTgCQADgMAGgHQAGgIALgEQALgDANgBQAPAAAIADQAJAEAFAFQAEAGABAHIABASIAAAYQAAAbACAGQABAIADAGIgTAAQgDgGgBgIQgLAJgKAEQgIADgLAAQgTABgKgKgAgDAHQgNACgFACQgEACgDAEQgDAEABAFQgBAHAHAGQAFAEALAAQAKABAJgFQAJgFADgJQADgGAAgNIAAgGQgKAEgTADg");
	this.shape_378.setTransform(210.5,442.35);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgJBNIAAiaIASAAIAACag");
	this.shape_379.setTransform(202.1,440.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AglArQgPgPAAgcQAAgfASgPQAOgMAUAAQAXABAPAPQAPAOAAAbQAAAVgHAMQgGANgNAGQgMAIgPgBQgXAAgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_380.setTransform(187.675,442.35);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQABgMgDgFQgCgGgFgEQgGgDgIAAQgLAAgJAIQgJAHAAAWIAAA8IgTAAIAAhvIASAAIAAAQQAMgSAWAAQAKAAAJADQAIAEAEAGQAFAGABAIIABASIAABEg");
	this.shape_381.setTransform(175.65,442.225);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgpAxQgKgJABgOQAAgIADgGQAEgIAGgDQAGgEAIgCIAQgCQAWgDALgEIAAgFQABgMgGgFQgHgGgOAAQgNAAgGAFQgHAEgDAMIgSgCQACgMAGgHQAGgIALgEQAKgDAOgBQAOAAAJADQAJAEAFAFQAEAGABAHIABASIAAAYQAAAbACAGQABAIAEAGIgUAAQgDgGgBgIQgKAJgLAEQgIADgLAAQgTABgKgKgAgDAHQgNACgEACQgFACgDAEQgDAEABAFQAAAHAFAGQAGAEALAAQAKABAJgFQAJgFAEgJQACgGAAgNIAAgGQgKAEgTADg");
	this.shape_382.setTransform(163.6,442.35);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgEAKAAANIAAA5g");
	this.shape_383.setTransform(154.9,442.225);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgQAXAAQAWABAOAPQAPAPAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUADQgFARgMAJQgNAJgTAAQgYAAgOgPgAgUghQgJAIgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_384.setTransform(144.375,442.35);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgIA4IgqhvIAUAAIAYBCIAGAWIAHgUIAZhEIATAAIgqBvg");
	this.shape_385.setTransform(133,442.35);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgbQAAgcAPgPQAOgQAXAAQAWABAOAPQAPAPAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUADQgFARgMAJQgNAJgTAAQgYAAgOgPgAgUghQgJAIgBAPIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_386.setTransform(115.525,442.35);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgdA5IAAhvIARAAIAAARQAGgMAGgEQAEgDAHAAQAKAAAKAGIgHARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgCAKAAANIAAA5g");
	this.shape_387.setTransform(106.8,442.225);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgZA1QgIgDgFgGQgEgGgBgIIgCgSIAAhEIAUAAIAAA9IABAUQACAHAFAFQAGAEAIAAQAIAAAIgEQAHgFADgHQADgIAAgOIAAg7IAUAAIAABvIgRAAIAAgRQgOATgVAAQgKAAgJgEg");
	this.shape_388.setTransform(96.3,442.475);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AAaBNIAAhHQABgNgHgGQgFgHgMAAQgIAAgHAFQgHAEgDAHQgEAHAAANIAAA9IgTAAIAAiaIATAAIAAA4QAOgPATAAQANAAAIAEQAJAFAFAKQADAIAAAPIAABHg");
	this.shape_389.setTransform(84.3,440.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgiArQgOgOAAgcQAAgSAGgOQAGgNANgHQAMgGANgBQATAAALAJQAMAKADARIgSACQgDgLgHgGQgGgFgKAAQgNAAgJALQgJAJAAAWQAAAWAIAKQAJALANAAQALAAAIgHQAHgHACgOIATACQgDAUgNALQgMALgTgBQgWAAgOgPg");
	this.shape_390.setTransform(73.225,442.35);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AglArQgPgPAAgcQAAgfASgPQAOgMAUAAQAXABAPAPQAPAOAAAbQAAAVgHAMQgGANgNAGQgMAIgPgBQgXAAgOgPgAgXgfQgJAKAAAVQAAAWAJAKQAKALANAAQAOAAAKgLQAJgKAAgWQAAgUgJgLQgKgLgOAAQgNAAgKALg");
	this.shape_391.setTransform(61.425,442.35);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgEAKAAANIAAA5g");
	this.shape_392.setTransform(52.75,442.225);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("Ag5BNIAAiaIA5AAQARAAALAGQAKAEAHAKQAGAJAAALQAAAKgGAJQgFAJgLAFQAOAEAIAJQAHAKABANQgBALgEAKQgFAJgHAFQgGAFgLADQgKADgPgBgAglA7IAlAAIAPgBQAGgBAFgCQAFgEADgFQADgGAAgIQAAgIgFgGQgEgHgHgCQgJgDgOAAIgjAAgAglgMIAiAAQAMABAGgCQAHgDAEgFQAFgFAAgIQgBgIgDgGQgEgGgHgCQgGgCgQAAIgfAAg");
	this.shape_393.setTransform(41.3,440.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgcAKIAAgTIA5AAIAAATg");
	this.shape_394.setTransform(30.275,442.35);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgyBOQAAgHACgGQAEgLAJgKQAIgKAQgOQAZgUAJgLQAIgMAAgLQAAgLgIgIQgIgIgNAAQgMAAgJAIQgIAIAAAPIgUgCQACgWANgLQAOgMAVAAQAWAAANANQANAMAAASQAAAKgEAJQgEAIgIAJQgJAKgVASIgVATQgFAFgDAFIBLAAIAAATg");
	this.shape_395.setTransform(20.375,440.175);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AghBHQgMgJAAgSIATADQABAIAFAEQAHAFAMABQAMgBAIgFQAHgGACgJQACgFAAgTQgNAOgRAAQgXAAgNgQQgMgRAAgWQAAgRAFgNQAGgNALgIQALgHAPAAQATAAANAQIAAgOIASAAIAABhQgBAagFALQgGAKgLAHQgMAGgQAAQgTAAgNgJgAgUg1QgJAKAAAUQAAAXAJAJQAJAKAMAAQANAAAJgKQAIgKABgVQgBgVgIgKQgKgLgNAAQgLAAgJALg");
	this.shape_396.setTransform(289.6,419.05);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AgwBPIAAiaIARAAIAAAOQAHgIAIgFQAHgEAKAAQAOAAAMAHQAKAIAGANQAFAOAAAQQABARgHANQgFAOgNAHQgMAHgMAAQgJAAgHgEQgIgEgFgGIAAA3gAgVg0QgKAMAAAVQAAAVAJAKQAJALAMAAQAMAAAJgLQAJgLAAgVQAAgWgIgKQgKgLgLAAQgMAAgJALg");
	this.shape_397.setTransform(278.2,418.925);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgUBiIADgQIAJACQAGAAACgEQACgEAAgQIAAh0IATAAIAAB1QAAAVgEAIQgIAKgPAAQgHAAgHgCgAAChNIAAgWIATAAIAAAWg");
	this.shape_398.setTransform(268.25,417.025);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_399.setTransform(264.15,421.425);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AAyBNIgTgvIhAAAIgRAvIgWAAIA8iaIAVAAIA/CagAgJgfIgRAtIAzAAIgRgqIgJggQgDAPgFAOg");
	this.shape_400.setTransform(253.85,414.75);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AglAsQgPgQAAgcQAAgeASgPQAOgMAUgBQAXABAPAPQAPAPAAAbQAAAUgHAMQgGANgNAGQgMAIgPgBQgXABgOgPgAgXggQgJAMAAAUQAAAWAJAKQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_401.setTransform(234.575,416.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgHgNQgFgOgBgRQAAgRAGgMQAGgOALgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IASAAIAACaIgRAAIAAgOQgLARgUAAQgNAAgLgIgAgTgLQgJAKAAAVQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgKAAgVQAAgWgJgLQgIgLgNAAQgMAAgIALg");
	this.shape_402.setTransform(222.15,414.875);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgpAxQgJgIAAgOQgBgJAEgHQAEgHAGgDQAGgEAIgCIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgHAFQgGAEgDAMIgTgCQADgMAGgHQAGgIALgDQALgFANAAQAPAAAIAEQAJADAFAFQAEAFABAIIABASIAAAYQAAAbACAGQABAIADAGIgTAAQgDgGgBgIQgLAJgKAEQgIAEgLgBQgTABgKgKgAgDAHQgNACgFACQgEACgDAEQgDAEABAFQgBAIAHAFQAFAEALABQAKAAAJgFQAJgFADgIQADgHAAgNIAAgGQgKAEgTADg");
	this.shape_403.setTransform(210.5,416.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgJBNIAAiaIASAAIAACag");
	this.shape_404.setTransform(202.1,414.75);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AglAsQgPgQAAgcQAAgeASgPQAOgMAUgBQAXABAPAPQAPAPAAAbQAAAUgHAMQgGANgNAGQgMAIgPgBQgXABgOgPgAgXggQgJAMAAAUQAAAWAJAKQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_405.setTransform(187.675,416.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AAaA5IAAhDQABgMgDgFQgCgGgFgEQgGgDgIAAQgLAAgJAIQgJAHAAAWIAAA8IgTAAIAAhvIASAAIAAAQQAMgSAWAAQAKAAAJADQAIAEAEAGQAFAGABAIIABASIAABEg");
	this.shape_406.setTransform(175.65,416.775);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgpAxQgKgIABgOQAAgJADgHQAEgHAGgDQAGgEAIgCIAQgCQAWgDALgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgGAFQgHAEgDAMIgSgCQACgMAGgHQAGgIALgDQAKgFAOAAQAOAAAJAEQAJADAFAFQAEAFABAIIABASIAAAYQAAAbACAGQABAIAEAGIgUAAQgDgGgBgIQgKAJgLAEQgIAEgLgBQgTABgKgKgAgDAHQgNACgEACQgFACgDAEQgDAEABAFQAAAIAFAFQAGAEALABQAKAAAJgFQAJgFAEgIQACgHAAgNIAAgGQgKAEgTADg");
	this.shape_407.setTransform(163.6,416.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgEAKAAANIAAA5g");
	this.shape_408.setTransform(154.9,416.775);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAXAAQAWABAOAPQAPAPAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUACQgFARgMAKQgNAJgTAAQgYABgOgPgAgUghQgJAJgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_409.setTransform(144.375,416.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgIA4IgqhvIAUAAIAYBCIAGAWIAHgVIAZhDIATAAIgqBvg");
	this.shape_410.setTransform(133,416.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgbAPgQQAOgQAXAAQAWABAOAPQAPAPAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgFQAHgGAEgMIAUACQgFARgMAKQgNAJgTAAQgYABgOgPgAgUghQgJAJgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAJg");
	this.shape_411.setTransform(115.525,416.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AgdA5IAAhvIARAAIAAARQAGgMAGgEQAEgDAHAAQAKAAAKAGIgHARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgCAKAAANIAAA5g");
	this.shape_412.setTransform(106.8,416.775);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgZA1QgIgDgFgGQgEgGgBgIIgCgSIAAhEIAUAAIAAA9IABAUQACAHAFAFQAGAEAIAAQAIAAAIgEQAHgFADgHQADgIAAgOIAAg7IAUAAIAABvIgRAAIAAgRQgOATgVAAQgKAAgJgEg");
	this.shape_413.setTransform(96.3,417.025);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AAaBNIAAhGQABgOgHgHQgFgGgMAAQgIAAgHAFQgHAEgDAHQgEAHAAANIAAA9IgTAAIAAiaIATAAIAAA4QAOgPATAAQANAAAIAEQAJAGAFAJQADAIAAAQIAABGg");
	this.shape_414.setTransform(84.3,414.75);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgiAsQgOgQAAgbQAAgSAGgOQAGgNANgHQAMgGANgBQATABALAIQAMAKADARIgSACQgDgKgHgGQgGgGgKAAQgNAAgJAKQgJALAAAVQAAAXAIAJQAJALANAAQALAAAIgHQAHgHACgOIATADQgDASgNALQgMAMgTgBQgWABgOgPg");
	this.shape_415.setTransform(73.225,416.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AglAsQgPgQAAgcQAAgeASgPQAOgMAUgBQAXABAPAPQAPAPAAAbQAAAUgHAMQgGANgNAGQgMAIgPgBQgXABgOgPgAgXggQgJAMAAAUQAAAWAJAKQAKALANAAQAOAAAKgLQAJgLAAgVQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_416.setTransform(61.425,416.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgEAKAAANIAAA5g");
	this.shape_417.setTransform(52.75,416.775);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("Ag5BNIAAiaIA5AAQARAAALAGQAKAEAHAKQAGAKAAAKQAAAKgGAJQgFAIgLAGQAOAEAIAJQAHAKABANQgBALgEAKQgFAJgHAFQgGAFgLADQgKACgPAAgAglA7IAlAAIAPgBQAGgBAFgCQAFgEADgFQADgGAAgIQAAgIgFgGQgEgHgHgCQgJgDgOAAIgjAAgAglgMIAiAAQAMAAAGgBQAHgDAEgFQAFgFAAgIQgBgIgDgGQgEgGgHgCQgGgCgQAAIgfAAg");
	this.shape_418.setTransform(41.3,414.75);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgcAKIAAgSIA5AAIAAASg");
	this.shape_419.setTransform(30.275,416.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AAKBOIAAh4QgIAGgJAHQgLAGgKAEIAAgTQARgHALgLQALgLAFgKIANAAIAACbg");
	this.shape_420.setTransform(19.8,414.725);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgfAxQgLgIgEgTIATgDQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgHgGgDQgDgDgQgDQgUgGgIgDQgIgDgEgHQgEgHAAgJQAAgHADgGQADgGAGgFQAFgDAIgCQAHgDAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADADAFACIAPAFQAVAGAIADQAHACAFAHQAFAHAAAJQAAAJgGAJQgGAJgKAEQgKAFgOgBQgVAAgLgJg");
	this.shape_421.setTransform(371.025,391.45);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgMAGgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_422.setTransform(359.675,391.45);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgIA4IgrhvIAVAAIAYBCIAGAXIAHgWIAZhDIAUAAIgrBvg");
	this.shape_423.setTransform(348.25,391.45);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgJBOIAAhwIASAAIAABwgAgJg2IAAgXIASAAIAAAXg");
	this.shape_424.setTransform(340.45,389.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AAbBOIAAhHQAAgOgHgHQgFgGgMAAQgHAAgIAEQgHAFgEAIQgDAGAAANIAAA+IgSAAIAAibIASAAIAAA4QAOgPATAAQAMAAAJAEQAJAFAFAJQAEAJAAAQIAABHg");
	this.shape_425.setTransform(332.05,389.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgNANgHQAMgHANAAQATABALAIQAMAKADARIgSADQgDgMgHgFQgGgGgKAAQgNAAgJAKQgJALAAAVQAAAXAIAKQAJAKANAAQALAAAIgHQAHgHACgOIATADQgDASgNALQgMALgTAAQgWAAgOgOg");
	this.shape_426.setTransform(320.925,391.45);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgdA5IAAhvIARAAIAAARQAGgMAGgEQAEgDAHAAQAKAAAKAGIgHARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgCAKAAANIAAA5g");
	this.shape_427.setTransform(312.45,391.325);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AgpAxQgJgIAAgOQgBgJAEgHQAEgGAGgFQAGgCAIgDIARgCQAWgDAKgEIAAgFQABgMgGgEQgHgHgOAAQgNAAgHAFQgGAFgDAMIgTgDQADgMAGgIQAFgHAMgDQALgEANgBQAPABAIADQAJADAFAFQAEAGABAHIACARIAAAZQAAAaABAIQABAGADAHIgTAAQgDgGgBgIQgLAJgKAEQgIADgLAAQgTAAgKgJgAgEAHQgMABgFACQgEADgDAEQgCAEgBAFQAAAIAHAEQAFAGALAAQAKgBAJgEQAJgFADgIQADgHAAgMIAAgHQgKAEgUADg");
	this.shape_428.setTransform(301.95,391.45);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgfAxQgLgIgEgTIATgDQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgHgGgDQgDgDgQgDQgUgGgIgDQgIgDgEgHQgEgHAAgJQAAgHADgGQADgGAGgFQAFgDAIgCQAHgDAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADADAFACIAPAFQAVAGAIADQAHACAFAHQAFAHAAAJQAAAJgGAJQgGAJgKAEQgKAFgOgBQgVAAgLgJg");
	this.shape_429.setTransform(284.475,391.45);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgMAGgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_430.setTransform(273.125,391.45);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgHgNQgFgOAAgRQgBgRAGgMQAFgOAMgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IATAAIAACaIgSAAIAAgOQgKARgVAAQgMAAgMgIgAgTgLQgJAKAAAVQAAAWAJAKQAJALALAAQANAAAJgKQAIgKABgVQgBgWgIgLQgKgLgNAAQgLAAgIALg");
	this.shape_431.setTransform(260.7,389.425);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAOgPAXgBQAWAAAOAPQAPAQAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgFASgMAJQgNAKgTgBQgYAAgOgOgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_432.setTransform(243.025,391.45);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgYBHQgLgHgGgNQgHgOABgRQAAgRAFgMQAFgOAMgHQALgHAOAAQAJAAAIAEQAIAEAFAHIAAg4IATAAIAACaIgSAAIAAgOQgLARgUAAQgNAAgLgIgAgUgLQgIAKAAAVQAAAWAJAKQAJALALAAQANAAAJgKQAIgKABgVQgBgWgIgLQgKgLgNAAQgLAAgJALg");
	this.shape_433.setTransform(230.65,389.425);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AgpAxQgJgIAAgOQAAgJADgHQAEgGAGgFQAGgCAIgDIARgCQAVgDAMgEIAAgFQAAgMgGgEQgHgHgOAAQgNAAgHAFQgGAFgDAMIgTgDQADgMAGgIQAFgHALgDQAMgEANgBQAPABAIADQAKADAEAFQAEAGACAHIABARIAAAZQAAAaABAIQABAGADAHIgTAAQgDgGgBgIQgLAJgKAEQgIADgMAAQgSAAgKgJgAgEAHQgLABgGACQgEADgDAEQgCAEgBAFQAAAIAHAEQAFAGALAAQAKgBAJgEQAJgFADgIQADgHABgMIAAgHQgLAEgUADg");
	this.shape_434.setTransform(212.95,391.45);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AgCBJQgGgDgCgFQgDgFAAgSIAAhAIgNAAIAAgOIANAAIAAgcIASgMIAAAoIAUAAIAAAOIgUAAIAABBQAAAJABACQABACADABIAGABIAJAAIACARIgOABQgKABgFgEg");
	this.shape_435.setTransform(204.125,389.55);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgfAxQgLgIgEgTIATgDQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgHgGgDQgDgDgQgDQgUgGgIgDQgIgDgEgHQgEgHAAgJQAAgHADgGQADgGAGgFQAFgDAIgCQAHgDAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADADAFACIAPAFQAVAGAIADQAHACAFAHQAFAHAAAJQAAAJgGAJQgGAJgKAEQgKAFgOgBQgVAAgLgJg");
	this.shape_436.setTransform(195.475,391.45);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AAbA5IAAhDQAAgMgDgFQgCgGgGgEQgFgDgIAAQgLAAgJAIQgJAHABAWIAAA8IgTAAIAAhvIAQAAIAAAQQAMgSAXAAQAKAAAJADQAIAEAFAGQADAGADAIIABASIAABEg");
	this.shape_437.setTransform(184.15,391.325);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgMAGgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_438.setTransform(172.075,391.45);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgNANgHQAMgHANAAQATABALAIQAMAKADARIgSADQgDgMgHgFQgGgGgKAAQgNAAgJAKQgJALAAAVQAAAXAIAKQAJAKANAAQALAAAIgHQAHgHACgOIATADQgDASgNALQgMALgTAAQgWAAgOgOg");
	this.shape_439.setTransform(161.025,391.45);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAOgPAXgBQAWAAAOAPQAPAQAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgFASgMAJQgNAKgTgBQgYAAgOgOgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_440.setTransform(143.225,391.45);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgdA5IAAhvIAQAAIAAARQAHgMAGgEQAFgDAGAAQAKAAAJAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgDAGQgCAKAAANIAAA5g");
	this.shape_441.setTransform(134.5,391.325);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgZA1QgIgDgFgGQgEgGgBgIIgBgSIAAhEIATAAIAAA9IABAUQACAHAFAFQAGAEAIAAQAIAAAHgEQAIgFADgHQAEgIAAgOIAAg7IATAAIAABvIgRAAIAAgRQgOATgVAAQgKAAgJgEg");
	this.shape_442.setTransform(123.95,391.575);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AAbBOIAAhHQAAgOgHgHQgFgGgMAAQgHAAgIAEQgHAFgEAIQgDAGAAANIAAA+IgSAAIAAibIASAAIAAA4QAOgPATAAQAMAAAJAEQAJAFAFAJQADAJAAAQIAABHg");
	this.shape_443.setTransform(112,389.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgiAsQgOgPAAgdQAAgRAGgOQAGgNANgHQAMgHANAAQATABALAIQAMAKADARIgSADQgDgMgHgFQgGgGgKAAQgNAAgJAKQgJALAAAVQAAAXAIAKQAJAKANAAQALAAAIgHQAHgHACgOIATADQgDASgNALQgMALgTAAQgWAAgOgOg");
	this.shape_444.setTransform(100.925,391.45);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgMAGgPAAQgXAAgOgOgAgXggQgJAMAAAUQAAAVAJALQAKALANAAQAOAAAKgLQAJgKAAgWQAAgVgJgKQgKgLgOAAQgNAAgKAKg");
	this.shape_445.setTransform(89.125,391.45);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgeA5IAAhvIARAAIAAARQAHgMAGgEQAFgDAGAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgEAEQgFAEgCAGQgDAKAAANIAAA5g");
	this.shape_446.setTransform(80.4,391.325);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgeA+IAAAOIgSAAIAAiaIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAHQAGAIADALQAEAJAAAMQAAAdgPAQQgOAQgUAAQgTAAgLgRgAgVgLQgJALAAATQAAAUAFAJQAJAPAQAAQALAAAJgLQAJgLAAgVQAAgVgIgKQgJgLgMAAQgMAAgJALg");
	this.shape_447.setTransform(70.225,389.425);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgbQAAgcAPgPQAOgPAXgBQAWAAAOAPQAPAQAAAbIgBAFIhSAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgFASgMAJQgNAKgTgBQgYAAgOgOgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgLgOAAQgMAAgJAIg");
	this.shape_448.setTransform(51.875,391.45);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgCBJQgGgDgCgFQgDgFAAgSIAAhAIgNAAIAAgOIANAAIAAgcIASgMIAAAoIAUAAIAAAOIgUAAIAABBQAAAJABACQABACADABIAGABIAJAAIACARIgOABQgKABgFgEg");
	this.shape_449.setTransform(43.025,389.55);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AgfAxQgLgIgEgTIATgDQACAMAHAGQAHAGAMAAQANAAAHgGQAGgFAAgHQAAgHgGgDQgDgDgQgDQgUgGgIgDQgIgDgEgHQgEgHAAgJQAAgHADgGQADgGAGgFQAFgDAIgCQAHgDAJAAQAMAAAKAEQAKAEAFAGQAFAHABALIgSACQgCgIgGgFQgGgFgKAAQgNAAgFAEQgGAEAAAHQAAADACADQADADAFACIAPAFQAVAGAIADQAHACAFAHQAFAHAAAJQAAAJgGAJQgGAJgKAEQgKAFgOgBQgVAAgLgJg");
	this.shape_450.setTransform(34.375,391.45);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("Ag5BOIAAibIBvAAIAAATIhaAAIAAAwIBVAAIAAARIhVAAIAAA0IBeAAIAAATg");
	this.shape_451.setTransform(22.075,389.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#33FFFF").s().p("AhICpIAAlRICQAAIAAAwIhbAAIAABaIBIAAIAAAvIhIAAIAABoIBbAAIAAAwg");
	this.shape_452.setTransform(160,343.475);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#33FFFF").s().p("AAcCpIgEgPIgBgaIAAg+QAAgYgHgJQgIgJgRAAIgTAAIAACRIg1AAIAAlRIBPAAQAoAAATATQATATAAAoIAAAUQAAA1gjAOIAAABQATAFAIASQAIASAAAeIAAA7IABAYQABAJAEAIgAgcgXIAUAAQAPAAAIgIQAHgJAAgTIAAgaQAAgSgGgJQgHgIgMAAIgZAAg");
	this.shape_453.setTransform(141.425,343.475);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#33FFFF").s().p("Ag6CWQgUgWAAgpIAAkCIA1AAIAAEFQAAASAHAIQAHAHAMAAQANAAAHgHQAHgIAAgSIAAkFIAzAAIAAECQAAApgUAWQgUAVgnAAQgmAAgUgVg");
	this.shape_454.setTransform(121.525,343.7);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#33FFFF").s().p("AAcCpIAAiYIg4AAIAACYIg1AAIAAlRIA1AAIAACKIA4AAIAAiKIA2AAIAAFRg");
	this.shape_455.setTransform(101.675,343.475);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#33FFFF").s().p("Ag5CZQgUgWAAgoIAAi0QAAgoAUgWQAUgWAlAAQAmAAAUAWQAUAWAAAoIAAAjIgyAAIAAgnQAAgggaABQgagBAAAgIAAC8QAAAfAaAAQAaAAAAgfIAAg0IAyAAIAAAwQAAAogUAWQgUAVgmAAQglAAgUgVg");
	this.shape_456.setTransform(82.475,343.45);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#33FFFF").s().p("Ag7CYQgVgWAAgpIAAixQAAgpAVgVQAVgXAmAAQAnAAAVAXQAVAVAAApIAACxQAAApgVAWQgVAWgnAAQgmAAgVgWgAgbhbIAAC4QAAAhAbAAQAbAAAAghIAAi4QAAgigbABQgbgBAAAig");
	this.shape_457.setTransform(63.325,343.45);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#33FFFF").s().p("AAcCpIgEgPIgBgaIAAg+QAAgYgHgJQgIgJgRAAIgTAAIAACRIg1AAIAAlRIBPAAQAoAAATATQATATAAAoIAAAUQAAA1gjAOIAAABQATAFAIASQAIASAAAeIAAA7IABAYQABAJAEAIgAgcgXIAUAAQAPAAAIgIQAHgJAAgTIAAgaQAAgSgGgJQgHgIgMAAIgZAAg");
	this.shape_458.setTransform(44.325,343.475);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#33FFFF").s().p("AhRCpIAAlRIBQAAQAoAAATATQATATAAAoIAAANQAAAagIARQgJAQgRAHIAAABQAnANAAA5IAAAdQAAAngUAVQgVAUgoAAgAgcB5IAdAAQAPAAAGgIQAHgHAAgSIAAgeQAAgXgIgJQgIgJgRAAIgYAAgAgcgeIAVAAQAPAAAIgJQAIgIAAgTIAAgTQgBgSgGgJQgHgIgMAAIgaAAg");
	this.shape_459.setTransform(24.8,343.475);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#33FFFF").s().p("AhJDAQgagcAAg0IAAjgQAAgzAagcQAZgcAwAAQAxAAAaAcQAZAcAAAzIAAAlIhAAAIAAgpQABgqgjAAQgiAAAAAqIAADpQAAAqAiAAQAiAAAAgqIAAhTIghAAIAAg9IBhAAIAACLQAAA0gZAcQgaAcgxAAQgwAAgZgcg");
	this.shape_460.setTransform(925.9,89.675);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#33FFFF").s().p("AAlDWIhRk3IAAAAIAAE3Ig9AAIAAmrIBVAAIBBD/IAAAAIAAj/IA9AAIAAGrg");
	this.shape_461.setTransform(900.85,89.65);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#33FFFF").s().p("AggDWIAAmrIBBAAIAAGrg");
	this.shape_462.setTransform(881.9,89.65);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#33FFFF").s().p("AghDWIAAltIhGAAIAAg+IDPAAIAAA+IhHAAIAAFtg");
	this.shape_463.setTransform(864.925,89.65);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#33FFFF").s().p("AhaDWIAAmrIC1AAIAAA+IhzAAIAABwIBcAAIAAA8IhcAAIAACEIBzAAIAAA9g");
	this.shape_464.setTransform(843.25,89.65);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#33FFFF").s().p("AAoDWIg4i/IgbA2IAACJIhCAAIAAmrIBCAAIAAC1IBWi1IBCAAIhQCdIBREOg");
	this.shape_465.setTransform(819.85,89.65);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#33FFFF").s().p("AAkDWQgFgKgBgKIgBggIAAhOQAAgegJgMQgKgLgWAAIgXAAIAAC3IhEAAIAAmrIBkAAQAzAAAYAZQAYAXAAAzIAAAaQAABDgsARIAAABQAYAHAKAXQALAWAAAmIAABLIABAeQABALAEALgAgjgeIAYAAQAUABAKgLQAKgKgBgZIAAggQABgYgJgKQgIgKgRAAIgeAAg");
	this.shape_466.setTransform(794.55,89.65);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#33FFFF").s().p("AAwDWIgMhVIAAABIhMAAIgMBUIg+AAIBGmrIBZAAIBGGrgAggBJIA8AAIgdjTIgBAAg");
	this.shape_467.setTransform(769.45,89.65);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#33FFFF").s().p("ABMDWIAAlDIgBAAIgxFDIg3AAIgxlDIgBAAIAAFDIg7AAIAAmrIBgAAIAqEyIABAAIAqkyIBgAAIAAGrg");
	this.shape_468.setTransform(740.775,89.65);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#33FFFF").s().p("AhbDWIAAmrIC3AAIAAA9IhzAAIAAByIBbAAIAAA8IhbAAIAACDIBzAAIAAA9g");
	this.shape_469.setTransform(922.15,34.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#33FFFF").s().p("AhlDWIAAmrIBmAAQAyAAAZAbQAaAbAAA0IAADXQAAA0gaAbQgZAbgyAAgAghCZIAhAAQARAAAIgKQAJgKAAgVIAAjeQAAgWgJgKQgIgKgRAAIghAAg");
	this.shape_470.setTransform(898.3,34.8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#33FFFF").s().p("AghDWIAAluIhGAAIAAg9IDPAAIAAA9IhHAAIAAFug");
	this.shape_471.setTransform(864.775,34.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#33FFFF").s().p("AghDWIAAmrIBDAAIAAGrg");
	this.shape_472.setTransform(847.75,34.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#33FFFF").s().p("AApDWIg4i+IgbA2IAACIIhEAAIAAmrIBEAAIAAC0IBUi0IBEAAIhQCeIBRENg");
	this.shape_473.setTransform(830.15,34.8);

	this.instance_1 = new lib.Bitmap28();
	this.instance_1.setTransform(-10,0,0.9812,0.9812);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#651C7C").ss(1,1,1,3,true).p("EhCyAgVMCFlAAAEhCyggUMCFlAAA");
	this.shape_474.setTransform(470.65,1093.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_474},{t:this.instance_1},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.instance},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.bt1},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.bt3},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.bt5},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.bt6},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.bt7},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.bt8},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.bt9},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.bt4},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.bt2},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance_2 = new lib.Bitmap1();
	this.instance_2.setTransform(373,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_2
	this.instance_3 = new lib.Bitmap2();
	this.instance_3.setTransform(-72,1786);

	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.setTransform(470.25,152.65,0.9437,0.9437,0,0,0,0,0.1);

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(372.85,161.2,0.788,0.788,0,0,0,0.1,0.1);

	this.instance_6 = new lib.Tween8("synched",0);
	this.instance_6.setTransform(428.1,137.6,0.9358,0.9358,0,0,0,0.2,0.2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#4B1178").s().p("EhVMCTgMAAAkm+MCqZAAAMAAAEm+g");
	this.shape_475.setTransform(472.825,877.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_475},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(402.6,1183.8,644.4,1304.8);
// library properties:
lib.properties = {
	id: '4F48ABFCE8C8354E8FFC6D220CC68459',
	width: 950,
	height: 2500,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1683596499597", id:"index_atlas_1"}
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
an.compositions['4F48ABFCE8C8354E8FFC6D220CC68459'] = {
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