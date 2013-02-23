smalltalk.addPackage('GoogleCharts', {});
smalltalk.addClass('ChartApp', smalltalk.Widget, ['nextId'], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"begin",{}, smalltalk.ChartApp)})}
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nextId"]=(1);
_st(_st(self)._class())._loadGoogleLoader_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._class())._loadVisualization_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._begin();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ChartApp)})}
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_nextId",
smalltalk.method({
selector: "nextId",
fn: function (){
var self=this;
var rv;
return smalltalk.withContext(function($ctx1) { var $1;
rv=_st("id").__comma(_st(self["@nextId"])._printString());
self["@nextId"]=_st(self["@nextId"]).__plus((1));
$1=rv;
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextId",{rv:rv}, smalltalk.ChartApp)})}
}),
smalltalk.ChartApp);


smalltalk.addMethod(
"_loadGoogleLoader_",
smalltalk.method({
selector: "loadGoogleLoader:",
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { $.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});;
return self}, function($ctx1) {$ctx1.fill(self,"loadGoogleLoader:",{callback:callback}, smalltalk.ChartApp.klass)})}
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
"_loadVisualization_",
smalltalk.method({
selector: "loadVisualization:",
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._loadVisualization_packages_(callback,_st(self)._neededVisualizationPackages());
return self}, function($ctx1) {$ctx1.fill(self,"loadVisualization:",{callback:callback}, smalltalk.ChartApp.klass)})}
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
"_loadVisualization_packages_",
smalltalk.method({
selector: "loadVisualization:packages:",
fn: function (callback,packages){
var self=this;
return smalltalk.withContext(function($ctx1) { google.load("visualization","1",{"callback" : callback , "packages":packages});;
return self}, function($ctx1) {$ctx1.fill(self,"loadVisualization:packages:",{callback:callback,packages:packages}, smalltalk.ChartApp.klass)})}
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{}, smalltalk.ChartApp.klass)})}
}),
smalltalk.ChartApp.klass);


smalltalk.addClass('ChartButton', smalltalk.Widget, ['element', 'clickBlock', 'text'], 'GoogleCharts');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
var button;
return smalltalk.withContext(function($ctx1) { button=_st(_st("#").__comma(_st(self)._element()))._asJQuery();
_st(button)._click_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activate",{button:button}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock",
smalltalk.method({
selector: "clickBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@clickBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"clickBlock",{}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock_",
smalltalk.method({
selector: "clickBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@clickBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"clickBlock:",{aBlock:aBlock}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element_",
smalltalk.method({
selector: "element:",
fn: function (aSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@element"]=aSymbol;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{aSymbol:aSymbol}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._button();
_st($1)._with_(_st(self)._text());
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_text",
smalltalk.method({
selector: "text",
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
}, function($ctx1) {$ctx1.fill(self,"text",{}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_text_",
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@text"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);


smalltalk.addMethod(
"_element_clickBlock_",
smalltalk.method({
selector: "element:clickBlock:",
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
}, function($ctx1) {$ctx1.fill(self,"element:clickBlock:",{elementSymbol:elementSymbol,clickBlock:clickBlock}, smalltalk.ChartButton.klass)})}
}),
smalltalk.ChartButton.klass);

smalltalk.addMethod(
"_popUpChart_atDom_",
smalltalk.method({
selector: "popUpChart:atDom:",
fn: function (chart,element){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._element_clickBlock_(element,(function(){
return smalltalk.withContext(function($ctx2) {return _st(chart)._drawChart();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popUpChart:atDom:",{chart:chart,element:element}, smalltalk.ChartButton.klass)})}
}),
smalltalk.ChartButton.klass);


smalltalk.addClass('GoogleChart', smalltalk.Widget, ['gChart', 'chartId', 'chartType'], 'GoogleCharts');
smalltalk.addMethod(
"_arrayToDataTable_",
smalltalk.method({
selector: "arrayToDataTable:",
fn: function (array){
var self=this;
return smalltalk.withContext(function($ctx1) { return google.visualization.arrayToDataTable(array);
return self}, function($ctx1) {$ctx1.fill(self,"arrayToDataTable:",{array:array}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chart",
smalltalk.method({
selector: "chart",
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
}, function($ctx1) {$ctx1.fill(self,"chart",{}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartId",
smalltalk.method({
selector: "chartId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@chartId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartId",{}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartId_",
smalltalk.method({
selector: "chartId:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@chartId"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"chartId:",{aString:aString}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartType",
smalltalk.method({
selector: "chartType",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@chartType"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartType",{}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartType_",
smalltalk.method({
selector: "chartType:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@chartType"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"chartType:",{aString:aString}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_drawChart",
smalltalk.method({
selector: "drawChart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._chart())._perform_withArguments_(smalltalk.symbolFor("draw"),_st((smalltalk.Array || Array))._with_with_(_st(self)._makeData(),_st(self)._makeOptions()));
return self}, function($ctx1) {$ctx1.fill(self,"drawChart",{}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_getElementById_",
smalltalk.method({
selector: "getElementById:",
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { return document.getElementById(id);
return self}, function($ctx1) {$ctx1.fill(self,"getElementById:",{id:id}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassresponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeGChart_",
smalltalk.method({
selector: "makeGChart:",
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._makeVisualizationType_at_(_st(self)._chartType(),_st(self)._getElementById_(id));
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeGChart:",{id:id}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassresponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeVisualizationType_at_",
smalltalk.method({
selector: "makeVisualizationType:at:",
fn: function (type,element){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(google)._visualization())._at_(type))._newValue_(element);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeVisualizationType:at:",{type:type,element:element}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._id_(_st(self)._chartId());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {return "Waiting to load";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.GoogleChart)})}
}),
smalltalk.GoogleChart);


smalltalk.addMethod(
"_chartId_",
smalltalk.method({
selector: "chartId:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._chartId_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartId:",{aString:aString}, smalltalk.GoogleChart.klass)})}
}),
smalltalk.GoogleChart.klass);


smalltalk.addClass('GaugeChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.GoogleChart.fn.prototype._initialize.apply(_st(self), []);
_st(self)._chartType_("Gauge");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.GaugeChart)})}
}),
smalltalk.GaugeChart);



smalltalk.addClass('GeoChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.GoogleChart.fn.prototype._initialize.apply(_st(self), []);
_st(self)._chartType_("GeoChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.GeoChart)})}
}),
smalltalk.GeoChart);



smalltalk.addClass('PieChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.GoogleChart.fn.prototype._initialize.apply(_st(self), []);
_st(self)._chartType_("PieChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.PieChart)})}
}),
smalltalk.PieChart);



smalltalk.addClass('ScatterChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
smalltalk.GoogleChart.fn.prototype._initialize.apply(_st(self), []);
_st(self)._chartType_("ScatterChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.ScatterChart)})}
}),
smalltalk.ScatterChart);



