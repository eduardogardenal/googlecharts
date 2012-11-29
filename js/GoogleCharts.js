smalltalk.addPackage('GoogleCharts', {});
smalltalk.addClass('ChartApp', smalltalk.Object, [], 'GoogleCharts');
smalltalk.ChartApp.comment="A chart app is an example App which loads the google JSAPI and visualization API."
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
category: 'init',
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
"_buildPieChartAt_data_options_",
smalltalk.method({
selector: "buildPieChartAt:data:options:",
category: 'init',
fn: function (domID,data,options){
var self=this;
var chart;
chart=smalltalk.send((smalltalk.GoogleChart || GoogleChart),"_domId_type_data_options_",[domID,"PieChart",data,options]);
smalltalk.send(self,"_register_require_",[chart,["corechart"]]);
return chart;
},
args: ["domID", "data", "options"],
source: "buildPieChartAt: domID data: data options: options\x0a\x09\x22\x22\x0a\x09|chart|\x0a    chart := GoogleChart domId: domID type: 'PieChart' data: data options: options.\x0a    self register: chart require: {'corechart'}.\x0a    ^chart",
messageSends: ["domId:type:data:options:", "register:require:"],
referencedClasses: ["GoogleChart"]
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'init',
fn: function (){
var self=this;
smalltalk.send((smalltalk.GoogleLoader || GoogleLoader),"_onLoadCallback_",[(function(){
return smalltalk.send(smalltalk.send(self,"_class",[]),"_loadVisualization_",[(function(){
return smalltalk.send(self,"_begin",[]);
})]);
})]);
return self},
args: [],
source: "initialize\x0a\x09\x22Load my external JS\x22\x0a    GoogleLoader onLoadCallback:[self class loadVisualization:[self begin]]\x0a  ",
messageSends: ["onLoadCallback:", "loadVisualization:", "begin", "class"],
referencedClasses: ["GoogleLoader"]
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_register_",
smalltalk.method({
selector: "register:",
category: 'init',
fn: function (aChartGadget){
var self=this;
return aChartGadget;
},
args: ["aChartGadget"],
source: "register: aChartGadget\x0a\x0a\x09^aChartGadget\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_register_requires_onLoaded_",
smalltalk.method({
selector: "register:requires:onLoaded:",
category: 'init',
fn: function (aChartGadget,anArray,aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_loader",[]),"_requires_onLoaded_",[anArray,aBlock]);
return self},
args: ["aChartGadget", "anArray", "aBlock"],
source: "register: aChartGadget requires: anArray onLoaded: aBlock\x0a\x09\x22Register aGadget with a callback when loading is complete.\x22\x0a\x09self loader requires:anArray onLoaded: aBlock\x0a\x0a",
messageSends: ["requires:onLoaded:", "loader"],
referencedClasses: []
}),
smalltalk.ChartApp);


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
smalltalk.send($2,"_activate",[]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["elementSymbol", "clickBlock"],
source: "element: elementSymbol clickBlock: clickBlock\x0a\x09^self new element: elementSymbol; clickBlock: clickBlock; activate;yourself",
messageSends: ["element:", "new", "clickBlock:", "activate", "yourself"],
referencedClasses: []
}),
smalltalk.ChartButton.klass);

smalltalk.addMethod(
"_popUpChart_atDom_",
smalltalk.method({
selector: "popUpChart:atDom:",
category: 'not yet classified',
fn: function (chart,element){
var self=this;
var $1;
$1=smalltalk.send(self,"_element_clickBlock_",[element,(function(){
return smalltalk.send(chart,"_drawChart",[]);
})]);
return $1;
},
args: ["chart", "element"],
source: "popUpChart: chart atDom: element\x0a\x09\x22Make the chart popup on click of an element\x22\x0a    ^self element: element clickBlock:[chart drawChart]\x0a\x09",
messageSends: ["element:clickBlock:", "drawChart"],
referencedClasses: []
}),
smalltalk.ChartButton.klass);


smalltalk.addClass('GoogleChart', smalltalk.Object, ['chartId', 'chartType', 'dataBlock', 'optionsBlock', 'app'], 'GoogleCharts');
smalltalk.addMethod(
"_app",
smalltalk.method({
selector: "app",
category: 'accessor',
fn: function (){
var self=this;
return self["@app"];
},
args: [],
source: "app\x0a\x09\x22Return the app\x22\x0a    ^app",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_app_",
smalltalk.method({
selector: "app:",
category: 'accessor',
fn: function (anApp){
var self=this;
self["@app"]=anApp;
return self},
args: ["anApp"],
source: "app: anApp\x0a\x09\x22Set the app\x22\x0a    app := anApp.",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_arrayToDataTable_",
smalltalk.method({
selector: "arrayToDataTable:",
category: 'data table',
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
"_chartId",
smalltalk.method({
selector: "chartId",
category: 'accessor',
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
category: 'accessor',
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
category: 'accessor',
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
category: 'accessor',
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
"_dataBlock",
smalltalk.method({
selector: "dataBlock",
category: 'accessor',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@dataBlock"]) == nil || $receiver == undefined){
self["@dataBlock"]=(function(){
return smalltalk.send(self,"_makeData",[]);
});
$1=self["@dataBlock"];
} else {
$1=self["@dataBlock"];
};
return $1;
},
args: [],
source: "dataBlock\x0a\x09\x22Return the dataBlock\x22\x0a    ^dataBlock ifNil:[dataBlock := [self makeData]]",
messageSends: ["ifNil:", "makeData"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_dataBlock_",
smalltalk.method({
selector: "dataBlock:",
category: 'accessor',
fn: function (aBlock){
var self=this;
self["@dataBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "dataBlock: aBlock\x0a\x09\x22Set the dataBlock\x22\x0a    dataBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_drawChart",
smalltalk.method({
selector: "drawChart",
category: 'chart',
fn: function (){
var self=this;
var chart;
var data;
var options;
data=smalltalk.send(smalltalk.send(self,"_dataBlock",[]),"_value",[]);
chart=smalltalk.send(self,"_makeChart_",[smalltalk.send(self,"_chartId",[])]);
options=smalltalk.send(smalltalk.send(self,"_optionsBlock",[]),"_value",[]);
chart.draw(data,options);
;
return self},
args: [],
source: "drawChart\x0a    |  chart data options|\x0a     data := self dataBlock value.\x0a     chart :=self makeChart:self chartId.\x0a     options :=self optionsBlock value.\x0a     <chart.draw(data,options)>\x0a",
messageSends: ["value", "dataBlock", "makeChart:", "chartId", "optionsBlock"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_getElementById_",
smalltalk.method({
selector: "getElementById:",
category: 'DOM',
fn: function (id){
var self=this;
var $1;
$1=document.getElementById(id);
;
return $1;
},
args: ["id"],
source: "getElementById: id\x0a\x09\x22Find element by the id in the DOM\x22\x0a\x09^ <document.getElementById(id)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'init',
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
category: 'chart',
fn: function (id){
var self=this;
var $1;
var e;
var t;
e=smalltalk.send(self,"_getElementById_",[id]);
t=smalltalk.send(self,"_chartType",[]);
$1=new google.visualization[t](e);
;
return $1;
},
args: ["id"],
source: "makeChart: id\x0a\x22build a chart at specific element id in the DOM and return\x22\x0a\x09|e t|\x0a    e := self getElementById:id.\x0a    t := self chartType.\x0a    ^ <new google.visualization[t](e)>",
messageSends: ["getElementById:", "chartType"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
category: 'abstraction',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassresponsibility",[]);
return $1;
},
args: [],
source: "makeData\x0a\x09\x22abstraction - return the data for a google chart\x22\x0a  \x09 ^self subclassresponsibility",
messageSends: ["subclassresponsibility"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
category: 'abstraction',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassresponsibility",[]);
return $1;
},
args: [],
source: "makeOptions\x0a\x09\x22Abstract method - return options for a Google Chart\x22\x0a   ^\x09 self subclassresponsibility",
messageSends: ["subclassresponsibility"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_optionsBlock",
smalltalk.method({
selector: "optionsBlock",
category: 'accessor',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@optionsBlock"]) == nil || $receiver == undefined){
self["@optionsBlock"]=(function(){
return smalltalk.send(self,"_makeOptions",[]);
});
$1=self["@optionsBlock"];
} else {
$1=self["@optionsBlock"];
};
return $1;
},
args: [],
source: "optionsBlock\x0a\x09\x22Return the optionsBlock\x22\x0a    ^optionsBlock ifNil:[optionsBlock := [self makeOptions]]",
messageSends: ["ifNil:", "makeOptions"],
referencedClasses: []
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_optionsBlock_",
smalltalk.method({
selector: "optionsBlock:",
category: 'accessor',
fn: function (aBlock){
var self=this;
self["@optionsBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "optionsBlock: aBlock\x0a\x09\x22Set the optionsBlock\x22\x0a    optionsBlock := aBlock",
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
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_chartId_",[aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aString"],
source: "chartId: aString\x0a\x09^self new chartId:aString;yourself",
messageSends: ["chartId:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.GoogleChart.klass);

smalltalk.addMethod(
"_domId_type_data_options_",
smalltalk.method({
selector: "domId:type:data:options:",
category: 'not yet classified',
fn: function (aString,typeString,data,options){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_chartId_",[aString]);
smalltalk.send($2,"_chartType_",[typeString]);
smalltalk.send($2,"_dataBlock_",[smalltalk.send(data,"_isKindOf_ifTrue_ifFalse_",[smalltalk.symbolFor("BlockContext"),(function(){
return data;
}),(function(){
return (function(){
return data;
});
})])]);
smalltalk.send($2,"_optionsBlock_",[smalltalk.send(options,"_isKindOf_ifTrue_ifFalse_",[smalltalk.symbolFor("BlockContext"),(function(){
return options;
}),(function(){
return options;
})])]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["aString", "typeString", "data", "options"],
source: "domId: aString type: typeString data: data options: options\x0a\x09^self new chartId:aString;\x0a       chartType:typeString;\x0a       dataBlock:(data isKindOf:#BlockContext ifTrue:[data] ifFalse:[[data]]);\x0a       optionsBlock:(options isKindOf:#BlockContext ifTrue:[options] ifFalse:[options]);\x0a       yourself",
messageSends: ["chartId:", "new", "chartType:", "dataBlock:", "isKindOf:ifTrue:ifFalse:", "optionsBlock:", "yourself"],
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



smalltalk.addClass('LoadRequest', smalltalk.Object, ['packages', 'block'], 'GoogleCharts');
smalltalk.addMethod(
"_block",
smalltalk.method({
selector: "block",
category: 'accessor',
fn: function (){
var self=this;
return self["@block"];
},
args: [],
source: "block\x0a\x09\x22Return the block\x22\x0a    ^block",
messageSends: [],
referencedClasses: []
}),
smalltalk.LoadRequest);

smalltalk.addMethod(
"_block_",
smalltalk.method({
selector: "block:",
category: 'accessor',
fn: function (aBlock){
var self=this;
self["@block"]=aBlock;
return self},
args: ["aBlock"],
source: "block: aBlock\x0a\x09\x22Set the block\x22\x0a    block := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.LoadRequest);

smalltalk.addMethod(
"_isSatisfied",
smalltalk.method({
selector: "isSatisfied",
category: 'accessor',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_packages",[]),"_isEmpty",[]);
return $1;
},
args: [],
source: "isSatisfied\x0a\x09^self packages isEmpty",
messageSends: ["isEmpty", "packages"],
referencedClasses: []
}),
smalltalk.LoadRequest);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'accessor',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@packages"]) == nil || $receiver == undefined){
self["@packages"]=smalltalk.send((smalltalk.Set || Set),"_new",[]);
$1=self["@packages"];
} else {
$1=self["@packages"];
};
return $1;
},
args: [],
source: "packages\x0a   \x22return the packages\x22\x0a    ^packages ifNil:[packages := Set new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.LoadRequest);

smalltalk.addMethod(
"_packages_",
smalltalk.method({
selector: "packages:",
category: 'accessor',
fn: function (aCollection){
var self=this;
self["@packages"]=smalltalk.send(aCollection,"_asSet",[]);
return self},
args: ["aCollection"],
source: "packages: aCollection\x0a   \x22Set the packages\x22\x0a    packages := aCollection asSet",
messageSends: ["asSet"],
referencedClasses: []
}),
smalltalk.LoadRequest);

smalltalk.addMethod(
"_removeLoaded_",
smalltalk.method({
selector: "removeLoaded:",
category: 'accessor',
fn: function (aSet){
var self=this;
smalltalk.send(self,"_packages_",[smalltalk.send(smalltalk.send(self,"_packages",[]),"_reject_",[(function(item){
return smalltalk.send(aSet,"_includes_",[item]);
})])]);
return self},
args: ["aSet"],
source: "removeLoaded: aSet\x0a\x09self packages:(self packages reject:[:item|aSet includes:item])",
messageSends: ["packages:", "reject:", "includes:", "packages"],
referencedClasses: []
}),
smalltalk.LoadRequest);



smalltalk.addClass('UnknownRequestError', smalltalk.Error, [], 'GoogleCharts');


