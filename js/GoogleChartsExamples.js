smalltalk.addPackage('GoogleChartsExamples', {});
smalltalk.addClass('GaugeChartExample', smalltalk.GaugeChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Label","Value"],["Memory",(80)],["CPU",(55)],["Network",(68)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.GaugeChartExample)})},
args: [],
source: "makeData\x0a\x22Example Gauge Data\x22\x0a  ^ self arrayToDataTable: { {'Label'.'Value'}.\x0a    \x09\x09\x09\x09\x09{'Memory' . 80}.\x0a                        {'CPU' . 55}.\x0a                        {'Network' . 68}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.GaugeChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("width").__minus_gt((400)),_st("heigth").__minus_gt((120)),_st("redFrom").__minus_gt((90)),_st("redTo").__minus_gt((100)),_st("yellowFrom").__minus_gt((75)),_st("yellowTo").__minus_gt((90)),_st("minorTicks").__minus_gt((5))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.GaugeChartExample)})},
args: [],
source: "makeOptions\x0a\x22Example Gauge options\x22\x0a   ^#{'width' -> 400. 'heigth'->120.\x0a   'redFrom' -> 90.'redTo' ->100.\x0a   'yellowFrom' -> 75.'yellowTo' ->90.\x0a   'minorTicks' ->5}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.GaugeChartExample);



smalltalk.addClass('GeoChartExample', smalltalk.GeoChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["City","Population","Area"],["Rome",(2761477),(1285.31)],["Milan",(1324110),(181.76)],["Naples",(959574),(117.27)],["Turin",(907563),(130.17)],["Palermo",(655875),(158.9)],["Genoa",(607906),(243.6)],["Bologna",(380181),(140.7)],["Florence",(371282),(102.41)],["Fiumicino",(67370),(213.44)],["Anzio",(52192),(43.43)],["Ciampino",(38262),(11)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.GeoChartExample)})},
args: [],
source: "makeData\x0a\x22Example Geo Data\x22\x0a  ^ self arrayToDataTable: {\x0a{'City'.   'Population' . 'Area'}.\x0a        {'Rome'.      2761477 .    1285.31}.\x0a        {'Milan'.     1324110 .    181.76}.\x0a        {'Naples'.    959574 .    117.27}.\x0a        {'Turin'.     907563 .     130.17}.\x0a        {'Palermo'.   655875 .     158.9}.\x0a        {'Genoa'.     607906 .   243.60}.\x0a        {'Bologna'.   380181 .     140.7}.\x0a        {'Florence'.  371282 .    102.41}.\x0a        {'Fiumicino'. 67370 .      213.44}.\x0a        {'Anzio'.     52192 .      43.43}.\x0a        {'Ciampino'.  38262 .      11} \x0a        }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.GeoChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("region").__minus_gt("IT"),_st("displayMode").__minus_gt("markers"),_st("colorAxis").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("colors").__minus_gt(["green","blue"])]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.GeoChartExample)})},
args: [],
source: "makeOptions\x0a\x22Example Geo Options\x22\x0a\x0a   ^#{\x0a        'region' -> 'IT'.\x0a        'displayMode' -> 'markers'.\x0a        'colorAxis' -> #{'colors'-> {'green'.'blue'}}\x0a      }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.GeoChartExample);



smalltalk.addClass('IndexChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
var pie,id;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
_st(self)._appendToJQuery_(_st("body")._asJQuery());
id=_st(self)._nextId();
pie=_st(_st((smalltalk.PieChartExample || PieChartExample))._new())._chartId_(id);
_st(pie)._appendToJQuery_(_st("body")._asJQuery());
$1=_st(_st("#").__comma(id))._asJQuery();
_st($1)._width_((800));
$2=_st($1)._height_((500));
_st(pie)._drawChart();
$3=smalltalk.ChartApp.fn.prototype._begin.apply(_st(self), []);
return $3;
}, function($ctx1) {$ctx1.fill(self,"begin",{pie:pie,id:id}, smalltalk.IndexChartApp)})},
args: [],
source: "begin\x0a\x09\x22Start the executiong of the ExampleChartApp by connecting each button/graphic pair\x22\x0a     |pie id|\x0a    self appendToJQuery:'body' asJQuery.\x0a    (pie := PieChartExample new chartId:(id := self nextId)) appendToJQuery: 'body' asJQuery.\x0a  \x09( '#' , id ) asJQuery width:800;height:500.\x0a    pie drawChart.\x0a    ^super begin",
messageSends: ["appendToJQuery:", "asJQuery", "chartId:", "nextId", "new", "width:", ",", "height:", "drawChart", "begin"],
referencedClasses: ["PieChartExample"]
}),
smalltalk.IndexChartApp);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
_st(_st(html)._h1())._with_("Google Charts");
$1=_st(html)._button();
_st($1)._with_("class browser");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Browser || Browser))._open();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._a();
_st($3)._href_("popcharts.html");
$4=_st($3)._with_("Try the Pop Charts!");
_st(html)._with_(" example.");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.IndexChartApp)})},
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a    \x09h1 with:'Google Charts'.\x0a    html\x0a    \x09button \x0a        \x09with:'class browser';\x0a            onClick:[Browser open].\x0a    html\x0a    \x09a\x0a        \x09href: 'popcharts.html';\x0a            with: 'Try the Pop Charts!'.\x0a    html with:' example.'.        ",
messageSends: ["with:", "h1", "button", "onClick:", "open", "href:", "a"],
referencedClasses: ["Browser"]
}),
smalltalk.IndexChartApp);


smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
category: 'not yet classified',
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
smalltalk.IndexChartApp.klass);


smalltalk.addClass('PieChartExample', smalltalk.PieChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Task","Hours per Day"],["Work",(11)],["Eat",(2)],["Commute",(2)],["Watch TV",(2)],["Snooze",(7)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.PieChartExample)})},
args: [],
source: "makeData\x0a\x09\x22return a DataTable of example Pie Chart data\x22\x0a\x0a  ^ self arrayToDataTable: { {'Task'.'Hours per Day'}.\x0a    \x09\x09\x09\x09\x09{'Work' . 11}.\x0a                        {'Eat'.2}.\x0a                        {'Commute'.2}.\x0a                        {'Watch TV'.2}.\x0a                        {'Snooze'.7}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.PieChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("My Daily Activities")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.PieChartExample)})},
args: [],
source: "makeOptions\x0a\x09\x22Return a Dictionary of the options in this case only a title\x22\x0a\x09^#{'title' -> 'My Daily Activities'}\x0a",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.PieChartExample);



smalltalk.addClass('PopupChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_addButton_forChart_",
smalltalk.method({
selector: "addButton:forChart:",
category: 'not yet classified',
fn: function (text,chartClass){
var self=this;
var id,chart;
return smalltalk.withContext(function($ctx1) { var $1,$2;
id=_st(self)._nextId();
chart=_st(chartClass)._chartId_(id);
$1=_st((smalltalk.ChartButton || ChartButton))._popUpChart_atDom_(chart,id);
_st($1)._text_(text);
$2=_st($1)._appendToJQuery_(_st("body")._asJQuery());
_st(chart)._appendToJQuery_(_st("body")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"addButton:forChart:",{text:text,chartClass:chartClass,id:id,chart:chart}, smalltalk.PopupChartApp)})},
args: ["text", "chartClass"],
source: "addButton: text  forChart: chartClass\x0a\x09\x22add a popup button and chart\x22\x0a    |id chart|\x0a    id := self nextId.\x0a    ( ChartButton popUpChart:(chart := chartClass chartId:id) atDom:id) text:text;appendToJQuery: 'body' asJQuery.\x0a    chart appendToJQuery: 'body' asJQuery",
messageSends: ["nextId", "text:", "popUpChart:atDom:", "chartId:", "appendToJQuery:", "asJQuery"],
referencedClasses: ["ChartButton"]
}),
smalltalk.PopupChartApp);

smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(self)._appendToJQuery_(_st("body")._asJQuery());
_st(self)._addButton_forChart_("Pop PieChart",(smalltalk.PieChartExample || PieChartExample));
_st(self)._addButton_forChart_("Pop ScatterChart",(smalltalk.ScatterChartExample || ScatterChartExample));
_st(self)._addButton_forChart_("Pop GaugeChart",(smalltalk.GaugeChartExample || GaugeChartExample));
_st(self)._addButton_forChart_("Pop GeoChart",(smalltalk.GeoChartExample || GeoChartExample));
$1=smalltalk.ChartApp.fn.prototype._begin.apply(_st(self), []);
return $1;
}, function($ctx1) {$ctx1.fill(self,"begin",{}, smalltalk.PopupChartApp)})},
args: [],
source: "begin\x0a\x09self appendToJQuery: 'body' asJQuery.\x0a    self addButton:'Pop PieChart' forChart:PieChartExample.\x0a    self addButton:'Pop ScatterChart' forChart:ScatterChartExample.\x0a\x09self addButton:'Pop GaugeChart' forChart:GaugeChartExample.\x0a\x09self addButton:'Pop GeoChart' forChart:GeoChartExample.\x0a    ^super begin",
messageSends: ["appendToJQuery:", "asJQuery", "addButton:forChart:", "begin"],
referencedClasses: ["PieChartExample", "ScatterChartExample", "GaugeChartExample", "GeoChartExample"]
}),
smalltalk.PopupChartApp);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(html)._h1())._with_("My First Google Chart Project");
$1=_st(html)._button();
_st($1)._with_("class browser");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Browser || Browser))._open();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.PopupChartApp)})},
args: ["html"],
source: "renderOn: html\x0a\x09html\x0a    \x09h1 with:'My First Google Chart Project'.\x0a    html\x0a    \x09button \x0a        \x09with:'class browser';\x0a            onClick:[Browser open].",
messageSends: ["with:", "h1", "button", "onClick:", "open"],
referencedClasses: ["Browser"]
}),
smalltalk.PopupChartApp);


smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=["corechart","gauge","geochart"];
return $1;
},
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x22\x0a\x09^{'corechart'.'gauge'.'geochart'}",
messageSends: [],
referencedClasses: []
}),
smalltalk.PopupChartApp.klass);


smalltalk.addClass('ScatterChartExample', smalltalk.ScatterChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Age","Weight"],[(8),(11)],[(4),(5.5)],[(11),(14)],[(4),(5)],[(3),(3)],[(6.5),(7)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.ScatterChartExample)})},
args: [],
source: "makeData\x0a  \x22Return the example dataset\x22\x0a  ^ self arrayToDataTable: { \x0a  \x09\x09\x09\x09\x09\x09\x09{'Age'.'Weight'}.\x0a                            {8 . 11} . \x0a                            { 4 . 5.5} . \x0a                            { 11 . 14 } . \x0a                            { 4 . 5}. \x0a                            {3 . 3} . \x0a                            {6.5 . 7}}\x0a     ",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.ScatterChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Age vs. Weight comparison"),_st("hAxis").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Age"),_st("minValue").__minus_gt((0)),_st("maxValue").__minus_gt((15))])),_st("vAxis").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Weight"),_st("minValue").__minus_gt((0)),_st("maxValue").__minus_gt((15))])),_st("legend").__minus_gt("none")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.ScatterChartExample)})},
args: [],
source: "makeOptions\x0a\x22options for example dataset\x22\x0a   ^#{\x0a          'title' ->'Age vs. Weight comparison'.\x0a          'hAxis' -> #{'title' -> 'Age'. 'minValue'-> 0. 'maxValue'-> 15}.\x0a          'vAxis'-> #{'title' ->'Weight'. 'minValue'-> 0. 'maxValue'-> 15}.\x0a          'legend' ->'none'\x0a        }",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.ScatterChartExample);



