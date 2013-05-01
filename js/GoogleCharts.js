smalltalk.addPackage('GoogleCharts');
smalltalk.addClass('ChartApp', smalltalk.Widget, ['nextId'], 'GoogleCharts');
smalltalk.ChartApp.comment="A ChartApp is a Widget which loads the google JSAPI and visualization API. \x0a\x09I coordinate all loading of Visualizaton packages. \x0a\x09My default renderOn: method is empty.\x0a\x09I can produce a series of unique string for the use as HTML element id."
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'startup',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.ChartApp)})},
args: [],
source: "begin\x0a\x09\x22Start the executiong of the ChartApp.\x22\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
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
args: [],
source: "initialize\x0a\x09\x22Load my external JS, start id sequence at 1.\x22\x0a    super initialize.\x0a    nextId := 1.\x0a    self class loadGoogleLoader:[ self class loadVisualization:[ self begin ]]\x0a  ",
messageSends: ["initialize", "loadGoogleLoader:", "loadVisualization:", "begin", "class"],
referencedClasses: []
}),
smalltalk.ChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "nextId",
category: 'accessing',
fn: function (){
var self=this;
var rv;
return smalltalk.withContext(function($ctx1) { var $1;
rv=_st("id").__comma(_st(self["@nextId"])._printString());
self["@nextId"]=_st(self["@nextId"]).__plus((1));
$1=rv;
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextId",{rv:rv},smalltalk.ChartApp)})},
args: [],
source: "nextId\x0a\x09\x22Return the next unique id in the sequence.\x22\x0a\x09|rv|\x0a    rv := 'id' , (nextId printString).\x0a    nextId := nextId + 1.\x0a    ^rv",
messageSends: [",", "printString", "+"],
referencedClasses: []
}),
smalltalk.ChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBrowserButtonOn:",
category: 'rendering',
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
args: ["html"],
source: "renderBrowserButtonOn: html\x0a    html\x0a    \x09div\x0a    \x09\x09with:[ \x0a            \x09html button \x0a        \x09\x09\x09with:'class browser';\x0a            \x09\x09onClick:[Browser open]].",
messageSends: ["with:", "button", "onClick:", "open", "div"],
referencedClasses: ["Browser"]
}),
smalltalk.ChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderLink:content:on:",
category: 'rendering',
fn: function (href,content,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._a();
_st($1)._href_(href);
$2=_st($1)._with_(content);
return self}, function($ctx1) {$ctx1.fill(self,"renderLink:content:on:",{href:href,content:content,html:html},smalltalk.ChartApp)})},
args: ["href", "content", "html"],
source: "renderLink: href content:content on: html\x0a\x0a\x09html a\x0a        href: href;\x0a        with: content",
messageSends: ["href:", "a", "with:"],
referencedClasses: []
}),
smalltalk.ChartApp);


smalltalk.addMethod(
smalltalk.method({
selector: "loadGoogleLoader:",
category: 'loading',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { $.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});;
return self}, function($ctx1) {$ctx1.fill(self,"loadGoogleLoader:",{callback:callback},smalltalk.ChartApp.klass)})},
args: ["callback"],
source: "loadGoogleLoader: callback\x0a\x09\x22Load the Google JSAPI,\x22\x0a\x09<$.ajax({url:\x22https://www.google.com/jsapi\x22,dataType:\x22script\x22,success:callback});>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "loadVisualization:",
category: 'loading',
fn: function (callback){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._loadVisualization_packages_(callback,_st(self)._neededVisualizationPackages());
return self}, function($ctx1) {$ctx1.fill(self,"loadVisualization:",{callback:callback},smalltalk.ChartApp.klass)})},
args: ["callback"],
source: "loadVisualization: callback\x0a\x09\x22Load the needed Visualization packages.\x22\x0a    self loadVisualization: callback packages: self neededVisualizationPackages",
messageSends: ["loadVisualization:packages:", "neededVisualizationPackages"],
referencedClasses: []
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "loadVisualization:packages:",
category: 'loading',
fn: function (callback,packages){
var self=this;
return smalltalk.withContext(function($ctx1) { google.load("visualization","1",{"callback" : callback , "packages":packages});;
return self}, function($ctx1) {$ctx1.fill(self,"loadVisualization:packages:",{callback:callback,packages:packages},smalltalk.ChartApp.klass)})},
args: ["callback", "packages"],
source: "loadVisualization: callback packages: packages\x0a\x09\x22JS method to load Visualization packages.\x22\x0a\x09<google.load(\x22visualization\x22,\x221\x22,{\x22callback\x22 : callback , \x22packages\x22:packages});>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "neededVisualizationPackages",
category: 'startup',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{},smalltalk.ChartApp.klass)})},
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x0aSubclasses should:\x0a\x09\x09^super  neededVisualizationPackages addAll: addToSet\x0a\x22\x0a        ^{}",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp.klass);


smalltalk.addClass('DataTable', smalltalk.Object, ['data'], 'GoogleCharts');
smalltalk.DataTable.comment="DataTable is a proxy object for Google Visualization DataTable objects. It's main purpuse is to create an amber API over those objects."
smalltalk.addMethod(
smalltalk.method({
selector: "addColumnType:name:",
category: 'manipulation',
fn: function (aString,name){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._data())._perform_withArguments_(smalltalk.symbolFor("addColumn:"),_st((smalltalk.Array || Array))._with_with_(aString,name));
return self}, function($ctx1) {$ctx1.fill(self,"addColumnType:name:",{aString:aString,name:name}, smalltalk.DataTable)})},
args: ["aString", "name"],
source: "addColumnType: aString name: name\x0a\x09\x22Add a column to the DataTable.\x22\x0a\x09self data perform: #addColumn:  withArguments: (Array with: aString with: name)",
messageSends: ["perform:withArguments:", "with:with:", "data"],
referencedClasses: ["Array"]
}),
smalltalk.DataTable);

smalltalk.addMethod(
smalltalk.method({
selector: "addRows:",
category: 'manipulation',
fn: function (array){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._data())._perform_withArguments_(smalltalk.symbolFor("addRows:"),_st((smalltalk.Array || Array))._with_(array));
return self}, function($ctx1) {$ctx1.fill(self,"addRows:",{array:array}, smalltalk.DataTable)})},
args: ["array"],
source: "addRows: array\x0a\x09\x22Add rows to the DataTable.\x22\x0a   self data  perform: #addRows: withArguments: (Array with: array)",
messageSends: ["perform:withArguments:", "with:", "data"],
referencedClasses: ["Array"]
}),
smalltalk.DataTable);

smalltalk.addMethod(
smalltalk.method({
selector: "data",
category: 'accessing',
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
args: [],
source: "data\x0a\x09^data ifNil:[ data:= google visualization DataTable new] ",
messageSends: ["ifNil:", "new", "DataTable", "visualization"],
referencedClasses: []
}),
smalltalk.DataTable);

smalltalk.addMethod(
smalltalk.method({
selector: "data:",
category: 'accessing',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@data"]=obj;
return self}, function($ctx1) {$ctx1.fill(self,"data:",{obj:obj}, smalltalk.DataTable)})},
args: ["obj"],
source: "data: obj\x0a\x09data := obj",
messageSends: [],
referencedClasses: []
}),
smalltalk.DataTable);


smalltalk.addMethod(
smalltalk.method({
selector: "jsDataTable:",
category: 'not yet classified',
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._data_(data);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsDataTable:",{data:data}, smalltalk.DataTable.klass)})},
args: ["data"],
source: "jsDataTable: data\x0a\x09\x22Build a DataTable proxy from an actual js DataTable object,\x22\x0a    ^self new data:data;yourself",
messageSends: ["data:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.DataTable.klass);


smalltalk.addClass('GCChartWrapper', smalltalk.Object, ['chartWrapper'], 'GoogleCharts');
smalltalk.addMethod(
smalltalk.method({
selector: "basicClone",
category: 'basic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicClone_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicClone",{},smalltalk.GCChartWrapper)})},
args: [],
source: "basicClone\x0a\x09^self class basicClone: self chartWrapper",
messageSends: ["basicClone:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "chart",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicChart_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"chart",{},smalltalk.GCChartWrapper)})},
args: [],
source: "chart\x0a\x09^self class basicChart: self chartWrapper",
messageSends: ["basicChart:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "chartWrapper",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@chartWrapper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartWrapper",{},smalltalk.GCChartWrapper)})},
args: [],
source: "chartWrapper\x0a\x09^chartWrapper",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "chartWrapper:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@chartWrapper"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"chartWrapper:",{anObject:anObject},smalltalk.GCChartWrapper)})},
args: ["anObject"],
source: "chartWrapper: anObject\x0a\x09chartWrapper := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "clone",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._chartWrapper_(_st(self)._basicClone());
return $1;
}, function($ctx1) {$ctx1.fill(self,"clone",{},smalltalk.GCChartWrapper)})},
args: [],
source: "clone\x0a\x09^self new chartWrapper: self basicClone",
messageSends: ["chartWrapper:", "basicClone", "new"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "containerId",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetContainerId_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"containerId",{},smalltalk.GCChartWrapper)})},
args: [],
source: "containerId\x0a\x09^self class basicGetContainerId: self chartWrapper",
messageSends: ["basicGetContainerId:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "containerId:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetContainerId_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"containerId:",{aString:aString},smalltalk.GCChartWrapper)})},
args: ["aString"],
source: "containerId: aString\x0a\x09^self class basicSetContainerId: self chartWrapper value: aString",
messageSends: ["basicSetContainerId:value:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "dataSourceURL",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetDataSourceURL_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataSourceURL",{},smalltalk.GCChartWrapper)})},
args: [],
source: "dataSourceURL\x0a\x09^self class basicGetDataSourceURL: self chartWrapper",
messageSends: ["basicGetDataSourceURL:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "dataSourceURL:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetDataSourceURL_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataSourceURL:",{aString:aString},smalltalk.GCChartWrapper)})},
args: ["aString"],
source: "dataSourceURL: aString\x0a\x09^self class basicSetDataSourceURL: self chartWrapper value: aString",
messageSends: ["basicSetDataSourceURL:value:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTable",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetDataTable_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataTable",{},smalltalk.GCChartWrapper)})},
args: [],
source: "dataTable\x0a\x09^self class basicGetDataTable: self chartWrapper",
messageSends: ["basicGetDataTable:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTable:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetDataTable_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataTable:",{aString:aString},smalltalk.GCChartWrapper)})},
args: ["aString"],
source: "dataTable: aString\x0a\x09^self class basicSetDataTable: self chartWrapper value: aString",
messageSends: ["basicSetDataTable:value:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._class())._basicDraw_(_st(self)._chartWrapper());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.GCChartWrapper)})},
args: [],
source: "draw\x0a\x09self class basicDraw: self chartWrapper",
messageSends: ["basicDraw:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetChartName_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.GCChartWrapper)})},
args: [],
source: "name\x0a\x09^self class basicGetChartName: self chartWrapper",
messageSends: ["basicGetChartName:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetChartName_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"name:",{aString:aString},smalltalk.GCChartWrapper)})},
args: ["aString"],
source: "name: aString\x0a\x09^self class basicSetChartName: self chartWrapper value: aString",
messageSends: ["basicSetChartName:value:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "optionAt:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetOption_key_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionAt:",{aString:aString},smalltalk.GCChartWrapper)})},
args: ["aString"],
source: "optionAt: aString\x0a\x09^self class basicGetOption: self chartWrapper key:aString",
messageSends: ["basicGetOption:key:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "optionAt:default:",
category: 'not yet classified',
fn: function (aString,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetOption_key_default_(_st(self)._chartWrapper(),aString,aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionAt:default:",{aString:aString,aValue:aValue},smalltalk.GCChartWrapper)})},
args: ["aString", "aValue"],
source: "optionAt: aString default: aValue\x0a\x09^self class basicGetOption: self chartWrapper key:aString default: aValue",
messageSends: ["basicGetOption:key:default:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "optionAt:put:",
category: 'not yet classified',
fn: function (aString,aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetOption_value_(_st(self)._chartWrapper(),aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionAt:put:",{aString:aString,aValue:aValue},smalltalk.GCChartWrapper)})},
args: ["aString", "aValue"],
source: "optionAt: aString put: aValue\x0a\x09^self class basicSetOption: self chartWrapper value:aValue",
messageSends: ["basicSetOption:value:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "options",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetOptions_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"options",{},smalltalk.GCChartWrapper)})},
args: [],
source: "options\x0a\x09^self class basicGetOptions: self chartWrapper",
messageSends: ["basicGetOptions:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetOptions_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"options:",{aString:aString},smalltalk.GCChartWrapper)})},
args: ["aString"],
source: "options: aString\x0a\x09^self class basicSetOptions: self chartWrapper value: aString",
messageSends: ["basicSetOptions:value:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "query",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetQuery_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"query",{},smalltalk.GCChartWrapper)})},
args: [],
source: "query\x0a\x09^self class basicGetQuery: self chartWrapper",
messageSends: ["basicGetQuery:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "query:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetQuery_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"query:",{aString:aString},smalltalk.GCChartWrapper)})},
args: ["aString"],
source: "query: aString\x0a\x09^self class basicSetQuery: self chartWrapper value: aString",
messageSends: ["basicSetQuery:value:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "refreshInterval",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetRefreshInterval_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"refreshInterval",{},smalltalk.GCChartWrapper)})},
args: [],
source: "refreshInterval\x0a\x09^self class basicGetRefreshInterval: self chartWrapper",
messageSends: ["basicGetRefreshInterval:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "refreshInterval:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetRefreshInterval_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"refreshInterval:",{aString:aString},smalltalk.GCChartWrapper)})},
args: ["aString"],
source: "refreshInterval: aString\x0a\x09^self class basicSetRefreshInterval: self chartWrapper value: aString",
messageSends: ["basicSetRefreshInterval:value:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "toJSON",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicToJSON_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"toJSON",{},smalltalk.GCChartWrapper)})},
args: [],
source: "toJSON\x0a\x09^self class basicToJSON:self chartWrapper",
messageSends: ["basicToJSON:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicGetChartType_(_st(self)._chartWrapper());
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.GCChartWrapper)})},
args: [],
source: "type\x0a\x09^self class basicGetChartType: self chartWrapper",
messageSends: ["basicGetChartType:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
category: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._class())._basicSetChartType_value_(_st(self)._chartWrapper(),aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"type:",{aString:aString},smalltalk.GCChartWrapper)})},
args: ["aString"],
source: "type: aString\x0a\x09^self class basicSetChartType: self chartWrapper value: aString",
messageSends: ["basicSetChartType:value:", "chartWrapper", "class"],
referencedClasses: []
}),
smalltalk.GCChartWrapper);


smalltalk.addMethod(
smalltalk.method({
selector: "basicChartWrapper:",
category: 'basic',
fn: function (options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new google.visualization.ChartWrapper(options);;
return self}, function($ctx1) {$ctx1.fill(self,"basicChartWrapper:",{options:options},smalltalk.GCChartWrapper.klass)})},
args: ["options"],
source: "basicChartWrapper: options\x0a\x0a\x09<return new google.visualization.ChartWrapper(options);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicClone:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.clone();;
return self}, function($ctx1) {$ctx1.fill(self,"basicClone:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicClone: wrapper\x0a\x0a\x09<return wrapper.clone();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDraw:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.draw();;
return self}, function($ctx1) {$ctx1.fill(self,"basicDraw:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicDraw: wrapper\x0a\x0a\x09<wrapper.draw();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDraw:optContainer:",
category: 'basic',
fn: function (wrapper,optContainer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.draw(optContainer);
return self}, function($ctx1) {$ctx1.fill(self,"basicDraw:optContainer:",{wrapper:wrapper,optContainer:optContainer},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "optContainer"],
source: "basicDraw: wrapper optContainer: optContainer\x0a\x0a\x09<wrapper.draw(optContainer)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetChart:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getChart();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetChart:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicGetChart: wrapper\x0a\x0a\x09<return wrapper.getChart();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetChartName:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getChartName();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetChartName:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicGetChartName: wrapper\x0a\x0a\x09<return wrapper.getChartName();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetChartType:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getChartType();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetChartType:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicGetChartType: wrapper\x0a\x0a\x09<return wrapper.getChartType();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetContainerId:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getContainerId();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetContainerId:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicGetContainerId: wrapper\x0a\x0a\x09<return wrapper.getContainerId();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetDataSourceURL:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getDataSourceURL();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetDataSourceURL:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicGetDataSourceURL: wrapper\x0a\x0a\x09<return wrapper.getDataSourceURL();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetDataTable:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getDataTable();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetDataTable:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicGetDataTable: wrapper\x0a\x0a\x09<return wrapper.getDataTable();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetOption:key:",
category: 'basic',
fn: function (wrapper,key){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getOption(key);;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetOption:key:",{wrapper:wrapper,key:key},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "key"],
source: "basicGetOption: wrapper key: key\x0a\x0a\x09<return wrapper.getOption(key);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetOption:key:default:",
category: 'basic',
fn: function (wrapper,key,opt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getOption(key,opt);;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetOption:key:default:",{wrapper:wrapper,key:key,opt:opt},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "key", "opt"],
source: "basicGetOption: wrapper key: key default: opt\x0a\x0a\x09<return wrapper.getOption(key,opt);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetOptions:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getOptions();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetOptions:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicGetOptions: wrapper\x0a\x0a\x09<return wrapper.getOptions();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetQuery:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getQuery();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetQuery:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicGetQuery: wrapper\x0a\x0a\x09<return wrapper.getQuery();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetRefreshInterval:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getRefreshInterval();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetRefreshInterval:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicGetRefreshInterval: wrapper\x0a\x0a\x09<return wrapper.getRefreshInterval();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicGetView:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.getView();;
return self}, function($ctx1) {$ctx1.fill(self,"basicGetView:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicGetView: wrapper\x0a\x0a\x09<return wrapper.getView();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetChartName:value:",
category: 'basic',
fn: function (wrapper,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setChartName(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetChartName:value:",{wrapper:wrapper,aString:aString},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "aString"],
source: "basicSetChartName: wrapper value: aString\x0a\x0a\x09<wrapper.setChartName(aString);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetChartType:value:",
category: 'basic',
fn: function (wrapper,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setChartType(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetChartType:value:",{wrapper:wrapper,aString:aString},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "aString"],
source: "basicSetChartType: wrapper value: aString\x0a\x0a\x09<wrapper.setChartType(aString);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetContainerId:value:",
category: 'basic',
fn: function (wrapper,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setContainerId(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetContainerId:value:",{wrapper:wrapper,aString:aString},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "aString"],
source: "basicSetContainerId: wrapper value: aString\x0a\x0a\x09<wrapper.setContainerId(aString);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetDataSourceURL:value:",
category: 'basic',
fn: function (wrapper,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setDataSourceURL(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetDataSourceURL:value:",{wrapper:wrapper,aString:aString},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "aString"],
source: "basicSetDataSourceURL: wrapper value: aString\x0a\x0a\x09<wrapper.setDataSourceURL(aString);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetDataTable:value:",
category: 'basic',
fn: function (wrapper,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setDataTable(anObject);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetDataTable:value:",{wrapper:wrapper,anObject:anObject},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "anObject"],
source: "basicSetDataTable: wrapper value: anObject\x0a\x0a\x09<wrapper.setDataTable(anObject);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetOption:key:value:",
category: 'basic',
fn: function (wrapper,key,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.setOption(key,anObject);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetOption:key:value:",{wrapper:wrapper,key:key,anObject:anObject},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "key", "anObject"],
source: "basicSetOption: wrapper key: key value: anObject\x0a\x0a\x09<return wrapper.setOption(key,anObject);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetOptions:value:",
category: 'basic',
fn: function (wrapper,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.getOptions(anObject);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetOptions:value:",{wrapper:wrapper,anObject:anObject},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "anObject"],
source: "basicSetOptions: wrapper value: anObject\x0a\x0a\x09<wrapper.getOptions(anObject);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetQuery:value:",
category: 'basic',
fn: function (wrapper,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setQuery(aString);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetQuery:value:",{wrapper:wrapper,aString:aString},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "aString"],
source: "basicSetQuery: wrapper value: aString\x0a\x0a\x09<wrapper.setQuery(aString);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetRefreshInterval:value:",
category: 'basic',
fn: function (wrapper,aNum){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setRefreshInterval(aNum);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetRefreshInterval:value:",{wrapper:wrapper,aNum:aNum},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "aNum"],
source: "basicSetRefreshInterval: wrapper value: aNum\x0a\x0a\x09<wrapper.setRefreshInterval(aNum);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetView:value:",
category: 'basic',
fn: function (wrapper,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
wrapper.setView(anObject);;
return self}, function($ctx1) {$ctx1.fill(self,"basicSetView:value:",{wrapper:wrapper,anObject:anObject},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper", "anObject"],
source: "basicSetView: wrapper value: anObject\x0a\x0a\x09<wrapper.setView(anObject);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicToJSON:",
category: 'basic',
fn: function (wrapper){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return wrapper.toJSON();;
return self}, function($ctx1) {$ctx1.fill(self,"basicToJSON:",{wrapper:wrapper},smalltalk.GCChartWrapper.klass)})},
args: ["wrapper"],
source: "basicToJSON: wrapper\x0a\x0a\x09<return wrapper.toJSON();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "options:",
category: 'creation',
fn: function (options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._chartWrapper_(_st(self)._basicChartWrapper_(options));
return $1;
}, function($ctx1) {$ctx1.fill(self,"options:",{options:options},smalltalk.GCChartWrapper.klass)})},
args: ["options"],
source: "options: options\x0a\x09^self new chartWrapper: (self basicChartWrapper:options)",
messageSends: ["chartWrapper:", "basicChartWrapper:", "new"],
referencedClasses: []
}),
smalltalk.GCChartWrapper.klass);


smalltalk.addClass('GCControlWrapper', smalltalk.Object, ['controlWrapper'], 'GoogleCharts');

smalltalk.addMethod(
smalltalk.method({
selector: "basicControlWrapper:",
category: 'not yet classified',
fn: function (options){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new google.visualization.ControlWrapper(options);;
return self}, function($ctx1) {$ctx1.fill(self,"basicControlWrapper:",{options:options},smalltalk.GCContolWrapper.klass)})},
args: ["options"],
source: "basicControlWrapper: options\x0a\x0a\x09<return new google.visualization.ControlWrapper(options);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCControlWrapper.klass);


smalltalk.addClass('GCDashboard', smalltalk.Object, ['dashboard'], 'GoogleCharts');
smalltalk.addMethod(
smalltalk.method({
selector: "bindControls:charts:",
category: 'not yet classified',
fn: function (controls,charts){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._class())._basicBindDashboard_controls_charts_(self["@dashboard"],controls,charts);
return self}, function($ctx1) {$ctx1.fill(self,"bindControls:charts:",{controls:controls,charts:charts},smalltalk.GCDashboard)})},
args: ["controls", "charts"],
source: "bindControls: controls charts: charts\x0a\x09self class basicBindDashboard: dashboard controls: controls charts: charts",
messageSends: ["basicBindDashboard:controls:charts:", "class"],
referencedClasses: []
}),
smalltalk.GCDashboard);

smalltalk.addMethod(
smalltalk.method({
selector: "dashboard",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dashboard"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dashboard",{},smalltalk.GCDashboard)})},
args: [],
source: "dashboard\x0a\x09^dashboard",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCDashboard);

smalltalk.addMethod(
smalltalk.method({
selector: "dashboard:",
category: 'not yet classified',
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dashboard"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"dashboard:",{anElement:anElement},smalltalk.GCDashboard)})},
args: ["anElement"],
source: "dashboard: anElement\x0a\x09dashboard := anElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCDashboard);


smalltalk.addMethod(
smalltalk.method({
selector: "basicBindDashboard:controls:charts:",
category: 'not yet classified',
fn: function (dashboard,controls,charts){
var self=this;
return smalltalk.withContext(function($ctx1) { 
dashboard.bind(controls,charts);;
return self}, function($ctx1) {$ctx1.fill(self,"basicBindDashboard:controls:charts:",{dashboard:dashboard,controls:controls,charts:charts},smalltalk.GCDashboard.klass)})},
args: ["dashboard", "controls", "charts"],
source: "basicBindDashboard: dashboard controls: controls charts: charts\x0a\x09<dashboard.bind(controls,charts);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCDashboard.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDashboard:",
category: 'not yet classified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return new google.visualization.Dashboard( element);;
return self}, function($ctx1) {$ctx1.fill(self,"basicDashboard:",{element:element},smalltalk.GCDashboard.klass)})},
args: ["element"],
source: "basicDashboard: element\x0a       <return new google.visualization.Dashboard( element);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCDashboard.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDrawDashboard:data:",
category: 'not yet classified',
fn: function (dashboard,data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
dashboard.draw(data);;
return self}, function($ctx1) {$ctx1.fill(self,"basicDrawDashboard:data:",{dashboard:dashboard,data:data},smalltalk.GCDashboard.klass)})},
args: ["dashboard", "data"],
source: "basicDrawDashboard: dashboard data: data\x0a\x09<dashboard.draw(data);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GCDashboard.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "dashboard:",
category: 'not yet classified',
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._new())._dashboard_basicDashboard_(self,element);
return self}, function($ctx1) {$ctx1.fill(self,"dashboard:",{element:element},smalltalk.GCDashboard.klass)})},
args: ["element"],
source: "dashboard: element\x0a\x09self new dashboard: self basicDashboard:element",
messageSends: ["dashboard:basicDashboard:", "new"],
referencedClasses: []
}),
smalltalk.GCDashboard.klass);


smalltalk.addClass('GoogleChart', smalltalk.Widget, ['gChart', 'chartId', 'chartType'], 'GoogleCharts');
smalltalk.GoogleChart.comment="A GoogleChart is an abstract Widget which encapsulates the creation and drawing a Google Visualizations. I render a div with the chartId for myself.\x0a\x0a    \x0a\x0aInstance Vars:\x0a\x09gChart which is the created visualization object.\x0a\x09chartType (PieChart, LineChart etc) which is the type of the Visualization that is created.\x0a\x09chartId which is the DOM id where the chart is placed."
smalltalk.addMethod(
smalltalk.method({
selector: "arrayToDataTable:",
category: 'data table',
fn: function (array){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(google)._visualization())._arrayToDataTable_(array);
return $1;
}, function($ctx1) {$ctx1.fill(self,"arrayToDataTable:",{array:array}, smalltalk.GoogleChart)})},
args: ["array"],
source: "arrayToDataTable: array\x0a\x09\x22Convert an array into a DataTable.\x22\x0a\x09^google visualization arrayToDataTable: array",
messageSends: ["arrayToDataTable:", "visualization"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "arrayToDataTable:firstRowAsData:",
category: 'data table',
fn: function (array,aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(google)._visualization())._perform_withArguments_(smalltalk.symbolFor("arrayToDataTable:"),_st((smalltalk.Array || Array))._with_with_(array,aBool));
return $1;
}, function($ctx1) {$ctx1.fill(self,"arrayToDataTable:firstRowAsData:",{array:array,aBool:aBool}, smalltalk.GoogleChart)})},
args: ["array", "aBool"],
source: "arrayToDataTable: array firstRowAsData: aBool\x0a\x09\x22Convert an array into a DataTable while setting the firstRowAsData flag.\x22\x0a\x09^google visualization perform: #arrayToDataTable:  withArguments:(Array with:array with:aBool)",
messageSends: ["perform:withArguments:", "with:with:", "visualization"],
referencedClasses: ["Array"]
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "chart",
category: 'accessing',
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
source: "chart\x0a\x09\x22Return the gChart.\x22\x0a     ^gChart ifNil:[ gChart :=self makeGChart:self chartId]",
messageSends: ["ifNil:", "makeGChart:", "chartId"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "chartId",
category: 'accessing',
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
smalltalk.method({
selector: "chartId:",
category: 'accessing',
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
smalltalk.method({
selector: "chartType",
category: 'accessing',
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
smalltalk.method({
selector: "chartType:",
category: 'accessing',
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
smalltalk.method({
selector: "drawChart",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._drawData_options_(_st(self)._makeData(),_st(self)._makeOptions());
return self}, function($ctx1) {$ctx1.fill(self,"drawChart",{}, smalltalk.GoogleChart)})},
args: [],
source: "drawChart\x0a\x09\x22Draw the chart.\x22\x0a    self drawData: self makeData options: self makeOptions",
messageSends: ["drawData:options:", "makeData", "makeOptions"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "drawData:options:",
category: 'drawing',
fn: function (data,options){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._chart())._perform_withArguments_(smalltalk.symbolFor("draw"),_st((smalltalk.Array || Array))._with_with_(data,options));
return self}, function($ctx1) {$ctx1.fill(self,"drawData:options:",{data:data,options:options}, smalltalk.GoogleChart)})},
args: ["data", "options"],
source: "drawData: data options: options\x0a\x09\x22Draw the chart with data and options.\x22\x0a      self chart perform: #draw withArguments: (Array with:data with:options)",
messageSends: ["perform:withArguments:", "with:with:", "chart"],
referencedClasses: ["Array"]
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "getElementById:",
category: 'rendering',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(document)._getElementById_(id);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getElementById:",{id:id}, smalltalk.GoogleChart)})},
args: ["id"],
source: "getElementById: id\x0a\x09\x22Find element by the id in the DOM.\x22\x0a    ^document getElementById: id\x0a\x09\x22return document.getElementById(id)>\x22",
messageSends: ["getElementById:"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.GoogleChart)})},
args: [],
source: "initialize\x0a\x09^super initialize",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
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
source: "makeData\x0a\x09\x22abstraction - return the data, as a DataTable, for a google chart.\x22\x0a  \x09 ^self subclassresponsibility",
messageSends: ["subclassresponsibility"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "makeGChart:",
category: 'rendering',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._makeVisualizationType_at_(_st(self)._chartType(),_st(self)._getElementById_(id));
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeGChart:",{id:id}, smalltalk.GoogleChart)})},
args: ["id"],
source: "makeGChart: id\x0a\x09\x22Build a chart of a given type at a specific dom id.\x22\x0a    ^self makeVisualizationType: self chartType at: (self getElementById:id)",
messageSends: ["makeVisualizationType:at:", "chartType", "getElementById:"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
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
source: "makeOptions\x0a\x09\x22Abstract method - return option, a Dictionary object, for a Google Chart.\x22\x0a   ^\x09 self subclassresponsibility",
messageSends: ["subclassresponsibility"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "makeVisualizationType:at:",
category: 'rendering',
fn: function (type,element){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(google)._visualization())._at_(type))._newValue_(element);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeVisualizationType:at:",{type:type,element:element}, smalltalk.GoogleChart)})},
args: ["type", "element"],
source: "makeVisualizationType:type at: element\x0a\x09\x22build the visualization of the type at an element.\x22\x0a\x09^(google visualization at:type) newValue:element",
messageSends: ["newValue:", "at:", "visualization"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
source: "renderOn: html\x0a\x09\x22Render the placeholder div for the chart.\x22\x0a\x09html \x0a    \x09div id:self chartId;\x0a        \x09with:['Waiting to load']",
messageSends: ["id:", "chartId", "div", "with:"],
referencedClasses: []
}),
smalltalk.GoogleChart);


smalltalk.addMethod(
smalltalk.method({
selector: "chartId:",
category: 'not yet classified',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._chartId_(id);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartId:",{id:id}, smalltalk.GoogleChart.klass)})},
args: ["id"],
source: "chartId: id\x0a\x09\x22Create a GoogleChart at id\x22\x0a\x09^self new chartId:id;yourself",
messageSends: ["chartId:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.GoogleChart.klass);


smalltalk.addClass('GoogleVisualization', smalltalk.Widget, ['basicData'], 'GoogleCharts');


