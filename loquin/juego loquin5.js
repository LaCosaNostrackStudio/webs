(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"juego loquin5_atlas_1", frames: [[394,0,192,221],[0,0,392,425]]}
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



(lib.Bitmap43 = function() {
	this.initialize(ss["juego loquin5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.initialize(ss["juego loquin5_atlas_1"]);
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


(lib.Symbol156 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap44();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol156, new cjs.Rectangle(0,0,392,425), null);


(lib.Symbol154 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap43();
	this.instance.setTransform(0,0,0.4307,0.4307);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol154, new cjs.Rectangle(0,0,82.7,95.2), null);


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
	this.shape.graphics.f("#FF0000").s().p("AhPBQQgighABgvQgBguAighQAhgiAuABQAvgBAhAiQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-11.3,-11.3,22.700000000000003,22.700000000000003), null);


// stage content:
(lib.juegoloquin5 = function(mode,startPosition,loop,reversed) {
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
		/////////////diparo//////////////	
		if (this.balas.text > "0") {
		    var disparoTimer = setInterval(generarDisparo.bind(this), this.velocidaddisparos.text);
		}
		
		function generarDisparo() {
		    var nuevoDisparo = this.disparo.clone();
		    
		    nuevoDisparo.x = this.nave.x;
		    nuevoDisparo.y = this.nave.y;
		    
		    this.addChild(nuevoDisparo);
		    
		    createjs.Tween.get(nuevoDisparo)
		        .to({ x: nuevoDisparo.x + 500 }, 1000)
		        .call(function() {
		            this.removeChild(nuevoDisparo);
		            this.balas.text = String(Number(this.balas.text) - Number(this.menos.text));
		            
		            if (this.balas.text <= "0") {
		                clearInterval(disparoTimer);
		            }
		        }.bind(this));
		}
		var velocidadInicial = 0.01;
		var velocidadMaxima = 20;
		var incrementoVelocidad = 0.08;
		var velocidadActual = velocidadInicial;
		
		
		 
		
		//////////////pantalla//////////
		createjs.Touch.enable(stage);
		
		this.btl.on("mousedown", onMouseDown.bind(this));
		this.btl.on("pressmove", onMouseMove.bind(this));
		this.btl.on("pressup", onMouseUp.bind(this));
							
							
		///////					
		function onMouseDown(evt)
				{
			
		this.mivar.text = "1";
								
		}		
			
		////////////	
		function onMouseUp(evt)
				{
					
		this.mivar.text = "0";
		}
		//////////
		function onMouseMove(evt)
				{
					
		
			}	
		//////////////////////////////////////
		
		
			
		/////////////////////////////////////////
		
		this.stage.on("tick", update.bind(this));
		
		function update()
		{
			if (this.mivar.text == "1")
						{	
					
					
					createjs.Tween.get(this.nave).to({y: this.nave.y - 100}, 500, createjs.Ease.quadOut);
					velocidadActual = velocidadInicial;
							
					
						}	
		
			if (this.mivar.text == "0")
						{	
					
						
					this.nave.y+= velocidadActual;
					
							if (velocidadActual < velocidadMaxima) {
								velocidadActual += incrementoVelocidad;
									}
			
							
						}			
		
		}
		
		
		///////////////teclado////////////////////////	
			document.addEventListener("keydown", hacer1 => 
		{
			
		   if(hacer1.keyCode == 38){
		      this.mivar.text = "1";
		   }
		   
		   
		}
		
		);
		
		/////////////////////
		document.addEventListener("keyup", hacer2 => 
		{
			
		   if(hacer2.keyCode == 38){
		      this.mivar.text = "0";
		   }
		
		}
		
		);
		
		
		//////////////////ver que tecla se presiona////////////////////////////
		//document.addEventListener('keydown', (event) => {
		 // const keyCode = event.keyCode;
		  //alert('keydown event\n\n' + 'key: ' + keyCode);
		//});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.velocidaddisparos = new cjs.Text("500", "39px 'Arial'", "#FF0000");
	this.velocidaddisparos.name = "velocidaddisparos";
	this.velocidaddisparos.textAlign = "center";
	this.velocidaddisparos.lineHeight = 46;
	this.velocidaddisparos.lineWidth = 73;
	this.velocidaddisparos.parent = this;
	this.velocidaddisparos.setTransform(1325.85,274.45);

	this.menos = new cjs.Text("1", "39px 'Arial'", "#FF0000");
	this.menos.name = "menos";
	this.menos.textAlign = "center";
	this.menos.lineHeight = 46;
	this.menos.lineWidth = 73;
	this.menos.parent = this;
	this.menos.setTransform(1249.2,114.55);

	this.balas = new cjs.Text("50", "39px 'Arial'", "#FF0000");
	this.balas.name = "balas";
	this.balas.textAlign = "center";
	this.balas.lineHeight = 46;
	this.balas.lineWidth = 73;
	this.balas.parent = this;
	this.balas.setTransform(1325.85,114.55);

	this.disparo = new lib.Symbol4();
	this.disparo.name = "disparo";
	this.disparo.setTransform(1511.8,635.35);

	this.btl = new lib.Symbol156();
	this.btl.name = "btl";
	this.btl.setTransform(472.8,630.15,0.224,0.224,90,0,0,196,212.5);

	this.mivar = new cjs.Text("0", "39px 'Arial'", "#FF0000");
	this.mivar.name = "mivar";
	this.mivar.textAlign = "center";
	this.mivar.lineHeight = 46;
	this.mivar.lineWidth = 73;
	this.mivar.parent = this;
	this.mivar.setTransform(1325.85,39.55);

	this.nave = new lib.Symbol154();
	this.nave.name = "nave";
	this.nave.setTransform(707.6,153.95,1,1,90,0,0,41.4,47.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nave},{t:this.mivar},{t:this.btl},{t:this.disparo},{t:this.balas},{t:this.menos},{t:this.velocidaddisparos}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1125.2,397.6,398,276.5);
// library properties:
lib.properties = {
	id: '7F3FD67418B2B247B863162FA8DD8C3F',
	width: 1400,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/juego loquin5_atlas_1.png?1684860004471", id:"juego loquin5_atlas_1"}
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
an.compositions['7F3FD67418B2B247B863162FA8DD8C3F'] = {
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