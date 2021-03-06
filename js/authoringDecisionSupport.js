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
		selectedPatterns: null
	},
	adsView  : "descendants",
	showPatterns:"Prim",

	updatePanel: function() {
		if (this.result == null || typeof this.result.sctId == 'undefined') {
			return;
		}
		//console.log ("Updating ADS Panel selectedView: " + this.options.selectedView +
		//			" adsView: " + this.adsView +
		//			" showingPatterns: " + this.showPatterns);
		this.setupData();
		//console.log("Ads data setup complete");
		this.hbsData.dataOK = (this.hbsData.selectedPatterns.length < 200);

		$('#ads-' + this.panelId).html(JST["views/conceptDetailsPlugin/tabs/ads.hbs"](this.hbsData));
		this.setupButtons();
		
		if (!this.hbsData.dataOK){
			$('#ads-' + this.panelId + "-content").html("<div class='alert alert-warning'>Too many different patterns (>200)</div>");
		} else {
			this.drawAdsConceptDiagrams(0);
		}
	},
	
	drawAdsConceptDiagrams: function (calledCount) {
		//Have we been called before?
		calledCount = (typeof calledCount === 'undefined') ? 0 : calledCount;
		//Is our panel visible?  If yes, draw, if no try again in 300ms if we haven't already 
		var isVisible = $('#ads-' + this.panelId).is(":visible");
		if (isVisible && typeof this.hbsData.selectedPatterns != "undefined") {
			for (var i=0; i<this.hbsData.selectedPatterns.length; i++) {
				if (typeof this.hbsData.selectedPatterns[i].equivConcept == "undefined") {
					this.convertPatternToEquivalentConcept(this.hbsData.selectedPatterns[i]);
				}
				drawConceptDiagram (this.hbsData.selectedPatterns[i].equivConcept, $("#ads-" + i), this.options, false);
			}
		} else {
			if (calledCount == 0) {
				setTimeout(function() {adsObj.drawAdsConceptDiagrams(1);}, 300);
			} else {
				console.log ("Skipping ADS draw because not visible");
			}
		}
	},
	
	convertPatternToEquivalentConcept: function(patternWithCount) {
		var concept = {
						sctid: this.result.id,
						fsn: ">> " + this.result.fsn,
						definitionStatus: "PRIMITIVE"
		};
		var relationships = new Array();
		var groupId = 0;
		var structures = patternWithCount.conceptPattern.patternStructure;
		for (var i=0; i<structures.length; i++) {
			
			//TODO Add an "ungrouped" flag and set group to 0 if so
			groupId++;
			for (var j=0; j<structures[i].groupPatternParts.length; j++) {
				var thisPatternPart = structures[i].groupPatternParts[j];
				var cardinality = thisPatternPart.cardinality > 1 ? thisPatternPart.cardinality + " x ": ""
				var relationship = {
						type: {
							active: true,
							conceptId : thisPatternPart.type.sctId,
							fsn :  cardinality + thisPatternPart.type.fsn,
							characteristicType: this.characteristicType
						},
						target: {
							active: true,
							conceptId: thisPatternPart.value.sctId,
							fsn: thisPatternPart.value.fsn,
							definitionStatus: "PRIMITIVE"
						},
						active: true,
						groupId: groupId
				};
				relationships.push(relationship);
			}
		}
		//Patterns only consider attributes, but concept diagrams must also have a parent
		var parentRelationship = {
				active: true,
				type: { conceptId : 116680003 },
				target: { 	fsn: this.result.fsn,
							definitionStatus: "PRIMITIVE"},
				groupId: 0
		};
		relationships.push(parentRelationship);
		if (this.options.selectedView == "stated") {
			concept.statedRelationships = relationships;
		} else {
			concept.relationships = relationships;
		}
		patternWithCount.equivConcept = concept;
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
		
		if (this.showPatterns == "Both") {
			this.mergePrimFdData();
		} else {
			var selectedDetails = this.options.selectedView + "Details" + this.showPatterns;
			this.hbsData.selectedDetails = eval ("this.result." + selectedDetails);
			if (this.adsView == "descendants") {
				this.hbsData.selectedPatterns = this.hbsData.selectedDetails.descendantPatterns;
				this.hbsData.adsView = "Descendant";
				this.hbsData.count = this.hbsData.selectedDetails.descendantCount;
			} else {
				this.hbsData.selectedPatterns = this.hbsData.selectedDetails.childPatterns;
				this.hbsData.adsView = "Child";
				this.hbsData.count = this.hbsData.selectedDetails.childCount;
			}
		}
		adsObj.hbsData.selectedPatterns.sort(function(a,b) {return (a.count > b.count) ? -1 : ((a.count < b.count) ? 1 : 0);} );
		//console.log ("Selected pattern array contains " + peek("adsObj.hbsData.selectedPatterns.length"));
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
			primArray = primDetails.descendantPatterns;
			fdArray = fdDetails.descendantPatterns;
			this.hbsData.adsView = "Descendant";
		} else {
			this.hbsData.count = primDetails.childCount + fdDetails.childCount;
			primArray = primDetails.childPatterns;
			fdArray = fdDetails.childPatterns;
			this.hbsData.adsView = "Child";
		}
		this.mergeArrays(primArray, fdArray);
	},
	
	mergeArrays: function(primArray, fdArray) {
		var combined = primArray.concat(fdArray);
		combined.sort(function(a,b) {return (a.conceptPattern.id > b.conceptPattern.id) ? 1 : ((a.conceptPattern.id < b.conceptPattern.id) ? -1 : 0);} );
		this.hbsData.selectedPatterns = combined;
		//Now loop through the sorted array and replace any duplicates with a merged count
		for(var i=0; i<combined.length -1; ++i) {
			if(combined[i].conceptPattern.id == combined[i+1].conceptPattern.id) {
				var mergedCount = combined[i].count + combined[i+1].count;
				var mergedExamples = this.mergeExamples (combined[i].examples, combined[i+1].examples);
				var mergedObject = { conceptPattern : { 
													id : combined[i].conceptPattern.id,
													patternStructure: combined[i].conceptPattern.patternStructure
												},
										examples: mergedExamples,
										count: mergedCount
									}
				combined.splice(i, 2, mergedObject);
			}
		}
	},
	
	mergeExamples: function(examples1, examples2) {
		var mergedExamples = new Array();
		var notFilled = true;
		for (var x=0; x<10 && notFilled; x++) {
			if (examples1.length > x) {
				mergedExamples.push(examples1[x]);
			}
			if (examples2.length > x) {
				mergedExamples.push(examples2[x]);
			}
			if (mergedExamples.length >= 10) {
				notFilled = false;
			}
		}
		return mergedExamples;
	},
	
	setupButtons: function() {
		this.setupSDButtons();
		this.setupPrimFdButtons();
	},

	setupSDButtons: function() {
		// load relationships panel and home parents/roles
		if (this.adsView == "descendants") {
			this.setupButton("descendants",true,"adsView");
			this.setupButton("children",false,"adsView");
		} else {
			this.setupButton("children",true,"adsView");
			this.setupButton("descendants",false,"adsView");
		}
	},
	
	setupPrimFdButtons : function() {
		if (this.showPatterns == "Prim") {
			this.setupButton("Prim",true,"showPatterns");
			this.setupButton("FD",false,"showPatterns");
			this.setupButton("Both",false,"showPatterns");
		} else if (this.showPatterns == "FD") {
			this.setupButton("FD",true,"showPatterns");
			this.setupButton("Prim",false,"showPatterns");
			this.setupButton("Both",false,"showPatterns");
		} else {
			this.setupButton("Both",true,"showPatterns");
			this.setupButton("Prim",false,"showPatterns");
			this.setupButton("FD",false,"showPatterns");
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
	}
	
}