(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"web_atlas_P_1", frames: [[0,0,422,750],[424,0,562,500],[0,752,453,155],[424,502,234,248]]},
		{name:"web_atlas_NP_1", frames: [[0,0,1200,1200]]}
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



(lib.cel_00000 = function() {
	this.initialize(ss["web_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.initialize(ss["web_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo_00158 = function() {
	this.initialize(ss["web_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits1 = function() {
	this.initialize(ss["web_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.initialize(ss["web_atlas_P_1"]);
	this.gotoAndStop(3);
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

	// Capa_1
	this.instance = new lib.fondo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo14, new cjs.Rectangle(0,0,1200,1200), null);


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

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egs4Ab8MAAAg33MBZwAAAMAAAA33g");
	this.shape.setTransform(287.25,178.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(0,0,574.5,357.6), null);


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
	this.instance = new lib.Mapadebits1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(0,0,453,155), null);


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
		this.stop();
		
		var horasField = parseInt(this.horas.text);
		var minutosField = parseInt(this.minutos.text);
		var segundosField = parseInt(this.segundos.text);
		
		var totalSegundos = (horasField * 3600) + (minutosField * 60) + segundosField;
		
		var countdown = setInterval(function() {
		    if (totalSegundos <= 0) {
		        clearInterval(countdown);
		        alert("¡Tiempo terminado!");
		    } else {
		        totalSegundos--;
		
		        var horas = Math.floor(totalSegundos / 3600);
		        var minutos = Math.floor((totalSegundos % 3600) / 60);
		        var segundos = totalSegundos % 60;
		
		        this.horas.text = (horas < 10) ? "0" + horas : horas.toString();
		        this.minutos.text = (minutos < 10) ? "0" + minutos : minutos.toString();
		        this.segundos.text = (segundos < 10) ? "0" + segundos : segundos.toString();
		    }
		}.bind(this), 1000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9A00EF").s().p("AiJIKIAAkVIETAAIAAEVgAiJj0IAAkVIETAAIAAEVg");
	this.shape.setTransform(556.55,134.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9A00EF").s().p("AiJIKIAAkVIETAAIAAEVgAiJj0IAAkVIETAAIAAEVg");
	this.shape_1.setTransform(264.55,134.15);

	this.segundos = new cjs.Text("59", "bold 96px 'Arial'", "#9A00EF");
	this.segundos.name = "segundos";
	this.segundos.textAlign = "center";
	this.segundos.lineHeight = 109;
	this.segundos.lineWidth = 108;
	this.segundos.parent = this;
	this.segundos.setTransform(703.9,34.45,2.0956,2.0956);

	this.minutos = new cjs.Text("30", "bold 96px 'Arial'", "#9A00EF");
	this.minutos.name = "minutos";
	this.minutos.textAlign = "center";
	this.minutos.lineHeight = 109;
	this.minutos.lineWidth = 108;
	this.minutos.parent = this;
	this.minutos.setTransform(407.5,34.45,2.0956,2.0956);

	this.horas = new cjs.Text("01", "bold 96px 'Arial'", "#9A00EF");
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
	this.instance = new lib.Mapadebits2();
	this.instance.setTransform(14,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(14,16,234,248), null);


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
(lib.web = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.instance = new lib.Símbolo8_1();
	this.instance.setTransform(145.4,1086.05,0.2518,0.2518,0,0,0,410.6,131.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.instance_1 = new lib.Símbolo6();
	this.instance_1.setTransform(140.55,955.6,0.8196,0.8196,0,0,0,128.2,128.3);

	this.instance_2 = new lib.cel_00000();
	this.instance_2.setTransform(-16,28,1.1991,1.1991);

	this.instance_3 = new lib.Símbolo7();
	this.instance_3.setTransform(551.55,1030.2,1,1,0,0,0,226.6,77.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.996)").s().p("AgPByIAAgfIAfAAIAAAfgAgIA5IgJh4IAAgzIAiAAIAAAzIgIB4g");
	this.shape.setTransform(936.05,787.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_1.setTransform(922.575,790.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAjkIAbAAIAADkg");
	this.shape_2.setTransform(910.1,787.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAilIAbAAIAAClgAgNhRIAAghIAbAAIAAAhg");
	this.shape_3.setTransform(903.1,787.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBtQgIgGgDgIQgDgIAAgYIAAhfIgWAAIAAgWIAWAAIAAgpIAagRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACADQABAEADACQAEACAGAAIANgBIADAZQgLACgJAAQgQAAgIgEg");
	this.shape_4.setTransform(895.25,787.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_5.setTransform(882.525,790.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAhAAAWAXQAVAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgWAAQgSAAgNANg");
	this.shape_6.setTransform(865.65,790.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQAAgRgDgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAiAAQAOAAANAGQANAFAGAJQAGAIADAMQACAIgBAUIAABlg");
	this.shape_7.setTransform(839,790.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_8.setTransform(821.175,790.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_9.setTransform(804.825,790.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BxIgEgaQAKACAHAAQAJAAAGgDQAFgDAEgGQACgEAGgRIADgGIg/imIAeAAIAjBgIALAmQAFgTAHgSIAjhhIAcAAIg/CoQgKAbgEALQgIAOgKAGQgJAHgOAAQgIAAgKgEg");
	this.shape_10.setTransform(779.55,793.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgKAaQgKgGgKAAQgKAAgGAGQgIAFgCAKQgFAPAAASIAABWg");
	this.shape_11.setTransform(758.5,790.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_12.setTransform(742.925,790.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAJgTAQgLQAQgLAVAAQAOAAAMAGQALAGAIAKIAAhSIAcAAIAADkIgaAAIAAgVQgQAageAAQgUgBgQgKgAgegRQgMAPAAAfQAAAgANARQANAPASAAQATAAAMgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAQg");
	this.shape_13.setTransform(724.6,787.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgQgNABgVQAAgMAFgKQAFgKAJgGQAKgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgUAAgJAHQgKAHgEASIgcgEQAEgRAJgLQAIgLARgGQAQgGAVAAQAUAAAOAFQANAFAHAIQAFAHADAMQABAHABATIAAAkQAAAnABALQACAKAGAKIgeAAQgEgJgBgMQgQAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgHADQgIADgDAGQgFAGAAAHQAAALAJAIQAIAHARAAQAQAAAMgHQANgHAFgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_14.setTransform(707.3,790.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBjIAKAhIAKgfIAlhlIAdAAIg/Clg");
	this.shape_15.setTransform(690.525,790.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_16.setTransform(673.525,790.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQgBgRgDgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAiAAQAPAAANAGQAMAFAGAJQAHAIACAMQACAIgBAUIAABlg");
	this.shape_17.setTransform(655.75,790.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQABgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQABAIAAAUIAABlg");
	this.shape_18.setTransform(637.95,790.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAilIAbAAIAAClgAgNhRIAAghIAbAAIAAAhg");
	this.shape_19.setTransform(625.55,787.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.996)").s().p("AgQAbQAJgEAEgIQAEgIAAgNIgPAAIAAggIAfAAIAAAgQAAARgHALQgFALgNAGg");
	this.shape_20.setTransform(608.55,799.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_21.setTransform(595.225,790.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAIgTARgLQAQgLAVAAQAOAAAMAGQALAGAIAKIAAhSIAcAAIAADkIgaAAIAAgVQgQAageAAQgUgBgQgKgAgegRQgMAPAAAfQAAAgANARQAOAPARAAQATAAAMgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAQg");
	this.shape_22.setTransform(576.9,787.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAilIAbAAIAAClgAgNhRIAAghIAbAAIAAAhg");
	this.shape_23.setTransform(565.05,787.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB0IAAjkIAaAAIAAAWQAJgNALgGQALgHAQAAQAVAAAQALQAQALAJAUQAIAUAAAYQAAAZgJAUQgJAUgSALQgRALgTAAQgNAAgMgGQgLgGgHgJIAABQgAgghNQgOARABAgQgBAfANAPQAOAPASABQASAAANgQQAOgQAAggQgBgggNgQQgMgPgSAAQgSAAgOAQg");
	this.shape_24.setTransform(553,793.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BoQgPgOgBgUQABgNAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgJgVAAQgUAAgJAHQgJAHgFARIgbgDQADgSAJgLQAIgLARgFQAQgGAUAAQAWAAANAFQANAFAHAHQAFAIADALQACAHgBASIAAAmQAAAnACAKQACALAFAJIgdAAQgFgIgBgMQgPANgOAGQgOAFgRAAQgbAAgOgNgAgGApQgRACgIADQgGADgEAGQgEAGgBAIQAAALAJAHQAIAIARAAQAPAAANgHQANgHAFgNQAFgJAAgTIAAgKQgPAGgeAFgAgOhIIATgsIAlAAIgjAsg");
	this.shape_25.setTransform(534.7,787.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.996)").s().p("AA/ByIgegvQgNgVgKgKQgIgLgFgFQgHgEgIgCIgRgBIgjAAIAABlIgeAAIAAjkIBkAAQAfAAAQAHQAQAGAKAPQAJAQAAATQAAAZgPAQQgRAQggAFQAMAFAGAFQAOANALASIAoA+gAhGgNIBCAAQATAAAMgDQAMgFAGgKQAGgJAAgLQAAgRgLgKQgMgKgaAAIhIAAg");
	this.shape_26.setTransform(515.4,787.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.996)").s().p("AgQByIAAgyIAIh5IARAAIAIB5IAAAygAgPhRIAAghIAfAAIAAAhg");
	this.shape_27.setTransform(497.525,793.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.996)").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape_28.setTransform(783.05,721.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgKAaQgKgGgKAAQgJAAgHAGQgHAFgDAKQgFAPAAASIAABWg");
	this.shape_29.setTransform(774.5,714.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAHAHACAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgGADgFAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_30.setTransform(758.9,714.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_31.setTransform(746.55,711.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBjIAKAhIAKgfIAlhlIAdAAIg/Clg");
	this.shape_32.setTransform(735.025,714.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQABgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQABAIAAAUIAABlg");
	this.shape_33.setTransform(718.05,714.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWAAgpQABgpAVgXQAWgXAhAAQAiAAAVAXQAUAWAAApIAAAHIh6AAQACAbANAPQAOAOAUAAQAPAAAMgIQAKgIAHgSIAdAEQgHAZgTAOQgTAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_34.setTransform(700.2,714.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAhAAAVAXQAWAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgWAAQgSAAgNANg");
	this.shape_35.setTransform(673.5,714.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAIgTARgLQAQgLAVAAQAOAAAMAGQALAGAIAKIAAhSIAcAAIAADlIgaAAIAAgWQgQAZgeAAQgTABgRgLgAgegSQgMAQAAAfQAAAgANARQAOAPARAAQATAAAMgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAPg");
	this.shape_36.setTransform(655.2,711.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAjlIAbAAIAADlg");
	this.shape_37.setTransform(634.35,711.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_38.setTransform(627.35,711.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_39.setTransform(616.275,714.925);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BoQgPgOAAgUQAAgNAGgKQAGgKAJgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgJgVAAQgTAAgKAHQgJAHgFARIgbgDQADgSAJgLQAIgLAQgFQARgGAUAAQAWAAANAFQANAFAGAHQAGAIADALQABAHAAASIAAAmQAAAnADAKQABALAFAJIgdAAQgFgIgBgMQgPANgPAGQgNAFgQAAQgcAAgPgNgAgGApQgRACgIADQgHADgEAGQgDAGAAAIQgBALAJAHQAJAIAQAAQAPAAANgHQAMgHAHgNQAEgJAAgTIAAgKQgPAGgeAFgAgPhIIAUgsIAlAAIgiAsg");
	this.shape_40.setTransform(598.8,711.875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.996)").s().p("AgWB1IAAiPIgaAAIAAgXIAaAAIAAgRQAAgRACgIQAEgLALgHQAJgGATAAQALAAAPADIgFAYIgRgBQgMgBgGAGQgEAFAAAPIAAAPIAfAAIAAAXIgfAAIAACPg");
	this.shape_41.setTransform(586.25,711.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgKAaQgKgGgKAAQgKAAgGAGQgIAFgCAKQgFAPAAASIAABWg");
	this.shape_42.setTransform(568.15,714.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAiAAAUAXQAWAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgWAAQgSAAgNANg");
	this.shape_43.setTransform(552.55,714.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB0IAAjkIAaAAIAAAWQAJgNALgGQALgHAQAAQAVABAQAKQARALAIAUQAIAUAAAYQAAAZgJAUQgJAUgRALQgSALgTAAQgNAAgLgGQgLgGgIgJIAABQgAgghNQgNARAAAgQAAAfAMAPQAOAPASABQARAAAOgQQAOgQAAggQAAgggOgQQgNgPgRAAQgSAAgOAQg");
	this.shape_44.setTransform(535.25,717.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.996)").s().p("AglBvQgNgFgGgJQgGgIgDgNQgBgIAAgSIAAhmIAcAAIAABbQAAAWACAIQACALAJAHQAIAGANAAQAMAAALgHQALgGAFgLQAEgMAAgVIAAhYIAcAAIAAClIgZAAIAAgYQgTAcghAAQgOAAgNgGgAgQhIIAUgsIAlAAIgjAsg");
	this.shape_45.setTransform(516.925,711.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_46.setTransform(500.025,714.925);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BxIgEgaQAKACAHAAQAJAAAGgDQAGgDADgGQADgEAGgRIACgGIg/imIAeAAIAjBgIALAmQAFgTAHgSIAjhhIAcAAIg/CoQgKAbgFALQgHAOgKAGQgKAHgNAAQgIAAgKgEg");
	this.shape_47.setTransform(1017.9,680.525);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAjjIAbAAIAADjg");
	this.shape_48.setTransform(997.25,674);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQAAgMAGgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgOAFQgOAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgGADgFAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_49.setTransform(984.8,677.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQgBgRgDgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAiAAQAPAAANAGQAMAFAGAJQAHAIACAMQABAIAAAUIAABlg");
	this.shape_50.setTransform(967.05,676.975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_51.setTransform(954.65,674);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.996)").s().p("AgxBpQgSgNABgbIAbAEQABAMAJAHQAKAHASAAQASAAALgHQALgJADgOQACgIAAgcQgSAWgbAAQghAAgUgYQgSgaAAghQAAgXAIgVQAJgUARgLQAPgLAWABQAdgBATAYIAAgUIAaAAIAACOQAAAogHAPQgJAQgQAKQgSAJgYAAQgeAAgSgNgAgehPQgOAPAAAeQAAAgAOAOQAMAPATAAQATAAANgOQAOgOAAggQAAgfgOgPQgNgQgUAAQgRAAgNAQg");
	this.shape_52.setTransform(941.65,680.35);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_53.setTransform(929.75,674);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgJAaQgLgGgLAAQgJAAgGAGQgIAFgDAKQgEAPAAASIAABWg");
	this.shape_54.setTransform(922.15,676.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_55.setTransform(906.575,677.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.996)").s().p("AgQAbQAJgEAEgIQADgIABgNIgPAAIAAggIAfAAIAAAgQAAARgHALQgFALgNAGg");
	this.shape_56.setTransform(884.3,686.125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQABAHAAATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgGADgEAGQgEAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_57.setTransform(870.95,677.175);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgLgJgTQgJgUAAgZQAAgZAIgTQAIgVARgLQAQgKAVAAQAOAAAMAGQAMAHAHAKIAAhSIAcAAIAADjIgaAAIAAgUQgQAZgeAAQgTAAgRgMgAgegRQgMAOAAAhQAAAfANAQQAOAQARAAQASAAANgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAQg");
	this.shape_58.setTransform(852.65,674.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_59.setTransform(840.8,674);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBsQgIgFgDgHQgEgJAAgZIAAheIgVAAIAAgWIAVAAIAAgpIAbgRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACADQABAEADACQAEACAGAAIANgBIADAZQgMACgIAAQgQAAgIgFg");
	this.shape_60.setTransform(832.95,674.35);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgKAaQgKgGgKAAQgKAAgGAGQgIAFgDAKQgEAPAAASIAABWg");
	this.shape_61.setTransform(824.3,676.975);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWAAgpQgBgpAWgXQAWgXAhAAQAiAAAUAXQAWAWAAApIAAAHIh7AAQABAbAPAPQANAOAUAAQAQAAAKgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_62.setTransform(808.7,677.175);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBiIAKAiIAKggIAlhkIAdAAIg/Clg");
	this.shape_63.setTransform(791.925,677.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_64.setTransform(780.35,674);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgLgJgTQgJgUAAgZQAAgZAIgTQAJgVAQgLQAQgKAVAAQAOAAAMAGQAMAHAHAKIAAhSIAcAAIAADjIgaAAIAAgUQgQAZgeAAQgTAAgRgMgAgdgRQgNAOAAAhQAAAfAOAQQAMAQASAAQASAAAOgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAQg");
	this.shape_65.setTransform(767.3,674.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.996)").s().p("AgQAbQAJgEAEgIQAEgIAAgNIgPAAIAAggIAfAAIAAAgQAAARgGALQgHALgMAGg");
	this.shape_66.setTransform(745.55,686.125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgOgNAAgVQgBgMAGgKQAFgKAKgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgTAAgKAHQgKAHgEASIgcgEQAEgRAJgLQAJgLAPgGQARgGAUAAQAWAAANAFQANAFAGAIQAHAHACAMQACAHAAATIAAAkQAAAnACALQABAKAGAKIgeAAQgFgJAAgMQgQAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgHADQgHADgFAGQgDAGAAAHQAAALAIAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_67.setTransform(732.2,677.175);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_68.setTransform(715.875,677.175);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_69.setTransform(703.85,674);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQAAgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQACAIAAAUIAABlg");
	this.shape_70.setTransform(691.35,676.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.996)").s().p("AglBvQgNgFgGgJQgGgIgDgNQgBgIAAgSIAAhmIAcAAIAABbQAAAWACAIQACALAJAHQAIAGANAAQAMAAALgHQALgGAFgLQAEgMAAgVIAAhYIAcAAIAAClIgZAAIAAgYQgTAcghAAQgOAAgNgGgAgQhIIAUgsIAlAAIgjAsg");
	this.shape_71.setTransform(673.475,674.125);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgOgNAAgVQgBgMAGgKQAFgKAKgGQAJgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgUAAgJAHQgJAHgFASIgcgEQAEgRAJgLQAJgLAPgGQARgGAVAAQAUAAAOAFQANAFAHAIQAGAHACAMQACAHAAATIAAAkQAAAnACALQABAKAGAKIgeAAQgEgJgBgMQgQAOgPAFQgNAGgRAAQgbAAgPgOgAgGAKQgRADgHADQgHADgFAGQgEAGAAAHQABALAIAIQAJAHAQAAQAPAAANgHQANgHAGgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_72.setTransform(646.8,677.175);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_73.setTransform(634.45,674);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_74.setTransform(623.375,677.175);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQAAgRgEgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAQAAANAGQAMAFAGAJQAHAIACAMQABAIABAUIAABlg");
	this.shape_75.setTransform(605.95,676.975);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAiAAAUAXQAWAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_76.setTransform(588.1,677.175);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_77.setTransform(575.75,674);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgKAaQgKgGgKAAQgKAAgGAGQgIAFgCAKQgFAPAAASIAABWg");
	this.shape_78.setTransform(568.15,676.975);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAiAAAUAXQAWAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgWAAQgSAAgNANg");
	this.shape_79.setTransform(552.55,677.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB1IAAjlIAaAAIAAAWQAJgNALgHQALgFAQAAQAVgBAQALQARALAIAUQAIAUAAAYQAAAagJASQgJAVgRALQgSALgTAAQgNAAgLgGQgLgGgIgJIAABRgAgghNQgNARAAAgQAAAfAMAQQAOAOASAAQARAAAOgPQAOgQAAghQAAgfgOgQQgNgQgRAAQgSAAgOARg");
	this.shape_80.setTransform(535.25,680.15);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.996)").s().p("AArBTIgigzIgJgPIgqBCIgiAAIA8hVIg4hQIAjAAIAZAnIAMATIAMgSIAcgoIAiAAIg6BOIA9BXg");
	this.shape_81.setTransform(517.95,677.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWAAgpQAAgpAXgXQAVgXAhAAQAiAAAVAXQAUAWAAApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAQAAALgIQAKgIAHgSIAdAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_82.setTransform(500.95,677.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgQgNABgVQAAgMAFgKQAFgKAJgGQAKgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgUAAgJAHQgKAHgEASIgcgEQAEgRAJgLQAIgLARgGQAQgGAVAAQAUAAAOAFQANAFAHAIQAFAHADAMQABAHABATIAAAkQAAAnABALQACAKAGAKIgeAAQgEgJgCgMQgPAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgHADQgIADgDAGQgFAGAAAHQAAALAJAIQAIAHARAAQAQAAAMgHQANgHAFgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_83.setTransform(897.65,639.425);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQAAgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQACAIAAAUIAABlg");
	this.shape_84.setTransform(879.9,639.225);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.996)").s().p("AglBPQgNgFgGgJQgGgJgDgMQgBgIAAgSIAAhmIAcAAIAABbQAAAWACAIQACALAJAGQAIAHANAAQAMgBALgGQALgHAFgLQAEgLAAgVIAAhYIAcAAIAAClIgZAAIAAgZQgTAdghAAQgOAAgNgGg");
	this.shape_85.setTransform(862.025,639.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB0IAAjkIAaAAIAAAVQAJgMALgHQALgFAQgBQAVAAAQAMQARAKAIAUQAIAUAAAYQAAAZgJAUQgJAUgRALQgSALgTAAQgNAAgLgGQgLgGgIgJIAABQgAgghNQgNARAAAgQAAAfANAPQANAPASABQARAAAOgQQAOgQAAggQAAgggOgQQgNgPgRAAQgSAAgOAQg");
	this.shape_86.setTransform(835.85,642.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB0IAAjkIAaAAIAAAVQAJgMALgHQALgFAQgBQAVAAAQAMQAQAKAJAUQAIAUAAAYQAAAZgJAUQgJAUgRALQgSALgTAAQgNAAgMgGQgLgGgHgJIAABQgAgghNQgOARABAgQgBAfANAPQAOAPASABQASAAANgQQAOgQAAggQgBgggNgQQgMgPgSAAQgSAAgOAQg");
	this.shape_87.setTransform(818.05,642.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.996)").s().p("ABJBzIgbhGIhfAAIgZBGIggAAIBYjlIAfAAIBeDlgAgPgtIgZBBIBNAAIgYg+QgLgdgFgSQgEAWgIAWg");
	this.shape_88.setTransform(798.075,636.25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_89.setTransform(779.275,639.425);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBtQgIgFgDgJQgDgHAAgZIAAhfIgWAAIAAgWIAWAAIAAgpIAagRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACAEQABADADACQAEACAGAAIANgBIADAYQgMADgJAAQgPAAgIgEg");
	this.shape_90.setTransform(767.1,636.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgQgNAAgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgGADgFAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_91.setTransform(753.5,639.425);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBzIAAhpQAAgVgJgJQgJgKgRAAQgLAAgLAGQgLAHgFALQgFAKAAAUIAABbIgcAAIAAjlIAcAAIAABSQAUgWAdAAQATAAANAHQAOAHAGANQAGANAAAYIAABpg");
	this.shape_92.setTransform(735.775,636.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.996)").s().p("AA3BzIgwiuIgHgbIgGAbIgxCuIgfAAIg8jlIAfAAIAjCWIAJAuIALgqIAriaIAkAAIAhBzQAMArAFAmIAMgxIAkiTIAeAAIg/Dlg");
	this.shape_93.setTransform(711.825,636.25);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgJAaQgLgGgLAAQgIAAgHAGQgHAFgEAKQgEAPAAASIAABWg");
	this.shape_94.setTransform(683.75,639.225);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_95.setTransform(668.175,639.425);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB0IAAjkIAaAAIAAAVQAJgMALgHQAMgFAPgBQAVAAARAMQAPAKAJAUQAIAUAAAYQAAAZgJAUQgJAUgSALQgRALgTAAQgNAAgMgGQgLgGgHgJIAABQgAgfhNQgOARAAAgQgBAfANAPQANAPATABQASAAANgQQAOgQAAggQgBgggMgQQgNgPgSAAQgSAAgNAQg");
	this.shape_96.setTransform(650.85,642.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAiAAAUAXQAWAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_97.setTransform(623.65,639.425);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.996)").s().p("AgDBtQgJgFgDgJQgEgHAAgZIAAhfIgUAAIAAgWIAUAAIAAgpIAbgRIAAA6IAcAAIAAAWIgcAAIAABgQAAAMACAEQABADAEACQADACAGAAIAMgBIAFAYQgNADgIAAQgQAAgHgEg");
	this.shape_98.setTransform(610.55,636.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgKAaQgKgGgKAAQgKAAgGAGQgIAFgCAKQgFAPAAASIAABWg");
	this.shape_99.setTransform(601.9,639.225);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgPgNAAgVQAAgMAGgKQAFgKAKgGQAJgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgTAAgKAHQgKAHgEASIgcgEQAEgRAJgLQAJgLAPgGQARgGAUAAQAWAAANAFQANAFAGAIQAHAHACAMQABAHAAATIAAAkQAAAnADALQABAKAFAKIgdAAQgFgJAAgMQgQAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgIADQgHADgEAGQgDAGAAAHQAAALAIAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_100.setTransform(586.3,639.425);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB0IAAjkIAaAAIAAAVQAJgMALgHQALgFAQgBQAVAAAQAMQARAKAIAUQAIAUAAAYQAAAZgJAUQgJAUgRALQgSALgTAAQgNAAgLgGQgLgGgIgJIAABQgAgghNQgNARAAAgQAAAfAMAPQAOAPASABQARAAAOgQQAOgQAAggQAAgggOgQQgNgPgRAAQgSAAgOAQg");
	this.shape_101.setTransform(569,642.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.996)").s().p("ABUBVIAAhoQAAgRgCgHQgDgHgHgFQgHgFgKAAQgRAAgMAMQgMAMAAAZIAABgIgbAAIAAhrQAAgTgHgJQgHgKgPAAQgMAAgKAHQgKAGgEAMQgGAMAAAXIAABVIgcAAIAAilIAaAAIAAAXQAHgMANgHQAOgIAQAAQASAAANAIQAKAHAFAOQAUgdAfAAQAZAAANAOQANANAAAdIAABxg");
	this.shape_102.setTransform(546.4,639.225);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_103.setTransform(524.075,639.425);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.996)").s().p("Ag1BnQgXgPgMgcQgMgdAAgfQAAglANgaQAOgbAZgOQAagOAdABQAiAAAYARQAXARAJAgIgeAHQgIgZgPgLQgPgLgXAAQgZAAgSAMQgSANgHAVQgHAWAAAWQAAAcAJAWQAIAWASAKQASAMAUgBQAZAAASgOQASgPAGgdIAeAIQgJAlgZAUQgZAUgkgBQgkABgXgQg");
	this.shape_104.setTransform(503.875,636.25);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.996)").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape_105.setTransform(989.45,608.35);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgQgNABgVQAAgMAFgKQAFgKAJgGQAKgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgUAAgJAHQgKAHgEASIgcgEQAEgRAJgLQAIgLARgGQAQgGAVAAQAUAAAOAFQANAFAHAIQAFAHADAMQABAHABATIAAAkQAAAnABALQACAKAGAKIgeAAQgEgJgCgMQgPAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgHADQgIADgDAGQgFAGAAAHQAAALAJAIQAIAHARAAQAQAAAMgHQANgHAFgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_106.setTransform(975.95,601.675);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgaQAAgYAIgUQAJgUAQgKQAQgLAVAAQAOAAAMAGQAMAGAHALIAAhSIAcAAIAADjIgaAAIAAgUQgQAZgeAAQgUAAgQgMgAgdgRQgNAPAAAfQAAAgAOAQQAMAQASAAQASAAAOgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAQg");
	this.shape_107.setTransform(957.65,598.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_108.setTransform(945.8,598.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBiIAKAiIAKgfIAlhlIAdAAIg/Clg");
	this.shape_109.setTransform(934.275,601.65);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWABgpQAAgpAVgXQAWgXAhAAQAhAAAVAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAPAAAMgIQAKgIAGgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_110.setTransform(908.35,601.675);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgaQAAgYAIgUQAJgUAQgKQARgLAUAAQAOAAAMAGQAMAGAHALIAAhSIAcAAIAADjIgaAAIAAgUQgQAZgeAAQgTAAgRgMgAgdgRQgNAPAAAfQAAAgAOAQQAMAQASAAQASAAAOgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAQg");
	this.shape_111.setTransform(890.05,598.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_112.setTransform(864.725,601.675);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgOgNAAgVQgBgMAGgKQAFgKAKgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgTAAgKAHQgJAHgFASIgcgEQAEgRAJgLQAJgLAPgGQARgGAUAAQAWAAANAFQANAFAGAIQAHAHACAMQACAHAAATIAAAkQAAAnACALQABAKAGAKIgeAAQgFgJAAgMQgQAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgHADQgHADgFAGQgDAGAAAHQAAALAIAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_113.setTransform(847.85,601.675);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQABgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQABAIAAAUIAABlg");
	this.shape_114.setTransform(830.1,601.475);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWAAgpQABgpAVgXQAWgXAhAAQAiAAAVAXQAUAWAAApIAAAHIh6AAQACAbANAPQAOAOAUAAQAPAAAMgIQALgIAGgSIAdAEQgHAZgTAOQgTAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_115.setTransform(812.25,601.675);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAjjIAbAAIAADjg");
	this.shape_116.setTransform(799.8,598.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAjjIAbAAIAADjg");
	this.shape_117.setTransform(792.7,598.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BxIgEgaQAKACAHAAQAJAAAGgDQAFgDAEgGQACgEAHgRIACgGIg/imIAeAAIAjBgIALAmQAFgTAHgSIAjhhIAcAAIg/CoQgKAbgEALQgIAOgKAGQgKAHgNAAQgIAAgKgEg");
	this.shape_118.setTransform(772.45,605.025);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_119.setTransform(747.325,601.675);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgUAAgJAHQgJAHgFASIgbgEQADgRAJgLQAJgLAQgGQAQgGAUAAQAWAAANAFQANAFAHAIQAFAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgIADQgGADgEAGQgEAGgBAHQAAALAJAIQAIAHARAAQAPAAANgHQANgHAFgMQAFgKAAgSIAAgKQgPAGgeAEg");
	this.shape_120.setTransform(730.45,601.675);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.996)").s().p("AgDBsQgJgEgEgJQgCgIAAgZIAAheIgVAAIAAgWIAVAAIAAgpIAagRIAAA6IAcAAIAAAWIgcAAIAABgQAAAMACADQABAEAEACQADACAGAAIAMgBIAFAZQgMACgKAAQgPAAgHgFg");
	this.shape_121.setTransform(717.35,598.85);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_122.setTransform(709.2,598.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQAAgRgDgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAiAAQAPAAANAGQAMAFAGAJQAHAIACAMQACAIgBAUIAABlg");
	this.shape_123.setTransform(696.7,601.475);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_124.setTransform(678.875,601.675);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(255,255,255,0.996)").s().p("AgtBcIAAAUIgaAAIAAjjIAcAAIAABRQASgWAaAAQAQAAANAGQAOAGAJALQAJAMAFAPQAFAPAAASQAAAqgVAYQgVAXgeABQgcAAgRgZgAgggRQgNAQAAAeQAAAdAIAOQANAVAXAAQARAAANgQQAOgQAAggQAAgfgNgPQgNgQgRAAQgSAAgOAQg");
	this.shape_125.setTransform(661.55,598.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.996)").s().p("AgQAbQAJgEAEgIQAEgIAAgNIgPAAIAAggIAfAAIAAAgQAAARgHALQgFALgNAGg");
	this.shape_126.setTransform(638.8,610.625);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_127.setTransform(626.325,601.675);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgOgNAAgVQgBgMAGgKQAFgKAKgGQAJgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgUAAgJAHQgJAHgFASIgcgEQAEgRAJgLQAJgLAPgGQARgGAVAAQAUAAAOAFQANAFAHAIQAGAHACAMQACAHAAATIAAAkQAAAnACALQABAKAGAKIgeAAQgEgJgBgMQgQAOgPAFQgNAGgRAAQgbAAgPgOgAgGAKQgRADgHADQgHADgFAGQgEAGAAAHQABALAIAIQAJAHAQAAQAQAAAMgHQANgHAFgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_128.setTransform(609.45,601.675);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQABgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgdAAIAAilIAaAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQABAIAAAUIAABlg");
	this.shape_129.setTransform(591.7,601.475);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgJAaQgLgGgLAAQgIAAgHAGQgIAFgDAKQgEAPAAASIAABWg");
	this.shape_130.setTransform(578.8,601.475);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWABgpQAAgpAVgXQAWgXAhAAQAhAAAVAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAPAAAMgIQAKgIAGgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_131.setTransform(563.2,601.675);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgaQAAgYAIgUQAJgUAQgKQARgLAUAAQAOAAAMAGQAMAGAHALIAAhSIAcAAIAADjIgaAAIAAgUQgQAZgeAAQgTAAgRgMgAgdgRQgNAPAAAfQAAAgAOAQQAMAQASAAQATAAANgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAQg");
	this.shape_132.setTransform(544.9,598.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_133.setTransform(527.625,601.675);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0.996)").s().p("ABVBVIAAhoQAAgRgDgHQgDgHgHgFQgIgFgJAAQgSAAgLAMQgLAMAAAZIAABgIgcAAIAAhrQAAgTgGgJQgIgKgPAAQgMAAgKAHQgKAGgFAMQgEAMAAAXIAABVIgcAAIAAilIAZAAIAAAXQAIgMANgHQAMgIARAAQATAAALAIQALAHAFAOQATgdAgAAQAZAAANAOQAOANAAAdIAABxg");
	this.shape_134.setTransform(505.5,601.475);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_135.setTransform(994.575,563.925);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgPgNAAgVQAAgMAGgKQAGgKAJgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLAQgGQARgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQABAHAAATIAAAkQAAAnADALQABAKAFAKIgdAAQgEgJgCgMQgPAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgIADQgHADgEAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_136.setTransform(977.7,563.925);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgZQAAgZAIgTQAIgVARgLQAQgKAVAAQAOAAAMAGQALAHAIAJIAAhSIAcAAIAADlIgaAAIAAgWQgQAZgeAAQgUAAgQgLgAgegSQgMAPAAAhQAAAgANAQQAOAPARAAQATAAAMgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAPg");
	this.shape_137.setTransform(959.4,560.95);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgPgNABgVQgBgMAGgKQAFgKAKgGQAJgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgUAAgJAHQgJAHgFASIgcgEQAEgRAJgLQAJgLAPgGQARgGAVAAQAUAAAOAFQANAFAHAIQAFAHADAMQABAHABATIAAAkQAAAnABALQACAKAGAKIgeAAQgEgJgBgMQgQAOgOAFQgOAGgRAAQgbAAgPgOgAgGAKQgRADgHADQgIADgDAGQgFAGAAAHQAAALAJAIQAIAHARAAQAQAAAMgHQAMgHAGgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_138.setTransform(942.1,563.925);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(255,255,255,0.996)").s().p("ABUBVIAAhoQAAgRgCgHQgDgHgHgFQgHgFgKAAQgRAAgMAMQgMAMAAAZIAABgIgbAAIAAhrQAAgTgHgJQgGgKgQAAQgMAAgKAHQgKAGgEAMQgFAMgBAXIAABVIgcAAIAAilIAaAAIAAAXQAHgMANgHQANgIARAAQASAAAMAIQALAHAFAOQAUgdAfAAQAZAAANAOQANANAAAdIAABxg");
	this.shape_139.setTransform(920,563.725);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_140.setTransform(903.1,560.75);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQAAgRgDgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQACAIAAAUIAABlg");
	this.shape_141.setTransform(890.6,563.725);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgGADgFAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_142.setTransform(872.75,563.925);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_143.setTransform(846.925,563.925);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWABgpQAAgpAVgXQAWgXAhAAQAhAAAVAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAPAAAMgIQAKgIAGgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_144.setTransform(830.05,563.925);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQAAgRgDgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQACAIAAAUIAABlg");
	this.shape_145.setTransform(812.3,563.725);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_146.setTransform(794.475,563.925);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_147.setTransform(782.1,560.75);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_148.setTransform(771.025,563.925);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgPgNABgVQgBgMAGgKQAFgKAJgGQAKgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgUAAgJAHQgJAHgFASIgcgEQAEgRAJgLQAJgLAPgGQARgGAVAAQAUAAAOAFQANAFAHAIQAFAHADAMQABAHABATIAAAkQAAAnACALQABAKAGAKIgeAAQgEgJgBgMQgQAOgOAFQgOAGgRAAQgbAAgPgOgAgGAKQgRADgHADQgIADgDAGQgFAGAAAHQAAALAJAIQAIAHARAAQAQAAAMgHQAMgHAGgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_149.setTransform(753.55,563.925);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBtQgIgFgDgIQgDgIAAgZIAAhfIgWAAIAAgWIAWAAIAAgpIAagRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACAEQABADADACQAEACAGAAIANgBIADAYQgLADgJAAQgQAAgIgEg");
	this.shape_150.setTransform(740.45,561.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_151.setTransform(732.3,560.75);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBjIAKAhIAKggIAlhkIAdAAIg/Clg");
	this.shape_152.setTransform(720.775,563.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQgBgRgDgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAiAAQAPAAANAGQAMAFAGAJQAHAIACAMQABAIAAAUIAABlg");
	this.shape_153.setTransform(703.8,563.725);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_154.setTransform(691.4,560.75);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQABgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgdAAIAAilIAaAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQABAIAAAUIAABlg");
	this.shape_155.setTransform(670,563.725);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_156.setTransform(652.175,563.925);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_157.setTransform(635.825,563.925);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_158.setTransform(610.325,563.925);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_159.setTransform(593.475,563.925);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgZQAAgZAIgTQAJgVAQgLQAQgKAVAAQAOAAAMAGQAMAHAHAJIAAhSIAcAAIAADlIgaAAIAAgWQgQAZgeAAQgUAAgQgLgAgdgSQgNAPAAAhQAAAgAOAQQAMAPASAAQASAAAOgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAPg");
	this.shape_160.setTransform(575.15,560.95);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgQgNAAgVQAAgMAGgKQAGgKAJgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLAQgGQARgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQABAHAAATIAAAkQAAAnADALQABAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgHADgEAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_161.setTransform(557.85,563.925);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,255,255,0.996)").s().p("AgDBtQgJgFgEgIQgDgIAAgZIAAhfIgUAAIAAgWIAUAAIAAgpIAbgRIAAA6IAcAAIAAAWIgcAAIAABgQAAAMACAEQABADAEACQADACAGAAIAMgBIAFAYQgMADgKAAQgPAAgHgEg");
	this.shape_162.setTransform(544.75,561.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_163.setTransform(536.6,560.75);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBjIAKAhIAKggIAlhkIAdAAIg/Clg");
	this.shape_164.setTransform(525.075,563.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQAAgRgDgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQACAIAAAUIAABlg");
	this.shape_165.setTransform(508.1,563.725);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_166.setTransform(495.7,560.75);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_167.setTransform(998.225,526.175);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,255,255,0.996)").s().p("AglBPQgNgFgGgJQgGgJgDgMQgBgIAAgSIAAhmIAcAAIAABbQAAAWACAIQACALAJAHQAIAFANABQAMAAALgHQALgGAFgLQAEgMAAgVIAAhYIAcAAIAAClIgZAAIAAgZQgTAdghAAQgOAAgNgGg");
	this.shape_168.setTransform(981.325,526.35);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBtQgIgGgEgIQgCgHAAgaIAAheIgWAAIAAgWIAWAAIAAgpIAagRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACADQABAEADACQAEACAGAAIANgBIADAZQgMACgIAAQgQAAgIgEg");
	this.shape_169.setTransform(968.25,523.35);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgPgNAAgVQAAgMAGgKQAGgKAJgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLAQgGQARgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQABAHAAATIAAAkQAAAnADALQABAKAFAKIgdAAQgEgJgCgMQgPAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgIADQgHADgEAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_170.setTransform(945.75,526.175);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWAAgpQgBgpAWgXQAWgXAhAAQAiAAAUAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAQAAAKgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_171.setTransform(919.05,526.175);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAJgUAQgKQARgLAUAAQAOAAAMAGQAMAGAHAKIAAhRIAcAAIAADjIgaAAIAAgVQgQAageAAQgUgBgQgKgAgegRQgMAPAAAfQAAAgAOAQQANAQARAAQATAAANgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAQg");
	this.shape_172.setTransform(900.75,523.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQAAgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQACAIAAAUIAABlg");
	this.shape_173.setTransform(883.5,525.975);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAhAAAWAXQAVAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgWAAQgSAAgNANg");
	this.shape_174.setTransform(865.65,526.175);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgKAaQgKgGgKAAQgJAAgHAGQgHAFgDAKQgFAPAAASIAABWg");
	this.shape_175.setTransform(852.8,525.975);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB1IAAjlIAZAAIAAAWQAKgNALgGQAMgHAPABQAVgBARALQAPALAJAUQAIAUAAAYQAAAZgJAUQgJAUgSALQgRALgTAAQgNAAgMgGQgLgGgHgJIAABRgAgfhNQgOARgBAgQABAfANAQQAMAPATAAQARAAAOgQQANgQAAghQABgfgNgQQgNgPgSgBQgSABgNAQg");
	this.shape_176.setTransform(837.7,529.15);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgJAaQgLgGgKAAQgJAAgHAGQgHAFgDAKQgFAPAAASIAABWg");
	this.shape_177.setTransform(824.35,525.975);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_178.setTransform(808.775,526.175);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_179.setTransform(791.825,526.175);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BxIgEgaQAKACAHAAQAJAAAGgDQAGgDADgGQACgEAHgRIACgGIg/imIAeAAIAjBgIALAmQAFgTAHgSIAjhhIAcAAIg/CoQgKAbgFALQgHAOgKAGQgKAHgNAAQgIAAgKgEg");
	this.shape_180.setTransform(767.15,529.525);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAjjIAbAAIAADjg");
	this.shape_181.setTransform(746.5,523);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWAAgpQAAgpAXgXQAVgXAhAAQAiAAAVAXQAUAWAAApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAQAAALgIQAKgIAHgSIAdAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_182.setTransform(734.05,526.175);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB1IAAjlIAZAAIAAAWQAKgNALgGQAMgHAPABQAVgBARALQAPALAJAUQAIAUAAAYQAAAZgJAUQgJAUgSALQgRALgTAAQgNAAgLgGQgLgGgIgJIAABRgAgfhNQgOARgBAgQABAfANAQQAMAPATAAQARAAAOgQQANgQAAghQABgfgNgQQgOgPgRgBQgSABgNAQg");
	this.shape_183.setTransform(716.75,529.15);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgOgNAAgVQgBgMAGgKQAFgKAKgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgTAAgKAHQgKAHgEASIgcgEQAEgRAJgLQAJgLAPgGQARgGAUAAQAWAAANAFQANAFAGAIQAHAHACAMQACAHAAATIAAAkQAAAnACALQABAKAGAKIgeAAQgFgJAAgMQgQAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgHADQgHADgFAGQgDAGAAAHQAAALAIAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_184.setTransform(698.45,526.175);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB1IAAjlIAaAAIAAAWQAJgNALgGQALgHAQABQAVgBAQALQAQALAJAUQAIAUAAAYQAAAZgJAUQgJAUgRALQgSALgTAAQgNAAgMgGQgLgGgHgJIAABRgAgghNQgNARAAAgQAAAfAMAQQAOAPASAAQARAAAOgQQAOgQAAghQAAgfgOgQQgMgPgSgBQgSABgOAQg");
	this.shape_185.setTransform(681.15,529.15);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAjjIAbAAIAADjg");
	this.shape_186.setTransform(659.3,523);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAhAAAWAXQAUAWAAApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQALgIAHgSIAdAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_187.setTransform(646.85,526.175);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAIgUARgKQAQgLAVAAQAOAAAMAGQALAGAIAKIAAhRIAcAAIAADjIgaAAIAAgVQgQAageAAQgTgBgRgKgAgdgRQgNAPAAAfQAAAgANAQQAOAQARAAQASAAANgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAQg");
	this.shape_188.setTransform(628.55,523.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWABgpQAAgpAVgXQAWgXAhAAQAhAAAVAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAPAAAMgIQAKgIAGgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_189.setTransform(602.35,526.175);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBtQgIgGgDgIQgDgHAAgaIAAheIgWAAIAAgWIAWAAIAAgpIAagRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACADQABAEADACQAEACAGAAIANgBIADAZQgLACgJAAQgQAAgIgEg");
	this.shape_190.setTransform(589.25,523.35);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgUAAgJAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAVAAQAVAAANAFQANAFAGAIQAGAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgIADQgGADgEAGQgEAGgBAHQAAALAJAIQAIAHARAAQAPAAANgHQANgHAFgMQAFgKAAgSIAAgKQgPAGgeAEg");
	this.shape_191.setTransform(575.65,526.175);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAIgUARgKQARgLAUAAQAOAAAMAGQALAGAIAKIAAhRIAcAAIAADjIgaAAIAAgVQgQAageAAQgTgBgRgKgAgdgRQgNAPAAAfQAAAgANAQQAOAQARAAQASAAAOgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAQg");
	this.shape_192.setTransform(557.35,523.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(255,255,255,0.996)").s().p("AgaBzIAAilIAbAAIAAClgAgchGIAVgsIAkAAIghAsg");
	this.shape_193.setTransform(545.975,522.925);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBiIAKAiIAKgfIAlhlIAdAAIg/Clg");
	this.shape_194.setTransform(532.175,526.15);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAjjIAbAAIAADjg");
	this.shape_195.setTransform(520.5,523);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(255,255,255,0.996)").s().p("Ag5BnQgZgQgNgbQgNgbAAgeQAAg4AeghQAfgfAvgBQAgAAAZAPQAaAPANAcQANAbABAiQgBAigOAcQgOAbgZAOQgaAOgeABQgfAAgagQgAg2hFQgYAVAAAzQAAAqAXAXQAXAZAgAAQAiAAAWgZQAXgYgBgsQABgbgKgVQgJgUgTgMQgSgMgWAAQggAAgXAXg");
	this.shape_196.setTransform(504.65,523);

	this.instance_4 = new lib.logo_00158();
	this.instance_4.setTransform(464,-9);

	this.instance_5 = new lib.Símbolo11();
	this.instance_5.setTransform(754.1,677.65,1,1,0,0,0,287.2,178.8);
	this.instance_5.alpha = 0.4492;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Capa_2
	this.instance_6 = new lib.Símbolo14();
	this.instance_6.setTransform(667.5,667.5,1.1125,1.1125,0,0,0,600,600);
	this.instance_6.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(509,552,826,783);
// library properties:
lib.properties = {
	id: '9F19E592495FAE4EA74FABDF34D3DF52',
	width: 1050,
	height: 1122,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/web_atlas_P_1.png?1748697132378", id:"web_atlas_P_1"},
		{src:"images/web_atlas_NP_1.jpg?1748697132378", id:"web_atlas_NP_1"}
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
an.compositions['9F19E592495FAE4EA74FABDF34D3DF52'] = {
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