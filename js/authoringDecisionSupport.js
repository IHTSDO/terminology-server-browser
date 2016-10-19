
var adsObj = {  
	conceptId : null,
	panel : null,
	panelId: null,
	context: null,
	adsView  : "descendants",
	showTemplates:"Both",

	updatePanel: function() {
		console.log ("Updating ADS Panel selectedView: " + this.panel.options.selectedView +
					" adsView: " + this.adsView +
					" showingTemplates: " + this.showTemplates);
		
		$('#ads-' + this.panelId/*+ "-accordion"*/).html(JST["views/conceptDetailsPlugin/tabs/ads.hbs"](this.context));
		this.setupButtons();
	},

	setupButtons: function() {
		// load relationships panel and home parents/roles
		if (this.adsView == "descendants") {
			$('#ads-' + this.panelId + '-siblings-button').unbind();
			$('#ads-' + this.panelId + '-descendants-button').unbind();
			$('#ads-' + this.panelId + '-descendants-button').addClass("btn-primary");
			$('#ads-' + this.panelId + '-descendants-button').removeClass("btn-default");
			$('#ads-' + this.panelId + '-siblings-button').addClass("btn-default");
			$('#ads-' + this.panelId + '-siblings-button').removeClass("btn-primary");
			$('#ads-' + this.panelId + '-siblings-button').click(function (event) {
				adsObj.adsView = "sibling";
				adsObj.updatePanel();
			});
		} else {
			$('#ads-' + this.panelId + '-siblings-button').unbind();
			$('#ads-' + this.panelId + '-descendants-button').unbind();
			$('#ads-' + this.panelId + '-siblings-button').addClass("btn-primary");
			$('#ads-' + this.panelId + '-siblings-button').removeClass("btn-default");
			$('#ads-' + this.panelId + '-descendants-button').addClass("btn-default");
			$('#ads-' + this.panelId + '-descendants-button').removeClass("btn-primary");
			$('#ads-' + this.panelId + '-descendants-button').click(function (event) {
				adsObj.adsView = "descendants";
				adsObj.updatePanel();
			});
		}
	}
	
}