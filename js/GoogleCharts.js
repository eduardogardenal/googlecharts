(function(smalltalk,nil,_st){
smalltalk.addPackage('GoogleCharts');

smalltalk.addClass('ChartApp', smalltalk.Widget, ['nextId'], 'GoogleCharts');
smalltalk.ChartApp.comment="A ChartApp is a Widget which loads the google JSAPI and visualization API. \x0a\x09I coordinate all loading of Visualizaton packages. \x0a\x09My default renderOn: method is empty.\x0a\x09I can produce a series of unique string for the use as HTML element id.";
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'startup',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
return smalltalk.withContext(function($ctx1) { 
smalltalk.ChartApp.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@nextId"]=(1);
_st(self._class())._loadGoogleLoader_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._class())._loadVisualization_((function(){
return smalltalk.withContext(function($ctx3) {
return self._begin();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ChartApp)})},
args: [],
source: "initialize\x0a\x09\x22Load my external JS, start id sequence at 1.\x22\x0a    super initialize.\x0a    nextId := 1.\x0a    self class loadGoogleLoader:[ self class loadVisualization:[ self begin ]]",
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
return smalltalk.withContext(function($ctx1) { 
var $1;
rv="id".__comma(_st(self["@nextId"])._printString());
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
args: ["html"],
source: "renderBrowserButtonOn: html\x0a    html\x0a    \x09div\x0a    \x09\x09with:[ \x0a            \x09html button \x0a        \x09\x09\x09with:'Open IDE';\x0a            \x09\x09onClick:[amber loadHelios]].",
messageSends: ["with:", "button", "onClick:", "loadHelios", "div"],
referencedClasses: []
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
return smalltalk.withContext(function($ctx1) { 
$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});;
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
return smalltalk.withContext(function($ctx1) { 
self._loadVisualization_packages_(callback,self._neededVisualizationPackages());
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
return smalltalk.withContext(function($ctx1) { 
google.load("visualization","1",{"callback" : callback , "packages":packages});;
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
return smalltalk.withContext(function($ctx1) { 
var $1;
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
smalltalk.DataTable.comment="DataTable is a proxy object for Google Visualization DataTable objects. It's main purpuse is to create an amber API over those objects.";
smalltalk.addMethod(
smalltalk.method({
selector: "addColumnType:name:",
category: 'manipulation',
fn: function (aString,name){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
_st(self._data())._perform_withArguments_("addColumn:",_st($Array())._with_with_(aString,name));
return self}, function($ctx1) {$ctx1.fill(self,"addColumnType:name:",{aString:aString,name:name},smalltalk.DataTable)})},
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
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
_st(self._data())._perform_withArguments_("addRows:",_st($Array())._with_(array));
return self}, function($ctx1) {$ctx1.fill(self,"addRows:",{array:array},smalltalk.DataTable)})},
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
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@data"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@data"]=_st(_st(_st(google)._visualization())._DataTable())._new();
$1=self["@data"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"data",{},smalltalk.DataTable)})},
args: [],
source: "data\x0a\x09^data ifNil:[ data:= google visualization DataTable new]",
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
return smalltalk.withContext(function($ctx1) { 
self["@data"]=obj;
return self}, function($ctx1) {$ctx1.fill(self,"data:",{obj:obj},smalltalk.DataTable)})},
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
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._data_(data);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsDataTable:",{data:data},smalltalk.DataTable.klass)})},
args: ["data"],
source: "jsDataTable: data\x0a\x09\x22Build a DataTable proxy from an actual js DataTable object,\x22\x0a    ^self new data:data;yourself",
messageSends: ["data:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.DataTable.klass);


smalltalk.addClass('GoogleChart', smalltalk.Widget, ['gChart', 'chartId', 'chartType'], 'GoogleCharts');
smalltalk.GoogleChart.comment="A GoogleChart is an abstract Widget which encapsulates the creation and drawing a Google Visualizations. I render a div with the chartId for myself.\x0a\x0a    \x0a\x0aInstance Vars:\x0a\x09gChart which is the created visualization object.\x0a\x09chartType (PieChart, LineChart etc) which is the type of the Visualization that is created.\x0a\x09chartId which is the DOM id where the chart is placed.";
smalltalk.addMethod(
smalltalk.method({
selector: "arrayToDataTable:",
category: 'data table',
fn: function (array){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(google)._visualization())._arrayToDataTable_(array);
return $1;
}, function($ctx1) {$ctx1.fill(self,"arrayToDataTable:",{array:array},smalltalk.GoogleChart)})},
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
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(google)._visualization())._perform_withArguments_("arrayToDataTable:",_st($Array())._with_with_(array,aBool));
return $1;
}, function($ctx1) {$ctx1.fill(self,"arrayToDataTable:firstRowAsData:",{array:array,aBool:aBool},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@gChart"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@gChart"]=self._makeGChart_(self._chartId());
$1=self["@gChart"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"chart",{},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@chartId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartId",{},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
self["@chartId"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"chartId:",{aString:aString},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@chartType"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartType",{},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
self["@chartType"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"chartType:",{aString:aString},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
self._drawData_options_(self._makeData(),self._makeOptions());
return self}, function($ctx1) {$ctx1.fill(self,"drawChart",{},smalltalk.GoogleChart)})},
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
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
_st(self._chart())._perform_withArguments_("draw",_st($Array())._with_with_(data,options));
return self}, function($ctx1) {$ctx1.fill(self,"drawData:options:",{data:data,options:options},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(document)._getElementById_(id);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getElementById:",{id:id},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.GoogleChart.superclass.fn.prototype._initialize.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassresponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._makeVisualizationType_at_(self._chartType(),self._getElementById_(id));
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeGChart:",{id:id},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassresponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(google)._visualization())._at_(type))._newValue_(element);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeVisualizationType:at:",{type:type,element:element},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._id_(self._chartId());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return "Waiting to load";
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.GoogleChart)})},
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
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._chartId_(id);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"chartId:",{id:id},smalltalk.GoogleChart.klass)})},
args: ["id"],
source: "chartId: id\x0a\x09\x22Create a GoogleChart at id\x22\x0a\x09^self new chartId:id;yourself",
messageSends: ["chartId:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.GoogleChart.klass);

})(global_smalltalk,global_nil,global__st);
