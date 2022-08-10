(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[414,899,283,225],[699,1076,231,201],[1414,1012,229,227],[0,1093,291,112],[932,1076,248,174],[485,1126,163,172],[1182,1076,207,198],[0,0,1119,681],[1887,621,117,365],[414,683,381,214],[1121,0,794,307],[0,683,412,240],[1645,1207,379,12],[1645,1012,391,123],[1645,1137,154,68],[797,711,347,195],[1146,711,347,195],[1801,1137,67,67],[1057,908,355,166],[699,908,356,166],[1414,908,68,93],[0,925,355,166],[293,1126,190,155],[1523,621,362,389],[1523,309,512,310],[1917,0,128,128],[1917,130,128,128],[1121,309,400,400]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap57 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap60 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap61 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap62 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap64 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap65 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap67 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap68 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap69 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.iconfinder_23whatsapp_843773 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.logo_00000 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(27);
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


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap69();
	this.instance.parent = this;
	this.instance.setTransform(-256,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256,-155,512,310);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap40();
	this.instance.parent = this;
	this.instance.setTransform(-195.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.5,-61.5,391,123);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap32();
	this.instance.parent = this;
	this.instance.setTransform(-206,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-120,412,240);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap29();
	this.instance.parent = this;
	this.instance.setTransform(-397,-153.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397,-153.5,794,307);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap27();
	this.instance.parent = this;
	this.instance.setTransform(-58.5,-182.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-182.5,117,365);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap28();
	this.instance.parent = this;
	this.instance.setTransform(-190.5,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.5,-107,381,214);


(lib.Símbolo53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEC5C5","#FEB4B4"],[0.008,1],57,-26.4,57,-1.7).s().p("AhNAKQgUgCgHgDIgBAAIgDgEIgBgBIAAAAIAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAHgDAVgDQAggFAtAAQAuAAAgAFQAfAEABAFIAAABQgBADgHACIgBAAQgIACgPACQggAFguAAQgtAAgggFg");
	this.shape.setTransform(-319.5,91);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEC5C5","#FE7878"],[0.008,1],11.1,6.3,-11,6.3).s().p("ABnBTIjKAAIgKikIAAABIAEAEIABAAQAHADAUADQAgAEAtAAQAuAAAggEQAPgCAIgDIABAAQAGgCACgDIAAgBIAAgEIgHCrg");
	this.shape_1.setTransform(-319.5,99.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7D4713","#E18F40"],[0,1],0,73.4,0,-73.3).s().p("AgILSIgJgUIAAAAIgT2aQAfATAfAHIALVeIgBAAQgIAAgMAhQgLAhgEAAQgEAAgFgMg");
	this.shape_2.setTransform(-325.5,201.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DE9143","#EFC8A0"],[0,1],-8.1,0,8.1,0).s().p("AgGCJIgJAAIgHAAIg6joIABgBIAIAUQAFALAFAAQAFAAALggQALghAJAAIAAAAIAAAAQAGABAIAmQAJAnAEAAIAHAAQAEAAACgHIAEgKIAJghQAGggACgBQAAAAAAAAQABgBAAABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQADAFADAQIAEAWQAEAKADAAIANgIQAHgGAEgGIAAACIg9Dog");
	this.shape_3.setTransform(-319.2,281.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BF6F1E","#EBB17A"],[0.008,1],0,72.9,0,-72.8).s().p("AgCLZQgFAAgJgoQgIglgGgBIAAAAIgL1fIALADIAhABQATgBAUgGIgJVeQAAgBgBAAQAAAAAAAAQAAgBgBABQAAAAAAAAQgCABgGAgIgJAhIgEAKQgCAHgEAAIgGAAg");
	this.shape_4.setTransform(-318.7,203.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DF8731","#EEBE91"],[0,1],0,72.7,0,-72.7).s().p("AgPLNIgFgVQgCgQgDgFQAAgBAAgBQgBgBAAAAQAAgBgBAAQAAAAAAAAIAJ1fIAQgGIATgKIALgGIAAAAIgNWYIgBABQgEAGgHAHIgLAHQgDAAgEgKg");
	this.shape_5.setTransform(-312.6,201.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#DDDDDD","#A6A6A6"],[0,1],10.2,0.1,-10.1,0.1).s().p("AgShEQAaAFAbgKIAeCzIgQAGQgUAGgUABgAgiB0QgggIgfgTIgEjPQAWAWAXAOIAhDIIgLgCgAA7hTQAVgNAWgVIgGDOIgLAHg");
	this.shape_6.setTransform(-319.4,119.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FEC5C5","#FE7878"],[0.008,1],10.9,-12.6,-11.1,-12.6).s().p("AgSAZQgTgEgTgKQgXgNgWgWIAAgCIDLAAIAAADQgWAVgVAMQgMAGgMAEQgSAHgRAAQgJAAgJgCg");
	this.shape_7.setTransform(-319.4,110.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgEgoIAaAAIgWBRgAgUgoIAHAAIANBQg");
	this.shape_8.setTransform(-319.3,299.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNPBIgOhRIAJAAIAGBSIgBABgAglr4IghjJQATAKATAEIAdC8IgigBgAAWu4QALgEAMgGIAaC0IgUAKg");
	this.shape_9.setTransform(-318,207.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo53, new cjs.Rectangle(-330.5,89.5,22.1,214.3), null);


(lib.Symbol221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap67();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1.056,0,-18.7,0);

	this.instance_1 = new lib.Bitmap67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1.056,0,-18.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol221, new cjs.Rectangle(0,0,242.4,155), null);


(lib.Symbol219 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(588.2,77.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_1.setTransform(578.9,72);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Ag1g4IAMAAIApBbIAqhbIAMAAIg2Bxg");
	this.shape_2.setTransform(565.8,72.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_3.setTransform(557.4,70.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgEBPIAAhkIgWAAIAAgKIAWAAIAAgvIAJAAIAAAvIAXAAIAAAKIgXAAIAABkg");
	this.shape_4.setTransform(551.2,70.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAbAAARATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgRASgbAAQgYAAgSgSgAgjgjQgOAPAAAUQAAAVAOAPQAQAPATAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgTAAgQAPg");
	this.shape_5.setTransform(539.7,72);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAFAFIACACIgIAHIhGBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBHhHQgOgKgRAAQgUAAgPAPg");
	this.shape_6.setTransform(525.6,72);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgVA5IAAhuIAKAAIAAAVIAHgJQAMgNAOgCIAAALQgJABgKAKQgOAOAAAUIAAA5g");
	this.shape_7.setTransform(516.2,72.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAaAAARATIAHAHIgKAEIgEgEQgPgPgVAAQgUAAgPAPQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSg");
	this.shape_8.setTransform(505.7,72);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_9.setTransform(483.9,72);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_10.setTransform(472.3,72.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQATgTAYAAQAWAAAQAOIAGAFIABACIgIAHIhGBHQAOANATAAQAVAAAPgPIADgEIALAEIgGAIQgTASgZAAQgYAAgTgSgAgdgjQgPAPAAAUQAAASAKANIBGhHQgNgKgRAAQgUAAgPAPg");
	this.shape_11.setTransform(461.2,72);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAaAAARATIAHAHIgKAEIgEgEQgPgPgVAAQgUAAgPAPQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSg");
	this.shape_12.setTransform(448,72);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_13.setTransform(434.2,72);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgVA5IAAhuIAKAAIAAAVIAHgJQAMgNAOgCIAAALQgJABgKAKQgOAOAAAUIAAA5g");
	this.shape_14.setTransform(424.2,72.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("Ag8BRIAAiXIAKAAIAAAPIAHgHQASgSAZAAQAZAAASASQASASAAAaQAAAYgSASQgSASgZAAQgZAAgSgSIgHgHIAABAgAgkg2QgLAKgDAPIAAAVQADANALAMQAPAPAVgBQAUABAPgPQAPgQAAgTQAAgVgPgPQgPgQgUABQgVgBgPAQg");
	this.shape_15.setTransform(413,74);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgEBaIAAizIAJAAIAACzg");
	this.shape_16.setTransform(395.1,68.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAFAFIACACIgHAHIhHBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBHhHQgOgKgRAAQgUAAgPAPg");
	this.shape_17.setTransform(386.3,72);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_18.setTransform(364.6,72);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgqBJQgSgSAAgZQAAgaASgRQASgSAZAAQAZAAASASIAHAIIAAhVIAKAAIAACyIgKAAIAAgWIgHAHQgSASgZAAQgZAAgSgSgAgigFQgQAOABAVQgBAVAQAPQAPAPAUAAQAVAAAPgPQALgMADgOIAAgUQgDgPgLgKQgPgPgVAAQgUAAgPAPg");
	this.shape_19.setTransform(349.7,69.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_20.setTransform(335,72);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgEBPIAAhkIgXAAIAAgKIAXAAIAAgvIAJAAIAAAvIAWAAIAAAKIgWAAIAABkg");
	this.shape_21.setTransform(324.1,70.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAFAFIACACIgHAHIhHBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBHhHQgOgKgRAAQgUAAgPAPg");
	this.shape_22.setTransform(305.8,72);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgEBPIAAhkIgWAAIAAgKIAWAAIAAgvIAJAAIAAAvIAXAAIAAAKIgXAAIAABkg");
	this.shape_23.setTransform(295.4,70.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AAhA7IAAhJQAAgNgKgKQgKgKgNAAQgOAAgKAKQgGAFgCAGIAABVIgKAAIAAhuIAKAAIAAAHQAOgNASAAQASAAANAMQAMAMAAASIAABKg");
	this.shape_24.setTransform(285.7,72.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAZAAQAZAAATATIAGAHIAAgQIAKAAIAABuIgKAAIAAgXIgGAIQgTASgZAAQgZAAgSgSgAgigjQgPAPAAAUQAAAVAPAPQAOAPAVAAQAVAAAPgPQALgLADgPIAAgTQgDgPgLgLQgPgPgVAAQgVAAgOAPg");
	this.shape_25.setTransform(271.9,72);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgVA5IAAhuIAKAAIAAAVIAHgJQAMgNAOgCIAAALQgJABgKAKQgOAOAAAUIAAA5g");
	this.shape_26.setTransform(261.6,72.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgfAsQgNgMAAgTIAAhEIAKAAIAABDQAAAOAKAKQALAKANAAQAOAAALgKQAKgKAAgOIAAhDIAKAAIAABEQgBATgMAMQgMAMgTAAQgUAAgMgMg");
	this.shape_27.setTransform(251.5,72.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgqBJQgSgSAAgZQAAgaASgRQASgSAYAAQAbAAASASIAGAIIAAhVIAKAAIAACyIgKAAIAAgWIgGAHQgSASgbAAQgYAAgSgSgAgjgFQgPAOAAAVQAAAVAPAPQAPAPAUAAQAWAAAOgPQAMgMADgOIAAgUQgDgPgMgKQgOgPgWAAQgUAAgPAPg");
	this.shape_28.setTransform(237.6,69.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_29.setTransform(217.7,72.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQATgTAYAAQAWAAAQAOIAFAFIADACIgIAHIhHBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgYAAgTgSgAgdgjQgPAPAAAUQAAASAKANIBGhHQgNgKgRAAQgUAAgPAPg");
	this.shape_30.setTransform(206.5,72);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgEBaIAAizIAJAAIAACzg");
	this.shape_31.setTransform(197.7,68.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAZAAQAZAAATATIAGAHIAAgQIAKAAIAABuIgKAAIAAgXIgGAIQgTASgZAAQgZAAgSgSgAgigjQgPAPgBAUQABAVAPAPQAOAPAVAAQAVAAAPgPQALgLADgPIAAgTQgDgPgLgLQgPgPgVAAQgVAAgOAPg");
	this.shape_32.setTransform(187.8,72);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_33.setTransform(177.8,70.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQATgTAYAAQAZAAATATIAGAHIgLAEIgDgEQgPgPgVAAQgUAAgPAPQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPIADgEIALAEIgGAIQgTASgZAAQgYAAgTgSg");
	this.shape_34.setTransform(168.8,72);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_35.setTransform(159.8,70.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AAhA7IAAhJQAAgNgKgKQgKgKgNAAQgOAAgKAKQgGAFgCAGIAABVIgKAAIAAhuIAKAAIAAAHQAOgNASAAQASAAANAMQAMAMAAASIAABKg");
	this.shape_36.setTransform(151.4,72.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_37.setTransform(142.9,70.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_38.setTransform(128.1,72.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAbAAARATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgRASgbAAQgYAAgSgSgAgjgjQgOAPAAAUQAAAVAOAPQAQAPATAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgTAAgQAPg");
	this.shape_39.setTransform(115.8,72);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAGAFIABACIgIAHIhGBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgGAIQgSASgaAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBHhHQgOgKgRAAQgUAAgPAPg");
	this.shape_40.setTransform(101.7,72);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgqBJQgSgSAAgZQAAgaASgRQASgSAYAAQAbAAARASIAHAIIAAhVIAKAAIAACyIgKAAIAAgWIgHAHQgRASgbAAQgYAAgSgSgAgjgFQgPAOAAAVQAAAVAPAPQAQAPATAAQAWAAAOgPQAMgMADgOIAAgUQgDgPgMgKQgOgPgWAAQgTAAgQAPg");
	this.shape_41.setTransform(87.4,69.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_42.setTransform(77.4,70.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_43.setTransform(62.6,72.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAaAAASATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgSASgaAAQgYAAgSgSgAgjgjQgPAPABAUQgBAVAPAPQAQAPATAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgTAAgQAPg");
	this.shape_44.setTransform(50.3,72);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgEBaIAAizIAJAAIAACzg");
	this.shape_45.setTransform(40.6,68.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAFAFIACACIgIAHIhGBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBHhHQgOgKgRAAQgUAAgPAPg");
	this.shape_46.setTransform(23.9,72);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgqBJQgSgSAAgZQAAgaASgRQASgSAYAAQAbAAARASIAHAIIAAhVIAKAAIAACyIgKAAIAAgWIgHAHQgRASgbAAQgYAAgSgSgAgjgFQgPAOAAAVQAAAVAPAPQAQAPATAAQAWAAAOgPQAMgMADgOIAAgUQgDgPgMgKQgOgPgWAAQgTAAgQAPg");
	this.shape_47.setTransform(9.5,69.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AAhA7IAAhIQAAgOgKgLQgKgKgNAAQgOAAgKAKQgGAGgCAGIAABVIgKAAIAAhuIAKAAIAAAHQAOgOASABQASAAANAMQAMAMAAATIAABJg");
	this.shape_48.setTransform(773.5,45.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgrA9QgSgRAAgaQAAgZASgRQATgTAYAAQAaAAASATQASARAAAZQAAAagSARQgSATgagBQgYABgTgTgAgjgRQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPgAgLg5IARgVIATAAIgbAVg");
	this.shape_49.setTransform(760.3,43.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_50.setTransform(750.7,43.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAaAAARATIAHAHIgKAEIgEgEQgPgPgVAAQgUAAgPAPQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSg");
	this.shape_51.setTransform(741.7,45.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAbAAARATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgRASgbAAQgYAAgSgSgAgjgjQgOAPAAAUQAAAVAOAPQAQAPATAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgTAAgQAPg");
	this.shape_52.setTransform(727.4,45.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AgVA5IAAhuIAKAAIAAAVIAHgJQAMgOAOgBIAAAMQgJAAgKALQgOANAAAUIAAA5g");
	this.shape_53.setTransform(717,45.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AgrA8IgGgIIAKgEIADAEQAQAPAUAAQAVAAAOgPQAOgNACgTIgHAHQgRASgbAAQgYAAgSgSQgSgSAAgYQAAgaASgSQASgSAYAAQAbAAARASIAHAIIAAgRIAKAAIAABWQAAAYgSASQgSASgZAAQgZAAgSgSgAgjgzQgOAOAAAWQAAATAOAQQAQAPATAAQAWAAAOgPQAMgMADgNIAAgVQgEgOgLgLQgOgPgWgBQgTABgQAPg");
	this.shape_54.setTransform(705.3,47);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAFAFIACACIgIAHIhGBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBHhHQgOgKgRAAQgUAAgPAPg");
	this.shape_55.setTransform(691.2,45.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AgEBPIAAhjIgXAAIAAgLIAXAAIAAgvIAJAAIAAAvIAXAAIAAALIgXAAIAABjg");
	this.shape_56.setTransform(680.9,43.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AAhA7IAAhIQAAgOgKgLQgKgKgNAAQgOAAgKAKQgGAGgCAGIAABVIgKAAIAAhuIAKAAIAAAHQAOgOASABQASAAANAMQAMAMAAATIAABJg");
	this.shape_57.setTransform(671.1,45.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_58.setTransform(662.7,43.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAbAAARATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgRASgbAAQgYAAgSgSgAgjgjQgOAPAAAUQAAAVAOAPQAQAPATAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgTAAgQAPg");
	this.shape_59.setTransform(644.6,45.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#666666").s().p("AAhA7IAAhIQAAgOgKgLQgKgKgNAAQgOAAgKAKQgGAGgCAGIAABVIgKAAIAAhuIAKAAIAAAHQAOgOASABQASAAANAMQAMAMAAATIAABJg");
	this.shape_60.setTransform(631.1,45.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAGAFIACACIgJAHIhGBHQAOANATAAQAVAAAPgPIADgEIALAEIgGAIQgTASgZAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBGhHQgNgKgRAAQgUAAgPAPg");
	this.shape_61.setTransform(618.5,45.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#666666").s().p("AgfAsQgNgNAAgSIAAhEIAKAAIAABDQAAAOAKAKQALAKANAAQAOAAALgKQAKgKAAgOIAAhDIAKAAIAABEQgBASgMANQgMAMgTAAQgUAAgMgMg");
	this.shape_62.setTransform(605.7,45.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#666666").s().p("AgrBJIgHgHIAAAWIgKAAIAAiyIAKAAIAABUIAHgHQASgSAZAAQAZAAASASQASARAAAaQAAAZgSASQgSASgZAAQgZAAgSgSgAgkgFQgLAKgDAOIAAAVQADAPALALQAPAPAVAAQAUAAAPgPQAPgPAAgVQAAgVgPgOQgPgPgUAAQgVAAgPAPg");
	this.shape_63.setTransform(592,42.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAZAAQAZAAATATIAGAHIAAgQIAKAAIAABuIgKAAIAAgXIgGAIQgTASgZAAQgZAAgSgSgAgigjQgPAPgBAUQABAVAPAPQAOAPAVAAQAVAAAPgPQALgLADgPIAAgTQgDgPgLgLQgPgPgVAAQgVAAgOAPg");
	this.shape_64.setTransform(568.6,45.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("AgEBaIAAizIAJAAIAACzg");
	this.shape_65.setTransform(558.9,42.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#666666").s().p("AgiBMIAeg+IgrhZIALAAIAkBOIAkhOIAMAAIgwBjIgYA0g");
	this.shape_66.setTransform(543.1,47.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAbAAARATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgRASgbAAQgYAAgSgSgAgjgjQgOAPAAAUQAAAVAOAPQAQAPATAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgTAAgQAPg");
	this.shape_67.setTransform(521.7,45.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#666666").s().p("AgrA8IgGgIIAKgEIADAEQAQAPAUAAQAVAAAOgPQAOgNACgTIgHAHQgRASgbAAQgYAAgSgSQgSgSAAgYQAAgaASgSQASgSAYAAQAbAAARASIAHAIIAAgRIAKAAIAABWQAAAYgRASQgTASgZAAQgZAAgSgSgAgjgzQgOAOAAAWQAAATAOAQQAQAPATAAQAWAAAOgPQAMgMADgNIAAgVQgDgOgMgLQgOgPgWgBQgTABgQAPg");
	this.shape_68.setTransform(506.4,47);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAGAFIABACIgIAHIhGBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgGAIQgSASgaAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBHhHQgOgKgRAAQgUAAgPAPg");
	this.shape_69.setTransform(492.3,45.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#666666").s().p("AgVA5IAAhuIAKAAIAAAVIAHgJQAMgOAOgBIAAAMQgJAAgKALQgOANAAAUIAAA5g");
	this.shape_70.setTransform(482.9,45.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#666666").s().p("AgEBPIAAhjIgXAAIAAgLIAXAAIAAgvIAJAAIAAAvIAXAAIAAALIgXAAIAABjg");
	this.shape_71.setTransform(475.2,43.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#666666").s().p("AAhA7IAAhIQAAgOgKgLQgKgKgNAAQgOAAgKAKQgGAGgCAGIAABVIgKAAIAAhuIAKAAIAAAHQAOgOASABQASAAANAMQAMAMAAATIAABJg");
	this.shape_72.setTransform(465.5,45.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQATgTAYAAQAVAAARAOIAGAFIACACIgJAHIhGBHQAOANATAAQAVAAAPgPIADgEIALAEIgGAIQgTASgZAAQgYAAgTgSgAgdgjQgPAPAAAUQAAASAKANIBGhHQgNgKgRAAQgUAAgPAPg");
	this.shape_73.setTransform(452.9,45.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAGAFIACACIgJAHIhGBHQAOANATAAQAVAAAPgPIADgEIALAEIgGAIQgTASgZAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBGhHQgNgKgRAAQgUAAgPAPg");
	this.shape_74.setTransform(431.7,45.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#666666").s().p("AgqBJQgSgSAAgZQAAgaASgRQASgSAZAAQAZAAATASIAGAIIAAhVIAKAAIAACyIgKAAIAAgWIgGAHQgTASgZAAQgZAAgSgSgAgigFQgPAOgBAVQABAVAPAPQAOAPAVAAQAVAAAPgPQALgMADgOIAAgUQgDgPgLgKQgPgPgVAAQgVAAgOAPg");
	this.shape_75.setTransform(417.4,42.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_76.setTransform(397.5,45.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_77.setTransform(385.7,45.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#666666").s().p("Ag8BRIAAiYIAKAAIAAAQIAHgHQASgSAZAAQAZAAASASQASASAAAaQAAAYgSASQgSASgZAAQgZAAgSgSIgHgHIAABAgAgkg2QgLALgDAOIAAAVQADAOALALQAPAPAVAAQAUAAAPgPQAPgQAAgTQAAgWgPgOQgPgPgUgBQgVABgPAPg");
	this.shape_78.setTransform(371.3,47.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#666666").s().p("AAyA7IAAhVQAAgIgGgGQgHgHgJAAQgKAAgGAHQgHAGAAAKIAABTIgJAAIAAhVQAAgIgHgGQgGgHgKAAQgJAAgHAHQgGAFAAAIIAABWIgKAAIAAhuIAKAAIAAADQAJgJANAAQAOAAAJAJIAEAGIAFgGQAJgJAOAAQANAAAKAJQAJAJAAANIAABVg");
	this.shape_79.setTransform(355.8,45.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQATgTAYAAQAWAAAQAOIAFAFIADACIgIAHIhHBHQAOANATAAQAVAAAPgPIADgEIALAEIgHAIQgRASgaAAQgYAAgTgSgAgdgjQgPAPAAAUQAAASAKANIBGhHQgNgKgRAAQgUAAgPAPg");
	this.shape_80.setTransform(341.5,45.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_81.setTransform(332.5,43.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#666666").s().p("AgEBPIAAhjIgXAAIAAgLIAXAAIAAgvIAJAAIAAAvIAWAAIAAALIgWAAIAABjg");
	this.shape_82.setTransform(326.3,43.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#666666").s().p("AgOAVIALgqIASAAIgUAqg");
	this.shape_83.setTransform(312,51.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_84.setTransform(305.9,45.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_85.setTransform(294.2,45.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#666666").s().p("AgOBNQAOgBAAgOIAAhuIAJAAIAABuQAAAYgXABgAgChFQgDgDAAgEQAAgEADgEQACgCAEAAQAEAAADACQADAEABAEQgBAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_86.setTransform(283.9,45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAZAAQAZAAATATIAGAHIAAgQIAKAAIAABuIgKAAIAAgXIgGAIQgTASgZAAQgZAAgSgSgAgigjQgPAPAAAUQAAAVAPAPQAOAPAVAAQAVAAAPgPQALgLADgPIAAgTQgDgPgLgLQgPgPgVAAQgVAAgOAPg");
	this.shape_87.setTransform(274.2,45.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#666666").s().p("AgrBJIgHgHIAAAWIgKAAIAAiyIAKAAIAABUIAHgHQASgSAZAAQAZAAASASQASARAAAaQAAAZgSASQgSASgZAAQgZAAgSgSgAgkgFQgLAKgDAOIAAAVQADAPALALQAPAPAVAAQAUAAAPgPQAPgPAAgVQAAgVgPgOQgPgPgUAAQgVAAgPAPg");
	this.shape_88.setTransform(259.2,42.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAZAAQAZAAATATIAGAHIAAgQIAKAAIAABuIgKAAIAAgXIgGAIQgTASgZAAQgZAAgSgSgAgigjQgPAPgBAUQABAVAPAPQAOAPAVAAQAVAAAPgPQALgLADgPIAAgTQgDgPgLgLQgPgPgVAAQgVAAgOAPg");
	this.shape_89.setTransform(243.7,45.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#666666").s().p("AgVA5IAAhuIAKAAIAAAVIAHgJQAMgOAOgBIAAAMQgJAAgKALQgOANAAAUIAAA5g");
	this.shape_90.setTransform(233.3,45.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#666666").s().p("AgEBPIAAhjIgWAAIAAgLIAWAAIAAgvIAJAAIAAAvIAXAAIAAALIgXAAIAABjg");
	this.shape_91.setTransform(225.7,43.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_92.setTransform(209.5,45.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_93.setTransform(197.8,45.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#666666").s().p("AgVA5IAAhuIAKAAIAAAVIAHgJQAMgOAOgBIAAAMQgJAAgKALQgOANAAAUIAAA5g");
	this.shape_94.setTransform(187.8,45.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#666666").s().p("AgEBPIAAhjIgWAAIAAgLIAWAAIAAgvIAJAAIAAAvIAXAAIAAALIgXAAIAABjg");
	this.shape_95.setTransform(180.1,43.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_96.setTransform(171.9,45.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAFAFIACACIgIAHIhGBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBHhHQgOgKgRAAQgUAAgPAPg");
	this.shape_97.setTransform(160.8,45.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#666666").s().p("AgfAsQgNgNAAgSIAAhEIAKAAIAABDQAAAOAKAKQALAKANAAQAOAAALgKQAKgKAAgOIAAhDIAKAAIAABEQgBASgMANQgMAMgTAAQgUAAgMgMg");
	this.shape_98.setTransform(148,45.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#666666").s().p("AAhA7IAAhIQAAgOgKgLQgKgKgNAAQgOAAgKAKQgGAGgCAGIAABVIgKAAIAAhuIAKAAIAAAHQAOgOASABQASAAANAMQAMAMAAATIAABJg");
	this.shape_99.setTransform(135.8,45.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQATgTAYAAQAWAAAQAOIAGAFIACACIgIAHIhHBHQAOANATAAQAVAAAPgPIADgEIALAEIgGAIQgTASgZAAQgYAAgTgSgAgdgjQgPAPAAAUQAAASAKANIBGhHQgNgKgRAAQgUAAgPAPg");
	this.shape_100.setTransform(115.3,45.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#666666").s().p("AgqBJQgSgSAAgZQAAgaASgRQASgSAZAAQAZAAATASIAGAIIAAhVIAKAAIAACyIgKAAIAAgWIgGAHQgTASgZAAQgZAAgSgSgAgigFQgPAOgBAVQABAVAPAPQAOAPAVAAQAVAAAPgPQALgMADgOIAAgUQgDgPgLgKQgPgPgVAAQgVAAgOAPg");
	this.shape_101.setTransform(100.9,42.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#666666").s().p("AgqBJQgSgSAAgZQAAgaASgRQASgSAZAAQAZAAATASIAGAIIAAhVIAKAAIAACyIgKAAIAAgWIgGAHQgTASgZAAQgZAAgSgSgAgigFQgPAOgBAVQABAVAPAPQAOAPAVAAQAVAAAPgPQALgMADgOIAAgUQgDgPgLgKQgPgPgVAAQgVAAgOAPg");
	this.shape_102.setTransform(77.7,42.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAaAAASATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgSASgaAAQgYAAgSgSgAgjgjQgPAPABAUQgBAVAPAPQAQAPATAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgTAAgQAPg");
	this.shape_103.setTransform(62.5,45.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#666666").s().p("AgqBJQgSgSAAgZQAAgaASgRQASgSAYAAQAbAAASASIAGAIIAAhVIAKAAIAACyIgKAAIAAgWIgGAHQgSASgbAAQgYAAgSgSgAgjgFQgPAOAAAVQAAAVAPAPQAPAPAUAAQAWAAAOgPQAMgMADgOIAAgUQgDgPgMgKQgOgPgWAAQgUAAgPAPg");
	this.shape_104.setTransform(47.2,42.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_105.setTransform(37.3,43.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#666666").s().p("AgEBaIAAizIAJAAIAACzg");
	this.shape_106.setTransform(32.7,42.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAZAAQAZAAATATIAGAHIAAgQIAKAAIAABuIgKAAIAAgXIgGAIQgTASgZAAQgZAAgSgSgAgigjQgPAPgBAUQABAVAPAPQAOAPAVAAQAVAAAPgPQALgLADgPIAAgTQgDgPgLgLQgPgPgVAAQgVAAgOAPg");
	this.shape_107.setTransform(22.7,45.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQATgTAYAAQAZAAATATIAGAHIgLAEIgDgEQgPgPgVAAQgUAAgPAPQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPIADgEIALAEIgGAIQgTASgZAAQgYAAgTgSg");
	this.shape_108.setTransform(8.6,45.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAaAAASATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgSASgaAAQgYAAgSgSgAgjgjQgPAPABAUQgBAVAPAPQAQAPATAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgTAAgQAPg");
	this.shape_109.setTransform(703.7,18.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#666666").s().p("AgEBaIAAizIAJAAIAACzg");
	this.shape_110.setTransform(694,15.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAZAAQAZAAATATIAGAHIAAgQIAKAAIAABuIgKAAIAAgXIgGAIQgTASgZAAQgZAAgSgSgAgigjQgPAPgBAUQABAVAPAPQAOAPAVAAQAVAAAPgPQALgLADgPIAAgTQgDgPgLgLQgPgPgVAAQgVAAgOAPg");
	this.shape_111.setTransform(676.1,18.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_112.setTransform(666.2,17);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#666666").s().p("AgVA4IAAhtIAKAAIAAAUIAHgJQAMgNAOAAIAAALQgJAAgKAKQgOAOAAAUIAAA4g");
	this.shape_113.setTransform(660.9,18.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_114.setTransform(649.8,18.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#666666").s().p("AgEBOIAAhjIgXAAIAAgKIAXAAIAAguIAJAAIAAAuIAWAAIAAAKIgWAAIAABjg");
	this.shape_115.setTransform(638.9,16.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAZAAATATIAGAHIgLAEIgDgEQgPgPgVAAQgUAAgPAPQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPIADgEIALAEIgGAIQgTASgZAAQgZAAgSgSg");
	this.shape_116.setTransform(628.6,18.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAbAAASATIAGAHIAAgQIAKAAIAABuIgKAAIAAgXIgGAIQgSASgbAAQgYAAgSgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgUAAgPAPg");
	this.shape_117.setTransform(614.2,18.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#666666").s().p("AgPBVIAAhjIgMAAIAAgLIAMAAIAAgdQAAgNAJgIQAIgJAMAAQAHAAAHACIgEAJQgEgCgFAAQgIAAgHAHQgFAGAAAIIAAAdIAVAAIAAALIgVAAIAABjg");
	this.shape_118.setTransform(604.6,16);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_119.setTransform(596.4,18.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_120.setTransform(589.4,17);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#666666").s().p("AgEBOIAAhjIgXAAIAAgKIAXAAIAAguIAJAAIAAAuIAWAAIAAAKIgWAAIAABjg");
	this.shape_121.setTransform(583.3,16.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAaAAASATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgSASgaAAQgYAAgSgSgAgjgjQgOAPAAAUQAAAVAOAPQAPAPAUAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgUAAgPAPg");
	this.shape_122.setTransform(571.8,18.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_123.setTransform(559.8,18.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAZAAQAZAAASATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgSASgZAAQgZAAgSgSgAgigjQgQAPABAUQgBAVAQAPQAPAPAUAAQAVAAAPgPQALgLADgPIAAgTQgDgPgLgLQgPgPgVAAQgUAAgPAPg");
	this.shape_124.setTransform(539.6,18.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#666666").s().p("AAyA6IAAhTQAAgJgGgHQgHgGgJAAQgKAAgGAGQgHAHAAAKIAABSIgJAAIAAhTQAAgJgHgHQgGgGgKAAQgJAAgHAGQgGAGAAAJIAABUIgKAAIAAhtIAKAAIAAADQAJgKANAAQAOAAAJAKIAEAGIAFgGQAJgKAOAAQANAAAKAKQAJAJAAAOIAABTg");
	this.shape_125.setTransform(524.3,18.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#666666").s().p("AgVA4IAAhtIAKAAIAAAUIAHgJQAMgNAOAAIAAALQgJAAgKAKQgOAOAAAUIAAA4g");
	this.shape_126.setTransform(513.8,18.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_127.setTransform(502.7,18.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#666666").s().p("AgPBVIAAhjIgMAAIAAgLIAMAAIAAgdQAAgNAJgIQAIgJAMAAQAHAAAHACIgEAJQgEgCgFAAQgIAAgHAHQgFAGAAAIIAAAdIAVAAIAAALIgVAAIAABjg");
	this.shape_128.setTransform(493.4,16);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQATgTAYAAQAWAAAQAOIAGAFIABACIgIAHIhGBHQAOANATAAQAVAAAPgPIADgEIALAEIgGAIQgTASgZAAQgYAAgTgSgAgdgjQgPAPAAAUQAAASAKANIBGhHQgNgKgRAAQgUAAgPAPg");
	this.shape_129.setTransform(475.1,18.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#666666").s().p("AgqBJQgSgSAAgZQAAgaASgRQASgSAYAAQAbAAASASIAGAIIAAhVIAKAAIAACyIgKAAIAAgWIgGAHQgSASgbAAQgYAAgSgSgAgjgFQgPAOAAAVQAAAVAPAPQAPAPAUAAQAWAAAOgPQAMgMADgOIAAgUQgDgPgMgKQgOgPgWAAQgUAAgPAPg");
	this.shape_130.setTransform(460.8,15.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAbAAARATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgRASgbAAQgYAAgSgSgAgjgjQgOAPAAAUQAAAVAOAPQAQAPATAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgTAAgQAPg");
	this.shape_131.setTransform(437.6,18.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#666666").s().p("AgVA4IAAhtIAKAAIAAAUIAHgJQAMgNAOAAIAAALQgJAAgKAKQgOAOAAAUIAAA4g");
	this.shape_132.setTransform(427.2,18.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_133.setTransform(416.1,18.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#666666").s().p("AgEBaIAAizIAJAAIAACzg");
	this.shape_134.setTransform(406.8,15.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAaAAASATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgSASgaAAQgYAAgSgSgAgjgjQgPAPABAUQgBAVAPAPQAQAPATAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgTAAgQAPg");
	this.shape_135.setTransform(396.8,18.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#666666").s().p("Ag1g4IAMAAIApBbIAqhbIAMAAIg2Bxg");
	this.shape_136.setTransform(383.3,19.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_137.setTransform(365,18.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAFAFIACACIgIAHIhGBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBHhHQgOgKgRAAQgUAAgPAPg");
	this.shape_138.setTransform(353.8,18.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#666666").s().p("AgEBOIAAhjIgWAAIAAgKIAWAAIAAguIAJAAIAAAuIAXAAIAAAKIgXAAIAABjg");
	this.shape_139.setTransform(343.5,16.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#666666").s().p("AAhA6IAAhIQAAgOgKgKQgKgJgNgBQgOABgKAJQgGAGgCAGIAABUIgKAAIAAhtIAKAAIAAAIQAOgOASgBQASAAANANQAMAMAAATIAABIg");
	this.shape_140.setTransform(333.7,18.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQATgTAYAAQAVAAARAOIAGAFIABACIgIAHIhGBHQAOANATAAQAVAAAPgPIADgEIALAEIgGAIQgTASgZAAQgYAAgTgSgAgdgjQgPAPAAAUQAAASAKANIBGhHQgNgKgRAAQgUAAgPAPg");
	this.shape_141.setTransform(321.1,18.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_142.setTransform(312.1,17);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#666666").s().p("AgEBaIAAizIAJAAIAACzg");
	this.shape_143.setTransform(307.5,15.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAaAAARATIAHAHIgKAEIgEgEQgPgPgVAAQgUAAgPAPQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSg");
	this.shape_144.setTransform(298.7,18.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAWAAAQAOIAFAFIADACIgIAHIhHBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBHhHQgOgKgRAAQgUAAgPAPg");
	this.shape_145.setTransform(277.5,18.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#666666").s().p("AgqBJQgSgSAAgZQAAgaASgRQASgSAYAAQAaAAASASIAHAIIAAhVIAKAAIAACyIgKAAIAAgWIgHAHQgSASgaAAQgYAAgSgSgAgjgFQgPAOABAVQgBAVAPAPQAQAPATAAQAWAAAOgPQAMgMADgOIAAgUQgDgPgMgKQgOgPgWAAQgTAAgQAPg");
	this.shape_146.setTransform(263.2,15.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_147.setTransform(240.5,18.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#666666").s().p("AgEBLIAAhuIAJAAIAABugAgGg4QgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_148.setTransform(230.9,17);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#666666").s().p("AgEBaIAAizIAJAAIAACzg");
	this.shape_149.setTransform(226.3,15.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_150.setTransform(216.9,18.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#666666").s().p("AgPBVIAAhjIgMAAIAAgLIAMAAIAAgdQAAgNAJgIQAIgJAMAAQAHAAAHACIgEAJQgEgCgFAAQgIAAgHAHQgFAGAAAIIAAAdIAVAAIAAALIgVAAIAABjg");
	this.shape_151.setTransform(207.7,16);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAbAAASATIAGAHIAAgQIAKAAIAABuIgKAAIAAgXIgGAIQgSASgbAAQgYAAgSgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAWAAAPgPQALgLADgPIAAgTQgDgPgLgLQgPgPgWAAQgUAAgPAPg");
	this.shape_152.setTransform(196.2,18.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#666666").s().p("AgEBOIAAhjIgWAAIAAgKIAWAAIAAguIAJAAIAAAuIAWAAIAAAKIgWAAIAABjg");
	this.shape_153.setTransform(184.9,16.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#666666").s().p("AgVA4IAAhtIAKAAIAAAUIAHgJQAMgNAOAAIAAALQgJAAgKAKQgOAOAAAUIAAA4g");
	this.shape_154.setTransform(178.3,18.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_155.setTransform(167.2,18.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#666666").s().p("Ag8BRIAAiYIAKAAIAAAQIAHgHQASgSAZAAQAZAAASASQASASAAAZQAAAZgSASQgSASgZAAQgZAAgSgSIgHgIIAABBgAgkg3QgLALgDAPIAAAVQADANALALQAPAPAVABQAUgBAPgPQAPgOAAgVQAAgUgPgQQgPgOgUAAQgVAAgPAOg");
	this.shape_156.setTransform(152.8,20.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#666666").s().p("AAhA6IAAhIQAAgOgKgKQgKgJgNgBQgOABgKAJQgGAGgCAGIAABUIgKAAIAAhtIAKAAIAAAIQAOgOASgBQASAAANANQAMAMAAATIAABIg");
	this.shape_157.setTransform(131.1,18.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#666666").s().p("AgqAsQgSgSAAgaQAAgYASgSQASgTAYAAQAaAAASATIAHAHIAAgQIAKAAIAABuIgKAAIAAgXIgHAIQgSASgaAAQgYAAgSgSgAgjgjQgPAPABAUQgBAVAPAPQAQAPATAAQAWAAAOgPQAMgLADgPIAAgTQgDgPgMgLQgOgPgWAAQgTAAgQAPg");
	this.shape_158.setTransform(117.4,18.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#666666").s().p("AgVA4IAAhtIAKAAIAAAUIAHgJQAMgNAOAAIAAALQgJAAgKAKQgOAOAAAUIAAA4g");
	this.shape_159.setTransform(107,18.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#666666").s().p("AgrA8IgGgIIAKgEIADAEQAPAPAVAAQAVAAAOgPQAOgOABgSIgGAHQgSASgaAAQgYAAgSgSQgSgSAAgZQAAgZASgSQASgSAYAAQAaAAASASIAHAHIAAgQIAKAAIAABVQAAAZgSASQgSASgZAAQgZAAgSgSgAgjg0QgPAQABAUQgBAVAPAOQAQAPATABQAWgBAOgPQAMgLACgNIAAgVQgCgPgMgLQgOgOgWAAQgTAAgQAOg");
	this.shape_160.setTransform(95.3,20.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#666666").s().p("AgrAsQgSgSAAgaQAAgYASgSQATgTAYAAQAaAAASATQASASAAAYQAAAagSASQgSASgaAAQgYAAgTgSgAgjgjQgPAPAAAUQAAAVAPAPQAPAPAUAAQAVAAAPgPQAPgPAAgVQAAgUgPgPQgPgPgVAAQgUAAgPAPg");
	this.shape_161.setTransform(72.7,18.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#666666").s().p("AgVA4IAAhtIAKAAIAAAUIAHgJQAMgNAOAAIAAALQgJAAgKAKQgOAOAAAUIAAA4g");
	this.shape_162.setTransform(62.7,18.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#666666").s().p("AgEBOIAAhjIgWAAIAAgKIAWAAIAAguIAJAAIAAAuIAXAAIAAAKIgXAAIAABjg");
	this.shape_163.setTransform(55,16.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#666666").s().p("AgWAxQgKgKAAgLIAKgDQAAAKAHAHQAHAGAIAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgEgEgLgGQgLgHgFgFQgIgIAAgLQAAgLAIgHQAHgIAKAAQALAAAHAHQAHAHAAAJIAAABIgIADQgCgIgEgFQgEgEgHAAQgGAAgEAFQgFAFAAAGQAAAHAFAFIALAJQAOAHAGAGQAKAJAAAOQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_164.setTransform(46.8,18.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#666666").s().p("AglAsQgSgSAAgaQAAgYASgSQASgTAZAAQAVAAARAOIAFAFIACACIgIAHIhGBHQAOANATAAQAVAAAPgPIAEgEIAKAEIgHAIQgRASgaAAQgZAAgSgSgAgdgjQgPAPAAAUQAAASAKANIBHhHQgOgKgRAAQgUAAgPAPg");
	this.shape_165.setTransform(35.7,18.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#666666").s().p("AgfAsQgNgNAAgSIAAhEIAKAAIAABDQAAAOAKAKQALAKANAAQAOAAALgKQAKgKAAgOIAAhDIAKAAIAABEQgBASgMANQgMAMgTAAQgUAAgMgMg");
	this.shape_166.setTransform(22.9,19.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#666666").s().p("AAvBaIhdihIAAChIgKAAIAAizIALAAIBcCfIAAifIAKAAIAACzg");
	this.shape_167.setTransform(9.4,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol219, new cjs.Rectangle(0,0,781.5,110.8), null);


(lib.Symbol215 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AgRDLQgRgEgJgFQgMgHAAgLIABgFQAAgEADgCQADgDADAAQAEABADACQACADAAAFIAAADIACACQAHADAPAEQAMAEALgEQAJgDAEgHQAFgLADgOQADgNACgTQACgQgEgZQgFgZgGgVQgFgUgJgNQgKgPgIgSQgKgTgEgTIgHgcQgEgNgBgRQAAgSAHgPQAGgPAJgKQALgNATgCIAQgBQAEAAADADQADACAAAEQABADgDAEQgDADgDAAIgQABQgMABgGAHQgHAJgFALQgFALAAAOQAAAPADALIAIAdQAEAQAHASQAJARAJAOQALAPAGAXQAGAWAFAbQAEAagBATQgCATgEAPQgEARgGAMQgHAOgRAGQgIADgIAAQgIAAgJgDg");
	this.shape.setTransform(381.4,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AAADIQgJgCgOgNQgNgMgLgYQgKgXgDgkQgCgjgDghQgDggAAgtIADhQQABgmACgHIABgIQAAgEADgCQADgDAEABQAEAAACADQACADgBAEIAAAIIgCArIgDBRQgBArADAgIAGBDQACAhAKAVQAIAUALAJQAJAKAEAAQAFABAIgCQAHgDAEgKQAFgOAEgXQADgZAEgTQAEgSACgbQACgagCgdIgDg6IgEg2QgEgagBgTIAAgTQAAgDACgDQADgDAEAAQAEAAACACQADADAAADIABATQABASADAaQADAaABAdIAEA6QACAegCAcQgDAcgEATQgEASgDAYQgEAagGAPQgHATgPAFQgJADgHAAIgGAAg");
	this.shape_1.setTransform(363.2,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AgRDLQgRgEgJgFQgMgHAAgLIABgFQAAgEADgCQADgDADAAQAEABADACQACADAAAFIAAADIACACQAHADAPAEQAMAEALgEQAJgDAEgHQAFgLADgOQADgNACgTQACgQgEgZQgFgZgGgVQgFgUgJgNQgKgPgIgSQgKgTgEgTIgHgcQgEgNgBgRQAAgSAHgPQAGgPAJgKQALgNATgCIAQgBQAEAAADADQADACAAAEQABADgDAEQgDADgDAAIgQABQgMABgGAHQgHAJgFALQgFALAAAOQAAAPADALIAIAdQAEAQAHASQAJARAJAOQALAPAGAXQAGAWAFAbQAEAagBATQgCATgEAPQgEARgGAMQgHAOgRAGQgIADgIAAQgIAAgJgDg");
	this.shape_2.setTransform(344.9,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgYC+QgHgIgKgVQgLgWgBgaQgCgXgBgdQgEgDAAgEIgBgRIgCgkQgCgSABgmQABgmAJgiQAJgkARgRQARgTAOABQANABAOALQARAMAEAXIAJAuQAFAaAAAqQABApgEAgIgJBHQgGAngEARQgGATgQAIQgQAIgIABQgLAAgKgJgAgPinQgNANgIAfQgJAgAAAlIgBAlQAGACABAGIAAAPQACAQAAAgIACA5QACAYAJASQAJASAFAGQADADAEAAQAEgBALgFQAKgFADgLQAEgQAGglIAJhHQADgfAAgoQAAgogFgZIgJguQgDgQgKgHQgLgIgIgBQgEAAgMANg");
	this.shape_3.setTransform(300.9,29.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgYC+QgHgIgKgVQgLgWgBgaQgCgXgBgdQgEgDAAgEIgBgRIgCgkQgCgSABgmQABgmAJgiQAJgkARgRQARgTAOABQANABAOALQARAMAEAXIAJAuQAFAaAAAqQABApgEAgIgJBHQgGAngEARQgGATgQAIQgQAIgIABQgLAAgKgJgAgPinQgNANgIAfQgJAgAAAlIgBAlQAGACABAGIAAAPQACAQAAAgIACA5QACAYAJASQAJASAFAGQADADAEAAQAEgBALgFQAKgFADgLQAEgQAGglIAJhHQADgfAAgoQAAgogFgZIgJguQgDgQgKgHQgLgIgIgBQgEAAgMANg");
	this.shape_4.setTransform(282,29.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AgYC+QgHgIgKgVQgLgWgBgaQgCgXgBgdQgEgDAAgEIgBgRIgCgkQgCgSABgmQABgmAJgiQAJgkARgRQARgTAOABQANABAOALQARAMAEAXIAJAuQAFAaAAAqQABApgEAgIgJBHQgGAngEARQgGATgQAIQgQAIgIABQgLAAgKgJgAgPinQgNANgIAfQgJAgAAAlIgBAlQAGACABAGIAAAPQACAQAAAgIACA5QACAYAJASQAJASAFAGQADADAEAAQAEgBALgFQAKgFADgLQAEgQAGglIAJhHQADgfAAgoQAAgogFgZIgJguQgDgQgKgHQgLgIgIgBQgEAAgMANg");
	this.shape_5.setTransform(263.2,29.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("AgEAjQgEgCgBgDQgCgEABgDIACgEIACgNQABgIgCgJIgEgLQgBgEACgDQACgDADgCQAEgBADACQADACABAEIADALQAEANgCALIgDAQIgCAFQgBAEgDABIgDABIgDAAg");
	this.shape_6.setTransform(249.7,49.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("AgLDDIgPgCQgEgBgCgDQgDgEABgDQABgEADgCQADgDADABIAQACQAMACAHgEQAJgEAIgKQAIgIACgUIADgoQAAgQgDgPQgCgQgDgMQgDgLgJgJQgKgKgHgEQgOgJAEgNQACgHAEgLIAQgnQALgZgDgXQgCgXgNgNQgMgNgGABQgIABgLAHIgLAIIgBAEQgBAEgEACQgDABgEgBQgDgBgCgDQgCgEABgDIACgFQACgHAQgLQAOgJANgBQAOgCATATQASASADAdQADAcgNAeIgQAmIgGAPIADACQAJAGALALQANAMAEAPQAEAOACARQACARAAARIgDApQgCAagMANQgLANgLAGQgKAEgLAAIgKAAg");
	this.shape_7.setTransform(236.8,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AAlC/QgDgDgBgEIAAgFIgEgSIgGgeIgGghIgIgpIgCAAIgWACQgNACgIgCQgPgEAAgLIAAgJIABgRIABgaIACglIABgtQABgbAFgiIAGghQABgEADgCQADgCAEAAQAEABACAEQADADgBADIgGAhQgGAggBAaIgBAtIgBAjIgCAdIgBAQIAAAGIARAAIAUgCIACgBQgGgggCgmIgEgvIgBgFQAAgDACgEQADgDADAAQAEgBADADQADADAAADIAAAFIAFAvQACAnAHAhIAMACIAGAAQADAAACADQAEAEgBADQgBAEgDADQgDACgEAAIgEgBIgIAAIAHAlIAHAhIAFAdIAEAUIABAFQAAAFgDACQgCADgDABIgCAAQgDAAgCgCg");
	this.shape_8.setTransform(220,30.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("AgNDGQgUgNgKgSQgKgSgCgqQgCgjACgnIgBgHIABgEIABgFIABgLQAEggAGgkQAIguALgiIAOgrIADgKQABgEAEgBQACgCAEABQADABACADQACAEgCAEIgCAJIgNArQgLAhgIAuIgIA1IACgCQAXgUATgBQAUgCAKAJQALAIADAbQADAagBAiQgBAhgFAfQgFAigRASQgJALgLACIgFAAQgIAAgJgFgAAMgKQgNABgRAPIgPANIgCAEIgBAEQgDApACAmQADAlAIAPQAIAOAPAKQAEAEAFgBQAEgBAFgGQAOgOAEgcQAEgeABghQABgggCgYQgDgUgEgEQgEgEgLAAIgDABg");
	this.shape_9.setTransform(203.3,30.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0000").s().p("AgTDBQgLgEAAgKIAAgMIAAgYIgBgqIgCgrIAAgrIAAguQACgXgBgZIABgwQABgWADgOQADgOAHgHQAGgIAHgBQAEgCAOABIALABQAFAAACACQADADgBAEQAAAEgDACQgCADgEAAIgMgBIgNABIgEAEQgCADgEAKQgCAMgBAUIgBAvQABAagBAXIAAAFIACAAIAGAAIAQAAIALABQADAAADADQADADAAAEQAAADgDADQgDACgEAAIgLAAIgPgBIgGAAIgDAAIAAAWIABAqIABAsIABAqIAAAZIAAAHQAEACAHgBIARAAIAIAAQAEAAACADQADACAAAEQAAAEgDADQgCADgEAAIgIAAIgQAAIgFAAQgIAAgGgCg");
	this.shape_10.setTransform(162.2,31);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0000").s().p("Ag4DEQgEAAgCgDQgDgDABgFQgEgDAAgEIABgdIAChEIABhPIABhCIgBgwQgBgWgDgUIgDgZQgCgHAFgEQAFgEAFgBIAJAAQARgBAMADQAMADASAOQATANAPAcQAPAaAIAdQAJAfgGAdQgFAbgIATIgMAdIgLAfQgHAUgNAQQgLAOgDAGIgGALQgCAGgGAGQgFAGgJAGIgOALIgHAGQgDACgDAAIgBAAgAgxicQACAVABAWQACAVAAAcIgBBDIgCBPIgCBDIAAAUIALgIIAKgIQAEgEABgDIAHgNQAEgIAMgPQAKgNAHgRIALgfQAEgNAIgSQAHgRAFgYQAFgZgIgaQgHgcgOgZQgNgXgPgLQgRgMgIgCQgIgDgPABIgEAAIADAVg");
	this.shape_11.setTransform(145.8,31.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("AgRDLQgRgEgJgFQgMgHAAgLIABgFQAAgEADgCQADgDADAAQAEABADACQACADAAAFIAAADIACACQAHADAPAEQAMAEALgEQAJgDAEgHQAFgLADgOQADgNACgTQACgQgEgZQgFgZgGgVQgFgUgJgNQgKgPgIgSQgKgTgEgTIgHgcQgEgNgBgRQAAgSAHgPQAGgPAJgKQALgNATgCIAQgBQAEAAADADQADACAAAEQABADgDAEQgDADgDAAIgQABQgMABgGAHQgHAJgFALQgFALAAAOQAAAPADALIAIAdQAEAQAHASQAJARAJAOQALAPAGAXQAGAWAFAbQAEAagBATQgCATgEAPQgEARgGAMQgHAOgRAGQgIADgIAAQgIAAgJgDg");
	this.shape_12.setTransform(101,31.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AA5C2QgEAAgDgEQgCgCAAgEIABgFIgBgMQAAgJgFgXQgGgYgGgrIgEgcIgFAAIgWABIgfACQgKArgDAaIgEAzIAAAQQAAAEgDADQgDACgEAAQgDAAgDgDQgDgDAAgEIABgQIAFgzQACgaAJgpIgBAAQgEAAgDgDQgDgCAAgEQAAgEADgDQACgDAEAAIAFAAIAEgQQAPhCAFgfQAFgfAHgTQAGgTAFgGQADgFAEgBQADgBACADIAEAHIADAJIACAHIAAAEIAIA5QAHAkADAjIAKBNQAGArAFAXQAGAXABALQABALAAAFIgBAFQgBADgDADQgCACgDAAIgBAAgAgEhgQgFAfgQBCIgCALIAagBIAYgBIABAAIgEggQgDgigGgkIgHgvQgEAQgEAbg");
	this.shape_13.setTransform(82.9,30.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("AhdC5QgCgDAAgEIABgSIAFgyIAGg/QAEggADgkIAIhGQAEgiAAgSIABgXQAAgJAKACQAJADAAADQACAIAHAuQAGArAPAzQAOAqAEAeQAFgYAIgeQAMgtADgbQAEgcAJglIALgqQAIgUAMAlIACAJIAFBEQAEAoABAZIADBLIAEBJIABAhIAAALQAAADgCADQgDADgEAAQgEAAgCgCQgDgDAAgEIAAgKIgCghIgDhJIgEhLIgFhBIgDgpQgIAggCAXQgFAdgLAtQgMAtgFAdIgGAjIAAACIgCADIgCAEQgBAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAQgDAAgCgDIgFgFQgBgDABgDIAAgDQgBgKgEgfQgEgegPgxQgMgogHglIAAABIgHBHIgHBEIgHA/IgFAxIgBATQAAADgDADQgDACgEAAQgEAAgCgDg");
	this.shape_14.setTransform(60.7,30.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0000").s().p("AgRDLQgRgEgJgFQgMgHAAgLIABgFQAAgEADgCQADgDADAAQAEABADACQACADAAAFIAAADIACACQAHADAPAEQAMAEALgEQAJgDAEgHQAFgLADgOQADgNACgTQACgQgEgZQgFgZgGgVQgFgUgJgNQgKgPgIgSQgKgTgEgTIgHgcQgEgNgBgRQAAgSAHgPQAGgPAJgKQALgNATgCIAQgBQAEAAADADQADACAAAEQABADgDAEQgDADgDAAIgQABQgMABgGAHQgHAJgFALQgFALAAAOQAAAPADALIAIAdQAEAQAHASQAJARAJAOQALAPAGAXQAGAWAFAbQAEAagBATQgCATgEAPQgEARgGAMQgHAOgRAGQgIADgIAAQgIAAgJgDg");
	this.shape_15.setTransform(13.6,31.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("AgWC2QgRgSgMgeQgNgdgDgmQgDglAAgpIAAgZIAAgCIAAgJIgCggQgBgXACgQQACgSAPgaQAQgcALgFQAJgEAJAEQAJADANAKQAZAUANAnQANAlAGAnQAFAngDA4QgCA5gNAgIgPApQgGAOgUAFIgIABQgQAAgOgQgAgTiyQgGADgNAWQgNAXgCAOIgBATQAEACAAAFIgBATIgBA8QAAAoADAkQAEAjALAbQAMAbANAPQALANAJgDQALgCACgGIAQgpQAMgdACg2QADg2gGglQgFglgNgkQgLgigUgQQgOgLgGAAIgBAAg");
	this.shape_16.setTransform(-5.1,31.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("AhdC5QgCgDAAgEIABgSIAFgyIAGg/QAEggADgkIAIhGQAEgiAAgSIABgXQAAgJAKACQAJADAAADQACAIAHAuQAGArAPAzQAOAqAEAeQAFgYAIgeQAMgtADgbQAEgcAJglIALgqQAIgUAMAlIACAJIAFBEQAEAoABAZIADBLIAEBJIABAhIAAALQAAADgCADQgDADgEAAQgEAAgCgCQgDgDAAgEIAAgKIgCghIgDhJIgEhLIgFhBIgDgpQgIAggCAXQgFAdgLAtQgMAtgFAdIgGAjIAAACIgCADIgCAEQgBAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAQgDAAgCgDIgFgFQgBgDABgDIAAgDQgBgKgEgfQgEgegPgxQgMgogHglIAAABIgHBHIgHBEIgHA/IgFAxIgBATQAAADgDADQgDACgEAAQgEAAgCgDg");
	this.shape_17.setTransform(-27.8,30.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0000").s().p("AgTDBQgLgEAAgKIAAgMIAAgYIgBgqIgCgrIAAgrIAAguQACgXgBgZIABgwQABgWADgOQADgOAHgHQAGgIAHgBQAEgCAOABIALABQAFAAACACQADADgBAEQAAAEgDACQgCADgEAAIgMgBIgNABIgEAEQgCADgEAKQgCAMgBAUIgBAvQABAagBAXIAAAFIACAAIAGAAIAQAAIALABQADAAADADQADADAAAEQAAADgDADQgDACgEAAIgLAAIgPgBIgGAAIgDAAIAAAWIABAqIABAsIABAqIAAAZIAAAHQAEACAHgBIARAAIAIAAQAEAAACADQADACAAAEQAAAEgDADQgCADgEAAIgIAAIgQAAIgFAAQgIAAgGgCg");
	this.shape_18.setTransform(-46.7,31);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AAeDCQgDgFgEgSQgEgPgLgbQgKgcgJgiQgIghgEgdQgEgbgIgeIgLgmIAAAUIgCBTQgBAsgDAhIgFA5IgCAWQgBAEgDACQgDADgDgBQgEAAgDgDQgCgDAAgEIADgWIAFg4QACghABgsIAChTQABgmgCgYIgBgiIAAgCIgCgCIAAgDQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQADgCAEgBQAHgCAEADQADAEAAAFIgBAFQACAMAJAgIASBBQAJAfAEAcQAEAcAHAhQAIAgALAbIAJAXQACgdAEgZIAMhQQAHgxABgZIAAg5IAAguQABgMgBgGIAAgFQAAgEADgDQADgCAEgBQADAAADADQADADAAAEIAAAFQABAFgBANIAAAuIgBA6QAAAagIAyIgMBQQgEAdgCAjQgBAYgIANQgDAFgDAAQgDAAgEgGg");
	this.shape_19.setTransform(-63.8,29.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC0000").s().p("AgTDBQgLgEAAgKIAAgMIAAgYIgBgqIgCgrIAAgrIAAguQACgXgBgZIABgwQABgWADgOQADgOAHgHQAGgIAHgBQAEgCAOABIALABQAFAAACACQADADgBAEQAAAEgDACQgCADgEAAIgMgBIgNABIgEAEQgCADgEAKQgCAMgBAUIgBAvQABAagBAXIAAAFIACAAIAGAAIAQAAIALABQADAAADADQADADAAAEQAAADgDADQgDACgEAAIgLAAIgPgBIgGAAIgDAAIAAAWIABAqIABAsIABAqIAAAZIAAAHQAEACAHgBIARAAIAIAAQAEAAACADQADACAAAEQAAAEgDADQgCADgEAAIgIAAIgQAAIgFAAQgIAAgGgCg");
	this.shape_20.setTransform(-80.9,31);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("AAkDKQgCgDAAgDIgBgGIgDgaQgCgVgDgUIgKg8IgNhUQgFgtgDgtIgEg7IgBgLIgbABIgIABQgEAAgDgCQgDgCAAgEQgBgEADgDQABgDAEAAIAHgBIAhgCIAngCIARgBQAFAAACACQADADAAAEQABADgDADQgCADgFAAIgRACIgYABIABALIAEA7QADAsAGAsQAGAsAGAoIAKA8IAFAqIAEAaIAAAGQAAAEgDADQgBADgEAAQgEAAgEgCg");
	this.shape_21.setTransform(-95.9,31.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC0000").s().p("Ai8DzYAAAAAAgDABgGYAAgGABgIAAgLYAAgLAAgNABgPYAAgHAAgIAAgIYABgEgBgFABgEYAAgEAAgEABgFYABgSAAgVAEgTYABgJABgLACgJYABgFABgGABgFIABgJIACgHYACgEABgEABgFYACgFACgFACgFIACgHIADgIYACgEACgEACgFYADgFADgFADgGIAEgIIAFgGIAIgMIAKgMYADgEAEgDAEgEIAFgFIACgBIABgBIAAAAYgEADADgDgBABIAAAAIAEgDIAPgKIANgIYACgCACgBACgBIAHgEYAFgCAFgDAFgCYAFgCAFgDAFgCIAHgDIAAAAYAAAAgCABABgBIABAAIABAAIACgBIAEgCYAFgBAFgCAFgCIAIgDIAHgCYAKgDAJgDAJgCYAUgFASgDASgDYAIgBAJgBAIgBYAIAAAIgBAHAAYAHgBAHABAGAAYAHAAAGAAAFAAYAKAAAJABAGAAYAGAAADAAAAAAIAAAAYAAAAgDgBgFgCYgGgDgHgEgLgEYgKgDgNgFgPgEYgHgBgIgCgJgCYgIgBgJgBgKgBYgTgCgVAAgWABYgLABgMACgMACIgJABYgCABgCABgDAAYgGACgFABgGABIgEABIgCABIgBAAIAAAAIgCABIgJADYgGACgGACgGACYgGACgGADgGACIgJAEYgDACgDABgDACYgGADgGAEgGADIgPAKIgEADIAAAAIgCACIgBAAIgBABIgCACIgIAHYgFAFgFAFgEAFIgOAQYgEAGgEAGgEAGIgGAKIgEAIYgCAFgDAGgDAFIgBACIAAAAIAAACIgBACIgCAFIgDAJIgEAJIgCAJYgCAHgCAGgBAGYgBAHgBAGgCAHIgBAIIgBAJYAAAFAAAGgBAFYAAANAAALABALYAAAYAEASACATYABAEABAFAAAEYABAFABAEABAEYACAJACAIACAHYADAPAFAMADALYADAKADAIACAFYACAGABADAAAAIAAAA");
	this.shape_22.setTransform(200,-24.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC0000").s().p("AiBjOIAMAQIANAPYAFAFAEAEAEAGYAFAEAEAGAEAEYAJAKAIAJAJAKIANAOIANAOYAEAEAFAFAEAFYAFAEAFAFADAEYAIAKAIAJAIAJYAEAEAFAFAEAEIANAOIALANIAFAGIACACYAAAAAAAAAAAAYAAAAAAAAAAgBYgBgBAAgBAAgBIgBgFYgBgBAAgCAAgBYABgBAAAAAAgBYAAgBAAgBAAAAYAAgBAAAAABgBYAAAAAAAAAAgBYAAAAAAAAAAAAIAAAAYAAABAAAAAAAAYAAAAgBABAAAAYgBABgBABAAABIACgCIgMAKYgEAEgEAEgDAEYgEAEgDAEgEAEIgJANYgHAIgFAJgGAIYgFAJgFAIgFAJYgGAJgEAJgFAJYgEAJgFAJgEAKIgGAOYgCAEgBAFgCAFYgCAFgCAEgBAFIgFAPIAAAAIAMgKYAEgEADgDAEgEYAHgHAHgHAHgHIAUgVIAUgVYAHgHAHgIAHgGYAGgHAHgHAHgHIAKgJIAKgKYADgDAEgDADgDIAKgIIABAAYAAgBABAAABgBYABgCACgCACgCYABgBABgBABgBYABgCABgBABgBIACgDYAAgBABAAAAgBYACgDABgBABgDIABgEYAAgBABgCAAgCYABgCAAgCAAgCYAAgCAAgCAAgCIAAgBYgBgBAAgCgBgBYgBgEgCgEgCgEIgCgCYgBgBAAAAAAgBIgCgCIgHgJIgOgPIgNgOYgFgFgFgFgFgFYgKgJgKgJgKgJYgFgEgFgEgFgEYgFgEgGgEgFgDIgPgMIgQgLYgLgHgMgHgLgGYgGgEgGgDgGgDYgFgDgGgDgGgDIgSgIIgTgHIAAAA");
	this.shape_23.setTransform(223.2,-45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol215, new cjs.Rectangle(-106.5,-65.9,526.3,182.4), null);


(lib.Symbol213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C1F7D").s().p("AgjCSQgKgJAAgRQAAgRAKgJQAJgJARAAQAQAAAKAJQAJAJAAARQAAAQgJAKQgKAJgQAAQgRAAgJgJgAgmAyIAAgPQAAgUAIgPQAJgNAVgRQAWgPAHgKQAGgJAAgMQAAgNgKgHQgJgHgRAAQgfAAgnAUIgXgtQAugaAyAAQArAAAZAUQAZAVAAAiQAAAWgLARQgKAQgdAUQgTAOgFAIQgGAHAAAMIAAANg");
	this.shape.setTransform(349.5,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C1F7D").s().p("Ag1B0QgRgEgPgGIAAg0QAQAIAWAGQAXAFAQAAQAhAAAAgUQAAgHgEgEQgFgFgLgGIgcgOQgbgLgNgIQgMgKgGgMQgFgMAAgSQAAgeAXgRQAYgRArAAQApAAAoASIgTAtQgSgHgPgFQgPgEgPAAQgbAAAAAOQAAAJAJAGQAJAGAdAMQAbALAMAKQANAIAGAMQAGANAAARQAAAjgZASQgYATgwAAQgZAAgSgDg");
	this.shape_1.setTransform(329.7,35.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C1F7D").s().p("Ag6BoQgZgOgOgbQgNgbAAgkQAAg3AdggQAegfAzAAQAiAAAZAPQAZAOAOAbQANAbAAAjQAAA4geAfQgdAgg0AAQggAAgagPgAgkgyQgLAQABAiQAAAiALARQALASAYAAQAZAAALgSQALgRAAgiQAAghgLgRQgLgRgZAAQgYAAgMARg");
	this.shape_2.setTransform(306.1,35.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C1F7D").s().p("ABwB1IAAiFQAAgZgJgMQgIgNgSAAQgXAAgLARQgMAQAAAjIAABzIg9AAIAAiFQgBgZgHgMQgJgNgSAAQgYAAgLASQgKARAAAoIAABsIg/AAIAAjlIAvAAIAJAeIAEAAQAIgQASgJQASgJAWAAQAzAAASAiIAFAAQAKgQARgJQATgJAWAAQAnAAAUAUQAUAUAAAsIAACVg");
	this.shape_3.setTransform(272.5,35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C1F7D").s().p("Ag6BoQgZgOgNgbQgOgbAAgkQAAg3AdggQAdgfA1AAQAgAAAaAPQAZAOAOAbQANAbAAAjQAAA4gdAfQgeAgg0AAQghAAgZgPgAgjgyQgLAQAAAiQgBAiAMARQALASAYAAQAZAAAMgSQAKgRAAgiQAAghgLgRQgLgRgZAAQgYAAgLARg");
	this.shape_4.setTransform(238.8,35.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C1F7D").s().p("Ag1B0QgSgEgPgGIAAg0QASAIAWAGQAVAFARAAQAhAAAAgUQAAgHgFgEQgEgFgLgGIgdgOQgagLgMgIQgNgKgFgMQgGgMAAgSQAAgeAYgRQAXgRAqAAQAqAAAnASIgTAtQgRgHgPgFQgPgEgQAAQgaAAAAAOQAAAJAJAGQAJAGAdAMQAbALANAKQAMAIAGAMQAGANAAARQAAAjgYASQgZATgwAAQgZAAgSgDg");
	this.shape_5.setTransform(215.5,35.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6C1F7D").s().p("Ag0B0QgTgEgOgGIAAg0QARAIAVAGQAXAFAQAAQAhAAAAgUQAAgHgEgEQgFgFgLgGIgcgOQgbgLgMgIQgNgKgFgMQgGgMAAgSQAAgeAYgRQAXgRArAAQApAAAnASIgSAtQgSgHgPgFQgOgEgQAAQgbAAAAAOQAAAJAJAGQAJAGAdAMQAbALANAKQAMAIAGAMQAGANAAARQAAAjgYASQgZATgwAAQgZAAgRgDg");
	this.shape_6.setTransform(183.7,35.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6C1F7D").s().p("AhKBYQgegeAAg4QAAg5AcgfQAdggAyAAQAwAAAbAcQAbAcAAAwIAAAeIiSAAQABAaAPAPQAPAPAZAAQAUAAATgEQASgEAVgKIAAAxQgRAIgSAEQgTAEgbAAQg2AAgggfgAgbg9QgLANgCAXIBXAAQgBgXgLgNQgMgMgUAAQgSAAgMAMg");
	this.shape_7.setTransform(160.8,35.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6C1F7D").s().p("AArB1IAAiFQAAgZgJgMQgIgNgUAAQgZAAgMASQgLARAAAoIAABsIg/AAIAAjlIAwAAIAIAeIAEAAQAKgRATgIQARgJAXAAQAoAAAVAWQAVAVAAApIAACVg");
	this.shape_8.setTransform(134.6,35.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C1F7D").s().p("AhKBYQgegeAAg4QAAg5AdgfQAcggAyAAQAxAAAaAcQAbAcAAAwIAAAeIiSAAQABAaAOAPQAQAPAZAAQAVAAASgEQASgEAVgKIAAAxQgRAIgSAEQgTAEgbAAQg3AAgfgfgAgbg9QgLANgCAXIBXAAQAAgXgMgNQgMgMgTAAQgUAAgLAMg");
	this.shape_9.setTransform(108.4,35.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C1F7D").s().p("AgeCfIAAjkIA9AAIAADkgAghiAQAAgfAhABQAigBAAAfQAAAPgIAIQgJAHgRAAQghAAAAgeg");
	this.shape_10.setTransform(89.5,31);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6C1F7D").s().p("AhUBfQgVgVAAgpIAAiVIA/AAIAACFQAAAZAJANQAJAMATAAQAZAAAMgRQALgSAAgoIAAhsIA/AAIAADlIgwAAIgIgeIgEAAQgKAQgSAJQgSAJgXAAQgpAAgUgWg");
	this.shape_11.setTransform(69.2,35.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6C1F7D").s().p("AA8C8Ig3hDIgFAAQhEAAglgpQglgoAAhJQAAhLAlgnQAlgoBEAAQBFAAAlAoQAlAnAABLQAAA0gTAkQgTAjgkARIBIBRgAg4htQgTAaAAAyQAAAxATAaQATAaAlAAQBMgBAAhkQAAhlhMAAQglAAgTAZg");
	this.shape_12.setTransform(38.8,35.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6C1F7D").s().p("AhECHQgagUAAgiQAAgWAKgRQAKgQAegVQATgOAFgHQAGgIAAgMIAAgNIA1AAIAAAQQAAAUgJANQgJAPgVAQQgWAQgHAJQgFAJAAANQAAALAJAIQAJAHARAAQAQAAATgFQASgGAUgJIAUAtQgTAMgaAHQgZAHgWAAQgsAAgagUgAgPhdQgKgJAAgRQAAgQAKgJQAJgKAQAAQARAAAKAJQAJAKAAAQQAAASgJAIQgKAJgRAAQgRAAgIgJg");
	this.shape_13.setTransform(12.7,39.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6C1F7D").s().p("AgPAQQgFgGAAgKQAAgKAFgFQAGgGAJABQAKgBAGAGQAFAGAAAJQAAAKgFAGQgGAGgKgBQgJABgGgGg");
	this.shape_14.setTransform(667.8,365.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_15.setTransform(654.9,359.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6C1F7D").s().p("AgRBOIg8ibIAjAAIAhBaQAHAXACAOIABAAQABgKAJgbIAfhaIAjAAIg7Cbg");
	this.shape_16.setTransform(638.3,359.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAfAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAFAFAAAJQAAAJgFAFQgFAEgJAAQgIAAgFgEg");
	this.shape_17.setTransform(626.5,356.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgVAAIAAgPIAWgMIAMghIAUAAIAAAjIAsAAIAAAZIgsAAIAABTQAAAMAFAGQAHAFAJAAQAMAAANgEIAAAZIgPAFQgIABgKAAQguAAAAgyg");
	this.shape_18.setTransform(616.7,358.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQgBgPgHgHQgHgIgOAAQgLAAgMAEQgLADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_19.setTransform(602.2,359.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_20.setTransform(585.9,359.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOAMgIQANgJAOAAQAKAAAHACIgDAfQgIgCgHAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_21.setTransform(572.3,359.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_22.setTransform(558.1,359.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_23.setTransform(534.3,359.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgVgKQgbgJgJgLQgKgKAAgRQABgUAPgLQARgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAFAIQADAIABAMQgBAXgQAMQgRAMgeAAQgfAAgUgJg");
	this.shape_24.setTransform(518.5,359.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_25.setTransform(503,359.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_26.setTransform(487.7,359.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_27.setTransform(471.5,359.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAIgOALgIQANgJAOAAQAKAAAHACIgDAfQgIgCgHAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_28.setTransform(457.3,359.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6C1F7D").s().p("AhGByIAAjhIAbAAIAEAVIACAAQAQgXAeAAQAdgBARAWQAQAVAAAnQAAAlgRAVQgRAWgdAAQgcAAgRgWIgCAAIACAYIAABAgAgchLQgJAMAAAZIAAAGQAAAcAJAMQAJANAUAAQARgBAKgOQAIgNABgaQgBgagIgOQgKgOgSABQgSgBgKAMg");
	this.shape_29.setTransform(441.6,363.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAhAAIAADbg");
	this.shape_30.setTransform(420.5,356.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_31.setTransform(408.1,359.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_32.setTransform(383.3,359.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_33.setTransform(365,356.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_34.setTransform(347.6,359.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgVAAIAAgPIAWgMIAMghIAUAAIAAAjIAsAAIAAAZIgsAAIAABTQgBAMAHAGQAFAFAKAAQANAAALgEIAAAZIgOAFQgIABgKAAQguAAAAgyg");
	this.shape_35.setTransform(332.9,358.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_36.setTransform(311.4,359.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgVAAIAAgPIAWgMIAMghIAUAAIAAAjIAsAAIAAAZIgsAAIAABTQAAAMAFAGQAHAFAJAAQANAAAMgEIAAAZIgPAFQgJABgJAAQguAAAAgyg");
	this.shape_37.setTransform(297.3,358.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_38.setTransform(282.5,359.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQAAgYASgLQATgMAjgCIAbAAIAAgJQAAgPgGgHQgIgIgOAAQgLAAgLAEQgLADgLAFIgLgYQANgGAPgEQAQgDAMAAQAeAAAPANQAQANgBAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgMAFgQAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQAAAKAHAGQAGAGAMAAQARAAALgKQALgLAAgSIAAgOg");
	this.shape_39.setTransform(264.4,359.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOANgIQAMgJAOAAQAKAAAHACIgDAfQgIgCgHAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_40.setTransform(251.2,359.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAhAAIAABgQAAASAIAJQAHAJAQAAQAUAAAJgNQALgMgBgdIAAhOIAiAAIAACcIgbAAIgEgVIgCAAQgGALgOAGQgMAHgPAAQgdAAgOgPg");
	this.shape_41.setTransform(234.7,360);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_42.setTransform(216.1,356.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAcANAXAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgKgKABgRQAAgUAPgLQARgLAaAAQAcAAAZALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQggAAgSgJg");
	this.shape_43.setTransform(193,359.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_44.setTransform(177.5,359.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAhAAIAADbg");
	this.shape_45.setTransform(165.1,356.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgHgHQgIgIgOAAQgLAAgLAEQgMADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_46.setTransform(152.2,359.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAgAAIAACbgAgMhLQgGgFAAgJQAAgJAGgFQAEgEAIAAQAJAAAFAEQAFAFgBAJQABAJgFAFQgFAEgJAAQgIAAgEgEg");
	this.shape_47.setTransform(140.2,356.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_48.setTransform(129.2,359.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAhAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAEAFABAJQgBAJgEAFQgFAEgJAAQgIAAgFgEg");
	this.shape_49.setTransform(117.8,356.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_50.setTransform(104.6,359.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAfAAIAACbgAgMhLQgFgFgBgJQABgJAFgFQAEgEAIAAQAJAAAFAEQAFAFgBAJQABAJgFAFQgFAEgJAAQgIAAgEgEg");
	this.shape_51.setTransform(91.3,356.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgJgKAAgRQgBgUARgLQAQgLAbAAQAcAAAYALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQgfAAgTgJg");
	this.shape_52.setTransform(72.7,359.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQgBgPgGgHQgIgIgOAAQgLAAgLAEQgMADgJAFIgMgYQANgGAPgEQAQgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHAAAPQABAKAFAGQAHAGAMAAQASAAAKgKQAMgLAAgSIAAgOg");
	this.shape_53.setTransform(56.7,359.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_54.setTransform(40.4,359.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_55.setTransform(22.6,356.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAhAAIAACbgAgMhLQgGgFAAgJQAAgJAGgFQAEgEAIAAQAJAAAFAEQAEAFAAAJQAAAJgEAFQgFAEgJAAQgIAAgEgEg");
	this.shape_56.setTransform(10,356.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgKgKAAgRQABgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQgfAAgUgJg");
	this.shape_57.setTransform(677.7,325.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgGgIgPAAQgLAAgMAEQgLADgJAFIgLgYQANgGAPgEQAPgDAMAAQAeAAAQANQAPANAAAcIAABoIgYAAIgHgWIgBAAQgLAPgMAFQgLAFgSAAQgWAAgNgMgAANAEQgXABgKAHQgKAHAAAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_58.setTransform(661.7,325.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6C1F7D").s().p("AgPBuIAAjbIAfAAIAADbg");
	this.shape_59.setTransform(649.7,322.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_60.setTransform(629.8,325.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_61.setTransform(611.9,322.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_62.setTransform(586.7,325.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6C1F7D").s().p("AgmBnQgRgKgJgTQgJgSAAgZQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAngTAVQgUAWgjgBQgVABgRgKgAgegIQgJANAAAaQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOgAgVhBIAAgEIARgWIANgVIAmAAIAAADIgVAXQgQANgJAIg");
	this.shape_63.setTransform(568.6,322.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAfAAIAACbgAgMhLQgFgFgBgJQABgJAFgFQAEgEAIAAQAJAAAFAEQAFAFgBAJQABAJgFAFQgFAEgJAAQgIAAgEgEg");
	this.shape_64.setTransform(555.7,322.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_65.setTransform(544.7,325.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgHgIgOAAQgLAAgMAEQgLADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_66.setTransform(528.4,325.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAIgOAMgIQAMgJAOAAQALAAAGACIgEAfQgGgCgIAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_67.setTransform(515.2,325.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6C1F7D").s().p("Ag7BoQgQgMAAgVQAAgPAJgJQAJgKAQgEQgGgCgFgHQgEgGAAgIQAAgIAFgFQAFgGAKgGQgNgGgHgLQgIgMAAgQQAAgaAQgNQAQgPAeAAIANACIALACIA2AAIAAASIgaAEQADAGADAHQACAHAAAIQAAAZgRANQgQAOgdAAIgNgBQgLAGAAAJQAAAFAFADQAFACANAAIAbAAQAaAAANALQAOAMAAAUQAAAbgWAOQgWAPgpAAQgggBgRgKgAglAzQgJAHAAAMQAAAKAKAGQAKAGARgBQAaABAOgIQANgIAAgNQAAgKgHgEQgIgEgTgBIgZAAQgOABgIAGgAgYhUQgHAJAAAPQAAAPAHAIQAIAHAOABQAcgBAAgeQAAgQgHgHQgIgJgNAAQgPAAgHAIg");
	this.shape_68.setTransform(499.8,328.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_69.setTransform(483.5,325.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgWAAIAAgPIAYgMIALghIATAAIAAAjIAtAAIAAAZIgtAAIAABTQABAMAFAGQAHAFAJAAQANAAAMgEIAAAZIgPAFQgJABgJAAQguAAAAgyg");
	this.shape_70.setTransform(469.3,323.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_71.setTransform(454.6,325.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAgAAIAACbgAgMhLQgGgFAAgJQAAgJAGgFQAEgEAIAAQAJAAAFAEQAFAFgBAJQABAJgFAFQgFAEgJAAQgIAAgEgEg");
	this.shape_72.setTransform(441.3,322.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQABgYARgLQASgMAkgCIAbAAIAAgJQABgPgIgHQgGgIgPAAQgLAAgMAEQgKADgLAFIgKgYQANgGAOgEQAQgDAMAAQAeAAAPANQAPANABAcIAABoIgYAAIgHgWIgBAAQgMAPgLAFQgMAFgQAAQgYAAgMgMgAANAEQgXABgKAHQgKAHAAAPQgBAKAHAGQAGAGAMAAQASAAALgKQALgLgBgSIAAgOg");
	this.shape_73.setTransform(420.8,325.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_74.setTransform(403.7,325.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_75.setTransform(386.1,325.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAhAAIAABgQABASAHAJQAHAJAQAAQAUAAAKgNQAKgMAAgdIAAhOIAhAAIAACcIgaAAIgFgVIgCAAQgHALgMAGQgNAHgPAAQgdAAgOgPg");
	this.shape_76.setTransform(368.5,325.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6C1F7D").s().p("AglBaIgCAAIgHATIgYAAIAAjcIAhAAIAAA1IgBARIAAAPIABAAQAQgYAeAAQAdAAAQAWQARAVAAAlQAAAngRAVQgQAWgeAAQgdAAgQgWgAgcgLQgJALAAAcIAAACQAAAdAJANQAJAMATAAQATAAAIgOQAJgOAAgaQAAg1gkAAQgTAAgJAMg");
	this.shape_77.setTransform(350.8,322.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQgBgPgGgHQgIgIgOAAQgLAAgLAEQgMADgJAFIgMgYQANgGAPgEQAQgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgMAFgQAAQgYAAgMgMgAANAEQgXABgKAHQgLAHAAAPQABAKAFAGQAHAGAMAAQASAAAKgKQAMgLAAgSIAAgOg");
	this.shape_78.setTransform(324.9,325.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAgAAIAADbg");
	this.shape_79.setTransform(312.9,322.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6C1F7D").s().p("AhHBvIAAgbQAIACAJAAQAZAAAJgcIAGgOIg/icIAlAAIAfBYQAIAUABAPIABAAQABgIAEgKIAkhpIAkAAIhDCwQgSAxgqAAQgLAAgLgCg");
	this.shape_80.setTransform(293.5,328.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQAAgYASgLQATgMAjgCIAbAAIAAgJQAAgPgGgHQgIgIgOAAQgLAAgLAEQgLADgLAFIgLgYQANgGAPgEQAQgDAMAAQAeAAAPANQAQANgBAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgMAFgQAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQAAAKAHAGQAGAGAMAAQARAAALgKQALgLAAgSIAAgOg");
	this.shape_81.setTransform(269.3,325.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6C1F7D").s().p("Ag7BoQgQgMAAgVQAAgPAJgJQAJgKAQgEQgGgCgFgHQgEgGAAgIQAAgIAFgFQAFgGAKgGQgNgGgHgLQgIgMAAgQQAAgaAQgNQAQgPAeAAIANACIALACIA2AAIAAASIgaAEQADAGADAHQACAHAAAIQAAAZgRANQgQAOgdAAIgNgBQgLAGAAAJQAAAFAFADQAFACANAAIAbAAQAaAAANALQAOAMAAAUQAAAbgWAOQgWAPgpAAQgggBgRgKgAglAzQgJAHAAAMQAAAKAKAGQAKAGARgBQAaABAOgIQANgIAAgNQAAgKgHgEQgIgEgTgBIgZAAQgOABgIAGgAgYhUQgHAJAAAPQAAAPAHAIQAIAHAOABQAcgBAAgeQAAgQgHgHQgIgJgNAAQgPAAgHAIg");
	this.shape_82.setTransform(253.2,328.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_83.setTransform(236.9,325.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOANgIQAMgJAOAAQAKAAAHACIgEAfQgHgCgHAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_84.setTransform(223.3,325.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgWAAIAAgPIAYgMIALghIATAAIAAAjIAtAAIAAAZIgtAAIAABTQAAAMAHAGQAFAFAKAAQAMAAAMgEIAAAZIgNAFQgJABgKAAQguAAAAgyg");
	this.shape_85.setTransform(210.3,323.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_86.setTransform(195.5,325.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_87.setTransform(177.9,325.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_88.setTransform(153.7,325.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_89.setTransform(135.8,322.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgJgKAAgRQgBgUARgLQAQgLAbAAQAcAAAYALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQggAAgSgJg");
	this.shape_90.setTransform(112.8,325.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_91.setTransform(96.8,325.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6C1F7D").s().p("AhGBzIAAjhIAaAAIAGAUIABAAQAQgYAeAAQAdABAQAVQARAVAAAmQAAAmgRAVQgRAWgdAAQgdAAgQgWIgCAAIACAZIAABAgAgbhKQgKALAAAaIAAAEQAAAdAJAMQAJAMATAAQASAAAJgNQAKgNgBgbQABgagKgOQgJgOgSAAQgTAAgIANg");
	this.shape_92.setTransform(79.4,328.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6C1F7D").s().p("ABSBQIAAhgQAAgSgHgJQgHgJgOAAQgUAAgIANQgJAMAAAZIAABSIghAAIAAhgQAAgSgHgJQgGgJgPAAQgTAAgJANQgJANAAAcIAABOIghAAIAAicIAaAAIAEAVIACAAQAGgMANgGQAMgGAPAAQAkAAALAZIACAAQAHgMANgGQAMgHARAAQAcAAANAOQAMAPAAAdIAABlg");
	this.shape_93.setTransform(56,325.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_94.setTransform(33.8,325.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAgAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAEAFABAJQgBAJgEAFQgFAEgJAAQgIAAgFgEg");
	this.shape_95.setTransform(21.4,322.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgVAAIAAgPIAWgMIAMghIAUAAIAAAjIAsAAIAAAZIgsAAIAABTQAAAMAFAGQAHAFAJAAQANAAAMgEIAAAZIgPAFQgJABgJAAQguAAAAgyg");
	this.shape_96.setTransform(11.5,323.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6C1F7D").s().p("AgYAjQAKglAFghIAfAAIADADQgHAbgSAog");
	this.shape_97.setTransform(711,298.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgKgKABgRQAAgUAPgLQARgLAaAAQAcAAAZALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAEAIQAEAIAAAMQAAAXgQAMQgRAMgeAAQggAAgSgJg");
	this.shape_98.setTransform(700.7,290.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_99.setTransform(684.7,290.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6C1F7D").s().p("AglCMIAAgaQAJACAKAAQAVAAAAgYIAAiuIAhAAIAACwQAAAYgMANQgNAMgXAAQgPAAgKgDgAAGhuQgFgFAAgJQAAgIAFgFQAFgFAIAAQAKAAAFAFQAEAFAAAIQAAAJgEAFQgFAFgKgBQgIABgFgFg");
	this.shape_100.setTransform(669.9,291.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgHgIgOAAQgLAAgMAEQgLADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_101.setTransform(658.9,290.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6C1F7D").s().p("AglBaIgCAAIgHATIgYAAIAAjcIAhAAIAAA1IgBARIAAAPIABAAQAQgYAeAAQAdAAAQAWQARAVAAAlQAAAngRAVQgQAWgeAAQgdAAgQgWgAgcgLQgJALAAAcIAAACQAAAdAJANQAJAMATAAQATAAAIgOQAJgOAAgaQAAg1gkAAQgTAAgJAMg");
	this.shape_102.setTransform(642.4,287.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQAAgYASgLQATgMAkgCIAbAAIAAgJQgBgPgGgHQgIgIgOAAQgLAAgLAEQgMADgKAFIgLgYQANgGAPgEQAQgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgQAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQABAKAGAGQAGAGAMAAQARAAALgKQAMgLAAgSIAAgOg");
	this.shape_103.setTransform(624,290.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOANgIQAMgJAOAAQALAAAGACIgEAfQgGgCgIAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_104.setTransform(610.8,290.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgWAAIAAgPIAYgMIALghIATAAIAAAjIAtAAIAAAZIgtAAIAABTQAAAMAHAGQAFAFAKAAQAMAAAMgEIAAAZIgNAFQgKABgJAAQguAAAAgyg");
	this.shape_105.setTransform(597.8,289.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgKgKABgRQAAgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQggAAgSgJg");
	this.shape_106.setTransform(577.7,290.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_107.setTransform(561.7,290.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAIgOAMgIQAMgJAOAAQALAAAGACIgEAfQgGgCgIAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_108.setTransform(547.6,290.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgWAAIAAgPIAYgMIALghIATAAIAAAjIAtAAIAAAZIgtAAIAABTQABAMAFAGQAHAFAJAAQANAAAMgEIAAAZIgOAFQgKABgJAAQguAAAAgyg");
	this.shape_109.setTransform(534.6,289.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgKgKAAgRQABgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQggAAgTgJg");
	this.shape_110.setTransform(522,290.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_111.setTransform(506.5,290.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAiAAIAABgQAAASAHAJQAHAJAQAAQAUAAAKgNQAJgMABgdIAAhOIAhAAIAACcIgbAAIgEgVIgBAAQgIALgMAGQgNAHgQAAQgcAAgOgPg");
	this.shape_112.setTransform(488.9,291);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_113.setTransform(470.6,290.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_114.setTransform(445.5,290.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_115.setTransform(427.6,287.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_116.setTransform(402,287.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQAAgYASgLQARgMAkgCIAbAAIAAgJQABgPgIgHQgGgIgPAAQgLAAgMAEQgKADgKAFIgLgYQANgGAPgEQAPgDAMAAQAeAAAPANQAQANAAAcIAABoIgYAAIgHgWIgBAAQgLAPgMAFQgLAFgSAAQgWAAgNgMgAANAEQgXABgKAHQgKAHAAAPQAAAKAFAGQAHAGAMAAQARAAAMgKQALgLgBgSIAAgOg");
	this.shape_117.setTransform(384.6,290.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_118.setTransform(367.2,287.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAhAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAEAFAAAJQAAAJgEAFQgFAEgJAAQgIAAgFgEg");
	this.shape_119.setTransform(354.6,287.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAhAAIAADbg");
	this.shape_120.setTransform(346.5,287.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgHgIgOAAQgLAAgMAEQgLADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_121.setTransform(333.5,290.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_122.setTransform(318.7,290.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQgBgPgHgHQgHgIgOAAQgLAAgMAEQgLADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_123.setTransform(294.8,290.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAgAAIAADbg");
	this.shape_124.setTransform(282.9,287.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQABgYARgLQASgMAkgCIAbAAIAAgJQABgPgIgHQgGgIgPAAQgLAAgMAEQgKADgLAFIgKgYQANgGAPgEQAPgDAMAAQAeAAAPANQAPANABAcIAABoIgYAAIgHgWIgBAAQgMAPgLAFQgMAFgQAAQgXAAgNgMgAANAEQgXABgKAHQgLAHAAAPQAAAKAHAGQAGAGAMAAQASAAALgKQALgLgBgSIAAgOg");
	this.shape_125.setTransform(262.4,290.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAgAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAEAFABAJQgBAJgEAFQgFAEgJAAQgIAAgFgEg");
	this.shape_126.setTransform(250.4,287.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOAMgIQANgJAOAAQALAAAGACIgDAfQgIgCgHAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_127.setTransform(241.1,290.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_128.setTransform(225,290.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgWAAIAAgPIAYgMIALghIATAAIAAAjIAtAAIAAAZIgtAAIAABTQAAAMAHAGQAFAFAKAAQAMAAAMgEIAAAZIgNAFQgKABgJAAQguAAAAgyg");
	this.shape_129.setTransform(210.4,289.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_130.setTransform(197.8,290.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgGgIgPAAQgLAAgMAEQgKADgKAFIgLgYQANgGAPgEQAPgDAMAAQAeAAAQANQAPANAAAcIAABoIgYAAIgHgWIgBAAQgLAPgMAFQgLAFgSAAQgWAAgNgMgAANAEQgXABgKAHQgKAHAAAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_131.setTransform(181.5,290.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#6C1F7D").s().p("AgeBvIAAiDIgaAAIAAgPIAagKIAAgLQAAgbAOgNQANgOAZAAQASAAARAGIgJAZQgMgEgMAAQgLAAgFAHQgFAHAAAOIAAAKIAmAAIAAAZIgmAAIAACDg");
	this.shape_132.setTransform(169.3,287.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgJgKAAgRQAAgUAPgLQARgLAaAAQAcAAAZALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQggAAgSgJg");
	this.shape_133.setTransform(156.2,290.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAfAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAFAFAAAJQAAAJgFAFQgFAEgJAAQgIAAgFgEg");
	this.shape_134.setTransform(145,287.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgVAAIAAgPIAWgMIAMghIAUAAIAAAjIAsAAIAAAZIgsAAIAABTQAAAMAFAGQAHAFAJAAQAMAAANgEIAAAZIgPAFQgIABgKAAQguAAAAgyg");
	this.shape_135.setTransform(135.2,289.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgHgIgOAAQgLAAgMAEQgLADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_136.setTransform(120.7,290.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgJgKAAgRQAAgUAPgLQARgLAaAAQAcAAAZALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQggAAgSgJg");
	this.shape_137.setTransform(105.8,290.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQAAgYASgLQATgMAkgCIAbAAIAAgJQgBgPgGgHQgIgIgOAAQgLAAgLAEQgMADgKAFIgLgYQANgGAPgEQAQgDAMAAQAeAAAQANQAPANgBAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgQAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQABAKAGAGQAGAGAMAAQASAAAKgKQAMgLAAgSIAAgOg");
	this.shape_138.setTransform(82.2,290.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#6C1F7D").s().p("ABSBQIAAhgQAAgSgHgJQgHgJgOAAQgUAAgIANQgJAMAAAZIAABSIghAAIAAhgQAAgSgHgJQgGgJgPAAQgTAAgJANQgJANAAAcIAABOIghAAIAAicIAaAAIAEAVIACAAQAGgMANgGQAMgGAPAAQAkAAALAZIACAAQAHgMANgGQAMgHARAAQAcAAANAOQAMAPAAAdIAABlg");
	this.shape_139.setTransform(60.5,290.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOAMgIQANgJAOAAQALAAAGACIgDAfQgIgCgHAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_140.setTransform(41.3,290.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_141.setTransform(25.2,290.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#6C1F7D").s().p("AgeBvIAAiDIgaAAIAAgPIAagKIAAgLQAAgbANgNQANgOAaAAQARAAASAGIgJAZQgNgEgLAAQgLAAgFAHQgGAHABAOIAAAKIAmAAIAAAZIgmAAIAACDg");
	this.shape_142.setTransform(12.1,287.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_143.setTransform(623.4,256.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_144.setTransform(605.6,253.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgHgHQgIgIgOAAQgLAAgLAEQgMADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_145.setTransform(580.6,256.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAIgOAMgIQAMgJAOAAQALAAAGACIgEAfQgGgCgIAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_146.setTransform(567.4,256.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_147.setTransform(551.3,256.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6C1F7D").s().p("AgPBuIAAjbIAgAAIAADbg");
	this.shape_148.setTransform(538.4,253.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQAAgYASgLQATgMAkgCIAbAAIAAgJQgBgPgGgHQgIgIgOAAQgLAAgLAEQgMADgKAFIgLgYQANgGAPgEQAQgDAMAAQAeAAAQANQAPANgBAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgQAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQABAKAFAGQAHAGAMAAQASAAAKgKQAMgLAAgSIAAgOg");
	this.shape_149.setTransform(525.5,256.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#6C1F7D").s().p("AgRBOIg8ibIAjAAIAhBaQAHAXACAOIABAAQABgKAIgbIAhhaIAjAAIg8Cbg");
	this.shape_150.setTransform(509.8,256.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAcANAYAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgVgKQgagJgKgLQgKgKAAgRQAAgUAQgLQARgLAaAAQAcAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQgfAAgUgJg");
	this.shape_151.setTransform(487.6,256.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_152.setTransform(472.1,256.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgVAAIAAgPIAWgMIAMghIAUAAIAAAjIAsAAIAAAZIgsAAIAABTQAAAMAFAGQAHAFAJAAQANAAAMgEIAAAZIgPAFQgJABgJAAQguAAAAgyg");
	this.shape_153.setTransform(457.9,254.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_154.setTransform(443.2,256.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_155.setTransform(425.6,256.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAhAAIAACbgAgMhLQgGgFAAgJQAAgJAGgFQAEgEAIAAQAJAAAFAEQAEAFAAAJQAAAJgEAFQgFAEgJAAQgIAAgEgEg");
	this.shape_156.setTransform(413.2,253.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAhAAIAADbg");
	this.shape_157.setTransform(405.1,253.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_158.setTransform(394.1,256.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_159.setTransform(370.8,256.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_160.setTransform(352.9,253.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_161.setTransform(328,256.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAhAAIAACbgAgMhLQgGgFAAgJQAAgJAGgFQAEgEAIAAQAJAAAFAEQAEAFAAAJQAAAJgEAFQgFAEgJAAQgIAAgEgEg");
	this.shape_162.setTransform(315.1,253.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAhAAIAADbg");
	this.shape_163.setTransform(307,253.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_164.setTransform(294.1,256.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#6C1F7D").s().p("AgeBvIAAiCIgaAAIAAgQIAagKIAAgKQAAgcAOgOQANgNAZAAQASAAARAGIgJAZQgMgEgMAAQgLAAgFAHQgFAHAAAOIAAAKIAmAAIAAAaIgmAAIAACCg");
	this.shape_165.setTransform(280.9,253.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQABgYARgLQASgMAkgCIAbAAIAAgJQABgPgIgHQgGgIgPAAQgLAAgMAEQgKADgLAFIgKgYQANgGAPgEQAPgDAMAAQAeAAAPANQAPANABAcIAABoIgYAAIgHgWIgBAAQgMAPgLAFQgLAFgSAAQgWAAgNgMgAANAEQgXABgKAHQgKAHAAAPQgBAKAHAGQAGAGAMAAQARAAAMgKQALgLgBgSIAAgOg");
	this.shape_166.setTransform(265.9,256.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgVAAIAAgPIAWgMIAMghIAUAAIAAAjIAsAAIAAAZIgsAAIAABTQAAAMAFAGQAHAFAJAAQAMAAANgEIAAAZIgPAFQgIABgKAAQguAAAAgyg");
	this.shape_167.setTransform(252.2,254.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOANgIQAMgJAOAAQAKAAAHACIgEAfQgHgCgHAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_168.setTransform(241.3,256.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_169.setTransform(225.2,256.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#6C1F7D").s().p("AhGByIAAjhIAaAAIAFAVIACAAQAQgXAeAAQAdgBAQAWQARAVAAAnQAAAlgRAVQgQAWgeAAQgcAAgRgWIgCAAIACAYIAABAgAgchLQgJAMAAAZIAAAGQAAAcAJAMQAJANATAAQASgBAJgOQAJgNAAgaQAAgagJgOQgJgOgSABQgTgBgJAMg");
	this.shape_170.setTransform(207.8,259.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_171.setTransform(181.6,256.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQABgYARgLQATgMAjgCIAbAAIAAgJQAAgPgGgHQgIgIgOAAQgLAAgLAEQgLADgLAFIgLgYQAOgGAOgEQAQgDAMAAQAeAAAPANQAPANAAAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgLAFgRAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQAAAKAHAGQAGAGAMAAQASAAAKgKQALgLAAgSIAAgOg");
	this.shape_172.setTransform(163.5,256.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOAMgIQANgJAOAAQAKAAAHACIgDAfQgIgCgHAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_173.setTransform(150.3,256.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#6C1F7D").s().p("Ag7BoQgQgMAAgVQAAgOAJgKQAJgKAQgEQgGgDgFgGQgEgHAAgGQAAgJAFgFQAFgGAKgGQgNgFgHgMQgIgMAAgQQAAgaAQgOQAQgOAeABIANABIALABIA2AAIAAASIgaAGQADAEADAIQACAHAAAIQAAAYgRAOQgQAOgdAAIgNgBQgLAGAAAIQAAAGAFADQAFACANAAIAbAAQAaAAANAMQAOAKAAAVQAAAbgWAOQgWAOgpAAQggABgRgLgAglAzQgJAHAAALQAAALAKAGQAKAGARAAQAaAAAOgIQANgIAAgMQAAgLgHgEQgIgFgTAAIgZAAQgOAAgIAHgAgYhUQgHAIAAAQQAAAPAHAHQAIAJAOgBQAcAAAAgeQAAgPgHgJQgIgIgNAAQgPAAgHAIg");
	this.shape_174.setTransform(134.9,259.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_175.setTransform(110.5,256.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOANgIQAMgJAOAAQAKAAAHACIgEAfQgHgCgHAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_176.setTransform(96.4,256.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgWAAIAAgPIAYgMIALghIATAAIAAAjIAtAAIAAAZIgtAAIAABTQAAAMAHAGQAFAFAKAAQAMAAAMgEIAAAZIgNAFQgJABgKAAQguAAAAgyg");
	this.shape_177.setTransform(83.4,254.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgUgKQgbgJgKgLQgJgKAAgRQgBgUARgLQAQgLAaAAQAdAAAYALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAEAIQAEAIABAMQgBAXgQAMQgRAMgeAAQgfAAgTgJg");
	this.shape_178.setTransform(70.8,256.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_179.setTransform(55.3,256.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAhAAIAABgQAAASAIAJQAHAJAQAAQAUAAAJgNQAKgMAAgdIAAhOIAiAAIAACcIgbAAIgEgVIgCAAQgGALgOAGQgMAHgPAAQgdAAgOgPg");
	this.shape_180.setTransform(37.7,256.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#6C1F7D").s().p("AAtBnIhlijIgBAAIAAAJQACAaAAAWIAABqIgeAAIAAjOIApAAIBkCjIABAAIgBgXIgBggIAAhsIAfAAIAADOg");
	this.shape_181.setTransform(17.3,253.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#6C1F7D").s().p("AgPAQQgFgGAAgKQAAgJAFgGQAFgFAKgBQAKABAFAFQAGAGAAAJQAAAKgGAGQgFAFgKABQgKgBgFgFg");
	this.shape_182.setTransform(97.9,193.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgJgKAAgRQAAgUAPgLQARgLAaAAQAcAAAZALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAEAIQAEAIAAAMQAAAXgQAMQgRAMgeAAQggAAgSgJg");
	this.shape_183.setTransform(86.9,187.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQAAgYASgLQATgMAjgCIAbAAIAAgJQAAgPgGgHQgIgIgOAAQgLAAgLAEQgLADgLAFIgLgYQANgGAPgEQAQgDAMAAQAeAAAPANQAQANgBAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgMAFgQAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQAAAKAHAGQAGAGAMAAQARAAALgKQALgLAAgSIAAgOg");
	this.shape_184.setTransform(70.9,187.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#6C1F7D").s().p("ABSBQIAAhgQAAgSgHgJQgHgJgOAAQgUAAgIANQgJAMAAAZIAABSIghAAIAAhgQAAgSgHgJQgGgJgPAAQgTAAgJANQgJANAAAcIAABOIghAAIAAicIAaAAIAEAVIACAAQAGgMANgGQAMgGAPAAQAkAAALAZIACAAQAHgMANgGQAMgHARAAQAcAAANAOQAMAPAAAdIAABlg");
	this.shape_185.setTransform(49.1,187.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQAAgYASgLQATgMAjgCIAbAAIAAgJQAAgPgGgHQgIgIgOAAQgLAAgLAEQgLADgLAFIgLgYQANgGAPgEQAQgDAMAAQAeAAAPANQAQANgBAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgMAFgQAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQAAAKAHAGQAGAGAMAAQARAAALgKQALgLAAgSIAAgOg");
	this.shape_186.setTransform(26.3,187.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOANgIQAMgJAOAAQAKAAAHACIgEAfQgHgCgHAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_187.setTransform(13.1,187.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAcANAXAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgKgKABgRQAAgUAPgLQARgLAaAAQAcAAAZALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQggAAgSgJg");
	this.shape_188.setTransform(692.1,152.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAiAAIAABgQAAASAHAJQAHAJAQAAQAUAAAKgNQAJgMABgdIAAhOIAhAAIAACcIgbAAIgEgVIgBAAQgIALgMAGQgNAHgQAAQgcAAgOgPg");
	this.shape_189.setTransform(675.7,153);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgKgKAAgRQAAgUAQgLQARgLAaAAQAdAAAYALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQggAAgTgJg");
	this.shape_190.setTransform(659.6,152.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgUgKQgbgJgKgLQgJgKAAgRQgBgUARgLQAQgLAbAAQAcAAAYALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAEAIQAEAIABAMQAAAXgRAMQgRAMgeAAQggAAgSgJg");
	this.shape_191.setTransform(637.9,152.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQgBgPgGgHQgIgIgOAAQgLAAgLAEQgMADgJAFIgMgYQANgGAPgEQAQgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHAAAPQABAKAFAGQAHAGAMAAQASAAAKgKQAMgLAAgSIAAgOg");
	this.shape_192.setTransform(621.9,152.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_193.setTransform(604.5,149.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_194.setTransform(587.1,152.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgVAAIAAgPIAWgMIAMghIATAAIAAAjIAtAAIAAAZIgtAAIAABTQAAAMAHAGQAFAFAKAAQAMAAAMgEIAAAZIgNAFQgJABgKAAQguAAAAgyg");
	this.shape_195.setTransform(572.4,151.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_196.setTransform(550.1,152.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_197.setTransform(532.5,152.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQABgYARgLQATgMAjgCIAbAAIAAgJQAAgPgGgHQgIgIgOAAQgLAAgLAEQgLADgLAFIgLgYQAOgGAOgEQAQgDAMAAQAeAAAPANQAPANAAAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgLAFgRAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQAAAKAHAGQAGAGAMAAQASAAAKgKQALgLAAgSIAAgOg");
	this.shape_198.setTransform(507.7,152.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAgAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAEAFABAJQgBAJgEAFQgFAEgJAAQgIAAgFgEg");
	this.shape_199.setTransform(495.8,149.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_200.setTransform(482.2,149.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_201.setTransform(465.3,152.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#6C1F7D").s().p("ABSBQIAAhgQAAgSgHgJQgHgJgOAAQgUAAgIANQgJAMAAAZIAABSIghAAIAAhgQAAgSgHgJQgGgJgPAAQgTAAgJANQgJANAAAcIAABOIghAAIAAicIAaAAIAEAVIACAAQAGgMANgGQAMgGAPAAQAkAAALAZIACAAQAHgMANgGQAMgHARAAQAcAAANAOQAMAPAAAdIAABlg");
	this.shape_202.setTransform(443.1,152.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAfAAIAACbgAgMhLQgFgFgBgJQABgJAFgFQAEgEAIAAQAJAAAFAEQAFAFgBAJQABAJgFAFQgFAEgJAAQgIAAgEgEg");
	this.shape_203.setTransform(425.2,149.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgWAAIAAgPIAYgMIALghIATAAIAAAjIAtAAIAAAZIgtAAIAABTQABAMAFAGQAHAFAJAAQANAAAMgEIAAAZIgPAFQgJABgJAAQguAAAAgyg");
	this.shape_204.setTransform(415.3,151.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#6C1F7D").s().p("AgPBuIAAjbIAgAAIAADbg");
	this.shape_205.setTransform(405.7,149.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAhAAIAABgQABASAHAJQAHAJAQAAQAUAAAKgNQAJgMABgdIAAhOIAhAAIAACcIgaAAIgFgVIgCAAQgHALgMAGQgNAHgPAAQgdAAgOgPg");
	this.shape_206.setTransform(392.4,153);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#6C1F7D").s().p("ABSBQIAAhgQAAgSgHgJQgHgJgOAAQgUAAgIANQgJAMAAAZIAABSIghAAIAAhgQAAgSgHgJQgGgJgPAAQgTAAgJANQgJANAAAcIAABOIghAAIAAicIAaAAIAEAVIACAAQAGgMANgGQAMgGAPAAQAkAAALAZIACAAQAHgMANgGQAMgHARAAQAcAAANAOQAMAPAAAdIAABlg");
	this.shape_207.setTransform(369.4,152.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_208.setTransform(339.1,152.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_209.setTransform(320.7,149.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAhAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAEAFABAJQgBAJgEAFQgFAEgJAAQgIAAgFgEg");
	this.shape_210.setTransform(308.1,149.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_211.setTransform(294.9,152.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_212.setTransform(277.3,152.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgVAAIAAgPIAWgMIAMghIAUAAIAAAjIAsAAIAAAZIgsAAIAABTQgBAMAHAGQAFAFAKAAQANAAALgEIAAAZIgOAFQgIABgKAAQguAAAAgyg");
	this.shape_213.setTransform(263.2,151.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_214.setTransform(248.4,152.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_215.setTransform(230.3,152.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_216.setTransform(214.5,152.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_217.setTransform(191.2,152.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_218.setTransform(173.4,149.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_219.setTransform(148.1,152.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#6C1F7D").s().p("AgmBmQgRgKgJgSQgJgSAAgZQAAglAUgVQATgWAjAAQAiAAATAWQAUAWAAAkQAAAngUAVQgTAVgjAAQgVAAgRgKgAgdgIQgKANAAAaQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgJAOgAgUhBIAAgEIAQgWIANgVIAmAAIAAAEIgVAVQgPAOgKAIg");
	this.shape_220.setTransform(130,149.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAfAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAFAFAAAJQAAAJgFAFQgFAEgJAAQgIAAgFgEg");
	this.shape_221.setTransform(117.1,149.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_222.setTransform(106.1,152.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQAAgYASgLQARgMAkgCIAcAAIAAgJQAAgPgIgHQgGgIgPAAQgLAAgMAEQgKADgKAFIgLgYQANgGAPgEQAPgDAMAAQAeAAAPANQAQANAAAcIAABoIgYAAIgHgWIgBAAQgLAPgMAFQgLAFgSAAQgWAAgNgMgAANAEQgXABgKAHQgKAHAAAPQAAAKAFAGQAHAGAMAAQARAAAMgKQALgLAAgSIAAgOg");
	this.shape_223.setTransform(89.8,152.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_224.setTransform(73.6,152.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOANgIQAMgJAOAAQAKAAAHACIgEAfQgHgCgHAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_225.setTransform(59.9,152.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_226.setTransform(45.8,152.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQAAgYASgLQATgMAkgCIAbAAIAAgJQgBgPgGgHQgIgIgOAAQgLAAgLAEQgMADgKAFIgLgYQANgGAPgEQAQgDAMAAQAeAAAQANQAPANgBAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgQAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQABAKAGAGQAGAGAMAAQASAAAKgKQAMgLAAgSIAAgOg");
	this.shape_227.setTransform(21.9,152.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAhAAIAADbg");
	this.shape_228.setTransform(10,149.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#6C1F7D").s().p("AhHBvIAAgbQAIACAJAAQAZAAAJgcIAGgOIg/icIAlAAIAfBYQAIAUABAPIABAAQABgHAEgLIAkhpIAkAAIhDCxQgSAwgqAAQgLAAgLgCg");
	this.shape_229.setTransform(694.2,121.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAiAAQAiAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_230.setTransform(670,118.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#6C1F7D").s().p("AAjBsIAAhhQAAgQgHgKQgHgIgQgBQgUAAgKANQgKAMAAAdIAABOIghAAIAAibIAaAAIAFAUIABAAQAIgLANgHQANgFAOgBQA5AAAAA5IAABmgAAKhFIgKgFIgLgGQgFgDgFABQgLgBgEARIgSAAQACgUAJgLQAKgKAOAAQAGAAAGACIAKAGIALAGQAFACAFAAQALAAAEgQIASAAQgCATgJAKQgJAMgPAAQgGAAgGgDg");
	this.shape_231.setTransform(652,115.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_232.setTransform(634.4,118.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAcANAYAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgJgKgBgRQABgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQggAAgTgJg");
	this.shape_233.setTransform(619.1,118.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAhAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAEAFABAJQgBAJgEAFQgFAEgJAAQgIAAgFgEg");
	this.shape_234.setTransform(607.9,115.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_235.setTransform(594.4,115.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#6C1F7D").s().p("AgPBuIAAjbIAfAAIAADbg");
	this.shape_236.setTransform(574.2,115.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_237.setTransform(561.8,118.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_238.setTransform(544,115.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgUgKQgcgJgJgLQgJgKAAgRQgBgUARgLQAQgLAbAAQAcAAAYALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAEAIABAMQAAAXgRAMQgRAMgeAAQggAAgSgJg");
	this.shape_239.setTransform(520.9,118.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#6C1F7D").s().p("AgwBbQgUgVAAgmQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAASIhnAAQABAWALANQAMAMAUAAQAOAAAMgCQAMgDAOgGIAAAbQgNAFgMADQgNACgQAAQgjABgVgWgAgWgNQgKAKgBARIBGAAQgBgSgJgJQgJgLgQABQgPgBgJALgAgShBIAAgEIARgWIAMgVIAnAAIAAADQgHAJgPAOQgPANgKAIg");
	this.shape_240.setTransform(505.4,115.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#6C1F7D").s().p("AgRBOIg7ibIAiAAIAgBaQAJAXABAOIAAAAQACgKAIgbIAhhaIAjAAIg8Cbg");
	this.shape_241.setTransform(489.3,118.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgGgIgPAAQgLAAgMAEQgKADgKAFIgLgYQANgGAPgEQAPgDAMAAQAeAAAQANQAPANAAAcIAABoIgYAAIgHgWIgBAAQgLAPgMAFQgLAFgSAAQgWAAgNgMgAANAEQgXABgKAHQgKAHAAAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_242.setTransform(472.7,118.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAIgOALgIQANgJAOAAQALAAAGACIgEAfQgGgCgIAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_243.setTransform(459.5,118.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgWAAIAAgPIAXgMIAMghIAUAAIAAAjIAsAAIAAAZIgsAAIAABTQAAAMAFAGQAHAFAJAAQAMAAANgEIAAAZIgPAFQgJABgJAAQguAAAAgyg");
	this.shape_244.setTransform(446.5,116.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgHgIgOAAQgLAAgMAEQgLADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_245.setTransform(424.4,118.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_246.setTransform(399.5,115.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQgBgPgGgHQgIgIgOAAQgLAAgLAEQgMADgJAFIgMgYQANgGAPgEQAQgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHAAAPQABAKAFAGQAHAGAMAAQASAAAKgKQAMgLAAgSIAAgOg");
	this.shape_247.setTransform(382,118.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_248.setTransform(364.6,115.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAfAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAFAFAAAJQAAAJgFAFQgFAEgJAAQgIAAgFgEg");
	this.shape_249.setTransform(352,115.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#6C1F7D").s().p("AgRBOIg7ibIAjAAIAfBaQAJAXABAOIABAAQABgKAJgbIAfhaIAjAAIg7Cbg");
	this.shape_250.setTransform(340.2,118.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAfAAIAACbgAgMhLQgFgFgBgJQABgJAFgFQAEgEAIAAQAJAAAFAEQAFAFgBAJQABAJgFAFQgFAEgJAAQgIAAgEgEg");
	this.shape_251.setTransform(328.4,115.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgWAAIAAgPIAYgMIALghIATAAIAAAjIAtAAIAAAZIgtAAIAABTQABAMAFAGQAHAFAJAAQANAAAMgEIAAAZIgPAFQgJABgJAAQguAAAAgyg");
	this.shape_252.setTransform(318.6,116.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQAAgYASgLQATgMAkgCIAbAAIAAgJQgBgPgGgHQgIgIgOAAQgLAAgLAEQgMADgKAFIgLgYQANgGAPgEQAQgDAMAAQAeAAAQANQAPANgBAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgQAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQABAKAGAGQAGAGAMAAQASAAAKgKQAMgLAAgSIAAgOg");
	this.shape_253.setTransform(304.1,118.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_254.setTransform(287.8,118.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAIgOALgIQANgJAOAAQAKAAAHACIgDAfQgIgCgHAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_255.setTransform(274.2,118.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_256.setTransform(260,118.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQABgYASgLQARgMAkgCIAbAAIAAgJQABgPgIgHQgGgIgPAAQgLAAgMAEQgKADgLAFIgKgYQANgGAPgEQAPgDAMAAQAeAAAPANQAPANABAcIAABoIgYAAIgHgWIgBAAQgMAPgLAFQgLAFgSAAQgWAAgNgMgAANAEQgWABgLAHQgKAHAAAPQgBAKAHAGQAGAGAMAAQARAAAMgKQALgLgBgSIAAgOg");
	this.shape_257.setTransform(236.2,118.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOAMgIQANgJAOAAQAKAAAHACIgDAfQgIgCgHAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_258.setTransform(223,118.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgVAAIAAgPIAWgMIAMghIAUAAIAAAjIAsAAIAAAZIgsAAIAABTQAAAMAFAGQAHAFAJAAQANAAAMgEIAAAZIgPAFQgJABgJAAQguAAAAgyg");
	this.shape_259.setTransform(210,116.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgKgKAAgRQAAgUAQgLQARgLAaAAQAdAAAYALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQggAAgTgJg");
	this.shape_260.setTransform(197.4,118.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_261.setTransform(181.9,118.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAhAAIAABgQABASAHAJQAHAJAQAAQAUAAAKgNQAKgMgBgdIAAhOIAiAAIAACcIgaAAIgFgVIgCAAQgGALgNAGQgNAHgPAAQgdAAgOgPg");
	this.shape_262.setTransform(164.3,118.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_263.setTransform(146,118.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOANgIQAMgJAOAAQALAAAGACIgEAfQgGgCgIAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_264.setTransform(123.9,118.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQAAgYASgLQARgMAkgCIAcAAIAAgJQAAgPgIgHQgGgIgPAAQgLAAgMAEQgKADgKAFIgLgYQANgGAPgEQAPgDAMAAQAeAAAPANQAQANAAAcIAABoIgYAAIgHgWIgBAAQgLAPgMAFQgLAFgSAAQgWAAgNgMgAANAEQgXABgKAHQgKAHAAAPQAAAKAFAGQAHAGAMAAQARAAAMgKQALgLAAgSIAAgOg");
	this.shape_265.setTransform(107.8,118.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgJgKAAgRQgBgUARgLQAQgLAbAAQAcAAAYALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQgfAAgTgJg");
	this.shape_266.setTransform(93,118.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_267.setTransform(77.5,118.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAIgOAMgIQAMgJAOAAQALAAAGACIgEAfQgGgCgIAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_268.setTransform(63.8,118.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#6C1F7D").s().p("AhGBzIAAjhIAaAAIAFAUIACAAQAQgYAeAAQAdABAQAVQARAVAAAmQAAAmgRAVQgQAWgeAAQgcAAgRgWIgCAAIACAZIAABAgAgchKQgJALAAAaIAAAEQAAAdAJAMQAJAMATAAQASAAAJgNQAJgNAAgbQAAgagJgOQgJgOgSAAQgTAAgJANg");
	this.shape_269.setTransform(48.1,121.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#6C1F7D").s().p("AAnBOIgng6IgmA6IglAAIA3hPIg1hMIAmAAIAjA2IAkg2IAmAAIg1BMIA3BPg");
	this.shape_270.setTransform(30.6,118.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_271.setTransform(14.3,118.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_272.setTransform(610.6,83.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_273.setTransform(593,83.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgKgKAAgRQABgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQgfAAgUgJg");
	this.shape_274.setTransform(570.2,83.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgGgIgPAAQgLAAgMAEQgLADgJAFIgLgYQANgGAPgEQAPgDAMAAQAeAAAQANQAPANAAAcIAABoIgYAAIgHgWIgBAAQgLAPgMAFQgLAFgSAAQgXAAgMgMgAANAEQgXABgKAHQgKAHAAAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_275.setTransform(554.1,83.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_276.setTransform(536.7,80.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQgBgPgGgHQgIgIgOAAQgLAAgLAEQgMADgJAFIgMgYQANgGAPgEQAQgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHAAAPQABAKAFAGQAHAGAMAAQASAAAKgKQAMgLAAgSIAAgOg");
	this.shape_277.setTransform(519.3,83.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_278.setTransform(504.4,83.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_279.setTransform(488.2,83.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#6C1F7D").s().p("AgeBvIAAiDIgZAAIAAgPIAZgKIAAgLQAAgbANgNQANgOAaAAQASAAARAGIgJAZQgMgEgMAAQgLAAgFAHQgGAHABAOIAAAKIAmAAIAAAZIgmAAIAACDg");
	this.shape_280.setTransform(475,80.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_281.setTransform(459.7,83.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_282.setTransform(442.1,83.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgKgKAAgRQAAgUAQgLQARgLAaAAQAdAAAYALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQggAAgTgJg");
	this.shape_283.setTransform(419.3,83.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQABgYARgLQASgMAkgCIAbAAIAAgJQABgPgIgHQgGgIgPAAQgLAAgMAEQgKADgLAFIgKgYQANgGAOgEQAQgDAMAAQAeAAAPANQAPANABAcIAABoIgYAAIgHgWIgBAAQgMAPgLAFQgMAFgQAAQgXAAgNgMgAANAEQgXABgKAHQgLAHAAAPQAAAKAHAGQAGAGAMAAQASAAAKgKQAMgLgBgSIAAgOg");
	this.shape_284.setTransform(403.2,83.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_285.setTransform(386.2,83.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_286.setTransform(368.1,83.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAcANAYAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgJgKgBgRQABgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQggAAgTgJg");
	this.shape_287.setTransform(352.3,83.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAHgOANgIQAMgJAOAAQAKAAAHACIgEAfQgHgCgHAAQgUAAgLANQgNANAAAVIAABRg");
	this.shape_288.setTransform(339.8,83.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_289.setTransform(324.3,83.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#6C1F7D").s().p("AhGBzIAAjiIAbAAIAEAWIACAAQAQgZAeAAQAdAAARAWQAQAVAAAmQAAAmgRAWQgQAVgeAAQgcAAgRgVIgCAAIACAXIAABBgAgchLQgJAMAAAaIAAAEQAAAdAJAMQAJAMAUAAQARABAKgOQAIgNABgbQgBgagIgNQgKgOgSgBQgSABgKALg");
	this.shape_290.setTransform(307.4,87.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_291.setTransform(282,83.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_292.setTransform(264.1,80.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_293.setTransform(239.2,83.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#6C1F7D").s().p("AhGBzIAAjiIAaAAIAGAWIABAAQAQgZAeAAQAdAAAQAWQARAVAAAmQAAAmgRAWQgQAVgeAAQgcAAgRgVIgCAAIACAXIAABBgAgchLQgJAMAAAaIAAAEQAAAdAJAMQAJAMATAAQASABAJgOQAJgNAAgbQAAgagJgNQgJgOgSgBQgTABgJALg");
	this.shape_294.setTransform(221.8,87.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAgAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAEAFABAJQgBAJgEAFQgFAEgJAAQgIAAgFgEg");
	this.shape_295.setTransform(208.2,80.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAhAAIAABgQABASAHAJQAHAJAQAAQAUAAAKgNQAKgMgBgdIAAhOIAiAAIAACcIgaAAIgFgVIgCAAQgGALgNAGQgNAHgPAAQgdAAgOgPg");
	this.shape_296.setTransform(194.9,84);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#6C1F7D").s().p("AAmBzIAAhDIAAgNIABgKIgCAAQgOAXgfAAQgdAAgRgVQgQgWAAglQAAgmAQgWQARgWAdAAQAOABAMAFQAMAGAJAMIABAAIAEgVIAbAAIAADigAgbhIQgJAOAAAaQAAA1AkAAQAVAAAJgMQAJgLAAgYIAAgGQAAgdgJgMQgKgNgUgBQgRAAgKAPg");
	this.shape_297.setTransform(176.3,87.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_298.setTransform(159.4,83.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_299.setTransform(134.3,83.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAhAAIAABgQAAASAIAJQAHAJAQAAQAUAAAJgNQALgMgBgdIAAhOIAiAAIAACcIgaAAIgFgVIgCAAQgGALgOAGQgMAHgPAAQgdAAgOgPg");
	this.shape_300.setTransform(115.8,84);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgKgKABgRQAAgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQggAAgSgJg");
	this.shape_301.setTransform(92.2,83.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_302.setTransform(76.2,83.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#6C1F7D").s().p("ABSBQIAAhgQAAgSgHgJQgHgJgOAAQgUAAgIANQgJAMAAAZIAABSIghAAIAAhgQAAgSgHgJQgGgJgPAAQgTAAgJANQgJANAAAcIAABOIghAAIAAicIAaAAIAEAVIACAAQAGgMANgGQAMgGAPAAQAkAAALAZIACAAQAHgMANgGQAMgHARAAQAcAAANAOQAMAPAAAdIAABlg");
	this.shape_303.setTransform(53.5,83.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_304.setTransform(30.7,83.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#6C1F7D").s().p("AhBBfIAAgfQAOAGAQAEQAQADAOAAQATABAJgIQAKgHAAgOQAAgLgJgIQgJgIgagLQgcgLgMgPQgMgOAAgVQAAgaATgOQASgPAeAAQAegBAdANIgKAcQgcgMgWAAQgPAAgJAIQgIAHAAALQAAAIADAHQAEAFAHAFQAIAGATAHQAXAKALAHQALAJAEAKQAFALAAANQAAAcgUAQQgTAQgjAAQgjAAgWgMg");
	this.shape_305.setTransform(13.9,81.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol213, new cjs.Rectangle(0,0,723,412.7), null);


(lib.Symbol211 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F81C90").s().p("AhDBeIAAgpQAWAJAOAFQAOADAMAAQAOAAAIgGQAHgFAAgLQAAgGgDgFQgEgFgGgEIgagOQgTgJgJgHQgKgIgGgLQgFgLgBgOQAAgcAUgQQASgQAgAAQAQAAAPAFQAPADAPAHIgOAiIgbgJQgLgDgLAAQgLAAgGAGQgIAGAAAJQAAAGAEAEQACAEAGAFIAbAOQAcAOALANQAMAOgBAUQABAcgVAQQgUAQgjAAQghABgagNg");
	this.shape.setTransform(580.3,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F81C90").s().p("AA1BoIgPgxIhLAAIgOAxIgwAAIBJjPIA1AAIBJDPgAgZASIA1AAIgYhLIgEgNQgEASgVBGg");
	this.shape_1.setTransform(562.2,22.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F81C90").s().p("AgVBoIAAiqIg4AAIAAgkICbAAIAAAkIg4AAIAACqg");
	this.shape_2.setTransform(543.8,22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F81C90").s().p("AhDBeIAAgpQAVAJAPAFQAPADAMAAQANAAAHgGQAIgFAAgLQAAgGgDgFQgDgFgHgEIgagOQgTgJgJgHQgKgIgGgLQgFgLgBgOQAAgcATgQQATgQAgAAQAQAAAPAFQAPADAPAHIgOAiIgbgJQgLgDgLAAQgLAAgGAGQgIAGAAAJQAAAGADAEQADAEAGAFIAaAOQAeAOALANQALAOgBAUQABAcgVAQQgUAQgjAAQghABgagNg");
	this.shape_3.setTransform(527.5,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F81C90").s().p("AgVBoIAAjOIArAAIAADOg");
	this.shape_4.setTransform(514.6,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F81C90").s().p("AhHBoIAAjOIBCAAQAmAAATAQQAUAQgBAgQABAigVAQQgVASgmAAIgSAAIAABKgAgagFIAOAAQATAAAKgIQAKgIAAgQQAAgPgIgHQgIgIgSABIgTAAg");
	this.shape_5.setTransform(501.4,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F81C90").s().p("AhDBeIAAgpQAVAJAPAFQAPADALAAQAOAAAHgGQAIgFAAgLQAAgGgDgFQgDgFgHgEIgagOQgTgJgJgHQgKgIgFgLQgGgLgBgOQAAgcATgQQATgQAgAAQAQAAAPAFQAPADAQAHIgPAiIgbgJQgLgDgLAAQgLAAgGAGQgIAGAAAJQAAAGADAEQADAEAGAFIAaAOQAeAOALANQALAOgBAUQABAcgVAQQgUAQgjAAQghABgagNg");
	this.shape_6.setTransform(476.2,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F81C90").s().p("AA1BoIgPgxIhLAAIgOAxIgwAAIBJjPIA0AAIBKDPgAgZASIA1AAIgYhLIgEgNQgEASgVBGg");
	this.shape_7.setTransform(458.1,22.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F81C90").s().p("AAiBoIgwhQIgYAAIAABQIgsAAIAAjOIA9AAQApAAAUAPQAUAPAAAgQAAASgKAOQgKANgSAJIA9BagAgmgKIAOAAQAVAAAJgIQAKgGAAgPQAAgPgKgHQgJgFgVAAIgOAAg");
	this.shape_8.setTransform(439.8,22.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F81C90").s().p("AgVBoIAAiqIg4AAIAAgkICbAAIAAAkIg4AAIAACqg");
	this.shape_9.setTransform(420.6,22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F81C90").s().p("AhDBeIAAgpQAWAJAOAFQAOADAMAAQAOAAAIgGQAHgFAAgLQAAgGgDgFQgEgFgGgEIgagOQgTgJgJgHQgKgIgGgLQgFgLgBgOQAAgcAUgQQASgQAgAAQAQAAAPAFQAPADAPAHIgOAiIgbgJQgLgDgLAAQgLAAgHAGQgHAGAAAJQAAAGAEAEQACAEAGAFIAbAOQAcAOALANQAMAOgBAUQABAcgVAQQgUAQgjAAQghABgagNg");
	this.shape_10.setTransform(404.3,22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F81C90").s().p("Ag7BoIAAjOIB3AAIAAAkIhLAAIAAAtIBFAAIAAAjIhFAAIAAA2IBLAAIAAAkg");
	this.shape_11.setTransform(388.5,22.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F81C90").s().p("Ag+BUQgWgUAAgkIAAiEIAsAAIAAB9QAAAZAKALQAJALAWAAQAVAAAJgLQALgLgBgZIAAh9IAsAAIAACFQAAAXgKARQgKASgUAIQgTAKgaAAQgoAAgWgVg");
	this.shape_12.setTransform(369,22.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F81C90").s().p("AAkBoIhZicIgBAAQADAqAAAQIAABiIgoAAIAAjOIA4AAIBZCaIABAAIgDg4IAAhiIAoAAIAADOg");
	this.shape_13.setTransform(346.2,22.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F81C90").s().p("Ag7BoIAAjOIB3AAIAAAkIhLAAIAAAtIBFAAIAAAjIhFAAIAAA2IBLAAIAAAkg");
	this.shape_14.setTransform(319.2,22.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F81C90").s().p("AhVBoIAAjOIBBAAQAxAAAdAaQAcAbAAAwQAAAygdAcQgeAbg2AAgAgpBEIATAAQA+AAAAhEQAAhCg6AAIgXAAg");
	this.shape_15.setTransform(300.4,22.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F81C90").s().p("AhDBeIAAgpQAWAJAOAFQAOADAMAAQAOAAAIgGQAHgFAAgLQAAgGgDgFQgEgFgGgEIgagOQgTgJgJgHQgKgIgGgLQgFgLgBgOQAAgcAUgQQASgQAgAAQAQAAAPAFQAPADAPAHIgOAiIgbgJQgLgDgLAAQgLAAgHAGQgHAGAAAJQAAAGAEAEQACAEAGAFIAbAOQAcAOALANQAMAOgBAUQABAcgVAQQgUAQgjAAQghABgagNg");
	this.shape_16.setTransform(273.8,22.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F81C90").s().p("AA1BoIgPgxIhLAAIgOAxIgwAAIBJjPIA1AAIBJDPgAgZASIA1AAIgYhLIgEgNQgEASgVBGg");
	this.shape_17.setTransform(255.7,22.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F81C90").s().p("AAkBoIhZicIgBAAQADAqAAAQIAABiIgoAAIAAjOIA4AAIBZCaIABAAIgDg4IAAhiIAoAAIAADOg");
	this.shape_18.setTransform(233.9,22.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F81C90").s().p("Ag+BUQgWgUAAgkIAAiEIAsAAIAAB9QAAAZAJALQAKALAWAAQAVAAAJgLQALgLgBgZIAAh9IAsAAIAACFQAAAXgKARQgKASgUAIQgUAKgZAAQgnAAgXgVg");
	this.shape_19.setTransform(211.2,22.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F81C90").s().p("Ag7BPQgZgcAAgzQAAgxAcgdQAdgcAyAAQAgAAAeANIgPAkQgXgMgYAAQgcAAgRATQgRATAAAfQAAAjAOARQAOASAZAAQAOAAAOgDIAAgrIgnAAIAAgkIBSAAIAABrQgUAGgSADQgRACgTAAQgtAAgZgbg");
	this.shape_20.setTransform(189.5,22.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F81C90").s().p("Ag/BoIAAjOIAsAAIAACqIBTAAIAAAkg");
	this.shape_21.setTransform(171.9,22.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F81C90").s().p("AA1BoIgPgxIhKAAIgQAxIgvAAIBJjPIA1AAIBJDPgAgZASIA1AAIgYhLIgEgNQgDASgWBGg");
	this.shape_22.setTransform(152.9,22.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F81C90").s().p("AA1BoIgPgxIhKAAIgPAxIgwAAIBJjPIA1AAIBJDPgAgZASIA1AAIgYhLIgEgNQgEASgVBGg");
	this.shape_23.setTransform(125.3,22.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F81C90").s().p("AApBoIAAhaIhRAAIAABaIgsAAIAAjOIAsAAIAABRIBRAAIAAhRIAsAAIAADOg");
	this.shape_24.setTransform(104.2,22.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F81C90").s().p("Ag2BPQgYgcAAgzQAAgfAMgYQAMgYAWgNQAWgOAcAAQAeAAAfAPIgOAkIgYgKQgLgEgMAAQgYAAgNASQgOAUAAAfQAABGAzAAQAWAAAfgLIAAAlQgZALgggBQgsAAgYgbg");
	this.shape_25.setTransform(84.2,22.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F81C90").s().p("Ag+BUQgWgUAAgkIAAiEIAsAAIAAB9QAAAZAJALQAKALAWAAQAVAAAJgLQAKgLAAgZIAAh9IAsAAIAACFQAAAXgKARQgKASgUAIQgTAKgaAAQgnAAgXgVg");
	this.shape_26.setTransform(63.7,22.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F81C90").s().p("Ag2BPQgYgcAAgzQAAgfAMgYQAMgYAWgNQAWgOAcAAQAeAAAfAPIgOAkIgYgKQgLgEgMAAQgYAAgNASQgOAUAAAfQAABGAzAAQAWAAAfgLIAAAlQgZALgggBQgsAAgYgbg");
	this.shape_27.setTransform(43.8,22.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F81C90").s().p("AhCBeIAAgpQAUAJAPAFQAOADANAAQANAAAHgGQAIgFAAgLQAAgGgDgFQgEgFgGgEIgagOQgTgJgKgHQgJgIgFgLQgHgLAAgOQABgcASgQQATgQAgAAQAQAAAOAFQAPADARAHIgPAiIgbgJQgLgDgKAAQgMAAgGAGQgIAGABAJQAAAGACAEQADAEAGAFIAaAOQAdAOAMANQAKAOABAUQAAAcgVAQQgUAQgjAAQghABgZgNg");
	this.shape_28.setTransform(26.4,22.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F81C90").s().p("Ag7BoIAAjOIB3AAIAAAkIhLAAIAAAtIBFAAIAAAjIhFAAIAAA2IBLAAIAAAkg");
	this.shape_29.setTransform(10.6,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol211, new cjs.Rectangle(0,0,590.3,43.5), null);


(lib.Symbol210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C1F7D").s().p("ACDECIglh7Ii7AAIglB7Ih1AAIC1oDICEAAIC3IDgAhBAsICFAAIg7i7IgJgjQgLAug2Cwg");
	this.shape.setTransform(258.6,53.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C1F7D").s().p("AiHDEQg8hEAAh/QAAhPAdg8QAdg9A3ggQA3ggBIAAQBLAABMAkIgjBZQgdgOgdgKQgegKgcAAQg8AAgiAuQgiAuAABSQAACsCAAAQA2AABNgbIAABbQg/AahOAAQhvAAg7hEg");
	this.shape_1.setTransform(211.6,53.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C1F7D").s().p("Ag2EBIAAoBIBsAAIAAIBg");
	this.shape_2.setTransform(175.9,53.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C1F7D").s().p("AimDpIAAhlQAzAXAlAKQAkAJAeAAQAjAAATgNQASgOAAgbQABgPgJgMQgIgMgRgLQgQgLgxgYQgvgWgYgTQgYgVgOgbQgOgbAAgkQABhEAugnQAugnBRAAQAoAAAkAJQAkAKAoARIgjBVQgpgRgbgHQgbgGgaAAQgeAAgRAOQgQAOAAAYQAAAOAHALQAHAKAOALQAPAKA1AaQBIAiAbAiQAbAigBAzQAABFgyAoQgxAohZAAQhSAAg/gfg");
	this.shape_3.setTransform(144.4,53.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C1F7D").s().p("AibEgQg3gzAAhYIAAlKIBtAAIAAE5QAAA8AYAcQAXAbA3AAQA1AAAYgbQAZgdAAg7IAAk5IBsAAIAAFLQAAA5gZArQgaArgwAXQgwAXhBAAQhjAAg3gzgAg7jeIAAgKQA7hGAXgkIB3AAIAAAIQgSASgsAkQgsAkgZASg");
	this.shape_4.setTransform(97.1,45.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C1F7D").s().p("ACtEBIAAjzIABgnQAAgXAFhgIgEAAIiEGRIhjAAIh8mSIgDAAQAHB7AAAoIAADvIhiAAIAAoBICVAAIB5GIIADAAICAmIICUAAIAAIBg");
	this.shape_5.setTransform(35.9,53.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol210, new cjs.Rectangle(0,0,338,102.1), null);


(lib.Symbol209 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C1F7D").s().p("AgPAQQgFgGAAgKQAAgJAFgGQAGgFAJgBQAKABAGAFQAFAGAAAJQAAAKgFAGQgGAFgKABQgJgBgGgFg");
	this.shape.setTransform(173.2,100.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgJgKAAgRQgBgUARgLQAQgLAbAAQAcAAAYALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQgfAAgTgJg");
	this.shape_1.setTransform(162.3,94.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_2.setTransform(146.3,94.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C1F7D").s().p("Ag7BnQgQgLAAgVQAAgPAJgJQAJgKAQgEQgGgDgFgGQgEgGAAgIQAAgIAFgFQAFgGAKgGQgNgFgHgMQgIgMAAgQQAAgZAQgOQAQgOAegBIANABIALACIA2AAIAAASIgaAGQADAEADAIQACAHAAAIQAAAYgRAOQgQAOgdAAIgNgBQgLAHAAAHQAAAGAFACQAFAEANAAIAbAAQAaAAANALQAOAKAAAVQAAAbgWAOQgWAPgpAAQggAAgRgMgAglAzQgJAHAAAMQAAAKAKAGQAKAFARABQAagBAOgHQANgIAAgMQAAgLgHgEQgIgFgTABIgZAAQgOAAgIAGgAgYhUQgHAIAAAQQAAAPAHAIQAIAHAOAAQAcAAAAgeQAAgQgHgIQgIgIgNAAQgPAAgHAIg");
	this.shape_3.setTransform(129.2,97.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_4.setTransform(112.9,94.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAhAAIAABgQAAASAIAJQAHAJAQAAQAUAAAJgNQAKgMAAgdIAAhOIAiAAIAACcIgbAAIgEgVIgCAAQgGALgOAGQgMAHgQAAQgcAAgOgPg");
	this.shape_5.setTransform(95.3,94.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6C1F7D").s().p("AglCMIAAgaQAJACAKAAQAVAAAAgYIAAiuIAhAAIAACwQAAAYgMANQgNAMgXAAQgPAAgKgDgAAGhuQgFgFAAgJQAAgIAFgFQAFgFAIAAQAJAAAGAFQAEAFAAAIQAAAJgEAFQgGAFgJgBQgIABgFgFg");
	this.shape_6.setTransform(80.2,94.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_7.setTransform(69.2,94.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_8.setTransform(52,94.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_9.setTransform(34.2,91.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAhAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAEAFAAAJQAAAJgEAFQgFAEgJAAQgIAAgFgEg");
	this.shape_10.setTransform(21.6,91.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6C1F7D").s().p("AgRBOIg8ibIAjAAIAhBaQAHAXACAOIABAAQABgKAJgbIAghaIAiAAIg7Cbg");
	this.shape_11.setTransform(9.8,94.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6C1F7D").s().p("AhHBvIAAgaQAIABAJAAQAZAAAJgcIAGgPIg/ibIAlAAIAfBYQAIAUABAPIABAAQABgHAEgLIAkhpIAkAAIhDCwQgSAxgqAAQgLAAgLgCg");
	this.shape_12.setTransform(680.7,63.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAbANAYAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgJgKAAgRQAAgUAPgLQARgLAaAAQAcAAAZALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQggAAgSgJg");
	this.shape_13.setTransform(658.4,59.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_14.setTransform(642.9,59.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAhAAIAADbg");
	this.shape_15.setTransform(630.5,56.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgGgIgPAAQgLAAgMAEQgLADgJAFIgLgYQAMgGAQgEQAPgDAMAAQAeAAAQANQAPANAAAcIAABoIgYAAIgHgWIgBAAQgLAPgMAFQgLAFgSAAQgXAAgMgMgAANAEQgXABgKAHQgKAHAAAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_16.setTransform(617.6,59.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAiAAIAABgQgBASAIAJQAHAJAQAAQAUAAAJgNQALgMAAgdIAAhOIAhAAIAACcIgbAAIgEgVIgBAAQgIALgNAGQgMAHgQAAQgcAAgOgPg");
	this.shape_17.setTransform(600.4,59.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAcANAYAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgVgKQgagJgKgLQgKgKAAgRQAAgUAQgLQARgLAaAAQAdAAAYALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQgfAAgUgJg");
	this.shape_18.setTransform(584.3,59.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAgAAIAACbgAgMhLQgGgFAAgJQAAgJAGgFQAEgEAIAAQAJAAAFAEQAFAFgBAJQABAJgFAFQgFAEgJAAQgIAAgEgEg");
	this.shape_19.setTransform(573.1,56.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6C1F7D").s().p("AgRBOIg7ibIAiAAIAhBaQAIAXABAOIAAAAQACgKAIgbIAhhaIAjAAIg8Cbg");
	this.shape_20.setTransform(561.3,59.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_21.setTransform(544.7,59.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAfAAIAACbgAgMhLQgFgFgBgJQAAgJAGgFQAEgEAIAAQAJAAAFAEQAFAFgBAJQABAJgFAFQgFAEgJAAQgIAAgEgEg");
	this.shape_22.setTransform(531.8,56.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_23.setTransform(518.3,56.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAhAAIAABgQABASAHAJQAHAJAQAAQAUAAAKgNQAKgMgBgdIAAhOIAiAAIAACcIgaAAIgFgVIgCAAQgGALgNAGQgNAHgPAAQgdAAgOgPg");
	this.shape_24.setTransform(500.5,59.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQABgYARgLQASgMAkgCIAbAAIAAgJQABgPgIgHQgGgIgPAAQgLAAgMAEQgKADgLAFIgKgYQANgGAOgEQAQgDAMAAQAeAAAPANQAPANABAcIAABoIgYAAIgHgWIgBAAQgMAPgLAFQgMAFgQAAQgYAAgMgMgAANAEQgXABgKAHQgKAHAAAPQgBAKAHAGQAGAGAMAAQASAAAKgKQAMgLgBgSIAAgOg");
	this.shape_25.setTransform(482.4,59.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6C1F7D").s().p("AgYAkQAKgmAFggIAfAAIADACQgHAbgSApg");
	this.shape_26.setTransform(462.6,67.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgKgKAAgRQABgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQgfAAgUgJg");
	this.shape_27.setTransform(452.3,59.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgGgIgPAAQgLAAgMAEQgLADgJAFIgLgYQANgGAPgEQAPgDAMAAQAeAAAQANQAPANAAAcIAABoIgYAAIgHgWIgBAAQgLAPgMAFQgLAFgSAAQgXAAgMgMgAANAEQgXABgKAHQgKAHAAAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_28.setTransform(436.2,59.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgWAAIAAgPIAYgMIALghIATAAIAAAjIAtAAIAAAZIgtAAIAABTQABAMAFAGQAHAFAJAAQANAAAMgEIAAAZIgPAFQgJABgJAAQguAAAAgyg");
	this.shape_29.setTransform(422.5,58.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgKgKAAgRQABgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQgfAAgUgJg");
	this.shape_30.setTransform(410,59.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAhAAIAACbgAgMhLQgGgFAAgJQAAgJAGgFQAEgEAIAAQAJAAAFAEQAEAFAAAJQAAAJgEAFQgFAEgJAAQgIAAgEgEg");
	this.shape_31.setTransform(398.8,56.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6C1F7D").s().p("AgcAvIAAhTIgVAAIAAgPIAXgMIALghIATAAIAAAjIAtAAIAAAZIgtAAIAABTQAAAMAHAGQAFAFAKAAQAMAAAMgEIAAAZIgNAFQgJABgKAAQguAAAAgyg");
	this.shape_32.setTransform(388.9,58.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAIgOALgIQANgJAOAAQALAAAGACIgEAfQgGgCgIAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_33.setTransform(378,59.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQABgYARgLQATgMAjgCIAbAAIAAgJQAAgPgGgHQgIgIgOAAQgLAAgLAEQgLADgLAFIgKgYQANgGAOgEQAQgDAMAAQAeAAAPANQAPANAAAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgLAFgRAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQAAAKAHAGQAGAGAMAAQASAAAKgKQALgLAAgSIAAgOg");
	this.shape_34.setTransform(361.9,59.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQgBgPgHgHQgHgIgOAAQgLAAgMAEQgLADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_35.setTransform(337.6,59.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAIgOAMgIQAMgJAOAAQALAAAGACIgEAfQgGgCgIAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_36.setTransform(324.4,59.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQABgYARgLQASgMAkgCIAbAAIAAgJQABgPgIgHQgGgIgPAAQgLAAgMAEQgKADgLAFIgKgYQANgGAOgEQAQgDAMAAQAeAAAPANQAPANABAcIAABoIgYAAIgHgWIgBAAQgMAPgLAFQgMAFgQAAQgYAAgMgMgAANAEQgXABgKAHQgKAHAAAPQgBAKAHAGQAGAGAMAAQASAAALgKQALgLgBgSIAAgOg");
	this.shape_37.setTransform(308.3,59.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6C1F7D").s().p("AhGByIAAjhIAbAAIAEAVIACAAQAQgXAeAAQAdgBARAWQAQAVAAAnQAAAlgRAVQgRAWgdAAQgdAAgQgWIgCAAIACAYIAABAgAgbhLQgKAMAAAZIAAAGQAAAcAJAMQAJANAUAAQARgBAKgOQAIgNABgaQgBgagIgOQgKgOgSABQgTgBgIAMg");
	this.shape_38.setTransform(291.8,63);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAgAAIAADbg");
	this.shape_39.setTransform(270.7,56.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQAAgYARgLQASgMAkgCIAbAAIAAgJQABgPgIgHQgGgIgPAAQgLAAgMAEQgKADgKAFIgLgYQANgGAPgEQAPgDAMAAQAeAAAPANQAPANABAcIAABoIgYAAIgHgWIgBAAQgMAPgLAFQgLAFgSAAQgWAAgNgMgAANAEQgWABgLAHQgKAHAAAPQgBAKAHAGQAGAGAMAAQARAAAMgKQALgLgBgSIAAgOg");
	this.shape_40.setTransform(257.8,59.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_41.setTransform(242.9,59.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAgAAIAACbgAgMhLQgGgFAAgJQAAgJAGgFQAEgEAIAAQAJAAAFAEQAFAFgBAJQABAJgFAFQgFAEgJAAQgIAAgEgEg");
	this.shape_42.setTransform(231.5,56.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAcANAXAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgKgKABgRQAAgUAPgLQARgLAaAAQAcAAAZALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQggAAgSgJg");
	this.shape_43.setTransform(220.5,59.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAiAAIAABgQAAASAHAJQAHAJAQAAQAUAAAKgNQAJgMABgdIAAhOIAhAAIAACcIgbAAIgEgVIgBAAQgIALgMAGQgNAHgQAAQgcAAgOgPg");
	this.shape_44.setTransform(204.1,59.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6C1F7D").s().p("ABSBQIAAhgQAAgSgHgJQgHgJgOAAQgUAAgIANQgJAMAAAZIAABSIghAAIAAhgQAAgSgHgJQgGgJgPAAQgTAAgJANQgJANAAAcIAABOIghAAIAAicIAaAAIAEAVIACAAQAGgMANgGQAMgGAPAAQAkAAALAZIACAAQAHgMANgGQAMgHARAAQAcAAANAOQAMAPAAAdIAABlg");
	this.shape_45.setTransform(181.1,59.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_46.setTransform(150.5,59.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6C1F7D").s().p("AgmBmQgRgKgJgSQgJgTAAgYQAAglAUgVQATgWAiAAQAjAAATAWQAUAWAAAkQAAAngUAVQgTAVgjAAQgVAAgRgKgAgdgIQgKANAAAaQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOgAgUhBIAAgEIAQgWIAMgVIAnAAIAAAEIgVAVQgPAOgLAIg");
	this.shape_47.setTransform(132.4,56.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAgAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAEAFABAJQgBAJgEAFQgFAEgJAAQgIAAgFgEg");
	this.shape_48.setTransform(119.5,56.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_49.setTransform(108.5,59.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_50.setTransform(94.1,59.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6C1F7D").s().p("Ag2BBQgOgOAAgcIAAhmIAhAAIAABgQABASAHAJQAHAJAQAAQAUAAAKgNQAKgMAAgdIAAhOIAhAAIAACcIgaAAIgFgVIgCAAQgGALgNAGQgNAHgPAAQgdAAgOgPg");
	this.shape_51.setTransform(77.5,59.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_52.setTransform(58.8,56.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_53.setTransform(41.4,59.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAIgOAMgIQAMgJAOAAQALAAAGACIgEAfQgGgCgIAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_54.setTransform(27.3,59.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6C1F7D").s().p("AhGByIAAjhIAaAAIAGAVIABAAQAPgXAfAAQAdgBAQAWQARAVAAAnQAAAlgRAVQgQAWgeAAQgdAAgQgWIgCAAIACAYIAABAgAgchLQgJAMAAAZIAAAGQAAAcAJAMQAJANATAAQASgBAJgOQAJgNAAgaQAAgagJgOQgJgOgSABQgTgBgJAMg");
	this.shape_55.setTransform(11.5,63);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgHgIgOAAQgLAAgMAEQgLADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_56.setTransform(631.9,25.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAgAAIAADbg");
	this.shape_57.setTransform(619.9,22);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_58.setTransform(599.2,25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_59.setTransform(581.6,25.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNAAgXQABgYARgLQATgMAjgCIAbAAIAAgJQAAgPgGgHQgIgIgOAAQgLAAgLAEQgLADgLAFIgKgYQANgGAOgEQAQgDAMAAQAeAAAPANQAPANAAAcIAABoIgXAAIgHgWIgBAAQgMAPgLAFQgLAFgRAAQgYAAgMgMgAANAEQgWABgLAHQgLAHAAAPQAAAKAHAGQAGAGAMAAQASAAAKgKQALgLAAgSIAAgOg");
	this.shape_60.setTransform(556.8,25.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAhAAIAACbgAgNhLQgEgFAAgJQAAgJAEgFQAFgEAIAAQAJAAAFAEQAEAFABAJQgBAJgEAFQgFAEgJAAQgIAAgFgEg");
	this.shape_61.setTransform(544.8,22.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_62.setTransform(533.8,25.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_63.setTransform(517.3,25);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_64.setTransform(499.7,25.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAfAAIAACbgAgMhLQgGgFAAgJQABgJAFgFQAEgEAIAAQAJAAAFAEQAFAFgBAJQABAJgFAFQgFAEgJAAQgIAAgEgEg");
	this.shape_65.setTransform(487.3,22.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6C1F7D").s().p("AgvBQIAAicIAaAAIAEAcIACAAQAIgOAMgIQAMgJAOAAQALAAAGACIgEAfQgGgCgIAAQgUAAgMANQgMANAAAVIAABRg");
	this.shape_66.setTransform(477.9,25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_67.setTransform(462.4,25.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6C1F7D").s().p("AhGBzIAAjhIAaAAIAGAUIABAAQAPgYAfAAQAdABAQAVQARAVAAAmQAAAmgRAVQgQAWgeAAQgdAAgQgWIgCAAIACAZIAABAgAgbhKQgKALAAAaIAAAEQAAAdAJAMQAJAMATAAQASAAAJgNQAKgNAAgbQAAgagKgOQgJgOgSAAQgTAAgIANg");
	this.shape_68.setTransform(445.5,28.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6C1F7D").s().p("AAnBOIgng6IgmA6IglAAIA3hPIg1hMIAmAAIAjA2IAkg2IAmAAIg1BMIA3BPg");
	this.shape_69.setTransform(428,25.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_70.setTransform(411.7,25.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_71.setTransform(387.4,25.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_72.setTransform(369.6,22.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgKgKAAgRQABgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQgfAAgUgJg");
	this.shape_73.setTransform(346.5,25.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_74.setTransform(330.5,25.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6C1F7D").s().p("AAjBsIAAhhQAAgQgHgKQgHgIgQgBQgUAAgKANQgKAMAAAdIAABOIghAAIAAibIAaAAIAFAUIABAAQAIgLANgHQANgFAOgBQA5AAAAA5IAABmgAAKhFIgKgFIgLgGQgFgDgFABQgLgBgEARIgSAAQACgUAJgLQAKgKAOAAQAGAAAGACIAKAGIALAGQAFACAFAAQALAAAEgQIASAAQgCATgJAKQgJAMgPAAQgGAAgGgDg");
	this.shape_75.setTransform(312.5,22.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6C1F7D").s().p("Ag0BFQgNgNAAgXQgBgYATgLQARgMAlgCIAbAAIAAgJQAAgPgIgHQgHgIgOAAQgLAAgMAEQgLADgJAFIgMgYQANgGAQgEQAPgDAMAAQAeAAAQANQAOANAAAcIAABoIgXAAIgHgWIgBAAQgLAPgMAFQgMAFgRAAQgXAAgMgMgAANAEQgXABgKAHQgLAHABAPQAAAKAFAGQAHAGAMAAQARAAAMgKQAKgLABgSIAAgOg");
	this.shape_76.setTransform(294.4,25.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6C1F7D").s().p("AhCBdIAAgdQALAGAPADQAPAEANAAQAVAAAMgKQAMgKAAgUQAAglgvABIgQABIgRADIgPgIIAIhlIBrAAIAAAdIhOAAIgEA0IAMgCQAHgCAKABQAfgBASASQASAPAAAdQAAAggVATQgUATgmAAQgiAAgUgMg");
	this.shape_77.setTransform(270.7,22.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6C1F7D").s().p("AALBoIAAiFQAAgYABgOIgIAHIgfAaIgQgUIA7gwIAcAAIAADOg");
	this.shape_78.setTransform(252.4,22.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_79.setTransform(229.9,25.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6C1F7D").s().p("Ag2BaQgQgVAAgmQAAgmAQgVQARgWAdAAQAeAAAQAXIACAAQgCgRAAgKIAAg5IAhAAIAADcIgaAAIgGgVIgBAAQgQAYgeAAQgdAAgRgWgAgbgIQgJANAAAaQAAAaAJAOQAJAOASAAQAUAAAKgMQAJgLAAgaIAAgFQAAgegJgLQgKgNgUAAQgRAAgKAPg");
	this.shape_80.setTransform(212.1,22.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgDgEQgEgEgIgEIgVgKQgbgJgJgLQgKgKAAgRQABgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAEAIQAFAIAAAMQAAAXgRAMQgRAMgeAAQgfAAgUgJg");
	this.shape_81.setTransform(189,25.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6C1F7D").s().p("Ag0BkQgNgNAAgWQgBgZATgMQARgMAlgCIAbAAIAAgJQAAgNgIgIQgGgHgPAAQgLgBgMAEQgKAEgKAEIgLgYQANgGAPgEQAPgDAMAAQAeAAAQANQAPANAAAbIAABqIgYAAIgHgXIgBAAQgLAPgMAFQgLAFgSAAQgWABgNgNgAANAjQgXACgKAGQgKAIAAAOQAAALAFAFQAHAGAMAAQARAAAMgKQAKgLABgRIAAgPgAgQhBIAAgEIAQgWIANgUIAnAAIAAACIgWAXQgPANgKAIg");
	this.shape_82.setTransform(173,22.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6C1F7D").s().p("ABSBQIAAhgQAAgSgHgJQgHgJgOAAQgUAAgIANQgJAMAAAZIAABSIghAAIAAhgQAAgSgHgJQgGgJgPAAQgTAAgJANQgJANAAAcIAABOIghAAIAAicIAaAAIAEAVIACAAQAGgMANgGQAMgGAPAAQAkAAALAZIACAAQAHgMANgGQAMgHARAAQAcAAANAOQAMAPAAAdIAABlg");
	this.shape_83.setTransform(151.2,25);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6C1F7D").s().p("Ag4BIIAAgdQAcANAXAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgUgKQgbgJgKgLQgKgKABgRQAAgUAPgLQARgLAaAAQAcAAAZALIgLAZQgZgKgSAAQgZAAAAAPQAAAHAHAFQAHAFAWAJQATAIAJAFQAJAGAFAIQADAIAAAMQAAAXgQAMQgRAMgeAAQggAAgSgJg");
	this.shape_84.setTransform(122.8,25.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgdgnQgKAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgJAOg");
	this.shape_85.setTransform(106.8,25.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6C1F7D").s().p("ABSBQIAAhgQAAgSgHgJQgHgJgOAAQgUAAgIANQgJAMAAAZIAABSIghAAIAAhgQAAgSgHgJQgGgJgPAAQgTAAgJANQgJANAAAcIAABOIghAAIAAicIAaAAIAEAVIACAAQAGgMANgGQAMgGAPAAQAkAAALAZIACAAQAHgMANgGQAMgHARAAQAcAAANAOQAMAPAAAdIAABlg");
	this.shape_86.setTransform(84.1,25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_87.setTransform(61.9,25.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6C1F7D").s().p("AAjBQIAAhgQAAgSgHgJQgHgJgQAAQgUAAgKANQgKAMAAAdIAABOIghAAIAAicIAaAAIAFAVIABAAQAIgMANgGQANgGAOAAQA5AAAAA6IAABlg");
	this.shape_88.setTransform(44.4,25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_89.setTransform(26.8,25.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6C1F7D").s().p("AgQBoIAAixIg9AAIAAgdICbAAIAAAdIg9AAIAACxg");
	this.shape_90.setTransform(10.2,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol209, new cjs.Rectangle(0,0,719.1,112.5), null);


(lib.Symbol208 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C1F7D").s().p("AgMANQgFgFAAgIQAAgIAFgFQAEgFAIABQAJAAAFAEQAEAFAAAIQAAAIgEAFQgFAGgJAAQgIAAgEgGg");
	this.shape.setTransform(539.7,186.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_1.setTransform(532.8,178.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgLAeAAIAYgBIAAgHQAAgNgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANALAAAYIAABaIgUAAIgGgTIgBAAQgKAMgKAFQgKAEgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAFAAANQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgKAAgPIAAgMg");
	this.shape_2.setTransform(521.7,181.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQAAgQgGgIQgGgHgOAAQgRAAgJAKQgIALAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAHgJALgFQALgGAMAAQAyAAgBAyIAABXg");
	this.shape_3.setTransform(507,181.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C1F7D").s().p("AgNBeIAAiGIAbAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHgBQAIABAEAEQAEAEAAAIQAAAHgEAEQgEAFgIAAQgHAAgEgFg");
	this.shape_4.setTransform(495.6,178.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C1F7D").s().p("AgaBgIAAhxIgWAAIAAgNIAWgJIAAgJQAAgXALgMQAMgMAWAAQAPAAAPAFIgIAWQgLgDgJAAQgKAAgEAGQgFAGAAAMIAAAJIAhAAIAAAVIghAAIAABxg");
	this.shape_5.setTransform(488.3,178.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6C1F7D").s().p("AgpBFIAAiGIAXAAIAEAYIABAAQAHgNAKgHQALgHAMAAQAJAAAFACIgDAaQgFgBgHAAQgRAAgKALQgLALAAASIAABGg");
	this.shape_6.setTransform(471.9,181.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6C1F7D").s().p("AghA9QgPgIgHgQQgIgQAAgVQAAggARgSQAQgTAfAAQAcAAASATQARATAAAfQAAAhgRASQgRATgeAAQgTAAgOgJgAgZghQgIALAAAWQgBAuAiABQAigBAAguQAAgugiAAQgRABgIAMg");
	this.shape_7.setTransform(458.1,181.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6C1F7D").s().p("AgvBOQgNgSAAgiQAAggAOgSQAOgTAaAAQAZAAAOAUIABAAIgBgXIAAgxIAcAAIAAC9IgWAAIgFgSIgBAAQgOAUgaAAQgZAAgPgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQASAAAHgKQAJgKAAgWIAAgEQAAgagJgKQgIgKgRAAQgOAAgJAMg");
	this.shape_8.setTransform(442.3,178.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C1F7D").s().p("AgOBeIAAiGIAcAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHgBQAHABAFAEQAEAEAAAIQAAAHgEAEQgFAFgHAAQgHAAgEgFg");
	this.shape_9.setTransform(431.4,178.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C1F7D").s().p("ABHBFIAAhTQAAgPgGgIQgGgHgMAAQgRAAgIAKQgIALAAAVIAABHIgcAAIAAhTQABgPgHgIQgFgHgNAAQgQAAgIALQgIAKAAAYIAABEIgcAAIAAiGIAWAAIAEARIACAAQAFgJALgFQAKgGANAAQAfAAAKAWIABAAQAGgKAMgGQAKgGAOAAQAZAAALANQAKAMABAZIAABXg");
	this.shape_10.setTransform(416,181.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6C1F7D").s().p("AguA4QgNgMAAgZIAAhXIAdAAIAABSQAAAQAGAIQAHAHAOAAQAQAAAJgKQAJgLgBgYIAAhEIAeAAIAACGIgYAAIgDgRIgCAAQgGAJgKAFQgMAGgNAAQgYAAgMgNg");
	this.shape_11.setTransform(396.1,181.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6C1F7D").s().p("AgxA+IAAgZQAYALAVAAQAZAAAAgQQAAgFgCgEQgEgDgGgEIgRgIQgYgIgIgJQgJgJAAgOQABgSAOgJQAOgKAXAAQAXAAAWAKIgKAVQgVgJgPAAQgWAAAAANQAAAGAGAFQAFAFAUAHQAQAGAIAFQAIAFADAIQADAGAAAKQABAUgOAKQgPALgaAAQgbAAgRgIg");
	this.shape_12.setTransform(382.2,181.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQABgQgHgIQgGgHgOAAQgRAAgIAKQgJALAAAYIAABEIgdAAIAAiGIAXAAIAEARIACAAQAFgJAMgFQALgGAMAAQAyAAAAAyIAABXg");
	this.shape_13.setTransform(368.2,181.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6C1F7D").s().p("AghA9QgOgIgIgQQgIgQAAgVQAAggARgSQAQgTAfAAQAdAAARATQARATAAAfQAAAhgRASQgRATgeAAQgSAAgPgJgAgZghQgJALABAWQAAAuAhABQAigBAAguQAAgugiAAQgSABgHAMg");
	this.shape_14.setTransform(352.6,181.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C1F7D").s().p("AgjA0QgQgSAAgiQAAggARgSQARgTAfAAQAUAAASAIIgJAXQgSgHgMAAQgiAAAAAtQAAAXAJALQAJAMAPAAQAUAAAQgKIAAAZQgHAFgJACQgJACgMAAQgdAAgRgSg");
	this.shape_15.setTransform(338.9,181.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_16.setTransform(322.5,178.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgLAeAAIAYgBIAAgHQAAgNgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANALAAAYIAABaIgUAAIgGgTIgBAAQgKAMgKAFQgKAEgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAFAAANQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgKAAgPIAAgMg");
	this.shape_17.setTransform(311.4,181.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6C1F7D").s().p("AghA9QgOgIgIgQQgIgQAAgVQAAggARgSQAQgTAfAAQAdAAARATQARATAAAfQAAAhgRASQgRATgeAAQgSAAgPgJgAgZghQgJALABAWQAAAuAhABQAigBAAguQAAgugiAAQgSABgHAMg");
	this.shape_18.setTransform(290.5,181.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6C1F7D").s().p("AgvBOQgOgSABgiQAAggAOgSQAOgTAaAAQAZAAAOAUIABAAIgCgXIAAgxIAdAAIAAC9IgWAAIgFgSIgCAAQgOAUgZAAQgZAAgPgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQASAAAHgKQAJgKAAgWIAAgEQAAgagJgKQgIgKgRAAQgPAAgIAMg");
	this.shape_19.setTransform(274.6,178.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6C1F7D").s().p("AgOBeIAAiGIAcAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHgBQAIABAEAEQAEAEAAAIQAAAHgEAEQgEAFgIAAQgHAAgEgFg");
	this.shape_20.setTransform(263.8,178.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQABgQgHgIQgGgHgOAAQgRAAgJAKQgIALAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAHgJALgFQALgGAMAAQAyAAAAAyIAABXg");
	this.shape_21.setTransform(252.4,181.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6C1F7D").s().p("AgpAzQgSgSAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQARAAAcIAAAOIhZAAQAAAUAKAKQAKALASAAQAMAAAKgCQAKgCAMgFIAAAXQgLAFgKACQgLACgOAAQgeAAgSgTgAgTgmQgIAIgCARIA9AAQgBgRgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_22.setTransform(237.2,181.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6C1F7D").s().p("AgYApIAAhIIgSAAIAAgNIATgKIAKgdIARAAIAAAeIAmAAIAAAWIgmAAIAABHQAAALAFAFQAFAEAJAAQAKAAAKgDIAAAWIgMADQgHACgJAAQgnAAAAgrg");
	this.shape_23.setTransform(225,179.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6C1F7D").s().p("AAfBFIAAhSQgBgQgGgIQgGgHgOAAQgRAAgIAKQgJALAAAYIAABEIgcAAIAAiGIAWAAIAEARIACAAQAFgJAMgFQALgGANAAQAwAAAAAyIAABXg");
	this.shape_24.setTransform(212.3,181.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6C1F7D").s().p("AghA9QgOgIgIgQQgIgQAAgVQAAggARgSQARgTAdAAQAdAAARATQASATAAAfQAAAhgRASQgRATgeAAQgSAAgPgJgAgaghQgHALgBAWQAAAuAiABQAigBAAguQAAgugiAAQgSABgIAMg");
	this.shape_25.setTransform(196.7,181.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6C1F7D").s().p("AgjA0QgPgSAAgiQAAggAQgSQARgTAfAAQAUAAARAIIgIAXQgSgHgMAAQgiAAAAAtQAAAXAJALQAJAMAQAAQATAAARgKIAAAZQgIAFgJACQgIACgNAAQgdAAgRgSg");
	this.shape_26.setTransform(183.1,181.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6C1F7D").s().p("AghA9QgPgIgHgQQgIgQAAgVQAAggARgSQAQgTAfAAQAdAAARATQARATAAAfQAAAhgRASQgRATgeAAQgTAAgOgJgAgZghQgJALABAWQAAAuAhABQAigBAAguQAAgugiAAQgSABgHAMg");
	this.shape_27.setTransform(162.6,181.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6C1F7D").s().p("AgoBFIAAiGIAWAAIAEAYIABAAQAHgNAKgHQAKgHANAAQAJAAAFACIgCAaQgHgBgGAAQgRAAgKALQgLALAAASIAABGg");
	this.shape_28.setTransform(150.3,181.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6C1F7D").s().p("AgZApIAAhIIgSAAIAAgNIAUgKIAKgdIAQAAIAAAeIAnAAIAAAWIgnAAIAABHQAAALAGAFQAFAEAJAAQAKAAALgDIAAAWIgNADQgIACgHAAQgoAAgBgrg");
	this.shape_29.setTransform(139.1,179.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6C1F7D").s().p("AgxA+IAAgZQAZALAUAAQAZAAABgQQAAgFgDgEQgEgDgGgEIgSgIQgXgIgIgJQgIgJgBgOQABgSAOgJQAOgKAXAAQAYAAAVAKIgKAVQgVgJgPAAQgWAAAAANQAAAGAGAFQAGAFATAHQAQAGAIAFQAHAFAEAIQADAGAAAKQAAAUgOAKQgOALgaAAQgbAAgRgIg");
	this.shape_30.setTransform(128.3,181.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C1F7D").s().p("AgpAzQgSgSAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQARAAAcIAAAOIhZAAQAAAUAKAKQAKALASAAQAMAAAKgCQAKgCAMgFIAAAXQgLAFgKACQgLACgOAAQgeAAgSgTgAgTgmQgIAIgCARIA9AAQgBgRgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_31.setTransform(114.9,181.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6C1F7D").s().p("AguA4QgMgMgBgZIAAhXIAdAAIAABSQAAAQAGAIQAHAHANAAQASAAAIgKQAIgLAAgYIAAhEIAdAAIAACGIgWAAIgFgRIgBAAQgGAJgLAFQgLAGgNAAQgZAAgLgNg");
	this.shape_32.setTransform(99.8,181.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQAAgQgGgIQgGgHgOAAQgRAAgJAKQgIALAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAHgJALgFQALgGAMAAQAyAAgBAyIAABXg");
	this.shape_33.setTransform(84,181.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6C1F7D").s().p("AgpBFIAAiGIAXAAIAEAYIABAAQAHgNAKgHQAKgHANAAQAJAAAFACIgCAaQgHgBgGAAQgRAAgKALQgLALAAASIAABGg");
	this.shape_34.setTransform(64.9,181.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgLAeAAIAYgBIAAgHQAAgNgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANALAAAYIAABaIgUAAIgGgTIgBAAQgKAMgKAFQgKAEgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAFAAANQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgKAAgPIAAgMg");
	this.shape_35.setTransform(51,181.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6C1F7D").s().p("AgyBZQgPgKAAgSQAAgMAIgJQAIgIAOgEQgGgCgDgFQgEgGAAgGQAAgHAEgFQAEgFAJgFQgLgFgGgKQgHgKAAgOQAAgWAOgMQAOgMAaAAIALABIAJACIAvAAIAAAPIgXAFQADAEACAGQACAGAAAHQAAAVgOAMQgPAMgYAAIgMgBQgJAGAAAHQAAAEAEADQAFACALAAIAXAAQAWAAAMAJQALAKAAASQAAAXgTAMQgTANgiAAQgcAAgOgKgAggAsQgHAGAAAKQAAAJAIAFQAIAFAQAAQAWAAALgHQAMgGAAgMQAAgIgGgEQgHgEgRAAIgUAAQgNAAgHAGgAgVhIQgGAHAAANQAAANAHAHQAGAHAMAAQAYAAAAgbQAAgNgGgHQgGgHgMAAQgMAAgHAHg");
	this.shape_36.setTransform(37.2,184.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6C1F7D").s().p("AgpAzQgSgSAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQARAAAcIAAAOIhZAAQAAAUAKAKQAKALASAAQAMAAAKgCQAKgCAMgFIAAAXQgLAFgKACQgLACgOAAQgeAAgSgTgAgTgmQgIAIgCARIA9AAQgBgRgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_37.setTransform(23.1,181.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_38.setTransform(12.4,178.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_39.setTransform(5.5,178.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6C1F7D").s().p("AgxA+IAAgZQAYALAVAAQAaAAgBgQQAAgFgCgDQgEgEgGgEIgRgIQgYgIgIgJQgJgJAAgPQABgRAOgKQANgJAYAAQAXAAAWAJIgKAXQgVgKgPABQgWAAAAAMQAAAGAGAFQAFAEAUAIQAQAGAIAFQAIAFADAIQAEAGgBAKQAAAUgNALQgPAKgaAAQgbAAgRgIg");
	this.shape_40.setTransform(830,152.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6C1F7D").s().p("AghA9QgOgIgIgQQgIgQAAgVQAAggARgTQAQgSAeAAQAeAAAQATQASATAAAfQAAAhgRATQgRASgeAAQgTAAgOgJgAgagiQgIAMAAAWQABAuAhAAQAiAAAAguQAAgugiAAQgRAAgJAMg");
	this.shape_41.setTransform(816.3,152.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6C1F7D").s().p("ABHBFIAAhTQAAgPgGgIQgGgHgMAAQgRAAgIAKQgIALAAAVIAABHIgcAAIAAhTQABgPgHgIQgFgHgNAAQgQAAgIALQgIAKAAAYIAABEIgcAAIAAiGIAWAAIAEARIACAAQAFgJALgFQAKgGANAAQAfAAAKAWIABAAQAGgKAMgGQAKgGAOAAQAZAAALANQAKAMABAZIAABXg");
	this.shape_42.setTransform(796.7,152.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCARIA9AAQgBgRgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_43.setTransform(777.5,152.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6C1F7D").s().p("AgiA0QgQgSgBgiQAAggARgTQARgSAeAAQAWAAAQAIIgIAXQgSgHgMAAQgiAAAAAtQAAAXAJALQAIAMAQAAQATAAARgKIAAAZQgHAFgJACQgJACgMAAQgeAAgPgSg");
	this.shape_44.setTransform(764.3,152.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegBIAYgBIAAgHQAAgNgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAZIAABaIgUAAIgGgTIgBAAQgKAMgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgKAAgPIAAgMg");
	this.shape_45.setTransform(750.2,152.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6C1F7D").s().p("AAfBfIAAhTQAAgOgHgJQgGgHgOAAQgRAAgIALQgJAJAAAaIAABDIgcAAIAAi9IAcAAIAAAwIgBAZIACAAQAFgKALgFQALgFAMAAQAygBAAAxIAABYg");
	this.shape_46.setTransform(735.6,149.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCARIA9AAQgBgRgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_47.setTransform(713.9,152.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6C1F7D").s().p("AguA4QgMgMgBgZIAAhXIAdAAIAABSQAAAQAGAIQAHAHANAAQASAAAIgKQAIgLAAgYIAAhEIAdAAIAACGIgWAAIgFgRIgBAAQgGAJgLAFQgLAGgNAAQgZAAgLgNg");
	this.shape_48.setTransform(698.7,152.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6C1F7D").s().p("AAhBjIAAg5IAAgMIABgJIgCAAQgMAUgbAAQgZAAgOgSQgOgTgBggQAAggAPgTQAOgTAZAAQAMAAALAFQAJAFAJAKIABAAIACgRIAZAAIAADCgAgXg+QgIAMAAAXQAAAtAfAAQASAAAIgKQAIgKAAgVIAAgEQAAgZgIgLQgJgLgRAAQgPAAgIAMg");
	this.shape_49.setTransform(682.6,155.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegBIAYgBIAAgHQAAgNgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAZIAABaIgUAAIgGgTIgBAAQgKAMgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgKAAgPIAAgMg");
	this.shape_50.setTransform(661,152.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_51.setTransform(650.7,149.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQAAgQgGgIQgGgHgOAAQgRAAgJAKQgIALAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAHgJALgFQALgGANAAQAxAAgBAyIAABXg");
	this.shape_52.setTransform(632.9,152.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCARIA9AAQgBgRgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_53.setTransform(617.7,152.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegBIAYgBIAAgHQAAgNgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAZIAABaIgUAAIgGgTIgBAAQgKAMgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgKAAgPIAAgMg");
	this.shape_54.setTransform(596.3,152.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6C1F7D").s().p("AgbBgIAAiGIAbAAIAACGgAgdg3IAAgDIAPgTIALgSIAhAAIAAADIgTATQgMAMgJAGg");
	this.shape_55.setTransform(587.4,149.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6C1F7D").s().p("AgPBEIgziGIAfAAIAbBNQAHAUABAMIABAAQABgJAHgXIAchNIAeAAIgzCGg");
	this.shape_56.setTransform(575.9,152.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegBIAYgBIAAgHQAAgNgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAZIAABaIgUAAIgGgTIgBAAQgKAMgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgKAAgPIAAgMg");
	this.shape_57.setTransform(555,152.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_58.setTransform(544.7,149.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6C1F7D").s().p("AghA9QgOgIgIgQQgIgQAAgVQAAggARgTQARgSAdAAQAdAAARATQASATAAAfQAAAhgRATQgRASgeAAQgSAAgPgJgAgagiQgHAMgBAWQAAAuAiAAQAiAAAAguQAAgugiAAQgSAAgIAMg");
	this.shape_59.setTransform(527.1,152.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6C1F7D").s().p("AguBOQgOgSgBgiQAAggAPgSQAOgTAZAAQAaAAAOAUIACAAIgCgXIAAgxIAdAAIAAC9IgXAAIgFgSIgBAAQgOAUgaAAQgZAAgOgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQARAAAJgKQAHgKABgWIAAgEQAAgagIgKQgJgKgRAAQgPAAgIAMg");
	this.shape_60.setTransform(511.3,149.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegBIAYgBIAAgHQAAgNgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAZIAABaIgUAAIgGgTIgBAAQgKAMgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgKAAgPIAAgMg");
	this.shape_61.setTransform(496.2,152.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6C1F7D").s().p("AgjA0QgQgSAAgiQAAggARgTQARgSAfAAQAVAAARAIIgJAXQgSgHgMAAQgiAAAAAtQAAAXAJALQAJAMAPAAQAUAAAQgKIAAAZQgHAFgJACQgJACgMAAQgeAAgQgSg");
	this.shape_62.setTransform(483.4,152.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6C1F7D").s().p("AgOBeIAAiGIAcAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHAAQAIAAAEAEQAEAEAAAIQAAAHgEAEQgEAEgIAAQgHAAgEgEg");
	this.shape_63.setTransform(473.5,149.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6C1F7D").s().p("AgaBgIAAhxIgWAAIAAgNIAWgJIAAgJQAAgXALgMQAMgMAWAAQAPAAAPAFIgIAWQgLgDgJAAQgKAAgEAGQgFAGAAAMIAAAJIAhAAIAAAVIghAAIAABxg");
	this.shape_64.setTransform(466.3,149.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6C1F7D").s().p("AgOBeIAAiGIAcAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHAAQAHAAAFAEQAEAEAAAIQAAAHgEAEQgFAEgHAAQgHAAgEgEg");
	this.shape_65.setTransform(457.5,149.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_66.setTransform(450.5,149.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6C1F7D").s().p("Ag8BjIAAjCIAXAAIAEASIABAAQAOgVAaAAQAZAAAOATQAOASAAAhQAAAggOATQgOASgaAAQgYAAgPgSIgBAAIABAVIAAA3gAgYhAQgIAKAAAWIAAAEQAAAZAIAKQAIALARAAQAPAAAIgMQAIgMAAgWQAAgXgIgMQgIgLgQAAQgQAAgIAKg");
	this.shape_67.setTransform(439.6,155.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6C1F7D").s().p("ABHBFIAAhTQAAgPgGgIQgGgHgNAAQgQAAgIAKQgHALAAAVIAABHIgcAAIAAhTQgBgPgFgIQgGgHgMAAQgSAAgHALQgIAKAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAGgJALgFQAKgGAOAAQAeAAAJAWIACAAQAGgKALgGQALgGAOAAQAYAAALANQAMAMgBAZIAABXg");
	this.shape_68.setTransform(419.6,152.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6C1F7D").s().p("AgNBeIAAiGIAbAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHAAQAIAAAEAEQAEAEAAAIQAAAHgEAEQgEAEgIAAQgHAAgEgEg");
	this.shape_69.setTransform(404.1,149.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6C1F7D").s().p("AgxA+IAAgZQAYALAVAAQAZAAAAgQQAAgFgDgDQgCgEgHgEIgRgIQgYgIgIgJQgJgJAAgPQAAgRAOgKQAOgJAXAAQAZAAAUAJIgJAXQgWgKgPABQgVAAAAAMQAAAGAGAFQAGAEASAIQARAGAIAFQAHAFAEAIQADAGAAAKQAAAUgNALQgPAKgaAAQgbAAgRgIg");
	this.shape_70.setTransform(394.6,152.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegBIAYgBIAAgHQAAgNgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAZIAABaIgUAAIgGgTIgBAAQgKAMgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgKAAgPIAAgMg");
	this.shape_71.setTransform(374.3,152.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6C1F7D").s().p("AAeBfIAAhTQABgOgHgJQgGgHgOAAQgRAAgIALQgJAJAAAaIAABDIgdAAIAAi9IAdAAIAAAwIgCAZIADAAQAFgKALgFQALgFAMAAQAxgBABAxIAABYg");
	this.shape_72.setTransform(359.6,149.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6C1F7D").s().p("AghA9QgPgIgHgQQgIgQAAgVQAAggARgTQAQgSAfAAQAcAAASATQARATAAAfQAAAhgRATQgRASgeAAQgTAAgOgJgAgZgiQgIAMAAAWQgBAuAiAAQAiAAAAguQAAgugiAAQgRAAgIAMg");
	this.shape_73.setTransform(337.5,152.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6C1F7D").s().p("AgZApIAAhIIgSAAIAAgNIAUgKIAKgdIAQAAIAAAeIAnAAIAAAWIgnAAIAABHQAAALAGAFQAFAEAIAAQALAAALgDIAAAWIgNADQgIACgHAAQgoAAgBgrg");
	this.shape_74.setTransform(324.9,150.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6C1F7D").s().p("AgwA+IAAgZQAYALAUAAQAZAAABgQQAAgFgEgDQgDgEgGgEIgSgIQgXgIgIgJQgIgJAAgPQgBgRAOgKQAOgJAYAAQAXAAAWAJIgKAXQgVgKgPABQgWAAAAAMQAAAGAGAFQAGAEATAIQAQAGAIAFQAHAFAEAIQADAGABAKQgBAUgOALQgOAKgaAAQgbAAgQgIg");
	this.shape_75.setTransform(314,152.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCARIA9AAQgBgRgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_76.setTransform(300.7,152.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6C1F7D").s().p("AgVAeQAJgfAFgdIAbAAIABAEQgFAWgQAig");
	this.shape_77.setTransform(283.2,159.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6C1F7D").s().p("AgxA+IAAgZQAYALAVAAQAaAAgBgQQAAgFgCgDQgDgEgHgEIgRgIQgYgIgIgJQgJgJAAgPQABgRAOgKQANgJAYAAQAXAAAWAJIgKAXQgVgKgPABQgWAAAAAMQAAAGAGAFQAFAEAUAIQAQAGAIAFQAIAFADAIQAEAGgBAKQABAUgOALQgPAKgaAAQgbAAgRgIg");
	this.shape_78.setTransform(274.3,152.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCARIA9AAQgBgRgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_79.setTransform(260.9,152.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_80.setTransform(250.2,149.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6C1F7D").s().p("AgOBeIAAiGIAcAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHAAQAHAAAFAEQAEAEAAAIQAAAHgEAEQgFAEgHAAQgHAAgEgEg");
	this.shape_81.setTransform(243.3,149.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6C1F7D").s().p("AgOBEIg0iGIAeAAIAbBNQAIAUABAMIABAAQAAgJAIgXIAchNIAeAAIg0CGg");
	this.shape_82.setTransform(233.1,152.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6C1F7D").s().p("AghBYQgPgIgHgQQgIgQAAgVQAAggARgTQAQgSAfAAQAdAAARATQARATAAAfQAAAhgRATQgRASgeAAQgTAAgOgJgAgZgHQgJALABAXQAAAuAhAAQAiAAAAguQAAgugiAAQgSAAgHAMgAgSg4IAAgDIAOgTIALgSIAhAAIAAADIgTATIgUASg");
	this.shape_83.setTransform(218.8,149.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6C1F7D").s().p("ABHBFIAAhTQAAgPgGgIQgGgHgMAAQgRAAgIAKQgHALgBAVIAABHIgbAAIAAhTQAAgPgHgIQgFgHgNAAQgRAAgHALQgIAKAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAGgJALgFQALgGANAAQAeAAAJAWIADAAQAFgKAMgGQAKgGAOAAQAZAAAKANQALAMAAAZIAABXg");
	this.shape_84.setTransform(199.3,152.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6C1F7D").s().p("AgwA+IAAgZQAXALAVAAQAaAAAAgQQgBgFgDgDQgDgEgGgEIgSgIQgXgIgIgJQgJgJABgPQAAgRANgKQAPgJAWAAQAZAAAUAJIgJAXQgWgKgPABQgVAAAAAMQAAAGAGAFQAFAEATAIQARAGAIAFQAIAFADAIQAEAGAAAKQAAAUgPALQgOAKgaAAQgbAAgQgIg");
	this.shape_85.setTransform(174.8,152.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6C1F7D").s().p("AghA9QgPgIgHgQQgIgQAAgVQAAggARgTQARgSAdAAQAeAAARATQARATAAAfQAAAhgRATQgRASgeAAQgSAAgPgJgAgagiQgHAMAAAWQgBAuAiAAQAiAAAAguQAAgugiAAQgRAAgJAMg");
	this.shape_86.setTransform(161,152.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6C1F7D").s().p("AgPBEIgziGIAfAAIAbBNQAHAUABAMIAAAAQACgJAHgXIAchNIAeAAIgzCGg");
	this.shape_87.setTransform(146.7,152.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6C1F7D").s().p("AgNBeIAAiGIAbAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHAAQAIAAAEAEQAEAEAAAIQAAAHgEAEQgEAEgIAAQgHAAgEgEg");
	this.shape_88.setTransform(136.5,149.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6C1F7D").s().p("AgYApIAAhIIgSAAIAAgNIATgKIAKgdIAQAAIAAAeIAnAAIAAAWIgnAAIAABHQABALAFAFQAFAEAIAAQALAAALgDIAAAWIgNADQgIACgIAAQgoAAABgrg");
	this.shape_89.setTransform(128,150.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6C1F7D").s().p("AgNBeIAAiGIAbAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHAAQAIAAAEAEQAEAEAAAIQAAAHgEAEQgEAEgIAAQgHAAgEgEg");
	this.shape_90.setTransform(119.7,149.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6C1F7D").s().p("AgxA+IAAgZQAYALAVAAQAZAAAAgQQAAgFgDgDQgCgEgHgEIgRgIQgYgIgIgJQgJgJAAgPQAAgRAPgKQANgJAXAAQAZAAAUAJIgJAXQgWgKgPABQgVAAAAAMQAAAGAGAFQAGAEASAIQARAGAIAFQAHAFAEAIQADAGAAAKQAAAUgNALQgPAKgaAAQgbAAgRgIg");
	this.shape_91.setTransform(110.2,152.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6C1F7D").s().p("AghA9QgOgIgIgQQgIgQAAgVQAAggARgTQARgSAdAAQAdAAARATQASATAAAfQAAAhgRATQgRASgeAAQgSAAgPgJgAgagiQgHAMgBAWQAAAuAiAAQAiAAAAguQAAgugiAAQgSAAgIAMg");
	this.shape_92.setTransform(96.5,152.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6C1F7D").s().p("Ag8BjIAAjCIAXAAIAEASIABAAQAOgVAaAAQAZAAAOATQAOASAAAhQAAAggOATQgOASgaAAQgYAAgPgSIgBAAIABAVIAAA3gAgYhAQgIAKAAAWIAAAEQAAAZAIAKQAIALARAAQAPAAAIgMQAIgMAAgWQAAgXgIgMQgIgLgQAAQgQAAgIAKg");
	this.shape_93.setTransform(81.4,155.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6C1F7D").s().p("AgwA+IAAgZQAXALAVAAQAaAAAAgQQgBgFgDgDQgDgEgGgEIgSgIQgXgIgIgJQgJgJABgPQAAgRANgKQAPgJAWAAQAZAAAUAJIgJAXQgWgKgPABQgVAAAAAMQAAAGAGAFQAFAEATAIQARAGAIAFQAIAFADAIQAEAGAAAKQAAAUgPALQgOAKgaAAQgbAAgQgIg");
	this.shape_94.setTransform(67.2,152.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6C1F7D").s().p("AgNBeIAAiGIAbAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHAAQAIAAAEAEQAEAEAAAIQAAAHgEAEQgEAEgIAAQgHAAgEgEg");
	this.shape_95.setTransform(57.6,149.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6C1F7D").s().p("AgvBOQgNgSAAgiQAAggAOgSQAOgTAaAAQAZAAAOAUIABAAIgCgXIAAgxIAdAAIAAC9IgWAAIgFgSIgCAAQgOAUgZAAQgZAAgPgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQASAAAHgKQAJgKAAgWIAAgEQAAgagJgKQgIgKgRAAQgPAAgIAMg");
	this.shape_96.setTransform(45.9,149.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCARIA9AAQgBgRgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_97.setTransform(24.8,152.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6C1F7D").s().p("AguBOQgOgSgBgiQAAggAPgSQAOgTAZAAQAaAAAOAUIACAAIgCgXIAAgxIAdAAIAAC9IgXAAIgFgSIgBAAQgOAUgaAAQgZAAgOgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQARAAAJgKQAHgKABgWIAAgEQAAgagIgKQgJgKgRAAQgPAAgIAMg");
	this.shape_98.setTransform(9.4,149.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAPIhZAAQAAATAKALQAKAKASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_99.setTransform(872.4,123.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6C1F7D").s().p("AgYApIAAhIIgSAAIAAgNIATgKIAKgdIAQAAIAAAeIAnAAIAAAWIgnAAIAABHQABALAFAFQAFAEAIAAQALAAALgDIAAAWIgNADQgIACgIAAQgoAAABgrg");
	this.shape_100.setTransform(860.2,121.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQAAgQgGgIQgGgHgOAAQgRAAgJAKQgIALAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAHgJALgFQALgGANAAQAwAAAAAyIAABXg");
	this.shape_101.setTransform(847.5,123.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAPIhZAAQAAATAKALQAKAKASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_102.setTransform(832.3,123.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6C1F7D").s().p("AgNBdIAAiGIAbAAIAACGgAgLhAQgEgFAAgIQAAgHAEgEQAEgFAHABQAHgBAFAFQAEAEAAAHQAAAIgEAFQgFADgHAAQgHAAgEgDg");
	this.shape_103.setTransform(821.6,120.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6C1F7D").s().p("AgiA0QgQgSgBgiQAAggARgTQARgSAeAAQAVAAASAIIgJAXQgSgHgMAAQgiAAAAAtQAAAXAJAMQAIALAQAAQAUAAAQgJIAAAZQgHAEgJACQgJACgMAAQgeAAgPgSg");
	this.shape_104.setTransform(812.1,123.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAPIhZAAQAAATAKALQAKAKASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_105.setTransform(798.5,123.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6C1F7D").s().p("AgpBFIAAiGIAXAAIAEAYIABAAQAHgNAKgHQAKgHANAAQAJAAAFACIgCAaQgHgBgGAAQgRAAgKALQgLALAAASIAABGg");
	this.shape_106.setTransform(786.7,123.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6C1F7D").s().p("AgjA0QgQgSAAgiQAAggARgTQARgSAfAAQAUAAASAIIgJAXQgSgHgMAAQgiAAAAAtQAAAXAJAMQAJALAPAAQAUAAAQgJIAAAZQgHAEgJACQgJACgMAAQgeAAgQgSg");
	this.shape_107.setTransform(774.5,123.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6C1F7D").s().p("AghA+QgPgJgHgQQgIgQAAgVQAAggARgTQARgSAdAAQAdAAARATQASATAAAfQAAAhgRATQgRASgeAAQgSAAgPgIgAgagiQgHANgBAVQAAAvAigBQAiABAAgvQAAgtgiAAQgSgBgIAMg");
	this.shape_108.setTransform(754,123.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6C1F7D").s().p("AgxA+IAAgZQAYALAVAAQAZAAABgQQgBgFgCgDQgEgEgGgDIgRgJQgYgIgIgJQgJgJAAgPQABgRAOgKQANgJAYAAQAXAAAWAJIgKAXQgVgJgPAAQgWAAAAAMQAAAGAGAFQAFAFAUAHQAQAHAIAEQAIAFADAHQADAIAAAJQABAUgOALQgPAKgaAAQgbAAgRgIg");
	this.shape_109.setTransform(740.4,123.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6C1F7D").s().p("AguA4QgNgMAAgZIAAhXIAdAAIAABSQAAAQAGAIQAHAHANAAQASAAAIgKQAIgLAAgYIAAhEIAeAAIAACGIgYAAIgDgRIgCAAQgGAJgKAFQgMAGgNAAQgYAAgMgNg");
	this.shape_110.setTransform(726.3,123.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_111.setTransform(708.4,120.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAPIhZAAQAAATAKALQAKAKASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_112.setTransform(697.7,123.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6C1F7D").s().p("Ag9BgIAAgXIAPABQAVAAAIgYIAFgNIg2iGIAfAAIAbBNQAHARABANIABAAIAEgPIAfhcIAfAAIg6CYQgPArgkgBQgKAAgJgBg");
	this.shape_113.setTransform(677.3,126.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6C1F7D").s().p("AAfBFIAAhSQAAgQgHgIQgGgHgOAAQgRAAgIAKQgJALAAAYIAABEIgcAAIAAiGIAWAAIAEARIACAAQAFgJAMgFQALgGAMAAQAyAAAAAyIAABXg");
	this.shape_114.setTransform(656.3,123.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6C1F7D").s().p("AghBZQgPgJgHgQQgIgQAAgVQAAggARgTQARgSAeAAQAdAAAQATQASATAAAfQAAAhgRATQgRASgeAAQgTAAgOgIgAgZgHQgJAMABAWQAAAvAhgBQAiABAAgvQAAgtgiAAQgSgBgHAMgAgSg4IAAgDIAOgTIALgSIAhAAIAAACIgTAUIgUASg");
	this.shape_115.setTransform(640.7,120.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6C1F7D").s().p("AgNBdIAAiGIAbAAIAACGgAgLhAQgEgFAAgIQAAgHAEgEQAEgFAHABQAIgBAEAFQAEAEAAAHQAAAIgEAFQgEADgIAAQgHAAgEgDg");
	this.shape_116.setTransform(629.6,120.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6C1F7D").s().p("AgiA0QgRgSAAgiQAAggARgTQARgSAeAAQAVAAASAIIgJAXQgSgHgMAAQgiAAAAAtQAAAXAJAMQAJALAPAAQAUAAAQgJIAAAZQgHAEgJACQgJACgMAAQgeAAgPgSg");
	this.shape_117.setTransform(620.1,123.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgMAegBIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANAMAAAXIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgIAAgQIAAgMg");
	this.shape_118.setTransform(606,123.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6C1F7D").s().p("AgZApIAAhIIgSAAIAAgNIAUgKIAKgdIARAAIAAAeIAmAAIAAAWIgmAAIAABHQgBALAGAFQAFAEAJAAQAKAAALgDIAAAWIgNADQgIACgHAAQgpAAAAgrg");
	this.shape_119.setTransform(594.2,121.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6C1F7D").s().p("AguA4QgNgMAAgZIAAhXIAdAAIAABSQAAAQAGAIQAHAHANAAQASAAAIgKQAIgLAAgYIAAhEIAeAAIAACGIgXAAIgEgRIgCAAQgGAJgKAFQgMAGgNAAQgZAAgLgNg");
	this.shape_120.setTransform(581.4,123.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6C1F7D").s().p("Ag8BjIAAjCIAXAAIAEASIABAAQAOgVAaAAQAZAAAOATQAOASAAAhQAAAggOATQgOASgaAAQgYAAgPgSIgBAAIABAVIAAA3gAgYhAQgIAKAAAWIAAAEQAAAZAIAKQAIALARAAQAPAAAIgMQAIgMAAgWQAAgXgIgMQgIgLgQAAQgQAAgIAKg");
	this.shape_121.setTransform(566,126.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6C1F7D").s().p("ABHBFIAAhTQAAgPgGgIQgGgHgMAAQgRAAgIAKQgIALAAAVIAABHIgcAAIAAhTQABgPgHgIQgFgHgNAAQgQAAgIALQgIAKAAAYIAABEIgcAAIAAiGIAWAAIAEARIACAAQAFgJALgFQALgGAMAAQAfAAAKAWIACAAQAFgKAMgGQAKgGAOAAQAZAAAKANQAMAMAAAZIAABXg");
	this.shape_122.setTransform(546,123.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6C1F7D").s().p("AghA+QgPgJgHgQQgIgQAAgVQAAggARgTQARgSAeAAQAdAAAQATQASATAAAfQAAAhgRATQgRASgeAAQgTAAgOgIgAgZgiQgJANAAAVQABAvAhgBQAiABAAgvQAAgtgiAAQgSgBgHAMg");
	this.shape_123.setTransform(526.4,123.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6C1F7D").s().p("AgjA0QgQgSAAgiQABggAQgTQARgSAfAAQAUAAASAIIgJAXQgSgHgMAAQgiAAAAAtQAAAXAJAMQAIALARAAQASAAASgJIAAAZQgIAEgJACQgIACgNAAQgeAAgQgSg");
	this.shape_124.setTransform(512.7,123.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgMAegBIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANAMAAAXIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgIAAgQIAAgMg");
	this.shape_125.setTransform(492.1,123.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_126.setTransform(481.8,120.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAPIhZAAQAAATAKALQAKAKASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_127.setTransform(464.7,123.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6C1F7D").s().p("AguBOQgPgSAAgiQAAggAPgSQAOgTAZAAQAaAAAOAUIABAAIgBgXIAAgxIAcAAIAAC9IgWAAIgFgSIgBAAQgOAUgaAAQgZAAgOgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQARAAAIgKQAJgKAAgWIAAgEQAAgagJgKQgIgKgRAAQgOAAgJAMg");
	this.shape_128.setTransform(449.3,120.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6C1F7D").s().p("AghA+QgPgJgHgQQgIgQAAgVQAAggARgTQARgSAdAAQAdAAARATQASATAAAfQAAAhgRATQgRASgeAAQgSAAgPgIgAgagiQgHANgBAVQAAAvAigBQAiABAAgvQAAgtgiAAQgSgBgIAMg");
	this.shape_129.setTransform(427.8,123.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_130.setTransform(416.6,120.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_131.setTransform(409.7,120.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#6C1F7D").s().p("AghA+QgPgJgHgQQgIgQAAgVQAAggARgTQAQgSAeAAQAeAAARATQARATAAAfQAAAhgRATQgRASgeAAQgSAAgPgIgAgagiQgHANAAAVQgBAvAigBQAiABAAgvQAAgtgiAAQgRgBgJAMg");
	this.shape_132.setTransform(398.6,123.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#6C1F7D").s().p("AgoBFIAAiGIAWAAIAEAYIABAAQAHgNAKgHQALgHAMAAQAIAAAHACIgDAaQgHgBgGAAQgSAAgJALQgLALAAASIAABGg");
	this.shape_133.setTransform(386.4,123.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#6C1F7D").s().p("AgoBFIAAiGIAWAAIAEAYIABAAQAHgNAKgHQALgHAMAAQAIAAAHACIgDAaQgHgBgGAAQgSAAgJALQgLALAAASIAABGg");
	this.shape_134.setTransform(375.6,123.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgMAegBIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANAMAAAXIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgIAAgQIAAgMg");
	this.shape_135.setTransform(361.7,123.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#6C1F7D").s().p("AgxA+IAAgZQAYALAVAAQAaAAgBgQQAAgFgCgDQgEgEgGgDIgRgJQgYgIgIgJQgJgJAAgPQABgRAOgKQAOgJAXAAQAXAAAWAJIgKAXQgVgJgPAAQgWAAAAAMQAAAGAGAFQAFAFAUAHQAQAHAIAEQAIAFADAHQADAIAAAJQABAUgOALQgPAKgaAAQgbAAgRgIg");
	this.shape_136.setTransform(348.9,123.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAPIhZAAQAAATAKALQAKAKASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_137.setTransform(335.5,123.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#6C1F7D").s().p("AguBOQgPgSAAgiQAAggAPgSQAOgTAZAAQAaAAAOAUIABAAIgBgXIAAgxIAcAAIAAC9IgWAAIgFgSIgBAAQgOAUgaAAQgZAAgOgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQARAAAIgKQAJgKAAgWIAAgEQAAgagJgKQgIgKgRAAQgOAAgJAMg");
	this.shape_138.setTransform(320.1,120.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_139.setTransform(302.7,120.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgMAegBIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANAMAAAXIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgIAAgQIAAgMg");
	this.shape_140.setTransform(291.6,123.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#6C1F7D").s().p("AghA+QgOgJgIgQQgIgQAAgVQAAggARgTQAQgSAfAAQAdAAARATQARATAAAfQAAAhgRATQgRASgeAAQgSAAgPgIgAgZgiQgJANABAVQAAAvAhgBQAiABAAgvQAAgtgiAAQgSgBgHAMg");
	this.shape_141.setTransform(270.7,123.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#6C1F7D").s().p("AgvBOQgOgSABgiQAAggAOgSQAOgTAaAAQAZAAAOAUIABAAIgCgXIAAgxIAdAAIAAC9IgWAAIgFgSIgCAAQgOAUgZAAQgZAAgPgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQASAAAHgKQAJgKAAgWIAAgEQAAgagJgKQgIgKgRAAQgPAAgIAMg");
	this.shape_142.setTransform(254.8,120.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#6C1F7D").s().p("AgOBdIAAiGIAcAAIAACGgAgLhAQgEgFAAgIQAAgHAEgEQAEgFAHABQAIgBAEAFQAEAEAAAHQAAAIgEAFQgEADgIAAQgHAAgEgDg");
	this.shape_143.setTransform(244,120.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#6C1F7D").s().p("AggBOIgCAAIgFAQIgVAAIAAi9IAcAAIAAAtIAAAPIgBAMIABAAQAOgUAaAAQAZAAAOATQAOASAAAgQAAAhgOATQgOASgaAAQgYAAgPgSgAgYgJQgHAJgBAYIAAACQAAAZAIALQAIALARAAQAPAAAIgMQAIgMAAgXQAAgtggAAQgQAAgIAKg");
	this.shape_144.setTransform(233,120.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAPIhZAAQAAATAKALQAKAKASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_145.setTransform(217.7,123.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#6C1F7D").s().p("AgvBOQgOgSABgiQAAggAOgSQAOgTAaAAQAZAAAOAUIACAAIgDgXIAAgxIAeAAIAAC9IgXAAIgFgSIgCAAQgOAUgZAAQgZAAgPgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQARAAAJgKQAHgKABgWIAAgEQAAgagIgKQgJgKgRAAQgPAAgIAMg");
	this.shape_146.setTransform(202.3,120.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#6C1F7D").s().p("AgUAeQAIgfAEgdIAbAAIACAEQgFAWgQAig");
	this.shape_147.setTransform(184.6,130.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6C1F7D").s().p("AghA+QgPgJgHgQQgIgQAAgVQAAggARgTQARgSAdAAQAeAAARATQARATAAAfQAAAhgRATQgRASgeAAQgSAAgPgIgAgagiQgHANAAAVQgBAvAigBQAiABAAgvQAAgtgiAAQgRgBgJAMg");
	this.shape_148.setTransform(174.1,123.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#6C1F7D").s().p("AgZApIAAhIIgRAAIAAgNIATgKIAKgdIAQAAIAAAeIAnAAIAAAWIgnAAIAABHQABALAFAFQAFAEAIAAQALAAALgDIAAAWIgNADQgIACgHAAQgoAAgBgrg");
	this.shape_149.setTransform(161.4,121.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQAAgQgGgIQgGgHgOAAQgRAAgJAKQgIALAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAHgJALgFQALgGANAAQAxAAgBAyIAABXg");
	this.shape_150.setTransform(148.7,123.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAPIhZAAQAAATAKALQAKAKASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_151.setTransform(133.5,123.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#6C1F7D").s().p("AgNBdIAAiGIAbAAIAACGgAgLhAQgEgFAAgIQAAgHAEgEQAEgFAHABQAIgBAEAFQAEAEAAAHQAAAIgEAFQgEADgIAAQgHAAgEgDg");
	this.shape_152.setTransform(122.9,120.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#6C1F7D").s().p("ABHBFIAAhTQAAgPgGgIQgGgHgMAAQgRAAgIAKQgHALAAAVIAABHIgcAAIAAhTQAAgPgHgIQgFgHgNAAQgRAAgHALQgIAKAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAGgJALgFQALgGANAAQAeAAAJAWIADAAQAFgKAMgGQAKgGAOAAQAYAAALANQALAMAAAZIAABXg");
	this.shape_153.setTransform(107.5,123.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#6C1F7D").s().p("AgOBdIAAiGIAcAAIAACGgAgLhAQgEgFAAgIQAAgHAEgEQAEgFAHABQAHgBAFAFQAEAEAAAHQAAAIgEAFQgFADgHAAQgHAAgEgDg");
	this.shape_154.setTransform(92,120.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#6C1F7D").s().p("AgjA0QgQgSAAgiQABggAQgTQARgSAfAAQAVAAARAIIgJAXQgSgHgMAAQgiAAAAAtQAAAXAJAMQAIALARAAQASAAASgJIAAAZQgIAEgJACQgIACgNAAQgeAAgQgSg");
	this.shape_155.setTransform(82.5,123.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAPIhZAAQAAATAKALQAKAKASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_156.setTransform(68.9,123.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#6C1F7D").s().p("AgpBFIAAiGIAXAAIAEAYIABAAQAHgNAKgHQALgHAMAAQAIAAAHACIgEAaQgFgBgHAAQgRAAgKALQgLALAAASIAABGg");
	this.shape_157.setTransform(57.1,123.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6C1F7D").s().p("AgjA0QgPgSAAgiQAAggAQgTQARgSAfAAQAUAAARAIIgIAXQgSgHgMAAQgiAAAAAtQAAAXAJAMQAJALAQAAQATAAARgJIAAAZQgIAEgJACQgIACgNAAQgdAAgRgSg");
	this.shape_158.setTransform(44.9,123.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAPIhZAAQAAATAKALQAKAKASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_159.setTransform(24.8,123.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#6C1F7D").s().p("AguBOQgOgSgBgiQAAggAPgSQAOgTAZAAQAaAAAOAUIACAAIgCgXIAAgxIAdAAIAAC9IgXAAIgFgSIgBAAQgOAUgaAAQgZAAgOgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQARAAAJgKQAHgKABgWIAAgEQAAgagIgKQgJgKgRAAQgPAAgIAMg");
	this.shape_160.setTransform(9.4,120.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#6C1F7D").s().p("AgwA+IAAgZQAXALAVAAQAaAAAAgQQgBgFgDgEQgDgDgGgDIgSgJQgXgIgIgJQgJgJABgOQAAgSANgKQAPgJAWAAQAZAAAUAJIgJAWQgWgIgPgBQgVAAAAANQAAAGAGAFQAFAEATAIQARAGAIAFQAIAFADAHQAEAIAAAJQAAAUgPAKQgOALgaAAQgbAAgQgIg");
	this.shape_161.setTransform(848.9,94.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgKAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANALAAAYIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAGAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgJAAgPIAAgMg");
	this.shape_162.setTransform(835,94.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#6C1F7D").s().p("AgwA+IAAgZQAXALAVAAQAZAAAAgQQAAgFgDgEQgDgDgGgDIgSgJQgXgIgIgJQgJgJABgOQAAgSANgKQAPgJAWAAQAZAAAUAJIgJAWQgWgIgPgBQgVAAAAANQAAAGAGAFQAFAEATAIQARAGAIAFQAHAFAEAHQAEAIAAAJQAAAUgPAKQgOALgaAAQgbAAgQgIg");
	this.shape_163.setTransform(822.2,94.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgKAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANALAAAYIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAGAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgJAAgPIAAgMg");
	this.shape_164.setTransform(808.4,94.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#6C1F7D").s().p("AgZApIAAhIIgSAAIAAgNIAUgKIAKgdIAQAAIAAAeIAnAAIAAAWIgnAAIAABHQAAALAGAFQAFAEAJAAQAKAAALgDIAAAWIgNADQgIACgHAAQgoAAgBgrg");
	this.shape_165.setTransform(796.6,92.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#6C1F7D").s().p("AgwA+IAAgZQAYALAUAAQAaAAAAgQQAAgFgEgEQgDgDgGgDIgSgJQgXgIgIgJQgIgJAAgOQgBgSAOgKQAOgJAYAAQAXAAAWAJIgKAWQgVgIgQgBQgVAAAAANQAAAGAGAFQAFAEATAIQARAGAIAFQAHAFAEAHQADAIABAJQgBAUgOAKQgOALgaAAQgbAAgQgIg");
	this.shape_166.setTransform(779.2,94.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgKAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANALAAAYIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAGAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgJAAgPIAAgMg");
	this.shape_167.setTransform(765.4,94.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#6C1F7D").s().p("AgZApIAAhIIgSAAIAAgNIAUgKIAKgdIARAAIAAAeIAmAAIAAAWIgmAAIAABHQgBALAGAFQAFAEAJAAQAKAAAKgDIAAAWIgMADQgHACgJAAQgoAAAAgrg");
	this.shape_168.setTransform(753.6,92.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_169.setTransform(745.2,91.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgKAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANALAAAYIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAGAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgJAAgPIAAgMg");
	this.shape_170.setTransform(734.1,94.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#6C1F7D").s().p("AghA+QgPgJgHgQQgIgQAAgVQAAggARgTQARgSAdAAQAeAAARATQARATAAAfQAAAhgRASQgRATgeAAQgSAAgPgIgAgaghQgHAMAAAVQgBAvAiAAQAiAAAAgvQAAgtgiAAQgRAAgJAMg");
	this.shape_171.setTransform(713.2,94.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#6C1F7D").s().p("AgvBOQgOgSAAgiQAAggAPgSQAOgTAZAAQAaAAAOAUIABAAIgBgXIAAgxIAcAAIAAC9IgWAAIgFgSIgBAAQgOAUgaAAQgZAAgPgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQARAAAIgKQAJgKAAgWIAAgEQAAgagJgKQgIgKgRAAQgOAAgJAMg");
	this.shape_172.setTransform(697.3,91.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgKAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANALAAAYIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAGAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgJAAgPIAAgMg");
	this.shape_173.setTransform(682.2,94.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#6C1F7D").s().p("AgYApIAAhIIgSAAIAAgNIATgKIAKgdIARAAIAAAeIAmAAIAAAWIgmAAIAABHQgBALAGAFQAFAEAJAAQAKAAAKgDIAAAWIgMADQgHACgJAAQgnAAAAgrg");
	this.shape_174.setTransform(670.4,92.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#6C1F7D").s().p("AAfBFIAAhSQAAgQgHgIQgGgHgOAAQgRAAgIAKQgJALAAAYIAABEIgcAAIAAiGIAWAAIAEARIACAAQAFgJAMgFQALgGAMAAQAyAAAAAyIAABXg");
	this.shape_175.setTransform(657.7,94.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#6C1F7D").s().p("AgpAzQgSgSAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAOIhZAAQAAAUAKALQAKAKASAAQAMAAAKgCQAKgDAMgEIAAAXQgLAFgKACQgLACgOAAQgeAAgSgTgAgTgnQgIAJgCAQIA9AAQgBgQgIgJQgHgIgOAAQgNAAgIAIg");
	this.shape_176.setTransform(642.5,94.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#6C1F7D").s().p("ABHBFIAAhTQAAgPgGgIQgGgHgNAAQgQAAgIAKQgHALAAAVIAABHIgcAAIAAhTQgBgPgFgIQgGgHgMAAQgSAAgHALQgIAKAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAGgJALgFQAKgGAOAAQAeAAAJAWIACAAQAGgKALgGQALgGAOAAQAYAAALANQALAMAAAZIAABXg");
	this.shape_177.setTransform(623.4,94.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#6C1F7D").s().p("AgNBdIAAiGIAbAAIAACGgAgLhAQgEgFAAgIQAAgHAEgEQAEgFAHAAQAIAAAEAFQAEAEAAAHQAAAIgEAFQgEADgIAAQgHAAgEgDg");
	this.shape_178.setTransform(608,91.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#6C1F7D").s().p("AgoBFIAAiGIAWAAIAEAYIABAAQAHgNAKgHQAKgHANAAQAJAAAFACIgCAaQgHgBgGAAQgRAAgKALQgLALAAASIAABGg");
	this.shape_179.setTransform(599.9,94.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#6C1F7D").s().p("AgpAzQgSgSAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAOIhZAAQAAAUAKALQAKAKASAAQAMAAAKgCQAKgDAMgEIAAAXQgLAFgKACQgLACgOAAQgeAAgSgTgAgTgnQgIAJgCAQIA9AAQgBgQgIgJQgHgIgOAAQgNAAgIAIg");
	this.shape_180.setTransform(586.5,94.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#6C1F7D").s().p("Ag8BjIAAjCIAXAAIAEASIABAAQAOgVAaAAQAZAAAOATQAOASAAAhQAAAggOATQgOASgaAAQgYAAgPgSIgBAAIABAVIAAA3gAgYhAQgIAKAAAWIAAAEQAAAZAIAKQAIALARAAQAPAAAIgMQAIgMAAgWQAAgXgIgMQgIgLgQAAQgQAAgIAKg");
	this.shape_181.setTransform(571.8,97.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#6C1F7D").s().p("AAhBDIghgyIggAyIghAAIAwhDIguhDIAhAAIAeAvIAfgvIAgAAIgtBDIAwBDg");
	this.shape_182.setTransform(556.8,94.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#6C1F7D").s().p("AgpAzQgSgSAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAOIhZAAQAAAUAKALQAKAKASAAQAMAAAKgCQAKgDAMgEIAAAXQgLAFgKACQgLACgOAAQgeAAgSgTgAgTgnQgIAJgCAQIA9AAQgBgQgIgJQgHgIgOAAQgNAAgIAIg");
	this.shape_183.setTransform(542.7,94.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgKAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANALAAAYIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAGAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgJAAgPIAAgMg");
	this.shape_184.setTransform(521.3,94.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#6C1F7D").s().p("AAeBfIAAhTQABgPgHgHQgGgIgOAAQgRAAgJALQgIAKAAAZIAABDIgdAAIAAi9IAdAAIAAAwIgCAZIADAAQAFgJALgGQALgGAMAAQAxABABAwIAABYg");
	this.shape_185.setTransform(506.7,91.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#6C1F7D").s().p("AgwA+IAAgZQAXALAVAAQAaAAAAgQQgBgFgDgEQgDgDgGgDIgSgJQgXgIgIgJQgJgJABgOQAAgSANgKQAPgJAWAAQAZAAAUAJIgJAWQgWgIgPgBQgVAAAAANQAAAGAGAFQAFAEATAIQARAGAIAFQAIAFADAHQAEAIAAAJQAAAUgPAKQgOALgaAAQgbAAgQgIg");
	this.shape_186.setTransform(486.2,94.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#6C1F7D").s().p("AggBOIgCAAIgFAQIgVAAIAAi9IAcAAIAAAtIAAAPIgBAMIABAAQAOgUAaAAQAZAAAOATQAOASAAAgQAAAhgOATQgOASgaAAQgYAAgPgSgAgYgJQgHAJgBAYIAAACQAAAZAIALQAIALARAAQAPAAAIgMQAIgMAAgXQAAgtggAAQgQAAgIAKg");
	this.shape_187.setTransform(472.6,91.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#6C1F7D").s().p("AgpAzQgSgSAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAOIhZAAQAAAUAKALQAKAKASAAQAMAAAKgCQAKgDAMgEIAAAXQgLAFgKACQgLACgOAAQgeAAgSgTgAgTgnQgIAJgCAQIA9AAQgBgQgIgJQgHgIgOAAQgNAAgIAIg");
	this.shape_188.setTransform(457.2,94.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#6C1F7D").s().p("AAdBDIgRg/QgDgJgJgkIAAAAIgLAuIgSA+IggAAIgmiGIAdAAIASBDQAGAYACARIABAAIAEgUIAEgSIAUhGIAfAAIAUBGIAFATQACAMABAHIAAAAQADgPAGgaIAShDIAcAAIgmCGg");
	this.shape_189.setTransform(439.8,94.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#6C1F7D").s().p("Ag9BgIAAgXIAPABQAVAAAIgYIAFgNIg2iGIAfAAIAbBNQAHAQABAOIABAAIAEgQIAfhbIAfAAIg6CYQgOAqglABQgKAAgJgCg");
	this.shape_190.setTransform(416.4,97.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#6C1F7D").s().p("AgxA+IAAgZQAYALAVAAQAaAAgBgQQAAgFgCgEQgDgDgHgDIgRgJQgYgIgIgJQgJgJAAgOQAAgSAPgKQANgJAXAAQAZAAAUAJIgJAWQgWgIgOgBQgWAAAAANQAAAGAGAFQAFAEAUAIQAQAGAIAFQAIAFADAHQAEAIgBAJQAAAUgNAKQgPALgaAAQgbAAgRgIg");
	this.shape_191.setTransform(397.2,94.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#6C1F7D").s().p("Ag8BjIAAjCIAXAAIAEASIABAAQAOgVAaAAQAZAAAOATQAOASAAAhQAAAggOATQgOASgaAAQgYAAgPgSIgBAAIABAVIAAA3gAgYhAQgIAKAAAWIAAAEQAAAZAIAKQAIALARAAQAPAAAIgMQAIgMAAgWQAAgXgIgMQgIgLgQAAQgQAAgIAKg");
	this.shape_192.setTransform(383.6,97.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#6C1F7D").s().p("Ag8BjIAAjCIAXAAIAEASIABAAQAOgVAaAAQAZAAAOATQAOASAAAhQAAAggOATQgOASgaAAQgYAAgPgSIgBAAIABAVIAAA3gAgYhAQgIAKAAAWIAAAEQAAAZAIAKQAIALARAAQAPAAAIgMQAIgMAAgWQAAgXgIgMQgIgLgQAAQgQAAgIAKg");
	this.shape_193.setTransform(368,97.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgKAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANALAAAYIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAGAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgJAAgPIAAgMg");
	this.shape_194.setTransform(352.2,94.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#6C1F7D").s().p("AgUAfQAIggAEgdIAbAAIADADQgHAXgPAjg");
	this.shape_195.setTransform(335.1,101.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#6C1F7D").s().p("AgwA+IAAgZQAYALAUAAQAZAAABgQQAAgFgEgEQgDgDgGgDIgSgJQgXgIgIgJQgIgJAAgOQgBgSAOgKQAOgJAYAAQAXAAAWAJIgKAWQgVgIgPgBQgWAAAAANQAAAGAGAFQAGAEATAIQAQAGAIAFQAHAFAEAHQADAIABAJQgBAUgOAKQgOALgaAAQgbAAgQgIg");
	this.shape_196.setTransform(326.2,94.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#6C1F7D").s().p("AghA+QgPgJgHgQQgIgQAAgVQAAggARgTQAQgSAfAAQAcAAASATQARATAAAfQAAAhgRASQgRATgeAAQgTAAgOgIgAgZghQgJAMABAVQAAAvAhAAQAiAAAAgvQAAgtgiAAQgSAAgHAMg");
	this.shape_197.setTransform(312.4,94.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#6C1F7D").s().p("AgyBZQgPgKAAgSQAAgMAIgJQAIgIAOgEQgGgCgDgFQgEgGAAgGQAAgHAEgFQAEgFAJgFQgLgFgGgKQgHgKAAgOQAAgWAOgMQAOgMAaAAIALABIAJACIAvAAIAAAPIgXAFQADAEACAGQACAGAAAHQAAAVgOAMQgPAMgYAAIgMgBQgJAGAAAHQAAAEAEADQAFACALAAIAXAAQAWAAAMAJQALAKAAASQAAAXgTAMQgTANgiAAQgcAAgOgKgAggAsQgHAGAAAKQAAAJAIAFQAIAFAQAAQAWAAALgHQAMgGAAgMQAAgIgGgEQgHgEgRAAIgUAAQgNAAgHAGgAgVhIQgGAHAAANQAAANAHAHQAGAHAMAAQAYAAAAgbQAAgNgGgHQgGgHgMAAQgMAAgHAHg");
	this.shape_198.setTransform(297.7,97.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#6C1F7D").s().p("AgpAzQgSgSAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAOIhZAAQAAAUAKALQAKAKASAAQAMAAAKgCQAKgDAMgEIAAAXQgLAFgKACQgLACgOAAQgeAAgSgTgAgTgnQgIAJgCAQIA9AAQgBgQgIgJQgHgIgOAAQgNAAgIAIg");
	this.shape_199.setTransform(283.7,94.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#6C1F7D").s().p("AguA4QgMgMgBgZIAAhXIAdAAIAABSQAAAQAGAIQAHAHANAAQASAAAIgKQAIgLAAgYIAAhEIAdAAIAACGIgWAAIgFgRIgBAAQgGAJgLAFQgLAGgNAAQgZAAgLgNg");
	this.shape_200.setTransform(268.5,94.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#6C1F7D").s().p("AggB5IAAgXQAIACAJAAQARAAAAgVIAAiWIAdAAIAACYQAAAVgLALQgLALgTAAQgNAAgJgDgAAFheQgEgFAAgIQAAgHAEgEQAEgFAIAAQAHAAAFAFQAEAEAAAHQAAAIgEAFQgFADgHAAQgIAAgEgDg");
	this.shape_201.setTransform(255.5,94.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#6C1F7D").s().p("AghA+QgPgJgHgQQgIgQAAgVQAAggARgTQARgSAdAAQAeAAARATQARATAAAfQAAAhgRASQgRATgeAAQgSAAgPgIgAgaghQgHAMAAAVQgBAvAiAAQAiAAAAgvQAAgtgiAAQgRAAgJAMg");
	this.shape_202.setTransform(246.1,94.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#6C1F7D").s().p("AgpAzQgSgSAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAOIhZAAQAAAUAKALQAKAKASAAQAMAAAKgCQAKgDAMgEIAAAXQgLAFgKACQgLACgOAAQgeAAgSgTgAgTgnQgIAJgCAQIA9AAQgBgQgIgJQgHgIgOAAQgNAAgIAIg");
	this.shape_203.setTransform(231.2,94.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#6C1F7D").s().p("AguBOQgPgSAAgiQAAggAPgSQAOgTAZAAQAaAAAOAUIABAAIgBgXIAAgxIAcAAIAAC9IgWAAIgFgSIgBAAQgOAUgaAAQgZAAgOgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQASAAAHgKQAJgKAAgWIAAgEQAAgagJgKQgIgKgRAAQgOAAgJAMg");
	this.shape_204.setTransform(215.8,91.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#6C1F7D").s().p("AgOBdIAAiGIAcAAIAACGgAgLhAQgEgFAAgIQAAgHAEgEQAEgFAHAAQAHAAAFAFQAEAEAAAHQAAAIgEAFQgFADgHAAQgHAAgEgDg");
	this.shape_205.setTransform(205,91.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#6C1F7D").s().p("AgOBDIg0iGIAeAAIAbBOQAIAUABAMIAAAAQACgJAHgXIAbhOIAfAAIg0CGg");
	this.shape_206.setTransform(194.8,94.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#6C1F7D").s().p("AgpAzQgSgSAAggQAAggARgTQAQgTAcAAQAbAAAPARQAQAPAAAdIAAAOIhZAAQAAAUAKALQAKAKASAAQAMAAAKgCQAKgDAMgEIAAAXQgLAFgKACQgLACgOAAQgeAAgSgTgAgTgnQgIAJgCAQIA9AAQgBgQgIgJQgHgIgOAAQgNAAgIAIg");
	this.shape_207.setTransform(174.4,94.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#6C1F7D").s().p("AgvBOQgOgSABgiQAAggAOgSQAOgTAaAAQAZAAAOAUIABAAIgCgXIAAgxIAdAAIAAC9IgWAAIgFgSIgCAAQgOAUgZAAQgZAAgPgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQASAAAHgKQAJgKAAgWIAAgEQAAgagJgKQgIgKgRAAQgPAAgIAMg");
	this.shape_208.setTransform(159,91.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgKAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANALAAAYIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAGAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgJAAgPIAAgMg");
	this.shape_209.setTransform(137.4,94.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#6C1F7D").s().p("AgOBdIAAiGIAcAAIAACGgAgLhAQgEgFAAgIQAAgHAEgEQAEgFAHAAQAHAAAFAFQAEAEAAAHQAAAIgEAFQgFADgHAAQgHAAgEgDg");
	this.shape_210.setTransform(127.1,91.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#6C1F7D").s().p("AgpBFIAAiGIAXAAIAEAYIABAAQAHgNAKgHQAKgHANAAQAJAAAFACIgDAaQgFgBgHAAQgRAAgKALQgLALAAASIAABGg");
	this.shape_211.setTransform(119,94.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#6C1F7D").s().p("AgZApIAAhIIgSAAIAAgNIAUgKIAKgdIARAAIAAAeIAmAAIAAAWIgmAAIAABHQgBALAGAFQAFAEAJAAQAKAAAKgDIAAAWIgMADQgHACgJAAQgoAAAAgrg");
	this.shape_212.setTransform(107.8,92.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#6C1F7D").s().p("AgxA+IAAgZQAYALAVAAQAaAAgBgQQAAgFgCgEQgDgDgHgDIgRgJQgYgIgIgJQgJgJAAgOQABgSAOgKQANgJAXAAQAYAAAVAJIgJAWQgVgIgPgBQgWAAAAANQAAAGAGAFQAFAEAUAIQAQAGAIAFQAIAFADAHQAEAIgBAJQABAUgOAKQgPALgaAAQgbAAgRgIg");
	this.shape_213.setTransform(97,94.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#6C1F7D").s().p("AguA4QgNgMAAgZIAAhXIAdAAIAABSQAAAQAGAIQAHAHAOAAQAQAAAJgKQAJgLgBgYIAAhEIAeAAIAACGIgYAAIgDgRIgCAAQgGAJgKAFQgMAGgNAAQgYAAgMgNg");
	this.shape_214.setTransform(82.9,94.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#6C1F7D").s().p("AguBOQgPgSAAgiQAAggAPgSQAOgTAZAAQAaAAAOAUIABAAIgBgXIAAgxIAdAAIAAC9IgXAAIgFgSIgBAAQgOAUgaAAQgZAAgOgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQARAAAIgKQAJgKAAgWIAAgEQAAgagJgKQgIgKgRAAQgOAAgJAMg");
	this.shape_215.setTransform(66.8,91.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQAAgQgGgIQgGgHgOAAQgRAAgJAKQgIALAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAHgJALgFQALgGANAAQAxAAgBAyIAABXg");
	this.shape_216.setTransform(51.5,94.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#6C1F7D").s().p("AgNBdIAAiGIAbAAIAACGgAgLhAQgEgFAAgIQAAgHAEgEQAEgFAHAAQAIAAAEAFQAEAEAAAHQAAAIgEAFQgEADgIAAQgHAAgEgDg");
	this.shape_217.setTransform(40.1,91.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgKAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANALQANALAAAYIAABaIgUAAIgGgTIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTAAgJAHQgJAGAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgJAAgPIAAgMg");
	this.shape_218.setTransform(22.4,94.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#6C1F7D").s().p("Ag0BZIAAixIAeAAIAACYIBKAAIAAAZg");
	this.shape_219.setTransform(9.6,92.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#6C1F7D").s().p("AgMANQgFgFAAgIQAAgIAFgFQAEgFAIABQAJAAAFAEQAEAFAAAIQAAAIgEAFQgFAFgJABQgIgBgEgFg");
	this.shape_220.setTransform(307.8,41.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#6C1F7D").s().p("AgxA+IAAgZQAZALAUAAQAZAAABgQQAAgFgDgDQgEgEgGgEIgSgIQgXgIgIgJQgIgJgBgOQABgSAOgJQAOgKAXAAQAYAAAVAKIgKAVQgVgJgPAAQgWABAAAMQAAAGAGAFQAGAEATAIQAQAGAIAFQAHAFAEAIQADAGAAAKQAAAUgOALQgOAKgaAAQgbAAgRgIg");
	this.shape_221.setTransform(298.4,36.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgLAeAAIAYgBIAAgHQAAgNgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANALAAAYIAABaIgUAAIgGgTIgBAAQgKAMgKAFQgKAEgOAAQgUAAgLgLgAALAEQgTAAgJAGQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgJAAgQIAAgMg");
	this.shape_222.setTransform(284.5,36.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#6C1F7D").s().p("AggBOIgCAAIgFAQIgVAAIAAi9IAcAAIAAAtIAAAPIgBAMIABAAQAOgUAaAAQAZAAAOATQAOASAAAgQAAAhgOATQgOASgaAAQgYAAgPgSgAgYgJQgHAJgBAYIAAACQAAAZAIALQAIALARAAQAPAAAIgMQAIgMAAgXQAAgtggAAQgQAAgIAKg");
	this.shape_223.setTransform(270.3,33.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#6C1F7D").s().p("ABHBFIAAhTQAAgPgGgIQgGgHgMAAQgRAAgIAKQgHALgBAVIAABHIgbAAIAAhTQAAgPgHgIQgFgHgNAAQgQAAgIALQgIAKAAAYIAABEIgdAAIAAiGIAXAAIAEARIACAAQAFgJALgFQALgGANAAQAeAAAKAWIACAAQAFgKAMgGQAKgGAOAAQAZAAAKANQAMAMAAAZIAABXg");
	this.shape_224.setTransform(250.2,36.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#6C1F7D").s().p("AgtA7QgLgKAAgUQAAgVAPgKQAQgLAeAAIAYgBIAAgHQAAgNgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANALAAAYIAABaIgUAAIgGgTIgBAAQgKAMgKAFQgKAEgOAAQgUAAgLgLgAALAEQgTAAgJAGQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgJAAgQIAAgMg");
	this.shape_225.setTransform(230.5,36.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#6C1F7D").s().p("AghA9QgPgIgHgQQgIgQAAgVQAAggARgSQAQgTAeAAQAeAAARATQARATAAAfQAAAhgRASQgRATgeAAQgSAAgPgJgAgagiQgHAMAAAWQgBAuAiAAQAiAAAAguQAAgugiAAQgRABgJALg");
	this.shape_226.setTransform(209.6,36.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#6C1F7D").s().p("AgwA+IAAgZQAYALAUAAQAZAAABgQQAAgFgDgDQgEgEgGgEIgSgIQgXgIgIgJQgIgJAAgOQAAgSAOgJQAOgKAXAAQAYAAAVAKIgKAVQgVgJgPAAQgWABAAAMQAAAGAGAFQAGAEATAIQAQAGAIAFQAHAFAEAIQADAGAAAKQAAAUgOALQgOAKgaAAQgbAAgQgIg");
	this.shape_227.setTransform(189.5,36.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#6C1F7D").s().p("AghA9QgOgIgIgQQgIgQAAgVQAAggARgSQAQgTAfAAQAdAAARATQARATAAAfQAAAhgRASQgRATgeAAQgSAAgPgJgAgZgiQgJAMABAWQAAAuAhAAQAiAAAAguQAAgugiAAQgSABgHALg");
	this.shape_228.setTransform(175.7,36.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#6C1F7D").s().p("AgwA+IAAgZQAXALAVAAQAZAAAAgQQAAgFgDgDQgDgEgGgEIgSgIQgXgIgIgJQgJgJABgOQAAgSANgJQAPgKAWAAQAZAAAUAKIgJAVQgWgJgPAAQgVABAAAMQAAAGAGAFQAFAEATAIQARAGAIAFQAHAFAEAIQAEAGAAAKQAAAUgPALQgOAKgaAAQgbAAgQgIg");
	this.shape_229.setTransform(162.1,36.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#6C1F7D").s().p("AgpAzQgSgSAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQARAAAcIAAAOIhZAAQAAAUAKAKQAKALASAAQAMAAAKgCQAKgCAMgGIAAAYQgLAFgKACQgLACgOAAQgeAAgSgTgAgTgmQgIAIgCARIA9AAQgBgRgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_230.setTransform(148.7,36.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#6C1F7D").s().p("AgpBFIAAiGIAXAAIAEAYIABAAQAHgNAKgHQAKgHANAAQAJAAAFACIgCAaQgHgBgGAAQgRAAgKALQgLALAAASIAABGg");
	this.shape_231.setTransform(136.9,36.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#6C1F7D").s().p("AgyBZQgPgKAAgSQAAgMAIgJQAIgIAOgEQgGgCgDgFQgEgGAAgGQAAgHAEgFQAEgFAJgFQgLgFgGgKQgHgKAAgOQAAgWAOgMQAOgMAaAAIALABIAJACIAvAAIAAAPIgXAFQADAEACAGQACAGAAAHQAAAVgOAMQgPAMgYAAIgMgBQgJAGAAAHQAAAEAEADQAFACALAAIAXAAQAWAAAMAJQALAKAAASQAAAXgTAMQgTANgiAAQgcAAgOgKgAggAsQgHAGAAAKQAAAJAIAFQAIAFAQAAQAWAAALgHQAMgGAAgMQAAgIgGgEQgHgEgRAAIgUAAQgNAAgHAGgAgVhIQgGAHAAANQAAANAHAHQAGAHAMAAQAYAAAAgbQAAgNgGgHQgGgHgMAAQgMAAgHAHg");
	this.shape_232.setTransform(123.7,39.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQABgQgHgIQgGgHgOAAQgRAAgIAKQgJALAAAYIAABEIgdAAIAAiGIAXAAIAEARIACAAQAFgJAMgFQALgGAMAAQAyAAAAAyIAABXg");
	this.shape_233.setTransform(109,36.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#6C1F7D").s().p("AgOBeIAAiGIAcAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHgBQAHABAFAEQAEAEAAAIQAAAHgEAEQgFAEgHABQgHgBgEgEg");
	this.shape_234.setTransform(97.5,33.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#6C1F7D").s().p("AgVAeQAJgfAFgcIAbAAIACADQgHAWgPAig");
	this.shape_235.setTransform(83.7,43.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#6C1F7D").s().p("AghA9QgPgIgHgQQgIgQAAgVQAAggARgSQARgTAeAAQAdAAAQATQASATAAAfQAAAhgRASQgRATgeAAQgTAAgOgJgAgZgiQgJAMABAWQAAAuAhAAQAiAAAAguQAAgugiAAQgSABgHALg");
	this.shape_236.setTransform(73.2,36.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#6C1F7D").s().p("AgjA0QgQgSAAgiQABggAQgSQARgTAfAAQAVAAARAIIgJAXQgSgHgMAAQgiAAAAAtQAAAXAJALQAIAMARAAQASAAASgKIAAAZQgIAFgJACQgIACgNAAQgdAAgRgSg");
	this.shape_237.setTransform(59.6,36.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#6C1F7D").s().p("AgOBeIAAiGIAcAAIAACGgAgLhBQgEgEAAgHQAAgIAEgEQAEgEAHgBQAHABAFAEQAEAEAAAIQAAAHgEAEQgFAEgHABQgHgBgEgEg");
	this.shape_238.setTransform(49.7,33.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#6C1F7D").s().p("AgaBgIAAhxIgWAAIAAgNIAWgJIAAgJQAAgXALgMQAMgMAWAAQAPAAAPAFIgIAWQgLgDgJAAQgKAAgEAGQgFAGAAAMIAAAJIAhAAIAAAVIghAAIAABxg");
	this.shape_239.setTransform(42.5,33.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#6C1F7D").s().p("AgtBWQgLgKAAgUQAAgVAPgKQAQgMAeAAIAYgBIAAgHQAAgMgGgGQgGgHgNAAQgJAAgKADQgJADgJAEIgJgUQALgGANgDQANgDAKAAQAaAAANAMQANALAAAXIAABbIgUAAIgGgTIgBAAQgKAMgKAFQgKAEgOAAQgUAAgLgLgAALAfQgTAAgJAGQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgIQAKgJAAgQIAAgMgAgOg4IAAgDIAOgTIALgSIAiAAIAAADIgTATIgWASg");
	this.shape_240.setTransform(29.5,33.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#6C1F7D").s().p("AgpBFIAAiGIAXAAIAEAYIABAAQAHgNAKgHQALgHAMAAQAIAAAHACIgEAaQgFgBgHAAQgRAAgKALQgLALAAASIAABGg");
	this.shape_241.setTransform(18.1,36.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#6C1F7D").s().p("AgYApIAAhIIgSAAIAAgNIATgKIAKgdIAQAAIAAAeIAnAAIAAAWIgnAAIAABHQABALAFAFQAFAEAIAAQALAAAKgDIAAAWIgMADQgHACgJAAQgoAAABgrg");
	this.shape_242.setTransform(6.9,34.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#6C1F7D").s().p("AgoBFIAAiGIAWAAIAEAYIABAAQAHgNAKgHQALgHAMAAQAIAAAHACIgDAaQgHgBgGAAQgSAAgJALQgLALAAASIAABGg");
	this.shape_243.setTransform(837.8,7.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAYIAABbIgUAAIgGgUIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgIAAgQIAAgMg");
	this.shape_244.setTransform(823.9,7.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#6C1F7D").s().p("AgoBFIAAiGIAWAAIAEAYIABAAQAHgNAKgHQALgHAMAAQAIAAAHACIgDAaQgHgBgGAAQgSAAgJALQgLALAAASIAABGg");
	this.shape_245.setTransform(812.5,7.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_246.setTransform(799.1,7.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#6C1F7D").s().p("AAfBFIAAhSQAAgQgHgIQgGgHgOAAQgRAAgIAKQgJALAAAYIAABEIgcAAIAAiGIAWAAIAEARIACAAQAFgJAMgFQALgGAMAAQAyAAAAAyIAABXg");
	this.shape_247.setTransform(784.1,7.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_248.setTransform(768.9,7.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#6C1F7D").s().p("AgyBZQgPgKAAgSQAAgMAIgJQAIgIAOgEQgGgCgDgFQgEgGAAgGQAAgHAEgFQAEgFAJgFQgLgFgGgKQgHgKAAgOQAAgWAOgMQAOgMAaAAIALABIAJACIAvAAIAAAPIgXAFQADAEACAGQACAGAAAHQAAAVgOAMQgPAMgYAAIgMgBQgJAGAAAHQAAAEAEADQAFACALAAIAXAAQAWAAAMAJQALAKAAASQAAAXgTAMQgTANgiAAQgcAAgOgKgAggAsQgHAGAAAKQAAAJAIAFQAIAFAQAAQAWAAALgHQAMgGAAgMQAAgIgGgEQgHgEgRAAIgUAAQgNAAgHAGgAgVhIQgGAHAAANQAAANAHAHQAGAHAMAAQAYAAAAgbQAAgNgGgHQgGgHgMAAQgMAAgHAHg");
	this.shape_249.setTransform(754.6,10.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAYIAABbIgUAAIgGgUIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgIAAgQIAAgMg");
	this.shape_250.setTransform(733.6,7.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#6C1F7D").s().p("AgoBFIAAiGIAWAAIAEAYIABAAQAHgNAKgHQAKgHANAAQAJAAAFACIgCAaQgHgBgGAAQgSAAgJALQgLALAAASIAABGg");
	this.shape_251.setTransform(722.2,7.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAYIAABbIgUAAIgGgUIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgIAAgQIAAgMg");
	this.shape_252.setTransform(708.3,7.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#6C1F7D").s().p("Ag8BjIAAjCIAXAAIAEASIABAAQAOgVAaAAQAZAAAOATQAOASAAAhQAAAggOATQgOASgaAAQgYAAgPgSIgBAAIABAVIAAA3gAgYhAQgIAKAAAWIAAAEQAAAZAIAKQAIALARAAQAPAAAIgMQAIgMAAgWQAAgXgIgMQgIgLgQAAQgQAAgIAKg");
	this.shape_253.setTransform(694,10.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAYIAABbIgUAAIgGgUIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgIAAgQIAAgMg");
	this.shape_254.setTransform(671.7,7.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#6C1F7D").s().p("AgZApIAAhIIgSAAIAAgNIAUgKIAKgdIARAAIAAAeIAmAAIAAAWIgmAAIAABHQgBALAGAFQAFAEAJAAQAKAAALgDIAAAWIgNADQgIACgHAAQgpAAAAgrg");
	this.shape_255.setTransform(659.9,5.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQABgQgHgIQgGgHgOAAQgRAAgIAKQgJALAAAYIAABEIgdAAIAAiGIAXAAIAEARIACAAQAFgJAMgFQALgGAMAAQAyAAAAAyIAABXg");
	this.shape_256.setTransform(647.2,7.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_257.setTransform(632,7.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#6C1F7D").s().p("AgOBeIAAiGIAcAAIAACGgAgLhAQgEgFAAgHQAAgIAEgEQAEgFAHABQAHgBAFAFQAEAEAAAIQAAAHgEAFQgFADgHAAQgHAAgEgDg");
	this.shape_258.setTransform(621.3,4.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#6C1F7D").s().p("ABHBFIAAhTQAAgPgGgIQgGgHgMAAQgRAAgIAKQgIALAAAVIAABHIgcAAIAAhTQABgPgHgIQgFgHgNAAQgQAAgIALQgIAKAAAYIAABEIgcAAIAAiGIAWAAIAEARIACAAQAFgJALgFQAKgGANAAQAfAAAKAWIABAAQAGgKAMgGQAKgGAOAAQAZAAALANQAKAMABAZIAABXg");
	this.shape_259.setTransform(605.9,7.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAYIAABbIgUAAIgGgUIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgIAAgQIAAgMg");
	this.shape_260.setTransform(586.2,7.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#6C1F7D").s().p("AgoBFIAAiGIAWAAIAEAYIABAAQAHgNAKgHQALgHAMAAQAIAAAHACIgEAaQgGgBgGAAQgSAAgJALQgLALAAASIAABGg");
	this.shape_261.setTransform(574.8,7.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#6C1F7D").s().p("AgoBFIAAiGIAWAAIAEAYIABAAQAHgNAKgHQALgHAMAAQAIAAAHACIgEAaQgGgBgGAAQgSAAgJALQgLALAAASIAABGg");
	this.shape_262.setTransform(564,7.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_263.setTransform(550.6,7.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#6C1F7D").s().p("AAeBfIAAhTQABgOgHgJQgGgHgOAAQgRAAgIALQgJAJAAAaIAABDIgdAAIAAi9IAdAAIAAAwIgCAZIADAAQAFgKALgFQALgGAMABQAxgBABAxIAABYg");
	this.shape_264.setTransform(535.6,4.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_265.setTransform(513.9,7.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#6C1F7D").s().p("AgYApIAAhIIgSAAIAAgNIATgKIAKgdIARAAIAAAeIAmAAIAAAWIgmAAIAABHQgBALAGAFQAFAEAJAAQAKAAAKgDIAAAWIgMADQgHACgJAAQgnAAAAgrg");
	this.shape_266.setTransform(501.7,5.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#6C1F7D").s().p("AAfBFIAAhSQAAgQgHgIQgGgHgOAAQgRAAgIAKQgJALAAAYIAABEIgcAAIAAiGIAWAAIAEARIACAAQAFgJAMgFQALgGAMAAQAyAAAAAyIAABXg");
	this.shape_267.setTransform(489,7.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_268.setTransform(473.8,7.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#6C1F7D").s().p("AgNBfIAAi9IAbAAIAAC9g");
	this.shape_269.setTransform(463.1,4.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_270.setTransform(452.4,7.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#6C1F7D").s().p("AgiA0QgRgSABgiQAAggAQgTQARgSAeAAQAWAAAQAIIgIAXQgSgHgMAAQgiAAAAAtQAAAXAJAMQAIALARAAQASAAASgKIAAAaQgIAEgJACQgJACgMAAQgdAAgQgSg");
	this.shape_271.setTransform(439.2,7.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#6C1F7D").s().p("AAhBEIghgzIggAzIghAAIAwhEIguhCIAhAAIAeAvIAfgvIAgAAIgtBCIAwBEg");
	this.shape_272.setTransform(425.9,7.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_273.setTransform(411.9,7.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAYIAABbIgUAAIgGgUIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgIAAgQIAAgMg");
	this.shape_274.setTransform(390.5,7.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQABgQgHgIQgGgHgOAAQgRAAgIAKQgJALAAAYIAABEIgdAAIAAiGIAXAAIAEARIACAAQAFgJAMgFQALgGAMAAQAyAAAAAyIAABXg");
	this.shape_275.setTransform(375.8,7.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#6C1F7D").s().p("AguA4QgMgMgBgZIAAhXIAdAAIAABSQAAAQAGAIQAHAHANAAQASAAAIgKQAIgLAAgYIAAhEIAdAAIAACGIgWAAIgFgRIgBAAQgGAJgLAFQgLAGgNAAQgZAAgLgNg");
	this.shape_276.setTransform(359.9,7.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#6C1F7D").s().p("AgwA+IAAgZQAXALAVAAQAaAAAAgQQgBgFgDgDQgDgEgGgDIgSgJQgXgIgIgJQgJgJABgPQAAgRANgKQAPgJAWAAQAZAAAUAJIgJAXQgWgKgPABQgVAAAAAMQAAAHAGAEQAFAFATAHQARAHAIAEQAIAFADAHQAEAIAAAJQAAAUgPALQgOAKgaAAQgbAAgQgIg");
	this.shape_277.setTransform(339.5,7.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_278.setTransform(326.1,7.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#6C1F7D").s().p("AggBOIgCAAIgFAQIgVAAIAAi9IAcAAIAAAtIAAAPIgBAMIABAAQAOgUAaAAQAZAAAOATQAOASAAAgQAAAhgOATQgOASgaAAQgYAAgPgSgAgYgJQgHAJgBAYIAAACQAAAZAIALQAIALARAAQAPAAAIgMQAIgMAAgXQAAgtggAAQgQAAgIAKg");
	this.shape_279.setTransform(305,4.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_280.setTransform(289.6,7.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#6C1F7D").s().p("AAdBEIgRg/QgEgJgHglIgBAAIgLAuIgSA/IggAAIgliGIAcAAIASBCQAGAXADATIAAAAIAEgVIAEgSIAUhFIAfAAIAUBFIAEATQAEAMAAAHIABAAQABgPAIgaIARhCIAcAAIglCGg");
	this.shape_281.setTransform(272.2,7.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#6C1F7D").s().p("AghA+QgOgJgIgQQgIgQAAgVQAAggARgTQAQgSAeAAQAeAAAQATQASATAAAfQAAAhgRATQgRASgeAAQgTAAgOgIgAgagiQgIAMAAAWQABAuAhAAQAiAAAAguQAAgugiABQgRgBgJAMg");
	this.shape_282.setTransform(247.9,7.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#6C1F7D").s().p("Ag8BjIAAjCIAXAAIAEASIABAAQAOgVAaAAQAZAAAOATQAOASAAAhQAAAggOATQgOASgaAAQgYAAgPgSIgBAAIABAVIAAA3gAgYhAQgIAKAAAWIAAAEQAAAZAIAKQAIALARAAQAPAAAIgMQAIgMAAgWQAAgXgIgMQgIgLgQAAQgQAAgIAKg");
	this.shape_283.setTransform(226.3,10.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#6C1F7D").s().p("Ag8BjIAAjCIAXAAIAEASIABAAQAOgVAaAAQAZAAAOATQAOASAAAhQAAAggOATQgOASgaAAQgYAAgPgSIgBAAIABAVIAAA3gAgYhAQgIAKAAAWIAAAEQAAAZAIAKQAIALARAAQAPAAAIgMQAIgMAAgWQAAgXgIgMQgIgLgQAAQgQAAgIAKg");
	this.shape_284.setTransform(210.7,10.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#6C1F7D").s().p("AgtA7QgLgLAAgTQAAgVAPgJQAQgLAegCIAYAAIAAgHQAAgNgGgHQgGgGgNAAQgJAAgKADQgJADgJAFIgJgVQALgGANgDQANgDAKAAQAaAAANAMQANAKAAAYIAABbIgUAAIgGgUIgBAAQgKANgKAEQgKAFgOAAQgUAAgLgLgAALAEQgTABgJAFQgJAHAAAMQAAAJAFAFQAFAFALAAQAPAAAJgJQAKgIAAgQIAAgMg");
	this.shape_285.setTransform(194.9,7.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#6C1F7D").s().p("AgVAeQAJgfAFgdIAbAAIACAEQgHAWgPAig");
	this.shape_286.setTransform(177.8,14.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#6C1F7D").s().p("AghA+QgPgJgHgQQgIgQAAgVQAAggARgTQARgSAeAAQAdAAAQATQASATAAAfQAAAhgRATQgRASgeAAQgTAAgOgIgAgZgiQgJAMABAWQAAAuAhAAQAiAAAAguQAAgugiABQgSgBgHAMg");
	this.shape_287.setTransform(167.3,7.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#6C1F7D").s().p("AgyBZQgPgKAAgSQAAgMAIgJQAIgIAOgEQgGgCgDgFQgEgGAAgGQAAgHAEgFQAEgFAJgFQgLgFgGgKQgHgKAAgOQAAgWAOgMQAOgMAaAAIALABIAJACIAvAAIAAAPIgXAFQADAEACAGQACAGAAAHQAAAVgOAMQgPAMgYAAIgMgBQgJAGAAAHQAAAEAEADQAFACALAAIAXAAQAWAAAMAJQALAKAAASQAAAXgTAMQgTANgiAAQgcAAgOgKgAggAsQgHAGAAAKQAAAJAIAFQAIAFAQAAQAWAAALgHQAMgGAAgMQAAgIgGgEQgHgEgRAAIgUAAQgNAAgHAGgAgVhIQgGAHAAANQAAANAHAHQAGAHAMAAQAYAAAAgbQAAgNgGgHQgGgHgMAAQgMAAgHAHg");
	this.shape_288.setTransform(152.6,10.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_289.setTransform(138.5,7.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#6C1F7D").s().p("AguA4QgNgMAAgZIAAhXIAdAAIAABSQAAAQAGAIQAHAHAOAAQAQAAAJgKQAJgLgBgYIAAhEIAeAAIAACGIgYAAIgDgRIgCAAQgGAJgKAFQgMAGgNAAQgYAAgMgNg");
	this.shape_290.setTransform(123.4,7.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#6C1F7D").s().p("AggB5IAAgXQAJACAIAAQARAAAAgVIAAiVIAdAAIAACXQAAAVgLALQgKAKgUAAQgNAAgJgCgAAFheQgEgFAAgHQAAgIAEgEQAEgFAIABQAHgBAFAFQAEAEAAAIQAAAHgEAFQgFADgHAAQgIAAgEgDg");
	this.shape_291.setTransform(110.3,7.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#6C1F7D").s().p("AghA+QgPgJgHgQQgIgQAAgVQAAggARgTQAQgSAfAAQAdAAARATQARATAAAfQAAAhgRATQgRASgeAAQgTAAgOgIgAgZgiQgJAMABAWQAAAuAhAAQAiAAAAguQAAgugiABQgSgBgHAMg");
	this.shape_292.setTransform(100.9,7.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#6C1F7D").s().p("AgpA0QgSgTAAggQAAggARgTQAQgTAcAAQAbAAAPAQQAQAQAAAdIAAAPIhZAAQAAATAKAKQAKALASAAQAMAAAKgCQAKgDAMgFIAAAYQgLAFgKACQgLACgOAAQgeAAgSgSgAgTgmQgIAIgCAQIA9AAQgBgQgIgIQgHgJgOAAQgNAAgIAJg");
	this.shape_293.setTransform(86.1,7.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#6C1F7D").s().p("AgvBOQgNgSAAgiQAAggAOgSQAOgTAaAAQAZAAAOAUIABAAIgCgXIAAgxIAdAAIAAC9IgWAAIgFgSIgCAAQgOAUgZAAQgZAAgPgSgAgXgHQgIALAAAXQAAAWAIAMQAIAMAPAAQASAAAHgKQAJgKAAgWIAAgEQAAgagJgKQgIgKgRAAQgPAAgIAMg");
	this.shape_294.setTransform(70.7,4.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#6C1F7D").s().p("AgOBeIAAiGIAcAAIAACGgAgLhAQgEgFAAgHQAAgIAEgEQAEgFAHABQAHgBAFAFQAEAEAAAIQAAAHgEAFQgFADgHAAQgHAAgEgDg");
	this.shape_295.setTransform(59.8,4.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#6C1F7D").s().p("AgOBEIg0iGIAfAAIAbBNQAHAUABAMIABAAQABgJAHgXIAchNIAeAAIg0CGg");
	this.shape_296.setTransform(49.6,7.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#6C1F7D").s().p("AAeBFIAAhSQAAgQgGgIQgGgHgOAAQgRAAgJAKQgIALAAAYIAABEIgdAAIAAiGIAXAAIAEARIABAAQAHgJALgFQALgGANAAQAxAAgBAyIAABXg");
	this.shape_297.setTransform(28.6,7.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#6C1F7D").s().p("AgzBJQgTgRAAgfIAAhzIAeAAIAABxQAAAVAKALQAKALAUAAQAqgBAAgrIAAhwIAdAAIAABzQAAAUgJAPQgIAPgQAHQgQAIgWAAQghAAgSgRg");
	this.shape_298.setTransform(11.3,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol208, new cjs.Rectangle(0,-14.7,884.1,241), null);


(lib.Symbol207 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0099").s().p("AhHBkIAAgrQAWAKAQAEQAPAEANAAQAPAAAIgGQAIgGAAgLQAAgHgDgFQgEgFgHgFIgcgPQgUgJgKgIQgKgJgGgMQgGgLAAgQQAAgdAUgRQATgRAiAAQASAAAPAEQAQAEARAIIgPAkQgSgHgLgDQgMgDgLAAQgMAAgHAHQgIAGAAAKQAAAGADAFQADAEAHAFQAGAEAWALQAfAPAMAOQALAPAAAVQAAAegVASQgWARglAAQgkAAgbgOg");
	this.shape.setTransform(351.2,317.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0099").s().p("AhNBVQgbgeAAg3QAAg3AbgdQAbgdAyAAQAzAAAcAdQAaAeAAA2QAAA3gbAeQgbAdgzAAQgyAAgbgdgAgpg3QgOATAAAkQAAAlAOATQAOATAbAAQA4AAAAhLQAAhKg4AAQgbAAgOATg");
	this.shape_1.setTransform(330.3,317.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0099").s().p("AgWBvIAAi1Ig9AAIAAgoICnAAIAAAoIg9AAIAAC1g");
	this.shape_2.setTransform(309,317.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0099").s().p("Ag6BVQgZgeAAg3QAAghAMgaQANgaAYgOQAXgOAfAAQAgAAAgAQIgPAmIgZgKQgMgFgMAAQgaAAgOAUQgPAUAAAjQAABKA3AAQAXAAAhgMIAAAnQgbAMgiAAQgvAAgagdg");
	this.shape_3.setTransform(290.5,317.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0099").s().p("Ag/BvIAAjdIB/AAIAAAnIhQAAIAAAwIBKAAIAAAmIhKAAIAAA5IBQAAIAAAng");
	this.shape_4.setTransform(272.1,317.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0099").s().p("AgWBvIAAhVIhKiIIAzAAIAtBcIAuhcIAzAAIhKCHIAABWg");
	this.shape_5.setTransform(253.2,317.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0099").s().p("AhNBVQgbgeAAg3QAAg3AbgdQAbgdAyAAQAzAAAcAdQAaAeAAA2QAAA3gbAeQgbAdgzAAQgyAAgbgdgAgpg3QgOATAAAkQAAAlAOATQAOATAbAAQA4AAAAhLQAAhKg4AAQgbAAgOATg");
	this.shape_6.setTransform(231.2,317.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0099").s().p("AAkBvIgzhVIgZAAIAABVIgvAAIAAjdIBAAAQAsAAAWARQAVAQAAAiQAAATgKAQQgLAOgUAIIBBBhgAgogLIAPAAQAWAAAKgIQAKgHAAgQQAAgQgLgGQgKgHgWAAIgOAAg");
	this.shape_7.setTransform(210.1,317.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0099").s().p("AhLBvIAAjdIBGAAQAoAAAVASQAUARAAAiQAAAkgWASQgWATgoAAIgUAAIAABPgAgcgFIAPAAQAVAAAKgJQALgJAAgQQAAgQgJgIQgJgIgSAAIgVAAg");
	this.shape_8.setTransform(189.4,317.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0099").s().p("AhHBkIAAgrQAWAKAQAEQAPAEANAAQAPAAAIgGQAIgGAAgLQAAgHgDgFQgEgFgHgFIgcgPQgUgJgKgIQgKgJgGgMQgGgLAAgQQAAgdAUgRQATgRAiAAQASAAAPAEQAQAEARAIIgPAkQgSgHgLgDQgMgDgLAAQgMAAgHAHQgIAGAAAKQAAAGADAFQADAEAHAFQAGAEAWALQAfAPAMAOQALAPAAAVQAAAegVASQgWARglAAQgkAAgbgOg");
	this.shape_9.setTransform(162.5,317.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC0099").s().p("AhNBVQgbgeAAg3QAAg3AbgdQAbgdAyAAQAzAAAcAdQAaAeAAA2QAAA3gbAeQgbAdgzAAQgyAAgbgdgAgpg3QgOATAAAkQAAAlAOATQAOATAbAAQA4AAAAhLQAAhKg4AAQgbAAgOATg");
	this.shape_10.setTransform(141.6,317.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0099").s().p("AAnBvIhginIgBAAQADAtAAASIAABoIgqAAIAAjdIA7AAIBfClIABAAIgCg8IAAhpIAqAAIAADdg");
	this.shape_11.setTransform(116.7,317.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0099").s().p("AhCBaQgYgVAAgmIAAiOIAvAAIAACGQAAAaAKAMQAKAMAXAAQAXAAALgMQAKgMAAgaIAAiGIAvAAIAACOQAAAZgLASQgLATgVAJQgVAKgbAAQgrAAgXgWg");
	this.shape_12.setTransform(92.3,317.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0099").s().p("Ag/BUQgbgdAAg3QAAg1AfgeQAfgeA1AAQAiAAAgAOIgQAlQgYgMgaAAQgeAAgSAVQgSAUAAAiQAAAkAOATQAPATAbAAQAPAAAPgDIAAguIgqAAIAAgnIBYAAIAAByQgVAHgTADQgTADgUAAQgxAAgageg");
	this.shape_13.setTransform(69,317.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0099").s().p("AhDBvIAAjdIAvAAIAAC2IBYAAIAAAng");
	this.shape_14.setTransform(50.3,317.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0099").s().p("AA5BvIgQg0IhQAAIgRA0IgyAAIBOjdIA4AAIBPDdgAgcATIA5AAIgZhQIgEgPQgEATgYBMg");
	this.shape_15.setTransform(30,317.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6C1F7D").s().p("AhuB4QgngqAAhOQABhOAngpQAmgqBIAAQBIAAAmAqQAmAqAABNQABBOgnAqQgmAqhJAAQhHAAgngqgAg7hPQgTAbgBA0QABA0ATAbQAVAbAmAAQBQAAAAhqQAAhphPAAQgnAAgVAag");
	this.shape_16.setTransform(554.3,33.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6C1F7D").s().p("AgkCdIhqk5IBDAAIA8C6IAKAnQAFAVAAAJQACgUAOgxIA8i6IBDAAIhrE5g");
	this.shape_17.setTransform(522.5,33.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6C1F7D").s().p("AggCdIAAk5IBBAAIAAE5g");
	this.shape_18.setTransform(500.9,33.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6C1F7D").s().p("AggCdIAAkBIhWAAIAAg4IDsAAIAAA4IhVAAIAAEBg");
	this.shape_19.setTransform(480.9,33.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6C1F7D").s().p("AhSB4QglgqAAhOQAAgwASgkQASgmAhgTQAigUAsAAQAtAAAvAXIgWA2QgRgIgSgHQgSgGgRAAQglAAgVAcQgUAcAAAyQAABpBOAAQAhAAAvgRIAAA4QgnARgwAAQhDAAgkgqg");
	this.shape_20.setTransform(454.6,33.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6C1F7D").s().p("ABQCeIgXhLIhxAAIgXBLIhIAAIBvk7IBRAAIBvE7gAgnAbIBQAAIgjhyIgGgVQgGAcghBrg");
	this.shape_21.setTransform(424.9,33.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6C1F7D").s().p("AAzCdIhJh5IgkAAIAAB5IhDAAIAAk5IBcAAQA/AAAfAXQAeAXAAAwQAAAcgOAWQgQAUgcAMIBcCJgAg6gRIAVAAQAgAAAOgKQAQgKAAgYQAAgVgQgKQgPgJggAAIgUAAg");
	this.shape_22.setTransform(397.2,33.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6C1F7D").s().p("AhaCdIAAk5IC1AAIAAA3IhyAAIAABEIBqAAIAAA2IhqAAIAABRIByAAIAAA3g");
	this.shape_23.setTransform(369,33.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6C1F7D").s().p("AggCdIAAkBIhWAAIAAg4IDtAAIAAA4IhWAAIAAEBg");
	this.shape_24.setTransform(343.3,33.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6C1F7D").s().p("AA3CdIiIjtIgCAAQAEBAAAAZIAACUIg7AAIAAk5IBUAAICHDqIACAAQgEg9AAgZIAAiUIA8AAIAAE5g");
	this.shape_25.setTransform(312.6,33.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6C1F7D").s().p("AggCdIAAk5IBBAAIAAE5g");
	this.shape_26.setTransform(287.5,33.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6C1F7D").s().p("AhuB4QgngqAAhOQABhOAmgpQAngqBIAAQBIAAAmAqQAmAqAABNQAABOgmAqQgmAqhJAAQhHAAgngqgAg7hPQgTAbAAA0QAAA0ATAbQAVAbAmAAQBQAAAAhqQAAhphPAAQgnAAgVAag");
	this.shape_27.setTransform(251.3,33.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6C1F7D").s().p("AiBCdIAAk5IBiAAQBMAAArAoQAqApAABJQAABMgsAqQgsAphSAAgAg/BmIAdAAQBfAAAAhmQAAhmhYABIgkAAg");
	this.shape_28.setTransform(218.2,33.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6C1F7D").s().p("AggCdIAAk5IBBAAIAAE5g");
	this.shape_29.setTransform(194,33.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6C1F7D").s().p("AA3CdIiIjtIgCAAQAEBAAAAZIAACUIg7AAIAAk5IBUAAICHDqIACAAQgEg9AAgZIAAiUIA8AAIAAE5g");
	this.shape_30.setTransform(168.8,33.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C1F7D").s().p("AhaCdIAAk5IC0AAIAAA3IhxAAIAABEIBpAAIAAA2IhpAAIAABRIBxAAIAAA3g");
	this.shape_31.setTransform(139.3,33.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6C1F7D").s().p("AghCdIAAkBIhVAAIAAg4IDsAAIAAA4IhVAAIAAEBg");
	this.shape_32.setTransform(113.6,33.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6C1F7D").s().p("AA3CdIiIjtIgCAAQAEBAAAAZIAACUIg7AAIAAk5IBUAAICHDqIACAAQgEg9AAgZIAAiUIA8AAIAAE5g");
	this.shape_33.setTransform(82.9,33.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6C1F7D").s().p("AhuB4QgngqAAhOQABhOAngpQAmgqBIAAQBIAAAmAqQAmAqAABNQABBOgnAqQgmAqhJAAQhHAAgngqgAg7hPQgTAbgBA0QABA0ATAbQAVAbAmAAQBQAAAAhqQAAhphPAAQgnAAgVAag");
	this.shape_34.setTransform(47.6,33.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6C1F7D").s().p("AhSB4QglgqAAhOQAAgwASgkQASgmAhgTQAigUAsAAQAtAAAvAXIgWA2QgRgIgSgHQgSgGgRAAQglAAgVAcQgUAcAAAyQAABpBOAAQAhAAAvgRIAAA4QgnARgwAAQhDAAgkgqg");
	this.shape_35.setTransform(16.5,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol207, new cjs.Rectangle(0,0,901.3,339.5), null);


(lib.Symbol206 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0099").s().p("AhMBrIAAguQAYAKARAFQAQAEAOAAQAPAAAJgHQAJgFAAgNQAAgHgEgFQgEgGgHgEQgIgFgWgMQgVgKgLgIQgLgJgGgNQgHgNAAgQQAAgfAVgSQAWgSAkAAQASAAARAEQARAFASAIIgQAmQgTgIgMgCQgNgDgMgBQgNAAgHAHQgIAHAAAKQAAAHADAFQADAFAHAEQAGAFAYAMQAhAQANAPQAMAPAAAXQAAAggXATQgXASgoAAQgmAAgdgOg");
	this.shape.setTransform(422.1,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0099").s().p("AhSBaQgdgfAAg7QAAg6AdgfQAdgfA1AAQA3AAAdAfQAcAfAAA6QAAA7gdAfQgdAfg2AAQg1AAgdgfgAgsg6QgPAUAAAmQAAAoAPAUQAPAUAdAAQA8AAAAhQQAAhOg8AAQgcAAgQAUg");
	this.shape_1.setTransform(399.8,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0099").s().p("AgzCVIAAgqQANADALAAQAQABAHgLQAGgKAAgWIAAjcIAyAAIAADcQAAApgTAWQgTAVgjAAQgSAAgMgDg");
	this.shape_2.setTransform(378.5,29);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0099").s().p("AA8B2IgRg4IhVAAIgRA4Ig2AAIBTjrIA8AAIBUDrgAgdAUIA8AAIgahVIgFgQIgdBlg");
	this.shape_3.setTransform(364.4,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0099").s().p("AhWB2IAAjrIBJAAQAxAAAXAPQAWAOABAfQgBAVgJANQgLAOgQADIAAABQAWAFAKANQAKAOAAAWQAAAhgXASQgYASgnAAgAglBNIAhAAQAUAAAJgIQALgIAAgRQAAgdgpAAIggAAgAglgYIAeAAQATAAAJgGQAJgGAAgPQAAgNgJgGQgLgGgUAAIgbAAg");
	this.shape_4.setTransform(342.6,25.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0099").s().p("AA8B2IgRg4IhVAAIgRA4Ig2AAIBTjrIA8AAIBUDrgAgdAUIA8AAIgahVIgFgQIgdBlg");
	this.shape_5.setTransform(319.5,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0099").s().p("AAnB2Ig4hbIgaAAIAABbIgyAAIAAjrIBFAAQAvAAAXASQAXARAAAkQAAAVgMAQQgLAPgVAJIBFBngAgrgMIAQAAQAYAAAKgIQALgIAAgRQAAgRgLgHQgLgHgYAAIgPAAg");
	this.shape_6.setTransform(298.7,25.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0099").s().p("AgYB2IAAjBIhAAAIAAgqICxAAIAAAqIhAAAIAADBg");
	this.shape_7.setTransform(276.8,25.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0099").s().p("AhMBrIAAguQAYAKARAFQAQAEAOAAQAPAAAJgHQAJgFAAgNQAAgHgEgFQgEgGgHgEQgIgFgWgMQgVgKgLgIQgLgJgGgNQgHgNAAgQQAAgfAVgSQAWgSAkAAQASAAARAEQARAFASAIIgQAmQgTgIgMgCQgNgDgMgBQgNAAgHAHQgIAHAAAKQAAAHADAFQADAFAHAEQAGAFAYAMQAhAQANAPQAMAPAAAXQAAAggXATQgXASgoAAQgmAAgdgOg");
	this.shape_8.setTransform(249.6,25.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0099").s().p("AhSBaQgdgfAAg7QAAg6AdgfQAdgfA1AAQA3AAAdAfQAcAfAAA6QAAA7gdAfQgdAfg2AAQg1AAgdgfgAgsg6QgPAUAAAmQAAAoAPAUQAPAUAdAAQA8AAAAhQQAAhOg8AAQgcAAgQAUg");
	this.shape_9.setTransform(227.3,25.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0099").s().p("AApB2IhmixIgBAAQADAvAAATIAABvIgtAAIAAjrIA/AAIBmCwIABAAIgChAIAAhwIAtAAIAADrg");
	this.shape_10.setTransform(200.8,25.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0099").s().p("AhHBgQgZgXAAgpIAAiWIAyAAIAACPQAAAbALANQALANAYAAQAZAAALgNQALgNAAgbIAAiPIAyAAIAACXQAAAagMAUQgMAUgWAKQgWAKgdAAQgtAAgagXg");
	this.shape_11.setTransform(174.9,25.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0099").s().p("AhDBaQgdggAAg6QAAg4AhggQAhggA5AAQAkAAAhAOIgQApQgagOgcAAQgfAAgUAXQgTAVAAAkQAAAmAQAVQAPATAdAAQAQAAAQgCIAAgyIgtAAIAAgoIBeAAIAAB5QgXAHgUADQgUADgVAAQg0AAgcgfg");
	this.shape_12.setTransform(150.1,25.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0099").s().p("AhIB2IAAjrIAyAAIAADCIBfAAIAAApg");
	this.shape_13.setTransform(130.1,25.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0099").s().p("AA8B2IgRg4IhVAAIgRA4Ig2AAIBTjrIA8AAIBUDrgAgdAUIA8AAIgahVIgFgQIgdBlg");
	this.shape_14.setTransform(108.5,25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0099").s().p("AA8B2IgRg4IhVAAIgRA4Ig2AAIBTjrIA8AAIBUDrgAgdAUIA8AAIgahVIgFgQIgdBlg");
	this.shape_15.setTransform(77.2,25.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0099").s().p("AAnB2Ig4hbIgaAAIAABbIgyAAIAAjrIBFAAQAvAAAXASQAXARAAAkQAAAVgMAQQgLAPgVAJIBFBngAgrgMIAQAAQAYAAAKgIQALgIAAgRQAAgRgLgHQgLgHgYAAIgPAAg");
	this.shape_16.setTransform(56.4,25.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0099").s().p("AgYB2IAAjrIAxAAIAADrg");
	this.shape_17.setTransform(38.6,25.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0099").s().p("ABPB2IAAhwIABgRIACg3IgCAAIg8C4IgtAAIg5i4IgCAAQAEA4AAASIAABuIgtAAIAAjrIBEAAIA4CzIABAAIA6izIBEAAIAADrg");
	this.shape_18.setTransform(17.6,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol206, new cjs.Rectangle(0,0,451,48.9), null);


(lib.Symbol205 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C1F7D").s().p("AgNAPQgFgGgBgJQABgJAFgFQAEgFAJAAQAKAAAEAFQAGAGAAAIQAAAJgGAGQgEAFgKAAQgJAAgEgFg");
	this.shape.setTransform(181.5,171.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C1F7D").s().p("AgtA4QgSgUgBgjQAAgjASgUQASgVAeAAQAdAAARASQAQASABAeIAAAQIhgAAQAAAVALAMQAKALATAAQANAAALgCQAMgDANgFIAAAZQgMAFgMADQgMACgOAAQghAAgUgUgAgVgpQgJAIgBATIBBAAQAAgTgJgIQgIgKgPAAQgNAAgKAKg");
	this.shape_1.setTransform(170,166);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C1F7D").s().p("AgaAsIAAhOIgUAAIAAgNIAWgMIAKgeIASAAIAAAgIAqAAIAAAXIgqAAIAABNQAAAMAGAFQAGAFAIAAQAMAAALgDIAAAXIgNAEQgIABgJAAQgrAAAAgug");
	this.shape_2.setTransform(156.8,164.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C1F7D").s().p("AAhBKIAAhYQAAgRgHgJQgHgIgOAAQgTAAgJAMQgJALAAAbIAABIIgfAAIAAiRIAYAAIAFAUIABAAQAHgLAMgGQAMgFAOAAQA0AAAAA1IAABeg");
	this.shape_3.setTransform(143.1,165.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C1F7D").s().p("AgtA4QgSgUgBgjQAAgjASgUQASgVAeAAQAdAAARASQAQASAAAeIAAAQIhfAAQAAAVALAMQALALASAAQANAAAMgCQALgDANgFIAAAZQgMAFgMADQgMACgOAAQghAAgUgUgAgUgpQgKAIgBATIBBAAQAAgTgJgIQgIgKgPAAQgNAAgJAKg");
	this.shape_4.setTransform(126.7,166);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C1F7D").s().p("ABMBKIAAhZQABgQgHgJQgGgIgOAAQgRAAgJALQgJAMABAXIAABMIgfAAIAAhZQAAgQgGgJQgGgIgOAAQgSAAgIAMQgJALAAAbIAABIIgeAAIAAiRIAYAAIAEAUIACAAQAGgLALgGQAMgFAOAAQAhAAAKAXIACAAQAHgLALgGQAMgGAPAAQAbAAALANQAMANABAbIAABeg");
	this.shape_5.setTransform(106.1,165.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6C1F7D").s().p("AgxBAQgMgLAAgWQAAgXARgKQARgLAhgBIAZgBIAAgIQAAgOgGgHQgHgGgOAAQgKAAgKACIgUAJIgKgXQAMgGAOgDQAOgDAMgBQAbAAAPAMQAOANAAAaIAABhIgWAAIgHgVIgBAAQgKAOgLAFQgLAEgPABQgWAAgMgMgAAMAEQgVABgKAHQgKAGAAAOQAAAJAGAGQAGAFALAAQAQAAALgKQAKgJAAgRIAAgMg");
	this.shape_6.setTransform(84.9,166);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6C1F7D").s().p("AgaAsIAAhOIgUAAIAAgNIAWgMIAKgeIASAAIAAAgIAqAAIAAAXIgqAAIAABNQAAAMAGAFQAGAFAIAAQAMAAALgDIAAAXIgNAEQgIABgJAAQgrAAAAgug");
	this.shape_7.setTransform(72.1,164.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6C1F7D").s().p("AgmA5QgRgUAAgkQAAgkASgUQASgTAhgBQAXABATAIIgKAZQgTgHgNAAQglAAAAAwQAAAZAKANQAJAMARAAQAVAAASgKIAAAbQgIAEgJADQgKACgNAAQgggBgSgSg");
	this.shape_8.setTransform(60.5,166);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C1F7D").s().p("AgtA4QgSgUgBgjQAAgjASgUQASgVAeAAQAdAAARASQAQASABAeIAAAQIhgAAQAAAVALAMQAKALATAAQANAAALgCQAMgDANgFIAAAZQgMAFgMADQgMACgOAAQghAAgUgUgAgVgpQgJAIgBATIBBAAQAAgTgJgIQgIgKgPAAQgNAAgKAKg");
	this.shape_9.setTransform(45.8,166);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C1F7D").s().p("AgsBKIAAiRIAZAAIAEAaIABAAQAIgNAKgIQAMgHANAAQAKAAAGABIgDAdQgHgCgHAAQgTAAgKANQgMAMAAATIAABLg");
	this.shape_10.setTransform(33,165.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6C1F7D").s().p("AgPBlIAAiRIAeAAIAACRgAgMhGQgEgFAAgIQAAgIAEgEQAFgFAHAAQAIAAAFAFQAEAEAAAIQAAAIgEAFQgFAEgIAAQgHAAgFgEg");
	this.shape_11.setTransform(22.6,163.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6C1F7D").s().p("AgyBUQgPgUAAgjQAAgjAPgUQAQgUAbAAQAcAAAPAVIABAAIgCgZIAAg1IAfAAIAADMIgYAAIgFgTIgCAAQgPAWgbAAQgcAAgPgUgAgZgIQgIANAAAYQAAAYAIANQAJANAQAAQATAAAJgLQAIgLABgYIAAgEQAAgcgJgKQgJgMgTAAQgQAAgJANg");
	this.shape_12.setTransform(10,163.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6C1F7D").s().p("AAhBKIAAhYQAAgRgHgJQgHgIgOAAQgTAAgJAMQgJALAAAbIAABIIgfAAIAAiRIAYAAIAFAUIABAAQAHgLAMgGQAMgFAOAAQA0AAAAA1IAABeg");
	this.shape_13.setTransform(497.2,134.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6C1F7D").s().p("AgsA4QgUgUABgjQAAgiARgVQASgVAeAAQAdAAARASQARARAAAgIAAAPIhhAAQABAVALAMQAKALAUAAQAMAAALgCQALgDANgGIAAAaQgLAFgLADQgMABgPABQghAAgTgUgAgVgpQgIAJgCASIBBAAQAAgSgIgJQgJgKgPAAQgOAAgJAKg");
	this.shape_14.setTransform(480.8,134.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C1F7D").s().p("Ag3BgQgPgKAAgUQAAgNAIgKQAJgJAPgDQgGgDgEgGQgEgGAAgGQAAgIAEgFQAFgGAJgFQgLgFgHgLQgHgLAAgPQAAgYAPgNQAPgNAbAAIAMABIALACIAyAAIAAARIgZAFQAEAEACAHQACAHAAAHQAAAXgQANQgPANgaAAQgHAAgGgCQgKAHAAAHQAAAFAFACQAEADANAAIAYAAQAYAAANAKQAMALAAATQAAAZgUANQgUAOgmAAQgeAAgQgLgAgjAwQgIAGAAAKQAAAKAKAGQAJAFAQAAQAYAAANgHQAMgHAAgMQAAgKgHgEQgHgEgSAAIgXAAQgNAAgIAHgAgWhOQgHAIAAAOQAAAOAHAHQAHAIANAAQAaAAAAgdQAAgOgHgIQgGgIgNAAQgNAAgHAIg");
	this.shape_15.setTransform(465.4,137.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6C1F7D").s().p("AgPBlIAAiRIAeAAIAACRgAgMhGQgEgFAAgIQAAgIAEgEQAFgFAHAAQAIAAAFAFQAEAEAAAIQAAAIgEAFQgFAEgIAAQgHAAgFgEg");
	this.shape_16.setTransform(454.2,131.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6C1F7D").s().p("AgsBKIAAiRIAZAAIAEAaIABAAQAIgNAKgIQAMgHANAAQAKAAAGABIgDAdQgHgCgHAAQgTAAgKANQgMAMAAATIAABLg");
	this.shape_17.setTransform(445.5,134.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6C1F7D").s().p("AgPBlIAAiRIAeAAIAACRgAgMhGQgEgFAAgIQAAgIAEgEQAFgFAHAAQAIAAAFAFQAEAEAAAIQAAAIgEAFQgFAEgIAAQgHAAgFgEg");
	this.shape_18.setTransform(435,131.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6C1F7D").s().p("AgyBUQgPgUAAgjQAAgjAPgUQAQgUAbAAQAcAAAPAVIABAAIgCgZIAAg1IAfAAIAADMIgYAAIgFgTIgCAAQgPAWgbAAQgcAAgPgUgAgZgIQgIANAAAYQAAAYAIANQAJANAQAAQATAAAJgLQAIgLABgYIAAgEQAAgcgJgKQgJgMgTAAQgQAAgJANg");
	this.shape_19.setTransform(422.4,131.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6C1F7D").s().p("AgsA4QgUgUAAgjQABgiARgVQASgVAeAAQAdAAARASQARARAAAgIAAAPIhhAAQABAVALAMQALALATAAQAMAAALgCQALgDANgGIAAAaQgLAFgMADQgLABgPABQghAAgTgUgAgVgpQgIAJgCASIBBAAQAAgSgJgJQgIgKgPAAQgNAAgKAKg");
	this.shape_20.setTransform(399.7,134.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6C1F7D").s().p("Ag0BDIAAgbQAZAMAWAAQAcAAAAgSQAAgFgDgEQgDgEgHgDQgIgEgLgFQgagJgIgKQgKgJABgQQgBgSAPgLQAQgLAYAAQAaAAAXALIgKAYQgYgLgPABQgYgBAAAOQAAAIAHAEQAGAFAUAIQASAHAJAFQAHAGAEAHQAFAIAAAKQAAAWgQAMQgQALgbAAQgegBgRgIg");
	this.shape_21.setTransform(385.4,134.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6C1F7D").s().p("AgsA4QgUgUABgjQAAgiARgVQASgVAeAAQAdAAARASQAQARAAAgIAAAPIhgAAQABAVALAMQALALASAAQANAAAMgCQAKgDANgGIAAAaQgLAFgLADQgNABgOABQghAAgTgUgAgUgpQgKAJgBASIBBAAQAAgSgIgJQgJgKgPAAQgOAAgIAKg");
	this.shape_22.setTransform(364,134.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6C1F7D").s().p("AgyA9QgNgNAAgbIAAheIAfAAIAABZQAAARAHAIQAHAIAOAAQATAAAJgLQAJgMAAgaIAAhJIAfAAIAACRIgYAAIgFgTIgBAAQgHAKgMAGQgMAFgOAAQgaAAgNgNg");
	this.shape_23.setTransform(347.6,134.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6C1F7D").s().p("AAjBrIAAg+IABgMIABgKIgCAAQgOAVgdAAQgbAAgPgTQgPgUAAgjQAAgjAPgVQAQgUAbAAQANAAALAFQALAFAIAMIABAAIAEgTIAZAAIAADSgAgZhDQgIANAAAZQAAAxAhAAQAUAAAIgMQAJgKAAgXIAAgFQAAgbgJgMQgJgLgTAAQgQAAgJANg");
	this.shape_24.setTransform(330.2,137.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6C1F7D").s().p("Ag1BDIAAgbQAbAMAVAAQAcAAAAgSQAAgFgDgEQgDgEgIgDQgGgEgMgFQgagJgJgKQgJgJAAgQQABgSAPgLQAOgLAZAAQAbAAAWALIgKAYQgYgLgQABQgXgBAAAOQAAAIAGAEQAHAFAUAIQATAHAHAFQAIAGAFAHQAEAIAAAKQAAAWgQAMQgQALgcAAQgdgBgSgIg");
	this.shape_25.setTransform(308.8,134.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6C1F7D").s().p("AgkBCQgPgJgIgRQgJgSAAgWQAAgjASgUQATgTAggBQAfAAASAVQATAVAAAhQAAAjgTAVQgRATghABQgUAAgQgKgAgcgkQgIAMAAAYQAAAzAkgBQAlABAAgzQAAgxglAAQgSAAgKANg");
	this.shape_26.setTransform(293.9,134.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6C1F7D").s().p("AgOBmIAAjMIAdAAIAADMg");
	this.shape_27.setTransform(281.8,131.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6C1F7D").s().p("AgxBAQgMgMAAgVQAAgWARgLQARgMAhAAIAZgBIAAgIQAAgOgGgGQgHgIgOABQgKAAgKACIgUAIIgKgWQAMgGAOgDQAOgDAMgBQAbABAPAMQAOAMAAAaIAABhIgWAAIgHgVIgBAAQgKAOgLAFQgLAEgPABQgWgBgMgLgAAMAEQgVABgKAHQgKAGAAANQAAAKAGAGQAGAFALAAQAQAAALgKQAKgJAAgRIAAgMg");
	this.shape_28.setTransform(262.8,134.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6C1F7D").s().p("AgkBCQgPgJgIgRQgJgSAAgWQAAgjASgUQATgTAfgBQAgAAATAVQASAVAAAhQAAAjgSAVQgSATghABQgUAAgQgKgAgcgkQgIAMAAAYQAAAzAkgBQAlABAAgzQAAgxglAAQgTAAgJANg");
	this.shape_29.setTransform(240.2,134.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6C1F7D").s().p("AgyBUQgPgUAAgjQAAgjAPgUQAQgUAbAAQAcAAAPAVIABAAIgCgZIAAg1IAfAAIAADMIgYAAIgFgTIgCAAQgPAWgbAAQgcAAgPgUgAgZgIQgIANAAAYQAAAYAIANQAJANAQAAQATAAAJgLQAIgLABgYIAAgEQAAgcgJgKQgJgMgTAAQgQAAgJANg");
	this.shape_30.setTransform(223.1,131.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C1F7D").s().p("AgxBAQgMgMAAgVQAAgWARgLQARgMAhAAIAZgBIAAgIQAAgOgGgGQgHgIgOABQgKAAgKACIgUAIIgKgWQAMgGAOgDQAOgDAMgBQAbABAPAMQAOAMAAAaIAABhIgWAAIgHgVIgBAAQgKAOgLAFQgLAEgPABQgWgBgMgLgAAMAEQgVABgKAHQgKAGAAANQAAAKAGAGQAGAFALAAQAQAAALgKQAKgJAAgRIAAgMg");
	this.shape_31.setTransform(206.9,134.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6C1F7D").s().p("AgmA5QgRgUAAgkQAAgkASgUQASgTAhgBQAXAAATAJIgKAZQgTgHgNgBQglAAAAAyQAAAYAKANQAJAMARAAQAVAAASgLIAAAbQgIAFgJADQgKABgNABQgggBgSgSg");
	this.shape_32.setTransform(193.1,134.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6C1F7D").s().p("AgsBKIAAiRIAZAAIAEAaIABAAQAIgNAKgIQAMgHANAAQAKAAAGABIgDAdQgHgCgHAAQgTAAgKANQgMAMAAATIAABLg");
	this.shape_33.setTransform(181.2,134.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6C1F7D").s().p("AgsA4QgUgUABgjQAAgiARgVQASgVAeAAQAdAAARASQARARgBAgIAAAPIhgAAQABAVALAMQAKALAUAAQAMAAAMgCQAKgDANgGIAAAaQgLAFgLADQgNABgOABQghAAgTgUgAgVgpQgIAJgCASIBBAAQAAgSgIgJQgJgKgPAAQgOAAgJAKg");
	this.shape_34.setTransform(166.8,134.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6C1F7D").s().p("ABNBKIAAhZQgBgQgGgJQgGgIgOAAQgSAAgIALQgJAMAAAXIAABMIgdAAIAAhZQAAgQgHgJQgGgIgNAAQgTAAgIAMQgIALAAAbIAABIIggAAIAAiRIAZAAIAFAUIABAAQAGgLAMgGQALgFAOAAQAhAAALAXIACAAQAGgLAMgGQAMgGAPAAQAaAAALANQAMANAAAbIAABeg");
	this.shape_35.setTransform(146.2,134.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6C1F7D").s().p("AgsA4QgUgUAAgjQABgiARgVQASgVAeAAQAdAAARASQARARAAAgIAAAPIhhAAQABAVALAMQALALATAAQAMAAALgCQALgDANgGIAAAaQgLAFgMADQgLABgPABQghAAgTgUgAgVgpQgIAJgCASIBBAAQAAgSgJgJQgIgKgPAAQgNAAgKAKg");
	this.shape_36.setTransform(118.5,134.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6C1F7D").s().p("AgyBUQgPgUAAgjQAAgjAPgUQAQgUAbAAQAcAAAPAVIABAAIgCgZIAAg1IAfAAIAADMIgYAAIgFgTIgCAAQgPAWgbAAQgcAAgPgUgAgZgIQgIANAAAYQAAAYAIANQAJANAQAAQATAAAJgLQAIgLABgYIAAgEQAAgcgJgKQgJgMgTAAQgQAAgJANg");
	this.shape_37.setTransform(101.8,131.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6C1F7D").s().p("Ag1BDIAAgbQAaAMAXAAQAbAAAAgSQAAgFgDgEQgDgEgIgDQgGgEgNgFQgZgJgJgKQgIgJgBgQQAAgSAQgLQAPgLAZAAQAZAAAXALIgKAYQgXgLgRABQgXgBAAAOQAAAIAGAEQAHAFAVAIQASAHAHAFQAIAGAFAHQADAIAAAKQAAAWgPAMQgPALgcAAQgegBgSgIg");
	this.shape_38.setTransform(80.4,134.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6C1F7D").s().p("AgjBCQgQgJgJgRQgIgSAAgWQAAgjASgUQASgTAhgBQAfAAASAVQATAVAAAhQAAAjgTAVQgSATggABQgUAAgPgKgAgbgkQgJAMAAAYQAAAzAkgBQAlABAAgzQAAgxglAAQgTAAgIANg");
	this.shape_39.setTransform(65.5,134.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6C1F7D").s().p("AAhBmIAAhZQAAgQgHgJQgHgHgOAAQgTgBgJAMQgJALAAAbIAABIIgfAAIAAjMIAfAAIAAA0IgCAbIACAAQAHgLALgFQALgGAOAAQA1AAAAA1IAABeg");
	this.shape_40.setTransform(48.7,131.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6C1F7D").s().p("AgmA5QgRgUAAgkQAAgkASgUQASgTAhgBQAXAAATAJIgKAZQgTgHgNgBQglAAAAAyQAAAYAKANQAJAMARAAQAVAAASgLIAAAbQgIAFgJADQgKABgNABQgggBgSgSg");
	this.shape_41.setTransform(33.6,134.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6C1F7D").s().p("AgPBlIAAiRIAeAAIAACRgAgMhGQgEgFAAgIQAAgIAEgEQAFgFAHAAQAIAAAFAFQAEAEAAAIQAAAIgEAFQgFAEgIAAQgHAAgFgEg");
	this.shape_42.setTransform(22.9,131.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6C1F7D").s().p("AAhBKIAAhYQAAgRgHgJQgHgIgOAAQgTAAgJAMQgJALAAAbIAABIIgfAAIAAiRIAYAAIAFAUIABAAQAHgLAMgGQAMgFAOAAQA0AAAAA1IAABeg");
	this.shape_43.setTransform(10.6,134.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6C1F7D").s().p("AAhBKIAAhYQAAgRgHgJQgHgIgOAAQgTAAgJAMQgJALAAAbIAABIIgfAAIAAiRIAYAAIAFAUIABAAQAHgLAMgGQAMgFAOAAQA0AAAAA1IAABeg");
	this.shape_44.setTransform(545.6,102.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6C1F7D").s().p("AgtA4QgTgUAAgjQAAgiASgVQASgUAegBQAdABARARQARARAAAgIAAAPIhgAAQAAAWALALQAKALAUAAQAMAAALgDQAMgCANgGIAAAZQgMAGgMACQgMACgOAAQghAAgUgTgAgVgqQgIAKgCARIBBAAQAAgRgJgKQgIgJgPAAQgNAAgKAJg");
	this.shape_45.setTransform(529.2,102.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6C1F7D").s().p("AAhBKIAAhYQAAgRgHgJQgHgIgOAAQgTAAgJAMQgJALAAAbIAABIIgfAAIAAiRIAYAAIAFAUIABAAQAHgLAMgGQAMgFAOAAQA0AAAAA1IAABeg");
	this.shape_46.setTransform(512.9,102.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6C1F7D").s().p("AgPBlIAAiRIAeAAIAACRgAgMhGQgEgFAAgIQAAgIAEgEQAFgFAHAAQAIAAAFAFQAEAEAAAIQAAAIgEAFQgFAEgIAAQgHAAgFgEg");
	this.shape_47.setTransform(500.5,99.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6C1F7D").s().p("AgcBnIAAh5IgYAAIAAgPIAYgJIAAgKQAAgZAMgNQANgMAYAAQAQAAAQAFIgIAYQgMgEgKAAQgLAAgFAGQgFAHAAANIAAAJIAkAAIAAAYIgkAAIAAB5g");
	this.shape_48.setTransform(492.6,99.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6C1F7D").s().p("AgtA4QgSgUgBgjQAAgiASgVQASgUAegBQAdABARARQAQARABAgIAAAPIhgAAQAAAWALALQAKALATAAQANAAALgDQAMgCANgGIAAAZQgMAGgMACQgMACgOAAQghAAgUgTgAgUgqQgKAKgBARIBBAAQAAgRgJgKQgIgJgPAAQgNAAgJAJg");
	this.shape_49.setTransform(479.2,102.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6C1F7D").s().p("AgyBUQgPgUAAgjQAAgjAPgUQAQgUAbAAQAcAAAPAVIABAAIgCgZIAAg1IAfAAIAADMIgYAAIgFgTIgCAAQgPAWgbAAQgcAAgPgUgAgZgIQgIANAAAYQAAAYAIANQAJANAQAAQATAAAJgLQAIgLABgYIAAgEQAAgcgJgKQgJgMgTAAQgQAAgJANg");
	this.shape_50.setTransform(462.5,99.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6C1F7D").s().p("Ag1BDIAAgbQAbAMAVAAQAcAAAAgRQAAgGgDgDQgDgEgIgEQgGgEgMgFQgagJgJgJQgJgLAAgPQABgSAPgLQAOgLAZAAQAbAAAWALIgKAXQgYgKgQAAQgXABAAAOQAAAGAGAFQAHAFAUAIQATAHAHAFQAIAGAFAHQADAIAAAKQAAAWgPAMQgQALgcgBQgdAAgSgIg");
	this.shape_51.setTransform(441.1,102.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6C1F7D").s().p("AgxBAQgMgLAAgWQAAgXARgKQARgMAhgBIAZAAIAAgIQAAgOgGgGQgHgIgOAAQgKAAgKADIgUAIIgKgWQAMgGAOgDQAOgEAMAAQAbAAAPANQAOAMAAAaIAABhIgWAAIgHgUIgBAAQgKANgLAFQgLAFgPgBQgWAAgMgLgAAMAEQgVABgKAGQgKAHAAANQAAAKAGAFQAGAGALAAQAQAAALgJQAKgKAAgRIAAgNg");
	this.shape_52.setTransform(426.2,102.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6C1F7D").s().p("Ag0BDIAAgbQAZAMAXAAQAbAAAAgRQAAgGgDgDQgDgEgHgEQgIgEgMgFQgZgJgIgJQgJgLAAgPQAAgSAOgLQAPgLAaAAQAZAAAXALIgKAXQgYgKgPAAQgYABAAAOQAAAGAHAFQAGAFAVAIQARAHAJAFQAHAGAEAHQAEAIABAKQgBAWgPAMQgQALgbgBQgdAAgSgIg");
	this.shape_53.setTransform(412.3,102.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6C1F7D").s().p("AgsA4QgUgUAAgjQABgiARgVQASgUAegBQAdABARARQARARAAAgIAAAPIhhAAQABAWALALQALALATAAQAMAAALgDQALgCANgGIAAAZQgLAGgMACQgLACgPAAQghAAgTgTgAgVgqQgIAKgCARIBBAAQAAgRgJgKQgIgJgPAAQgNAAgKAJg");
	this.shape_54.setTransform(397.9,102.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6C1F7D").s().p("AgsBKIAAiRIAZAAIAEAaIABAAQAIgNAKgIQAMgHANAAQAKAAAGABIgDAdQgHgCgHAAQgTAAgKANQgMAMAAATIAABLg");
	this.shape_55.setTransform(385.1,102.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6C1F7D").s().p("AhBBrIAAjSIAZAAIAEATIACAAQAOgWAcAAQAcAAAPAUQAPAUAAAkQAAAigPAUQgQAUgbAAQgbAAgPgUIgCAAIACAXIAAA8gAgahGQgIALAAAYIAAAFQAAAaAIALQAJAMASAAQAQAAAJgNQAIgMAAgZQAAgYgIgNQgJgMgRAAQgRAAgJAKg");
	this.shape_56.setTransform(370.5,105.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6C1F7D").s().p("ABNBKIAAhZQAAgQgHgJQgGgIgNAAQgTAAgIALQgIAMAAAXIAABMIgfAAIAAhZQABgQgHgJQgGgIgOAAQgRAAgJAMQgJALABAbIAABIIggAAIAAiRIAZAAIAEAUIACAAQAGgLALgGQAMgFAOAAQAhAAAKAXIACAAQAHgLALgGQAMgGAPAAQAaAAANANQAMANgBAbIAABeg");
	this.shape_57.setTransform(348.8,102.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6C1F7D").s().p("AgtA4QgSgUAAgjQAAgiARgVQASgUAegBQAdABARARQAQARAAAgIAAAPIhgAAQABAWALALQALALASAAQANAAAMgDQAKgCANgGIAAAZQgLAGgLACQgMACgPAAQghAAgUgTgAgUgqQgKAKgBARIBBAAQAAgRgIgKQgJgJgPAAQgOAAgIAJg");
	this.shape_58.setTransform(328.1,102.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6C1F7D").s().p("Ag1BDIAAgbQAaAMAXAAQAbAAAAgRQAAgGgDgDQgDgEgIgEQgGgEgNgFQgZgJgJgJQgIgLgBgPQAAgSAPgLQAPgLAaAAQAaAAAWALIgKAXQgXgKgQAAQgYABAAAOQAAAGAHAFQAGAFAVAIQARAHAJAFQAIAGAEAHQADAIAAAKQAAAWgPAMQgPALgcgBQgdAAgTgIg");
	this.shape_59.setTransform(306.8,102.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6C1F7D").s().p("AgxBAQgMgLAAgWQAAgXARgKQARgMAhgBIAZAAIAAgIQAAgOgGgGQgHgIgOAAQgKAAgKADIgUAIIgKgWQAMgGAOgDQAOgEAMAAQAbAAAPANQAOAMAAAaIAABhIgWAAIgHgUIgBAAQgKANgLAFQgLAFgPgBQgWAAgMgLgAAMAEQgVABgKAGQgKAHAAANQAAAKAGAFQAGAGALAAQAQAAALgJQAKgKAAgRIAAgNg");
	this.shape_60.setTransform(291.9,102.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6C1F7D").s().p("AgPBmIAAjLIAfAAIAADLg");
	this.shape_61.setTransform(280.8,99.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6C1F7D").s().p("Ag3BgQgPgKAAgUQAAgNAIgKQAJgJAPgDQgGgDgEgGQgEgGAAgGQAAgIAEgFQAFgGAJgFQgLgFgHgLQgHgLAAgPQAAgYAPgNQAPgNAbAAIAMABIALACIAyAAIAAARIgZAFQAEAEACAHQACAHAAAHQAAAXgQANQgPANgaAAQgHAAgGgCQgKAHAAAHQAAAFAFACQAEADANAAIAYAAQAYAAANAKQAMALAAATQAAAZgUANQgUAOgmAAQgeAAgQgLgAgjAwQgIAGAAAKQAAAKAKAGQAJAFAQAAQAYAAANgHQAMgHAAgMQAAgKgHgEQgHgEgSAAIgXAAQgNAAgIAHgAgWhOQgHAIAAAOQAAAOAHAHQAHAIANAAQAaAAAAgdQAAgOgHgIQgGgIgNAAQgNAAgHAIg");
	this.shape_62.setTransform(262.4,105.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6C1F7D").s().p("AAhBKIAAhYQAAgRgHgJQgHgIgOAAQgTAAgJAMQgJALAAAbIAABIIgfAAIAAiRIAYAAIAFAUIABAAQAHgLAMgGQAMgFAOAAQA0AAAAA1IAABeg");
	this.shape_63.setTransform(246.5,102.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6C1F7D").s().p("AgPBlIAAiRIAeAAIAACRgAgMhGQgEgFAAgIQAAgIAEgEQAFgFAHAAQAIAAAFAFQAEAEAAAIQAAAIgEAFQgFAEgIAAQgHAAgFgEg");
	this.shape_64.setTransform(234.1,99.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6C1F7D").s().p("AgaAsIAAhOIgUAAIAAgNIAWgMIAKgeIASAAIAAAgIApAAIAAAXIgpAAIAABNQAAAMAGAFQAFAFAJAAQAMAAALgDIAAAXIgNAEQgIABgJAAQgrAAAAgug");
	this.shape_65.setTransform(224.9,101);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6C1F7D").s().p("AgtA4QgTgUAAgjQAAgiASgVQASgUAegBQAdABARARQARARAAAgIAAAPIhgAAQAAAWALALQAKALAUAAQAMAAALgDQAMgCANgGIAAAZQgMAGgMACQgMACgOAAQghAAgUgTgAgVgqQgIAKgCARIBBAAQAAgRgJgKQgIgJgPAAQgNAAgKAJg");
	this.shape_66.setTransform(212,102.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6C1F7D").s().p("AAdBmIguhAIgQAPIAAAxIggAAIAAjLIAgAAIAABkIgCAbIAAAAIASgXIArguIAkAAIg7A+IA/BTg");
	this.shape_67.setTransform(197.5,99.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6C1F7D").s().p("AgsBKIAAiRIAZAAIAEAaIABAAQAIgNAKgIQAMgHANAAQAKAAAGABIgDAdQgHgCgHAAQgTAAgKANQgMAMAAATIAABLg");
	this.shape_68.setTransform(183.7,102.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6C1F7D").s().p("AgxBAQgMgLAAgWQAAgXARgKQARgMAhgBIAZAAIAAgIQAAgOgGgGQgHgIgOAAQgKAAgKADIgUAIIgKgWQAMgGAOgDQAOgEAMAAQAbAAAPANQAOAMAAAaIAABhIgWAAIgHgUIgBAAQgKANgLAFQgLAFgPgBQgWAAgMgLgAAMAEQgVABgKAGQgKAHAAANQAAAKAGAFQAGAGALAAQAQAAALgJQAKgKAAgRIAAgNg");
	this.shape_69.setTransform(168.8,102.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6C1F7D").s().p("ABMBKIAAhZQAAgQgGgJQgGgIgOAAQgSAAgIALQgJAMAAAXIAABMIgdAAIAAhZQgBgQgGgJQgGgIgOAAQgSAAgIAMQgJALAAAbIAABIIgeAAIAAiRIAYAAIAFAUIABAAQAGgLALgGQAMgFAOAAQAhAAALAXIABAAQAHgLALgGQANgGAOAAQAaAAAMANQANANAAAbIAABeg");
	this.shape_70.setTransform(148.6,102.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6C1F7D").s().p("AgPBmIAAjLIAeAAIAADLg");
	this.shape_71.setTransform(124.9,99.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6C1F7D").s().p("AgxBAQgMgLAAgWQAAgXARgKQARgMAhgBIAZAAIAAgIQAAgOgGgGQgHgIgOAAQgKAAgKADIgUAIIgKgWQAMgGAOgDQAOgEAMAAQAbAAAPANQAOAMAAAaIAABhIgWAAIgHgUIgBAAQgKANgLAFQgLAFgPgBQgWAAgMgLgAAMAEQgVABgKAGQgKAHAAANQAAAKAGAFQAGAGALAAQAQAAALgJQAKgKAAgRIAAgNg");
	this.shape_72.setTransform(112.9,102.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6C1F7D").s().p("Ag0BDIAAgbQAZAMAWAAQAcAAAAgRQAAgGgDgDQgDgEgHgEQgHgEgMgFQgagJgIgJQgKgLABgPQgBgSAPgLQAQgLAZAAQAZAAAXALIgKAXQgYgKgPAAQgYABAAAOQAAAGAHAFQAGAFAVAIQARAHAJAFQAHAGAEAHQAFAIAAAKQAAAWgQAMQgQALgcgBQgdAAgRgIg");
	this.shape_73.setTransform(92,102.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6C1F7D").s().p("AgxBAQgMgLAAgWQAAgXARgKQARgMAhgBIAZAAIAAgIQAAgOgGgGQgHgIgOAAQgKAAgKADIgUAIIgKgWQAMgGAOgDQAOgEAMAAQAbAAAPANQAOAMAAAaIAABhIgWAAIgHgUIgBAAQgKANgLAFQgLAFgPgBQgWAAgMgLgAAMAEQgVABgKAGQgKAHAAANQAAAKAGAFQAGAGALAAQAQAAALgJQAKgKAAgRIAAgNg");
	this.shape_74.setTransform(77.1,102.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6C1F7D").s().p("AgPBlIAAiRIAeAAIAACRgAgMhGQgEgFAAgIQAAgIAEgEQAFgFAHAAQAIAAAFAFQAEAEAAAIQAAAIgEAFQgFAEgIAAQgHAAgFgEg");
	this.shape_75.setTransform(66,99.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6C1F7D").s().p("AgmA4QgRgTAAgkQAAgkASgTQASgVAhAAQAXAAATAJIgKAZQgTgIgNAAQglAAAAAyQAAAYAKAMQAJANARAAQAVAAASgLIAAAbQgIAGgJABQgKACgNAAQggABgSgUg");
	this.shape_76.setTransform(55.8,102.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6C1F7D").s().p("AgxBAQgMgLAAgWQAAgXARgKQARgMAhgBIAZAAIAAgIQAAgOgGgGQgHgIgOAAQgKAAgKADIgUAIIgKgWQAMgGAOgDQAOgEAMAAQAbAAAPANQAOAMAAAaIAABhIgWAAIgHgUIgBAAQgKANgLAFQgLAFgPgBQgWAAgMgLgAAMAEQgVABgKAGQgKAHAAANQAAAKAGAFQAGAGALAAQAQAAALgJQAKgKAAgRIAAgNg");
	this.shape_77.setTransform(40.6,102.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6C1F7D").s().p("AgsBKIAAiRIAZAAIAEAaIABAAQAIgNAKgIQAMgHANAAQAKAAAGABIgDAdQgHgCgHAAQgTAAgKANQgMAMAAATIAABLg");
	this.shape_78.setTransform(28.3,102.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6C1F7D").s().p("Ag3BKQgYgaAAgwQAAgtAbgaQAbgbAuAAQAeAAAbALIgLAbQgYgLgXAAQgeAAgRAUQgTATABAhQAAAiAPATQARATAdAAQAPAAARgFIAAgxIgnAAIAAgaIBHAAIAABgQgSAGgQACQgPACgUAAQgqAAgYgZg");
	this.shape_79.setTransform(11.6,100.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6C1F7D").s().p("ABFDEIiqkoIgDAAQAFBPAAAgIAAC5IhKAAIAAmHIBpAAICpElIADAAQgFhNAAgfIAAi5IBLAAIAAGHg");
	this.shape_80.setTransform(583.4,41.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6C1F7D").s().p("AiJDOQgxg0AAhiQAAhhAxg0QAwg0BZAAQBbAAAwA1QAwA0AABgQAABigxA0QgwA1haAAQhaAAgvg1gAhJgqQgaAiAABAQAABCAZAhQAZAiAxAAQBjAAAAiFQAAiDhjAAQgxAAgYAhgAgqiqIAAgHQAug2ARgbIBcAAIAAAGQgPAOghAbQgiAcgTANg");
	this.shape_81.setTransform(539.2,35.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6C1F7D").s().p("AgoDEIAAmHIBRAAIAAGHg");
	this.shape_82.setTransform(508.2,41.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6C1F7D").s().p("AhnCWQgug0AAhhQAAg9AXgtQAWgvAqgYQApgZA4AAQA5AAA5AcIgaBEQgWgLgXgHQgWgJgVAAQgvABgZAjQgaAjAAA/QAACDBigBQApAAA7gUIAABGQgwAUg8AAQhVAAgtg0g");
	this.shape_83.setTransform(482.2,41.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6C1F7D").s().p("ABkDFIgchdIiPAAIgcBdIhaAAICLmJIBlAAICLGJgAgyAiIBmAAIgtiPIgHgbQgIAjgqCHg");
	this.shape_84.setTransform(445,41.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6C1F7D").s().p("ACEDEIAAi6IABgdIADhbIgCAAIhlEyIhMAAIhekzIgDAAQAGBeAAAfIAAC2IhLAAIAAmHIBxAAIBdErIACAAIBikrIBxAAIAAGHg");
	this.shape_85.setTransform(400.1,41.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6C1F7D").s().p("AgoDEIAAmHIBSAAIAAGHg");
	this.shape_86.setTransform(365.1,41.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6C1F7D").s().p("ABEDEIiqkoIgCAAQAGBPAAAgIAAC5IhLAAIAAmHIBpAAICpElIACAAQgDhNAAgfIAAi5IBKAAIAAGHg");
	this.shape_87.setTransform(333.7,41.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6C1F7D").s().p("ABkDFIgchdIiPAAIgcBdIhaAAICLmJIBlAAICLGJgAgyAiIBmAAIgtiPIgHgbQgIAjgqCHg");
	this.shape_88.setTransform(292.3,41.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6C1F7D").s().p("AgoDEIAAiWIiDjxIBaAAIBRChIBSihIBZAAIiBDuIAACZg");
	this.shape_89.setTransform(241.9,41.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6C1F7D").s().p("AiJCWQgxg1AAhhQAAhiAxgzQAwg0BZAAQBbAAAwA0QAwA0AABhQAABhgxA1QgwA0haAAQhaAAgvg0gAhJhiQgaAhAABBQAABCAZAhQAZAhAxAAQBjAAAAiEQAAiEhjAAQgxAAgYAig");
	this.shape_90.setTransform(188.6,41.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6C1F7D").s().p("ABED+IiqkoIgCAAQAGBNgBAhIAAC6IhKAAIAAmIIBpAAICqElIACAAQgEhNgBgfIAAi5IBLAAIAAGIgAhuipQADgnATgWQATgWAgAAQALAAALAFIAUAJIATAKQALAEAJAAQAJAAAHgHQAIgHADgPIApAAQgDAngUAWQgUAXgegBQgLABgLgFIgUgJIgUgKQgKgFgKAAQgJABgHAGQgHAIgEAOg");
	this.shape_91.setTransform(144.4,35.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6C1F7D").s().p("AhwDEIAAmHIDhAAIAABEIiOAAIAABWICEAAIAABDIiEAAIAABmICOAAIAABEg");
	this.shape_92.setTransform(107.5,41.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6C1F7D").s().p("Ah/CyIAAhNQAoASAbAHQAcAHAXAAQAbAAAOgLQAOgKAAgUQABgMgHgJQgHgJgLgIQgNgIglgTQglgRgRgPQgTgPgKgVQgLgUAAgcQAAg0AjgeQAkgeA8AAQAgAAAcAHQAbAIAeANIgbBBQgfgNgVgFQgUgGgUAAQgWAAgNALQgNAMAAARQAAALAFAJQAFAIAMAHQALAIApAUQA2AaAVAZQAUAbAAAmQAAA1gmAgQgnAehDAAQg+AAgxgYg");
	this.shape_93.setTransform(76.2,41.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6C1F7D").s().p("AgpDEIAAmHIBTAAIAAGHg");
	this.shape_94.setTransform(51.8,41.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6C1F7D").s().p("AiiDEIAAmHIB7AAQBgAAA1AyQA1AzAABbQAABgg3A0Qg3AzhoAAgAhPCAIAkAAQB3AAAAiBQAAh+huAAIgtAAg");
	this.shape_95.setTransform(23.2,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol205, new cjs.Rectangle(0,0,719.1,183.2), null);


(lib.Symbol198 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap60();
	this.instance.parent = this;
	this.instance.setTransform(-30,32);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-43,14,1.334,1.334);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol198, new cjs.Rectangle(-43,14,377.5,300.2), null);


(lib.Symbol195 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(20,7,8,0.098)").s().p("AADAAIgFAAIAAAAIAAAAIAFAAIAAAAIAAAAg");
	this.shape.setTransform(3.3,76.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(41,146,183,0.725)").s().p("AAAAHIAAgYIAAAYIAAALIAAgLg");
	this.shape_1.setTransform(0,70.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(59,203,254,0.996)").s().p("AivF/IgBAAIgCgCQgZgIAAggIAAgLIAAgZIAAgqIAAhDIAAhDIAAhDIAAhCIAAhDIAAhDIAAhDIAAhDIAAhDIAAgBIAAgCIAAgBIAAgDQADgcAZgHIAhAhIAiAiIAiAiIAhAhIAhAhIAhAiIAiAiIAhAhIAhAhIAiAiIAiAiIAMAMIgNALIghAiIgiAiIghAiIghAhIgiAiIggAhIghAiIgiAhIgiAiIggAiIgiAhIAAABIAAAAIAAABg");
	this.shape_2.setTransform(20.5,38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(254,51,51,0.996)").s().p("AjzDAIgFAAIAAgBIAhghIAhgiIAigiIAhghIAigiIAhghIAhghIAhgiIAhgiIAhghIAigiIAMgNIABAAIAhAiIAiAhIAhAiIASASIgiATIgrAYIgsAXIgrAXIgrAYIgqAYIgsAXIgrAYIgrAYIgsAYIgrAYQgKAGgPACg");
	this.shape_3.setTransform(27.9,57.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(254,211,0,0.996)").s().p("Ag0BlIghgiIgighIghghIAAgBIAhghIAighIAhghIASgTIArAXIArAYIArAXIAsAYQAMAHACARQABAFgDAEQgJAQgRAIIgLAFIgsAYIgrAYIgqAYIgTAJIgSgSg");
	this.shape_4.setTransform(56.3,38.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(71,254,71,0.996)").s().p("ACDC/IgMgMIgigiIghghIgigiIggghIgigiIghggIgigiIghghIgigiIghghIgigiIADgBIAKAAIABAAQASAFAOAJIAKAGIAsAYIArAXIAsAYIArAYIAqAXIAsAYIArAYIAsAWIArAYIArAYIAKAFIgSATIgiAhIghAiIgiAhIAAABg");
	this.shape_5.setTransform(27.9,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol195, new cjs.Rectangle(0,0,71.7,76.6), null);


(lib.Symbol184 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhPCHQgPgGgKgKQgLgLgFgOQgFgPAAgRQAAgRAFgUQAEgRAJgRQAIgUAOgSQAOgUAUgSQATgSAagQIAMgGQAIgDAJAAQALgMASAAQAVAAAPAMQAOAKAKATIAGALIAEANIADANIABARQAAAWgHAXQgHAVgMAVQgNAVgSAUQgSAUgWAPQgOAKgRAGQgSAGgWABQgVAAgQgGgAA1hUQgCADgFACIgOAFQgIACgOAAQgJADgIAHQgJAHgJAIQgJAIgIAKQgIAKgGALQgHAIgFAKQgFAKgCAIIgCANIgBAKQAAAJADAIQACAIAFAFQAGAGAHADQAIADALAAQAVAAARgLQASgKAOgQQAOgPAJgSQAKgTADgOIAFgSQACgJAAgHQAAgHgDgGIgHgOIgFgKIgEgJIgFAGg");
	this.shape.setTransform(252.2,146.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgyCsQgOgHgJgLQgKgLgFgPQgFgOAAgRQAAgXAGgZQAFgZAGgWQgIgBgHgBIgNgFQgGgDgEgFQgEgFAAgGIABgGIADgIQACgDAEgDQADgDAEAAIAlAAQAFAAACgEIADgJIAHgbIAFgUIADgNIABgIIAAgHIAAgJIAAgDIAAgGIADgKQACgFAEgFQAEgEAJAAQAHAAAFADQAFADADAFQADAEACAHIABAMQAAAHgBAGIgTBMIAZgEIAXgFIAWgEIAQgEIALgCIAHgCIAJABIAIACQAEACACADQACADAAAFQAAAHgDAFQgCAFgEAEQgEADgGADIgKADIgLACIgQAEIgRAEIgSAEIgVAGIgOADIgKACIgHAAQgFAPgEAPIgGAcIgEAXIgBAQIABAOQABAHAEAFQADAFAGADQAFADAJAAQAOAAANgIQAOgIANgMQAMgNAMgOIAVgcQADgFAFAAIAEABIAFACIADADQACADAAADIAAADQgFARgJARIgTAiQgDAGgFAGIgMALIgNAKIgNAJQgKAGgNADQgLACgLAAQgSAAgOgGg");
	this.shape_1.setTransform(223.5,141.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgtCIQgFAAgEgCQgWgJgKgQQgKgQAAgXIABgUIAFgWQAFgVAKgWQAKgXAPgVQAOgWATgSQARgSAWgLQAHgFAJgBQAIgCAJAAQAJAAAIACQAIABAFAEQAGADADAHQADAGAAAIQAAAHgCAHQgBAHgEAFQgEAFgGAEQgGACgHAAQgGAAgFgCIgKgEIgFgEIgFgCQgLAFgJAIQgKAIgHAKQgJAKgHALIgMAWQgGALgEALQgEAKgCAKIgEAPIgBAPIABALIADAJQACADAFADQAEACAGAAQAJAAAKgDQAJgCAIgEQAJgDAJgGIARgKIAKgGIAKgHIAJgFQADgCADAAQAEABAEACQAEACAAAEQAAAEgCAFQgEALgGAIQgHAIgIAHIgRAMIgSAJQgRAKgRAEQgRAFgMgBIgJgBg");
	this.shape_2.setTransform(195.7,146.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgmB8QgJgBgKgCQgJgDgJgEQgKgFgHgIQgHgHgFgMQgEgLAAgQQAAgNADgPQgDgBgDgDQgDgDAAgGQAAgMAGgHQAGgIAKgDIAKgQIAPgXQAKgMAMgMQALgMAPgKQAOgKAQgGQAQgHATAAQAQAAALAEQAMAEAIAHQAIAHADAJQAEAKAAAKQAAAKgCAIQgEAQgKALQgLAMgOAIQgOAIgQAGIgiAJIgfAGIgaADQgDAFgBAIQgCAHAAAHQAAAQANAJQAMAJAWAAQANAAALgDQAMgDAKgFIAUgJIARgLIATgLQAJgFAGAAQAHAAACAEQACADAAAEIAAAEIgBAEQgBAHgEAHQgEAHgGAFQgdAXgeAJQgeAKghAAIgPgBgAAOhKQgMAGgJAJQgKAKgIALQgIAKgEAJQATgCARgDQAPgEAMgFQAMgGAIgHQAIgHACgIIAAgCIAAgDQAAgHgFgEQgGgEgHAAQgMAAgMAHg");
	this.shape_3.setTransform(170,147.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ah/DCIgFgGQgCgDgCgFIgBgIQAAgFABgEQACgDACgDQABgEADgBIAEgCIAPgEIAUgFIAWgKQALgGAMgJIAagXQAOgNALgRQANgRALgVQALgXAHgbIgMANIgOANIgQAPIgQAMIgQAJQgHAEgHAAQgTgBgNgHQgMgJgLgTQgDgFgCgJQgBgIgBgJQABgPABgOIAEgdIAGgfIAJglIAAgKIABgHIAAgEQABgFADgEQADgFAEgDQADgCAEgCIAIgCIAMABQAGACADADQAEAFADAHQACAIAAAHIgCAKQgDAHgEAIIgLApIgGAdIgDASIgBALQAAAOAFAJQAFAIAHAAIAJgBIALgGQAXgOAQgQQARgSAMgTQALgVAJgYQAIgZAIgdIACgEIAGgDIAGgCIAFgBQAPgBAIAJQAIAHAAANQAAAFgDALIgFAXIgHAYIgGAQIgMAmIgRAuQgHAVgJAUQgHASgLARQgKARgOAPQgPAQgTARQgUAPgcARQgRAKgPAHQgRAGgSAAQgEAAgEgCg");
	this.shape_4.setTransform(141.1,152.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AhPCHQgPgGgKgKQgLgLgFgOQgFgPAAgRQAAgRAFgUQAEgRAJgRQAIgUAOgSQAOgUAUgSQATgSAagQIAMgGQAIgDAJAAQALgMASAAQAVAAAPAMQAOAKAKATIAGALIAEANIADANIABARQAAAWgHAXQgHAVgMAVQgNAVgSAUQgSAUgWAPQgOAKgRAGQgSAGgWABQgVAAgQgGgAA1hUQgCADgFACIgOAFQgIACgOAAQgJADgIAHQgJAHgJAIQgJAIgIAKQgIAKgGALQgHAIgFAKQgFAKgCAIIgCANIgBAKQAAAJADAIQACAIAFAFQAGAGAHADQAIADALAAQAVAAARgLQASgKAOgQQAOgPAJgSQAKgTADgOIAFgSQACgJAAgHQAAgHgDgGIgHgOIgFgKIgEgJIgFAGg");
	this.shape_5.setTransform(112,146.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhpCAQgGgIAAgKIACgJIAIgrIAKguIAJgtIAIgqIAAgEIAAgFIABgRIADgQQADgKAEgEQADgDAJAAQAHAAAFADQAFADADAFQACAFABAHIABAOIAAAIIAAAIIAQgQQAIgJAJgHQAKgGALgFQAKgEAMAAIAKABIAJACIALAEQAGACAFAEQAJAHAHAKQAGAKAAALQAAAEgCAFIgEAJQgDAEgEACQgEADgFAAQgEAAgHgCQgHgDgEgEIgEgEIgEgGIgDgGIgDgDIgDgBIgDAAQgOAAgMAHQgNAHgKALQgLAKgJAMIgQAUIgMAvIgNA0IAAAHIgBAQQAAAJgDAGQgDAFgFADQgGACgIAAQgLAAgGgHg");
	this.shape_6.setTransform(87.4,146.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AiuDmQgEgDgCgEQgCgEgBgFIgCgKIAAgDIABgDQABgFACgEIAFgKIAFgNIAFgSIALgsIAIggIAJgmIALgiIANglIANgoQAHgVAGgWIAAgCQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgDAAQgHAAgEgCQgFgCgCgEQgDgDgBgEIgBgJQAAgMADgHQACgHAFgEQAEgEAGgCIAKgDIAJgCQAEgCACgDIAFgMQACgGADgGQAEgFAFgEQAFgEAJAAQAGAAAFAEIAIAIQADAFACAGIAFAKQAbABAVACIAfAEQAUAEAVAIQAUAIARAMQARAMAKARQALAQAAAVQAAALgDAMIgCAKQgCALgHAKQgHAKgJAIQgYAWgdAOQgdAPgfALQggAKggAHIhAAOIgIABQgGABgBADIgJAiIgGAbIgFAaIgHAdIgFAMQgEAHgFAGQgFAHgGAEQgGAFgIAAQgEAAgEgDgAATiRIgSABIgQACQgIABgDACIgCADIgBADIgGAPIgJAWIgJAZIgJAaIgIAYIgGASIgBAEIgCAGIgBAGIgBAEIABACIABABIAGgBIAKgCIANgCIAOgDIAlgJIApgNIAmgQQASgIAOgKQAPgKAJgKQAJgKAAgMQAAgGgBgGIgEgJQgJgOgMgHQgMgIgPgEQgOgEgQgBIgfgBIgMABg");
	this.shape_7.setTransform(57.5,138.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ag2C9QgFgCgEgFQgEgEgCgGQgCgFAAgEIAAgCIABgDIAIggIAKglIALgtIAOguIAMgxIACgDQABgDAEgCQADgDAEgCQADgCAHAAIAJACQAFAAADACIAFAFQACADAAAFIAAABIAAACIgHAdIgaBgIgZBjIgCADIgDAGIgFAEQgDACgDAAQgHgBgGgDgAATh/QgEgBgEgIIgEgGIgBgEIABgGIABgEIAFgOQADgIAKgHIAKgEIAJgCQADAAADABIAFAEIAFAGQAHABACAFQACAEAAAGIgBAIIgCAFQgBAGgEAGQgFAEgGADIgNAGIgLABQgGAAgEgCg");
	this.shape_8.setTransform(179.3,83.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AjzDLQgHgHAAgLIABgLQAFgVAKgZIAVg2QAMgbAPgcQAPgcAPgaQAQgbARgYQAQgYAQgUIAMgMQAHgIAJgIIASgQQAJgJAKgFQAJgIAJgDQAIgEAIAAQAKAAAJADQAIAEAHAHQAGAGADAJQAEAKAAALIgBAJIgCAJIgeCYIALgRIARgYIATgbIAUgcIASgYIANgSIAFgHIAMgOIAQgSIASgSQAKgJAKgIQAKgGAJgFQAKgEAIgBQAHAAAEAEQAFADADAEQACAFABAIIABANIgBAYIgFAVIgDAWIgGAhIgHAoIgHAqIgHAsIgHApIgGAhIgEAXIgDAKIgFANQgDAGgGAFQgGAFgIAAQgEAAgEgDQgEgDgDgFIgFgJIgCgJIA5kOIABgGIABgGIgBgGIgBgEIgCgFQgMAKgOAOQgOAOgPATQgOARgOAUQgPAUgNATIgVAhIgYAiIgXAjIgUAhQgDAHgFAMIgKAYQgGALgGAJQgGAIgJAAQgGAAgEgCQgEgCgDgDQgCgDgBgEQgCgEAAgGQAAgGACgGIACgMIAMgwIANgxIAOgzIAPg4IAEgTIAEgVIADgVIACgSQAAgIgCgDQgBgFgCAAQgKAAgLAIQgLAHgMAMQgLANgLAQQgMAQgKAQIgTAiIgPAcIgDAIIgHANIgLAWIgOAiIgUAxIgYBDQgDAGgGAFQgGADgHAAQgOABgGgJg");
	this.shape_9.setTransform(144.8,81.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(6.6,1,1).p("AF7xpQB6iYBIhQQBvh9BohXQBIhAA8gYAER0RQgYA1gJAcQgQAvgEAnQgEAzASAvQAHARAPAhQALAdgEAWQgCAIgFAQQgDAOAFAJQAIAPAVgBQARgBATgKQCZhNAsgXQAegPARgGQAbgKAXABAmcWyQhWkKACkQQABgXAEgMQAFgTANgJQASgOAeAJQAjAPASAFQAvAMAvgeQAtgeARgxQAchOgjh4Qgehng0hhQgPgcgNgPQgSgWgWgHQgWgGgcAGQgTAFgdANQhxA0h0AyQg5AagfASQgvAbgfAgQgjAlgNAxQgNA0AUAqAl/Y7QALAXAVAs");
	this.shape_10.setTransform(192.7,166.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol184, new cjs.Rectangle(0,-3.2,297.7,338.9), null);


(lib.Symbol183 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag0DRQgFgDgEgFQgDgFgCgFIgCgLIABgLIACgNIADgOIADgMIBFkXIACgVQACgLADgJQADgJAFgGQAFgGAIAAIAKABIAKAFIAIAHQADAEAAAFIgBAFIgBAFIhEERIgHAgIgEAYIAAAHIgBASQgBAJgDAJQgDAIgFAGQgGAFgIAAQgHAAgGgDg");
	this.shape.setTransform(132.5,220.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgmB8QgJgBgKgCQgJgDgJgEQgKgFgHgIQgHgHgFgMQgEgLAAgQQAAgNADgPQgDgBgDgDQgDgDAAgGQAAgMAGgHQAGgIAKgDIAKgQIAPgXQAKgMAMgMQALgMAPgKQAOgKAQgGQAQgHATAAQAQAAALAEQAMAEAIAHQAIAHADAJQAEAKAAAKQAAAKgCAIQgEAQgKALQgLAMgOAIQgOAIgQAGIgiAJIgfAGIgaADQgDAFgBAIQgCAHAAAHQAAAQANAJQAMAJAWAAQANAAALgDQAMgDAKgFIAUgJIARgLIATgLQAJgFAGAAQAHAAACAEQACADAAAEIAAAEIgBAEQgBAHgEAHQgEAHgGAFQgdAXgeAJQgeAKghAAIgPgBgAAOhKQgMAGgJAJQgKAKgIALQgIAKgEAJQATgCARgDQAPgEAMgFQAMgGAIgHQAIgHACgIIAAgCIAAgDQAAgHgFgEQgGgEgHAAQgMAAgMAHg");
	this.shape_1.setTransform(108.9,228.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AiWCyIABgKIAKgoIAIgjIAHgfIAGgfIAGgfIAIgkIANhAQADgQABgMIABgVIABgSQABgJADgFQACgGAFgDQAEgDAJAAQAMAAAHAEQAHADADAGQADAFABAHIABAPQAJgHAMgFQAMgFANgDQANgEAOgCQAOgCAMAAQAUAAAPAIQAOAGAKAMQAKAMAFAPQAFAPAAAQQAAATgGARQgGAQgLAPQgKAOgNANQgOALgRALIggATIgiAPQgLAFgKACQgJACgJAAQgLAAgKgCQgLgDgJgFQgGASgDARIgHAeIgDASIgEARIgDAQIgDAOQgBADgDACIgIAEIgJACIgIABQgUAAAAgQgAAxiHQgIABgIADQgIACgIAFIgRAKQgGAGgKAFQgJAFgLABIgcBrIAJABIAJACIAIABIAEABIALgBIANgEIALgFIALgFIAdgPQAPgKANgNQANgMAIgQQAJgPAAgTQAAgIgCgGQgCgHgEgFQgEgFgGgDQgGgDgJAAQgIAAgJACg");
	this.shape_2.setTransform(78.7,233.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AAiCAQgGgBgCgCQgDgCgBgDIgBgHQAAgHACgLQACgMAAgQIgUAQIgWARQgLAIgMAGQgMAFgKAAQgIAAgHgCQgIgDgFgEQgOgLgHgMQgGgLAAgQIABgOIAEgRQAKgqAaglQAZgkAlgaQAOgLAOgCQAPgDAOAAIAOABIAOABIAKgCIAJAAQAIAAAFACQAGACADAEQADADACAFIABAKQAAAHgCAHIgEANIgkCPIgCAVQgBAKgDAJIgBAGIgFAHIgGAGQgEACgHAAIgNgBgAAchUQgOAFgNAJQgLAJgMAMQgLALgJAOQgKAOgGANQgHAOgEAOIgCALQgBAHAAAHQAAAHACAGQACAGAIAAQALAAAKgFQAKgFAJgHQAMgKALgLIAXgZQALgNAIgNQAIgOAEgOIAEgSIABgTIgBgHQgCgDgFAAQgNAAgNAFg");
	this.shape_3.setTransform(50.1,228);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AiWCyIACgKIAJgoIAIgjIAGgfIAHgfIAHgfIAHgkIANhAQAEgQAAgMIACgVIABgSQAAgJACgFQADgGAFgDQAEgDAJAAQAMAAAHAEQAHADADAGQADAFABAHIABAPQAJgHAMgFQAMgFANgDQANgEAOgCQAOgCAMAAQAUAAAPAIQAPAGAJAMQAKAMAFAPQAFAPAAAQQAAATgGARQgGAQgLAPQgKAOgNANQgOALgRALIggATIgjAPQgKAFgJACQgLACgHAAQgMAAgKgCQgLgDgKgFQgFASgEARIgGAeIgDASIgEARIgEAQIgCAOQgBADgDACIgIAEIgIACIgJABQgUAAAAgQgAAxiHQgIABgIADQgIACgIAFIgRAKQgGAGgKAFQgJAFgMABIgbBrIAJABIAJACIAIABIADABIANgBIAMgEIALgFIALgFIAdgPQAPgKANgNQANgMAIgQQAJgPAAgTQAAgIgCgGQgCgHgEgFQgDgFgHgDQgGgDgIAAQgJAAgJACg");
	this.shape_4.setTransform(20,233.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag0DRQgFgDgEgFQgDgFgCgFIgCgLIABgLIACgNIADgOIADgMIBFkXIACgVQACgLADgJQADgJAFgGQAFgGAIAAIAKABIAKAFIAIAHQADAEAAAFIgBAFIgBAFIhEERIgHAgIgEAYIAAAHIgBASQgBAJgDAJQgDAIgFAGQgGAFgIAAQgHAAgGgDg");
	this.shape_5.setTransform(279.8,161.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgmB8QgJgBgKgCQgJgDgJgEQgKgFgHgIQgHgHgFgMQgEgLAAgQQAAgNADgPQgDgBgDgDQgDgDAAgGQAAgMAGgHQAGgIAKgDIAKgQIAPgXQAKgMAMgMQALgMAPgKQAOgKAQgGQAQgHATAAQAQAAALAEQAMAEAIAHQAIAHADAJQAEAKAAAKQAAAKgCAIQgEAQgKALQgLAMgOAIQgOAIgQAGIgiAJIgfAGIgaADQgDAFgBAIQgCAHAAAHQAAAQANAJQAMAJAWAAQANAAALgDQAMgDAKgFIAUgJIARgLIATgLQAJgFAGAAQAHAAACAEQACADAAAEIAAAEIgBAEQgBAHgEAHQgEAHgGAFQgdAXgeAJQgeAKghAAIgPgBgAAOhKQgMAGgJAJQgKAKgIALQgIAKgEAJQATgCARgDQAPgEAMgFQAMgGAIgHQAIgHACgIIAAgCIAAgDQAAgHgFgEQgGgEgHAAQgMAAgMAHg");
	this.shape_6.setTransform(256.2,170.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AAdCJQgFgFAAgIQAAgIADgLIAGgYIAKgdIAMgeIALgYIAJgZIAGgWQACgLAAgJQAAgIgDgHQgEgGgKAAQgKAAgLAEQgKAFgMAHIgXASIgYAUIgMAJQgFAFgFACQgEAGgEAKIgJAWIgIAZIgGAXIgCALIgCAMIgCANIgEAQQgCAFgDAEIgGAEIgGADIgFAAQgKAAgHgFQgGgFAAgOIAAgIIACgKIALgvIAMgmIALggIAMggIANghIAOgmQACgFAHgDQAHgDAIAAQAKAAAHAEQAHAFAAAJIgBADIgBAFIgNAcIAYgSQAMgJANgHQANgIANgEQAOgFAMAAQAbAAAOAPQAPAOAAAdQAAARgFAWIgPAtIgTA0QgLAbgJAcIgEANIgHAJQgDADgFABQgFABgHAAQgKAAgEgDg");
	this.shape_7.setTransform(199.5,169);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgmB8QgJgBgKgCQgJgDgJgEQgKgFgHgIQgHgHgFgMQgEgLAAgQQAAgNADgPQgDgBgDgDQgDgDAAgGQAAgMAGgHQAGgIAKgDIAKgQIAPgXQAKgMAMgMQALgMAPgKQAOgKAQgGQAQgHATAAQAQAAALAEQAMAEAIAHQAIAHADAJQAEAKAAAKQAAAKgCAIQgEAQgKALQgLAMgOAIQgOAIgQAGIgiAJIgfAGIgaADQgDAFgBAIQgCAHAAAHQAAAQANAJQAMAJAWAAQANAAALgDQAMgDAKgFIAUgJIARgLIATgLQAJgFAGAAQAHAAACAEQACADAAAEIAAAEIgBAEQgBAHgEAHQgEAHgGAFQgdAXgeAJQgeAKghAAIgPgBgAAOhKQgMAGgJAJQgKAKgIALQgIAKgEAJQATgCARgDQAPgEAMgFQAMgGAIgHQAIgHACgIIAAgCIAAgDQAAgHgFgEQgGgEgHAAQgMAAgMAHg");
	this.shape_8.setTransform(170.2,170.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAiCAQgGgBgCgCQgDgCgBgDIgBgHQAAgHACgLQACgMAAgQIgUAQIgWARQgLAIgMAGQgMAFgKAAQgIAAgHgCQgIgDgFgEQgOgLgHgMQgGgLAAgQIABgOIAEgRQAKgqAaglQAZgkAlgaQAOgLAOgCQAPgDAOAAIAOABIAOABIAKgCIAJAAQAIAAAFACQAGACADAEQADADACAFIABAKQAAAHgCAHIgEANIgkCPIgCAVQgBAKgDAJIgBAGIgFAHIgGAGQgEACgHAAIgNgBgAAchUQgOAFgNAJQgLAJgMAMQgLALgJAOQgKAOgGANQgHAOgEAOIgCALQgBAHAAAHQAAAHACAGQACAGAIAAQALAAAKgFQAKgFAJgHQAMgKALgLIAXgZQALgNAIgNQAIgOAEgOIAEgSIABgTIgBgHQgCgDgFAAQgNAAgNAFg");
	this.shape_9.setTransform(115.7,169.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("Ag2C+QgFgEgEgDQgEgFgCgFQgCgGAAgEIAAgDIAAgCIAJggIAJglIAMgtIAOgvIAMgvIACgEQACgDADgCQADgDAEgCQAEgCAGAAIAJABQAFABADACIAFAFQADADAAAFIAAABIgBACIgHAdIgaBgIgaBiIgBAFIgDAEIgFAFQgCABgFABQgGAAgGgDgAATh/QgEgCgFgHIgDgGIAAgEIAAgFIABgFIAFgOQADgIAKgHIAKgEIAJgDQADAAADACIAFAFIAFAFQAHACACADQACAFAAAGIgBAIIgBAGQgCAGgFAFQgEAEgGAEIgNAFIgMACQgFgBgEgCg");
	this.shape_10.setTransform(96.7,164.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgtCIQgFAAgEgCQgWgJgKgRQgKgPAAgXIABgUIAFgWQAFgVAKgWQAKgXAPgVQAOgWATgSQARgSAWgLQAHgFAJgCQAIgBAJAAQAJAAAIABQAIACAFAEQAGADADAHQADAGAAAIQAAAHgCAHQgBAGgEAGQgEAFgGADQgGADgHAAQgGAAgFgCIgKgEIgFgEIgFgCQgLAFgJAJQgKAHgHAKQgJAKgHALIgMAWQgGALgEALQgEAKgCAJIgEAQIgBAPIABALIADAJQACADAFADQAEACAGAAQAJAAAKgDQAJgCAIgEQAJgDAJgFIARgLIAKgGIAKgHIAJgFQADgCADAAQAEABAEACQAEACAAAEQAAAFgCADQgEALgGAJQgHAIgIAHIgRAMIgSAJQgRAKgRAEQgRAFgMgBIgJgBg");
	this.shape_11.setTransform(75.8,168.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag2C+QgGgEgEgDQgDgFgCgFQgCgGAAgEIAAgDIAAgCIAIggIAKglIANgtIAMgvIANgvIACgEQABgDADgCQADgDAFgCQADgCAHAAIAJABQAEABAEACIAGAFQACADgBAFIAAABIAAACIgIAdIgZBgIgaBiIgBAFIgDAEIgFAFQgCABgEABQgIAAgFgDgAATh/QgDgCgGgHIgDgGIgBgEIABgFIABgFIAFgOQADgIAJgHIALgEIAJgDQADAAADACIAFAFIAFAFQAHACACADQACAFAAAGIgBAIIgCAGQgBAGgFAFQgEAEgGAEIgNAFIgMACQgGgBgDgCg");
	this.shape_12.setTransform(58.8,164.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AAdCJQgFgFAAgIQAAgIADgLIAGgYIAKgdIAMgeIALgYIAJgZIAGgWQACgLAAgJQAAgIgDgHQgEgGgKAAQgKAAgLAEQgKAFgMAHIgXASIgYAUIgMAJQgFAFgFACQgEAGgEAKIgJAWIgIAZIgGAXIgCALIgCAMIgCANIgEAQQgCAFgDAEIgGAEIgGADIgFAAQgKAAgHgFQgGgFAAgOIAAgIIACgKIALgvIAMgmIALggIAMggIANghIAOgmQACgFAHgDQAHgDAIAAQAKAAAHAEQAHAFAAAJIgBADIgBAFIgNAcIAYgSQAMgJANgHQANgIANgEQAOgFAMAAQAbAAAOAPQAPAOAAAdQAAARgFAWIgPAtIgTA0QgLAbgJAcIgEANIgHAJQgDADgFABQgFABgHAAQgKAAgEgDg");
	this.shape_13.setTransform(34.3,169);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("Ag2C+QgGgEgEgDQgDgFgCgFQgCgGAAgEIAAgDIAAgCIAIggIAKglIANgtIANgvIAMgvIACgEQABgDADgCQADgDAFgCQAEgCAGAAIAJABQAEABAEACIAGAFQACADAAAFIAAABIgBACIgIAdIgZBgIgaBiIgBAFIgDAEIgFAFQgDABgEABQgGAAgGgDgAATh/QgDgCgGgHIgDgGIAAgEIAAgFIABgFIAFgOQADgIAJgHIALgEIAJgDQADAAADACIAFAFIAFAFQAHACACADQACAFAAAGIgBAIIgBAGQgCAGgFAFQgEAEgGAEIgNAFIgMACQgFgBgEgCg");
	this.shape_14.setTransform(13.7,164.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AhPCHQgPgGgKgKQgLgKgFgPQgFgPAAgRQAAgRAFgUQAEgRAJgRQAIgUAOgSQAOgUAUgSQATgSAagQIAMgGQAIgCAJgBQALgMASAAQAVAAAPAMQAOAKAKATIAGALIAEANIADANIABARQAAAWgHAXQgHAVgMAVQgNAVgSAUQgSATgWAQQgOAKgRAHQgSAFgWABQgVAAgQgGgAA1hUQgCADgFACIgOAFQgIACgOABQgJADgIAGQgJAGgJAJQgJAIgIAKQgIAKgGALQgHAJgFAJQgFAKgCAIIgCAMIgBALQAAAJADAIQACAIAFAGQAGAFAHADQAIADALAAQAVAAARgLQASgKAOgQQAOgPAJgTQAKgSADgOIAFgSQACgJAAgHQAAgHgDgGIgHgOIgFgJIgEgKIgFAGg");
	this.shape_15.setTransform(215.3,111.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgyCsQgOgHgJgLQgKgLgFgPQgFgOAAgRQAAgXAGgZQAFgZAGgWQgIgBgHgBIgNgFQgGgDgEgFQgEgFAAgGIABgGIADgIQACgDAEgDQADgDAEAAIAlAAQAFAAACgEIADgJIAHgbIAFgUIADgNIABgIIAAgHIAAgJIAAgDIAAgGIADgKQACgFAEgFQAEgEAJAAQAHAAAFADQAFADADAFQADAEACAHIABAMQAAAHgBAGIgTBMIAZgEIAXgFIAWgEIAQgEIALgCIAHgCIAJABIAIACQAEACACADQACADAAAFQAAAHgDAFQgCAFgEAEQgEADgGADIgKADIgLACIgQAEIgRAEIgSAEIgVAGIgOADIgKACIgHAAQgFAPgEAPIgGAcIgEAXIgBAQIABAOQABAHAEAFQADAFAGADQAFADAJAAQAOAAANgIQAOgIANgMQAMgNAMgOIAVgcQADgFAFAAIAEABIAFACIADADQACADAAADIAAADQgFARgJARIgTAiIgIAMIgMALIgNAKIgNAJQgKAGgNADQgLACgLAAQgSAAgOgGg");
	this.shape_16.setTransform(186.7,105.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgtCIQgFAAgEgCQgWgJgKgQQgKgQAAgXIABgUIAFgWQAFgVAKgWQAKgXAPgVQAOgWATgSQARgSAWgMQAHgEAJgBQAIgCAJAAQAJAAAIACQAIABAFAEQAGADADAGQADAGAAAJQAAAHgCAHQgBAHgEAFQgEAFgGAEQgGACgHAAQgGAAgFgBIgKgGIgFgDIgFgBQgLAEgJAIQgKAJgHAJQgJAKgHALIgMAWQgGALgEALQgEAKgCAKIgEAOIgBAQIABALIADAJQACADAFADQAEACAGAAQAJAAAKgDQAJgCAIgEQAJgDAJgGIARgKIAKgHIAKgGIAJgFQADgBADgBQAEABAEACQAEACAAAEQAAAFgCAEQgEALgGAIQgHAIgIAHIgRAMIgSAJQgRAKgRAEQgRAEgMAAIgJgBg");
	this.shape_17.setTransform(158.8,110.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgmB8QgJgBgKgCQgJgDgJgEQgKgFgHgIQgHgHgFgMQgEgLAAgQQAAgNADgPQgDgBgDgDQgDgDAAgGQAAgMAGgHQAGgIAKgDIAKgQIAPgXQAKgMAMgMQALgMAPgKQAOgKAQgGQAQgHATAAQAQAAALAEQAMAEAIAHQAIAHADAJQAEAKAAAKQAAAKgCAIQgEAQgKALQgLAMgOAIQgOAIgQAGIgiAJIgfAGIgaADQgDAFgBAIQgCAHAAAHQAAAQANAJQAMAJAWAAQANAAALgDQAMgDAKgFIAUgJIARgLIATgLQAJgFAGAAQAHAAACAEQACADAAAEIAAAEIgBAEQgBAHgEAHQgEAHgGAFQgdAXgeAJQgeAKghAAIgPgBgAAOhKQgMAGgJAJQgKAKgIALQgIAKgEAJQATgCARgDQAPgEAMgFQAMgGAIgHQAIgHACgIIAAgCIAAgDQAAgHgFgEQgGgEgHAAQgMAAgMAHg");
	this.shape_18.setTransform(133.1,112.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("Ah+DCIgGgGQgDgDAAgFIgCgIQAAgFACgEQAAgEADgDQACgCACgCIAEgCIAQgEIATgFIAVgKQAMgGANgJIAagXQANgNAMgRQAMgRALgVQALgXAHgbIgMANIgPANIgPAPIgPAMIgRAJQgIADgGABQgSgBgNgHQgNgJgLgTQgDgFgCgJQgBgIAAgJQAAgPABgOIAEgdIAHgfIAIglIABgKIAAgHIAAgEQABgFADgEQADgEADgDQAEgDAEgCIAJgCIALABQAFACAEADQAEAFADAHQACAIAAAHIgCAKQgDAHgEAIIgKApIgHAdIgDASIgBALQAAAOAFAJQAFAIAHAAIAKgBIAKgGQAXgOAQgQQARgSAMgTQALgVAJgYQAJgZAHgdIADgEIAEgDIAGgCIAHgBQAOAAAIAIQAIAHAAANQAAAFgCALIgHAXIgGAYIgFAQIgOAmIgPAuQgIAVgIAUQgJASgJAQQgLASgPAPQgOAQgTARQgUAPgcARQgQAKgRAHQgQAGgSABQgEgBgDgCg");
	this.shape_19.setTransform(104.3,117.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhPCHQgPgGgKgKQgLgKgFgPQgFgPAAgRQAAgRAFgUQAEgRAJgRQAIgUAOgSQAOgUAUgSQATgSAagQIAMgGQAIgCAJgBQALgMASAAQAVAAAPAMQAOAKAKATIAGALIAEANIADANIABARQAAAWgHAXQgHAVgMAVQgNAVgSAUQgSATgWAQQgOAKgRAHQgSAFgWABQgVAAgQgGgAA1hUQgCADgFACIgOAFQgIACgOABQgJADgIAGQgJAGgJAJQgJAIgIAKQgIAKgGALQgHAJgFAJQgFAKgCAIIgCAMIgBALQAAAJADAIQACAIAFAGQAGAFAHADQAIADALAAQAVAAARgLQASgKAOgQQAOgPAJgTQAKgSADgOIAFgSQACgJAAgHQAAgHgDgGIgHgOIgFgJIgEgKIgFAGg");
	this.shape_20.setTransform(75.2,111.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AhpCAQgGgIAAgKIACgJIAIgrIAKguIAJgtIAIgqIAAgEIAAgFIABgRIADgQQADgKAEgEQADgDAJAAQAHAAAFADQAFADADAFQACAFABAHIABAOIAAAIIAAAIIAQgQQAIgJAJgHQAKgGALgFQAKgEAMAAIAKABIAJACIALAEQAGACAFAEQAJAHAHAKQAGAKAAALQAAAEgCAFIgEAJQgDAEgEACQgEADgFAAQgEAAgHgCQgHgDgEgEIgEgEIgEgGIgDgGIgDgDIgDgBIgDAAQgOAAgMAHQgNAHgKALQgLAKgJAMIgQAUIgMAvIgNA0IAAAHIgBAQQAAAJgDAGQgDAFgFADQgGACgIAAQgLAAgGgHg");
	this.shape_21.setTransform(50.5,111.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AiWCyIACgKIAJgoIAIgjIAGgfIAHgfIAHgfIAHgkIANhAQAEgQAAgMIACgVIABgSQAAgJACgFQADgGAFgDQAEgDAJAAQAMAAAHAEQAHADADAGQADAFABAHIABAPQAJgHAMgFQAMgFANgDQANgEAOgCQAOgCAMAAQAUAAAPAIQAPAGAJAMQAKAMAFAPQAFAPAAAQQAAATgGARQgGAQgLAPQgKAOgNANQgOALgRALIggATIgjAPQgKAFgJACQgLACgHAAQgMAAgKgCQgLgDgKgFQgFASgEARIgGAeIgDASIgEARIgEAQIgCAOQgBADgDACIgIAEIgIACIgJABQgUAAAAgQgAAxiHQgIABgIADQgIACgIAFIgRAKQgGAGgKAFQgJAFgMABIgbBrIAJABIAJACIAIABIADABIANgBIAMgEIALgFIALgFIAdgPQAPgKANgNQANgMAIgQQAJgPAAgTQAAgIgCgGQgCgHgEgFQgDgFgHgDQgGgDgIAAQgJAAgJACg");
	this.shape_22.setTransform(20,117.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AAdCJQgFgFAAgIQAAgIADgLIAGgYIAKgdIAMgeIALgYIAJgZIAGgWQACgLAAgJQAAgIgDgHQgEgGgKAAQgKAAgLAEQgKAFgMAHIgXASIgYAUIgMAJQgFAFgFACQgEAGgEAKIgJAWIgIAZIgGAXIgCALIgCAMIgCANIgEAQQgCAFgDAEIgGAEIgGADIgFAAQgKAAgHgFQgGgFAAgOIAAgIIACgKIALgvIAMgmIALggIAMggIANghIAOgmQACgFAHgDQAHgDAIAAQAKAAAHAEQAHAFAAAJIgBADIgBAFIgNAcIAYgSQAMgJANgHQANgIANgEQAOgFAMAAQAbAAAOAPQAPAOAAAdQAAARgFAWIgPAtIgTA0QgLAbgJAcIgEANIgHAJQgDADgFABQgFABgHAAQgKAAgEgDg");
	this.shape_23.setTransform(250.7,52.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AAiCAQgGgBgCgCQgDgCgBgDIgBgHQAAgHACgLQACgMAAgQIgUAQIgWARQgLAIgMAGQgMAFgKAAQgIAAgHgCQgIgDgFgEQgOgLgHgMQgGgLAAgQIABgOIAEgRQAKgqAaglQAZgkAlgaQAOgLAOgCQAPgDAOAAIAOABIAOABIAKgCIAJAAQAIAAAFACQAGACADAEQADADACAFIABAKQAAAHgCAHIgEANIgkCPIgCAVQgBAKgDAJIgBAGIgFAHIgGAGQgEACgHAAIgNgBgAAchUQgOAFgNAJQgLAJgMAMQgLALgJAOQgKAOgGANQgHAOgEAOIgCALQgBAHAAAHQAAAHACAGQACAGAIAAQALAAAKgFQAKgFAJgHQAMgKALgLIAXgZQALgNAIgNQAIgOAEgOIAEgSIABgTIgBgHQgCgDgFAAQgNAAgNAFg");
	this.shape_24.setTransform(221.9,53.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhpCAQgGgIAAgKIACgJIAIgrIAKguIAJgtIAIgqIAAgEIAAgFIABgRIADgQQADgKAEgEQADgDAJAAQAHAAAFADQAFADADAFQACAFABAHIABAOIAAAIIAAAIIAQgQQAIgJAJgHQAKgGALgFQAKgEAMAAIAKABIAJACIALAEQAGACAFAEQAJAHAHAKQAGAKAAALQAAAEgCAFIgEAJQgDAEgEACQgEADgFAAQgEAAgHgCQgHgDgEgEIgEgEIgEgGIgDgGIgDgDIgDgBIgDAAQgOAAgMAHQgNAHgKALQgLAKgJAMIgQAUIgMAvIgNA0IAAAHIgBAQQAAAJgDAGQgDAFgFADQgGACgIAAQgLAAgGgHg");
	this.shape_25.setTransform(198.4,52.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AheC+IgFgDIgEgFQgBgDAAgFIAAgGIAFgOQADgGAEgEQAFgEAIgCIAVgGIAPgDQAHgCAFgDQAOgNAKgNQAIgNAHgOQAHgOAEgPIAJgeIADgLIADgMIgWASQgLAJgLAHQgMAHgMAEQgMAFgMAAQgHAAgJgFQgJgEgIgHQgIgHgFgJQgGgJAAgKQAAgHACgIIADgNQAEgSAJgRQAIgRAMgQQALgPANgOQAOgOAOgLQASgPARgHQASgGAUAAIARABQAIAAAHADQAGADAGAFQAGAFAFAIIACAFIABAEIgBALIgEAVIgEAdIgGAfIgGAgIgGAbQgFAVgHAXQgHAXgKAWQgKAWgNATQgOAUgRAOQgRAPgXAJQgWAIgcAAIgFgBgAAliVQgJAEgJAGQgKAHgJAJIgRASIgQARIgKAOQgGAJgFAKQgFAJgDAMIgBAHIgBAGQAAAGACAEQACAFAGAAQAJAAAMgGQANgHAMgKQALgKALgLQAKgMAHgKIAHgMIAJgQIAIgSQAEgJAAgHQAAgFgBgEIgEgLIgCAAQgHAAgIAFg");
	this.shape_26.setTransform(170.9,59.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhPCHQgPgGgKgKQgLgKgFgPQgFgOAAgSQAAgSAFgTQAEgRAJgRQAIgTAOgUQAOgSAUgTQATgTAagPIAMgFQAIgDAJgBQALgMASAAQAVABAPAKQAOALAKATIAGAMIAEAMIADAOIABAQQAAAWgHAXQgHAUgMAWQgNAVgSAUQgSAUgWAPQgOAKgRAHQgSAFgWAAQgVABgQgGgAA1hUQgCADgFADIgOADQgIACgOACQgJADgIAGQgJAHgJAIQgJAIgIAKQgIAKgGALQgHAIgFALQgFAJgCAJIgCALIgBALQAAAJADAIQACAHAFAHQAGAFAHADQAIADALAAQAVAAARgKQASgLAOgQQAOgPAJgTQAKgSADgPIAFgSQACgIAAgHQAAgHgDgGIgHgOIgFgJIgEgKIgFAGg");
	this.shape_27.setTransform(115.8,52.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhrDTQgMgEgJgIQgKgJgEgNQgGgNAAgRIAAgNIADgOQADgOAHgPQAFgPAJgOQAJgPAMgNQAMgOAQgNQALgIAMgHQANgIAMgGQAMgGANgDQAMgEANAAQAIAAAHACIAOAEIAPgzQALgqAShLQACgHAGgFQAFgFAIAAQAFAAAFABQAGABAEADQAEADACAFQADAEAAAIIg3DbIgFAZIgEAhIgDAjIgBAdQAAAPgEAQIgDALQgCAEgCADQgDADgFABIgMABQgHAAgFgBQgFgCgCgDQgBgDgBgDIgBgIIAAgJQgBgFgBgEIgJAGIgMAHIgKAHIgIAFIgOAHIgRAIIgTAFQgLACgKAAQgLAAgMgEgAAMAMQgMADgOAHQgOAHgNAKQgNAKgMAMQgLAMgJAPQgIAOgDAQQgDAIAAAIQAAAIACAHQABAHAEAFQADAFAGAEQAGADAKAAQAGAAAGgCIANgFIALgGIAJgGIATgNQAJgHAGgHQAIgIAFgJQAFgKADgMIAGgUIADgSIADgRIADgUIgDgDQgDgCgFAAQgKAAgOAEg");
	this.shape_28.setTransform(87.2,44.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhPCHQgPgGgKgKQgLgKgFgPQgFgOAAgSQAAgSAFgTQAEgRAJgRQAIgTAOgUQAOgSAUgTQATgTAagPIAMgFQAIgDAJgBQALgMASAAQAVABAPAKQAOALAKATIAGAMIAEAMIADAOIABAQQAAAWgHAXQgHAUgMAWQgNAVgSAUQgSAUgWAPQgOAKgRAHQgSAFgWAAQgVABgQgGgAA1hUQgCADgFADIgOADQgIACgOACQgJADgIAGQgJAHgJAIQgJAIgIAKQgIAKgGALQgHAIgFALQgFAJgCAJIgCALIgBALQAAAJADAIQACAHAFAHQAGAFAHADQAIADALAAQAVAAARgKQASgLAOgQQAOgPAJgTQAKgSADgPIAFgSQACgIAAgHQAAgHgDgGIgHgOIgFgJIgEgKIgFAGg");
	this.shape_29.setTransform(55.6,52.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhgDHQgFgDgDgFQgDgFgBgGQgBgGABgGQALgtANguIAZhaIAJgjIAHgcQADgMABgLIABgTIAAgDIAAgGIgMAEIgWAIIgbALQgOAFgMAHIgQAIIgLAFIgJADIgIAAQgIAAgGgHQgGgGAAgLIABgKQABgEADgEQACgDAFgDIAKgHQBFgkBHgRQBGgRBHAAIAOAAIARABIAQACIAOAEQAGABAFAGQAEAGAAAHIgBAKQgBAGgCADQgDAFgDACQgFACgFAAIgXgCIgZgCIg0ABQgZABgbAHIgCADIgBAFIgCAaIgEAXIgHAYIgJAfIgNAqIgQA+IgNA1QgFASgCAOIgFAeQgBAEgHAEQgHAEgKAAQgGAAgEgDg");
	this.shape_30.setTransform(30.5,44.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#999999").ss(6.6,1,1).p("AvgnUIgDASIiRLmQgGAdAAATQAAAbALATQAOAYAjALQAYAHAqADQH6AXFaAJQHOALGEgJQBrgDA+gOQBdgVA1g0QAvguAZhPQAQg0AMhdQAfj9ATkDQwrhawzAvAtSikQAJgWAqAIQA5AIBSAWQAZAJAGACQARAIAMAKQALALAUAbQAMARAcAhQAVAegFAaQgBANgKAOQgGAIgOAQQgiAkgXARQgjAZghABQgQAAgTgFQgIgCgagIIgzgTArjiLQhGDxgYD2AlMjKQgQBAgfB+QgMAxgLAcQgHATgSAmQgSAlgIATQgaBLATAwQB/gEBngOAhECYQAgisBmiPQAmg0AmgkQAzgtApAOQAWAJAXAnQApBGAOBFQAPBRgZBAQgKAYgYAuQgTApAGAfAAJgJQASgUAnAFQANABAVAFQAYAGAKABQAaAGAtACQBKAEAhABAOkjBQgzAugyBBQglAxgwBLQhKB2hLCDAHOiaQATgKAXAIQAWAIAKAUQACAGAEANQAEALAFAGQACADAPAKIAeAQQAsAWAUAOQAmAZAoAo");
	this.shape_31.setTransform(125.5,322.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol183, new cjs.Rectangle(0,0,297.7,373.1), null);


(lib.Symbol182 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAcBpIgHgCQgCgCgBgCIgBgGQAAgGACgJQACgKAAgNIgRANIgRAOQgKAHgKAEQgJAFgJAAQgGAAgGgCQgGgCgFgEQgMgJgFgJQgFgKAAgMQAAgGABgGIADgOQAIgjAVgeQAVgeAfgVQALgJAMgCQALgCAMAAIAMAAIALACIAJgCIAHAAQAGAAAFABQAEACADADIAEAHIABAIQAAAGgCAGIgDAKIgeB2IgBARIgDAPIgCAGIgDAFQgCADgEACQgDACgFAAIgLgBgAAXhFQgMAEgKAHQgJAIgKAKQgJAJgIALQgHALgGALQgFAMgDALIgCAJIgBAMQAAAGACAFQACAFAGAAQAJAAAIgEQAIgFAIgGQAJgHAJgKQAKgKAJgLQAJgJAHgMQAHgLADgLIADgPIABgQQAAgDgBgCQgCgDgDAAQgLAAgLAEg");
	this.shape.setTransform(200,86.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgeBmIgQgDQgIgCgIgEQgHgEgGgGQgGgGgDgKQgEgIgBgNQABgLADgNQgDAAgDgDQgDgDABgFQAAgKAEgFQAGgHAIgCIAIgNIAMgSIASgUQAKgLAMgHQAMgJAMgFQAOgGAPAAQANAAAJAEQAKADAHAGQAGAFADAIQADAHAAAJQAAAJgCAHQgDAMgIAJQgJAKgLAHQgMAGgNAEQgOAGgOACIgZAGIgWACIgEAKIgBAMQAAANALAIQAJAGATABQAKAAAJgDQAKgCAIgEIAQgIIAPgIIAPgJQAIgFAFAAQAGAAABAEQABACABADIAAAEIAAACQgCAGgDAGQgEAGgFAEQgXATgZAHQgZAJgagBIgMAAgAAMg9QgKAFgHAIQgIAIgHAIIgKAQQAQAAANgDQANgDAKgFQAKgFAGgFQAGgHACgGIABgCIAAgCQAAgGgFgDQgFgDgGAAQgJAAgKAFg");
	this.shape_1.setTransform(177.2,86.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhYCtQgJgDgIgHQgHgHgFgLQgEgKAAgPIAAgKIACgLQADgMAFgNQAFgMAHgMQAHgLAKgMQAKgLANgLIATgMQAKgGALgFQAKgFAJgDQALgDAKAAQAHAAAGACQAGABAFACIAMgqQAKgiAOg+QACgGAFgEQAEgEAHAAIAIABQAFABADACQADACACAEQACAEAAAHIgtCzIgEAVIgDAbIgCAdIgBAYQAAAMgDANIgDAJIgEAGQgCACgEABIgJABQgHAAgEgBQgDgBgCgDQgCgCAAgDIAAgHIgBgHIgCgHIgHAFIgKAGIgIAFIgGAEIgMAGIgOAGQgHADgJACQgIACgIAAQgKAAgKgEgAAKAKQgKACgLAGQgLAGgLAIQgLAIgJAKQgKAKgHAMQgHAMgDANQgCAHAAAGIABAMQACAGADAEQADAEAFADQAFADAIAAIAKgCIAKgEIAJgFIAIgEIAQgLIAMgMQAGgGAEgIQAEgIADgKIAEgQIADgPIACgOIADgRIgDgCQgCgCgEAAQgJAAgLAEg");
	this.shape_2.setTransform(154.7,78.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgsCbQgFgCgDgDIgFgIIgBgIIAAgCIAAgCIAHgaIAIgfIAKglIALgmIAKgoIABgDIAEgDIAGgFQADgBAFAAIAIABIAGACIAFAFQABACAAAEIAAABIAAABIgGAYIgVBPIgVBRIgBADIgDAEIgDAEQgDABgDAAQgGAAgEgDgAAQhoQgDgCgFgFIgCgGIgBgDIABgFIAAgDIAEgLQADgHAIgGIAJgDIAHgCIAFACIAEADIAEAFQAGAAABAEQACAEAAAEIgBAHIgBAEQgBAGgEADIgJAHQgFADgFACIgJABQgGAAgCgCg");
	this.shape_3.setTransform(136.5,82.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag2B2IgJgEIgKgFIgHgFQgMgMgFgOQgGgPAAgOQAAgJACgIIADgQIAEgPIADgLIAIgeIAGgWIAEgRIADgMIADgGIAEgEQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIACgBIAGABIAHABIAHABQAGAAACAFQADAEAAAHIgCAJIgNAxIgLAiIgHAYQgCAJAAAFIABAKQABAGADAFQACAFAEAEQAEADAFAAQAKAAAJgGQAKgGAJgIIAPgSIALgRIAGgKQAFgKAFgLIAIgYIAGgYIAEgRIAGgeQABgJAEgDQAEgDAJAAQAFAAAFABQAEABADAEQAEADABAFQACAFAAAJQAAAJgDAOIgHAcIgEASIgEATIgDARIgBAPIABAXIABAYIAAAKIgBAHQgDAJgEAEQgEAEgJAAQgHAAgEgBQgDgCgCgCQgDgDAAgDIgBgGIgDgqIgCAAIgQAVQgJAMgKAKQgKAKgMAHQgNAHgOAAIgIgBg");
	this.shape_4.setTransform(293.8,43.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgpCOQgMgGgHgJQgIgJgEgMQgEgMAAgOQAAgTAFgVIAJgnQgHAAgGgBIgLgEQgEgDgEgDQgDgEAAgFIABgGIADgGIAEgEQADgDADAAIAfAAQADAAACgEIADgHIAFgWIAFgQIACgLIABgHIAAgGIAAgHIAAgDIAAgEIADgIQABgEADgFQAEgDAHAAQAGAAAEACQADADADAEQADAEABAFIACAKIgBALIgQA+IAUgEIATgDIASgEIANgDIAKgCIAFgBIAIABIAGABIAFAFQACACAAAEQAAAFgDAEQgBAFgEADIgIAFIgIACIgJACIgNAEIgPACIgOAEIgRAFIgMACIgIACIgFAAIgIAYIgFAYQgDAKAAAJIgBAMQAAAHABAGQABAFACAEQADAEAFACQAFADAGAAQANAAAKgHQALgGALgLQAKgKAKgLIAQgXQAEgEADAAIAEABIADABIAEADIABAEIgBADQgDAOgIAOIgPAcQgCAFgFAEIgJAKIgLAIIgLAHQgJAGgKACQgJABgJAAQgPAAgLgEg");
	this.shape_5.setTransform(269.4,39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AAXBwQgDgDAAgIQAAgGACgJQABgJAEgLIAIgXIAKgZIAJgUIAHgUIAGgSQACgJAAgIQAAgHgDgFQgEgFgIAAQgIAAgJAEQgJADgKAHIgSAOIgUAQIgJAIQgEAEgFABQgEAGgDAIQgDAHgEAKIgGAVIgFATIgCAJIgBAKIgCALIgEANQgBAEgCADIgGAEIgEABIgFABQgIAAgFgEQgGgEAAgMIAAgHIACgHIAJgnIAJggIAKgaIAKgaIALgbIALgfQACgEAGgDQAFgCAHAAQAIAAAGADQAGAEgBAHIAAADIgCAEIgKAXIAUgPQAKgHALgGQAKgGALgEQALgDAKAAQAWAAAMALQAMAMAAAYQAAAOgEASIgMAlIgQAqQgJAXgHAXIgEAKIgFAHQgDADgEABQgEABgGAAQgIAAgEgDg");
	this.shape_6.setTransform(221.2,43.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgfBmIgPgDQgIgCgHgEQgIgEgGgGQgGgGgEgJQgEgKAAgNQAAgKADgNQgDAAgCgDQgDgDAAgFQABgJAEgGQAFgHAJgCIAIgOIANgSIARgTQAKgLAMgHQAMgJAMgFQAOgGAPABQANgBAKAEQAJADAGAFQAHAGADAIQADAIAAAIQAAAIgCAHQgDANgJAJQgIAJgMAIQgMAGgNAFQgOAEgNADIgZAFIgWADIgDAKQgCAGAAAGQAAANALAHQAJAIATAAQAKgBAJgCQAKgCAJgEIAQgIIANgJIAQgJQAIgDAFAAQAFAAACADQABACAAAEIAAADIAAACQgBAHgDAFQgDAGgGAFQgXASgYAIQgaAHgaAAIgNAAgAAMg9QgKAFgHAIQgIAIgHAIIgLAQQARgBAOgCQAMgDAKgFQAKgFAGgFQAGgHACgGIAAgCIAAgCQAAgGgEgDQgFgDgGAAQgKAAgJAFg");
	this.shape_7.setTransform(197.1,44.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AAcBpIgHgCQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgBgGQAAgGACgJQACgKAAgNIgRANIgRAOQgKAHgKAEQgJAFgJAAQgGAAgGgCQgGgCgFgEQgMgJgFgJQgFgKAAgMIABgMIADgOQAIgjAVgeQAVgeAfgVQALgJAMgCQALgCAMAAIAMAAIALACIAJgCIAHAAQAGAAAFABQAEACADADIAEAHIABAIQAAAGgCAGIgDAKIgeB2IgBARIgDAPIgCAGIgDAFQgCADgEACQgDACgFAAIgLgBgAAXhFQgMAEgKAHQgJAIgKAKQgJAJgIALQgHALgGALQgFAMgDALIgCAJIgBAMQAAAGACAFQACAFAGAAQAJAAAIgEQAIgFAIgGQAJgHAJgKQAKgKAJgLQAJgJAHgMQAHgLADgLIADgPIABgQQAAgDgBgCQgCgDgDAAQgLAAgLAEg");
	this.shape_8.setTransform(152.3,44.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AhGCjQgEgCgDgEIgFgHIgBgJIAAgCIAAgCIAHgaIAHgeIALglIALgnIAKgnIABgDIAEgEIAGgEQAEgBAFAAIAHABIAHACIADAEQACADAAADIAAACIAAABIgFAYIgWBPIgVBRIgBADIgDAEIgEADQgCACgDAAQgGAAgFgDgAgbhYQgCgCAAgEQAAgFACgDIAFgHIAGgGIAGgEIARgKIAUgNIAUgLIAQgIQAHgEAEAAQAFAAADADQADADAAAGIAAACIAAACQgDAKgGAGQgGAGgJAEIhGAjQgDADgHAAQgGAAgCgDg");
	this.shape_9.setTransform(139.2,39.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhcCrQgEgCgDgEIgGgIQgBgFAAgGIABgIIACgLIADgJIADgNIACgQIADgQIACgPIABgLIgBgEQAAgDgFgBIgJgDQgFgBgEgEQgFgDABgHQAAgGACgGQADgFAFgCQAFgCAGAAIANgCQADAAACgEIACgHIAGgWQADgNAFgMIAJgYQAEgMAHgKQAKgOALgMQAMgMAMgJQANgJAPgFQAPgFARAAQATAAANAHQAMAHAJANQABADABAEIAAAGQAAAGgBAGQgBAFgEAEQgDAEgDACQgFACgDAAQgHAAgDgCQgDgDgDgDIgDgIIgDgIIgDgGQgDgDgFAAIgKABQgFABgFADQgOAHgMAJQgLAJgJAOQgKANgJAUQgJAUgHAdIAAABIAAABIACAAIAMAAIANgCIALgCIANgBIAKABIAHACIAFAEQACACAAAEIgBAHQAAAEgCADIgEAHQgCADgEAAIgPADIgOABIgTADIgXAGIgHAeIgDAeIgEAeIgFAeIgDAFIgDAGIgGAEIgGABQgGAAgEgCg");
	this.shape_10.setTransform(125.9,39.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AAXBwQgDgDAAgIQAAgGACgJQABgJAEgLIAIgXIAKgZIAJgUIAHgUIAGgSQABgJAAgIQAAgHgCgFQgEgFgIAAQgIAAgJAEQgJADgKAHIgSAOIgUAQIgJAIQgFAEgEABQgDAGgEAIQgDAHgDAKIgHAVIgFATIgCAJIgBAKIgCALIgEANQgBAEgCADIgGAEIgEABIgFABQgIAAgFgEQgGgEAAgMIAAgHIACgHIAJgnIAJggIALgaIAJgaIALgbIALgfQACgEAGgDQAFgCAHAAQAIAAAGADQAGAEgBAHIAAADIgCAEIgKAXIAUgPQAKgHALgGQAKgGALgEQALgDAKAAQAWAAAMALQANAMAAAYQgBAOgEASIgMAlIgQAqQgJAXgHAXIgEAKIgFAHQgDADgEABQgEABgGAAQgIAAgEgDg");
	this.shape_11.setTransform(98.5,43.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AhBBvQgMgFgIgJQgJgIgEgMQgEgMAAgOQAAgPAEgQQADgNAIgPQAGgPAMgQQALgQARgPQAPgPAWgNIAJgEQAGgDAIAAQAJgJAOAAQASAAAMAJQANAIAHAQIAFAJIAEAKIACAMIABANQgBASgFASQgGASgKARQgLASgOAQQgPAQgSANQgMAJgOAFQgOAEgTAAQgRAAgNgEgAAshFIgGAEIgLAEIgTACQgHADgGAFQgIAFgIAHIgNAPQgHAIgFAJIgKAPQgDAIgCAHIgCAKIgBAJQAAAHACAHQADAGADAFQAFAEAGADQAHACAJAAQARAAAOgIQAOgJAMgNQAMgNAHgPQAIgPADgLIADgPIACgNQAAgGgCgFIgFgLIgFgIIgDgIIgEAFg");
	this.shape_12.setTransform(73.7,43.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhCCXIgLgGIgJgHIgHgHQgNgPgGgPQgGgPAAgSQAAgNADgRQAEgQAHgQQALgVANgUQANgUAOgRQAOgRAOgNQAOgNALgHIARgKIASgKIASgIQAKgDAJAAQAKAAAIAEQAJAEAGAHQAHAGADAJQAEAJAAAKIAAALIgDAFQgCACgCABIgHAAQgEAAgDgCQgDgCgBgDQgCgDgBgEIgCgGIgDgFQgCgDgEAAQgJAAgKAEQgKAEgLAHQgLAHgLAJIgUARIgTASIgOAQIgQAXQgIALgFAMQgGAMgDANQgCANAAAOQAAALADAIQADAIADAGQAEAGAHADQAGADAJAAQATAAAQgEQAPgEAPgGQAPgGAOgIIAegSIAFAAIAGACIAGAEIADAFIACAHQAAAHgGAIQgGAHgJAHQgJAGgLAGIgXAKIgVAIIgQAEIgIADIgLACIgPABIgWABQgIAAgHgDg");
	this.shape_13.setTransform(49,38.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AAeByIgHgCIgEgEIAAgHIABgRQACgKAAgOIgSAOIgTAQQgKAHgKAEQgLAFgJABQgHgBgHgCQgGgCgFgDQgNgKgFgLQgHgKAAgOIABgNIAEgOQAJgmAXghQAWghAigXQAMgJAMgDQANgCANAAIANABIAMABIAJgCIAIAAQAHAAAFABQAFACADAEQADADACAFIABAJQAAAFgDAHIgDALIghB/IgBAUIgDAQIgCAGIgEAHIgFAEQgEACgGABIgMgCgAAZhLQgNAFgLAIQgKAHgKAMQgLAKgHAMQgJAMgGAMQgGAMgDANIgCAKIgBAMQAAAHACAFQABAGAIgBQAJABAJgFQAKgFAHgGIAUgTIAVgWQAJgMAIgMQAHgMAEgMIADgQIABgRQABgDgCgDQgBgEgFABQgMAAgLAEg");
	this.shape_14.setTransform(290.2,285.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AguC7QgFgDgDgFIgFgJIgCgJIABgKIACgLIADgNIACgLIA+j5IACgSQABgKADgJQADgHAEgGQAEgGAIAAIAJACIAJAEIAGAGQAEAEAAAEIgBAFIgBAFIg8D0QgFAOgCAOIgDAVIAAAGIgBAQQgCAIgCAIQgDAIgFAFQgEAEgIAAQgGAAgFgCg");
	this.shape_15.setTransform(274,278);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhdByQgGgGAAgKIABgIIAIgmIAIgpIAJgpIAHgkIAAgFIAAgEIABgPIACgOQADgJAEgEQADgDAHAAQAIAAADADQAFADADAEQACAFAAAGIABANIAAAHIgBAGIAQgOQAHgHAIgHQAIgFAKgEQAKgEAKAAIAIABIAJACIAJADQAGACAEAEQAIAFAHAKQAEAJAAAKIgBAIIgDAHIgGAGQgEACgFAAQgEAAgGgCIgJgFIgDgFIgEgFIgDgEIgCgEIgDAAIgCgBQgNAAgMAHQgKAGgJAKQgKAJgIAKIgPATIgLApIgLAvIAAAGIgBAOQAAAIgCAGQgEAEgEADQgGACgGAAQgKAAgFgHg");
	this.shape_16.setTransform(256.7,284.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AAeByIgHgCIgEgEIAAgHIABgRQACgKAAgOIgSAOIgTAQQgKAHgKAEQgLAFgJABQgHgBgHgCQgGgCgFgDQgNgKgFgLQgHgKAAgOIABgNIAEgOQAJgmAXghQAWghAigXQAMgJAMgDQANgCANAAIANABIANABIAJgCIAHAAQAHAAAFABQAFACADAEQADADABAFIACAJQgBAFgCAHIgDALIghB/IgBAUIgDAQIgCAGIgEAHIgFAEQgEACgGABIgMgCgAAZhLQgMAFgMAIQgKAHgKAMQgLAKgHAMQgJAMgGAMQgGAMgDANIgCAKIgBAMQAAAHACAFQABAGAIgBQAKABAJgFQAJgFAHgGIAUgTIAVgWQAKgMAHgMQAHgMAEgMIAEgQIAAgRQAAgDgBgDQgBgEgFABQgMAAgLAEg");
	this.shape_17.setTransform(232.1,285.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AguC7QgFgDgDgFIgFgJIgCgJIABgKIACgLIADgNIACgLIA+j5IACgSQABgKACgJQADgHAFgGQAEgGAIAAIAJACIAJAEIAGAGQAEAEAAAEIgBAFIgCAFIg7D0QgFAOgCAOIgDAVIAAAGIgCAQQgBAIgCAIQgDAIgFAFQgEAEgIAAQgGAAgFgCg");
	this.shape_18.setTransform(215.9,278);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AguC7QgFgDgDgFIgFgJIgCgJIABgKIACgLIADgNIACgLIA+j5IACgSQABgKACgJQADgHAFgGQAEgGAIAAIAJACIAJAEIAGAGQAEAEAAAEIgBAFIgCAFIg7D0QgFAOgCAOIgDAVIAAAGIgCAQQgBAIgCAIQgDAIgFAFQgEAEgIAAQgGAAgFgCg");
	this.shape_19.setTransform(203.3,278);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhHB4QgOgEgIgKQgKgKgEgMQgFgNABgQQgBgQAFgRQAEgPAHgPQAIgRANgRQAMgRARgRQASgQAWgOIALgFQAIgCAHgBQAKgKAQAAQATgBAOAKQAMAKAJARIAFAKIAEALIADAMIABAPQAAATgHAVQgGATgLASQgMATgQASQgPARgUAOQgNAKgPAFQgQAFgUABQgTAAgOgGgAAvhLQgCADgEACIgMADIgUAEQgIACgIAGQgHAFgIAIIgPAQQgIAJgGAJIgKARQgEAJgBAHIgDALIgBAKQAAAHADAIQACAHAEAFQAFAFAHADQAHACAKAAQASAAAPgJQARgKAMgOQANgOAIgQQAJgRACgMIAFgQIABgPQAAgFgCgGIgGgMIgFgJIgDgJIgFAGg");
	this.shape_20.setTransform(181.5,284.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AhdByQgGgGAAgKIABgIIAIgmIAIgpIAJgpIAHgkIAAgFIAAgEIABgPIACgOQADgJAEgEQADgDAHAAQAIAAADADQAFADACAEQADAFAAAGIABANIAAAHIgBAGIAPgOQAIgHAIgHQAIgFAKgEQAKgEAKAAIAIABIAJACIAKADQAFACAEAEQAJAFAGAKQAEAJAAAKIgBAIIgDAHIgGAGQgEACgFAAQgEAAgFgCIgKgFIgDgFIgEgFIgDgEIgCgEIgDAAIgCgBQgNAAgMAHQgKAGgJAKQgKAJgIAKIgPATIgLApIgLAvIAAAGIgBAOQAAAIgCAGQgEAEgEADQgGACgGAAQgKAAgFgHg");
	this.shape_21.setTransform(159.5,284.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AheByQgEgGgBgKIACgIIAHgmIAIgpIAJgpIAHgkIAAgFIAAgEIABgPIACgOQADgJAEgEQADgDAHAAQAHAAAFADQAEADACAEQADAFABAGIAAANIAAAHIAAAGIAOgOQAIgHAHgHQAKgFAJgEQAJgEALAAIAIABIAIACIAKADQAGACAEAEQAJAFAFAKQAFAJABAKIgCAIIgEAHIgGAGQgDACgFAAQgDAAgHgCIgKgFIgCgFIgEgFIgDgEIgCgEIgDAAIgDgBQgMAAgLAHQgLAGgKAKQgJAJgIAKIgOATIgLApIgNAvIAAAGIAAAOQAAAIgCAGQgEAEgFADQgEACgHAAQgKAAgGgHg");
	this.shape_22.setTransform(138.2,284.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AAeByIgHgCIgEgEIAAgHIABgRQADgKAAgOIgSAOIgUAQQgKAHgLAEQgKAFgJABQgIgBgGgCQgHgCgEgDQgNgKgGgLQgFgKgBgOIACgNIADgOQAJgmAXghQAXghAhgXQAMgJANgDQAMgCANAAIANABIAMABIAJgCIAIAAQAIAAAEABQAFACADAEQADADACAFIABAJQAAAFgCAHIgEALIggB/IgCAUIgDAQIgCAGIgDAHIgGAEQgEACgGABIgMgCgAAZhLQgMAFgMAIQgKAHgKAMQgLAKgHAMQgJAMgGAMQgGAMgDANIgCAKIgBAMQAAAHABAFQADAGAGgBQALABAIgFQAKgFAHgGIAUgTIAVgWQAKgMAHgMQAIgMADgMIADgQIABgRQAAgDgBgDQgBgEgEABQgMAAgMAEg");
	this.shape_23.setTransform(113.6,285.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhAB2QgHgDgGgEQgGgEgEgEQgEgGAAgEIACgGIADgFIAFgFIAFgBIAEAAIADABIAEABIAHAAQALABAOgDQAOgCANgFQALgDAJgFQAJgFABgGIABgEQAAgFgEgDIgKgIIgMgGIgOgFIgIgEIgMgGIgLgIQgGgEgEgGQgEgHgCgHIgBgHIgBgIQAAgGAEgIQAEgIAIgIQAHgIAJgIQAJgHAKgFIANgJQAHgEAHgDIAOgFQAIgBAIgBIAPABQAJABAHADQAHACAFAGQAFAFAAAIIgBAIIgDAJQgBAEgDADQgCADgEAAQgFAAgEgCIgGgFIgGgEQgEgCgEAAQgGAAgHACIgQAFIgPAIIgMAJQgGAGgEAEQgEAFAAAEQAAAEADADIAHAFIALAFIAOAGIAOAGIAMAFIAMAGIAIAIQAEADACAFQACAFAAAGIgBAHIgBAIIgCAIIgEAKIgFAIIgDAFQgKAJgNAIQgNAHgOAGQgNAGgOADQgOADgMABQgGAAgHgCg");
	this.shape_24.setTransform(91.2,284.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AghBuQgJAAgIgCQgJgDgIgEQgIgEgHgGQgGgIgEgKQgEgKAAgOQAAgLADgPQgDAAgDgDQgDgCAAgGQAAgKAGgHQAFgHAKgDIAIgNIAOgVQAIgLALgKQAKgLANgJQANgJAOgGQAPgFAQgBQAOAAALAEQAKAEAHAGQAHAGADAJQAEAHAAALQAAAIgCAHQgEAOgJAKQgJALgNAHQgMAHgPAFQgPAFgPADIgbAGIgYACQgCAFgCAHIgBANQAAAOALAHQALAJAUgBQALABAKgDQAKgCAKgFIASgJIAPgJIARgKQAHgEAGAAQAHAAABAEQACACAAAEIAAADIAAADQgCAHgDAHQgEAFgGAFQgZAVgbAIQgbAIgdAAIgNgBgAANhDQgLAHgIAIQgJAIgHAKQgHAKgEAHQASgBAOgEQAOgDALgFQALgFAGgGQAHgHACgGIABgDIAAgCQAAgHgFgDQgFgDgHAAQgLAAgKAFg");
	this.shape_25.setTransform(68.1,285.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhfC9QgLgEgIgIQgIgHgFgMQgFgLAAgQIABgLIACgMQADgOAFgNQAGgNAHgNQAIgNALgMQALgNAOgLQAKgHALgGQALgIALgFQALgFALgDQALgDALAAQAIAAAGACQAGABAGACIANguQALglAPhDQADgGAFgFQAEgEAHAAIAKABQAEABAEACQAEADACAEQACAFAAAHIgxDDQgCAIgCAOIgEAeIgCAfIgBAaQAAAOgEANIgDAKIgEAHIgHADIgKABQgHAAgEgBQgEgCgCgCQgCgDAAgDIAAgHIgBgIQAAgEgCgEIgIAFIgKAHIgJAGIgHAEIgNAHIgPAGIgRAFQgJACgJAAQgLAAgKgDgAALALQgLADgMAGQgMAGgMAJQgMAJgKALQgKAKgIANQgHANgEAPQgCAHAAAHIABANQACAGADAFQADAFAGACQAFADAJAAQAFAAAGgCIALgEIAKgFIAIgFIARgMIAOgNQAGgHAFgIQAEgJADgLIAFgRIADgQIADgQIACgSIgDgCQgCgCgEAAQgKAAgMAEg");
	this.shape_26.setTransform(43.6,277.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AAeBzIgHgDIgEgFIAAgGIABgQQACgLAAgOIgSAOIgTAPQgKAIgKAEQgLAGgJgBQgHABgHgCQgGgDgFgEQgNgKgFgKQgHgKAAgOIABgMIAEgQQAJgmAXggQAWghAigXQAMgJAMgCQANgEANAAIANABIANACIAJgCIAHgBQAHAAAFADQAFABADAEQADADACAEIABAJQAAAGgDAGIgDAMIghCAIgBATIgDARIgCAFIgEAGIgFAGQgEABgGABIgMgBgAAZhKQgNAEgLAHQgKAIgKALQgLALgHAMQgJAMgGAMQgGANgDAMIgCAJIgBANQAAAHACAFQABAGAIAAQAJAAAJgFQAKgFAHgGIAUgTIAVgXQAJgLAIgLQAHgNAEgMIADgRIABgQQABgDgCgDQgBgDgFgBQgMAAgLAGg");
	this.shape_27.setTransform(285.3,226.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhAB1QgHgCgGgEQgGgDgEgGQgEgEAAgGIACgEIADgHIAFgEIAFgCIAEABIADABIAEABIAHABQALAAAOgDQAOgCANgEQALgEAJgFQAJgFABgFIABgGQAAgEgEgEIgKgHIgMgGIgOgGIgIgDIgMgGIgLgIQgGgEgEgGQgEgGgCgJIgBgGIgBgHQAAgHAEgIQAEgIAIgIQAHgJAJgGQAJgIAKgFIANgJQAHgFAHgCIAOgFQAIgBAIAAIAPAAQAJABAHACQAHAEAFAEQAFAGAAAJIgBAGIgDAJQgBAFgDADQgCADgEAAQgFAAgEgCIgGgEIgGgGQgEgCgEABQgGgBgHACIgQAGIgPAIIgMAKQgGAFgEAFQgEAEAAAEQAAAEADADIAHAEIALAHIAOAFIAOAGIAMAGIAMAFIAIAHQAEAEACAFQACAFAAAGIgBAHIgBAHIgCAJIgEAJIgFAJIgDAFQgKAJgNAHQgNAIgOAGQgNAGgOADQgOAEgMgBQgGAAgHgCg");
	this.shape_28.setTransform(238.5,225.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhHB5QgOgGgIgJQgKgKgEgMQgFgNABgQQgBgPAFgSQAEgPAHgQQAIgQANgSQAMgRARgQQASgQAWgPIALgEQAIgDAHAAQAKgLAQAAQATABAOAJQAMAKAJAQIAFALIAEALIADAMIABAPQAAAUgHATQgGAUgLASQgMAUgQARQgPARgUAOQgNAKgPAFQgQAGgUgBQgTAAgOgEgAAvhLQgCADgEABIgMAFIgUACQgIADgIAGQgHAFgIAIIgPAQQgIAJgGAJIgKARQgEAJgBAHIgDALIgBAJQAAAIADAHQACAIAEAEQAFAGAHACQAHADAKAAQASAAAPgJQARgKAMgOQANgOAIgQQAJgQACgNIAFgRIABgNQAAgHgCgFIgGgNIgFgIIgDgJIgFAGg");
	this.shape_29.setTransform(214.8,226.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("Ai2B8QgHgFAAgKIAAgDIABgDIAOg1IANgvIANgrIAMgsIACgQIACgRQABgDADgBIAGgFIAHgDIAGAAQAHgBAFACQAEABADAEQADACABAEIABAIQAAAIgDAJIgGASIAXgRQAMgHANgHQANgGANgDQAOgFANAAQAHABAGACQAHACAFAEQAFAEAEAHQADAIABAKIAWgOQALgHAMgGQALgGAMgEQALgDALAAQARAAAKAEQALAFAGAHQAGAHADAJQACAKAAALQAAAMgCAMIgFAXQgHAcgIAaIgUAzIgFAMIgGANQgDAFgFAFQgFADgGAAQgPAAgFgFQgFgEAAgJIAAgGIABgGIAEgLIAIgPIAIgQIAGgPIAHgXIAIgbIAHgbQACgNAAgIIAAgHIgDgGIgFgFQgDgCgGAAQgHABgKAEQgKAEgLAHQgLAGgKAJQgKAIgIAIIgJAKIgKAFIgCAHIgFANIgFAQIgGARIgEAMIgCAGIgDAPIgCANIgCAOQAAAIgCAGQgDAGgFAEQgFAFgKAAQgFAAgEgCQgEgDgDgEQgDgEgBgEQgCgFAAgFIALgoIAKghIALggIAKgkIACgJIAAgIQAAgFgCgEQgCgEgHAAQgKAAgJAEQgKAEgMAJQgLAIgOANIghAgIgFAMIgGAVIgGAWIgEAMIgDASIgCAMIgCAKIgDANQgDAHgEAFQgFAGgHAAQgMAAgHgHg");
	this.shape_30.setTransform(179.7,225.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AAeBzIgHgDIgEgFIAAgGIACgQQACgLAAgOIgSAOIgTAPQgLAIgLAEQgKAGgJgBQgIABgGgCQgGgDgFgEQgNgKgGgKQgFgKAAgOIABgMIADgQQAJgmAXggQAXghAhgXQAMgJANgCQANgEANAAIAMABIAMACIAJgCIAIgBQAIAAAEADQAFABADAEQADADACAEIABAJQAAAGgCAGIgEAMIggCAIgCATIgDARIgCAFIgDAGIgHAGQgDABgGABIgMgBgAAYhKQgLAEgMAHQgKAIgKALQgKALgJAMQgIAMgGAMQgGANgDAMIgCAJIgBANQAAAHABAFQADAGAGAAQALAAAIgFQAJgFAIgGIAVgTIAUgXQAKgLAHgLQAIgNADgMIADgRIABgQQAAgDgBgDQgBgDgEgBQgMAAgNAGg");
	this.shape_31.setTransform(146.5,226.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhfC9QgLgEgIgIQgIgHgFgMQgFgLAAgQIABgLIACgMQADgOAFgNQAGgNAHgNQAIgNALgMQALgNAOgLQAKgHALgGQALgIALgFQALgFALgDQALgDALAAQAIAAAGACQAGABAGACIANguQALglAPhDQADgGAFgFQAEgEAHAAIAKABQAEABAEACQAEADACAEQACAFAAAHIgxDDQgCAIgCAOIgEAeIgCAfIgBAaQAAAOgEANIgDAKIgEAHIgHADIgKABQgHAAgEgBQgEgCgCgCQgCgDAAgDIAAgHIgBgIQAAgEgCgEIgIAFIgKAHIgJAGIgHAEIgNAHIgPAGIgRAFQgJACgJAAQgLAAgKgDgAALALQgLADgMAGQgMAGgMAJQgMAJgKALQgKAKgIANQgHANgEAPQgCAHAAAHIABANQACAGADAFQADAFAGACQAFADAJAAQAFAAAGgCIALgEIAKgFIAIgFIARgMIAOgNQAGgHAFgIQAEgJADgLIAFgRIADgQIADgQIACgSIgDgCQgCgCgEAAQgKAAgMAEg");
	this.shape_32.setTransform(122,218.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("Ag7CAIgKgEIgKgGIgIgFQgOgNgFgPQgGgQAAgQIACgSIADgSIAEgPIAEgNIAIggIAHgZIAFgRIADgOIADgGIAEgFIAEgCIACgBIAHABIAHABIAHABQAHAAADAFQACAFAAAHIgBAKIgPA1IgMAmIgHAaQgDAKAAAFIACALQABAGADAGQACAFAEAEQAEAEAGAAQALAAAKgHQALgGAJgJQAJgJAHgKQAIgLAFgIIAGgLQAGgKAFgMIAJgbIAGgZIAFgTIAGghQACgJAEgEQAEgDAJAAQAHAAAEABQAFABAEAEQADADACAGQACAGAAAJQAAAKgEAQIgHAeIgEATIgFAVIgCASIgCAQIABAZIABAbIAAALIgBAHQgDAKgEAEQgFAFgKAAQgHAAgEgCQgEgBgCgDIgEgGIgBgHIgCguIgDABIgRAXQgKANgLALQgLALgNAHQgOAHgQAAIgIgBg");
	this.shape_33.setTransform(93.5,225.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AhwCtQgEgBgCgEQgCgDgBgEIgBgHIABgIIADgGIAEgFIADgBIAPgDIARgGIATgIQAKgGALgIIAYgUQALgLAKgQQAMgPAKgTQAJgUAHgYIgLAMIgMALIgPAOIgNALIgOAIQgIACgGAAQgQAAgMgHQgLgIgKgQQgDgFgBgIQgCgHAAgIIACgaIADgZIAGgdIAHggIACgKIAAgGIABgEQAAgEACgEIAGgGIAHgEIAHgBIAKABQAGAAACADQAFAFACAGQACAHAAAHIgCAIIgGANIgKAmIgFAZIgEAQIgBAJQABAOAEAHQAEAIAHAAIAJgBIAKgFQATgMAPgPQAOgQALgRQAKgTAJgWQAHgVAGgbQABAAAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIAEgDIAGgCIAFgBQANAAAHAHQAHAHAAAMIgCAOIgFAVIgGAUIgFAPIgLAiIgPApQgHATgHARQgHARgJAPQgKAPgNAOQgNAOgRAOQgRAPgZAPQgPAJgPAFQgOAGgQABQgEAAgCgDg");
	this.shape_34.setTransform(65.7,231.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AAeBzIgHgDIgDgFIgBgGIACgQQACgLAAgOIgSAOIgTAPQgLAIgLAEQgKAGgJgBQgHABgHgCQgGgDgFgEQgNgKgGgKQgFgKAAgOIABgMIADgQQAJgmAXggQAXghAhgXQAMgJANgCQANgEANAAIAMABIAMACIAJgCIAIgBQAHAAAFADQAFABADAEQADADABAEIABAJQAAAGgBAGIgEAMIggCAIgCATIgDARIgCAFIgDAGIgHAGQgDABgGABIgMgBgAAYhKQgMAEgLAHQgKAIgKALQgKALgJAMQgIAMgGAMQgGANgDAMIgCAJIgBANQAAAHABAFQACAGAHAAQALAAAIgFQAJgFAIgGIAVgTIAUgXQAKgLAHgLQAHgNAEgMIADgRIACgQQAAgDgCgDQgBgDgEgBQgMAAgNAGg");
	this.shape_35.setTransform(40.9,226.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AghBvQgJgBgIgCQgJgCgIgFQgIgEgHgGQgGgIgEgJQgEgLAAgOQAAgLADgPQgDAAgDgCQgDgEAAgFQAAgKAGgHQAFgHAKgDIAIgOIAOgUQAIgLALgKQAKgLANgJQANgJAOgGQAPgFAQgBQAOAAALAEQAKADAHAHQAHAGADAIQAEAJAAAJQAAAJgCAHQgEAOgJAKQgJALgNAHQgMAHgPAFQgPAFgPADIgbAGIgYACQgCAFgCAHIgBANQAAAOALAHQALAJAUgBQALABAKgDQAKgDAKgEIASgJIAPgJIARgKQAHgEAGAAQAHAAABAEQACADAAADIAAAEIAAACQgCAHgDAHQgEAGgGAEQgZAUgbAJQgbAIgdAAIgNAAgAANhDQgLAHgIAIQgJAIgHAKQgHAKgEAHQASgBAOgEQAOgDALgFQALgFAGgGQAHgHACgGIABgDIAAgCQAAgHgFgCQgFgEgHAAQgLAAgKAFg");
	this.shape_36.setTransform(299.6,168.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AgsCZQgNgFgIgKQgJgKgEgNQgEgOAAgPQAAgUAEgWIAKgrQgGAAgHgBQgHgBgFgDQgFgDgEgEQgDgFAAgFIABgGIADgHIAEgFQADgDAEAAIAhAAQAEAAACgDIADgJIAGgYIAEgSIAEgLIABgIIgBgGIAAgIIAAgCIABgFIACgJQABgFAEgEQAEgEAIAAQAGAAAFACQADADADAEQADAFACAFIABAMIgBALIgRBEIAXgEIAUgEIAUgEIAOgDIAKgDIAGAAIAIAAIAHACIAFAEQACADAAAEQAAAGgCAFQgCAEgEAEIgIAFIgKADIgKACIgNADIgQAEIgQAEIgTAFIgMADIgJABIgGABIgIAaIgGAZIgDAVIgCAOQAAAHACAGQABAGADAEQADAEAFADQAFADAHAAQANAAAMgHQAMgIAMgKQALgLAKgNIATgZQADgEAEAAIAEAAIAEACIADADIABAFIAAADQgEAPgIAPIgRAfQgCAFgFAFIgLAKIgLAJIgMAIQgJAGgLACQgKACgKAAQgQAAgMgGg");
	this.shape_37.setTransform(275.1,162.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AhAB1QgHgCgGgEQgGgEgEgEQgEgGAAgEIACgGIADgGIAFgEIAFgBIAEAAIADABIAEABIAHAAQALABAOgDQAOgDANgEQALgDAJgFQAJgFABgGIABgFQAAgEgEgDIgKgIIgMgGIgOgGIgIgDIgMgGIgLgIQgGgEgEgGQgEgHgCgHIgBgHIgBgIQAAgGAEgIQAEgIAIgIQAHgIAJgIQAJgHAKgFIANgJQAHgEAHgDIAOgFQAIgBAIgBIAPABQAJABAHADQAHADAFAEQAFAGAAAIIgBAIIgDAJQgBAEgDADQgCADgEAAQgFAAgEgCIgGgFIgGgEQgEgCgEgBQgGABgHACIgQAFIgPAIIgMAJQgGAGgEAEQgEAFAAAEQAAAEADADIAHAFIALAFIAOAGIAOAGIAMAFIAMAGIAIAIQAEADACAFQACAFAAAHIgBAGIgBAHIgCAJIgEAJIgFAJIgDAFQgKAJgNAIQgNAHgOAGQgNAGgOADQgOAEgMAAQgGAAgHgDg");
	this.shape_38.setTransform(226.4,167.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AhHB4QgOgEgIgKQgKgKgEgMQgFgNABgQQgBgQAFgRQADgPAJgPQAHgSANgQQAMgRARgRQARgQAYgOIAKgFQAIgDAIAAQAJgKAQAAQATgBANALQANAJAJARIAFAKIAEALIADAMIABAPQgBATgGAVQgGASgLAUQgMASgQASQgQASgTANQgNAKgPAFQgQAGgUAAQgTgBgOgFgAAwhLIgHAFIgMADIgUAEQgIACgIAFQgIAGgHAIIgQAQQgHAJgFAJIgLARQgEAJgBAHIgCALIgCAKQAAAHADAHQACAHAEAGQAFAEAHAEQAHACAKAAQASAAAPgJQARgKAMgOQANgOAIgQQAJgRACgMIAFgQIABgPQAAgFgCgGIgGgMIgFgJIgEgJIgDAGg");
	this.shape_39.setTransform(202.8,167.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AhdByQgGgHAAgJIABgIIAIgmIAIgpIAJgoIAHglIAAgFIAAgEIABgPIACgOQADgJAEgEQADgDAHAAQAHAAAEADQAFADACAEQADAFAAAGIABANIAAAHIgBAGIAPgOQAIgIAIgGQAJgFAJgEQAKgEAKAAIAIABIAJACIAJADQAGACAEAEQAIAFAHAKQAEAJAAAKIgBAHIgDAIIgHAGQgDADgFgBQgDAAgHgCIgJgFIgDgEIgEgGIgDgEIgCgEIgDAAIgDgBQgMAAgMAHQgKAGgKAKQgJAIgIALIgOATIgMApIgLAvIAAAGIgBAOQAAAIgCAGQgEADgEADQgGADgGAAQgKAAgFgHg");
	this.shape_40.setTransform(180.7,167.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AgsCZQgNgFgIgKQgJgKgEgNQgEgOAAgPQAAgUAEgWIAKgrQgGAAgHgBQgHgBgFgDQgFgDgEgEQgDgFAAgFIABgGIADgHIAEgFQADgDAEAAIAhAAQAEAAACgDIADgJIAGgYIAEgSIAEgLIABgIIgBgGIAAgIIAAgCIABgFIACgJQABgFAEgEQAEgEAIAAQAGAAAFACQADADADAEQADAFACAFIABAMIgBALIgRBEIAXgEIAUgEIAUgEIAOgDIAKgDIAGAAIAIAAIAHACIAFAEQACADAAAEQAAAGgCAFQgCAEgEAEIgIAFIgKADIgKACIgNADIgQAEIgQAEIgTAFIgMADIgJABIgGABIgIAaIgGAZIgDAVIgCAOQAAAHACAGQABAGADAEQADAEAFADQAFADAHAAQANAAAMgHQAMgIAMgKQALgLAKgNIATgZQADgEAEAAIAEAAIAEACIADADIABAFIAAADQgEAPgIAPIgRAfQgCAFgFAFIgLAKIgLAJIgMAIQgJAGgLACQgKACgKAAQgQAAgMgGg");
	this.shape_41.setTransform(155.8,162.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AhHB4QgNgEgJgKQgKgKgEgMQgEgNAAgQQAAgQAEgRQADgPAJgPQAHgSANgQQAMgRARgRQARgQAYgOIAKgFQAHgDAJAAQAJgKAQAAQATgBANALQANAJAJARIAFAKIAEALIADAMIABAPQgBATgGAVQgGASgLAUQgMASgQASQgQASgTANQgNAKgPAFQgQAGgUAAQgTgBgOgFgAAwhLIgHAFIgMADIgUAEQgIACgHAFQgJAGgHAIIgQAQQgHAJgFAJIgKARQgFAJgBAHIgCALIgBAKQAAAHACAHQACAHAFAGQAEAEAHAEQAHACAKAAQASAAAQgJQAPgKANgOQAMgOAJgQQAIgRADgMIAFgQIABgPQAAgFgCgGIgGgMIgEgJIgFgJIgDAGg");
	this.shape_42.setTransform(128.6,167.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AhAB1QgHgCgGgEQgGgEgEgEQgEgGAAgEIACgGIADgGIAFgEIAFgBIAEAAIADABIAEABIAHAAQALABAOgDQAOgDANgEQALgDAJgFQAJgFABgGIABgFQAAgEgEgDIgKgIIgMgGIgOgGIgIgDIgMgGIgLgIQgGgEgEgGQgEgHgCgHIgBgHIgBgIQAAgGAEgIQAEgIAIgIQAHgIAJgIQAJgHAKgFIANgJQAHgEAHgDIAOgFQAIgBAIgBIAPABQAJABAHADQAHADAFAEQAFAGAAAIIgBAIIgDAJQgBAEgDADQgCADgEAAQgFAAgEgCIgGgFIgGgEQgEgCgEgBQgGABgHACIgQAFIgPAIIgMAJQgGAGgEAEQgEAFAAAEQAAAEADADIAHAFIALAFIAOAGIAOAGIAMAFIAMAGIAIAIQAEADACAFQACAFAAAHIgBAGIgBAHIgCAJIgEAJIgFAJIgDAFQgKAJgNAIQgNAHgOAGQgNAGgOADQgOAEgMAAQgGAAgHgDg");
	this.shape_43.setTransform(105.1,167.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AhGB4QgOgEgKgKQgJgKgEgMQgEgNgBgQQABgQAEgRQADgPAJgPQAHgSAMgQQANgRARgRQASgQAXgOIAKgFQAHgDAJAAQAJgKAQAAQATgBANALQANAJAJARIAFAKIAEALIADAMIAAAPQAAATgGAVQgGASgLAUQgLASgRASQgQASgTANQgNAKgPAFQgQAGgUAAQgTgBgNgFgAAwhLQgDADgFACIgLADIgUAEQgIACgHAFQgJAGgHAIIgQAQQgHAJgFAJIgKARQgFAJgCAHIgBALIgBAKQAAAHACAHQACAHAFAGQAEAEAHAEQAHACAKAAQASAAAQgJQAPgKANgOQAMgOAJgQQAIgRADgMIAFgQIABgPQAAgFgCgGIgGgMIgEgJIgFgJIgDAGg");
	this.shape_44.setTransform(81.5,167.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("Ai1DFIgGgGIgFgIQgCgEAAgEIACgGIADgPIAHgZIBIjpIADgOIAHgMQADgHAGgDQAGgFAJAAQAJABAGAEIAMAKQAGAEAHANQAFAMAGATIAOAqIAPAwIATA0QALAbANAaIAGAJIAGAJIAFAIIAEADQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIACgJIACgKIADgJIALgaIALgjIAQgxIARhDIAFgVIAGgYIAEgZIADgVIAAgFIABgJIACgJIACgJIAEgHQACgCAEgBIAIABIAJAEQAGAGADAIQAEAKAAAOQAAAKgCAOIgFAcIgHAfIgIAgIgHAbIgGATIgJAdIgKAgIgNAjIgPAnIgIATQgGAJgGAIQgFAIgIAEQgIAFgJAAIgMgBQgGgCgEgFQgUgXgQgeQgPgdgLggQgNgggKghIgRg+IgCgGIgBgGIgCgHIgCgFQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgBABgCAFIgFAMIgDANIgDAIIgFATIgIAZIgJAfIgKAhIgJAdIgHAUIgEARIgHAUIgGASIgDALQgDAKgGAFQgGAEgFABQgEAAgEgDg");
	this.shape_45.setTransform(50,160.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#999999").ss(6.6,1,1).p("AyTGBQBMgHBCgtQBCgtAjhEQARgnAJgSQAPggATgSQAhggA4gDQAjgDBJALQBKAKAigBQA5gCAjgeQASgRAXgkQAZgmAOgPQAjghA8gKQAhgFBPAAQBKAAAkgIQA3gNAdglQANgRAQgmQARgoAMgQQAmgzBVgMQAYgECCgCQBSgBA/gsQBGgxgShDQBzgmB4gMQB6gNB3APADSjMQgWBdgKAxQgPBOgDBAQgCAcABArIABBIQADCtgRC0AKknFQgDArgGBEQgJBXgCAWQgHBMgCByQgCA+gCB+QgHDkgoCRAOymQQATgIA/ggQA0gaAhgMQAngNAlgCQgJgBgLgGQgPgIgIgEQgDgBgNgEQgJgEgEgDQgFgFgKgVQgOgegZgRQgGgFgOgIQgQgIgFgEQgZgSAAgWAkwAGQghClgKAwQgCAOgFAdQgFAaAAASQAAAYACAfQAHBYgLBuAr6DMQgZBNgGBXQgDArAAAMQgBARAAAiQgCAUACAWQABANACAZQAAAXgEAQAyQHmQgQASgCAMQAAAHACALQAAAGgCALQACAJAFAQQADAQgGAbQgHAgABAM");
	this.shape_46.setTransform(141.2,386.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol182, new cjs.Rectangle(0,0,359.8,455.8), null);


(lib.Symbol175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap60();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol175, new cjs.Rectangle(0,0,381,229), null);


(lib.Symbol174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap60();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol174, new cjs.Rectangle(0,0,380,229), null);


(lib.Symbol168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AvcJ2IJapQIFiFTQAlAQAmgQIFUleIJWJbgAGjAAIJEpIIAASGgAvmpLIJJJIIpGI4gAgdDwItntmIcGAAItlNmQgOAJgPAAQgNAAgQgJg");
	this.shape.setTransform(99.9,63.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol168, new cjs.Rectangle(0,0,199.8,126.1), null);


(lib.Symbol167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C1F7D").s().p("AyHIqILbo2IFWGeQAoAWArgMIGelSII9LdgAHGAvILCowIiVTtgAv1sEIIwLHIrBIfgAhAD8ItFwiIekDnIwfNDQgOAGgNAAQgTAAgSgOgAg8lWQgwASggAtQggAtgGA4QgHAzASAtQATAuAtAcQAtAaA/AIQBEAIAzgUQArgRAYgmIgqgFQgYAYgjAJQgjAJgwgFQgwgGgkgVQglgUgRglQgRgkAFgqQAFgrAYglQAXgmAogRQAogSA0AHQBAAHAfAlQAgAlgGAwQgDAbgPAYQgQAYgWANQgQAKgKgBQgDgBgCgDQgCgCAAgFIAFgSIAviKIg0gGIgIAVQgOgcgigEQgxgGglArQgfAjgGAuQgEAmATAaQATAZAhADQAeAEAagUQABAMAIAGQAHAHARACQA9AHAtgvQAjglAHgzQAEgqgQgmQgQgmglgYQglgYgxgGQgQgCgQAAQgnAAgkAOgAgYhkQgPgCgJgNQgIgMADgZQABgTAKgYQALgYAPgLQAQgLARACQAQACAIANQAKANgDAWQgDAUgJAXQgMAWgMAKQgHAIgIADQgHAEgJAAIgFgBg");
	this.shape.setTransform(116,80.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol167, new cjs.Rectangle(0,0,231.9,161.4), null);


(lib.Symbol164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C1F7D").s().p("AhGFUQgQgPAAgiQAAhAA5AAQAaAAAPARQAOAQAAAfQAAAegPARQgOAQgaAAQgZAAgQgOgAg/CYIAAgZQAAg3ARgjQARgkAtgmQBAg2ARgcQAPgbABgmQgBgwgegaQgegag5AAQgmAAgiAJQgkAIgtAXIgcg/QBZguBgAAQBZAAAyAsQAxAsAABQQAAAigJAaQgJAagSAYQgSAXg6AzQgwAngPAbQgOAbAAAsIAAAQg");
	this.shape.setTransform(18.7,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol164, new cjs.Rectangle(0,0,37.4,70.9), null);


(lib.Symbol147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(165.8,119);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol147, new cjs.Rectangle(13.5,0,304.7,238), null);


(lib.Symbol146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(589.8,281.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol146, new cjs.Rectangle(0,0,1179.6,563.6), null);


(lib.Symbol144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiZEsQgxgwADhJQAEg7Amg4QAigzBBgmQA7glAxgLIAvgLQgJgcgPgXQgTgcgcgJQgegOg7AHQgxAEgXAXIgZAbIgMBRIiigbIAQhfQADgTAIgRQAIgRAGgHQAGgIAPgOQARgOAEgFQBBhBBrgLQBggJBGAbQBJAdAwBGQAqA/ASBPQAOBCAJAwIAsD5IihAdIgCgLQglAKgtARQg/AVg4ABQhMAAgwgugAgdC2QAcAAAkgMQAzgTApgNIAQgDIgKg7IguAKQgYAFgmAYQghAUgOAWQgLAOgCALIADAAIADAAg");
	this.shape.setTransform(342.3,164.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai9G7QgTgEgTgSQgTgSgKgjQgCgIgCgNIgBgRIABgSIADgUQACgogIhqQgKhmghiDQghiIgOgxIgPgxIgVhOICegsIAVBOIANAxQAQAyAiCLQAkCQAKB1QAGBMABAvIB7gWICrgeIBGgNIBcgQIAcChIhbAQIhGAOIirAeIilAdQgDADgJADQgHAEgWAFQgNADgMAAQgIAAgIgBg");
	this.shape_1.setTransform(278.5,164.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2BCBED").s().p("AhwFqIB+MvQicAimABeQh+pRgxl0QgkkOivwNIIuhWIIrPdIiyykIH8haMAF+AoCQjGAxkEBKg");
	this.shape_2.setTransform(1014.3,452.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2BCBED").s().p("AkSAwIjH0FII0hdMAF/AnkQkCA8kKBFQhooCh4sBg");
	this.shape_3.setTransform(892.3,505.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2BCBED").s().p("AG4FkIgpJMInjBMIjgoHIByMCQkJA8j0BHQhqn/h4r3IjJz5IIXhWIJTSqICr2qIIGhWMAG6AuvQjEA3kpBdQh8rbhKnjg");
	this.shape_4.setTransform(747.6,503.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2BCBED").s().p("ABtJKImRA+IgaH1QiVAAmHAKMABPgj2ILSitMAOUAmIImoCxgAkLCOIC2gJIikl+g");
	this.shape_5.setTransform(576.7,547.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2BCBED").s().p("AhwF0IvX1hIK4h8II0NtID8wRIKnhJIo7ahIBuOmIppBmg");
	this.shape_6.setTransform(391.4,531.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2BCBED").s().p("ABtJKImRA+IgaH1QiVAAmHAKMABPgj2ILSitMAOUAmIImoCxgAkLCOIC2gJIikl+g");
	this.shape_7.setTransform(296.2,584.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2BCBED").s().p("AuDw+QKNllGVg1QD+ghDOBaQDzBpAfDtQA3GimGGEQk7E5nDCyIDHS/IoVBbgAAxvXQiRATjdB/IBOGuQCthICEh9QCqiggUiZQgJhGhoAAQgYAAgeAEg");
	this.shape_8.setTransform(118.7,576.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CF3BBD").s().p("Al5LjQh7h2AKi1QAJiQBbiJQBWh9CghiQCRhYB6gcIB1gbQgWhGgng4QguhFhDgXQhOghiQAPQh3ALg6A4QgnApgWAaIggDHImOhCIAnjpQAIgxAUgqQATgpAPgRQAQgTAmgjQAngiALgNQCfigEIgbQDugWCsBCQC1BIB1CtQBoCaAtDDQAjChAVB5IBsJmImNBGIgFgbQhaAahvAoQibA2iKABQi9gBh1hwgAhIHCQBFgDBcgdQB9gvBkgeIAngKIgaiRIhwAaQg9AOhcA5QhSAygjA1QgaAigEAcIADAAQAFAAAFACg");
	this.shape_9.setTransform(773.9,234.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CF3BBD").s().p("ABTJ7IgihdQgihlg8jrQgch9ghhxQhcAggoAQIhNAmIi0BUIislsIC2hWIBMgkQBHgiB7glIgPgzIhDj6IGFhnIBED7QACANAIAVIAvgPICWgmIDCgzIBrGEIjFA1IiSAoQgWAGgbAFQAlB7AiCJQA2DaAbBRIBkEaIl7CEg");
	this.shape_10.setTransform(629.3,247.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CF3BBD").s().p("AhTNVIgGg1QgGg0gci2Qgbi4geivQgfitgQhuIgOhvIggjFIGMg+IAvEzQAQBrAeCtQAgCyAbC+QAaC+AHA2IAFA1IAZDHImPAvgAlRvxIGRgrIAfEfIAZDHImQAwg");
	this.shape_11.setTransform(545.6,248.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CF3BBD").s().p("AiKLxQg1gPgVgIQgXgHgngYQgqgWgggjIinixIEmkTICYChIApAPQAnAKAkgNQAdgIAUgXQAAgNgIgeQgLgshRgxQiUhXh2gyQjNhWhCiNQhfjIDfjTQCjibDMgdQDFggCRBDIESB+IikFwIkUh9QgngThQAOQg+AIg6AtQCMA/CmBgQDmCGA1DRQAqClg2CBQgRAvgfAmQhkCHidAvQhNAWhMAAQhKAAhKgVg");
	this.shape_12.setTransform(464.5,292.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CF3BBD").s().p("Al5LjQh7h2AKi1QAJiQBbiJQBWh9CghiQCRhYB6gcIB1gbQgWhGgng4QguhFhDgXQhOghiQAPQh3ALg6A4QgnApgWAaIggDHImOhCIAnjpQAIgxAUgqQATgpAPgRQAQgTAmgjQAngiALgNQCfigEIgbQDugWCsBCQC1BIB1CtQBoCaAtDDQAjChAVB5IBsJmImNBGIgFgbQhaAahvAoQibA2iKABQi9gBh1hwgAhIHCQBFgDBcgdQB9gvBkgeIAngKIgaiRIhwAaQg9AOhcA5QhSAygjA1QgaAigEAcIADAAQAFAAAFACg");
	this.shape_13.setTransform(341.3,310.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CF3BBD").s().p("ABOQCQiPgHjQhrQjYhviYjcQibjigGkkQgDkcCgkIQCVj+Cgh7QCxiCDQgbQDkgfCYBXQBuBABAA6IDICyIkKErIjKiyQgigdhKgsQgigRhbANQhoALhXBEQhlBLhuC6QhkCqAACoQAECnBZB/QBdCJB8BAQCDBCA9AHQBNADBQgRQBkgVA1gQID+hFIBpGEIjBA3Ig6ARIizApQhlAUhmAAQgeAAgegCg");
	this.shape_14.setTransform(174.9,317.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol144, new cjs.Rectangle(0,0,1278.1,837.4), null);


(lib.Symbol143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EC4AFF","#3492FB","#FFFFFF"],[0,0.478,1],53.5,115.2,-39.6,-79.8).s().p("EgnzAZYIYP30IOQNqQBhAoBhgoINtuHIYEYRgAQ4gDIXV3fMAAAAupgEgoMgXqIXhXhI3bW4gAhMJrMgjEgjDMBIZAAAMgi/AjDQgkAWgmAAQglAAgngWgAjksEQhsA4g+BzQg/BxAACEQAAB3A3BnQA3BmBxAzQBwA0CaAAQCgAABvg+QBhg0AvhgIhkAAQgxA/hRAfQhRAfhwAAQhzAAhaglQhagmgyhRQgyhRAAhjQAAhmAthdQAsheBZg0QBYg0B+AAQCVAABUBNQBTBOAAB0QAABAgdA8QgeA7gwAkQgjAbgXAAQgHABgFgGQgGgGAAgMQAAgJAHghIBGlPIh7AAIgMA0QgohAhSAAQh2AAhLBvQg9BbAABtQAABaAzA2QAzA1BOAAQBIAAA3g1QAGAaAUANQAUAOAmAAQCRAABch6QBKhgAAh4QAAhlgxhTQgwhVhcgvQhcgth2gBQiKABhtA5gAiLj0QgYgcAAg7QAAgtARg6QASg5AiggQAigeAoAAQAlgBAZAdQAYAcAAA1QAAAvgSA3QgSA3gZAdQgQAUgSAJQgXANgbAAQgkAAgYgcg");
	this.shape.setTransform(257.3,162.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol143, new cjs.Rectangle(0,0,514.7,324.9), null);


(lib.Symbol142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(0,39.4,0.66,0.66,-15);

	this.instance_1 = new lib.Bitmap19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(91,0,0.66,0.66,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol142, new cjs.Rectangle(0,0,194.8,149), null);


(lib.Symbol141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap20();
	this.instance.parent = this;
	this.instance.setTransform(0,151.8,0.782,0.782,0,-168.8,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol141, new cjs.Rectangle(0,0,188.9,183.4), null);


(lib.Symbol139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaRJQnGgLk6lKQk5lKALnFQAMnGFKk6QFKk4HEALQHGAME5FJQE6FJgMHFQgLHGlKE6Qk9EumxAAIggAAg");
	this.shape.setTransform(109.7,109.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol139, new cjs.Rectangle(0,0,219.5,219.5), null);


(lib.Symbol138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E82335","#E2C456"],[0,1],-51,56,42,-60.5).s().p("AgmNtQhdgChBhEQhBhFACheIATrbIg8A8QhDBBheAAQhegBhChBQhDhDABheQAAhdBChDIHOnNIABAAIADgDQA6g3BLgHIAHAAIAPgBQBeAABDBCIHNHNQBCBDAABeQAABehCBCQhDBCheAAQheAAhChCIhXhXIgUMDQgDBehEBBQhCA+hYAAIgHAAg");
	this.shape.setTransform(46.2,65.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol138, new cjs.Rectangle(-22.6,-22.6,137.7,175.5), null);


(lib.Symbol127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4B1178","#6D1F7D"],[0,1],622.6,-312.5,572.2,-1530.2).s().p("AkYIaIAAmeIAAqVIIxAAIAAKVIAAGeIoxAAg");
	this.shape.setTransform(212.3,963.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4B1178","#6D1F7D"],[0,1],-783.2,345.4,-852.7,60.5).s().p("Ag8cmMAAAg5LIBrAAIAOAAIAAb/IAAIeIAAP+IAABQIAAAKIAACHIAABPg");
	this.shape_1.setTransform(1525.3,677.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4B1178","#6D1F7D"],[0,1],-474.2,526.4,-524.6,241.5).s().p("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");
	this.shape_2.setTransform(1430,496.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4B1178","#6D1F7D"],[0,1],-983.2,17.8,-1052.7,-267.1).s().p("AFfQLMglrAAAIAAyDIB6AAIAAhPIAAiHQCGARCogMQABAAAAgFQAYlMgKlmIAAgKIa7AAIAOAAQAAKKAHKJIAHAAIKIAAIAOAAQABAjgBAjIAAAKQEXASE6gIIAOAAIAAFeIAAAKQCEAjDHgPIAOAAQBEAZgHBfIAWAAIDqAAIAACqIAAAKI6uAAgAhhCRIAHAAQBrgGgshxQgBgBgHAAIgNAAIgqAAIgOAAQAAA8AHA8gAj5gtIAHABQAzAHAJgTQAvhphrgDIgNAAQAAA8AGA7gAhhgtIAHABQBrgHgshwQgBgBgHAAIgNAAIgqAAIgOAAQAAA8AHA7gAitjvIAAgFQAAgFACgFQAihlhpABIgNAAQgsB6B+gHgAnOjvIAAgFQAHAAAAgBQARhCgYgrIgOAAIg3AAQgoBxBtACgAgVmtIAAgFIAAgKIAAhkQAAgFgBAAQgogFgqAAQgtB/CAgCgAncn5IAOABQAHAAAAgBQARhIgYgvIgOAAIg3AAQgiBoBZAPgAxXoNIAOABQAHAAAAgBQARhIgYgvIgOAAIg3AAQgiBoBZAPgAitprIAAgFQAAgFACgFQAkhshrgCIAAAKIgNAAQgsB6B+gHgAgVprIAAgFIABgKQAkhshqgCIgOAAQgtCACAgDgArxrFIABgFQAAgFABgFQAjhlhpABIgOAAQgrB6B9gHgAj5suIAHAAQBpABgihlQgCgFAAgFQAAgFgBAAQgogFgpAAQAAA8AGA8g");
	this.shape_3.setTransform(1725.3,872.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#4B1178","#6D1F7D"],[0,1],-40.9,169.1,-91.3,-115.8).s().p("AnSRYIAA9oIATgCIAAgFIAAgKIAAgUIAAgKIAAhQIAAgKIAAgUQA9AAA7gFIABgFIAAgKIAAlyQBcgCgQiCQgRiAAAiCIAAhTIBcAAIADHZIAGAAQAvgMgHAqIgBAKIAAEsIAAAKIAAAeIAAAKQBJASBggNIAAgFIAAgKIAAusIBaAAIAKAAIAAOOIAAAKIAAAUIAAAKQAXASAwgIIAJAAIAACCIAAAKQBoARB+gGIALgBQAAKsADW5IAACkIjijUIrCI8gAmHKSIAEAAIApAAIAKAAQAEAAAAgBQANhNgRg0IgKAAIgpAAIgKAAQABBBAFBBgAEbKHIAKABQAEAAAAgBQANhMgRg1QAAgFgBAAQgegFgeAAQgdB9BQAOgAAvFlIAFABIAoAAIALAAQAEAAAAgBQANhNgRg0IgLAAIgyAAQABBBAEBAgAmHFlIAEABIApAAIAKAAQAEAAAAgBQANhNgRg0IgKAAIgpAAIgKAAQABBBAFBAgAAvCTIAFABIAoAAIALAAQAEAAAAgBQANhHgRgwQAAgFgBAAQgegFgeAAQABBBAEBAgAi/CKIAEAAIApAAIAJAAQAFAAABgBQAlh/hdgCIAAAKIAAAUIAAAKIgKAAQAAAtAGAtgAElg4IAAgFQAEAAAAgBQANhIgRgvQAAgFgBAAQgegFgeAAQghCGBeABgABng4IAAgFQAEAAAAgBQANhIgRgvQAAgFgBAAQgegFgeAAQghCGBeABgAmHg9IAEAAIApAAIAKAAQAEAAABgBQAlh/hdgCIAAAKIgKAAQABA8AFA8gABckGIALABQAEAAAAgBQANhNgRg0IgLAAIgoAAIgKAAQgdB3BPAKgAi7kZIAAAKQBYAXghiOQAAgBgFAAIgJAAIgpAAIAABugADunYIAEABIApAAIAKAAQAEAAAAgBQANhNgRg0IgKAAIgpAAIgKAAQABBBAFBAgAAvnYIAFABIAoAAIALAAQAEAAAAgBQANhNgRg0IgLAAIgoAAIgKAAQABBBAEBAgAmHnYIAEABIApAAIAKAAQAEAAAAgBQANhNgRg0IgKAAIgpAAIgKAAQABBBAFBAg");
	this.shape_4.setTransform(1286.4,663.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#4B1178","#6D1F7D"],[0,1],-470.2,37.9,-520.6,-247).s().p("AuOTdIgUAAIAA4/IBGgEIAAgEIAAgCIADiLIAIoHIACDMQACHEgDG+IbzAAIAASDIgqAAI79AAIAAAKIgKAAgAmugIIgFgBQgGgsABgtIAKAAIAAgKIAAgfIAKAAQAlgGALASQACADAAAFQARArgMBDQAAABgFAAQAAAFgCAAQgQAEgNAAQgSAAgLgJgAJrgSIgoAAIgFgBQgFhBAAhBIAAgKQBqgBgoCMQgBACgFAAIgKAAgANHgdIgoAAIgFAAQgFhFAAhGIAKAAQBeAGgnCEQAAABgFAAIgKAAgABFlJQAjAAAjAGIAAAEIAAB5IAAAKIAAAEIgEABQhnAAAliSgANHj5IgoAAIgFAAQgFhFAAhHIAKAAQBeAHgnCEQAAABgFAAIgKAAgAo2lGQg2ggAUhuQAeAAAdAEQABAAAAAGQARA0gMBNQAAAAgFAAQgCAKgHAAQgHAAgKgHgAh4nAIgoAAIgFgBQgFhBAAhBIAAgKQBrgBgpCMQgBABgFABIgKAAgAB3p0IgoAAIgFgBQgFhGAAhGIAKAAIAoAAIAKAAQARA6gMBSIgFABIgKAAgAl8qeQhQgOAeh8IAyAAIAKAAQARA5gMBSIgFAAIgKgBgAJrqnIgoAAIgFAAQgFhAAAhBIAAgKQBqgCgoCMQgBACgFgBIgKAAgAMaqxQgFhGAAhFIAKAAIAoAAIAKAAQAFAAAAABQAnCEheAGIgFAAgAE/qxIgoAAIgFAAQgFhGAAhFIAAAAQABA5AEA5IAFAAIAoAAIAKAAQAFAAABgBQAIgeACgXQADAfgNAvQgBACgFgBIgKAAgAomsBIgoAAIgFAAQgFhAAAhBIAAgKQBqgCgoCMQgBACgFgBIgKAAgAIbxAIgFgBQgFhBAAhBIAKAAIAyAAIAKAAQARA0gLBJIgkAAIgBAGIgdAAgACLxMQhQgOAeh9IAyAAIAKAAQARA6gMBSIgFABIgKgCgAh4xWQhPgNAch6IA+AAQAQA5gMBPIgFAAIgKgBg");
	this.shape_5.setTransform(1426.1,852.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#4B1178","#6D1F7D"],[0,1],164.7,194.3,114.3,-90.6).s().p("EBUDAr6IAAgFQiMgFiMAAIAAAKIgKAAIhuAAQnKgRniACQt/AFt/AAI7+AAI79AAI7+AAIyYAAIAAqWIozAAIAAKWIgzAAI7+AAIAAgKIAAleIDcAAIAKAAQARi8gHjUIAAgKQBpAABpgFIAAgFQARm6gHnUIAAgKIDmAAIAKAAQBunQHMhzIAKgBQAngFAogJQABgBAAgFIBkgJIAKgBIDIAAIAKAAQJYBBCLINIABAKQB1ASCPgIIAKAAQAAFoAFFoIAFAAQCCAACCgFIAAgFIAAjSIAA79QBfAABegFIABgFIAAs0IAA7+IAKAAQI2FJIwFLQB5BIBxBOQAAJ7AFJ7IAFAAQCAARCYgHIAKAAIAAZxIAAAKQBhASB6gNIABgFIAAgKIAAsWQDcAADcgFIAAgFIAAgKIAA6FIPAAAIAKAAQAALaAFLaIAFAAIC0AAIAKAAQARttgHuHIAAiMIGjAAIAKAAQAbARA0gLQABgBAAgFIHCAAIAKAAQAAN/gFN/QgDGgASGJQBNASBmgNIABgFIAAgKIAAgUQARoPgHooIAAgKIA8AAIAKAAQARkbgHkzIAAgKIBQAAIAKAAQAAEnAFEnIAFAAQBZATgMiWQgRjlAAjmIBQAAIAKAAIAAJEIAAAKQA4AQBLgJIASgCIABgFIAAgKIAAgUIAAgKIAAhQIAAgKIAAgUQA8AAA7gFIABgFIAAgKIAAlyQBcgCgQiCQgQiAAAiCIAAsDIBaAAQAAJFAFJEIAFAAQAvgMgGAqIgBAKIAAEsIAAAKIAAAeIAAAKQBIASBhgNIABgFIAAgKIAAusIBaAAIAKAAIAAOOIAAAKIAAAUIAAAKQAWASAwgHIAKgBIAACCIAAAKQBnARB/gGIAKgBQAALRAELSIABCmIAFAAQBpAABpgFIAAgFIAAgKIAAgoQARgmgHg+IAAgKIAAgKQARgbgHg1IAAgKIAAgKIAAiCQARgNgGglIgBgKQARgbgHg1IAAgKIAAgKIAAiCQARgXgHgvIAAgKQARgWgHgwIAAgKIAAgKIAAhGQARgggHg6IAAgKIAAgKIAAgnQARgWgHgwIAAgKIAAgKIAAgyQARgWgHgwIAAgKIAAgKIAAhkQARgXgHgvIAAgKIAAgKIAAhGQARgWgHgwIAAgKIAAgKIAAgKQHdjLHajNQAEgCAFAAQARK5gHLSIAAAKQA6ALBIgBIAKAAQAygjgChpQgStgAAthIAKAAIAKAAQJBARJbgMIAAgFIAKAAIAKAAIAAb9QAADzHnDFIAAMMILCo8IDjDUIAAZAIziAAgEheTAh5IAFABQAFAFAGABQAkALAGgTQAnh+hcgCIgKAAQAABBAFBAgEhHBAfuIAFAAQBNgCgahsIgBgKQAAgFgBAAQgdgFgeAAQAABBAFBBgEhaeAdqQAFACAFAAQAFAAAAgCQAehshBgUIgKAAIgKAAQgaBuBCASgEhDMAchIAAgFQAFAAAAgBQANhIgSgvQAAgFgBAAQgdgFgeAAQgiCGBeABgEhN+AcSIAAAKQBjAdgiiUQAAgBgFAAQAAgFgBAAQgdgFgeAAIAAB4gEheTAbCIAFAAIAoAAIAKAAQAFAAAAgBQAMhNgRg0IgKAAIgoAAIgKAAQAABBAFBBgEhTwAa3IAKABQAFAAAAgBQAMhNgRg0IgKAAIgoAAIgKAAQgeB3BQAKgEhKxAZTIAFABQBcgDglh+QAAgBgFAAIgKAAIgoAAIgKAAQAABBAFBAgEhGKAZPIAAgFQAFAAAAgBQANhIgSgvIgKAAIgoAAIgKAAQghCABdgDgAaAXlIAFABIAoAAIAKAAQAFAAAAgCQAlh9hcgDIgKAAQAABBAFBAgEheTAWVIAFABIAoAAIAKAAQAFAAAAgBQAMhNgRg0IgKAAIgoAAIgKAAQAABBAFBAgEhEDAWCIAFAAIAoAAIAKAAQAFAAAAgBQAMhMgRg1IgKAAIgoAAIgKAAQAABBAFBBgEhN5AWCIAFAAIAoAAIAKAAQAFAAAAgBQAMhMgRg1IgKAAIgoAAIgKAAQAABBAFBBgEAj2AU7IAFABIAoAAIAKAAQAFAAAAgBQAMhNgRg0IgKAAIgoAAIgKAAQAABBAFBAgEhXlAUeIAFAAQBNgCgahsIgBgKQAAgFgBAAQgdgFgeAAQAABBAFBBgEAwvATrIAKABIAFgBQAMhRgRg6IgKAAIgoAAIgKAAQgeB9BQAOgEgy3ASmIAFAAIAyAAIAKAAQASgRAGgpQATiDhnAJIAAAKIAAAoIAAAKIgKAAQAAA8AFA8gAd1Q2QAFACAFAAQAFAAAAgBQAMhNgRg0IgKAAIgoAAQgaBuBCASgEAzAAOiIAFAAQBdgGgmiFQAAgBgFAAIgKAAIgoAAIgKAAQAABGAFBGgEgy3ANcIAFAAIAAAeIAAAKQBHAoAMhOQAWiJhpAFIAAAKIAAAKIgKAAQAAA3AFA3gAaAONIAFABIAoAAIAKAAQAFAAAAgBQAMhNgRg0IgKAAIgoAAIgKAAQAABBAFBAgEg1XAONIAFABQAeAAAagKQAWgHAGgpQATiDhnAJIgKAAQAABaAFBZgEAkjAODIAKABQAFAAAAgBQAMhNgRg0QAAgFgBAAQgdgFgeAAQgeB9BQAOgEBJ+ALPIAFABIAoAAIAKAAQAFAAAAgBQAMhNgRg0QAAgFgBAAQgdgFgeAAQAABGAFBFgEA5AAKtIABgFIABgJQAeh6hbABIgKAAQglCNBqgGgEAg4AJhIAFABIAoAAIAKAAQAFAAAAgBQAMhNgRg0IgKAAIgyAAQAABBAFBAgAaAJhIAFABIAoAAIAKAAQAFAAAAgBQAMhNgRg0IgKAAIgoAAIgKAAQAABBAFBAgEAuyAJYIAFAAQAqAHAIgUQAqh9hcgCIgKAAQAABGAFBGgEgteAIwIAAAKQBaAPgjiaQAAgBgFAAIgKAAIgeAAIgKAAIAACCgAsRI6IAFAAIAoAAIAKAAQARg0gHhOIAAgKIgBgFQgigFgjAAQgBBLAGBLgEA/qAIbIAFABIAoAAIAKAAQAFAAAAgBQAMhNgRg0IgKAAIgoAAIgKAAQAABBAFBAgEA4AAHLIAFABQAqAIAIgVQAqh8hcgDIgKAAQAABGAFBFgEA21AHLIAKABIAFgBQAMhRgRg6IgKAAIgyAAQgeB9BQAOgEAg4AGQIAFAAIAoAAIAKAAQAFAAAAgBQAMhHgRgwQAAgFgBAAQgdgFgeAAQAABBAFBBgAdIGGIAFAAIAoAAIAKAAQAFAAAAgBQAlh/hcgCIAAAKIAAAUIAAAKIgKAAQgBAtAGAtgEgrNAFTIAFABQA2APgEgtIAAgKQAFAAAAgBQAMg4gRghQAAgFgBAAQgZgFgYAAIgKAAQAABGAFBFgEgtZAFTIAFABIAeAAIAKAAIAFgBQAMhSgRg5IgKAAIgeAAIgKAAQAABGAFBFgEg1XAFTIAFABIAyAAIAKAAQASgSAGgoQATiChnAIIAAAKIgKAAQAABVAFBUgAM9FPIAAgFIABgKQAfiAhcgCIgKAAQgmCTBsgCgEBGiAENIAFABQAqAHAIgUQAph3hbACIgKAAQAABBAFBAgEA2DABkIAAB4IAAAKQADARAbgEQAUgDACgHQA4iNhsgCIAAAKgEAyOADmIAFAAIAyAAIAKAAQAFAAAAgBQAMhMgRg1QAAgFgBAAQgdgFgeAAIAAAKIgKAAQAABBAFBBgEAktADDIAAgFQAFAAAAgBQAMhHgRgwQAAgFgBAAQgdgFgeAAQgiCFBeACgEAhvADDIAAgFQAFAAAAgBQAMhHgRgwQAAgFgBAAQgdgFgeAAQgiCFBeACgAaAC9IAFABIAoAAIAKAAQAFAAAAgCQAlh9hcgDIAAAKIgKAAQAAA8AFA7gAsRCCIAFAAIAoAAIAKAAQARg1gHhNIAAgJIgBgFQgigFgjAAQgBBKAGBLgEgqwABnQAXAOADgRIAAgKIAAgeQAFAAAAgBQAMg8gRgmIgKAAIgoAAIgKAAQgVBuA3AggAJDBpIAAgFQAFAAAAgBQAMhNgRgzQAAgFgBAAQgdgFgeAAIgKAAQgmCSBsgCgEBJ+ABZIAFABIAoAAIAKAAQAFAAAAgBQAMhNgRgzIgKAAIgoAAIgKAAQAABAAFBAgEA/qABPIAFABIAoAAIAKAAQAFAAAAgBQAMhNgRgzIgKAAIgoAAIgKAAQAABAAFBAgEgy3AAAIAFAAIAAAoIAAAKQBHAoAMhOQAWiIhpAFIgKAAQAAA8AFA7gEg1XAA8IAFAAQAeAAAagKQAWgIAGgoQATiChnAJIgKAAQAABaAFBZgEA4AAAJIAFABQAqAIAIgUQAqh8hcgDIgKAAQAABGAFBEgEAhlgAKIAKABQAFAAAAgBQAMhNgRg0IgKAAIgoAAIgKAAQgeB3BQAKgAdNgdIAAAKQBXAVggiMQAAgBgFAAIgKAAIgoAAIAABugEAyOgBQIAFABIAyAAIAKAAIAFgBQAMhRgRg6IgKAAIgyAAIgKAAQAABGAFBFgAmVhuIAFABQArAHAHgUQAqh9hcgCIgKAAQAABGAFBFgAM9h8IAAgFIABgJQAfiBhcgCIgKAAQgmCTBsgCgAJDh8IAAgFQAFAAAAgBQAMhMgRg1QAAgFgBAAQgdgFgeAAIgKAAQgmCTBsgCgEgtZgCBIAFAAIAeAAIAKAAIAFAAQAMhTgRg5IgKAAIgeAAIgKAAQAABGAFBGgEA2DgFdIAAB4IAAAKQADARAbgEQAUgDACgHQA4iNhsgCIAAAKgEA4AgDbIAFAAQBbACgeh6IgBgKIgBgFQgigFgjAAQAABGAFBGgEBJ+gDbIAFAAIAoAAIAKAAQAFAAAAgBQAMhMgRg1IgKAAIgoAAIgKAAQAABBAFBBgEBCygDbIAFAAIAoAAIAKAAQAFAAAAgBQAMhMgRg1IgKAAIgoAAIgKAAQAABBAFBBgEAj2gDbIAFAAIAoAAIAKAAQAFAAAAgBQAMhMgRg1IgKAAIgoAAIgKAAQAABBAFBBgEAg4gDbIAFAAIAoAAIAKAAQAFAAAAgBQAMhMgRg1IgKAAIgoAAIgKAAQAABBAFBBgAaAjbIAFAAIAoAAIAKAAQAFAAAAgBQAMhMgRg1IgKAAIgoAAIgKAAQAABBAFBBgEg1XgDlIAFAAQBlAagVieQgEgegQgIIgKAAIgyAAIgKAAQAABVAFBVgEAwMgE1IAFAAIAoAAIAKAAQAFAAAAgBQAmiFhdgGIgKAAQAABGAFBGgAmanpIgBAKQgHBTASA5QA0AMAJggQAhiChhAAIgHAAgAoXlTIAFAAQBcgCgfiBIgBgJIgBgFQgigFgjAAQgBBLAGBLgAL8loIAFABQArAHAHgUQAqh8hcgDIgKAAQAABGAFBFgEgtegHzIAAB4IAAAKQAFAFAGACQAkAKAGgTQAoiDhdgHIAAAKgEBDMgGvQAEACAFAAQAygjgZhoQAAgBgFAAIgKAAIgoAAIgKAAQgVBpA0AhgEA2DgJDIAAB4IAAAKQADARAbgEQAUgDACgHQA4iMhsgDIAAAKgEBGigHCIAFABQAqAHAIgUQAph3hbACIgKAAQAABBAFBAgAsRpDIAFAAQAFAFAGACQAkAKAGgTQAoiEhdgGIgKAAQAABGAFBGgAnWo+IAAgFIABgJQAfiBhcgCIgKAAQgmCUBsgDgAL8pNIAFAAQArAIAHgWQAqh8hcgCIgKAAQAABGAFBGgEgqwgJUQAXAOADgRIAAgKIAAgeQAFAAAAgBQAMg+gRglIgKAAIgoAAIgKAAQgVBuA3AhgAKnqAIAKABQAFAAAAgBQAMhIgRgvIgKAAIgeAAIgKAAQgZBpBBAOgEBKrgKKIAKABQAFAAAAgBQAMg5gRggIAAgKIAAgeQAAgFgBAAQgdgFgeAAQgeB9BQAOgEBCygKKIAFABIAoAAIAKAAQAFAAAAgCQAmiDhdgHIgKAAQAABGAFBFgEA/qgKKIAFABIAoAAIAKAAQAFAAAAgCQAmiDhdgHIgKAAQAABGAFBFgEgnTgKxIAFAAQgBAfApgKIAKgBQARgDAEgZQAUh7hbABIAAAKIAAAUIAAAKIgKAAQgBAtAGAtgAlUskIAAgFIAAgKQAHhOgRg0IgKAAIgoAAIgKAAQgmCUBsgDgAICs0IAFABIAyAAIAKAAIAFgBQAMhSgRg5IgKAAIgyAAIgKAAQAABGAFBFgAJ/tRIAAAKQBWAagfiHQAAgBgFAAIgKAAIgeAAIgKAAIAABkgEBGigNlIAFAAQAqAIAIgWQAph2hbACIgKAAQAABBAFBBgEBCygNlIAFAAIAoAAIAKAAQAFAAAAgBQAMhNgRg0IgKAAIgoAAIgKAAQAABBAFBBgArQt+IAAgFIABgKQAfh/hcgDIgKAAQgmCUBsgDgEgpLgOOIAFABQAHARAhgGIAKgBIAFgBQAMhWgRg/IgKAAIgoAAIgKAAQAABGAFBFgEgnTgOOIAFABQAFAFAGACQAkAKAGgTQAoiDhdgHIgKAAQAABGAFBFgEglCgOXIAAAKQBaAPgjiaQAAgBgFAAIgKAAIgoAAIAACCgEgx2gO1IAAAKQBmAXgliiQAAgBgFAAIgKAAIgoAAIgKAAIAACCgAMBwPIAAAKQBWAagfiHQAAgBgFAAIgKAAIgeAAIgKAAIAABkgAmVwPIAFAAIAoAAIAKAAIAFAAQAMhSgRg6IgKAAIgoAAIgKAAQAABGAFBGgAoXwPIAFAAIAoAAIAKAAIAFAAQAMhSgRg6IgKAAIgoAAIgKAAQAABGAFBGgEBJ5gRzIAAAKQgPBABBgNIAKgBIAFgBQAMhRgRg6IgKAAIgyAAIAABQgEA/qgQ4IAFABQAqAHAIgUQAqh8hcgDIgKAAQAABGAFBFgEBCygQ4IAFABQBdgHgmiDQAAgCgFAAIgKAAIgoAAIgKAAQAABGAFBFgEgpLgRzIAFAAQBaAPgjiaQAAgBgFAAIgKAAIgoAAIgKAAQAABGAFBGgEgk9gRzIAFAAIAeAAIAKAAIAFAAQAMhSgRg6IgKAAIgeAAIgKAAQAABGAFBGgEgxxgSSIAFABIAoAAIAKAAIAFgBQAMhRgRg6QAAgFgBAAQgdgFgeAAQgBBLAGBKgAJ/0xIAABkIAAAKQgCAQAWgDQAUgDADgHQAxh5hcgCIAAAKgAMB07IAAAKQgdBxBPACIAAgFQAFAAAAgBQAjh3hYAAIgCAAgAoXz2IAFABIAoAAIAKAAQARg0gHhOIAAgKIgBgFQgigFgjAAQgBBLAGBKgEglCgXvQgaB5BCAbQAFACAFAAQASgvgIhJIAAgKQAAgFgDgDQgKgOgaAAQgKAAgLACgEgnTgVaIAFABIAoAAIAKAAQARgDAEgZQAUh8hbACIAAAKIAAAoIAAAKIgKAAQgBAtAGAsgEgpLgVaIAFABIAoAAIAKAAQARgDAEgZQAUh8hbACIgKAAQgBBLAGBKgAMB3vIAABkIAAAKQgCAQAWgDQAUgDADgHQAxh4hcgDIAAAKgAJ/3vIAABkIAAAKQgCAQAWgDQAUgDADgHQAxh4hcgDIAAAKgAMB6tIAABkIAAAKQgCAQAWgDQAUgDADgHQAxh5hcgCIAAAKgEgnTgZKIAFABQBaAPgjiaQAAgBgFAAIgKAAIgoAAIAAAoIAAAKIgKAAQgBAtAGAsgEgpLgZKIAFABIAoAAIAKAAIAFgBQAMhRgRg6IgKAAIgoAAIgKAAQAABGAFBFgEgxxgZoIAFABIAoAAIAKAAIAFgBQAMhSgRg5IgKAAIgoAAIgKAAQAABGAFBFgAMB91IAAAKQAAA3AFA2IAFABIAeAAIAKAAQAFAAAAgCQAjh2hYAAIgCAAgEgpLgcvIAFAAIAoAAIAKAAQARgDAEgZQAUh7hbABIgKAAQgBBLAGBLgEgxxgdNIAFAAIAoAAIAKAAIAFAAQAMhYgRg+IgKAAIgoAAIgKAAQgBBLAGBLgEBnkAQWIBJAOIgDCMIAAACIhFAIIgBikg");
	this.shape_6.setTransform(670.1,696.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol127, new cjs.Rectangle(0,132.5,1931.5,884.9), null);


(lib.Symbol126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#651C7C","#C36BB7"],[0,1],-0.2,198.5,26.6,-159.5).s().p("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");
	this.shape.setTransform(510.4,210.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol126, new cjs.Rectangle(0,0,1020.8,420.4), null);


(lib.Symbol125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol125, new cjs.Rectangle(0,0,128,128), null);


(lib.Symbol124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663399").s().p("ANrNFIgGgRIgHgUIgFgQIgDgJIgGAJIgIAOIgJAPIgJANIgFAKIgBAAIgHgOIgKgRIgIgRIgHgNIgDAIIgEAOIgFAQIgFAQIgDANIgCAHIgOgFIADgJIAHgSIAIgXIAHgXIAGgSIADgIIAAAAIAFAKIAJAQIAJARIAIAQIAFAJIAGgJIAJgPIAKgRIAJgPIAEgHIABAAIADAKIAHAPIAHAUIAIAUIAGARIAFALIgOAGIgEgMgAieNFIgGgRIgHgUIgFgQIgDgJIgGAJIgIAOIgJAPIgJANIgFAKIgBAAIgHgOIgKgRIgIgRIgHgNIgDAIIgEAOIgFAQIgFAQIgDANIgCAHIgOgFIADgJIAHgSIAIgXIAHgXIAGgSIADgIIAAAAIAFAKIAJAQIAJARIAIAQIAFAJIAGgJIAJgPIAKgRIAJgPIAEgHIABAAIADAKIAHAPIAHAUIAIAUIAGARIAFALIgOAGIgEgMgAaRNJIgHgMIgGgLIgDgFIgzACIgDAGIgEAKIgFALIgDAGIgNgHIAHgMIAKgTIAMgVIALgVIAJgRIAFgIIAAAAIAKAQIANAWIAOAYIAMAVIAJAOIgNAIIgEgHgAZlMDIgFAJIgFAKIgFAJIgCAFIAogCIgDgEIgEgJIgGgKIgFgJIgCgFIgDAGgAARNOQgGAAgGgEQgFgEgGgHIgEgIIgDgLIgCgPIAAgWIAAgHIAAgHIAAgIIAAgFIAOAAIAAAIIAAAPIAAAJIAAATIABAOQACAFADAFQAEAGAGAEQAGADAIAAQAKAAAGgEQAGgDADgGQAEgFABgIIACgQIAAgUIAAgFIAAgNIAAgKIAPAAIAAAIIAAAQIAAAGIgBAXQgBALgDAIQgDAIgFAHQgHAHgIADQgJAEgMAAIgKgBgAqHNJQgLgGgGgLQgGgKAAgNQAAgPAHgNQAIgMANgIQANgHASgBQAPABALAFQALAGAGAKQAHALAAAOQAAAJgDAJQgDAKgHAIQgHAIgLAGQgLAFgQAAQgRAAgLgGgAp7L6QgKAGgFAKQgFAJAAAMQAAAKAFAJQAEAIAIAGQAJAEALAAQALAAAKgEQAJgGAGgJQAGgKAAgOQAAgMgFgJQgGgHgIgFQgIgEgKAAQgNAAgJAGgAzcNOQgGAAgGgEQgHgEgFgHIgFgIIgDgLIgBgPIgBgWIAAgHIAAgHIAAgIIAAgFIAPAAIAAAIIgBAPIAAAJIABATIACAOQABAFADAFQAEAGAHAEQAGADAIAAQAJAAAGgEQAGgDAEgGQADgFACgIIACgQIAAgUIAAgFIAAgNIgBgKIAPAAIAAAIIAAAQIAAAGIgBAXQgBALgDAIQgCAIgGAHQgGAHgJADQgIAEgMAAIgKgBgA58NEIAMgCIALgFQAFgCADgDQADgEAAgEQAAgFgEgEQgEgDgIgEQgJgFgHgFQgGgEAAgIQAAgGAEgGQAEgFAGgEQAHgEAHgDIAQgFIADALIgJACIgKAEQgGACgDAEQgEADAAAEQAAAEADADIAHAFIAHADIALAHQAFADACADQADAEAAAGQAAAHgFAHQgFAHgKAFQgLAFgOADgAQuNOIgNAAIgOgBIgMAAIgHAAIABgJIAAgNIAAgMIAAgGIAAgTIAAgFIAAgJIAAgKIgBgJIAAgGIAGAAIALgBIANAAIAMgBIAIAAIABALIgIABIgMAAIgKAAIgGAAIAAAiIAFAAIAIAAIAKgBIAIAAIAAAMIgGAAIgKgBIgJAAIgGAAIAAAiIAGAAIAJAAIALAAIAMgBIAAAMIgHAAgAEFNOIgMAAIgPgBIgMAAIgGAAIAAgJIABgNIAAgMIAAgGIAAgTIAAgFIAAgJIAAgKIgBgJIAAgGIAQAAIAAAHIgBAMIAAAPIAAAPIAAAmIAIAAIANAAIAQAAIAAAMIgHAAgATBNHIAAgLIAAgLIAAgKIAAgGIAAgSIAAgEIAAgIIAAgKIAAgIIAAgGIAKAAIANAAIANABQASACALAEQALAFAFAFQAFAGACAFIABAKQAAANgFAKQgGAKgJAHQgJAHgMAFQgMAEgMACQgNACgMAAIABgGgATPL3IAABLQAPgCAMgEQALgEAHgHQAIgGADgHQAEgIAAgIQAAgKgHgHQgHgHgNgDQgMgDgPAAIgGABgAwVNHIAAgLIAAgLIAAgKIAAgGIAAgSIAAgEIAAgIIAAgKIAAgIIAAgGIAKAAIANAAIANABQASACALAEQALAFAFAFQAFAGACAFIABAKQAAANgFAKQgGAKgJAHQgJAHgMAFQgMAEgMACQgNACgMAAIABgGgAwHL3IAABLQAPgCAMgEQALgEAHgHQAIgGADgHQAEgIAAgIQAAgKgHgHQgHgHgNgDQgMgDgPAAIgGABgAWhNNIAAgHI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AFAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAABIgBACIgEAAIgDABIgGAAQgJACgDAIQgDAIABASIgBDjIAAATIgBAHQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIAAAAQgCAAgFgFgAaFJ0IgPAAIgMgBQgKgBgIgDQgHgDgHgFIgPgMIgSgQIgagcIgegfIgbgeIgSgVIgCAAIAAAnIAAAxIACAjQABAJADAFQADAGAIABIAJABIAGAAQABAAAAABQABAAAAAAQAAAAAAAAQABAAAAABIAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgFABIgTAAIgRgBIgJAAIgIAAIgPABIgOAAIgFgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIABgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABgBAAAAIAGAAIAGgBQAFgBADgGQACgFABgJIACgjIAAgxIAAhFIAAglIAAgXIAAgOIgBgKQAAgKgEgFQgDgGgKgCIgGAAIgHgBIgCAAIgBgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIAEgBIATAAIAQABIAIAAIAJAAIAPgBIAOAAIAEABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgBABIgCAAIgEABIgGAAQgIACgDAGQgDAEAAALIgBAKIAAAOIAAAXIAAAlIAAAYIACAAIAPgQIAbgdIAdgeIAUgUIAOgQQAGgHABgFQAAgEgCgCQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgDgBIgBgCIABgDIAEAAIAOAAIAPABIAIAAIAQgBIANAAIAFAAIABADIgBACIgDAAIgKACIgMAEIgOAIIgMALIgQAOIgQAQIgbAbIgbAaIgPARIANAOIAYAZIAcAcIAaAaIAQAQIAZAYQAKAIAHAFQAHAEAJAEQAIACAHABQAGACADgBIADABIACACQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgHABgARGJ0IgTAAIgYgBIgIAAQgBAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIABgBIACgCIADgCQABgDgBgEIgfhLIgBgBIgCgBIhPAAIgCABIgCABIgTA2IgEALIgBAKQAAAGADABQAEACAFAAIADAAIADACIAAACQAAAA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");
	this.shape.setTransform(169.8,84.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol124, new cjs.Rectangle(0,0,339.6,169.7), null);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2CNQgTgUAAgmIAAgSIAvAAIAAAVQAAAfAaAAQALAAAHgHQAGgIAAgRQAAgUgJgPQgJgOgXgWQgfgZgMgWQgMgXAAgbQAAglATgVQATgUAjAAQAjAAATAUQASAVAAAmIAAANIgvAAIAAgQQAAgQgGgHQgHgIgMAAQgYAAAAAeQAAARAKAPQAJAPAXAVQAfAaAMAWQAMAWAAAeQAAAmgTAVQgTAVgkAAQgkAAgSgVg");
	this.shape.setTransform(239.5,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3CNQgTgVAAglIAAilQAAglATgWQAUgUAjAAQAkAAAUAUQATAWAAAlIAAClQAAAlgTAVQgUAVgkAAQgjAAgUgVgAgZhVIAACrQAAAfAZAAQAaAAgBgfIAAirQABgfgaAAQgZAAAAAfg");
	this.shape_1.setTransform(222.1,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbCdIg7jkIgBAAIAADkIgsAAIAAk6IA+AAIAwC8IAAAAIAAi8IAtAAIAAE6g");
	this.shape_2.setTransform(203.5,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjCdIgJg+IAAABIg3AAIgJA9IguAAIAzk6IBCAAIA0E6gAgXA1IArAAIgVibIgBAAg");
	this.shape_3.setTransform(184.9,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYCdIAAkNIgzAAIAAgtICYAAIAAAtIg1AAIAAENg");
	this.shape_4.setTransform(167.7,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1CNQgTgTAAgmIAAioQAAgkATgVQASgUAjAAQAjAAATAUQATAVAAAkIAAAiIgvAAIAAglQAAgdgZAAQgXAAAAAdIAACwQAAAcAXAAQAZAAAAgcIAAgxIAvAAIAAAsQAAAmgTATQgTAVgjAAQgjAAgSgVg");
	this.shape_5.setTransform(151,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjDCIgJg+IAAABIg3AAIgJA9IguAAIAzk6IBCAAIA0E6gAgXBZIArAAIgViaIgBAAgAgaiNIAfg0IA2AAIgwA0g");
	this.shape_6.setTransform(133.2,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYCdIAAkNIg0AAIAAgtICYAAIAAAtIgzAAIAAENg");
	this.shape_7.setTransform(116,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbCdIg7jkIgBAAIAADkIgsAAIAAk6IA+AAIAwC8IAAAAIAAi8IAtAAIAAE6g");
	this.shape_8.setTransform(98.2,26.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3CNQgTgVAAglIAAilQAAglATgWQAUgUAjAAQAlAAATAUQATAWAAAlIAAClQAAAlgTAVQgTAVglAAQgjAAgUgVgAgYhVIAACrQAAAfAYAAQAaAAgBgfIAAirQABgfgaAAQgYAAAAAfg");
	this.shape_9.setTransform(79.6,26.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1CNQgTgTAAgmIAAioQAAgkATgVQASgUAjAAQAjAAATAUQATAVAAAkIAAAiIgvAAIAAglQAAgdgZAAQgXAAAAAdIAACwQAAAcAXAAQAZAAAAgcIAAgxIAvAAIAAAsQAAAmgTATQgTAVgjAAQgjAAgSgVg");
	this.shape_10.setTransform(62.1,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol120, new cjs.Rectangle(0,0,301.2,58), null);


(lib.Symbol118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.iconfinder_23whatsapp_843773();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.147,1.147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol118, new cjs.Rectangle(0,0,146.9,146.9), null);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An/F+QhBAAAAhBIAApHIIiFuQAKAHANABQALAAALgIIIyluIAAJHQAABBhBAAgAopleQgGgFgHgCQAPgYAoAAIP/AAQAoAAAQAYQgHACgGAEIoxFvg");
	this.shape.setTransform(57.7,38.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol117, new cjs.Rectangle(0,0,115.5,76.4), null);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol109, new cjs.Rectangle(0,0,1119,681), null);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A1178").s().p("EgC+AodQolgvmKjHQpUktl/oAQl/n/hfsgIgFgBQgGgsABgtIAAgKIAAkhIAKAAIAAgKIAAhkQB1sLGCn6QGEn9JfkiQF8i3IKgrIAAgKIBGAAIAKAAIDvAAIAKAAQAoAAAnAFIABAFQMgBfH/F/QIAF/EsJVQDFGIAyIcQARAcgHA0IAAAKIAADvIAAAKIAAAKQAHAvgRAXQgzIRjCF/QkuJUoAGAQn/F/sgBfIgBAFQgnAFgoAAIgKAAIjvAAIgKAAQgOACgLAAQgdAAgQgMgEgBRglbQgtAFgsAAQl1AVkZBtQqJD8mTHtQmSHshwMPIAAAeIAAAKIAAE1IAAAKIAABGIAAAKQBgMfGQHuQGRHvKAEDQEkB2GHAZQAsAAAtAFIABAFIC9AAIAKAAIAAgKIBGAAIAKAAQMehhHvmQQHvmQEDqAQBykaAdlzIAAgKIAAhGIAKAAIAAgKIAAi9IgFgBQgFgxAAgyQgbmAh1khQkCqAnvmRQnvmQsehgIgKAAQgwAHgWgRIgKAAIi9AAIgBAFgAHgVTQlThqkRiwQohlelroUQjilJhrmzQgdh2ACiJQBGmaE+ikQACgBAAgFQChANCfAQIAKABQCGFZB8FjQACAFAAAFQiCCzh2DAQgCAEAAAFQD1KJJpEQQAqASAtAKQDIhuCsiKQADgCAFAAQFiB4FYCGQACABAAAFQAbCTAMCjIABAKQiTEvl1BQQhTARhSAAQh2AAh0gkg");
	this.shape.setTransform(260.1,260.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol105, new cjs.Rectangle(0,0,520.3,520.3), null);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("AAOBXIgfh/IAAAAIAAB/IgZAAIAAitIAjAAIAZBoIABAAIAAhoIAYAAIAACtg");
	this.shape.setTransform(202.6,79.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FFFF").s().p("AgeBhQgLgLAAgVIAAhbQAAgVALgLQALgMATAAQAUAAALAMQALALAAAVIAABbQAAAVgLALQgLAMgUAAQgTAAgLgMgAgNgcIAABfQAAARANAAQAOAAAAgRIAAhfQAAgRgOAAQgNAAAAARgAgOhPIAQgdIAeAAIgaAdg");
	this.shape_1.setTransform(192.3,77.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FFFF").s().p("AgMBXIAAitIAaAAIAACtg");
	this.shape_2.setTransform(184.9,79.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33FFFF").s().p("AgdBOQgLgKAAgVIAAhdQAAgVALgLQAKgLATAAQAUAAAKALQAKALABAVIAAASIgbAAIAAgUQAAgQgNAAQgNAAAAAQIAABhQAAAQANAAQANAAAAgQIAAgbIAbAAIAAAZQgBAVgKAKQgKAMgUAAQgTAAgKgMg");
	this.shape_3.setTransform(177.8,79.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33FFFF").s().p("AgdBOQgLgKAAgVIAAhdQAAgVALgLQALgLASAAQAUAAAKALQAKALAAAVIAAASIgaAAIAAgUQAAgQgNAAQgNAAAAAQIAABhQAAAQANAAQANAAAAgQIAAgbIAaAAIAAAZQAAAVgKAKQgKAMgUAAQgSAAgLgMg");
	this.shape_4.setTransform(168.2,79.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFFF").s().p("AgeBNQgKgLAAgVIAAiFIAbAAIAACHQAAAJAEAEQADAEAHAAQAGAAAEgEQADgEAAgJIAAiHIAbAAIAACFQAAAVgLALQgKAMgUAAQgTAAgLgMg");
	this.shape_5.setTransform(158.3,79.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33FFFF").s().p("AgpBXIAAitIApAAQAVgBAKALQAKAMAAAVIAABYQAAAUgKALQgKALgVAAgAgOA/IAOAAQAHgBADgEQAEgEAAgIIAAhaQAAgKgEgEQgDgDgHAAIgOAAg");
	this.shape_6.setTransform(148.3,79.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33FFFF").s().p("AgeBOQgLgLAAgVIAAhbQAAgVALgLQALgMATAAQAUAAALAMQALALAAAVIAABbQAAAVgLALQgLAMgUAAQgTAAgLgMgAgNgvIAABfQAAARANAAQAOAAAAgRIAAhfQAAgRgOAAQgNAAAAARg");
	this.shape_7.setTransform(138.1,79.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33FFFF").s().p("AAOBXIgCgIIAAgNIAAggQAAgMgEgEQgEgGgJABIgJAAIAABKIgbAAIAAitIAoAAQAVgBAJAKQAKAKAAAUIAAAMQAAAagSAIIAAAAQAKADAEAJQAEAJAAAQIAAAfIABALIACAJgAgOgMIAKAAQAHAAAEgDQAEgFAAgKIAAgNQAAgKgDgFQgDgDgGAAIgNAAg");
	this.shape_8.setTransform(128.2,79.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#33FFFF").s().p("AgoBXIAAitIAoAAQAUgBAKALQALAMAAAVIAAARQAAAVgLAKQgKALgUAAIgNAAIAABHgAgNgHIANAAQAGAAAEgFQADgEAAgIIAAgVQAAgJgDgEQgEgDgGAAIgNAAg");
	this.shape_9.setTransform(118.4,79.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#33FFFF").s().p("AgeBOQgKgLAAgVIAAgKIAaAAIAAAMQAAARAOAAQAGAAAEgEQAEgEgBgJQAAgLgEgJQgGgIgMgMQgRgOgHgMQgGgMgBgQQAAgUALgLQAKgMAUAAQATAAAKAMQALAKgBAWIAAAHIgaAAIAAgJQABgJgEgEQgEgEgGAAQgNAAAAARQAAAJAFAIQAFAJANALQARAPAHALQAGANAAARQAAAVgLALQgKAMgUAAQgTAAgLgMg");
	this.shape_10.setTransform(108.7,79.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33FFFF").s().p("AgeBOQgLgLAAgVIAAhbQAAgVALgLQALgMATAAQAUAAALAMQALALAAAVIAABbQAAAVgLALQgLAMgUAAQgTAAgLgMgAgNgvIAABfQAAARANAAQAOAAAAgRIAAhfQAAgRgOAAQgNAAAAARg");
	this.shape_11.setTransform(99,79.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#33FFFF").s().p("AgoBXIAAitIAoAAQAUgBAKALQALAMAAAVIAAARQAAAVgLAKQgKALgUAAIgNAAIAABHgAgNgHIANAAQAGAAAEgFQADgEAAgIIAAgVQAAgJgDgEQgEgDgGAAIgNAAg");
	this.shape_12.setTransform(89.5,79.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33FFFF").s().p("AAAANIgTAhIgSgMIAbgcIgmgHIAHgWIAkARIgGgnIAWAAIgFAnIAkgRIAHAWIgmAHIAaAcIgSAMg");
	this.shape_13.setTransform(79.1,75.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33FFFF").s().p("AATBXIgFgjIAAABIgeAAIgFAiIgZAAIAcitIAkAAIAdCtgAgNAeIAYAAIgLhWIgBAAg");
	this.shape_14.setTransform(64.8,79.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33FFFF").s().p("AgdBOQgKgKAAgVIAAhdQAAgVAKgLQAKgLATAAQATAAALALQALALAAAVIAAASIgaAAIAAgUQAAgQgOAAQgNAAAAAQIAABhQAAAQANAAQAOAAAAgQIAAgbIAaAAIAAAZQAAAVgLAKQgLAMgTAAQgTAAgKgMg");
	this.shape_15.setTransform(55.1,79.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#33FFFF").s().p("AgMBXIAAitIAaAAIAACtg");
	this.shape_16.setTransform(47.8,79.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#33FFFF").s().p("AgeBOQgKgLAAgVIAAgKIAaAAIAAAMQAAARAOAAQAGAAAEgEQAEgEgBgJQAAgLgEgJQgGgIgMgMQgRgOgHgMQgGgMgBgQQAAgUALgLQAKgMAUAAQATAAAKAMQALAKgBAWIAAAHIgaAAIAAgJQABgJgEgEQgEgEgGAAQgNAAAAARQAAAJAFAIQAFAJANALQARAPAHALQAGANAAARQAAAVgLALQgKAMgUAAQgTAAgLgMg");
	this.shape_17.setTransform(40.7,79.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#33FFFF").s().p("AgeBhQgKgLAAgVIAAiEIAbAAIAACGQAAAJAEAEQADAEAHAAQAGAAAEgEQADgEAAgJIAAiGIAbAAIAACEQAAAVgKALQgMAMgTAAQgTAAgLgMgAgOhPIAQgdIAeAAIgbAdg");
	this.shape_18.setTransform(31.1,77.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#33FFFF").s().p("AAfBXIAAiDIgBAAIgUCDIgVAAIgViDIAAAAIAACDIgYAAIAAitIAnAAIARB8IAAAAIASh8IAnAAIAACtg");
	this.shape_19.setTransform(19.3,79.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#33FFFF").s().p("AAAANIgTAhIgSgMIAbgcIgmgHIAHgWIAkARIgGgnIAWAAIgFAnIAjgRIAIAWIgmAHIAaAcIgSAMg");
	this.shape_20.setTransform(7.3,75.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33FFFF").s().p("AgeBPQgKgMAAgVIAAgKIAaAAIAAAMQAAARAOAAQAGAAAEgEQADgEAAgKQAAgKgEgJQgFgIgNgMQgRgOgHgMQgHgMAAgPQAAgWALgLQAKgLATAAQAUAAAKALQAKAMAAAVIAAAIIgZAAIAAgKQAAgJgEgEQgEgEgHAAQgMAAAAARQAAAJAFAJQAFAIANAMQARANAHANQAGAMAAAQQAAAWgLAMQgKALgUAAQgUAAgKgLg");
	this.shape_21.setTransform(362.2,47.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#33FFFF").s().p("AgoBYIAAivIAoAAQAUAAAKAMQALAKAAAWIAAARQAAAVgLAKQgKALgUAAIgNAAIAABIgAgNgIIANAAQAGAAAEgDQADgFAAgJIAAgUQAAgJgDgDQgEgFgGAAIgNAAg");
	this.shape_22.setTransform(353,47.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33FFFF").s().p("AgoBYIAAivIAoAAQAUAAAKAMQALAKAAAWIAAARQAAAVgLAKQgKALgUAAIgNAAIAABIgAgNgIIANAAQAGAAAEgDQADgFAAgJIAAgUQAAgJgDgDQgEgFgGAAIgNAAg");
	this.shape_23.setTransform(343.4,47.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#33FFFF").s().p("AATBYIgFgjIAAAAIgeAAIgFAjIgZAAIAcivIAkAAIAdCvgAgNAdIAYAAIgLhVIgBAAg");
	this.shape_24.setTransform(333.2,47.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#33FFFF").s().p("AAAANIgSAiIgSgOIAagcIgmgHIAGgVIAkARIgEgoIAVAAIgFAoIAjgRIAIAVIgnAHIAbAcIgSAOg");
	this.shape_25.setTransform(323,43.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#33FFFF").s().p("AgpBYIAAivIApAAQAUABAKAJQAKAKAAAVIAAAHQAAANgFAJQgEAIgJAEIAAAAQAUAHAAAdIAAAPQAAAUgKALQgLALgUAAgAgOA/IAPAAQAHgBADgDQAEgEAAgKIAAgPQAAgMgEgEQgEgFgJAAIgMAAgAgOgQIALAAQAHAAAEgDQAEgFAAgKIAAgKQAAgJgDgEQgEgFgGAAIgNAAg");
	this.shape_26.setTransform(308.8,47.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#33FFFF").s().p("AgkBYIAAivIBJAAIAAAZIguAAIAAAuIAlAAIAAAZIglAAIAAA2IAuAAIAAAZg");
	this.shape_27.setTransform(299.2,47.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#33FFFF").s().p("AAOBYIgNh1IAAAAIgMB1IgkAAIgSivIAbAAIAMCGIAAAAIANiGIAdAAIANCGIABAAIAMiGIAYAAIgSCvg");
	this.shape_28.setTransform(287.5,47.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#33FFFF").s().p("AgeBPQgKgMAAgVIAAgKIAaAAIAAAMQAAARAOAAQAGAAAEgEQAEgEAAgKQgBgKgFgJQgEgIgNgMQgRgOgHgMQgHgMABgPQgBgWALgLQALgLASAAQAVAAAJALQALAMAAAVIAAAIIgaAAIAAgKQAAgJgEgEQgDgEgIAAQgMAAAAARQAAAJAFAJQAFAIANAMQARANAHANQAGAMAAAQQAAAWgLAMQgKALgUAAQgTAAgLgLg");
	this.shape_29.setTransform(271.9,47.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#33FFFF").s().p("AATBYIgFgjIAAAAIgeAAIgFAjIgZAAIAcivIAkAAIAdCvgAgNAdIAYAAIgLhVIgBAAg");
	this.shape_30.setTransform(262.2,47.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#33FFFF").s().p("AAPBYIggh/IgBAAIAAB/IgYAAIAAivIAiAAIAaBpIAAAAIAAhpIAZAAIAACvg");
	this.shape_31.setTransform(251.8,47.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#33FFFF").s().p("AgMBYIAAivIAaAAIAACvg");
	this.shape_32.setTransform(244.1,47.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#33FFFF").s().p("AgdBPQgLgMAAgVIAAhbQAAgVALgMQAKgLATAAQAUAAAKALQALAMAAAVIAAAPIgaAAIAAgRQAAgRgOAAQgNAAAAARIAABfQAAARANAAQAOAAAAgRIAAgiIgOAAIAAgYIAoAAIAAA4QAAAVgLAMQgKALgUAAQgTAAgKgLg");
	this.shape_33.setTransform(236.8,47.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#33FFFF").s().p("AATBsIgFgjIAAAAIgeAAIgFAjIgZAAIAciuIAkAAIAdCugAgNAyIAYAAIgLhWIgBAAgAgOhOIAQgdIAfAAIgbAdg");
	this.shape_34.setTransform(226.8,45.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#33FFFF").s().p("AgoBYIAAivIAoAAQAUAAAKAMQALAKAAAWIAAARQAAAVgLAKQgKALgUAAIgNAAIAABIgAgNgIIANAAQAGAAAEgDQADgFAAgJIAAgUQAAgJgDgDQgEgFgGAAIgNAAg");
	this.shape_35.setTransform(217.3,47.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#33FFFF").s().p("AAAANIgTAiIgSgOIAbgcIgmgHIAHgVIAkARIgGgoIAWAAIgFAoIAkgRIAHAVIgmAHIAaAcIgSAOg");
	this.shape_36.setTransform(206.9,43.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#33FFFF").s().p("AgeBPQgLgMAAgVIAAhbQAAgVALgMQALgLATAAQAUAAALALQALAMAAAVIAABbQAAAVgLAMQgLALgUAAQgTAAgLgLgAgNgvIAABeQAAASANAAQAOAAAAgSIAAheQAAgRgOAAQgNAAAAARg");
	this.shape_37.setTransform(192.6,47.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#33FFFF").s().p("AgRBYIgbivIAcAAIARCHIAAAAIATiHIAZAAIgbCvg");
	this.shape_38.setTransform(182.8,47.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#33FFFF").s().p("AgMBYIAAivIAaAAIAACvg");
	this.shape_39.setTransform(175.7,47.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#33FFFF").s().p("AgNBYIAAiWIgdAAIAAgZIBVAAIAAAZIgeAAIAACWg");
	this.shape_40.setTransform(168.7,47.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#33FFFF").s().p("AgdBPQgKgMAAgUIAAhdQAAgUAKgMQAKgLATAAQATAAALALQALAMAAAUIAAATIgaAAIAAgUQAAgRgOAAQgNAAAAARIAABgQAAAQANAAQAOAAAAgQIAAgbIAaAAIAAAZQAAAUgLAMQgLALgTAAQgTAAgKgLg");
	this.shape_41.setTransform(159.5,47.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#33FFFF").s().p("AATBYIgFgjIAAAAIgeAAIgFAjIgZAAIAcivIAkAAIAdCvgAgNAdIAYAAIgLhVIgBAAg");
	this.shape_42.setTransform(149.5,47.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#33FFFF").s().p("AAOBYIgCgIIAAgOIAAggQAAgMgEgEQgEgFgJgBIgJAAIAABMIgbAAIAAivIAoAAQAVABAJAJQAKAKAAAVIAAAKQAAAcgSAHIAAABQAKACAEAIQAEAKAAAPIAAAfIABANIACAJgAgOgLIAKAAQAHAAAEgFQAEgEAAgKIAAgOQAAgJgDgEQgDgFgGAAIgNAAg");
	this.shape_43.setTransform(139.7,47.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#33FFFF").s().p("AgkBYIAAivIBJAAIAAAZIguAAIAAAuIAlAAIAAAZIglAAIAAA2IAuAAIAAAZg");
	this.shape_44.setTransform(130.1,47.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#33FFFF").s().p("AgNBYIAAiWIgdAAIAAgZIBVAAIAAAZIgdAAIAACWg");
	this.shape_45.setTransform(120.8,47.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#33FFFF").s().p("AAPBYIggh/IgBAAIAAB/IgYAAIAAivIAiAAIAaBpIAAAAIAAhpIAZAAIAACvg");
	this.shape_46.setTransform(110.9,47.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#33FFFF").s().p("AgMBYIAAivIAaAAIAACvg");
	this.shape_47.setTransform(103.1,47.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#33FFFF").s().p("AgeBPQgLgMAAgVIAAhbQAAgVALgMQALgLATAAQAUAAALALQALAMAAAVIAABbQAAAVgLAMQgLALgUAAQgTAAgLgLgAgNgvIAABeQAAASANAAQAOAAAAgSIAAheQAAgRgOAAQgNAAAAARg");
	this.shape_48.setTransform(91.7,47.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#33FFFF").s().p("AgpBYIAAivIApAAQAVAAAKAMQALAKgBAWIAABYQABAVgLALQgKAKgVABgAgOA/IAOAAQAHgBADgDQAEgFAAgJIAAhZQAAgKgEgDQgDgFgHAAIgOAAg");
	this.shape_49.setTransform(81.8,47.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#33FFFF").s().p("AgMBYIAAivIAaAAIAACvg");
	this.shape_50.setTransform(74.2,47.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#33FFFF").s().p("AAPBYIggh/IgBAAIAAB/IgYAAIAAivIAiAAIAaBpIAAAAIAAhpIAZAAIAACvg");
	this.shape_51.setTransform(66.4,47.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#33FFFF").s().p("AgkBYIAAivIBJAAIAAAZIguAAIAAAuIAlAAIAAAZIglAAIAAA2IAuAAIAAAZg");
	this.shape_52.setTransform(56.7,47.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#33FFFF").s().p("AgNBYIAAiWIgdAAIAAgZIBVAAIAAAZIgdAAIAACWg");
	this.shape_53.setTransform(47.4,47.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#33FFFF").s().p("AAPBYIggh/IgBAAIAAB/IgYAAIAAivIAiAAIAaBpIAAAAIAAhpIAZAAIAACvg");
	this.shape_54.setTransform(37.5,47.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#33FFFF").s().p("AgeBPQgLgMAAgVIAAhbQAAgVALgMQALgLATAAQAUAAALALQALAMAAAVIAABbQAAAVgLAMQgLALgUAAQgTAAgLgLgAgNgvIAABeQAAASANAAQAOAAAAgSIAAheQAAgRgOAAQgNAAAAARg");
	this.shape_55.setTransform(27.2,47.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#33FFFF").s().p("AgdBPQgKgMAAgUIAAhdQAAgUAKgMQAKgLATAAQATAAALALQALAMAAAUIAAATIgbAAIAAgUQAAgRgNAAQgNAAAAARIAABgQAAAQANAAQANAAAAgQIAAgbIAbAAIAAAZQAAAUgLAMQgLALgTAAQgTAAgKgLg");
	this.shape_56.setTransform(17.5,47.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#33FFFF").s().p("AAAANIgTAiIgSgOIAbgcIgmgHIAHgVIAkARIgGgoIAWAAIgFAoIAjgRIAIAVIgmAHIAaAcIgSAOg");
	this.shape_57.setTransform(7.3,43.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#33FFFF").s().p("AgeBOQgKgLAAgVIAAgKIAaAAIAAAMQAAARAOAAQAGAAAEgEQAEgFAAgIQgBgLgFgJQgEgIgNgMQgRgOgHgMQgHgNABgPQgBgUALgLQALgMASAAQAVAAAJAMQALAKAAAWIAAAHIgaAAIAAgJQAAgJgEgEQgEgEgHAAQgMAAAAARQAAAKAFAHQAFAJANALQARAOAHAMQAGANAAARQAAAVgLALQgKAMgUAAQgUAAgKgMg");
	this.shape_58.setTransform(397,15.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#33FFFF").s().p("AgeBOQgLgLAAgVIAAhbQAAgVALgLQALgMATAAQAUAAALAMQALALAAAVIAABbQAAAVgLALQgLAMgUAAQgTAAgLgMgAgNgvIAABfQAAARANAAQAOAAAAgRIAAhfQAAgRgOAAQgNAAAAARg");
	this.shape_59.setTransform(387.3,15.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#33FFFF").s().p("AgdBOQgLgLAAgVIAAhbQAAgWALgKQAKgMATAAQAUAAAKAMQALAKAAAWIAAAPIgaAAIAAgRQAAgRgOAAQgNAAAAARIAABfQAAARANAAQAOAAAAgRIAAgiIgOAAIAAgZIAoAAIAAA5QAAAVgLALQgKAMgUAAQgTAAgKgMg");
	this.shape_60.setTransform(377.4,15.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#33FFFF").s().p("AgkBXIAAitIBJAAIAAAZIguAAIAAAuIAlAAIAAAYIglAAIAAA1IAuAAIAAAZg");
	this.shape_61.setTransform(368.2,15.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#33FFFF").s().p("AgeBNQgKgLAAgVIAAiFIAbAAIAACHQAAAJAEAEQADAEAHAAQAGAAAEgEQADgEAAgJIAAiHIAbAAIAACFQAAAVgLALQgKAMgUAAQgTAAgLgMg");
	this.shape_62.setTransform(358.4,15.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#33FFFF").s().p("AgZBXIAAgZIAJABQAHAAAFgEQAEgEAAgJIAAiFIAbAAIAACEQAAAWgLALQgJAKgUAAIgMgBg");
	this.shape_63.setTransform(349.8,15.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#33FFFF").s().p("AgeBOQgLgLAAgVIAAhbQAAgVALgLQALgMATAAQAUAAALAMQALALAAAVIAABbQAAAVgLALQgLAMgUAAQgTAAgLgMgAgNgvIAABfQAAARANAAQAOAAAAgRIAAhfQAAgRgOAAQgNAAAAARg");
	this.shape_64.setTransform(341.7,15.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#33FFFF").s().p("AgkBXIAAitIBJAAIAAAZIguAAIAAAuIAlAAIAAAYIglAAIAAA1IAuAAIAAAZg");
	this.shape_65.setTransform(332.4,15.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#33FFFF").s().p("AgoBXIAAitIAoAAQAVgBAKALQAKAMAAAVIAABXQAAAVgKALQgKAMgVgBgAgNA+IANAAQAGAAAEgDQAEgFAAgIIAAhbQAAgIgEgFQgEgDgGAAIgNAAg");
	this.shape_66.setTransform(322.7,15.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#33FFFF").s().p("AgMBXIAAitIAaAAIAACtg");
	this.shape_67.setTransform(315.1,15.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#33FFFF").s().p("AgRBXIgbitIAcAAIARCGIAAAAIATiGIAZAAIgbCtg");
	this.shape_68.setTransform(307.9,15.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#33FFFF").s().p("AgkBXIAAitIBJAAIAAAZIguAAIAAAuIAlAAIAAAYIglAAIAAA1IAuAAIAAAZg");
	this.shape_69.setTransform(294.8,15.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#33FFFF").s().p("AgpBXIAAitIApAAQAVgBAKALQAKAMAAAVIAABXQAAAVgKALQgKAMgVgBgAgOA+IAOAAQAHAAADgDQAEgFAAgIIAAhbQAAgIgEgFQgDgDgHAAIgOAAg");
	this.shape_70.setTransform(285.1,15.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#33FFFF").s().p("AgeBOQgLgLAAgVIAAhbQAAgVALgLQALgMATAAQAUAAALAMQALALAAAVIAABbQAAAVgLALQgLAMgUAAQgTAAgLgMgAgNgvIAABfQAAARANAAQAOAAAAgRIAAhfQAAgRgOAAQgNAAAAARg");
	this.shape_71.setTransform(270.9,15.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#33FFFF").s().p("AgjBXIAAitIAbAAIAACUIAsAAIAAAZg");
	this.shape_72.setTransform(261.9,15.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#33FFFF").s().p("AgjBXIAAitIAbAAIAACUIAsAAIAAAZg");
	this.shape_73.setTransform(253.3,15.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#33FFFF").s().p("AgeBOQgLgLAAgVIAAhbQAAgVALgLQALgMATAAQAUAAALAMQALALAAAVIAABbQAAAVgLALQgLAMgUAAQgTAAgLgMgAgNgvIAABfQAAARANAAQAOAAAAgRIAAhfQAAgRgOAAQgNAAAAARg");
	this.shape_74.setTransform(243.7,15.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#33FFFF").s().p("AAOBXIgCgIIAAgNIAAggQAAgMgEgFQgEgEgJAAIgJAAIAABKIgbAAIAAitIAoAAQAVgBAJALQAKAJAAAUIAAALQAAAbgSAIIAAAAQAKADAEAJQAEAJAAAPIAAAgIABALIACAJgAgOgMIAKAAQAHAAAEgDQAEgFAAgKIAAgNQAAgKgDgFQgDgDgGAAIgNAAg");
	this.shape_75.setTransform(233.8,15.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#33FFFF").s().p("AAOBXIgCgIIAAgNIAAggQAAgMgEgFQgEgEgJAAIgJAAIAABKIgbAAIAAitIAoAAQAVgBAJALQAKAJAAAUIAAALQAAAbgSAIIAAAAQAKADAEAJQAEAJAAAPIAAAgIABALIACAJgAgOgMIAKAAQAHAAAEgDQAEgFAAgKIAAgNQAAgKgDgFQgDgDgGAAIgNAAg");
	this.shape_76.setTransform(223.7,15.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#33FFFF").s().p("AATBXIgFgjIAAABIgeAAIgFAiIgZAAIAcitIAkAAIAdCtgAgNAeIAYAAIgLhWIgBAAg");
	this.shape_77.setTransform(213.4,15.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#33FFFF").s().p("AgeBOQgKgLAAgVIAAgKIAaAAIAAAMQAAARAOAAQAGAAAEgEQADgFABgIQAAgLgGgJQgEgIgNgMQgRgOgHgMQgGgNAAgPQAAgUAKgLQAKgMATAAQAVAAAKAMQAKAKAAAWIAAAHIgbAAIAAgJQAAgJgDgEQgDgEgIAAQgMAAAAARQAAAKAFAHQAFAJANALQARAOAGAMQAHANAAARQAAAVgKALQgLAMgUAAQgTAAgLgMg");
	this.shape_78.setTransform(203.8,15.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#33FFFF").s().p("AgkBXIAAitIBJAAIAAAZIguAAIAAAuIAlAAIAAAYIglAAIAAA1IAuAAIAAAZg");
	this.shape_79.setTransform(194.8,15.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#33FFFF").s().p("AgpBXIAAitIApAAQAVgBAKALQAKAMAAAVIAABXQAAAVgKALQgKAMgVgBgAgOA+IAOAAQAHAAADgDQAEgFAAgIIAAhbQAAgIgEgFQgDgDgHAAIgOAAg");
	this.shape_80.setTransform(185.1,15.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#33FFFF").s().p("AAAANIgTAhIgSgMIAbgcIgmgHIAHgWIAkARIgGgnIAWAAIgFAnIAjgRIAIAWIgmAHIAaAcIgSAMg");
	this.shape_81.setTransform(174.6,11.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#33FFFF").s().p("AAOBXIgfh/IAAAAIAAB/IgZAAIAAitIAjAAIAZBnIABAAIAAhnIAYAAIAACtg");
	this.shape_82.setTransform(160,15.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#33FFFF").s().p("AgeBhQgLgLAAgVIAAhbQAAgVALgLQALgMATAAQAUAAALAMQALALAAAVIAABbQAAAVgLALQgLAMgUAAQgTAAgLgMgAgNgcIAABfQAAARANAAQAOAAAAgRIAAhfQAAgRgOAAQgNAAAAARgAgOhQIAQgcIAeAAIgaAcg");
	this.shape_83.setTransform(149.6,13.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#33FFFF").s().p("AgNBXIAAitIAbAAIAACtg");
	this.shape_84.setTransform(142.2,15.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#33FFFF").s().p("AgdBOQgLgLAAgUIAAhdQAAgVALgLQALgLASAAQAUAAAKALQAKALAAAVIAAASIgaAAIAAgUQAAgQgNAAQgNAAAAAQIAABhQAAAQANAAQANAAAAgQIAAgbIAaAAIAAAZQAAAUgKALQgKAMgUAAQgSAAgLgMg");
	this.shape_85.setTransform(135.1,15.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#33FFFF").s().p("AATBXIgFgjIAAABIgeAAIgFAiIgZAAIAcitIAkAAIAdCtgAgNAeIAYAAIgLhWIgBAAg");
	this.shape_86.setTransform(125.2,15.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#33FFFF").s().p("AAfBXIAAiDIgBAAIgUCDIgVAAIgViDIAAAAIAACDIgYAAIAAitIAnAAIARB8IAAAAIARh8IAoAAIAACtg");
	this.shape_87.setTransform(113.5,15.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#33FFFF").s().p("AgMBXIAAitIAaAAIAACtg");
	this.shape_88.setTransform(104.3,15.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#33FFFF").s().p("AAPBXIggh/IgBAAIAAB/IgYAAIAAitIAiAAIAaBnIAAAAIAAhnIAZAAIAACtg");
	this.shape_89.setTransform(96.6,15.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#33FFFF").s().p("AATBXIgFgjIAAABIgeAAIgFAiIgZAAIAcitIAkAAIAdCtgAgNAeIAYAAIgLhWIgBAAg");
	this.shape_90.setTransform(86.2,15.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#33FFFF").s().p("AAAANIgSAhIgSgMIAagcIgmgHIAGgWIAkARIgEgnIAVAAIgFAnIAjgRIAIAWIgnAHIAbAcIgSAMg");
	this.shape_91.setTransform(75.9,11.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#33FFFF").s().p("AgeBOQgLgLAAgVIAAhbQAAgVALgLQALgMATAAQAUAAALAMQALALAAAVIAABbQAAAVgLALQgLAMgUAAQgTAAgLgMgAgNgvIAABfQAAARANAAQAOAAAAgRIAAhfQAAgRgOAAQgNAAAAARg");
	this.shape_92.setTransform(61.6,15.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#33FFFF").s().p("AAPBsIggh/IAAAAIAAB/IgZAAIAAiuIAiAAIAaBoIAAAAIAAhoIAZAAIAACugAgihUQAFgLAFgFQAGgFAHAAIAIABIAGADIAFACIADABQADAAADgCIAEgHIAOAIQgFAKgFAGQgGAFgHAAIgIgBIgGgEIgFgCIgDgBQgEAAgCACIgEAHg");
	this.shape_93.setTransform(51.3,13.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#33FFFF").s().p("AgkBXIAAitIBJAAIAAAZIguAAIAAAuIAlAAIAAAYIglAAIAAA1IAuAAIAAAZg");
	this.shape_94.setTransform(41.6,15.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#33FFFF").s().p("AgeBOQgKgLAAgVIAAgKIAaAAIAAAMQAAARAOAAQAGAAAEgEQAEgFgBgIQAAgLgEgJQgGgIgMgMQgRgOgHgMQgGgNgBgPQAAgUALgLQAKgMAUAAQATAAAKAMQALAKgBAWIAAAHIgaAAIAAgJQABgJgEgEQgEgEgGAAQgNAAAAARQAAAKAFAHQAFAJANALQARAOAHAMQAGANAAARQAAAVgLALQgKAMgUAAQgTAAgLgMg");
	this.shape_95.setTransform(32.2,15.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#33FFFF").s().p("AgMBXIAAitIAaAAIAACtg");
	this.shape_96.setTransform(25.1,15.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#33FFFF").s().p("AgpBXIAAitIApAAQAVgBAKALQAKAMAAAVIAABXQAAAVgKALQgKAMgVgBgAgOA+IAOAAQAHAAADgDQAEgFAAgIIAAhbQAAgIgEgFQgDgDgHAAIgOAAg");
	this.shape_97.setTransform(17.8,15.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#33FFFF").s().p("AAAANIgTAhIgSgMIAbgcIgmgHIAHgWIAkARIgGgnIAWAAIgFAnIAjgRIAIAWIgmAHIAaAcIgSAMg");
	this.shape_98.setTransform(7.3,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol102, new cjs.Rectangle(0,0,423.1,130), null);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol77, new cjs.Rectangle(0,0,248,174), null);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol73, new cjs.Rectangle(0,0,291,112), null);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol71, new cjs.Rectangle(0,0,229,227), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9677A").ss(8.4,1,1).p("EgzegaVMBm9AAAQCAAABaBaQBbBaAACAMAAAArDQAACAhbBaQhaBaiAAAMhm9AAAQiAAAhbhaQhahaAAiAMAAAgrDQAAiABahaQBbhaCAAAg");
	this.shape.setTransform(360.4,168.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(-4.1,-4.1,729.1,345.5), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E28B70","#FF0099"],[0,1],-143.3,0,143.4,0).s().p("AxkFSQiAAAhbhaQhahaAAiAIAAg7QAAiABahaQBbhaCAAAMAjJAAAQCAAABaBaQBbBaAACAIAAA7QAACAhbBaQhaBaiAAAg");
	this.shape.setTransform(143.4,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,286.8,67.7), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FE79FF","#FFFFFF"],[0,1],-60.8,-49,37.7,30.3).s().p("Ao/JAQjvjuAAlSQAAlQDvjvQDvjvFQAAQFSAADuDvQDvDvAAFQQAAFSjvDuQjuDvlSAAQlQAAjvjvgAnynyQjQDPABEjQgBElDQDPQDODPEkAAQEkAADPjPQDPjPAAklQAAkjjPjPQjPjOkkAAQkkAAjODOg");
	this.shape.setTransform(81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,163,163), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4C46F1","#FFFFFF"],[0,1],0,-30.1,-105,30).s().p("AoNpYIQbJYIwbJZg");
	this.shape.setTransform(52.6,60.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,105.1,120.2), null);


(lib.Sprite313 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6IcIAAgFIABgEIAAgJIAAgcIABgHIAAhTQABgMADgBQAEAAABAHIgBACIAACKIAfAAIACABIABADIgBADIgCABIgfAAIgDAAIgCABQgFgBAAgGgAg2DXIBsrpIAAgQIAFANIheQFg");
	this.shape.setTransform(7.6,421.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFFFF"],[0,1],-142.4,237.8,0,-142.4,237.8,571.8).s().p("EgaWAlKIABgDIgBgDIgDgBIgegBIAAiJIAAgCQAAgHgEAAQgEABgBALIAABUIgBAHIAAAbIAAAOMgASgmTMAAGgjqIF2gIICKAIITXAAIbJgNIgCUDIgPQ1IgqTSIgDOOIgWD6Mg0XAADgA5RUVIhtLqIATEaIBfwGIgFgNg");
	this.shape_1.setTransform(174.8,237.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sprite313, new cjs.Rectangle(0,0,349.5,475.8), null);


(lib.Shape338 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF"],[0,1],-142.9,238.6,0,-142.9,238.6,573.7).s().p("EgbOAlMMgAOglAMAACglcIFqgFICtAKIN6AFMAgmgAIIgCUDIgPQ1IgqTTIgDOSIgWD1Mg1AAASg");
	this.shape.setTransform(259.3,351.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83.5,112.8,351.5,478);


(lib.Shape337 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF"],[0,1],-144,241.8,0,-144,241.8,578.7).s().p("EgblAl0MgASgmRMAAFglgIFeADIEYARIUWAZIZeAAIgDUCIgPQ2IgqTSIgDOTIgWD1I8CASI5tAqg");
	this.shape.setTransform(256.6,352);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.3,109,356.8,486);


(lib.Shape336 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF"],[0,1],-145.5,247.3,0,-145.5,247.3,585.5).s().p("EgcCAm1IgP+/MAADgu0IFiANIDwAZITLA3IPZARIMqAAIgCUCIgPQ2IgrTSIgCOTIgXD1IuHAKItxAZIuvArIsBAvg");
	this.shape.setTransform(254,352);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73,102.5,362,499);


(lib.Shape335 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF"],[0,1],-146.1,254.7,0,-146.1,254.7,592.6).s().p("EgcJAoTIgGgrIgP/mMAAGgwZIFxAhIEOAlIPLBOIEtARINoAeINXAFIgCUDIgPQ1IgqTSIgDOTIgWD1Iv1AUIu6AyIt9BJIqABGg");
	this.shape.setTransform(252.8,351.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70.5,93.5,364.5,516.8);


(lib.Shape334 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF"],[0,1],-125.9,130.7,0,-125.9,130.7,479.6).s().p("Egb3Ap5MgARgkkMAAFgvVIFlA1IDcAtINmBuIGPAlIKKAoIFNANIL/AHIgCUDIgPQ1IgrTSIgCOTIgXD1Io8AKInFAUItYBBIpCBBIlbAwIqSBug");
	this.shape.setTransform(254.9,351.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.8,83,360.3,537.8);


(lib.Shape333 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F3F3F3"],[0,1],-38,128.7,0,-38,128.7,437.2).s().p("EgaxAsxMgAPgrwMAAFgt5IElBMIDrBIIKUCHIF8A/IKzBKIGVAcIHUARIFAADIgDS8IgPQ4IgqTfIgDPZIgZEOIpuAXInUAjIl8AoImyA8IoIBcIlUBLImrBxIiPAtg");
	this.shape.setTransform(257.6,352);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84.8,64.8,345.8,574.5);


(lib.Shape332 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D9D9D9"],[0,1],30,128.2,0,30,128.2,482).s().p("EgXdAxpIgG4zMAAAhKjIEqC0ICRBGID4BhICxA8IE2BYIGcBXIGXA+IIrA4IHMAWIACUKIgRS0IgoRlIgDPyIgYEOIpsAyIlUArInnBUIlFBMIkvBXIigA3IkOBuIj3CCIieBsg");
	this.shape.setTransform(266.5,352.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.8,34,301.5,636.5);


(lib.Shape331 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#C2C2C2"],[0,1],35.3,260.5,0,32.9,260.5,602.7).s().p("EgPcgyNIBIBbIBNBGIBWA+IB9BJIBYApICQA6IBnAkICjAxIEgBGIC+AkIE9AvIFGAhIgCUvIgQS+IgqUCIgCPLIgXEQIgBAEIjvAcIi8AcIk4A8IiYAlIiQAoIicAyIiCAvIh2AyIh4A8IhgA6IhgBGIg+A4IhDBQIgPAbg");
	this.shape.setTransform(298,352.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#787878","#717171"],[0,1],2.4,349.5,0,2.4,349.5,699).s().p("EgAbA2CMAAAhrIIAJgtIASgsIAEgIIAXAAIAAE7MgACBkcIgBD3IgpABg");
	this.shape_1.setTransform(196.4,349.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(193.6,0,203.5,699.1);


(lib.Shape330 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FEFEFE","#CECECE"],[0,1],13.6,-133.7,0,11.7,-133.7,476.5).s().p("EgByAibMAAHglmMgAGgmyIBlAXICFAXIgEW/IgOSQIglULIgEQ3IgWEWIigAlg");
	this.shape.setTransform(358.3,351.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#CBCBCB","#969696"],[0,1],43.9,322,0,43.9,322,675.5).s().p("EgFhA2oIgegdIgwhNIgYhOMAAAhmcIAXhOIAthIIBShXIASgOILgAAIAAM+MAAHAmyMgAIAlmIgFHiIgFMXg");
	this.shape_1.setTransform(301.9,349.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(256.4,0,114,699.1);


(lib.Shape329 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#B7B7B7"],[0,1],88.4,2.1,0,88.4,2.1,389.4).s().p("EgNpA2oIgZgOIhchBIhJhMIgqhHIgNhGMAAAhjFIANhCIArhHIBFhEIBshLICOhKIc/AAMAAHA30MgAXA1bg");
	this.shape.setTransform(398.9,349.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(287,0,223.9,699.1);


(lib.Shape328 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#C8C8C8"],[0,1],140.9,2,0,140.9,2,437.1).s().p("EgRVA2oIhsgpIiGhBIhnhDIhKhKIgnhHIgHg+MAAAhgmIAHg7IAjg/IBGhHIBlhBICJhAICog7ICxgwMAmRAAAMAAFA3yMgARA1dg");
	this.shape.setTransform(446.8,349.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289.3,0,315.1,699.1);


(lib.Shape327 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D5D5D5"],[0,1],106.9,174,0,106.9,174,559.6).s().p("EgMMA2iIhhgPIjQgtIi5g3IiOg6Ihvg+IhKg9IgxhFIgHgRIgEgaMgAEhflIANg1IAkg0IARgTIA/gyIB5hCICUg5ICmguIDRgsIDhggIEEgYIEZgLIDzAAIE4AOIC5APIDsAfID/AyICMAqICfA5IB5AzIAyAjIAmAiIAtA4MgADBhpIgFAVIgkApIhZBBIh6A/IicA5IiuAwIkEAyg");
	this.shape.setTransform(430.7,350.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(264.5,1.1,332.4,698);


(lib.Shape326 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D9D9D9"],[0,1],81.8,166.6,0,81.8,166.6,537.8).s().p("EgGPA1RIjSgPIkYgjIjAgmIiNglIiig6IgmgRIgJgNIgNkxIgD1XIgb+2MgAIgqvIADgIIB2g3IBwgoICygtIDHgjID1gbIDNgNIEYgFIEVAKIDfASIDCAZID6AqIDaA1IB9AoICiBGIBqBGIAtA0IAZA6MAAABc6IgcBBIg3A6IhhBBIiDA8Ii0A8Ii7AtIjNAlIjLAZIknAXIi6AFg");
	this.shape.setTransform(378.5,352.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(230.3,11.3,296.5,682.8);


(lib.Shape325 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#EEEEEE"],[0,1],59.7,162.8,0,59.7,162.8,524.3).s().p("EgJTA0TIjhgMIk0glIgZlXIgH3NIgr4pIgR8AIAA1pICdgeIDhgWIDVgLIEpAAID1ANID5AZIDfAgIDSArIC2AyICbA3IB4A5IBpBLIAjApIAZA+MAAABadIgRA5IgyA8IhfBEIiAA8IiRA0IjFA1IiyAjIjyAjIj0AWIjhAKg");
	this.shape.setTransform(327.1,352.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(205,17.5,244.3,669.5);


(lib.Shape324 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FCFCFC"],[0,1],25.2,321.3,0,25.2,321.3,664.6).s().p("EgMTA0BIgjltIgC0mIg55gIgX5+IgC6QIDqADIDaAMIEGAcIEBAoIC0AlIDGA1ICHAvICgBLIBeBBIAzA1IAZA5MAAABZcIgVAyIg7BGIhgA/IiEA+Ii7A/IitAtIi+AlIj+AmIjrAWIj1ANg");
	this.shape.setTransform(285.5,351.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(194.8,19,181.5,665.8);


(lib.Shape323 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#EAEAEA"],[0,1],-35.9,165.5,0,-37.8,165.5,495.3).s().p("EgHtAt0IgCmVIgDuYIg565IgU3wIgDtrIAAsOIDrAlIDNArIC7AxIC2A/ICCA5IBiA6IBIA/IAoA7IAIAyMgAFBY8IgmA+IhLBCIhuA+Ih/A3Ii+A/Ii4AvIk2A5g");
	this.shape.setTransform(261.6,351);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFFFF"],[0,1],1.2,126.3,0,1.2,126.3,378.4).s().p("EgBtAnXIgRgIIgDgeIgM5MMAACg0zIDHgIIADNrIAUXwIA5a6IADOYg");
	this.shape_1.setTransform(197.8,351.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(183.5,21.8,136,658.5);


(lib.Shape322 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E6E6E6","#CBCBCB"],[0,1],-26,-161.1,0,-27.9,-161.1,480.7).s().p("EgDGAxmIgUkqIAAkpIgCvUIgy/wMgAKgg0IgDqWICZAyICLA8IB1BBIBkBSIAmAtIAUA6MAAABZFIgUA3IgyBBIhJA3IiJBOIjCBNg");
	this.shape.setTransform(256.6,350.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#F2F2F2"],[0,1],-28.5,250.3,0,-28.5,250.3,513.8).s().p("EAGzAneIivgPIkXgKIk2AFIkTASIgUgKIgP8cMAADgybIKBAXIFCgSID7gbMAAKAg0IAyfvIACPUg");
	this.shape_1.setTransform(170.8,352.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(106.8,30.8,178.3,639.3);


(lib.Shape321 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AFAFAF","#A6A6A6"],[0,1],-4.9,-154.3,0,-6.7,-154.3,460.7).s().p("EgAnAqwIgD1VIgW7/MgAFgjSIAAmBIBKA/IAoA0IAZBBMAAABalIgXBBIgtA5IgfAcg");
	this.shape.setTransform(269.5,350.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#CDCDCD"],[0,1],-69.4,250.5,0,-69.4,250.5,554.3).s().p("EAPzAp1IhSglIh2goIh/ggIkWgtIjSgUIkXgNImmAFIn0AoIghgHMgARggMMAAFgvOIFyAWIDrAXIIHgFIDKgMIEbghIB/gZIDkhEIBwg2MAAFAjRIAXcAIACVVg");
	this.shape_1.setTransform(159.9,353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.3,43.8,222.3,612.8);


(lib.Shape320 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#BABABA"],[0,1],-101.3,253.6,0,-101.3,253.6,595.7).s().p("EAUpAseIgvgqIhfg/IhVgoIjzhNIkGg1IkvglIlEgUInYgDIoNAcIkgAeIgjgIMgAUginMAADgs/IFZAZID/AcIIZAKIFYgKIDugSICsgWIC+ghICjglIB9gmICMg5IB6hGIA8g3IAog1IAXg3MgAKBbNg");
	this.shape.setTransform(162.6,350.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.8,58.3,275.8,583.8);


(lib.Shape319 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D5D5D5"],[0,1],-123.9,252.6,0,-123.9,252.6,601.8).s().p("EAWSAqhIiYgvIj1g8InAhGIlAgeIoCgUInYAFIoDAbIk7AeIgcgHIgHhLMgASgnDMAAIgnCIFtAXIEJAbIH5ANIHhgFIEigSIHRg3IFFg+IDBgyIB/grIDBhQMgAKAshIgXUwIgCRbIgND/g");
	this.shape.setTransform(176.4,350.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.5,73,321.8,554.8);


(lib.Shape318 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#EBEBEB"],[0,1],-137.1,250.1,0,-137.1,250.1,601).s().p("EAR/AoBIlPglIlbgcIlhgRIqTgIIlbAIIouAbIjyAUIgZgKMgASggEMAAFguSIFwASID1AWIHCANIItACIErgKIHbggIF3goIGig/IETg3IgDXkIgMSJIgjT7IgDQ2IgUEJg");
	this.shape.setTransform(196.6,350.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.3,86.3,346.8,528.8);


(lib.Shape317 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F7F7F7"],[0,1],-142.6,246.3,0,-142.6,246.3,594).s().p("EAT+AnCInygeIssgZIqEAAIm2AKIpdAbIglgIIgIhtMgAPggAMAAFgrWIGBAKIDXARINmANIFJgDIIBgRIG9gZIMdhGIAARlIgRWdIgpTDIgCP/IgXEJg");
	this.shape.setTransform(219,351);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41,97.5,356,507);


(lib.Shape316 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FDFDFD"],[0,1],-143.7,242.4,0,-143.7,242.4,584.1).s().p("EAOyAl6IsCgMI0aAFIplAPIgRgKMgASglAMAAFgmnIFeAAIDmAPIUCAFIPtgZIKtgeIgDT4IgRTDIgoRtIgDPvIgZEOg");
	this.shape.setTransform(239.6,351.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.8,106,355.8,490.3);


(lib.Shape315 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF"],[0,1],-143,239.2,0,-143,239.2,575.5).s().p("EgbMAlUMgASgm5MAAFgjoIFIgGICnAKIVeADIZrgWIgDS5IgPQ+IgqTbIgDPcIgZEMg");
	this.shape.setTransform(254.6,351.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.8,111.5,351.8,479.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AhoAXIkalHIEBgCICICjIB4ixIEAgYIj2FjID6EpIjyAFIh5iMIhoCYIjxAUg");
	this.shape.setTransform(419.8,268.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AhYgGIhFASIARh0IDohwIBCKvIjRAXgAg+krQgYgKgOgUQgPgTgFgcQgCgoASgjQARgkAqgGQAhgCAYAKQAYAKARAPQAQAOAGAMQAHAMABAPQABAXgJAZQgJAYgNARQgNASgMADQgZAFgLABIgIAAQgaAAgUgIg");
	this.shape_1.setTransform(367.1,258.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA1D24").s().p("AmRDiQgHgogEgjQgEgjgDgoQgBgSABggIgXkQIC3ghIAcAeQBJgcAvgDQA0gDAwAZQB3gsA7gEQAugCAjASQArAWAzA3QA0A2AOAxQAeBjAEBJQACAngDAsQgDArgHBFIjDAVQAAgXgDgsQgJi3g6h9QgKgXgOgMQgNgNgKABQgKAAABAPIACAOQAEAIAEAMQAfBjAEBJQABAkgCAnQgDAngHBRIjCAWQAAgXgDgsQgJi4g7h9QgGgPgEgQQgFgRgBAAQgCABgHAWIgSAvQgGAQgDAVQgDAWgBAZQgBAaACAkQAEBIAOBvIjkAmQgIgogHgpg");
	this.shape_2.setTransform(308.4,273.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhpFOQglgJgbgSQgugegdg4Qgdg4gHhBQgMhwA5hMQAyhAA5glQA4gkA+gGIAZgCIAEADIC6hsIAfEEQAGAYADAfQADAagBANIAkEdIjQAhIgDgcQgxAag0AGIgaABQgaAAgYgFgAgYh+QgYAQgPATQgQAUgIAWQgIAXACAUQAFAqArAWQAmAUAjgEQAHgBAMgDIgLhiQgMABgLgFQgOgKgDggQgFgtAhgdQgYAGgYAQg");
	this.shape_3.setTransform(392.5,172.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AAGG+Qg5gbgqgpQgUgTgOgvQgPgwgIg1QgJg0gFg0IgGg1IiJATIg4jOICvgHIghjUIDChyIAcE6ICZgMIATCyIieATQgBBDAGA6QAFAwAJAfQAHAaAUAMQAUAMAZgDQAcgCATgTQATgSgDgdIgEgQICOhzQAMARATApQATAqAGAyQAGA9gbA1QgbA1hLAiQg1AXgwAGQgQACgQAAQg3AAgugVg");
	this.shape_4.setTransform(323.5,166.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0099").s().p("AhlgEIhEAWIALh0IDhh8IBnKqIjQAigAhakqQgYgIgQgTQgQgTgGgbQgEgoAQglQAQgkApgIQAhgEAZAJQAZAIAQAOQARAOAHAMQAHALABAPQADAXgIAZQgHAYgMASQgMATgMAEQgXAGgMACIgQABQgWAAgRgHg");
	this.shape_5.setTransform(278.4,177.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F28020").s().p("AjzBEIgEgzIglkOIC1grIAeAdQAfgPAcgLQAZgLAYgHQAXgHAYgDQAtgFAmASQAuAUAdAYQAdAYAQAvIiaB8QgPgegWgUQgXgUgWACQgeADgQAzQgPAxAMB0QAIBRAVBuIjhAyQgkiOgLhxg");
	this.shape_6.setTransform(230.6,191.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF00").s().p("Aj0BEIgDgzIglkOIC1grIAeAdQAfgPAcgLQAZgLAXgHQAZgHAXgDQAtgFAmASQAuAUAdAYQAdAYAQAvIiaB8QgOgegXgUQgXgUgVACQggADgPAzQgPAxAMB0QAJBRAUBuIjhAyQgkiOgMhxg");
	this.shape_7.setTransform(170.1,198.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E71F22").s().p("AhpFOQglgJgbgSQgugegdg4Qgdg4gHhBQgMhwA5hMQAyhAA5glQA4gkA+gGIAZgCIAEADIC6hsIAfEEQAGAYADAfQADAagBANIAkEdIjQAhIgDgcQgxAag0AGIgaABQgaAAgYgFgAgYh+QgYAQgPATQgQAUgIAWQgIAXACAUQAFAqArAWQAmAUAjgEQAHgBAMgDIgLhiQgMABgLgFQgOgKgDggQgFgtAhgdQgYAGgYAQg");
	this.shape_8.setTransform(116.4,201.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCFF").s().p("AhYHFQg+gNgvggQg/grgbgtQgcgtgHhDQgFgqAChcIDnhRIACAuIADAeQADAaAEASQAFASAJASQAJAQAQAPQApAoAagDQASgCALgSQALgSAIgfQAPg1gOiFQgGg6gIg0IgZiYIgaibID7gGQAPA7AQBaQAPBaAJBbQAGA0ADAuIADBXQAAAqgDAnQgEAmgGAfQgHAhgaArQgaAqggAlQggAlgZATQg0AlhQAIQgTACgTAAQgpAAgqgJg");
	this.shape_9.setTransform(51.3,194.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,709.3,383.8), null);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol208();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,442,131.5);
	this.instance.cache(-2,-17,888,245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-442,-146.2,884.1,241);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol207();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.1,1,1,0,0,0,442,31.9);
	this.instance.cache(-2,-2,905,344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-442,-32,901.3,339.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol126();
	this.instance.parent = this;
	this.instance.setTransform(-263.7,-101,0.577,0.577,0,0,0,510.4,210.1);
	this.instance.cache(-2,-2,1025,424);

	this.instance_1 = new lib.Symbol126();
	this.instance_1.parent = this;
	this.instance_1.setTransform(206.3,-101,0.577,0.577,0,0,0,510.4,210.1);
	this.instance_1.cache(-2,-2,1025,424);

	this.instance_2 = new lib.Symbol127();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-23.4,-228.1,0.694,0.461,0,0,180,848.4,488.3);
	this.instance_2.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_2.cache(-2,131,1936,889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-783.5,-400,1360,427);


(lib.Símbolo54copia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Sprite313();
	this.instance.parent = this;
	this.instance.setTransform(-190,-86.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo54copia, new cjs.Rectangle(-190,-86.9,349.5,475.8), null);


(lib.Símbolo54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.Symbol184();
	this.instance.parent = this;
	this.instance.setTransform(-31.5,139.9,1,1,0,0,0,148.8,166.2);
	this.instance.cache(-2,-5,302,343);

	this.instance_1 = new lib.Symbol183();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.4,144.1,1,1,0,0,0,148.8,186.5);
	this.instance_1.cache(-2,-2,302,377);

	this.instance_2 = new lib.Symbol182();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-20.5,153.7,1,1,0,0,0,179.8,227.9);
	this.instance_2.cache(-2,-2,364,460);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},51).to({state:[{t:this.instance_1}]},50).to({state:[]},130).to({state:[{t:this.instance_2}]},50).to({state:[]},130).wait(50));

	// Capa 1
	this.instance_3 = new lib.Sprite313();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-190,-86.9);

	this.instance_4 = new lib.Shape315("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-275.5,-200.4);

	this.instance_5 = new lib.Shape316("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-275.5,-200.4);

	this.instance_6 = new lib.Shape317("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-275.5,-200.4);

	this.instance_7 = new lib.Shape318("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-275.5,-200.4);

	this.instance_8 = new lib.Shape319("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-275.5,-200.4);

	this.instance_9 = new lib.Shape320("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-275.5,-200.4);

	this.instance_10 = new lib.Shape321("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-275.5,-200.4);

	this.instance_11 = new lib.Shape322("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-275.5,-200.4);

	this.instance_12 = new lib.Shape323("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-275.5,-200.4);

	this.instance_13 = new lib.Shape324("single",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-275.5,-200.4);

	this.instance_14 = new lib.Shape325("single",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-275.5,-200.4);

	this.instance_15 = new lib.Shape326("single",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-275.5,-200.4);

	this.instance_16 = new lib.Shape327("single",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-275.5,-200.4);

	this.instance_17 = new lib.Shape328("single",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-275.5,-200.4);

	this.instance_18 = new lib.Shape329("single",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-275.5,-200.4);

	this.instance_19 = new lib.Shape330("single",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-275.5,-200.4);

	this.instance_20 = new lib.Shape331("single",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-275.5,-200.4);

	this.instance_21 = new lib.Shape332("single",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-275.5,-200.4);

	this.instance_22 = new lib.Shape333("single",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-275.5,-200.4);

	this.instance_23 = new lib.Shape334("single",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-275.5,-200.4);

	this.instance_24 = new lib.Shape335("single",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-275.5,-200.4);

	this.instance_25 = new lib.Shape336("single",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-275.5,-200.4);

	this.instance_26 = new lib.Shape337("single",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-275.5,-200.4);

	this.instance_27 = new lib.Shape338("single",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(-275.5,-200.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},51).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_3}]},130).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_3}]},130).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(53).to({_off:true},2).wait(176).to({_off:false},0).wait(2).to({_off:true},2).wait(176).to({_off:false},0).wait(2).to({_off:true},2).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-86.9,349.5,475.8);


(lib.Symbol222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 1
	this.instance = new lib.Symbol124();
	this.instance.parent = this;
	this.instance.setTransform(122.2,52.8,0.621,0.651,0,-17.5,0,169.8,84.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.3,105.4);


(lib.Symbol216 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAkBmIAAiZIAAAAIgYCZIgaAAIgWiZIgBAAIAACZIgcAAIAAjLIAtAAIAUCQIABAAIATiQIAuAAIAADLg");
	this.shape.setTransform(625.3,211.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBbQgNgOAAgXIAAhqQAAgZANgNQAMgOAXAAQAYAAAMAOQANANAAAZIAABqQAAAXgNAOQgMANgYAAQgXAAgMgNgAgPg3IAABvQAAATAPAAQAQAAAAgTIAAhvQAAgTgQgBQgPABAAATg");
	this.shape_1.setTransform(611.7,211.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBcQgMgOAAgXIAAhsQAAgZAMgNQAMgNAWAAQAWAAANANQAMANAAAZIAAAVIgfAAIAAgYQAAgSgPgBQgPABAAASIAABxQAAATAPgBQAPABAAgTIAAggIAfAAIAAAeQAAAXgMAOQgNANgWgBQgWABgMgNg");
	this.shape_2.setTransform(600.5,211.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_3.setTransform(592,219.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBmIAAjLIAgAAIAACuIAzAAIAAAdg");
	this.shape_4.setTransform(584.7,211.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBmIAAjLIAfAAIAADLg");
	this.shape_5.setTransform(576.6,211.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXBmIgGgpIAAAAIgjAAIgGApIgeAAIAhjLIAqAAIAiDLgAgPAiIAcAAIgNhjIgBAAg");
	this.shape_6.setTransform(567.9,211.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBmIAAiZIgBAAIgXCZIgZAAIgYiZIAAAAIAACZIgcAAIAAjLIAtAAIAUCQIAAAAIAViQIAtAAIAADLg");
	this.shape_7.setTransform(554.3,211.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBbQgNgNAAgYIAAhqQAAgZANgNQAMgOAWAAQAYAAALAOQAMANABAZIAAARIgfAAIAAgUQAAgTgQgBQgPABAAATIAABvQAAATAPAAQAQAAAAgTIAAgoIgPAAIAAgcIAuAAIAABCQgBAYgMANQgLANgYAAQgWAAgMgNg");
	this.shape_8.setTransform(540.9,211.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhGBZQgXgcAAguQAAgkANgeQAMgeAYgRQAYgRAhAAQArAAATAXQATAYAAAmQAAAfgJAVQgJAUgNAJQgNAJgNAAQgXAAgCgUIgBAAQgEAKgHAEQgFAEgKAAQgNAAgHgJQgHgJAAgQIAAgLIAEgcQAEgqAegBQASABAFARIABAAIACgQIAbAAIgIBQIgBAEQABAGAFAAQAMAAAGgVQAGgSAAgYQAAgdgPgQQgOgQgdAAQglgBgUAdQgVAdABAxQAAAkAQAUQASATAgAAQASAAAOgEQAOgEAOgLIgDAbQgNAKgOADQgPAEgQAAQgvAAgXgbgAgGgZQgDADgBALIgEAXIAAAFQAAAHAEADQADAEAGAAQANAAADgSIADgbIAAgDQgBgGgDgDQgEgEgFAAQgGAAgFAFg");
	this.shape_9.setTransform(525.1,211.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARBmIgliUIgBAAIAACUIgcAAIAAjLIAoAAIAeB5IAAAAIAAh5IAdAAIAADLg");
	this.shape_10.setTransform(508.8,211.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiBcQgMgOAAgXIAAhsQAAgZAMgNQAMgNAWAAQAWAAANANQAMANAAAZIAAAVIgeAAIAAgYQAAgSgQgBQgPABAAASIAABxQAAATAPgBQAQABAAgTIAAggIAeAAIAAAeQAAAXgMAOQgNANgWgBQgWABgMgNg");
	this.shape_11.setTransform(497.2,211.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpBmIAAjLIAgAAIAACuIAzAAIAAAdg");
	this.shape_12.setTransform(486.9,211.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiBbQgMgNgBgYIAAgNIAfAAIAAAPQAAATAQAAQAHABAFgGQADgEAAgLQABgNgGgKQgGgJgPgNQgTgRgJgOQgHgPAAgRQAAgYAMgNQAMgOAXAAQAWAAAMAOQAMANAAAZIAAAIIgeAAIAAgLQAAgKgEgEQgEgGgIAAQgPAAAAAUQAAALAFAKQAHAJAPAOQATAQAIAPQAIAOAAATQAAAZgNANQgMANgXAAQgXAAgLgNg");
	this.shape_13.setTransform(476.1,211.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjBbQgMgOAAgXIAAhqQAAgZAMgNQAMgOAXAAQAXAAANAOQAMANAAAZIAABqQAAAXgMAOQgNANgXAAQgXAAgMgNgAgQg3IAABvQAAATAQAAQARAAAAgTIAAhvQAAgTgRgBQgQABAAATg");
	this.shape_14.setTransform(464.9,211.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBmIAAjLIAfAAIAADLg");
	this.shape_15.setTransform(456.4,211.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiBcQgMgOAAgXIAAhsQAAgZAMgNQAMgNAWAAQAWAAANANQAMANAAAZIAAAVIgeAAIAAgYQAAgSgQgBQgPABAAASIAABxQAAATAPgBQAQABAAgTIAAggIAeAAIAAAeQAAAXgMAOQgNANgWgBQgWABgMgNg");
	this.shape_16.setTransform(448.2,211.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjBbQgMgOAAgXIAAhqQAAgZAMgNQANgOAWAAQAXAAANAOQANANAAAZIAABqQAAAXgNAOQgNANgXAAQgWAAgNgNgAgQg3IAABvQAAATAQAAQAQAAAAgTIAAhvQAAgTgQgBQgQABAAATg");
	this.shape_17.setTransform(436.7,211.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiBbQgNgNAAgYIAAhqQAAgZANgNQAMgOAWAAQAYAAALAOQAMANABAZIAAARIgfAAIAAgUQAAgTgQgBQgPABAAATIAABvQAAATAPAAQAQAAAAgTIAAgoIgPAAIAAgcIAuAAIAABCQgBAYgMANQgLANgYAAQgWAAgMgNg");
	this.shape_18.setTransform(425.3,211.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgqBmIAAjLIBVAAIAAAeIg2AAIAAA1IArAAIAAAcIgrAAIAAA/IA2AAIAAAdg");
	this.shape_19.setTransform(414.6,211.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AARBmIgliUIAAAAIAACUIgdAAIAAjLIAoAAIAeB5IAAAAIAAh5IAdAAIAADLg");
	this.shape_20.setTransform(402.8,211.2);

	this.instance = new lib.Symbol117();
	this.instance.parent = this;
	this.instance.setTransform(376.4,211.2,0.285,0.285,0,0,0,58,38.3);

	this.instance_1 = new lib.Symbol105();
	this.instance_1.parent = this;
	this.instance_1.setTransform(145.4,210.3,0.07,0.07,0,0,0,260.3,261.7);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-2,-2,524,524);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiBbQgNgNAAgZIAAgDIAfAAIAAAFQAAAVAQAAQAIAAAEgGQAFgFAAgOIAAgoIgBAAQgJATgTgBQgSAAgJgMQgIgMgBgVIAAglQAAgYANgNQAMgNAXAAQAXAAANANQAMANAAAYIAABpQABA1gxAAQgXAAgLgOgAgPg3IAAAkQAAATAPAAQAQAAABgTIAAgkQgBgTgQAAQgPAAAAATg");
	this.shape_21.setTransform(319.3,210.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AguBnIAAgWQgBgWAIgQQAGgPASgSQARgTAGgNQAHgNABgOQAAgOgFgFQgEgFgHAAQgRAAAAAUIAAAWIgdAAIAAgUQgBgZAMgMQANgOAWAAQAXAAAMAOQAMAMAAAZQAAASgJATQgIAQgWAXQgNAPgFAJQgFAKAAAKIAAAFIA7AAIAAAdg");
	this.shape_22.setTransform(307.9,210.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AABBlIAAiaIghAAIAAgWQAOAAAIgDQAJgBAEgGQAEgFAEgKIAWAAIAADJg");
	this.shape_23.setTransform(295.9,210.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgvBnIAAgWQAAgWAIgQQAGgPASgSQARgTAGgNQAIgNgBgOQAAgOgDgFQgFgFgHAAQgRAAAAAUIAAAWIgeAAIAAgUQAAgZAMgMQAMgOAXAAQAXAAAMAOQANAMAAAZQgBASgIATQgJAQgWAXQgNAPgFAJQgFAKAAAKIAAAFIA7AAIAAAdg");
	this.shape_24.setTransform(284.7,210.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAPIAAgcIA/AAIAAAcg");
	this.shape_25.setTransform(274.8,210.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjBbQgLgNAAgYIAAgRIAeAAIAAASQAAAVAQAAQAIgBADgFQAFgEAAgNIAAgRQAAgOgFgGQgFgGgKAAIgLAAIAAgcIAMAAQAIAAAFgFQAFgFAAgLIAAgPQAAgKgFgGQgEgEgGAAQgQgBAAAUIAAANIgdAAIAAgLQgBgYAMgOQANgMAVAAQAXAAAMAMQAMANAAAYIAAAIQAAARgFAKQgHAKgLAEIAAABQANAEAFAJQAGALgBAQIAAASQABAYgMANQgNANgXABQgWgBgNgNg");
	this.shape_26.setTransform(265,210.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgiBaQgNgNAAgZIAAgQIAfAAIAAASQgBAUARAAQAPAAAAgUIAAgtQAAgUgPABQgRgBABAUIAAACIgfAAIAGhxIBTAAIAAAdIg3AAIgCAwIAAAAQAKgPARAAQARAAAJANQAKALgBAWIAAAuQABAZgMANQgMANgYAAQgWAAgMgNg");
	this.shape_27.setTransform(253.6,210.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjBbQgNgNAAgZIAAhoQAAg0AwAAQAYAAALANQANANAAAYIAAAFIgfAAIAAgHQAAgTgQAAQgIgBgFAGQgDAFAAAPIAAAnIAAAAQAJgSATAAQASgBAJAMQAIAMABAWIAAAkQAAAZgNANQgMAOgYAAQgXAAgMgOgAgPATIAAAkQAAAVAPAAQAQAAAAgVIAAgkQAAgTgQAAQgPAAAAATg");
	this.shape_28.setTransform(242,210.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfAPIAAgcIA/AAIAAAcg");
	this.shape_29.setTransform(232.2,210.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgjBbQgMgNABgZIAAgDIAdAAIAAAFQAAAVARAAQAIAAAEgGQAEgFABgOIAAgoIgBAAQgIATgUgBQgSAAgIgMQgJgMAAgVIAAglQAAgYAMgNQAMgNAXAAQAXAAANANQAMANAAAYIAABpQAAA1gwAAQgWAAgNgOgAgQg3IAAAkQAAATAQAAQARAAAAgTIAAgkQAAgTgRAAQgQAAAAATg");
	this.shape_30.setTransform(222.4,210.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAHBlIAAglIg8AAIAAgdIA5iHIAiAAIAACHIAQAAIAAAdIgQAAIAAAlgAgYAjIAfAAIAAhOIgBAAg");
	this.shape_31.setTransform(210.9,210.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkBbQgNgNAAgYIAAgSQAAgPAFgKQAFgLALgEIAAgBQgKgFgFgKQgEgKgBgPIAAgJQAAgYANgNQAMgMAXAAQAYAAAMAMQANANAAAYIAAAJQAAAdgUALIAAABQALAEAFALQAFAKAAAPIAAASQAAAYgNANQgNANgYABQgXgBgNgNgAgRAhIAAAUQAAAXARAAQASAAAAgXIAAgUQAAgXgSAAQgRAAAAAXgAgQg2IAAAQQAAAUAQAAQARAAAAgUIAAgQQAAgVgRABQgQgBAAAVg");
	this.shape_32.setTransform(199.3,210.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AABBlIAAiaIghAAIAAgWQAOAAAIgDQAJgBAEgGQAEgFAEgKIAWAAIAADJg");
	this.shape_33.setTransform(182.8,210.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKAzIAAgoIgnAAIAAgWIAnAAIAAgnIAVAAIAAAnIAnAAIAAAWIgnAAIAAAog");
	this.shape_34.setTransform(171.4,210.3);

	this.instance_2 = new lib.Symbol102();
	this.instance_2.parent = this;
	this.instance_2.setTransform(336.2,146.2,1,1,0,0,0,211.5,57.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag3B3IAAjtIA4AAQAcAAAOAPQAOAPgBAdIAAB3QABAdgOAPQgOAPgcAAgAgSBVIASAAQAJAAAFgFQAFgGAAgMIAAh7QAAgMgFgGQgFgFgJAAIgSAAg");
	this.shape_35.setTransform(417.9,65.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAbB3IgHgvIAAABIgqAAIgHAuIgiAAIAnjtIAxAAIAnDtgAgRAoIAgAAIgPh1IgBAAg");
	this.shape_36.setTransform(404,65.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag3B3IAAjtIA4AAQAcAAAOAPQAOAPgBAdIAAB3QABAdgOAPQgOAPgcAAgAgSBVIASAAQAJAAAFgFQAFgGAAgMIAAh7QAAgMgFgGQgFgFgJAAIgSAAg");
	this.shape_37.setTransform(390.5,65.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgSB3IAAjtIAlAAIAADtg");
	this.shape_38.setTransform(380.1,65.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgoBrQgOgPAAgcIAAh/QAAgcAOgPQAOgQAaAAQAbAAAOAQQAOAPAAAcIAAAaIgjAAIAAgcQAAgXgTAAQgSAAAAAXIAACDQAAAXASAAQATAAAAgXIAAgkIAjAAIAAAiQAAAcgOAPQgOAPgbABQgagBgOgPg");
	this.shape_39.setTransform(370.5,65.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgSB3IAAjtIAlAAIAADtg");
	this.shape_40.setTransform(360.6,65.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgwB3IAAjtIAlAAIAADLIA9AAIAAAig");
	this.shape_41.setTransform(352,65.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag5B3IAAjtIA5AAQAcAAANANQANAOAAAcIAAAJQAAATgGALQgGAMgMAFIAAAAQAcAJAAAoIAAAVQAAAbgPAPQgOAOgcAAgAgTBVIAUAAQAKAAAFgFQAEgGAAgMIAAgVQAAgQgFgHQgGgGgMAAIgQAAgAgTgVIAOAAQAKAAAGgGQAGgFAAgOIAAgOQAAgNgFgFQgFgGgIAAIgSAAg");
	this.shape_42.setTransform(339,65.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgoBpQgPgPAAgdIAAi1IAmAAIAAC3QAAANAFAFQAFAGAIAAQAJAAAFgGQAFgFAAgNIAAi3IAkAAIAAC1QAAAdgOAPQgPAQgbAAQgaAAgOgQg");
	this.shape_43.setTransform(325,65.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag2B3IAAjtIA2AAQAbAAAOAPQAOAPABAdIAAAYQgBAcgOAOQgOAPgbAAIgRAAIAABhgAgRgLIARAAQAIAAAFgFQAFgFAAgNIAAgcQAAgMgFgFQgFgFgIAAIgRAAg");
	this.shape_44.setTransform(312.1,65.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAbB3IgHgvIAAABIgqAAIgHAuIgiAAIAnjtIAxAAIAnDtgAgRAoIAgAAIgPh1IgBAAg");
	this.shape_45.setTransform(292.8,65.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAUB3IgsitIAAAAIAACtIgiAAIAAjtIAvAAIAkCOIAAAAIAAiOIAiAAIAADtg");
	this.shape_46.setTransform(278.8,65.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgyB3IAAjtIBlAAIAAAiIg/AAIAAA/IAyAAIAAAhIgyAAIAABJIA/AAIAAAig");
	this.shape_47.setTransform(265.7,65.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgoBpQgPgPAAgdIAAi1IAmAAIAAC3QAAANAFAFQAFAGAIAAQAJAAAFgGQAFgFAAgNIAAi3IAkAAIAAC1QAAAdgOAPQgPAQgbAAQgaAAgOgQg");
	this.shape_48.setTransform(252.3,65.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag5B3IAAjtIA5AAQAcAAANANQANAOAAAcIAAAJQAAATgGALQgGAMgMAFIAAAAQAcAJAAAoIAAAVQAAAbgPAPQgOAOgcAAgAgTBVIAUAAQAKAAAFgFQAEgGAAgMIAAgVQAAgQgFgHQgGgGgMAAIgQAAgAgTgVIAOAAQAKAAAGgGQAGgFAAgOIAAgOQAAgNgFgFQgFgGgIAAIgSAAg");
	this.shape_49.setTransform(238.9,65.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgpBrQgOgQAAgcIAAgOIAkAAIAAAQQAAAXATABQAIgBAFgFQAFgGAAgNQAAgOgGgMQgHgLgSgQQgXgUgJgQQgJgRAAgUQAAgcAOgQQAOgQAbAAQAbAAANAQQAOAQAAAcIAAAKIgjAAIAAgMQAAgMgFgFQgFgHgJAAQgSAAAAAYQAAANAHAKQAHAMASAPQAXAUAJAQQAJASAAAWQAAAdgPAQQgOAQgbAAQgbgBgOgPg");
	this.shape_50.setTransform(220,65.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgpBrQgPgQAAgcIAAh9QAAgcAPgQQAOgQAbAAQAbAAAPAQQAPAQAAAcIAAB9QAAAcgPAQQgPAQgbAAQgbAAgOgQgAgThAIAACBQAAAXATABQATgBAAgXIAAiBQAAgYgTAAQgTAAAAAYg");
	this.shape_51.setTransform(206.9,65.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAqB3IAAizIAAAAIgbCzIgfAAIgbizIgBAAIAACzIggAAIAAjtIA1AAIAXCqIAAAAIAYiqIA2AAIAADtg");
	this.shape_52.setTransform(191,65.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAbB3IgHgvIAAABIgqAAIgHAuIgiAAIAnjtIAxAAIAnDtgAgRAoIAgAAIgPh1IgBAAg");
	this.shape_53.setTransform(175,65.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgoBrQgPgQAAgcIAAh9QAAgcAPgQQAOgQAaAAQAbAAAOAQQAPAQAAAcIAAAVIgjAAIAAgXQAAgYgUAAQgSAAgBAYIAACBQABAXASABQAUgBAAgXIAAgvIgTAAIAAghIA2AAIAABOQAAAcgPAQQgOAPgbABQgagBgOgPg");
	this.shape_54.setTransform(161.6,65.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAbB3IgHgvIAAABIgqAAIgHAuIgiAAIAnjtIAxAAIAnDtgAgRAoIAgAAIgPh1IgBAAg");
	this.shape_55.setTransform(148,65.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAUB3IAAhrIgnAAIAABrIglAAIAAjtIAlAAIAABhIAnAAIAAhhIAlAAIAADtg");
	this.shape_56.setTransform(134.1,65.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhDCdIAAk6ICGAAIAAAtIhUAAIAABTIBDAAIAAAtIhDAAIAABgIBUAAIAAAtg");
	this.shape_57.setTransform(535.1,26.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgYCdIAAkNIg0AAIAAgtICYAAIAAAtIgzAAIAAENg");
	this.shape_58.setTransform(518.3,26.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgYCdIAAk6IAxAAIAAE6g");
	this.shape_59.setTransform(505.7,26.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AA4CdIAAjtIgBAAIgkDtIgoAAIgkjtIgBAAIAADtIgrAAIAAk6IBGAAIAfDhIAAAAIAgjhIBHAAIAAE6g");
	this.shape_60.setTransform(489.3,26.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgnDCIAAk6IAwAAIAAE6gAgqiNIAgg0IA1AAIgvA0g");
	this.shape_61.setTransform(474.5,23.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AhBCdIAAk6IAyAAIAAENIBRAAIAAAtg");
	this.shape_62.setTransform(461.5,26.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ag2CLQgTgUAAgmIAAjwIAxAAIAADzQABAQAGAIQAHAHALAAQAMAAAHgHQAGgIAAgQIAAjzIAwAAIAADwQAAAmgTAUQgTAVgkAAQgjAAgTgVg");
	this.shape_63.setTransform(436.8,27);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgYCdIAAkNIgzAAIAAgtICYAAIAAAtIg0AAIAAENg");
	this.shape_64.setTransform(419.6,26.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAjCdIgJg+IAAABIg3AAIgJA9IguAAIAzk6IBCAAIA0E6gAgXA1IArAAIgVibIgBAAg");
	this.shape_65.setTransform(395.1,26.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhCCdIAAk6ICGAAIAAAtIhVAAIAABTIBDAAIAAAtIhDAAIAABgIBVAAIAAAtg");
	this.shape_66.setTransform(378.4,26.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Ag2CNQgTgUAAgmIAAgSIAvAAIAAAVQAAAfAaAAQALAAAHgHQAGgIAAgRQAAgUgJgPQgJgOgXgWQgfgZgMgWQgMgXAAgbQAAglATgVQATgUAjAAQAjAAATAUQASAVAAAmIAAANIgvAAIAAgQQAAgQgGgHQgHgIgMAAQgYAAAAAeQAAARAKAPQAJAPAXAVQAfAaAMAWQAMAWAAAeQAAAmgTAVQgTAVgkAAQgkAAgSgVg");
	this.shape_67.setTransform(361.4,26.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Ag2CNQgUgVAAglIAAilQAAglAUgWQATgUAjAAQAlAAATAUQATAWAAAlIAAClQAAAlgTAVQgTAVglAAQgjAAgTgVgAgYhVIAACrQgBAfAZAAQAaAAAAgfIAAirQAAgfgaAAQgZAAABAfg");
	this.shape_68.setTransform(336.8,26.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAbCdIg7jkIgBAAIAADkIgsAAIAAk6IA+AAIAwC8IAAAAIAAi8IAtAAIAAE6g");
	this.shape_69.setTransform(318.2,26.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Ag3CNQgTgVAAglIAAilQAAglATgWQAUgUAjAAQAlAAATAUQATAWAAAlIAAClQAAAlgTAVQgTAVglAAQgjAAgUgVgAgYhVIAACrQAAAfAYAAQAaAAgBgfIAAirQABgfgaAAQgYAAAAAfg");
	this.shape_70.setTransform(292.4,26.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AhBCdIAAk6IAyAAIAAENIBRAAIAAAtg");
	this.shape_71.setTransform(276.3,26.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhCCdIAAk6ICGAAIAAAtIhVAAIAABTIBDAAIAAAtIhDAAIAABgIBVAAIAAAtg");
	this.shape_72.setTransform(260.2,26.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgYCdIAAk6IAxAAIAAE6g");
	this.shape_73.setTransform(247.2,26.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ag1CNQgTgTAAgmIAAioQAAgkATgVQASgUAjAAQAjAAATAUQATAVAAAkIAAAiIgvAAIAAglQAAgdgZAAQgXAAAAAdIAACwQAAAcAXAAQAZAAAAgcIAAgxIAvAAIAAAsQAAAmgTATQgTAVgjAAQgjAAgSgVg");
	this.shape_74.setTransform(234.5,26.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhACdIAAk6IAxAAIAAENIBQAAIAAAtg");
	this.shape_75.setTransform(211.4,26.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AhCCdIAAk6ICGAAIAAAtIhVAAIAABTIBDAAIAAAtIhDAAIAABgIBVAAIAAAtg");
	this.shape_76.setTransform(195.2,26.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AhDCdIAAk6ICGAAIAAAtIhUAAIAABTIBDAAIAAAtIhDAAIAABgIBUAAIAAAtg");
	this.shape_77.setTransform(171.7,26.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("Ag2CLQgTgUAAgmIAAjwIAyAAIAADzQAAAQAGAIQAHAHALAAQAMAAAHgHQAGgIAAgQIAAjzIAwAAIAADwQAAAmgTAUQgTAVgkAAQgjAAgTgVg");
	this.shape_78.setTransform(154,27);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("ABECuQgiAAgHgeQgOAGgSAAQglAAgTgVQgTgVAAglIAAilQAAgmATgVQATgUAlAAQAjAAAUAUQATAVAAAmIAAClQAAAfgOAUQADAFAEABIALABIAIAAIAAAtgAgfhhIAACrQAAAfAaAAQAYAAAAgfIAAirQAAgfgYAAQgaAAAAAfg");
	this.shape_79.setTransform(136.6,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_2},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_1},{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol216, new cjs.Rectangle(0,0,756,232), null);


(lib.Symbol212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol164();
	this.instance.parent = this;
	this.instance.setTransform(83.8,156.8,4.455,4.455,0,0,0,18.8,35.2);

	this.instance_1 = new lib.Symbol164();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.5,166.6,4.455,4.455,0,0,0,18.8,35.2);
	this.instance_1.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol212, new cjs.Rectangle(0,0,182.4,325.4), null);


(lib.Symbol202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_135 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(135).call(this.frame_135).wait(1));

	// Layer 3
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1113.3,518.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).to({x:681.5,y:234.6},24,cjs.Ease.get(1)).to({startPosition:0},10,cjs.Ease.get(-1)).to({x:862.8,y:319.5},10).to({x:712.2,y:354.1},10).to({x:874.6,y:369.9},14).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_101 = new cjs.Graphics().p("AuoBOIAAkOIdRD3IAACLg");
	var mask_graphics_102 = new cjs.Graphics().p("AuWBpIgTlYIdTD4IAADng");
	var mask_graphics_103 = new cjs.Graphics().p("AuECEIgmmgIdVD3IAAFCg");
	var mask_graphics_104 = new cjs.Graphics().p("AtyCgIg6nrIdYD4IAAGeg");
	var mask_graphics_105 = new cjs.Graphics().p("AthC8IhMo1IdbD3IAAH8g");
	var mask_graphics_106 = new cjs.Graphics().p("AtPDYIhfp+IddD2IAAJYg");
	var mask_graphics_107 = new cjs.Graphics().p("As+D0IhxrIIdfD2IAAK0g");
	var mask_graphics_108 = new cjs.Graphics().p("AssEPIiEsSIdhD2IAAMRg");
	var mask_graphics_109 = new cjs.Graphics().p("AsaEqIiYtaIdlD1IAANsg");
	var mask_graphics_110 = new cjs.Graphics().p("AsIFGIirulIdnD1IAAPJg");
	var mask_graphics_111 = new cjs.Graphics().p("Ar2FiIi+vuIdpD0IAAQmg");
	var mask_graphics_112 = new cjs.Graphics().p("Ar5F6IjFwSIdrDzIASQ+g");
	var mask_graphics_113 = new cjs.Graphics().p("Ar8GSIjNw2IduDzIAlRWg");
	var mask_graphics_114 = new cjs.Graphics().p("Ar/GqIjUxaIdvDzIA4Rtg");
	var mask_graphics_115 = new cjs.Graphics().p("AsCHCIjcx+IdyDyIBKSGg");
	var mask_graphics_116 = new cjs.Graphics().p("AsFHaIjjyhId0DxIBdSeg");
	var mask_graphics_117 = new cjs.Graphics().p("AsIHzIjqzGId2DxIBvS2g");
	var mask_graphics_118 = new cjs.Graphics().p("AsLILIjyzqId5DxICBTOg");
	var mask_graphics_119 = new cjs.Graphics().p("AsOIjIj50NId7DwICUTlg");
	var mask_graphics_120 = new cjs.Graphics().p("AsRI7IkB0xId+DwICnT9g");
	var mask_graphics_121 = new cjs.Graphics().p("AsUJUIkI1WIeADvIC5UWg");
	var mask_graphics_122 = new cjs.Graphics().p("AsXJsIkP15IeCDuIDLUtg");
	var mask_graphics_123 = new cjs.Graphics().p("AsaKEIkX2dIeFDuIDeVFg");
	var mask_graphics_124 = new cjs.Graphics().p("AsdKcIke3BIeHDuIDwVdg");
	var mask_graphics_125 = new cjs.Graphics().p("AsgK0Ikm3kIeKDtIEDV0g");
	var mask_graphics_126 = new cjs.Graphics().p("AsjLMIkt4IIeMDtIEVWMg");
	var mask_graphics_127 = new cjs.Graphics().p("AsmLlIk04tIeODsIEnWlg");
	var mask_graphics_128 = new cjs.Graphics().p("AspL9Ik85QIeQDrIE7W8g");
	var mask_graphics_129 = new cjs.Graphics().p("AsrMVIlE50IeSDrIFNXUg");
	var mask_graphics_130 = new cjs.Graphics().p("AsvMuIlL6ZIeVDqIFfXtg");
	var mask_graphics_131 = new cjs.Graphics().p("AsyNGIlS69IeXDqIFyYEg");
	var mask_graphics_132 = new cjs.Graphics().p("As1NeIlZ7gIeZDpIGEYcg");
	var mask_graphics_133 = new cjs.Graphics().p("As4N2Ilh8EIecDpIGXY0g");
	var mask_graphics_134 = new cjs.Graphics().p("As6OOIlp8oIeeDpIGpZMg");
	var mask_graphics_135 = new cjs.Graphics().p("As+OnIlw9MIehDoIG8Zkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(101).to({graphics:mask_graphics_101,x:562.9,y:149.2}).wait(1).to({graphics:mask_graphics_102,x:563,y:154.3}).wait(1).to({graphics:mask_graphics_103,x:563.1,y:159.4}).wait(1).to({graphics:mask_graphics_104,x:563.3,y:164.5}).wait(1).to({graphics:mask_graphics_105,x:563.4,y:169.6}).wait(1).to({graphics:mask_graphics_106,x:563.5,y:174.7}).wait(1).to({graphics:mask_graphics_107,x:563.6,y:179.8}).wait(1).to({graphics:mask_graphics_108,x:563.7,y:184.9}).wait(1).to({graphics:mask_graphics_109,x:563.9,y:190}).wait(1).to({graphics:mask_graphics_110,x:564,y:195.1}).wait(1).to({graphics:mask_graphics_111,x:564.1,y:200.2}).wait(1).to({graphics:mask_graphics_112,x:565.1,y:201.8}).wait(1).to({graphics:mask_graphics_113,x:566.2,y:203.5}).wait(1).to({graphics:mask_graphics_114,x:567.2,y:205.2}).wait(1).to({graphics:mask_graphics_115,x:568.3,y:206.8}).wait(1).to({graphics:mask_graphics_116,x:569.3,y:208.5}).wait(1).to({graphics:mask_graphics_117,x:570.3,y:210.1}).wait(1).to({graphics:mask_graphics_118,x:571.4,y:211.8}).wait(1).to({graphics:mask_graphics_119,x:572.4,y:213.5}).wait(1).to({graphics:mask_graphics_120,x:573.5,y:215.1}).wait(1).to({graphics:mask_graphics_121,x:574.5,y:216.8}).wait(1).to({graphics:mask_graphics_122,x:575.5,y:218.4}).wait(1).to({graphics:mask_graphics_123,x:576.6,y:220.1}).wait(1).to({graphics:mask_graphics_124,x:577.6,y:221.8}).wait(1).to({graphics:mask_graphics_125,x:578.7,y:223.4}).wait(1).to({graphics:mask_graphics_126,x:579.7,y:225.1}).wait(1).to({graphics:mask_graphics_127,x:580.7,y:226.8}).wait(1).to({graphics:mask_graphics_128,x:581.8,y:228.4}).wait(1).to({graphics:mask_graphics_129,x:582.8,y:230.1}).wait(1).to({graphics:mask_graphics_130,x:583.9,y:231.8}).wait(1).to({graphics:mask_graphics_131,x:584.9,y:233.4}).wait(1).to({graphics:mask_graphics_132,x:585.9,y:235.1}).wait(1).to({graphics:mask_graphics_133,x:587,y:236.7}).wait(1).to({graphics:mask_graphics_134,x:588,y:238.4}).wait(1).to({graphics:mask_graphics_135,x:589.1,y:240.1}).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol221();
	this.instance_1.parent = this;
	this.instance_1.setTransform(577.3,242.1,1,1,0,0,0,121.2,77.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101).to({_off:false},0).wait(35));

	// Layer 5
	this.instance_2 = new lib.Symbol222();
	this.instance_2.parent = this;
	this.instance_2.setTransform(628.1,386.2,1,1,0,0,0,122.1,52.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_3 = new lib.Bitmap68();
	this.instance_3.parent = this;
	this.instance_3.setTransform(416,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(416,110,362,389);


(lib.Symbol201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol205();
	this.instance.parent = this;
	this.instance.setTransform(359.6,103.8,1,1,0,0,0,359.6,103.8);
	this.instance.cache(-2,-2,723,187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol201, new cjs.Rectangle(0,0,719.1,183.2), null);


(lib.Symbol199 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol198();
	this.instance.parent = this;
	this.instance.setTransform(190.5,114.5,1,1,0,0,0,190.5,114.5);
	this.instance.cache(-45,12,382,304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol199, new cjs.Rectangle(-43,14,377.5,300.2), null);


(lib.Symbol188 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArEGQgEgNgCgLQgBgKgBgeIAAhgQAAgkgLgOQgMgOgcAAIgcAAIAADgIhSAAIAAoLIB6AAQA/AAAdAdQAeAegBA9IAAAhQABBRg3AWIAAABQAeAJANAbQAMAcAAAvIAABcQAAAWABAOQACAOAGANgAgsgkIAeAAQAYAAANgNQALgNABgeIAAgpQAAgcgKgNQgLgNgUAAIgmAAg");
	this.shape.setTransform(242.6,46.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA7EGIgQhoIAAACIhcAAIgPBmIhMAAIBVoLIBuAAIBWILgAgnBZIBJAAIgkkDIgBAAg");
	this.shape_1.setTransform(211.8,46.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaDsQgggjAAg/IAAkTQAAhAAggiQAfgiA7AAQA8AAAfAiQAgAiAABAIAAAtIhOAAIAAgyQAAg0grAAQgpAAAAA0IAAEeQAAAzApAAQArAAAAgzIAAhnIgpAAIAAhKIB3AAIAACrQAAA/ggAjQgfAig8AAQg7AAgfgig");
	this.shape_2.setTransform(182.1,46.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaDoQgggiAAhAIAAmPIBSAAIAAGVQAAAbALAMQALAMAUAAQAUAAAKgMQALgMAAgbIAAmVIBQAAIAAGPQAABAgfAiQggAig8AAQg7AAgfgig");
	this.shape_3.setTransform(152.3,46.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhOEFIAAhLQAMADAPAAQAYAAANgMQAMgMAAgaIAAmSIBRAAIAAGQQAABAgeAfQgdAgg8AAQgWAAgQgDg");
	this.shape_4.setTransform(126.4,46.4);

	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(186.5,44,1.3,1.3,0,0,0,143.4,33.8);
	this.instance.shadow = new cjs.Shadow("rgba(231,65,149,1)",8,13,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol188, new cjs.Rectangle(-18,-13,426,141), null);


(lib.Symbol178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol210();
	this.instance.parent = this;
	this.instance.setTransform(169,51,1,1,0,0,0,169,51);
	this.instance.cache(-2,-2,342,106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol178, new cjs.Rectangle(0,0,338,102.1), null);


(lib.Symbol177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol209();
	this.instance.parent = this;
	this.instance.setTransform(359.6,56.3,1,1,0,0,0,359.6,56.3);
	this.instance.cache(-2,-2,723,117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol177, new cjs.Rectangle(0,0,719.1,112.5), null);


(lib.Symbol176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol211();
	this.instance.parent = this;
	this.instance.setTransform(244.6,21.8,1,1,0,0,0,244.6,21.8);
	this.instance.cache(-2,-2,594,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol176, new cjs.Rectangle(0,0,590.3,43.5), null);


(lib.Symbol172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.bt1.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://www.youtube.com/watch?v=z3gqGiOSMyQ&list=PLJEqmebDdyFEAmwahEREIcRf9g77juZU8", "_blank");
		}
		
		
		this.bt2.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://www.youtube.com/watch?v=SF0sdCLhwvE&list=PLJEqmebDdyFFRKNVGNZyVElndRgGiWYHY", "_blank");
		}
		this.stop();
	}
	this.frame_203 = function() {
		exportRoot.menu.gotoAndPlay("ini");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(104).call(this.frame_203).wait(1));

	// bt2
	this.bt2 = new lib.Symbol174();
	this.bt2.parent = this;
	this.bt2.setTransform(1368,171.5,1,1,0,0,0,190,114.5);
	this.bt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bt2).wait(53).to({_off:false},0).to({x:456},46,cjs.Ease.get(1)).wait(73).to({x:-419},31).wait(1));

	// bt1
	this.bt1 = new lib.Symbol175();
	this.bt1.parent = this;
	this.bt1.setTransform(970.5,171.5,1,1,0,0,0,190.5,114.5);
	this.bt1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bt1).wait(38).to({_off:false},0).to({x:58.5},41,cjs.Ease.get(1)).wait(74).to({x:-441.5},22).wait(29));

	// Symbol 176
	this.instance = new lib.Symbol176();
	this.instance.parent = this;
	this.instance.setTransform(1070.2,21.8,1,1,0,0,0,244.6,21.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({x:158.2},44,cjs.Ease.get(1)).wait(67).to({x:-466.8},31).wait(39));

	// Symbol 177
	this.instance_1 = new lib.Symbol177();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1118.4,-130,1,1,0,0,0,359.6,56.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({x:206.4},40,cjs.Ease.get(1)).wait(67).to({x:-568.6},26).wait(64));

	// Layer 1
	this.instance_2 = new lib.Symbol178();
	this.instance_2.parent = this;
	this.instance_2.setTransform(927.8,-237.3,1,1,0,0,0,169,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:15.8},31,cjs.Ease.get(1)).wait(68).to({x:-359.2},29,cjs.Ease.get(-1)).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(758.8,-288.3,338,102.1);


(lib.Symbol171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol213();
	this.instance.parent = this;
	this.instance.setTransform(361.5,206.3,1,1,0,0,0,361.5,206.3);
	this.instance.cache(-2,-2,727,417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol171, new cjs.Rectangle(0,0,723,412.7), null);


(lib.Symbol165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol212();
	this.instance.parent = this;
	this.instance.setTransform(91.2,162.7,1,1,0,0,0,91.2,162.7);
	this.instance.cache(-2,-2,186,329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol165, new cjs.Rectangle(0,0,182.4,325.4), null);


(lib.Symbol152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBRIgRgBIgQAAIgLAAIgOABIgLAAIABgEIAHgBIAKgCIAIgBIAAgMIABgUIAAgXIAAgSIAAgOIAAgLIAAgSIgBgSIAAgMIgIAAIgJgCIgIAAIgBgGIAKABIAQAAIARAAIAOAAIANAAIAJgBIgBAGIgHAAIgJACIgJAAIgBAMIAAAVIAAAbIAAANIAAAYIAAAWIAAASIABAJIAIABIAJACIAIABIABAEIgKAAg");
	this.shape.setTransform(535.5,206.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADBbIgTgCQgKgDgJgEQgXgLgMgTQgMgSgBgXQAAgOAFgOQAFgNAIgKQAJgKAKgGQAMgIALgFQALgEAMgBQAKgCALAAIAUACIARACIALACIACgGIACgIIABgGIAGgBQgDATgCASIgBAiIgFgCIAAgGIAAgHIgCgGQgCgFgHgGQgIgGgMgFQgLgEgPAAQgUAAgPAJQgPAJgJAPQgIAPAAASQAAAQAGAPQAHAPALALQAMAMAPAGQAPAHASAAQAOAAAOgDQAPgDAMgHIgDAKQgDADgIADQgJADgOACQgNADgSAAIgDAAIgKgBg");
	this.shape_1.setTransform(521.5,205.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAvBfIAAgIIAAgGIgJgBIgPAAIgSgBIgRAAIgMAAIgKAAIgOAAIgLABIABgFIAGgBIAKgBIAIgBIABgKIAAgSIAAgXIAAgVIAAgKIAAgRIAAgUIAAgRIgBgKIgHgBIgKgBIgHgBIgBgFIAJAAIAMAAIALABIAJAAIAJAAIAPAAIASgBIAQAAIAIgBIABgFIABgGIAGgBIgBAJIgCAOIgBAPIgBAKIgFgCIAAgEIAAgGIAAgGQgCgDgGgCIgPgDIgQgBIgMgBIAAAGIgBANIAAAQIAAAPIgBALIAAAFIATAAIASgCIAKgCIACgFIABgFIAEAAIAAAHIgCANIgCANIgCAJIgEgCIAAgIIAAgHQgDgCgHAAIgQgCIgSAAIAAADIABAMIAAARIAAASIABAQIAAAIIAWgBQAKAAAJgCQAIgCAFgDIAEgLIACgJIAFgBIgCAJIgCAPIgCARIgBAMg");
	this.shape_2.setTransform(504.3,206.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJBaIgOgBIgQAAIgOAAIgOABIgLAAIABgEIAGgBIAKgBIAJgCIAAgJIAAgRIABgWIAAgUIAAgOIAAgRIgBgTIAAgSIAAgKIgHAAIgJgBIgJgBIgBgGIAMABIAQAAIANAAIAKAAIARAAIAUAAIAQAAIAIgBIABgEIABgGIABgGIAGgCIgCALIgBAPIgBARIAAAOIgFgCIgBgFIAAgHIgBgGQgDgDgHgCIgRgDIgRgCIgLgBIgBAJIgBARIAAATIAAARIAAAEIAKAAIAPgBIANgBIAJAAIACgHIACgGIAFgCIgCAPIgBARIgBATIgFgCIAAgJIgBgKQgCgBgGgBIgNgDIgOgBIgLAAIAAAHIAAASIAAAUIABASIABAKIANADIALABIABAEIgLAAg");
	this.shape_3.setTransform(489.7,205.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAwBfIAAgIIAAgGIgJgBIgQAAIgSgBIgQAAIgNAAIgLAAIgMAAIgMABIABgFIAGgBIAKgBIAIgBIAAgKIABgSIABgXIAAgVIAAgKIAAgRIgBgUIgBgRIAAgKIgHgBIgJgBIgIgBIgBgFIAKAAIALAAIALABIAJAAIAJAAIAPAAIASgBIAQAAIAJgBIABgFIABgGIAEgBIgBAJIgBAOIgBAPIgBAKIgFgCIAAgEIAAgGIAAgGQgCgDgGgCIgPgDIgQgBIgMgBIAAAGIAAANIgBAQIAAAPIgBALIAAAFIAUAAIARgCIALgCIABgFIABgFIAFAAIgCAHIgCANIgBANIgBAJIgFgCIAAgIIAAgHQgDgCgHAAIgPgCIgTAAIAAADIABAMIAAARIABASIAAAQIAAAIIAVgBQALAAAIgCQAJgCAGgDIACgLIACgJIAGgBIgCAJIgCAPIgDARIgBAMg");
	this.shape_4.setTransform(475,206.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhgBRIABgEIAHgBIAJgBIAIgCIABgJIAAgSIABgWIAAgWIAAgSIAAgMIgBgSIAAgRIgBgKIgIAAIgJgCIgHAAIgBgGIAGABIALAAIAMAAIAJAAIAOAAIATAAIAUgBQAUABAQACQARACALAGQAOAGAIAJQAIAKAEAKQAEAKAAALQAAARgHARQgIASgPANQgQAOgYAIQgXAHghABIgLAAIgQAAIgRAAIgPAAIgIAAgAgjhIIgHABIAAAIIAAAPIgBARIAAAQIAAALIAAAIIAAAOIAAATIABATIAAAMIAPADIALABQAQAAAPgFQAPgFAMgJQAMgKAHgOQAIgNAAgSQAAgOgGgOQgFgOgOgLQgJgGgLgEQgLgDgMgCQgLgCgLAAIgHAAIgHAAg");
	this.shape_5.setTransform(457.1,206.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABYBRIgKgBIgMAAIgLAAIgIAAIgMAAIgLABIgIAAIABgEIAMgBIAMgDIgEgLIgGgQIgGgRIgFgOIgDgJIgLABIgPAAIgQABIgLABIgCAJIgFASIgFAUIgEARIAKADIAKABIABAEIgLAAIgNgBIgLAAIgIAAIgKABIgIAAIAAgEIAKgCIAKgCIAHgPIALgbIANggIAMghIAKgaIAEgNIgJgBIgJgBIAAgGIAKABIAMAAIAIAAIAMAAIAPAAIALgBIgBAGIgJABIgIABIAEAMIAGASIAHAVIAHAUIAGAQIAIAUIAJAVIAIASIAKACIALACIAAAEIgFAAgAAPAAIgFgQIgHgUIgGgTIgFgOIgHASIgHAVIgHATIgDAKIAvABIAAAAg");
	this.shape_6.setTransform(438,206.7);

	this.instance = new lib.logo_00000();
	this.instance.parent = this;
	this.instance.setTransform(259,146,0.34,0.34);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189,199.2,0.217,0.217,0,0,0,354.8,192);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 153, 153, 0)];
	this.instance_1.cache(-2,-2,713,388);

	this.instance_2 = new lib.Bitmap42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,105);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAjIgCgGQAAgFAGgBQAFAAACAGQAAAHgHAAIgEgBgAgEgYIgCgEQAAgGAGgBQAFAAACAHQAAAGgHAAIgEgCg");
	this.shape_7.setTransform(377.6,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAZIAHgEQADAGAFAEQAFAEAIAAQATAAAAgQQAAgHgHgGIgGgCIgIgEQgKgCgEgEQgHgFAAgKQAAgIAHgGQAGgHAJAAQAOAAAJAKIgGAFQgGgHgLAAQgNAAAAANQAAAGAEADQAEADAGADIAMAEIAGADQAJAGAAAMQAAAKgIAHQgIAHgLAAQgSAAgKgSg");
	this.shape_8.setTransform(372.7,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAfQgMgNgBgSQABgSAMgMQALgMASAAQASAAAMAMQANALAAASIhNAAQAAAQAJAKQAKAKAPAAQAIAAAIgDQAIgEAGgLIAIAEQgIAPgQAFQgGACgIAAQgSAAgLgMgAAigJQgDgLgKgHQgIgHgNAAQgYAAgJAZIBDAAIAAAAg");
	this.shape_9.setTransform(364.5,12.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHA7IAAhJIgLAAIAAgIIALAAIAAglIAHAAIAAAlIAUAAIAAAIIgUAAIAABJg");
	this.shape_10.setTransform(357.1,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYAqIAAgxQAAgagYAAQgKAAgHAHQgFAHAAAMIAAAxIgJAAIAAhSIAJAAIAAAKQAFgLARAAQAPAAAJAJQAIAJAAAQIAAAxg");
	this.shape_11.setTransform(350,12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAfQgMgNABgSQgBgSAMgMQANgMARAAQASAAANAMQAMALgBASIhLAAQAAAQAJAKQAIAKAQAAQAJAAAGgDQAJgEAHgLIAHAEQgHAPgRAFQgGACgIAAQgRAAgNgMgAAhgJQgBgLgKgHQgKgHgMAAQgZAAgHAZIBBAAIAAAAg");
	this.shape_12.setTransform(340.7,12.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDA3IAAhRIAHAAIAABRgAgEgrIgCgFQAAgFAGgBQAFAAACAGQAAAHgHAAIgEgCg");
	this.shape_13.setTransform(333.9,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBKIAAiTIAHAAIAACTg");
	this.shape_14.setTransform(330.1,9.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAfQgMgNAAgSQAAgRAMgNQAMgMASAAQAPAAAKAHIAAAKIgFgDIgGgDQgIgDgGAAQgOAAgKAKQgKAKAAAOQAAAPAKAKQAKAKAOAAQAOAAALgKIAAAKQgLAIgOAAQgSAAgMgMg");
	this.shape_15.setTransform(323.8,12.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAZIAHgEQADAGAFAEQAFAEAIAAQATAAAAgQQAAgHgHgGIgGgCIgIgEQgKgCgEgEQgHgFAAgKQAAgIAHgGQAGgHAJAAQAOAAAJAKIgGAFQgGgHgLAAQgNAAAAANQAAAGAEADQAEADAGADIAMAEIAGADQAJAGAAAMQAAAKgIAHQgIAHgLAAQgSAAgKgSg");
	this.shape_16.setTransform(311.1,12.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAeQgNgMAAgSQAAgRANgMQAMgNARAAQASAAAMANQANAMAAARQAAASgNAMQgMANgSAAQgRAAgMgNgAgXgXQgKAKAAANQgBAOAKAKQALALANAAQAOAAALgKQAJgLABgOQgBgOgJgKQgLgKgOAAQgNAAgKALg");
	this.shape_17.setTransform(302.7,12.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAYAqIAAgxQAAgagYAAQgLAAgFAHQgHAHAAAMIAAAxIgIAAIAAhSIAIAAIAAAKQAGgLARAAQAPAAAJAJQAIAJAAAQIAAAxg");
	this.shape_18.setTransform(293.3,12.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAiQgIgJAAgPIAAgzIAJAAIAAAzQAAALAEAHQAGAGALAAQAXAAAAgYIAAgzIAIAAIAAAzQAAAOgIAKQgJAIgOAAQgOAAgIgIg");
	this.shape_19.setTransform(284.5,12.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmAjIAIAAQACAJAKAFQAJAEAKAAQAPAAAJgIQAIgJAAgQIAAgLQgMAPgVAAQgQAAgNgNQgMgLAAgRQAAgTAMgMQAMgNARAAQAVABAMAQIAAgPIAJAAIAABPQAAATgLALQgMAMgSAAQggAAgHgbgAgXgrQgKALAAAPQAAAOAKAIQAKALANAAQAPAAAKgKQAKgKAAgNQAAgPgKgKQgKgKgPAAQgNgBgKAKg");
	this.shape_20.setTransform(274.9,14.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDBKIAAiTIAHAAIAACTg");
	this.shape_21.setTransform(268.1,9.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAxBKIgQgrIhAAAIgRArIgIAAIA4iTIA5CTgAAdAXIgdhLIgcBLIA5AAg");
	this.shape_22.setTransform(259.8,9.1);

	this.instance_3 = new lib.Symbol147();
	this.instance_3.parent = this;
	this.instance_3.setTransform(422.6,64.9,0.268,0.268,0,0,0,159.3,119);

	this.instance_4 = new lib.Symbol146();
	this.instance_4.parent = this;
	this.instance_4.setTransform(210.4,141.9,0.084,0.084,0,0,0,590.1,282.5);

	this.instance_5 = new lib.Symbol144();
	this.instance_5.parent = this;
	this.instance_5.setTransform(569.2,151,0.084,0.084,0,0,0,639.8,420.2);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_5.cache(-2,-2,1282,841);

	this.instance_6 = new lib.Symbol77();
	this.instance_6.parent = this;
	this.instance_6.setTransform(330.7,141.3,0.357,0.357,0,0,0,124.1,87);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_6.cache(-2,-2,252,178);

	this.instance_7 = new lib.Symbol73();
	this.instance_7.parent = this;
	this.instance_7.setTransform(444.5,156.1,0.36,0.36,0,0,0,145.7,56.1);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_7.cache(-2,-2,295,116);

	this.instance_8 = new lib.Symbol71();
	this.instance_8.parent = this;
	this.instance_8.setTransform(320.6,60.5,0.32,0.32,0,0,0,114.6,113.7);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_8.cache(-2,-2,233,231);

	this.instance_9 = new lib.Bitmap14();
	this.instance_9.parent = this;
	this.instance_9.setTransform(171.6,23.8,0.431,0.431);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol152, new cjs.Rectangle(0,-3.5,623.1,285.4), null);


(lib.Symbol140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol138();
	this.instance.parent = this;
	this.instance.setTransform(109.6,112.5,1,1,0,0,0,46.1,65);

	this.instance_1 = new lib.Symbol139();
	this.instance_1.parent = this;
	this.instance_1.setTransform(109.7,109.8,1,1,0,0,0,109.7,109.8);
	this.instance_1.alpha = 0.629;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol140, new cjs.Rectangle(0,0,219.5,219.5), null);


(lib.Symbol137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol143();
	this.instance.parent = this;
	this.instance.setTransform(98.5,61.4,0.275,0.275,-15,0,0,257.7,162.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol143();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.4,0.1,0.275,0.319,0,0.1,-15,529.4,4.3);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 51, 102, 153, 0), new cjs.BlurFilter(27, 27, 1)];
	this.instance_1.cache(-2,-2,519,329);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBlQgHgHAAgLQAAgMAHgGQAGgGAMgBQALABAGAGQAHAGAAAMQAAALgHAHQgGAGgLAAQgMAAgGgGgAgaAiIAAgKQAAgNAGgLQAFgJAPgLQAPgLAFgHQAEgGAAgIQAAgKgHgFQgGgEgMAAQgVAAgbANIgPgeQAfgSAjAAQAdAAARAOQARAOAAAXQAAAQgHALQgHAMgUAOQgNAJgEAFQgEAGAAAIIAAAIg");
	this.shape.setTransform(120.4,195.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDBeIAAgpQAWAKAOADQAPAEAMAAQANAAAHgGQAIgFAAgLQAAgGgDgFQgDgEgHgFIgagOQgTgJgJgHQgKgIgFgLQgHgLAAgOQABgcASgQQATgQAgAAQAQAAAOAFQAQADAQAHIgPAiIgbgKQgLgCgKAAQgMAAgGAGQgIAGAAAJQAAAGADAEQADAEAGAFIAaAOQAdAOAMANQALAOgBAUQABAcgVAQQgUARgjAAQghAAgagNg");
	this.shape_1.setTransform(100.4,195.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIBPQgagcAAgzQAAgzAagbQAZgcAvAAQAwAAAZAcQAZAbAAAzQABAzgaAcQgaAcgvAAQgvAAgZgcgAgmgzQgOARAAAiQAAAjAOARQANASAZAAQA1AAgBhGQABhFg1AAQgZAAgNASg");
	this.shape_2.setTransform(81.7,195.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABGBnIAAhhIAAgPIACgxIgBAAIg2ChIgnAAIgyihIgBAAIADBBIAABgIgoAAIAAjOIA8AAIAxCeIABAAIAzieIA8AAIAADOg");
	this.shape_3.setTransform(57.5,195.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBPQgagcAAgzQAAgzAagbQAagcAuAAQAwAAAZAcQAaAbAAAzQgBAzgZAcQgZAcgwAAQguAAgagcgAgmgzQgNARgBAiQABAjANARQAMASAaAAQA0AAABhGQgBhFg0AAQgZAAgNASg");
	this.shape_4.setTransform(33.3,195.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDBeIAAgpQAWAKAOADQAPAEAMAAQANAAAHgGQAIgFAAgLQAAgGgDgFQgDgEgHgFIgagOQgTgJgJgHQgKgIgFgLQgHgLAAgOQABgcASgQQATgQAgAAQAQAAAOAFQAQADAQAHIgPAiIgbgKQgLgCgKAAQgMAAgGAGQgIAGAAAJQAAAGADAEQADAEAGAFIAaAOQAdAOAMANQALAOAAAUQAAAcgVAQQgUARgjAAQghAAgagNg");
	this.shape_5.setTransform(14.9,195.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBEIAAgdQAPAGALADQAKADAJAAQAJAAAGgEQAFgEABgIQgBgFgCgDQgCgDgFgDIgSgKQgOgHgHgFQgHgGgEgIQgEgIAAgKQAAgVANgLQAOgLAWAAQANAAAKACQAKAEAMAFIgKAYIgUgGQgIgCgIAAQgHAAgFADQgFAFAAAGQAAAFACADIAGAGIATAKQAVALAIAIQAIALAAAOQAAAVgOAMQgPALgaAAQgYAAgSgJg");
	this.shape_6.setTransform(92.7,166.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBLIAAiVIBVAAIAAAaIg2AAIAAAhIAzAAIAAAZIgzAAIAAAnIA2AAIAAAag");
	this.shape_7.setTransform(81.3,166.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaBLIhAhxIgBAAIACArIAABGIgcAAIAAiVIAoAAIA/BwIABAAIgBgpIAAhHIAcAAIAACVg");
	this.shape_8.setTransform(66.6,166.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqBLIAAiVIBVAAIAAAaIg2AAIAAAhIAzAAIAAAZIgzAAIAAAnIA2AAIAAAag");
	this.shape_9.setTransform(52.5,166.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBLIAAiVIAfAAIAACVg");
	this.shape_10.setTransform(42.8,166.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtA9QgPgOAAgaIAAhgIAfAAIAABbQAAARAHAIQAHAJAPgBQAPABAIgJQAGgIABgSIAAhaIAfAAIAABgQAAARgHAMQgIAMgOAHQgNAHgTAAQgcAAgRgPg");
	this.shape_11.setTransform(31.4,166.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAeBeIgbgiIgDAAQgiABgSgVQgSgTgBglQAAglATgUQATgUAhAAQAjAAASAUQASAUAAAmQAAAZgJASQgKASgSAIIAkAogAgcg1QgJAMAAAaQAAAYAJAMQAKANASAAQAmAAAAgxQAAg0gmAAQgRABgLANg");
	this.shape_12.setTransform(15.1,168.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNAOQgGgFAAgJQAAgIAFgGQAFgEAJAAQAJAAAGAFQAFAEAAAJQAAAJgFAFQgGAFgJAAQgIAAgFgFg");
	this.shape_13.setTransform(149.7,148.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1BLIAAghQARAIALADQAMADAKAAQAKAAAHgFQAFgEAAgJQAAgEgDgEQgCgEgFgDIgUgMQgQgHgHgFQgIgHgEgIQgFgJABgMQAAgVAOgNQAPgMAZAAQANAAALADQAMADANAFIgLAbQgNgFgJgCQgJgCgIAAQgJAAgFAEQgGAFAAAHQAAAFADADIAGAHIAWALQAWALAJALQAIALAAAQQABAWgRANQgQAMgbAAQgaAAgVgJg");
	this.shape_14.setTransform(140.2,141.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5A/QgUgWAAgpQAAgoAUgWQAUgVAmAAQAlAAAUAVQAUAXAAAnQAAApgUAWQgUAVgmABQglgBgUgVgAgegoQgKAOAAAaQAAAcAKAOQAKANAUAAQApAAAAg3QABg2gpgBQgVABgKAOg");
	this.shape_15.setTransform(124.7,141.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRBSIAAiGIgsAAIAAgdIB7AAIAAAdIgsAAIAACGg");
	this.shape_16.setTransform(108.9,141.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgqA/QgUgWABgpQgBgYAKgTQAJgUASgKQARgKAWAAQAYAAAZALIgMAdIgTgIQgIgDgKAAQgSAAgLAPQgLAOAAAaQAAA3AoAAQASAAAYgJIAAAdQgUAIgZAAQgiAAgTgVg");
	this.shape_17.setTransform(95.2,141.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAqBSIgMgmIg7AAIgMAmIglAAIA6ikIApAAIA6CkgAgUAOIAqAAIgTg7IgDgLIgUBGg");
	this.shape_18.setTransform(79.6,141.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBSIAAiGIgsAAIAAgdIB7AAIAAAdIgtAAIAACGg");
	this.shape_19.setTransform(65.1,141.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAdBSIhHh7IgBAAQACAgABANIAABOIggAAIAAijIAsAAIBGB6IABAAIgCgtIAAhNIAgAAIAACjg");
	this.shape_20.setTransform(49.1,141.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag5A/QgUgWAAgpQAAgoAUgWQAVgVAlAAQAlAAAUAVQAUAXAAAnQAAApgUAWQgUAVgmABQgkgBgVgVgAgegoQgLAOAAAaQAAAcALAOQALANATAAQAqAAAAg3QAAg2gpgBQgVABgKAOg");
	this.shape_21.setTransform(30.6,141.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgrA/QgSgWgBgpQAAgYAJgTQAKgUARgKQASgKAXAAQAXAAAZALIgMAdIgSgIQgKgDgIAAQgTAAgLAPQgLAOAAAaQAAA3ApAAQAQAAAZgJIAAAdQgUAIgZAAQgiAAgUgVg");
	this.shape_22.setTransform(14.4,141.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApCAAISGAA");
	this.shape_23.setTransform(86.2,117.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#00FC17","#0CB1E8"],[0,1],64,125.4,-64.1,-125.5).s().p("AscSWMAAAgksIY5AAMAAAAksgAKEAAIyGAAg");
	this.shape_24.setTransform(79.7,117.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol137, new cjs.Rectangle(0,-14.2,178.3,249.2), null);


(lib.Symbol135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol142();
	this.instance.parent = this;
	this.instance.setTransform(74,187.9,1,1,0,0,0,97.4,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol142();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.8,119.3,1,1,0,0,0,92.4,14.6);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 0, 153, 0), new cjs.BlurFilter(15, 15, 1)];
	this.instance_1.cache(-2,-2,199,153);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA9IAAh5IAmAAQAZAAALAIQALAHAAAQQAAALgEAHQgGAHgIABIAAABQAMACAEAHQAGAHAAAMQAAAQgMAJQgMAKgVAAgAgTAoIARAAQAKAAAFgFQAFgEAAgIQAAgPgVAAIgQAAgAgTgMIAPAAQAKAAAFgDQAEgDAAgHQABgHgGgDQgFgEgKAAIgOAAg");
	this.shape.setTransform(121.2,110.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiA9IAAh5IBFAAIAAAVIgrAAIAAAbIAoAAIAAAUIgoAAIAAAgIArAAIAAAVg");
	this.shape_1.setTransform(110.6,110.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWA9IgRg/IgDgOIgCgOIgCAOIgDAOIgQA/IgdAAIgfh5IAZAAIAQBCQAEASABANIADgOIADgQIAShDIAXAAIASBDIADAOIACAQIADgQIADgPIAQhCIAZAAIgfB5g");
	this.shape_2.setTransform(97.4,110.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmA3IAAgYQAMAGAIACQAIACAIAAQAHAAAEgDQAFgDAAgHQAAgDgCgDIgFgFIgQgJQgLgFgFgEQgGgEgDgHQgEgGABgJQgBgQAMgJQAKgJATAAQAKAAAIACIASAGIgJAUIgPgFIgNgCQgHAAgDADQgEAEAAAFQAAAEACACIAEAFIAQAJQARAIAGAHQAHAIgBAMQAAAQgMAKQgLAJgVAAQgTAAgOgHg");
	this.shape_3.setTransform(80.2,110.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfA9IgJgdIgrAAIgJAdIgcAAIArh5IAfAAIArB5gAgPAKIAfAAIgOgrIgCgIIgPAzg");
	this.shape_4.setTransform(69.5,110.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVA9Ig0hbIgBAAIACAiIAAA5IgXAAIAAh5IAgAAIA0BaIABAAIgBggIAAg6IAXAAIAAB5g");
	this.shape_5.setTransform(56.8,110.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMA9IAAh5IAZAAIAAB5g");
	this.shape_6.setTransform(47,110.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAuQgPgQAAgeQAAgcARgRQARgQAdAAQASAAASAHIgJAVQgNgHgPAAQgPAAgKALQgKALAAASQAAAUAIALQAIAKAOAAIARgCIAAgZIgXAAIAAgUIAwAAIAAA+QgMADgKACIgVABQgbAAgOgQg");
	this.shape_7.setTransform(37.9,110.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfA9IgJgdIgrAAIgJAdIgcAAIArh5IAfAAIArB5gAgPAKIAfAAIgOgrIgCgIIgPAzg");
	this.shape_8.setTransform(26,110.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpA9IAAh5IAnAAQAVAAALAKQAMAJAAATQAAAUgMAJQgNALgVAAIgLAAIAAArgAgPgCIAIAAQALAAAGgFQAGgFAAgJQAAgJgFgEQgFgFgKAAIgLAAg");
	this.shape_9.setTransform(15.2,110.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMA9IAAgvIgohKIAcAAIAYAyIAZgyIAcAAIgoBKIAAAvg");
	this.shape_10.setTransform(76.6,90.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1BLIAAghQARAIAMADQALADAKAAQAKAAAHgFQAFgEABgJQgBgEgDgEQgCgEgFgDIgVgMQgOgHgIgFQgIgHgEgIQgFgJABgMQAAgVAOgNQAPgMAZAAQANAAAMADQALADANAFIgMAbQgMgFgJgCQgJgCgIAAQgJAAgFAEQgGAFAAAHQABAFACADIAGAHIAWALQAXALAIALQAJALgBAQQAAAWgPANQgRAMgbAAQgaAAgVgJg");
	this.shape_11.setTransform(60.7,88.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4BSIAAijIA1AAQAdAAAPANQAQANAAAZQAAAbgRANQgQAOgegBIgPAAIAAA7gAgVgEIAMAAQAPAAAIgGQAIgHAAgMQAAgMgHgGQgHgGgNABIgQAAg");
	this.shape_12.setTransform(47.5,88.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4BSIAAijIA1AAQAdAAAPANQAQANAAAZQAAAbgRANQgQAOgegBIgPAAIAAA7gAgVgEIAMAAQAPAAAIgGQAIgHAAgMQAAgMgHgGQgHgGgNABIgQAAg");
	this.shape_13.setTransform(33.1,88.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAqBSIgMgmIg7AAIgMAmIglAAIA6ijIApAAIA6CjgAgUAOIAqAAIgTg7IgDgLIgUBGg");
	this.shape_14.setTransform(17.4,88.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAYQAHgYADgXIAbAAIABABQgFAUgMAag");
	this.shape_15.setTransform(147.9,71.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguBBIAAgcQAPAGAKADQAKACAJABQAJAAAFgFQAFgDAAgIQAAgEgCgDQgDgDgEgDIgSgKQgNgGgGgFQgHgGgEgHQgEgHAAgKQAAgUANgKQANgMAWAAQALAAAKAEQAKACALAEIgKAYIgTgHIgOgBQgIAAgFAEQgEAEAAAHQAAADACAEQACACAEADQADADAPAHQAUAJAIAJQAGAKABAOQAAATgOALQgOAMgYAAQgWAAgTgJg");
	this.shape_16.setTransform(139.9,64.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxA3QgSgUAAgjQAAgjASgTQASgTAfAAQAhAAARATQASATAAAjQAAAkgSATQgRATghAAQggAAgRgTgAgagjQgJAMAAAXQAAAYAJAMQAJAMARAAQAlAAgBgwQAAgwgkAAQgRAAgJANg");
	this.shape_17.setTransform(126.4,64.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpA3QgRgTAAgkQAAgiAUgTQAUgTAigBQAWABAUAIIgKAYQgPgHgRAAQgTAAgMANQgLANAAAWQAAAWAJANQAKANARAAQAJAAAKgCIAAgfIgbAAIAAgXIA5AAIAABJQgOAEgMABQgNADgMAAQggAAgRgTg");
	this.shape_18.setTransform(110.9,64.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoBHIAAiNIBRAAIAAAYIgzAAIAAAgIAvAAIAAAYIgvAAIAAAlIAzAAIAAAYg");
	this.shape_19.setTransform(98.6,64.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqA6QgPgOgBgYIAAhbIAeAAIAABWQABAQAGAJQAHAHAPAAQAOAAAHgHQAGgJABgQIAAhWIAdAAIAABbQABAQgIAMQgGAMgOAGQgNAHgSAAQgbAAgPgPg");
	this.shape_20.setTransform(85.2,64.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgfBbIAAgaQAJACAGAAQAKAAAEgGQADgGABgOIAAiEIAdAAIAACEQABAagMANQgLANgWgBQgKAAgIgBg");
	this.shape_21.setTransform(72.7,66.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgyA3QgRgUAAgjQAAgjASgTQASgTAfAAQAhAAASATQARATAAAjQAAAkgRATQgSATghAAQgfAAgTgTgAgagjQgJAMAAAXQAAAYAJAMQAJAMARAAQAkAAAAgwQABgwglAAQgRAAgJANg");
	this.shape_22.setTransform(63.1,64.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgoBHIAAiNIBRAAIAAAYIgzAAIAAAgIAvAAIAAAYIgvAAIAAAlIAzAAIAAAYg");
	this.shape_23.setTransform(49.8,64.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag6BHIAAiNIAtAAQAiAAATASQATASAAAhQAAAjgUATQgUASglAAgAgcAvIANAAQArAAAAgvQAAgugoAAIgQAAg");
	this.shape_24.setTransform(36.8,64.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOBHIAAiNIAdAAIAACNg");
	this.shape_25.setTransform(25.8,64.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQBHIgwiNIAeAAIAbBTIAFATIACANQABgJAGgXIAbhTIAfAAIgxCNg");
	this.shape_26.setTransform(16,64.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIA5AAIAAARIgjAAIAAAWIAgAAIAAAQIggAAIAAAaIAjAAIAAASg");
	this.shape_27.setTransform(119.8,45.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgoAyIAAhjIAfAAQAYAAANANQANANAAAXQABAYgOANQgOANgaAAgAgTAgIAJAAQAeAAAAggQAAgggcAAIgLAAg");
	this.shape_28.setTransform(110.7,45.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgiAmQgNgOAAgYQAAgYANgOQAMgNAWABQAXgBAMANQANAOAAAYQAAAYgNAOQgMANgXAAQgWAAgMgNgAgSgYQgGAIAAAQQAAAQAGAJQAGAJAMgBQAZABAAgiQAAghgZAAQgMAAgGAJg");
	this.shape_29.setTransform(96.1,45.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIAWAAIAABRIAnAAIAAASg");
	this.shape_30.setTransform(87,45.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIAWAAIAABRIAnAAIAAASg");
	this.shape_31.setTransform(79.1,45.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgiAmQgNgOAAgYQAAgYANgOQAMgNAWABQAXgBAMANQANAOAAAYQAAAYgNAOQgMANgXAAQgWAAgMgNgAgSgYQgGAIAAAQQAAAQAGAJQAGAJAMgBQAZABAAgiQAAghgZAAQgMAAgGAJg");
	this.shape_32.setTransform(69.1,45.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AARAyIgYgmIgLAAIAAAmIgVAAIAAhjIAdAAQAUAAAJAIQAKAHAAAPQAAAJgEAGQgFAHgKADIAeAsgAgSgFIAHAAQAKAAAEgDQAEgDAAgIQAAgGgEgEQgEgDgKAAIgHAAg");
	this.shape_33.setTransform(59.6,45.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAQAyIgWgmIgMAAIAAAmIgVAAIAAhjIAdAAQATAAALAIQAJAHAAAPQAAAJgFAGQgFAHgIADIAdAsgAgSgFIAHAAQAKAAAEgDQAFgDgBgIQABgGgFgEQgEgDgLAAIgGAAg");
	this.shape_34.setTransform(50.3,45.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAgMAJIAZAAIgLgkIgCgHIgMArg");
	this.shape_35.setTransform(40.2,45.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgfAuIAAgVIARAHQAGACAGAAQAHAAADgDQAEgDAAgFQAAgDgCgCIgFgFIgLgGQgKgEgFgEQgEgDgDgGQgDgFAAgHQAAgNAJgIQAKgHAPAAQAHAAAIABIAOAGIgHAQIgNgFIgKAAQgGgBgCADQgDADgBAEIACAGIAEADIAMAIQAOAGAGAGQAEAGAAAKQAAAOgJAHQgKAIgRAAQgPAAgMgFg");
	this.shape_36.setTransform(31.6,45.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIA5AAIAAARIgjAAIAAAWIAgAAIAAAQIggAAIAAAaIAjAAIAAASg");
	this.shape_37.setTransform(24,45.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgpAyIAAhjIAgAAQAYAAANANQAOANAAAXQAAAYgPANQgOANgZAAgAgTAgIAJAAQAeAAgBggQABgggcAAIgLAAg");
	this.shape_38.setTransform(14.9,45.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(2,1,1).p("AoOAAIQdAA");
	this.shape_39.setTransform(90.9,128);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#F00B80","#339AE9"],[0,1],64,125.4,-64.1,-125.5).s().p("AscSWMAAAgksIY5AAMAAAAksgAJ/BpIwdAAg");
	this.shape_40.setTransform(79.7,117.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol135, new cjs.Rectangle(-23.4,0,214.8,265.7), null);


(lib.Symbol134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol141();
	this.instance.parent = this;
	this.instance.setTransform(105.7,88.5,1,1,0,0,0,94.4,91.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol141();
	this.instance_1.parent = this;
	this.instance_1.setTransform(105.8,20.3,1,1.009,0,19.3,11.5,94.5,23.4);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 0, 0, 0), new cjs.BlurFilter(15, 15, 1)];
	this.instance_1.cache(-2,-2,193,187);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBCIAAgoIBxhBIAAAAIgqACIhHAAIAAgdICVAAIAAApIhwBAIAAAAIApgBIBHAAIAAAcg");
	this.shape.setTransform(15.7,216.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhOA1QgUgSAAgjQAAghAUgTQAUgTAmAAQAkABAUASQAUASAAAiQAAAjgUASQgUATglAAQglAAgUgTgAg6gbQgNAJAAASQAAAmAyAAQAyAAAAgmQAAgRgNgKQgMgKgZAAQgZAAgMAKgABhArQgGgFgKgNIgQgUIAAgUIADAAQAUARALAGIAAAjg");
	this.shape_1.setTransform(17.8,199.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKAQIAAgfICVAAIAAAfg");
	this.shape_2.setTransform(15.7,187.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AApAvIAHgRQACgJAAgIQAAgRgNgJQgOgKgXAAQgxAAAAAkQgBAQAJAXIgbAAQgIgTAAgXQAAgfATgSQAUgRAlAAQAXAAASAIQARAJAKAQQAJAQAAAUQAAAWgKAWg");
	this.shape_3.setTransform(15.7,177.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKAmIAjgKIAAg3IgjgLIAAgiICVA1IAAAnIiVA1gAgMAUIA2gRIAKgDIhAgTg");
	this.shape_4.setTransform(15.7,163.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKBQIAAgdIBHAAIAKAAIAjABIAAgBIh0gnIAAgcIB0gkIAAgBIguACIhGAAIAAgcICVAAIAAArIhyAkIAAAAIByAlIAAArg");
	this.shape_5.setTransform(15.7,146.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKAQIAAgfICVAAIAAAfg");
	this.shape_6.setTransform(15.7,132.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhKBDIAAgpIBxhAIAAgBIgqACIhHAAIAAgcICVAAIAAAnIhwBBIAAABIApgCIBHAAIAAAdg");
	this.shape_7.setTransform(15.7,120.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKAmIAjgKIAAg2IgjgMIAAghICVA1IAAAmIiVA1gAgMAUIA2gRIAKgDIhAgSg");
	this.shape_8.setTransform(15.7,105.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAQIg7AAIAAgfIA6AAIBbgyIAAAjIg+AeIA+AgIAAAig");
	this.shape_9.setTransform(39.3,189.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4A1QgUgTAAgiQAAgiAUgSQAUgSAkgBQAmAAATATQAUATAAAhQAAAjgUASQgUASglAAQgkAAgUgSgAglgcQgNAKAAASQAAAmAyAAQAzAAAAgmQAAgRgNgLQgNgJgZAAQgYAAgNAJg");
	this.shape_10.setTransform(39.3,169);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhgBCIAAgoIBxhAIAAgBIgqACIhHAAIAAgcICVAAIAAAnIhvBAIAAABIApgBIBGAAIAAAcgABKAiQgJgHAAgMIACgIIADgHIAEgJIACgHQAAgDgDgDQgDgDgFgCIAAgPQAPABAIAIQAJAHAAAMQAAAFgCADIgEAHIgDAIQgCAEAAAEQAAADADADQACADAGABIAAAQQgPgCgIgHg");
	this.shape_11.setTransform(41.4,152.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAxArIAAg2IghAAIAAAzIgZAAIAAgzIgnAAIAAA2IgaAAIAAhVICVAAIAABVg");
	this.shape_12.setTransform(39.3,138.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhBAiQgLgPAAgZQAAgXAJgTIAdAAQgGAPgDALQgDALAAAIQAAAKAEAFQAEAFAIAAQAFABADgDQADgCADgFIAKgSQAHgOAFgHQAGgHAIgEQAIgEAKAAQAVAAALANQALAOAAAXQAAALgCALQgEAKgFAMIgYgKIAGgUQACgIAAgIQAAgHgDgFQgFgFgGAAQgFAAgDACIgGAGIgKAUQgLAVgIAHQgLAIgOAAQgVAAgMgPg");
	this.shape_13.setTransform(39.3,126.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhKAQIAAgfICVAAIAAAfg");
	this.shape_14.setTransform(39.3,116.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3ApQgTgVAAgnIAAgqICVAAIAAAvQAAAkgTAUQgUAUgiAAQgkAAgVgVgAgwgQQAAAtAxAAQAwAAAAgpIAAgRIhhAAg");
	this.shape_15.setTransform(39.3,105.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAoGIAAQN");
	this.shape_16.setTransform(61.7,130);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FE0970","#FEB206"],[0,1],64,125.4,-64.1,-125.5).s().p("AscSWMAAAgksIY5AAMAAAAksgAi0KEIAAwMg");
	this.shape_17.setTransform(79.7,117.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol134, new cjs.Rectangle(-48.1,-28.8,266,263.8), null);


(lib.Symbol133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol137();
	this.instance.parent = this;
	this.instance.setTransform(79.7,117.5,1,1,0,0,0,79.7,117.5);
	this.instance.cache(-2,-16,182,253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol133, new cjs.Rectangle(0,-14.2,178.3,249.2), null);


(lib.Symbol131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol135();
	this.instance.parent = this;
	this.instance.setTransform(79.7,117.5,1,1,0,0,0,79.7,117.5);
	this.instance.cache(-25,-2,219,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol131, new cjs.Rectangle(-23.4,0,214.8,265.7), null);


(lib.Symbol130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol134();
	this.instance.parent = this;
	this.instance.setTransform(79.7,117.5,1,1,0,0,0,79.7,117.5);
	this.instance.cache(-50,-31,270,268);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol130, new cjs.Rectangle(-48.1,-28.8,266,263.8), null);


(lib.Symbol123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(195.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol123, new cjs.Rectangle(0,-94,391,123), null);


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol120();
	this.instance.parent = this;
	this.instance.setTransform(150.6,29,1,1,0,0,0,150.6,29);
	this.instance.cache(-2,-2,305,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol116, new cjs.Rectangle(0,0,301.2,58), null);


(lib.Symbol115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(20).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.Symbol140();
	this.instance.parent = this;
	this.instance.setTransform(-39,60.2,1,1,0,0,0,109.7,109.8);
	this.instance.alpha = 0;
	this.instance.cache(-2,-2,224,224);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:46.2,y:62.3,alpha:1},29).to({x:-39,y:60.2,alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.7,-49.6,219.5,219.5);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol188();
	this.instance.parent = this;
	this.instance.setTransform(186.4,48.5,1,1,0,0,0,186.4,48.5);
	this.instance.cache(-20,-15,430,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(-18,-13,426,141), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol125();
	this.instance.parent = this;
	this.instance.setTransform(64,64,1,1,0,0,0,64,64);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance.cache(-2,-2,132,132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmCGQQigimAAjqQAAjpCginQChimDhAAQDiAAChCmQCgCnAADpQAADqigCmQihCnjiAAQjhAAihing");
	this.shape.setTransform(64,64);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,128,128), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bt.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.youtube.com/c/LaCosaNostrackStudio", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.bt = new lib.Symbol26();
	this.bt.parent = this;
	this.bt.setTransform(64,64,1,1,0,0,0,64,64);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,128,128), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol118();
	this.instance.parent = this;
	this.instance.setTransform(61.4,62.4,1,1,0,0,0,73.4,73.4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 204, 0, 0)];
	this.instance.cache(-2,-2,151,151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmLGMQikikAAjoQAAjnCkikQCjikDoAAQDnAACkCkQClCkAADnQAADoilCkQikCkjnAAQjoAAijikg");
	this.shape.setTransform(61.9,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-12,-11,146.9,146.9), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bt.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://wa.link/9b4rp8", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.bt = new lib.Symbol23();
	this.bt.parent = this;
	this.bt.setTransform(64,64,1,1,0,0,0,64,64);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-12,-11,146.9,146.9), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(158.8,100.7,1,1,0,0,0,81.5,81.5);

	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(170.5,98.4,0.681,0.779,0,180,0,52.6,60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(77.3,19.2,163,163), null);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol116();
	this.instance.parent = this;
	this.instance.setTransform(586.4,-316.1,1,1,0,0,0,150.6,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(435.8,-345.1,301.2,58);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol216();
	this.instance.parent = this;
	this.instance.setTransform(78.1,14.1,1,1,0,0,0,377.9,116);
	this.instance.cache(-2,-2,760,236);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299.8,-101.9,756,232);


(lib.Símbolo56copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(88,93);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa 1
	this.instance = new lib.Símbolo54copia();
	this.instance.parent = this;
	this.instance.setTransform(116.3,68.4,0.467,0.467,-10.9,0,0,39.4,39.1);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 255, 0)];
	this.instance.cache(-192,-89,354,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo56copy, new cjs.Rectangle(0,0.1,202.4,249.1), null);


(lib.Símbolo56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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BgkgDgQgAC9JeQABgEAHAEQAAABAAAAQgBAAAAAAQgBAAAAABQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAgBgAhPJHQgBgPgEgCQgCAEAAgIQAAgCATgOQAUgPANAAIABAAIAAAFIgCAVIAIABQALACAOAAQAAgPAFgXIAAAjQARgQACgbIgBgYIgHABIgBAAIgFAPIAEgPQglAAgCgDQAYgCASgFIAFgQIAJABIAAAMQAOgEALgGQAOgIAJgIQgEAUgbALIgRAGIAAAkIgLAUQgHANgIAJIAAAPQACAAADAEQAVgYAKgXQADABAAALIAAADQAOgCACgKQACgLAJgDIABgBIABAFQAAAFgDAEIgDAFQA1gEAJgHQACgIAFgFIAJAAIABABIAAAFQAAAEgDAMIgDAPIABAQQARgBAFgFQADgHADgCQgKgGgBgEIgBgIQAUgEABAFQABADgDAGQAjgNAHgZQAKgjALgLIAJABQAKAAABACQgDAIgJANQAEgJgBgHIABgCQgSAFgIASIgHAbIAAABIAOgNQgMASgGAKIAAAXQAEgCAOgXQAMgTAVAAIAWAAQAAAGADAJQAHgEAUgIIAsgSIAGACIABgCIAAAEQAAACgJAJQgKAJAAAFIAAAEQAVAFAbgoQAAgFgHgFQgGgEgCAAIgOABQAAACAJAFIgBACIgMAAIgBgCIAAgOQAZADAIAFQAHAEAAAHQAAAGgQASQgRATgJAAIgQgBQgDgMAEgIIABgBQgsADgKANQgCACgBAUIgJAEIgHgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgGABgDQACgFAIgGQgDgGAAgEQgjAGgKAOIgQAYQgNgDAAgIIABgPQgJAFgWARIgUAQQgTAAgEgKIAAgLQAAgQAGgOIgCgCQgMATgbAEQgkAFgIAEQgNAHgMANQgLAMgDAAQgSAAgBgKIADgOQgYAAgGgDIgDgFQgGAlgMAAQgVAAgFgOgAhDIoQgIAJAAAJQAAAJABACQACAEAJAGQARgHAEgRQABgUACgJIAAgCQgSAEgKAMgAEWIhQgCAFAAAHQAIgHgGgFgAASHhIADgBIAAgHIgDAIgAHjH7QgBgEAAgMIAAgCQgFAHgRALQgKAAgBgDQACgCALgHIAOgJIADgDIgSgEQAAAAgBABQAAAAAAgBQAAgBAAgBQAAgBAAgCQAAgDAGgBQAHgDANABIAAAVQAAANAOAFQAAACgIAAgAIpHlIAAgEIAFABQAHAAAHgGIABgFIgJgBQgDgGAGgLQAEgKAHgGQAIAFgBAHIgBAIQAugWARghIASg6IAAgqQgZAVgLAoIgPA8IgCACIgCgCIgBgGQAAgfAOgkQASguAdgIQABAJAAASQAAAcgCAKQgDAJgOAlQgHAThUA9gAJDG9IgFAHQgEAGAAADIAAADQAEgDADgHIAEgKgACbFAQgmg3gJgJQgYAVhDBGQgKgBgBgCIA2gwQAiggALgSQAVAPAiAvQAgAsAhAUIgBACQgugVgXghgAEiFFQAAgQALghQALggAIgKQgFASgMAkQgJAgACAWIgEACQgCgHAAgMgAgyE+QAwghALgzQAFg8AGgdIAJhWQAFg1AAgkQAAgbgIggIgDACIhiAAQhdgBgCgBIgJgDQgVgDgDgCQgVgFgEgIQgFgKAAgVQiSgSgcg2QgIgPgBgdQgBgegFgKQgEgIghgKQgngLgEgDQgIgEgKgOQgLgOgDgLQgGgSgOggQgDgHAAgaQAAgwAWgvQAag4AvggQgKgWgVgdQgLgPAAgZQAAg5AqgiQAbgXCKhJQAMgHAWABQARABAKgOQAEgFACgGIAFgKQAagiAOgPQA2g2CTAUQBLAKBAAVQAOAAARgJQARgJAMAAQBiAAAkASQAkASA/BRQAmAxAIARQALAWAAAmQAAAegDANQgEAUgQAeIAAACQAmAJAWAfQAQAZAAAYQAAAhgPAiIAEgQQAGgiAAgRQAAgWgSgZQgXgggmgGIAWg2QAEgOAAggQAAgIgOghQgTgsgZglQhPhxhsAAQg9AAgOAKQgOAJgIAAIgxgRQgwgQhTAAQhWAAgqARQg8AYgVBEQiNAnhEA4Qg6AvAAA2QAAAgAVAZQAVAZAAAKQAAABghAdQgjAigMAZQgFALgGAgQgFAfAAATQAAAZAGAJQALAQAHAlQAEARAuAQQAyARAMAVQAHALABAdQAAAeAIAPQAcA2CcALIgIAJQgDADAAADIAAANQAEAKASAGQA1ATCwgPQgPg3gjhEIgUgjIAfAvQAaAjAPA2IAGAYIACABIgCABQAHAhAAAfQAAAlgFAzIgIBeQgFA6gKAhQgPA2glAYQgHgBgCgCgAGPEYQgfgYgegLIABgCQAjABASAWQASAWA9ACQgDADgHAAQguAAgQgNgAElgfQg1iIAAiFQAAg9ADgLQAEgWAdg4IgdBZIgBALQAvhMAogKIAIACQgdAMgaAeQgNAPgZAlIgCgBIgBAsQAACEA1CEQA8CZBxBhIgBACQhzhZg+ihgAlSCDIgGAEQgGADgEAAIgGAAIADgCQAAgDgvgEQAAABAAAAQgBAAAAAAQAAgBAAgBQAAgBAAgCQAAgFAJgJIAJgHQgPgCgDgDQADgLgGgFIAAgVIgeACQgqAAgKgaQgEgdgEgJIAgAQQAiAQAYAPIAAgEIAhgBQgHgKgJgKQgPgPgsglQAVgRArgIQAegFAdAAIABABIAAAGQAAAFgOA0IgJAlIAhgBQACgHAGgHQANgRAZADIAEAAIAdAAQABAGAAAOIAAACQAGACAIAFQASAMAAAIQAAAIgCgBIgnAEQgCAHgDAAQgoAAgRgNQgFgEgDgEIgGAUQgLAdgIAAIgggBIgVAQQAkADAAACIAHgDQAFgDAFAAQAEAAABABIACACIABALQAAAIgBACIgDABIgCgPgAl1BjIACABIAEAAQAdAAALgZIAGgbIgeAAIgEAVIgEAAQgEgKgHgLIggAAQAAAJgDAYQADAPAYADIABgBgAj8BIIAAgEQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAAAAAIABgBIAHgQIAAgJIgIgDQADgCAFAAIAAgRIgfAAIgcAOQgJAFgCAGIAAACIAAALIAFADIALgSQAHgNAOgEIAEAAQADABABACQgRADgHANIgJASIAMAHIAJAFIAbAAIAAAAgAjyA/IAegDIgMgLQgFgFgIgDIgFAWgAniAdIAGAMQADAJAGADQAKANAVgIQASgIAKAJIAAgKIgGABQgCAAgbgPQgegQgNgDQgBAFAFAIgAmBgyQgiAFgMAOQAQAVAWAWIAbAdIALAAQALgRAEgZQAEglAEgQIg1AEgABegMIgJg6QAAgxAOhLQACAJAAAQIgFAuQgGApAAANIALA3QAPA0AYAAQAgAAAOheIAIhlIAAgtQgEgmgXAAQgIAAgGAFQAEgJAEgFQAeAPAHAaQACAJAAArIgIBmQgQBigkAAQgfAAgPg4gAB0gyIAAgSQAAgVANhBIAJgoIAAAoQAAAEgIAnIgIAqIAAAZIACAEQARgDAQglQANgfAAgSQAAgEgCgDIgEgHIABgCIAIAAQACAEAAAMQAAATgIAeQgNAvgWAAQgNAAgDgRgAD7jvQCGgSArg8QANgTAFgbQACAigOAPQgQATgHAFQgLAKgWALQg7Ahg4AAQgKAAgCgDgAiYlsIgHABIhhgVQhfgWgbAAQgBABAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgCQAAgMBRAQQBNAQBJAYIAAABQArAQAgAyIALAQQgsg+gtgTgAHBmiQAEgHAkgbIgjAnQgDADgBAEIgBgMgAkanZQgVgGhSgCQABgCBVAAIARAFIAQAEIA1AAQhJhqgUgcIAEAAIBiCHIAAAFIgCABQg5AAgTgGgAgQnWIAFgJQgKgFhUg8QhhhFgwgoQB6BPB4BYQBIiPAWiCIADAAIABABIAAAFQAAAqgrBuIg1CFQgJAAgBgCgAB9ntQgDgNAAgYQAAgSAIgXQAIgXAAgIIgGhnQAAgVACgJIADAAQABAtAGBYQAAAJgIAaQgJAZAAALQAAAVADAKQA9gdAwhBQAQgVAzhZIABAAIABAFQAABGiqCJgAqevAIABgRIADAAIAEAnIAAADIgDACQgFgLAAgQgAqDuvQAAgEgCgDIAAgmIAEAAIACAXQACAPADALIgCABQgGgBgBgEgAotu8IARgDQABgHgCgDQgDgGgOAAIACgGIABgIIAAgIQgDgEgJADQgCgCAAgFQAQAAAEACQAAAFAHAPQAIAPAAAHQAAAHgDACIgSAFQgCgDAAgGgApuvJQAKgDAEgEQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAAAIAFABQAFABABABIgOAJQgNgBgBgCgAnWvTIgDgEIAAgkIAFAAIAEAmIAAAEQAAAAAAAAQAAgBgBABQAAAAAAAAQAAAAAAAAIgCACIgDgEgAm4vVQgBgGAAgNQAAgNABgGIACAAQACALAAAVIAcAAQADgKADgFIAAgPQgSABgFAEIgCAAIgBgFQAAgEAEgBIAaAAQACAFAAAHQgEAdgFAAgAn4vaQgbgBgBgCQAOgCAHgDIAGgCIABgBIAAAFIAAAGIAAAAg");
	this.shape.setTransform(72.4,131.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa 1
	this.instance = new lib.Símbolo54copia();
	this.instance.parent = this;
	this.instance.setTransform(116.3,68.4,0.467,0.467,-10.9,0,0,39.4,39.1);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 204, 102, 0)];
	this.instance.cache(-192,-89,354,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo56, new cjs.Rectangle(0,0.1,202.4,249.1), null);


(lib.Símbolo55copia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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AEAVAJAWQAJAUAOAPQgSgPgJgRgAjqk3IgDABQAFAIA8ATQgIgfACgsQgiAggWAPgAibnAIASgEIACABQADgDAFgBQAMgBAZAHIAHgHIAFgHIgKgDIALABQAEgGACgJIgNgCIgwgLQgPAYgIAVgAAsjrQgCgGgCgFQgGAGgUAIQgaALgXAOQglgHAAgEQALgJATAEQAXADAHgDIAXgKIAPgMQAJgHAFAGQgMgggdgTIABgCQAnAVALAoIAPA/IgCACQgGgJgNg1gAG9j0QABgCAGAAQAKgDAOgNIADgMQACgGARgEIAHgCIgTAIQAFAPgZASQgLAKgLADQAAgGABgGgABukiQgJgCgmgZIgRgJIgCAAQgHgCAAgCIADAAIgdgOQACAGACAFQAAABAAABQgBAAAAAAQgBAAAAABQgBAAgBgBIgHgQQgLgGgNgEQAMABAKACQgDgTABgWIACgVQgKgGgBgGIAAgFQAJAHACAFIADgkIgigOQASAGAQAHIgBgCIAEABIABADQApARAdAaQAgAdAZATIADAAIgBACQAWARAQAJQgBADgGgCQgUgEgVgNQgHAKgFALIgDgBQAAgGACgNIghAkIAjAZQAAABAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAIgFgBgABcl+QAAAGgDASQgDAQgEADQgFAFgPAEIADACIANAJIABgEQABgIATgRQAKgJAIgEIgMgJIgggfIgagdQgKgMgcgMQABAPgDAqQgCAZAEAUQAYAFAXANQATgFAFgLQADgVAFgLIAEAAgAIplDIAKgyQAGgbAMgJQAFgEAGgCQABgHgEgGQgKgLgCgFIAVgMQADgCABgJQAMg3gxhWQgvhTggAFQACgLgLgLQgNgOgWAFQgEgBgUgSQgTgSgUgEQgpgIgEADQABAGgEAFQgQgJgCgOQgBgJgugJQgEgBgrgcQgbgTgPgHIAEACIA0AbQAcAOANADQApAIAIAMQAFAHADAMIAHgFIAGgDQA1AKAWARQAMAJAJALIgBgDQABgCAFABQAbAGAiAfQASARATAVQASASAIASIAJAeQABAGARAaQAOAWgCAKQgCAKACAUQABAUgBAHQgCAMgCACQgEAGgNAGQAFACADALQADAKgBAEQgBAFgMALQgNASgJApQgEAVgXAQIgQAIQASgKAQgUgAlIlWQgjgHgFgIIABgHQACgHAMgMQAIgJAIgGIABgBIAAAFQgCAFgHAHIgPANIgDANIAjAHQASgLAJgHIAFgfIgUgDQgGgBgBgBIAFgDQAHgBAWAGIgIAnQgBAAgNAMQgJAJgHAAIgBgBgAmul2IAAgBQgBgCABgEQACgJAQgSQAVgVAUgBIADABQAEABABACQgJAJgQABQgLAAgBAEQAAAEAMAHQAMAIgBAFIgDAKIgLAMgAmbmMQgFAFgDANQAcADADgEQABgHAFgCQgMgLgIAAQgFAAgEADgAnnl/QgNgDgBgNIACgLQgVgGgCgJIADgMQACgIAGgLIANgXIADABIABABIgBAFQgBAFgQARIgEAZIALAFIAHABQAJgYAjgLQAngNgFAbQgEAVgTAWIgUgEQgCgHAAgDQACAAAEACQAHAEAHABQAEgGAIgMQAFgMACgHIACgHQgBgCgGgBQgcgGgUAWQgGAGgEAHIABAAQABABAAAAQAAAAABABQAAAAAAABQAAABgBABIgBAHQAAACgGgBIAAAAQAAAGAAADQAEAJAMAIIgDABIgGgBgAAamJQAIABABgDQACgDADAAQABADAAADQgDAEgCAAQgJgDgBgCgAhzncIAEgCIAFABQAFACAAACIAAABQgMgCgCgCgAmInhQgSgEgNgJQAkAHAOgNIAIgRIAFAAIABABIgBAFQAAAEgPANQgOANgDAAIAAAAgAm8oLIgBgiIACgLIADABIAAAqQABAKACAGIgHgOgAmToPIgFgBIAqjRIAFABQgZCJgOBGIgCAEIgBgCgACdo2QgOgEgEgCQgKgDAKgEQACgBgPgOQgOgNgIgCQhBgNgMABIgMABQgHgCgBgCIAOgDQAOgDAHABQBFAOANAMQAJAGALAPQAWAPA7AIQgIADgKAAQgUAAgegKgAANtOIA3gPQAlgPA7AXQg7gMg7ASIgPABIgSAAg");
	this.shape.setTransform(104.6,100.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa 1
	this.instance = new lib.Símbolo54copia();
	this.instance.parent = this;
	this.instance.setTransform(118.4,66.2,0.467,0.467,4.1,0,0,39.3,39);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 204, 255, 0)];
	this.instance.cache(-192,-89,354,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo55copia, new cjs.Rectangle(0,0,178.5,233.1), null);


(lib.Symbol224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.book = new lib.Symbol202();
	this.book.parent = this;
	this.book.setTransform(144.2,496.7,1,1,0,0,0,508.4,438.8);

	this.timeline.addTween(cjs.Tween.get(this.book).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol224, new cjs.Rectangle(51.8,167.9,362,389), null);


(lib.Symbol218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol152();
	this.instance.parent = this;
	this.instance.setTransform(580.6,126.1,1.304,1.304,0,0,0,445.2,93.1);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 153, 153, 0)];
	this.instance.cache(-2,-5,627,289);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol218, new cjs.Rectangle(0,0,812.5,372.2), null);


(lib.Symbol217 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Símbolo53();
	this.instance.parent = this;
	this.instance.setTransform(105.1,421.9,1.742,1.742,152.5,0,0,-317.7,190.8);
	this.instance.cache(-332,88,26,218);

	this.instance_1 = new lib.Símbolo54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(434.5,247.3,0.816,0.816,25.6,0,0,39.3,39.1);

	this.instance_2 = new lib.Símbolo55copia();
	this.instance_2.parent = this;
	this.instance_2.setTransform(431.9,329.8,1.747,1.747,40.2,0,0,89.2,116.6);
	this.instance_2.cache(-2,-2,183,237);

	this.instance_3 = new lib.Símbolo56();
	this.instance_3.parent = this;
	this.instance_3.setTransform(222.7,279.5,1.747,1.747,0,0,0,101.2,124.6);
	this.instance_3.cache(-2,-2,206,253);

	this.instance_4 = new lib.Símbolo56copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(420.7,264.2,1.747,1.747,19.5,0,0,101.2,124.6);
	this.instance_4.cache(-2,-2,206,253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol217, new cjs.Rectangle(0,21.4,669.4,564.5), null);


(lib.Symbol204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bt.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.youtube.com/watch?v=4iBrOX2qwe8&list=PLH0vO4TpnElxv0f-Tuxvo4f3vV01muL3u", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol206();
	this.instance.parent = this;
	this.instance.setTransform(162.3,-37.5,1,1,0,0,0,174.6,24.4);
	this.instance.cache(-2,-2,455,53);

	this.bt = new lib.Symbol199();
	this.bt.parent = this;
	this.bt.setTransform(235.4,87.5,1,1,0,0,0,190.5,114.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol204, new cjs.Rectangle(-12.3,-61.9,451,349), null);


(lib.Symbol200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.book.book.gotoAndPlay("ini");
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_156 = function() {
		exportRoot.menu.gotoAndPlay("ini");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(81).call(this.frame_105).wait(51).call(this.frame_156).wait(1));

	// Symbol 204
	this.instance = new lib.Symbol204();
	this.instance.parent = this;
	this.instance.setTransform(-272.8,425.9,1,1,0,0,0,242.5,141.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({x:266.2},59,cjs.Ease.get(1)).wait(1).to({x:-272.8},38,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// Layer 2
	this.book = new lib.Symbol224();
	this.book.parent = this;
	this.book.setTransform(1187.3,338.1,1,1,0,0,0,180.8,194.3);
	this.book._off = true;

	this.timeline.addTween(cjs.Tween.get(this.book).wait(24).to({_off:false},0).to({x:607.4,y:342.4},59,cjs.Ease.get(1)).wait(31).to({x:1239.8,y:338.1},34).to({_off:true},1).wait(8));

	// Symbol 201
	this.instance_1 = new lib.Symbol201();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1295.6,103.8,1,1,0,0,0,359.6,103.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:359.6},59,cjs.Ease.get(1)).wait(64).to({x:1295.6},33,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(936,0,719.1,183.2);


(lib.Symbol194 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(178.1,168.6,0.493,0.493,0,0,0,186.5,48.6);

	this.instance_1 = new lib.Symbol52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(178.1,83.2,0.493,0.493,0,0,0,360.4,168.7);
	this.instance_1.cache(-6,-6,733,350);

	this.instance_2 = new lib.Bitmap62();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol194, new cjs.Rectangle(-1.6,-2,359.5,230.7), null);


(lib.Symbol193 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(177.7,168.6,0.493,0.493,0,0,0,186.5,48.6);

	this.instance_1 = new lib.Symbol52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(177.7,83.2,0.493,0.493,0,0,0,360.4,168.7);
	this.instance_1.cache(-6,-6,733,350);

	this.instance_2 = new lib.Bitmap61();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol193, new cjs.Rectangle(-2,-2,359.5,230.7), null);


(lib.Symbol192 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(177.7,168.6,0.493,0.493,0,0,0,186.5,48.6);

	this.instance_1 = new lib.Symbol52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(177.7,83.2,0.493,0.493,0,0,0,360.4,168.7);
	this.instance_1.cache(-6,-6,733,350);

	this.instance_2 = new lib.Bitmap65();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol192, new cjs.Rectangle(-2,-2,359.5,230.7), null);


(lib.Symbol191 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bt.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://lacosanostrackstudio.github.io/lino/mayoromenor/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap64();
	this.instance.parent = this;
	this.instance.setTransform(-21,-33);

	this.bt = new lib.Symbol192();
	this.bt.parent = this;
	this.bt.setTransform(177.7,95.2,1,1,0,0,0,177.7,95.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol191, new cjs.Rectangle(-21,-33,378.4,261.6), null);


(lib.Symbol190 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bt.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://play.google.com/store/apps/details?id=air.SuperTroopaBrickv2&hl=es&gl=US", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol195();
	this.instance.parent = this;
	this.instance.setTransform(16.1,23.3,1,1,0,0,0,35.8,38.3);
	this.instance.cache(-2,-2,76,81);

	this.bt = new lib.Symbol194();
	this.bt.parent = this;
	this.bt.setTransform(178.1,95.2,1,1,0,0,0,178.1,95.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol190, new cjs.Rectangle(-19.7,-15,377.6,243.6), null);


(lib.Symbol189 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bt.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://play.google.com/store/apps/details?id=air.Memorizalaprincesa2&hl=es", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol195();
	this.instance.parent = this;
	this.instance.setTransform(16.1,23.3,1,1,0,0,0,35.8,38.3);
	this.instance.cache(-2,-2,76,81);

	this.bt = new lib.Symbol193();
	this.bt.parent = this;
	this.bt.setTransform(177.7,95.2,1,1,0,0,0,177.7,95.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol189, new cjs.Rectangle(-19.7,-15,377.2,243.6), null);


(lib.Symbol185 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol191();
	this.instance.parent = this;
	this.instance.setTransform(254.3,140.3,1,1,0,0,0,177.7,95.2);

	this.instance_1 = new lib.Symbol190();
	this.instance_1.parent = this;
	this.instance_1.setTransform(254.7,373.9,1,1,0,0,0,178.1,95.2);

	this.instance_2 = new lib.Symbol189();
	this.instance_2.parent = this;
	this.instance_2.setTransform(479.8,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol185, new cjs.Rectangle(55.6,12.1,781.6,495.2), null);


(lib.Symbol181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol217();
	this.instance.parent = this;
	this.instance.setTransform(455.4,310.6,0.914,0.914,0,0,0,341.3,292.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol181, new cjs.Rectangle(143.6,62.6,611.4,515.6), null);


(lib.Symbol179 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_146 = function() {
		this.stop();
	}
	this.frame_220 = function() {
		exportRoot.menu.gotoAndPlay("ini");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(146).call(this.frame_146).wait(74).call(this.frame_220).wait(1));

	// Symbol 181
	this.instance = new lib.Symbol181();
	this.instance.parent = this;
	this.instance.setTransform(1232.1,407.3,0.799,0.799);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).to({x:289.1},59,cjs.Ease.get(1)).to({x:1232.1},33,cjs.Ease.get(-1)).to({_off:true},1).wait(41));

	// Symbol 185
	this.instance_1 = new lib.Symbol185();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1263,420.5,1,1,0,0,0,381.9,205.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).to({x:320},59,cjs.Ease.get(1)).wait(62).to({x:1274},38,cjs.Ease.get(1)).wait(1));

	// Un videojuego, app o web es una excelente herramienta para generar tráfico, ingresos o ambas.  La industria de videojuegos, apps y webs ha experimentado altas tasas de crecimiento, debido al desarrollo de la computación y el uso creciente de dispositivos móviles, esto ha simplificado la vía en la que hacemos llegar nuestro contenido al consumidor final. 
	this.instance_2 = new lib.Tween14("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1323.1,88.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({x:380.1},59,cjs.Ease.get(1)).to({startPosition:0},60,cjs.Ease.get(-1)).to({startPosition:0},1).to({startPosition:0},21,cjs.Ease.get(1)).to({x:1334.1},49,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// CONTENIDO INTERACTIVO
	this.instance_3 = new lib.Tween13("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1321.2,-83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:378.2},59,cjs.Ease.get(1)).to({startPosition:0},87,cjs.Ease.get(-1)).to({startPosition:0},1).to({startPosition:0},16,cjs.Ease.get(1)).to({x:1332.2},43,cjs.Ease.get(1)).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(879.2,-115.4,901.3,339.5);


(lib.Symbol169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol168();
	this.instance.parent = this;
	this.instance.setTransform(29.4,15.3,0.241,0.241,0,0,0,99.7,63.2);

	this.instance_1 = new lib.Symbol22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,73.7,0.408,0.408,0,0,0,61.4,62.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol169, new cjs.Rectangle(0,0,60,103.6), null);


(lib.Symbol151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol219();
	this.instance.parent = this;
	this.instance.setTransform(246.7,-203.2,1,1,0,0,0,359.6,49);
	this.instance.cache(-2,-2,786,115);

	this.instance_1 = new lib.Symbol218();
	this.instance_1.parent = this;
	this.instance_1.setTransform(313.9,-42.2,1,1,0,0,0,406.3,123.8);
	this.instance_1.cache(-2,-2,817,376);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol151, new cjs.Rectangle(-112.9,-252.2,833,458.4), null);


(lib.Symbol136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(36.7,130.2,0.585,0.592,0,8.7,0,164.8,103.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.5,80.8,0.585,0.594,0,-10.1,0,146.2,19.3);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 0, 153, 0), new cjs.BlurFilter(15, 15, 1)];
	this.instance_1.cache(75,17,167,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBCIAAgoIBwhBIAAAAIgqACIhGAAIAAgdICVAAIAAApIhvA/IAAABIAogBIBHAAIAAAcg");
	this.shape.setTransform(106.9,203.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhOA1QgUgTAAgiQAAgiAUgSQAUgTAmAAQAkABAUASQAUATAAAhQAAAjgUASQgUATglgBQglABgUgTgAg6gbQgNAJAAASQAAAmAyAAQAyAAAAgmQAAgRgNgKQgMgKgZAAQgZAAgMAKgABhArQgGgFgKgNIgQgUIAAgUIADAAQAUARALAGIAAAjg");
	this.shape_1.setTransform(109,186.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKAQIAAgfICVAAIAAAfg");
	this.shape_2.setTransform(106.9,175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoAvIAHgRQADgJAAgIQAAgRgNgJQgOgKgXAAQgyAAAAAkQAAAQAIAXIgaAAQgIgTAAgXQAAgfATgSQAUgRAlAAQAXAAARAIQATAJAIAQQAKAQAAAUQAAAWgLAWg");
	this.shape_3.setTransform(106.9,165);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoAvIAHgRQADgJAAgIQAAgRgNgJQgOgKgXAAQgyAAAAAkQAAAQAIAXIgaAAQgIgTAAgXQAAgfATgSQAUgRAlAAQAXAAARAIQATAJAIAQQAKAQAAAUQAAAWgLAWg");
	this.shape_4.setTransform(106.9,151.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA9QgRABgMgIQgNgIgGgOQgHgNAAgTQAAgcAPgRQAOgPAaAAIBgAAIAAAfIhbAAQgRAAgJAHQgIAHAAAPQAAAPAIAIQAJAHASAAIBaAAIAAAfg");
	this.shape_5.setTransform(106.8,136.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2ApQgUgVAAgnIAAgqICVAAIAAAvQAAAjgTAVQgUAUgiAAQglAAgTgVgAgwgPQAAAsAxAAQAwAAAAgpIAAgSIhhAAg");
	this.shape_6.setTransform(106.9,121.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4A1QgUgSAAgjQAAghAUgTQAUgSAkAAQAmgBATAUQAUARAAAjQAAAigUASQgUASglABQgkgBgUgSgAglgcQgNAKAAASQAAAmAyAAQAzAAAAglQAAgTgNgKQgNgJgZAAQgYAAgNAJg");
	this.shape_7.setTransform(106.9,105);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKAZIA6gjIAAgRIg6AAIAAggICVAAIAAAsQAAAdgLAPQgMAPgWAAQgNAAgLgIQgJgHgFgNIhCAsgAAJgRQAAAPAEAGQAGAIAKAAQALAAAFgIQAEgGAAgPIAAgKIgoAAg");
	this.shape_8.setTransform(106.9,90.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAlQgNgQAAgaIAAgOIg1AAIAAggICVAAIAAAwQAAAagMAPQgMAOgXAAQgYAAgMgPgAAEgJQABAOAFAHQAGAIALAAQALAAAGgGQAFgHAAgMIAAgOIgtAAg");
	this.shape_9.setTransform(106.9,76.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBAjQgLgPAAgaQAAgYAJgSIAdAAQgGAPgDALQgDAKAAAJQAAAJAEAGQAEAFAIABQAFgBADgCQADgCADgFIALgSQAGgOAFgHQAGgHAIgEQAIgEALAAQATAAAMANQALAOAAAWQAAANgDAKQgDAKgFAMIgYgKIAGgUQACgIAAgIQAAgHgDgFQgFgFgGAAQgFAAgDACIgGAGIgKATQgKAVgJAIQgLAIgOAAQgUAAgNgOg");
	this.shape_10.setTransform(106.9,63.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag4A1QgUgTAAgiQAAgiAUgSQAUgTAkAAQAmABATASQAUATAAAhQAAAjgUASQgUASglAAQgkAAgUgSgAglgcQgNAKAAASQAAAmAyAAQAzAAAAgmQAAgRgNgLQgNgJgZAAQgYAAgNAJg");
	this.shape_11.setTransform(106.9,49.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAlQgNgQAAgaIAAgOIg1AAIAAggICVAAIAAAwQAAAagMAPQgMAOgXAAQgYAAgMgPgAAEgJQABAOAFAHQAGAIALAAQALAAAGgGQAFgHAAgMIAAgOIgtAAg");
	this.shape_12.setTransform(106.9,35.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSASIhDAAIAAgjIBCAAIBpg5IAAAnIhHAjIBHAjIAAAog");
	this.shape_13.setTransform(132.4,135.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhVAsIApgNIAAg9IgpgNIAAgnICrA9IAAArIirA9gAgNAXIA9gUIAMgDIhJgVg");
	this.shape_14.setTransform(132.5,113.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAuA2QAFgKADgKQAEgKAAgJQAAgTgQgMQgPgLgbAAQg5AAAAAqQAAASAJAaIgeAAQgJgVAAgaQAAglAXgTQAWgUAqAAQAaAAAUAJQAVAKAKASQALATAAAXQAAAZgMAZg");
	this.shape_15.setTransform(132.4,98);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhVASIAAgjICrAAIAAAjg");
	this.shape_16.setTransform(132.4,86.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhKAnQgNgQAAgdQAAgcAKgVIAiAAQgIASgDAMQgDAMAAAKQAAALAEAGQAFAGAJAAQAFAAAEgCQAEgDAEgGIALgVQAIgQAFgIQAHgHAJgFQAJgFAMAAQAXAAANAQQANAPAAAaQAAAOgDAMQgDAMgGANIgcgMIAIgWQACgJAAgJQAAgJgFgGQgFgFgIAAQgEAAgEACQgDACgEAFQgDAFgJARQgLAYgLAJQgLAJgRAAQgXAAgOgRg");
	this.shape_17.setTransform(132.4,75.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgxBGQgTAAgPgIQgNgJgIgQQgIgQAAgVQAAghARgSQARgSAeAAIBtAAIAAAkIhoAAQgUAAgJAIQgKAIAAARQAAASAKAIQAJAIAUAAIBoAAIAAAkgABvAvIgSgUIgSgXIAAgXIACAAQAYATAMAHIAAAog");
	this.shape_18.setTransform(134.9,59.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhVBbIAAghIBRAAIANAAIAnACIAAgBIiFgsIAAghICGgpIAAgBIg2ACIhQAAIAAghICrAAIAAAyIiCAoIAAABICCAqIAAAxg");
	this.shape_19.setTransform(132.4,39.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAraIAAW1");
	this.shape_20.setTransform(88.2,91.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#0117B8","#00FFFF"],[0,1],64,125.4,-64.1,-125.5).s().p("AscSWMAAAgksIY5AAMAAAAksgABVHaIAA21g");
	this.shape_21.setTransform(79.7,117.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol136, new cjs.Rectangle(-21.5,0,180.9,234.9), null);


(lib.Symbol132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol136();
	this.instance.parent = this;
	this.instance.setTransform(79.7,117.5,1,1,0,0,0,79.7,117.5);
	this.instance.cache(-23,-2,185,239);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol132, new cjs.Rectangle(-21.5,0,180.9,234.9), null);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// Layer 1
	this.instance = new lib.Tween9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(299.8,166.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:127.9,alpha:1},139,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,65,756,232);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1011.4,97.1);
	this.instance.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},28).to({alpha:0.48},31).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol215();
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.9,34,1,1,0,0,0,209.8,46.1);
	this.instance_1.cache(-108,-68,530,186);

	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(250.5,-76.1,1,1,0,0,0,64,64);

	this.instance_3 = new lib.Symbol22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-423.2,-81.6,1.716,1.716,0,0,0,63.7,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-575.7,-248,941.5,352.4);


(lib.Symbol214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol169();
	this.instance.parent = this;
	this.instance.setTransform(30,70.5,1,1,0,0,0,30,51.8);
	this.instance.cache(-2,-2,64,108);

	this.instance_1 = new lib.Symbol167();
	this.instance_1.parent = this;
	this.instance_1.setTransform(599.4,80.7,1,1,0,0,0,116,80.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C1F7D").s().p("Ag2BoIAAgcQAMADANAAQAgAAARgSQARgSABgnIgBAAQgJANgLAGQgMAFgPAAQgcAAgPgRQgQgQgBgeQAAggATgTQASgTAgAAQAUAAARAKQARALAJAVQAIAUABAdQAAA8gZAeQgZAegwAAQgUAAgHgCgAgbhDQgKAMABAUQAAASAIAKQAJAJARAAQAQAAAMgJQALgKAAgOQgBgMgEgLQgFgLgJgGQgIgHgLAAQgRAAgJALg");
	this.shape.setTransform(258.7,93.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C1F7D").s().p("AhFBpIAAgZIA1g2QAXgYAIgJQAHgKAEgJQAEgJAAgKQAAgOgJgJQgIgHgOAAQgMgBgLAFQgLAEgPAMIgSgWQARgPARgGQAQgGASAAQAcAAASAPQARAPAAAaQAAAOgFANQgFAMgKAMQgLAOgYAWIgjAjIAAABIBhAAIAAAeg");
	this.shape_1.setTransform(242.2,93.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C1F7D").s().p("AALBnIAAiEQAAgYABgOIgIAHIgfAbIgQgVIA7gxIAcAAIAADOg");
	this.shape_2.setTransform(224,93.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C1F7D").s().p("AhFBpIAAgZIA1g2QAXgYAIgJQAHgKAEgJQAEgJAAgKQAAgOgJgJQgIgHgOAAQgMgBgLAFQgLAEgPAMIgSgWQARgPARgGQAQgGASAAQAcAAASAPQARAPAAAaQAAAOgFANQgFAMgKAMQgLAOgYAWIgjAjIAAABIBhAAIAAAeg");
	this.shape_3.setTransform(209.1,93.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C1F7D").s().p("AgkAOIAAgbIBIAAIAAAbg");
	this.shape_4.setTransform(196.1,96.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C1F7D").s().p("AhFBfIAAgeQAOAHAOADQAPAEAOAAQAXAAAMgJQAMgJAAgTQAAgQgOgHQgNgJgbABIgSAAIAAgaIASAAQAxgBAAgiQAAgNgJgHQgIgIgQAAQgMABgLADQgLADgPAKIgQgYQAcgUAmAAQAeAAASANQASANAAAYQAAATgMAOQgLANgVAEIAAABQAZAEAMALQANANAAAUQAAAegVAQQgWAQgmABQgiAAgYgMg");
	this.shape_5.setTransform(183.1,93.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6C1F7D").s().p("AhCBeIAAgfQALAHAPAEQAPADANAAQAVAAAMgKQAMgKAAgTQAAgmgvAAIgQACIgRADIgPgIIAIhlIBrAAIAAAeIhOAAIgEAzIAMgCQAHgCAKAAQAfAAASARQASAQAAAcQAAAigVASQgUATgmAAQgiAAgUgLg");
	this.shape_6.setTransform(166.7,94);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6C1F7D").s().p("AgjBfQgRgKgJgVQgIgUAAgdQAAh4BiAAQAPAAALACIAAAcQgLgDgOAAQggAAgRARQgRASgBAoIACAAQAGgMAMgGQAMgGAQAAQAcAAAPARQAQAQAAAeQAAAggSATQgSATggAAQgVAAgQgLgAgQACQgJAFgFAIQgGAIAAAIQAAAUALAOQALAOAQAAQARAAAJgLQAJgLAAgVQAAgSgIgKQgJgJgRAAQgKAAgJADg");
	this.shape_7.setTransform(150.2,93.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6C1F7D").s().p("AgjAOIAAgbIBIAAIAAAbg");
	this.shape_8.setTransform(137.1,96.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C1F7D").s().p("Ag2BoIAAgcQAMADANAAQAgAAARgSQARgSABgnIgBAAQgJANgLAGQgMAFgPAAQgcAAgPgRQgQgQgBgeQAAggATgTQASgTAgAAQAUAAARAKQARALAJAVQAIAUABAdQAAA8gaAeQgYAegwAAQgUAAgHgCgAgbhDQgKAMABAUQAAASAIAKQAJAJARAAQAQAAAMgJQALgKAAgOQgBgMgEgLQgFgLgJgGQgIgHgLAAQgRAAgJALg");
	this.shape_9.setTransform(124.2,93.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C1F7D").s().p("AARBoIAAgtIhdAAIAAgaIBdiIIAgAAIAACGIAcAAIAAAcIgcAAIAAAtgAAFgrIgzBKIA/AAIAAgzQAAgcACgRIgBAAQgFAJgIANg");
	this.shape_10.setTransform(107.7,93.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6C1F7D").s().p("AgzBcQgSgPAAgaQAAgSAJgNQAKgOAWgKQgTgLgIgNQgIgMAAgQQAAgXASgNQARgNAcAAQAdAAASANQARAOAAAWQAAAggnATQAZALAKAOQAKANAAARQAAAZgTAQQgSAPggAAQghAAgTgOgAgdAbQgIAKAAANQAAAOAKAJQAKAIARAAQASAAAKgJQAKgIAAgPQAAgLgJgKQgJgJgTgIIgDgCQgTAIgIAKgAgWhJQgJAHAAAMQAAAIADAFQADAGAGAFQAGAFAOAGQARgHAHgIQAHgJAAgLQAAgMgJgHQgJgHgOAAQgNAAgJAHg");
	this.shape_11.setTransform(91.1,93.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6C1F7D").s().p("AALBnIAAiEQAAgYABgOIgIAHIgfAbIgQgVIA7gxIAcAAIAADOg");
	this.shape_12.setTransform(65.3,93.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6C1F7D").s().p("ABSBQIAAhgQAAgSgHgJQgHgJgOAAQgUAAgIANQgJAMAAAZIAABSIghAAIAAhgQAAgSgHgJQgGgJgPAAQgTAAgJANQgJANAAAcIAABOIghAAIAAicIAaAAIAEAVIACAAQAGgMANgGQAMgGAPAAQAkAAALAZIACAAQAHgMANgGQAMgHARAAQAcAAANAOQAMAPAAAdIAABlg");
	this.shape_13.setTransform(399.8,35.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglATgWQAUgVAiAAQAjAAATAWQAUAWAAAkQAAAmgUAWQgTAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AnAAQAoAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_14.setTransform(377,35.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_15.setTransform(361.2,35.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6C1F7D").s().p("AgPAQQgFgGAAgKQAAgJAFgGQAFgFAKgBQAKABAFAFQAGAGAAAJQAAAKgGAGQgFAFgKABQgKgBgFgFg");
	this.shape_16.setTransform(349.9,41.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6C1F7D").s().p("AgQBuIAAjbIAgAAIAADbg");
	this.shape_17.setTransform(341.8,32.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6C1F7D").s().p("AgQBsIAAibIAgAAIAACbgAgMhLQgGgFAAgJQAAgJAGgFQAEgEAIAAQAJAAAFAEQAFAFgBAJQABAJgFAFQgFAEgJAAQgIAAgEgEg");
	this.shape_18.setTransform(333.7,32.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6C1F7D").s().p("Ag0BFQgOgNABgXQAAgYARgLQASgMAkgCIAbAAIAAgJQABgPgIgHQgGgIgPAAQgLAAgMAEQgLADgKAFIgKgYQANgGAPgEQAPgDAMAAQAeAAAPANQAPANABAcIAABoIgYAAIgHgWIgBAAQgMAPgLAFQgLAFgSAAQgWAAgNgMgAANAEQgWABgLAHQgKAHAAAPQgBAKAHAGQAGAGAMAAQARAAAMgKQALgLgBgSIAAgOg");
	this.shape_19.setTransform(320.8,35.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6C1F7D").s().p("ABSBQIAAhgQAAgSgHgJQgHgJgOAAQgUAAgIANQgJAMAAAZIAABSIghAAIAAhgQAAgSgHgJQgGgJgPAAQgTAAgJANQgJANAAAcIAABOIghAAIAAicIAaAAIAEAVIACAAQAGgMANgGQAMgGAPAAQAkAAALAZIACAAQAHgMANgGQAMgHARAAQAcAAANAOQAMAPAAAdIAABlg");
	this.shape_20.setTransform(299,35.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6C1F7D").s().p("Ag7BnQgQgLAAgVQAAgPAJgJQAJgKAQgEQgGgDgFgGQgEgGAAgIQAAgIAFgFQAFgGAKgGQgNgFgHgMQgIgMAAgQQAAgZAQgOQAQgOAegBIANABIALACIA2AAIAAASIgaAFQADAFADAIQACAHAAAIQAAAYgRAOQgQAOgdAAIgNgBQgLAHAAAHQAAAGAFACQAFAEANAAIAbAAQAaAAANALQAOAKAAAVQAAAbgWAOQgWAPgpAAQggAAgRgMgAglAzQgJAHAAAMQAAAKAKAGQAKAFARAAQAaAAAOgHQANgIAAgMQAAgLgHgEQgIgFgTABIgZAAQgOAAgIAGgAgYhUQgHAIAAAQQAAAPAHAIQAIAHAOAAQAcAAAAgeQAAgQgHgIQgIgIgNAAQgPAAgHAIg");
	this.shape_21.setTransform(276.9,39);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6C1F7D").s().p("AhUBYQgdgcgBgzQABgkAQgdQAQgdAcgPQAcgPAiAAQAfAAAYAMQAYANANAYQAOAXAAAfQAAAUgHAQQgGARgMAJQgMAKgOAAQgMAAgIgGQgIgGgDgKIgCAAQgGALgLAGQgKAFgMAAQgXAAgNgPQgOgPAAgZQAAgdASgRQASgTAdAAQAKAAANACQANACALAEIgEBAIAAADQAAAYAPAAQALAAAHgPQAGgPABgVQgBgYgJgTQgLgSgRgKQgTgJgXgBQgeAAgWANQgWAMgMAYQgMAWAAAeQAAApAWAXQAWAVApAAQAeABAjgNIAAAXQgfAMgiAAQgzAAgegcgAgUgaQgKALAAAUQAAAiAaAAQAaAAADgpIACgiQgKgCgKgBQgRABgKAMg");
	this.shape_22.setTransform(255.9,34.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6C1F7D").s().p("AAtBnIhlijIgBAAIAAAIQACAbAAAWIAABqIgeAAIAAjOIApAAIBkCkIABAAIgBgYIgBggIAAhsIAfAAIAADOg");
	this.shape_23.setTransform(231.6,33.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6C1F7D").s().p("Ag1BPQgZgcAAgzQAAggAMgXQAMgZAWgNQAXgNAdABQAggBAbAOIgNAcQgKgFgMgDQgLgFgNAAQgdAAgQAVQgRAVAAAkQAAAlAQAUQAQATAeAAQANAAAMgCIAagHIAAAdQgZAKgeAAQgtAAgYgcg");
	this.shape_24.setTransform(211.4,33.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6C1F7D").s().p("Ag8BnIAAjOIAiAAIAACxIBXAAIAAAdg");
	this.shape_25.setTransform(195,33.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6C1F7D").s().p("Ag5BIIAAgdQAdANAXAAQAeAAAAgTQAAgGgEgEQgDgEgIgEIgVgKQgbgJgJgLQgKgKAAgRQABgUAQgLQAQgLAbAAQAbAAAZALIgLAZQgZgKgRAAQgaAAAAAPQAAAHAHAFQAHAFAWAJQAUAIAIAFQAJAGAFAIQAEAIgBAMQABAXgRAMQgRAMgeAAQgfAAgUgJg");
	this.shape_26.setTransform(179.2,35.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_27.setTransform(163.2,35.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6C1F7D").s().p("AgPBsIAAibIAfAAIAACbgAgNhLQgEgFgBgJQABgJAEgFQAFgEAIAAQAJAAAFAEQAFAFAAAJQAAAJgFAFQgFAEgJAAQgIAAgFgEg");
	this.shape_28.setTransform(150.3,32.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6C1F7D").s().p("AgoA8QgTgUAAgnQAAgnAUgVQATgVAjAAQAZAAAUAJIgKAbQgVgIgOAAQgoAAAAA1QAAAaALANQAKANASAAQAWAAAUgLIAAAdQgJAGgKACQgKACgOAAQgjAAgSgVg");
	this.shape_29.setTransform(139.3,35.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6C1F7D").s().p("AgmBHQgRgKgJgSQgJgTAAgYQAAglAUgWQATgVAjAAQAhAAAVAWQATAWAAAkQAAAmgTAWQgUAVgjAAQgVAAgRgKgAgegnQgJAOAAAZQAAA2AoAAQAnAAAAg2QAAg1goAAQgUAAgKAOg");
	this.shape_30.setTransform(123.1,35.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C1F7D").s().p("Ag7BnQgQgLAAgVQAAgPAJgJQAJgKAQgEQgGgDgFgGQgEgGAAgIQAAgIAFgFQAFgGAKgGQgNgFgHgMQgIgMAAgQQAAgZAQgOQAQgOAegBIANABIALACIA2AAIAAASIgaAFQADAFADAIQACAHAAAIQAAAYgRAOQgQAOgdAAIgNgBQgLAHAAAHQAAAGAFACQAFAEANAAIAbAAQAaAAANALQAOAKAAAVQAAAbgWAOQgWAPgpAAQggAAgRgMgAglAzQgJAHAAAMQAAAKAKAGQAKAFARAAQAaAAAOgHQANgIAAgMQAAgLgHgEQgIgFgTABIgZAAQgOAAgIAGgAgYhUQgHAIAAAQQAAAPAHAIQAIAHAOAAQAcAAAAgeQAAgQgHgIQgIgIgNAAQgPAAgHAIg");
	this.shape_31.setTransform(106,39);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6C1F7D").s().p("AgwA8QgUgWAAglQAAglATgWQATgWAgAAQAfAAASATQASASAAAhIAAARIhnAAQABAXALANQAMAMAUAAQAOAAAMgDQAMgCAOgHIAAAbQgNAGgMADQgNACgQAAQgjAAgVgVgAgWgtQgKAKgBATIBGAAQgBgTgJgKQgJgKgQAAQgPAAgJAKg");
	this.shape_32.setTransform(89.7,35.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6C1F7D").s().p("AAtBnIhlijIgBAAIAAAIQACAbAAAWIAABqIgeAAIAAjOIApAAIBkCkIABAAIgBgYIgBggIAAhsIAfAAIAADOg");
	this.shape_33.setTransform(70.1,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol214, new cjs.Rectangle(0,0,775.8,161.4), null);


(lib.Symbol170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol214();
	this.instance.parent = this;
	this.instance.setTransform(387.9,80.7,1,1,0,0,0,387.9,80.7);
	this.instance.cache(-2,-2,780,165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol170, new cjs.Rectangle(0,0,775.8,161.4), null);


(lib.Symbol163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		exportRoot.menu.gotoAndPlay("ini");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(75).call(this.frame_169).wait(1));

	// Symbol 170
	this.instance = new lib.Symbol170();
	this.instance.parent = this;
	this.instance.setTransform(1178.5,391.1,1,1,0,0,0,387.9,80.7);
	this.instance._off = true;
	this.instance.cache(-2,-2,780,165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({x:359.5},55,cjs.Ease.get(1)).wait(50).to({x:1191.5},25).wait(1));

	// Symbol 165
	this.instance_1 = new lib.Symbol165();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-287.5,-0.9,1,1,0,0,0,91.2,162.7);
	this.instance_1._off = true;
	this.instance_1.cache(-2,-2,186,329);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({x:-73},58,cjs.Ease.get(1)).wait(44).to({x:887},25).wait(26));

	// Symbol 171
	this.instance_2 = new lib.Symbol171();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1146.4,41.9,1,1,0,0,0,361.5,206.3);
	this.instance_2.cache(-2,-2,727,417);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:385.9},59,cjs.Ease.get(1)).wait(35).to({x:1146.4},25).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(784.9,-164.4,723,412.7);


(lib.Symbol129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ini:0,dise:212,vide:213,musi:214,quie:215});

	// timeline functions:
	this.frame_118 = function() {
		this.stop();
		
		
		this.dise.addEventListener("click", dise.bind(this));
		
		function dise()
		{
		this.play();
			this.mivar.text = "dise";
		}
		
		
		this.vide.addEventListener("click", vide.bind(this));
		
		function vide()
		{
		this.play();
			this.mivar.text = "vide";
		}
		
		
		this.musi.addEventListener("click", musi.bind(this));
		
		function musi()
		{
		this.play();
			this.mivar.text = "musi";
		}
		
		this.quie.addEventListener("click", quie.bind(this));
		
		function quie()
		{
		this.play();
			this.mivar.text = "quie";
		}
	}
	this.frame_212 = function() {
		this.stop();
		
		this.btatras.addEventListener("click", btatras.bind(this));
		
		function btatras()
		{
		this.btatras.play();
			
		
		if (this.mivar.text == "dise")
			{	
					
				this.disex.play();
					
					}	
			
			
			
		if (this.mivar.text == "musi")
			{	
					
				this.musix.play();
					
					}
		
		if (this.mivar.text == "quie")
			{	
					
				this.quiex.play();
					
					}
					
		if (this.mivar.text == "vide")
			{	
					
				this.videx.play();
					
					}
					
					
			
		}
		
		////////////////////////////////////////////
		
		//if (this.mivar.text == "dise")
			//{	
					
				//this.gotoAndStop("dise");
					
					//}
		
		
		
		
		if (this.mivar.text == "vide")
			{	
					
				this.gotoAndStop("vide");
					
					}
		
		if (this.mivar.text == "musi")
			{	
					
				this.gotoAndStop("musi");
					
					}
		
		if (this.mivar.text == "quie")
			{	
					
				this.gotoAndStop("quie");
					
					}
	}
	this.frame_213 = function() {
		this.stop();
	}
	this.frame_214 = function() {
		this.stop();
	}
	this.frame_215 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(118).call(this.frame_118).wait(94).call(this.frame_212).wait(1).call(this.frame_213).wait(1).call(this.frame_214).wait(1).call(this.frame_215).wait(1));

	// Layer 7
	this.mivar = new cjs.Text("", "bold 23px 'Arial'");
	this.mivar.name = "mivar";
	this.mivar.lineHeight = 21;
	this.mivar.lineWidth = 77;
	this.mivar.parent = this;
	this.mivar.setTransform(940.7,14.1);

	this.timeline.addTween(cjs.Tween.get(this.mivar).wait(216));

	// Layer 6
	this.btatras = new lib.Symbol115();
	this.btatras.parent = this;
	this.btatras.setTransform(-18.5,-121,0.481,0.481,-91.4,0,0,46.1,65.2);
	this.btatras._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btatras).wait(212).to({_off:false},0).wait(4));

	// Layer 2
	this.instance = new lib.Symbol151();
	this.instance.parent = this;
	this.instance.setTransform(497.7,791.4,1,1,0,0,0,445.3,93.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.disex = new lib.Symbol200();
	this.disex.parent = this;
	this.disex.setTransform(471.2,438.5,1,1,0,0,0,535.9,455.7);

	this.videx = new lib.Symbol179();
	this.videx.parent = this;
	this.videx.setTransform(349.8,235.7,1,1,0,0,0,359.6,177);

	this.musix = new lib.Symbol172();
	this.musix.parent = this;
	this.musix.setTransform(393.4,320,1,1,0,0,0,284.5,87);

	this.quiex = new lib.Symbol163();
	this.quiex.parent = this;
	this.quiex.setTransform(284.6,240.8,1,1,0,0,0,198.8,109.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},84).to({state:[{t:this.instance}]},34).to({state:[{t:this.instance}]},37).to({state:[]},1).to({state:[{t:this.disex}]},56).to({state:[{t:this.videx}]},1).to({state:[{t:this.musix}]},1).to({state:[{t:this.quiex}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({y:700.4,alpha:1},34,cjs.Ease.get(1)).to({y:791.4,alpha:0},37,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// Symbol 133
	this.quie = new lib.Symbol133();
	this.quie.parent = this;
	this.quie.setTransform(-199.5,117.5,1,1,0,0,0,79.7,117.5);

	this.timeline.addTween(cjs.Tween.get(this.quie).wait(59).to({x:693.1},59,cjs.Ease.get(1)).wait(50).to({x:959.6},43,cjs.Ease.get(-1)).to({_off:true},1).wait(4));

	// Symbol 132
	this.musi = new lib.Symbol132();
	this.musi.parent = this;
	this.musi.setTransform(-199.8,117.5,1,1,0,0,0,79.7,117.5);

	this.timeline.addTween(cjs.Tween.get(this.musi).wait(39).to({x:488.3},59,cjs.Ease.get(1)).wait(49).to({x:959.8},47,cjs.Ease.get(-1)).wait(17).to({_off:true},1).wait(4));

	// Symbol 131
	this.vide = new lib.Symbol131();
	this.vide.parent = this;
	this.vide.setTransform(-200.1,117.5,1,1,0,0,0,79.7,117.5);

	this.timeline.addTween(cjs.Tween.get(this.vide).wait(19).to({x:286.7},59,cjs.Ease.get(1)).wait(54).to({x:963.2},42,cjs.Ease.get(-1)).wait(37).to({_off:true},1).wait(4));

	// Symbol 130
	this.dise = new lib.Symbol130();
	this.dise.parent = this;
	this.dise.setTransform(-200.8,117.5,1,1,0,0,0,79.7,117.5);

	this.timeline.addTween(cjs.Tween.get(this.dise).to({x:79.7},59,cjs.Ease.get(1)).wait(59).to({x:961.2},34,cjs.Ease.get(-1)).wait(59).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.6,-28.8,1348.1,294.5);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_144 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));

	// Layer 6
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(831.1,675.2,0.609,0.609,0,0,0,205.6,73.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({y:613.7,alpha:1},60,cjs.Ease.get(1)).wait(1));

	// Layer 5
	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(198,60.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:358,y:180.5,alpha:1},64,cjs.Ease.get(1)).to({startPosition:0},40,cjs.Ease.get(-1)).to({startPosition:0},40).wait(1));

	// Layer 1
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(155.5,-142.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:72},29,cjs.Ease.get(1)).to({startPosition:0},35,cjs.Ease.get(-1)).to({startPosition:0},40,cjs.Ease.get(-1)).to({startPosition:0},40).wait(1));

	// Layer 2
	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(462.6,939.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({x:592.5,y:272.5,alpha:1},86,cjs.Ease.get(1)).to({startPosition:0},40,cjs.Ease.get(-1)).wait(1));

	// Layer 4
	this.instance_4 = new lib.Tween8("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(687,129);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).to({alpha:1},27).to({startPosition:0},40).to({startPosition:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199,-249.5,794,463.5);


// stage content:
(lib.index12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_259 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(259).call(this.frame_259).wait(1));

	// Layer 5
	this.menu = new lib.Symbol129();
	this.menu.parent = this;
	this.menu.setTransform(479.8,789.8,1,1,0,0,0,386.4,117.5);
	this.menu._off = true;

	this.timeline.addTween(cjs.Tween.get(this.menu).wait(259).to({_off:false},0).wait(1));

	// Layer 9
	this.instance = new lib.Bitmap33();
	this.instance.parent = this;
	this.instance.setTransform(303,1677);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).wait(200));

	// Layer 7
	this.instance_1 = new lib.Symbol123();
	this.instance_1.parent = this;
	this.instance_1.setTransform(485.1,427.8,1,1,0,0,0,195.6,14.6);

	this.instance_2 = new lib.Symbol114();
	this.instance_2.parent = this;
	this.instance_2.setTransform(190.2,280.2,1,1,0,0,0,299.8,102);

	this.instance_3 = new lib.Symbol111();
	this.instance_3.parent = this;
	this.instance_3.setTransform(372.8,244.2,1,1,0,0,0,344.4,210.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[]},60).to({state:[{t:this.instance_3},{t:this.instance_2}]},53).wait(147));

	// Layer 2
	this.instance_4 = new lib.Symbol109();
	this.instance_4.parent = this;
	this.instance_4.setTransform(502.5,-349.3,1,1,0,0,0,559.6,340.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).to({y:317.9},59,cjs.Ease.get(1)).wait(141));

	// Layer 3
	this.instance_5 = new lib.Tween2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(493.5,2052.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({y:1683.5},59,cjs.Ease.get(1)).to({startPosition:0},101,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(764.5,1169.2,391,123);
// library properties:
lib.properties = {
	width: 950,
	height: 1700,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1660099972989", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;