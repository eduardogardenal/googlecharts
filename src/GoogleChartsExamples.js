define("google-charts-example/GoogleChartsExamples", ["amber/boot", "google-charts-example/GoogleCharts", "amber_core/Web"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('GoogleChartsExamples');
smalltalk.packages["GoogleChartsExamples"].transport = {"type":"amd","amdNamespace":"google-charts-example"};

smalltalk.addClass('AreaChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.AreaChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("AreaChart");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.AreaChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:  'AreaChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.AreaChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},globals.AreaChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
globals.AreaChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["title","Company Performance","hAxis",globals.HashedCollection._newFromPairs_(["title","Year","titleTextStyle",globals.HashedCollection._newFromPairs_(["color","red"])])]);
return $1;
},
args: [],
source: "makeOptions\x0a\x09^#{\x0a\x09\x09'title' -> 'Company Performance' .\x0a\x09\x09'hAxis' -> #{  'title' -> 'Year' .  'titleTextStyle' -> #{ 'color' -> 'red'}}\x0a\x09}",
messageSends: [],
referencedClasses: []
}),
globals.AreaChartExample);



smalltalk.addClass('BarChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.BarChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("BarChart");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.BarChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'BarChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.BarChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},globals.BarChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable:\x0a    { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
globals.BarChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["title","Company Performance","vAxis",globals.HashedCollection._newFromPairs_(["title","Year","titleTextStyle",globals.HashedCollection._newFromPairs_(["color","red"])])]);
return $1;
},
args: [],
source: "makeOptions\x0a\x09^#{\x0a    'title' -> 'Company Performance' .\x0a    'vAxis' -> #{ 'title' -> 'Year' .  'titleTextStyle' -> #{ 'color' -> 'red'}}\x0a    }",
messageSends: [],
referencedClasses: []
}),
globals.BarChartExample);



smalltalk.addClass('CandlestickChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.CandlestickChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("CandlestickChart");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.CandlestickChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'CandlestickChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.CandlestickChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_firstRowAsData_([["Mon",(20),(28),(38),(45)],["Tue",(31),(38),(55),(66)],["Wed",(50),(55),(77),(80)],["Thu",(77),(77),(66),(50)],["Fri",(68),(66),(22),(15)]],true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},globals.CandlestickChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable:  { \x0a          { 'Mon' .  20 .  28 .  38 .  45 } . \x0a          { 'Tue' .  31 .  38 .  55 .  66 } . \x0a          { 'Wed' .  50 .  55 .  77 .  80 } . \x0a          { 'Thu' .  77 .  77 .  66 .  50 } . \x0a          { 'Fri' .  68 .  66 .  22 .  15 }\x0a         }\x0a    firstRowAsData: true",
messageSends: ["arrayToDataTable:firstRowAsData:"],
referencedClasses: []
}),
globals.CandlestickChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["legend","none"]);
return $1;
},
args: [],
source: "makeOptions\x0a\x09^#{ 'legend' -> 'none' }",
messageSends: [],
referencedClasses: []
}),
globals.CandlestickChartExample);



smalltalk.addClass('ChartButton', globals.Widget, ['element', 'clickBlock', 'text'], 'GoogleChartsExamples');
globals.ChartButton.comment="A ChartButton is a Widget that renders a button with a click action. I have a text to show to the user and a clickBlock to perform for the user.";
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
protocol: 'startup',
fn: function (){
var self=this;
var button;
return smalltalk.withContext(function($ctx1) { 
button=_st("#".__comma(self._element()))._asJQuery();
_st(button)._click_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activate",{button:button},globals.ChartButton)})},
args: [],
source: "activate\x0a\x09\x22install a click hander for the button\x22\x0a\x09|button|\x0a\x09button := ('#' , self element) asJQuery.\x0a    button click:[self clickBlock value]",
messageSends: ["asJQuery", ",", "element", "click:", "value", "clickBlock"],
referencedClasses: []
}),
globals.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "clickBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@clickBlock"];
return $1;
},
args: [],
source: "clickBlock\x0a\x09^clickBlock",
messageSends: [],
referencedClasses: []
}),
globals.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "clickBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@clickBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "clickBlock: aBlock\x0a\x09clickBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@element"];
return $1;
},
args: [],
source: "element\x0a\x09^element",
messageSends: [],
referencedClasses: []
}),
globals.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@element"]=aString;
return self},
args: ["aString"],
source: "element: aString\x0a\x09element := aString",
messageSends: [],
referencedClasses: []
}),
globals.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._with_(self._text());
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.ChartButton)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Render the button with text and click handler\x22\x0a\x09html\x0a    \x09button\x0a        \x09with:self text;\x0a            onClick:[self clickBlock value]",
messageSends: ["with:", "button", "text", "onClick:", "value", "clickBlock"],
referencedClasses: []
}),
globals.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@text"];
if(($receiver = $2) == null || $receiver.isNil){
self["@text"]="";
$1=self["@text"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},globals.ChartButton)})},
args: [],
source: "text\x0a\x09^text ifNil:[text := '']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@text"]=aString;
return self},
args: ["aString"],
source: "text: aString\x0a\x09text := aString",
messageSends: [],
referencedClasses: []
}),
globals.ChartButton);


smalltalk.addMethod(
smalltalk.method({
selector: "element:clickBlock:",
protocol: 'not yet classified',
fn: function (element,clickBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._element_(element);
_st($2)._clickBlock_(clickBlock);
_st($2)._activate();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"element:clickBlock:",{element:element,clickBlock:clickBlock},globals.ChartButton.klass)})},
args: ["element", "clickBlock"],
source: "element: element clickBlock: clickBlock\x0a\x09\x22Return new ChartButton with a element and clickBlock\x22\x0a\x09^self new element: element; clickBlock: clickBlock; activate;yourself",
messageSends: ["element:", "new", "clickBlock:", "activate", "yourself"],
referencedClasses: []
}),
globals.ChartButton.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "popUpChart:atDom:",
protocol: 'not yet classified',
fn: function (chart,element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._element_clickBlock_(element,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(chart)._drawChart();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popUpChart:atDom:",{chart:chart,element:element},globals.ChartButton.klass)})},
args: ["chart", "element"],
source: "popUpChart: chart atDom: element\x0a\x09\x22Make the chart to draw on click of the ChartButton\x22\x0a    ^self element: element clickBlock:[chart drawChart]",
messageSends: ["element:clickBlock:", "drawChart"],
referencedClasses: []
}),
globals.ChartButton.klass);


smalltalk.addClass('ColumnChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ColumnChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("ColumnChart");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ColumnChartExample)})},
args: [],
source: "initialize\x0a    super initialize.\x0a    self chartType: 'ColumnChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.ColumnChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},globals.ColumnChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
globals.ColumnChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["title","Company Performance","hAxis",globals.HashedCollection._newFromPairs_(["title","Year","titleTextStyle",globals.HashedCollection._newFromPairs_(["color","red"])])]);
return $1;
},
args: [],
source: "makeOptions\x0a\x0a\x09^#{\x0a\x09\x09'title' -> 'Company Performance' .\x0a\x09\x09'hAxis' -> #{ 'title' -> 'Year' . 'titleTextStyle' -> #{ 'color' ->  'red'}}\x0a\x09}",
messageSends: [],
referencedClasses: []
}),
globals.ColumnChartExample);



smalltalk.addClass('ComboChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ComboChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("ComboChart");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ComboChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'ComboChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.ComboChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Month","Bolivia","Ecuador","Madagascar","Papua New Guinea","Rwanda","Average"],["2004/05",(165),(938),(522),(998),(450),(614.6)],["2005/06",(135),(1120),(599),(1268),(288),(682)],["2006/07",(157),(1167),(587),(807),(397),(623)],["2007/08",(139),(1110),(615),(968),(215),(609.4)],["2008/09",(136),(691),(629),(1026),(366),(569.6)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},globals.ComboChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable:\x0a\x09{ \x0a          { 'Month' .  'Bolivia' .  'Ecuador' .  'Madagascar' .  'Papua New Guinea' .  'Rwanda' .  'Average' } . \x0a          { '2004/05' .   165 .       938 .          522 .              998 .            450 .       614.6 } . \x0a          { '2005/06' .   135 .       1120 .         599 .              1268 .           288 .       682 } . \x0a          { '2006/07' .   157 .       1167 .         587 .              807 .            397 .       623 } . \x0a          { '2007/08' .   139 .       1110 .         615 .              968 .            215 .       609.4 } . \x0a          { '2008/09' .   136 .       691 .          629 .              1026 .           366 .       569.6 }\x0a         }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
globals.ComboChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["title","Monthly Coffee Production by Country","vAxis",globals.HashedCollection._newFromPairs_(["title","Cups"]),"hAxis",globals.HashedCollection._newFromPairs_(["title","Month"]),"seriesType","bars","series",globals.HashedCollection._newFromPairs_([(5),globals.HashedCollection._newFromPairs_(["type","line"])])]);
return $1;
},
args: [],
source: "makeOptions\x0a\x09^ #{\x0a          'title'->  'Monthly Coffee Production by Country'.\x0a          'vAxis' -> #{'title' -> 'Cups' } .\x0a          'hAxis' ->#{'title' -> 'Month' } .\x0a          'seriesType' -> 'bars' .\x0a          'series' -> #{ 5 -> #{ 'type' -> 'line' }}\x0a          }",
messageSends: [],
referencedClasses: []
}),
globals.ComboChartExample);



smalltalk.addClass('ControlChartApp', globals.ChartApp, ['testChart', 'wrapper'], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ControlChartApp.superclass.fn.prototype._begin.apply(_st(self), []));
$ctx1.supercall = false;
self._appendToJQuery_("body"._asJQuery());
self._buildTestWrapperChart_(self._testChart());
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},globals.ControlChartApp)})},
args: [],
source: "begin\x0a\x09super begin.\x0a\x09self appendToJQuery: 'body' asJQuery.\x0a\x09self buildTestWrapperChart: self testChart.",
messageSends: ["begin", "appendToJQuery:", "asJQuery", "buildTestWrapperChart:", "testChart"],
referencedClasses: []
}),
globals.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "buildTestWrapperChart:",
protocol: 'not yet classified',
fn: function (id){
var self=this;
function $GCChartWrapper(){return globals.GCChartWrapper||(typeof GCChartWrapper=="undefined"?nil:GCChartWrapper)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._wrapper_(_st(_st($GCChartWrapper())._options_(globals.HashedCollection._newFromPairs_(["chartType","ColumnChart","dataTable",[["Germany","USA","Brazil","Canada","France","RU"],[(700),(300),(400),(500),(600),(800)]],"options",globals.HashedCollection._newFromPairs_(["title","Countries"]),"containerId",id])))._draw());
$1=self._yourself();
return self}, function($ctx1) {$ctx1.fill(self,"buildTestWrapperChart:",{id:id},globals.ControlChartApp)})},
args: ["id"],
source: "buildTestWrapperChart: id\x0aself wrapper:\x0a\x09(GCChartWrapper options:\x0a\x09\x09#{\x0a\x09\x09    'chartType' ->  'ColumnChart'.\x0a\x09\x09    'dataTable' -> {{'Germany'. 'USA'. 'Brazil'. 'Canada'. 'France'. 'RU'} .\x0a\x09\x09\x09\x09                {700 . 300 . 400 . 500 . 600 . 800}} .\x0a\x09\x09    'options' -> #{'title' -> 'Countries'} .\x0a\x09\x09    'containerId' -> id\x0a\x09\x09\x09}) \x0a  \x09\x09draw; yourself",
messageSends: ["wrapper:", "draw", "options:", "yourself"],
referencedClasses: ["GCChartWrapper"]
}),
globals.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h1_("Control Chart App");
self._renderBrowserButtonOn_(html);
_st(_st(html)._div())._id_(self._testChart());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.ControlChartApp)})},
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a\x09\x09h1:'Control Chart App'.\x0a\x09\x09self renderBrowserButtonOn: html.\x0a\x09\x09html\x0a\x09\x09\x09div id:self testChart.",
messageSends: ["h1:", "renderBrowserButtonOn:", "id:", "div", "testChart"],
referencedClasses: []
}),
globals.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "testChart",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@testChart"];
if(($receiver = $2) == null || $receiver.isNil){
self["@testChart"]=self._nextId();
$1=self["@testChart"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"testChart",{},globals.ControlChartApp)})},
args: [],
source: "testChart\x0a\x09^testChart ifNil:[testChart := self nextId]",
messageSends: ["ifNil:", "nextId"],
referencedClasses: []
}),
globals.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@wrapper"];
return $1;
},
args: [],
source: "wrapper\x0a\x09^wrapper",
messageSends: [],
referencedClasses: []
}),
globals.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper:",
protocol: 'not yet classified',
fn: function (anObject){
var self=this;
self["@wrapper"]=anObject;
return self},
args: ["anObject"],
source: "wrapper: anObject\x0a\x09wrapper := anObject",
messageSends: [],
referencedClasses: []
}),
globals.ControlChartApp);


smalltalk.addMethod(
smalltalk.method({
selector: "neededVisualizationPackages",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=($ctx1.supercall = true, globals.ControlChartApp.klass.superclass.fn.prototype._neededVisualizationPackages.apply(_st(self), []));
$ctx1.supercall = false;
$1=_st($2)._addAll_(["controls"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{},globals.ControlChartApp.klass)})},
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x0aSubclasses should:\x22\x0a\x09\x09^super  neededVisualizationPackages addAll: {'controls'}",
messageSends: ["addAll:", "neededVisualizationPackages"],
referencedClasses: []
}),
globals.ControlChartApp.klass);


smalltalk.addClass('GaugeChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.GaugeChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("Gauge");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.GaugeChartExample)})},
args: [],
source: "initialize\x0a\x09\x22 Create a Guage with the chartId that identifies the chart graphic placement and the chartType to be created at that id.\x22\x0a    super initialize.\x0a    self chartType:'Gauge'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.GaugeChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Label","Value"],["Memory",(80)],["CPU",(55)],["Network",(68)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},globals.GaugeChartExample)})},
args: [],
source: "makeData\x0a\x22Example Gauge Data\x22\x0a  ^ self arrayToDataTable: { {'Label'.'Value'}.\x0a    \x09\x09\x09\x09\x09{'Memory' . 80}.\x0a                        {'CPU' . 55}.\x0a                        {'Network' . 68}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
globals.GaugeChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["width",(400),"heigth",(120),"redFrom",(90),"redTo",(100),"yellowFrom",(75),"yellowTo",(90),"minorTicks",(5)]);
return $1;
},
args: [],
source: "makeOptions\x0a\x22Example Gauge options\x22\x0a   ^#{'width' -> 400. 'heigth'->120.\x0a   'redFrom' -> 90.'redTo' ->100.\x0a   'yellowFrom' -> 75.'yellowTo' ->90.\x0a   'minorTicks' ->5}",
messageSends: [],
referencedClasses: []
}),
globals.GaugeChartExample);



smalltalk.addClass('GeoChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.GeoChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("GeoChart");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.GeoChartExample)})},
args: [],
source: "initialize\x0a\x09\x22 Create a Geo Chart\x22\x0a    super initialize.\x0a    self chartType:'GeoChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.GeoChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["City","Population","Area"],["Rome",(2761477),(1285.31)],["Milan",(1324110),(181.76)],["Naples",(959574),(117.27)],["Turin",(907563),(130.17)],["Palermo",(655875),(158.9)],["Genoa",(607906),(243.6)],["Bologna",(380181),(140.7)],["Florence",(371282),(102.41)],["Fiumicino",(67370),(213.44)],["Anzio",(52192),(43.43)],["Ciampino",(38262),(11)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},globals.GeoChartExample)})},
args: [],
source: "makeData\x0a\x22Example Geo Data\x22\x0a  ^ self arrayToDataTable: {\x0a{'City'.   'Population' . 'Area'}.\x0a        {'Rome'.      2761477 .    1285.31}.\x0a        {'Milan'.     1324110 .    181.76}.\x0a        {'Naples'.    959574 .    117.27}.\x0a        {'Turin'.     907563 .     130.17}.\x0a        {'Palermo'.   655875 .     158.9}.\x0a        {'Genoa'.     607906 .   243.60}.\x0a        {'Bologna'.   380181 .     140.7}.\x0a        {'Florence'.  371282 .    102.41}.\x0a        {'Fiumicino'. 67370 .      213.44}.\x0a        {'Anzio'.     52192 .      43.43}.\x0a        {'Ciampino'.  38262 .      11} \x0a        }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
globals.GeoChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["region","IT","displayMode","markers","colorAxis",globals.HashedCollection._newFromPairs_(["colors",["green","blue"]])]);
return $1;
},
args: [],
source: "makeOptions\x0a\x22Example Geo Options\x22\x0a\x0a   ^#{\x0a        'region' -> 'IT'.\x0a        'displayMode' -> 'markers'.\x0a        'colorAxis' -> #{'colors'-> {'green'.'blue'}}\x0a      }",
messageSends: [],
referencedClasses: []
}),
globals.GeoChartExample);



smalltalk.addClass('IndexChartApp', globals.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
protocol: 'not yet classified',
fn: function (){
var self=this;
var pie,id;
function $PieChartExample(){return globals.PieChartExample||(typeof PieChartExample=="undefined"?nil:PieChartExample)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5,$6,$7,$8;
$1="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
self._appendToJQuery_($1);
$ctx1.sendIdx["appendToJQuery:"]=1;
$3=_st($PieChartExample())._new();
id=self._nextId();
$4=id;
pie=_st($3)._chartId_($4);
$2=pie;
$5="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($2)._appendToJQuery_($5);
$6=_st("#".__comma(id))._asJQuery();
_st($6)._width_((800));
$7=_st($6)._height_((500));
_st(pie)._drawChart();
$8=($ctx1.supercall = true, globals.IndexChartApp.superclass.fn.prototype._begin.apply(_st(self), []));
$ctx1.supercall = false;
return $8;
}, function($ctx1) {$ctx1.fill(self,"begin",{pie:pie,id:id},globals.IndexChartApp)})},
args: [],
source: "begin\x0a\x09\x22Start the executiong of the ExampleChartApp by connecting each button/graphic pair\x22\x0a     |pie id|\x0a    self appendToJQuery:'body' asJQuery.\x0a    (pie := PieChartExample new chartId:(id := self nextId)) appendToJQuery: 'body' asJQuery.\x0a  \x09( '#' , id ) asJQuery width:800;height:500.\x0a    pie drawChart.\x0a    ^super begin",
messageSends: ["appendToJQuery:", "asJQuery", "chartId:", "new", "nextId", "width:", ",", "height:", "drawChart", "begin"],
referencedClasses: ["PieChartExample"]
}),
globals.IndexChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._h1())._with_("Google Charts");
$ctx1.sendIdx["with:"]=1;
self._renderBrowserButtonOn_(html);
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderLink_content_on_("popcharts.html","Try the Pop Charts!",html);
return _st(html)._with_(" example.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.IndexChartApp)})},
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a    \x09h1 with:'Google Charts'.\x0a\x09self renderBrowserButtonOn: html.\x0a\x09html div with:[\x0a\x09\x09self renderLink: 'popcharts.html' content:'Try the Pop Charts!' on: html.\x0a\x09 \x09html with:' example.'].",
messageSends: ["with:", "h1", "renderBrowserButtonOn:", "div", "renderLink:content:on:"],
referencedClasses: []
}),
globals.IndexChartApp);


smalltalk.addMethod(
smalltalk.method({
selector: "neededVisualizationPackages",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=["corechart"];
return $1;
},
args: [],
source: "neededVisualizationPackages\x0a\x22This App only needs a corechart package.\x22\x0a\x09^{'corechart'}",
messageSends: [],
referencedClasses: []
}),
globals.IndexChartApp.klass);


smalltalk.addClass('LineChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.LineChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("LineChart");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.LineChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'LineChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.LineChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},globals.LineChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
globals.LineChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["title","Company Performance"]);
return $1;
},
args: [],
source: "makeOptions\x0a\x09^#{  'title' -> 'Company Performance' }",
messageSends: [],
referencedClasses: []
}),
globals.LineChartExample);



smalltalk.addClass('PieChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.PieChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("PieChart");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.PieChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:'PieChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.PieChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Task","Hours per Day"],["Work",(11)],["Eat",(2)],["Commute",(2)],["Watch TV",(2)],["Snooze",(7)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},globals.PieChartExample)})},
args: [],
source: "makeData\x0a\x09\x22return a DataTable of example Pie Chart data\x22\x0a\x0a  ^ self arrayToDataTable: { {'Task'.'Hours per Day'}.\x0a    \x09\x09\x09\x09\x09{'Work' . 11}.\x0a                        {'Eat'.2}.\x0a                        {'Commute'.2}.\x0a                        {'Watch TV'.2}.\x0a                        {'Snooze'.7}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
globals.PieChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["title","My Daily Activities"]);
return $1;
},
args: [],
source: "makeOptions\x0a\x09\x22Return a Dictionary of the options in this case only a title\x22\x0a\x09^#{'title' -> 'My Daily Activities'}",
messageSends: [],
referencedClasses: []
}),
globals.PieChartExample);



smalltalk.addClass('PopupChartApp', globals.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "addButton:forChart:",
protocol: 'not yet classified',
fn: function (text,chartClass){
var self=this;
var id,chart;
function $ChartButton(){return globals.ChartButton||(typeof ChartButton=="undefined"?nil:ChartButton)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$5,$3;
id=self._nextId();
chart=_st(chartClass)._chartId_(id);
$2=chart;
$1=_st($ChartButton())._popUpChart_atDom_($2,id);
_st($1)._text_(text);
$4=$1;
$5="body"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3=_st($4)._appendToJQuery_($5);
$ctx1.sendIdx["appendToJQuery:"]=1;
_st(chart)._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"addButton:forChart:",{text:text,chartClass:chartClass,id:id,chart:chart},globals.PopupChartApp)})},
args: ["text", "chartClass"],
source: "addButton: text  forChart: chartClass\x0a\x09\x22Add a popup button and chart.\x22\x0a    |id chart|\x0a    id := self nextId.\x0a    ( ChartButton popUpChart:(chart := chartClass chartId:id) atDom:id) text:text;appendToJQuery: 'body' asJQuery.\x0a    chart appendToJQuery: 'body' asJQuery",
messageSends: ["nextId", "text:", "popUpChart:atDom:", "chartId:", "appendToJQuery:", "asJQuery"],
referencedClasses: ["ChartButton"]
}),
globals.PopupChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "begin",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $PieChartExample(){return globals.PieChartExample||(typeof PieChartExample=="undefined"?nil:PieChartExample)}
function $ScatterChartExample(){return globals.ScatterChartExample||(typeof ScatterChartExample=="undefined"?nil:ScatterChartExample)}
function $GaugeChartExample(){return globals.GaugeChartExample||(typeof GaugeChartExample=="undefined"?nil:GaugeChartExample)}
function $GeoChartExample(){return globals.GeoChartExample||(typeof GeoChartExample=="undefined"?nil:GeoChartExample)}
function $TableChartExample(){return globals.TableChartExample||(typeof TableChartExample=="undefined"?nil:TableChartExample)}
function $TreeMapChartExample(){return globals.TreeMapChartExample||(typeof TreeMapChartExample=="undefined"?nil:TreeMapChartExample)}
function $ComboChartExample(){return globals.ComboChartExample||(typeof ComboChartExample=="undefined"?nil:ComboChartExample)}
function $LineChartExample(){return globals.LineChartExample||(typeof LineChartExample=="undefined"?nil:LineChartExample)}
function $BarChartExample(){return globals.BarChartExample||(typeof BarChartExample=="undefined"?nil:BarChartExample)}
function $ColumnChartExample(){return globals.ColumnChartExample||(typeof ColumnChartExample=="undefined"?nil:ColumnChartExample)}
function $AreaChartExample(){return globals.AreaChartExample||(typeof AreaChartExample=="undefined"?nil:AreaChartExample)}
function $CandlestickChartExample(){return globals.CandlestickChartExample||(typeof CandlestickChartExample=="undefined"?nil:CandlestickChartExample)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._appendToJQuery_("body"._asJQuery());
self._addButton_forChart_("Pop PieChart",$PieChartExample());
$ctx1.sendIdx["addButton:forChart:"]=1;
self._addButton_forChart_("Pop ScatterChart",$ScatterChartExample());
$ctx1.sendIdx["addButton:forChart:"]=2;
self._addButton_forChart_("Pop GaugeChart",$GaugeChartExample());
$ctx1.sendIdx["addButton:forChart:"]=3;
self._addButton_forChart_("Pop GeoChart",$GeoChartExample());
$ctx1.sendIdx["addButton:forChart:"]=4;
self._addButton_forChart_("Pop TableChart",$TableChartExample());
$ctx1.sendIdx["addButton:forChart:"]=5;
self._addButton_forChart_("Pop TreeMapChart",$TreeMapChartExample());
$ctx1.sendIdx["addButton:forChart:"]=6;
self._addButton_forChart_("Pop ComboChart",$ComboChartExample());
$ctx1.sendIdx["addButton:forChart:"]=7;
self._addButton_forChart_("Pop LineChart",$LineChartExample());
$ctx1.sendIdx["addButton:forChart:"]=8;
self._addButton_forChart_("Pop BarChart",$BarChartExample());
$ctx1.sendIdx["addButton:forChart:"]=9;
self._addButton_forChart_("Pop ColumnChart",$ColumnChartExample());
$ctx1.sendIdx["addButton:forChart:"]=10;
self._addButton_forChart_("Pop AreaChart",$AreaChartExample());
$ctx1.sendIdx["addButton:forChart:"]=11;
self._addButton_forChart_("Pop CandlestickChart",$CandlestickChartExample());
$1=($ctx1.supercall = true, globals.PopupChartApp.superclass.fn.prototype._begin.apply(_st(self), []));
$ctx1.supercall = false;
return $1;
}, function($ctx1) {$ctx1.fill(self,"begin",{},globals.PopupChartApp)})},
args: [],
source: "begin\x0a\x09self appendToJQuery: 'body' asJQuery.\x0a    self addButton:'Pop PieChart' forChart:PieChartExample.\x0a    self addButton:'Pop ScatterChart' forChart:ScatterChartExample.\x0a\x09self addButton:'Pop GaugeChart' forChart:GaugeChartExample.\x0a\x09self addButton:'Pop GeoChart' forChart:GeoChartExample.\x0a    self addButton:'Pop TableChart' forChart:TableChartExample.\x0a\x09self addButton:'Pop TreeMapChart' forChart:TreeMapChartExample.\x0a\x09self addButton:'Pop ComboChart' forChart:ComboChartExample.\x0a\x09self addButton:'Pop LineChart' forChart:LineChartExample.\x0a\x09self addButton:'Pop BarChart' forChart:BarChartExample.\x0a\x09self addButton:'Pop ColumnChart' forChart:ColumnChartExample.\x0a\x09self addButton:'Pop AreaChart' forChart:AreaChartExample.\x0a\x09self addButton:'Pop CandlestickChart' forChart:CandlestickChartExample.\x0a    ^super begin",
messageSends: ["appendToJQuery:", "asJQuery", "addButton:forChart:", "begin"],
referencedClasses: ["PieChartExample", "ScatterChartExample", "GaugeChartExample", "GeoChartExample", "TableChartExample", "TreeMapChartExample", "ComboChartExample", "LineChartExample", "BarChartExample", "ColumnChartExample", "AreaChartExample", "CandlestickChartExample"]
}),
globals.PopupChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._h1())._with_("Press a Button to Popup a Chart!");
self._renderBrowserButtonOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.PopupChartApp)})},
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a    \x09h1 with:'Press a Button to Popup a Chart!'.\x0a\x09self renderBrowserButtonOn: html",
messageSends: ["with:", "h1", "renderBrowserButtonOn:"],
referencedClasses: []
}),
globals.PopupChartApp);


smalltalk.addMethod(
smalltalk.method({
selector: "neededVisualizationPackages",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=["corechart","gauge","geochart","table","treemap"];
return $1;
},
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x22\x0a\x09^{'corechart'.'gauge'.'geochart'.'table'.'treemap'}",
messageSends: [],
referencedClasses: []
}),
globals.PopupChartApp.klass);


smalltalk.addClass('ScatterChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.ScatterChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("ScatterChart");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ScatterChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:'ScatterChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.ScatterChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Age","Weight"],[(8),(11)],[(4),(5.5)],[(11),(14)],[(4),(5)],[(3),(3)],[(6.5),(7)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},globals.ScatterChartExample)})},
args: [],
source: "makeData\x0a  \x22Return the example dataset\x22\x0a  ^ self arrayToDataTable: { \x0a  \x09\x09\x09\x09\x09\x09\x09{'Age'.'Weight'}.\x0a                            {8 . 11} . \x0a                            { 4 . 5.5} . \x0a                            { 11 . 14 } . \x0a                            { 4 . 5}. \x0a                            {3 . 3} . \x0a                            {6.5 . 7}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
globals.ScatterChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["title","Age vs. Weight comparison","hAxis",globals.HashedCollection._newFromPairs_(["title","Age","minValue",(0),"maxValue",(15)]),"vAxis",globals.HashedCollection._newFromPairs_(["title","Weight","minValue",(0),"maxValue",(15)]),"legend","none"]);
return $1;
},
args: [],
source: "makeOptions\x0a\x22options for example dataset\x22\x0a   ^#{\x0a          'title' ->'Age vs. Weight comparison'.\x0a          'hAxis' -> #{'title' -> 'Age'. 'minValue'-> 0. 'maxValue'-> 15}.\x0a          'vAxis'-> #{'title' ->'Weight'. 'minValue'-> 0. 'maxValue'-> 15}.\x0a          'legend' ->'none'\x0a        }",
messageSends: [],
referencedClasses: []
}),
globals.ScatterChartExample);



smalltalk.addClass('TableChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TableChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("Table");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TableChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self chartType:'Table'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.TableChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
var data;
function $DataTable(){return globals.DataTable||(typeof DataTable=="undefined"?nil:DataTable)}
return smalltalk.withContext(function($ctx1) { 
var $1;
data=_st($DataTable())._new();
_st(data)._addColumnType_name_("string","Name");
$ctx1.sendIdx["addColumnType:name:"]=1;
_st(data)._addColumnType_name_("number","Salary");
$ctx1.sendIdx["addColumnType:name:"]=2;
_st(data)._addColumnType_name_("boolean","Full Time Employee");
_st(data)._addRows_([["Mike",globals.HashedCollection._newFromPairs_(["v",(10000),"f","$10,000"]),true],["Jim",globals.HashedCollection._newFromPairs_(["v",(8000),"f","$8,000"]),false],["Alice",globals.HashedCollection._newFromPairs_(["v",(12500),"f","$12,500"]),true],["Bob",globals.HashedCollection._newFromPairs_(["v",(7000),"f","$7,000"]),true]]);
$1=_st(data)._data();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{data:data},globals.TableChartExample)})},
args: [],
source: "makeData\x0a\x09|data|\x0a    data := DataTable new.\x0a    data addColumnType: 'string' name: 'Name' .\x0a    data addColumnType: 'number' name: 'Salary'  .\x0a    data addColumnType: 'boolean' name: 'Full Time Employee'  .\x0a    data addRows: {\x0a          { 'Mike' .  #{ 'v' -> 10000 .  'f' -> '$10,000' } . true } .\x0a          { 'Jim' .   #{ 'v' -> 8000 .   'f' -> '$8,000'} .  false } .\x0a          { 'Alice' . #{ 'v' -> 12500 . 'f' -> '$12,500'} . true } .\x0a          {'Bob' .   #{ 'v' -> 7000 .  'f' -> '$7,000'} .  true }\x0a        }.\x0a        ^data data",
messageSends: ["new", "addColumnType:name:", "addRows:", "data"],
referencedClasses: ["DataTable"]
}),
globals.TableChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["showRowNumber",true]);
return $1;
},
args: [],
source: "makeOptions\x0a\x09^ #{'showRowNumber' -> true}",
messageSends: [],
referencedClasses: []
}),
globals.TableChartExample);



smalltalk.addClass('TreeMapChartExample', globals.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.TreeMapChartExample.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self._chartType_("TreeMap");
return self;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TreeMapChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self chartType: 'TreeMap'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
globals.TreeMapChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Location","Parent","Market trade volume (size)","Market increase/decrease (color)"],["Global",null,(0),(0)],["America","Global",(0),(0)],["Europe","Global",(0),(0)],["Asia","Global",(0),(0)],["Australia","Global",(0),(0)],["Africa","Global",(0),(0)],["Brazil","America",(11),(10)],["USA","America",(52),(31)],["Mexico","America",(24),(12)],["Canada","America",(16),(-23)],["France","Europe",(42),(-11)],["Germany","Europe",(31),(-2)],["Sweden","Europe",(22),(-13)],["Italy","Europe",(17),(4)],["UK","Europe",(21),(-5)],["China","Asia",(36),(4)],["Japan","Asia",(20),(-12)],["India","Asia",(40),(63)],["Laos","Asia",(4),(34)],["Mongolia","Asia",(1),(-5)],["Israel","Asia",(12),(24)],["Iran","Asia",(18),(13)],["Pakistan","Asia",(11),(-52)],["Egypt","Africa",(21),(0)],["S. Africa","Africa",(30),(43)],["Sudan","Africa",(12),(2)],["Congo","Africa",(10),(12)],["Zair","Africa",(8),(10)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},globals.TreeMapChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: {\x0a    \x0a     {'Location' .  'Parent' . 'Market trade volume (size)' . 'Market increase/decrease (color)'} .\x0a          { 'Global' .     null .                  0 .                                0} .\x0a          { 'America' .    'Global' .              0 .                                0 } . \x0a          { 'Europe' .     'Global' .              0 .                                0 } . \x0a          { 'Asia' .       'Global' .              0 .                                0 } . \x0a          { 'Australia' .  'Global' .              0 .                                0 } . \x0a          { 'Africa' .     'Global' .              0 .                                0 } . \x0a          { 'Brazil' .     'America' .             11 .                               10 } . \x0a          { 'USA' .        'America' .             52 .                               31 } . \x0a          { 'Mexico' .     'America' .             24 .                               12 } . \x0a          { 'Canada' .     'America' .             16 .                               -23 } . \x0a          { 'France' .     'Europe' .              42 .                               -11 } . \x0a          { 'Germany' .    'Europe' .              31 .                               -2 } . \x0a          { 'Sweden' .     'Europe' .              22 .                               -13 } . \x0a          { 'Italy' .      'Europe' .              17 .                               4 } . \x0a          { 'UK' .         'Europe' .              21 .                               -5 } . \x0a          { 'China' .      'Asia' .                36 .                               4 } . \x0a          { 'Japan' .      'Asia' .                20 .                               -12 } . \x0a          { 'India' .      'Asia' .                40 .                               63 } . \x0a          { 'Laos' .       'Asia' .                4 .                                34 } . \x0a          { 'Mongolia' .   'Asia' .                1 .                                -5 } . \x0a          { 'Israel' .     'Asia' .                12 .                               24 } . \x0a          { 'Iran' .       'Asia' .                18 .                               13 } . \x0a          { 'Pakistan' .   'Asia' .                11 .                               -52 } . \x0a          { 'Egypt' .      'Africa' .              21 .                               0 } . \x0a          { 'S. Africa' .  'Africa' .              30 .                               43 } . \x0a          { 'Sudan' .      'Africa' .              12 .                               2 } . \x0a          { 'Congo' .      'Africa' .              10 .                               12 } . \x0a          { 'Zair' .       'Africa' .              8 .                                10 }\x0a    }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
globals.TreeMapChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["minColor","#f00","midColor","#ddd","maxColor","#0d0","headerHeight",(15),"fontColor","black","showScale",true]);
return $1;
},
args: [],
source: "makeOptions\x0a\x09^#{  'minColor' -> '#f00' .\x0a          'midColor' -> '#ddd' .\x0a          'maxColor' -> '#0d0' .\x0a          'headerHeight' -> 15 .\x0a          'fontColor' -> 'black' .\x0a          'showScale' ->  true}",
messageSends: [],
referencedClasses: []
}),
globals.TreeMapChartExample);


});
