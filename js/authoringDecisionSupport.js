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
	characteristicType: "STATED_RELATIONSHIP",
	options : null,
	panelId: null,
	result: null,
	hbsData: {
		selectedTemplates: null
	},
	adsView  : "descendants",
	showTemplates:"Prim",

	updatePanel: function() {
		console.log ("Updating ADS Panel selectedView: " + this.options.selectedView +
					" adsView: " + this.adsView +
					" showingTemplates: " + this.showTemplates);
		this.setupData();
		console.log("Ads data setup complete");
		this.hbsData.dataOK = (this.hbsData.selectedTemplates.length < 200);

		$('#ads-' + this.panelId/*+ "-accordion"*/).html(JST["views/conceptDetailsPlugin/tabs/ads.hbs"](this.hbsData));
		this.setupButtons();
		
		if (!this.hbsData.dataOK){
			$('#ads-' + this.panelId + "-content").html("<div class='alert alert-warning'>Too many different templates (>200)</div>");
		} else {
			if (typeof this.hbsData.selectedTemplates != "undefined") {
				for (var i=0; i<this.hbsData.selectedTemplates.length; i++) {
					if (typeof this.hbsData.selectedTemplates[i].equivConcept == "undefined") {
						this.convertTemplateToEquivalentConcept(this.hbsData.selectedTemplates[i]);
					}
					drawConceptDiagram (this.hbsData.selectedTemplates[i].equivConcept, $("#ads-" + i), this.options, false);
				}
			}
		}
	},
	
	convertTemplateToEquivalentConcept: function(templateWithCount) {
		var concept = {
						sctid: this.result.id,
						fsn: ">> " + this.result.fsn,
						definitionStatus: "PRIMITIVE"
		};
		var relationships = new Array();
		var groupId = 0;
		var structures = templateWithCount.template.templateStructure;
		for (var i=0; i<structures.length; i++) {
			
			//TODO Add an "ungrouped" flag and set group to 0 if so
			groupId++;
			for (var j=0; j<structures[i].groupTemplateParts.length; j++) {
				var thisTemplatePart = structures[i].groupTemplateParts[j];
				var cardinality = thisTemplatePart.cardinality > 1 ? thisTemplatePart.cardinality + " x ": ""
				var relationship = {
						type: {
							active: true,
							conceptId : thisTemplatePart.id,
							fsn :  cardinality + thisTemplatePart.fsn,
							characteristicType: this.characteristicType
						},
						target: {
							active: true,
							fsn : "TBA"
						},
						active: true,
						groupId: groupId
				};
				relationships.push(relationship);
			}
		}
		//Templates only consider attributes, but concept diagrams must also have a parent
		var parentRelationship = {
				active: true,
				type: { conceptId : 116680003 },
				target: { 	fsn: this.result.fsn,
							definitionStatus: "PRIMITIVE"},
				groupId: 0
		};
		relationships.push(parentRelationship);
		concept.relationships = relationships;
		templateWithCount.equivConcept = concept;
	},
	
	setupData: function() {
		this.hbsData.divElementId = this.panelId;
		this.hbsData.sctId = this.result.sctId;
		this.hbsData.fsn = this.result.fsn;
		
		if (this.options.selectedView == "stated") {
			characteristicType = "STATED_RELATIONSHIP";
		} else {
			characteristicType = "INFERRED_RELATIONSHIP";
		}
		
		if (this.showTemplates == "Both") {
			this.mergePrimFdData();
		} else {
			var selectedDetails = this.options.selectedView + "Details" + this.showTemplates;
			this.hbsData.selectedDetails = eval ("this.result." + selectedDetails);
			if (this.adsView == "descendants") {
				this.hbsData.selectedTemplates = this.hbsData.selectedDetails.descendantTemplates;
				this.hbsData.adsView = "Descendant";
				this.hbsData.count = this.hbsData.selectedDetails.descendantCount;
			} else {
				this.hbsData.selectedTemplates = this.hbsData.selectedDetails.siblingTemplates;
				this.hbsData.adsView = "Sibling";
				this.hbsData.count = this.hbsData.selectedDetails.siblingCount;
			}
		}
		adsObj.hbsData.selectedTemplates.sort(function(a,b) {return (a.count > b.count) ? -1 : ((a.count < b.count) ? 1 : 0);} );
		console.log ("Selected template array contains " + peek("adsObj.hbsData.selectedTemplates.length"));
	},
	
	mergePrimFdData: function() {
		console.log ("Merging Primitive Inferred Data");
		var selectedDetailPrimStr = this.options.selectedView + "DetailsPrim";
		var selectedDetailFDStr = this.options.selectedView + "DetailsFD";
		var primDetails = eval ("this.result." + selectedDetailPrimStr);
		var fdDetails = eval ("this.result." + selectedDetailFDStr);
		var primArray, fdArray;
		if (this.adsView == "descendants") {
			this.hbsData.count = primDetails.descendantCount + fdDetails.descendantCount;
			primArray = primDetails.descendantTemplates;
			fdArray = fdDetails.descendantTemplates;
			this.hbsData.adsView = "Descendant";
		} else {
			this.hbsData.count = primDetails.siblingCount + fdDetails.siblingCount;
			primArray = primDetails.siblingTemplates;
			fdArray = fdDetails.siblingTemplates;
			this.hbsData.adsView = "Sibling";
		}
		this.mergeArrays(primArray, fdArray);
	},
	
	mergeArrays: function(primArray, fdArray) {
		var combined = primArray.concat(fdArray);
		combined.sort(function(a,b) {return (a.template.id > b.template.id) ? 1 : ((a.template.id < b.template.id) ? -1 : 0);} );
		this.hbsData.selectedTemplates = combined;
		//Now loop through the sorted array and replace any duplicates with a merged count
		for(var i=0; i<combined.length -1; ++i) {
			if(combined[i].template.id == combined[i+1].template.id) {
				var mergedCount = combined[i].count + combined[i+1].count;
				var mergedObject = { template : { 
													id : combined[i].template.id,
													templateStructure: combined[i].template.templateStructure
												},
										count: mergedCount
									}
				combined.splice(i, 2, mergedObject);
			}
		}
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
	},
	
	selectConcept : function (sctId) {
		$('#details-tab-link-' + this.panelId).click(); 
		updateCD(this.panelId, sctId);
		/*channel.publish(this.panelId, {
			conceptId: sctId,
			source: this.panelId
		});*/
	}
	
}