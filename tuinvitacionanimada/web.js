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



(lib.fondo = function() {
	this.initialize(img.fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1200);


(lib.logo_00158 = function() {
	this.initialize(img.logo_00158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,562,500);


(lib.top_00000 = function() {
	this.initialize(img.top_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,750);// helper functions:

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


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



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
	this.shape.graphics.f("#FFFFFF").s().p("AAnGFQh6gfg4hkQgfg4gkg2Qg9hcg5hgQgIgNgCgUIAAgCIAAgOIAAgCIAAgEQAHgLAOgEIABgBQA8ALAlAjQAlAjAiAlQAEitAAiyQABgqAjgHQAYgEAMALQAeAagGA/QgDAlAAAkQgCBrAGBlIACAAQASADAHgHIABgCQgDhCAJg4QABgMAJgHQAegXAdAZQAaAWgGA4QgCAUAEAPIADABQARADAIgIIAAgBQgMhSA+gEQAUgBAKAMQAWAcgHA4QgEAVAKAHQASADAHgHIABgCQAChDA+ARQAiAJAAAvQAABxgKBoQgCASgGARQgvCBiWAaQgTAEgSAAQgXAAgVgGg");
	this.shape.setTransform(36.85,58.6603);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABzH7IgqAAIgdgHQiOgghAhwQhBhxhIhpIglg1QgbgmgEg+QARg4BDAPQAjAIAZATQAZATAXAUQACiSAFiSQAAgYANgPQAdgiA3AOQA5AOgBBLQgBBJADBFQAogdAtAaQAXAOAMAZQAjgfAzAWQAnARAHAzQAmgbAuAYQAyAZgGBWQgDAtACAsQAGC5hlBNQgfAXglAQQgnARgvAHIgCAAgAk4geQgPAEgHALIAAAEIAAACIAAANIAAACQADAUAHANQA5BhA9BcQAkA2AfA4QA5BkB6AfQAlAKArgIQCWgaAviBQAHgRABgSQAKhoAAhyQAAgvghgJQg/gQgCBCIAAACQgIAHgRgDQgKgHADgVQAHg3gVgcQgKgMgVABQg+AEANBRIgBABQgHAIgSgDIgCgBQgFgPACgTQAHg4gbgWQgdgZgeAXQgIAHgCAMQgJA4ADBBIAAACQgIAHgSgDIgCAAQgFhkABhrQAAgkADglQAGg/gegaQgMgLgXAEQgkAHAAAqQgBCygECtQgigmglgjQgkgig9gLIAAABgAAbjVQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAgYAVAFIBrAZQgBAQgEAMIgBACQhBgLg4gVgAlQi1QgHgLAAgRIAAgCQA7gOA9gNIACgBIAGAcIAAACQg6APg9ANIgCAAgAgFlYIAAgBIBfhOIABgCIATAXIABABQguAqgzAmIAAABIgTgYgAkrmRIgBgCQAKgJAHgLIABgCQAyAnAvAoIACABIgTAZIgBAAQgygngugqgAhol7IgDAAQgDg/AAhAIAeAAIACAAIAAACIAAB3IgBABQgFAGgKAAIgKgBg");
	this.shape_1.setTransform(36.8071,50.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,73.6,101.4), null);


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

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgsQAZNQjZl1hvmiQhvmhgBmyQABqbEDpjQD5pNHHnHQHInHJNj6QJjkDKZAAQKUABJYD5QJYD5HRHRQHSHRD4JZQD4JYgBKTQAAKakDJjQj6JNnHHHQnHHHpOD6QpiEDqbAAIgBAAQmbAAmPhmQmOhmlpjEI7OHJgEgVgAkTQE6C7FjBhQFhBhFvAAIABAAQIrAAH7jXQHqjQF6l6QF6l6DQnqQDXn8AAoqQAAojjNnzQjPnzmDmDQmDmDnyjPQnzjPojAAQoqAAn8DXQnqDQl6F6Ql7F6jPHqQjXH8AAIqQAAGDBqFyQBrFyDMFGIBBBnIkTPwIQJkPgAM+YNQiSgFiGgrQh6gnhTgeQiFgwiCg4QoEjgnen9QiYiiiHiyIh4inQhmiDhRihQiZksABkAQgBkDB0jMQAyhaB6iEQAyg4BDgaQAzgVAzAAQBUAABIADIAqABQAaABATAKQA4AaArBnICQFfQBfDpANAaQATAjADAgQAEAngSAmIgkBHQgTAjgbAfIg/BMQgmAugXAWQgoApgLAbQgQAtAfA3QBFB1BWBzQCRDDCeCNQDECwDbB1QB0A+B/A1QA+AeAogFQAogFAlgpQA4hCBHhVQBgh2Alg1QAlg4AvgFQAigEBCAYQAxARDlBvQCjBPB4A8IBmAzQArAXAMAWQASAfgJBpQgKB7guCDQgwCEjEB9QivBwiIAVQhoAPheAAIgnAAg");
	this.shape.setTransform(500.0501,502.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#338A00","#2BFF00"],[0,1],17.7,367.2,-7.2,-147.9).s().p("EgeaBH/QuBl8qzqzQq0q0l8uCQmJuhAAv5QAAv4GJuhQF8uBK0q1QKzqzOBl8QOimJP4AAQP5AAOhGJQOBF8K0KzQK0K1F8OBQGJOhAAP4QAAP5mJOhQl8OCq0K0Qq0KzuBF8QuhGJv5AAQv4AAuimJg");
	this.shape_1.setTransform(500,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(0,0,1000,1000), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAjDVQgDgKgCgJIgBghIAAhOQAAgdgJgMQgKgLgWAAIgXAAIAAC2IhDAAIAAmpIBjAAQAzAAAYAXQAYAYAAAzIAAAaQAABCgsASIAAABQAYAHAKAWQAKAXAAAlIAABLQAAATACALQABALAEALgAgjgeIAYAAQATAAALgKQAJgKAAgZIAAghQAAgWgIgLQgIgLgRABIgeAAg");
	this.shape.setTransform(274.525,35.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwDVIgNhUIAAABIhLAAIgMBTIg+AAIBFmpIBaAAIBGGpgAggBIIA7AAIgcjSIgBAAg");
	this.shape_1.setTransform(249.55,35.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghDVIAAlsIhGAAIAAg9IDPAAIAAA9IhHAAIAAFsg");
	this.shape_2.setTransform(226.225,35.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJDAQgZgcAAgyIAAjjQAAgzAZgbQAagbAvgBQAwABAZAbQAaAbAAAzIAAAtIhAAAIAAgyQAAgnghAAQghAAAAAnIAADuQAAAnAhgBQAhABAAgnIAAhCIBAAAIAAA8QAAAygaAcQgZAbgwABQgvgBgagbg");
	this.shape_3.setTransform(203.725,35.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAvDVIgMhUIAAABIhLAAIgMBTIg+AAIBGmpIBZAAIBGGpgAggBIIA7AAIgcjSIgBAAg");
	this.shape_4.setTransform(179.6,35.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghDVIAAlsIhGAAIAAg9IDPAAIAAA9IhHAAIAAFsg");
	this.shape_5.setTransform(156.275,35.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkDVIhPk2IgBAAIAAE2Ig8AAIAAmpIBUAAIBAD+IABAAIAAj+IA8AAIAAGpg");
	this.shape_6.setTransform(132.125,35.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhLDAQgagcAAg0IAAjgQAAgzAagcQAagcAxAAQAxAAAbAcQAaAcAAAzIAADgQAAA0gaAcQgbAcgxAAQgxAAgagcgAgihzIAADnQAAArAigBQAiABAAgrIAAjnQAAgrgiABQgigBAAArg");
	this.shape_7.setTransform(106.925,35.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhJDAQgZgcAAgyIAAjjQAAgzAZgbQAagbAvgBQAwABAZAbQAaAbAAAzIAAAtIhAAAIAAgyQAAgnghAAQghAAAAAnIAADuQAAAnAhgBQAhABAAgnIAAhCIBAAAIAAA8QAAAygaAcQgZAbgwABQgvgBgagbg");
	this.shape_8.setTransform(83.325,35.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,357.7,77.2), null);


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
	this.shape.graphics.f().ls(["rgba(94,255,0,0.188)","#96FF6F","rgba(43,255,0,0.176)"],[0,0.498,1],-186.8,0,186.8,0).ss(4,1,1).p("A83lIMA5vAAAIAAKRMg5vAAAg");
	this.shape.setTransform(184.825,32.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-2,-2,373.7,69.9), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#338A00","#2BFF00"],[0,1],0,40.2,0,-40.1).s().p("A+TGSIAAsjMA8nAAAIAAMjg");
	this.shape.setTransform(194.025,40.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,388.1,80.4), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#338A00","#2BFF00"],[0,1],0,40.2,0,-40.1).s().p("A+TGSIAAsjMA8nAAAIAAMjg");
	this.shape.setTransform(194.025,40.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,388.1,80.4), null);


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
	this.instance = new lib.Símbolo6();
	this.instance.setTransform(45.5,104.05,1,1,0,0,0,36.8,50.6);

	this.instance_1 = new lib.Símbolo5();
	this.instance_1.setTransform(401.95,51.25,0.1025,0.1025,0,0,0,500.1,500.1);

	this.instance_2 = new lib.Símbolo4();
	this.instance_2.setTransform(194.55,51.7,1,1,0,0,0,178.8,38.6);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,102,0,1)",3,3,4);

	this.instance_3 = new lib.Símbolo3();
	this.instance_3.setTransform(193.5,51.2,1,1,0,0,0,184.8,32.9);

	this.instance_4 = new lib.Símbolo2();
	this.instance_4.setTransform(194,51.65,1,1,0,0,0,194,40.1);

	this.instance_5 = new lib.Símbolo1();
	this.instance_5.setTransform(200.2,59.4,1,1,0,0,0,194,40.1);
	this.instance_5.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(0,0,453.2,154.8), null);


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

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(-26.5,0,479.7,256.4), null);


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

	// Capa_1
	this.instance = new lib.an_Video({'id': '', 'src':'videos/top.mp4', 'autoplay':true, 'controls':false, 'muted':true, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance.setTransform(211,375,1.055,2.5,0,0,0,200,150);

	this.instance_1 = new lib.top_00000();

	this.instance_2 = new lib.Símbolo7();
	this.instance_2.setTransform(551.55,1030.2,1,1,0,0,0,226.6,77.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.996)").s().p("AgPBzIAAghIAfAAIAAAhgAgIA6IgJh5IAAgzIAiAAIAAAzIgIB5g");
	this.shape.setTransform(936.05,825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_1.setTransform(922.575,828.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAjlIAbAAIAADlg");
	this.shape_2.setTransform(910.1,825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_3.setTransform(903.1,825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBsQgIgFgDgHQgDgJAAgZIAAheIgWAAIAAgWIAWAAIAAgpIAagRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACAEQABADADACQAEACAGAAIANgBIADAYQgLADgJAAQgQAAgIgFg");
	this.shape_4.setTransform(895.25,825.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_5.setTransform(882.525,828.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAhAAAWAXQAVAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgWAAQgSAAgNANg");
	this.shape_6.setTransform(865.65,828.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQAAgRgDgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAiAAQAOAAANAGQANAFAGAJQAGAIADAMQACAIgBAUIAABlg");
	this.shape_7.setTransform(839,827.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_8.setTransform(821.175,828.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_9.setTransform(804.825,828.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BxIgEgaQAKACAHAAQAJAAAGgDQAFgDAEgGQACgEAGgRIADgGIg/imIAeAAIAjBgIALAmQAFgTAHgSIAjhhIAcAAIg/CoQgKAbgEALQgIAOgKAGQgJAHgOAAQgIAAgKgEg");
	this.shape_10.setTransform(779.55,831.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgKAaQgKgGgKAAQgKAAgGAGQgIAFgCAKQgFAPAAASIAABWg");
	this.shape_11.setTransform(758.5,827.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_12.setTransform(742.925,828.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgZQAAgZAIgTQAJgVAQgLQAQgKAVAAQAOAAAMAGQALAHAIAKIAAhTIAcAAIAADlIgaAAIAAgVQgQAYgeAAQgUAAgQgLgAgegSQgMAPAAAhQAAAfANARQANAPASAAQATAAAMgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAPg");
	this.shape_13.setTransform(724.6,825.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgQgNABgVQAAgMAFgKQAFgKAJgGQAKgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgUAAgJAHQgKAHgEASIgcgEQAEgRAJgLQAIgLARgGQAQgGAVAAQAUAAAOAFQANAFAHAIQAFAHADAMQABAHABATIAAAkQAAAnABALQACAKAGAKIgeAAQgEgJgBgMQgQAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgHADQgIADgDAGQgFAGAAAHQAAALAJAIQAIAHARAAQAQAAAMgHQANgHAFgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_14.setTransform(707.3,828.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBiIAKAiIAKggIAlhkIAdAAIg/Clg");
	this.shape_15.setTransform(690.525,828.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_16.setTransform(673.525,828.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQgBgRgDgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAiAAQAPAAANAGQAMAFAGAJQAHAIACAMQACAIgBAUIAABlg");
	this.shape_17.setTransform(655.75,827.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQABgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQABAIAAAUIAABlg");
	this.shape_18.setTransform(637.95,827.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_19.setTransform(625.55,825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.996)").s().p("AgQAbQAJgEAEgIQAEgIAAgNIgPAAIAAggIAfAAIAAAgQAAARgHALQgFALgNAGg");
	this.shape_20.setTransform(608.55,837.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_21.setTransform(595.225,828.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgZQAAgZAIgTQAIgVARgLQAQgKAVAAQAOAAAMAGQALAHAIAKIAAhTIAcAAIAADlIgaAAIAAgVQgQAYgeAAQgUAAgQgLgAgegSQgMAPAAAhQAAAfANARQAOAPARAAQATAAAMgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAPg");
	this.shape_22.setTransform(576.9,825.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_23.setTransform(565.05,825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB0IAAjkIAaAAIAAAVQAJgMALgHQALgFAQAAQAVAAAQALQAQAKAJAUQAIAUAAAYQAAAZgJATQgJAVgSALQgRALgTAAQgNAAgMgGQgLgGgHgJIAABQgAgghNQgOARABAgQgBAfANAQQAOAPASgBQASAAANgPQAOgQAAggQgBgggNgQQgMgPgSAAQgSgBgOARg");
	this.shape_24.setTransform(553,831.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BoQgPgOgBgUQABgNAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgJgVAAQgUAAgJAHQgJAHgFARIgbgDQADgSAJgLQAIgLARgFQAQgGAUAAQAWAAANAFQANAFAHAHQAFAIADALQACAHgBASIAAAmQAAAnACAKQACALAFAJIgdAAQgFgIgBgMQgPANgOAGQgOAFgRAAQgbAAgOgNgAgGApQgRACgIADQgGADgEAGQgEAGgBAIQAAALAJAHQAIAIARAAQAPAAANgHQANgHAFgNQAFgJAAgTIAAgKQgPAGgeAFgAgOhIIATgsIAlAAIgjAsg");
	this.shape_25.setTransform(534.7,825.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.996)").s().p("AA/BzIgegwQgNgVgKgLQgIgLgFgEQgHgEgIgCIgRgBIgjAAIAABmIgeAAIAAjlIBkAAQAfABAQAFQAQAHAKAQQAJAPAAATQAAAZgPAQQgRAQggAEQAMAGAGAGQAOAMALASIAoA/gAhGgMIBCAAQATgBAMgEQAMgEAGgJQAGgKAAgLQAAgQgLgLQgMgKgaAAIhIAAg");
	this.shape_26.setTransform(515.4,825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.996)").s().p("AgQBzIAAgzIAIh4IARAAIAIB4IAAAzgAgPhSIAAggIAfAAIAAAgg");
	this.shape_27.setTransform(497.525,831.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.996)").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape_28.setTransform(783.05,759.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgKAaQgKgGgKAAQgJAAgHAGQgHAFgDAKQgFAPAAASIAABWg");
	this.shape_29.setTransform(774.5,752.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAHAHACAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgGADgFAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_30.setTransform(758.9,752.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAilIAbAAIAAClgAgNhRIAAggIAbAAIAAAgg");
	this.shape_31.setTransform(746.55,749.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBiIAKAiIAKggIAlhkIAdAAIg/Clg");
	this.shape_32.setTransform(735.025,752.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQABgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQABAIAAAUIAABlg");
	this.shape_33.setTransform(718.05,752.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWAAgpQABgpAVgXQAWgXAhAAQAiAAAVAXQAUAWAAApIAAAHIh6AAQACAbANAPQAOAOAUAAQAPAAAMgIQAKgIAHgSIAdAEQgHAZgTAOQgTAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_34.setTransform(700.2,752.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAhAAAVAXQAWAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgWAAQgSAAgNANg");
	this.shape_35.setTransform(673.5,752.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgLgJgTQgJgUAAgZQAAgZAIgTQAIgVARgLQAQgKAVAAQAOAAAMAGQALAHAIAKIAAhSIAcAAIAADkIgaAAIAAgVQgQAYgeAAQgTAAgRgLgAgegSQgMAQAAAgQAAAfANAQQAOAQARAAQATAAAMgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAPg");
	this.shape_36.setTransform(655.2,749.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAjkIAbAAIAADkg");
	this.shape_37.setTransform(634.35,749.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAilIAbAAIAAClgAgNhRIAAggIAbAAIAAAgg");
	this.shape_38.setTransform(627.35,749.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_39.setTransform(616.275,752.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BoQgPgOAAgUQAAgNAGgKQAGgKAJgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgJgVAAQgTAAgKAHQgJAHgFARIgbgDQADgSAJgLQAIgLAQgFQARgGAUAAQAWAAANAFQANAFAGAHQAGAIADALQABAHAAASIAAAmQAAAnADAKQABALAFAJIgdAAQgFgIgBgMQgPANgPAGQgNAFgQAAQgcAAgPgNgAgGApQgRACgIADQgHADgEAGQgDAGAAAIQgBALAJAHQAJAIAQAAQAPAAANgHQAMgHAHgNQAEgJAAgTIAAgKQgPAGgeAFgAgPhIIAUgsIAlAAIgiAsg");
	this.shape_40.setTransform(598.8,749.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.996)").s().p("AgWB1IAAiQIgaAAIAAgVIAaAAIAAgSQAAgRACgIQAEgLALgGQAJgIATAAQALAAAPADIgFAZIgRgBQgMAAgGAFQgEAGAAAPIAAAPIAfAAIAAAVIgfAAIAACQg");
	this.shape_41.setTransform(586.25,749.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgKAaQgKgGgKAAQgKAAgGAGQgIAFgCAKQgFAPAAASIAABWg");
	this.shape_42.setTransform(568.15,752.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAiAAAUAXQAWAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgWAAQgSAAgNANg");
	this.shape_43.setTransform(552.55,752.675);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB1IAAjlIAaAAIAAAVQAJgMALgHQALgFAQAAQAVAAAQALQARAKAIAUQAIAUAAAYQAAAagJASQgJAVgRALQgSALgTAAQgNAAgLgGQgLgGgIgJIAABRgAgghNQgNARAAAgQAAAfAMAQQAOAOASAAQARAAAOgPQAOgQAAghQAAgfgOgQQgNgQgRAAQgSAAgOARg");
	this.shape_44.setTransform(535.25,755.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.996)").s().p("AglBvQgNgFgGgJQgGgIgDgNQgBgIAAgSIAAhmIAcAAIAABbQAAAWACAIQACALAJAHQAIAGANAAQAMAAALgHQALgGAFgLQAEgMAAgVIAAhYIAcAAIAAClIgZAAIAAgYQgTAcghAAQgOAAgNgGgAgQhIIAUgsIAlAAIgjAsg");
	this.shape_45.setTransform(516.925,749.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_46.setTransform(500.025,752.675);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BxIgEgaQAKACAHAAQAJAAAGgDQAGgDADgGQADgEAGgRIACgGIg/imIAeAAIAjBgIALAmQAFgTAHgSIAjhhIAcAAIg/CoQgKAbgFALQgHAOgKAGQgKAHgNAAQgIAAgKgEg");
	this.shape_47.setTransform(1017.9,718.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAjlIAbAAIAADlg");
	this.shape_48.setTransform(997.25,711.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQAAgMAGgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgOAFQgOAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgGADgFAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_49.setTransform(984.8,714.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQgBgRgDgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAiAAQAPAAANAGQAMAFAGAJQAHAIACAMQABAIAAAUIAABlg");
	this.shape_50.setTransform(967.05,714.725);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_51.setTransform(954.65,711.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.996)").s().p("AgxBpQgSgNABgbIAbAEQABAMAJAGQAKAIASAAQASAAALgIQALgIADgNQACgJAAgbQgSAVgbAAQghAAgUgZQgSgZAAghQAAgYAIgTQAJgVARgLQAPgKAWgBQAdABATAXIAAgUIAaAAIAACPQAAAmgHARQgJAPgQAKQgSAKgYAAQgeAAgSgOgAgehPQgOAPAAAeQAAAgAOAPQAMAOATAAQATAAANgOQAOgOAAggQAAgegOgQQgNgPgUAAQgRAAgNAPg");
	this.shape_52.setTransform(941.65,718.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_53.setTransform(929.75,711.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgJAaQgLgGgLAAQgJAAgGAGQgIAFgDAKQgEAPAAASIAABWg");
	this.shape_54.setTransform(922.15,714.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_55.setTransform(906.575,714.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.996)").s().p("AgQAbQAJgEAEgIQADgIABgNIgPAAIAAggIAfAAIAAAgQAAARgHALQgFALgNAGg");
	this.shape_56.setTransform(884.3,723.875);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQABAHAAATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgGADgEAGQgEAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_57.setTransform(870.95,714.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAIgTARgLQAQgLAVAAQAOAAAMAGQAMAGAHAKIAAhSIAcAAIAADlIgaAAIAAgWQgQAZgeAAQgTABgRgLgAgegSQgMAQAAAfQAAAgANARQAOAPARAAQASAAANgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAPg");
	this.shape_58.setTransform(852.65,711.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_59.setTransform(840.8,711.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBtQgIgGgDgIQgEgIAAgYIAAhfIgVAAIAAgWIAVAAIAAgpIAbgRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACAEQABADADACQAEACAGAAIANgBIADAYQgMADgIAAQgQAAgIgEg");
	this.shape_60.setTransform(832.95,712.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgKAaQgKgGgKAAQgKAAgGAGQgIAFgDAKQgEAPAAASIAABWg");
	this.shape_61.setTransform(824.3,714.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWAAgpQgBgpAWgXQAWgXAhAAQAiAAAUAXQAWAWAAApIAAAHIh7AAQABAbAPAPQANAOAUAAQAQAAAKgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_62.setTransform(808.7,714.925);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBjIAKAhIAKgfIAlhlIAdAAIg/Clg");
	this.shape_63.setTransform(791.925,714.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_64.setTransform(780.35,711.75);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAJgTAQgLQAQgLAVAAQAOAAAMAGQAMAGAHAKIAAhSIAcAAIAADlIgaAAIAAgWQgQAZgeAAQgTABgRgLgAgdgSQgNAQAAAfQAAAgAOARQAMAPASAAQASAAAOgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAPg");
	this.shape_65.setTransform(767.3,711.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.996)").s().p("AgQAbQAJgEAEgIQAEgIAAgNIgPAAIAAggIAfAAIAAAgQAAARgGALQgHALgMAGg");
	this.shape_66.setTransform(745.55,723.875);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgOgNAAgVQgBgMAGgKQAFgKAKgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgTAAgKAHQgKAHgEASIgcgEQAEgRAJgLQAJgLAPgGQARgGAUAAQAWAAANAFQANAFAGAIQAHAHACAMQACAHAAATIAAAkQAAAnACALQABAKAGAKIgeAAQgFgJAAgMQgQAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgHADQgHADgFAGQgDAGAAAHQAAALAIAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_67.setTransform(732.2,714.925);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_68.setTransform(715.875,714.925);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_69.setTransform(703.85,711.75);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQAAgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQACAIAAAUIAABlg");
	this.shape_70.setTransform(691.35,714.725);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.996)").s().p("AglBvQgNgFgGgJQgGgIgDgNQgBgIAAgSIAAhmIAcAAIAABbQAAAWACAIQACALAJAHQAIAGANAAQAMAAALgHQALgGAFgLQAEgMAAgVIAAhYIAcAAIAAClIgZAAIAAgYQgTAcghAAQgOAAgNgGgAgQhIIAUgsIAlAAIgjAsg");
	this.shape_71.setTransform(673.475,711.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgOgNAAgVQgBgMAGgKQAFgKAKgGQAJgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgUAAgJAHQgJAHgFASIgcgEQAEgRAJgLQAJgLAPgGQARgGAVAAQAUAAAOAFQANAFAHAIQAGAHACAMQACAHAAATIAAAkQAAAnACALQABAKAGAKIgeAAQgEgJgBgMQgQAOgPAFQgNAGgRAAQgbAAgPgOgAgGAKQgRADgHADQgHADgFAGQgEAGAAAHQABALAIAIQAJAHAQAAQAPAAANgHQANgHAGgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_72.setTransform(646.8,714.925);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_73.setTransform(634.45,711.75);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_74.setTransform(623.375,714.925);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQAAgRgEgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAQAAANAGQAMAFAGAJQAHAIACAMQABAIABAUIAABlg");
	this.shape_75.setTransform(605.95,714.725);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAiAAAUAXQAWAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_76.setTransform(588.1,714.925);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_77.setTransform(575.75,711.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgKAaQgKgGgKAAQgKAAgGAGQgIAFgCAKQgFAPAAASIAABWg");
	this.shape_78.setTransform(568.15,714.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAiAAAUAXQAWAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgWAAQgSAAgNANg");
	this.shape_79.setTransform(552.55,714.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB0IAAjkIAaAAIAAAWQAJgNALgGQALgHAQAAQAVABAQAKQARALAIAUQAIAUAAAYQAAAZgJAUQgJAUgRALQgSALgTAAQgNAAgLgGQgLgGgIgJIAABQgAgghNQgNARAAAgQAAAfAMAPQAOAPASABQARAAAOgQQAOgQAAggQAAgggOgQQgNgPgRAAQgSAAgOAQg");
	this.shape_80.setTransform(535.25,717.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.996)").s().p("AArBTIgig0IgJgNIgqBBIgiAAIA8hVIg4hQIAjAAIAZAnIAMASIAMgSIAcgnIAiAAIg6BOIA9BXg");
	this.shape_81.setTransform(517.95,714.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWAAgpQAAgpAXgXQAVgXAhAAQAiAAAVAXQAUAWAAApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAQAAALgIQAKgIAHgSIAdAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_82.setTransform(500.95,714.925);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgUAAgJAHQgJAHgFASIgbgEQADgRAJgLQAJgLAQgGQAQgGAUAAQAWAAANAFQANAFAHAIQAFAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgIADQgGADgEAGQgEAGgBAHQAAALAJAIQAIAHARAAQAQAAAMgHQANgHAFgMQAFgKAAgSIAAgKQgPAGgeAEg");
	this.shape_83.setTransform(993.7,677.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQgBgRgDgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgNALgBAgIAABaIgbAAIAAilIAZAAIAAAXQASgbAiAAQAPAAANAGQAMAFAGAJQAHAIACAMQABAIABAUIAABlg");
	this.shape_84.setTransform(975.95,676.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.996)").s().p("AglBPQgNgGgGgIQgGgIgDgNQgBgIAAgSIAAhmIAcAAIAABbQAAAWACAIQACALAJAHQAIAFANAAQAMABALgHQALgHAFgKQAEgMAAgVIAAhYIAcAAIAAClIgZAAIAAgYQgTAcghAAQgOAAgNgGg");
	this.shape_85.setTransform(958.075,677.35);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB1IAAjlIAaAAIAAAWQAJgNALgHQALgFAQAAQAVgBAQALQARALAIAUQAIAUAAAYQAAAagJASQgJAVgSALQgRALgTAAQgNAAgMgGQgLgGgHgJIAABRgAgghNQgOARABAgQgBAfANAQQAOAOASAAQASAAANgPQAOgQAAghQgBgfgNgQQgMgQgSAAQgSAAgOARg");
	this.shape_86.setTransform(931.9,680.15);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB1IAAjlIAaAAIAAAWQAJgNALgHQAMgFAPAAQAVgBARALQAPALAJAUQAIAUAAAYQAAAagJASQgJAVgSALQgRALgTAAQgNAAgMgGQgLgGgHgJIAABRgAgfhNQgOARAAAgQgBAfANAQQANAOATAAQASAAANgPQAOgQAAghQgBgfgMgQQgNgQgSAAQgSAAgNARg");
	this.shape_87.setTransform(914.1,680.15);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.996)").s().p("ABJByIgbhFIhfAAIgZBFIggAAIBYjjIAfAAIBeDjgAgPguIgZBDIBNAAIgYg/QgLgdgFgTQgEAXgIAVg");
	this.shape_88.setTransform(894.125,674);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_89.setTransform(875.325,677.175);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.996)").s().p("AgDBsQgJgFgEgHQgCgJAAgZIAAheIgVAAIAAgWIAVAAIAAgpIAagRIAAA6IAcAAIAAAWIgcAAIAABgQAAAMACADQABAEAEACQADACAGAAIAMgBIAFAZQgMACgKAAQgPAAgHgFg");
	this.shape_90.setTransform(863.15,674.35);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgPgNAAgVQAAgMAGgKQAFgKAKgGQAJgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgTAAgKAHQgKAHgEASIgcgEQAEgRAJgLQAJgLAPgGQARgGAUAAQAWAAANAFQANAFAGAIQAHAHACAMQABAHAAATIAAAkQAAAnADALQABAKAFAKIgdAAQgFgJAAgMQgQAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgIADQgHADgEAGQgDAGAAAHQAAALAIAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_91.setTransform(849.55,677.175);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.996)").s().p("AAnByIAAhpQAAgTgJgLQgJgJgRAAQgLAAgLAHQgLAGgFALQgFAKAAATIAABbIgcAAIAAjjIAcAAIAABSQAUgXAdAAQATAAANAHQAOAHAGANQAGANAAAXIAABpg");
	this.shape_92.setTransform(831.825,674);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.996)").s().p("AA3ByIgwitIgHgbIgGAbIgxCtIgfAAIg8jjIAfAAIAjCUIAJAwIALgrIAriZIAkAAIAhBzQAMArAFAmIAMgyIAkiSIAeAAIg/Djg");
	this.shape_93.setTransform(807.875,674);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgJAaQgLgGgKAAQgJAAgHAGQgHAFgDAKQgFAPAAASIAABWg");
	this.shape_94.setTransform(779.8,676.975);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_95.setTransform(764.225,677.175);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB1IAAjlIAZAAIAAAWQAKgNALgHQAMgFAPAAQAVgBARALQAPALAJAUQAIAUAAAYQAAAagJASQgJAVgSALQgRALgTAAQgNAAgLgGQgLgGgIgJIAABRgAgfhNQgPARAAAgQABAfANAQQAMAOATAAQARAAAOgPQANgQAAghQABgfgNgQQgOgQgRAAQgSAAgNARg");
	this.shape_96.setTransform(746.9,680.15);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWAAgpQgBgpAWgXQAWgXAhAAQAhAAAVAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAQAAAKgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_97.setTransform(719.7,677.175);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBsQgIgFgDgHQgDgJgBgZIAAheIgVAAIAAgWIAVAAIAAgpIAbgRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACADQABAEADACQAEACAGAAIANgBIADAZQgMACgIAAQgQAAgIgFg");
	this.shape_98.setTransform(706.6,674.35);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgKAaQgKgGgLAAQgJAAgGAGQgIAFgDAKQgEAPAAASIAABWg");
	this.shape_99.setTransform(697.95,676.975);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgOgNAAgVQgBgMAGgKQAFgKAKgGQAJgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgUAAgJAHQgJAHgFASIgcgEQAEgRAJgLQAJgLAPgGQARgGAVAAQAUAAAOAFQANAFAHAIQAGAHACAMQACAHAAATIAAAkQAAAnACALQABAKAGAKIgeAAQgEgJgBgMQgQAOgPAFQgNAGgRAAQgbAAgPgOgAgGAKQgRADgHADQgHADgFAGQgEAGABAHQAAALAIAIQAJAHAQAAQAPAAANgHQANgHAFgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_100.setTransform(682.35,677.175);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB1IAAjlIAaAAIAAAWQAJgNALgHQALgFAQAAQAVgBAQALQAQALAJAUQAIAUAAAYQAAAagJASQgJAVgRALQgSALgTAAQgNAAgMgGQgLgGgHgJIAABRgAgghNQgOARABAgQgBAfANAQQAOAOASAAQASAAANgPQAOgQAAghQgBgfgNgQQgMgQgSAAQgSAAgOARg");
	this.shape_101.setTransform(665.05,680.15);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.996)").s().p("ABUBVIAAhoQABgRgDgHQgDgHgHgFQgHgFgKAAQgSAAgLAMQgMAMAAAZIAABgIgbAAIAAhrQAAgTgGgJQgIgKgPAAQgMAAgKAHQgKAGgFAMQgEAMgBAXIAABVIgcAAIAAilIAaAAIAAAXQAHgMANgHQANgIARAAQATAAALAIQALAHAFAOQAUgdAfAAQAZAAANAOQANANAAAdIAABxg");
	this.shape_102.setTransform(642.45,676.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_103.setTransform(620.125,677.175);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_104.setTransform(603.775,677.175);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BxIgEgaQAKACAHAAQAJAAAGgDQAFgDAEgGQACgEAHgRIACgGIg/imIAeAAIAjBgIALAmQAFgTAHgSIAjhhIAcAAIg/CoQgKAbgFALQgHAOgKAGQgKAHgNAAQgIAAgKgEg");
	this.shape_105.setTransform(578.5,680.525);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgQgNABgVQAAgMAFgKQAFgKAJgGQAKgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgUAAgJAHQgKAHgEASIgcgEQAEgRAJgLQAIgLARgGQAQgGAVAAQAUAAAOAFQANAFAHAIQAFAHADAMQABAHABATIAAAkQAAAnABALQACAKAGAKIgeAAQgEgJgCgMQgPAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgHADQgIADgDAGQgFAGAAAHQAAALAJAIQAIAHARAAQAQAAAMgHQANgHAFgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_106.setTransform(552.5,677.175);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWAAgpQAAgpAXgXQAVgXAhAAQAiAAAVAXQAUAWAAApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAQAAALgIQAKgIAHgSIAdAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_107.setTransform(534.7,677.175);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgJAaQgLgGgLAAQgIAAgHAGQgHAFgEAKQgEAPAAASIAABWg");
	this.shape_108.setTransform(521.85,676.975);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.996)").s().p("Ag1BoQgXgQgMgcQgMgdAAggQAAgjANgbQAOgbAZgNQAagOAdgBQAiAAAYASQAXARAJAhIgeAGQgIgYgPgMQgPgMgXAAQgZAAgSANQgSANgHAVQgHAVAAAXQAAAdAJAVQAIAWASAKQASAMAUAAQAZAAASgPQASgPAGgdIAeAIQgJAlgZAUQgZATgkABQgkAAgXgPg");
	this.shape_109.setTransform(503.875,674);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.996)").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape_110.setTransform(989.45,646.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgQgNABgVQAAgMAFgKQAFgKAJgGQAKgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgUAAgJAHQgKAHgEASIgcgEQAEgRAJgLQAIgLARgGQAQgGAVAAQAUAAAOAFQANAFAHAIQAFAHADAMQABAHABATIAAAkQAAAnABALQACAKAGAKIgeAAQgEgJgCgMQgPAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgHADQgIADgDAGQgFAGAAAHQAAALAJAIQAIAHARAAQAQAAAMgHQANgHAFgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_111.setTransform(975.95,639.425);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAJgTAQgMQAQgKAVAAQAOAAAMAGQAMAHAHAJIAAhSIAcAAIAADlIgaAAIAAgWQgQAZgeAAQgUABgQgLgAgdgSQgNAPAAAgQAAAhAOAQQAMAPASAAQASAAAOgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAPg");
	this.shape_112.setTransform(957.65,636.45);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_113.setTransform(945.8,636.25);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBjIAKAhIAKggIAlhkIAdAAIg/Clg");
	this.shape_114.setTransform(934.275,639.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWABgpQAAgpAVgXQAWgXAhAAQAhAAAVAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAPAAAMgIQAKgIAGgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_115.setTransform(908.35,639.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAJgTAQgMQARgKAUAAQAOAAAMAGQAMAHAHAJIAAhSIAcAAIAADlIgaAAIAAgWQgQAZgeAAQgTABgRgLgAgdgSQgNAPAAAgQAAAhAOAQQAMAPASAAQASAAAOgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAPg");
	this.shape_116.setTransform(890.05,636.45);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_117.setTransform(864.725,639.425);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgOgNAAgVQgBgMAGgKQAFgKAKgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgTAAgKAHQgJAHgFASIgcgEQAEgRAJgLQAJgLAPgGQARgGAUAAQAWAAANAFQANAFAGAIQAHAHACAMQACAHAAATIAAAkQAAAnACALQABAKAGAKIgeAAQgFgJAAgMQgQAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgHADQgHADgFAGQgDAGAAAHQAAALAIAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_118.setTransform(847.85,639.425);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQABgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQABAIAAAUIAABlg");
	this.shape_119.setTransform(830.1,639.225);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWAAgpQABgpAVgXQAWgXAhAAQAiAAAVAXQAUAWAAApIAAAHIh6AAQACAbANAPQAOAOAUAAQAPAAAMgIQALgIAGgSIAdAEQgHAZgTAOQgTAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_120.setTransform(812.25,639.425);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAjlIAbAAIAADlg");
	this.shape_121.setTransform(799.8,636.25);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAjlIAbAAIAADlg");
	this.shape_122.setTransform(792.7,636.25);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BxIgEgaQAKACAHAAQAJAAAGgDQAFgDAEgGQACgEAHgRIACgGIg/imIAeAAIAjBgIALAmQAFgTAHgSIAjhhIAcAAIg/CoQgKAbgEALQgIAOgKAGQgKAHgNAAQgIAAgKgEg");
	this.shape_123.setTransform(772.45,642.775);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_124.setTransform(747.325,639.425);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgUAAgJAHQgJAHgFASIgbgEQADgRAJgLQAJgLAQgGQAQgGAUAAQAWAAANAFQANAFAHAIQAFAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgIADQgGADgEAGQgEAGgBAHQAAALAJAIQAIAHARAAQAPAAANgHQANgHAFgMQAFgKAAgSIAAgKQgPAGgeAEg");
	this.shape_125.setTransform(730.45,639.425);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.996)").s().p("AgDBtQgJgFgEgJQgCgHAAgZIAAhfIgVAAIAAgWIAVAAIAAgpIAagRIAAA6IAcAAIAAAWIgcAAIAABgQAAAMACAEQABADAEACQADACAGAAIAMgBIAFAYQgMADgKAAQgPAAgHgEg");
	this.shape_126.setTransform(717.35,636.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAimIAbAAIAACmgAgNhRIAAghIAbAAIAAAhg");
	this.shape_127.setTransform(709.2,636.25);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQAAgRgDgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAiAAQAPAAANAGQAMAFAGAJQAHAIACAMQACAIgBAUIAABlg");
	this.shape_128.setTransform(696.7,639.225);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_129.setTransform(678.875,639.425);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.996)").s().p("AgtBbIAAAWIgaAAIAAjlIAcAAIAABSQASgWAaAAQAQAAANAGQAOAGAJALQAJALAFAQQAFAPAAASQAAAqgVAYQgVAYgegBQgcAAgRgZgAgggRQgNAQAAAdQAAAeAIANQANAWAXAAQARAAANgQQAOgQAAggQAAgfgNgQQgNgPgRAAQgSAAgOAQg");
	this.shape_130.setTransform(661.55,636.45);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(255,255,255,0.996)").s().p("AgQAbQAJgEAEgIQAEgIAAgNIgPAAIAAggIAfAAIAAAgQAAARgHALQgFALgNAGg");
	this.shape_131.setTransform(638.8,648.375);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_132.setTransform(626.325,639.425);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgOgNAAgVQgBgMAGgKQAFgKAKgGQAJgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgUAAgJAHQgJAHgFASIgcgEQAEgRAJgLQAJgLAPgGQARgGAVAAQAUAAAOAFQANAFAHAIQAGAHACAMQACAHAAATIAAAkQAAAnACALQABAKAGAKIgeAAQgEgJgBgMQgQAOgPAFQgNAGgRAAQgbAAgPgOgAgGAKQgRADgHADQgHADgFAGQgEAGAAAHQABALAIAIQAJAHAQAAQAQAAAMgHQANgHAFgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_133.setTransform(609.45,639.425);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQABgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgdAAIAAilIAaAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQABAIAAAUIAABlg");
	this.shape_134.setTransform(591.7,639.225);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAPAAAOAJIgJAaQgLgGgLAAQgIAAgHAGQgIAFgDAKQgEAPAAASIAABWg");
	this.shape_135.setTransform(578.8,639.225);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWABgpQAAgpAVgXQAWgXAhAAQAhAAAVAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAPAAAMgIQAKgIAGgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_136.setTransform(563.2,639.425);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAJgTAQgMQARgKAUAAQAOAAAMAGQAMAHAHAJIAAhSIAcAAIAADlIgaAAIAAgWQgQAZgeAAQgTABgRgLgAgdgSQgNAPAAAgQAAAhAOAQQAMAPASAAQATAAANgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAPg");
	this.shape_137.setTransform(544.9,636.45);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_138.setTransform(527.625,639.425);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(255,255,255,0.996)").s().p("ABVBVIAAhoQAAgRgDgHQgDgHgHgFQgIgFgJAAQgSAAgLAMQgLAMAAAZIAABgIgcAAIAAhrQAAgTgGgJQgIgKgPAAQgMAAgKAHQgKAGgFAMQgEAMAAAXIAABVIgcAAIAAilIAZAAIAAAXQAIgMANgHQAMgIARAAQATAAALAIQALAHAFAOQATgdAgAAQAZAAANAOQAOANAAAdIAABxg");
	this.shape_139.setTransform(505.5,639.225);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_140.setTransform(994.575,601.675);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgPgNAAgVQAAgMAGgKQAGgKAJgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLAQgGQARgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQABAHAAATIAAAkQAAAnADALQABAKAFAKIgdAAQgEgJgCgMQgPAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgIADQgHADgEAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_141.setTransform(977.7,601.675);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgaQAAgYAIgUQAIgUARgKQAQgLAVAAQAOAAAMAGQALAGAIALIAAhSIAcAAIAADjIgaAAIAAgUQgQAZgeAAQgUAAgQgMgAgegRQgMAPAAAfQAAAgANAQQAOAQARAAQATAAAMgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAQg");
	this.shape_142.setTransform(959.4,598.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgPgNABgVQgBgMAGgKQAFgKAKgGQAJgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgUAAgJAHQgJAHgFASIgcgEQAEgRAJgLQAJgLAPgGQARgGAVAAQAUAAAOAFQANAFAHAIQAFAHADAMQABAHABATIAAAkQAAAnABALQACAKAGAKIgeAAQgEgJgBgMQgQAOgOAFQgOAGgRAAQgbAAgPgOgAgGAKQgRADgHADQgIADgDAGQgFAGAAAHQAAALAJAIQAIAHARAAQAQAAAMgHQAMgHAGgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_143.setTransform(942.1,601.675);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.996)").s().p("ABUBVIAAhoQAAgRgCgHQgDgHgHgFQgHgFgKAAQgRAAgMAMQgMAMAAAZIAABgIgbAAIAAhrQAAgTgHgJQgGgKgQAAQgMAAgKAHQgKAGgEAMQgFAMgBAXIAABVIgcAAIAAilIAaAAIAAAXQAHgMANgHQANgIARAAQASAAAMAIQALAHAFAOQAUgdAfAAQAZAAANAOQANANAAAdIAABxg");
	this.shape_144.setTransform(920,601.475);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_145.setTransform(903.1,598.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQAAgRgDgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQACAIAAAUIAABlg");
	this.shape_146.setTransform(890.6,601.475);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgGADgFAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_147.setTransform(872.75,601.675);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_148.setTransform(846.925,601.675);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWABgpQAAgpAVgXQAWgXAhAAQAhAAAVAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAPAAAMgIQAKgIAGgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_149.setTransform(830.05,601.675);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQAAgRgDgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQACAIAAAUIAABlg");
	this.shape_150.setTransform(812.3,601.475);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_151.setTransform(794.475,601.675);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_152.setTransform(782.1,598.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_153.setTransform(771.025,601.675);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgPgNABgVQgBgMAGgKQAFgKAJgGQAKgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgUAAgJAHQgJAHgFASIgcgEQAEgRAJgLQAJgLAPgGQARgGAVAAQAUAAAOAFQANAFAHAIQAFAHADAMQABAHABATIAAAkQAAAnACALQABAKAGAKIgeAAQgEgJgBgMQgQAOgOAFQgOAGgRAAQgbAAgPgOgAgGAKQgRADgHADQgIADgDAGQgFAGAAAHQAAALAJAIQAIAHARAAQAQAAAMgHQAMgHAGgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_154.setTransform(753.55,601.675);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBsQgIgEgDgJQgDgIAAgZIAAheIgWAAIAAgWIAWAAIAAgpIAagRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACADQABAEADACQAEACAGAAIANgBIADAZQgLACgJAAQgQAAgIgFg");
	this.shape_155.setTransform(740.45,598.85);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_156.setTransform(732.3,598.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBiIAKAiIAKgfIAlhlIAdAAIg/Clg");
	this.shape_157.setTransform(720.775,601.65);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQgBgRgDgJQgDgIgJgFQgIgGgLAAQgRAAgNAMQgOALAAAgIAABaIgcAAIAAilIAaAAIAAAXQASgbAiAAQAPAAANAGQAMAFAGAJQAHAIACAMQABAIAAAUIAABlg");
	this.shape_158.setTransform(703.8,601.475);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_159.setTransform(691.4,598.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQABgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgdAAIAAilIAaAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQABAIAAAUIAABlg");
	this.shape_160.setTransform(670,601.475);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_161.setTransform(652.175,601.675);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,255,255,0.996)").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_162.setTransform(635.825,601.675);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_163.setTransform(610.325,601.675);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_164.setTransform(593.475,601.675);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgaQAAgYAIgUQAJgUAQgKQAQgLAVAAQAOAAAMAGQAMAGAHALIAAhSIAcAAIAADjIgaAAIAAgUQgQAZgeAAQgUAAgQgMgAgdgRQgNAPAAAfQAAAgAOAQQAMAQASAAQASAAAOgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAQg");
	this.shape_165.setTransform(575.15,598.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgQgNAAgVQAAgMAGgKQAGgKAJgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLAQgGQARgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQABAHAAATIAAAkQAAAnADALQABAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgHADgEAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_166.setTransform(557.85,601.675);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(255,255,255,0.996)").s().p("AgDBsQgJgEgEgJQgDgIAAgZIAAheIgUAAIAAgWIAUAAIAAgpIAbgRIAAA6IAcAAIAAAWIgcAAIAABgQAAAMACADQABAEAEACQADACAGAAIAMgBIAFAZQgMACgKAAQgPAAgHgFg");
	this.shape_167.setTransform(544.75,598.85);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_168.setTransform(536.6,598.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBiIAKAiIAKgfIAlhlIAdAAIg/Clg");
	this.shape_169.setTransform(525.075,601.65);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,255,255,0.996)").s().p("AAnBVIAAhkQAAgRgDgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQACAIAAAUIAABlg");
	this.shape_170.setTransform(508.1,601.475);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_171.setTransform(495.7,598.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_172.setTransform(998.225,563.925);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(255,255,255,0.996)").s().p("AglBPQgNgFgGgJQgGgJgDgMQgBgIAAgSIAAhmIAcAAIAABbQAAAWACAIQACALAJAGQAIAHANgBQAMAAALgGQALgHAFgLQAEgLAAgVIAAhYIAcAAIAAClIgZAAIAAgYQgTAcghAAQgOAAgNgGg");
	this.shape_173.setTransform(981.325,564.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBtQgIgFgEgIQgCgIAAgZIAAhfIgWAAIAAgWIAWAAIAAgpIAagRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACAEQABADADACQAEACAGAAIANgBIADAYQgMADgIAAQgQAAgIgEg");
	this.shape_174.setTransform(968.25,561.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgPgNAAgVQAAgMAGgKQAGgKAJgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLAQgGQARgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQABAHAAATIAAAkQAAAnADALQABAKAFAKIgdAAQgEgJgCgMQgPAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgIADQgHADgEAGQgDAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_175.setTransform(945.75,563.925);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWAAgpQgBgpAWgXQAWgXAhAAQAiAAAUAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAQAAAKgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_176.setTransform(919.05,563.925);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgZQAAgZAIgTQAJgVAQgLQARgKAUAAQAOAAAMAGQAMAHAHAJIAAhSIAcAAIAADlIgaAAIAAgWQgQAZgeAAQgUAAgQgLgAgegSQgMAPAAAhQAAAgAOAQQANAPARAAQATAAANgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgNAPg");
	this.shape_177.setTransform(900.75,560.95);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(255,255,255,0.996)").s().p("AAoBVIAAhkQAAgRgEgJQgDgIgIgFQgJgGgLAAQgRAAgNAMQgNALAAAgIAABaIgcAAIAAilIAZAAIAAAXQASgbAhAAQAPAAANAGQANAFAGAJQAGAIADAMQACAIAAAUIAABlg");
	this.shape_178.setTransform(883.5,563.725);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAhAAAWAXQAVAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgWAAQgSAAgNANg");
	this.shape_179.setTransform(865.65,563.925);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgKAaQgKgGgKAAQgJAAgHAGQgHAFgDAKQgFAPAAASIAABWg");
	this.shape_180.setTransform(852.8,563.725);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB0IAAjkIAZAAIAAAVQAKgMALgHQAMgFAPgBQAVAAARAMQAPAKAJAUQAIAUAAAYQAAAZgJATQgJAVgSALQgRALgTAAQgNAAgMgGQgLgGgHgJIAABQgAgfhNQgOARgBAgQABAfANAPQAMAQATgBQARAAAOgPQANgQAAggQABgggNgQQgNgPgSAAQgSAAgNAQg");
	this.shape_181.setTransform(837.7,566.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgJAaQgLgGgKAAQgJAAgHAGQgHAFgDAKQgFAPAAASIAABWg");
	this.shape_182.setTransform(824.35,563.725);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_183.setTransform(808.775,563.925);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_184.setTransform(791.825,563.925);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BxIgEgaQAKACAHAAQAJAAAGgDQAGgDADgGQACgEAHgRIACgGIg/imIAeAAIAjBgIALAmQAFgTAHgSIAjhhIAcAAIg/CoQgKAbgFALQgHAOgKAGQgKAHgNAAQgIAAgKgEg");
	this.shape_185.setTransform(767.15,567.275);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAjlIAbAAIAADlg");
	this.shape_186.setTransform(746.5,560.75);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWAAgpQAAgpAXgXQAVgXAhAAQAiAAAVAXQAUAWAAApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAQAAALgIQAKgIAHgSIAdAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_187.setTransform(734.05,563.925);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB0IAAjkIAZAAIAAAVQAKgMALgHQAMgFAPgBQAVAAARAMQAPAKAJAUQAIAUAAAYQAAAZgJATQgJAVgSALQgRALgTAAQgNAAgLgGQgLgGgIgJIAABQgAgfhNQgOARgBAgQABAfANAPQAMAQATgBQARAAAOgPQANgQAAggQABgggNgQQgOgPgRAAQgSAAgNAQg");
	this.shape_188.setTransform(716.75,566.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BJQgOgNAAgVQgBgMAGgKQAFgKAKgGQAIgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgTAAgKAHQgKAHgEASIgcgEQAEgRAJgLQAJgLAPgGQARgGAUAAQAWAAANAFQANAFAGAIQAHAHACAMQACAHAAATIAAAkQAAAnACALQABAKAGAKIgeAAQgFgJAAgMQgQAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgHADQgHADgFAGQgDAGAAAHQAAALAIAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape_189.setTransform(698.45,563.925);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB0IAAjkIAaAAIAAAVQAJgMALgHQALgFAQgBQAVAAAQAMQAQAKAJAUQAIAUAAAYQAAAZgJATQgJAVgRALQgSALgTAAQgNAAgMgGQgLgGgHgJIAABQgAgghNQgNARAAAgQAAAfAMAPQAOAQASgBQARAAAOgPQAOgQAAggQAAgggOgQQgMgPgSAAQgSAAgOAQg");
	this.shape_190.setTransform(681.15,566.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAjlIAbAAIAADlg");
	this.shape_191.setTransform(659.3,560.75);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAhAAAWAXQAUAWAAApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQALgIAHgSIAdAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_192.setTransform(646.85,563.925);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgZQAAgZAIgTQAIgVARgLQAQgKAVAAQAOAAAMAGQALAHAIAJIAAhSIAcAAIAADlIgaAAIAAgWQgQAZgeAAQgTAAgRgLgAgdgSQgNAPAAAhQAAAgANAQQAOAPARAAQASAAANgPQANgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAPg");
	this.shape_193.setTransform(628.55,560.95);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWABgpQAAgpAVgXQAWgXAhAAQAhAAAVAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAPAAAMgIQAKgIAGgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_194.setTransform(602.35,563.925);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(255,255,255,0.996)").s().p("AgEBtQgIgFgDgIQgDgIAAgZIAAhfIgWAAIAAgWIAWAAIAAgpIAagRIAAA6IAdAAIAAAWIgdAAIAABgQAAAMACAEQABADADACQAEACAGAAIANgBIADAYQgLADgJAAQgQAAgIgEg");
	this.shape_195.setTransform(589.25,561.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgUAAgJAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAVAAQAVAAANAFQANAFAGAIQAGAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgIADQgGADgEAGQgEAGgBAHQAAALAJAIQAIAHARAAQAPAAANgHQANgHAFgMQAFgKAAgSIAAgKQgPAGgeAEg");
	this.shape_196.setTransform(575.65,563.925);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBpQgRgKgJgUQgJgUAAgZQAAgZAIgTQAIgVARgLQARgKAUAAQAOAAAMAGQALAHAIAJIAAhSIAcAAIAADlIgaAAIAAgWQgQAZgeAAQgTAAgRgLgAgdgSQgNAPAAAhQAAAgANAQQAOAPARAAQASAAAOgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAPg");
	this.shape_197.setTransform(557.35,560.95);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(255,255,255,0.996)").s().p("AgaBzIAAilIAbAAIAAClgAgchGIAVgsIAkAAIghAsg");
	this.shape_198.setTransform(545.975,560.675);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(255,255,255,0.996)").s().p("AgMBTIg/ilIAeAAIAjBjIAKAhIAKggIAlhkIAdAAIg/Clg");
	this.shape_199.setTransform(532.175,563.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(255,255,255,0.996)").s().p("AgNBzIAAjlIAbAAIAADlg");
	this.shape_200.setTransform(520.5,560.75);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(255,255,255,0.996)").s().p("Ag5BnQgZgQgNgbQgNgbAAgeQAAg4AeghQAfgfAvAAQAggBAZAQQAaAPANAbQANAbABAhQgBAjgOAcQgOAbgZAPQgaAOgegBQgfAAgagPgAg2hGQgYAXAAAyQAAAqAXAYQAXAXAgAAQAiAAAWgXQAXgZgBgsQABgbgKgUQgJgWgTgLQgSgLgWAAQggAAgXAVg");
	this.shape_201.setTransform(504.65,560.75);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(255,255,255,0.996)").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape_202.setTransform(823.9,532.85);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_203.setTransform(811.275,526.175);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgVgWAAgpQgBgpAWgXQAWgXAhAAQAhAAAVAXQAWAWAAApIAAAHIh7AAQACAbAOAPQANAOAUAAQAQAAAKgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_204.setTransform(794.4,526.175);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAjjIAbAAIAADjg");
	this.shape_205.setTransform(781.95,523);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(255,255,255,0.996)").s().p("AgtBbIAAAVIgaAAIAAjjIAcAAIAABRQASgWAaAAQAQAAANAGQAOAGAJALQAJAMAFAPQAFAPAAASQAAAqgVAYQgVAXgeABQgcAAgRgagAgggRQgNAQAAAdQAAAeAIAOQANAVAXAAQARAAANgQQAOgQAAggQAAgfgNgPQgNgQgRAAQgSAAgOAQg");
	this.shape_206.setTransform(770,523.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQABAHAAATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgGADgEAGQgEAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_207.setTransform(751.7,526.175);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(255,255,255,0.996)").s().p("AgsBVIAAilIAZAAIAAAZQAKgSAIgFQAHgGAKAAQAOAAAPAJIgJAaQgLgGgKAAQgJAAgHAGQgHAFgDAKQgFAPAAASIAABWg");
	this.shape_208.setTransform(738.85,525.975);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(255,255,255,0.996)").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_209.setTransform(723.275,526.175);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(255,255,255,0.996)").s().p("ABUBVIAAhoQAAgRgCgHQgDgHgHgFQgIgFgJAAQgSAAgLAMQgLAMAAAZIAABgIgcAAIAAhrQAAgTgGgJQgIgKgPAAQgMAAgKAHQgKAGgFAMQgEAMAAAXIAABVIgcAAIAAilIAZAAIAAAXQAHgMAOgHQANgIAQAAQASAAAMAIQALAHAFAOQATgdAgAAQAZAAANAOQAOANAAAdIAABxg");
	this.shape_210.setTransform(701.15,525.975);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(255,255,255,0.996)").s().p("Ag2BAQgWgWAAgpQAAgpAXgXQAVgXAhAAQAhAAAWAXQAUAWAAApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAAMgIQAKgIAHgSIAdAEQgHAZgTAOQgSAPgdAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgIgLQgOgQgVAAQgTAAgNANg");
	this.shape_211.setTransform(678.8,526.175);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(255,255,255,0.996)").s().p("ABVBVIAAhoQAAgRgDgHQgDgHgHgFQgIgFgJAAQgSAAgLAMQgLAMAAAZIAABgIgcAAIAAhrQAAgTgGgJQgIgKgPAAQgMAAgKAHQgKAGgFAMQgEAMAAAXIAABVIgcAAIAAilIAZAAIAAAXQAIgMANgHQAMgIARAAQATAAALAIQALAHAFAOQATgdAgAAQAZAAANAOQAOANAAAdIAABxg");
	this.shape_212.setTransform(656.7,525.975);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BxIgEgaQAKACAHAAQAJAAAGgDQAFgDAEgGQACgEAGgRIADgGIg/imIAeAAIAjBgIALAmQAFgTAHgSIAjhhIAcAAIg/CoQgKAbgEALQgIAOgKAGQgJAHgOAAQgIAAgKgEg");
	this.shape_213.setTransform(626.55,529.525);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(255,255,255,0.996)").s().p("AguBJQgRgNgFgbIAcgEQACARALAIQALAJASAAQATAAAKgHQAJgIAAgLQAAgKgIgFQgGgEgXgGQgegHgMgFQgMgGgGgKQgGgKAAgMQAAgLAFgKQAFgJAJgGQAGgFAMgDQALgEANAAQASAAAPAGQAPAFAHAKQAHAKADAQIgcADQgCgMgJgIQgJgHgPAAQgTAAgJAHQgIAGAAAJQAAAFADAEQAEAFAHADQAEACAUAFQAeAIAMAFQALAEAHAKQAHAKAAAOQAAAOgIANQgIAMgQAHQgPAHgUAAQgfAAgRgOg");
	this.shape_214.setTransform(601.425,526.175);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(255,255,255,0.996)").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAFgKAJgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgKgUAAQgUAAgJAHQgKAHgEASIgbgEQADgRAJgLQAIgLARgGQAQgGAVAAQAUAAAOAFQANAFAHAIQAFAHADAMQABAHAAATIAAAkQAAAnACALQACAKAGAKIgeAAQgEgJgCgMQgPAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgIADQgHADgDAGQgFAGAAAHQAAALAJAIQAIAHARAAQAQAAAMgHQANgHAFgMQAFgKAAgSIAAgKQgQAGgdAEg");
	this.shape_215.setTransform(584.55,526.175);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(255,255,255,0.996)").s().p("AgkBqQgRgMgJgTQgJgUAAgaQAAgYAIgUQAIgUARgKQARgLAUAAQAOAAAMAGQALAGAIAKIAAhRIAcAAIAADjIgaAAIAAgVQgQAageAAQgTgBgRgKgAgdgRQgNAPAAAfQAAAgAOAQQANAQARAAQASAAAOgPQAMgPAAgfQAAghgNgQQgNgQgTAAQgSAAgMAQg");
	this.shape_216.setTransform(566.25,523.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(255,255,255,0.996)").s().p("AgNByIAAikIAbAAIAACkgAgNhRIAAggIAbAAIAAAgg");
	this.shape_217.setTransform(554.4,523);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(255,255,255,0.996)").s().p("AhHB1IAAjlIAZAAIAAAWQAKgNALgGQAMgHAPABQAVgBAQALQARALAIAUQAIAUAAAYQAAAZgJAUQgJAUgRALQgSALgTAAQgNAAgLgGQgLgGgIgJIAABRgAgghNQgOARAAAgQAAAfAOAQQANAPASAAQARAAAOgQQANgQAAghQAAgfgNgQQgNgPgRgBQgSABgOAQg");
	this.shape_218.setTransform(542.35,529.15);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(255,255,255,0.996)").s().p("Ag9BoQgPgOABgUQgBgNAGgKQAFgKAJgGQAKgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgLgJgUAAQgUAAgJAHQgJAHgFARIgcgDQAEgSAJgLQAJgLAPgFQARgGAVAAQAUAAAOAFQANAFAHAHQAFAIADALQABAHABASIAAAmQAAAnACAKQABALAGAJIgeAAQgEgIgBgMQgQANgOAGQgOAFgRAAQgbAAgPgNgAgGApQgRACgHADQgIADgDAGQgFAGAAAIQAAALAJAHQAIAIARAAQAQAAAMgHQAMgHAGgNQAFgJAAgTIAAgKQgQAGgdAFgAgOhIIATgsIAlAAIgjAsg");
	this.shape_219.setTransform(524.05,523.125);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(255,255,255,0.996)").s().p("AA/ByIgfgvQgMgVgKgKQgIgLgGgFQgHgEgGgCIgRgBIgkAAIAABlIgeAAIAAjjIBlAAQAegBAQAHQAQAGAKAPQAJAQABATQgBAZgQAQQgPAQghAFQAMAFAGAFQANANAMASIAoA+gAhGgNIBBAAQAUAAAMgDQAMgFAGgKQAGgJAAgLQAAgRgMgKQgMgKgZAAIhIAAg");
	this.shape_220.setTransform(504.75,523);

	this.instance_3 = new lib.logo_00158();
	this.instance_3.setTransform(464,-9);

	this.instance_4 = new lib.Símbolo11();
	this.instance_4.setTransform(754.1,677.65,1,1,0,0,0,287.2,178.8);
	this.instance_4.alpha = 0.4492;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa_2
	this.instance_5 = new lib.Símbolo14();
	this.instance_5.setTransform(600,600,1,1,0,0,0,600,600);
	this.instance_5.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(524.5,552,675.5,657.2);
// library properties:
lib.properties = {
	id: '9F19E592495FAE4EA74FABDF34D3DF52',
	width: 1050,
	height: 1122,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/fondo.jpg?1748610982283", id:"fondo"},
		{src:"images/logo_00158.png?1748610982283", id:"logo_00158"},
		{src:"images/top_00000.jpg?1748610982283", id:"top_00000"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1748610982283", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1748610982283", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1748610982283", id:"an.Video"}
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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