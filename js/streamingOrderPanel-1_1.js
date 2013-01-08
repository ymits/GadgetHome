(function(){
	window.StreamingOrderPanel_1_1 = Backbone.View.extend({
		className : 'streamingOrderPanel',
		
		initialize: function () {
	    	this.render();
	    	this.defField();
	  	},
	  	render: function () {
	    	$(this.el).html(_.template($('#streamingOrderPanel-1_1-template').html()));
	  	},
	  	defField: function(){
	  		//this.$('select').jcombox({ fx: 'slideFade', fxDelay:400 }); 
	  		$('#amount').spinit({ height: 30, width: 70, min: 0, initValue: 40, max: 255});
	  	}
	});
})();
