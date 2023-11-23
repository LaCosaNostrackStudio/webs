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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EghlAhmMAAAhDLMBDLAAAMAAABDLg");
	this.shape.setTransform(215,215);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,430,430), null);


// stage content:
(lib.categoria = function(mode,startPosition,loop,reversed) {
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
		this.fm1.addEventListener("click", fl_ClickToGoToWebPage1);
		
		function fl_ClickToGoToWebPage1() {
			window.open("articulo1/articulo.html", "_self");
		}
		
		
		
		this.fm2.addEventListener("click", fl_ClickToGoToWebPage2);
		
		function fl_ClickToGoToWebPage2() {
			window.open("articulo2/articulo.html", "_self");
		}
		
		
		
		this.fm3.addEventListener("click", fl_ClickToGoToWebPage3);
		
		function fl_ClickToGoToWebPage3() {
			window.open("articulo3/articulo.html", "_self");
		}
		
		
		
		this.fm4.addEventListener("click", fl_ClickToGoToWebPage4);
		
		function fl_ClickToGoToWebPage4() {
			window.open("articulo4/articulo.html", "_self");
		}
		
		
		this.fm5.addEventListener("click", fl_ClickToGoToWebPage5);
		
		function fl_ClickToGoToWebPage5() {
			window.open("articulo5/articulo.html", "_self");
		}
		
		
		
		this.fm6.addEventListener("click", fl_ClickToGoToWebPage6);
		
		function fl_ClickToGoToWebPage6() {
			window.open("articulo6/articulo.html", "_self");
		}
		/////carga de fotos miniatura
		
		var foto1 = new createjs.Bitmap("articulo1/fm.jpg");
		
		this.fm1.addChild(foto1);
		//////////////
		
		var foto2 = new createjs.Bitmap("articulo2/fm.jpg");
		
		this.fm2.addChild(foto2);
		//////////////
		
		var foto3 = new createjs.Bitmap("articulo3/fm.jpg");
		
		this.fm3.addChild(foto3);
		//////////////
		
		var foto4 = new createjs.Bitmap("articulo4/fm.jpg");
		
		this.fm4.addChild(foto4);
		//////////////
		
		var foto5 = new createjs.Bitmap("articulo5/fm.jpg");
		
		this.fm5.addChild(foto5);
		//////////////
		
		var foto6 = new createjs.Bitmap("articulo6/fm.jpg");
		
		this.fm6.addChild(foto6);
		//////////////
		
		
		
		/////carga texto portada
		
		var portada = new createjs.LoadQueue(true);
		
		portada.on('complete',completeF,this);
		
		var nameFile = "portada.txt";
		
		portada.loadFile(nameFile);
		
		
		function completeF(e)
		{
			this.portada.text = portada._loadedResults[nameFile];
		}
		
		////////////1//////////////
		
		var titulo1 = new createjs.LoadQueue(true);
		
		titulo1.on('complete',completeF1,this);
		
		var nameFile1 = "articulo1/titulo.txt";
		
		titulo1.loadFile(nameFile1);
		
		
		function completeF1(e)
		{
			this.titulo1.text = titulo1._loadedResults[nameFile1];
		}
		
		////////////2//////////////
		
		
		var titulo2 = new createjs.LoadQueue(true);
		
		titulo2.on('complete',completeF2,this);
		
		var nameFile2 = "articulo2/titulo.txt";
		
		titulo2.loadFile(nameFile2);
		
		
		function completeF2(e)
		{
			this.titulo2.text = titulo2._loadedResults[nameFile2];
		}
		
		////////////3//////////////
		
		var titulo3 = new createjs.LoadQueue(true);
		
		titulo3.on('complete',completeF3,this);
		
		var nameFile3 = "articulo3/titulo.txt";
		
		titulo3.loadFile(nameFile3);
		
		
		function completeF3(e)
		{
			this.titulo3.text = titulo3._loadedResults[nameFile3];
		}
		
		//////////////////////////
		
		var titulo4 = new createjs.LoadQueue(true);
		
		titulo4.on('complete',completeF4,this);
		
		var nameFile4 = "articulo4/titulo.txt";
		
		titulo4.loadFile(nameFile4);
		
		
		function completeF4(e)
		{
			this.titulo4.text = titulo4._loadedResults[nameFile4];
		}
		
		//////////////////////////
		
		
		////////////5//////////////
		
		var titulo5 = new createjs.LoadQueue(true);
		
		titulo5.on('complete',completeF5,this);
		
		var nameFile5 = "articulo5/titulo.txt";
		
		titulo5.loadFile(nameFile5);
		
		
		function completeF5(e)
		{
			this.titulo5.text = titulo5._loadedResults[nameFile5];
		}
		
		////////////6//////////////
		
		var titulo6 = new createjs.LoadQueue(true);
		
		titulo6.on('complete',completeF6,this);
		
		var nameFile6 = "articulo6/titulo.txt";
		
		titulo6.loadFile(nameFile6);
		
		
		function completeF6(e)
		{
			this.titulo6.text = titulo6._loadedResults[nameFile6];
		}
		
		//////////////////////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.fm6 = new lib.Símbolo3();
	this.fm6.name = "fm6";
	this.fm6.setTransform(712,1377.25,1,1,0,0,0,215.4,215.4);

	this.fm5 = new lib.Símbolo3();
	this.fm5.name = "fm5";
	this.fm5.setTransform(240.55,1377.25,1,1,0,0,0,215.4,215.4);

	this.fm4 = new lib.Símbolo3();
	this.fm4.name = "fm4";
	this.fm4.setTransform(712,852.85,1,1,0,0,0,215.4,215.4);

	this.fm3 = new lib.Símbolo3();
	this.fm3.name = "fm3";
	this.fm3.setTransform(240.55,852.85,1,1,0,0,0,215.4,215.4);

	this.fm2 = new lib.Símbolo3();
	this.fm2.name = "fm2";
	this.fm2.setTransform(712,331.05,1,1,0,0,0,215.4,215.4);

	this.fm1 = new lib.Símbolo3();
	this.fm1.name = "fm1";
	this.fm1.setTransform(240.55,331.05,1,1,0,0,0,215.4,215.4);

	this.titulo6 = new cjs.Text("", "10px 'Arial'");
	this.titulo6.name = "titulo6";
	this.titulo6.lineHeight = 13;
	this.titulo6.lineWidth = 131;
	this.titulo6.parent = this;
	this.titulo6.setTransform(502.8205,1596.95,3.2075,3.2075);

	this.titulo5 = new cjs.Text("", "10px 'Arial'");
	this.titulo5.name = "titulo5";
	this.titulo5.lineHeight = 13;
	this.titulo5.lineWidth = 131;
	this.titulo5.parent = this;
	this.titulo5.setTransform(31.0705,1596.95,3.2075,3.2075);

	this.titulo4 = new cjs.Text("", "10px 'Arial'");
	this.titulo4.name = "titulo4";
	this.titulo4.lineHeight = 13;
	this.titulo4.lineWidth = 131;
	this.titulo4.parent = this;
	this.titulo4.setTransform(502.8205,1072.55,3.2075,3.2075);

	this.titulo3 = new cjs.Text("", "10px 'Arial'");
	this.titulo3.name = "titulo3";
	this.titulo3.lineHeight = 13;
	this.titulo3.lineWidth = 131;
	this.titulo3.parent = this;
	this.titulo3.setTransform(31.0705,1072.55,3.2075,3.2075);

	this.titulo2 = new cjs.Text("", "10px 'Arial'");
	this.titulo2.name = "titulo2";
	this.titulo2.lineHeight = 13;
	this.titulo2.lineWidth = 131;
	this.titulo2.parent = this;
	this.titulo2.setTransform(502.8205,550.75,3.2075,3.2075);

	this.titulo1 = new cjs.Text("", "10px 'Arial'");
	this.titulo1.name = "titulo1";
	this.titulo1.lineHeight = 13;
	this.titulo1.lineWidth = 131;
	this.titulo1.parent = this;
	this.titulo1.setTransform(31.0705,550.75,3.2075,3.2075);

	this.portada = new cjs.Text("", "bold 15px 'Arial'");
	this.portada.name = "portada";
	this.portada.lineHeight = 19;
	this.portada.lineWidth = 279;
	this.portada.parent = this;
	this.portada.setTransform(28.6205,31.35,3.2075,3.2075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.portada},{t:this.titulo1},{t:this.titulo2},{t:this.titulo3},{t:this.titulo4},{t:this.titulo5},{t:this.titulo6},{t:this.fm1},{t:this.fm2},{t:this.fm3},{t:this.fm4},{t:this.fm5},{t:this.fm6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(497.2,862.5,432.7,787.4000000000001);
// library properties:
lib.properties = {
	id: 'DE1B60DE6DF2B3448CACC016D7BA3753',
	width: 950,
	height: 1675,
	fps: 30,
	color: "#FFFFFF",
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
an.compositions['DE1B60DE6DF2B3448CACC016D7BA3753'] = {
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