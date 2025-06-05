(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"goto_atlas_P_1", frames: [[0,0,234,248],[0,250,453,117]]}
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



(lib.Mapadebits1 = function() {
	this.initialize(ss["goto_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.initialize(ss["goto_atlas_P_1"]);
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
	this.shape.graphics.f("#00CCFF").s().p("AzmPQQimAAh1h2Qh1h1AAilIAAx/QAAilB1h2QB1h1CmAAMAnNAAAQCmAAB1B1QB1B2AAClIAAR/QAAClh1B1Qh1B2imAAg");
	this.shape.setTransform(165.525,97.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(0,0,331.1,195.2), null);


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
	this.instance = new lib.Mapadebits2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(0,0,453,117), null);


(lib.Símbolo8_1 = function(mode,startPosition,loop,reversed) {
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
		// Duración de la oferta en milisegundos (3 horas = 3 * 60 * 60 * 1000)
		var duracionOferta = (2 * 60 * 60 * 1000) + (47 * 60 * 1000); // 2 horas 47 minutos
		// Duración en 2 minutos
		//var duracionOferta = 1 * 60 * 1000;
		
		// Verificamos si ya hay una hora de inicio guardada
		var horaInicio = localStorage.getItem("inicioOferta");
		
		if (!horaInicio) {
		    // Si es la primera vez que entra, guardamos la hora actual
		    horaInicio = Date.now();
		    localStorage.setItem("inicioOferta", horaInicio);
		} else {
		    // Si ya existe, convertimos a número
		    horaInicio = parseInt(horaInicio);
		}
		
		var horaExpiracion = horaInicio + duracionOferta;
		
		var countdown = setInterval(function () {
		    var ahora = Date.now();
		    var tiempoRestante = horaExpiracion - ahora;
		
		    if (tiempoRestante <= 0) {
		        clearInterval(countdown);
		
		        // Oferta terminada
		        this.horas.text = "00";
		        this.minutos.text = "00";
		        this.segundos.text = "00";
		
		     // Eliminar el dato guardado para que pueda reiniciarse en otra visita si quieres
				localStorage.removeItem("inicioOferta");
		
		    } else {
		        // Calculamos horas, minutos y segundos
		        var totalSegundos = Math.floor(tiempoRestante / 1000);
		        var horas = Math.floor(totalSegundos / 3600);
		        var minutos = Math.floor((totalSegundos % 3600) / 60);
		        var segundos = totalSegundos % 60;
		
		        // Mostrar con ceros a la izquierda
		        this.horas.text = (horas < 10 ? "0" : "") + horas;
		        this.minutos.text = (minutos < 10 ? "0" : "") + minutos;
		        this.segundos.text = (segundos < 10 ? "0" : "") + segundos;
		    }
		
		}.bind(this), 1000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6600FF").s().p("AiJIKIAAkVIETAAIAAEVgAiJj0IAAkVIETAAIAAEVg");
	this.shape.setTransform(556.55,134.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6600FF").s().p("AiJIKIAAkVIETAAIAAEVgAiJj0IAAkVIETAAIAAEVg");
	this.shape_1.setTransform(264.55,134.15);

	this.segundos = new cjs.Text("00", "bold 96px 'Arial'", "#6600FF");
	this.segundos.name = "segundos";
	this.segundos.textAlign = "center";
	this.segundos.lineHeight = 109;
	this.segundos.lineWidth = 108;
	this.segundos.parent = this;
	this.segundos.setTransform(703.9,34.45,2.0956,2.0956);

	this.minutos = new cjs.Text("00", "bold 96px 'Arial'", "#6600FF");
	this.minutos.name = "minutos";
	this.minutos.textAlign = "center";
	this.minutos.lineHeight = 109;
	this.minutos.lineWidth = 108;
	this.minutos.parent = this;
	this.minutos.setTransform(407.5,34.45,2.0956,2.0956);

	this.horas = new cjs.Text("00", "bold 96px 'Arial'", "#6600FF");
	this.horas.name = "horas";
	this.horas.textAlign = "center";
	this.horas.lineHeight = 109;
	this.horas.lineWidth = 108;
	this.horas.parent = this;
	this.horas.setTransform(117.05,34.45,2.0956,2.0956);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.horas},{t:this.minutos},{t:this.segundos},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8_1, new cjs.Rectangle(0,0,821.1,263.4), null);


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

	// Capa_2
	this.instance = new lib.Mapadebits1();
	this.instance.setTransform(14,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(14,16,234,248), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E58064").s().p("AlhOaQCMiLBHiyQBBigAMjNQAKiegUjaQglmKhlmKQAPgCAMAGQAOAHAFAPQCyHBCCGJQDVKAAAD6QAAAmikAaQilAbjnAAQhRAAhCgDg");
	this.shape.setTransform(35.425,92.5515);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,70.9,185.1), null);


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
		
		
		this.bt.addEventListener("click", fl_ClickToHide.bind(this));
		
		function fl_ClickToHide()
		{
		
			var numero = "18496532129"; // Reemplaza con tu número de WhatsApp
		    var mensaje = encodeURIComponent(this.miTexto.text); // Obtiene el texto del campo
		    var enlace = "https://wa.me/" + numero + "?text=" + mensaje;
		
		    window.open(enlace, "_blank");
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.miTexto = new cjs.Text("Me interesa una invitación animada.", "26px 'Arial'", "#FFFFFF");
	this.miTexto.name = "miTexto";
	this.miTexto.lineHeight = 31;
	this.miTexto.lineWidth = 427;
	this.miTexto.parent = this;
	this.miTexto.setTransform(-24.5,211.9);

	this.bt = new lib.Símbolo8();
	this.bt.name = "bt";
	this.bt.setTransform(226.6,77.4,1,1,0,0,0,226.6,77.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt},{t:this.miTexto}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(-26.5,0,479.5,256.4), null);


// stage content:
(lib._goto = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(94,0,147,0.996)").s().p("AgKBuQgFgFAAgGIAAgBQAAgGAFgFQAFgEAFAAIAAAAQAHAAAFAFQAEAFAAAFIAAABQAAAHgGAFQgFADgFAAQgFAAgFgEgAgKA/IgDiwIAAAAIAbAAIgDCwIgVAAg");
	this.shape.setTransform(202.425,177.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(94,0,147,0.996)").s().p("AgpBsIAAAAIAehGIg+iRIAYAAIAHARIAqBkIASgpIAhhMIAXAAIhSDBIgJAWIgYAAg");
	this.shape_1.setTransform(188.725,185.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA4QgXgZAAgeIAAgBQAAgfAXgYQAWgTAZgBIADAAQAYAAAWATQAYAYAAAgQAAAigaAYQgVARgZAAQgaAAgWgTgAgjglQgOARAAAUIAAABQAAAWAQAQQAPAPASAAQAXgBARgVQAKgPAAgRQAAgXgRgRQgPgMgRAAIgCAAQgSAAgQAPg");
	this.shape_2.setTransform(172.125,181.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(94,0,147,0.996)").s().p("AArByIAAAAIAAhdQAAgZgdgHIgMAAIgFAAQgaAAgKARQgDAHAAAJIAABcIgBAAIgUAAIgBAAIAAjjIABAAIAUAAIABAAIAABhQASgRAYAAQAuAAAPAgQAEAJAAAMIAABeIgBAAIgVAAg");
	this.shape_3.setTransform(154.75,177.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(94,0,147,0.996)").s().p("AAABMQgeAAgXgZQgTgXAAgbIAAgBQAAgdAVgXQAWgXAeAAQAfAAASAaIABABIAAgZIAAAAIAVAAIABAAIAACTIgBAAIgVAAIAAAAIAAgYQgRAagiAAgAgtgVQgFALAAAKIAAAAQAAAaAVARQANALAQAAQAhAAANghQADgKAAgKIAAgCQAAgOgIgPQgPgXgYAAQggAAgPAgg");
	this.shape_4.setTransform(128.275,181.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(94,0,147,0.996)").s().p("AARByQgJAAgIgFQgMgGgFgNQgDgIAAgKIAAhTIgYAAIgBAAIAAgWIABAAIAYAAIAAhQIAVAAIAABQIAoAAIAAAWIAAAAIgoAAIAABVQAAAGADAGQAEAEAFACIAFAAIAAAAQAGAAALgEIACgBIAJAUIgJAEQgLADgHAAIgCAAg");
	this.shape_5.setTransform(113.975,177.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(94,0,147,0.996)").s().p("AAKByIgUAAIAAiTIAUAAIABAAIAACTgAAAhSQgHAAgEgGQgEgFAAgEIAAgBQAAgGAGgFQAEgEAFAAIAAAAQAGAAAFAFQAFAFAAAFIAAAAQAAAHgGAFQgFAEgFAAIAAAAg");
	this.shape_6.setTransform(105.25,177.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(94,0,147,0.996)").s().p("AgqA4QgXgZAAgeIAAgBQAAgfAXgYQAWgTAYgBIAEAAQAXABAVAQQAKALADAFIgSAMQgJgPgSgFQgGgCgHAAIgDAAQgRAAgQAPQgOARAAAUIAAABQAAAWARARQAPAOARAAQAXAAAQgVIACgDIATAMQgOAVgZAJQgLADgKAAQgaAAgWgTg");
	this.shape_7.setTransform(93.975,181.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(94,0,147,0.996)").s().p("AAKByIgUAAIAAiTIAUAAIABAAIAACTgAAAhSQgHAAgEgGQgEgFAAgEIAAgBQAAgGAGgFQAEgEAFAAIAAAAQAGAAAFAFQAFAFAAAFIAAAAQAAAHgGAFQgFAEgFAAIAAAAg");
	this.shape_8.setTransform(82.3,177.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(94,0,147,0.996)").s().p("AAKByIgUAAIAAjjIAUAAIABAAIAADjg");
	this.shape_9.setTransform(75.2,177.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA4QgXgZAAgeIAAgBQAAgfAXgYQAWgTAZgBIADAAQAYAAAWATQAYAYAAAgQAAAigaAYQgVARgZAAQgaAAgWgTgAgjglQgOARAAAUIAAABQAAAWAQAQQAPAPASAAQAXgBARgVQAKgPAAgRQAAgXgRgRQgPgMgRAAIgCAAQgSAAgQAPg");
	this.shape_10.setTransform(63.075,181.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(94,0,147,0.996)").s().p("AAAB1QgPAAgQgHIgLgHQgJgHgHgJIgIgOIgDgGIAUgIQADAHAFAHIAHAIQAGAGAFACQAMAHALAAIABAAQAPAAAOgJIAHgGQAGgIACgJQADgHAAgGIAAgBQAAgQgLgMIgJgGIgHgDIgQgEQgZgHgOgGQgegQAAgfIAAgCQAAgTAMgRIAHgJQAFgFAEgCQAHgFAIgDQAMgDAKAAIACAAQAQAAAQAIIALAHIAHAHIAIALIADAGIgTAJQgCgEgHgHQgOgPgTAAIgBAAQgSAAgNALQgFAFgBADQgHAKAAANQAAAOAIAHQAGAFAIAEQAOAHAeAHIANAFQAHADAHAGIAHAHIAEAHQAIAOAAAPIAAABIAAAAIAAABIAAAAQAAARgJAQQgLAUgWAJQgOAEgMAAIgCAAg");
	this.shape_11.setTransform(46.325,177.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(94,0,147,0.996)").s().p("AgNByIADixIAVAAIADCxIgbAAgAgLhYQgEgEAAgFIAAgBQAAgHAGgFQAEgDAFAAQAGAAAFAEQAFAFAAAGIAAABQAAAGgGAFQgEAEgGAAQgGAAgFgGg");
	this.shape_12.setTransform(32.525,177.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(94,0,147,0.996)").s().p("AgKALQgEgFAAgGIAAAAQAAgFAEgFQAFgEAFgBIAAAAQAHABAFAEQAEAFgBAFIAAAAQAAAHgFAFQgFADgFABQgGgBgEgEg");
	this.shape_13.setTransform(253,150);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA3QgXgXAAggIAAAAQAAgfAXgYQAWgTAZAAIADAAQAYAAAWASQAYAYAAAgQAAAhgaAZQgVARgZABQgaAAgWgVgAgjglQgOARAAAUIAAAAQAAAXAQARQAPAOASgBQAXABARgWQAKgQAAgQQAAgXgRgRQgPgNgRAAIgCAAQgSABgQAPg");
	this.shape_14.setTransform(240.425,144.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(94,0,147,0.996)").s().p("AAABzQgeAAgXgZQgTgWAAgcIAAgBQAAgeAWgWQAWgWAdgBQAfABASAZIABABIAAAAIAAhpIAVAAIABAAIAADjIgBABIgVAAIAAgBIAAgYIAAAAQgRAagiAAgAgtARQgFALAAALIAAABQAAAaAVAQQANALAQAAQAhAAANghQAEgKAAgKIAAgDQAAgOgJgPQgPgVgYAAQgggBgPAfg");
	this.shape_15.setTransform(222.175,140.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(94,0,147,0.996)").s().p("AAABMQgeAAgXgZQgTgXAAgbIAAgBQAAgdAVgXQAWgXAeAAQAfAAASAaIABABIAAgZIAAAAIAVAAIABAAIAACTIgBAAIgVAAIAAAAIAAgYQgRAagiAAgAgtgVQgFALAAAKIAAAAQAAAaAVARQANALAQAAQAhAAANghQADgKAAgKIAAgCQAAgOgIgPQgPgXgYAAQggAAgPAgg");
	this.shape_16.setTransform(203.775,144.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(94,0,147,0.996)").s().p("AARByQgJAAgIgFQgMgGgFgNQgDgIAAgKIAAhTIgYAAIgBAAIAAgWIABAAIAYAAIAAhQIAVAAIAABQIAoAAIAAAWIAAAAIgoAAIAABVQAAAGADAGQAEAEAFACIAFAAIAAAAQAGAAALgEIACgBIAJAUIgJAEQgLADgHAAIgCAAg");
	this.shape_17.setTransform(189.475,140.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(94,0,147,0.996)").s().p("AALByIgVAAIAAiTIAVAAIAAAAIAACTgAAAhSQgHAAgFgGQgDgFAAgEIAAgBQAAgGAGgFQAEgEAFAAIABAAQAFAAAFAFQAEAFABAFIAAAAQAAAHgGAFQgFAEgEAAIgBAAg");
	this.shape_18.setTransform(180.75,140.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(94,0,147,0.996)").s().p("ABhBKIAAAAIAAheQAAgSgTgKQgJgDgMAAIgGAAQgdAAgJAUQgCAFAAAJIAABbIgBAAIgUAAIAAAAIAAhcQAAgYgYgHQgFgCgQAAQgUAAgJAIQgMAHAAATIAABbIAAAAIgVAAIgBAAIAAiRIABAAIAVAAIAAAAIAAAPQARgRAZAAIADAAQAjAAAQAVQARgVAiAAIAFAAQAqAAAQAeQAFALAAAMIAABeIgBAAIgVAAg");
	this.shape_19.setTransform(162.925,144.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(94,0,147,0.996)").s().p("AALByIgVAAIAAiTIAVAAIAAAAIAACTgAAAhSQgGAAgGgGQgCgFAAgEIAAgBQAAgGAEgFQAFgEAFAAIABAAQAGAAAFAFQADAFAAAFIAAAAQABAHgGAFQgEAEgFAAIgBAAg");
	this.shape_20.setTransform(145,140.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(94,0,147,0.996)").s().p("AALByIgVAAIAAjjIAVAAIAAAAIAADjg");
	this.shape_21.setTransform(137.9,140.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA3QgXgXAAggIAAAAQAAgfAXgYQAWgTAZAAIADAAQAYAAAWASQAYAYAAAgQAAAhgaAZQgVARgZABQgaAAgWgVgAgjglQgOARAAAUIAAAAQAAAXAQARQAPAOASgBQAXABARgWQAKgQAAgQQAAgXgRgRQgPgNgRAAIgCAAQgSABgQAPg");
	this.shape_22.setTransform(117.825,144.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(94,0,147,0.996)").s().p("AhHBtIgBgBIAAjUIABAAIAVAAIAAAAIAAAXQARgbAhAAIAAABIABgBQAbAAAWAUQALAMAEALQAIAQAAAPIAAAEQAAAdgWAWQgWAWgdAAQgfAAgSgZIgBgBIAABbIAAABIgVAAgAgtg1QgEAKAAALIAAACQAAATAOAQQAOAQAUAAQAfAAAPgcQAGgMAAgMIAAgCQAAgWgRgRQgOgOgTAAQghAAgNAhg");
	this.shape_23.setTransform(100.475,147.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(94,0,147,0.996)").s().p("ABhBKIAAAAIAAheQAAgSgTgKQgJgDgMAAIgGAAQgdAAgJAUQgCAFAAAJIAABbIgBAAIgUAAIAAAAIAAhcQAAgYgYgHQgFgCgQAAQgUAAgJAIQgMAHAAATIAABbIAAAAIgVAAIgBAAIAAiRIABAAIAVAAIAAAAIAAAPQARgRAZAAIADAAQAjAAAQAVQARgVAiAAIAFAAQAqAAAQAeQAFALAAAMIAABeIgBAAIgVAAg");
	this.shape_24.setTransform(76.625,144.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(94,0,147,0.996)").s().p("Ag3AvQgPgVAAgZIAAgBQAAgfAXgXQAVgVAaAAQAhAAAXAdQAPAWAAAVIAAACIgBAHIh2AAQAAAHAHAOQAJARASAHQAIADAGAAQAVAAAQgTQAGgHABgFIABAAIATAJQgDAJgMAOQgVAVgcAAQgfAAgYgdgAgmgfQgFAHgDAJIBdAAQgHgVgPgJQgMgIgNAAQgWAAgQAWg");
	this.shape_25.setTransform(54.025,144.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(94,0,147,0.996)").s().p("AAKByIgUAAIAAiTIAUAAIABAAIAACTgAAAhSQgHAAgEgGQgEgFAAgEIAAgBQAAgGAGgFQAEgEAFAAIAAAAQAGAAAFAFQAFAFAAAFIAAAAQAAAHgGAFQgFAEgFAAIAAAAg");
	this.shape_26.setTransform(42.25,140.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(94,0,147,0.996)").s().p("AARByQgJAAgIgFQgMgGgFgNQgDgIAAgKIAAhTIgYAAIgBAAIAAgWIABAAIAYAAIAAhQIAVAAIAABQIAoAAIAAAWIAAAAIgoAAIAABVQAAAGADAGQAEAEAFACIAFAAIAAAAQAGAAALgEIACgBIAJAUIgJAEQgLADgHAAIgCAAg");
	this.shape_27.setTransform(33.025,140.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(94,0,147,0.996)").s().p("AgsBLIgBgBIAAiQIABgBIAVAAIAAABIAAAMQAHgJAOgEQAJgDAKAAQAQAAANAIIgFAXQgOgIgMAAQgZAAgLAYQgCAGAAAGIAABZIAAABIgVAAg");
	this.shape_28.setTransform(225.225,106.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA4QgXgZAAgeIAAgBQAAgfAXgXQAWgVAZAAIADAAQAYABAWASQAYAYAAAgQAAAigaAYQgVARgZAAQgaAAgWgTgAgjgkQgOAQAAAUIAAABQAAAWAQAQQAPAPASAAQAXgBARgVQAKgQAAgQQAAgXgRgRQgPgMgRAAIgCAAQgSgBgQARg");
	this.shape_29.setTransform(209.625,106.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(94,0,147,0.996)").s().p("AhHBtIgBgBIAAjUIABAAIAVAAIAAAAIAAAXQARgbAhAAIAAABIABgBQAbAAAWAUQALAMAEALQAIAQAAAPIAAAEQAAAdgWAWQgWAWgdAAQgfAAgSgZIgBgBIAABbIAAABIgVAAgAgtg1QgEAKAAALIAAACQAAATAOAQQAOAQAUAAQAfAAAPgcQAGgMAAgMIAAgCQAAgWgRgRQgOgOgTAAQghAAgNAhg");
	this.shape_30.setTransform(192.275,109.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA4QgXgZAAgeIAAgBQAAgfAXgXQAWgVAZAAIADAAQAYABAWASQAYAYAAAgQAAAigaAYQgVARgZAAQgaAAgWgTgAgjgkQgOAQAAAUIAAABQAAAWAQAQQAPAPASAAQAXgBARgVQAKgQAAgQQAAgXgRgRQgPgMgRAAIgCAAQgSgBgQARg");
	this.shape_31.setTransform(166.025,106.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(94,0,147,0.996)").s().p("AARByQgJAAgIgFQgMgGgFgNQgDgIAAgKIAAhTIgYAAIgBAAIAAgWIABAAIAYAAIAAhQIAVAAIAABQIAoAAIAAAWIAAAAIgoAAIAABVQAAAGADAGQAEAEAFACIAFAAIAAAAQAGAAALgEIACgBIAJAUIgJAEQgLADgHAAIgCAAg");
	this.shape_32.setTransform(151.825,102.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(94,0,147,0.996)").s().p("AArBKIAAAAIAAhcQAAgYgYgHQgFgCgPAAQgUAAgKAIQgLAHAAATIAABbIgBAAIgUAAIgBAAIAAiRIABAAIAUAAIABAAIAAAPQARgRAZAAIABAAQAsAAAQAhQAEAKAAAMIAABcIgBAAIgVAAg");
	this.shape_33.setTransform(138,106.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(94,0,147,0.996)").s().p("Ag3AvQgPgVAAgZIAAgBQAAgfAXgXQAVgVAaAAQAhAAAXAdQAPAWAAAVIAAACIgBAHIh2AAQAAAHAHAOQAJARASAHQAIADAGAAQAVAAAQgTQAGgHABgFIABAAIATAJQgDAJgMAOQgVAVgcAAQgfAAgYgdgAgmgfQgFAHgDAJIBdAAQgHgVgPgJQgMgIgNAAQgWAAgQAWg");
	this.shape_34.setTransform(120.775,106.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(94,0,147,0.996)").s().p("AgrA+QgVgQAAgZIAAheIABAAIAUAAIABAAIAABdQAAAYAbAHQAFABALAAQAQAAAIgEQAMgGAEgKQACgHAAgHIAAhbIABAAIAVAAIAAAAIAACRIAAAAIgVAAIgBAAIAAgPQgRARgaAAQgbAAgQgMg");
	this.shape_35.setTransform(103.8,106.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(94,0,147,0.996)").s().p("AgqA4QgXgZAAgeIAAgBQAAgfAXgXQAWgVAYAAIAEAAQAXAAAVARQAKALADAFIgSAMQgJgPgSgGQgGgBgHAAIgDAAQgRgBgQARQgOAQAAAUIAAABQAAAWARARQAPAOARAAQAXAAAQgVIACgDIATAMQgOAVgZAJQgLADgKAAQgaAAgWgTg");
	this.shape_36.setTransform(87.375,106.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(94,0,147,0.996)").s().p("AAABMQgRAAgQgIQgPgJgJgPIAJgFIAKgFQAIAMANAFQAJADAJAAQANAAALgGIAGgEQAFgGAAgHQAAgKgNgHIgJgCQgYgFgOgFQgdgKAAgXIAAgBQAAgOALgMIAHgGQAHgFAJgDQAKgDAKAAIACAAQAQAAAOAIQAFACAFAFIAIAHIACAEIgTALQgDgEgFgEQgKgHgPAAQgPAAgKAIQgHAGAAAIQAAAGAEACIAFADQAHAEAQAEIATAEIANAEIAKAFIAGAFQAJALAAANIAAABQAAAOgKANIgHAGIgJAFQgPAHgQAAIgBAAg");
	this.shape_37.setTransform(72.225,106.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(94,0,147,0.996)").s().p("Ag3AvQgPgVAAgZIAAgBQAAgfAXgXQAVgVAaAAQAhAAAXAdQAPAWAAAVIAAACIgBAHIh2AAQAAAHAHAOQAJARASAHQAIADAGAAQAVAAAQgTQAGgHABgFIABAAIATAJQgDAJgMAOQgVAVgcAAQgfAAgYgdgAgmgfQgFAHgDAJIBdAAQgHgVgPgJQgMgIgNAAQgWAAgQAWg");
	this.shape_38.setTransform(56.875,106.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(94,0,147,0.996)").s().p("AhSByIAAAAIAAjjIAAAAIA3AAQAnAAAgAbQAOANADAGQAWAfAAAkQAAAtgfAiQghAjgxAAIg0AAgAg8BcIAeAAQAwAAAcgpQAPgZAAgaQAAgngegeQgKgIgIgEQgTgLgVAAIghAAIAAC4g");
	this.shape_39.setTransform(38.975,102.375);

	this.instance = new lib.Símbolo8_1();
	this.instance.setTransform(123.65,224.8,0.2142,0.2142,0,0,0,410.4,131.7);

	this.instance_1 = new lib.Símbolo6();
	this.instance_1.setTransform(325.05,190,0.6266,0.6266,0,0,0,128.3,128.3);

	this.instance_2 = new lib.Símbolo7();
	this.instance_2.setTransform(715.35,223.8,1,1,0,0,0,226.6,77.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa_2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6BC5FF").s().p("AABAIQgggNgjAFQABgWgQgTQAqgLArAJQAtAKAhAbQgWATgDAjQgWgbgigNg");
	this.shape_40.setTransform(244.9783,8.6769,0.6628,0.6628);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6BC5FF").s().p("AgFBvQgXgBgWAGQAagsAAg1QABg1gZgtQAhgLAPgfQAmA0AKBBQAKBBgTA9QgVgJgXgCg");
	this.shape_41.setTransform(515.3673,132.4111,0.6628,0.6628);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F0BF6C").s().p("Ah3BMQgIgTASgcIAkgqIAfgkQASgWAJgSQALgXAAgYQAAgagPgSQAWAUApAUQAjAQAkALQAMAZgHAfQgHAcgUAZQgNAQgcAYQghAdgKALQgWAYgLAZQgMAdAFAbQg/gxgZg4g");
	this.shape_42.setTransform(456.3723,230.5381,0.6628,0.6628);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6BC5FF").s().p("AgRAQQgtgpg5gOQAIgQgBgUQABgVgGgRQBIAIBAAqQBAAqAlA/QgXAKgVATQgSATgNAYQgRg4gtgqg");
	this.shape_43.setTransform(412.1491,234.9558,0.6628,0.6628);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6BC5FF").s().p("AgJANQg0gig9gEQAFgSgDgUQgDgUgKgRQBMgEBHAgQBHAfAxA6QgWAOgRAXQgRAWgIAaQgbg2g0gjg");
	this.shape_44.setTransform(457.1618,44.5157,0.6628,0.6628);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6BC5FF").s().p("AhjA7QgRgKgSgDQApg5BCgiQBAgjBIgBQgFAyAfAuQg4gMg5ASQg3ATgmAqQgLgOgRgJg");
	this.shape_45.setTransform(101.7448,112.8062,0.6628,0.6628);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6BC5FF").s().p("AgUAMQgRgagZggQAQgJAQgVQATASAXAcQAhAmASAQQgcAbgKAaIgthBg");
	this.shape_46.setTransform(377.0766,141.9865,0.6628,0.6628);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#87D38C").s().p("AhUgiQAJgGAJgLIAQgUQA6AwBNARQgSAZgTA1QhHgtg9g9g");
	this.shape_47.setTransform(448.5773,174.3151,0.6628,0.6628);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#87D38C").s().p("AhtA1IgMghQBmgfBOhLQAPAnAwA+QhvAzhyAVQgBgNgFgVg");
	this.shape_48.setTransform(14.552,134.7121,0.6628,0.6628);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#87D38C").s().p("AgZAwQhAgvghhHQARgDASgLIAhgVQAbAwAzAXQAyAWAxgKQgJAZgDAlQgBAiAGAgQhOgLg/gvg");
	this.shape_49.setTransform(124.4792,130.3044,0.6628,0.6628);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#87D38C").s().p("Ah3AzQAFgNAAgVIABgjQBsAEBjgvQABAtAZBJQgwAFgwAAQhHAAhIgLg");
	this.shape_50.setTransform(359.6446,7.9594,0.6628,0.6628);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#87D38C").s().p("AhzghQALgJALgRIARgdQBVA3BrAMQgVAlgQBJQhogxhahJg");
	this.shape_51.setTransform(124.5123,9.4905,0.6628,0.6628);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#87D38C").s().p("Ag6AYQgphFAJhNQAOAFAVAAIAjgBQAAAZAKAYQAJAXAPASQAQARAVALQAVAJAUABQgSAagJAbQgLAcgCAgQhFgdgphGg");
	this.shape_52.setTransform(462.6795,121.0748,0.6628,0.6628);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#87D38C").s().p("AhJA1QAshMA/hBQAGAJAMAKIAWAQQgxA8gRBSQgXgRg6gTg");
	this.shape_53.setTransform(347.7803,57.1301,0.6628,0.6628);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#87D38C").s().p("AhbgxQAKgFAMgMIAUgUQA5A9BUAdQgZAcgaA3QhKg9g6hLg");
	this.shape_54.setTransform(120.0881,62.416,0.6628,0.6628);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#87D38C").s().p("AgygdQAGgCAHgGIAMgLQAdAjAvARQgPAPgPAeQgogjgfgrg");
	this.shape_55.setTransform(168.9538,109.9395,0.6628,0.6628);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#87D38C").s().p("AgFAvQg+gNgugpQAKgHALgOIARgYQAjAZAqAAQArAAAegYQAEAYAKAZQAJAWAQAWQgiALgjAAQgZAAgZgGg");
	this.shape_56.setTransform(227.1487,119.4408,0.6628,0.6628);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F0BF6C").s().p("AgnBUQgWgNgWgLQgFgRAIgTQAHgRAPgNQAKgKAUgNIAfgWQAmgdgCgjQAjAmAMAmQADANgOAQIgbAYIgYAUQgNAMgIALQgIAOgCAPQgDARAIANQgNgPgYgRg");
	this.shape_57.setTransform(457.0428,91.0163,0.6628,0.6628);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F0BF6C").s().p("AAEBYQgTgLgNgTQgLgRgHgXIgKgoQgHgZgHgPQgJgVgOgMQAugBAoAKQALADAFARIAJAeQALAhAOAMQALAKAOACQAPABALgIQgPAOgOAXQgPAXgHAUQgGACgHAAQgMAAgOgIg");
	this.shape_58.setTransform(14.8999,62.975,0.6628,0.6628);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F0BF6C").s().p("AAjBGQgRgEgPgMQgJgIgOgQIgXgZQgfgdgfAGQAegkAggPQALgFAQALIAZAVIAUASQANAKALAFQANAHAOAAQAPgBALgIQgXAZgQA1QgJAFgKAAQgGAAgHgCg");
	this.shape_59.setTransform(353.1822,80.0036,0.6628,0.6628);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F0BF6C").s().p("AAgBvQgXgKgTgUQgNgOgRgcQgVgggIgKQgpg0gvADQA0gxA0gPQARgFAWAUQAGAFAbAgIAcAgQAQATAOAKQAUAMAVACQAWAEARgLQgTARgXAjQgSAcgPAeQgKAEgKAAQgOAAgQgHg");
	this.shape_60.setTransform(60.2049,29.3872,0.6628,0.6628);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F0BF6C").s().p("AAwBMQgSgFgegNQgigQgNgEQgbgJgZAAQgcABgUAOQARhEAjgpQAMgOAeAFQAIABAnAMIAoAMQAYAGASABQAWAAAUgJQAUgKAKgSQgIAaAAAoQgBAhAFAhQgPATgcAGQgLACgLAAQgPAAgQgEg");
	this.shape_61.setTransform(311.5411,8.2008,0.6628,0.6628);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F0BF6C").s().p("AAQBBQgNgGgKgMQgIgJgJgQIgQgZQgYgegbAAQAfgbAfgIQAKgDANAMIASAWIAPAUQAJALAJAGQALAHAMACQANACAKgGQgLAKgOATQgMARgJARIgKACQgJAAgKgFg");
	this.shape_62.setTransform(164.6456,23.1452,0.6628,0.6628);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F0BF6C").s().p("AhyAVQAAgQAXgMIAngSIAjgPQATgKAMgJQAQgNAIgRQAJgSgFgSQARApA4A0QABAVgQATQgPARgWALQgQAIgbAHIgrAOQg3AUgKApQgcg6ACgvg");
	this.shape_63.setTransform(163.5333,124.8197,0.6628,0.6628);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F0BF6C").s().p("AApBHQgRgDgQgLQgKgIgQgPQgSgTgIgGQgigdggAJQAcgoAhgSQALgGASALIAaAUIAYARQANAKAMAFQAOAGAPgBQAQgBALgKQgMAPgKAZQgJAWgEAWQgLAGgNAAIgLgBg");
	this.shape_64.setTransform(315.17,142.8594,0.6628,0.6628);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E0526B").s().p("Ah3ASQBXghBphHQAGANARAcIAYAoIjaBcIgVhFg");
	this.shape_65.setTransform(396.2318,119.672,0.6628,0.6628);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E0526B").s().p("AiBgEIAghGQBdAiCGATIgKAvQgGAjgEAOg");
	this.shape_66.setTransform(517.6765,42.1443,0.6628,0.6628);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E0526B").s().p("AhXBKQgWgMgNgKQAjg/BAgoQBFgrBNAAIgCA3QgCAigEASQgwgMgyAZQgxAZgTAsIgkgVg");
	this.shape_67.setTransform(445.429,142.699,0.6628,0.6628);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E0526B").s().p("AiPhCIAggfIAhgfQBUBQCLBPQgLAOgWAjQgWAjgLAOg");
	this.shape_68.setTransform(28.9681,116.8991,0.6628,0.6628);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E0526B").s().p("AhSgGIAWgsQA7AZBUAPIgIAeQgEAWgDAJg");
	this.shape_69.setTransform(182.2763,4.6188,0.6628,0.6628);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E0526B").s().p("AiCAlQBYgwBshiQAIANAZAcQAXAcAJANIjiCJQgZgxgKgYg");
	this.shape_70.setTransform(307.1666,33.0369,0.6628,0.6628);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E0526B").s().p("Ah1gpQAQgQAgglQBJA4ByAzIgWAqQgOAcgIAMg");
	this.shape_71.setTransform(301.9138,114.6289,0.6628,0.6628);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E0526B").s().p("AgEA0QhIgLg4grQAKgKAPgQIAYgaQAnAfAwACQAwABAngYQAFAOAPAbIAWAoQguASgyAAQgVAAgUgDg");
	this.shape_72.setTransform(126.1362,98.979,0.6628,0.6628);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#94C7D3").s().p("AgFA+QgjgDgfgSQgYgOgNgcQgPgiAbgQQAKgGAQACIAaAFIAlAHQAVADAQgFQAKgDAVgKQATgGAMAFQAPAGAGAUQAFATgHARQgMAeglARQgcAMgfAAIgIAAg");
	this.shape_73.setTransform(320.8408,1008.1538);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#468097").s().p("Ai4D2IgBg1QgFh+AUhbQAVhhA2hJQA5hQBLgVQA8gQA7AaQAUAkALAqQgagHgZAAQg4AAg1AmQgyAkgjA7Qg8BkgHCWQgDA3AFBFQgcAIgZABQgHgUgBgkg");
	this.shape_74.setTransform(341.3168,975.3452);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6CA8BF").s().p("AjREyQgPgHgHgXQA/gGBGglQB3hAA/huQAkg9AOhIQAOhLgNhGQgKgxgZgsQAZAMAUAQQAiAcAXAtQAWArAGAyQALBdguBdQgqBXhIA2Qg+AvhWAcQgtAQgaAGQgYAGgSAAQgRAAgMgGg");
	this.shape_75.setTransform(346.8571,978);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#468097").s().p("AB9ElQAEhJgCgzQgHiVg9hlQgkg7gxgkQg2gmg4AAQgZAAgZAHQALgsATgiQA7gaA8AQQBLAVA6BQQA1BJAWBhQAUBcgFB9IAAA1QgCAkgGAUQgZgBgcgIg");
	this.shape_76.setTransform(300.924,975.3452);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6CA8BF").s().p("ACLEyIhHgWQhWgcg9gvQhJg2grhXQgthdALhdQAFgyAXgrQAWgtAigcQAUgQAYgMQgYArgKAyQgNBGAPBLQAOBIAkA9QA/BuB3BAQBHAlA/AGQgIAXgPAHQgLAGgSAAQgSAAgYgGg");
	this.shape_77.setTransform(295.4429,978);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6CA8BF").s().p("AmGhDICMgnIKBCvIiMAmg");
	this.shape_78.setTransform(323.3,1010.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#468097").s().p("Ag3lrICLglIgrMEIh8Adg");
	this.shape_79.setTransform(354,1057.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#468097").s().p("AmGBFIKBivICMAnIqBCug");
	this.shape_80.setTransform(321.125,1010.55);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6CA8BF").s().p("AgpF0IgqsEICLAlIAcL8g");
	this.shape_81.setTransform(290.4,1057.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E58064").s().p("AkpAxIJTiZIgFA6IpOCXg");
	this.shape_82.setTransform(351.975,1042.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#ECA85E").s().p("AkkguIgEg6IJSCZIAAA4g");
	this.shape_83.setTransform(292.45,1042.025);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#ECA85E").s().p("AlAgIIKBiqIgRDEIpwChg");
	this.shape_84.setTransform(354.3,1029.025);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F4D071").s().p("AkuASIgSjEIKBCqIAAC7g");
	this.shape_85.setTransform(290.1,1029.025);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F5D896").s().p("AqBAEIKBiyIKCCyIqCCrg");
	this.shape_86.setTransform(322.2,1010.675);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ECA85E").s().p("AkrjsIJYidIg3KRIohCCg");
	this.shape_87.setTransform(352.25,1063.925);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F4D071").s().p("Aj1EIIg3qRIJZCdIAAJ2g");
	this.shape_88.setTransform(292.15,1063.925);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#93E3EF").s().p("ApRhJIBfgOIREAAIoXCvg");
	this.shape_89.setTransform(317.425,1099.125);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6CA8BF").s().p("AglgPQArgEAigYIgEA8QgiAXgpAEg");
	this.shape_90.setTransform(986.0989,64.0156,0.7026,0.7026);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6CA8BF").s().p("AgngOQAtgDAlgbIgFA8QgkAZgrAEg");
	this.shape_91.setTransform(986.5731,55.4793,0.7026,0.7026);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6CA8BF").s().p("AgjgQQAogEAhgWIgEA7QghAXgmADg");
	this.shape_92.setTransform(985.6422,72.5343,0.7026,0.7026);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6CA8BF").s().p("AgdgSQAhgEAcgSIgEA8QgcARgfAEg");
	this.shape_93.setTransform(984.2722,98.1081,0.7026,0.7026);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6CA8BF").s().p("AghgRQAmgEAfgUIgEA7QggAVgjADg");
	this.shape_94.setTransform(985.1855,81.0706,0.7026,0.7026);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6CA8BF").s().p("AgfgRQAjgFAegTIgEA8QgdASgiAFg");
	this.shape_95.setTransform(984.7288,89.5893,0.7026,0.7026);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6CA8BF").s().p("AAAAHQgogCAAgGQAAgDAMgBQANgBAQAAQApADgBAFQAAAFgYAAIgRAAg");
	this.shape_96.setTransform(986.851,49.4197,0.7026,0.7026);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#94C7D3").s().p("AgbGIQgdgCABgEIAdsKIBSAFIg3MIQAAAEgOAAIgOgBg");
	this.shape_97.setTransform(985.8302,76.8483,0.7026,0.7026);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F4D071").s().p("AAAAqQgIgBgGgGQgFgGAAgIQACgVALgXIAJgSIAJAUQAJAXgCAVQAAAIgGAGQgFAFgIAAIAAAAg");
	this.shape_98.setTransform(987.085,43.7369,0.7026,0.7026);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#ECA85E").s().p("AgBBPQgPgBgKgLQgKgMAAgPQACgoAVgrIAUgjIAQAlQAQAsgCApQgBAPgLAKQgLAKgNAAIgCAAg");
	this.shape_99.setTransform(987.0682,42.6495,0.7026,0.7026);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F4D071").s().p("AgngQQAsgEAmgaIgFBAQglAZgrAEg");
	this.shape_100.setTransform(974.1551,66.2638,0.7026,0.7026);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F4D071").s().p("AgpgPQAvgEAngcIgFBAQgmAbguAEg");
	this.shape_101.setTransform(974.6469,57.2357,0.7026,0.7026);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F4D071").s().p("AglgRQApgEAlgYIgFA/QgjAYgoAEg");
	this.shape_102.setTransform(973.6808,75.3095,0.7026,0.7026);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F4D071").s().p("AgegTQAhgFAfgTIgFBAQgdARghAGg");
	this.shape_103.setTransform(972.2054,102.3587,0.7026,0.7026);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F4D071").s().p("AgjgSQAngDAigXIgEA/QghAWgmAEg");
	this.shape_104.setTransform(973.1715,84.32,0.7026,0.7026);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F4D071").s().p("AghgTQAlgEAggUIgEA/QggAUgjAEg");
	this.shape_105.setTransform(972.6797,93.3481,0.7026,0.7026);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D68C43").s().p("AAAAHQgRgBgNgDQgNgDABgCQAAgDANgBQAMgBASABQARABANACQANADAAACQgBAGgYAAIgTgBg");
	this.shape_106.setTransform(974.9579,50.8373,0.7026,0.7026);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#ECA85E").s().p("AgcGfQgegCAAgFIAfs3IBWAFIg6M1QAAAFgPAAIgOgBg");
	this.shape_107.setTransform(973.852,79.8506,0.7026,0.7026);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F4D071").s().p("AAAAsQgJAAgFgHQgGgGAAgJQACgWALgYIALgUIAJAVQAJAZgBAXQgBAIgGAGQgGAGgIAAIAAgBg");
	this.shape_108.setTransform(975.1931,44.826,0.7026,0.7026);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#ECA85E").s().p("AgBBUQgQgBgLgMQgKgMAAgQQADgrAWguIAUglIASAoQAQAvgCArQgBAQgMALQgLAKgOAAIgCAAg");
	this.shape_109.setTransform(975.1626,43.6857,0.7026,0.7026);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#87D38C").s().p("AgogQQAsgEAmgaIgEA/QglAagqAEg");
	this.shape_110.setTransform(961.1223,61.5039,0.7026,0.7026);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#87D38C").s().p("AgqgOQAwgFAmgdIgEBAQgmAdgtAEg");
	this.shape_111.setTransform(961.4385,52.4406,0.7026,0.7026);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#87D38C").s().p("AgmgQQArgFAjgZIgEBAQgjAYgoAFg");
	this.shape_112.setTransform(960.7886,70.5144,0.7026,0.7026);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#87D38C").s().p("AgfgTQAigFAegTIgDBAQgdASghAFg");
	this.shape_113.setTransform(959.8225,97.5987,0.7026,0.7026);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#87D38C").s().p("AgkgRQAogFAigXIgEBAQghAVgmAGg");
	this.shape_114.setTransform(960.4724,79.5601,0.7026,0.7026);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#87D38C").s().p("AghgSQAkgFAggVIgDA/QggAVgiAFg");
	this.shape_115.setTransform(960.1387,88.5882,0.7026,0.7026);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#87D38C").s().p("AAAAHQgRAAgNgDQgNgDAAgCQAAgCANgCQANgCARABQAsACAAAGQgBAFghAAIgKAAg");
	this.shape_116.setTransform(961.6266,46.0377,0.7026,0.7026);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CFE88B").s().p("AgVGfIgVgCQgJgCAAgCIAQs3IBXADIgrM2QAAAEgUAAIgKAAg");
	this.shape_117.setTransform(961.0645,75.0951,0.7026,0.7026);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F4D071").s().p("AAAAsQgIAAgGgGQgGgGAAgJQABgXAMgYIAKgUIAJAVQAKAZgBAXQgBAIgGAGQgGAGgIAAIAAgBg");
	this.shape_118.setTransform(961.7705,40.013,0.7026,0.7026);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#ECA85E").s().p("AAABUQgQgBgLgLQgLgMAAgQQACgsAVgtIAUgmIASAnQARAvgBArQgBAQgMALQgLALgOAAIgBAAg");
	this.shape_119.setTransform(961.7705,38.8727,0.7026,0.7026);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6CA8BF").s().p("AgngMQAsgJAjgcIAABAQgjAcgqAHg");
	this.shape_120.setTransform(948.3354,68.5999,0.7026,0.7026);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6CA8BF").s().p("AgpgMQAtgHAmgfIAABAQgjAeguAHg");
	this.shape_121.setTransform(948.1422,59.5718,0.7026,0.7026);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6CA8BF").s().p("AgmgOQAqgHAigbIABBAQgjAagnAHg");
	this.shape_122.setTransform(948.5286,77.6456,0.7026,0.7026);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6CA8BF").s().p("AgfgRQAjgHAcgVIAABAQgdATgfAIg");
	this.shape_123.setTransform(949.1258,104.7474,0.7026,0.7026);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6CA8BF").s().p("AgjgPQAngIAggYIAAA/QgfAZgmAHg");
	this.shape_124.setTransform(948.7218,86.6912,0.7026,0.7026);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6CA8BF").s().p("AghgQQAkgIAfgWIAAA/QgdAWgkAIg");
	this.shape_125.setTransform(948.9326,95.7193,0.7026,0.7026);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6CA8BF").s().p("AgdAGQgOgCAAgDQAAgCANgCQAMgCASgBQArgBAAAHQAAACgMADQgNACgSAAIgGAAQgNAAgKgBg");
	this.shape_126.setTransform(948.0136,53.1495,0.7026,0.7026);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#94C7D3").s().p("AgEGeQgJgBAAgCIggs3IBWgCIAFM3QAAAFgeABIgGAAIgOgBg");
	this.shape_127.setTransform(948.1893,82.2427,0.7026,0.7026);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F4D071").s().p("AgOAnQgGgGAAgIQAAgXAJgZIAKgVIAKAVQALAYAAAXQABAIgGAGQgGAGgJABQgHAAgHgGg");
	this.shape_128.setTransform(947.9087,47.1255,0.7026,0.7026);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#ECA85E").s().p("AgaBJQgLgLgBgQQgBgsATguIASgnIATAmQAVAuABArQAAAQgLAMQgLALgQABIgBAAQgPAAgLgLg");
	this.shape_129.setTransform(947.9248,45.9846,0.7026,0.7026);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E47790").s().p("AgjARIgEg8QAjAYAqAEIADA7QgqgEgigXg");
	this.shape_130.setTransform(887.0533,64.0156,0.7026,0.7026);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#E47790").s().p("AglAQIgFg8QAmAbAsADIADA7QgsgEgkgZg");
	this.shape_131.setTransform(886.5966,55.4793,0.7026,0.7026);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E47790").s().p("AghARIgEg7QAhAWAoAEIACA7QgmgDghgXg");
	this.shape_132.setTransform(887.5275,72.5343,0.7026,0.7026);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E47790").s().p("AgbAUIgEg8QAdASAgAEIACA7QgggEgbgRg");
	this.shape_133.setTransform(888.8975,98.1081,0.7026,0.7026);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E47790").s().p("AgfASIgEg7QAgAUAlAEIACA7QgjgDgggVg");
	this.shape_134.setTransform(887.9842,81.0706,0.7026,0.7026);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E47790").s().p("AgdATIgEg8QAeATAjAFIACA7QgigFgdgSg");
	this.shape_135.setTransform(888.4409,89.5893,0.7026,0.7026);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E5A265").s().p("AgoACQgBgFApgDQARAAAMABQAMABAAADQABACgMACQgMADgRABIgRAAQgYAAAAgFg");
	this.shape_136.setTransform(886.3247,49.4197,0.7026,0.7026);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F1C59A").s().p("AAAGFIg3sIIBRgFIAeMKQAAAEgcACIgOABQgOAAAAgEg");
	this.shape_137.setTransform(887.3612,76.8483,0.7026,0.7026);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F4D071").s().p("AgMAlQgGgGAAgIQgBgVAIgXIAJgUIAKASQALAXABAVQAAAIgFAGQgGAGgIABIgBAAQgHAAgFgFg");
	this.shape_138.setTransform(886.1118,43.7369,0.7026,0.7026);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#ECA85E").s().p("AgYBFQgLgKgBgPQgCgpAQgsIAQglIAUAjQAVArACAoQABAPgLAMQgKALgPABIgCAAQgNAAgLgKg");
	this.shape_139.setTransform(886.1266,42.6495,0.7026,0.7026);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6CA8BF").s().p("AglASIgFhAQAmAaAsAEIADA/QgrgEglgZg");
	this.shape_140.setTransform(899.0146,66.2638,0.7026,0.7026);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#6CA8BF").s().p("AgnARIgFhAQAnAcAvAEIADA/QgugEgmgbg");
	this.shape_141.setTransform(898.5228,57.2357,0.7026,0.7026);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#6CA8BF").s().p("AgjASIgEg/QAkAYApAEIADA/QgpgEgjgYg");
	this.shape_142.setTransform(899.4889,75.3095,0.7026,0.7026);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#6CA8BF").s().p("AgdAVIgEhAQAfATAiAFIACA/QgigGgdgRg");
	this.shape_143.setTransform(900.9643,102.3587,0.7026,0.7026);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#6CA8BF").s().p("AghATIgEg/QAjAXAmADIACA/QgmgEghgWg");
	this.shape_144.setTransform(899.9807,84.32,0.7026,0.7026);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#6CA8BF").s().p("AgfAUIgEg/QAhAUAkAEIACA/QgkgEgfgUg");
	this.shape_145.setTransform(900.4725,93.3481,0.7026,0.7026);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#6CA8BF").s().p("AgrACQAAgCANgDQANgCARgBQASgBAMABQANABAAADQABACgNADQgNADgSABIgUABQgXAAAAgGg");
	this.shape_146.setTransform(898.2346,50.8443,0.7026,0.7026);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#94C7D3").s().p("AAAGbIg6s1IBWgFIAfM3QABAFgfACIgOABQgPAAAAgFg");
	this.shape_147.setTransform(899.3241,79.8506,0.7026,0.7026);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F4D071").s().p("AgNAnQgGgGgBgIQgBgXAJgZIAJgVIALAUQAMAYABAWQAAAJgGAGQgFAHgJAAIgBABQgHAAgGgGg");
	this.shape_148.setTransform(898.0035,44.826,0.7026,0.7026);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#ECA85E").s().p("AgZBKQgMgLgBgQQgCgrARgvIARgoIAVAlQAWAuACArQABAQgLAMQgLAMgQABIgCAAQgOAAgLgKg");
	this.shape_149.setTransform(898.0185,43.6857,0.7026,0.7026);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F4D071").s().p("AglARIgEg/QAmAaAsAEIABA/QgqgEglgag");
	this.shape_150.setTransform(912.0474,61.5039,0.7026,0.7026);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F4D071").s().p("AgoAQIgDhAQAmAdAwAFIABA/QgtgEgngdg");
	this.shape_151.setTransform(911.7312,52.4406,0.7026,0.7026);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F4D071").s().p("AgjASIgDhAQAhAZArAFIABA/QgogFgigYg");
	this.shape_152.setTransform(912.3811,70.5144,0.7026,0.7026);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F4D071").s().p("AgdAVIgDhAQAfATAhAFIABA/QghgFgdgSg");
	this.shape_153.setTransform(913.3472,97.5987,0.7026,0.7026);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F4D071").s().p("AghATIgDhAQAgAXAoAFIABA/QglgGghgVg");
	this.shape_154.setTransform(912.6973,79.5601,0.7026,0.7026);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F4D071").s().p("AgfATIgDg/QAfAUAlAGIABA/QgjgFgfgVg");
	this.shape_155.setTransform(913.031,88.5882,0.7026,0.7026);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D68C43").s().p("AgrACQAAgCANgDQANgCARgBQASgBANACQANACAAACQAAACgNADQgNADgSAAIgJAAQghAAgBgFg");
	this.shape_156.setTransform(911.5659,46.0377,0.7026,0.7026);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#ECA85E").s().p("AgIGbIgrs2IBXgDIAQM3QAAACgJACIgVACIgKAAQgUAAAAgEg");
	this.shape_157.setTransform(912.128,75.0951,0.7026,0.7026);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F4D071").s().p("AgNAnQgGgGAAgIQgBgXAJgZIAKgVIAKAUQALAYABAXQAAAJgGAGQgGAGgIAAIgBABQgHAAgGgGg");
	this.shape_158.setTransform(911.4059,40.013,0.7026,0.7026);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#ECA85E").s().p("AgaBJQgLgLgBgQQgBgrARgvIASgnIAUAmQAVAtACAsQABAQgMAMQgLALgQABIgBAAQgPAAgLgLg");
	this.shape_159.setTransform(911.4241,38.8727,0.7026,0.7026);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#87D38C").s().p("AgnAPIAAhAQAjAcAsAJIgCA+QgqgHgjgcg");
	this.shape_160.setTransform(924.8343,68.5999,0.7026,0.7026);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#87D38C").s().p("AgqAOIABhAQAmAfAuAHIgDA/QgugHgkgeg");
	this.shape_161.setTransform(925.0275,59.5718,0.7026,0.7026);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#87D38C").s().p("AglAQIAAhAQAiAbApAHIgCA/QgogHghgag");
	this.shape_162.setTransform(924.6235,77.6456,0.7026,0.7026);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#87D38C").s().p("AgfATIAAhAQAdAVAiAHIgCA/QghgIgcgTg");
	this.shape_163.setTransform(924.0263,104.7474,0.7026,0.7026);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#87D38C").s().p("AgjAQIAAg/QAhAYAmAIIgCA/QglgHgggZg");
	this.shape_164.setTransform(924.4479,86.6912,0.7026,0.7026);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#87D38C").s().p("AghARIAAg/QAfAWAkAIIgCA/QgkgHgdgXg");
	this.shape_165.setTransform(924.2371,95.7193,0.7026,0.7026);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#87D38C").s().p("AAAAHQgSgBgMgCQgNgCAAgCQAAgDAOgCQAMgCARABQASAAANACQAMADAAACQAAADgMABQgKACgOAAIgHAAg");
	this.shape_166.setTransform(925.1789,53.1504,0.7026,0.7026);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CFE88B").s().p("AgPGfQgegBAAgFIAFs3IBWACIggM3QAAAEgUAAIgJAAg");
	this.shape_167.setTransform(925.0033,82.2441,0.7026,0.7026);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F4D071").s().p("AgOAmQgGgGAAgIQABgXALgYIAKgVIAKAVQAJAZAAAXQAAAIgGAGQgHAGgIAAQgIgBgGgGg");
	this.shape_168.setTransform(925.2676,47.1255,0.7026,0.7026);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#ECA85E").s().p("AAABUQgQgBgLgLQgLgMAAgQQABgrAVguIATgmIASAnQATAugBAsQgBAQgLALQgLALgPAAIgBAAg");
	this.shape_169.setTransform(925.2678,45.9846,0.7026,0.7026);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E47790").s().p("AgnAQIgBhAQAlAcAsAGIgCA/QgqgGgkgbg");
	this.shape_170.setTransform(936.5673,60.9769,0.7026,0.7026);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E47790").s().p("AgpAOIgBg/QAmAeAvAGIgBA/QgugGglgeg");
	this.shape_171.setTransform(936.5673,51.9488,0.7026,0.7026);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E47790").s().p("AgkARIgBhAQAhAZAqAHIgBA/QgngGgigZg");
	this.shape_172.setTransform(936.5497,70.0226,0.7026,0.7026);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E47790").s().p("AgeAUIgBhAQAdAUAiAHIgBA+QghgHgcgSg");
	this.shape_173.setTransform(936.5673,97.1069,0.7026,0.7026);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E47790").s().p("AgiASIgBhAQAiAYAlAGIgBA/QgmgHgfgWg");
	this.shape_174.setTransform(936.5673,79.0507,0.7026,0.7026);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#E47790").s().p("AggATIgBhAQAgAWAjAGIgBA/QgigGgfgVg");
	this.shape_175.setTransform(936.5673,88.0788,0.7026,0.7026);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#E5A265").s().p("AgqAAQgBgCANgCQANgCARAAQASAAANACQANACAAACQgBAHgrAAQgqAAAAgHg");
	this.shape_176.setTransform(936.5963,45.5095,0.7026,0.7026);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F1C59A").s().p("AgdGZIgNs2IBWAAIgOM2QAAAGgeAAQgdAAAAgGg");
	this.shape_177.setTransform(936.5963,74.6501,0.7026,0.7026);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F4D071").s().p("AgOAnQgFgHgBgIQAAgXALgYIAJgUIALAUQAKAYgBAXQABAIgHAHQgFAFgJABQgHgBgHgFg");
	this.shape_178.setTransform(936.5963,39.4847,0.7026,0.7026);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#ECA85E").s().p("AgaBJQgMgMAAgQQAAgrAUguIASgnIAUAnQATAuAAArQAAAQgLALQgMAMgQAAQgPAAgLgLg");
	this.shape_179.setTransform(936.5963,38.3429,0.7026,0.7026);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFB3C9").s().p("AqCBpQkKgsAAg9QAAg8EKgsQEKgrF4AAQF5AAEKArQEKAsAAA8QAAA9kKAsQkLArl4AAQl3AAkLgrg");
	this.shape_180.setTransform(936.6134,104.9114,0.7027,0.7027);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F792AC").s().p("AtRCLQlgg6AAhRQAAhQFgg5QFgg6HxAAQHyAAFgA6QFgA5AABQQAABRlgA6QlgA5nyAAQnxAAlgg5g");
	this.shape_181.setTransform(936.6134,104.8938,0.7027,0.7027);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F792AC").s().p("AgSAWQgKgEABgKQABgHAMgJQALgJAHgEQAMgFAHAJQAIAJgHAKQgDAFgHAFQgMAJgDABQgFACgEAAQgEAAgEgCg");
	this.shape_182.setTransform(993.5238,136.7308,0.7026,0.7026);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F792AC").s().p("AAmBGQgmgEgbgnQgQgYgQgxQgEgOAFgGQAIgHAHAIQACACAGAMQAJASAOATQATAbAbAVQADACALAFIAIADQAHAFgBAHQgBAHgGAEQgGADgHAAIgEAAg");
	this.shape_183.setTransform(984.9705,134.0335,0.7026,0.7026);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F792AC").s().p("AgxAnQgEgIAFgHQAFgGAIgDQAVgHAOgQIAPgUQAKgMAIgGQAJgIAHAGQAEAEgCAIQgFAZgPAUQgOAVgVANQgOAIgKAAQgPAAgGgMg");
	this.shape_184.setTransform(961.846,132.4858,0.7026,0.7026);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F792AC").s().p("AguBSQgDgHADgLIAFgSQAHgYAMgWQAUgtAhgnQAEgEAEgCQAFgCACADQAEADgDAJIgvCKQgFAPgFAGQgHAJgLABIgBAAQgMAAgFgKg");
	this.shape_185.setTransform(909.0028,135.286,0.7026,0.7026);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#F792AC").s().p("AgDAaQgJgBgFgGQgGgGgBgIQgCgIADgHQAJgUASAFQASAFADAUQACAHgEAHQgEAHgIAEQgEACgFAAIgFgBg");
	this.shape_186.setTransform(905.7763,145.2873,0.7026,0.7026);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#F792AC").s().p("AgOAqQgEgFgCgGQgCgMAIgTQAJgVAMgTQAGgHAEABQAGACgCALIgOBAQgEAQgHAAIgBAAQgFAAgEgFg");
	this.shape_187.setTransform(865.4882,130.9666,0.7026,0.7026);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F792AC").s().p("AgPAaQgIgFgBgMQgBgKAHgLQAIgMAKgDQAKgDAIAJQAIAJgBALQgCAKgHAHQgGAJgIADIgHABQgGAAgEgDg");
	this.shape_188.setTransform(863.4496,138.2019,0.7026,0.7026);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E47790").s().p("AntE+QgcgIgVgeQgRgZgHgiIgMg/QgHgmgJgXQgOgfgbgTQgdgVgdAHQgSAFgVARQgLAJgWAWQgTARgVAGQgYAIgRgMQgLgIgOgaQgOgZgNgHQgTgKgYANQgVANgJAXQgGAPgGAeQgFAggFAOQgJAXgYASQgaASgWgGQgXgGgUgUQgSgRgLgZQgIgVgFgcQgDgRgEgiIgWi7QgNhwAAhMMAljAAAIgGC9QgFCNgHAvQgGAmgHAWQgLAhgUAUQgWAXggAFQgiAEgVgVQgMgLgHgUIgKglQgNgwgegJQgRgGgTAJQgQAIgNAPQgIAKgMAVQgNAVgJAKQghApg8AEQg7ADgngmQgQgQgQgcIgcgwQgRgagWgOQgZgSgZADQgjADgiAqIgZAjQgOAUgOALQgbAXgjADQgmAEgZgYQgLgKgPgbQgPgbgMgKQgNgOgTgFQgUgGgTAEQgcAGgbAjQgcAogQAQQglApgmgGQgmgFggg5QgTghgHgJQgPgXgUgKQgagNghAJQgfAIgXAYQgTAUgPAgQgJAVgMAmQgOArgHARQgNAggRAWQgVAagcAMQgUAIgSAAQgMAAgLgEg");
	this.shape_189.setTransform(936.6134,127.5228,0.7027,0.7027);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F792AC").s().p("AgiAsQgOgSAAgaQAAgYAOgTQAPgSATAAQAUAAAPASQAOATAAAYQAAAagOASQgOASgVAAQgTAAgPgSg");
	this.shape_190.setTransform(876.1985,147.5216,0.7026,0.7026);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F792AC").s().p("AgiAsQgOgSAAgaQAAgZAOgRQAPgTATAAQAUAAAPATQAOARAAAZQAAAagOASQgPASgUAAQgUAAgOgSg");
	this.shape_191.setTransform(913.8072,151.878,0.7026,0.7026);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F792AC").s().p("AgiAsQgOgSAAgaQAAgZAOgRQAPgTATAAQAUAAAOATQAPARAAAZQAAAagPASQgOASgUAAQgUAAgOgSg");
	this.shape_192.setTransform(959.4083,151.878,0.7026,0.7026);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#F792AC").s().p("AgiAsQgOgSAAgaQAAgYAOgTQAPgSATAAQAUAAAPASQAOATAAAYQAAAagOASQgPASgUAAQgUAAgOgSg");
	this.shape_193.setTransform(997.0169,147.5216,0.7026,0.7026);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E47790").s().p("AACCNQgjg2gghZQgnhxgWh0IAOgEQALgCACgCQAOBBALAkQARA2AYAoQAbAuAnAfQAtAiAwAFIgBBUQAAA5gCAbQhMgigthBg");
	this.shape_194.setTransform(1005.9652,164.1625,0.7027,0.7027);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E47790").s().p("AgTEdQgegLgbgWQgrgjgmhCQhlisgKjJIAlgLQAKBCAHAfQALA2AQAoQApBnBRAtQAsAYAygBQA0gBAmgcQAcgVAUglQAQgbAOgqQAsiDALiHIAQACQAHDIg0CzQgZBWgiAuQgXAfgeATQghAVgiADIgNAAQgZAAgZgJg");
	this.shape_195.setTransform(978.1693,167.609,0.7027,0.7027);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#E47790").s().p("AiZDNQhCg2gnhUQghhDgPhhQgGgkgNiJIAPAAQAKABAFgBQAZDeBqBeQBJBABbgCQBcACBIhAQBshfAYjdQAFABAKgBIAPAAQgNCJgGAkQgQBhggBDQgoBUhBA2QhIA8hSAGQhSgGhHg8g");
	this.shape_196.setTransform(936.6134,171.1451,0.7027,0.7027);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E47790").s().p("Ah8CcQAAg4gBgcQAxgFAsgiQAngfAcguQAXgnAQg3QALghAOhEQADACALACIANAEQgUB0gpBxQgfBZgjA2QgtBBhMAiIgChUg");
	this.shape_197.setTransform(867.2617,164.1625,0.7027,0.7027);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E47790").s().p("AgqEmQgjgDghgVQgegTgXgfQgigugZhWQg0izAHjIIARgCQAKCHAsCDQAfBbAvAkQAmAcA1ABQAxABAsgYQBRgtAphnQARgpALg1QAHghAJhAIAlALQgFBjgcBfQgcBegyBVQgnBDgqAiQgaAWgeALQgZAJgaAAIgMAAg");
	this.shape_198.setTransform(895.0438,167.609,0.7027,0.7027);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#7D84D1").s().p("ADhC4Qg7gDhag+QhehAg1gJQgwgHg6ARQgjAKhDAfQhEAggiAKQg5ASgxgGQgtgGg+gjQhSgugVgIQgxgThPgHIiFgNQhegPg2gtIgKhxQAgAcAsAOQAsANA6gBQAmgBBBgJQBJgJAegBQA7gDAsAKQATAFA/AWQAzATAhACQAwAEA6gUQAfgMBGgiQBAggAkgLQA4gRAwAJQAxAKBPA6QBPA7AyAJQBNAOBrg4IBTgtQAxgZAogIQAvgKA5AGQAqAEA+AOQBLASAcAEQA6AKAugCQApgDAkgNQAngPAZgZIgMCQQg8AghEAKQgxAIhHgEIh4gIQicgGh4BNQhHAzgmAVQg+Ajg3AAIgKAAg");
	this.shape_199.setTransform(936.6661,166.4597,0.7027,0.7027);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#6C6FC3").s().p("Ar9JpQk+g0AAhJQgJi5gqnYQgrnUgBgjMAk1AAAQgCAjgpHUQgsHYgIC5QAABJk9A0Qk+A0nBAAQnAAAk9g0g");
	this.shape_200.setTransform(936.6134,151.9013,0.7027,0.7027);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AubCWQl/g+AAhYQAAhXF/g/QF+g+IdAAQIeAAF+A+QF/A/AABXQAABYl/A+Ql/A/odAAQocAAl/g/g");
	this.shape_201.setTransform(936.6363,190.2571,0.7027,0.7027);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E4E4E0").s().p("AubCXQl/g/AAhYIAAg6IAzAAQB4hDFYgrQFegsG5AAQG6AAFfAsQFXArB4BDIAzAAIAAA6QAABYl/A/Ql+A+oeAAQodAAl+g+g");
	this.shape_202.setTransform(936.6363,194.4031,0.7027,0.7027);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#C6C6C4").s().p("AqCBpQkKgsAAg9QAAg9EKgqQEKgsF4AAQF5AAEKAsQEKAqAAA9QAAA9kKAsQkLArl4AAQl3AAkLgrg");
	this.shape_203.setTransform(936.6363,203.6614,0.7027,0.7027);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#93E3EF").s().p("AubCWQl/g+AAhYQAAhXF/g+QF/g/IcAAQIdAAF/A/QF/A+AABXQAABYl/A+Ql/A/odAAQocAAl/g/g");
	this.shape_204.setTransform(936.642,205.2142,0.7027,0.7027);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgGBLQgvgDgpgWQgfgSgRgiQgTgpAkgSQANgHAUACIAiAFIAxAJQAaADAWgFQANgEAbgLQAYgIARAGQATAHAIAYQAHAXgJAVQgPAlgwATQglAPgnAAIgMAAg");
	this.shape_205.setTransform(765.0781,81.673,0.549,0.549);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E7FAF9").s().p("AjlEUIgBg+QgHiTAahoQAahtBChRQBHhYBcgWQBKgRBKAcQAaAlAPAvQgggHgfAAQhGABhCAqQg9AngrBCQhMBygHCtQgDA8AHBXQgjAIgiADQgJgZgCgrg");
	this.shape_206.setTransform(779.0985,61.0254,0.5489,0.5489);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AkGFeQgUgJgKgcQBUgGBagtQCXhLBOiCQArhFAPhSQAPhVgUhNQgNg2ghgvQAhAMAXASQAsAfAfAwQAeAxAJA4QATBpg1BrQgyBkhbBBQhPA4hwAgQg5AUgjAIQggAIgXAAQgXAAgOgIg");
	this.shape_207.setTransform(783.1273,62.7211,0.5489,0.5489);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#E7FAF9").s().p("ACXFNQAGhSgChBQgIishMhzQgrhCg9gnQhCgqhGgBQggAAgfAHQAPguAagmQBKgcBKARQBcAWBHBYQBCBRAaBtQAaBogHCTIgBA+QgCArgIAZQgigDgjgIg");
	this.shape_208.setTransform(751.4472,61.0318,0.5489,0.5489);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("ACsFeIhdgcQhvgghPg4QhbhBgyhkQg2hrAThpQAKg4AdgxQAegwAsgfQAYgRAggNQggAvgNA2QgUBNAPBVQAPBSArBFQBOCCCYBLQBZAtBUAGQgKAcgTAJQgPAIgWAAQgYAAgfgIg");
	this.shape_209.setTransform(747.42,62.7211,0.5489,0.5489);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#E7FAF9").s().p("An/hRIC3gvINIDTIi3Aug");
	this.shape_210.setTransform(767.0184,83.2961,0.549,0.549);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#BCF0EB").s().p("AhSnMIC2gtIgZPKIiuApg");
	this.shape_211.setTransform(789.6495,115.6714,0.549,0.549);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E7FAF9").s().p("An/BTINHjTIC4AvItIDSg");
	this.shape_212.setTransform(765.1107,83.2961,0.549,0.549);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AhKHRIgZvKIC2AtIARPGg");
	this.shape_213.setTransform(742.4933,115.6714,0.549,0.549);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#52969E").s().p("AmMA+IMZjDIgCBJIsXDCg");
	this.shape_214.setTransform(787.8165,104.8262,0.5489,0.5489);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#62B29A").s().p("AmKg8IgChJIMZDDIAABIg");
	this.shape_215.setTransform(744.221,104.8262,0.5489,0.5489);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#62B29A").s().p("AmjgOINHjSIgIDyIs/DPg");
	this.shape_216.setTransform(789.0927,95.9067,0.5489,0.5489);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#87D38C").s().p("AmcASIgIjyINJDSIAADvg");
	this.shape_217.setTransform(742.9448,95.9067,0.5489,0.5489);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#CFE88B").s().p("AtIACINIjVINJDVItJDSg");
	this.shape_218.setTransform(766.021,83.4799,0.5489,0.5489);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#62B29A").s().p("AmNkvIMbjGIghM2Ir6C1g");
	this.shape_219.setTransform(787.8851,120.1813,0.5489,0.5489);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#87D38C").s().p("AlsFBIgis2IMdDGIAAMlg");
	this.shape_220.setTransform(744.1524,120.1813,0.5489,0.5489);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#93E3EF").s().p("As9h3IX5gIICCAXIuRDog");
	this.shape_221.setTransform(769.5391,144.8424,0.549,0.549);

	this.instance_3 = new lib.Path();
	this.instance_3.setTransform(704,74.95,0.5489,0.5489,0,0,0,36,93.1);
	this.instance_3.alpha = 0.3008;

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#ECA85E").s().p("AjNAKIBfj1QBcA6BVArQBHC1BEC9QjchXi/iLg");
	this.shape_222.setTransform(694.7658,42.8295,0.5489,0.5489);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#ECA85E").s().p("AgbCqQjNhwipieQAghhAyiMQEXDmFUBrQA7CzArCfQjgg3jNhxg");
	this.shape_223.setTransform(696.2204,75.159,0.5489,0.5489);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#ECA85E").s().p("AhHB4QhagXAAgbQAAhTAaiLQCBCoCoCJQiRgLhYgWg");
	this.shape_224.setTransform(670.5735,116.9158,0.5489,0.5489);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#ECA85E").s().p("AijCpQjJiLibi2QAehwAmh6QDADKD1CJQD3CIEPA3QAQBgAABGQAAAYhGAVQhFAUh2AMQjihRjIiJg");
	this.shape_225.setTransform(694.7658,103.7287,0.5489,0.5489);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#F4D071").s().p("AmMOCQilgaAAgmQAAj6DVqAQCDmJCynBQALgaAcAAQAdAAAKAaQCzHBCCGJQDVKAAAD6QABAmilAaQilAbjoAAQjoAAikgbg");
	this.shape_226.setTransform(692.496,74.9989,0.5489,0.5489);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#E0526B").s().p("AAnB6IgkgCQgBg0gVgxQgTgtgkgmQANgJAYgUIAkgeQBHBwAFCHIgkgCg");
	this.shape_227.setTransform(692.0214,14.2872,0.5489,0.5489);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#E0526B").s().p("AgJARQgkgIgjAKQgBgMgEgVIgIgiQAzgFAwARQAyAQAnAiIgoAkQgbgZglgIg");
	this.shape_228.setTransform(688.3713,22.7494,0.5489,0.5489);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#E0526B").s().p("AhmAVQAognA0gZQA4gaA6AAIgBArIgDAqQgsgIgqAOQgrAPgcAhQgggggNgRg");
	this.shape_229.setTransform(698.0043,22.9322,0.5489,0.5489);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#E0526B").s().p("AhPBbQAOg4AWgwQAag5AegpIAiAcQAXATAKAKQgkAggZArQgYArgKAwQgsgNgUgIg");
	this.shape_230.setTransform(696.3439,19.4879,0.5489,0.5489);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#E0526B").s().p("AgUAbQgpgjgzgIQAIgZAGgZIALg0QBKAbA2A9QA2A8ASBOIhPALQgMg2gqgmg");
	this.shape_231.setTransform(689.2906,19.4193,0.5489,0.5489);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#93E3EF").s().p("AmwBHQizgeAAgpQAAgoCzgdQCzgeD9AAQD+AACzAeQC0AdAAAoQAAAqi0AdQizAdj+AAQj9AAizgdg");
	this.shape_232.setTransform(692.5363,124.5947,0.549,0.549);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#C3FCC3").s().p("AgzCCQgqgogOhDQgOhCAWg2QAWg2AsgKQAsgJApApQAqApAOBDQAOBCgWA1QgWA2gsAKQgJABgIAAQgjAAghghg");
	this.shape_233.setTransform(592.9526,90.3128,0.5463,0.5463);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#A1E5A3").s().p("AhRDLQhAhAgWhoQgVhnAhhUQAihUBGgPQBEgOBBBAQBAA+AWBpQAVBngiBUQghBUhGAOQgNADgMAAQg3AAg1gzg");
	this.shape_234.setTransform(592.047,92.6168,0.5463,0.5463);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#87D38C").s().p("AhPG2QiggbhZieQhZieAijFQAgi+CDhZQB6hTCmAdQCnAcBYB3QBeB/ggC9QghDFiIB4QhwBih+AAQgcAAgdgFg");
	this.shape_235.setTransform(582.4063,98.1658,0.5463,0.5463);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#5FB261").s().p("AAAAnQgWgFgRgMQAXgcAQgiQAHAIALAFQANAHAIgCQgDAdAEAgQgKACgKAAQgLAAgJgCg");
	this.shape_236.setTransform(576.7791,121.6727,0.5463,0.5463);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#87D38C").s().p("AgDAhQgkgJgYgYQASgQARgVQARAMAVAFQAUAEAVgEQAEAYAJAbQgSAHgSAAQgQAAgPgFg");
	this.shape_237.setTransform(576.1645,124.9276,0.5463,0.5463);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#518AAD").s().p("AiFATQgqmwCdmHIAGADQicGFAqGuQApGvDkFhIgGADQjklhgqmxg");
	this.shape_238.setTransform(577.7403,165.4495,0.5463,0.5463);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#6BC5FF").s().p("AgQBxQgqgXgYgxQgZgwAIgvQAHguAigSQAjgRAoAXQAqAXAYAxQAZAwgIAvQgHAvgiARQgPAHgQAAQgWAAgWgNg");
	this.shape_239.setTransform(579.3481,34.8911,0.5463,0.5463);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#5BA7FF").s().p("AggDXQhPgrguheQguhcANhZQAOhZBBghQBCggBOArQBPArAuBeQAuBcgNBZQgOBZhBAgQgcAOgfAAQgoAAgtgYg");
	this.shape_240.setTransform(577.7093,37.9093,0.5463,0.5463);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#5297F4").s().p("AgeHkQikgLhriVQhqiVAMjHQANjIB9iHQB9iGCjAKQCkAKBrCVQBrCVgNDIQgNDIh9CHQh0B9iUAAIgYgBg");
	this.shape_241.setTransform(570.9926,47.8081,0.5463,0.5463);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#5297F4").s().p("AgDAgQgWgDgUgMQgVgMgLgSQAMgGAOgNQA0AaA5gPQAKAQAKAKQgQAPgWAHQgQAGgQAAIgLgBg");
	this.shape_242.setTransform(568.4895,76.8866,0.5463,0.5463);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#4783E1").s().p("Ag2AOQARgRAHgaIAhAEIAiAEQAGAYAMAWQgVAFgUAAQgiAAgigQg");
	this.shape_243.setTransform(568.6397,74.3554,0.5463,0.5463);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#518AAD").s().p("AicRgQAgnGBYqfQBir4BYljIAHADQhYFihiL4QhXKfggHEg");
	this.shape_244.setTransform(561.2526,134.1067,0.5463,0.5463);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFB3C9").s().p("AhHB4QgigugEhFQgDhDAdgyQAegyAugCQAsgCAjAuQAiAvAEBEQAEBEgeAyQgeAyguACIgEAAQgqAAghgtg");
	this.shape_245.setTransform(628.2975,55.1978,0.5463,0.5463);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#F792AC").s().p("AhvC7Qg2hIgFhqQgFhqAuhNQAuhOBHgEQBGgDA2BIQA2BJAFBqQAFBpguBOQguBOhHADIgHABQhCAAgzhGg");
	this.shape_246.setTransform(627.0545,57.3283,0.5463,0.5463);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#E47790").s().p("AiWGoQiagzg/irQhAiqBAi9QA9i2CPhEQCFg/CgA2QChA2BFCCQBJCMg9C2Qg/C9iZBiQhlBBhjAAQg1AAg1gSg");
	this.shape_247.setTransform(616.9025,61.1557,0.5463,0.5463);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#CE5B79").s().p("AgGAjQgUgHgQgPQAcgXAVggQAGAJAKAHQALAIAJAAQgIAbgBAiQgXAAgRgIg");
	this.shape_248.setTransform(607.4518,83.8198,0.5463,0.5463);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E47790").s().p("AgGAgQghgOgVgbQAUgOAUgSQAQAPATAHQASAHAXAAQAAAaAFAbQgKABgKAAQgYAAgXgKg");
	this.shape_249.setTransform(606.2501,86.8449,0.5463,0.5463);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#518AAD").s().p("AhHH5Qgsj6AEkJQAEkRA2juQA3j+BpivIAFADQhoCvg3D9Qg1DtgEEQQgEEJArD5QAsD/BUC+IgGACQhUi+gskAg");
	this.shape_250.setTransform(601.6135,135.4588,0.5463,0.5463);

	this.instance_4 = new lib.Símbolo12();
	this.instance_4.setTransform(204,163.35,1,1,0,0,0,196,97.5);
	this.instance_4.alpha = 0.7695;

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#7D84D1").s().p("AgFA/QglgCgggTQgZgPgNgcQgPgjAcgQQALgGAQACIAaAFIAnAHQAUADARgFQALgDAVgKQATgGANAFQAPAGAGAUQAGAUgHARQgMAfgmARQgdAMgeAAIgKAAg");
	this.shape_251.setTransform(322.6917,77.3978,0.6479,0.6479);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#6C6FC3").s().p("Ai4DzIgBg2QgGh+AVhbQAVhgA1hIQA6hOBLgUQA9gPA6AZQAVAjALAoQgYgGgbAAQg4AAg1AmQgyAjgjA6Qg9BjgHCWQgCA5AFBEQgcAIgaACQgHgUgBglg");
	this.shape_252.setTransform(336.0251,56.2055,0.6479,0.6479);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#7D84D1").s().p("AjSExQgPgIgJgXQBBgFBIgnQB4hABAhvQAjg9ANhHQAOhLgPhEQgKgwgZgqQAXAJAVARQAjAcAYArQAXArAHAyQAMBcgsBcQgpBXhKA3Qg+AwhYAcQguAQgbAHQgZAGgSAAQgSAAgLgGg");
	this.shape_253.setTransform(339.7312,57.9382,0.6479,0.6479);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#6C6FC3").s().p("AB7EiQAFhGgCg3QgGiVg+hkQgjg6gygjQg1gmg5AAQgaAAgYAGQAKgoAVgjQA7gZA9APQBKAUA6BOQA2BIAVBgQAVBagFB/IgBA2QgBAlgHAUQgagCgdgIg");
	this.shape_254.setTransform(309.7307,56.2055,0.6479,0.6479);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#7D84D1").s().p("ACLExIhJgXQhYgcg+gwQhKg3gphXQgthcANhcQAHgyAXgrQAXgrAjgcQAVgRAXgJQgZArgKAvQgOBEANBLQANBHAkA9QBABvB4BAQBIAnBBAFQgJAXgPAIQgLAGgRAAQgSAAgagGg");
	this.shape_255.setTransform(306.0416,57.9382,0.6479,0.6479);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#6C6FC3").s().p("AmRhEICQgoIKTCzIiQAmg");
	this.shape_256.setTransform(324.3864,78.9951,0.6479,0.6479);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#6C6FC3").s().p("Ag4ohICPgmIgtRvIh/Agg");
	this.shape_257.setTransform(344.8115,121.3842,0.6479,0.6479);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#6C6FC3").s().p("AmRBHIKTizICQAoIqTCxg");
	this.shape_258.setTransform(322.799,78.9951,0.6479,0.6479);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#7D84D1").s().p("AgpIoIgsxvICPAmIAcRpg");
	this.shape_259.setTransform(302.3738,121.3842,0.6479,0.6479);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#C9356A").s().p("AkzAzIJnigIgDA8IpkCfg");
	this.shape_260.setTransform(343.5577,100.1011,0.6479,0.6479);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#D64774").s().p("AkwgxIgDg8IJnCgIAAA7g");
	this.shape_261.setTransform(303.6173,100.1011,0.6479,0.6479);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#DD6282").s().p("AlJgKIKTivIgNDKIqGCpg");
	this.shape_262.setTransform(344.9506,91.3712,0.6479,0.6479);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#E47790").s().p("Ak8ARIgNjKIKTCvIAADEg");
	this.shape_263.setTransform(302.2244,91.3712,0.6479,0.6479);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#F792AC").s().p("AqTADIKTi0IKUC0IqUCvg");
	this.shape_264.setTransform(323.5909,79.1362,0.6479,0.6479);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#DD6282").s().p("Ak1mbIJsikIg9P5IovCGg");
	this.shape_265.setTransform(343.7035,125.5619,0.6479,0.6479);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#E47790").s().p("Aj5G6Ig8v5IJsCkIAAPbg");
	this.shape_266.setTransform(303.4715,125.5619,0.6479,0.6479);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#93E3EF").s().p("AphhaIBjgWIRgAAIo/Dhg");
	this.shape_267.setTransform(320.3922,161.5809,0.648,0.648);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FBEED1").s().p("AgFA/QglgCgfgTQgZgPgNgcQgPgjAcgQQAKgGAQACIAaAFQAdAGAKABQAUADARgFQALgDAVgKQATgGANAFQAPAGAGAUQAFAUgHARQgLAfgmARQgeAMgfAAIgIAAg");
	this.shape_268.setTransform(385.5835,62.5255,0.648,0.648);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#ECA85E").s().p("Ai6D3IgBg2QgFiAAUhbQAWhiA1hJQA7hQBLgUQA9gQA7AaQAWAlAKAoQgbgHgYAAQg5ABg2AmQgyAjgjA7Qg9BmgHCXQgDA6AGBEQgaAHgdACQgHgUgBglg");
	this.shape_269.setTransform(398.9871,41.0573,0.6479,0.6479);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#F4D071").s().p("AjTE1QgPgIgJgYQBCgFBHgmQB5hCA/hvQAkg9AOhJQAOhLgPhGQgJgvgagtQAYAKAVARQAjAcAXAsQAXAsAHAyQAMBegtBdQgqBYhKA4Qg/AwhYAbQgtARgbAHQgZAGgSAAQgSAAgLgGg");
	this.shape_270.setTransform(402.6701,42.8058,0.6479,0.6479);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#ECA85E").s().p("AB9EnQAFhHgCg3QgIiYg9hlQgjg7gzgjQg2gmg4gBQgZAAgaAHQAKgqAVgjQA8gaA8AQQBMAUA6BQQA2BJAWBiQAUBdgFB+IgBA2QgBAlgHAUQgdgCgZgHg");
	this.shape_271.setTransform(372.5249,41.0573,0.6479,0.6479);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#F4D071").s().p("ACME1IhIgYQhYgbg/gwQhKg4gqhYQgthdAMheQAGgyAXgsQAXgsAjgcQAVgRAYgKQgaArgJAxQgOBFAOBMQANBIAkA+QBBBvB4BCQBHAmBCAFQgIAYgPAIQgMAGgRAAQgSAAgagGg");
	this.shape_272.setTransform(368.8648,42.8058,0.6479,0.6479);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#F4D071").s().p("AmPhEICPgoIKQCzIiPAmg");
	this.shape_273.setTransform(387.2459,64.1108,0.648,0.648);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#ECA85E").s().p("Ag4nNICOgmIgsPJIh/Aeg");
	this.shape_274.setTransform(407.592,101.0934,0.648,0.648);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#ECA85E").s().p("AmPBHIKQizICPAoIqQCxg");
	this.shape_275.setTransform(385.7232,64.1108,0.648,0.648);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#F4D071").s().p("AgpHWIgsvJICOAmIAdPBg");
	this.shape_276.setTransform(365.3771,101.0934,0.648,0.648);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#5297F4").s().p("AkxAzIJjieIgEA7IpfCdg");
	this.shape_277.setTransform(406.2939,85.0968,0.6479,0.6479);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#5DABFF").s().p("AktgwIgEg7IJjCeIAAA6g");
	this.shape_278.setTransform(366.6431,85.0968,0.6479,0.6479);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#5DABFF").s().p("AlIgIIKQiwIgPDKIqBCng");
	this.shape_279.setTransform(407.7516,76.4151,0.6479,0.6479);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#6BC5FF").s().p("Ak4ASIgQjKIKQCwIAADBg");
	this.shape_280.setTransform(365.1854,76.4151,0.6479,0.6479);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#96E4FF").s().p("AqQADIKQi1IKRC1IqRCwg");
	this.shape_281.setTransform(386.4717,64.2229,0.6479,0.6479);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#5DABFF").s().p("Ak0lJIJpiiIg8NTIotCEg");
	this.shape_282.setTransform(406.4558,105.2623,0.6479,0.6479);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#6BC5FF").s().p("Aj4FoIg7tTIJnCiIAAM1g");
	this.shape_283.setTransform(366.4811,105.2623,0.6479,0.6479);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#93E3EF").s().p("AqCg7ICrgpIRaAAIpSDJg");
	this.shape_284.setTransform(380.9444,135.1439,0.648,0.648);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#6BC5FF").s().p("AghCjQgtgKgWg2QgWg2AOhDQAPhDApgpQAqgqAsAKQAtAJAWA3QAWA2gPBDQgOBDgpApQgiAigjAAQgJAAgIgCg");
	this.shape_285.setTransform(206.4854,96.1219,0.5395,0.5395);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#5BA7FF").s().p("Ag0D9QhGgOgihVQgihUAWhoQAWhpBBhAQBBhABFAPQBFAOAjBVQAiBVgWBnQgWBphBBAQg1A0g3AAQgNAAgNgDg");
	this.shape_286.setTransform(207.3825,98.4013,0.5395,0.5395);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#5297F4").s().p("AjYFcQiJh5gijHQghi+BfiAQBZh4CogcQCogdB7BUQCEBaAgC/QAiDFhaCgQhaCgigAbQgeAFgcAAQh/AAhwhjg");
	this.shape_287.setTransform(216.973,103.9393,0.5395,0.5395);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#4783E1").s().p("AgnAnQADgdgCggQAIABAMgGQAMgGAGgHQAQAhAZAdQgUANgUAEQgJACgLAAQgKAAgKgCg");
	this.shape_288.setTransform(222.5631,127.3112,0.5395,0.5395);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#5297F4").s().p("AhAAgQAKgcAEgYQAUAEAVgEQATgFAUgMQASAXARAOQgZAYgkAKQgPAEgQAAQgTAAgSgGg");
	this.shape_289.setTransform(223.1565,130.5628,0.5395,0.5395);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#518AAD").s().p("AiPMnQDlliAqmzQAqmxidmIIAGgDQCeGKgqGzQgrGzjlFlg");
	this.shape_290.setTransform(221.6202,170.8812,0.5395,0.5395);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFE7B8").s().p("AhAB0QgigSgFgwQgEgvAagwQAbgwArgVQAqgUAiASQAiATAEAwQAFAvgaAwQgbAwgrAVQgWAKgUAAQgSAAgQgJg");
	this.shape_291.setTransform(226.3321,33.4695,0.5395,0.5395);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FCDD9A").s().p("Ah7DdQhAgjgJhbQgJhaAzhaQAzhcBSgnQBRgoBAAkQBAAkAJBaQAJBagzBbQgzBbhSAoQgqAUgmAAQgiAAgfgRg");
	this.shape_292.setTransform(227.8019,36.5581,0.5395,0.5395);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#F4D071").s().p("AkVFdQh3iNgCjKQgDjJBziRQBziRClgCQClgCB3CNQB3CNACDKQADDKhzCQQhzCRilACIgGAAQihAAh1iLg");
	this.shape_293.setTransform(234.0064,46.7181,0.5395,0.5395);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#F4D071").s().p("AgpAZQgVgJgQgQQAMgKAJgPQA5ASA2gXQALANAOAHQgNARgVAMQgUAKgXACIgGAAQgTAAgSgGg");
	this.shape_294.setTransform(235.0651,75.7992,0.5395,0.5395);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#ECA85E").s().p("Ag3AWQAPgWAGgXQATgCAxgDQAFAaARASQgfANgfAAQgYAAgZgHg");
	this.shape_295.setTransform(234.9707,73.2387,0.5395,0.5395);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#518AAD").s().p("AAjUZQgCiFgBmpQABnqgCkDQgLvTg9lCIAHgBQA+FCAKPTQACEDAAHqQAAGqACCFg");
	this.shape_296.setTransform(236.2318,142.1534,0.5395,0.5395);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#949DE0").s().p("AgFCmQgugBgfgyQgegyAChEQADhFAigvQAigwAtACQAuABAfAyQAeAygCBEQgDBFgiAvQghAugrAAIgDAAg");
	this.shape_297.setTransform(177.333,49.7649,0.5395,0.5395);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#7D84D1").s().p("AgJEDQhHgDgwhNQgvhOAEhqQAEhrA1hKQA1hKBGACQBIADAvBNQAwBPgEBqQgDBqg2BLQgzBHhEAAIgFAAg");
	this.shape_298.setTransform(178.6007,51.8563,0.5395,0.5395);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#6C6FC3").s().p("AiWF/QichhhCi+QhAi2BIiOQBDiFChg4QCgg4CHA9QCSBCBAC3QBCC9g9CtQg+CsiZA2Qg3AUg4AAQhiAAhkg+g");
	this.shape_299.setTransform(188.7413,55.5066,0.5395,0.5395);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#575DAA").s().p("AgqgRQAIgBAMgIQAJgIAGgIQAZAhAZAVQgQARgUAHQgSAHgVAAQgCghgIgbg");
	this.shape_300.setTransform(198.4493,77.9372,0.5395,0.5395);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#6C6FC3").s().p("Ag8AqQAFgdgBgYQAWAAATgIQATgHAQgQQAUASAVAOQgUAbgiAPQgYALgZAAIgSgBg");
	this.shape_301.setTransform(199.7035,80.9305,0.5395,0.5395);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#518AAD").s().p("Ah3PgQBVjHA7kGQA/kQATkQQAsqDjNlOIAGgEQDNFQgsKFQgTEQg+ERQg7EHhWDIg");
	this.shape_302.setTransform(201.158,131.2827,0.5395,0.5395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.instance_4},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.instance_3},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(531.5,136.3,497,971.7);
// library properties:
lib.properties = {
	id: '35DF4F6CAE77C24386D73F952051B528',
	width: 1050,
	height: 270,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/goto_atlas_P_1.png?1749134210528", id:"goto_atlas_P_1"}
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
an.compositions['35DF4F6CAE77C24386D73F952051B528'] = {
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