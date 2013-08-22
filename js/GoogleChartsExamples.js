(function(smalltalk,nil,_st){
smalltalk.addPackage('GoogleChartsExamples');

smalltalk.addClass('AreaChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.AreaChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("AreaChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AreaChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:  'AreaChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.AreaChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.AreaChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.AreaChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Company Performance"),"hAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Year"),"titleTextStyle".__minus_gt(smalltalk.HashedCollection._from_(["color".__minus_gt("red")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.AreaChartExample)})},
args: [],
source: "makeOptions\x0a\x09^#{\x0a\x09\x09'title' -> 'Company Performance' .\x0a\x09\x09'hAxis' -> #{  'title' -> 'Year' .  'titleTextStyle' -> #{ 'color' -> 'red'}}\x0a\x09}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.AreaChartExample);



smalltalk.addClass('BarChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.BarChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("BarChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.BarChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'BarChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.BarChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.BarChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable:\x0a    { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.BarChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Company Performance"),"vAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Year"),"titleTextStyle".__minus_gt(smalltalk.HashedCollection._from_(["color".__minus_gt("red")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.BarChartExample)})},
args: [],
source: "makeOptions\x0a\x09^#{\x0a    'title' -> 'Company Performance' .\x0a    'vAxis' -> #{ 'title' -> 'Year' .  'titleTextStyle' -> #{ 'color' -> 'red'}}\x0a    }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.BarChartExample);



smalltalk.addClass('CandlestickChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.CandlestickChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("CandlestickChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CandlestickChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'CandlestickChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.CandlestickChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_firstRowAsData_([["Mon",(20),(28),(38),(45)],["Tue",(31),(38),(55),(66)],["Wed",(50),(55),(77),(80)],["Thu",(77),(77),(66),(50)],["Fri",(68),(66),(22),(15)]],true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.CandlestickChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable:  { \x0a          { 'Mon' .  20 .  28 .  38 .  45 } . \x0a          { 'Tue' .  31 .  38 .  55 .  66 } . \x0a          { 'Wed' .  50 .  55 .  77 .  80 } . \x0a          { 'Thu' .  77 .  77 .  66 .  50 } . \x0a          { 'Fri' .  68 .  66 .  22 .  15 }\x0a         }\x0a    firstRowAsData: true",
messageSends: ["arrayToDataTable:firstRowAsData:"],
referencedClasses: []
}),
smalltalk.CandlestickChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["legend".__minus_gt("none")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.CandlestickChartExample)})},
args: [],
source: "makeOptions\x0a\x09^#{ 'legend' -> 'none' }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.CandlestickChartExample);



smalltalk.addClass('ChartButton', smalltalk.Widget, ['element', 'clickBlock', 'text'], 'GoogleChartsExamples');
smalltalk.ChartButton.comment="A ChartButton is a Widget that renders a button with a click action. I have a text to show to the user and a clickBlock to perform for the user.";
smalltalk.addMethod(
smalltalk.method({
selector: "activate",
category: 'startup',
fn: function (){
var self=this;
var button;
return smalltalk.withContext(function($ctx1) { 
button=_st("#".__comma(self._element()))._asJQuery();
_st(button)._click_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activate",{button:button},smalltalk.ChartButton)})},
args: [],
source: "activate\x0a\x09\x22install a click hander for the button\x22\x0a\x09|button|\x0a\x09button := ('#' , self element) asJQuery.\x0a    button click:[self clickBlock value]",
messageSends: ["asJQuery", ",", "element", "click:", "value", "clickBlock"],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "clickBlock",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@clickBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"clickBlock",{},smalltalk.ChartButton)})},
args: [],
source: "clickBlock\x0a\x09^clickBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "clickBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@clickBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"clickBlock:",{aBlock:aBlock},smalltalk.ChartButton)})},
args: ["aBlock"],
source: "clickBlock: aBlock\x0a\x09clickBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.ChartButton)})},
args: [],
source: "element\x0a\x09^element",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{aString:aString},smalltalk.ChartButton)})},
args: ["aString"],
source: "element: aString\x0a\x09element := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._with_(self._text());
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.ChartButton)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Render the button with text and click handler\x22\x0a\x09html\x0a    \x09button\x0a        \x09with:self text;\x0a            onClick:[self clickBlock value]",
messageSends: ["with:", "text", "button", "onClick:", "value", "clickBlock"],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@text"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@text"]="";
$1=self["@text"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.ChartButton)})},
args: [],
source: "text\x0a\x09^text ifNil:[text := '']",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString},smalltalk.ChartButton)})},
args: ["aString"],
source: "text: aString\x0a\x09text := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);


smalltalk.addMethod(
smalltalk.method({
selector: "element:clickBlock:",
category: 'not yet classified',
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
}, function($ctx1) {$ctx1.fill(self,"element:clickBlock:",{element:element,clickBlock:clickBlock},smalltalk.ChartButton.klass)})},
args: ["element", "clickBlock"],
source: "element: element clickBlock: clickBlock\x0a\x09\x22Return new ChartButton with a element and clickBlock\x22\x0a\x09^self new element: element; clickBlock: clickBlock; activate;yourself",
messageSends: ["element:", "new", "clickBlock:", "activate", "yourself"],
referencedClasses: []
}),
smalltalk.ChartButton.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "popUpChart:atDom:",
category: 'not yet classified',
fn: function (chart,element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._element_clickBlock_(element,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(chart)._drawChart();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popUpChart:atDom:",{chart:chart,element:element},smalltalk.ChartButton.klass)})},
args: ["chart", "element"],
source: "popUpChart: chart atDom: element\x0a\x09\x22Make the chart to draw on click of the ChartButton\x22\x0a    ^self element: element clickBlock:[chart drawChart]",
messageSends: ["element:clickBlock:", "drawChart"],
referencedClasses: []
}),
smalltalk.ChartButton.klass);


smalltalk.addClass('ColumnChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.ColumnChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("ColumnChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ColumnChartExample)})},
args: [],
source: "initialize\x0a    super initialize.\x0a    self chartType: 'ColumnChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.ColumnChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.ColumnChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.ColumnChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Company Performance"),"hAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Year"),"titleTextStyle".__minus_gt(smalltalk.HashedCollection._from_(["color".__minus_gt("red")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.ColumnChartExample)})},
args: [],
source: "makeOptions\x0a\x0a\x09^#{\x0a\x09\x09'title' -> 'Company Performance' .\x0a\x09\x09'hAxis' -> #{ 'title' -> 'Year' . 'titleTextStyle' -> #{ 'color' ->  'red'}}\x0a\x09}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.ColumnChartExample);



smalltalk.addClass('ComboChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.ComboChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("ComboChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ComboChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'ComboChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.ComboChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Month","Bolivia","Ecuador","Madagascar","Papua New Guinea","Rwanda","Average"],["2004/05",(165),(938),(522),(998),(450),(614.6)],["2005/06",(135),(1120),(599),(1268),(288),(682)],["2006/07",(157),(1167),(587),(807),(397),(623)],["2007/08",(139),(1110),(615),(968),(215),(609.4)],["2008/09",(136),(691),(629),(1026),(366),(569.6)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.ComboChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable:\x0a\x09{ \x0a          { 'Month' .  'Bolivia' .  'Ecuador' .  'Madagascar' .  'Papua New Guinea' .  'Rwanda' .  'Average' } . \x0a          { '2004/05' .   165 .       938 .          522 .              998 .            450 .       614.6 } . \x0a          { '2005/06' .   135 .       1120 .         599 .              1268 .           288 .       682 } . \x0a          { '2006/07' .   157 .       1167 .         587 .              807 .            397 .       623 } . \x0a          { '2007/08' .   139 .       1110 .         615 .              968 .            215 .       609.4 } . \x0a          { '2008/09' .   136 .       691 .          629 .              1026 .           366 .       569.6 }\x0a         }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.ComboChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Monthly Coffee Production by Country"),"vAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Cups")])),"hAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Month")])),"seriesType".__minus_gt("bars"),"series".__minus_gt(smalltalk.HashedCollection._from_([(5).__minus_gt(smalltalk.HashedCollection._from_(["type".__minus_gt("line")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.ComboChartExample)})},
args: [],
source: "makeOptions\x0a\x09^ #{\x0a          'title'->  'Monthly Coffee Production by Country'.\x0a          'vAxis' -> #{'title' -> 'Cups' } .\x0a          'hAxis' ->#{'title' -> 'Month' } .\x0a          'seriesType' -> 'bars' .\x0a          'series' -> #{ 5 -> #{ 'type' -> 'line' }}\x0a          }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.ComboChartExample);



smalltalk.addClass('ControlChartApp', smalltalk.ChartApp, ['testChart', 'wrapper'], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.ControlChartApp.superclass.fn.prototype._begin.apply(_st(self), []);
self._appendToJQuery_("body"._asJQuery());
self._buildTestWrapperChart_(self._testChart());
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.ControlChartApp)})},
args: [],
source: "begin\x0a\x09super begin.\x0a\x09self appendToJQuery: 'body' asJQuery.\x0a\x09self buildTestWrapperChart: self testChart.",
messageSends: ["begin", "appendToJQuery:", "asJQuery", "buildTestWrapperChart:", "testChart"],
referencedClasses: []
}),
smalltalk.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "buildTestWrapperChart:",
category: 'not yet classified',
fn: function (id){
var self=this;
function $GCChartWrapper(){return smalltalk.GCChartWrapper||(typeof GCChartWrapper=="undefined"?nil:GCChartWrapper)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._wrapper_(_st(_st($GCChartWrapper())._options_(smalltalk.HashedCollection._from_(["chartType".__minus_gt("ColumnChart"),"dataTable".__minus_gt([["Germany","USA","Brazil","Canada","France","RU"],[(700),(300),(400),(500),(600),(800)]]),"options".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Countries")])),"containerId".__minus_gt(id)])))._draw());
$2=_st($1)._yourself();
return self}, function($ctx1) {$ctx1.fill(self,"buildTestWrapperChart:",{id:id},smalltalk.ControlChartApp)})},
args: ["id"],
source: "buildTestWrapperChart: id\x0aself wrapper:\x0a\x09(GCChartWrapper options:\x0a\x09\x09#{\x0a\x09\x09    'chartType' ->  'ColumnChart'.\x0a\x09\x09    'dataTable' -> {{'Germany'. 'USA'. 'Brazil'. 'Canada'. 'France'. 'RU'} .\x0a\x09\x09\x09\x09                {700 . 300 . 400 . 500 . 600 . 800}} .\x0a\x09\x09    'options' -> #{'title' -> 'Countries'} .\x0a\x09\x09    'containerId' -> id\x0a\x09\x09\x09}) \x0a  \x09\x09draw; yourself",
messageSends: ["wrapper:", "draw", "options:", "->", "yourself"],
referencedClasses: ["GCChartWrapper"]
}),
smalltalk.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h1_("Control Chart App");
self._renderBrowserButtonOn_(html);
_st(_st(html)._div())._id_(self._testChart());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.ControlChartApp)})},
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a\x09\x09h1:'Control Chart App'.\x0a\x09\x09self renderBrowserButtonOn: html.\x0a\x09\x09html\x0a\x09\x09\x09div id:self testChart.",
messageSends: ["h1:", "renderBrowserButtonOn:", "id:", "testChart", "div"],
referencedClasses: []
}),
smalltalk.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "testChart",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@testChart"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@testChart"]=self._nextId();
$1=self["@testChart"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"testChart",{},smalltalk.ControlChartApp)})},
args: [],
source: "testChart\x0a\x09^testChart ifNil:[testChart := self nextId]",
messageSends: ["ifNil:", "nextId"],
referencedClasses: []
}),
smalltalk.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@wrapper"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"wrapper",{},smalltalk.ControlChartApp)})},
args: [],
source: "wrapper\x0a\x09^wrapper",
messageSends: [],
referencedClasses: []
}),
smalltalk.ControlChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "wrapper:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@wrapper"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"wrapper:",{anObject:anObject},smalltalk.ControlChartApp)})},
args: ["anObject"],
source: "wrapper: anObject\x0a\x09wrapper := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.ControlChartApp);


smalltalk.addMethod(
smalltalk.method({
selector: "neededVisualizationPackages",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.ControlChartApp.klass.superclass.fn.prototype._neededVisualizationPackages.apply(_st(self), []))._addAll_(["controls"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{},smalltalk.ControlChartApp.klass)})},
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x0aSubclasses should:\x22\x0a\x09\x09^super  neededVisualizationPackages addAll: {'controls'}",
messageSends: ["addAll:", "neededVisualizationPackages"],
referencedClasses: []
}),
smalltalk.ControlChartApp.klass);


smalltalk.addClass('GaugeChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.GaugeChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("Gauge");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GaugeChartExample)})},
args: [],
source: "initialize\x0a\x09\x22 Create a Guage with the chartId that identifies the chart graphic placement and the chartType to be created at that id.\x22\x0a    super initialize.\x0a    self chartType:'Gauge'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.GaugeChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Label","Value"],["Memory",(80)],["CPU",(55)],["Network",(68)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.GaugeChartExample)})},
args: [],
source: "makeData\x0a\x22Example Gauge Data\x22\x0a  ^ self arrayToDataTable: { {'Label'.'Value'}.\x0a    \x09\x09\x09\x09\x09{'Memory' . 80}.\x0a                        {'CPU' . 55}.\x0a                        {'Network' . 68}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.GaugeChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["width".__minus_gt((400)),"heigth".__minus_gt((120)),"redFrom".__minus_gt((90)),"redTo".__minus_gt((100)),"yellowFrom".__minus_gt((75)),"yellowTo".__minus_gt((90)),"minorTicks".__minus_gt((5))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.GaugeChartExample)})},
args: [],
source: "makeOptions\x0a\x22Example Gauge options\x22\x0a   ^#{'width' -> 400. 'heigth'->120.\x0a   'redFrom' -> 90.'redTo' ->100.\x0a   'yellowFrom' -> 75.'yellowTo' ->90.\x0a   'minorTicks' ->5}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.GaugeChartExample);



smalltalk.addClass('GeoChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.GeoChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("GeoChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GeoChartExample)})},
args: [],
source: "initialize\x0a\x09\x22 Create a Geo Chart\x22\x0a    super initialize.\x0a    self chartType:'GeoChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.GeoChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["City","Population","Area"],["Rome",(2761477),(1285.31)],["Milan",(1324110),(181.76)],["Naples",(959574),(117.27)],["Turin",(907563),(130.17)],["Palermo",(655875),(158.9)],["Genoa",(607906),(243.6)],["Bologna",(380181),(140.7)],["Florence",(371282),(102.41)],["Fiumicino",(67370),(213.44)],["Anzio",(52192),(43.43)],["Ciampino",(38262),(11)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.GeoChartExample)})},
args: [],
source: "makeData\x0a\x22Example Geo Data\x22\x0a  ^ self arrayToDataTable: {\x0a{'City'.   'Population' . 'Area'}.\x0a        {'Rome'.      2761477 .    1285.31}.\x0a        {'Milan'.     1324110 .    181.76}.\x0a        {'Naples'.    959574 .    117.27}.\x0a        {'Turin'.     907563 .     130.17}.\x0a        {'Palermo'.   655875 .     158.9}.\x0a        {'Genoa'.     607906 .   243.60}.\x0a        {'Bologna'.   380181 .     140.7}.\x0a        {'Florence'.  371282 .    102.41}.\x0a        {'Fiumicino'. 67370 .      213.44}.\x0a        {'Anzio'.     52192 .      43.43}.\x0a        {'Ciampino'.  38262 .      11} \x0a        }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.GeoChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["region".__minus_gt("IT"),"displayMode".__minus_gt("markers"),"colorAxis".__minus_gt(smalltalk.HashedCollection._from_(["colors".__minus_gt(["green","blue"])]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.GeoChartExample)})},
args: [],
source: "makeOptions\x0a\x22Example Geo Options\x22\x0a\x0a   ^#{\x0a        'region' -> 'IT'.\x0a        'displayMode' -> 'markers'.\x0a        'colorAxis' -> #{'colors'-> {'green'.'blue'}}\x0a      }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.GeoChartExample);



smalltalk.addClass('IndexChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
var pie,id;
function $PieChartExample(){return smalltalk.PieChartExample||(typeof PieChartExample=="undefined"?nil:PieChartExample)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self._appendToJQuery_("body"._asJQuery());
id=self._nextId();
pie=_st(_st($PieChartExample())._new())._chartId_(id);
_st(pie)._appendToJQuery_("body"._asJQuery());
$1=_st("#".__comma(id))._asJQuery();
_st($1)._width_((800));
$2=_st($1)._height_((500));
_st(pie)._drawChart();
$3=smalltalk.IndexChartApp.superclass.fn.prototype._begin.apply(_st(self), []);
return $3;
}, function($ctx1) {$ctx1.fill(self,"begin",{pie:pie,id:id},smalltalk.IndexChartApp)})},
args: [],
source: "begin\x0a\x09\x22Start the executiong of the ExampleChartApp by connecting each button/graphic pair\x22\x0a     |pie id|\x0a    self appendToJQuery:'body' asJQuery.\x0a    (pie := PieChartExample new chartId:(id := self nextId)) appendToJQuery: 'body' asJQuery.\x0a  \x09( '#' , id ) asJQuery width:800;height:500.\x0a    pie drawChart.\x0a    ^super begin",
messageSends: ["appendToJQuery:", "asJQuery", "chartId:", "nextId", "new", "width:", ",", "height:", "drawChart", "begin"],
referencedClasses: ["PieChartExample"]
}),
smalltalk.IndexChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._h1())._with_("Google Charts");
self._renderBrowserButtonOn_(html);
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderLink_content_on_("popcharts.html","Try the Pop Charts!",html);
return _st(html)._with_(" example.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.IndexChartApp)})},
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a    \x09h1 with:'Google Charts'.\x0a\x09self renderBrowserButtonOn: html.\x0a\x09html div with:[\x0a\x09\x09self renderLink: 'popcharts.html' content:'Try the Pop Charts!' on: html.\x0a\x09 \x09html with:' example.'].",
messageSends: ["with:", "h1", "renderBrowserButtonOn:", "renderLink:content:on:", "div"],
referencedClasses: []
}),
smalltalk.IndexChartApp);


smalltalk.addMethod(
smalltalk.method({
selector: "neededVisualizationPackages",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["corechart"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{},smalltalk.IndexChartApp.klass)})},
args: [],
source: "neededVisualizationPackages\x0a\x22This App only needs a corechart package.\x22\x0a\x09^{'corechart'}",
messageSends: [],
referencedClasses: []
}),
smalltalk.IndexChartApp.klass);


smalltalk.addClass('LineChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.LineChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("LineChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.LineChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'LineChart'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.LineChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.LineChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.LineChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Company Performance")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.LineChartExample)})},
args: [],
source: "makeOptions\x0a\x09^#{  'title' -> 'Company Performance' }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.LineChartExample);



smalltalk.addClass('PieChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.PieChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("PieChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.PieChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:'PieChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.PieChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Task","Hours per Day"],["Work",(11)],["Eat",(2)],["Commute",(2)],["Watch TV",(2)],["Snooze",(7)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.PieChartExample)})},
args: [],
source: "makeData\x0a\x09\x22return a DataTable of example Pie Chart data\x22\x0a\x0a  ^ self arrayToDataTable: { {'Task'.'Hours per Day'}.\x0a    \x09\x09\x09\x09\x09{'Work' . 11}.\x0a                        {'Eat'.2}.\x0a                        {'Commute'.2}.\x0a                        {'Watch TV'.2}.\x0a                        {'Snooze'.7}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.PieChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("My Daily Activities")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.PieChartExample)})},
args: [],
source: "makeOptions\x0a\x09\x22Return a Dictionary of the options in this case only a title\x22\x0a\x09^#{'title' -> 'My Daily Activities'}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.PieChartExample);



smalltalk.addClass('PopupChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "addButton:forChart:",
category: 'not yet classified',
fn: function (text,chartClass){
var self=this;
var id,chart;
function $ChartButton(){return smalltalk.ChartButton||(typeof ChartButton=="undefined"?nil:ChartButton)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
id=self._nextId();
chart=_st(chartClass)._chartId_(id);
$1=_st($ChartButton())._popUpChart_atDom_(chart,id);
_st($1)._text_(text);
$2=_st($1)._appendToJQuery_("body"._asJQuery());
_st(chart)._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"addButton:forChart:",{text:text,chartClass:chartClass,id:id,chart:chart},smalltalk.PopupChartApp)})},
args: ["text", "chartClass"],
source: "addButton: text  forChart: chartClass\x0a\x09\x22Add a popup button and chart.\x22\x0a    |id chart|\x0a    id := self nextId.\x0a    ( ChartButton popUpChart:(chart := chartClass chartId:id) atDom:id) text:text;appendToJQuery: 'body' asJQuery.\x0a    chart appendToJQuery: 'body' asJQuery",
messageSends: ["nextId", "text:", "popUpChart:atDom:", "chartId:", "appendToJQuery:", "asJQuery"],
referencedClasses: ["ChartButton"]
}),
smalltalk.PopupChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
function $PieChartExample(){return smalltalk.PieChartExample||(typeof PieChartExample=="undefined"?nil:PieChartExample)}
function $ScatterChartExample(){return smalltalk.ScatterChartExample||(typeof ScatterChartExample=="undefined"?nil:ScatterChartExample)}
function $GaugeChartExample(){return smalltalk.GaugeChartExample||(typeof GaugeChartExample=="undefined"?nil:GaugeChartExample)}
function $GeoChartExample(){return smalltalk.GeoChartExample||(typeof GeoChartExample=="undefined"?nil:GeoChartExample)}
function $TableChartExample(){return smalltalk.TableChartExample||(typeof TableChartExample=="undefined"?nil:TableChartExample)}
function $TreeMapChartExample(){return smalltalk.TreeMapChartExample||(typeof TreeMapChartExample=="undefined"?nil:TreeMapChartExample)}
function $ComboChartExample(){return smalltalk.ComboChartExample||(typeof ComboChartExample=="undefined"?nil:ComboChartExample)}
function $LineChartExample(){return smalltalk.LineChartExample||(typeof LineChartExample=="undefined"?nil:LineChartExample)}
function $BarChartExample(){return smalltalk.BarChartExample||(typeof BarChartExample=="undefined"?nil:BarChartExample)}
function $ColumnChartExample(){return smalltalk.ColumnChartExample||(typeof ColumnChartExample=="undefined"?nil:ColumnChartExample)}
function $AreaChartExample(){return smalltalk.AreaChartExample||(typeof AreaChartExample=="undefined"?nil:AreaChartExample)}
function $CandlestickChartExample(){return smalltalk.CandlestickChartExample||(typeof CandlestickChartExample=="undefined"?nil:CandlestickChartExample)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._appendToJQuery_("body"._asJQuery());
self._addButton_forChart_("Pop PieChart",$PieChartExample());
self._addButton_forChart_("Pop ScatterChart",$ScatterChartExample());
self._addButton_forChart_("Pop GaugeChart",$GaugeChartExample());
self._addButton_forChart_("Pop GeoChart",$GeoChartExample());
self._addButton_forChart_("Pop TableChart",$TableChartExample());
self._addButton_forChart_("Pop TreeMapChart",$TreeMapChartExample());
self._addButton_forChart_("Pop ComboChart",$ComboChartExample());
self._addButton_forChart_("Pop LineChart",$LineChartExample());
self._addButton_forChart_("Pop BarChart",$BarChartExample());
self._addButton_forChart_("Pop ColumnChart",$ColumnChartExample());
self._addButton_forChart_("Pop AreaChart",$AreaChartExample());
self._addButton_forChart_("Pop CandlestickChart",$CandlestickChartExample());
$1=smalltalk.PopupChartApp.superclass.fn.prototype._begin.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.PopupChartApp)})},
args: [],
source: "begin\x0a\x09self appendToJQuery: 'body' asJQuery.\x0a    self addButton:'Pop PieChart' forChart:PieChartExample.\x0a    self addButton:'Pop ScatterChart' forChart:ScatterChartExample.\x0a\x09self addButton:'Pop GaugeChart' forChart:GaugeChartExample.\x0a\x09self addButton:'Pop GeoChart' forChart:GeoChartExample.\x0a    self addButton:'Pop TableChart' forChart:TableChartExample.\x0a\x09self addButton:'Pop TreeMapChart' forChart:TreeMapChartExample.\x0a\x09self addButton:'Pop ComboChart' forChart:ComboChartExample.\x0a\x09self addButton:'Pop LineChart' forChart:LineChartExample.\x0a\x09self addButton:'Pop BarChart' forChart:BarChartExample.\x0a\x09self addButton:'Pop ColumnChart' forChart:ColumnChartExample.\x0a\x09self addButton:'Pop AreaChart' forChart:AreaChartExample.\x0a\x09self addButton:'Pop CandlestickChart' forChart:CandlestickChartExample.\x0a    ^super begin",
messageSends: ["appendToJQuery:", "asJQuery", "addButton:forChart:", "begin"],
referencedClasses: ["PieChartExample", "ScatterChartExample", "GaugeChartExample", "GeoChartExample", "TableChartExample", "TreeMapChartExample", "ComboChartExample", "LineChartExample", "BarChartExample", "ColumnChartExample", "AreaChartExample", "CandlestickChartExample"]
}),
smalltalk.PopupChartApp);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._h1())._with_("Press a Button to Popup a Chart!");
self._renderBrowserButtonOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.PopupChartApp)})},
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a    \x09h1 with:'Press a Button to Popup a Chart!'.\x0a\x09self renderBrowserButtonOn: html",
messageSends: ["with:", "h1", "renderBrowserButtonOn:"],
referencedClasses: []
}),
smalltalk.PopupChartApp);


smalltalk.addMethod(
smalltalk.method({
selector: "neededVisualizationPackages",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["corechart","gauge","geochart","table","treemap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{},smalltalk.PopupChartApp.klass)})},
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x22\x0a\x09^{'corechart'.'gauge'.'geochart'.'table'.'treemap'}",
messageSends: [],
referencedClasses: []
}),
smalltalk.PopupChartApp.klass);


smalltalk.addClass('ScatterChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.ScatterChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("ScatterChart");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ScatterChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:'ScatterChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.ScatterChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Age","Weight"],[(8),(11)],[(4),(5.5)],[(11),(14)],[(4),(5)],[(3),(3)],[(6.5),(7)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.ScatterChartExample)})},
args: [],
source: "makeData\x0a  \x22Return the example dataset\x22\x0a  ^ self arrayToDataTable: { \x0a  \x09\x09\x09\x09\x09\x09\x09{'Age'.'Weight'}.\x0a                            {8 . 11} . \x0a                            { 4 . 5.5} . \x0a                            { 11 . 14 } . \x0a                            { 4 . 5}. \x0a                            {3 . 3} . \x0a                            {6.5 . 7}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.ScatterChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["title".__minus_gt("Age vs. Weight comparison"),"hAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Age"),"minValue".__minus_gt((0)),"maxValue".__minus_gt((15))])),"vAxis".__minus_gt(smalltalk.HashedCollection._from_(["title".__minus_gt("Weight"),"minValue".__minus_gt((0)),"maxValue".__minus_gt((15))])),"legend".__minus_gt("none")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.ScatterChartExample)})},
args: [],
source: "makeOptions\x0a\x22options for example dataset\x22\x0a   ^#{\x0a          'title' ->'Age vs. Weight comparison'.\x0a          'hAxis' -> #{'title' -> 'Age'. 'minValue'-> 0. 'maxValue'-> 15}.\x0a          'vAxis'-> #{'title' ->'Weight'. 'minValue'-> 0. 'maxValue'-> 15}.\x0a          'legend' ->'none'\x0a        }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.ScatterChartExample);



smalltalk.addClass('TableChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.TableChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("Table");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TableChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self chartType:'Table'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.TableChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
var data;
function $DataTable(){return smalltalk.DataTable||(typeof DataTable=="undefined"?nil:DataTable)}
return smalltalk.withContext(function($ctx1) { 
var $1;
data=_st($DataTable())._new();
_st(data)._addColumnType_name_("string","Name");
_st(data)._addColumnType_name_("number","Salary");
_st(data)._addColumnType_name_("boolean","Full Time Employee");
_st(data)._addRows_([["Mike",smalltalk.HashedCollection._from_(["v".__minus_gt((10000)),"f".__minus_gt("$10,000")]),true],["Jim",smalltalk.HashedCollection._from_(["v".__minus_gt((8000)),"f".__minus_gt("$8,000")]),false],["Alice",smalltalk.HashedCollection._from_(["v".__minus_gt((12500)),"f".__minus_gt("$12,500")]),true],["Bob",smalltalk.HashedCollection._from_(["v".__minus_gt((7000)),"f".__minus_gt("$7,000")]),true]]);
$1=_st(data)._data();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{data:data},smalltalk.TableChartExample)})},
args: [],
source: "makeData\x0a\x09|data|\x0a    data := DataTable new.\x0a    data addColumnType: 'string' name: 'Name' .\x0a    data addColumnType: 'number' name: 'Salary'  .\x0a    data addColumnType: 'boolean' name: 'Full Time Employee'  .\x0a    data addRows: {\x0a          { 'Mike' .  #{ 'v' -> 10000 .  'f' -> '$10,000' } . true } .\x0a          { 'Jim' .   #{ 'v' -> 8000 .   'f' -> '$8,000'} .  false } .\x0a          { 'Alice' . #{ 'v' -> 12500 . 'f' -> '$12,500'} . true } .\x0a          {'Bob' .   #{ 'v' -> 7000 .  'f' -> '$7,000'} .  true }\x0a        }.\x0a        ^data data",
messageSends: ["new", "addColumnType:name:", "addRows:", "->", "data"],
referencedClasses: ["DataTable"]
}),
smalltalk.TableChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["showRowNumber".__minus_gt(true)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.TableChartExample)})},
args: [],
source: "makeOptions\x0a\x09^ #{'showRowNumber' -> true}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.TableChartExample);



smalltalk.addClass('TreeMapChartExample', smalltalk.GoogleChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
smalltalk.TreeMapChartExample.superclass.fn.prototype._initialize.apply(_st(self), []);
self._chartType_("TreeMap");
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TreeMapChartExample)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self chartType: 'TreeMap'.\x0a    ^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.TreeMapChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._arrayToDataTable_([["Location","Parent","Market trade volume (size)","Market increase/decrease (color)"],["Global",null,(0),(0)],["America","Global",(0),(0)],["Europe","Global",(0),(0)],["Asia","Global",(0),(0)],["Australia","Global",(0),(0)],["Africa","Global",(0),(0)],["Brazil","America",(11),(10)],["USA","America",(52),(31)],["Mexico","America",(24),(12)],["Canada","America",(16),(-23)],["France","Europe",(42),(-11)],["Germany","Europe",(31),(-2)],["Sweden","Europe",(22),(-13)],["Italy","Europe",(17),(4)],["UK","Europe",(21),(-5)],["China","Asia",(36),(4)],["Japan","Asia",(20),(-12)],["India","Asia",(40),(63)],["Laos","Asia",(4),(34)],["Mongolia","Asia",(1),(-5)],["Israel","Asia",(12),(24)],["Iran","Asia",(18),(13)],["Pakistan","Asia",(11),(-52)],["Egypt","Africa",(21),(0)],["S. Africa","Africa",(30),(43)],["Sudan","Africa",(12),(2)],["Congo","Africa",(10),(12)],["Zair","Africa",(8),(10)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{},smalltalk.TreeMapChartExample)})},
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: {\x0a    \x0a     {'Location' .  'Parent' . 'Market trade volume (size)' . 'Market increase/decrease (color)'} .\x0a          { 'Global' .     null .                  0 .                                0} .\x0a          { 'America' .    'Global' .              0 .                                0 } . \x0a          { 'Europe' .     'Global' .              0 .                                0 } . \x0a          { 'Asia' .       'Global' .              0 .                                0 } . \x0a          { 'Australia' .  'Global' .              0 .                                0 } . \x0a          { 'Africa' .     'Global' .              0 .                                0 } . \x0a          { 'Brazil' .     'America' .             11 .                               10 } . \x0a          { 'USA' .        'America' .             52 .                               31 } . \x0a          { 'Mexico' .     'America' .             24 .                               12 } . \x0a          { 'Canada' .     'America' .             16 .                               -23 } . \x0a          { 'France' .     'Europe' .              42 .                               -11 } . \x0a          { 'Germany' .    'Europe' .              31 .                               -2 } . \x0a          { 'Sweden' .     'Europe' .              22 .                               -13 } . \x0a          { 'Italy' .      'Europe' .              17 .                               4 } . \x0a          { 'UK' .         'Europe' .              21 .                               -5 } . \x0a          { 'China' .      'Asia' .                36 .                               4 } . \x0a          { 'Japan' .      'Asia' .                20 .                               -12 } . \x0a          { 'India' .      'Asia' .                40 .                               63 } . \x0a          { 'Laos' .       'Asia' .                4 .                                34 } . \x0a          { 'Mongolia' .   'Asia' .                1 .                                -5 } . \x0a          { 'Israel' .     'Asia' .                12 .                               24 } . \x0a          { 'Iran' .       'Asia' .                18 .                               13 } . \x0a          { 'Pakistan' .   'Asia' .                11 .                               -52 } . \x0a          { 'Egypt' .      'Africa' .              21 .                               0 } . \x0a          { 'S. Africa' .  'Africa' .              30 .                               43 } . \x0a          { 'Sudan' .      'Africa' .              12 .                               2 } . \x0a          { 'Congo' .      'Africa' .              10 .                               12 } . \x0a          { 'Zair' .       'Africa' .              8 .                                10 }\x0a    }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.TreeMapChartExample);

smalltalk.addMethod(
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["minColor".__minus_gt("#f00"),"midColor".__minus_gt("#ddd"),"maxColor".__minus_gt("#0d0"),"headerHeight".__minus_gt((15)),"fontColor".__minus_gt("black"),"showScale".__minus_gt(true)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{},smalltalk.TreeMapChartExample)})},
args: [],
source: "makeOptions\x0a\x09^#{  'minColor' -> '#f00' .\x0a          'midColor' -> '#ddd' .\x0a          'maxColor' -> '#0d0' .\x0a          'headerHeight' -> 15 .\x0a          'fontColor' -> 'black' .\x0a          'showScale' ->  true}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.TreeMapChartExample);


})(global_smalltalk,global_nil,global__st);
