define("amber-googlechartsexample/GoogleChartsExamples", ["amber/boot", "amber-googlechartsexample/GoogleCharts", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('GoogleChartsExamples');
$core.packages["GoogleChartsExamples"].transport = {"type":"amd","amdNamespace":"amber-googlechartsexample"};

$core.addClass('AreaChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AreaChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("AreaChart");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AreaChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:  'AreaChart'.\x0a    ^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.AreaChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.AreaChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:"]
}),
$globals.AreaChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["title","Company Performance","hAxis",$globals.HashedCollection._newFromPairs_(["title","Year","titleTextStyle",$globals.HashedCollection._newFromPairs_(["color","red"])])]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x09^#{\x0a\x09\x09'title' -> 'Company Performance' .\x0a\x09\x09'hAxis' -> #{  'title' -> 'Year' .  'titleTextStyle' -> #{ 'color' -> 'red'}}\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AreaChartExample);



$core.addClass('BarChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.BarChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("BarChart");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BarChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'BarChart'.\x0a    ^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.BarChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.BarChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x09^self arrayToDataTable:\x0a    { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:"]
}),
$globals.BarChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["title","Company Performance","vAxis",$globals.HashedCollection._newFromPairs_(["title","Year","titleTextStyle",$globals.HashedCollection._newFromPairs_(["color","red"])])]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x09^#{\x0a    'title' -> 'Company Performance' .\x0a    'vAxis' -> #{ 'title' -> 'Year' .  'titleTextStyle' -> #{ 'color' -> 'red'}}\x0a    }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BarChartExample);



$core.addClass('CandlestickChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CandlestickChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("CandlestickChart");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CandlestickChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'CandlestickChart'.\x0a    ^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.CandlestickChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._arrayToDataTable_firstRowAsData_([["Mon",(20),(28),(38),(45)],["Tue",(31),(38),(55),(66)],["Wed",(50),(55),(77),(80)],["Thu",(77),(77),(66),(50)],["Fri",(68),(66),(22),(15)]],true);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.CandlestickChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x09^self arrayToDataTable:  { \x0a          { 'Mon' .  20 .  28 .  38 .  45 } . \x0a          { 'Tue' .  31 .  38 .  55 .  66 } . \x0a          { 'Wed' .  50 .  55 .  77 .  80 } . \x0a          { 'Thu' .  77 .  77 .  66 .  50 } . \x0a          { 'Fri' .  68 .  66 .  22 .  15 }\x0a         }\x0a    firstRowAsData: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:firstRowAsData:"]
}),
$globals.CandlestickChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["legend","none"]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x09^#{ 'legend' -> 'none' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CandlestickChartExample);



$core.addClass('ChartButton', $globals.Widget, ['element', 'clickBlock', 'text'], 'GoogleChartsExamples');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ChartButton.comment="A ChartButton is a Widget that renders a button with a click action. I have a text to show to the user and a clickBlock to perform for the user.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "activate",
protocol: 'startup',
fn: function (){
var self=this;
var button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
button=$recv("#".__comma(self._element()))._asJQuery();
$recv(button)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._clickBlock())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activate",{button:button},$globals.ChartButton)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activate\x0a\x09\x22install a click hander for the button\x22\x0a\x09|button|\x0a\x09button := ('#' , self element) asJQuery.\x0a    button click:[self clickBlock value]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery", ",", "element", "click:", "value", "clickBlock"]
}),
$globals.ChartButton);

$core.addMethod(
$core.method({
selector: "clickBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@clickBlock"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clickBlock\x0a\x09^clickBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChartButton);

$core.addMethod(
$core.method({
selector: "clickBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@clickBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "clickBlock: aBlock\x0a\x09clickBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChartButton);

$core.addMethod(
$core.method({
selector: "element",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@element"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "element\x0a\x09^element",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChartButton);

$core.addMethod(
$core.method({
selector: "element:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@element"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "element: aString\x0a\x09element := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChartButton);

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
$1=$recv(html)._button();
$recv($1)._with_(self._text());
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._clickBlock())._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.ChartButton)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09\x22Render the button with text and click handler\x22\x0a\x09html\x0a    \x09button\x0a        \x09with:self text;\x0a            onClick:[self clickBlock value]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "button", "text", "onClick:", "value", "clickBlock"]
}),
$globals.ChartButton);

$core.addMethod(
$core.method({
selector: "text",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@text"];
if(($receiver = $2) == null || $receiver.isNil){
self["@text"]="";
$1=self["@text"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"text",{},$globals.ChartButton)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "text\x0a\x09^text ifNil:[text := '']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.ChartButton);

$core.addMethod(
$core.method({
selector: "text:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@text"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "text: aString\x0a\x09text := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ChartButton);


$core.addMethod(
$core.method({
selector: "element:clickBlock:",
protocol: 'not yet classified',
fn: function (element,clickBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._element_(element);
$recv($2)._clickBlock_(clickBlock);
$recv($2)._activate();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"element:clickBlock:",{element:element,clickBlock:clickBlock},$globals.ChartButton.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["element", "clickBlock"],
source: "element: element clickBlock: clickBlock\x0a\x09\x22Return new ChartButton with a element and clickBlock\x22\x0a\x09^self new element: element; clickBlock: clickBlock; activate;yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["element:", "new", "clickBlock:", "activate", "yourself"]
}),
$globals.ChartButton.klass);

$core.addMethod(
$core.method({
selector: "popUpChart:atDom:",
protocol: 'not yet classified',
fn: function (chart,element){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._element_clickBlock_(element,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(chart)._drawChart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"popUpChart:atDom:",{chart:chart,element:element},$globals.ChartButton.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["chart", "element"],
source: "popUpChart: chart atDom: element\x0a\x09\x22Make the chart to draw on click of the ChartButton\x22\x0a    ^self element: element clickBlock:[chart drawChart]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["element:clickBlock:", "drawChart"]
}),
$globals.ChartButton.klass);


$core.addClass('ColumnChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ColumnChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("ColumnChart");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ColumnChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a    super initialize.\x0a    self chartType: 'ColumnChart'.\x0a    ^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.ColumnChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.ColumnChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:"]
}),
$globals.ColumnChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["title","Company Performance","hAxis",$globals.HashedCollection._newFromPairs_(["title","Year","titleTextStyle",$globals.HashedCollection._newFromPairs_(["color","red"])])]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x0a\x09^#{\x0a\x09\x09'title' -> 'Company Performance' .\x0a\x09\x09'hAxis' -> #{ 'title' -> 'Year' . 'titleTextStyle' -> #{ 'color' ->  'red'}}\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ColumnChartExample);



$core.addClass('ComboChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ComboChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("ComboChart");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ComboChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'ComboChart'.\x0a    ^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.ComboChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._arrayToDataTable_([["Month","Bolivia","Ecuador","Madagascar","Papua New Guinea","Rwanda","Average"],["2004/05",(165),(938),(522),(998),(450),(614.6)],["2005/06",(135),(1120),(599),(1268),(288),(682)],["2006/07",(157),(1167),(587),(807),(397),(623)],["2007/08",(139),(1110),(615),(968),(215),(609.4)],["2008/09",(136),(691),(629),(1026),(366),(569.6)]]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.ComboChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x09^self arrayToDataTable:\x0a\x09{ \x0a          { 'Month' .  'Bolivia' .  'Ecuador' .  'Madagascar' .  'Papua New Guinea' .  'Rwanda' .  'Average' } . \x0a          { '2004/05' .   165 .       938 .          522 .              998 .            450 .       614.6 } . \x0a          { '2005/06' .   135 .       1120 .         599 .              1268 .           288 .       682 } . \x0a          { '2006/07' .   157 .       1167 .         587 .              807 .            397 .       623 } . \x0a          { '2007/08' .   139 .       1110 .         615 .              968 .            215 .       609.4 } . \x0a          { '2008/09' .   136 .       691 .          629 .              1026 .           366 .       569.6 }\x0a         }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:"]
}),
$globals.ComboChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["title","Monthly Coffee Production by Country","vAxis",$globals.HashedCollection._newFromPairs_(["title","Cups"]),"hAxis",$globals.HashedCollection._newFromPairs_(["title","Month"]),"seriesType","bars","series",$globals.HashedCollection._newFromPairs_([(5),$globals.HashedCollection._newFromPairs_(["type","line"])])]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x09^ #{\x0a          'title'->  'Monthly Coffee Production by Country'.\x0a          'vAxis' -> #{'title' -> 'Cups' } .\x0a          'hAxis' ->#{'title' -> 'Month' } .\x0a          'seriesType' -> 'bars' .\x0a          'series' -> #{ 5 -> #{ 'type' -> 'line' }}\x0a          }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ComboChartExample);



$core.addClass('ControlChartApp', $globals.ChartApp, ['testChart', 'wrapper'], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "begin",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ControlChartApp.superclass.fn.prototype._begin.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._appendToJQuery_("body"._asJQuery());
self._buildTestWrapperChart_(self._testChart());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"begin",{},$globals.ControlChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "begin\x0a\x09super begin.\x0a\x09self appendToJQuery: 'body' asJQuery.\x0a\x09self buildTestWrapperChart: self testChart.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["begin", "appendToJQuery:", "asJQuery", "buildTestWrapperChart:", "testChart"]
}),
$globals.ControlChartApp);

$core.addMethod(
$core.method({
selector: "buildTestWrapperChart:",
protocol: 'not yet classified',
fn: function (id){
var self=this;
function $GCChartWrapper(){return $globals.GCChartWrapper||(typeof GCChartWrapper=="undefined"?nil:GCChartWrapper)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._wrapper_($recv($recv($GCChartWrapper())._options_($globals.HashedCollection._newFromPairs_(["chartType","ColumnChart","dataTable",[["Germany","USA","Brazil","Canada","France","RU"],[(700),(300),(400),(500),(600),(800)]],"options",$globals.HashedCollection._newFromPairs_(["title","Countries"]),"containerId",id])))._draw());
$1=self._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buildTestWrapperChart:",{id:id},$globals.ControlChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["id"],
source: "buildTestWrapperChart: id\x0aself wrapper:\x0a\x09(GCChartWrapper options:\x0a\x09\x09#{\x0a\x09\x09    'chartType' ->  'ColumnChart'.\x0a\x09\x09    'dataTable' -> {{'Germany'. 'USA'. 'Brazil'. 'Canada'. 'France'. 'RU'} .\x0a\x09\x09\x09\x09                {700 . 300 . 400 . 500 . 600 . 800}} .\x0a\x09\x09    'options' -> #{'title' -> 'Countries'} .\x0a\x09\x09    'containerId' -> id\x0a\x09\x09\x09}) \x0a  \x09\x09draw; yourself",
referencedClasses: ["GCChartWrapper"],
//>>excludeEnd("ide");
messageSends: ["wrapper:", "draw", "options:", "yourself"]
}),
$globals.ControlChartApp);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._h1_("Control Chart App");
self._renderBrowserButtonOn_(html);
$recv($recv(html)._div())._id_(self._testChart());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.ControlChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a\x09\x09h1:'Control Chart App'.\x0a\x09\x09self renderBrowserButtonOn: html.\x0a\x09\x09html\x0a\x09\x09\x09div id:self testChart.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["h1:", "renderBrowserButtonOn:", "id:", "div", "testChart"]
}),
$globals.ControlChartApp);

$core.addMethod(
$core.method({
selector: "testChart",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@testChart"];
if(($receiver = $2) == null || $receiver.isNil){
self["@testChart"]=self._nextId();
$1=self["@testChart"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testChart",{},$globals.ControlChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testChart\x0a\x09^testChart ifNil:[testChart := self nextId]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "nextId"]
}),
$globals.ControlChartApp);

$core.addMethod(
$core.method({
selector: "wrapper",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@wrapper"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wrapper\x0a\x09^wrapper",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ControlChartApp);

$core.addMethod(
$core.method({
selector: "wrapper:",
protocol: 'not yet classified',
fn: function (anObject){
var self=this;
self["@wrapper"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "wrapper: anObject\x0a\x09wrapper := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ControlChartApp);


$core.addMethod(
$core.method({
selector: "neededVisualizationPackages",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ControlChartApp.klass.superclass.fn.prototype._neededVisualizationPackages.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2)._addAll_(["controls"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{},$globals.ControlChartApp.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x0aSubclasses should:\x22\x0a\x09\x09^super  neededVisualizationPackages addAll: {'controls'}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addAll:", "neededVisualizationPackages"]
}),
$globals.ControlChartApp.klass);


$core.addClass('GaugeChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.GaugeChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("Gauge");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.GaugeChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22 Create a Guage with the chartId that identifies the chart graphic placement and the chartType to be created at that id.\x22\x0a    super initialize.\x0a    self chartType:'Gauge'.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.GaugeChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._arrayToDataTable_([["Label","Value"],["Memory",(80)],["CPU",(55)],["Network",(68)]]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.GaugeChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x22Example Gauge Data\x22\x0a  ^ self arrayToDataTable: { {'Label'.'Value'}.\x0a    \x09\x09\x09\x09\x09{'Memory' . 80}.\x0a                        {'CPU' . 55}.\x0a                        {'Network' . 68}}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:"]
}),
$globals.GaugeChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["width",(400),"heigth",(120),"redFrom",(90),"redTo",(100),"yellowFrom",(75),"yellowTo",(90),"minorTicks",(5)]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x22Example Gauge options\x22\x0a   ^#{'width' -> 400. 'heigth'->120.\x0a   'redFrom' -> 90.'redTo' ->100.\x0a   'yellowFrom' -> 75.'yellowTo' ->90.\x0a   'minorTicks' ->5}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GaugeChartExample);



$core.addClass('GeoChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.GeoChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("GeoChart");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.GeoChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22 Create a Geo Chart\x22\x0a    super initialize.\x0a    self chartType:'GeoChart'.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.GeoChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._arrayToDataTable_([["City","Population","Area"],["Rome",(2761477),(1285.31)],["Milan",(1324110),(181.76)],["Naples",(959574),(117.27)],["Turin",(907563),(130.17)],["Palermo",(655875),(158.9)],["Genoa",(607906),(243.6)],["Bologna",(380181),(140.7)],["Florence",(371282),(102.41)],["Fiumicino",(67370),(213.44)],["Anzio",(52192),(43.43)],["Ciampino",(38262),(11)]]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.GeoChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x22Example Geo Data\x22\x0a  ^ self arrayToDataTable: {\x0a{'City'.   'Population' . 'Area'}.\x0a        {'Rome'.      2761477 .    1285.31}.\x0a        {'Milan'.     1324110 .    181.76}.\x0a        {'Naples'.    959574 .    117.27}.\x0a        {'Turin'.     907563 .     130.17}.\x0a        {'Palermo'.   655875 .     158.9}.\x0a        {'Genoa'.     607906 .   243.60}.\x0a        {'Bologna'.   380181 .     140.7}.\x0a        {'Florence'.  371282 .    102.41}.\x0a        {'Fiumicino'. 67370 .      213.44}.\x0a        {'Anzio'.     52192 .      43.43}.\x0a        {'Ciampino'.  38262 .      11} \x0a        }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:"]
}),
$globals.GeoChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["region","IT","displayMode","markers","colorAxis",$globals.HashedCollection._newFromPairs_(["colors",["green","blue"]])]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x22Example Geo Options\x22\x0a\x0a   ^#{\x0a        'region' -> 'IT'.\x0a        'displayMode' -> 'markers'.\x0a        'colorAxis' -> #{'colors'-> {'green'.'blue'}}\x0a      }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GeoChartExample);



$core.addClass('IndexChartApp', $globals.ChartApp, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "begin",
protocol: 'not yet classified',
fn: function (){
var self=this;
var pie,id;
function $PieChartExample(){return $globals.PieChartExample||(typeof PieChartExample=="undefined"?nil:PieChartExample)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$5,$6,$7,$8;
$1="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
self._appendToJQuery_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["appendToJQuery:"]=1;
//>>excludeEnd("ctx");
$3=$recv($PieChartExample())._new();
id=self._nextId();
$4=id;
pie=$recv($3)._chartId_($4);
$2=pie;
$5="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($2)._appendToJQuery_($5);
$6=$recv("#".__comma(id))._asJQuery();
$recv($6)._width_((800));
$7=$recv($6)._height_((500));
$recv(pie)._drawChart();
$8=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.IndexChartApp.superclass.fn.prototype._begin.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"begin",{pie:pie,id:id},$globals.IndexChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "begin\x0a\x09\x22Start the executiong of the ExampleChartApp by connecting each button/graphic pair\x22\x0a     |pie id|\x0a    self appendToJQuery:'body' asJQuery.\x0a    (pie := PieChartExample new chartId:(id := self nextId)) appendToJQuery: 'body' asJQuery.\x0a  \x09( '#' , id ) asJQuery width:800;height:500.\x0a    pie drawChart.\x0a    ^super begin",
referencedClasses: ["PieChartExample"],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "asJQuery", "chartId:", "new", "nextId", "width:", ",", "height:", "drawChart", "begin"]
}),
$globals.IndexChartApp);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(html)._h1())._with_("Google Charts");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self._renderIDEButtonOn_(html);
$recv($recv(html)._div())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderLink_content_on_("popcharts.html","Try the Pop Charts!",html);
return $recv(html)._with_(" example.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.IndexChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a    \x09h1 with:'Google Charts'.\x0a\x09self renderIDEButtonOn: html.\x0a\x09html div with:[\x0a\x09\x09self renderLink: 'popcharts.html' content:'Try the Pop Charts!' on: html.\x0a\x09 \x09html with:' example.'].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "renderIDEButtonOn:", "div", "renderLink:content:on:"]
}),
$globals.IndexChartApp);


$core.addMethod(
$core.method({
selector: "neededVisualizationPackages",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=["corechart"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "neededVisualizationPackages\x0a\x22This App only needs a corechart package.\x22\x0a\x09^{'corechart'}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IndexChartApp.klass);


$core.addClass('LineChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LineChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("LineChart");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.LineChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType: 'LineChart'.\x0a    ^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.LineChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.LineChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: { \x0a          { 'Year' .  'Sales' .  'Expenses' } . \x0a          { '2004' .   1000 .       400 } . \x0a          { '2005' .   1170 .       460 } . \x0a          { '2006' .   660 .        1120 } . \x0a          { '2007' .   1030 .       540 }\x0a         }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:"]
}),
$globals.LineChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["title","Company Performance"]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x09^#{  'title' -> 'Company Performance' }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LineChartExample);



$core.addClass('PieChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PieChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("PieChart");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PieChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:'PieChart'.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.PieChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._arrayToDataTable_([["Task","Hours per Day"],["Work",(11)],["Eat",(2)],["Commute",(2)],["Watch TV",(2)],["Snooze",(7)]]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.PieChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x09\x22return a DataTable of example Pie Chart data\x22\x0a\x0a  ^ self arrayToDataTable: { {'Task'.'Hours per Day'}.\x0a    \x09\x09\x09\x09\x09{'Work' . 11}.\x0a                        {'Eat'.2}.\x0a                        {'Commute'.2}.\x0a                        {'Watch TV'.2}.\x0a                        {'Snooze'.7}}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:"]
}),
$globals.PieChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["title","My Daily Activities"]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x09\x22Return a Dictionary of the options in this case only a title\x22\x0a\x09^#{'title' -> 'My Daily Activities'}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PieChartExample);



$core.addClass('PopupChartApp', $globals.ChartApp, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "addButton:forChart:",
protocol: 'not yet classified',
fn: function (text,chartClass){
var self=this;
var id,chart;
function $ChartButton(){return $globals.ChartButton||(typeof ChartButton=="undefined"?nil:ChartButton)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$5,$3;
id=self._nextId();
chart=$recv(chartClass)._chartId_(id);
$2=chart;
$1=$recv($ChartButton())._popUpChart_atDom_($2,id);
$recv($1)._text_(text);
$4=$1;
$5="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._appendToJQuery_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["appendToJQuery:"]=1;
//>>excludeEnd("ctx");
$recv(chart)._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addButton:forChart:",{text:text,chartClass:chartClass,id:id,chart:chart},$globals.PopupChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["text", "chartClass"],
source: "addButton: text  forChart: chartClass\x0a\x09\x22Add a popup button and chart.\x22\x0a    |id chart|\x0a    id := self nextId.\x0a    ( ChartButton popUpChart:(chart := chartClass chartId:id) atDom:id) text:text;appendToJQuery: 'body' asJQuery.\x0a    chart appendToJQuery: 'body' asJQuery",
referencedClasses: ["ChartButton"],
//>>excludeEnd("ide");
messageSends: ["nextId", "text:", "popUpChart:atDom:", "chartId:", "appendToJQuery:", "asJQuery"]
}),
$globals.PopupChartApp);

$core.addMethod(
$core.method({
selector: "begin",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $PieChartExample(){return $globals.PieChartExample||(typeof PieChartExample=="undefined"?nil:PieChartExample)}
function $ScatterChartExample(){return $globals.ScatterChartExample||(typeof ScatterChartExample=="undefined"?nil:ScatterChartExample)}
function $GaugeChartExample(){return $globals.GaugeChartExample||(typeof GaugeChartExample=="undefined"?nil:GaugeChartExample)}
function $GeoChartExample(){return $globals.GeoChartExample||(typeof GeoChartExample=="undefined"?nil:GeoChartExample)}
function $TableChartExample(){return $globals.TableChartExample||(typeof TableChartExample=="undefined"?nil:TableChartExample)}
function $TreeMapChartExample(){return $globals.TreeMapChartExample||(typeof TreeMapChartExample=="undefined"?nil:TreeMapChartExample)}
function $ComboChartExample(){return $globals.ComboChartExample||(typeof ComboChartExample=="undefined"?nil:ComboChartExample)}
function $LineChartExample(){return $globals.LineChartExample||(typeof LineChartExample=="undefined"?nil:LineChartExample)}
function $BarChartExample(){return $globals.BarChartExample||(typeof BarChartExample=="undefined"?nil:BarChartExample)}
function $ColumnChartExample(){return $globals.ColumnChartExample||(typeof ColumnChartExample=="undefined"?nil:ColumnChartExample)}
function $AreaChartExample(){return $globals.AreaChartExample||(typeof AreaChartExample=="undefined"?nil:AreaChartExample)}
function $CandlestickChartExample(){return $globals.CandlestickChartExample||(typeof CandlestickChartExample=="undefined"?nil:CandlestickChartExample)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._appendToJQuery_("body"._asJQuery());
self._addButton_forChart_("Pop PieChart",$PieChartExample());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addButton:forChart:"]=1;
//>>excludeEnd("ctx");
self._addButton_forChart_("Pop ScatterChart",$ScatterChartExample());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addButton:forChart:"]=2;
//>>excludeEnd("ctx");
self._addButton_forChart_("Pop GaugeChart",$GaugeChartExample());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addButton:forChart:"]=3;
//>>excludeEnd("ctx");
self._addButton_forChart_("Pop GeoChart",$GeoChartExample());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addButton:forChart:"]=4;
//>>excludeEnd("ctx");
self._addButton_forChart_("Pop TableChart",$TableChartExample());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addButton:forChart:"]=5;
//>>excludeEnd("ctx");
self._addButton_forChart_("Pop TreeMapChart",$TreeMapChartExample());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addButton:forChart:"]=6;
//>>excludeEnd("ctx");
self._addButton_forChart_("Pop ComboChart",$ComboChartExample());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addButton:forChart:"]=7;
//>>excludeEnd("ctx");
self._addButton_forChart_("Pop LineChart",$LineChartExample());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addButton:forChart:"]=8;
//>>excludeEnd("ctx");
self._addButton_forChart_("Pop BarChart",$BarChartExample());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addButton:forChart:"]=9;
//>>excludeEnd("ctx");
self._addButton_forChart_("Pop ColumnChart",$ColumnChartExample());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addButton:forChart:"]=10;
//>>excludeEnd("ctx");
self._addButton_forChart_("Pop AreaChart",$AreaChartExample());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addButton:forChart:"]=11;
//>>excludeEnd("ctx");
self._addButton_forChart_("Pop CandlestickChart",$CandlestickChartExample());
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PopupChartApp.superclass.fn.prototype._begin.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"begin",{},$globals.PopupChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "begin\x0a\x09self appendToJQuery: 'body' asJQuery.\x0a    self addButton:'Pop PieChart' forChart:PieChartExample.\x0a    self addButton:'Pop ScatterChart' forChart:ScatterChartExample.\x0a\x09self addButton:'Pop GaugeChart' forChart:GaugeChartExample.\x0a\x09self addButton:'Pop GeoChart' forChart:GeoChartExample.\x0a    self addButton:'Pop TableChart' forChart:TableChartExample.\x0a\x09self addButton:'Pop TreeMapChart' forChart:TreeMapChartExample.\x0a\x09self addButton:'Pop ComboChart' forChart:ComboChartExample.\x0a\x09self addButton:'Pop LineChart' forChart:LineChartExample.\x0a\x09self addButton:'Pop BarChart' forChart:BarChartExample.\x0a\x09self addButton:'Pop ColumnChart' forChart:ColumnChartExample.\x0a\x09self addButton:'Pop AreaChart' forChart:AreaChartExample.\x0a\x09self addButton:'Pop CandlestickChart' forChart:CandlestickChartExample.\x0a    ^super begin",
referencedClasses: ["PieChartExample", "ScatterChartExample", "GaugeChartExample", "GeoChartExample", "TableChartExample", "TreeMapChartExample", "ComboChartExample", "LineChartExample", "BarChartExample", "ColumnChartExample", "AreaChartExample", "CandlestickChartExample"],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "asJQuery", "addButton:forChart:", "begin"]
}),
$globals.PopupChartApp);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(html)._h1())._with_("Press a Button to Popup a Chart!");
self._renderIDEButtonOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.PopupChartApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a    \x09h1 with:'Press a Button to Popup a Chart!'.\x0a\x09self renderIDEButtonOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "renderIDEButtonOn:"]
}),
$globals.PopupChartApp);


$core.addMethod(
$core.method({
selector: "neededVisualizationPackages",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=["corechart","gauge","geochart","table","treemap"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x22\x0a\x09^{'corechart'.'gauge'.'geochart'.'table'.'treemap'}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PopupChartApp.klass);


$core.addClass('ScatterChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ScatterChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("ScatterChart");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ScatterChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:'ScatterChart'.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.ScatterChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._arrayToDataTable_([["Age","Weight"],[(8),(11)],[(4),(5.5)],[(11),(14)],[(4),(5)],[(3),(3)],[(6.5),(7)]]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.ScatterChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a  \x22Return the example dataset\x22\x0a  ^ self arrayToDataTable: { \x0a  \x09\x09\x09\x09\x09\x09\x09{'Age'.'Weight'}.\x0a                            {8 . 11} . \x0a                            { 4 . 5.5} . \x0a                            { 11 . 14 } . \x0a                            { 4 . 5}. \x0a                            {3 . 3} . \x0a                            {6.5 . 7}}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:"]
}),
$globals.ScatterChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["title","Age vs. Weight comparison","hAxis",$globals.HashedCollection._newFromPairs_(["title","Age","minValue",(0),"maxValue",(15)]),"vAxis",$globals.HashedCollection._newFromPairs_(["title","Weight","minValue",(0),"maxValue",(15)]),"legend","none"]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x22options for example dataset\x22\x0a   ^#{\x0a          'title' ->'Age vs. Weight comparison'.\x0a          'hAxis' -> #{'title' -> 'Age'. 'minValue'-> 0. 'maxValue'-> 15}.\x0a          'vAxis'-> #{'title' ->'Weight'. 'minValue'-> 0. 'maxValue'-> 15}.\x0a          'legend' ->'none'\x0a        }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScatterChartExample);



$core.addClass('TableChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.TableChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("Table");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TableChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self chartType:'Table'.\x0a    ^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.TableChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
var data;
function $DataTable(){return $globals.DataTable||(typeof DataTable=="undefined"?nil:DataTable)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
data=$recv($DataTable())._new();
$recv(data)._addColumnType_name_("string","Name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addColumnType:name:"]=1;
//>>excludeEnd("ctx");
$recv(data)._addColumnType_name_("number","Salary");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addColumnType:name:"]=2;
//>>excludeEnd("ctx");
$recv(data)._addColumnType_name_("boolean","Full Time Employee");
$recv(data)._addRows_([["Mike",$globals.HashedCollection._newFromPairs_(["v",(10000),"f","$10,000"]),true],["Jim",$globals.HashedCollection._newFromPairs_(["v",(8000),"f","$8,000"]),false],["Alice",$globals.HashedCollection._newFromPairs_(["v",(12500),"f","$12,500"]),true],["Bob",$globals.HashedCollection._newFromPairs_(["v",(7000),"f","$7,000"]),true]]);
$1=$recv(data)._data();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{data:data},$globals.TableChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x09|data|\x0a    data := DataTable new.\x0a    data addColumnType: 'string' name: 'Name' .\x0a    data addColumnType: 'number' name: 'Salary'  .\x0a    data addColumnType: 'boolean' name: 'Full Time Employee'  .\x0a    data addRows: {\x0a          { 'Mike' .  #{ 'v' -> 10000 .  'f' -> '$10,000' } . true } .\x0a          { 'Jim' .   #{ 'v' -> 8000 .   'f' -> '$8,000'} .  false } .\x0a          { 'Alice' . #{ 'v' -> 12500 . 'f' -> '$12,500'} . true } .\x0a          {'Bob' .   #{ 'v' -> 7000 .  'f' -> '$7,000'} .  true }\x0a        }.\x0a        ^data data",
referencedClasses: ["DataTable"],
//>>excludeEnd("ide");
messageSends: ["new", "addColumnType:name:", "addRows:", "data"]
}),
$globals.TableChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["showRowNumber",true]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x09^ #{'showRowNumber' -> true}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TableChartExample);



$core.addClass('TreeMapChartExample', $globals.GoogleChart, [], 'GoogleChartsExamples');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.TreeMapChartExample.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._chartType_("TreeMap");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TreeMapChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self chartType: 'TreeMap'.\x0a    ^self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "chartType:"]
}),
$globals.TreeMapChartExample);

$core.addMethod(
$core.method({
selector: "makeData",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._arrayToDataTable_([["Location","Parent","Market trade volume (size)","Market increase/decrease (color)"],["Global",null,(0),(0)],["America","Global",(0),(0)],["Europe","Global",(0),(0)],["Asia","Global",(0),(0)],["Australia","Global",(0),(0)],["Africa","Global",(0),(0)],["Brazil","America",(11),(10)],["USA","America",(52),(31)],["Mexico","America",(24),(12)],["Canada","America",(16),(-23)],["France","Europe",(42),(-11)],["Germany","Europe",(31),(-2)],["Sweden","Europe",(22),(-13)],["Italy","Europe",(17),(4)],["UK","Europe",(21),(-5)],["China","Asia",(36),(4)],["Japan","Asia",(20),(-12)],["India","Asia",(40),(63)],["Laos","Asia",(4),(34)],["Mongolia","Asia",(1),(-5)],["Israel","Asia",(12),(24)],["Iran","Asia",(18),(13)],["Pakistan","Asia",(11),(-52)],["Egypt","Africa",(21),(0)],["S. Africa","Africa",(30),(43)],["Sudan","Africa",(12),(2)],["Congo","Africa",(10),(12)],["Zair","Africa",(8),(10)]]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeData",{},$globals.TreeMapChartExample)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeData\x0a\x09^self arrayToDataTable: {\x0a    \x0a     {'Location' .  'Parent' . 'Market trade volume (size)' . 'Market increase/decrease (color)'} .\x0a          { 'Global' .     null .                  0 .                                0} .\x0a          { 'America' .    'Global' .              0 .                                0 } . \x0a          { 'Europe' .     'Global' .              0 .                                0 } . \x0a          { 'Asia' .       'Global' .              0 .                                0 } . \x0a          { 'Australia' .  'Global' .              0 .                                0 } . \x0a          { 'Africa' .     'Global' .              0 .                                0 } . \x0a          { 'Brazil' .     'America' .             11 .                               10 } . \x0a          { 'USA' .        'America' .             52 .                               31 } . \x0a          { 'Mexico' .     'America' .             24 .                               12 } . \x0a          { 'Canada' .     'America' .             16 .                               -23 } . \x0a          { 'France' .     'Europe' .              42 .                               -11 } . \x0a          { 'Germany' .    'Europe' .              31 .                               -2 } . \x0a          { 'Sweden' .     'Europe' .              22 .                               -13 } . \x0a          { 'Italy' .      'Europe' .              17 .                               4 } . \x0a          { 'UK' .         'Europe' .              21 .                               -5 } . \x0a          { 'China' .      'Asia' .                36 .                               4 } . \x0a          { 'Japan' .      'Asia' .                20 .                               -12 } . \x0a          { 'India' .      'Asia' .                40 .                               63 } . \x0a          { 'Laos' .       'Asia' .                4 .                                34 } . \x0a          { 'Mongolia' .   'Asia' .                1 .                                -5 } . \x0a          { 'Israel' .     'Asia' .                12 .                               24 } . \x0a          { 'Iran' .       'Asia' .                18 .                               13 } . \x0a          { 'Pakistan' .   'Asia' .                11 .                               -52 } . \x0a          { 'Egypt' .      'Africa' .              21 .                               0 } . \x0a          { 'S. Africa' .  'Africa' .              30 .                               43 } . \x0a          { 'Sudan' .      'Africa' .              12 .                               2 } . \x0a          { 'Congo' .      'Africa' .              10 .                               12 } . \x0a          { 'Zair' .       'Africa' .              8 .                                10 }\x0a    }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arrayToDataTable:"]
}),
$globals.TreeMapChartExample);

$core.addMethod(
$core.method({
selector: "makeOptions",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["minColor","#f00","midColor","#ddd","maxColor","#0d0","headerHeight",(15),"fontColor","black","showScale",true]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeOptions\x0a\x09^#{  'minColor' -> '#f00' .\x0a          'midColor' -> '#ddd' .\x0a          'maxColor' -> '#0d0' .\x0a          'headerHeight' -> 15 .\x0a          'fontColor' -> 'black' .\x0a          'showScale' ->  true}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TreeMapChartExample);


});
