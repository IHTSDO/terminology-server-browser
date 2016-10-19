
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
		this.setupSDButtons();
		this.setupPrimFdButtons();
	},

	setupSDButtons: function() {
		// load relationships panel and home parents/roles
		if (this.adsView == "descendants") {
			$('#ads-' + this.panelId + '-siblings-button').unbind();
			$('#ads-' + this.panelId + '-descendants-button').unbind();
			$('#ads-' + this.panelId + '-descendants-button').addClass("btn-primary");
			$('#ads-' + this.panelId + '-descendants-button').removeClass("btn-default");
			$('#ads-' + this.panelId + '-siblings-button').addClass("btn-default");
			$('#ads-' + this.panelId + '-siblings-button').removeClass("btn-primary");
			$('#ads-' + this.panelId + '-siblings-button').click(function (event) {
				adsObj.adsView = "siblings";
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
	},
	
	setupPrimFdButtons : function() {
		if (this.showTemplates == "prim") {
			this.setupButton("prim",true,"showTemplates");
			this.setupButton("fd",false,"showTemplates");
			this.setupButton("both",false,"showTemplates");
		} else if (this.showTemplates == "fd") {
			this.setupButton("fd",true,"showTemplates");
			this.setupButton("prim",false,"showTemplates");
			this.setupButton("both",false,"showTemplates");
		} else {
			this.setupButton("both",true,"showTemplates");
			this.setupButton("prim",false,"showTemplates");
			this.setupButton("fd",false,"showTemplates");
		}
	},
	
	setupButton : function (buttonName, isActive, targetProperty) {
		$('#ads-' + this.panelId + '-' + buttonName +'-button').unbind();
		if (isActive == true) {
			$('#ads-' + this.panelId + '-' + buttonName +'-button').addClass("btn-primary");
			$('#ads-' + this.panelId + '-' + buttonName +'-button').removeClass("btn-default");
		} else {
			$('#ads-' + this.panelId + '-' + buttonName +'-button').addClass("btn-default");
			$('#ads-' + this.panelId + '-' + buttonName +'-button').removeClass("btn-primary");
			var functionStr = "adsObj." + targetProperty + "=\"" + buttonName + "\";adsObj.updatePanel()";
			var buttonAction = new Function ("event", functionStr);
			$('#ads-' + this.panelId + '-' + buttonName +'-button').click(buttonAction);
		}
	}
	
}