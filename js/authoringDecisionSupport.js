function peek (code) {
	try {
		return eval(code); 
	} catch (e) {
		console.log("Skipping error " + e.message);
	}
	return "eval failed";
}
var adsObj = {  
	conceptId : null,
	options : null,
	panelId: null,
	result: null,
	hbsData: {},
	adsView  : "descendants",
	showTemplates:"Both",

	updatePanel: function() {
		console.log ("Updating ADS Panel selectedView: " + this.options.selectedView +
					" adsView: " + this.adsView +
					" showingTemplates: " + this.showTemplates);
		this.setupData();
		$('#ads-' + this.panelId/*+ "-accordion"*/).html(JST["views/conceptDetailsPlugin/tabs/ads.hbs"](this.hbsData));
		this.setupButtons();
	},
	
	setupData: function() {
		this.hbsData.divElementId = this.panelId;
		this.hbsData.id = this.result.id;
		this.hbsData.fsn = this.result.fsn;
		if (this.showTemplates == "Both") {
			this.mergeData();
		} else {
			var selectedDetails = this.options.selectedView + "Details" + this.showTemplates;
			this.hbsData.selectedDetails = eval ("this.result." + selectedDetails);
			if (this.adsView == "descendants") {
				this.hbsData.selectedTemplates = this.hbsData.selectedDetails.descendantTemplates;
				this.hbsData.adsView = "Descendant";
			} else {
				this.hbsData.selectedTemplates = this.hbsData.selectedDetails.siblingTemplates;
				this.hbsData.adsView = "Sibling";
			}
		}
		console.log ("Selected array contains " + peek("adsObj.hbsData.selectedTemplates.length"));
	},
	
	mergeData: function() {
		console.log ("MergingData");
	},
	
	setupButtons: function() {
		this.setupSDButtons();
		this.setupPrimFdButtons();
	},

	setupSDButtons: function() {
		// load relationships panel and home parents/roles
		if (this.adsView == "descendants") {
			this.setupButton("descendants",true,"adsView");
			this.setupButton("siblings",false,"adsView");
		} else {
			this.setupButton("siblings",true,"adsView");
			this.setupButton("descendants",false,"adsView");
		}
	},
	
	setupPrimFdButtons : function() {
		if (this.showTemplates == "Prim") {
			this.setupButton("Prim",true,"showTemplates");
			this.setupButton("FD",false,"showTemplates");
			this.setupButton("Both",false,"showTemplates");
		} else if (this.showTemplates == "FD") {
			this.setupButton("FD",true,"showTemplates");
			this.setupButton("Prim",false,"showTemplates");
			this.setupButton("Both",false,"showTemplates");
		} else {
			this.setupButton("Both",true,"showTemplates");
			this.setupButton("Prim",false,"showTemplates");
			this.setupButton("FD",false,"showTemplates");
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