(function(){
	window.PriceBoardPanel_2_1 = Backbone.View.extend({
		className : 'priceBoardPanel',
		
		initialize: function () {
	    	this.render();
	  	},
	  	render: function () {
	    	$(this.el).html(_.template($('#priceBoardPanel-2_1-template').html()));
	  	}
	});
})();
