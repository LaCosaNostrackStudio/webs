(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"top_b_atlas_1", frames: [[0,1822,557,202],[978,1566,557,305],[0,1566,976,254],[1052,0,456,305],[0,0,1050,520],[0,522,1050,520],[0,1044,1050,520]]}
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



(lib.CachedBmp_19 = function() {
	this.initialize(ss["top_b_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["top_b_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["top_b_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["top_b_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.top1_00000 = function() {
	this.initialize(ss["top_b_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.top2_00000 = function() {
	this.initialize(ss["top_b_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.top3_00183 = function() {
	this.initialize(ss["top_b_atlas_1"]);
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


(lib.Símbolo28 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CF2226").s().p("A/SQ+MAAAgh7MA+lAAAMAAAAh7g");
	this.shape.setTransform(-0.05,0,1.6989,1,0,0,0,-200.3,-108.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo28, new cjs.Rectangle(0,0,680.6,217.3), null);


(lib.Símbolo14 = function(mode,startPosition,loop,reversed) {
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
		this.stop(); // Detiene la animación en el fotograma actual.
		
		setTimeout(() => {
		    this.play(); // Reproduce la animación después de 5 segundos.
		}, 5000); // 5000 milisegundos = 5 segundos
	}
	this.frame_1 = function() {
		this.stop(); // Detiene la animación en el fotograma actual.
		
		setTimeout(() => {
		    this.play(); // Reproduce la animación después de 5 segundos.
		}, 5000); // 5000 milisegundos = 5 segundos
	}
	this.frame_2 = function() {
		this.stop(); // Detiene la animación en el fotograma actual.
		
		setTimeout(() => {
		    this.play(); // Reproduce la animación después de 5 segundos.
		}, 5000); // 5000 milisegundos = 5 segundos
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.top1_00000();
	this.instance.setTransform(5,-4);

	this.instance_1 = new lib.top2_00000();
	this.instance_1.setTransform(4,-6);

	this.instance_2 = new lib.top3_00183();
	this.instance_2.setTransform(3,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,-6,1052,523);


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
	this.shape.graphics.f("#43A270").s().p("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");
	this.shape.setTransform(249.7125,340.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,499.4,681.1), null);


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
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(118.7,67.6,0.2541,0.2541);

	this.instance_1 = new lib.CachedBmp_18();
	this.instance_1.setTransform(191.45,45.3,0.2541,0.2541);

	this.instance_2 = new lib.CachedBmp_17();
	this.instance_2.setTransform(0,0,0.2541,0.2541);

	this.instance_3 = new lib.CachedBmp_16();
	this.instance_3.setTransform(0,45.3,0.2541,0.2541);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,333,122.8), null);


(lib.Símbolo8copia = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CF2226").s().p("AmTCTIAAklIMnAAIAAElg");
	this.shape.setTransform(40.375,14.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8copia, new cjs.Rectangle(0,0,80.8,29.4), null);


(lib.Símbolo7copia = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#882226").s().p("AmTCTIAAklIMnAAIAAElg");
	this.shape.setTransform(40.375,14.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7copia, new cjs.Rectangle(0,0,80.8,29.4), null);


(lib.Símbolo16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var frequency = 10;
		stage.enableMouseOver(frequency);
		
		// Evento para aumentar la escala al pasar el mouse
		this.bt.addEventListener("mouseover", aumentarEscala.bind(this));
		
		// Evento para volver a la escala original al quitar el mouse
		this.bt.addEventListener("mouseout", restaurarEscala.bind(this));
		
		// Función para aumentar la escala
		function aumentarEscala() {
		    createjs.Tween.get(this.bt).to({ scaleX: 1.2, scaleY: 1.2 }, 300, createjs.Ease.quadOut);
		}
		
		// Función para restaurar la escala original
		function restaurarEscala() {
		    createjs.Tween.get(this.bt).to({ scaleX: 1, scaleY: 1 }, 300, createjs.Ease.quadOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.bt = new lib.Símbolo28();
	this.bt.name = "bt";
	this.bt.setTransform(200.3,108.6,1,1,0,0,0,200.3,108.6);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo16, new cjs.Rectangle(0,0,680.6,217.3), null);


(lib.Símbolo12copia = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Símbolo8copia();
	this.instance.setTransform(40.4,14.7,1,1,0,0,0,40.4,14.7);

	this.instance_1 = new lib.Símbolo7copia();
	this.instance_1.setTransform(43.1,17.45,1,1,0,0,0,40.4,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo12copia, new cjs.Rectangle(0,0,83.5,32.1), null);


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

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var frequency = 10;
		stage.enableMouseOver(frequency);
		
		// Evento para aumentar la escala al pasar el mouse
		this.bt.addEventListener("mouseover", aumentarEscala.bind(this));
		
		// Evento para volver a la escala original al quitar el mouse
		this.bt.addEventListener("mouseout", restaurarEscala.bind(this));
		
		// Función para aumentar la escala
		function aumentarEscala() {
		    createjs.Tween.get(this.bt).to({ scaleX: 1.2, scaleY: 1.2 }, 300, createjs.Ease.quadOut);
		}
		
		// Función para restaurar la escala original
		function restaurarEscala() {
		    createjs.Tween.get(this.bt).to({ scaleX: 1, scaleY: 1 }, 300, createjs.Ease.quadOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.bt = new lib.Símbolo12copia();
	this.bt.name = "bt";
	this.bt.setTransform(41.7,16.1,1,1,0,0,0,41.7,16.1);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(0,0,83.5,32.1), null);


(lib.Símbolo4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.about.addEventListener("click", fl_Click5);
		
		function fl_Click5() {
			window.open("about.html", "_top");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.texto = new cjs.Text("", "15px 'Arial'", "#FFFFFF");
	this.texto.name = "texto";
	this.texto.textAlign = "center";
	this.texto.lineHeight = 19;
	this.texto.lineWidth = 107;
	this.texto.parent = this;
	this.texto.setTransform(56.7,5.05);

	this.about = new lib.Símbolo9();
	this.about.name = "about";
	this.about.setTransform(-1.65,1.15,1.4348,0.7852,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.about},{t:this.texto}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4_1, new cjs.Rectangle(-1.8,1.1,119.7,25.2), null);


// stage content:
(lib.topb = function(mode,startPosition,loop,reversed) {
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
		function actualizarIdioma() {
		    // Obtener el idioma guardado en localStorage
		    var idiomaGuardado = localStorage.getItem('cache');
		
		    // Si el idioma guardado es nulo, detectar el idioma del navegador
		    if (!idiomaGuardado) {
		        var idiomaNavegador = navigator.language || navigator.userLanguage;
		        this.idioma.text = idiomaNavegador;
		    } else {
		        this.idioma.text = idiomaGuardado;
		    }
		
		    // Configurar los textos según el idioma seleccionado
		    if (this.idioma.text === "es-ES" || this.idioma.text === "es-US") {
		        // Español
		        this.bio.text = "Somos una empresa de cuarta generación dedicada a la creación y fabricación de productos de alta calidad derivados de la madera. Con una experiencia profunda en el trabajo de madera sólida, plywood y veneer, nos especializamos en la reproducción precisa y detallada de molduras y puertas de propiedades emblemáticas, como las de Branston House.";
		        this.btleermas.texto.text = "Saber más";
		    } else if (this.idioma.text === "fr-FR" || this.idioma.text === "fr-CA") {
		        // Francés
		        this.bio.text = "Nous sommes une entreprise de quatrième génération dédiée à la création et à la fabrication de produits de haute qualité à base de bois. Avec une expertise approfondie dans le travail du bois massif, du contreplaqué et du placage, nous sommes spécialisés dans la reproduction précise et détaillée de moulures et de portes de propriétés emblématiques telles que celles de Branston House.";
		        this.btleermas.texto.text = "En savoir plus";
		    } else {
		        // Inglés (por defecto)
		        this.bio.text = "We are a fourth-generation company dedicated to the creation and manufacture of high-quality wood-based products. With extensive expertise in solid wood, plywood, and veneer work, we specialize in the precise and detailed reproduction of moldings and doors from iconic properties like those at Branston House.";
		        this.btleermas.texto.text = "Read more";
		
		        this.idioma.text = "en-US";
		    }
		}
		
		// Llama a la función de actualización cada 3 segundos
		setInterval(actualizarIdioma.bind(this), 3000);
		
		// Llama a la función inicialmente para establecer el idioma al cargar la página
		actualizarIdioma.call(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.idioma = new cjs.Text("", "16px 'Arial'", "#999999");
	this.idioma.name = "idioma";
	this.idioma.textAlign = "right";
	this.idioma.lineHeight = 23;
	this.idioma.lineWidth = 122;
	this.idioma.parent = this;
	this.idioma.setTransform(1048,-77.35);

	this.btleermas = new lib.Símbolo4_1();
	this.btleermas.name = "btleermas";
	this.btleermas.setTransform(640.05,497.4,1.3062,1.3062,0,0,0,59.2,16.1);

	this.bio = new cjs.Text("", "22px 'Arial'", "#FFFFFF");
	this.bio.name = "bio";
	this.bio.lineHeight = 30;
	this.bio.lineWidth = 657;
	this.bio.parent = this;
	this.bio.setTransform(48.15,269.4);

	this.instance = new lib.Símbolo2();
	this.instance.setTransform(57.4,163.25,0.8148,0.8148,0,0,0,-0.2,0.3);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,14);

	this.instance_1 = new lib.Símbolo4();
	this.instance_1.setTransform(37.35,12.8,0.2291,0.2291,0,0,0,0.2,0.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,14);

	this.instance_2 = new lib.Símbolo16();
	this.instance_2.setTransform(236.5,260.9,1,0.9075,0,0,0,200.3,0.1);
	this.instance_2.alpha = 0.75;

	this.instance_3 = new lib.Símbolo14();
	this.instance_3.setTransform(526.2,-0.15,1,1.0155,0,0,0,530.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.bio},{t:this.btleermas},{t:this.idioma}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(526,180.7,525,343.2);
// library properties:
lib.properties = {
	id: 'CE0F361DA1EB744D8AB563A831DF25F6',
	width: 1050,
	height: 520,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/top_b_atlas_1.png?1736263790890", id:"top_b_atlas_1"}
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
an.compositions['CE0F361DA1EB744D8AB563A831DF25F6'] = {
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