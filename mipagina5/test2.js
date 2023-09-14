(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
	this.shape.graphics.f("#00CCFF").s().p("AtDHlIAAvJIaHAAIAAPJg");
	this.shape.setTransform(83.625,48.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,167.3,96.9), null);


// stage content:
(lib.test = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [324];
	// timeline functions:
	this.frame_324 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(324).call(this.frame_324).wait(1));

	// Capa_1
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(132.1,206.45,1,1,0,0,0,83.6,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:849.7},129,cjs.Ease.get(1)).wait(96).to({x:842.2},0).wait(1).to({x:834.7},0).wait(1).to({x:827.2},0).wait(1).to({x:819.7},0).wait(1).to({x:812.2},0).wait(1).to({x:804.7},0).wait(1).to({x:797.2},0).wait(1).to({x:789.7},0).wait(1).to({x:782.2},0).wait(1).to({x:774.7},0).wait(1).to({x:767.15},0).wait(1).to({x:759.65},0).wait(1).to({x:752.15},0).wait(1).to({x:744.65},0).wait(1).to({x:737.15},0).wait(1).to({x:729.65},0).wait(1).to({x:722.1},0).wait(1).to({x:714.6},0).wait(1).to({x:707.1},0).wait(1).to({x:699.55},0).wait(1).to({x:692.05},0).wait(1).to({x:684.55},0).wait(1).to({x:677},0).wait(1).to({x:669.5},0).wait(1).to({x:661.95},0).wait(1).to({x:654.45},0).wait(1).to({x:646.9},0).wait(1).to({x:639.4},0).wait(1).to({x:631.85},0).wait(1).to({x:624.35},0).wait(1).to({x:616.8},0).wait(1).to({x:609.3},0).wait(1).to({x:601.75},0).wait(1).to({x:594.2},0).wait(1).to({x:586.7},0).wait(1).to({x:579.15},0).wait(1).to({x:571.6},0).wait(1).to({x:564.1},0).wait(1).to({x:556.55},0).wait(1).to({x:549},0).wait(1).to({x:541.45},0).wait(1).to({x:533.9},0).wait(1).to({x:526.4},0).wait(1).to({x:518.85},0).wait(1).to({x:511.3},0).wait(1).to({x:503.75},0).wait(1).to({x:496.2},0).wait(1).to({x:488.65},0).wait(1).to({x:481.1},0).wait(1).to({x:473.55},0).wait(1).to({x:466},0).wait(1).to({x:458.45},0).wait(1).to({x:450.9},0).wait(1).to({x:443.35},0).wait(1).to({x:435.8},0).wait(1).to({x:428.25},0).wait(1).to({x:420.65},0).wait(1).to({x:413.1},0).wait(1).to({x:405.55},0).wait(1).to({x:398},0).wait(1).to({x:390.4},0).wait(1).to({x:382.85},0).wait(1).to({x:375.3},0).wait(1).to({x:367.75},0).wait(1).to({x:360.15},0).wait(1).to({x:352.6},0).wait(1).to({x:345},0).wait(1).to({x:337.45},0).wait(1).to({x:329.9},0).wait(1).to({x:322.3},0).wait(1).to({x:314.75},0).wait(1).to({x:307.15},0).wait(1).to({x:299.6},0).wait(1).to({x:292},0).wait(1).to({x:284.4},0).wait(1).to({x:276.85},0).wait(1).to({x:269.25},0).wait(1).to({x:261.7},0).wait(1).to({x:254.1},0).wait(1).to({x:246.5},0).wait(1).to({x:238.9},0).wait(1).to({x:231.35},0).wait(1).to({x:223.75},0).wait(1).to({x:216.15},0).wait(1).to({x:208.55},0).wait(1).to({x:201},0).wait(1).to({x:193.4},0).wait(1).to({x:185.8},0).wait(1).to({x:178.2},0).wait(1).to({x:170.6},0).wait(1).to({x:163},0).wait(1).to({x:155.4},0).wait(1).to({x:147.8},0).wait(1).to({x:140.2},0).wait(1).to({x:132.6},0).wait(1).to({x:125},0).wait(1).to({x:117.4},0).wait(1).to({x:109.8},0).wait(1).to({x:102.2},0).wait(1).to({x:94.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(486,408,447.4,-153.1);
// library properties:
lib.properties = {
	id: '55FE401C126BDF44BA673E7420772D58',
	width: 950,
	height: 500,
	fps: 60,
	color: "#339966",
	opacity: 1.00,
	manifest: [],
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
an.compositions['55FE401C126BDF44BA673E7420772D58'] = {
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