$(function() {
    $.extend($.fn.disableTextSelect = function() {
        return this.each(function() {
            $(this).mousedown(function() {
                return false;
            });
        });
    });
    $('.noSelect').disableTextSelect(); //No text selection on elements with a class of 'noSelect'
});

function conceptDetails(divElement, conceptId, options) {

    if (typeof componentsRegistry == "undefined") {
        componentsRegistry = [];
    }

    var panel = this;
    this.type = "concept-details";
    this.conceptId = conceptId;
    this.divElement = divElement;
    this.options = jQuery.extend(true, {}, options);
    this.attributesPId = "";
    this.descsPId = "";
    this.relsPId = "";
    this.history = [];
    this.color = "white";
    panel.preferred = false;
    panel.acceptable = false;
    panel.included = false;
    panel.refset = {};
    panel.refset.simple = false;
    panel.refset.simplemap = false;
    panel.refset.attr = false;
    panel.refset.assoc = false;
    this.lastGroup = null;
    this.subscription = null;
    var xhr = null;
    var xhrChildren = null;
    var xhrReferences = null;
    var xhrParents = null;
    var xhrMembers = null;
	var xhrHistoricalAssocs = null;
    var xhrAds = null;
    var conceptRequested = 0;
    panel.subscriptionsColor = [];
    panel.subscriptions = [];
    panel.subscribers = [];
    panel.options.langRefset = ['900000000000509007'];

    componentLoaded = false;
    
    var drugsModelOrdering = [
      {id: '116680003', display: 1},
      {id: '411116001', display: 2},
      {id: '763032000', display: 3},
      {id: '127489000', display: 4},
      {id: '762949000', display: 5},
      {id: '732943007', display: 6},
      {id: '732944001', display: 7},
      {id: '732945000', display: 8},
      {id: '732946004', display: 9},
      {id: '732947008', display: 10},
      {id: '733724008', display: 11},
      {id: '733725009', display: 12},
      {id: '733723002', display: 13},
      {id: '733722007', display: 14},
      {id: '736476002', display: 15},
      {id: '736474004', display: 16},
      {id: '736475003', display: 17},
      {id: '736473005', display: 18},
      {id: '736472000', display: 19},
      {id: '766952006', display: 20}, 
      {id: '766954007', display: 21}, 
      {id: '766953001', display: 22}
    ];

    var sortRelationships = function (relationships) {
        if (relationships && relationships.length > 0) {
            var isaRels = relationships.filter(function (rel) {
                return rel.type.conceptId === '116680003';
              });

              var attrRels = relationships.filter(function (rel) {
                return rel.type.conceptId !== '116680003';
              });

              // remove display flag if it's set, and set relationship type to null if concept id or fsn are not set
              attrRels.forEach(function(rel) {                  
                if (rel.display) delete rel.display;
              });                 

              // re-populate display flag if it exists
              attrRels.forEach(function(rel) {                  
                for (var i = 0; i < drugsModelOrdering.length; i++) {
                    var item = drugsModelOrdering[i];
                    if (rel.type.conceptId === item.id) rel.display = item.display;
                  }
              });                

              // NOTE: All isaRels should be group 0, but sort by group anyway
              isaRels.sort(function (a, b) {
                if (!a.groupId && b.groupId) {
                  return -1;
                }
                if (!b.groupId && a.groupId) {
                  return 1;
                }
                if (a.groupId === b.groupId) {
                  return a.target.fsn > b.target.fsn;
                } else {
                  return a.groupId - b.groupId;
                }
              });

              attrRels.sort(function (a, b) {
                if (a.groupId === b.groupId && a.display && b.display) {
                  return a.display > b.display;
                } else {
                  return a.groupId - b.groupId;
                }
              });
             
              return isaRels.concat(attrRels); 
        }
    };

    $.each(componentsRegistry, function(i, field) {
        if (field.divElement.id == panel.divElement.id) {
            componentLoaded = true;
        }
    });
    if (componentLoaded == false) {
        componentsRegistry.push(panel);
    }


    this.getConceptId = function() {
        return this.conceptId;
    }

    this.getDivId = function() {
        return this.divId;
    }

    this.getNextMarkerColor = function(color) {
//console.log(color);
        var returnColor = 'black';
        if (color == 'black') {
            returnColor = 'green';
        } else if (color == 'green') {
            returnColor = 'purple';
        } else if (color == 'purple') {
            returnColor = 'red';
        } else if (color == 'red') {
            returnColor = 'blue';
        } else if (color == 'blue') {
            returnColor = 'green';
        }
//console.log(returnColor);
        globalMarkerColor = returnColor;
        return returnColor;
    }
    panel.markerColor = panel.getNextMarkerColor(globalMarkerColor);

    this.setupCanvas = function() {
        panel.attributesPId = panel.divElement.id + "-attributes-panel";
        panel.descsPId = panel.divElement.id + "-descriptions-panel";
        panel.relsPId = panel.divElement.id + "-rels-panel";
        panel.childrenPId = panel.divElement.id + "-children-panel";
        panel.fsn = "";
        $(divElement).html();
        var context = {
            divElementId: panel.divElement.id,
        };
        //        options statedParents inferredParents firstMatch statedRoles inferredRoles allDescriptions
        // dataContentValue = document.URL.split("?")[0].split("#")[0]

        $(divElement).html(JST["views/conceptDetailsPlugin/main.hbs"](context));

//        $("#" + panel.divElement.id + "-linkerButton").disableTextSelect();
        $("#" + panel.divElement.id + "-subscribersMarker").disableTextSelect();
        $("#" + panel.divElement.id + "-configButton").disableTextSelect();
        $("#" + panel.divElement.id + "-historyButton").disableTextSelect();
        $("#" + panel.divElement.id + "-collapseButton").disableTextSelect();
        $("#" + panel.divElement.id + "-expandButton").disableTextSelect();
        $("#" + panel.divElement.id + "-closeButton").disableTextSelect();

        $("#" + panel.divElement.id + "-expandButton").hide();
        $("#" + panel.divElement.id + "-subscribersMarker").hide();

        $("#" + panel.divElement.id + "-closeButton").click(function(event) {
            $(divElement).remove();
        });

        $("#" + panel.divElement.id + "-configButton").click(function (event) {
            panel.setupOptionsPanel();
        });

        if (typeof panel.options.closeButton != "undefined" && panel.options.closeButton == false) {
            $("#" + panel.divElement.id + "-closeButton").hide();
        }

//        if (typeof panel.options.linkerButton != "undefined" && panel.options.linkerButton == false) {
//            $("#" + panel.divElement.id + "-linkerButton").hide();
//        }

        if (typeof panel.options.subscribersMarker != "undefined" && panel.options.subscribersMarker == false) {
            $("#" + panel.divElement.id + "-subscribersMarker").remove();
        }

        if (typeof panel.options.collapseButton != "undefined" && panel.options.collapseButton == false) {
            $("#" + panel.divElement.id + "-expandButton").hide();
            $("#" + panel.divElement.id + "-collapseButton").hide();
        }

        $("#" + panel.divElement.id + "-expandButton").click(function(event) {
            $("#" + panel.divElement.id + "-panelBody").slideDown("fast");
            $("#" + panel.divElement.id + "-expandButton").hide();
            $("#" + panel.divElement.id + "-collapseButton").show();
            $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp<strong>Concept Details</strong>");
        });

        $("#" + panel.divElement.id + "-collapseButton").click(function(event) {
            $("#" + panel.divElement.id + "-panelBody").slideUp("fast");
            $("#" + panel.divElement.id + "-expandButton").show();
            $("#" + panel.divElement.id + "-collapseButton").hide();
            //if (panel.fsn.length > 25) {
            //    $("#" + panel.divElement.id + "-panelTitle").html("<strong>Concept Details: " + panel.fsn.substring(0, 24).trim() + "...</strong>");
            //} else {
            $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp<strong>Concept Details: " + panel.fsn + "</strong>");
            //}
        });

        $('#' + panel.divElement.id).click(function(event) {
            if (!$(event.target).hasClass('glyphicon')) {
                $('#' + panel.divElement.id).find('.more-fields-button').popover('hide');
            }
        });

        $("#" + panel.divElement.id + "-historyButton").click(function(event) {
            $("#" + panel.divElement.id + "-historyButton").popover({
                trigger: 'manual',
                placement: 'left',
                template: '<div class="popover" style="z-index:1000; position:fixed;" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                html: true,
                content: function() {
                    var historyHtml = '<div style="height:100px; z-index:1000; overflow:auto;">';
                    historyHtml = historyHtml + '<table>';
                    var reversedHistory = panel.history.slice(0);
                    reversedHistory.reverse();
                    //console.log(JSON.stringify(reversedHistory));
                    $.each(reversedHistory, function(i, field) {
                        var d = new Date();
                        var curTime = d.getTime();
                        var ago = curTime - field.time;
                        var agoString = "";
                        if (ago < (1000 * 60)) {
                            if (Math.round((ago / 1000)) == 1) {
                                agoString = Math.round((ago / 1000)) + ' second ago';
                            } else {
                                agoString = Math.round((ago / 1000)) + ' seconds ago';
                            }
                        } else if (ago < (1000 * 60 * 60)) {
                            if (Math.round((ago / 1000) / 60) == 1) {
                                agoString = Math.round((ago / 1000) / 60) + ' minute ago';
                            } else {
                                agoString = Math.round((ago / 1000) / 60) + ' minutes ago';
                            }
                        } else if (ago < (1000 * 60 * 60 * 60)) {
                            if (Math.round(((ago / 1000) / 60) / 60) == 1) {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' hour ago';
                            } else {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' hours ago';
                            }
                        }
                        historyHtml = historyHtml + '<tr><td><a href="javascript:void(0);" onclick="updateCD(\'' + panel.divElement.id + '\',' + field.conceptId + ');">' + field.fsn + '</a>';
                        historyHtml = historyHtml + ' <span class="text-muted" style="font-size: 80%"><em>' + agoString + '<em></span>';
                        historyHtml = historyHtml + '</td></tr>';
                    });
                    historyHtml = historyHtml + '</table>';
                    historyHtml = historyHtml + '</div>';
                    return historyHtml;
                }
            });
            $("#" + panel.divElement.id + "-historyButton").popover('toggle');
        });

        if (typeof i18n_panel_options == "undefined") {
            i18n_panel_options = "Panel options";
        }
        $("#" + panel.divElement.id + "-configButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_panel_options,
            animation: true,
            delay: 1000
        });
        if (typeof i18n_history == "undefined") {
            i18n_history = 'History';
        }
        $("#" + panel.divElement.id + "-historyButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_history,
            animation: true,
            delay: 1000
        });
        if (typeof i18n_panel_links == "undefined") {
            i18n_panel_links = 'Panel links';
        }
//        $("#" + panel.divElement.id + "-linkerButton").tooltip({
//            placement : 'left',
//            trigger: 'hover',
//            title: i18n_panel_links,
//            animation: true,
//            delay: 1000
//        });

        $("#" + panel.divElement.id + "-apply-button").click(function() {
            //console.log("apply!");
            panel.readOptionsPanel();
//            panel.updateCanvas();
        });

//        $("#" + panel.divElement.id + "-linkerButton").click(function(event) {
//            $("#" + panel.divElement.id + "-linkerButton").popover({
//                trigger: 'manual',
//                placement: 'bottomRight',
//                html: true,
//                content: function() {
//                    if (panel.subscriptions.length == 0) {
//                        linkerHtml = '<div class="text-center text-muted"><em>Not linked yet<br>Drag to link with other panels</em></div>';
//                    } else {
//                        var linkHtml = '';
//                        $.each(panel.subscriptions, function(i, field){
//                            var panelLink = {};
//                            $.each(componentsRegistry, function(i, panl){
//                                if (panl.divElement.id == field.topic){
//                                    panelLink = panl;
//                                }
//                            });
//                            linkHtml = linkHtml + '<div class="text-center"><a href="javascript:void(0);" onclick="\'' + panel.unsubscribe(panelLink) + '\'">Clear link with '+ field.topic +'</a><br></div>';
//                        });
//                        linkHtml = linkHtml + '';
//                        linkerHtml = linkHtml;
//                    }
//                    return linkerHtml;
//                }
//            });
//            $("#" + panel.divElement.id + "-linkerButton").popover('toggle');
//        });

        panel.updateCanvas();
        channel.publish(panel.divElement.id, {
            term: panel.term,
            module: panel.module,
            conceptId: panel.conceptId,
            source: panel.divElement.id
        });
        panel.setupOptionsPanel();
        if (panel.subscriptions.length > 0 || panel.subscribers.length > 0){
            $("#" + panel.divElement.id + "-subscribersMarker").show();
        }
        $("#" + panel.divElement.id + "-ownMarker").css('color', panel.markerColor);
    }

    this.updateCanvas = function() {
//        $("#members-" + panel.divElement.id).html("");
        $("#home-children-cant-" + panel.divElement.id).html("");
        $('.more-fields-button').popover('hide');
        if (conceptRequested == panel.conceptId) {
            return;
        }
        conceptRequested = panel.conceptId;
        $("#home-children-" + panel.divElement.id + "-body").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.attributesPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-attributes-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.descsPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.relsPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-parents-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-roles-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.childrenPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $("#diagram-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#refsets-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#ads-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");

        // load attributes
        if (xhr != null) {
            xhr.abort();
            xhr = null;
            console.log("aborting call...");
        }
		panel.loadHistoricalAssociations();
        xhr = $.getJSON(options.serverUrl + "/" + options.release + "/concepts/" + panel.conceptId, function (result) {

        }).done(function (result) {
            var firstMatch = result;
            xhr = null;
            panel.attributesPId = divElement.id + "-attributes-panel";
            panel.fsn = firstMatch.fsn;
            var d = new Date();
            var time = d.getTime();
            panel.history.push({fsn: firstMatch.fsn, conceptId: firstMatch.conceptId, time: time});
            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('parseCS', function (search, replacement, string) {
                return string.split(search).join(replacement).toLowerCase();
            });

            var context = {
                options: panel.options,
                firstMatch: firstMatch,
                divElementId: panel.divElement.id,
                release: options.release,
                server: options.serverUrl.substr(0, options.serverUrl.length - 10),
                langRefset: panel.options.langRefset,
//                dataContentValue: options.serverUrl.substr(0, options.serverUrl.length - 10)
                dataContentValue: document.URL.split("?")[0].split("#")[0]
            };

            $('#' + panel.attributesPId).html(JST["views/conceptDetailsPlugin/tabs/details/attributes-panel.hbs"](context));
            $('#' + 'share-link-' + panel.divElement.id).disableTextSelect();
            $('#' + 'share-link-' + panel.divElement.id).click(function (event) {
                setTimeout(function () {
                    $('#' + 'share-field-' + panel.divElement.id).select();
                }, 300);
            });


            // load home-attributes
            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper("if_fav", function (concept, opts){
                var favs = stringToArray(localStorage.getItem("favs"));
                var found = false;
                if (favs){
                    $.each(favs, function (i, field){
                        if (field == concept){
                            found = true;
                        }
                    });
                    if (found){
                        return opts.fn(this);
                    }else{
                        return opts.inverse(this);
                    }
                }else{
                    return opts.inverse(this);
                }
            });
			Handlebars.registerHelper('convertTextFromCode', function(code, opts){
                if(!code) {
					return '';
				}
				var text = code.replace(/_/g, " ");
				text = text.toLowerCase();
				return text.charAt(0).toUpperCase() + text.slice(1);
            });
            var context = {
                panel: panel,
                firstMatch: firstMatch,
                divElementId: panel.divElement.id
            };
            $('#home-attributes-' + panel.divElement.id).html(JST["views/conceptDetailsPlugin/tabs/home/attributes.hbs"](context));

			if (!firstMatch.active) {
				$('#home-attributes-inactivation-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
				var associationTargetObj = firstMatch.associationTargets;
				if (Object.keys(associationTargetObj).length > 0) {
					var associationTargetArr = [];
					var conceptIds = [];
					for (var key in associationTargetObj) {
						for (var id in associationTargetObj[key]) {
							var obj = {};
							obj.associationTarget = key;
							obj.targetId = associationTargetObj[key][id];
							associationTargetArr.push(obj);
							if (conceptIds.indexOf(obj.targetId) === -1) {
								conceptIds.push(obj.targetId);
							}
						}
					}
					if (conceptIds.length > 0) {
						var getConcepts =  function(list) {     
							var dfd = $.Deferred();
							var result = {concepts: []};
							for (var i = 0 ; i < list.length; i++) {
								$.getJSON(options.serverUrl + "/" + options.release + "/concepts/" + list[i], function (concept) {
								}).done(function (concept) {								    
									result.concepts.push(concept)
									if (result.concepts.length  === list.length) {
									  dfd.resolve(result);
									}
								}).fail(function (xhr, textStatus, error) {
									// do nothing
								});
							}							  
							return dfd.promise();
						};
				
						$.when(getConcepts(conceptIds)).then(
							function( respone ) {
								if(respone.concepts.length > 0) {
									for (var i= 0 ; i < respone.concepts.length; i++){
										for (var j= 0 ; j < associationTargetArr.length; j++){
											if(respone.concepts[i].conceptId === associationTargetArr[j].targetId){
												associationTargetArr[j].fsn = respone.concepts[i].fsn;
											}
										}
									}
								}
								context.associationTargets = associationTargetArr;
								$('#home-attributes-inactivation-' + panel.divElement.id).html(JST["views/conceptDetailsPlugin/tabs/details/inactivation-panel.hbs"](context));
							},
							function( status ) {
								// do nothing
							}
						);
					}
				} 
			} 
            $(".glyphicon-star-empty").click(function(e){
                var concept = {
                    module: firstMatch.module,
                    conceptId: firstMatch.conceptId,
                    fsn: firstMatch.fsn
                };
                if ($(e.target).hasClass("glyphicon-star")){
                    var favs = stringToArray(localStorage.getItem("favs")), auxFavs = [];
                    $.each(favs, function(i,field){
                        if (field != $(e.target).attr("data-conceptId")){
                            auxFavs.push(field);
                        }
                    });
                    localStorage.setItem("favs", auxFavs);
                    localStorage.removeItem("conceptId:" + $(e.target).attr("data-conceptId"));
                    $(e.target).addClass("glyphicon-star-empty");
                    $(e.target).removeClass("glyphicon-star");
//                            console.log("removed from favs");
                }else{
                    var favs = stringToArray(localStorage.getItem("favs")), auxFavs = [];
                    if (!favs){
                        favs = [];
                        favs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", favs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    }else{
                        $.each(favs, function(i,field){
                            if (field != $(e.target).attr("data-conceptId")){
                                auxFavs.push(field);
                            }
                        });
                        auxFavs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", auxFavs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    }
                    $(e.target).addClass("glyphicon-star");
                    $(e.target).removeClass("glyphicon-star-empty");
                }
                channel.publish("favsAction");
            });

            $(".glyphicon-star").click(function(e){
                var concept = {
                    module: firstMatch.module,
                    conceptId: firstMatch.conceptId,
                    fsn: firstMatch.fsn
                };
                if ($(e.target).hasClass("glyphicon-star")){
                    var favs = stringToArray(localStorage.getItem("favs")), auxFavs = [];
                    $.each(favs, function(i,field){
                        if (field != $(e.target).attr("data-conceptId")){
                            auxFavs.push(field);
                        }
                    });
                    localStorage.setItem("favs", auxFavs);
                    localStorage.removeItem("conceptId:" + $(e.target).attr("data-conceptId"));
                    $(e.target).addClass("glyphicon-star-empty");
                    $(e.target).removeClass("glyphicon-star");
//                            console.log("removed from favs");
                }else{
                    var favs = stringToArray(localStorage.getItem("favs")), auxFavs = [];
                    if (!favs){
                        favs = [];
                        favs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", favs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    }else{
                        $.each(favs, function(i,field){
                            if (field != $(e.target).attr("data-conceptId")){
                                auxFavs.push(field);
                            }
                        });
                        auxFavs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", auxFavs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    }
                    $(e.target).addClass("glyphicon-star");
                    $(e.target).removeClass("glyphicon-star-empty");
                }
                channel.publish("favsAction");
            });

            if (!firstMatch.active) {
                $('#home-attributes-' + panel.divElement.id).css("background-color", "LightPink");
            } else {
                $('#home-attributes-' + panel.divElement.id).css("background-color", "#428bca");
            }

            if ($("#" + panel.divElement.id + "-expandButton").is(":visible")) {
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp;&nbsp;&nbsp;<strong>Concept Details: " + panel.fsn + "</strong>");
            }
            if (typeof i18n_drag_this == "undefined") {
                i18n_drag_this = "Drag this";
            }
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });

            // load descriptions panel
            panel.descsPId = divElement.id + "-descriptions-panel";
            /*
            var languageName = "";
            if (panel.options.langRefset == "900000000000508004") {
                languageName = "(GB)";
            } else if (panel.options.langRefset == "900000000000509007") {
                languageName = "(US)";
            } else if (panel.options.langRefset == "450828004") {
                languageName = "(ES)";
            } else if (panel.options.langRefset == "554461000005103") {
                languageName = "(DA)";
            } else if (panel.options.langRefset == "46011000052107") {
                languageName = "(SV)";
            } else if (panel.options.langRefset == "32570271000036106") {
                languageName = "(AU)";
            } else if (panel.options.langRefset == "999001251000000103") {
                languageName = "(UK)";
            } else if (panel.options.langRefset == "31000146106") {
                languageName = "(NL)";
            }
            
            var allDescriptions = firstMatch.descriptions.slice(0);
            allDescriptions.sort(function (a, b) {
                if (a.type.conceptId < b.type.conceptId)
                    return -1;
                if (a.type.conceptId > b.type.conceptId)
                    return 1;
                if (a.type.conceptId == b.type.conceptId) {
                    if (a.term < b.term)
                        return -1;
                    if (a.term > b.term)
                        return 1;
                }
                return 0;
            });
            var homeDescriptionsHtml = "";
            $.each(allDescriptions, function (i, field) {
                if (panel.options.displayInactiveDescriptions || field.active == true) {
                    if (field.active == true) {
                        if (homeDescriptionsHtml != "") {
                            homeDescriptionsHtml = homeDescriptionsHtml + "<br>";
                        }
                        homeDescriptionsHtml = homeDescriptionsHtml + "&nbsp;&nbsp;&nbsp;&nbsp;" + field.term;
                    }
                }
            });
            Handlebars.registerHelper('removeSemtag', function (term) {
                return 
            });
            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            var auxDescriptions = [];
            $.each(allDescriptions, function (i, description){
                var included = false;
                if (description.acceptabilityMap ){
                    $.each(description.acceptabilityMap , function (i, acceptabilityMap ){
                        if (description.acceptabilityMap[panel.options.langRefset]){
                            included = true;
                            if (description.acceptabilityMap[panel.options.langRefset] === 'PREFERRED'){
                                description.preferred = true;
                            }else{
                                description.acceptable = true;
                            }
                        }
                    });
                }
                if (included){
                    auxDescriptions.push(description);
                }else{
                    description.acceptable = false;
                    if (panel.options.hideNotAcceptable){
                        if (panel.options.displayInactiveDescriptions){
                            auxDescriptions.push(description);
                        }
                    }else{
                        if (panel.options.displayInactiveDescriptions){
                            auxDescriptions.push(description);
                        }else{
                            if (description.active){
                                auxDescriptions.push(description);
                            }
                        }
                    }
                }
            });
            allDescriptions = auxDescriptions;
            var context = {
                options: panel.options,
                languageName: languageName,
                divElementId: panel.divElement.id,
                allDescriptions: allDescriptions
            };
            $("#" + panel.descsPId).html(JST["views/conceptDetailsPlugin/tabs/details/descriptions-panel.hbs"](context));
            if (panel.options.displaySynonyms) {
                $('#home-descriptions-' + panel.divElement.id).html(homeDescriptionsHtml);
            } */
            
            var allLangsHtml = "";
            var allDescriptions = firstMatch.descriptions.slice(0);
            var usDialectDescrptions = [];
            var gbDialectDescrptions = [];
            var auxDescriptions = [];
            var context = {};

            var descriptionSortFn = function(a, b) {
                if (a.active && !b.active)
                    return -1;
                if (!a.active && b.active)
                    return 1;
                if (a.active == b.active) {
                    if ((a.acceptable || a.preferred) && (!b.preferred && !b.acceptable))
                        return -1;
                    if ((!a.preferred && !a.acceptable) && (b.acceptable || b.preferred))
                        return 1;
                    if (a.type.conceptId < b.type.conceptId)
                        return -1;
                    if (a.type.conceptId > b.type.conceptId)
                        return 1;
                    if (a.type.conceptId == b.type.conceptId) {
                        if (a.preferred && !b.preferred)
                            return -1;
                        if (!a.preferred && b.preferred)
                            return 1;
                        if (a.preferred == b.preferred) {
                            if (a.term < b.term)
                                return -1;
                            if (a.term > b.term)
                                return 1;
                        }
                    }
                }
                return 0;
            };

            $.each(allDescriptions, function(i, description) {                   
                if (description.acceptabilityMap && description.active) {
                    if (description.acceptabilityMap['900000000000509007'] 
                        || description.acceptabilityMap['900000000000508004']) {
                        
                        // US dialect
                        if (description.acceptabilityMap['900000000000509007']) {
                            if (description.acceptabilityMap['900000000000509007'] === 'PREFERRED'){
                                description.preferred = true;
                            }else{
                                description.acceptable = true;
                            }
                            usDialectDescrptions.push(description);   
                        }

                        // GB dialect
                        if (description.acceptabilityMap['900000000000508004']) {
                            if (description.acceptabilityMap['900000000000508004'] === 'PREFERRED'){
                                description.preferred = true;
                            }else{
                                description.acceptable = true;
                            }
                            gbDialectDescrptions.push(description);   
                        }
                        var tempAcceptabilityMap = description.acceptabilityMap;
                        delete tempAcceptabilityMap['900000000000509007'];
                        delete tempAcceptabilityMap['900000000000508004'];
                        if (Object.keys(tempAcceptabilityMap).length > 0) {
                            for (var key in tempAcceptabilityMap) {
                                var tempDescription = description;
                                if(tempAcceptabilityMap[key] === 'PREFERRED') {
                                    tempDescription.preferred = true;
                                } else{
                                    tempDescription.acceptable = true;
                                }
                                auxDescriptions.push(tempDescription);
                            }
                        }
                    } else {
                        // Extension dialects
                        if (description.lang !== 'en') {
                            if (Object.keys(description.acceptabilityMap).length > 0) {
                                for (var key in description.acceptabilityMap) {
                                    var tempDescription = description;
                                    if(description.acceptabilityMap[key] === 'PREFERRED') {
                                        tempDescription.preferred = true;
                                    } else{
                                        tempDescription.acceptable = true;
                                    }
                                    auxDescriptions.push(tempDescription);
                                }
                            }                            
                        }                        
                    }                    
                }  else {
                    description.acceptable = false;
                    if (panel.options.displayInactiveDescriptions && !description.active) {
                        if (description.lang === 'en') {
                            usDialectDescrptions.push(description);
                            gbDialectDescrptions.push(description);
                        } else {
                            auxDescriptions.push(description);
                        }
                    }                        
                }
            });

            usDialectDescrptions.sort(descriptionSortFn);
            gbDialectDescrptions.sort(descriptionSortFn);
            auxDescriptions.sort(descriptionSortFn);

            if(panel.options.langRefset.indexOf('900000000000509007') >= 0) {
                Handlebars.registerHelper('if_eq', function(a, b, opts) {
                    if (opts != "undefined") {
                        if (a == b)
                            return opts.fn(this);
                        else
                            return opts.inverse(this);
                    }
                });
                 var context = {
                    options: panel.options,
                    languageName: '(US)',
                    longLangName: 'United States of America English language reference set',
                    divElementId: panel.divElement.id,
                    allDescriptions: usDialectDescrptions
                };
               
                allLangsHtml += JST["views/conceptDetailsPlugin/tabs/details/descriptions-panel.hbs"](context);
            }

            if(panel.options.langRefset.indexOf('900000000000508004') >= 0) {
                Handlebars.registerHelper('if_eq', function(a, b, opts) {
                    if (opts != "undefined") {
                        if (a == b)
                            return opts.fn(this);
                        else
                            return opts.inverse(this);
                    }
                });
                 var context = {
                    options: panel.options,
                    languageName: '(GB)',
                    longLangName: 'Great Britain English language reference set',
                    divElementId: panel.divElement.id,
                    allDescriptions: gbDialectDescrptions
                };
               
                allLangsHtml += JST["views/conceptDetailsPlugin/tabs/details/descriptions-panel.hbs"](context);
            }

            if(auxDescriptions.length > 0) {
                Handlebars.registerHelper('if_eq', function(a, b, opts) {
                    if (opts != "undefined") {
                        if (a == b)
                            return opts.fn(this);
                        else
                            return opts.inverse(this);
                    }
                });
                 var context = {
                    options: panel.options,
                    languageName: '',
                    longLangName: 'Extension languages reference set',
                    divElementId: panel.divElement.id,
                    allDescriptions: auxDescriptions
                };
               
                allLangsHtml += JST["views/conceptDetailsPlugin/tabs/details/descriptions-panel.hbs"](context);
            }

            $("#" + panel.descsPId).html(allLangsHtml);
            
            if (panel.options.displaySynonyms != true) { // hide synonyms
                $('#' + panel.descsPId).find('.synonym-row').each(function (i, val) {
                    $(val).toggle();
                });
                $(this).toggleClass('glyphicon-plus');
                $(this).toggleClass('glyphicon-minus');
            }
            $("#" + panel.descsPId + "-descButton").disableTextSelect();
            $("#" + panel.descsPId + "-descButton").click(function () {
                table = $(this).closest("table").first();
                $(this).toggleClass('glyphicon-plus');
                $(this).toggleClass('glyphicon-minus');
                table.find('.synonym-row').each(function (i, val) {
                    $(val).toggle();
                });
            });

            $('#' + panel.descsPId).find("[rel=tooltip-right]").tooltip({ placement: 'right'});


            // load relationships panel and home parents/roles
            if (panel.options.selectedView == "inferred") {
                $('#home-' + panel.divElement.id + '-viewLabel').html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
                $('#home-' + panel.divElement.id + '-diagram-viewLabel').html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
                $('#home-' + panel.divElement.id + '-stated-button').unbind();
                $('#home-' + panel.divElement.id + '-inferred-button').unbind();
                $('#home-' + panel.divElement.id + '-inferred-button').addClass("btn-primary");
                $('#home-' + panel.divElement.id + '-inferred-button').removeClass("btn-default");
                $('#home-' + panel.divElement.id + '-stated-button').addClass("btn-default");
                $('#home-' + panel.divElement.id + '-stated-button').removeClass("btn-primary");
                $('#home-' + panel.divElement.id + '-stated-button').click(function (event) {
                    panel.options.selectedView = "stated";
                    panel.updateCanvas();
                });
            } else {
                $('#home-' + panel.divElement.id + '-viewLabel').html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
                $('#home-' + panel.divElement.id + '-diagram-viewLabel').html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
                $('#home-' + panel.divElement.id + '-stated-button').unbind();
                $('#home-' + panel.divElement.id + '-inferred-button').unbind();
                $('#home-' + panel.divElement.id + '-stated-button').addClass("btn-primary");
                $('#home-' + panel.divElement.id + '-stated-button').removeClass("btn-default");
                $('#home-' + panel.divElement.id + '-inferred-button').addClass("btn-default");
                $('#home-' + panel.divElement.id + '-inferred-button').removeClass("btn-primary");
                $('#home-' + panel.divElement.id + '-inferred-button').click(function (event) {
                    //console.log('inferred');
                    panel.options.selectedView = "inferred";
                    panel.updateCanvas();
                });
            }
            panel.relsPId = divElement.id + "-rels-panel";
            panel.statedParents = [];
            panel.inferredParents = [];
            panel.statedRoles = [];
            panel.inferredRoles = [];


            if (firstMatch.relationships) {
                var tempArray = [];
                var tempArrayStated = [];
                $.each(firstMatch.relationships, function(index, item)
                {
                    if(item.characteristicType === "INFERRED_RELATIONSHIP")
                    {
                        tempArray.push(item);   
                    }
                    else if(item.characteristicType === "STATED_RELATIONSHIP")
                    {
                        tempArrayStated.push(item);   
                    }
                });
                firstMatch.relationships = tempArray;
                firstMatch.statedRelationships = tempArrayStated;               

                firstMatch.relationships = sortRelationships(firstMatch.relationships); 
                firstMatch.statedRelationships = sortRelationships(firstMatch.statedRelationships);
                
            }
            Handlebars.registerHelper('push', function (element, array) {
                array.push(element);
                // return ;
            });
            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            var context = {
                options: panel.options,
                firstMatch: firstMatch,
                inferredParents: panel.inferredParents,
                inferredRoles: panel.inferredRoles,
                statedParents: panel.statedParents,
                statedRoles: panel.statedRoles
            };
            $("#" + panel.relsPId).html(JST["views/conceptDetailsPlugin/tabs/details/rels-panel.hbs"](context));


            panel.inferredParents.sort(function (a, b) {
                if (a.target.fsn < b.target.fsn)
                    return -1;
                if (a.target.fsn > b.target.fsn)
                    return 1;
                return 0;
            });

            panel.statedParents.sort(function (a, b) {
                if (a.target.fsn < b.target.fsn)
                    return -1;
                if (a.target.fsn > b.target.fsn)
                    return 1;
                return 0;
            });

            panel.inferredRoles.sort(function (a, b) {
                if (a.groupId < b.groupId) {
                    return -1;
                } else if (a.groupId > b.groupId) {
                    return 1;
                } else {
                    if (a.target.fsn < b.target.fsn)
                        return -1;
                    if (a.target.fsn > b.target.fsn)
                        return 1;
                    return 0;
                }
            });

            panel.statedRoles.sort(function (a, b) {
                if (a.groupId < b.groupId) {
                    return -1;
                } else if (a.groupId > b.groupId) {
                    return 1;
                } else {
                    if (a.target.fsn < b.target.fsn)
                        return -1;
                    if (a.target.fsn > b.target.fsn)
                        return 1;
                    return 0;
                }
            });

            Handlebars.registerHelper('substr', function (string, start) {
                var l = string.lastIndexOf("(") - 1;
                return string.substr(start, l);
            });
            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('if_gr', function (a, b, opts) {
                if (a) {
                    var s = a.lastIndexOf("(");
                    if (s > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            var context = {
                divElementId: panel.divElement.id,
                statedParents: panel.statedParents,
                inferredParents: panel.inferredParents,
                options: panel.options
            };
            $('#home-parents-' + panel.divElement.id).html(JST["views/conceptDetailsPlugin/tabs/home/parents.hbs"](context));
            if (!panel.options.diagrammingMarkupEnabled) {
                $('#home-parents-' + panel.divElement.id).html(panel.stripDiagrammingMarkup($('#home-parents-' + panel.divElement.id).html()));
            }
            $(".treeButton").disableTextSelect();
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });
            $("#home-parents-" + panel.divElement.id).unbind();
            $("#home-parents-" + panel.divElement.id).click(function (event) {
                if ($(event.target).hasClass("treeButton")) {
                    var ev = event.target;
                    //firefox issue!
                    if (navigator.userAgent.indexOf("Firefox") > -1) {
                        ev = $(ev).context.children;
                    }
                    var conceptId = $(ev).closest("li").attr('data-concept-id');
                    event.preventDefault();
                    if ($(ev).hasClass("glyphicon-chevron-up")) {
                        $(ev).closest("li").find("ul").remove();
                        $(ev).removeClass("glyphicon-chevron-up");
                        $(ev).addClass("glyphicon-chevron-right");
                    } else if ($(ev).hasClass("glyphicon-chevron-right")) {
                        $(ev).removeClass("glyphicon-chevron-right");
                        $(ev).addClass("glyphicon-refresh");
                        $(ev).addClass("icon-spin");
                        panel.getParent(conceptId, ev);
                    } else if ($(ev).hasClass("glyphicon-minus")) {
//                      $("#" + iconId).removeClass("glyphicon-minus");
//                    $("#" + iconId).addClass("glyphicon-chevron-right");
                    }
                } else if ($(event.target).hasClass("treeLabel")) {
                    var selectedId = $(event.target).attr('data-concept-id');
                    if (typeof selectedId != "undefined") {
                        channel.publish(panel.divElement.id, {
                            term: $(event.target).attr('data-term'),
                            module: $(event.target).attr("data-module"),
                            conceptId: selectedId,
                            source: panel.divElement.id
                        });
                    }
                }
            });
            $("#home-parents-" + panel.divElement.id).dblclick(function (event){
                var conceptId = $(event.target).closest("li").attr('data-concept-id');
                panel.conceptId = conceptId;
                panel.updateCanvas();
                channel.publish(panel.divElement.id, {
                    term: $(event.target).attr('data-term'),
                    module: $(event.target).attr("data-module"),
                    conceptId: conceptId,
                    source: panel.divElement.id
                });
            });

            Handlebars.registerHelper('eqLastGroup', function (a, opts) {
//                console.log(a, panel.lastGroup);
                if(panel.lastGroup == null){
                    panel.lastGroup = a;
                    return opts.fn(this);
                }
                if (a != panel.lastGroup)
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('removeSemtag', function (term) {
                return term;
            });
            Handlebars.registerHelper('setLastGroup', function (a) {
                panel.lastGroup = a;
            });
            Handlebars.registerHelper('lastColor', function (a) {
                if (a == "get") {
                    return "";
//                    return panel.color;
                } else {
                    if (a == "random"){
                        panel.color = getRandomColor();
                    }else{
                        panel.color = a;
                    }
                }
            });
            Handlebars.registerHelper('getRandomColor', function () {
//                return getRandomColor();
                return "";
            });
            
            // sort stated roles
            if (panel.statedRoles && panel.statedRoles.length > 0) {
                panel.statedRoles = sortRelationships(panel.statedRoles);
            }

            // sort inferred roles
            if (panel.inferredRoles && panel.inferredRoles.length > 0) {
                panel.inferredRoles = sortRelationships(panel.inferredRoles);
            }

            var context = {
                options: panel.options,
                statedRoles: panel.statedRoles,
                inferredRoles: panel.inferredRoles
            };
//            console.log(panel.statedRoles);
//            console.log(panel.inferredRoles);
            $('#home-roles-' + panel.divElement.id).html(JST["views/conceptDetailsPlugin/tabs/home/roles.hbs"](context));

            if (!panel.options.diagrammingMarkupEnabled) {
                $('#home-roles-' + panel.divElement.id).html(panel.stripDiagrammingMarkup($('#home-roles-' + panel.divElement.id).html()));
            }


            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('refset', function (type, data, opts) {
                if (data == "get") {
                    if (panel.refset[type]) {
                        return opts.fn(this);
                    } else {
                        return opts.inverse(this);
                    }
                } else {
                    panel.refset[type] = data;
                }
            });
            var context = {
                firstMatch: firstMatch
            };
            $('#refsets-' + panel.divElement.id).html(JST["views/conceptDetailsPlugin/tabs/refset.hbs"](context));

            $.each($("#refsets-" + panel.divElement.id).find('.refset-simplemap'), function (i, field) {
//                console.log(field);
//                console.log($(field).attr('data-refsetId'));
                if ($(field).attr('data-refsetId') == "467614008") {
                    channel.publish("refsetSubscription-467614008", {
                        conceptId: $(field).attr('data-conceptId')
                    });
                }
            });

            if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == "references-tab") {
                $("#references-" + panel.divElement.id + "-resultsTable").html("");
//                drawConceptDiagram(firstMatch, $("#diagram-canvas-" + panel.divElement.id), panel.options);
                panel.getReferences(firstMatch.conceptId);
            }

            if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == "diagram-tab") {

            }

            $("#references-tab-link-" + panel.divElement.id).unbind();
            $("#references-tab-link-" + panel.divElement.id).click(function (e) {
                $("#references-" + panel.divElement.id + "-resultsTable").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                panel.getReferences(firstMatch.conceptId);
            });
            $("#diagram-tab-link-" + panel.divElement.id).unbind();
            $("#diagram-tab-link-" + panel.divElement.id).click(function (e) {
                $("#diagram-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                setTimeout(function () {
                    $("#diagram-canvas-" + panel.divElement.id).html("");
                    drawConceptDiagram(firstMatch, $("#diagram-canvas-" + panel.divElement.id), panel.options);
                }, 1000)

            });

            $('.more-fields-button').disableTextSelect();
            $('.more-fields-button').popover();

//          firefox popover
            if (navigator.userAgent.indexOf("Firefox") > -1) {
                $(".more-fields-button").optionsPopover({
                    contents: "",
                    disableBackButton: true
                });

                $(".more-fields-button").click(function (e) {
                    var auxHtml = $(e.target).attr('data-content');
                    $("#popoverContent").html(auxHtml);
                });
            }

            if (panel.options.selectedView == "stated") {
                $('#' + panel.relsPId).find('.inferred-rel').each(function (i, val) {
                    $(val).toggle();
                });
            } else if (panel.options.selectedView == "inferred") {
                $('#' + panel.relsPId).find('.stated-rel').each(function (i, val) {
                    $(val).toggle();
                });
            } else if (panel.options.selectedView != "all") {
                // show all
            }
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });

            if (typeof(switchLanguage) == "function") {
                switchLanguage(selectedLanguage, selectedFlag, false);
            }


//            membersUrl = options.serverUrl + "/" + options.release + "/concepts/" + panel.conceptId + "/members";
            panel.getAds(conceptRequested);
            conceptRequested = 0;
        }).fail(function (xhr, textStatus, error) {
            if (textStatus !== 'abort') {
                panel.relsPId = divElement.id + "-rels-panel";
                panel.attributesPId = divElement.id + "-attributes-panel";
                panel.descsPId = divElement.id + "-descriptions-panel";
                $("#home-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $("#diagram-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $("#members-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $("#references-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $("#refsets-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $('#' + panel.attributesPId).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $('#' + panel.descsPId).html("");
                $('#' + panel.relsPId).html("");
            }
        });
//        if (typeof xhr != "undefined") {
//            console.log("aborting call...");
//
//        }
        if (panel.options.displayChildren) {
            var context = {

            };
        } else {
        }

//        if (panel.options.displayChildren == false) {
////            $("#home-children-" + panel.divElement.id).hide();
//            $('#' + panel.childrenPId).html("");
//            $('#' + panel.childrenPId).hide();
//        } else {
//            $("#home-children-" + panel.divElement.id).show();
//            $('#' + panel.childrenPId).show();
        if (xhrChildren != null) {
            xhrChildren.abort();
            console.log("aborting children call...");
        }
        xhrChildren = $.getJSON(options.serverUrl + "/" + options.release + "/concepts/" + panel.conceptId + "/children?form=" + panel.options.selectedView, function (result) {
            //$.getJSON(panel.url + "rest/browser/concepts/" + panel.conceptId + "/children", function(result) {
        }).done(function (result) {
            // load relationships panel
            result.sort(function(a, b) {
                if (a.fsn.toLowerCase() < b.fsn.toLowerCase())
                    return -1;
                if (a.fsn.toLowerCase() > b.fsn.toLowerCase())
                    return 1;
                return 0;
            });
            Handlebars.registerHelper('if_gr', function(a,b, opts) {
                if (a){
                    if(a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            xhrChildren = null;
            panel.childrenPId = divElement.id + "-children-panel";
//                console.log(result);
            var context = {
                displayChildren: panel.options.displayChildren,
                divElementId: panel.divElement.id,
                childrenResult: result,
                selectedView: panel.options.selectedView
            };
            $("#home-children-cant-" + panel.divElement.id).html("(" + result.length + ")");
            $('#' + panel.childrenPId).html(JST["views/conceptDetailsPlugin/tabs/details/children-panel.hbs"](context));
            $("#home-children-" + panel.divElement.id + "-body").html(JST["views/conceptDetailsPlugin/tabs/home/children.hbs"](context));
            $(".treeButton").disableTextSelect();
            if (typeof i18n_drag_this == "undefined"){
                i18n_drag_this = "Drag this";
            }
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });
            $("#home-children-" + panel.divElement.id + "-body").unbind();
            $("#home-children-" + panel.divElement.id + "-body").click(function (event) {
                if ($(event.target).hasClass("treeButton")) {
                    var conceptId = $(event.target).closest("li").attr('data-concept-id');
                    var iconId = panel.divElement.id + "-treeicon-" + conceptId;
                    event.preventDefault();
                    if ($("#" + iconId).hasClass("glyphicon-chevron-down")) {
                        //console.log("close");
                        $(event.target).closest("li").find("ul").remove();
                        $("#" + iconId).removeClass("glyphicon-chevron-down");
                        $("#" + iconId).addClass("glyphicon-chevron-right");
                    } else if ($("#" + iconId).hasClass("glyphicon-chevron-right")) {
                        //console.log("open");
                        $("#" + iconId).removeClass("glyphicon-chevron-right");
                        $("#" + iconId).addClass("glyphicon-refresh");
                        $("#" + iconId).addClass("icon-spin");
                        panel.getChildren($(event.target).closest("li").attr('data-concept-id'), true);
                    } else if ($("#" + iconId).hasClass("glyphicon-minus")) {
//                    $("#" + iconId).removeClass("glyphicon-minus");
//                    $("#" + iconId).addClass("glyphicon-chevron-right");
                    }
                } else if ($(event.target).hasClass("treeLabel")) {
                    var selectedId = $(event.target).attr('data-concept-id');
                    if (typeof selectedId != "undefined") {
                        channel.publish(panel.divElement.id, {
                            term: $(event.target).attr('data-term'),
                            module: $(event.target).attr("data-module"),
                            conceptId: selectedId,
                            source: panel.divElement.id
                        });
                    }
                }
            });

            $("#home-children-" + panel.divElement.id + "-body").dblclick(function (event){
                var conceptId = $(event.target).closest("li").attr('data-concept-id');
                panel.conceptId = conceptId;
                panel.updateCanvas();
                channel.publish(panel.divElement.id, {
                    term: $(event.target).attr('data-term'),
                    module: $(event.target).attr("data-module"),
                    conceptId: conceptId,
                    source: panel.divElement.id
                });
            });
            if (typeof i18n_display_children == "undefined"){
                i18n_display_children = "Display Children";
            }
            $("#" + panel.divElement.id + "-showChildren").tooltip({
                placement : 'right',
                trigger: 'hover',
                title: i18n_display_children,
                animation: true,
                delay: 500
            });
            $("#" + panel.divElement.id + "-showChildren").click(function(){
                panel.options.displayChildren = true;
                panel.updateCanvas();
            });
        }).fail(function () {
            $('#' + panel.childrenPId).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
        });
//    }
//        panel.loadMembers(100, 0);
    }

    this.getReferences = function (conceptId){
        $("#references-" + panel.divElement.id + "-accordion").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        console.log(options.serverUrl + "/" + options.release + "/concepts/" + conceptId + "/references");
        if (xhrReferences != null) {
            xhrReferences.abort();
            console.log("aborting references call...");
        }
        xhrReferences = $.getJSON(options.serverUrl + "/" + options.release + "/concepts/" + conceptId + "/references?form=" + panel.options.selectedView, function(result) {

        }).done(function(result){
            Handlebars.registerHelper('if_gr', function(a,b, opts) {
                if (a){
                    if(a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            $.each(result, function (i, field){
                if (field.statedRelationships){
                    field.relationship = field.statedRelationships[0].type.fsn;
                }else{
                    field.relationship = field.relationships[0].type.fsn;
                }
            });
            result.sort(function (a, b) {
                if (a.relationship < b.relationship)
                    return -1;
                if (a.relationship > b.relationship)
                    return 1;
                if (a.relationship == b.relationship) {
                    if (a.fsn < b.fsn)
                        return -1;
                    if (a.fsn > b.fsn)
                        return 1;
                }
                return 0;
            });
            result.groups = [];
            var lastR = "", auxArray = [];
            $.each(result, function(i, field){
                if (lastR == ""){
                    auxArray.push(field);
                    lastR = field.relationship;
                }else{
                    if (lastR == field.relationship){
                        auxArray.push(field);
                    }else{
                        result.groups.push(auxArray);
                        auxArray = [];
                        auxArray.push(field);
                        lastR = field.relationship;
                    }
                }
            });
            result.groups.push(auxArray);
//            console.log(result.groups);
            var context = {
                divElementId: panel.divElement.id,
                result: result,
                groups: result.groups
            };
//            $("#references-" + panel.divElement.id + "-total").html(result.length  + " references");
            $("#references-" + panel.divElement.id + "-accordion").html(JST["views/conceptDetailsPlugin/tabs/references.hbs"](context));
            $("#references-" + panel.divElement.id + "-accordion").click(function(e){
                if ($($(e.target).closest("a").attr("href")).hasClass("collapse")){
                    console.log("finded");
                    var target = $($(e.target).closest("a").attr("href") + "-span");
                    if (target.hasClass("glyphicon-chevron-right")){
                        target.removeClass("glyphicon-chevron-right");
                        target.addClass("glyphicon-chevron-down");
                    }else{
                        target.addClass("glyphicon-chevron-right");
                        target.removeClass("glyphicon-chevron-down");
                    }
                }
            });
//            console.log(result, result.length);
        }).fail(function(){
            $("#references-" + panel.divElement.id + "-accordion").html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
        });

    }

    this.getChildren = function(conceptId, forceShow) {
        if (typeof panel.options.selectedView == "undefined") {
            panel.options.selectedView = "inferred";
        }

        if (panel.options.selectedView == "inferred") {
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
        } else {
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
        }

        if (xhrChildren != null) {
            xhrChildren.abort();
            console.log("aborting children call...");
        }
        xhrChildren = $.getJSON(options.serverUrl + "/" + options.release + "/concepts/" + conceptId + "/children?form=" + panel.options.selectedView, function(result) {
        }).done(function(result) {
            result.sort(function(a, b) {
                if (a.fsn.toLowerCase() < b.fsn.toLowerCase())
                    return -1;
                if (a.fsn.toLowerCase() > b.fsn.toLowerCase())
                    return 1;
                return 0;
            });
            //console.log(JSON.stringify(result));
            var listIconIds = [];
            //console.log(JSON.stringify(listIconIds));
            var context = {
                displayChildren: panel.options.displayChildren,
                childrenResult: result,
                divElementId: panel.divElement.id,
                selectedView: panel.options.selectedView
            };
            if (typeof forceShow != "undefined"){
                if (forceShow){
                    context.displayChildren = forceShow;
                }
            }
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if(a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('push', function (element){
                listIconIds.push(element);
            });
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
            if (result.length > 0) {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-chevron-down");
            } else {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
            }
            $("#" + panel.divElement.id + "-treenode-" + conceptId).closest("li").append(JST["views/conceptDetailsPlugin/tabs/home/children.hbs"](context));
            $(".treeButton").disableTextSelect();
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });

        }).fail(function() {
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
        });
    }
    
	this.getAds = function(conceptId, forceShow) {
		if ( adsObj.conceptId == conceptId) {
			console.log("skipping ADS call...");
			adsObj.panel = panel;
			adsObj.updatePanel();
		} else {
			adsObj.conceptId = conceptId;
			xhrAds = $.getJSON("/ads-api/concept/" + options.release + "/" + conceptId,
							function(result) {}
					).done(function(result) {
						console.log("Received ADS data for " + conceptId);
						adsObj.result = result;
						adsObj.options = panel.options;
						adsObj.panelId = panel.divElement.id;
						adsObj.updatePanel();
					}).fail(function() {
							console.log("Failed to recover ADS for " + conceptId);
							$('#ads-' + panel.divElement.id)
									.html("<div class='alert alert-warning'><span class='i18n' data-i18n-id='i18n_ajax_failed'>No ADS information available for this concept, check expected project selected</span></div>");
					});
		}
	};

    this.getParent = function(conceptId, target){
        if (xhrParents != null) {
            xhrParents.abort();
            console.log("aborting children call...");
        }
        xhrParents = $.getJSON(options.serverUrl + "/" + options.release + "/concepts/" + conceptId + "/parents", function(result) {
            //$.getJSON(panel.url + "rest/browser/concepts/" + panel.conceptId + "/children", function(result) {
        }).done(function(result) {
            result.sort(function(a, b) {
                if (a.fsn.toLowerCase() < b.fsn.toLowerCase())
                    return -1;
                if (a.fsn.toLowerCase() > b.fsn.toLowerCase())
                    return 1;
                return 0;
            });
            var auxHtml = "";
            var ind = $(target).attr('data-ind');
            if (result.length > 0){
                if ($(target).attr('data-firstt')){
                    auxHtml = "<ul style='margin-left: 95px; list-style-type: none; padding-left: 15px'>";
                }else{
                    auxHtml = "<ul style='list-style-type: none; padding-left: 15px'>";
                }
                $.each(result, function(i, field){
//                    console.log(field);
                    auxHtml = auxHtml + "<li class='treeLabel' data-module='" + field.module + "' data-concept-id='" + field.conceptId + "' data-term='" + field.fsn + "'><button class='btn btn-link btn-xs treeButton' style='padding:2px'>";
                    if (field.conceptId == "138875005" || field.conceptId == "9999999999"){
                        auxHtml = auxHtml + "<i class='glyphicon glyphicon-minus treeButton' data-ind='" + ind + "'></i></button>";
                    }else{
                        auxHtml = auxHtml + "<i class='glyphicon glyphicon-chevron-right treeButton' data-ind='" + ind + "'></i></button>";
                    }
                    if (field.definitionStatus == "PRIMITIVE"){
                        auxHtml = auxHtml + "<span class='badge alert-warning' draggable='true' ondragstart='drag(event)' data-module='" + field.module + "' data-concept-id='" + field.conceptId + "' data-term='" + field.fsn + "'>&nbsp;&nbsp;</span>&nbsp;&nbsp";
                    }else{
                        auxHtml = auxHtml + "<span class='badge alert-warning' draggable='true' ondragstart='drag(event)' data-module='" + field.module + "' data-concept-id='" + field.conceptId + "' data-term='" + field.fsn + "'>&equiv;</span>&nbsp;&nbsp";
                    }
                    if (countryIcons[field.module]){
                        auxHtml = auxHtml + "<div class='phoca-flagbox' style='width:26px;height:26px'><span class='phoca-flag " + countryIcons[field.module] + "'></span></div>&nbsp";
                    }
                    auxHtml = auxHtml + "<a id='" + ind + panel.divElement.id + "-treeicon-" + field.conceptId + "' href='javascript:void(0);' style='color: inherit;text-decoration: inherit;'>";
                    auxHtml = auxHtml + "<span class='treeLabel selectable-row' data-module='" + field.module + "' data-concept-id='" + field.conceptId + "' data-term='" + field.fsn + "'>" + field.fsn + "</span></a></li>";
                });
                auxHtml = auxHtml + "</ul>";
            }
            $(target).removeClass("glyphicon-refresh");
            $(target).removeClass("icon-spin");
            if (result.length > 0) {
                $(target).addClass("glyphicon-chevron-up");
            } else {
                $(target).addClass("glyphicon-minus");
            }
            $(target).closest("li").prepend(auxHtml);
//            $("#" + ind + panel.divElement.id + "-treeicon-" + conceptId).after(auxHtml);
            $(".treeButton").disableTextSelect();
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });
        }).fail(function(){
        });
    }

    this.loadMembers = function(returnLimit, skipTo, paginate){
        var membersUrl = options.serverUrl + "/" + options.release + "/concepts/" + panel.conceptId + "/members?limit=" + returnLimit;
        if (skipTo > 0){
            membersUrl = membersUrl + "&skip=" + skipTo;
        }else{
            $('#members-' + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><i class='glyphicon glyphicon-refresh icon-spin'></i></td></tr>");
        }
        var total;
        if (panel.options.manifest){
//                console.log(panel.options.manifest);
            $.each(panel.options.manifest.refsets, function (i, field){
                if (field.conceptId == panel.conceptId){
                    if (field.count){
                        total = field.count;
                    }
                }
            });
        }
        if (typeof total != "undefined"){
//            console.log(total);
            if (total < 25000){
                paginate = 1;
                membersUrl = membersUrl + "&paginate=1";
            }

        }
//        console.log(membersUrl);
        if (xhrMembers != null) {
            xhrMembers.abort();
            console.log("aborting call...");
        }
        xhrMembers = $.getJSON(membersUrl, function(result){

        }).done(function(result){
            var remaining = "asd";
            if (typeof paginate != "undefined"){
                if (result.details.total == skipTo){
                    remaining = 0;
                }else{
                    if (result.details.total > (skipTo + returnLimit)){
                        remaining = result.details.total - (skipTo + returnLimit);
                    }else{
//                        if (result.details.total < returnLimit && skipTo != 0){
                            remaining = 0;
//                        }else{
//                            remaining = result.details.total;
//                        }
                    }
                }
                if (remaining < returnLimit){
                    var returnLimit2 = remaining;
                }else{
                    if (remaining != 0){
                        var returnLimit2 = returnLimit;
                    }else{
                        var returnLimit2 = 0;
                    }
                }
            }else{
                var returnLimit2 = returnLimit;
            }
            var context = {
                result: result,
                returnLimit: returnLimit2,
                remaining: remaining,
                divElementId: panel.divElement.id,
                skipTo: skipTo
            };
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if(a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('if_gr', function(a,b, opts) {
                if (a){
                    if(a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            if (result.members.length != 0){
                $("#" + panel.divElement.id + "-moreMembers").remove();
                $("#members-" + panel.divElement.id + "-resultsTable").find(".more-row").remove();
                if (skipTo == 0) {
                    $('#members-' + panel.divElement.id + "-resultsTable").html(JST["views/conceptDetailsPlugin/tabs/members.hbs"](context));
                }else{
                    $('#members-' + panel.divElement.id + "-resultsTable").append(JST["views/conceptDetailsPlugin/tabs/members.hbs"](context));
                }
                $("#" + panel.divElement.id + "-moreMembers").click(function(){
                    $("#" + panel.divElement.id + "-moreMembers").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                    panel.loadMembers(returnLimit2, skipTo + returnLimit, paginate);
                });
                $("#members-" + panel.divElement.id + "-sort").unbind();
                $("#members-" + panel.divElement.id + "-sort").click(function(){
                    $("#members-" + panel.divElement.id + "-sort").blur();
                    panel.loadMembers(returnLimit, 0, 1);
                });
            }else{
                if (skipTo != 0){
                    $("#" + panel.divElement.id + "-moreMembers").remove();
                    $("#members-" + panel.divElement.id + "-resultsTable").find(".more-row").remove();
                    if (skipTo == 0) {
                        $('#members-' + panel.divElement.id + "-resultsTable").html(JST["views/conceptDetailsPlugin/tabs/members.hbs"](context));
                    }else{
                        $('#members-' + panel.divElement.id + "-resultsTable").append(JST["views/conceptDetailsPlugin/tabs/members.hbs"](context));
                    }
                    $("#" + panel.divElement.id + "-moreMembers").click(function(){
                        $("#" + panel.divElement.id + "-moreMembers").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                        panel.loadMembers(returnLimit2, skipTo + returnLimit, paginate);
                    });
                    $("#members-" + panel.divElement.id + "-sort").unbind();
                    $("#members-" + panel.divElement.id + "-sort").click(function(){
                        $("#members-" + panel.divElement.id + "-sort").blur();
                        panel.loadMembers(returnLimit, 0, 1);
                    });
                }else{
                    $('#members-' + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>This concept has no members</span></td></tr>");
                }
            }
        }).fail(function(){
            $('#members-' + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>This concept has no members</span></td></tr>");
        });
    }

	this.loadHistoricalAssociations = function(){
        var historicalAssocUrl = options.serverUrl.replace('/browser','') + "/" + options.release  + "/members?targetComponent=" +  panel.conceptId + "&limit=1000&active=true&expand=referencedComponent(expand(fsn()))";        
        $('#historical-' + panel.divElement.id).html("<span><i class='glyphicon glyphicon-refresh icon-spin'></i></span>");       
        if (xhrHistoricalAssocs != null) {
            xhrHistoricalAssocs.abort();
			xhrHistoricalAssocs = null;
            console.log("aborting call...");			
        }		
        xhrHistoricalAssocs = $.getJSON(historicalAssocUrl, function(result){
        }).done(function(result){
            var context = {
                result: result.items,               
                divElementId: panel.divElement.id	                
            };
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if(a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('if_gr', function(a,b, opts) {
                if (a){
                    if(a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
			Handlebars.registerHelper('convertTextFromCode', function(code, opts){
                if(!code) {
					return '';
				}
				var text = code.replace(/_/g, " ");
				text = text.toLowerCase();
				return text.charAt(0).toUpperCase() + text.slice(1);
            });
            
            if (result.items.length != 0){
				var parseAssocications =  function(list) {     
				  var dfd = $.Deferred();
				  var parsedComponents = {
					concepts: [],
					descriptionsWithConceptTarget: [],        
					other: []
				  };
				  for (var i = list.length - 1; i >= 0; i--) {
					var association = list[i];
					if(association.active === false) {         
					  parsedComponents.other.push(association.referencedComponent);
					  if (parsedComponents.concepts.length + parsedComponents.descriptionsWithConceptTarget.length  + parsedComponents.other.length === list.length) {
						dfd.resolve(parsedComponents);
					  }
					}
					// check if referenced concept
					else if (isConceptId(association.referencedComponent.id)) {
						$.getJSON(options.serverUrl + "/" + options.release + "/concepts/" + association.referencedComponent.id, function (result) {
						}).done(function (concept) {
							var item = concept;          
							if (parsedComponents.concepts.map(function (c) {
								return c.conceptId
							  }).indexOf(item.conceptId) === -1) {
							  parsedComponents.concepts.push(item);
							}
						   
							if (parsedComponents.concepts.length + parsedComponents.descriptionsWithConceptTarget.length  + parsedComponents.other.length === list.length) {
							  dfd.resolve(parsedComponents);
							}
						}).fail(function (xhr, textStatus, error) {
							
						});					  
					}
					// check if referenced description
					else if (isDescriptionId(association.referencedComponent.id)) {         
					  parsedComponents.descriptionsWithConceptTarget.push(association.referencedComponent);
					  if (parsedComponents.concepts.length + parsedComponents.descriptionsWithConceptTarget.length  + parsedComponents.other.length === list.length) {
						dfd.resolve(parsedComponents);
					  }      
					}
					// add to other (dump) list
					else {         
					  parsedComponents.other.push(association.referencedComponent);
					  if (parsedComponents.concepts.length + parsedComponents.descriptionsWithConceptTarget.length  + parsedComponents.other.length === list.length) {
						dfd.resolve(parsedComponents);
					  }
					}
				  }
				  return dfd.promise();
				};
				
				$.when(parseAssocications(result.items)).then(
				  function( respone ) {
					if(respone && (respone.concepts.length > 0 || respone.descriptionsWithConceptTarget.length)) {
						var context = {
							concepts: respone.concepts.sort(function(a, b) {
															if (a.fsn.toLowerCase() < b.fsn.toLowerCase())
																return -1;
															if (a.fsn.toLowerCase() > b.fsn.toLowerCase())
																return 1;
															return a.conceptId - b.conceptId;
														}),
							descriptionsWithConceptTarget: respone.descriptionsWithConceptTarget.sort(function(a, b) {
															if (a.term.toLowerCase() < b.term.toLowerCase())
																return -1;
															if (a.term.toLowerCase() > b.term.toLowerCase())
																return 1;
															return 0;
														})
						};
						$('#historical-' + panel.divElement.id).empty();	
						$('#historical-' + panel.divElement.id).append(JST["views/conceptDetailsPlugin/tabs/historical-association.hbs"](context));						
					} else {
						$('#historical-' + panel.divElement.id).html("<div class='alert alert-warning'><span>This concept has no historical associations</span></div>");
					}
				  },
				  function( status ) {
					$('#historical-' + panel.divElement.id).html("<div class='alert alert-warning'><span>This concept has no historical associations</span></div>");
				  }
				);               
            }else{
                $('#historical-' + panel.divElement.id).html("<div class='alert alert-warning'><span>This concept has no historical associations</span></div>");
            }
        }).fail(function(){
            $('#historical-' + panel.divElement.id).html("<div class='alert alert-warning'><span>This concept has no historical associations</span></div>");
        });
    }
	function isConceptId(id) {
		var idStr = String(id);
		return isSctid(idStr) && idStr.substring(idStr.length - 2, idStr.length - 1) === '0';
	}

	function isDescriptionId(id) {
		var idStr = String(id);
		return isSctid(idStr) && idStr.substring(idStr.length - 2, idStr.length - 1) === '1';
	}
	
	function isSctid(id) {
        if (!id) {
          return false;
        }
        var match = id.match(/^[0-9]+$/);
        return match ? true : false;
	}
	  
    this.stripDiagrammingMarkup = function(htmlString) {
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-primitive-concept-compact"), 'g'), "");
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-defined-concept-compact"), 'g'), "");
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-attribute-compact"), 'g'), "");
        return htmlString;
    }
    this.escapeRegExp = function(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

//    this.setSubscription = function(subscriptionPanel) {
//        panel.subscription = subscriptionPanel;
//        $("#" + panel.divElement.id + "-subscribersMarker").css('color', subscriptionPanel.markerColor);
//        $("#" + panel.divElement.id + "-subscribersMarker").show();
//    }

//    this.clearSubscription = function() {
//        panel.subscription = null;
//        $("#" + panel.divElement.id + "-subscribersMarker").hide();
//    }

//    

    this.loadMarkers = function (){
        var auxMarker = "", right = 0, top = 0, aux = false, visible = false;
        $.each(componentsRegistry, function(i, field){
            var panelId = field.divElement.id;
            if ($("#" + panelId + "-subscribersMarker").is(':visible')){
                visible = true;
            }
        });
        if (panel.subscribers.length == 0){
            right = 14;
            $("#" + panel.divElement.id + "-ownMarker").hide();
        }else{
            if (!visible){
                $("#" + panel.divElement.id + "-ownMarker").hide();
            }
            aux = true;
        }
        if ($("#" + panel.divElement.id + "-subscribersMarker").is(':visible')){
            $("#" + panel.divElement.id + "-panelTitle").html($("#" + panel.divElement.id + "-panelTitle").html().replace(/&nbsp;/g, ''));
            if (aux){
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp&nbsp" + $("#" + panel.divElement.id + "-panelTitle").html());
            }
            $.each(panel.subscriptionsColor, function(i, field){
                auxMarker = auxMarker + "<i class='glyphicon glyphicon-bookmark' style='color: "+ field +"; top:" + top + "px; right: " + right + "px;'></i>";
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp" + $("#" + panel.divElement.id + "-panelTitle").html());
                top = top + 5;
                right = right + 10;
            });
            $("#" + panel.divElement.id + "-subscribersMarker").html(auxMarker);
        }
    }

    // Subsription methods
    this.subscribe = function(panelToSubscribe) {
        var panelId = panelToSubscribe.divElement.id;
        console.log( panel.divElement.id + ' subscribing to id: ' + panelId);
        var alreadySubscribed = false;
        $.each(panel.subscriptionsColor, function(i, field){
            if (field == panelToSubscribe.markerColor){
                alreadySubscribed = true;
            }
        });
        if (!alreadySubscribed) {
            var subscription = channel.subscribe(panelId, function(data, envelope) {
                //console.log("listening in " + panel.divElement.id);
                panel.conceptId = data.conceptId;
                if ($("#home-children-" + panel.divElement.id + "-body").length > 0){
                }else{
                    panel.setupCanvas();
                    panel.loadMarkers();
                }
                panel.updateCanvas();
            });
            panel.subscriptions.push(subscription);
            panelToSubscribe.subscribers.push(panel.divElement.id);
            panel.subscriptionsColor.push(panelToSubscribe.markerColor);
        }
        $("#" + panelId + "-ownMarker").show();
        $("#" + panel.divElement.id + "-subscribersMarker").show();
        $("#" + panelId + "-ownMarker").show();
    }

    this.unsubscribe = function(panelToUnsubscribe) {
        var aux = [], colors = [], unsubscribed = true;
        $.each(panel.subscriptionsColor, function(i, field){
            if (field != panelToUnsubscribe.markerColor){
                colors.push(field);
            }else{
                unsubscribed = false;
            }
        });
        if (!unsubscribed){
            panel.subscriptionsColor = colors;
//            console.log(panel.divElement.id);
//            console.log(panel.subscriptionsColor);
            colors = [];
            $.each(panelToUnsubscribe.subscribers, function(i, field){
                if (field != panel.divElement.id){
                    aux.push(field);
                }
            });
            panelToUnsubscribe.subscribers = aux;
            $.each(panelToUnsubscribe.subscriptionsColor, function(i, field){
                colors.push(field);
            });
            if (panelToUnsubscribe.subscribers.length == 0){
                if (panelToUnsubscribe.subscriptions.length == 0){
                    $("#" + panelToUnsubscribe.divElement.id + "-subscribersMarker").hide();
                }
            }else{
//                colors.push(panelToUnsubscribe.markerColor);
            }
            panelToUnsubscribe.subscriptionsColor = colors;
//            console.log(panelToUnsubscribe.divElement.id);
//            console.log(panelToUnsubscribe.subscriptionsColor);
            aux = [];
            $.each(panel.subscriptions, function(i, field){
                if (panelToUnsubscribe.divElement.id == field.topic){
                    field.unsubscribe();
                }else{
                    aux.push(field);
                }
            });
            panel.subscriptions = aux;
            if (panel.subscriptions.length == 0 && panel.subscribers.length == 0){
                $("#" + panel.divElement.id + "-subscribersMarker").hide();
            }
        }
    }

    this.setupOptionsPanel = function() {
        var possibleSubscribers = [];
        $.each(componentsRegistry, function(i, field){
            if (field.divElement.id != panel.divElement.id){
                var object = {};
                object.subscriptions = field.subscriptions;
                object.id = field.divElement.id;
                possibleSubscribers.push(object);
            }
        });
        var aux = false;
        $.each(possibleSubscribers, function(i, field){
            aux = false;
            $.each(panel.subscriptions, function(j, subscription){
                if (field.id == subscription.topic){
                    aux = true;
                }
            });
            field.subscribed = aux;
            aux = false;
            $.each(field.subscriptions, function(i, subscription){
                if (subscription.topic == panel.divElement.id){
                    aux = true;
                }
            });
            field.subscriptor = aux;
        });
        panel.options.possibleSubscribers = possibleSubscribers;
        var context = {
            options: panel.options,
            divElementId: panel.divElement.id
        };
        Handlebars.registerHelper('if_eq', function(a, b, opts) {
            if (opts != "undefined") {
                if(a == b)
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            }
        });
        Handlebars.registerHelper('ifIn', function(elem, list, options) {
                    if (list.indexOf(elem) > -1) {
                        return options.fn(this);
                    }
                    return options.inverse(this);
                });
        $("#" + panel.divElement.id + "-modal-body").html(JST["views/conceptDetailsPlugin/options.hbs"](context));
    }

    this.readOptionsPanel = function() {
        panel.options.displaySynonyms = $("#" + panel.divElement.id + "-displaySynonymsOption").is(':checked');
        panel.options.showIds = $("#" + panel.divElement.id + "-displayIdsOption").is(':checked');
        panel.options.displayChildren = $("#" + panel.divElement.id + "-childrenOption").is(':checked');
        panel.options.hideNotAcceptable = $("#" + panel.divElement.id + "-hideNotAcceptableOption").is(':checked');
        panel.options.displayInactiveDescriptions = $("#" + panel.divElement.id + "-displayInactiveDescriptionsOption").is(':checked');
        panel.options.diagrammingMarkupEnabled = $("#" + panel.divElement.id + "-diagrammingMarkupEnabledOption").is(':checked');
        panel.options.selectedView = $("#" + panel.divElement.id + "-relsViewOption").val();
        //panel.options.langRefset = $("#" + panel.divElement.id + "-langRefsetOption").val();
        panel.options.displayChildren = $("#" + panel.divElement.id + "-displayChildren").is(':checked');
        $.each(panel.options.possibleSubscribers, function (i, field){
            field.subscribed = $("#" + panel.divElement.id + "-subscribeTo-" + field.id).is(':checked');
            field.subscriptor = $("#" + panel.divElement.id + "-subscriptor-" + field.id).is(':checked');
            var panelToSubscribe = {};
            $.each(componentsRegistry, function(i, panelS){
                if (panelS.divElement.id == field.id){
                    panelToSubscribe = panelS;
                }
            });
            if (field.subscribed){
                panel.subscribe(panelToSubscribe);
            }else{
                panel.unsubscribe(panelToSubscribe);
            }
            if (field.subscriptor){
                panelToSubscribe.subscribe(panel);
            }else{
                panelToSubscribe.unsubscribe(panel);
            }
        });
        $.each(componentsRegistry, function (i, field){
            field.loadMarkers();
        });

        panel.options.langRefset = [];
        $.each($("#" + panel.divElement.id).find(".langOption"), function(i, field) {
            if ($(field).is(':checked')) {
                panel.options.langRefset.push($(field).val());
            }
        });
        panel.updateCanvas();
    }
}

function updateCD(divElementId, conceptId) {
    $.each(componentsRegistry, function(i, field) {
        //console.log(field.divElement.id + ' == ' + divElementId.id);
        if (field.divElement.id == divElementId) {
            field.conceptId = conceptId;
            field.updateCanvas();
            channel.publish(field.divElement.id, {
                term: field.term,
                conceptId: field.conceptId,
                module: field.module,
                source: field.divElement.id
            });
        }
    });
    $('.history-button').popover('hide');
}

//function cancelSubscription(divElementId1, divElementId2) {
//    var d1;
//    var d2;
//    $.each(componentsRegistry, function(i, field) {
//        if (field.divElement.id == divElementId1) {
//            d1 = field;
//        } else if (field.divElement.id == divElementId2) {
//            d2 = field;
//        }
//    });
//    d1.unsubscribe(d2);
//    $(d2.divElement).find('.linker-button').popover('toggle');
//}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

(function($) {
    $.fn.addConceptDetails = function(conceptId, options) {
        this.filter("div").each(function() {
            var cd = new conceptDetails(this, conceptId, options);
            cd.setupCanvas();
        });
    };
}(jQuery));

$(document).keypress(function(event) {
    if (event.which == '13') {
        event.preventDefault();
    }
}
);