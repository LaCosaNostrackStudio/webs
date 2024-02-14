(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"noticias_atlas_1", frames: [[0,1781,297,66],[0,0,991,1779]]}
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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["noticias_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits1 = function() {
	this.initialize(ss["noticias_atlas_1"]);
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


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("EgmWAIbIAAw1MBMsAAAIAAQ1g");
	this.shape.setTransform(245.45,53.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(0,0,490.9,107.7), null);


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
	this.shape.graphics.f("#000000").s().p("Egm3AJFIAAyJMBNvAAAIAASJg");
	this.shape.setTransform(248.75,58.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(0,0,497.5,116.2), null);


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
	this.shape.graphics.lf(["#185E93","#185E93","#0F4479","#083164","#042356","#011A4E","#00184B"],[0,0,0.137,0.286,0.459,0.663,1],-515.7,-824.4,515.6,824.9).s().p("EhOHCE0MAAAkJnMCcPAAAMAAAEJng");
	this.shape.setTransform(500,850);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,1000,1700), null);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		////condicion si hay noticias
		
		if (this.miindexx.text < "1") {
			
				this.play();
		}
		
		////carga de index//////
		var miindex = this.miindexx.text;
			
			/////carga de textos///////
			var cargar1 = new createjs.LoadQueue(true);
			
			cargar1.on('complete', completeF, this);
			
			var ruta1 = "publicaciones/"+miindex+"/titulo.txt";
			
			cargar1.loadFile(ruta1);
			
		
				function completeF(e) {
			
					this.titulo.text = cargar1.getResult(ruta1);
					
			
			}
			
		/////carga de imagen///////
		var foto = new createjs.Bitmap("publicaciones/"+miindex+"/imagen.jpg");
		
		this.foto.foto.addChild(foto);
		
		
		////////funssion boton ir/////
		this.bt.addEventListener("click", abrirLink2.bind(this));
		
		function abrirLink2() {
			if (this.miindexx.text > "0") {
				
			// Guardar dato en el almacenamiento local del navegador
		localStorage.setItem('clave', this.miindexx.text);
				
				window.open("publicaciones/noticia.html");
				
				
						}
			
		    
		}
	}
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(1));

	// Capa_3
	this.bt = new lib.Símbolo8();
	this.bt.name = "bt";
	this.bt.setTransform(245.5,54.95,1,1,0,0,0,245.5,53.9);
	this.bt.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.bt).to({_off:true},1).wait(27));

	// Capa_1
	this.miindexx = new cjs.Text("", "15px 'Arial'", "#FFFFFF");
	this.miindexx.name = "miindexx";
	this.miindexx.lineHeight = 19;
	this.miindexx.lineWidth = 44;
	this.miindexx.parent = this;
	this.miindexx.setTransform(509.05,39.45);

	this.titulo = new cjs.Text("", "25px 'Arial'", "#0CE4FF");
	this.titulo.name = "titulo";
	this.titulo.lineHeight = 30;
	this.titulo.lineWidth = 338;
	this.titulo.parent = this;
	this.titulo.setTransform(206.9,1.6901,0.8354,0.8354);

	this.foto = new lib.Símbolo3();
	this.foto.name = "foto";
	this.foto.setTransform(0,0,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.foto},{t:this.titulo},{t:this.miindexx}]}).to({state:[]},1).wait(27));

	// Capa_2
	this.instance = new lib.Símbolo7();
	this.instance.setTransform(245.55,55.25,1,1,0,0,0,248.8,58.1);
	this.instance.alpha = 0.5313;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.0898},26).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-2.8,557.9000000000001,116.2);


// stage content:
(lib.noticias = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		////carga de index//////
		//var miruta = this.mirutax.text;
			
			/////carga de textos///////
			var cargar1 = new createjs.LoadQueue(true);
			
			cargar1.on('complete', completeF, this);
			
			var ruta1 = "publicaciones/index.txt";
			
			cargar1.loadFile(ruta1);
			
		
				function completeF(e) {
			
					this.miindexx.text = cargar1.getResult(ruta1);
					this.n1.text = this.miindexx.text;
					this.n2.text = String(Number(this.n1.text) - Number(1));
					this.n3.text = String(Number(this.n2.text) - Number(1));
					this.n4.text = String(Number(this.n3.text) - Number(1));
					this.n5.text = String(Number(this.n4.text) - Number(1));
					
					this.n6.text = String(Number(this.n5.text) - Number(1));
					this.n7.text = String(Number(this.n6.text) - Number(1));
					this.n8.text = String(Number(this.n7.text) - Number(1));
					this.n9.text = String(Number(this.n8.text) - Number(1));
					this.n10.text = String(Number(this.n9.text) - Number(1));
					
				
					this.play();
			
			}
	}
	this.frame_1 = function() {
		this.stop();
		this.noti1.miindexx.text = this.n1.text;
		this.noti2.miindexx.text = this.n2.text;
		this.noti3.miindexx.text = this.n3.text;
		this.noti4.miindexx.text = this.n4.text;
		this.noti5.miindexx.text = this.n5.text;
		
		this.noti6.miindexx.text = this.n6.text;
		this.noti7.miindexx.text = this.n7.text;
		this.noti8.miindexx.text = this.n8.text;
		this.noti9.miindexx.text = this.n9.text;
		this.noti10.miindexx.text = this.n10.text;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4));

	// Capa_4
	this.n1 = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.n1.name = "n1";
	this.n1.lineHeight = 38;
	this.n1.lineWidth = 164;
	this.n1.parent = this;
	this.n1.setTransform(1093.1,52.9);

	this.n10 = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.n10.name = "n10";
	this.n10.lineHeight = 38;
	this.n10.lineWidth = 164;
	this.n10.parent = this;
	this.n10.setTransform(1093.1,1381.2);

	this.n9 = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.n9.name = "n9";
	this.n9.lineHeight = 38;
	this.n9.lineWidth = 164;
	this.n9.parent = this;
	this.n9.setTransform(1093.1,1261.85);

	this.n8 = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.n8.name = "n8";
	this.n8.lineHeight = 38;
	this.n8.lineWidth = 164;
	this.n8.parent = this;
	this.n8.setTransform(1093.1,1132.7);

	this.n7 = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.n7.name = "n7";
	this.n7.lineHeight = 38;
	this.n7.lineWidth = 164;
	this.n7.parent = this;
	this.n7.setTransform(1093.1,1005.55);

	this.n6 = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.n6.name = "n6";
	this.n6.lineHeight = 38;
	this.n6.lineWidth = 164;
	this.n6.parent = this;
	this.n6.setTransform(1093.1,878.4);

	this.n5 = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.n5.name = "n5";
	this.n5.lineHeight = 38;
	this.n5.lineWidth = 164;
	this.n5.parent = this;
	this.n5.setTransform(1093.1,751.25);

	this.n4 = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.n4.name = "n4";
	this.n4.lineHeight = 38;
	this.n4.lineWidth = 164;
	this.n4.parent = this;
	this.n4.setTransform(1093.1,630);

	this.n3 = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.n3.name = "n3";
	this.n3.lineHeight = 38;
	this.n3.lineWidth = 164;
	this.n3.parent = this;
	this.n3.setTransform(1093.1,495.05);

	this.n2 = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.n2.name = "n2";
	this.n2.lineHeight = 38;
	this.n2.lineWidth = 164;
	this.n2.parent = this;
	this.n2.setTransform(1093.1,383.5);

	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(27.9,31.35,0.5,0.5);

	this.miindexx = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.miindexx.name = "miindexx";
	this.miindexx.lineHeight = 38;
	this.miindexx.lineWidth = 164;
	this.miindexx.parent = this;
	this.miindexx.setTransform(178.2,-86.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.miindexx},{t:this.instance},{t:this.n2},{t:this.n3},{t:this.n4},{t:this.n5},{t:this.n6},{t:this.n7},{t:this.n8},{t:this.n9},{t:this.n10},{t:this.n1}]}).to({state:[]},4).wait(1));

	// Capa_1
	this.noti10 = new lib.Símbolo5();
	this.noti10.name = "noti10";
	this.noti10.setTransform(353.8,1526.4,1,1,0,0,0,322,181.1);

	this.noti9 = new lib.Símbolo5();
	this.noti9.name = "noti9";
	this.noti9.setTransform(353.8,1404.4,1,1,0,0,0,322,181.1);

	this.noti8 = new lib.Símbolo5();
	this.noti8.name = "noti8";
	this.noti8.setTransform(353.8,1280.4,1,1,0,0,0,322,181.1);

	this.noti7 = new lib.Símbolo5();
	this.noti7.name = "noti7";
	this.noti7.setTransform(353.8,1156.4,1,1,0,0,0,322,181.1);

	this.noti6 = new lib.Símbolo5();
	this.noti6.name = "noti6";
	this.noti6.setTransform(353.8,1032.4,1,1,0,0,0,322,181.1);

	this.noti5 = new lib.Símbolo5();
	this.noti5.name = "noti5";
	this.noti5.setTransform(353.8,908.4,1,1,0,0,0,322,181.1);

	this.noti4 = new lib.Símbolo5();
	this.noti4.name = "noti4";
	this.noti4.setTransform(353.8,784.4,1,1,0,0,0,322,181.1);

	this.noti3 = new lib.Símbolo5();
	this.noti3.name = "noti3";
	this.noti3.setTransform(353.8,660.4,1,1,0,0,0,322,181.1);

	this.noti1 = new lib.Símbolo5();
	this.noti1.name = "noti1";
	this.noti1.setTransform(32.05,105.45,1.9117,1.9117,0,0,0,0.1,0);

	this.noti2 = new lib.Símbolo5();
	this.noti2.name = "noti2";
	this.noti2.setTransform(353.8,536.4,1,1,0,0,0,322,181.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("AnQEOIAAobIOhAAIAAIbg");
	this.shape.setTransform(-130.45,645);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.noti2},{t:this.noti1},{t:this.noti3},{t:this.noti4},{t:this.noti5},{t:this.noti6},{t:this.noti7},{t:this.noti8},{t:this.noti9},{t:this.noti10}]},1).wait(4));

	// Capa_3
	this.instance_1 = new lib.Mapadebits1();
	this.instance_1.setTransform(0,0,1.0091,0.9556);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

	// Capa_2
	this.instance_2 = new lib.Símbolo6();
	this.instance_2.setTransform(500,850,1,1,0,0,0,500,850);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(323.1,761.8,936.1,938.2);
// library properties:
lib.properties = {
	id: 'E42EECE00DF5554C85AAC680B1F9BF69',
	width: 1000,
	height: 1700,
	fps: 30,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/noticias_atlas_1.png?1707944220143", id:"noticias_atlas_1"}
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