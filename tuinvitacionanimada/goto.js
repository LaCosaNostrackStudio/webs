(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"goto_atlas_P_1", frames: [[1072,0,234,248],[1308,0,453,117],[0,0,1070,288]]}
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



(lib.Mapadebits3 = function() {
	this.initialize(ss["goto_atlas_P_1"]);
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
	this.shape.graphics.f("#000000").s().p("A18OTIAA8lMAr5AAAIAAclg");
	this.shape.setTransform(140.475,91.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(0,0,281,183), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AiJIKIAAkVIETAAIAAEVgAiJj0IAAkVIETAAIAAEVg");
	this.shape.setTransform(556.55,134.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiJIKIAAkVIETAAIAAEVgAiJj0IAAkVIETAAIAAEVg");
	this.shape_1.setTransform(264.55,134.15);

	this.segundos = new cjs.Text("59", "bold 96px 'Arial'", "#FFFFFF");
	this.segundos.name = "segundos";
	this.segundos.textAlign = "center";
	this.segundos.lineHeight = 109;
	this.segundos.lineWidth = 108;
	this.segundos.parent = this;
	this.segundos.setTransform(703.9,34.45,2.0956,2.0956);

	this.minutos = new cjs.Text("30", "bold 96px 'Arial'", "#FFFFFF");
	this.minutos.name = "minutos";
	this.minutos.textAlign = "center";
	this.minutos.lineHeight = 109;
	this.minutos.lineWidth = 108;
	this.minutos.parent = this;
	this.minutos.setTransform(407.5,34.45,2.0956,2.0956);

	this.horas = new cjs.Text("01", "bold 96px 'Arial'", "#FFFFFF");
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
	this.shape.graphics.f("rgba(255,255,255,0.996)").s().p("AgwA3QgXgYAAgfIAAAAQAAgfAXgXQAWgVAZABIADAAQAYAAAWASQAYAYAAAgQAAAigaAYQgVARgZAAQgaABgWgVgAgjgkQgOAQAAAUIAAAAQAAAXAQAQQAPAOASABQAXAAARgWQAKgPAAgRQAAgXgRgRQgPgNgRABIgCAAQgSAAgQAQg");
	this.shape.setTransform(187.425,184.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.996)").s().p("AARByQgJAAgIgFQgMgGgFgNQgDgIAAgKIAAhTIgYAAIgBAAIAAgWIABAAIAYAAIAAhQIAVAAIAABQIAoAAIAAAWIAAAAIgoAAIAABVQAAAGADAGQAEAEAFACIAFAAIAAAAQAGAAALgEIACgBIAJAUIgJAEQgLADgHAAIgCAAg");
	this.shape_1.setTransform(173.225,180.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.996)").s().p("AArBKIgBAAIAAhcQAAgYgXgHQgFgCgQAAQgTAAgKAIQgLAHAAATIAABbIAAAAIgWAAIAAAAIAAiRIAAAAIAWAAIAAAAIAAAPQARgRAZAAIACAAQArAAAPAhQAFAKAAAMIAABcIgBAAIgVAAg");
	this.shape_2.setTransform(159.4,184.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3AvQgPgVAAgZIAAgBQAAgfAXgXQAVgVAaAAQAhAAAXAdQAPAWAAAVIAAACIgBAHIh2AAQAAAHAHAOQAJARASAHQAIADAGAAQAVAAAQgTQAGgHABgFIABAAIATAJQgDAJgMAOQgVAVgcAAQgfAAgYgdgAgmgfQgFAHgDAJIBdAAQgHgVgPgJQgMgIgNAAQgWAAgQAWg");
	this.shape_3.setTransform(142.175,184.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.996)").s().p("AgrA+QgVgQAAgZIAAheIABAAIAVAAIAAAAIAABdQAAAYAbAHQAEABAMAAQAQAAAIgEQAMgGAEgKQACgHAAgHIAAhbIAAAAIAWAAIAAAAIAACRIAAAAIgWAAIAAAAIAAgPQgRARgaAAQgcAAgPgMg");
	this.shape_4.setTransform(125.2,184.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.996)").s().p("AgqA3QgXgYAAgfIAAAAQAAgfAXgXQAWgVAYABIAEAAQAXAAAVAQQAKAKADAGIgSANQgJgQgSgGQgGgCgHABIgDAAQgRAAgQAQQgOAQAAAUIAAAAQAAAXARARQAPAOARAAQAXgBAQgTIACgEIATAMQgOAVgZAJQgLAEgKgBQgaABgWgVg");
	this.shape_5.setTransform(108.775,184.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.996)").s().p("AAABMQgRAAgQgIQgPgJgJgPIAJgFIAKgFQAIAMANAFQAJADAJAAQANAAALgGIAGgEQAFgGAAgHQAAgKgNgHIgJgCQgYgFgOgFQgdgKAAgXIAAgBQAAgOALgMIAHgGQAHgFAJgDQAKgDAKAAIACAAQAQAAAOAIQAFACAFAFIAIAHIACAEIgTALQgDgEgFgEQgKgHgPAAQgPAAgKAIQgHAGAAAIQAAAGAEACIAFADQAHAEAQAEIATAEIANAEIAKAFIAGAFQAJALAAANIAAABQAAAOgKANIgHAGIgJAFQgPAHgQAAIgBAAg");
	this.shape_6.setTransform(93.625,184.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3AvQgPgVAAgZIAAgBQAAgfAXgXQAVgVAaAAQAhAAAXAdQAPAWAAAVIAAACIgBAHIh2AAQAAAHAHAOQAJARASAHQAIADAGAAQAVAAAQgTQAGgHABgFIABAAIATAJQgDAJgMAOQgVAVgcAAQgfAAgYgdgAgmgfQgFAHgDAJIBdAAQgHgVgPgJQgMgIgNAAQgWAAgQAWg");
	this.shape_7.setTransform(78.275,184.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.996)").s().p("AAABzQgeAAgXgZQgTgXAAgbIAAgCQAAgdAWgWQAWgXAdABQAfgBASAaIABABIAAAAIAAhpIAVAAIABAAIAADjIgBABIgVAAIAAgBIAAgYIAAAAQgRAagiAAgAgtARQgFALAAAKIAAABQAAAaAVARQANALAQAAQAhAAANghQAEgKAAgKIAAgDQAAgOgJgOQgPgXgYAAQggAAgPAfg");
	this.shape_8.setTransform(60.525,180.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3AvQgPgVAAgZIAAgBQAAgfAXgXQAVgVAaAAQAhAAAXAdQAPAWAAAVIAAACIgBAHIh2AAQAAAHAHAOQAJARASAHQAIADAGAAQAVAAAQgTQAGgHABgFIABAAIATAJQgDAJgMAOQgVAVgcAAQgfAAgYgdgAgmgfQgFAHgDAJIBdAAQgHgVgPgJQgMgIgNAAQgWAAgQAWg");
	this.shape_9.setTransform(35.475,184.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.996)").s().p("AAABzQgeAAgXgZQgTgXAAgbIAAgCQAAgdAWgWQAWgXAdABQAfgBASAaIABABIAAAAIAAhpIAVAAIABAAIAADjIgBABIgVAAIAAgBIAAgYIAAAAQgRAagiAAgAgtARQgFALAAAKIAAABQAAAaAVARQANALAQAAQAhAAANghQAEgKAAgKIAAgDQAAgOgJgOQgPgXgYAAQggAAgPAfg");
	this.shape_10.setTransform(17.725,180.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.996)").s().p("AA2BxQgOAAgNgKIgHgIQgJgMAAgOIAAgBQAAgQAKgMQAGgGACgBQAMgIANAAQASAAAOANIACACQAKANAAAQQAAARgNAOQgGAFgDABQgKAHgLAAIgBAAgAAnA4QgEAGAAAHQAAAKAJAGQAFADAGAAQAJAAAGgIQAEgGAAgFIAAgBQAAgIgHgHQgGgEgGAAIgBAAQgIAAgHAHgAhTBvICOjeIAZAAIiODeIgZAAgAhSgiIgFgGIgFgIQgFgJAAgJIAAgCQAAgNAIgMIAGgHQANgLAQAAIABAAQAPAAANAKIAGAHQAJANAAAOQAAARgNANIgCADQgNAKgQAAQgPAAgNgKgAhDhSQgGAHAAAIQAAAIAIAHQAFAEAGAAQAKAAAGgIQAEgFAAgGIAAgBQAAgHgGgHQgGgFgIAAQgHAAgGAFg");
	this.shape_11.setTransform(227.125,143.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.996)").s().p("Ag/BLQgZghAAgpIAAgBQAAgqAaghQAbggAjAAIABAAQAgAAAaAbQAeAiAAAuQAAAvgeAhQgaAbghAAQgkAAgbgggAgxg5QgRAaAAAfIAAABQAAAhAUAbQAVAZAZAAQAdAAAVgcQARgbAAgfQAAgggSgZQgVgcgcAAQgbAAgWAcg");
	this.shape_12.setTransform(197.375,143.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.996)").s().p("AAAByQgPAAgPgIIgMgIIgIgJIgGgIIgFgKQgEgLAAgLIAAAAIAAAAIAWAAIAAAAQAAAPAKAMIAGAGQANAKAOAAIAAAAQAQAAANgKIAGgHQAJgMAAgOQAAgPgKgNIgGgHIgIgEQgJgFgKAAIgPAAIAAgVIAAAAIASAAIAKgCIAKgFIAFgFIAGgJQAEgIAAgIQAAgOgKgMIgFgFQgKgHgMAAIAAAAQgMAAgKAJQgOAMAAARIAAABIgVAAIAAgCQAAgTALgQIAHgIIAHgGQAQgKAQAAQAWAAARAPIAHAHIAGALQAHAMAAAOIAAABQAAAVgOARIgIAIIgDACIAJAGIAIAIQANASAAAWQAAAWgPATIgHAHQgFAFgFACQgQAKgRAAIgBAAg");
	this.shape_13.setTransform(178.425,144.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.996)").s().p("AArBKIgBAAIAAhcQABgYgYgHQgGgCgPAAQgTAAgJAIQgMAHAAATIAABbIgBAAIgVAAIAAAAIAAiRIAAAAIAVAAIABAAIAAAPQARgRAZAAIABAAQAtAAAPAhQAEAKAAAMIAABcIgBAAIgVAAg");
	this.shape_14.setTransform(153.7,147.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.996)").s().p("AgrA+QgVgQAAgZIAAheIABAAIAUAAIABAAIAABdQAAAYAaAHQAGABALAAQAQAAAIgEQAMgGAEgKQACgHAAgHIAAhbIABAAIAUAAIABAAIAACRIgBAAIgUAAIgBAAIAAgPQgRARgaAAQgbAAgQgMg");
	this.shape_15.setTransform(135.95,147.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3AvQgPgVAAgZIAAgBQAAgfAXgXQAVgVAaAAQAhAAAXAdQAPAWAAAVIAAACIgBAHIh2AAQAAAHAHAOQAJARASAHQAIADAGAAQAVAAAQgTQAGgHABgFIABAAIATAJQgDAJgMAOQgVAVgcAAQgfAAgYgdgAgmgfQgFAHgDAJIBdAAQgHgVgPgJQgMgIgNAAQgWAAgQAWg");
	this.shape_16.setTransform(110.875,147.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.996)").s().p("AAABzQghAAgRgaIAAAYIAAAAIgVAAIgBAAIAAjjIABAAIAVAAIAAAAIAABpQACgFALgJQAQgMAVAAQAlAAAXAgQANAUAAAVIAAADQAAAdgWAXQgLALgJAEQgQAHgOAAIgBAAgAgsAQQgFAMAAAKIAAABQAAAbAVASQAMAJARAAQAZAAAQgYQAJgOAAgPIAAgCQAAgXgTgRQgOgMgTABQgdAAgOAdg");
	this.shape_17.setTransform(94.025,143.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.996)").s().p("AAKByIgUAAIAAiTIAUAAIABAAIAACTgAAAhSQgGAAgFgGQgDgFgBgEIAAgBQABgGAFgFQAEgEAFAAIAAAAQAHAAAEAFQAFAFAAAFIAAAAQgBAHgFAFQgFAEgFAAIAAAAg");
	this.shape_18.setTransform(80.7,143.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.996)").s().p("AgqA4QgXgZAAgeIAAgBQAAgfAXgYQAWgTAYgBIAEAAQAXABAVARQAKAKADAFIgSAMQgJgPgSgFQgGgCgHAAIgDAAQgRAAgQAPQgOARAAAUIAAABQAAAWARARQAPANARAAQAXABAQgVIACgCIATALQgOAVgZAJQgLADgKABQgagBgWgTg");
	this.shape_19.setTransform(69.425,147.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3AvQgPgVAAgZIAAgBQAAgfAXgXQAVgVAaAAQAhAAAXAdQAPAWAAAVIAAACIgBAHIh2AAQAAAHAHAOQAJARASAHQAIADAGAAQAVAAAQgTQAGgHABgFIABAAIATAJQgDAJgMAOQgVAVgcAAQgfAAgYgdgAgmgfQgFAHgDAJIBdAAQgHgVgPgJQgMgIgNAAQgWAAgQAWg");
	this.shape_20.setTransform(53.075,147.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBLIgBgBIAAiQIABgBIAVAAIAAABIAAAMQAHgJAOgEQAJgDAKAAQAQAAANAIIgFAXQgOgIgMAAQgZAAgLAYQgCAGAAAGIAABZIAAABIgVAAg");
	this.shape_21.setTransform(39.825,147.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.996)").s().p("AgpBsIAAAAIAehGIg+iRIAYAAIAHARIAqBkIASgpIAhhMIAXAAIhSDBIgJAWIgYAAg");
	this.shape_22.setTransform(16.925,150.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.996)").s().p("AgpBsIAAgBIAehGIg+iQIAYAAIAHAQIAqBkIASgoIAhhMIAXAAIhSDBIgJAWIgYAAg");
	this.shape_23.setTransform(159.475,112.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.996)").s().p("AgwA3QgXgYAAgfIAAAAQAAgfAXgXQAWgVAZABIADAAQAYAAAWASQAYAYAAAgQAAAhgaAZQgVARgZAAQgaABgWgVgAgjgkQgOAQAAAUIAAAAQAAAXAQAQQAPAOASAAQAXABARgWQAKgPAAgRQAAgXgRgRQgPgNgRAAIgCAAQgSABgQAQg");
	this.shape_24.setTransform(142.875,109.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.996)").s().p("AArByIAAAAIAAhdQAAgZgdgHIgMAAIgFAAQgaAAgKARQgDAHAAAJIAABcIgBAAIgUAAIgBAAIAAjjIABAAIAUAAIABAAIAABhQASgRAYAAQAuAAAPAgQAEAJAAAMIAABeIgBAAIgVAAg");
	this.shape_25.setTransform(125.5,105.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.996)").s().p("AAABMQgeAAgXgZQgTgXAAgbIAAgBQAAgdAVgXQAWgXAeAAQAfAAASAaIABABIAAgZIAAAAIAVAAIABAAIAACTIgBAAIgVAAIAAAAIAAgYQgRAagiAAgAgtgVQgFALAAAKIAAAAQAAAaAVARQANALAQAAQAhAAANghQADgKAAgKIAAgCQAAgOgIgPQgPgXgYAAQggAAgPAgg");
	this.shape_26.setTransform(99.025,109.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.996)").s().p("AARByQgJAAgIgFQgMgGgFgNQgDgIAAgKIAAhTIgYAAIgBAAIAAgWIABAAIAYAAIAAhQIAVAAIAABQIAoAAIAAAWIAAAAIgoAAIAABVQAAAGADAGQAEAEAFACIAFAAIAAAAQAGAAALgEIACgBIAJAUIgJAEQgLADgHAAIgCAAg");
	this.shape_27.setTransform(84.725,105.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.996)").s().p("AAKByIgUAAIAAiTIAUAAIABAAIAACTgAAAhSQgHAAgEgGQgEgFAAgEIAAgBQAAgGAGgFQAEgEAFAAIAAAAQAGAAAFAFQAFAFAAAFIAAAAQAAAHgGAFQgFAEgFAAIAAAAg");
	this.shape_28.setTransform(76,105.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.996)").s().p("AgqA3QgXgYAAgfIAAAAQAAgfAXgXQAWgVAYABIAEAAQAXgBAVASQAKAJADAGIgSANQgJgPgSgHQgGgCgHAAIgDAAQgRABgQAQQgOAQAAAUIAAAAQAAAXARARQAPANARAAQAXAAAQgTIACgEIATAMQgOAVgZAJQgLADgKAAQgaABgWgVg");
	this.shape_29.setTransform(64.725,109.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.996)").s().p("AAKByIgUAAIAAiTIAUAAIABAAIAACTgAAAhSQgHAAgEgGQgEgFAAgEIAAgBQAAgGAGgFQAEgEAFAAIAAAAQAGAAAFAFQAFAFAAAFIAAAAQAAAHgGAFQgFAEgFAAIAAAAg");
	this.shape_30.setTransform(53.05,105.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.996)").s().p("AAKByIgUAAIAAjjIAUAAIABAAIAADjg");
	this.shape_31.setTransform(45.95,105.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.996)").s().p("AgwA3QgXgYAAgfIAAAAQAAgfAXgXQAWgVAZABIADAAQAYAAAWASQAYAYAAAgQAAAhgaAZQgVARgZAAQgaABgWgVgAgjgkQgOAQAAAUIAAAAQAAAXAQAQQAPAOASAAQAXABARgWQAKgPAAgRQAAgXgRgRQgPgNgRAAIgCAAQgSABgQAQg");
	this.shape_32.setTransform(33.825,109.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.996)").s().p("AAAB1QgPAAgQgHIgLgHQgJgHgHgJIgIgOIgDgGIAUgIQADAHAFAHIAHAIQAGAGAFACQAMAHALAAIABAAQAPAAAOgJIAHgGQAGgIACgJQADgHAAgGIAAgBQAAgQgLgMIgJgGIgHgDIgQgEQgZgHgOgGQgegQAAgfIAAgCQAAgTAMgRIAHgJQAFgFAEgCQAHgFAIgDQAMgDAKAAIACAAQAQAAAQAIIALAHIAHAHIAIALIADAGIgTAJQgCgEgHgHQgOgPgTAAIgBAAQgSAAgNALQgFAFgBADQgHAKAAANQAAAOAIAHQAGAFAIAEQAOAHAeAHIANAFQAHADAHAGIAHAHIAEAHQAIAOAAAPIAAABIAAAAIAAABIAAAAQAAARgJAQQgLAUgWAJQgOAEgMAAIgCAAg");
	this.shape_33.setTransform(17.075,105.375);

	this.instance = new lib.Símbolo8_1();
	this.instance.setTransform(120.65,237.8,0.2142,0.2142,0,0,0,410.4,131.7);

	this.instance_1 = new lib.Símbolo6();
	this.instance_1.setTransform(304.25,193,0.6266,0.6266,0,0,0,128.3,128.3);

	this.instance_2 = new lib.Símbolo7();
	this.instance_2.setTransform(812.35,223.8,1,1,0,0,0,226.6,77.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa_2
	this.instance_3 = new lib.Símbolo11();
	this.instance_3.setTransform(143.5,176.55,1,1,0,0,0,140.5,91.5);
	this.instance_3.alpha = 0.5586;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Capa_3
	this.instance_4 = new lib.Mapadebits3();
	this.instance_4.setTransform(-5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(520,127,545,275.8);
// library properties:
lib.properties = {
	id: '35DF4F6CAE77C24386D73F952051B528',
	width: 1050,
	height: 270,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/goto_atlas_P_1.png?1748701655027", id:"goto_atlas_P_1"}
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