smalltalk.addPackage('GoogleChartsExamples', {});
smalltalk.addClass('AreaChartExample', smalltalk.AreaChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.AreaChartExample)})}
}),
smalltalk.AreaChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Company Performance"),_st("hAxis").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Year"),_st("titleTextStyle").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("color").__minus_gt("red")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.AreaChartExample)})}
}),
smalltalk.AreaChartExample);



smalltalk.addClass('BarChartExample', smalltalk.BarChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.BarChartExample)})}
}),
smalltalk.BarChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Company Performance"),_st("vAxis").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Year"),_st("titleTextStyle").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("color").__minus_gt("red")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.BarChartExample)})}
}),
smalltalk.BarChartExample);



smalltalk.addClass('CandlestickChartExample', smalltalk.CandlestickChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_firstRowAsData_([["Mon",(20),(28),(38),(45)],["Tue",(31),(38),(55),(66)],["Wed",(50),(55),(77),(80)],["Thu",(77),(77),(66),(50)],["Fri",(68),(66),(22),(15)]],true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.CandlestickChartExample)})}
}),
smalltalk.CandlestickChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("legend").__minus_gt("none")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.CandlestickChartExample)})}
}),
smalltalk.CandlestickChartExample);



smalltalk.addClass('ChartButton', smalltalk.Widget, ['element', 'clickBlock', 'text'], 'GoogleChartsExamples');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
var button;
return smalltalk.withContext(function($ctx1) { button=_st(_st("#").__comma(_st(self)._element()))._asJQuery();
_st(button)._click_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"activate",{button:button}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock",
smalltalk.method({
selector: "clickBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@clickBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"clickBlock",{}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock_",
smalltalk.method({
selector: "clickBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@clickBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"clickBlock:",{aBlock:aBlock}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element_",
smalltalk.method({
selector: "element:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@element"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{aString:aString}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._button();
_st($1)._with_(_st(self)._text());
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._clickBlock())._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_text",
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@text"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@text"]="";
$1=self["@text"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_text_",
smalltalk.method({
selector: "text:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@text"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aString:aString}, smalltalk.ChartButton)})}
}),
smalltalk.ChartButton);


smalltalk.addMethod(
"_element_clickBlock_",
smalltalk.method({
selector: "element:clickBlock:",
fn: function (element,clickBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._element_(element);
_st($2)._clickBlock_(clickBlock);
_st($2)._activate();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"element:clickBlock:",{element:element,clickBlock:clickBlock}, smalltalk.ChartButton.klass)})}
}),
smalltalk.ChartButton.klass);

smalltalk.addMethod(
"_popUpChart_atDom_",
smalltalk.method({
selector: "popUpChart:atDom:",
fn: function (chart,element){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._element_clickBlock_(element,(function(){
return smalltalk.withContext(function($ctx2) {return _st(chart)._drawChart();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"popUpChart:atDom:",{chart:chart,element:element}, smalltalk.ChartButton.klass)})}
}),
smalltalk.ChartButton.klass);


smalltalk.addClass('ColumnChartExample', smalltalk.ColumnChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.ColumnChartExample)})}
}),
smalltalk.ColumnChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Company Performance"),_st("hAxis").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Year"),_st("titleTextStyle").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("color").__minus_gt("red")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.ColumnChartExample)})}
}),
smalltalk.ColumnChartExample);



smalltalk.addClass('ComboChartExample', smalltalk.ComboChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Month","Bolivia","Ecuador","Madagascar","Papua New Guinea","Rwanda","Average"],["2004/05",(165),(938),(522),(998),(450),(614.6)],["2005/06",(135),(1120),(599),(1268),(288),(682)],["2006/07",(157),(1167),(587),(807),(397),(623)],["2007/08",(139),(1110),(615),(968),(215),(609.4)],["2008/09",(136),(691),(629),(1026),(366),(569.6)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.ComboChartExample)})}
}),
smalltalk.ComboChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Monthly Coffee Production by Country"),_st("vAxis").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Cups")])),_st("hAxis").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Month")])),_st("seriesType").__minus_gt("bars"),_st("series").__minus_gt(smalltalk.HashedCollection._fromPairs_([_st((5)).__minus_gt(smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("line")]))]))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.ComboChartExample)})}
}),
smalltalk.ComboChartExample);



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
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._button();
_st($1)._with_("class browser");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st((smalltalk.Browser || Browser))._open();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {$3=_st(html)._a();
_st($3)._href_("popcharts.html");
$4=_st($3)._with_("Try the Pop Charts!");
$4;
return _st(html)._with_(" example.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
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


smalltalk.addClass('LineChartExample', smalltalk.LineChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Year","Sales","Expenses"],["2004",(1000),(400)],["2005",(1170),(460)],["2006",(660),(1120)],["2007",(1030),(540)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.LineChartExample)})}
}),
smalltalk.LineChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("title").__minus_gt("Company Performance")]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.LineChartExample)})}
}),
smalltalk.LineChartExample);



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
_st(self)._addButton_forChart_("Pop TableChart",(smalltalk.TableChartExample || TableChartExample));
_st(self)._addButton_forChart_("Pop TreeMapChart",(smalltalk.TreeMapChartExample || TreeMapChartExample));
_st(self)._addButton_forChart_("Pop ComboChart",(smalltalk.ComboChartExample || ComboChartExample));
_st(self)._addButton_forChart_("Pop LineChart",(smalltalk.LineChartExample || LineChartExample));
_st(self)._addButton_forChart_("Pop BarChart",(smalltalk.BarChartExample || BarChartExample));
_st(self)._addButton_forChart_("Pop ColumnChart",(smalltalk.ColumnChartExample || ColumnChartExample));
_st(self)._addButton_forChart_("Pop AreaChart",(smalltalk.AreaChartExample || AreaChartExample));
_st(self)._addButton_forChart_("Pop CandlestickChart",(smalltalk.CandlestickChartExample || CandlestickChartExample));
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
_st(_st(html)._h1())._with_("Press a Button to Popup a Chart!");
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._button();
_st($1)._with_("class browser");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st((smalltalk.Browser || Browser))._open();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=["corechart","gauge","geochart","table","treemap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"neededVisualizationPackages",{}, smalltalk.PopupChartApp.klass)})}
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



smalltalk.addClass('TableChartExample', smalltalk.TableChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var data;
return smalltalk.withContext(function($ctx1) { var $1;
data=_st((smalltalk.DataTable || DataTable))._new();
_st(data)._addColumnType_name_("string","Name");
_st(data)._addColumnType_name_("number","Salary");
_st(data)._addColumnType_name_("boolean","Full Time Employee");
_st(data)._addRows_([["Mike",smalltalk.HashedCollection._fromPairs_([_st("v").__minus_gt((10000)),_st("f").__minus_gt("$10,000")]),true],["Jim",smalltalk.HashedCollection._fromPairs_([_st("v").__minus_gt((8000)),_st("f").__minus_gt("$8,000")]),false],["Alice",smalltalk.HashedCollection._fromPairs_([_st("v").__minus_gt((12500)),_st("f").__minus_gt("$12,500")]),true],["Bob",smalltalk.HashedCollection._fromPairs_([_st("v").__minus_gt((7000)),_st("f").__minus_gt("$7,000")]),true]]);
$1=_st(data)._data();
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{data:data}, smalltalk.TableChartExample)})}
}),
smalltalk.TableChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("showRowNumber").__minus_gt(true)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.TableChartExample)})}
}),
smalltalk.TableChartExample);



smalltalk.addClass('TreeMapChartExample', smalltalk.TreeMapChart, [], 'GoogleChartsExamples');
smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._arrayToDataTable_([["Location","Parent","Market trade volume (size)","Market increase/decrease (color)"],["Global",null,(0),(0)],["America","Global",(0),(0)],["Europe","Global",(0),(0)],["Asia","Global",(0),(0)],["Australia","Global",(0),(0)],["Africa","Global",(0),(0)],["Brazil","America",(11),(10)],["USA","America",(52),(31)],["Mexico","America",(24),(12)],["Canada","America",(16),(-23)],["France","Europe",(42),(-11)],["Germany","Europe",(31),(-2)],["Sweden","Europe",(22),(-13)],["Italy","Europe",(17),(4)],["UK","Europe",(21),(-5)],["China","Asia",(36),(4)],["Japan","Asia",(20),(-12)],["India","Asia",(40),(63)],["Laos","Asia",(4),(34)],["Mongolia","Asia",(1),(-5)],["Israel","Asia",(12),(24)],["Iran","Asia",(18),(13)],["Pakistan","Asia",(11),(-52)],["Egypt","Africa",(21),(0)],["S. Africa","Africa",(30),(43)],["Sudan","Africa",(12),(2)],["Congo","Africa",(10),(12)],["Zair","Africa",(8),(10)]]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeData",{}, smalltalk.TreeMapChartExample)})}
}),
smalltalk.TreeMapChartExample);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st(_st(_st("minColor").__minus_gt("#f00")).__comma("midColor")).__minus_gt("#ddd"),_st("maxColor").__minus_gt("#0d0"),_st("headerHeight").__minus_gt((15)),_st("fontColor").__minus_gt("black"),_st("showScale").__minus_gt(true)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"makeOptions",{}, smalltalk.TreeMapChartExample)})}
}),
smalltalk.TreeMapChartExample);



