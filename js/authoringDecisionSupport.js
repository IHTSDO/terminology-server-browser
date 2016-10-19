
var adsObj = {  conceptId : null,
				adsView  : "Descendants",
				showTemplates:"Both",
				panelId : null};

function updateAdsPanel(options) {
	console.log ("Updating ADS Panel selectedView: " + options.selectedView +
				" adsView: " + adsObj.adsView +
				" showingTemplates: " + adsObj.showTemplates);
	
	$('#ads-' + adsObj.panelId/*+ "-accordion"*/).html(JST["views/conceptDetailsPlugin/tabs/ads.hbs"](adsObj.context));

}