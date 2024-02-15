(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"noticia_atlas_1", frames: [[0,1781,297,66],[0,0,991,1779]]}
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



(lib.CachedBmp_4 = function() {
	this.initialize(ss["noticia_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits1 = function() {
	this.initialize(ss["noticia_atlas_1"]);
	this.gotoAndStop(1);
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
	this.shape.graphics.f("#000000").s().p("EgyTAcTMAAAg4lMBknAAAMAAAA4lg");
	this.shape.setTransform(322,181.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,644,362.2), null);


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

	// Capa_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgyTAcTMAAAg4lMBknAAAMAAAA4lg");
	mask.setTransform(322,181.1);

	// Capa_2
	this.foto = new lib.Símbolo4();
	this.foto.name = "foto";
	this.foto.setTransform(322,181.1,1,1,0,0,0,322,181.1);

	var maskedShapeInstanceList = [this.foto];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.foto).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,644,362.2), null);


// stage content:
(lib.noticia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4];
	// timeline functions:
	this.frame_0 = function() {
		// Cargar dato desde el almacenamiento local del navegador
		this.mirutax.text = localStorage.getItem('clave');
	}
	this.frame_4 = function() {
		this.stop();
		////carga de index//////
		var miruta = this.mirutax.text;
			
			/////carga de textos///////
			var cargar1 = new createjs.LoadQueue(true);
			var cargar2 = new createjs.LoadQueue(true);
		
			cargar1.on('complete', completeF, this);
			cargar2.on('complete', completeF, this);
		
			var ruta1 = "publicaciones/"+miruta+"/titulo.txt";
			var ruta2 = "publicaciones/"+miruta+"/texto.txt";
		
			cargar1.loadFile(ruta1);
			cargar2.loadFile(ruta2);
		
				function completeF(e) {
			
					this.titulo.text = cargar1.getResult(ruta1);
					this.texto.text = cargar2.getResult(ruta2);
			
			}
			
		/////carga de imagen///////
		var foto = new createjs.Bitmap("publicaciones/"+miruta+"/imagen.jpg");
		
		this.foto.foto.addChild(foto);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa_1
	this.titulo = new cjs.Text("", "bold 30px 'Arial Black'", "#0CE4FF");
	this.titulo.name = "titulo";
	this.titulo.lineHeight = 44;
	this.titulo.lineWidth = 767;
	this.titulo.parent = this;
	this.titulo.setTransform(31.9,97.0901,0.8354,0.8354);

	this.texto = new cjs.Text("", "25px 'Arial'", "#FFFFFF");
	this.texto.name = "texto";
	this.texto.lineHeight = 30;
	this.texto.lineWidth = 765;
	this.texto.parent = this;
	this.texto.setTransform(32.8,634.6,0.8354,0.8354);

	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(27.9,31.35,0.5,0.5);

	this.mirutax = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.mirutax.name = "mirutax";
	this.mirutax.lineHeight = 38;
	this.mirutax.lineWidth = 164;
	this.mirutax.parent = this;
	this.mirutax.setTransform(818.85,-57.5);

	this.foto = new lib.Símbolo3();
	this.foto.name = "foto";
	this.foto.setTransform(352.25,427.9,1,1,0,0,0,322,181.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.foto},{t:this.mirutax},{t:this.instance},{t:this.texto},{t:this.titulo}]}).wait(5));

	// Capa_2
	this.instance_1 = new lib.Mapadebits1();
	this.instance_1.setTransform(4,7,1,0.9491);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(504,790.5,491,905);
// library properties:
lib.properties = {
	id: 'E42EECE00DF5554C85AAC680B1F9BF69',
	width: 1000,
	height: 1700,
	fps: 30,
	color: "#0A001D",
	opacity: 1.00,
	manifest: [
		{src:"images/noticia_atlas_1.png?1707964877834", id:"noticia_atlas_1"}
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
an.compositions['E42EECE00DF5554C85AAC680B1F9BF69'] = {
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