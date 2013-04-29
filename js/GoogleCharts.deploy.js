smalltalk.addPackage('GoogleCharts');
smalltalk.addClass('ChartApp', smalltalk.Widget, ['nextId'], 'GoogleCharts');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.ChartApp)})},
messageSends: []}),
smalltalk.ChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@nextId"]=(1);
_st(_st(self)._class())._loadGoogleLoader_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._class())._loadVisualization_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._begin();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ChartApp)})},
messageSends: ["initialize", "loadGoogleLoader:", "loadVisualization:", "begin", "class"]}),
smalltalk.ChartApp);

smalltalk.addMethod(
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
}, function($ctx1) {$ctx1.fill(self,"nextId",{rv:rv},smalltalk.ChartApp)})},
messageSends: [",", "printString", "+"]}),
smalltalk.ChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBrowserButtonOn:",
fn: function (html){
var self=this;
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._button();
_st($1)._with_("class browser");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st($Browser())._open();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBrowserButtonOn:",{html:html},smalltalk.ChartApp)})},
messageSends: ["with:", "button", "onClick:", "open", "div"]}),
smalltalk.ChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderLink:content:on:",
fn: function (href,content,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._a();
_st($1)._href_(href);
$2=_st($1)._with_(content);
return self}, function($ctx1) {$ctx1.fill(self,"renderLink:content:on:",{href:href,content:content,html:html},smalltalk.ChartApp)})},
messageSends: ["href:", "a", "with:"]}),
smalltalk.ChartApp);


smalltalk.addMethod(
smalltalk.method({
selector: "loadGoogleLoader:",
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { $.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});;
return self}, function($ctx1) {$ctx1.fill(self,"loadGoogleLoader:",{callback:callback},smalltalk.ChartApp.klass)})},
messageSends: []}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "loadVisualization:",
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._loadVisualization_packages_(callback,_st(self)._neededVisualizationPackages());
return self}, function($ctx1) {$ctx1.fill(self,"loadVisualization:",{callback:callback},smalltalk.ChartApp.klass)})},
messageSends: ["loadVisualization:packages:", "neededVisualizationPackages"]}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "loadVisualization:packages:",
fn: function (callback,packages){
var self=this;
return smalltalk.withContext(function($ctx1) { google.load("visualization","1",{"callback" : callback , "packages":packages});;
return self}, function($ctx1) {$ctx1.fill(self,"loadVisualization:packages:",{callback:callback,packages:packages},smalltalk.ChartApp.klass)})},
messageSends: []}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "neededVisualizationPackages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{},smalltalk.ChartApp.klass)})},
messageSends: []}),
smalltalk.ChartApp.klass);


smalltalk.addClass('DataTable', smalltalk.Object, ['data'], 'GoogleCharts');
smalltalk.addMethod(
smalltalk.method({
selector: "addColumnType:name:",
fn: function (aString,name){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._data())._perform_withArguments_(smalltalk.symbolFor("addColumn:"),_st((smalltalk.Array || Array))._with_with_(aString,name));
return self}, function($ctx1) {$ctx1.fill(self,"addColumnType:name:",{aString:aString,name:name}, smalltalk.DataTable)})},
messageSends: ["perform:withArguments:", "with:with:", "data"]}),
smalltalk.DataTable);

smalltalk.addMethod(
smalltalk.method({
selector: "addRows:",
fn: function (array){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._data())._perform_withArguments_(smalltalk.symbolFor("addRows:"),_st((smalltalk.Array || Array))._with_(array));
return self}, function($ctx1) {$ctx1.fill(self,"addRows:",{array:array}, smalltalk.DataTable)})},
messageSends: ["perform:withArguments:", "with:", "data"]}),
smalltalk.DataTable);

smalltalk.addMethod(
smalltalk.method({
selector: "data",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@data"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@data"]=_st(_st(_st(google)._visualization())._DataTable())._new();
$1=self["@data"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"data",{}, smalltalk.DataTable)})},
messageSends: ["ifNil:", "new", "DataTable", "visualization"]}),
smalltalk.DataTable);

smalltalk.addMethod(
smalltalk.method({
selector: "data:",
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@data"]=obj;
return self}, function($ctx1) {$ctx1.fill(self,"data:",{obj:obj}, smalltalk.DataTable)})},
messageSends: []}),
smalltalk.DataTable);


smalltalk.addMethod(
smalltalk.method({
selector: "jsDataTable:",
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._data_(data);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsDataTable:",{data:data}, smalltalk.DataTable.klass)})},
messageSends: ["data:", "new", "yourself"]}),
smalltalk.DataTable.klass);


smalltalk.addClass('GoogleChart', smalltalk.Widget, ['gChart', 'chartId', 'chartType'], 'GoogleCharts');
smalltalk.addMethod(
smalltalk.method({
selector: "arrayToDataTable:",
fn: function (array){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(google)._visualization())._arrayToDataTable_(array);
return $1;
}, function($ctx1) {$ctx1.fill(self,"arrayToDataTable:",{array:array}, smalltalk.GoogleChart)})},
messageSends: ["arrayToDataTable:", "visualization"]}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "arrayToDataTable:firstRowAsData:",
fn: function (array,aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(google)._visualization())._perform_withArguments_(smalltalk.symbolFor("arrayToDataTable:"),_st((smalltalk.Array || Array))._with_with_(array,aBool));
return $1;
}, function($ctx1) {$ctx1.fill(self,"arrayToDataTable:firstRowAsData:",{array:array,aBool:aBool}, smalltalk.GoogleChart)})},
messageSends: ["perform:withArguments:", "with:with:", "visualization"]}),
smalltalk.GoogleChart);

smalltalk.addMethod(
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
}, function($ctx1) {$ctx1.fill(self,"chart",{}, smalltalk.GoogleChart)})},
messageSends: ["ifNil:", "makeGChart:", "chartId"]}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "chartId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@chartId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartId",{}, smalltalk.GoogleChart)})},
messageSends: []}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "chartId:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@chartId"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"chartId:",{aString:aString}, smalltalk.GoogleChart)})},
messageSends: []}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "chartType",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@chartType"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartType",{}, smalltalk.GoogleChart)})},
messageSends: []}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "chartType:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@chartType"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"chartType:",{aString:aString}, smalltalk.GoogleChart)})},
messageSends: []}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "drawChart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._drawData_options_(_st(self)._makeData(),_st(self)._makeOptions());
return self}, function($ctx1) {$ctx1.fill(self,"drawChart",{}, smalltalk.GoogleChart)})},
messageSends: ["drawData:options:", "makeData", "makeOptions"]}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "drawData:options:",
fn: function (data,options){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._chart())._perform_withArguments_(smalltalk.symbolFor("draw"),_st((smalltalk.Array || Array))._with_with_(data,options));
return self}, function($ctx1) {$ctx1.fill(self,"drawData:options:",{data:data,options:options}, smalltalk.GoogleChart)})},
messageSends: ["perform:withArguments:", "with:with:", "chart"]}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementById:",
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(document)._getElementById_(id);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getElementById:",{id:id}, smalltalk.GoogleChart)})},
messageSends: ["getElementById:"]}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.GoogleChart)})},
messageSends: ["initialize"]}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassresponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.GoogleChart)})},
messageSends: ["subclassresponsibility"]}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "makeGChart:",
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._makeVisualizationType_at_(_st(self)._chartType(),_st(self)._getElementById_(id));
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeGChart:",{id:id}, smalltalk.GoogleChart)})},
messageSends: ["makeVisualizationType:at:", "chartType", "getElementById:"]}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassresponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.GoogleChart)})},
messageSends: ["subclassresponsibility"]}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "makeVisualizationType:at:",
fn: function (type,element){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(google)._visualization())._at_(type))._newValue_(element);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeVisualizationType:at:",{type:type,element:element}, smalltalk.GoogleChart)})},
messageSends: ["newValue:", "at:", "visualization"]}),
smalltalk.GoogleChart);

smalltalk.addMethod(
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
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.GoogleChart)})},
messageSends: ["id:", "chartId", "div", "with:"]}),
smalltalk.GoogleChart);


smalltalk.addMethod(
smalltalk.method({
selector: "chartId:",
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._chartId_(id);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartId:",{id:id}, smalltalk.GoogleChart.klass)})},
messageSends: ["chartId:", "new", "yourself"]}),
smalltalk.GoogleChart.klass);


