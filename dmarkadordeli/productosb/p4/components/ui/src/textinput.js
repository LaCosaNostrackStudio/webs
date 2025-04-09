(function($) {    

    $.anwidget("an.TextInput", {
        options: {
            'visible': true,
            'disabled': false,
            'text': "",
            'position': 'absolute',
            'rows': 5,
            'cols': 30,
            'fontSize': '1.6rem' // o prueba con '5vw' para tamaño relativo al ancho de la pantalla
        },
        _props: ["left", "top", "width", "height", "position", "transform-origin", "transform", "rows", "cols", "fontSize"],
        _attrs: ["id", "disabled", "class", "rows", "cols"],
        getCreateOptions: function() {
            return $.extend(this.options, { 'id': "textinput" + _widgetID++ });
        },
        getCreateString: function() {
            return "<textarea id='" + this.options.id + "' rows='" + this.options.rows + "' cols='" + this.options.cols + 
                   "' style='resize: none; border: none; outline: none; background: transparent; font-size: " + this.options.fontSize + ";'></textarea>";
        },
        getProperties: function() {
            return this._props;
        },
        getAttributes: function() {
            return this._attrs;
        }
    });

})(jQuery);