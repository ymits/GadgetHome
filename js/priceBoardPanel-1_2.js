(function(){
	window.PriceBoardPanel_1_2 = Backbone.View.extend({
		className : 'priceBoardPanel',
		
		initialize: function () {
	    	this.render();
	  	},
	  	render: function () {
	    	$(this.el).html(_.template($('#priceBoardPanel-1_2-template').html()));
	  	}
	});
})();
