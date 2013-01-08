(function(){
	window.ChartPanel_1_1 = Backbone.View.extend({
		className : 'chartPanel',
		
		initialize: function () {
	    	this.render();
	    	this.defField();
	  	},
	  	render: function () {
	    	$(this.el).html(_.template($('#chartPanel-1_1-template').html()));
	  	},
	  	defField: function(){
	  		var chartArea = this.$('#chart');
	  		
	  		var wide = 240;
	  		var high = 155; 

			var row1;
			var row2;
			var row3;
			var copy_w;
			var copy;
			row1 = '<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0\" width=\"' + wide + '\" height=\" ' + 0 + '\" id=\"ie_chart\" align=\"middle\">\n';
			row2 = '<param name=\"movie\" value=\"http://www.traders-sns.com/ivc/open-flash-chart.swf?width='+ wide +'&height=' + high + '&data=http://www.traders-sns.com/ivc/data/chart-data_1m.php\" />\n';
			row3 = '<embed src=\"http://www.traders-sns.com/ivc/open-flash-chart.swf?data=http://www.traders-sns.com/ivc/data/chart-data_1m.php\" quality=\"high\" bgcolor=\"#FFFFFF\" width=\"' + wide + '\" height=\"' + high + '\" name=\"chart\" align=\"middle\" allowScriptAccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" id=\"chart\"/>\n';
			copy_w = wide;
			copy = '<table><td  style=\"font-size:10px\" width = \"' + copy_w + '\" align = \"right\" >Powered by <a href=\"http://www.traders-sns.com/\" >FLABO</a></td></table>\n';

			chartArea.append(copy);
			chartArea.append(row1);
			chartArea.append('<param name="allowScriptAccess" value="sameDomain" />\n');
			chartArea.append(row2);
			chartArea.append('<param name="quality" value="high" />\n');
			chartArea.append('<param name="bgcolor" value="#FFFFFF" />\n');
			chartArea.append(row3);
			chartArea.append('</object>\n');

	  	}
	});
})();
