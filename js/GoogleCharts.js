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
"_button_",
smalltalk.method({
selector: "button:",
category: 'not yet classified',
fn: function (aSym){
var self=this;
smalltalk.send(self,"_connectToButton_",[aSym]);
return self},
args: ["aSym"],
source: "button: aSym\x0a\x0a\x09self connectToButton: aSym",
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
source: "initialize\x0a\x09^self",
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


smalltalk.addMethod(
"_chartId_",
smalltalk.method({
selector: "chartId:",
category: 'not yet classified',
fn: function (aString){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_chartId",[]);
smalltalk.send($2,"_aString",[]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aString"],
source: "chartId: aString\x0a\x09^self new chartId;aString;yourself",
messageSends: ["chartId", "new", "aString", "yourself"],
referencedClasses: []
}),
smalltalk.GoogleChart.klass);

smalltalk.addMethod(
"_chartId_button_",
smalltalk.method({
selector: "chartId:button:",
category: 'not yet classified',
fn: function (aString,aButton){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_chartId_",[aString]);
smalltalk.send($2,"_connectToButton_",[aButton]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aString", "aButton"],
source: "chartId: aString button: aButton\x0a\x09\x22Create a chart for a locationID connected to a popup button\x22\x0a\x09^self new chartId:aString;connectToButton:aButton;yourself",
messageSends: ["chartId:", "new", "connectToButton:", "yourself"],
referencedClasses: []
}),
smalltalk.GoogleChart.klass);


smalltalk.addClass('GaugeChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["Gauge"]);
return self;
},
args: [],
source: "initialize\x0a\x09\x22 Create a Guage with the chartId that identifies the chart graphic placement and the chartType to be created at that id.\x22\x0a    super initialize.\x0a    self chartType:'Gauge'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.GaugeChart);



smalltalk.addClass('GeoChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["GeoChart"]);
return self;
},
args: [],
source: "initialize\x0a\x09\x22 Create a Geo Chart\x22\x0a    super initialize.\x0a    self chartType:'GeoChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.GeoChart);



smalltalk.addClass('PieChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["PieChart"]);
return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:'PieChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.PieChart);



smalltalk.addClass('ScatterChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["ScatterChart"]);
return self;
},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self chartType:'ScatterChart'.\x0a\x09^self",
messageSends: ["initialize", "chartType:"],
referencedClasses: []
}),
smalltalk.ScatterChart);



