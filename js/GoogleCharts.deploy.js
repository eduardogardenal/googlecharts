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
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._button();
_st($1)._with_("Open IDE");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(amber)._loadHelios();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBrowserButtonOn:",{html:html},smalltalk.ChartApp)})},
messageSends: ["with:", "button", "onClick:", "loadHelios", "div"]}),
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


smalltalk.addClass('GCChartWrapper', smalltalk.Object, ['chartWrapper'], 'GoogleCharts');
smalltalk.addMethod(
smalltalk.method({
selector: "basicClone",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicClone_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicClone",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicClone:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "chart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicChart_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"chart",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicChart:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "chartWrapper",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@chartWrapper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartWrapper",{},smalltalk.GCChartWrapper)})},
messageSends: []}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "chartWrapper:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@chartWrapper"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"chartWrapper:",{anObject:anObject},smalltalk.GCChartWrapper)})},
messageSends: []}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "clone",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._chartWrapper_(_st(self)._basicClone());
return $1;
}, function($ctx1) {$ctx1.fill(self,"clone",{},smalltalk.GCChartWrapper)})},
messageSends: ["chartWrapper:", "basicClone", "new"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "containerId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetContainerId_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"containerId",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicGetContainerId:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "containerId:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetContainerId_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"containerId:",{aString:aString},smalltalk.GCChartWrapper)})},
messageSends: ["basicSetContainerId:value:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "dataSourceURL",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetDataSourceURL_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataSourceURL",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicGetDataSourceURL:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "dataSourceURL:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetDataSourceURL_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataSourceURL:",{aString:aString},smalltalk.GCChartWrapper)})},
messageSends: ["basicSetDataSourceURL:value:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTable",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetDataTable_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataTable",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicGetDataTable:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTable:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetDataTable_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataTable:",{aString:aString},smalltalk.GCChartWrapper)})},
messageSends: ["basicSetDataTable:value:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._class())._basicDraw_(_st(self)._chartWrapper());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicDraw:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetChartName_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicGetChartName:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetChartName_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.GCChartWrapper)})},
messageSends: ["basicSetChartName:value:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "optionAt:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetOption_key_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionAt:",{aString:aString},smalltalk.GCChartWrapper)})},
messageSends: ["basicGetOption:key:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "optionAt:default:",
fn: function (aString,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetOption_key_default_(_st(self)._chartWrapper(),aString,aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionAt:default:",{aString:aString,aValue:aValue},smalltalk.GCChartWrapper)})},
messageSends: ["basicGetOption:key:default:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "optionAt:put:",
fn: function (aString,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetOption_value_(_st(self)._chartWrapper(),aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionAt:put:",{aString:aString,aValue:aValue},smalltalk.GCChartWrapper)})},
messageSends: ["basicSetOption:value:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "options",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetOptions_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"options",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicGetOptions:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetOptions_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"options:",{aString:aString},smalltalk.GCChartWrapper)})},
messageSends: ["basicSetOptions:value:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "query",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetQuery_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"query",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicGetQuery:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "query:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetQuery_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"query:",{aString:aString},smalltalk.GCChartWrapper)})},
messageSends: ["basicSetQuery:value:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "refreshInterval",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetRefreshInterval_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"refreshInterval",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicGetRefreshInterval:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "refreshInterval:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetRefreshInterval_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"refreshInterval:",{aString:aString},smalltalk.GCChartWrapper)})},
messageSends: ["basicSetRefreshInterval:value:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "toJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicToJSON_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"toJSON",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicToJSON:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetChartType_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.GCChartWrapper)})},
messageSends: ["basicGetChartType:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetChartType_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"type:",{aString:aString},smalltalk.GCChartWrapper)})},
messageSends: ["basicSetChartType:value:", "chartWrapper", "class"]}),
smalltalk.GCChartWrapper);


smalltalk.addMethod(
smalltalk.method({
selector: "basicChartWrapper:",
fn: function (options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new google.visualization.ChartWrapper(options);;
return self}, function($ctx1) {$ctx1.fill(self,"basicChartWrapper:",{options:options},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicClone:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.clone();;
return self}, function($ctx1) {$ctx1.fill(self,"basicClone:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDraw:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.draw();;
return self}, function($ctx1) {$ctx1.fill(self,"basicDraw:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDraw:optContainer:",
fn: function (wrapper,optContainer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.draw(optContainer);
return self}, function($ctx1) {$ctx1.fill(self,"basicDraw:optContainer:",{wrapper:wrapper,optContainer:optContainer},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetChart:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getChart();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetChart:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetChartName:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getChartName();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetChartName:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetChartType:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getChartType();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetChartType:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetContainerId:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getContainerId();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetContainerId:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetDataSourceURL:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getDataSourceURL();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetDataSourceURL:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetDataTable:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getDataTable();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetDataTable:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetOption:key:",
fn: function (wrapper,key){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getOption(key);;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetOption:key:",{wrapper:wrapper,key:key},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetOption:key:default:",
fn: function (wrapper,key,opt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getOption(key,opt);;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetOption:key:default:",{wrapper:wrapper,key:key,opt:opt},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetOptions:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getOptions();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetOptions:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetQuery:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getQuery();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetQuery:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetRefreshInterval:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getRefreshInterval();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetRefreshInterval:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetView:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getView();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetView:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetChartName:value:",
fn: function (wrapper,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setChartName(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetChartName:value:",{wrapper:wrapper,aString:aString},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetChartType:value:",
fn: function (wrapper,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setChartType(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetChartType:value:",{wrapper:wrapper,aString:aString},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetContainerId:value:",
fn: function (wrapper,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setContainerId(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetContainerId:value:",{wrapper:wrapper,aString:aString},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetDataSourceURL:value:",
fn: function (wrapper,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setDataSourceURL(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetDataSourceURL:value:",{wrapper:wrapper,aString:aString},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetDataTable:value:",
fn: function (wrapper,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setDataTable(anObject);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetDataTable:value:",{wrapper:wrapper,anObject:anObject},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetOption:key:value:",
fn: function (wrapper,key,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.setOption(key,anObject);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetOption:key:value:",{wrapper:wrapper,key:key,anObject:anObject},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetOptions:value:",
fn: function (wrapper,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.getOptions(anObject);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetOptions:value:",{wrapper:wrapper,anObject:anObject},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetQuery:value:",
fn: function (wrapper,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setQuery(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetQuery:value:",{wrapper:wrapper,aString:aString},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetRefreshInterval:value:",
fn: function (wrapper,aNum){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setRefreshInterval(aNum);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetRefreshInterval:value:",{wrapper:wrapper,aNum:aNum},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetView:value:",
fn: function (wrapper,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setView(anObject);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetView:value:",{wrapper:wrapper,anObject:anObject},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicToJSON:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.toJSON();;
return self}, function($ctx1) {$ctx1.fill(self,"basicToJSON:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
messageSends: []}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
fn: function (options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._chartWrapper_(_st(self)._basicChartWrapper_(options));
return $1;
}, function($ctx1) {$ctx1.fill(self,"options:",{options:options},smalltalk.GCChartWrapper.klass)})},
messageSends: ["chartWrapper:", "basicChartWrapper:", "new"]}),
smalltalk.GCChartWrapper.klass);


smalltalk.addClass('GCControlWrapper', smalltalk.Object, ['wrapper'], 'GoogleCharts');
smalltalk.addMethod(
smalltalk.method({
selector: "clone",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._wrapper_(_st(_st(self)._class())._basicClone());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"clone",{},smalltalk.GCControlWrapper)})},
messageSends: ["wrapper:", "basicClone", "class", "new", "yourself"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "containerId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetContainerId_(_st(self)._wrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"containerId",{},smalltalk.GCControlWrapper)})},
messageSends: ["basicGetContainerId:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "containerId:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetContainerId_value_(_st(self)._wrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"containerId:",{aString:aString},smalltalk.GCControlWrapper)})},
messageSends: ["basicSetContainerId:value:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "control",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetControl_(_st(self)._wrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"control",{},smalltalk.GCControlWrapper)})},
messageSends: ["basicGetControl:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._class())._basicDraw_(_st(self)._wrapper());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.GCControlWrapper)})},
messageSends: ["basicDraw:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetControlName_(_st(self)._wrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.GCControlWrapper)})},
messageSends: ["basicGetControlName:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
fn: function (aType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetControName_value_(_st(self)._wrapper(),aType);
return $1;
}, function($ctx1) {$ctx1.fill(self,"name:",{aType:aType},smalltalk.GCControlWrapper)})},
messageSends: ["basicSetControName:value:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "optionKey:",
fn: function (key){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetOption_key_default_(_st(self)._wrapper(),key,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionKey:",{key:key},smalltalk.GCControlWrapper)})},
messageSends: ["basicGetOption:key:default:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "optionKey:default:",
fn: function (key,default_){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetOption_key_default_(_st(self)._wrapper(),key,default_);
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionKey:default:",{key:key,default_:default_},smalltalk.GCControlWrapper)})},
messageSends: ["basicGetOption:key:default:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "options",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetOptions_(_st(self)._wrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"options",{},smalltalk.GCControlWrapper)})},
messageSends: ["basicGetOptions:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetOptions_value_(_st(self)._wrapper(),aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"options:",{aValue:aValue},smalltalk.GCControlWrapper)})},
messageSends: ["basicSetOptions:value:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetState_(_st(self)._wrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.GCControlWrapper)})},
messageSends: ["basicGetState:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "state:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetState_value_(_st(self)._wrapper(),aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"state:",{aValue:aValue},smalltalk.GCControlWrapper)})},
messageSends: ["basicSetState:value:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "toJSON",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicToJSON_(_st(self)._wrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"toJSON",{},smalltalk.GCControlWrapper)})},
messageSends: ["basicToJSON:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetControlType_(_st(self)._wrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.GCControlWrapper)})},
messageSends: ["basicGetControlType:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
fn: function (aType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetControlType_value_(_st(self)._wrapper(),aType);
return $1;
}, function($ctx1) {$ctx1.fill(self,"type:",{aType:aType},smalltalk.GCControlWrapper)})},
messageSends: ["basicSetControlType:value:", "wrapper", "class"]}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@wrapper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"wrapper",{},smalltalk.GCControlWrapper)})},
messageSends: []}),
smalltalk.GCControlWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper:",
fn: function (aWrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@wrapper"]=aWrapper;
return self}, function($ctx1) {$ctx1.fill(self,"wrapper:",{aWrapper:aWrapper},smalltalk.GCControlWrapper)})},
messageSends: []}),
smalltalk.GCControlWrapper);


smalltalk.addMethod(
smalltalk.method({
selector: "basicClone:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.clone();
return self}, function($ctx1) {$ctx1.fill(self,"basicClone:",{wrapper:wrapper},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicControlWrapper:",
fn: function (options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new google.visualization.ControlWrapper(options);;
return self}, function($ctx1) {$ctx1.fill(self,"basicControlWrapper:",{options:options},smalltalk.GCContolWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDraw:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.draw();
return self}, function($ctx1) {$ctx1.fill(self,"basicDraw:",{wrapper:wrapper},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetContainerId:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getContainerId();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetContainerId:",{wrapper:wrapper},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetControl:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getControl();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetControl:",{wrapper:wrapper},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetControlName:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getControlName();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetControlName:",{wrapper:wrapper},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetControlType:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getControlType();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetControlType:",{wrapper:wrapper},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetOption:key:default:",
fn: function (wrapper,key,dVakye){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getOption(key,dValue);;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetOption:key:default:",{wrapper:wrapper,key:key,dVakye:dVakye},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetOptions:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getOptions();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetOptions:",{wrapper:wrapper},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetState:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getState();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetState:",{wrapper:wrapper},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetContainerId:value:",
fn: function (wrapper,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setContainerId(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetContainerId:value:",{wrapper:wrapper,aString:aString},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetControlName:value:",
fn: function (wrapper,aName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setControlType(aName);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetControlName:value:",{wrapper:wrapper,aName:aName},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetControlType:value:",
fn: function (wrapper,aType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setControlType(aType);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetControlType:value:",{wrapper:wrapper,aType:aType},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetOptions:value:",
fn: function (wrapper,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setOptions(aValue);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetOptions:value:",{wrapper:wrapper,aValue:aValue},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetState:value:",
fn: function (wrapper,aState){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setState(aState);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetState:value:",{wrapper:wrapper,aState:aState},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicToJSON:",
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.toJSON();;
return self}, function($ctx1) {$ctx1.fill(self,"basicToJSON:",{wrapper:wrapper},smalltalk.GCControlWrapper.klass)})},
messageSends: []}),
smalltalk.GCControlWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
fn: function (options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._wrapper_(_st(self)._basicControlWrapper_(options));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"options:",{options:options},smalltalk.GCControlWrapper.klass)})},
messageSends: ["wrapper:", "basicControlWrapper:", "new", "yourself"]}),
smalltalk.GCControlWrapper.klass);


smalltalk.addClass('GCDashboard', smalltalk.Object, ['dashboard'], 'GoogleCharts');
smalltalk.addMethod(
smalltalk.method({
selector: "bindControls:charts:",
fn: function (controls,charts){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._class())._basicBind_controls_charts_(self["@dashboard"],controls,charts);
return self}, function($ctx1) {$ctx1.fill(self,"bindControls:charts:",{controls:controls,charts:charts},smalltalk.GCDashboard)})},
messageSends: ["basicBind:controls:charts:", "class"]}),
smalltalk.GCDashboard);

smalltalk.addMethod(
smalltalk.method({
selector: "dashboard",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dashboard"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dashboard",{},smalltalk.GCDashboard)})},
messageSends: []}),
smalltalk.GCDashboard);

smalltalk.addMethod(
smalltalk.method({
selector: "dashboard:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dashboard"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"dashboard:",{anElement:anElement},smalltalk.GCDashboard)})},
messageSends: []}),
smalltalk.GCDashboard);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:",
fn: function (dataTable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._class())._basicDraw_(dataTable);
return self}, function($ctx1) {$ctx1.fill(self,"draw:",{dataTable:dataTable},smalltalk.GCDashboard)})},
messageSends: ["basicDraw:", "class"]}),
smalltalk.GCDashboard);


smalltalk.addMethod(
smalltalk.method({
selector: "basicBind:controls:charts:",
fn: function (dashboard,controls,charts){
var self=this;
return smalltalk.withContext(function($ctx1) { 
dashboard.bind(controls,charts);;
return self}, function($ctx1) {$ctx1.fill(self,"basicBind:controls:charts:",{dashboard:dashboard,controls:controls,charts:charts},smalltalk.GCDashboard.klass)})},
messageSends: []}),
smalltalk.GCDashboard.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDashboard:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new google.visualization.Dashboard( element);;
return self}, function($ctx1) {$ctx1.fill(self,"basicDashboard:",{element:element},smalltalk.GCDashboard.klass)})},
messageSends: []}),
smalltalk.GCDashboard.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDraw:data:",
fn: function (dashboard,data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
dashboard.draw(data);;
return self}, function($ctx1) {$ctx1.fill(self,"basicDraw:data:",{dashboard:dashboard,data:data},smalltalk.GCDashboard.klass)})},
messageSends: []}),
smalltalk.GCDashboard.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "dashboard:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._new())._dashboard_basicDashboard_(self,element);
return self}, function($ctx1) {$ctx1.fill(self,"dashboard:",{element:element},smalltalk.GCDashboard.klass)})},
messageSends: ["dashboard:basicDashboard:", "new"]}),
smalltalk.GCDashboard.klass);


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


smalltalk.addClass('GoogleVisualization', smalltalk.Widget, ['basicData'], 'GoogleCharts');


