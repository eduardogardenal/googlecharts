smalltalk.addPackage('GoogleCharts', {});
smalltalk.addClass('ChartApp', smalltalk.Object, [], 'GoogleCharts');
smalltalk.ChartApp.comment="A chart app is an example App which loads the google JSAPI and visualization API."
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
return self;
},
args: [],
source: "begin\x0a\x09\x22Start the executiong of the ChartApp\x22\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_class",[]),"_loadGoogleLoader_",[(function(){
return smalltalk.send(smalltalk.send(self,"_class",[]),"_loadVisualization_",[(function(){
return smalltalk.send(self,"_begin",[]);
})]);
})]);
return self},
args: [],
source: "initialize\x0a\x09\x22Load my external JS\x22\x0a    self class loadGoogleLoader:[self class loadVisualization:[self begin]]\x0a  ",
messageSends: ["loadGoogleLoader:", "loadVisualization:", "begin", "class"],
referencedClasses: []
}),
smalltalk.ChartApp);


smalltalk.addMethod(
"_loadGoogleLoader_",
smalltalk.method({
selector: "loadGoogleLoader:",
category: 'not yet classified',
fn: function (callback){
var self=this;
$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});;
;
return self},
args: ["callback"],
source: "loadGoogleLoader: callback\x0a\x09\x22Load the Google JSAPI - Use JQuery.ajax() since that is available\x22\x0a\x09<$.ajax({url:\x22https://www.google.com/jsapi\x22,dataType:\x22script\x22,success:callback});>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
"_loadVisualization_",
smalltalk.method({
selector: "loadVisualization:",
category: 'not yet classified',
fn: function (callback){
var self=this;
var packages;
packages=smalltalk.send(self,"_neededVisualizationPackages",[]);
google.load("visualization","1",{"callback" : callback , "packages":packages});;
;
return self},
args: ["callback"],
source: "loadVisualization: callback\x0a\x09\x22Use google.load() to load visualization and load the needed packages\x22\x0a    |packages|\x0a    packages := self neededVisualizationPackages.\x0a    <google.load(\x22visualization\x22,\x221\x22,{\x22callback\x22 : callback , \x22packages\x22:packages});>",
messageSends: ["neededVisualizationPackages"],
referencedClasses: []
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=[];
return $1;
},
args: [],
source: "neededVisualizationPackages\x0a\x22This is a hook for subclasses to define which visualization packages to load.\x22\x0a\x09^{}",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp.klass);


smalltalk.addClass('ExampleChartApp', smalltalk.ChartApp, [], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
smalltalk.send(smalltalk.send((smalltalk.PieChart || PieChart),"_new",[]),"_begin",[]);
smalltalk.send(smalltalk.send((smalltalk.ScatterChart || ScatterChart),"_new",[]),"_begin",[]);
smalltalk.send(smalltalk.send((smalltalk.GaugeChart || GaugeChart),"_new",[]),"_begin",[]);
smalltalk.send(smalltalk.send((smalltalk.GeoChart || GeoChart),"_new",[]),"_begin",[]);
$1=smalltalk.send(self,"_begin",[],smalltalk.ChartApp);
return $1;
},
args: [],
source: "begin\x0a\x09\x22Start the executiong of the ExampleChartApp by connecting each button/graphic pair\x22\x0a    PieChart new begin.\x0a    ScatterChart new begin.\x0a    GaugeChart new begin.\x0a    GeoChart new begin.\x0a    ^super begin",
messageSends: ["begin", "new"],
referencedClasses: ["PieChart", "ScatterChart", "GaugeChart", "GeoChart"]
}),
smalltalk.ExampleChartApp);


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
smalltalk.ExampleChartApp.klass);


smalltalk.addClass('ChartButton', smalltalk.Object, ['element', 'clickBlock'], 'GoogleCharts');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
category: 'not yet classified',
fn: function (){
var self=this;
var button;
button=smalltalk.send(smalltalk.send(self,"_element",[]),"_asJQuery",[]);
smalltalk.send(button,"_click_",[(function(){
return smalltalk.send(smalltalk.send(self,"_clickBlock",[]),"_value",[]);
})]);
return self},
args: [],
source: "activate\x0a\x09|button|\x0a\x09button := self element asJQuery.\x0a    button click:[self clickBlock value]",
messageSends: ["asJQuery", "element", "click:", "value", "clickBlock"],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock",
smalltalk.method({
selector: "clickBlock",
category: 'not yet classified',
fn: function (){
var self=this;
return self["@clickBlock"];
},
args: [],
source: "clickBlock\x0a\x09^clickBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock_",
smalltalk.method({
selector: "clickBlock:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
self["@clickBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "clickBlock: aBlock\x0a\x09clickBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
category: 'not yet classified',
fn: function (){
var self=this;
return self["@element"];
},
args: [],
source: "element\x0a\x09^element",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element_",
smalltalk.method({
selector: "element:",
category: 'not yet classified',
fn: function (aSymbol){
var self=this;
self["@element"]=aSymbol;
return self},
args: ["aSymbol"],
source: "element: aSymbol\x0a\x09element := aSymbol",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartButton);


smalltalk.addMethod(
"_element_clickBlock_",
smalltalk.method({
selector: "element:clickBlock:",
category: 'not yet classified',
fn: function (elementSymbol,clickBlock){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_element_",[elementSymbol]);
smalltalk.send($2,"_clickBlock_",[clickBlock]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["elementSymbol", "clickBlock"],
source: "element: elementSymbol clickBlock: clickBlock\x0a\x09^self new element: elementSymbol; clickBlock: clickBlock;yourself",
messageSends: ["element:", "new", "clickBlock:", "yourself"],
referencedClasses: []
}),
smalltalk.ChartButton.klass);


smalltalk.addClass('GoogleChart', smalltalk.Object, ['chartId', 'chartType'], 'GoogleCharts');
smalltalk.addMethod(
"_arrayToDataTable_",
smalltalk.method({
selector: "arrayToDataTable:",
category: 'not yet classified',
fn: function (array){
var self=this;
var $1;
$1=google.visualization.arrayToDataTable(array);
;
return $1;
},
args: ["array"],
source: "arrayToDataTable: array\x0a\x0a\x09^ <google.visualization.arrayToDataTable(array)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
var button;
smalltalk.send(self,"_connectToButton_",["#popPieChart"]);
return self},
args: [],
source: "begin\x0a    | button|\x0a    self connectToButton:  '#popPieChart'.",
messageSends: ["connectToButton:"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartId",
smalltalk.method({
selector: "chartId",
category: 'not yet classified',
fn: function (){
var self=this;
return self["@chartId"];
},
args: [],
source: "chartId\x0a\x09^chartId",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartId_",
smalltalk.method({
selector: "chartId:",
category: 'not yet classified',
fn: function (aString){
var self=this;
self["@chartId"]=aString;
return self},
args: ["aString"],
source: "chartId: aString\x0a\x09chartId := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartType",
smalltalk.method({
selector: "chartType",
category: 'not yet classified',
fn: function (){
var self=this;
return self["@chartType"];
},
args: [],
source: "chartType\x0a\x09^ chartType",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartType_",
smalltalk.method({
selector: "chartType:",
category: 'not yet classified',
fn: function (aString){
var self=this;
self["@chartType"]=aString;
return self},
args: ["aString"],
source: "chartType: aString\x0a\x09chartType := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_connectToButton_",
smalltalk.method({
selector: "connectToButton:",
category: 'not yet classified',
fn: function (aSym){
var self=this;
var button;
button=smalltalk.send((smalltalk.ChartButton || ChartButton),"_element_clickBlock_",[aSym,(function(){
return smalltalk.send(self,"_drawChart",[]);
})]);
smalltalk.send(button,"_activate",[]);
return self},
args: ["aSym"],
source: "connectToButton: aSym\x0a    | button|\x0a    button := ChartButton element: aSym clickBlock:[self drawChart].\x0a    button activate",
messageSends: ["element:clickBlock:", "drawChart", "activate"],
referencedClasses: ["ChartButton"]
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_drawChart",
smalltalk.method({
selector: "drawChart",
category: 'not yet classified',
fn: function (){
var self=this;
var chart;
var data;
var options;
data=smalltalk.send(self,"_makeData",[]);
chart=smalltalk.send(self,"_makeChart_",[smalltalk.send(self,"_chartId",[])]);
options=smalltalk.send(self,"_makeOptions",[]);
smalltalk.send(self,"_drawChart_data_options_",[chart,data,options]);
return self},
args: [],
source: "drawChart\x0a    |  chart data options|\x0a     data := self makeData.\x0a     chart :=self makeChart:self chartId.\x0a     options :=self makeOptions.\x0a     self drawChart: chart data: data options: options\x0a",
messageSends: ["makeData", "makeChart:", "chartId", "makeOptions", "drawChart:data:options:"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_drawChart_data_options_",
smalltalk.method({
selector: "drawChart:data:options:",
category: 'not yet classified',
fn: function (chart,data,options){
var self=this;
chart.draw(data,options);
;
return self},
args: ["chart", "data", "options"],
source: "drawChart: chart data: data options: options\x0a \x09<chart.draw(data,options)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_getElementById_",
smalltalk.method({
selector: "getElementById:",
category: 'not yet classified',
fn: function (id){
var self=this;
var $1;
$1=document.getElementById(id);
;
return $1;
},
args: ["id"],
source: "getElementById: id\x0a\x0a\x09^ <document.getElementById(id)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return self;
},
args: [],
source: "initialize\x0a\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeChart_",
smalltalk.method({
selector: "makeChart:",
category: 'not yet classified',
fn: function (id){
var self=this;
var $1;
var e;
var t;
e=smalltalk.send(self,"_getElementById_",[id]);
t=smalltalk.send(self,"_chartType",[]);
$1=smalltalk.send(self,"_makeGoogle_id_",[t,id]);
return $1;
},
args: ["id"],
source: "makeChart: id\x0a\x09|e t|\x0a    e := self getElementById:id.\x0a    t := self chartType.\x0a\x09^ self makeGoogle:t id:id",
messageSends: ["getElementById:", "chartType", "makeGoogle:id:"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassresponsibility",[]);
return $1;
},
args: [],
source: "makeData\x0a\x0a  \x09 ^self subclassresponsibility",
messageSends: ["subclassresponsibility"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeGoogle_id_",
smalltalk.method({
selector: "makeGoogle:id:",
category: 'not yet classified',
fn: function (type,id){
var self=this;
var $1;
var e;
e=smalltalk.send(self,"_getElementById_",[id]);
$1=new google.visualization[type](e);
;
return $1;
},
args: ["type", "id"],
source: "makeGoogle: type id: id\x0a\x09|e|\x0a    e := self getElementById:id.\x0a\x09^ <new google.visualization[type](e)>",
messageSends: ["getElementById:"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassresponsibility",[]);
return $1;
},
args: [],
source: "makeOptions\x0a   ^\x09 self subclassresponsibility",
messageSends: ["subclassresponsibility"],
referencedClasses: []
}),
smalltalk.GoogleChart);



smalltalk.addClass('GaugeChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
var button;
smalltalk.send(self,"_connectToButton_",["#popGaugeChart"]);
return self},
args: [],
source: "begin\x0a   \x22Connect this object to handle a button with the given id\x22\x0a    | button|\x0a    self connectToButton:  '#popGaugeChart'.",
messageSends: ["connectToButton:"],
referencedClasses: []
}),
smalltalk.GaugeChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_chartId_",["gauge_chart_div"]);
smalltalk.send(self,"_chartType_",["Gauge"]);
return self;
},
args: [],
source: "initialize\x0a\x09\x22 Create a Guage with the chartId that identifies the chart graphic placement and the chartType to be created at that id.\x22\x0a\x09self chartId:'gauge_chart_div'.\x0a    self chartType:'Gauge'.\x0a\x09^self",
messageSends: ["chartId:", "chartType:"],
referencedClasses: []
}),
smalltalk.GaugeChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Label","Value"],["Memory",(80)],["CPU",(55)],["Network",(68)]]]);
return $1;
},
args: [],
source: "makeData\x0a\x0a  ^ self arrayToDataTable: { {'Label'.'Value'}.\x0a    \x09\x09\x09\x09\x09{'Memory' . 80}.\x0a                        {'CPU' . 55}.\x0a                        {'Network' . 68}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.GaugeChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1={width:400, heigth:120,
   redFrom:90,redTo:100,
   yellowFrom:75,yellowTo:90,
   minorTicks:5};
;
return $1;
},
args: [],
source: "makeOptions\x0a   ^<{width:400, heigth:120,\x0a   redFrom:90,redTo:100,\x0a   yellowFrom:75,yellowTo:90,\x0a   minorTicks:5}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GaugeChart);



smalltalk.addClass('GeoChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
var button;
smalltalk.send(self,"_connectToButton_",["#popGeoMarkersChart"]);
return self},
args: [],
source: "begin\x0a    | button|\x0a    self connectToButton:  '#popGeoMarkersChart'.",
messageSends: ["connectToButton:"],
referencedClasses: []
}),
smalltalk.GeoChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_chartId_",["geo_markers_chart_div"]);
smalltalk.send(self,"_chartType_",["GeoChart"]);
return self;
},
args: [],
source: "initialize\x0a\x09\x22 Create a Geo Chart\x22\x0a\x09self chartId:'geo_markers_chart_div'.\x0a    self chartType:'GeoChart'.\x0a\x09^self",
messageSends: ["chartId:", "chartType:"],
referencedClasses: []
}),
smalltalk.GeoChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["City","Population","Area"],["Rome",(2761477),(1285.31)],["Milan",(1324110),(181.76)],["Naples",(959574),(117.27)],["Turin",(907563),(130.17)],["Palermo",(655875),(158.9)],["Genoa",(607906),(243.6)],["Bologna",(380181),(140.7)],["Florence",(371282),(102.41)],["Fiumicino",(67370),(213.44)],["Anzio",(52192),(43.43)],["Ciampino",(38262),(11)]]]);
return $1;
},
args: [],
source: "makeData\x0a\x0a  ^ self arrayToDataTable: {\x0a{'City'.   'Population' . 'Area'}.\x0a        {'Rome'.      2761477 .    1285.31}.\x0a        {'Milan'.     1324110 .    181.76}.\x0a        {'Naples'.    959574 .    117.27}.\x0a        {'Turin'.     907563 .     130.17}.\x0a        {'Palermo'.   655875 .     158.9}.\x0a        {'Genoa'.     607906 .   243.60}.\x0a        {'Bologna'.   380181 .     140.7}.\x0a        {'Florence'.  371282 .    102.41}.\x0a        {'Fiumicino'. 67370 .      213.44}.\x0a        {'Anzio'.     52192 .      43.43}.\x0a        {'Ciampino'.  38262 .      11} \x0a        }",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.GeoChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1={
        region: 'IT',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']}
      };
;
return $1;
},
args: [],
source: "makeOptions\x0a\x0a\x0a   ^<{\x0a        region: 'IT',\x0a        displayMode: 'markers',\x0a        colorAxis: {colors: ['green', 'blue']}\x0a      }>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GeoChart);



smalltalk.addClass('PieChart', smalltalk.GoogleChart, ['chartId'], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
var button;
smalltalk.send(self,"_connectToButton_",["#popPieChart"]);
return self},
args: [],
source: "begin\x0a    | button|\x0a    self connectToButton:  '#popPieChart'.",
messageSends: ["connectToButton:"],
referencedClasses: []
}),
smalltalk.PieChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_chartId_",["pie_chart_div"]);
smalltalk.send(self,"_chartType_",["PieChart"]);
return self;
},
args: [],
source: "initialize\x0a\x09self chartId:'pie_chart_div'.\x0a    self chartType:'PieChart'.\x0a\x09^self",
messageSends: ["chartId:", "chartType:"],
referencedClasses: []
}),
smalltalk.PieChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Task","Hours per Day"],["Work",(11)],["Eat",(2)],["Commute",(2)],["Watch TV",(2)],["Snooze",(7)]]]);
return $1;
},
args: [],
source: "makeData\x0a\x0a  ^ self arrayToDataTable: { {'Task'.'Hours per Day'}.\x0a    \x09\x09\x09\x09\x09{'Work' . 11}.\x0a                        {'Eat'.2}.\x0a                        {'Commute'.2}.\x0a                        {'Watch TV'.2}.\x0a                        {'Snooze'.7}}",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.PieChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1={title: 'My Daily Activities'};
;
return $1;
},
args: [],
source: "makeOptions\x0a   ^<{title: 'My Daily Activities'}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.PieChart);



smalltalk.addClass('ScatterChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
var button;
smalltalk.send(self,"_connectToButton_",["#popScatterChart"]);
return self},
args: [],
source: "begin\x0a    | button|\x0a    self connectToButton:  '#popScatterChart'.",
messageSends: ["connectToButton:"],
referencedClasses: []
}),
smalltalk.ScatterChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_chartId_",["scatter_chart_div"]);
smalltalk.send(self,"_chartType_",["ScatterChart"]);
return self;
},
args: [],
source: "initialize\x0a\x09self chartId:'scatter_chart_div'.\x0a    self chartType:'ScatterChart'.\x0a\x09^self",
messageSends: ["chartId:", "chartType:"],
referencedClasses: []
}),
smalltalk.ScatterChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Age","Weight"],[(8),(11)],[(4),(5.5)],[(11),(14)],[(4),(5)],[(3),(3)],[(6.5),(7)]]]);
return $1;
},
args: [],
source: "makeData\x0a  \x0a  ^ self arrayToDataTable: { \x0a  \x09\x09\x09\x09\x09\x09\x09{'Age'.'Weight'}.\x0a                            {8 . 11} . \x0a                            { 4 . 5.5} . \x0a                            { 11 . 14 } . \x0a                            { 4 . 5}. \x0a                            {3 . 3} . \x0a                            {6.5 . 7}}\x0a     ",
messageSends: ["arrayToDataTable:"],
referencedClasses: []
}),
smalltalk.ScatterChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1={
          title: 'Age vs. Weight comparison',
          hAxis: {title: 'Age', minValue: 0, maxValue: 15},
          vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
          legend: 'none'
        };
;
return $1;
},
args: [],
source: "makeOptions\x0a   ^<{\x0a          title: 'Age vs. Weight comparison',\x0a          hAxis: {title: 'Age', minValue: 0, maxValue: 15},\x0a          vAxis: {title: 'Weight', minValue: 0, maxValue: 15},\x0a          legend: 'none'\x0a        }>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ScatterChart);



