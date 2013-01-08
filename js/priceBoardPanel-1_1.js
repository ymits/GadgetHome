(function(){
	window.PriceBoardPanel_1_1 = Backbone.View.extend({
		className : 'priceBoardPanel',
		
		initialize: function () {
	    	this.render();
	  	},
	  	render: function () {
	    	$(this.el).html(_.template($('#priceBoardPanel-1_1-template').html()));
	  	}
	});
})();
