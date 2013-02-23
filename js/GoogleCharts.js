smalltalk.addPackage('GoogleCharts', {});
smalltalk.addClass('ChartApp', smalltalk.Widget, ['nextId'], 'GoogleCharts');
smalltalk.ChartApp.comment="A chart app is an example App which loads the google JSAPI and visualization API."
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"begin",{}, smalltalk.ChartApp)})},
args: [],
source: "begin\x0a\x09\x22Start the executiong of the ChartApp\x22\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nextId"]=(1);
_st(_st(self)._class())._loadGoogleLoader_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._class())._loadVisualization_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._begin();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ChartApp)})},
args: [],
source: "initialize\x0a\x09\x22Load my external JS\x22\x0a    nextId := 1.\x0a    self class loadGoogleLoader:[self class loadVisualization:[self begin]]\x0a  ",
messageSends: ["loadGoogleLoader:", "loadVisualization:", "begin", "class"],
referencedClasses: []
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_nextId",
smalltalk.method({
selector: "nextId",
category: 'not yet classified',
fn: function (){
var self=this;
var rv;
return smalltalk.withContext(function($ctx1) { var $1;
rv=_st("id").__comma(_st(self["@nextId"])._printString());
self["@nextId"]=_st(self["@nextId"]).__plus((1));
$1=rv;
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextId",{rv:rv}, smalltalk.ChartApp)})},
args: [],
source: "nextId\x0a\x09\x22Return the next unique id in the sequence\x22\x0a\x09|rv|\x0a    rv := 'id' , (nextId printString).\x0a    nextId := nextId + 1.\x0a    ^rv",
messageSends: [",", "printString", "+"],
referencedClasses: []
}),
smalltalk.ChartApp);


smalltalk.addMethod(
"_loadGoogleLoader_",
smalltalk.method({
selector: "loadGoogleLoader:",
category: 'not yet classified',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { $.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});;
return self}, function($ctx1) {$ctx1.fill(self,"loadGoogleLoader:",{callback:callback}, smalltalk.ChartApp.klass)})},
args: ["callback"],
source: "loadGoogleLoader: callback\x0a\x09\x22Load the Google JSAPI - Use JQuery.ajax() since that is available\x22\x0a\x09<$.ajax({url:\x22https://www.google.com/jsapi\x22,dataType:\x22script\x22,success:callback});>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
"_loadVisualization_",
smalltalk.method({
selector: "loadVisualization:",
category: 'not yet classified',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._loadVisualization_packages_(callback,_st(self)._neededVisualizationPackages());
return self}, function($ctx1) {$ctx1.fill(self,"loadVisualization:",{callback:callback}, smalltalk.ChartApp.klass)})},
args: ["callback"],
source: "loadVisualization: callback\x0a\x09\x22Use google.load() to load visualization and load the needed packages\x22\x0a    self loadVisualization: callback packages: self neededVisualizationPackages",
messageSends: ["loadVisualization:packages:", "neededVisualizationPackages"],
referencedClasses: []
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
"_loadVisualization_packages_",
smalltalk.method({
selector: "loadVisualization:packages:",
category: 'not yet classified',
fn: function (callback,packages){
var self=this;
return smalltalk.withContext(function($ctx1) { google.load("visualization","1",{"callback" : callback , "packages":packages});;
return self}, function($ctx1) {$ctx1.fill(self,"loadVisualization:packages:",{callback:callback,packages:packages}, smalltalk.ChartApp.klass)})},
args: ["callback", "packages"],
source: "loadVisualization: callback packages: packages\x0a\x09\x22Use google.load() to load visualization and load the needed packages\x22\x0a\x09<google.load(\x22visualization\x22,\x221\x22,{\x22callback\x22 : callback , \x22packages\x22:packages});>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{}, smalltalk.ChartApp.klass)})},
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x22\x0a\x09^{}",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp.klass);


smalltalk.addClass('ChartButton', smalltalk.Widget, ['element', 'clickBlock', 'text'], 'GoogleCharts');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
category: 'not yet classified',
fn: function (){
var self=this;
var button;
return smalltalk.withContext(function($ctx1) { button=_st(_st("#").__comma(_st(self)._element()))._asJQuery();
_st(button)._click_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activate",{button:button}, smalltalk.ChartButton)})},
args: [],
source: "activate\x0a\x09|button|\x0a\x09button := ('#' , self element) asJQuery.\x0a    button click:[self clickBlock value]",
messageSends: ["asJQuery", ",", "element", "click:", "value", "clickBlock"],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock",
smalltalk.method({
selector: "clickBlock",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@clickBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"clickBlock",{}, smalltalk.ChartButton)})},
args: [],
source: "clickBlock\x0a\x09^clickBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock_",
smalltalk.method({
selector: "clickBlock:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@clickBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"clickBlock:",{aBlock:aBlock}, smalltalk.ChartButton)})},
args: ["aBlock"],
source: "clickBlock: aBlock\x0a\x09clickBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{}, smalltalk.ChartButton)})},
args: [],
source: "element\x0a\x09^element",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element_",
smalltalk.method({
selector: "element:",
category: 'not yet classified',
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@element"]=aSymbol;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{aSymbol:aSymbol}, smalltalk.ChartButton)})},
args: ["aSymbol"],
source: "element: aSymbol\x0a\x09element := aSymbol",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._button();
_st($1)._with_(_st(self)._text());
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.ChartButton)})},
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a    \x09button\x0a        \x09with:self text;\x0a            onClick:[self clickBlock value]\x0a            ",
messageSends: ["with:", "text", "button", "onClick:", "value", "clickBlock"],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_text",
smalltalk.method({
selector: "text",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@text"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@text"]="";
$1=self["@text"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{}, smalltalk.ChartButton)})},
args: [],
source: "text\x0a\x09^text ifNil:[text := '']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_text_",
smalltalk.method({
selector: "text:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@text"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString}, smalltalk.ChartButton)})},
args: ["aString"],
source: "text: aString\x0a\x09text := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);


smalltalk.addMethod(
"_element_clickBlock_",
smalltalk.method({
selector: "element:clickBlock:",
category: 'not yet classified',
fn: function (elementSymbol,clickBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._element_(elementSymbol);
_st($2)._clickBlock_(clickBlock);
_st($2)._activate();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"element:clickBlock:",{elementSymbol:elementSymbol,clickBlock:clickBlock}, smalltalk.ChartButton.klass)})},
args: ["elementSymbol", "clickBlock"],
source: "element: elementSymbol clickBlock: clickBlock\x0a\x09^self new element: elementSymbol; clickBlock: clickBlock; activate;yourself",
messageSends: ["element:", "new", "clickBlock:", "activate", "yourself"],
referencedClasses: []
}),
smalltalk.ChartButton.klass);

smalltalk.addMethod(
"_popUpChart_atDom_",
smalltalk.method({
selector: "popUpChart:atDom:",
category: 'not yet classified',
fn: function (chart,element){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._element_clickBlock_(element,(function(){
return smalltalk.withContext(function($ctx2) {return _st(chart)._drawChart();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popUpChart:atDom:",{chart:chart,element:element}, smalltalk.ChartButton.klass)})},
args: ["chart", "element"],
source: "popUpChart: chart atDom: element\x0a\x09\x22Make the chart popup on click of an element\x22\x0a    ^self element: element clickBlock:[chart drawChart]\x0a\x09",
messageSends: ["element:clickBlock:", "drawChart"],
referencedClasses: []
}),
smalltalk.ChartButton.klass);


smalltalk.addClass('GoogleChart', smalltalk.Widget, ['gChart', 'chartId', 'chartType'], 'GoogleCharts');
smalltalk.addMethod(
"_arrayToDataTable_",
smalltalk.method({
selector: "arrayToDataTable:",
category: 'data table',
fn: function (array){
var self=this;
return smalltalk.withContext(function($ctx1) { return google.visualization.arrayToDataTable(array);
return self}, function($ctx1) {$ctx1.fill(self,"arrayToDataTable:",{array:array}, smalltalk.GoogleChart)})},
args: ["array"],
source: "arrayToDataTable: array\x0a\x0a\x09 <return google.visualization.arrayToDataTable(array)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chart",
smalltalk.method({
selector: "chart",
category: 'chart',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@gChart"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@gChart"]=_st(self)._makeGChart_(_st(self)._chartId());
$1=self["@gChart"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"chart",{}, smalltalk.GoogleChart)})},
args: [],
source: "chart\x0a     ^gChart ifNil:[ gChart :=self makeGChart:self chartId]",
messageSends: ["ifNil:", "makeGChart:", "chartId"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartId",
smalltalk.method({
selector: "chartId",
category: 'accessor',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@chartId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartId",{}, smalltalk.GoogleChart)})},
args: [],
source: "chartId\x0a\x09^chartId",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartId_",
smalltalk.method({
selector: "chartId:",
category: 'accessor',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@chartId"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"chartId:",{aString:aString}, smalltalk.GoogleChart)})},
args: ["aString"],
source: "chartId: aString\x0a\x09chartId := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartType",
smalltalk.method({
selector: "chartType",
category: 'accessor',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@chartType"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartType",{}, smalltalk.GoogleChart)})},
args: [],
source: "chartType\x0a\x09^ chartType",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartType_",
smalltalk.method({
selector: "chartType:",
category: 'accessor',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@chartType"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"chartType:",{aString:aString}, smalltalk.GoogleChart)})},
args: ["aString"],
source: "chartType: aString\x0a\x09chartType := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_drawChart",
smalltalk.method({
selector: "drawChart",
category: 'chart',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._chart())._perform_withArguments_(smalltalk.symbolFor("draw"),_st((smalltalk.Array || Array))._with_with_(_st(self)._makeData(),_st(self)._makeOptions()));
return self}, function($ctx1) {$ctx1.fill(self,"drawChart",{}, smalltalk.GoogleChart)})},
args: [],
source: "drawChart\x0a\x09\x22Draw the chart\x22\x0a      self chart perform: #draw withArguments: (Array with:self makeData with:self makeOptions)",
messageSends: ["perform:withArguments:", "with:with:", "makeData", "makeOptions", "chart"],
referencedClasses: ["Array"]
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_getElementById_",
smalltalk.method({
selector: "getElementById:",
category: 'DOM',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { return document.getElementById(id);
return self}, function($ctx1) {$ctx1.fill(self,"getElementById:",{id:id}, smalltalk.GoogleChart)})},
args: ["id"],
source: "getElementById: id\x0a\x09\x22Find element by the id in the DOM\x22\x0a\x09<return document.getElementById(id)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'init',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.GoogleChart)})},
args: [],
source: "initialize\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'abstraction',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassresponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.GoogleChart)})},
args: [],
source: "makeData\x0a\x09\x22abstraction - return the data for a google chart\x22\x0a  \x09 ^self subclassresponsibility",
messageSends: ["subclassresponsibility"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeGChart_",
smalltalk.method({
selector: "makeGChart:",
category: 'chart',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._makeVisualizationType_at_(_st(self)._chartType(),_st(self)._getElementById_(id));
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeGChart:",{id:id}, smalltalk.GoogleChart)})},
args: ["id"],
source: "makeGChart: id\x0a\x22build a chart at specific element id in the DOM and return\x22\x0a    ^self makeVisualizationType: self chartType at: (self getElementById:id)",
messageSends: ["makeVisualizationType:at:", "chartType", "getElementById:"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'abstraction',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassresponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.GoogleChart)})},
args: [],
source: "makeOptions\x0a\x09\x22Abstract method - return options for a Google Chart\x22\x0a   ^\x09 self subclassresponsibility",
messageSends: ["subclassresponsibility"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeVisualizationType_at_",
smalltalk.method({
selector: "makeVisualizationType:at:",
category: 'chart',
fn: function (type,element){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(google)._visualization())._at_(type))._newValue_(element);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeVisualizationType:at:",{type:type,element:element}, smalltalk.GoogleChart)})},
args: ["type", "element"],
source: "makeVisualizationType:type at: element\x0a\x22build a chart at specific element id in the DOM and return\x22\x0a\x09^(google visualization at:type) newValue:element",
messageSends: ["newValue:", "at:", "visualization"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'init',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._id_(_st(self)._chartId());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {return "Waiting to load";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.GoogleChart)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Render the placeholder div for the chart\x22\x0a\x09html \x0a    \x09div id:self chartId;\x0a        \x09with:['Waiting to load']",
messageSends: ["id:", "chartId", "div", "with:"],
referencedClasses: []
}),
smalltalk.GoogleChart);


smalltalk.addMethod(
"_chartId_",
smalltalk.method({
selector: "chartId:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._chartId_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartId:",{aString:aString}, smalltalk.GoogleChart.klass)})},
args: ["aString"],
source: "chartId: aString\x0a\x09^self new chartId:aString;yourself",
messageSends: ["chartId:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.GoogleChart.klass);


smalltalk.addClass('GaugeChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.GoogleChart.fn.prototype._initialize.apply(_st(self), []);
_st(self)._chartType_("Gauge");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.GaugeChart)})},
args: [],
source: "initialize\x0a\x09\x22 Create a Guage with the chartId that identifies the chart graphic placement and the chartType to be created at that id.\x22\x0a    super initialize.\x0a    self chartType:'Gauge'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.GaugeChart);



smalltalk.addClass('GeoChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.GoogleChart.fn.prototype._initialize.apply(_st(self), []);
_st(self)._chartType_("GeoChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.GeoChart)})},
args: [],
source: "initialize\x0a\x09\x22 Create a Geo Chart\x22\x0a    super initialize.\x0a    self chartType:'GeoChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.GeoChart);



smalltalk.addClass('PieChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.GoogleChart.fn.prototype._initialize.apply(_st(self), []);
_st(self)._chartType_("PieChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.PieChart)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:'PieChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.PieChart);



smalltalk.addClass('ScatterChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.GoogleChart.fn.prototype._initialize.apply(_st(self), []);
_st(self)._chartType_("ScatterChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ScatterChart)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:'ScatterChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.ScatterChart);



