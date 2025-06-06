(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"goto_atlas_P_1", frames: [[637,250,234,248],[0,446,453,117],[0,0,635,444],[637,0,248,248],[455,446,142,142]]}
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



(lib.Mapadebits4 = function() {
	this.initialize(ss["goto_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.initialize(ss["goto_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.initialize(ss["goto_atlas_P_1"]);
	this.gotoAndStop(4);
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


(lib.Símbolo31 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,0,102,0.996)").s().p("AsYATIAAgmIYxAAIAAAmg");
	this.shape.setTransform(79.275,1.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo31, new cjs.Rectangle(0,0,158.6,3.9), null);


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


(lib.Símbolo32 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Símbolo31();
	this.instance.setTransform(81.8,19,1,0.359,0,0,0,79.2,1.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,102,0.996)").s().p("Ag1BIIAAiOIAAAAIAlAAQAYgBAVASIALALQAOAUABAWIAAAAQgBAdgVAXQgMAKgLAEQgMAGgNAAIgmAAgAgjA1IASAAQAYAAAQgTQANgPAAgTQgBgSgNgQQgHgHgFgDIgKgFQgIgCgLgBIgPAAIgBAAIAABpg");
	this.shape.setTransform(138.1,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,102,0.996)").s().p("AAZBIIgGgKIgVgoIgbAAIAAAyIgSAAIAAiOIAvAAQAVAAAQARQAMANAAAQQgBAVgQANQgIAIgHABIATAiIALATIgWAAgAgdADIAdAAQAOAAAKgKQAGgIgBgIIAAgBQAAgNgMgJQgIgFgMgBIgZAAIgBAAIAAA3g");
	this.shape_1.setTransform(125.7,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,102,0.996)").s().p("AgJBTIAAgFIAAgMIAAgTQAFABAEAAIAJgBIgJABQgEAAgFgBIAAATIgCAAQgLgCgKgJIgGgGIgGgHIgBgEIARgIQAGAMAMAEIABABIAAgpIgNgFQgUgIAAgTIAAgBQAAgMAIgLIAFgEIAFgDIAGgEIAIgCIABAAIAAATIgHADIgDAEQgFAFAAAFQAAAGAEADIADACIAIADIgIgDIgDgCQgEgDAAgGQAAgFAFgFIADgEIAHgDQAFgBAFAAIAIAAIAAAlIgPgDIgDgCIAAgfIAAAfIAAATIAPAEIADABIAGABIAEADQAIAFAAAHQAAAGgDAFIgFAFQgFADgFABIAAgkIAAAkQAFgBAFgDIAFgFQADgFAAgGQAAgHgIgFIgEgDIgGgBIAAgTIAAATIgDgBIgPgEIAAgTIADACIAPADIAGABIAKAEIAIAEIAEAEQAEAFADAGQACAGAAAFIAAABQAAALgGAJIgFAFIgEAFIgHAEIgIADIgHABIAAgTIAAATIAAAMIgSAAIASAAIAAAFIgSAAgAAJAvIAAAAgAAJALIAAAAgAgJgNIAAAAgAAWglQgGgGgHgCIAAgSIAAASIgIAAQgFAAgFABIAAgTIAAgLIAAAAIASAAIAAAAIAAALIACAAQAKACAJAGIAGAFIAFAGIABACIgRAJIgDgEgAAJhKIAAAAgAgJhKIAAgHIAAgBIASAAIAAABIAAAHIgSAAg");
	this.shape_2.setTransform(113.55,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,102,0.996)").s().p("Ag7BEQgWgfAAglQAAgnAZgfQAZgbAfgBQAjAAAaAhQAVAcAAAlQAAAogYAfQgZAbghAAQghABgagfgAgqgtQgNAVAAAYQAAAgAUAYQARAQASAAQAaAAASgbQAMgUAAgZQAAgigXgYQgPgNgRAAIgBAAQgYgBgSAbg");
	this.shape_3.setTransform(91.375,18.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,102,0.996)").s().p("Ag7BEQgWgfAAglQAAgnAZgfQAZgbAfgBQAjAAAaAhQAVAcAAAlQAAAogYAfQgZAbghAAQghABgagfgAgqgtQgNAVAAAYQAAAgAUAYQARAQASAAQAaAAASgbQAMgUAAgZQAAgigXgYQgPgNgRAAIgBAAQgYgBgSAbg");
	this.shape_4.setTransform(72.075,18.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,102,0.996)").s().p("Ag7BEQgWgfAAglQAAgnAZgfQAZgbAfgBQAjAAAaAhQAVAcAAAlQAAAogYAfQgZAbghAAQghABgagfgAgqgtQgNAVAAAYQAAAgAUAYQARAQASAAQAaAAASgbQAMgUAAgZQAAgigXgYQgPgNgRAAIgBAAQgYgBgSAbg");
	this.shape_5.setTransform(52.775,18.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,0,102,0.996)").s().p("AgUAbQASgQAAgMQgGgDgDgGQgCgDAAgFQAAgIAIgGQAEgDAFAAQAIAAAFAIQAEAFAAAIQAAAUgZAWIgJAIIgHgJg");
	this.shape_6.setTransform(38.425,27.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,0,102,0.996)").s().p("AAVBfIAAgcIhfAAIAhg4IAhg2IAbgwIACgDIAbAAIAACGIAbAAIAAAbIgbAAIAAAcIgbAAgAgCgCIgYAnIgBADIAoAAIAIAAIAAhSIgXAog");
	this.shape_7.setTransform(26.325,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo32, new cjs.Rectangle(0,0,161.2,35.3), null);


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
	this.miTexto = new cjs.Text("Me interesa un flyer animado", "26px 'Arial'", "#FFFFFF");
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
	this.instance = new lib.Símbolo32();
	this.instance.setTransform(593.45,73.75,1.2531,1.2531,0,0,0,80.5,17.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.996)").s().p("AhWBzIAAgBIAAjjIAAgBIA7AAQApAAAiAcQAMAMAEAGQAYAgAAAkIAAABQAAAugkAjQgSASgTAHQgUAIgUAAIg9AAgAg4hTIAACoIAbAAQAoAAAageQAUgZAAgeQAAgegVgYQgMgNgHgDQgGgFgNgEQgLgEgTAAIgYAAg");
	this.shape.setTransform(679.75,122.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,204,255,0.996)").s().p("AAoBzQgBAAgHgPIgjhAIgsAAIAABOIAAABIgdAAIgBgBIAAjjIABgBIBLAAQAjAAAaAcQASAWAAAaQAAAggaAXQgOALgKADIAeA1IASAeIAAABIgkAAgAgvhTIAABZIAvAAQAWAAAQgSQAKgMAAgNIAAgCQAAgVgUgOQgMgKgVAAIgpAAg");
	this.shape_1.setTransform(659.825,122.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,204,255,0.996)").s().p("AgPCFIAAAAIAAgJIAdAAIAAAJIAAAAIgdAAgAgPB8IAAAAIAAgSIgDgBQgSgEgPgMIgLgLQgGgHgCgFIgDgEIAcgNQAJASATAHIACABIAAAfIAAgfQAIACAIAAQAHAAAGgBIAAAeIAAASIAAAAIgdAAgAgPB8IAAAAgAAOBMQgGABgHAAQgIAAgIgCIAAhCQgNgDgIgEQgggOAAgfIAAAAQAAgVAOgRIAHgGIAIgGIAKgFQAFgDAIgBIABAAIAAgSIAdAAIgdAAIAAgMIAAAAIAdAAIAAAAIAAAMIAAARIAAAeIgMgBQgJAAgIADIAAgfIAAAfIgKAFIgFAFQgIAIAAAKQAAAIAFAFIAGADIAMAGIgMgGIgGgDQgFgFAAgIQAAgKAIgIIAFgFIAKgFIAAAyIAAAeIAAgeIAGACIAXAGIgXgGIgGgCIAAgyQAIgDAJAAIAMABIAAA8IALACQAJACAGADQAHADAGAEIAGAGQAIAIADAKQAEAKAAAIIAAACQAAAQgKAQQgCAEgFAFIgIAHIgLAGIgMAFQgFACgHAAIAAgegAAOBMQAJgCAIgFIAHgIQAGgIAAgJQAAgNgNgJIgHgCIgKgDIAAgeIAAAeIgFgBIgYgHIAYAHIAFABIAKADIAHACQANAJAAANQAAAJgGAIIgHAIQgIAFgJACIAAg7IAAA7IAAAAgAAOBMIAAAAgAAOARIAAAAgAAjg9QgJgJgMgDIAAgeIAEAAQAQAEAPAKQAEACAFAGQAGAHABACIADAEIgbAPIgGgIgAgPhHIAAAAgAAOhJIAAAAg");
	this.shape_2.setTransform(640.325,122.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,204,255,0.996)").s().p("AhgBsQgjgwAAg8QAAg/AogyQAogsAzAAIAAAAQA4AAAqAzQAiAvAAA8QAABAgnAxQgpAsg0AAQg2AAgqgygAhEhJQgUAiAAAoQAAAzAgAmQAaAaAeAAQApAAAdgrQAUghAAgoQAAg4gmgmQgYgVgbAAIgBAAQgnAAgdAqg");
	this.shape_3.setTransform(604.825,118.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,204,255,0.996)").s().p("AhgBsQgjgwAAg8QAAg/AogyQAogsAzAAIAAAAQA4AAAqAzQAiAvAAA8QAABAgnAxQgpAsg0AAQg2AAgqgygAhEhJQgUAiAAAoQAAAzAgAmQAaAaAeAAQApAAAdgrQAUghAAgoQAAg4gmgmQgYgVgbAAIgBAAQgnAAgdAqg");
	this.shape_4.setTransform(573.825,118.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,204,255,0.996)").s().p("AAACmQgiAAgdgVQgGgEgIgHIgKgMQgHgJgDgIQgJgTAAgTIAAgEQAAgWANgXQAEgIAIgKIALgKIAJgGIgKgMQgSgXAAgbQAAggAXgaIALgKIANgIQAUgLAWAAQAhAAAaAVIAMAMQANAQAEAUIABAQIAAADQAAAWgMAWIgJAMIgGAFIANALIALAKQAFAGAFAJQALAVAAAYQAAAjgYAdQgGAHgGAEIgLAJQgcAQggABIAAAAgAgrAXIgJAJQgMAPABASQAAAXASASIAMAIQAQAJARAAQAaAAATgRQAJgIABgDQAJgOAAgPIAAgCQABgRgMgPQgHgIgEgDQgUgOgWAAQgYAAgTAQgAghhuQgOANABATQgBARAOANQAOANATAAQAUAAAPgNQAMgOAAgQQAAgTgNgMQgIgHgIgEQgJgCgIAAIgBAAQgSAAgPAMg");
	this.shape_5.setTransform(545.45,119.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,204,255,0.996)").s().p("AggArQAcgaAAgUQgKgEgFgJQgDgGAAgHQAAgNAMgKQAHgEAIgBQAOAAAJANQAFAIAAAMQAAAignAkQgMAKgDABIgLgOg");
	this.shape_6.setTransform(525.05,133.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,204,255,0.996)").s().p("ABiCfIjAAAIAAAAIAAgoIBEhLIArgvIAggkQAEgJAAgKIAAgBQAAgSgKgPQgCgFgFgFQgGgFgFgCQgKgHgPAAIgBAAQgnAAgMAlQgEANAAAIIgqAAIAAgBQAAgOAGgUQAEgMAGgIQAOgaAbgLQASgIAXAAQAgAAAXARIANALIAOASQAOAZAAAcQAAAagNAUIhFBLIgxA2IAAABIAsgBIBZAAIABABIAAAqg");
	this.shape_7.setTransform(507.075,118.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(94,0,147,0.996)").s().p("AgKBuQgFgFAAgGIAAgBQAAgGAFgFQAFgEAFAAIAAAAQAHAAAFAFQAEAFAAAFIAAABQAAAHgGAFQgFADgFAAQgFAAgFgEgAgKA/IgDiwIAAAAIAbAAIgDCwIgVAAg");
	this.shape_8.setTransform(202.425,177.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(94,0,147,0.996)").s().p("AgpBsIAAAAIAehGIg+iRIAYAAIAHARIAqBkIASgpIAhhMIAXAAIhSDBIgJAWIgYAAg");
	this.shape_9.setTransform(188.725,185.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA4QgXgZAAgeIAAgBQAAgfAXgYQAWgTAZgBIADAAQAYAAAWATQAYAYAAAgQAAAigaAYQgVARgZAAQgaAAgWgTgAgjglQgOARAAAUIAAABQAAAWAQAQQAPAPASAAQAXgBARgVQAKgPAAgRQAAgXgRgRQgPgMgRAAIgCAAQgSAAgQAPg");
	this.shape_10.setTransform(172.125,181.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(94,0,147,0.996)").s().p("AArByIAAAAIAAhdQAAgZgdgHIgMAAIgFAAQgaAAgKARQgDAHAAAJIAABcIgBAAIgUAAIgBAAIAAjjIABAAIAUAAIABAAIAABhQASgRAYAAQAuAAAPAgQAEAJAAAMIAABeIgBAAIgVAAg");
	this.shape_11.setTransform(154.75,177.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(94,0,147,0.996)").s().p("AAABMQgeAAgXgZQgTgXAAgbIAAgBQAAgdAVgXQAWgXAeAAQAfAAASAaIABABIAAgZIAAAAIAVAAIABAAIAACTIgBAAIgVAAIAAAAIAAgYQgRAagiAAgAgtgVQgFALAAAKIAAAAQAAAaAVARQANALAQAAQAhAAANghQADgKAAgKIAAgCQAAgOgIgPQgPgXgYAAQggAAgPAgg");
	this.shape_12.setTransform(128.275,181.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(94,0,147,0.996)").s().p("AARByQgJAAgIgFQgMgGgFgNQgDgIAAgKIAAhTIgYAAIgBAAIAAgWIABAAIAYAAIAAhQIAVAAIAABQIAoAAIAAAWIAAAAIgoAAIAABVQAAAGADAGQAEAEAFACIAFAAIAAAAQAGAAALgEIACgBIAJAUIgJAEQgLADgHAAIgCAAg");
	this.shape_13.setTransform(113.975,177.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(94,0,147,0.996)").s().p("AAKByIgUAAIAAiTIAUAAIABAAIAACTgAAAhSQgHAAgEgGQgEgFAAgEIAAgBQAAgGAGgFQAEgEAFAAIAAAAQAGAAAFAFQAFAFAAAFIAAAAQAAAHgGAFQgFAEgFAAIAAAAg");
	this.shape_14.setTransform(105.25,177.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(94,0,147,0.996)").s().p("AgqA4QgXgZAAgeIAAgBQAAgfAXgYQAWgTAYgBIAEAAQAXABAVAQQAKALADAFIgSAMQgJgPgSgFQgGgCgHAAIgDAAQgRAAgQAPQgOARAAAUIAAABQAAAWARARQAPAOARAAQAXAAAQgVIACgDIATAMQgOAVgZAJQgLADgKAAQgaAAgWgTg");
	this.shape_15.setTransform(93.975,181.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(94,0,147,0.996)").s().p("AAKByIgUAAIAAiTIAUAAIABAAIAACTgAAAhSQgHAAgEgGQgEgFAAgEIAAgBQAAgGAGgFQAEgEAFAAIAAAAQAGAAAFAFQAFAFAAAFIAAAAQAAAHgGAFQgFAEgFAAIAAAAg");
	this.shape_16.setTransform(82.3,177.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(94,0,147,0.996)").s().p("AAKByIgUAAIAAjjIAUAAIABAAIAADjg");
	this.shape_17.setTransform(75.2,177.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA4QgXgZAAgeIAAgBQAAgfAXgYQAWgTAZgBIADAAQAYAAAWATQAYAYAAAgQAAAigaAYQgVARgZAAQgaAAgWgTgAgjglQgOARAAAUIAAABQAAAWAQAQQAPAPASAAQAXgBARgVQAKgPAAgRQAAgXgRgRQgPgMgRAAIgCAAQgSAAgQAPg");
	this.shape_18.setTransform(63.075,181.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(94,0,147,0.996)").s().p("AAAB1QgPAAgQgHIgLgHQgJgHgHgJIgIgOIgDgGIAUgIQADAHAFAHIAHAIQAGAGAFACQAMAHALAAIABAAQAPAAAOgJIAHgGQAGgIACgJQADgHAAgGIAAgBQAAgQgLgMIgJgGIgHgDIgQgEQgZgHgOgGQgegQAAgfIAAgCQAAgTAMgRIAHgJQAFgFAEgCQAHgFAIgDQAMgDAKAAIACAAQAQAAAQAIIALAHIAHAHIAIALIADAGIgTAJQgCgEgHgHQgOgPgTAAIgBAAQgSAAgNALQgFAFgBADQgHAKAAANQAAAOAIAHQAGAFAIAEQAOAHAeAHIANAFQAHADAHAGIAHAHIAEAHQAIAOAAAPIAAABIAAAAIAAABIAAAAQAAARgJAQQgLAUgWAJQgOAEgMAAIgCAAg");
	this.shape_19.setTransform(46.325,177.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(94,0,147,0.996)").s().p("AgNByIADixIAVAAIADCxIgbAAgAgLhYQgEgEAAgFIAAgBQAAgHAGgFQAEgDAFAAQAGAAAFAEQAFAFAAAGIAAABQAAAGgGAFQgEAEgGAAQgGAAgFgGg");
	this.shape_20.setTransform(32.525,177.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(94,0,147,0.996)").s().p("AgKALQgEgFAAgGIAAAAQAAgFAEgFQAFgEAFgBIAAAAQAHABAFAEQAEAFgBAFIAAAAQAAAHgFAFQgFADgFABQgGgBgEgEg");
	this.shape_21.setTransform(253,150);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA3QgXgXAAggIAAAAQAAgfAXgYQAWgTAZAAIADAAQAYAAAWASQAYAYAAAgQAAAhgaAZQgVARgZABQgaAAgWgVgAgjglQgOARAAAUIAAAAQAAAXAQARQAPAOASgBQAXABARgWQAKgQAAgQQAAgXgRgRQgPgNgRAAIgCAAQgSABgQAPg");
	this.shape_22.setTransform(240.425,144.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(94,0,147,0.996)").s().p("AAABzQgeAAgXgZQgTgWAAgcIAAgBQAAgeAWgWQAWgWAdgBQAfABASAZIABABIAAAAIAAhpIAVAAIABAAIAADjIgBABIgVAAIAAgBIAAgYIAAAAQgRAagiAAgAgtARQgFALAAALIAAABQAAAaAVAQQANALAQAAQAhAAANghQAEgKAAgKIAAgDQAAgOgJgPQgPgVgYAAQgggBgPAfg");
	this.shape_23.setTransform(222.175,140.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(94,0,147,0.996)").s().p("AAABMQgeAAgXgZQgTgXAAgbIAAgBQAAgdAVgXQAWgXAeAAQAfAAASAaIABABIAAgZIAAAAIAVAAIABAAIAACTIgBAAIgVAAIAAAAIAAgYQgRAagiAAgAgtgVQgFALAAAKIAAAAQAAAaAVARQANALAQAAQAhAAANghQADgKAAgKIAAgCQAAgOgIgPQgPgXgYAAQggAAgPAgg");
	this.shape_24.setTransform(203.775,144.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(94,0,147,0.996)").s().p("AARByQgJAAgIgFQgMgGgFgNQgDgIAAgKIAAhTIgYAAIgBAAIAAgWIABAAIAYAAIAAhQIAVAAIAABQIAoAAIAAAWIAAAAIgoAAIAABVQAAAGADAGQAEAEAFACIAFAAIAAAAQAGAAALgEIACgBIAJAUIgJAEQgLADgHAAIgCAAg");
	this.shape_25.setTransform(189.475,140.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(94,0,147,0.996)").s().p("AALByIgVAAIAAiTIAVAAIAAAAIAACTgAAAhSQgHAAgFgGQgDgFAAgEIAAgBQAAgGAGgFQAEgEAFAAIABAAQAFAAAFAFQAEAFABAFIAAAAQAAAHgGAFQgFAEgEAAIgBAAg");
	this.shape_26.setTransform(180.75,140.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(94,0,147,0.996)").s().p("ABhBKIAAAAIAAheQAAgSgTgKQgJgDgMAAIgGAAQgdAAgJAUQgCAFAAAJIAABbIgBAAIgUAAIAAAAIAAhcQAAgYgYgHQgFgCgQAAQgUAAgJAIQgMAHAAATIAABbIAAAAIgVAAIgBAAIAAiRIABAAIAVAAIAAAAIAAAPQARgRAZAAIADAAQAjAAAQAVQARgVAiAAIAFAAQAqAAAQAeQAFALAAAMIAABeIgBAAIgVAAg");
	this.shape_27.setTransform(162.925,144.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(94,0,147,0.996)").s().p("AALByIgVAAIAAiTIAVAAIAAAAIAACTgAAAhSQgGAAgGgGQgCgFAAgEIAAgBQAAgGAEgFQAFgEAFAAIABAAQAGAAAFAFQADAFAAAFIAAAAQABAHgGAFQgEAEgFAAIgBAAg");
	this.shape_28.setTransform(145,140.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(94,0,147,0.996)").s().p("AALByIgVAAIAAjjIAVAAIAAAAIAADjg");
	this.shape_29.setTransform(137.9,140.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA3QgXgXAAggIAAAAQAAgfAXgYQAWgTAZAAIADAAQAYAAAWASQAYAYAAAgQAAAhgaAZQgVARgZABQgaAAgWgVgAgjglQgOARAAAUIAAAAQAAAXAQARQAPAOASgBQAXABARgWQAKgQAAgQQAAgXgRgRQgPgNgRAAIgCAAQgSABgQAPg");
	this.shape_30.setTransform(117.825,144.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(94,0,147,0.996)").s().p("AhHBtIgBgBIAAjUIABAAIAVAAIAAAAIAAAXQARgbAhAAIAAABIABgBQAbAAAWAUQALAMAEALQAIAQAAAPIAAAEQAAAdgWAWQgWAWgdAAQgfAAgSgZIgBgBIAABbIAAABIgVAAgAgtg1QgEAKAAALIAAACQAAATAOAQQAOAQAUAAQAfAAAPgcQAGgMAAgMIAAgCQAAgWgRgRQgOgOgTAAQghAAgNAhg");
	this.shape_31.setTransform(100.475,147.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(94,0,147,0.996)").s().p("ABhBKIAAAAIAAheQAAgSgTgKQgJgDgMAAIgGAAQgdAAgJAUQgCAFAAAJIAABbIgBAAIgUAAIAAAAIAAhcQAAgYgYgHQgFgCgQAAQgUAAgJAIQgMAHAAATIAABbIAAAAIgVAAIgBAAIAAiRIABAAIAVAAIAAAAIAAAPQARgRAZAAIADAAQAjAAAQAVQARgVAiAAIAFAAQAqAAAQAeQAFALAAAMIAABeIgBAAIgVAAg");
	this.shape_32.setTransform(76.625,144.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(94,0,147,0.996)").s().p("Ag3AvQgPgVAAgZIAAgBQAAgfAXgXQAVgVAaAAQAhAAAXAdQAPAWAAAVIAAACIgBAHIh2AAQAAAHAHAOQAJARASAHQAIADAGAAQAVAAAQgTQAGgHABgFIABAAIATAJQgDAJgMAOQgVAVgcAAQgfAAgYgdgAgmgfQgFAHgDAJIBdAAQgHgVgPgJQgMgIgNAAQgWAAgQAWg");
	this.shape_33.setTransform(54.025,144.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(94,0,147,0.996)").s().p("AAKByIgUAAIAAiTIAUAAIABAAIAACTgAAAhSQgHAAgEgGQgEgFAAgEIAAgBQAAgGAGgFQAEgEAFAAIAAAAQAGAAAFAFQAFAFAAAFIAAAAQAAAHgGAFQgFAEgFAAIAAAAg");
	this.shape_34.setTransform(42.25,140.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(94,0,147,0.996)").s().p("AARByQgJAAgIgFQgMgGgFgNQgDgIAAgKIAAhTIgYAAIgBAAIAAgWIABAAIAYAAIAAhQIAVAAIAABQIAoAAIAAAWIAAAAIgoAAIAABVQAAAGADAGQAEAEAFACIAFAAIAAAAQAGAAALgEIACgBIAJAUIgJAEQgLADgHAAIgCAAg");
	this.shape_35.setTransform(33.025,140.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(94,0,147,0.996)").s().p("AgsBLIgBgBIAAiQIABgBIAVAAIAAABIAAAMQAHgJAOgEQAJgDAKAAQAQAAANAIIgFAXQgOgIgMAAQgZAAgLAYQgCAGAAAGIAABZIAAABIgVAAg");
	this.shape_36.setTransform(225.225,106.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA4QgXgZAAgeIAAgBQAAgfAXgXQAWgVAZAAIADAAQAYABAWASQAYAYAAAgQAAAigaAYQgVARgZAAQgaAAgWgTgAgjgkQgOAQAAAUIAAABQAAAWAQAQQAPAPASAAQAXgBARgVQAKgQAAgQQAAgXgRgRQgPgMgRAAIgCAAQgSgBgQARg");
	this.shape_37.setTransform(209.625,106.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(94,0,147,0.996)").s().p("AhHBtIgBgBIAAjUIABAAIAVAAIAAAAIAAAXQARgbAhAAIAAABIABgBQAbAAAWAUQALAMAEALQAIAQAAAPIAAAEQAAAdgWAWQgWAWgdAAQgfAAgSgZIgBgBIAABbIAAABIgVAAgAgtg1QgEAKAAALIAAACQAAATAOAQQAOAQAUAAQAfAAAPgcQAGgMAAgMIAAgCQAAgWgRgRQgOgOgTAAQghAAgNAhg");
	this.shape_38.setTransform(192.275,109.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(94,0,147,0.996)").s().p("AgwA4QgXgZAAgeIAAgBQAAgfAXgXQAWgVAZAAIADAAQAYABAWASQAYAYAAAgQAAAigaAYQgVARgZAAQgaAAgWgTgAgjgkQgOAQAAAUIAAABQAAAWAQAQQAPAPASAAQAXgBARgVQAKgQAAgQQAAgXgRgRQgPgMgRAAIgCAAQgSgBgQARg");
	this.shape_39.setTransform(166.025,106.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(94,0,147,0.996)").s().p("AARByQgJAAgIgFQgMgGgFgNQgDgIAAgKIAAhTIgYAAIgBAAIAAgWIABAAIAYAAIAAhQIAVAAIAABQIAoAAIAAAWIAAAAIgoAAIAABVQAAAGADAGQAEAEAFACIAFAAIAAAAQAGAAALgEIACgBIAJAUIgJAEQgLADgHAAIgCAAg");
	this.shape_40.setTransform(151.825,102.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(94,0,147,0.996)").s().p("AArBKIAAAAIAAhcQAAgYgYgHQgFgCgPAAQgUAAgKAIQgLAHAAATIAABbIgBAAIgUAAIgBAAIAAiRIABAAIAUAAIABAAIAAAPQARgRAZAAIABAAQAsAAAQAhQAEAKAAAMIAABcIgBAAIgVAAg");
	this.shape_41.setTransform(138,106.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(94,0,147,0.996)").s().p("Ag3AvQgPgVAAgZIAAgBQAAgfAXgXQAVgVAaAAQAhAAAXAdQAPAWAAAVIAAACIgBAHIh2AAQAAAHAHAOQAJARASAHQAIADAGAAQAVAAAQgTQAGgHABgFIABAAIATAJQgDAJgMAOQgVAVgcAAQgfAAgYgdgAgmgfQgFAHgDAJIBdAAQgHgVgPgJQgMgIgNAAQgWAAgQAWg");
	this.shape_42.setTransform(120.775,106.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(94,0,147,0.996)").s().p("AgrA+QgVgQAAgZIAAheIABAAIAUAAIABAAIAABdQAAAYAbAHQAFABALAAQAQAAAIgEQAMgGAEgKQACgHAAgHIAAhbIABAAIAVAAIAAAAIAACRIAAAAIgVAAIgBAAIAAgPQgRARgaAAQgbAAgQgMg");
	this.shape_43.setTransform(103.8,106.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(94,0,147,0.996)").s().p("AgqA4QgXgZAAgeIAAgBQAAgfAXgXQAWgVAYAAIAEAAQAXAAAVARQAKALADAFIgSAMQgJgPgSgGQgGgBgHAAIgDAAQgRgBgQARQgOAQAAAUIAAABQAAAWARARQAPAOARAAQAXAAAQgVIACgDIATAMQgOAVgZAJQgLADgKAAQgaAAgWgTg");
	this.shape_44.setTransform(87.375,106.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(94,0,147,0.996)").s().p("AAABMQgRAAgQgIQgPgJgJgPIAJgFIAKgFQAIAMANAFQAJADAJAAQANAAALgGIAGgEQAFgGAAgHQAAgKgNgHIgJgCQgYgFgOgFQgdgKAAgXIAAgBQAAgOALgMIAHgGQAHgFAJgDQAKgDAKAAIACAAQAQAAAOAIQAFACAFAFIAIAHIACAEIgTALQgDgEgFgEQgKgHgPAAQgPAAgKAIQgHAGAAAIQAAAGAEACIAFADQAHAEAQAEIATAEIANAEIAKAFIAGAFQAJALAAANIAAABQAAAOgKANIgHAGIgJAFQgPAHgQAAIgBAAg");
	this.shape_45.setTransform(72.225,106.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(94,0,147,0.996)").s().p("Ag3AvQgPgVAAgZIAAgBQAAgfAXgXQAVgVAaAAQAhAAAXAdQAPAWAAAVIAAACIgBAHIh2AAQAAAHAHAOQAJARASAHQAIADAGAAQAVAAAQgTQAGgHABgFIABAAIATAJQgDAJgMAOQgVAVgcAAQgfAAgYgdgAgmgfQgFAHgDAJIBdAAQgHgVgPgJQgMgIgNAAQgWAAgQAWg");
	this.shape_46.setTransform(56.875,106.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(94,0,147,0.996)").s().p("AhSByIAAAAIAAjjIAAAAIA3AAQAnAAAgAbQAOANADAGQAWAfAAAkQAAAtgfAiQghAjgxAAIg0AAgAg8BcIAeAAQAwAAAcgpQAPgZAAgaQAAgngegeQgKgIgIgEQgTgLgVAAIghAAIAAC4g");
	this.shape_47.setTransform(38.975,102.375);

	this.instance_1 = new lib.Símbolo8_1();
	this.instance_1.setTransform(123.65,224.8,0.2142,0.2142,0,0,0,410.4,131.7);

	this.instance_2 = new lib.Símbolo6();
	this.instance_2.setTransform(325.05,190,0.6266,0.6266,0,0,0,128.3,128.3);

	this.instance_3 = new lib.Símbolo7();
	this.instance_3.setTransform(653.15,223.8,1,1,0,0,0,226.6,77.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Capa_2
	this.instance_4 = new lib.Mapadebits4();
	this.instance_4.setTransform(635,-18,0.6854,0.6854);

	this.instance_5 = new lib.Símbolo12();
	this.instance_5.setTransform(204,163.35,1,1,0,0,0,196,97.5);
	this.instance_5.alpha = 0.7695;

	this.instance_6 = new lib.Mapadebits5();
	this.instance_6.setTransform(91,-81);

	this.instance_7 = new lib.Mapadebits6();
	this.instance_7.setTransform(316,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(533,54,537.2,348.8);
// library properties:
lib.properties = {
	id: '35DF4F6CAE77C24386D73F952051B528',
	width: 1050,
	height: 270,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/goto_atlas_P_1.png?1749228280507", id:"goto_atlas_P_1"}
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