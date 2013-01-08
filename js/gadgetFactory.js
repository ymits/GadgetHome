(function(){
	var GadgetFactory = function(){
	};
	
	GadgetFactory.prototype = {
		create: function(options){
			var gadget = new window.Gadget({
		  		'title': options.title,
		  		'gridster': options.gridster,
		  		'zoomoutGridster': options.zoomoutGridster,
		  		'panel': options.panel
		  	});
		  	gadget.el = options.gridster.add_widget(gadget.el, gadget.def_size[options.currenctSize].sizex, gadget.def_size[options.currenctSize].sizey, options.col, options.row);
		  	gadget.afterFixedSize();
			return gadget;		  	
		}
	};
	
	window.GadgetFactory = (function(){
		var factory = new GadgetFactory()
		return {
			getInstance : function(){
				return factory;
			}
		}
	})();
})();