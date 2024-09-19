(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,375,599,66],[0,307,1024,66],[0,0,877,305]]}
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



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
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
	this.instance = new lib.Mapadebits2();

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(142.25,283.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,877,316.5), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF9900").s().p("AH0TOQgFAAgBgCQgdhJgPhVQAAgFgDgDQgpgrhCgTQgFAAgEACQhOAuhTAqQgFAAgEgCQhQgigfhUQAAgFACgEQAthFArhIIgBgKQgIhHgpgnIgKgBQhdgUhMgnIgFgBQgFhFAAhGIAKAAIAAgKQCQgUBIhcQADgDAAgFQATgkgRgaQgCgDAAgFQgohBgmhCQgCgEAAgFQAkhKBIgoQACgBAAgFQBTA9B1AcIAKABQBtg9AQieIAFAAQA+gSBXANIABAFQAdBpAxBVQACAEAAAFQAtAUBAgFIABgFQBHgnBGgnQAEgCAFAAQA8AxAvA/QADADAAAFQgjBQg1A+QgCADAAAFQADBNAnAoQADADAFAAQBjAaBPAvQACACAAAFQARAqgMBDQAAABgFAAQAAAFgDACQhDA/h4AKQAAAFgDADQgiAogDBIQAAAFACADQAyBFAmBTQAAAFgCADQgqBEhMAiQgFAAgEgCQhEgkg/gqQgFAAgEgDQgagQgjATQgDARgZAFQgMADgFALIhLC4QgFAAgFABQgiAMgiAAQgkAAgkgNgAFKH0IAAAKIAACCQAqB6CBAeQD0A5BLjbIAAgKQADj5jBgzIgKAAIgBAAQjrAAg2C0gAmZKLIgKgBQg2hvgViVIgFAAQgzgshPgPIgKgBQhnBDhsA9QgEACgFAAQh9gzg1h4QgCgEAAgFQArh/BKhfQADgDAAgFQgLhOglg1QgCgDAAgFQipgQhjhXQgCgCAAgFIgFgBQgFhZAAhaIAKAAIAAgKIAAgUQBsg5CXgSIABgFQAvgwAMhSIABgKQhFhmgxh3QgCgEAAgFQA8hzBvg/QAEgCAFAAQBtA4BiBDQADACAAAFQBVgKA4gmQAEgCAFAAQAaiQA0h1QACgEAAgFQBzgYBzAXIAKABQA3BtAYCNIABAKQA5ArBSAQIAKABQBjhHBwg5QAEgCAFAAQByA9BABuQACAEAAAFQg4B3hEBsQgBADgFAAQAQBPApA1QADADAAAFQCNAYBuA2QAEACAFAAQARBYgHBwIAAAKIigAAIgKAAQhzBGgoCUQAAABgFAAQg6gzhTgbQgEgBgFAAQiWAyhDCCQgCAEAAAFQAJB5A+BCQADADAFAAQhOAuhcAgQgEACgFAAQgdAkgQA0QAAACgFAAQgHBcAMBEIgFAAQg1AMg2AAQgzAAg0gLgApXlnIAAAKQgNF9GJgWQBpgiA7hSQByighsi7QgthMhagXQhMgUg/AAQjRAAhDDVg");
	this.shape.setTransform(125.0104,124.2816);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,250,248.6), null);


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
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,260.25,0.5,0.5);

	this.instance_1 = new lib.Símbolo1();
	this.instance_1.setTransform(147.1,124.2,1,1,0,0,0,125,124.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,299.5,293.3), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [39];
	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Capa_2
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(500.2,-169.4,1,1,0,0,0,438.7,158.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:103.6},39,cjs.Ease.get(1)).wait(1));

	// Capa_1
	this.instance_1 = new lib.Símbolo3();
	this.instance_1.setTransform(465.15,659.8,1,1,0,0,0,149.8,146.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({alpha:1},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(536.5,147.4,402,659);
// library properties:
lib.properties = {
	id: 'DA489C9C281DA8449E1C6B8915EF2A09',
	width: 950,
	height: 950,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1726781756987", id:"index_atlas_1"}
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
an.compositions['DA489C9C281DA8449E1C6B8915EF2A09'] = {
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