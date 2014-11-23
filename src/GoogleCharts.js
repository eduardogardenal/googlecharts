define("amber-googlechartsexample/GoogleCharts", ["amber/boot", "amber_core/Web", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('GoogleCharts');
$core.packages["GoogleCharts"].transport = {"type":"amd","amdNamespace":"amber-googlechartsexample"};

$core.addClass('ChartApp', $globals.Widget, ['nextId'], 'GoogleCharts');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ChartApp.comment="A ChartApp is a Widget which loads the google JSAPI and visualization API. \x0a\x09I coordinate all loading of Visualizaton packages. \x0a\x09My default renderOn: method is empty.\x0a\x09I can produce a series of unique string for the use as HTML element id.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "begin",
protocol: 'startup',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "begin\x0a\x09\x22Start the executiong of the ChartApp.\x22\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChartApp);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ChartApp.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@nextId"]=(1);
$1=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._loadGoogleLoader_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._class())._loadVisualization_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._begin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22Load my external JS, start id sequence at 1.\x22\x0a    super initialize.\x0a    nextId := 1.\x0a    self class loadGoogleLoader:[ self class loadVisualization:[ self begin ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "loadGoogleLoader:", "class", "loadVisualization:", "begin"]
}),
$globals.ChartApp);

$core.addMethod(
$core.method({
selector: "nextId",
protocol: 'accessing',
fn: function (){
var self=this;
var rv;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
rv="id".__comma($recv(self["@nextId"])._printString());
self["@nextId"]=$recv(self["@nextId"]).__plus((1));
$1=rv;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextId",{rv:rv},$globals.ChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextId\x0a\x09\x22Return the next unique id in the sequence.\x22\x0a\x09|rv|\x0a    rv := 'id' , (nextId printString).\x0a    nextId := nextId + 1.\x0a    ^rv",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "printString", "+"]
}),
$globals.ChartApp);

$core.addMethod(
$core.method({
selector: "renderBrowserButtonOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Browser(){return $globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv($recv(html)._div())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._button();
$recv($1)._with_("Open IDE");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($Browser())._open();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBrowserButtonOn:",{html:html},$globals.ChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBrowserButtonOn: html\x0a    html\x0a    \x09div\x0a    \x09\x09with:[ \x0a            \x09html button \x0a        \x09\x09\x09with:'Open IDE';\x0a            \x09\x09onClick:[Browser open]].",
referencedClasses: ["Browser"],
//>>excludeEnd("ide");
messageSends: ["with:", "div", "button", "onClick:", "open"]
}),
$globals.ChartApp);

$core.addMethod(
$core.method({
selector: "renderIDEButtonOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv($recv(html)._div())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._button();
$recv($1)._with_("Open IDE");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._class())._startIDE();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderIDEButtonOn:",{html:html},$globals.ChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderIDEButtonOn: html\x0a    html\x0a    \x09div\x0a    \x09\x09with:[ \x0a            \x09html button \x0a        \x09\x09\x09with:'Open IDE';\x0a            \x09\x09onClick:[self  class startIDE]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "div", "button", "onClick:", "startIDE", "class"]
}),
$globals.ChartApp);

$core.addMethod(
$core.method({
selector: "renderLink:content:on:",
protocol: 'rendering',
fn: function (href,content,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._a();
$recv($1)._href_(href);
$2=$recv($1)._with_(content);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderLink:content:on:",{href:href,content:content,html:html},$globals.ChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["href", "content", "html"],
source: "renderLink: href content:content on: html\x0a\x0a\x09html a\x0a        href: href;\x0a        with: content",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["href:", "a", "with:"]
}),
$globals.ChartApp);


$core.addMethod(
$core.method({
selector: "loadGoogleLoader:",
protocol: 'loading',
fn: function (callback){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadGoogleLoader:",{callback:callback},$globals.ChartApp.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["callback"],
source: "loadGoogleLoader: callback\x0a\x09\x22Load the Google JSAPI,\x22\x0a\x09<$.ajax({url:\x22https://www.google.com/jsapi\x22,dataType:\x22script\x22,success:callback});>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChartApp.klass);

$core.addMethod(
$core.method({
selector: "loadVisualization:",
protocol: 'loading',
fn: function (callback){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._loadVisualization_packages_(callback,self._neededVisualizationPackages());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadVisualization:",{callback:callback},$globals.ChartApp.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["callback"],
source: "loadVisualization: callback\x0a\x09\x22Load the needed Visualization packages.\x22\x0a    self loadVisualization: callback packages: self neededVisualizationPackages",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["loadVisualization:packages:", "neededVisualizationPackages"]
}),
$globals.ChartApp.klass);

$core.addMethod(
$core.method({
selector: "loadVisualization:packages:",
protocol: 'loading',
fn: function (callback,packages){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
google.load("visualization","1",{"callback" : callback , "packages":packages});;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadVisualization:packages:",{callback:callback,packages:packages},$globals.ChartApp.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["callback", "packages"],
source: "loadVisualization: callback packages: packages\x0a\x09\x22JS method to load Visualization packages.\x22\x0a\x09<google.load(\x22visualization\x22,\x221\x22,{\x22callback\x22 : callback , \x22packages\x22:packages});>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChartApp.klass);

$core.addMethod(
$core.method({
selector: "neededVisualizationPackages",
protocol: 'startup',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x0aSubclasses should:\x0a\x09\x09^super  neededVisualizationPackages addAll: addToSet\x0a\x22\x0a        ^{}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChartApp.klass);

$core.addMethod(
$core.method({
selector: "startIDE",
protocol: 'loading',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
require(["amber-ide-starter-dialog"], function (dlg) { dlg.start(); });;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startIDE",{},$globals.ChartApp.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startIDE\x0a\x09<require([\x22amber-ide-starter-dialog\x22], function (dlg) { dlg.start(); });>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChartApp.klass);


$core.addClass('DataTable', $globals.Object, ['data'], 'GoogleCharts');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DataTable.comment="DataTable is a proxy object for Google Visualization DataTable objects. It's main purpuse is to create an amber API over those objects.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addColumnType:name:",
protocol: 'manipulation',
fn: function (aString,name){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._data())._perform_withArguments_("addColumn:",$recv($Array())._with_with_(aString,name));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addColumnType:name:",{aString:aString,name:name},$globals.DataTable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "name"],
source: "addColumnType: aString name: name\x0a\x09\x22Add a column to the DataTable.\x22\x0a\x09self data perform: #addColumn:  withArguments: (Array with: aString with: name)",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["perform:withArguments:", "data", "with:with:"]
}),
$globals.DataTable);

$core.addMethod(
$core.method({
selector: "addRows:",
protocol: 'manipulation',
fn: function (array){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._data())._perform_withArguments_("addRows:",$recv($Array())._with_(array));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addRows:",{array:array},$globals.DataTable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["array"],
source: "addRows: array\x0a\x09\x22Add rows to the DataTable.\x22\x0a   self data  perform: #addRows: withArguments: (Array with: array)",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["perform:withArguments:", "data", "with:"]
}),
$globals.DataTable);

$core.addMethod(
$core.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@data"];
if(($receiver = $2) == null || $receiver.isNil){
self["@data"]=$recv($recv($recv(google)._visualization())._DataTable())._new();
$1=self["@data"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"data",{},$globals.DataTable)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x09^data ifNil:[ data:= google visualization DataTable new]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new", "DataTable", "visualization"]
}),
$globals.DataTable);

$core.addMethod(
$core.method({
selector: "data:",
protocol: 'accessing',
fn: function (obj){
var self=this;
self["@data"]=obj;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["obj"],
source: "data: obj\x0a\x09data := obj",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DataTable);


$core.addMethod(
$core.method({
selector: "jsDataTable:",
protocol: 'not yet classified',
fn: function (data){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._data_(data);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"jsDataTable:",{data:data},$globals.DataTable.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["data"],
source: "jsDataTable: data\x0a\x09\x22Build a DataTable proxy from an actual js DataTable object,\x22\x0a    ^self new data:data;yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["data:", "new", "yourself"]
}),
$globals.DataTable.klass);


$core.addClass('GoogleChart', $globals.Widget, ['gChart', 'chartId', 'chartType'], 'GoogleCharts');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.GoogleChart.comment="A GoogleChart is an abstract Widget which encapsulates the creation and drawing a Google Visualizations. I render a div with the chartId for myself.\x0a\x0a    \x0a\x0aInstance Vars:\x0a\x09gChart which is the created visualization object.\x0a\x09chartType (PieChart, LineChart etc) which is the type of the Visualization that is created.\x0a\x09chartId which is the DOM id where the chart is placed.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "arrayToDataTable:",
protocol: 'data table',
fn: function (array){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(google)._visualization())._arrayToDataTable_(array);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arrayToDataTable:",{array:array},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["array"],
source: "arrayToDataTable: array\x0a\x09\x22Convert an array into a DataTable.\x22\x0a\x09^google visualization arrayToDataTable: array",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:", "visualization"]
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "arrayToDataTable:firstRowAsData:",
protocol: 'data table',
fn: function (array,aBool){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(google)._visualization())._perform_withArguments_("arrayToDataTable:",$recv($Array())._with_with_(array,aBool));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arrayToDataTable:firstRowAsData:",{array:array,aBool:aBool},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["array", "aBool"],
source: "arrayToDataTable: array firstRowAsData: aBool\x0a\x09\x22Convert an array into a DataTable while setting the firstRowAsData flag.\x22\x0a\x09^google visualization perform: #arrayToDataTable:  withArguments:(Array with:array with:aBool)",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["perform:withArguments:", "visualization", "with:with:"]
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "chart",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@gChart"];
if(($receiver = $2) == null || $receiver.isNil){
self["@gChart"]=self._makeGChart_(self._chartId());
$1=self["@gChart"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chart",{},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chart\x0a\x09\x22Return the gChart.\x22\x0a     ^gChart ifNil:[ gChart :=self makeGChart:self chartId]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "makeGChart:", "chartId"]
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "chartId",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@chartId"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chartId\x0a\x09^chartId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "chartId:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@chartId"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "chartId: aString\x0a\x09chartId := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "chartType",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@chartType"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chartType\x0a\x09^ chartType",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "chartType:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@chartType"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "chartType: aString\x0a\x09chartType := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "drawChart",
protocol: 'drawing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._drawData_options_(self._makeData(),self._makeOptions());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawChart",{},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawChart\x0a\x09\x22Draw the chart.\x22\x0a    self drawData: self makeData options: self makeOptions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawData:options:", "makeData", "makeOptions"]
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "drawData:options:",
protocol: 'drawing',
fn: function (data,options){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._chart())._perform_withArguments_("draw",$recv($Array())._with_with_(data,options));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawData:options:",{data:data,options:options},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["data", "options"],
source: "drawData: data options: options\x0a\x09\x22Draw the chart with data and options.\x22\x0a      self chart perform: #draw withArguments: (Array with:data with:options)",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["perform:withArguments:", "chart", "with:with:"]
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "getElementById:",
protocol: 'rendering',
fn: function (id){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(document)._getElementById_(id);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getElementById:",{id:id},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["id"],
source: "getElementById: id\x0a\x09\x22Find element by the id in the DOM.\x22\x0a    ^document getElementById: id\x0a\x09\x22return document.getElementById(id)>\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getElementById:"]
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.GoogleChart.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09^super initialize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'abstraction',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._subclassresponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x09\x22abstraction - return the data, as a DataTable, for a google chart.\x22\x0a  \x09 ^self subclassresponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassresponsibility"]
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "makeGChart:",
protocol: 'rendering',
fn: function (id){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._makeVisualizationType_at_(self._chartType(),self._getElementById_(id));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeGChart:",{id:id},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["id"],
source: "makeGChart: id\x0a\x09\x22Build a chart of a given type at a specific dom id.\x22\x0a    ^self makeVisualizationType: self chartType at: (self getElementById:id)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["makeVisualizationType:at:", "chartType", "getElementById:"]
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'abstraction',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._subclassresponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x09\x22Abstract method - return option, a Dictionary object, for a Google Chart.\x22\x0a   ^\x09 self subclassresponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassresponsibility"]
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "makeVisualizationType:at:",
protocol: 'rendering',
fn: function (type,element){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(google)._visualization())._at_(type))._newValue_(element);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeVisualizationType:at:",{type:type,element:element},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["type", "element"],
source: "makeVisualizationType:type at: element\x0a\x09\x22build the visualization of the type at an element.\x22\x0a\x09^(google visualization at:type) newValue:element",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newValue:", "at:", "visualization"]
}),
$globals.GoogleChart);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._id_(self._chartId());
$2=$recv($1)._with_((function(){
return "Waiting to load";

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.GoogleChart)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09\x22Render the placeholder div for the chart.\x22\x0a\x09html \x0a    \x09div id:self chartId;\x0a        \x09with:['Waiting to load']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "chartId", "with:"]
}),
$globals.GoogleChart);


$core.addMethod(
$core.method({
selector: "chartId:",
protocol: 'not yet classified',
fn: function (id){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._chartId_(id);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"chartId:",{id:id},$globals.GoogleChart.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["id"],
source: "chartId: id\x0a\x09\x22Create a GoogleChart at id\x22\x0a\x09^self new chartId:id;yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["chartId:", "new", "yourself"]
}),
$globals.GoogleChart.klass);

});
