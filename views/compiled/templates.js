this["JST"] = this["JST"] || {};

this["JST"]["views/conceptDetailsPlugin/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style='margin: 5px; height:98%; overflow:auto;' class='panel panel-default'>\r\n    <div class='panel-heading' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelHeading' ondrop=\"dropC(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\">\r\n<!--        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ownMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-book'></i></button>-->\r\n<!--        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-subscribersMarker' class='btn btn-link btn-lg' style='padding:2px;position: absolute;top: 1px;'><i class='glyphicon glyphicon-bookmark'></i></button>-->\r\n        <div class='row'>\r\n            <div class='col-md-8' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_concept_details'>Concept Details</span></strong></div>\r\n            <div class='col-md-4 text-right'>\r\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-linkerButton' draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='btn btn-link linker-button' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>-->\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-historyButton' class='btn btn-link history-button' style='padding:2px'><i class='glyphicon glyphicon-time'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configButton' class='btn btn-link' data-toggle='modal' style='padding:2px' data-target='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class='panel-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\r\n        <!-- Nav tabs -->\r\n        <ul class=\"nav nav-tabs\" id=\"details-tabs-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            <li class=\"active\"><a href=\"#home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"\"><span class=\"i18n\" data-i18n-id=\"i18n_summary\">Summary</span></a></li>\r\n            <li><a id=\"details-tab-link-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#details-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"\"><span class=\"i18n\" data-i18n-id=\"i18n_details\">Details</span></a></li>\r\n            <!--<li id=\"diagram-tab\"><a href=\"#diagram-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\" id=\"diagram-tab-link-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"i18n\" data-i18n-id=\"i18n_diagram\">Diagram</span></a></li>-->\r\n            <!--<li><a href=\"#refsets-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\"><span class=\"i18n\" data-i18n-id=\"i18n_refsets\">Refsets</span></a></li>-->\r\n            <!--<li id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-members-tab\"><a href=\"#members-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\"><span class=\"i18n\" data-i18n-id=\"i18n_members\">Members</span></a></li>-->\r\n            <!--<li id=\"references-tab\"><a id=\"references-tab-link-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\"><span class=\"i18n\" data-i18n-id=\"i18n_references\">References</span></a></li>-->\r\n            <li id=\"ads-tab\"><a id=\"ads-tab-link-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#ads-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"\"><span class=\"i18n\" data-i18n-id=\"i18n_PatternAnalysis\">Pattern Analysis</span></a></li>\r\n			<li id=\"historical-tab\"><a id=\"historical-tab-link-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#historical-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"\"><span class=\"i18n\" data-i18n-id=\"i18n_PatternAnalysis\">Historical Association</span></a></li>\r\n            <div class=\"pull-right\">\r\n                    <div class=\"btn-group\" style=\"margin:3px\" role=\"group\" aria-label=\"...\">\r\n                        <button type=\"button\"  class=\"btn btn-default\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-stated-button\">Stated</button>\r\n                        <button type=\"button\" class=\"btn btn-default\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-inferred-button\">Inferred</button>\r\n                    </div>\r\n                    <div><span class=\"text-muted text-center\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-wf-status-label\"></span></div>\r\n                </div>\r\n        </ul>\r\n        <!-- Tab panes -->\r\n        <div class=\"tab-content\" id=\"details-tab-content-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            <div class=\"tab-pane fade in active\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"padding: 5px;\">\r\n                <div style=\"max-height: 300px; overflow: auto; margin-left: 0%; margin-bottom: 10px; margin-top: 10px; width: 80%;border: 2px solid #357ebd; border-radius: 4px; padding: 5px;\">\r\n                    <div class=\"panel-heading\">\r\n                        <h4><span data-i18n-id=\"i18n_parents\" class=\"i18n\">Parents</span></h4>\r\n                    </div>\r\n                    <div class=\"panel-body\" id=\"home-parents-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                        <span data-i18n-id=\"i18n_no_parents\" class=\"i18n\">No parents</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" style=\"overflow: auto; max-height: 30%;\">\r\n                    <div class=\"col-md-offset-1 col-md-4\" style=\"color: #ffffff;background-color: #1e90ff;display: inline-block; border: 2px solid #357ebd; border-radius: 4px; padding: 5px;\" id=\"home-attributes-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Attributes</div>\r\n                    <div class=\"col-md-4\" style=\"background-color: rgba(30, 144, 255, 0.17); display: inline-block; min-height: 100%; margin-left: 10px; border: 2px solid #357ebd; border-radius: 4px; padding: 5px;\" id=\"home-roles-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Relationships</div>\r\n                </div>\r\n                <div style=\"max-height: 300px; overflow: auto; margin-left: 0%; margin-bottom: 10px; margin-top: 10px; width: 80%;border: 2px solid #357ebd; border-radius: 4px; padding: 5px;\" id=\"home-children-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                    <div class=\"panel-heading\">\r\n                        <h4><span data-i18n-id=\"i18n_children\" class=\"i18n\">Children</span>&nbsp;<span id=\"home-children-cant-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span></h4>\r\n                    </div>\r\n                    <div class=\"panel-body\" id=\"home-children-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-body\"></div>\r\n                </div>\r\n                <div><span class=\"text-muted pull-right\" id=\"footer-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span></div>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"details-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-attributes-panel' class='panel panel-default'>\r\n                </div>\r\n                <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-descriptions-panel' class='panel panel-default'>\r\n                </div>\r\n                <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-rels-panel' class='panel panel-default'>\r\n                </div>\r\n                <!--<div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-children-panel' class='panel panel-default' style='height:100px;overflow:auto;margin-bottom: 15px;'>-->\r\n                <!--</div>-->\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"diagram-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                <div class=\"row\" style=\"margin-right: 20px\"><span class=\"pull-right text-muted\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-diagram-viewLabel\"></span></div>\r\n                <div id=\"diagram-canvas-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"refsets-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"members-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                <!--<div class=\"pull-right\" style=\"padding: 5px\">-->\r\n                    <!--<button id=\"members-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-sort\" class=\"btn btn-default\">Sort results</button>-->\r\n                    <!--<span class=\"text-muted\">This operation may time-out for large refsets</span>-->\r\n                <!--</div>-->\r\n                <!--<br>-->\r\n                <table id=\"members-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsTable\" class=\"table table-hover table-bordered\">\r\n                </table>\r\n                <!--<button id=\"members-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-normal\" class=\"btn btn-default\">100 first members</button>-->\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                <div class=\"panel-group\" id=\"references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-accordion\">\r\n\r\n                </div>\r\n                <!--<br>-->\r\n                <!--<span class=\"text-muted\" style=\"padding: 5px;\" id=\"references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-total\"></span>-->\r\n                <!--<table id=\"references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsTable\" class=\"table table-hover table-bordered\">-->\r\n                <!--</table>-->\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"ads-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                <div class=\"panel-group\" id=\"ads-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-accordion\">\r\n                </div>\r\n            </div>\r\n			<div class=\"tab-pane fade\" id=\"historical-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class='modal fade' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'>\r\n    <div class='modal-dialog'>\r\n        <div class='modal-content'>\r\n            <div class='modal-header'>\r\n                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>\r\n                <h4 class='modal-title'><span class='i18n' data-i18n-id='i18n_options'>Options</span></h4>\r\n            </div>\r\n            <div class='modal-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modal-body'>\r\n                <p></p>\r\n            </div>\r\n            <div class='modal-footer'>\r\n                <button type='button' class='btn btn-danger' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_cancel'>Cancel</span></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-apply-button' type='button' class='btn btn-success' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_apply_changes'>Apply changes</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n        ";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/options.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displaySynonymsOption\" checked> <span class=\"i18n\" data-i18n-id=\"i18n_display_synonyms2\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_synonyms2", "Display Synonyms along with FSN and preferred terms", options) : helperMissing.call(depth0, "i18n", "i18n_display_synonyms2", "Display Synonyms along with FSN and preferred terms", options)))
    + "</span>\r\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displaySynonymsOption\"> <span class=\"i18n\" data-i18n-id=\"i18n_display_synonyms2\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_synonyms2", "Display Synonyms along with FSN and preferred terms", options) : helperMissing.call(depth0, "i18n", "i18n_display_synonyms2", "Display Synonyms along with FSN and preferred terms", options)))
    + "</span>\r\n                ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displayIdsOption\" checked> <span class=\"i18n\" data-i18n-id=\"i18n_display_ids\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_ids", "Display Ids", options) : helperMissing.call(depth0, "i18n", "i18n_display_ids", "Display Ids", options)))
    + "</span>\r\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displayIdsOption\"> <span class=\"i18n\" data-i18n-id=\"i18n_display_ids\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_ids", "Display Ids", options) : helperMissing.call(depth0, "i18n", "i18n_display_ids", "Display Ids", options)))
    + "</span>\r\n                ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displayInactiveDescriptionsOption\" checked> <span class=\"i18n\" data-i18n-id=\"i18n_display_inactive_descriptions\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_inactive_descriptions", "Display inactive descriptions", options) : helperMissing.call(depth0, "i18n", "i18n_display_inactive_descriptions", "Display inactive descriptions", options)))
    + "</span>\r\n                ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displayInactiveDescriptionsOption\"> <span class=\"i18n\" data-i18n-id=\"i18n_display_inactive_descriptions\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_inactive_descriptions", "Display inactive descriptions", options) : helperMissing.call(depth0, "i18n", "i18n_display_inactive_descriptions", "Display inactive descriptions", options)))
    + "</span>\r\n                ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-hideNotAcceptableOption\" checked> <span class=\"i18n\" data-i18n-id=\"i18n_hide_not_acceptable\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_hide_not_acceptable", "Hide descriptions with no acceptability", options) : helperMissing.call(depth0, "i18n", "i18n_hide_not_acceptable", "Hide descriptions with no acceptability", options)))
    + "</span>\r\n                ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-hideNotAcceptableOption\"> <span class=\"i18n\" data-i18n-id=\"i18n_hide_not_acceptable\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_hide_not_acceptable", "Hide descriptions with no acceptability", options) : helperMissing.call(depth0, "i18n", "i18n_hide_not_acceptable", "Hide descriptions with no acceptability", options)))
    + "</span>\r\n                ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-diagrammingMarkupEnabledOption\" checked> <span class=\"i18n\" data-i18n-id=\"i18n_diagramming_markup_enabled\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_diagramming_markup_enabled", "Diagramming Guideline colors enabled", options) : helperMissing.call(depth0, "i18n", "i18n_diagramming_markup_enabled", "Diagramming Guideline colors enabled", options)))
    + "</span>\r\n                ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-diagrammingMarkupEnabledOption\"> <span class=\"i18n\" data-i18n-id=\"i18n_diagramming_markup_enabled\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_diagramming_markup_enabled", "Diagramming Guideline colors enabled", options) : helperMissing.call(depth0, "i18n", "i18n_diagramming_markup_enabled", "Diagramming Guideline colors enabled", options)))
    + "</span>\r\n                ";
  return buffer;
  }

function program21(depth0,data) {
  
  
  return "checked";
  }

function program23(depth0,data) {
  
  
  return "\r\n                <option value=\"stated\" selected>Stated</option>\r\n            ";
  }

function program25(depth0,data) {
  
  
  return "\r\n                <option value=\"stated\">Stated</option>\r\n            ";
  }

function program27(depth0,data) {
  
  
  return "\r\n                <option value=\"inferred\" selected>Inferred</option>\r\n            ";
  }

function program29(depth0,data) {
  
  
  return "\r\n                <option value=\"inferred\">Inferred</option>\r\n            ";
  }

function program31(depth0,data) {
  
  
  return "\r\n                <option value=\"all\" selected>All</option>\r\n            ";
  }

function program33(depth0,data) {
  
  
  return "\r\n                <option value=\"all\">All</option>\r\n            ";
  }

function program35(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <tr>\r\n                        <td>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n                        <td>\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-subscribeTo-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subscribed), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                                </label>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-subscriptor-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subscriptor), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                                </label>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                ";
  return buffer;
  }

  buffer += "<form role=\"form\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-options-form\">\r\n    <div class=\"form-group\">       \r\n        <!--\r\n        <div class=\"checkbox\">\r\n            <label>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.displaySynonyms), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </label>\r\n        </div>\r\n        -->    \r\n        <!--\r\n        <div class=\"checkbox\">\r\n            <label>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.showIds), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </label>\r\n        </div>\r\n        -->\r\n        <div class=\"checkbox\">\r\n            <label>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.displayInactiveDescriptions), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </label>\r\n        </div>\r\n        <!--\r\n        <div class=\"checkbox\">\r\n            <label>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.hideNotAcceptable), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </label>\r\n        </div>\r\n        -->\r\n        <!--\r\n        <div class=\"checkbox\">\r\n            <label>\r\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.diagrammingMarkupEnabled), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </label>\r\n        </div>\r\n        -->\r\n        <!--\r\n        <div class=\"checkbox\">\r\n            <label>\r\n                <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displayChildren\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.displayChildren), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> <span class=\"i18n\" data-i18n-id=\"i18n_display_children\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_children", "Display All Children", options) : helperMissing.call(depth0, "i18n", "i18n_display_children", "Display All Children", options)))
    + "</span>\r\n            </label>\r\n        </div>\r\n        -->\r\n    </div>\r\n    <!--\r\n    <div class=\"form-group\">\r\n        <label for=\"selectedRelsView\"><span class=\"i18n\" data-i18n-id=\"i18n_rels_view\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_rels_view", "Relationships View", options) : helperMissing.call(depth0, "i18n", "i18n_rels_view", "Relationships View", options)))
    + "</span></label>\r\n        <select class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-relsViewOption\">\r\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(29, program29, data),fn:self.program(27, program27, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "inferred", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "inferred", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(33, program33, data),fn:self.program(31, program31, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "all", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "all", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </select>\r\n    </div>\r\n    -->    \r\n    <div class=\"form-group\">\r\n        <label for=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-langRefsetOption\"><span class=\"i18n\" data-i18n-id=\"i18n_language_refset\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_language_refset", "Language Refset", options) : helperMissing.call(depth0, "i18n", "i18n_language_refset", "Language Refset", options)))
    + "</span></label>\r\n        <div class=\"checkbox\">\r\n            <label>\r\n                <input class=\"langOption\" type=\"checkbox\" value=\"900000000000509007\" ";
  stack1 = (helper = helpers.ifIn || (depth0 && depth0.ifIn),options={hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, "900000000000509007", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langRefset), options) : helperMissing.call(depth0, "ifIn", "900000000000509007", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langRefset), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> United States of America English language reference set (foundation metadata concept)\r\n            </label>\r\n        </div>\r\n        <div class=\"checkbox\">\r\n            <label>\r\n                <input class=\"langOption\" type=\"checkbox\" value=\"900000000000508004\" ";
  stack1 = (helper = helpers.ifIn || (depth0 && depth0.ifIn),options={hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, "900000000000508004", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langRefset), options) : helperMissing.call(depth0, "ifIn", "900000000000508004", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langRefset), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Great Britain English language reference set (foundation metadata concept)\r\n            </label>\r\n        </div>        \r\n    </div>\r\n \r\n    <!--\r\n    <div class=\"form-group\">\r\n        <table class='table table-bordered table-hover'>\r\n            <thead>\r\n                <tr>\r\n                    <th>Panel</th>\r\n                    <th>Subscribed</th>\r\n                    <th>Subscriptor</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.possibleSubscribers), {hash:{},inverse:self.noop,fn:self.programWithDepth(35, program35, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    -->\r\n</form>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/ads.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.selectedPatterns), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<hr/>\r\n		<div class=\"pull-right\">\r\n			<div class=\"pull-left\">\r\n				<h4>Usage: ";
  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "  Examples: &nbsp;</h4>\r\n				<ul>\r\n				";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.examples), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</ul>\r\n			</div>\r\n		</div>\r\n		<div id=\"ads-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"margin-top: 10px;\" class=\"panel panel-default\">\r\n			<div id=\"ads-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-diagram-body\">\r\n			</div>\r\n		</div>\r\n	";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<li>\r\n						<a id=\"ads-example\" href=\"javascript:adsObj.selectConcept(";
  if (helper = helpers.sctId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sctId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")\" title=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " \">";
  if (helper = helpers.sctId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sctId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n						<a class=\"glyphicon glyphicon-book\" href=\"http://snomed.info/id/";
  if (helper = helpers.sctId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sctId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"Open ";
  if (helper = helpers.sctId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sctId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "|";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "| in SCT Browser\" target=\"_sctBrowser\"/>\r\n					</li>\r\n				";
  return buffer;
  }

  buffer += "<br/>\r\n<h4>\r\n	<span ondrop=\"dropC(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\">";
  if (helper = helpers.sctId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sctId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " |";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "|</span>\r\n</h4>\r\n<h4>\r\n<div class=\"btn-group\" style=\"margin:20px\" role=\"group\" aria-label=\"...\">\r\n	<button type=\"button\" class=\"btn btn-default\" id=\"ads-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-children-button\">Children</button>\r\n	<button type=\"button\" class=\"btn btn-default\" id=\"ads-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-descendants-button\">Descendants</button>\r\n</div>\r\n<div class=\"btn-group\" style=\"margin:20px\" role=\"group\" aria-label=\"...\">\r\n	<button type=\"button\" class=\"btn btn-default\" id=\"ads-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-Prim-button\">Primitive</button>\r\n	<button type=\"button\" class=\"btn btn-default\" id=\"ads-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-FD-button\">FullyDefined</button>\r\n	<button type=\"button\" class=\"btn btn-default\" id=\"ads-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-Both-button\">Both</button>\r\n</div>\r\n";
  if (helper = helpers.adsView) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.adsView); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " count: ";
  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " using "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.selectedPatterns)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " patterns</h4>\r\n</h4>\r\n<div id=\"ads-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-content\"></div>\r\n\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dataOK), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/details/attributes-panel.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\r\n        class = 'highlightEffectiveTime'\r\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <a href=\"javascript:void(0);\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"color: inherit;text-decoration: inherit;\"><span class=\"badge alert-warning\">&nbsp;&nbsp;</span></a>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <a href=\"javascript:void(0);\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"color: inherit;text-decoration: inherit;\"><span class=\"badge alert-warning\" >&equiv;</span></a>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\r\n                , <span class='i18n' data-i18n-id='i18n_primitive'>PRIMITIVE</span>\r\n            ";
  }

function program9(depth0,data) {
  
  
  return "\r\n                , <span class='i18n' data-i18n-id='i18n_fully_defined'>Fully defined</span>\r\n            ";
  }

function program11(depth0,data) {
  
  
  return "\r\n                , <span class='i18n' data-i18n-id='i18n_active'>Active</span>\r\n            ";
  }

function program13(depth0,data) {
  
  
  return "\r\n                , <span class='i18n' data-i18n-id='i18n_inactive'>Inactive</span>\r\n            ";
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<div id=\"home-attributes-inactivation-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>		\r\n";
  return buffer;
  }

  buffer += "<table class='table table-default' >\r\n    <tr\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.effectiveTime), ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.effectiveTime), ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            >\r\n        <td>\r\n            <h4>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                <span ondrop=\"dropC(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n            </h4>\r\n            <br>SCTID: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n\r\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.active), true, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.active), true, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </td>\r\n        <td>\r\n            <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\r\n                <table border='1'><tr><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr><tr><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.effectiveTime)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.moduleId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td></tr></table>\r\n                \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i></button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"share-link-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-link more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\r\n                    <form><input class='form-control' id='share-field-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' value='";
  if (helper = helpers.dataContentValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dataContentValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?perspective=full&conceptId1="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&edition=";
  if (helper = helpers.edition) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.edition); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&release=";
  if (helper = helpers.release) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.release); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&server=";
  if (helper = helpers.server) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.server); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&langRefset=";
  if (helper = helpers.langRefset) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.langRefset); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></form><br>Copy the concept link (e.g. CTRL-C) to save and share a reference to this concept.\r\n                    \" data-html=\"true\"><i class=\"glyphicon glyphicon-share-alt\"></i></button>\r\n            <span class=\"pull-right\">\r\n               <div class=\"phoca-flagbox\" style=\"width:40px;height:40px\">\r\n                   <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\r\n               </div>\r\n            </span>\r\n        </td>\r\n\r\n    </tr>\r\n</table>";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.active), false, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.active), false, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/details/children-panel.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <tr><td draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\r\n    ";
  return buffer;
  }

  buffer += "<div>\r\n    <table class='table table-bordered'>\r\n        <thead>\r\n        <tr>\r\n            <th>\r\n                <span class='i18n' data-i18n-id='i18n_children'>Children</span>\r\n            </th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n</div>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.childrenResult), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</tbody>\r\n</table>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/details/descriptions-panel.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data,depth1) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  
  return "\r\n            <th>SCTID</th>\r\n        ";
  }

function program3(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <tr class='fsn-row";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.effectiveTime), ((stack1 = (depth1 && depth1.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.effectiveTime), ((stack1 = (depth1 && depth1.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\r\n                    <td>\r\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "FSN", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "FSN", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<!---->\r\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.preferred), {hash:{},inverse:self.program(23, program23, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        &nbsp;&nbsp;&nbsp;";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n                    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth2 && depth2.options)),stack1 == null || stack1 === false ? stack1 : stack1.showIds), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n                    <td>\r\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.preferred), {hash:{},inverse:self.program(32, program32, data),fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.acceptable), false, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.acceptable), false, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\r\n                        <table border='1'><tr><th style='padding: 3px;'>DescriptionId</th><th style='padding: 3px;'>Type</th><th style='padding: 3px;'>Language</th><th style='padding: 3px;'>Case Significance</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\r\n                                <tr><td style='padding: 3px;'>";
  if (helper = helpers.descriptionId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>"
    + escapeExpression((helper = helpers.parseCS || (depth0 && depth0.parseCS),options={hash:{},data:data},helper ? helper.call(depth0, "_", " ", (depth0 && depth0.type), options) : helperMissing.call(depth0, "parseCS", "_", " ", (depth0 && depth0.type), options)))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.lang) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lang); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>"
    + escapeExpression((helper = helpers.parseCS || (depth0 && depth0.parseCS),options={hash:{},data:data},helper ? helper.call(depth0, "_", " ", (depth0 && depth0.caseSignificance), options) : helperMissing.call(depth0, "parseCS", "_", " ", (depth0 && depth0.caseSignificance), options)))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.moduleId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\r\n                        </table>\r\n                        \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i></button>\r\n                    </td>\r\n                </tr>\r\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " danger";
  }

function program8(depth0,data) {
  
  
  return " highlightEffectiveTime";
  }

function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                            <span rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_fsn", "FSN", options) : helperMissing.call(depth0, "i18n", "i18n_fsn", "FSN", options)))
    + "\">F</span>\r\n                        ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "SYNONYM", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "SYNONYM", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                                <span rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_synonym", "Synonym", options) : helperMissing.call(depth0, "i18n", "i18n_synonym", "Synonym", options)))
    + "\">S</span>\r\n                            ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "TEXT_DEFINITION", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "TEXT_DEFINITION", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                            ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                                    <span rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_definition", "Definition", options) : helperMissing.call(depth0, "i18n", "i18n_definition", "Definition", options)))
    + "\">D</span>\r\n                                ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(21, program21, data),fn:self.program(19, program19, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "FSN", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "FSN", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                                &nbsp;<span class=\"glyphicon glyphicon-star-empty\" rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_preferred", "Preferred", options) : helperMissing.call(depth0, "i18n", "i18n_preferred", "Preferred", options)))
    + "\"></span>\r\n                            ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                                &nbsp;<span class=\"glyphicon glyphicon-star\" rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_preferred", "Preferred", options) : helperMissing.call(depth0, "i18n", "i18n_preferred", "Preferred", options)))
    + "\"></span>\r\n                            ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.acceptable), {hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                                &nbsp;<span rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_acceptable", "Acceptable", options) : helperMissing.call(depth0, "i18n", "i18n_acceptable", "Acceptable", options)))
    + "\">&#10004;</span></span>\r\n                            ";
  return buffer;
  }

function program26(depth0,data) {
  
  
  return "\r\n                                &nbsp;&nbsp;&nbsp;\r\n                            ";
  }

function program28(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                        <td>";
  if (helper = helpers.descriptionId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n                    ";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                            <span class='i18n' data-i18n-id='i18n_preferred'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_preferred", "Preferred", options) : helperMissing.call(depth0, "i18n", "i18n_preferred", "Preferred", options)))
    + "</span>\r\n                        ";
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.acceptable), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  return buffer;
  }
function program33(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                                <span class='i18n' data-i18n-id='i18n_acceptable'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_acceptable", "Acceptable", options) : helperMissing.call(depth0, "i18n", "i18n_acceptable", "Acceptable", options)))
    + "</span>\r\n                            ";
  return buffer;
  }

function program35(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                            <span class='i18n' data-i18n-id='i18n_not_acceptable'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_not_acceptable", "Not acceptable", options) : helperMissing.call(depth0, "i18n", "i18n_not_acceptable", "Not acceptable", options)))
    + "</span>\r\n                        ";
  return buffer;
  }

  buffer += "<table class='table table-bordered' id = '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-descriptions-panel-table'>\r\n    <thead>\r\n        <tr>\r\n           <th colspan=\"2\" class=\"text-center\">";
  if (helper = helpers.longLangName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.longLangName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\r\n        </tr>\r\n        <tr>\r\n        <th><span class='i18n' data-i18n-id='i18n_term'>Term</span></th>\r\n        <!-- ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.showIds), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " -->\r\n        <th><span class='i18n' data-i18n-id='i18n_acceptability'>Acceptability</span>";
  if (helper = helpers.languageName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.languageName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.allDescriptions), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </tbody>\r\n</table>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/details/diagram.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-diagram-toolbar\" class=\"row\">\r\n        <div class=\"row\" style=\"margin: 15px;\">\r\n            <div class=\"btn-toolbar pull-right\" role=\"toolbar\">\r\n                <button id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-download-button\" type=\"button\" class=\"btn btn-primary btn-sm disabled\" style=\"display: block;\">Download</button>\r\n                <button id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-progress-button\" type=\"button\" class=\"btn btn-warning btn-sm disabled\" style=\"display: none;\">Generating downloadable files <span class='glyphicon glyphicon-refresh icon-spin'></span></button>\r\n                <button id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-png-button\" type=\"button\" class=\"btn btn-success btn-sm\" style=\"display: none;\"><span class=\"glyphicon glyphicon-picture\"></span> PNG</button>\r\n                <button id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-svg-button\" type=\"button\" class=\"btn btn-success btn-sm\" style=\"display: none;\"><span class=\"glyphicon glyphicon-tint\"></span> SVG</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    ";
  return buffer;
  }

  buffer += "<div class=\"container\" style=\"max-width: 100%;\">\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.allowDownload), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-diagram-body\" class=\"row\" style=\"overflow: auto; width: 1000;\">\r\n\r\n    </div>\r\n</div>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/details/inactivation-panel.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "       \r\n					<div style=\"width: 100%;\">\r\n						<div style=\"width:20%;display: inline-block;\">"
    + escapeExpression((helper = helpers.convertTextFromCode || (depth0 && depth0.convertTextFromCode),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.associationTarget), options) : helperMissing.call(depth0, "convertTextFromCode", (depth0 && depth0.associationTarget), options)))
    + "</div>\r\n						<div style=\"width:20%;display: inline-block;\">";
  if (helper = helpers.targetId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.targetId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n						<div style=\"width:57%;display: inline-block;\">";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\r\n					</div>		\r\n				";
  return buffer;
  }

  buffer += "<table class='table table-default' >\r\n<tr>\r\n	<td colspan=\"2\">\r\n		Inactivation Reason: "
    + escapeExpression((helper = helpers.convertTextFromCode || (depth0 && depth0.convertTextFromCode),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.inactivationIndicator), options) : helperMissing.call(depth0, "convertTextFromCode", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.inactivationIndicator), options)))
    + "			\r\n	</td>\r\n</tr>\r\n<tr>\r\n	<td colspan=\"2\">\r\n		<div>\r\n			<div style=\"display:inline;width: 19%;\">Association Targets: &nbsp; </div>\r\n			<div style=\"display:table;width: 80%;\">\r\n				";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.associationTargets), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "				\r\n			</div>			\r\n		</div>				\r\n	</td>\r\n</tr>\r\n</table>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/details/rels-panel.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedRelationships), "undefined", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedRelationships), "undefined", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\r\n            <tr><td colspan='4'><span class='text-muted'>No relationships</span></td></tr>\r\n        ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.relationships), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program5(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(9, program9, data, depth2),fn:self.programWithDepth(7, program7, data, depth2),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), 116680003, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), 116680003, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <tr class='inferred-rel\r\n                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.effectiveTime), ((stack1 = (depth2 && depth2.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.effectiveTime), ((stack1 = (depth2 && depth2.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                            '>\r\n                    <td>\r\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                    </td>\r\n                    <td>\r\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n                    <td>";
  if (helper = helpers.groupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.characteristicType), "STATED_RELATIONSHIP", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.characteristicType), "STATED_RELATIONSHIP", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\r\n                                <table border='1'><tr><th style='padding: 3px;'>RelationshipId</th><th style='padding: 3px;'>TypeId</th><th style='padding: 3px;'>TargetId</th><th style='padding: 3px;'>Modifier</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\r\n                                    <tr><td style='padding: 3px;'>";
  if (helper = helpers.relationshipId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.relationshipId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.moduleId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\r\n                                </table>\r\n                                \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i></button>\r\n                </td>\r\n                </tr>\r\n            ";
  return buffer;
  }
function program7(depth0,data,depth3) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                    "
    + escapeExpression((helper = helpers.push || (depth0 && depth0.push),options={hash:{},data:data},helper ? helper.call(depth0, depth0, (depth3 && depth3.inferredParents), options) : helperMissing.call(depth0, "push", depth0, (depth3 && depth3.inferredParents), options)))
    + "\r\n                ";
  return buffer;
  }

function program9(depth0,data,depth3) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                    "
    + escapeExpression((helper = helpers.push || (depth0 && depth0.push),options={hash:{},data:data},helper ? helper.call(depth0, depth0, (depth3 && depth3.inferredRoles), options) : helperMissing.call(depth0, "push", depth0, (depth3 && depth3.inferredRoles), options)))
    + "\r\n                ";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "\r\n                                 highlightEffectiveTime\r\n                            ";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\r\n                        ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\r\n                        ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\r\n                        ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\r\n                        ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                    <td><span class='i18n' data-i18n-id='i18n_stated'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_stated", "Stated", options) : helperMissing.call(depth0, "i18n", "i18n_stated", "Stated", options)))
    + "</span>\r\n                    ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.characteristicType), "INFERRED_RELATIONSHIP", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.characteristicType), "INFERRED_RELATIONSHIP", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                        <td><span class='i18n' data-i18n-id='i18n_inferred'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_inferred", "Inferred", options) : helperMissing.call(depth0, "i18n", "i18n_inferred", "Inferred", options)))
    + "</span>\r\n                        ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                        <td><span class='i18n' data-i18n-id='i18n_other'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_other", "Other", options) : helperMissing.call(depth0, "i18n", "i18n_other", "Other", options)))
    + "</span>\r\n                        ";
  return buffer;
  }

function program28(depth0,data) {
  
  
  return "\r\n    ";
  }

function program30(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedRelationships), {hash:{},inverse:self.noop,fn:self.programWithDepth(31, program31, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program31(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.programWithDepth(32, program32, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program32(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(35, program35, data, depth2),fn:self.programWithDepth(33, program33, data, depth2),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), 116680003, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), 116680003, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <tr class='stated-rel\r\n                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.effectiveTime), ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.effectiveTime), ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                            '>\r\n                    <td>\r\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(39, program39, data),fn:self.program(37, program37, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n                    <td>\r\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n                    <td>";
  if (helper = helpers.groupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.characteristicType), "STATED_RELATIONSHIP", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.characteristicType), "STATED_RELATIONSHIP", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\r\n                                <table border='1'><tr><th style='padding: 3px;'>RelationshipId</th><th style='padding: 3px;'>TypeId</th><th style='padding: 3px;'>TargetId</th><th style='padding: 3px;'>Modifier</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\r\n                                    <tr><td style='padding: 3px;'>";
  if (helper = helpers.relationshipId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.relationshipId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.moduleId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.moduleId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\r\n                                </table>\r\n                        \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i></button>\r\n                </td>\r\n                </tr>\r\n            ";
  return buffer;
  }
function program33(depth0,data,depth3) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                    "
    + escapeExpression((helper = helpers.push || (depth0 && depth0.push),options={hash:{},data:data},helper ? helper.call(depth0, depth0, (depth3 && depth3.statedParents), options) : helperMissing.call(depth0, "push", depth0, (depth3 && depth3.statedParents), options)))
    + "\r\n                ";
  return buffer;
  }

function program35(depth0,data,depth3) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                    "
    + escapeExpression((helper = helpers.push || (depth0 && depth0.push),options={hash:{},data:data},helper ? helper.call(depth0, depth0, (depth3 && depth3.statedRoles), options) : helperMissing.call(depth0, "push", depth0, (depth3 && depth3.statedRoles), options)))
    + "\r\n                ";
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\r\n                        ";
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\r\n                        ";
  return buffer;
  }

  buffer += "<table class='table table-bordered'>\r\n    <thead>\r\n    <tr>\r\n        <th><span class='i18n' data-i18n-id='i18n_type'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_type", "Type", options) : helperMissing.call(depth0, "i18n", "i18n_type", "Type", options)))
    + "</span></th>\r\n        <th><span class='i18n' data-i18n-id='i18n_destination'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_destination", "Destination", options) : helperMissing.call(depth0, "i18n", "i18n_destination", "Destination", options)))
    + "</span></th>\r\n        <th><span class='i18n' data-i18n-id='i18n_group'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_group", "Group", options) : helperMissing.call(depth0, "i18n", "i18n_group", "Group", options)))
    + "</span></th>\r\n        <th><span class='i18n' data-i18n-id='i18n_char_type'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_char_type", "CharType", options) : helperMissing.call(depth0, "i18n", "i18n_char_type", "CharType", options)))
    + "</span></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.relationships), "undefined", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.relationships), "undefined", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedRelationships), "undefined", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedRelationships), "undefined", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    </tbody>\r\n</table>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/historical-association.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "        \r\n			<tr>\r\n				<td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				<td>";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				<td>"
    + escapeExpression((helper = helpers.convertTextFromCode || (depth0 && depth0.convertTextFromCode),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.inactivationIndicator), options) : helperMissing.call(depth0, "convertTextFromCode", (depth0 && depth0.inactivationIndicator), options)))
    + "</td>\r\n			</tr>		   \r\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "        \r\n			<tr>\r\n				<td>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				<td>";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>				\r\n			</tr>		   \r\n		";
  return buffer;
  }

  buffer += "<div style=\"padding-bottom: 20px\"></div>\r\n<h4>&nbsp; Incoming Historical Associations</h4>\r\n<table class='table table-hover'>\r\n    <thead><tr>\r\n        <th><span>SCTID</span></th>\r\n		<th><span>Concept FSN</span></th>\r\n		<th><span>Reason</span></th>		\r\n    </tr></thead>\r\n	<tbody>\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.concepts), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</tbody>\r\n</table>\r\n\r\n<h4>&nbsp; Inactive descriptions referring to this concept</h4>\r\n<table class='table table-hover'>\r\n    <thead><tr>\r\n        <th><span>SCTID</span></th>\r\n		<th><span>Description Term</span></th>	\r\n    </tr></thead>\r\n	<tbody>\r\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.descriptionsWithConceptTarget), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</tbody>\r\n</table>\r\n";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/home/attributes.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "-empty";
  }

function program5(depth0,data) {
  
  
  return "\r\n            &nbsp;&nbsp;\r\n        ";
  }

function program7(depth0,data) {
  
  
  return "\r\n            &equiv;\r\n        ";
  }

  buffer += "<h4 data-droppable=\"true\" ondrop=\"dropC(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\">\r\n    <span class=\"pull-right\">\r\n        <a href=\"javascript:void(0);\" style=\"font-size: 20px; color: white; padding: 5px;\">\r\n            <span data-conceptId=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"glyphicon glyphicon-star";
  stack1 = (helper = helpers.if_fav || (depth0 && depth0.if_fav),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), options) : helperMissing.call(depth0, "if_fav", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></span>\r\n        </a>\r\n    </span>\r\n    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\"  draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n        <span class=\"badge alert-warning\">\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </span>\r\n    </a>\r\n    &nbsp;&nbsp;\r\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n    <span class=\"pull-right\">\r\n       <div class=\"phoca-flagbox\" style=\"width:40px;height:40px\">\r\n           <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\r\n       </div>\r\n    </span>\r\n</h4>\r\n\r\n<h5>SCTID: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h5>\r\n<div id=\"home-descriptions-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/home/children.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n        <span data-i18n-id=\"i18n_no_children\" class=\"text-muted i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_children", "No Children", options) : helperMissing.call(depth0, "i18n", "i18n_no_children", "No Children", options)))
    + "</span>\r\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <ul style='list-style-type: none; padding-left: 15px;'>\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.childrenResult), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n    ";
  return buffer;
  }
function program5(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  return buffer;
  }
function program6(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <li data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='treeLabel'>\r\n                        <button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-";
  stack1 = (helper = helpers.if_eq || (depth2 && depth2.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth2 && depth2.selectedView), "inferred", options) : helperMissing.call(depth0, "if_eq", (depth2 && depth2.selectedView), "inferred", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' id='"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></i></button>\r\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(16, program16, data, depth1),fn:self.programWithDepth(14, program14, data, depth1),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\r\n                            <span class=\"treeLabel selectable-row\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\""
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treenode-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                        </a>\r\n                    </li>\r\n                ";
  return buffer;
  }
function program7(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.isLeafInferred), true, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.isLeafInferred), true, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program8(depth0,data) {
  
  
  return "minus";
  }

function program10(depth0,data) {
  
  
  return "chevron-right";
  }

function program12(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.isLeafStated), true, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.isLeafStated), true, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program14(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                            <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\r\n                        ";
  return buffer;
  }

function program16(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                            <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\r\n                        ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                            <div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">\r\n                                <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                            </div>\r\n                        ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n        <span data-i18n-id=\"i18n_no_children\" class=\"text-muted i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_children", "No children", options) : helperMissing.call(depth0, "i18n", "i18n_no_children", "No children", options)))
    + "</span>\r\n    ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 30, options) : helperMissing.call(depth0, "if_gr", ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 30, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <button id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-showChildren\" class=\"btn btn-link\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span data-i18n-id=\"i18n_children\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_children", "children", options) : helperMissing.call(depth0, "i18n", "i18n_children", "children", options)))
    + "</span></button>\r\n        ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <ul style='list-style-type: none; padding-left: 15px;'>\r\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.childrenResult), {hash:{},inverse:self.noop,fn:self.programWithDepth(27, program27, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </ul>\r\n        ";
  return buffer;
  }
function program27(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.programWithDepth(28, program28, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  return buffer;
  }
function program28(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                        <li data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='treeLabel'>\r\n                            <button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-";
  stack1 = (helper = helpers.if_eq || (depth2 && depth2.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth2 && depth2.selectedView), "inferred", options) : helperMissing.call(depth0, "if_eq", (depth2 && depth2.selectedView), "inferred", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' id='"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></i></button>\r\n                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(31, program31, data, depth1),fn:self.programWithDepth(29, program29, data, depth1),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                            ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\r\n                                <span class=\"treeLabel selectable-row\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\""
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treenode-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                            </a>\r\n                        </li>\r\n                    ";
  return buffer;
  }
function program29(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                                <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\r\n                            ";
  return buffer;
  }

function program31(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                                <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\r\n                            ";
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                                <div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">\r\n                                    <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                                </div>\r\n                            ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayChildren), {hash:{},inverse:self.program(20, program20, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n\r\n";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/home/parents.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(4, program4, data, depth0),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.statedParents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.statedParents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\r\n        <span class='text-muted'>No parents</span>\r\n    ";
  }

function program4(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <ul style='list-style-type: none; padding-left: 2px;'>\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.statedParents), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n    ";
  return buffer;
  }
function program5(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                <li class=\"treeLabel\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\r\n                <!--<span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='text-warning' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>-->\r\n                    <!--";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), 0, options) : helperMissing.call(depth0, "if_gr", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                <!--</span>&nbsp;&rArr;&nbsp;-->\r\n                    <button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "138875005", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "138875005", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' data-first=\"true\" data-ind=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i></button>\r\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(17, program17, data, depth1),fn:self.programWithDepth(15, program15, data, depth1),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "hasCountryIcon", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\r\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(23, program23, data, depth2),fn:self.programWithDepth(21, program21, data, depth2),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\r\n                        <!--"
    + escapeExpression((helper = helpers.substr || (depth0 && depth0.substr),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), 0, options) : helperMissing.call(depth0, "substr", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), 0, options)))
    + "-->\r\n                    <!--";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\r\n                        <!--"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-->\r\n                    <!--";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "minus";
  }

function program12(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "9999999999", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "9999999999", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program13(depth0,data) {
  
  
  return "chevron-right";
  }

function program15(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\r\n                    ";
  return buffer;
  }

function program17(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">&equiv;</span>&nbsp;&nbsp;\r\n                    ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                        <div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">\r\n                            <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                        </div>\r\n                    ";
  return buffer;
  }

function program21(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            <span id='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = (depth3 && depth3.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class='sct-primitive-concept-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\r\n                        ";
  return buffer;
  }

function program23(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            <span id='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = (depth3 && depth3.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class='sct-defined-concept-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\r\n                        ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(26, program26, data, depth0),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.inferredParents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.inferredParents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program26(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <ul style='list-style-type: none; padding-left: 2px; padding-top: 0px;'>\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.inferredParents), {hash:{},inverse:self.noop,fn:self.programWithDepth(27, program27, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </ul>\r\n    ";
  return buffer;
  }
function program27(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                <li class=\"treeLabel\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\r\n                <!--<span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='text-warning' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>-->\r\n                    <!--"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-->\r\n                <!--</span>&nbsp;&rArr;&nbsp;-->\r\n                    <button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "138875005", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "138875005", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' data-first=\"true\" data-ind=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i></button>\r\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(17, program17, data, depth1),fn:self.programWithDepth(15, program15, data, depth1),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "hasCountryIcon", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\r\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(23, program23, data, depth2),fn:self.programWithDepth(21, program21, data, depth2),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                        </span>\r\n                    </a>\r\n                </li>\r\n            ";
  return buffer;
  }

  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(25, program25, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["views/conceptDetailsPlugin/tabs/home/roles.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.statedRoles), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.statedRoles)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.statedRoles)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            ";
  stack1 = (helper = helpers.eqLastGroup || (depth0 && depth0.eqLastGroup),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), options) : helperMissing.call(depth0, "eqLastGroup", (depth0 && depth0.groupId), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            &nbsp;<span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='sct-attribute-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\r\n                "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), options)))
    + "</span>&nbsp;&rarr;&nbsp;\r\n\r\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), options)))
    + "\r\n            </span><br>\r\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                </div>\r\n                "
    + escapeExpression((helper = helpers.setLastGroup || (depth0 && depth0.setLastGroup),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), options) : helperMissing.call(depth0, "setLastGroup", (depth0 && depth0.groupId), options)))
    + "\r\n                "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "random", options) : helperMissing.call(depth0, "lastColor", "random", options)))
    + "\r\n                <div ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.groupId), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                <span style='background-color: "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "get", options) : helperMissing.call(depth0, "lastColor", "get", options)))
    + "'></span>\r\n            ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "style=\"border: 1px solid darkgrey; border-radius: 4px; padding: 3px; background-color: white; margin: 5px;\"";
  }

function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                <span style='background-color: "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "get", options) : helperMissing.call(depth0, "lastColor", "get", options)))
    + "'></span>\r\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                <span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='sct-primitive-concept-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\r\n            ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                <span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='sct-defined-concept-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\r\n            ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n            <span class='i18n text-muted' data-i18n-id='i18n_no_attributes'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_attributes", "No Attributes", options) : helperMissing.call(depth0, "i18n", "i18n_no_attributes", "No Attributes", options)))
    + "</span>\r\n        ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.inferredRoles), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </div>\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.inferredRoles)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.inferredRoles)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    ";
  stack1 = (helper = helpers.eqLastGroup || (depth0 && depth0.eqLastGroup),options={hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), options) : helperMissing.call(depth0, "eqLastGroup", (depth0 && depth0.groupId), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    &nbsp;<span style='background-color: "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "get", options) : helperMissing.call(depth0, "lastColor", "get", options)))
    + "' draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='sct-attribute-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\r\n                    "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), options)))
    + "</span>&nbsp;&rarr;&nbsp;\r\n            <span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\r\n                "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.fsn), options)))
    + "</span><br>\r\n        ";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                        </div>\r\n                        "
    + escapeExpression((helper = helpers.setLastGroup || (depth0 && depth0.setLastGroup),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), options) : helperMissing.call(depth0, "setLastGroup", (depth0 && depth0.groupId), options)))
    + "\r\n                        "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "random", options) : helperMissing.call(depth0, "lastColor", "random", options)))
    + "\r\n                        <div ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.groupId), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n                        <span style='background-color: "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "get", options) : helperMissing.call(depth0, "lastColor", "get", options)))
    + "'></span>\r\n                    ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                        <span style='background-color: "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "get", options) : helperMissing.call(depth0, "lastColor", "get", options)))
    + "'></span>\r\n                    ";
  return buffer;
  }

function program22(depth0,data) {
  
  
  return "\r\n                     sct-primitive-concept-compact\r\n                ";
  }

function program24(depth0,data) {
  
  
  return "\r\n                     sct-defined-concept-compact\r\n                ";
  }

  buffer += "<div style='line-height: 100%;'>\r\n    "
    + escapeExpression((helper = helpers.setLastGroup || (depth0 && depth0.setLastGroup),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.null), options) : helperMissing.call(depth0, "setLastGroup", (depth0 && depth0.null), options)))
    + "\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(16, program16, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/members.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n    <thead>\r\n        <tr>\r\n            <th><span data-i18n-id=\"i18n_term\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_term", "Term", options) : helperMissing.call(depth0, "i18n", "i18n_term", "Term", options)))
    + "</span></th>\r\n            <th><span data-i18n-id=\"i18n_conceptId\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_conceptId", "Concept Id", options) : helperMissing.call(depth0, "i18n", "i18n_conceptId", "Concept Id", options)))
    + "</span></th>\r\n        </tr>\r\n    </thead>\r\n";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        <tr>\r\n            <td>\r\n                <span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>\r\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </td>\r\n            <td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n        </tr>\r\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                    <div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">\r\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                    </div>\r\n                ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <td class=\"text-center\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers\" colspan=\"2\">\r\n                <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.returnLimit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.returnLimit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span></button>\r\n            </td>\r\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.remaining), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <td class=\"text-muted\" class=\"text-center\" colspan=\"2\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span data-i18n-id=\"i18n_members\" class=\"i18n\">members</span></td>\r\n            ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), (depth0 && depth0.returnLimit), options) : helperMissing.call(depth0, "if_gr", (depth0 && depth0.remaining), (depth0 && depth0.returnLimit), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <td class=\"text-center\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers\" colspan=\"2\">\r\n                        <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.returnLimit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.returnLimit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span> (";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_remaining\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remaining", "remaining", options) : helperMissing.call(depth0, "i18n", "i18n_remaining", "remaining", options)))
    + "</span>)</button>\r\n                    </td>\r\n                ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <td class=\"text-center\" colspan=\"2\">\r\n                        <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span> (";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_remaining\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remaining", "remaining", options) : helperMissing.call(depth0, "i18n", "i18n_remaining", "remaining", options)))
    + "</span>)</button>\r\n                    </td>\r\n                ";
  return buffer;
  }

  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.skipTo), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.skipTo), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<tbody>\r\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.members), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    <tr class=\"more-row\">\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), "asd", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.remaining), "asd", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </tr>\r\n</tbody>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/references.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <div style=\"margin-top: 10px;\" class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n            <h3 style=\"font-size: 12px\" class=\"panel-title\">\r\n                <a style=\"text-decoration: inherit;\" data-toggle=\"collapse\" data-parent=\"#references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-accordion\" href=\"#references-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n                    <span id=\"references-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-span\" class=\"references glyphicon glyphicon-";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), 10, options) : helperMissing.call(depth0, "if_gr", (depth0 && depth0.length), 10, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></span>\r\n                </a>&nbsp;"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0[0])),stack1 == null || stack1 === false ? stack1 : stack1.relationship)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " (";
  if (helper = helpers.length) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.length); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")\r\n            </h3>\r\n        </div>\r\n        <div id=\"references-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"panel-collapse collapse ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), 10, options) : helperMissing.call(depth0, "if_gr", (depth0 && depth0.length), 10, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-hover table-bordered\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Term</th>\r\n                        <th>ConceptId</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(10, program10, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "chevron-right";
  }

function program4(depth0,data) {
  
  
  return "chevron-down";
  }

function program6(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "in";
  }

function program10(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>\r\n                                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                                ";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                            </td>\r\n                            <td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n                        </tr>\r\n                    ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                                    <div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">\r\n                                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                                    </div>\r\n                                ";
  return buffer;
  }

function program13(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\r\n        <!--<tr>-->\r\n            <!--<td>-->\r\n                <!--<span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>-->\r\n                <!--";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                <!--";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-->\r\n            <!--</td>-->\r\n            <!--<td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>-->\r\n            <!--<td>-->\r\n                <!--";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.relationships), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n\r\n                <!--";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.statedRelationships), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n            <!--</td>-->\r\n        <!--</tr>-->\r\n    <!--";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "-->\r\n                    <!--<div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">-->\r\n                        <!--<span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>-->\r\n                    <!--</div>-->\r\n                <!--";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\r\n                    <!--"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-->\r\n                <!--";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.groups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n<!--<thead>-->\r\n    <!--<tr>-->\r\n        <!--<th>Term</th>-->\r\n        <!--<th>ConceptId</th>-->\r\n        <!--<th>Relationships Type</th>-->\r\n    <!--</tr>-->\r\n<!--</thead>-->\r\n<!--<tbody>-->\r\n    <!--";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.result), {hash:{},inverse:self.noop,fn:self.programWithDepth(13, program13, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n</tbody>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/refset.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "SIMPLE_REFSET", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "SIMPLE_REFSET", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n        "
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "simple", true, options) : helperMissing.call(depth0, "refset", "simple", true, options)))
    + "\r\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "SIMPLEMAP", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "SIMPLEMAP", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n            "
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "simplemap", true, options) : helperMissing.call(depth0, "refset", "simplemap", true, options)))
    + "\r\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "ATTRIBUTE_VALUE", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "ATTRIBUTE_VALUE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                "
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "attr", true, options) : helperMissing.call(depth0, "refset", "attr", true, options)))
    + "\r\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                "
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "assoc", true, options) : helperMissing.call(depth0, "refset", "assoc", true, options)))
    + "\r\n            ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "SIMPLE_REFSET", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "SIMPLE_REFSET", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        <tr class='";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\r\n            <td>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n            </td>\r\n            <td>";
  if (helper = helpers.otherValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.otherValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n            <td>\r\n                <div class=\"phoca-flagbox\" style=\"width:35px;height:35px\">\r\n                    <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\r\n                    <table border='1'>\r\n                        <tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\r\n                        <tr><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\r\n                    </table>\"data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i>\r\n                </button>\r\n            </td>\r\n        </tr>\r\n        ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program16(depth0,data) {
  
  
  return "danger";
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program22(depth0,data) {
  
  
  return "\r\n        </tbody>\r\n    ";
  }

function program24(depth0,data) {
  
  
  return "\r\n        <tr><td><span class='i18n text-muted' data-i18n-id='i18n_no_memberships'>No memberships</span></td></tr>\r\n        </tbody>\r\n    ";
  }

function program26(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "SIMPLEMAP", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "SIMPLEMAP", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        <tr class='";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\r\n            <td>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n            </td>\r\n            <td class=\"refset-simplemap\" data-refsetId=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-conceptId=\"";
  if (helper = helpers.otherValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.otherValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.otherValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.otherValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n            <td>\r\n                <div class=\"phoca-flagbox\" style=\"width:35px;height:35px\">\r\n                    <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\r\n                    <table border='1'><tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\r\n                        <tr><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\r\n                    </table>\r\n                    \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i>\r\n                </button>\r\n            </td>\r\n        </tr>\r\n        ";
  return buffer;
  }
function program28(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"  data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"  data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "ATTRIBUTE_VALUE", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "ATTRIBUTE_VALUE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program33(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        <tr class='";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\r\n            <td>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n            </td>\r\n            <td>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n            <td>\r\n                <div class=\"phoca-flagbox\" style=\"width:35px;height:35px\">\r\n                    <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\r\n                    <table border='1'><tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\r\n                        <tr><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\r\n                    </table>\r\n                    \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i>\r\n                </button>\r\n            </td>\r\n        </tr>\r\n        ";
  return buffer;
  }
function program34(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span  class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span  class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program38(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(39, program39, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "ASSOCIATION", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "ASSOCIATION", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program39(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        <tr class='";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\r\n            <td>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n            </td>\r\n            <td>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(42, program42, data),fn:self.program(40, program40, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n            <td>\r\n                <div class=\"phoca-flagbox\" style=\"width:35px;height:35px\">\r\n                    <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\r\n                    <table border='1'><tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\r\n                        <tr>\r\n                            <td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                    \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i>\r\n                </button>\r\n            </td>\r\n        </tr>\r\n        ";
  return buffer;
  }
function program40(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program42(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

  buffer += escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "simple", false, options) : helperMissing.call(depth0, "refset", "simple", false, options)))
    + "\r\n"
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "simplemap", false, options) : helperMissing.call(depth0, "refset", "simplemap", false, options)))
    + "\r\n"
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "attr", false, options) : helperMissing.call(depth0, "refset", "attr", false, options)))
    + "\r\n"
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "assoc", false, options) : helperMissing.call(depth0, "refset", "assoc", false, options)))
    + "\r\n\r\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.memberships), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n<table class='table table-hover'>\r\n    <thead><tr>\r\n        <th colspan=\"3\"><span class='i18n' data-i18n-id='i18n_simple_refset_memberships'>Simple Refsets Membership</span></th>\r\n    </tr></thead>\r\n<tbody>\r\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.memberships), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, "simple", "get", options) : helperMissing.call(depth0, "refset", "simple", "get", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</table>\r\n\r\n<table class='table table-hover'>\r\n    <thead><tr>\r\n        <th colspan=\"3\"><span class='i18n' data-i18n-id='i18n_simple_map_refset_name'>Simple Map Refset name</span></th>\r\n    </tr></thead>\r\n<tbody>\r\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.memberships), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, "simplemap", "get", options) : helperMissing.call(depth0, "refset", "simplemap", "get", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</table>\r\n\r\n<table class='table table-hover'>\r\n    <thead><tr>\r\n        <th colspan=\"3\"><span class='i18n' data-i18n-id='i18n_attribute_value_refset_name'>Attribute Value Refset name</span></th>\r\n    </tr></thead>\r\n<tbody>\r\n\r\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.memberships), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, "attr", "get", options) : helperMissing.call(depth0, "refset", "attr", "get", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</table>\r\n\r\n<table class='table table-hover'>\r\n    <thead><tr>\r\n        <th colspan=\"3\"><span class='i18n' data-i18n-id='i18n_association_refset_name'>Association Refset name</span></th>\r\n    </tr></thead>\r\n<tbody>\r\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.memberships), {hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, "assoc", "get", options) : helperMissing.call(depth0, "refset", "assoc", "get", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</table>\r\n";
  return buffer;
  });

this["JST"]["views/favorites/body.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <tr>\r\n                        <td>";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n                        <td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n                    </tr>\r\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n                <tr>\r\n                    <td>\r\n                        <span class=\"text-muted\"> No favorites</span>\r\n                    </td>\r\n                </tr>\r\n            ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.concepts), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  return buffer;
  }
function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <tr>\r\n                        <td>\r\n                            <a class=\"fav-item\" href=\"javascript:void(0);\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style=\"color: inherit; text-decoration: inherit;\">\r\n                                <span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>\r\n                                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                                ";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                            </a>\r\n                        </td>\r\n                        <td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                            <a href=\"javascript:void(0);\" style=\"text-decoration: inherit;\">\r\n                                <span data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class=\"pull-right glyphicon glyphicon-remove-circle\"></span>\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                                    <div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">\r\n                                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                                    </div>\r\n                                ";
  return buffer;
  }

  buffer += "<div style=\"margin-top: 10px\" class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n        <table id=\"tableFavs\" style=\"display: none;\">\r\n            <thead>\r\n                <tr>\r\n                    <td>Term</td>\r\n                    <td>Concept ID</td>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.concepts), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tbody>\r\n        </table>\r\n        <table id=\"\" class=\"table table-hover table-bordered\">\r\n            <tbody>\r\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.concepts)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.concepts)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tbody>\r\n        </table>\r\n        <a download=\"favorites.xls\" id=\"exportFavsXls\" href=\"javascript:void(0);\"><button class=\"btn btn-default\">Export favorites in XLS <img style=\"height: 23px;\" src=\"img/excel.png\"></button></a>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["JST"]["views/favorites/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style='height:100%;margin: 5px; overflow:auto;' class='panel panel-default' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-mainPanel'>\r\n    <div ondrop=\"dropF(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-heading' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelHeading'>\r\n        <div class='row'>\r\n            <div class='col-md-6' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_favorites'>Favorites</span></strong></div>\r\n            <!--<div class='col-md-6 text-right'>-->\r\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-historyButton' class='btn btn-link history-button' style='padding:2px'><i class='glyphicon glyphicon-time'></i></button>-->\r\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resetButton' class='btn btn-link' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-repeat'></i></button>-->\r\n                <!--&lt;!&ndash;<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-linkerButton' draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='btn btn-link linker-button' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>&ndash;&gt;-->\r\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configButton' class='btn btn-link' data-toggle='modal' style='padding:2px' data-target='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>-->\r\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>-->\r\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>-->\r\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>-->\r\n            <!--</div>-->\r\n        </div>\r\n    </div>\r\n    <div ondrop=\"dropF(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-body' style='height:100%' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\r\n    </div>\r\n</div>\r\n<!--<div class='modal fade' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'>-->\r\n    <!--<div class='modal-dialog'>-->\r\n        <!--<div class='modal-content'>-->\r\n            <!--<div class='modal-header'>-->\r\n                <!--<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>-->\r\n                <!--<h4 class='modal-title'><span class='i18n' data-i18n-id='i18n_options'>Options</span> (";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</h4>-->\r\n            <!--</div>-->\r\n            <!--<div class='modal-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modal-body'>-->\r\n                <!--<p></p>-->\r\n            <!--</div>-->\r\n            <!--<div class='modal-footer'>-->\r\n                <!--<button type='button' class='btn btn-danger' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_cancel'>Cancel</span></button>-->\r\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-apply-button' type='button' class='btn btn-success' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_apply_changes'>Apply changes</span></button>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n<!--</div>-->";
  return buffer;
  });

this["JST"]["views/refsetPlugin/body.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "\r\n                    <tr>\r\n                        <td colspan=\"3\">\r\n                            <span class=\"text-muted\"> No refsets</span>\r\n                        </td>\r\n                    </tr>\r\n                ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.refsets), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  return buffer;
  }
function program4(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                        <tr>\r\n                            <td>";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n                            <td>\r\n                                <a class=\"refset-item\" href=\"javascript:void(0);\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style=\"color: inherit; text-decoration: inherit;\">\r\n                                    <span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>\r\n                                    ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                                    ";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                                </a>\r\n                            </td>\r\n                            <td>\r\n                                ";
  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n                            </td>\r\n                        </tr>\r\n                    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                                        <div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">\r\n                                            <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                                        </div>\r\n                                    ";
  return buffer;
  }

  buffer += "<div style=\"margin-top: 10px\" class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n        <div class=\"row container-fluid\" style=\"max-height: 260px; overflow-y: scroll; margin: 10px;\">\r\n            <table class=\"table table-hover table-bordered\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Type</th>\r\n                        <th>Refset</th>\r\n                        <th>Members count</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refsets)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.refsets)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row container-fluid\">\r\n            <table id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsTable\" class=\"table table-hover table-bordered\">\r\n\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["JST"]["views/refsetPlugin/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style='height:100%;margin: 5px; overflow:auto;' class='panel panel-default' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-mainPanel'>\r\n    <div ondrop=\"dropF(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-heading' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelHeading'>\r\n        <div class='row'>\r\n            <div class='col-md-6' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_refsets'>Refsets</span></strong></div>\r\n        </div>\r\n    </div>\r\n    <div ondrop=\"dropF(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-body' style='height:100%' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["JST"]["views/refsetPlugin/members.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <thead>\r\n        <tr>\r\n            <th colspan=\"2\">Members of ";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " (<span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>)</th>\r\n        </tr>\r\n        <tr>\r\n            <th><span data-i18n-id=\"i18n_term\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_term", "Term", options) : helperMissing.call(depth0, "i18n", "i18n_term", "Term", options)))
    + "</span></th>\r\n            <th><span data-i18n-id=\"i18n_conceptId\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_conceptId", "Concept Id", options) : helperMissing.call(depth0, "i18n", "i18n_conceptId", "Concept Id", options)))
    + "</span></th>\r\n        </tr>\r\n    </thead>\r\n";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        <tr class=\"member-concept-row\">\r\n            <td>\r\n                <span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>\r\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n            </td>\r\n            <td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n        </tr>\r\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                    <div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">\r\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                    </div>\r\n                ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <td class=\"text-center\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers\" colspan=\"2\">\r\n                <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.returnLimit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.returnLimit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span></button>\r\n            </td>\r\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.remaining), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <td class=\"text-muted\" class=\"text-center\" colspan=\"2\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span data-i18n-id=\"i18n_members\" class=\"i18n\">members</span></td>\r\n            ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), (depth0 && depth0.returnLimit), options) : helperMissing.call(depth0, "if_gr", (depth0 && depth0.remaining), (depth0 && depth0.returnLimit), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <td class=\"text-center\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers\" colspan=\"2\">\r\n                        <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.returnLimit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.returnLimit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span> (";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_remaining\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remaining", "remaining", options) : helperMissing.call(depth0, "i18n", "i18n_remaining", "remaining", options)))
    + "</span>)</button>\r\n                    </td>\r\n                ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <td class=\"text-center\" colspan=\"2\">\r\n                        <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span> (";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_remaining\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remaining", "remaining", options) : helperMissing.call(depth0, "i18n", "i18n_remaining", "remaining", options)))
    + "</span>)</button>\r\n                    </td>\r\n                ";
  return buffer;
  }

  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.skipTo), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.skipTo), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<tbody>\r\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.members), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    <tr class=\"more-row\">\r\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), "asd", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.remaining), "asd", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </tr>\r\n</tbody>";
  return buffer;
  });

this["JST"]["views/searchPlugin/body/0.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data,depth1) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <tr class='resultRow selectable-row ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.danger), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\r\n        <td class='col-md-7'>\r\n            <div class='result-item' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth1 && depth1.if_eq),options={hash:{},inverse:self.programWithDepth(6, program6, data, depth1),fn:self.programWithDepth(4, program4, data, depth1),data:data},helper ? helper.call(depth0, ((stack1 = (depth1 && depth1.result)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth1 && depth1.result)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <a href='javascript:void(0);' style='color: inherit;text-decoration: inherit;' draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n            </div>\r\n        </td>\r\n        <td class='text-muted small-text col-md-5 result-item' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\r\n            "
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.result)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n        </td>\r\n    </tr>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "danger";
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                    <div class=\"phoca-flagbox\" style=\"width:20px;height:20px\">\r\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                    </div>\r\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n    <tr><td class='text-muted'><span data-i18n-id=\"i18n_no_results\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_results", "No results", options) : helperMissing.call(depth0, "i18n", "i18n_no_results", "No results", options)))
    + "</span></td></tr>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.descriptions), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.descriptions)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.descriptions)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["views/searchPlugin/body/1.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data,depth1) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <tr class='resultRow selectable-row ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.active), false, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.active), false, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\r\n        <td class='col-md-7'>\r\n            <div class='result-item' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(8, program8, data, depth1),fn:self.programWithDepth(6, program6, data, depth1),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <a href='javascript:void(0);' style='color: inherit;text-decoration: inherit;' draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n            </div>\r\n        </td>\r\n        <td class='text-muted small-text col-md-5 result-item' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\r\n            "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n        </td>\r\n    </tr>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "danger";
  }

function program4(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.conceptActive), false, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.conceptActive), false, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                    <div class=\"phoca-flagbox\" style=\"width:20px;height:20px\">\r\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                    </div>\r\n                ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.matches), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["views/searchPlugin/body/bar.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <span class='text-muted'>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " matches found in ";
  if (helper = helpers.elapsed) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.elapsed); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " seconds.</span>\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "-->\r\n<!--";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\r\n    <!--&nbsp;&nbsp;<span class='label label-danger'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-semtag'>&times;</a></span>&nbsp;&nbsp;-->\r\n<!--";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\r\n    <!--&nbsp;&nbsp;<span class='label label-danger'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-lang'>&times;</a></span>&nbsp;&nbsp;-->\r\n<!--";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\r\n    <!--&nbsp;&nbsp;<span class='label label-danger'>";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " &nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-module'>&times;</a></span>&nbsp;&nbsp;-->\r\n<!--";
  return buffer;
  }
function program10(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program12(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\r\n                        <!--<li><a class='lang-link' href='javascript:void(0);' data-lang='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ")</a></li>-->\r\n                    <!--";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\r\n                        <!--<li><a class='semtag-link' href='javascript:void(0);' data-semtag='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ")</a></li>-->\r\n                    <!--";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\r\n                        <!--<li><a class='module-link' href='javascript:void(0);' data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-module='";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.term), {hash:{},inverse:self.program(21, program21, data),fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " (";
  if (helper = helpers.cant) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cant); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")-->\r\n                        <!--";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.value), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                        <!--</a></li>-->\r\n                    <!--";
  return buffer;
  }
function program19(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program21(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program23(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "-->\r\n                            <!--<div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">-->\r\n                                <!--<span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.value), options)))
    + "\"></span>-->\r\n                            <!--</div>-->\r\n                        <!--";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<!--<span class='pull right'>-->\r\n<!--<a class='btm btn-xs' style='margin: 3px; color: #777; background-color: #fff; border: 1px #ccc solid; margin-left: 25px;' data-toggle='collapse' href='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchFiltersPanel'>-->\r\n    <!--<span class='i18n' data-i18n-id='i18n_filters'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters", "Filters", options) : helperMissing.call(depth0, "i18n", "i18n_filters", "Filters", options)))
    + "</span>-->\r\n<!--</a>-->\r\n<!--";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n<!--";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n<!--";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n<!--</span>-->\r\n<!--<div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchFiltersPanel' class='panel-collapse collapse'>-->\r\n    <!--<div class='tree'>-->\r\n        <!--<ul>-->\r\n            <!--<li><a><span data-i18n-id=\"i18n_filters_language\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_language", "Filter results by Language", options) : helperMissing.call(depth0, "i18n", "i18n_filters_language", "Filter results by Language", options)))
    + "</span></a>-->\r\n                <!--<ul>-->\r\n                    <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.lang), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                <!--</ul>-->\r\n            <!--</li>-->\r\n        <!--</ul>-->\r\n        <!--<ul>-->\r\n            <!--<li><a><span data-i18n-id=\"i18n_filters_semtag\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_semtag", "Filter results by Semantic Tag", options) : helperMissing.call(depth0, "i18n", "i18n_filters_semtag", "Filter results by Semantic Tag", options)))
    + "</span></a>-->\r\n                <!--<ul>-->\r\n                    <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.semTag), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                <!--</ul>-->\r\n            <!--</li>-->\r\n        <!--</ul>-->\r\n        <!--<ul>-->\r\n            <!--<li><a><span data-i18n-id=\"i18n_filters_module\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_module", "Filter results by Module", options) : helperMissing.call(depth0, "i18n", "i18n_filters_module", "Filter results by Module", options)))
    + "</span></a>-->\r\n                <!--<ul>-->\r\n                    <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.module), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                <!--</ul>-->\r\n            <!--</li>-->\r\n        <!--</ul>-->\r\n    <!--</div>-->\r\n<!--</div>-->";
  return buffer;
  });

this["JST"]["views/searchPlugin/body/bar2.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\r\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(15, program15, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(17, program17, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(19, program19, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    <!--";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n    <!--";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n    <!--";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(34, program34, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n    <!--";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(42, program42, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n    <!--<div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchFiltersPanel2' class=''>-->\r\n    <!--<div class='tree'>-->\r\n    <!--<ul>-->\r\n    <!--<li><a><span data-i18n-id=\"i18n_filters_language\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_language", "Filter results by Language", options) : helperMissing.call(depth0, "i18n", "i18n_filters_language", "Filter results by Language", options)))
    + "</span></a>-->\r\n    <!--<ul>-->\r\n            <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.lang), {hash:{},inverse:self.noop,fn:self.program(48, program48, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n    <!--</ul>-->\r\n    <!--</li>-->\r\n    <!--</ul>-->\r\n    <!--<ul>-->\r\n    <!--<li><a><span data-i18n-id=\"i18n_filters_semtag\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_semtag", "Filter results by Semantic Tag", options) : helperMissing.call(depth0, "i18n", "i18n_filters_semtag", "Filter results by Semantic Tag", options)))
    + "</span></a>-->\r\n    <!--<ul>-->\r\n            <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.semTag), {hash:{},inverse:self.noop,fn:self.program(50, program50, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n    <!--</ul>-->\r\n    <!--</li>-->\r\n    <!--</ul>-->\r\n    <!--<ul>-->\r\n    <!--<li><a><span data-i18n-id=\"i18n_filters_module\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_module", "Filter results by Module", options) : helperMissing.call(depth0, "i18n", "i18n_filters_module", "Filter results by Module", options)))
    + "</span></a>-->\r\n    <!--<ul>-->\r\n            <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.module), {hash:{},inverse:self.noop,fn:self.program(52, program52, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n    <!--</ul>-->\r\n    <!--</li>-->\r\n    <!--</ul>-->\r\n    <!--</div>-->\r\n    <!--</div>-->\r\n";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "\r\n    ";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <h3 style=\"margin-top: 5px;\">\r\n        <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moduleResumed\" style=\"font-size: 12px;white-space: normal\" class='label label-danger' data-name=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " &nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-module'>&times;</a></span>\r\n        </h3>\r\n    ";
  return buffer;
  }
function program7(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program9(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program11(depth0,data) {
  
  var stack1, helper, options;
  return escapeExpression((helper = helpers.first20chars || (depth0 && depth0.first20chars),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName), options) : helperMissing.call(depth0, "first20chars", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName), options)));
  }

function program13(depth0,data) {
  
  var stack1, helper, options;
  return escapeExpression((helper = helpers.first20chars || (depth0 && depth0.first20chars),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), options) : helperMissing.call(depth0, "first20chars", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), options)));
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <h3 style=\"margin-top: 5px;\">\r\n        <span style=\"font-size: 12px; margin-top: 5px;\" class='label label-danger'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-lang'>&times;</a></span>\r\n        </h3>\r\n    ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <h3 style=\"margin-top: 5px;\">\r\n        <span style=\"font-size: 12px; margin-top: 5px;\" class='label label-danger'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-semtag'>&times;</a></span>\r\n        </h3>\r\n    ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <h3 style=\"margin-top: 5px;\">\r\n            <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-refsetResumed\" style=\"font-size: 12px; margin-top: 5px;\" class='label label-danger' data-name=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilterName), {hash:{},inverse:self.program(22, program22, data),fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilterName), {hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " &nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-refset'>&times;</a></span>\r\n        </h3>\r\n    ";
  return buffer;
  }
function program20(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilterName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program22(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program24(depth0,data) {
  
  var stack1, helper, options;
  return escapeExpression((helper = helpers.first20chars || (depth0 && depth0.first20chars),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilterName), options) : helperMissing.call(depth0, "first20chars", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilterName), options)));
  }

function program26(depth0,data) {
  
  var stack1, helper, options;
  return escapeExpression((helper = helpers.first20chars || (depth0 && depth0.first20chars),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), options) : helperMissing.call(depth0, "first20chars", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), options)));
  }

function program28(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\r\n        <!--<div style=\"margin-top: 10px\" class=\"panel panel-default\">-->\r\n            <!--<div class=\"panel-heading\">-->\r\n                <!--<h3 class=\"panel-title\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_language", "Filter results by Language", options) : helperMissing.call(depth0, "i18n", "i18n_filters_language", "Filter results by Language", options)))
    + "</h3>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"panel-body\">-->\r\n                <!--<ul class=\"list-group\">-->\r\n                    <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.lang), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                <!--</ul>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--";
  return buffer;
  }
function program29(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\r\n                        <!--<li class=\"list-group-item\">-->\r\n                            <!--<span class=\"badge\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span>-->\r\n                            <!--<a class='lang-link' href='javascript:void(0);' data-lang='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>-->\r\n                        <!--</li>-->\r\n                    <!--";
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\r\n        <!--<div class=\"panel panel-default\">-->\r\n            <!--<div class=\"panel-heading\">-->\r\n                <!--<h3 class=\"panel-title\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_semtag", "Filter results by Semantic Tag", options) : helperMissing.call(depth0, "i18n", "i18n_filters_semtag", "Filter results by Semantic Tag", options)))
    + "</h3>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"panel-body\">-->\r\n                <!--<ul class=\"list-group\">-->\r\n                    <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.semTag), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                <!--</ul>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--";
  return buffer;
  }
function program32(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\r\n                        <!--<li class=\"list-group-item\">-->\r\n                            <!--<span class=\"badge\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span>-->\r\n                            <!--<a class='semtag-link' href='javascript:void(0);' data-semtag='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>-->\r\n                        <!--</li>-->\r\n                    <!--";
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\r\n        <!--<div class=\"panel panel-default\">-->\r\n            <!--<div class=\"panel-heading\">-->\r\n                <!--<h3 class=\"panel-title\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_module", "Filter results by Module", options) : helperMissing.call(depth0, "i18n", "i18n_filters_module", "Filter results by Module", options)))
    + "</h3>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"panel-body\">-->\r\n                <!--<ul class=\"list-group\">-->\r\n                    <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.module), {hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                <!--</ul>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--";
  return buffer;
  }
function program35(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\r\n                        <!--<li class=\"list-group-item\">-->\r\n                            <!--<span class=\"badge\">";
  if (helper = helpers.cant) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cant); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>-->\r\n                            <!--<a class='module-link' href='javascript:void(0);' data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-module='";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.term), {hash:{},inverse:self.program(38, program38, data),fn:self.program(36, program36, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                                <!--";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(40, program40, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.value), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                            <!--</a>-->\r\n                        <!--</li>-->\r\n                    <!--";
  return buffer;
  }
function program36(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program38(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program40(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "-->\r\n                                    <!--<div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">-->\r\n                                        <!--<span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.value), options)))
    + "\"></span>-->\r\n                                    <!--</div>-->\r\n                                <!--";
  return buffer;
  }

function program42(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\r\n        <!--";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(45, program45, data),fn:self.program(43, program43, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.refsetId)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.refsetId)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n    <!--";
  return buffer;
  }
function program43(depth0,data) {
  
  
  return "-->\r\n        <!--";
  }

function program45(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\r\n            <!--<div style=\"margin-top: 10px\" class=\"panel panel-default\">-->\r\n                <!--<div class=\"panel-heading\">-->\r\n                    <!--<h3 class=\"panel-title\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_refset", "Filter results by Refset", options) : helperMissing.call(depth0, "i18n", "i18n_filters_refset", "Filter results by Refset", options)))
    + "</h3>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"panel-body\">-->\r\n                    <!--<ul class=\"list-group\">-->\r\n                        <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.refsetId), {hash:{},inverse:self.noop,fn:self.program(46, program46, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n                    <!--</ul>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--";
  return buffer;
  }
function program46(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "-->\r\n                            <!--<li class=\"list-group-item\">-->\r\n                                <!--<span class=\"badge\">";
  if (helper = helpers.cant) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cant); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>-->\r\n                                <!--<a class='refset-link' href='javascript:void(0);' data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-refset='";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.term), {hash:{},inverse:self.program(38, program38, data),fn:self.program(36, program36, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>-->\r\n                            <!--</li>-->\r\n                        <!--";
  return buffer;
  }

function program48(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\r\n    <!--<li><a class='lang-link' href='javascript:void(0);' data-lang='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ")</a></li>-->\r\n            <!--";
  return buffer;
  }

function program50(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\r\n    <!--<li><a class='semtag-link' href='javascript:void(0);' data-semtag='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ")</a></li>-->\r\n            <!--";
  return buffer;
  }

function program52(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\r\n    <!--<li><a class='module-link' href='javascript:void(0);' data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-module='";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.term), {hash:{},inverse:self.program(38, program38, data),fn:self.program(36, program36, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " (";
  if (helper = helpers.cant) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cant); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")-->\r\n            <!--";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(53, program53, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.value), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\r\n    <!--</a></li>-->\r\n            <!--";
  return buffer;
  }
function program53(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "-->\r\n    <!--<div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">-->\r\n    <!--<span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.value), options)))
    + "\"></span>-->\r\n    <!--</div>-->\r\n            <!--";
  return buffer;
  }

  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["views/searchPlugin/body/default.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    ";
  stack1 = (helper = helpers.if_gre || (depth0 && depth0.if_gre),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, "0", ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.length), options) : helperMissing.call(depth0, "if_gre", "0", ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.length), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n        <tr><td class='text-muted'><span data-i18n-id=\"i18n_no_results\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_results", "No results", options) : helperMissing.call(depth0, "i18n", "i18n_no_results", "No results", options)))
    + "</span></td></tr>\r\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.result), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), 0, options) : helperMissing.call(depth0, "if_gr", (depth0 && depth0.remaining), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <tr class='resultRow selectable-row";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.active), false, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.active), false, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\r\n                <td class='col-md-6'>\r\n                    <div class='result-item' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.moduleId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\r\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(12, program12, data, depth1),fn:self.programWithDepth(10, program10, data, depth1),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                        <a href='javascript:void(0);' style='color: inherit;text-decoration: inherit;' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.moduleId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n                    </div>\r\n                </td>\r\n                <td class='text-muted small-text col-md-6 result-item' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.moduleId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                </td>\r\n            </tr>\r\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return " danger";
  }

function program8(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.active), false, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.active), false, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program10(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                            <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.moduleId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\r\n                        ";
  return buffer;
  }

function program12(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                            <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.moduleId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.concept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\r\n                        ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                            <div class=\"phoca-flagbox\" style=\"width:20px;height:20px\">\r\n                                <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                            </div>\r\n                        ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <tr class='more-row'><td colspan='2' class='text-center'><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-more'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.returnLimit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.returnLimit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span> (";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_remaining_server\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remaining_server", "remaining on server", options) : helperMissing.call(depth0, "i18n", "i18n_remaining_server", "remaining on server", options)))
    + "</span>)</button></td></tr>\r\n        ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <tr class='more-row'><td colspan='2' class='text-center text-muted'><span data-i18n-id=\"i18n_all_res\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_all_res", "All", options) : helperMissing.call(depth0, "i18n", "i18n_all_res", "All", options)))
    + "</span> "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span data-i18n-id=\"i18n_results_displayed\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_results_displayed", "results are displayed", options) : helperMissing.call(depth0, "i18n", "i18n_results_displayed", "results are displayed", options)))
    + "</span></td></tr>\r\n        ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n    <tr><td class='text-muted'><span data-i18n-id=\"i18n_no_results\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_results", "No results", options) : helperMissing.call(depth0, "i18n", "i18n_no_results", "No results", options)))
    + "</span></td></tr>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.result), {hash:{},inverse:self.program(20, program20, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["JST"]["views/searchPlugin/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style='margin: 5px; height:95%;' class='panel panel-default'>\r\n    <div class='panel-heading'>\r\n<!--\r\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ownMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-book'></i></button>\r\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-subscribersMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 15px;'><i class='glyphicon glyphicon-bookmark'></i></button>\r\n-->\r\n        <div class='row'>\r\n            <div class='col-md-8' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_search'>Search</span></span></strong></div>\r\n            <div class='col-md-4 text-right'>\r\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-linkerButton' draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='btn btn-link linker-button' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>-->\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-historyButton' class='btn btn-link history-button' style='padding:2px'><i class='glyphicon glyphicon-time'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configButton' class='btn btn-link' data-toggle='modal' style='padding:2px' data-target='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class='panel-body' style='height:86%' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\r\n        <form>\r\n            <div class=\"form-group\" style=\"margin-bottom: 2px;\">\r\n                <label for=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBox\">\r\n                    <span class=\"i18n\" data-i18n-id=\"i18n_type_3_chars\">Type at least 3 characters</span> <i class=\"glyphicon glyphicon-remove text-danger\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-typeIcon\"></i> <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchExample\"></span></label>\r\n                <br><div class=\"btn-group\" style=\"width: 100%;\"><input data-droppable=\"true\" ondrop=\"dropS(event);\" ondragover=\"removeHighlight();\" ondragstart=\"allowDrop(event);\" type=\"search\" class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBox\" placeholder=\"Search...\" autocomplete=\"off\">\r\n                <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-clearButton\" class=\"searchclear glyphicon glyphicon-remove-circle\"></span></div>\r\n            </div>\r\n        </form>\r\n        <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchConfigBar' style='margin-bottom: 10px;'><nav class='navbar navbar-default' role='navigation' style='min-height: 28px;border-radius: 0px;border-bottom: 1px lightgray solid;'>\r\n            <ul class='nav navbar-nav navbar-left'>\r\n                <!--<li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>-->\r\n                    <!--<a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navSearchModeLabel'></span> <b class='caret'></b></a>-->\r\n                    <!--<ul class='dropdown-menu' role='menu' style='float: none;'>-->\r\n                        <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-fullTextButton'><span class='i18n' data-i18n-id='i18n_full_text_search_mode'>Full text search mode</span></button></li>-->\r\n                        <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-partialMatchingButton'><span class='i18n' data-i18n-id='i18n_partial_match_search_mode'>Partial matching search mode</span></button></li>-->\r\n                        <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-regexButton'><span class='i18n' data-i18n-id='i18n_regex_search_mode'>Regular Expressions search mode</span></button></li>-->\r\n                    <!--</ul>-->\r\n                <!--</li>-->\r\n                <!--<li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>-->\r\n                    <!--<a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navLanguageLabel'></span> <b class='caret'></b></a>-->\r\n                    <!--<ul class='dropdown-menu' role='menu' style='float: none;'>-->\r\n                        <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-danishLangButton'><span class='i18n' data-i18n-id='i18n_danish_stemmer'>Danish language stemmer</span></button></li>-->\r\n                        <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-englishLangButton'><span class='i18n' data-i18n-id='i18n_english_stemmer'>English language stemmer</span></button></li>-->\r\n                        <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-spanishLangButton'><span class='i18n' data-i18n-id='i18n_spanish_stemmer'>Spanish language stemmer</span></button></li>-->\r\n                        <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-swedishLangButton'><span class='i18n' data-i18n-id='i18n_swedish_stemmer'>Swedish language stemmer</span></button></li>-->\r\n                    <!--</ul>-->\r\n                <!--</li>-->\r\n                <li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>\r\n                    <a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navStatusFilterLabel'></span> <b class='caret'></b></a>\r\n                    <ul class='dropdown-menu' role='menu' style='float: none;'>\r\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeOnlyButton'><span class='i18n' data-i18n-id='i18n_active_only'>Active components only</span></button></li>\r\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeInactiveButton'><span class='i18n' data-i18n-id='i18n_active_and_inactive'>Active and inactive components</span></button></li>\r\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-inactiveOnlyButton'><span class='i18n' data-i18n-id='i18n_inactive_only'>Inactive components only</span></button></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </nav></div>\r\n        <div class='panel panel-default' style='height:70%;overflow:auto;margin-bottom: 15px;min-height: 300px;' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsScrollPane'>\r\n            <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBar\"></div>\r\n            <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchFilters\"></div>\r\n            <table class='table table-bordered'>\r\n                <tbody  id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsTable'>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <!--<div class='modal fade' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'>-->\r\n            <!--<div class='modal-dialog'>-->\r\n                <!--<div class='modal-content'>-->\r\n                    <!--<div class='modal-header'>-->\r\n                        <!--<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>-->\r\n                        <!--<h4 class='modal-title'><span class='i18n' data-i18n-id='i18n_options'>Options</span> (";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</h4>-->\r\n                    <!--</div>-->\r\n                    <!--<div class='modal-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modal-body'>-->\r\n                        <!--<p></p>-->\r\n                    <!--</div>-->\r\n                    <!--<div class='modal-footer'>-->\r\n                        <!--<button type='button' class='btn btn-danger' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_cancel'>Cancel</span></button>-->\r\n                        <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-apply-button' type='button' class='btn btn-success' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_apply_changes'>Apply changes</span></button>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    </div>\r\n</div>\r\n        ";
  return buffer;
  });

this["JST"]["views/searchPlugin/search.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div style='margin: 5px; height:95%;' class='panel panel-default'>\r\n    <div class='panel-heading'>\r\n<!--\r\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ownMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-book'></i></button>\r\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-subscribersMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 15px;'><i class='glyphicon glyphicon-bookmark'></i></button>\r\n-->\r\n        <div class='row'>\r\n            <div class='col-md-8' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_search'>Search</span></span></strong></div>\r\n            <div class='col-md-4 text-right'>\r\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-linkerButton' draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='btn btn-link linker-button' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>-->\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-historyButton' class='btn btn-link history-button' style='padding:2px'><i class='glyphicon glyphicon-time'></i></button>\r\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configButton' class='btn btn-link' data-toggle='modal' style='padding:2px' data-target='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>-->\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class='panel-body' style='height:86%' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\r\n<!--\r\n        <div style=\"display: inline;width: 34%;height: 100%; float: left; border: 1px solid lightgray; border-radius: 4px; padding: 5px; \">\r\n            <h4><span>Options</span></h4>\r\n            <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchConfigBar' style='margin-bottom: 10px;'>\r\n-->\r\n                <!--<nav class='navbar navbar-default' role='navigation' style='min-height: 28px;border-radius: 0px;border-bottom: 1px lightgray solid;'>-->\r\n                <!--<ul class=\"list-group\">-->\r\n                <!--&lt;!&ndash;<li class=\"list-group-item\">&ndash;&gt;-->\r\n                <!--<li class=\"list-group-item\"><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-fullTextButton'><span class='i18n' data-i18n-id='i18n_full_text_search_mode'>Full text search mode</span></button></li>-->\r\n                <!--<li class=\"list-group-item\"><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-partialMatchingButton'><span class='i18n' data-i18n-id='i18n_partial_match_search_mode'>Partial matching search mode</span></button></li>-->\r\n                <!--<li class=\"list-group-item\"><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-regexButton'><span class='i18n' data-i18n-id='i18n_regex_search_mode'>Regular Expressions search mode</span></button></li>-->\r\n                <!--</ul>-->\r\n                <!--<div style=\"margin-top: 20px\" class=\"btn-group\">-->\r\n                    <!--<button style=\"white-space: normal;\" type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">-->\r\n                        <!--Search Mode: <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchMode\"></span>&nbsp;<span class=\"caret\"></span>-->\r\n                    <!--</button>-->\r\n                    <!--<ul class=\"dropdown-menu\" role=\"menu\">-->\r\n                        <!--<li>-->\r\n                            <!--<a href=\"#\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-fullTextButton'><span class='i18n' data-i18n-id='i18n_full_text_search_mode'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_full_text_search_mode", "Full text search mode", options) : helperMissing.call(depth0, "i18n", "i18n_full_text_search_mode", "Full text search mode", options)))
    + "</span></a>-->\r\n                        <!--</li>-->\r\n                        <!--<li>-->\r\n                            <!--<a href=\"#\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-partialMatchingButton'><span class='i18n' data-i18n-id='i18n_partial_match_search_mode'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_partial_match_search_mode", "Partial matching search mode", options) : helperMissing.call(depth0, "i18n", "i18n_partial_match_search_mode", "Partial matching search mode", options)))
    + "</span></a>-->\r\n                        <!--</li>-->\r\n                        <!--<li>-->\r\n                            <!--<a href=\"#\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-regexButton'><span class='i18n' data-i18n-id='i18n_regex_search_mode'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_regex_search_mode", "Regular Expressions search mode", options) : helperMissing.call(depth0, "i18n", "i18n_regex_search_mode", "Regular Expressions search mode", options)))
    + "</span></a>-->\r\n                        <!--</li>-->\r\n                    <!--</ul>-->\r\n                <!--</div>-->\r\n<!--\r\n                <div style=\"margin-top: 5px\" class=\"btn-group\">\r\n                    <button style=\"white-space: normal;\" type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        Status: <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchStatus\"></span>&nbsp;<span class=\"caret\"></span>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu\" role=\"menu\">\r\n                        <li>\r\n                            <a href=\"#\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeOnlyButton' data-i18n-id='i18n_active_only'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_active_only", "Active components only", options) : helperMissing.call(depth0, "i18n", "i18n_active_only", "Active components only", options)))
    + "</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeInactiveButton' data-i18n-id='i18n_active_and_inactive'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_active_and_inactive", "Active and inactive components", options) : helperMissing.call(depth0, "i18n", "i18n_active_and_inactive", "Active and inactive components", options)))
    + "</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\"id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-inactiveOnlyButton' data-i18n-id='i18n_inactive_only'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_inactive_only", "Inactive components only", options) : helperMissing.call(depth0, "i18n", "i18n_inactive_only", "Inactive components only", options)))
    + "</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n-->\r\n                <!--<div style=\"margin-top: 5px; \" class=\"checkbox\">-->\r\n                    <!--<label>-->\r\n                        <!--<input id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-groupConcept\" type=\"checkbox\">Group by concept-->\r\n                    <!--</label>-->\r\n                <!--</div>-->\r\n                <!--<ul class='nav navbar-nav navbar-left'>-->\r\n                <!--<li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>-->\r\n                <!--<a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navSearchModeLabel'></span> <b class='caret'></b></a>-->\r\n                <!--<ul class='dropdown-menu' role='menu' style='float: none;'>-->\r\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-fullTextButton'><span class='i18n' data-i18n-id='i18n_full_text_search_mode'>Full text search mode</span></button></li>-->\r\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-partialMatchingButton'><span class='i18n' data-i18n-id='i18n_partial_match_search_mode'>Partial matching search mode</span></button></li>-->\r\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-regexButton'><span class='i18n' data-i18n-id='i18n_regex_search_mode'>Regular Expressions search mode</span></button></li>-->\r\n                <!--</ul>-->\r\n                <!--</li>-->\r\n                <!--<li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>-->\r\n                <!--<a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navLanguageLabel'></span> <b class='caret'></b></a>-->\r\n                <!--<ul class='dropdown-menu' role='menu' style='float: none;'>-->\r\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-danishLangButton'><span class='i18n' data-i18n-id='i18n_danish_stemmer'>Danish language stemmer</span></button></li>-->\r\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-englishLangButton'><span class='i18n' data-i18n-id='i18n_english_stemmer'>English language stemmer</span></button></li>-->\r\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-spanishLangButton'><span class='i18n' data-i18n-id='i18n_spanish_stemmer'>Spanish language stemmer</span></button></li>-->\r\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-swedishLangButton'><span class='i18n' data-i18n-id='i18n_swedish_stemmer'>Swedish language stemmer</span></button></li>-->\r\n                <!--</ul>-->\r\n                <!--</li>-->\r\n                <!--<li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>-->\r\n                <!--<a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navStatusFilterLabel'></span> <b class='caret'></b></a>-->\r\n                <!--<ul class='dropdown-menu' role='menu' style='float: none;'>-->\r\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeOnlyButton'><span class='i18n' data-i18n-id='i18n_active_only'>Active components only</span></button></li>-->\r\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeInactiveButton'><span class='i18n' data-i18n-id='i18n_active_and_inactive'>Active and inactive components</span></button></li>-->\r\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-inactiveOnlyButton'><span class='i18n' data-i18n-id='i18n_inactive_only'>Inactive components only</span></button></li>-->\r\n                <!--</ul>-->\r\n                <!--</li>-->\r\n                <!--</ul>-->\r\n                <!--</nav>-->\r\n<!--\r\n            </div>\r\n            <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBar2\"></div>\r\n        </div>\r\n-->\r\n        <div style=\"display: inline; width: 100%; float: left; padding: 5px;\">\r\n            <form>\r\n                <div class=\"form-group\" style=\"margin-bottom: 2px;\">\r\n                    <label for=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBox\">\r\n                        <span class=\"i18n\" data-i18n-id=\"i18n_type_3_chars\">Type at least 3 characters</span> <i class=\"glyphicon glyphicon-remove text-danger\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-typeIcon\"></i> <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchExample\"></span></label>\r\n                    <br><div class=\"btn-group\" style=\"width: 100%;\"><input data-droppable=\"true\" ondrop=\"dropS(event);\" ondragover=\"removeHighlight();\" ondragstart=\"allowDrop(event);\" type=\"search\" class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBox\" placeholder=\"Search...\" autocomplete=\"off\">\r\n                    <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-clearButton\" class=\"searchclear glyphicon glyphicon-remove-circle\"></span></div>\r\n                </div>\r\n            </form>\r\n            <div class='panel panel-default' style='height:70%;overflow:auto;margin-bottom: 15px;min-height: 300px;' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsScrollPane'>\r\n                <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBar\"></div>\r\n                <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchFilters\"></div>\r\n                <table class='table table-bordered'>\r\n                    <tbody id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsTable'>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <!--<div class='modal fade' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'>-->\r\n                <!--<div class='modal-dialog'>-->\r\n                    <!--<div class='modal-content'>-->\r\n                        <!--<div class='modal-header'>-->\r\n                            <!--<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>-->\r\n                            <!--<h4 class='modal-title'><span class='i18n' data-i18n-id='i18n_options'>Options</span> (";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</h4>-->\r\n                        <!--</div>-->\r\n                        <!--<div class='modal-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modal-body'>-->\r\n                            <!--<p></p>-->\r\n                        <!--</div>-->\r\n                        <!--<div class='modal-footer'>-->\r\n                            <!--<button type='button' class='btn btn-danger' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_cancel'>Cancel</span></button>-->\r\n                            <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-apply-button' type='button' class='btn btn-success' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_apply_changes'>Apply changes</span></button>-->\r\n                        <!--</div>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        </div>\r\n    </div>\r\n</div>\r\n";
  return buffer;
  });

this["JST"]["views/taxonomyPlugin/body/children.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program2(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <li data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='treeLabel'>\r\n                <button class='btn btn-link btn-xs treeButton' style='padding:2px'>\r\n                    <i class='glyphicon glyphicon-";
  stack1 = (helper = helpers.if_eq || (depth2 && depth2.if_eq),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth2 && depth2.selectedView), "inferred", options) : helperMissing.call(depth0, "if_eq", (depth2 && depth2.selectedView), "inferred", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' id='"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></i>\r\n                </button>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(12, program12, data, depth1),fn:self.programWithDepth(10, program10, data, depth1),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\r\n                    <span class=\"treeLabel selectable-row\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\""
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treenode-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                </a>\r\n                "
    + escapeExpression((helper = helpers.push || (depth0 && depth0.push),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.conceptId), options) : helperMissing.call(depth0, "push", (depth0 && depth0.conceptId), options)))
    + "\r\n            </li>\r\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.isLeafInferred), true, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.isLeafInferred), true, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program4(depth0,data) {
  
  
  return "minus";
  }

function program6(depth0,data) {
  
  
  return "chevron-right";
  }

function program8(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.isLeafStated), true, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.isLeafStated), true, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program10(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program12(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                    <div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">\r\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                    </div>\r\n                ";
  return buffer;
  }

  buffer += "<ul style='list-style-type: none; padding-left: 15px;'>\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.result), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });

this["JST"]["views/taxonomyPlugin/body/parents.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n            <li data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='treeLabel'>\r\n                <button class='btn btn-link btn-xs treeButton' style='padding:2px'>\r\n                    <i class='glyphicon glyphicon-chevron-";
  stack1 = (helper = helpers.if_def || (depth0 && depth0.if_def),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.conceptId), options) : helperMissing.call(depth0, "if_def", (depth0 && depth0.conceptId), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' id='"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></i>\r\n                </button>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\r\n                    <span data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"treeLabel selectable-row\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treenode-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                </a>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "down";
  }

function program4(depth0,data) {
  
  
  return "up";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <span class=\"badge alert-warning\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <span class=\"badge alert-warning\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\">&equiv;</span>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n                    <div class=\"phoca-flagbox\" style=\"width:33px;height:33px\">\r\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\r\n                    </div>\r\n                ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n            "
    + escapeExpression((helper = helpers.slice || (depth0 && depth0.slice),options={hash:{},data:data},helper ? helper.call(depth0, 0, -5, options) : helperMissing.call(depth0, "slice", 0, -5, options)))
    + "\r\n        ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">&equiv;</span>&nbsp;&nbsp;\r\n                ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n                    <div class=\"phoca-flagbox\" style=\"width:33px;height:33px\">\r\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\r\n                    </div>\r\n                ";
  return buffer;
  }

function program20(depth0,data) {
  
  
  return "\r\n            </li>\r\n        ";
  }

  buffer += "<div style='height:100%;margin-bottom: 15px;'>\r\n    <ul style='list-style-type: none; padding-left: 5px;'>\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.parents), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.parents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_gr", ((stack1 = (depth0 && depth0.parents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        <ul style='list-style-type: none; padding-left: 15px;'>\r\n            <li data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class='treeLabel'>\r\n                <button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-chevron-right treeButton'  id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-treeicon-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></i></button>\r\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "PRIMITIVE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "hasCountryIcon", ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\r\n                    <span data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"treeLabel selectable-row\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-treenode-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.fsn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.parents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_gr", ((stack1 = (depth0 && depth0.parents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </ul>\r\n</div>";
  return buffer;
  });

this["JST"]["views/taxonomyPlugin/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style='height:100%;margin: 5px; overflow:auto;' class='panel panel-default' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-mainPanel'>\r\n    <div ondrop=\"dropT(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-heading' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelHeading'>\r\n<!--\r\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ownMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-book'></i></button>\r\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-subscribersMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 15px;'><i class='glyphicon glyphicon-bookmark'></i></button>\r\n-->\r\n        <div class='row'>\r\n            <div class='col-md-6' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_taxonomy'>Taxonomy</span></strong></div>\r\n            <div class='col-md-6 text-right'>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-historyButton' class='btn btn-link history-button' style='padding:2px'><i class='glyphicon glyphicon-time'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resetButton' class='btn btn-link' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-repeat'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configButton' class='btn btn-link' data-toggle='modal' style='padding:2px' data-target='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-taxonomyConfigBar' style='margin-bottom: 10px;'><nav class='navbar navbar-default' role='navigation' style='min-height: 28px;border-radius: 0px;border-bottom: 1px lightgray solid;'>\r\n        <ul class='nav navbar-nav navbar-left'>\r\n            <li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>\r\n                <a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-txViewLabel'></span> <b class='caret'></b></a>\r\n                <ul class='dropdown-menu' role='menu' style='float: none;'>\r\n                    <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-inferredViewButton'><span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span></button></li>\r\n                    <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-statedViewButton'><span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span></button></li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </nav></div>\r\n    <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-taxonomyConfigBar' style='margin-bottom: 10px;'><nav class='navbar navbar-default' role='navigation' style='min-height: 28px;border-radius: 0px;border-bottom: 1px lightgray solid;'>\r\n        <ul class='nav navbar-nav navbar-left'>\r\n            <li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>\r\n                <div style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-txViewLabel'></span></div>\r\n            </li>\r\n        </ul>\r\n    </nav></div>\r\n    <div ondrop=\"dropT(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-body' style='height:100%' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\r\n    </div>\r\n</div>\r\n<div class='modal fade' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'>\r\n    <div class='modal-dialog'>\r\n        <div class='modal-content'>\r\n            <div class='modal-header'>\r\n                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>\r\n                <h4 class='modal-title'><span class='i18n' data-i18n-id='i18n_options'>Options</span> (";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</h4>\r\n            </div>\r\n            <div class='modal-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modal-body'>\r\n                <p></p>\r\n            </div>\r\n            <div class='modal-footer'>\r\n                <button type='button' class='btn btn-danger' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_cancel'>Cancel</span></button>\r\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-apply-button' type='button' class='btn btn-success' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_apply_changes'>Apply changes</span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["JST"]["views/taxonomyPlugin/options.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n                <tr>\r\n                    <td>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n                    <td>\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-subscribeTo-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subscribed), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> <span class=\"i18n\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-subscriptor-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subscriptor), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> <span class=\"i18n\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<form role=\"form\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-options-form\">\r\n    <div class=\"form-group\">\r\n        <table class='table table-bordered table-hover'>\r\n            <thead>\r\n            <tr>\r\n                <th>Panel</th>\r\n                <th><span class=\"i18n\" data-i18n-id=\"i18n_subscribed\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_subscribe", "Subscribed", options) : helperMissing.call(depth0, "i18n", "i18n_subscribe", "Subscribed", options)))
    + "</span></th>\r\n                <th><span class=\"i18n\" data-i18n-id=\"i18n_subscriptor\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_subscriptor", "Subscriptor", options) : helperMissing.call(depth0, "i18n", "i18n_subscriptor", "Subscriptor", options)))
    + "</span></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.possibleSubscribers), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>";
  return buffer;
  });