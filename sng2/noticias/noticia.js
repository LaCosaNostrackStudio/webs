(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"noticia_atlas_1", frames: [[460,1781,341,99],[0,1781,458,103],[0,0,991,1779]]}
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



(lib.CachedBmp_11 = function() {
	this.initialize(ss["noticia_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["noticia_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits1 = function() {
	this.initialize(ss["noticia_atlas_1"]);
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
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-67.35,-16.7,0.3423,0.3423);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(-94.75,-17.5,0.3423,0.3423);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo17, new cjs.Rectangle(-94.7,-17.5,156.8,35.3), null);


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
	this.shape.graphics.f("rgba(255,255,255,0.98)").s().p("ABKCrIhJBeIh8l5IGEBqIheBPIBfBnIhYBagACyDdIAsgsIhihtIBSg+IkdhVIBWEbIBBhQgAjaAPQgNgCACgRIAAgCQAVgdAhgQQAFgDABAEQAMACgBASIAAACQgWAcggAQIgEABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBgAkCheQgJgDACgPQAWgSAtAEQAPACAFAKQAFAOgKAJIgCABQgPACgPAAQgWAAgVgGgAi1ifIgCAAQgfgVgPgkIAAgDQAXgWAVAbIAWAcQAHAIgFAIQgCALgNAAIgFAAgAgpihQgNgDACgRIAAgCQAVgdAggQQAFgDABAEQAMACgBARIAAADQgUAcghARIgDABQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAgBgBgAh4i4IgBgBQgEgfACgkIAAgCQAQgUARASIAAACQAJArgOAgIgBAAQgFACgFAAQgIAAgGgHg");
	this.shape.setTransform(26.6068,26.5805);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(0,0,53.2,53.2), null);


(lib.Símbolo12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0A001D").s().p("EgwaAEcIAAo4MBg1AAAIAAI4g");
	this.shape.setTransform(309.85,28.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(0,0,619.7,56.9), null);


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

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(10,0,29,0.008)","#0A001D"],[0,0.749],-276.5,0,276.6,0).s().p("EgrNAC2IAAlrMBWbAAAIAAFrg");
	this.shape.setTransform(400.125,18.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(123.6,0,553.1,36.4), null);


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
	this.shape.graphics.f("#8E0CFF").s().p("Al9AVIAAgpIL7AAIAAApg");
	this.shape.setTransform(38.15,2.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(0,0,76.3,4.3), null);


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
	this.shape.graphics.f("#8E0CFF").s().p("EgwPAAVIAAgpMBgfAAAIAAApg");
	this.shape.setTransform(308.775,2.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(0,0,617.6,4.3), null);


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
	this.shape.graphics.f("#8E0CFF").s().p("ABDh/ICUgLQgzCLgUBxIiZAZgAiJh/ICTgLQgyCLgUBxIiaAZg");
	this.shape.setTransform(21.525,13.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(0,0,43.1,27.7), null);


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
	this.shape.graphics.f("#8E0CFF").s().p("AjDGNQgUgVAAggQAAgPAFgOQAOgwAngYQAogYAkAAQAmABAZAVQAZATAAAfQAAASgHAQQgUAtgkAXQgiAXgwADQglAAgUgWgAiLAyQAPhIAUhWIAiiPIAThSQAggTAsgQQAtgPAogMQAogKAbgFIAngIQgQAcgmBLQgnBNgpBWQgqBXghBOQghBPgIAjIh8AZQAEgfAPhHg");
	this.shape.setTransform(21.575,41.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,43.2,83.8), null);


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
	this.shape.graphics.f("#333333").s().p("EgyTAcTMAAAg4lMBknAAAMAAAA4lg");
	this.shape.setTransform(322,181.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,644,362.2), null);


(lib.Símbolo11 = function(mode,startPosition,loop,reversed) {
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
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa_2
	this.instance = new lib.Símbolo13();
	this.instance.setTransform(717.3,23.15,0.8083,0.8083,0,0,180,26.6,26.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(1,1,1).p("EAvAACaMhblAAAQg/AAguguQgtgtAAg/QAAg/AtgtQAugtA/AAIHNAA");
	this.shape.setTransform(308.125,29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:717.3,y:23.15}}]}).to({state:[{t:this.shape},{t:this.instance,p:{x:-14.25,y:26.6}}]},1).wait(1));

	// Capa_1
	this.instance_1 = new lib.Símbolo12();
	this.instance_1.setTransform(309.9,28.4,1,1,0,0,0,309.9,28.4);
	this.instance_1.alpha = 0.0117;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,0,774.5,56.9);


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

	this.actionFrames = [0,4,9];
	// timeline functions:
	this.frame_0 = function() {
		// Cargar dato desde el almacenamiento local del navegador
		this.mirutax.text = localStorage.getItem('clave');
	}
	this.frame_4 = function() {
		//this.stop();
		////carga de index//////
		var miruta = this.mirutax.text;
			
			/////carga de textos///////
			var cargar1 = new createjs.LoadQueue(true);
			var cargar2 = new createjs.LoadQueue(true);
			var cargar3 = new createjs.LoadQueue(true);
			var cargar4 = new createjs.LoadQueue(true);
		
			cargar1.on('complete', completeF, this);
			cargar2.on('complete', completeF, this);
			cargar3.on('complete', completeF, this);
			cargar4.on('complete', completeF, this);
		
			var ruta1 = "publicaciones/"+miruta+"/titulo.txt";
			var ruta2 = "publicaciones/"+miruta+"/texto1.txt";
			var ruta3 = "publicaciones/"+miruta+"/texto2.txt";
			var ruta4 = "publicaciones/"+miruta+"/link.txt";
		
			cargar1.loadFile(ruta1);
			cargar2.loadFile(ruta2);
			cargar3.loadFile(ruta3);
			cargar4.loadFile(ruta4);
			
		
				function completeF(e) {
			
					this.titulo.text = cargar1.getResult(ruta1);
					this.texto1.text = cargar2.getResult(ruta2);
					this.texto2.text = cargar3.getResult(ruta3);
					this.link.text = cargar4.getResult(ruta4);
			
			}
		
		
		
		
		
		/////carga de imagen///////
		var foto = new createjs.Bitmap("publicaciones/"+miruta+"/imagen1.jpg");
		var foto2 = new createjs.Bitmap("publicaciones/"+miruta+"/imagen2.jpg");
		
		this.foto.foto.addChild(foto);
		this.foto2.foto.addChild(foto2);
	}
	this.frame_9 = function() {
		this.stop();
		
		/////boton del link/////
		
			if (this.link.text !== "") {
			
				this.btlink.play();
						}
					
		//////////////////
					
		var linkText1 = this.link.text;
		
		this.btlink.addEventListener("click", abrirLink1.bind(this));
		
		function abrirLink1() {
			if (this.link.text !== "") {
			
				window.open(linkText1, "_blank");
						}
			
		    
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// Capa_2
	this.instance = new lib.Símbolo17();
	this.instance.setTransform(1003.45,1323.3,1.4606,1.4606,0,0,0,60.1,0);

	this.instance_1 = new lib.Mapadebits1();
	this.instance_1.setTransform(4,7,1,0.7841);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(10));

	// Capa_4
	this.btlink = new lib.Símbolo11();
	this.btlink.name = "btlink";
	this.btlink.setTransform(662.75,927.1,1,1,0,0,0,309.9,28.4);

	this.instance_2 = new lib.Símbolo10();
	this.instance_2.setTransform(1001.15,929.3,0.3766,1,0,0,0,676.7,18.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A001D").s().p("Ay4DlIAAnJMAlxAAAIAAHJg");
	this.shape.setTransform(-280.575,838.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.btlink}]},4).wait(6));

	// Capa_1
	this.link = new cjs.Text("", "italic 25px 'Arial'", "#00CCFF");
	this.link.name = "link";
	this.link.lineHeight = 30;
	this.link.lineWidth = 568;
	this.link.parent = this;
	this.link.setTransform(373.1,918.2583,0.8354,0.8354);

	this.instance_3 = new lib.Símbolo9();
	this.instance_3.setTransform(889.7,147.4,0.9324,1,0,0,0,0.1,0);

	this.instance_4 = new lib.Símbolo8();
	this.instance_4.setTransform(30.65,147.25,1.1881,1);

	this.instance_5 = new lib.Símbolo9();
	this.instance_5.setTransform(193.2,953.4,2.0924,1,0,0,0,76.4,2.1);

	this.instance_6 = new lib.Símbolo8();
	this.instance_6.setTransform(959.8,955.5,1.1721,1,0,0,0,617.6,4.2);

	this.instance_7 = new lib.Símbolo7();
	this.instance_7.setTransform(196.5,946.65,0.9013,1.2037,0,0,0,0,11.6);

	this.texto2 = new cjs.Text("\n", "22px 'Arial'", "#FFFFFF");
	this.texto2.name = "texto2";
	this.texto2.lineHeight = 27;
	this.texto2.lineWidth = 525;
	this.texto2.parent = this;
	this.texto2.setTransform(31.9,978.4868,0.8354,0.8354);

	this.instance_8 = new lib.Símbolo6();
	this.instance_8.setTransform(877.15,133.3,3.9372,3.9372,0,0,0,43.2,0.1);

	this.foto2 = new lib.Símbolo3();
	this.foto2.name = "foto2";
	this.foto2.setTransform(483.5,979,0.7434,0.7442,0,0,0,0.1,0.2);

	this.titulo = new cjs.Text("", "bold 32px 'Arial Black'", "#0CE4FF");
	this.titulo.name = "titulo";
	this.titulo.lineHeight = 47;
	this.titulo.lineWidth = 1110;
	this.titulo.parent = this;
	this.titulo.setTransform(31.9,23.8901,0.8354,0.8354);

	this.texto1 = new cjs.Text("", "22px 'Arial'", "#FFFFFF");
	this.texto1.name = "texto1";
	this.texto1.lineHeight = 27;
	this.texto1.lineWidth = 1114;
	this.texto1.parent = this;
	this.texto1.setTransform(31.9,548.8868,0.8354,0.8354);

	this.mirutax = new cjs.Text("", "32px 'Arial'", "#FFFFFF");
	this.mirutax.name = "mirutax";
	this.mirutax.lineHeight = 38;
	this.mirutax.lineWidth = 164;
	this.mirutax.parent = this;
	this.mirutax.setTransform(1061.95,1334.8);

	this.foto = new lib.Símbolo3();
	this.foto.name = "foto";
	this.foto.setTransform(30.35,165.7,0.9984,0.9995,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.foto},{t:this.mirutax},{t:this.texto1},{t:this.titulo},{t:this.foto2},{t:this.instance_8},{t:this.texto2},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.link}]}).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(98.5,707,1129.6,694.9000000000001);
// library properties:
lib.properties = {
	id: 'E42EECE00DF5554C85AAC680B1F9BF69',
	width: 1000,
	height: 1400,
	fps: 30,
	color: "#0A001D",
	opacity: 1.00,
	manifest: [
		{src:"images/noticia_atlas_1.png?1708575789782", id:"noticia_atlas_1"}
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