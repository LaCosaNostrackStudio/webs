(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"body_atlas_P_1", frames: [[0,0,562,500],[776,473,121,270],[0,502,184,154],[564,473,210,194],[186,502,113,201],[564,228,207,207],[773,228,176,243],[899,473,112,212],[564,0,226,226],[792,0,226,226]]},
		{name:"body_atlas_NP_1", frames: [[0,0,310,551],[0,553,310,551],[0,1106,310,551],[312,0,310,551],[312,553,310,551],[312,1106,310,551],[624,0,310,551],[624,553,310,551],[624,1106,310,551]]}
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



(lib.babyshark_00217 = function() {
	this.initialize(ss["body_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blanca_00709 = function() {
	this.initialize(ss["body_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cocomelo_00276 = function() {
	this.initialize(ss["body_atlas_NP_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.insu1_00775 = function() {
	this.initialize(ss["body_atlas_NP_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jurasic1_00782 = function() {
	this.initialize(ss["body_atlas_NP_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo_00158 = function() {
	this.initialize(ss["body_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits10 = function() {
	this.initialize(ss["body_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.initialize(ss["body_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.initialize(ss["body_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.initialize(ss["body_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.initialize(ss["body_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.initialize(ss["body_atlas_P_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits7 = function() {
	this.initialize(ss["body_atlas_P_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits8 = function() {
	this.initialize(ss["body_atlas_P_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits9 = function() {
	this.initialize(ss["body_atlas_P_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mario_00217 = function() {
	this.initialize(ss["body_atlas_NP_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.paw_00729 = function() {
	this.initialize(ss["body_atlas_NP_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sonic_00355 = function() {
	this.initialize(ss["body_atlas_NP_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.spd_00516 = function() {
	this.initialize(ss["body_atlas_NP_1"]);
	this.gotoAndStop(8);
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAnYAAAAADAAADgBYADgBAEgCAFgCYAKgFAKgIAJgKYAJgJAHgLAEgKYACgFACgEABgEYAAgDABgCAAAAIAAAAYAAAAgDAAgDABYgDABgEACgFACYgKAFgKAIgJAKYgJAJgHALgEAKYgCAFgCAEgBAEYAAADgBACAAAAIAAAA");
	this.shape.setTransform(3.65,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(0,0,7.4,7.9), null);


(lib.Símbolo7 = function(mode,startPosition,loop,reversed) {
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
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["body_atlas_P_1"],0);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(1,0,0,1,-281,-250)).s().p("EAalAnEQJkkHF2oeIgGj4QhpjbhHjrQlFiUlrgnQqSg/p3BXQgTAAgTADQiAAUhkBYQhqA1h5gBQjYgDjUgLIghgaQgdAEgagHQgagHgDgWQgigCgdgTQgcgSghgGQgMgRgQgKQhHg0haABIgHgHQhGg2hcgeIgZAAIAAAGQAAAZgJAYQgBADgKAAQgagNgegUQhmhEh6gkIgagmQkchQkqgbQlNgekLB1IghAUQgxA2gXBFQhkCHgtClQgSBGgQBJMAAAg5HMBXzAAAMAAABOHg")
	}.bind(this);
	this.shape.setTransform(281,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(0,0,562,500), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("EgYNArDMAAAhWFMAwbAAAMAAABWFg");
	this.shape.setTransform(155,275.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,310,551), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvGPHQmSmNAAo6QAAo0GSmSQGSmSI0AAQI1AFGSGRQGNGOAEI0QABI1mSGSQmSGSo1gBQo0ABmSmSgAsnsnQlMFNgBHaQABHaFMFOQFNFMHaABQHagBFJlMQFNlOAFnaQgBnVlMlSQlOlMnagBQnaABlNFMgAkoHoQg2gyAAhOIAArLQAAgyAgg2QAthBBKgOQBNgNA7AuIICFoQATAJAbAlQApBAgOBHQgNBKg8ApIoCFoQguAgg7AAQhJAAg3g3g");
	this.shape.setTransform(136.85,136.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,273.7,273.7), null);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Símbolo6();
	this.instance.setTransform(155,275.5,1,1,0,0,0,155,275.5);
	this.instance.alpha = 0.0117;

	this.instance_1 = new lib.Símbolo4();
	this.instance_1.setTransform(147.55,270.6,0.5619,0.5619,0,0,0,136.8,137);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgYNgrCMAwbAAAMAAABWFMgwbAAAg");
	this.shape.setTransform(155,275.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(-1,-1,312,553), null);


// stage content:
(lib.body = function(mode,startPosition,loop,reversed) {
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
		this.b1.addEventListener("click", function() {
		  window.open("catalogo/1.mp4", "_blank");
		});
		
		this.b2.addEventListener("click", function() {
		  window.open("catalogo/2.mp4", "_blank");
		});
		
		this.b3.addEventListener("click", function() {
		  window.open("catalogo/3.mp4", "_blank");
		});
		
		this.b4.addEventListener("click", function() {
		  window.open("catalogo/4.mp4", "_blank");
		});
		
		this.b5.addEventListener("click", function() {
		  window.open("catalogo/5.mp4", "_blank");
		});
		
		this.b6.addEventListener("click", function() {
		  window.open("catalogo/6.mp4", "_blank");
		});
		
		this.b7.addEventListener("click", function() {
		  window.open("catalogo/7.mp4", "_blank");
		});
		
		this.b8.addEventListener("click", function() {
		  window.open("catalogo/8.mp4", "_blank");
		});
		
		this.b9.addEventListener("click", function() {
		  window.open("catalogo/9.mp4", "_blank");
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_3
	this.instance = new lib.Mapadebits10();
	this.instance.setTransform(724,1576);

	this.instance_1 = new lib.Mapadebits9();
	this.instance_1.setTransform(289,1586);

	this.instance_2 = new lib.Mapadebits8();
	this.instance_2.setTransform(-48,1573);

	this.instance_3 = new lib.Mapadebits7();
	this.instance_3.setTransform(729,901);

	this.instance_4 = new lib.Mapadebits6();
	this.instance_4.setTransform(353,885);

	this.instance_5 = new lib.Mapadebits5();
	this.instance_5.setTransform(0,867);

	this.instance_6 = new lib.Mapadebits4();
	this.instance_6.setTransform(729,211);

	this.instance_7 = new lib.Mapadebits3();
	this.instance_7.setTransform(319,191);

	this.instance_8 = new lib.Mapadebits2();
	this.instance_8.setTransform(16,227);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa_2
	this.b9 = new lib.Símbolo5();
	this.b9.name = "b9";
	this.b9.setTransform(883.9,1979.4,1,1,0,0,0,155,275.5);

	this.b8 = new lib.Símbolo5();
	this.b8.name = "b8";
	this.b8.setTransform(530.7,1979.4,1,1,0,0,0,155,275.5);

	this.b7 = new lib.Símbolo5();
	this.b7.name = "b7";
	this.b7.setTransform(172.5,1979.4,1,1,0,0,0,155,275.5);

	this.b6 = new lib.Símbolo5();
	this.b6.name = "b6";
	this.b6.setTransform(883.9,1288.15,1,1,0,0,0,155,275.5);

	this.b5 = new lib.Símbolo5();
	this.b5.name = "b5";
	this.b5.setTransform(530.7,1288.15,1,1,0,0,0,155,275.5);

	this.b4 = new lib.Símbolo5();
	this.b4.name = "b4";
	this.b4.setTransform(172.5,1288.15,1,1,0,0,0,155,275.5);

	this.b3 = new lib.Símbolo5();
	this.b3.name = "b3";
	this.b3.setTransform(883.9,586.9,1,1,0,0,0,155,275.5);

	this.b2 = new lib.Símbolo5();
	this.b2.name = "b2";
	this.b2.setTransform(530.7,586.9,1,1,0,0,0,155,275.5);

	this.b1 = new lib.Símbolo5();
	this.b1.name = "b1";
	this.b1.setTransform(172.5,586.9,1,1,0,0,0,155,275.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5},{t:this.b6},{t:this.b7},{t:this.b8},{t:this.b9}]}).wait(1));

	// _127266_multimedia_music_play_player_song_icon_svg
	this.instance_9 = new lib.Símbolo9();
	this.instance_9.setTransform(622.7,110.2,1,1,0,0,0,3.6,3.9);

	this.instance_10 = new lib.Símbolo7();
	this.instance_10.setTransform(148.2,155.15,0.6774,0.6774,0,0,0,280.9,249.9);

	this.instance_11 = new lib.mario_00217();
	this.instance_11.setTransform(729,1704);

	this.instance_12 = new lib.jurasic1_00782();
	this.instance_12.setTransform(376,1704);

	this.instance_13 = new lib.insu1_00775();
	this.instance_13.setTransform(18,1704);

	this.instance_14 = new lib.cocomelo_00276();
	this.instance_14.setTransform(729,1013);

	this.instance_15 = new lib.blanca_00709();
	this.instance_15.setTransform(376,1013);

	this.instance_16 = new lib.babyshark_00217();
	this.instance_16.setTransform(19,1013);

	this.instance_17 = new lib.sonic_00355();
	this.instance_17.setTransform(729,311);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiPCaQgKgDgFgJQgNgfgHgjQgGgigBgjQgCgiACgjQACgjAGgiQACgJAIgGQAIgFALgDQAKgCAIAAQAHAAAKADQAJADAHAGQAIAGgBAJQgEAhgDAhQgCAgAAAgIABAfQAFgSAHgQQAGgSAIgRIANgfQAHgRALgPQAKgPAOgJQAOgJASACQAVACANANQANANAIATQAHASACAUQADAUAAASQgBASgCAVIgFAnIgDAWIgEAVIAAAFIAAAFIADgCIAEgDIAIgHIAIgJIALgSIALgUQAWgsAcgnQAEgFAHAAQAHgBAEAEQAFADgEAGQgbAngWAqIgRAgQgJAQgOAMQgGAGgHAEQgHAFgHADIgOAEIgEABIgDAAIgKACIgGABQgHABgGgCQgHgBgFgEQgGgDgEgEQgIgIgEgIQgEgJgCgKQgEgVAEgVQADgWAFgUIAJgoIAIgoIADgVIADgVIAAgFQABgEgBgBQgDgCgFADIgGAFQgNANgJAUIgQAlQgQAlgMAoIgZBQIAAABIAAAHQgBAKgIAGQgIAHgLABIgHABQgHAAgGgDg");
	this.shape.setTransform(649.9194,132.5792);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhkCQQgRgKgNgQQgNgQgGgUQgLgdABggQAAgfALgdQADgKAIgGQAIgFAKgDQgCgIAAgJQAAgJACgJQAGgbAUgOQATgOAcAAQAbABAUANQAVANAMAYQALAXAEAYQAEAZAAAZQAWgEAWgGQAWgHAVgJQAEgBAFAAQAGAAADAEQADADgBAEQgBAEgFACQgXAJgaAHQgaAIgbAFQgCAXgGAXQgFAWgNAVQgPAWgWAOQgXAOgbABQgVAAgSgKgAhGAeQgBAOABAQQABAKADAJQACAKAFAKIAGAKQAFAGAEABQAHABAIgIIAMgMIAKgOIAIgPIAKgZQAFgNADgNQgWABgWgEQgVgEgUgKQgDAPgBAPgAg7iDQgOADgHALQgHAMgCAOQgCAPADAMIAAABQAKADAJAGQAIAGAAALIgCALIAQAJIAQAGQANAFAOACQAMABAOAAIAAgIQABgTgEgVQgEgWgJgUQgJgTgPgLQgMgJgRAAIgMABg");
	this.shape_1.setTransform(618.7739,133.4741);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwDMQgbgDgPgPQgQgQgHgWQgIgWgCgXQgCgSABgSIACgkIADgnQABgUAEgUQACgJAIgGQAIgFALgDQAKgCAIAAQANAAAMAGQANAHACAOQADAfgEAdIgIA9IgDAdIgBAdIAAAVQABALAGAIQAKAMAPgIQAOgIASgUQARgUAQgYQAQgYALgUQALgTADgHQADgGAIgBQAHgBAGACQAFADgCAGQgOAfgTAdQgSAegWAaQgTAYgZAOQgVAMgaAAIgJAAgAhNhoIgFgBIgDgCIgDgEQgJgJgHgLQgHgLgEgMQgEgJgCgNQgDgNAHgIQAJgIALAEQAKADAGAJQAFAGADAIIAJgLQAIgIALgGQAMgGAMAEQALAFgCANQgDAOgKAQQgLAPgLANIgQASQgDADgEAAIgEABIgDAAg");
	this.shape_2.setTransform(594.6619,127.0592);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhzCRQgVgVgIgdQgJgcABgfQAAgfAEgaQAEgbAMgaQAMgbATgVQATgWAZgLQATgIAVgBQAUgBASAKQAQAJAGAQQAHAPACASQABAGgHADQgHADgHgCQgHgCgCgGQgCgJgDgJQgDgKgHgGQgGgEgDABQgEABgEAGQgKANgIAOQgHAPgEAPQgMAkgEAjQgFAlACAlIABAVQAAALAEALQADALAJAEQAKAEAMgGQANgHAKgKIASgQQAegdAagjIAyhEQADgEAHAAQAHgBAEADQAFADgEAGQgaAogdAoQgdAoglAfQgUARgZALQgaAMgaAAQgbgBgVgUg");
	this.shape_3.setTransform(570.7125,133.3955);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmCSQgYgJgMgUQgLgUgFgYQgFgYgBgWIAAgHIgIAkQgFASgHARQgHARgLAMQgMAMgRAGQgTAIgTgCQgTgBgPgQQgSgVgHgcQgHgbABgdQABgdAFgZQAFgfAQgYQARgZAZgOQAZgPAgABQAOABAOADQANAEANAGQAGgMANgFQANgGAQAAQAQABAMAHQAMAHABAOQACAegEAeIgFA7IgEA2QgBAcADAbIABAIIABAIQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAEgCIAFgCIAFgEQAKgIAIgMIANgWQAOgYALgaIAXgxQADgFAHgCQAHgBAFACQAFACgBAHQgLAegOAfQgOAfgRAcQgIANgKAMQgKAKgOAHQgMAFgPABQgPAAgNgEgAg+hgQgIACgGALQgJAPgFASQgFASgDASQgDARgBASIgBAlIAAAUIADAUIABAGIACAGIACADIACADIADgCIAIgGIAGgIQAGgIAEgKIAHgUQAKgkAIgiIAShHIgJgIIgLgHQgIgDgFAAIgGABg");
	this.shape_4.setTransform(540.4861,132.3231);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABEwQgUgCgRgOQgRgNgKgSQgXgogHgtQgIgugBgsQgDgkADgkQABgjADgkIADghIhWADQgJAAgEgFQgDgFACgFQAEgFAJAAIBagDQAEgnAMglQALglAXgfIAJgLIALgKIAIgGIAIgFIABAAIAFgDQALgGANgDQANgCAOAAQAPABANAGQANAHAIAMQAKARAAATQAAATgDASQgKArgOAqIBjgEQAJAAAEAFQADAFgCAFQgDAFgKABIhqADQgMAfgMAdQgOAggPAdIgfA7IAAAEIgBAoIACAoIACAlQACATADASQADALAFALQAFAMAJAHQAJAFAKgFQAJgFAJgJIANgPQAXgdARghQAQghALgjQABgFAIgCQAGgBAGADQAFACgBAGQgNAugXAoQgKAUgNATQgNATgQAPQgQANgUAGQgOAEgOAAIgMgBgAADhhIAAAEIAAADIgBADIgCAhIgFBHQAQgfAOgiIAUgzIgqACgAA5kQIgCAAIABAAIgDACIgBAAIgBABIgCACIgCABIgIAMIgBACIgDAIIgHASIgFASQgFAVgEAWIgHArIAAABIAAAAIAAADIAsgBQAHgWAGgWQAGgVAEgWIAEgYQACgOgFgLQgDgMgMgFIgCAAIgBAAgAgJkfIACgCIABgBIAAAAIgBABIgCACgAgHkhIAAAAgAgGkiIAAAAIgBABIABgBg");
	this.shape_5.setTransform(509,117.9326);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwDMQgbgDgPgPQgQgQgHgWQgIgWgCgXQgCgSABgSIACgkIADgnQABgUAEgUQACgJAIgGQAIgFALgDQAKgCAIAAQANAAAMAGQANAHACAOQADAfgEAdIgIA9IgDAdIgBAdIAAAVQABALAGAIQAKAMAPgIQAOgIASgUQARgUAQgYQAQgYALgUQALgTADgHQADgGAIgBQAHgBAGACQAFADgCAGQgOAfgTAdQgSAegWAaQgTAYgZAOQgVAMgaAAIgJAAgAhNhoIgFgBIgDgCIgDgEQgJgJgHgLQgHgLgEgMQgEgJgCgNQgDgNAHgIQAJgIALAEQAKADAGAJQAFAGADAIIAJgLQAIgIALgGQAMgGAMAEQALAFgCANQgDAOgKAQQgLAPgLANIgQASQgDADgEAAIgEABIgDAAg");
	this.shape_6.setTransform(489.0119,127.0592);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhICnQgRgFgPgLQgPgLgLgOQgRgXgKgcQgKgbgGgcQgGgcgDgdQgDgdAAgdQABgQANgKQANgJASgBQASgBAOAHQAOAHACAQIAGBbQAEAtALAsIAGATQADAJAFAJIAGAOQAFAHAFADQAFACACgCIAFgFIAFgHIAFgHIALgSIAIgSQAMgaAKgbQAKgaAHgbQgSgKgNgRQgLgRgCgYQgBgOAEgQQADgPAKgMQAJgNAOgFQAQgGAKAGQAKAGAGAMQAFAMABAOQAAAWgEAXQgDAWgGAWQAZAKAbACQAcABAXgEQAHAAAEAEQADAEgBAEQgBAFgHACQgZAEgegBQgegBgdgJQgGAagKAbQgKAagMAaIgOAdQgJAPgKALQgMALgQAGQgKADgKAAQgIAAgIgCgAAqiSQgGADgDAGQgEAGgDAIIgDAMQgCAKABAKQABAKAEAJQADAIAFAGIALAMIAFgbIACgQQABgMAAgOQABgPgDgJQgCgHgFAAIgDAAg");
	this.shape_7.setTransform(461.9111,131.9139);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiPCaQgKgDgFgJQgNgfgHgjQgGgigBgjQgCgiACgjQACgjAGgiQACgJAIgGQAIgFALgDQAKgCAIAAQAHAAAKADQAJADAHAGQAIAGgBAJQgEAhgDAhQgCAgAAAgIABAfQAFgSAHgQQAGgSAIgRIANgfQAHgRALgPQAKgPAOgJQAOgJASACQAVACANANQANANAIATQAHASACAUQADAUAAASQgBASgCAVIgFAnIgDAWIgEAVIAAAFIAAAFIADgCIAEgDIAIgHIAIgJIALgSIALgUQAWgsAcgnQAEgFAHAAQAHgBAEAEQAFADgEAGQgbAngWAqIgRAgQgJAQgOAMQgGAGgHAEQgHAFgHADIgOAEIgEABIgDAAIgKACIgGABQgHABgGgCQgHgBgFgEQgGgDgEgEQgIgIgEgIQgEgJgCgKQgEgVAEgVQADgWAFgUIAJgoIAIgoIADgVIADgVIAAgFQABgEgBgBQgDgCgFADIgGAFQgNANgJAUIgQAlQgQAlgMAoIgZBQIAAABIAAAHQgBAKgIAGQgIAHgLABIgHABQgHAAgGgDg");
	this.shape_8.setTransform(428.0694,132.5792);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah7GxIgDgDIgCgFQACgKALgGQAKgGAOgDIAWgFIAagGIAagFIgEgUIgDgTIgHguIgHgtQgLhSgIhSQgIhSgFhRQgEhLgChLQgChLADhLQgVACgWAFQgVAEgUAHQgIAEgLgBQgKgBgFgJQgDgGADgFQAEgFAFgDQAGgCAGAAIAxgGIAxgHIABgEQABgRANgIQANgIAPgBQAJgBAKACQALADAHAHQAIAGABAKIAAAEQA7gBA7AFQAFAAAEAEQAEADgBAFQgCAGgGACQgGACgFgBQg3gEg4ACIABBMIABBLIAGCeQADBOAGBOIAHBPIAGBPIAEAmIADAmIADArIAAAMIAqgDQAUgBAVABQAVAAAVADQAMADADAHQACAHgFAGQgFAHgLAAIg9ABQgegBgeACQgCAHgIAGQgIAFgJACQgKABgJgDIgIgFIgGgFIggAFIggAHIgKACIgJACIgHACQgFACAAgBQgGADgFAAQgGAAgGgDg");
	this.shape_9.setTransform(396.8848,123.9357);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AApCXQgQgJgHgNQgIgNgEgRIgGgdIgEgeQgEAVgJAYQgIAYgPAUQgPATgXAHQgVAFgTgHQgUgHgPgOQgPgPgIgSQgJgSgEgUQgFgVgBgWIgCgrIABgsIADgsQADgRAMgIQANgIAQgCQAJgBALADQALADAJAGQAIAHAAAKQgCAngDAnQgDAmAAAmQAAAQACAQQABAQAFAPIAEAMQADAFAEAFQAFAFAEACQAFACAFgGQAWgYAJggQAKggAEgfIANhLIAHgnIABgHIACgGQADgQALgIQAMgIAQgCQAJgBALADQALADAIAGQAIAHABAKQAAAngDAmIgDBNIAAAkIAAAkIABAPIABAOIACAKIAJgHIAGgHIAGgIIAFgIIAMgUIALgVIATgrIARgrQADgFAHgBQAHgCAGADQAGACgCAHQgKAggOAhQgOAggSAfQgIANgLANQgLAMgPAGQgOAFgOAAQgPgBgMgHg");
	this.shape_10.setTransform(334.765,132.4875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxGWQgLgDgGgJQgKgUgEgYQgEgXgDgWIgFgtIgEguIgGhZIgBhaQgChYAFhZQAEhYANhYIgdAHQgqAKgrAHQgqAHgqADQglAEgmgFQglgFgfgWQgHgGADgGQAEgFAIgCQAIgDAGAFQAZASAeAFQAfAFAfgDQAfgDAdgEQAngGAmgIIBMgSQAIgGALgCQALgDAIAAIAFABIBLgTIBNgRQArgIAsgFQArgEAsABQAaABAZAGQAZAHAVAOQAVAOAOAWQADAHgFAEQgGADgIAAQgJAAgEgGQgSgcgdgLQgdgMghAAQghgBgeADQg5AFg5AMQg5AMg4AOIADAGIABAHIgICzQgEBZgCBZIAABYIABBZIABAuIABAtQABAWgBAYQAAAYgGAVQgEALgLAEQgGACgHAAIgJgBg");
	this.shape_11.setTransform(306.0473,123.593);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4CgQgkgNgWgYQgWgYgBgfQAAgcAQgaQARgZAigSQAhgRAyAAIALAAQAIAAAEgCQAEgDAAgDQAAgFgHgGQgGgHgKgFQgKgEgIgCIgzgHQgRgCgFgJIgEgIIgBgJQABgRAJgOQAJgOAMgEQALgDAKgBQAKgCALABQAdAAAcAKQAbAKAVAUQAUATAIAbQAGAWADAZQACAYAAAYQAAAfgDAfQgDAegFAbQgCAPgQAKQgPAKgXAGQgYAEgZAAQgqAAgkgNgAgKAQQgRAFgLAMQgMAJgBAMQAAAMALAHQAKAJAQAFQAOAFAPgBQAKAAAIgCQAHgBAEgIQADgIAAgRQAAgJgCgKQgBgLgFgHQgEgHgJgBIgGgBQgPAAgPAHg");
	this.shape_12.setTransform(930.7792,131.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABkDTQgJgDgIgFQgGgFgCgEQgCgDgEgCQgEgBgMAAIgUABIgKAAIgKABIgUAAQg0AAgkgQQgjgQgSgaQgSgaAAgeQAAgaAPgZQAPgYAfgSQAUgLATgEQATgEASAAQAVAAARADQATADAPAAIAHgBIAGAAQAEgBABgFIABgLIgDgfIgFgmQgDgVAAgTQAAgRAIgMQAJgNANgHQANgHAPAAQAOAAANAHQAOAHAIAQQAFAKACALQACAKgBAUIABAbQAAAmgCAmIgBBEIgCBNQgCAngEAfQgCAMgLAIQgLAHgQABQgIAAgIgDgAgvAqQgOANAAARQAAAPAOAMQAOALAfABQAXAAASgKQASgJABgQQAAgIgGgJQgFgJgKgIIgIgGIgEgCIgLgDIgLgCIgJgBQgaABgPANg");
	this.shape_13.setTransform(896.275,127.0234);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag4CgQgkgNgWgYQgWgYgBgfQAAgcAQgaQARgZAigSQAhgRAyAAIALAAQAIAAAEgCQAEgDAAgDQAAgFgHgGQgGgHgKgFQgKgEgIgCIgzgHQgRgCgFgJIgEgIIgBgJQABgRAJgOQAJgOAMgEQALgDAKgBIAVgBQAdAAAcAKQAbAKAVAUQAUATAIAbQAGAWADAZQACAYAAAYQAAAfgDAfQgDAegFAbQgCAPgQAKQgPAKgXAGQgYAEgZAAQgqAAgkgNgAgKAQQgRAFgLAMQgMAJgBAMQAAAMALAHQAKAJAQAFQAOAFAPgBQAKAAAIgCQAHgBAEgIQADgIAAgRQAAgJgCgKQgBgLgFgHQgEgHgJgBIgGgBQgPAAgPAHg");
	this.shape_14.setTransform(862.6292,131.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AkHCZQgOgNgEgdIgEgvIgEhAIgDhCIgCgxQABgVAPgOQAPgPAYAAQAQAAANAJQANAKAHAVQADAGADAFQAEAEAEAAIADgBIATgKIAWgIQAPgFANgBIAZgBIAPABQANACATAJQATAIAOATIABABIACgBIADgCQAOgKAWgLQAVgLAbgGIAZgEIAbgBQAdAAAcAHQAbAIAUAQQAQAOALAYQAKAYAGAeQAFAdAAAfQAAAigGAeQgHAdgMASQgFAHgLADQgLAEgMAAQgPAAgNgFQgNgEgHgKIgCgJIgBgMIAEguQADgaAAgcQABgWgFgSQgFgTgNgMQgMgMgYAAQgKAAgNADQgMACgQAGQgTAHgGAJQgGAJAAALIACAeQACASAAAeQABAPgCAPQgCAQgEAMQgHAQgMAIQgNAHgNgBQgUAAgQgIQgQgJgDgKQgDgGAAgKQABgSADgaQADgZAAgcQABgVgEgQQgDgRgOgJQgOgIgegBQgpACgTAVQgSAUAAAdIABAIIABAJIAJAyQAEAVABASQgBAPgIAKQgIAKgNAEQgMAFgMAAQgRAAgOgNg");
	this.shape_15.setTransform(816.275,131.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTDRQgMgEgGgKIgJghIgKgzQgGgdgDgdQgEgeAAgZIAAgRQACgSALgMQAKgMAQgGQAPgGAQAAQASAAAPAGQAPAGAKANQAJANAAATQAAASgCAaIgFA5QgDAdgFAbQgEAbgGASQgFASgGAEQgMAGgQAAQgMAAgLgFgAgph3QgPgQAAgUQAAgXASgRQAUgQAngCQAYABANAOQAMAPAAATQAAATgKAPQgLAQgVAHIgOADIgNABQgbgBgPgPg");
	this.shape_16.setTransform(775.225,127.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiQCWQgNgKgHgTQgFgRgDgfQgCgfAAgjIABgzIAEgsQACgUADgKQAGgRAQgMQAQgLAUAAQAJAAAKAEQAJAEAHAIQAHAIAFAEQAFAEAEAAQAEgBAGgDIAQgJQAJgFAQgDIATgDIATgBQAyABAdAYQAeAZANAmQAOAmAAApIAAAcQAAASgDAUQgCAUgJAQQgIAQgSAIIgKACIgJABQgaAAgMgMQgMgLgBgXQAAgOACgVQACgVABgWQAAgVgFgTQgFgUgMgMQgOgMgYgBQgKAAgKACQgYAFgNAOQgMAOgEAUQgEATAAAXIABAzIgBAVQAAAKgCAJQgFARgNAJQgNAJgPAAQgPAAgOgJg");
	this.shape_17.setTransform(746.775,132.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AB/DVQgZgHgIgPQgJgOAAgWIgDgsQgDgMgLgGQgLgFgRgCQgPgCgRAAQggABgWAEQgXAFgFAOQgEANgBAQQAAARgCAQQgCAQgKALQgJALgXACIgEAAQgUAAgLgQQgLgQgEgbQgEgcgBgiQAAggAEghQADgfAEgZQAFgaAEgNQAShBAmgkQAlgkBAgEIAMAAIAOABQAxALAeAdQAeAeAQAqQARApAGAvQAHAtABAsIACA6QAAASgDARQgDARgKAMQgJAMgTABgAgrheQgTASgIAiIgBAJIAAAHQABARAMAEQAMAFASAAIARAAIAMgBIATAAQATgBANgGQANgGABgRIAAgHIgCgJQgKgigRgPQgSgQgTAAQgYABgTARg");
	this.shape_18.setTransform(706.5531,127.4);

	this.instance_18 = new lib.spd_00516();
	this.instance_18.setTransform(19,311);

	this.instance_19 = new lib.paw_00729();
	this.instance_19.setTransform(376,311);

	this.shape_19 = new cjs.Shape();
	var sprImg_shape_19 = cjs.SpriteSheetUtils.extractFrame(ss["body_atlas_P_1"],0);
	sprImg_shape_19.onload = function(){
		this.shape_19.graphics.bf(sprImg_shape_19, null, new cjs.Matrix2D(1,0,0,1,-35.1,-468.9)).s().p("AleE3IAAptQAwCDBcByIAhAOIBQBCQDEClDlB3IAXAMg")
	}.bind(this);
	this.shape_19.setTransform(-604.8625,252.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#05011D","#280160"],[0,1],0,-101.9,0,102).s().p("EhSBAP8IAA/3MCkDAAAIAAf3g");
	this.shape_20.setTransform(525,101.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.instance_19},{t:this.instance_18},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-115,1145.4,1165,1110);
// library properties:
lib.properties = {
	id: '7C1E8D46BD6DF947AD7139566368B84F',
	width: 1050,
	height: 2319,
	fps: 30,
	color: "#25015A",
	opacity: 1.00,
	manifest: [
		{src:"images/body_atlas_P_1.png?1748629892398", id:"body_atlas_P_1"},
		{src:"images/body_atlas_NP_1.jpg?1748629892399", id:"body_atlas_NP_1"}
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
an.compositions['7C1E8D46BD6DF947AD7139566368B84F'] = {
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