(function(){
	window.Gadget = Backbone.View.extend({
		className : 'gadget',
		def_size: {
			'1_1': {'sizex':'1', 'sizey':'1', 'display':'1 × 1'},
			'1_2': {'sizex':'1', 'sizey':'2', 'display':'1 × 2'},
			'2_1': {'sizex':'2', 'sizey':'1', 'display':'2 × 1'},
			'2_2': {'sizex':'2', 'sizey':'2', 'display':'2 × 2'},
		},
		events : {
			'click .size' : 'popupSizeBoard',
			'click .popup div': 'resize',
			'click .zoomout': 'onZoomout',
			'click .zoomin': 'onZoomin'
			//'mouseout .popup' : 'closePopup'
		},
		
		initialize: function () {
	    	this.render();
	    	this.defField();
	  	},
	  	render: function () {
	    	$(this.el).html(_.template($('#gadget-template').html()));
	  	},
	  	defField: function () {
	  		// タイトル
	  		this.title = this.$('.title .text');
	  		$(this.title).text(this.options.title);
	  		
	  		// サイズ変更
	  		this.size = this.$('.title .size');
	  		
	  		// サイズ変更ポップアップ
	  		this.popup = this.$('.title .popup');
	  		
	  		// ズームアウト
	  		this.zoomout = this.$('.title .zoomout');
	  		
	  		// ズームイン
	  		this.zoomin = this.$('.title .zoomin');
	  		
	  		// contents
	  		this.contents = this.$('.contents');
	  	},
	  	afterFixedSize: function(){
	  		this.createContents();
	  		this.createSizePopup();
	  		
	  		if(this.options.panel && this.options.panel['max']){
	  			$(this.zoomout).css("display", "inline-block");
	  		}
	  	},
	  	createContents: function(){
	  		for(var i in this.def_size){
	  			if(this.def_size[i].sizex === this.$el.attr('data-sizex') &&
	  				this.def_size[i].sizey === this.$el.attr('data-sizey')){
	  					var targetPanel = this.options.panel && this.options.panel[i];
	  					targetPanel && this.contents.html((new window[targetPanel]).el);
	  					break;			
	  				}
	  		}
	  	},
	  	createSizePopup:function(){
	  		this.popup.html("");
	  		for(var i in this.options.panel){
	  			if(i === 'max'){
	  				continue;
	  			}
	  			if(this.def_size[i].sizex !== this.$el.attr('data-sizex') ||
	  				this.def_size[i].sizey !== this.$el.attr('data-sizey')){
	  					var sizeBoard = this.make('div', null, this.def_size[i].display);
	  					$(sizeBoard).data(this.def_size[i]);
	  					this.popup.append(sizeBoard);
	  				}
	  		}
	  		if(this.popup.children().length > 0){
	  			this.size.attr("style", "display:inline-block;");
	  		}
	  		
	  	},
	  	setGridster : function(gridster){
	  		this.gridster = gridster;
	  	},
	  	popupSizeBoard : function(e){
	  		//this.options.gridster.resize_widget(this.el, 2, 1);
	  		this.popup.attr("style", "display:block;");
	  		this.popup.attr("style", this.popup.attr("style")+"top:"+(e.currentTarget.offsetTop-2)+'px;');
	  		this.popup.attr("style", this.popup.attr("style")+"left:"+(e.currentTarget.offsetLeft-70)+'px;');
	  	},
	  	resize: function(e){
	  		var sizeBoard = $(e.currentTarget).data();
	  		this.options.gridster.resize_widget(this.el, Number(sizeBoard.sizex), Number(sizeBoard.sizey));
	  		this.popup.attr("style", "display:none;");
	  		this.afterFixedSize();
	  	},
	  	closePopup: function(){
	  		this.popup.attr("style", "display:none;");
	  	},
	  	onZoomout: function(){
	  		this.options.row = this.$el.attr('data-row');
	  		this.options.col = this.$el.attr('data-col');
	  		this.options.sizex = this.$el.attr('data-sizex');
	  		this.options.sizey = this.$el.attr('data-sizey');
	  		this.options.sizeStatus = this.size.css('display');
	  		
	  		var zoomoutEL = $(this.el).clone(true);
	  		$(zoomoutEL).find('.title .size').css("display", "none");
	  		$(zoomoutEL).find('.title .zoomout').css("display", "none");
	  		$(zoomoutEL).find('.title .zoomin').css("display", "inline-block");
	  		$(zoomoutEL).find('.contents').html((new window[this.options.panel['max']]).el);
	  		
	  		this.options.zoomoutEL = this.options.zoomoutGridster.add_widget(zoomoutEL, 4, 3, 1, 1);
	
	  		this.zoomout.css("display", "none");
	  	},
	  	onZoomin: function(){
	  		this.options.zoomoutGridster.remove_widget(this.options.zoomoutEL);
	  		this.options.zoomoutGridster.$el.css("height", "0px");
	  		this.zoomout.css("display", "inline-block");
	  	}
	});
})();
