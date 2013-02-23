smalltalk.addPackage('GoogleChartsExamples', {});
smalltalk.addClass('GaugeChartExample', smalltalk.GaugeChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Label","Value"],["Memory",(80)],["CPU",(55)],["Network",(68)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.GaugeChartExample)})}
}),
smalltalk.GaugeChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("width").__minus_gt((400)),_st("heigth").__minus_gt((120)),_st("redFrom").__minus_gt((90)),_st("redTo").__minus_gt((100)),_st("yellowFrom").__minus_gt((75)),_st("yellowTo").__minus_gt((90)),_st("minorTicks").__minus_gt((5))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.GaugeChartExample)})}
}),
smalltalk.GaugeChartExample);



smalltalk.addClass('GeoChartExample', smalltalk.GeoChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["City","Population","Area"],["Rome",(2761477),(1285.31)],["Milan",(1324110),(181.76)],["Naples",(959574),(117.27)],["Turin",(907563),(130.17)],["Palermo",(655875),(158.9)],["Genoa",(607906),(243.6)],["Bologna",(380181),(140.7)],["Florence",(371282),(102.41)],["Fiumicino",(67370),(213.44)],["Anzio",(52192),(43.43)],["Ciampino",(38262),(11)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.GeoChartExample)})}
}),
smalltalk.GeoChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("region").__minus_gt("IT"),_st("displayMode").__minus_gt("markers"),_st("colorAxis").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("colors").__minus_gt(["green","blue"])]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.GeoChartExample)})}
}),
smalltalk.GeoChartExample);



smalltalk.addClass('IndexChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
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
}, function($ctx1) {$ctx1.fill(self,"begin",{pie:pie,id:id}, smalltalk.IndexChartApp)})}
}),
smalltalk.IndexChartApp);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.IndexChartApp)})}
}),
smalltalk.IndexChartApp);


smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
fn: function (){
var self=this;
var $1;
$1=["corechart"];
return $1;
}
}),
smalltalk.IndexChartApp.klass);


smalltalk.addClass('PieChartExample', smalltalk.PieChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Task","Hours per Day"],["Work",(11)],["Eat",(2)],["Commute",(2)],["Watch TV",(2)],["Snooze",(7)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.PieChartExample)})}
}),
smalltalk.PieChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("My Daily Activities")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.PieChartExample)})}
}),
smalltalk.PieChartExample);



smalltalk.addClass('PopupChartApp', smalltalk.ChartApp, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_addButton_forChart_",
smalltalk.method({
selector: "addButton:forChart:",
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
return self}, function($ctx1) {$ctx1.fill(self,"addButton:forChart:",{text:text,chartClass:chartClass,id:id,chart:chart}, smalltalk.PopupChartApp)})}
}),
smalltalk.PopupChartApp);

smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
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
}, function($ctx1) {$ctx1.fill(self,"begin",{}, smalltalk.PopupChartApp)})}
}),
smalltalk.PopupChartApp);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(html)._h1())._with_("My First Google Chart Project");
$1=_st(html)._button();
_st($1)._with_("class browser");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Browser || Browser))._open();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.PopupChartApp)})}
}),
smalltalk.PopupChartApp);


smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
fn: function (){
var self=this;
var $1;
$1=["corechart","gauge","geochart"];
return $1;
}
}),
smalltalk.PopupChartApp.klass);


smalltalk.addClass('ScatterChartExample', smalltalk.ScatterChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Age","Weight"],[(8),(11)],[(4),(5.5)],[(11),(14)],[(4),(5)],[(3),(3)],[(6.5),(7)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.ScatterChartExample)})}
}),
smalltalk.ScatterChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Age vs. Weight comparison"),_st("hAxis").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Age"),_st("minValue").__minus_gt((0)),_st("maxValue").__minus_gt((15))])),_st("vAxis").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Weight"),_st("minValue").__minus_gt((0)),_st("maxValue").__minus_gt((15))])),_st("legend").__minus_gt("none")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.ScatterChartExample)})}
}),
smalltalk.ScatterChartExample);



