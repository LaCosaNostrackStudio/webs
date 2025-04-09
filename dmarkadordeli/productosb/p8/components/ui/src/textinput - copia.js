(function($) {    

    $.anwidget("an.TextInput", {
        options: {
            'visible': true,
            'disabled': false,
            'text': "",
            'position': 'absolute',
            'rows': 5, // Número de líneas
            'cols': 30 // Tamaño de las líneas
        },
        _props: ["left", "top", "width", "height", "position", "transform-origin", "transform", "rows", "cols"],
        _attrs: ["id", "disabled", "class", "rows", "cols"],
        getCreateOptions: function() {
            return $.extend(this.options, { 'id': "textinput" + _widgetID++ });
        },
        getCreateString: function() {
            // Se eliminan los bordes y el fondo del textarea
            return "<textarea id='" + this.options.id + "' rows='" + this.options.rows + "' cols='" + this.options.cols + 
                   "' style='resize: none; border: none; outline: none; background: transparent;'></textarea>";
        },
        getProperties: function() {
            return this._props;
        },
        getAttributes: function() {
            return this._attrs;
        }
    });

})(jQuery);