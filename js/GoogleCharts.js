smalltalk.addPackage('GoogleCharts', {});
smalltalk.addClass('ChartApp', smalltalk.Object, ['visualLoader', 'idSeries'], 'GoogleCharts');
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
"_getUniqueId",
smalltalk.method({
selector: "getUniqueId",
category: 'init',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@idSeries"],"_next",[]);
return $1;
},
args: [],
source: "getUniqueId\x0a\x09^ idSeries next.",
messageSends: ["next"],
referencedClasses: []
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'init',
fn: function (){
var self=this;
self["@idSeries"]=smalltalk.send((smalltalk.SerialNumber || SerialNumber),"_new",[]);
smalltalk.send((smalltalk.GoogleLoader || GoogleLoader),"_onLoadCallback_",[(function(){
return smalltalk.send(smalltalk.send(self,"_visualLoader",[]),"_loadPackages_onLoadCallback_",[smalltalk.send(smalltalk.send(self,"_class",[]),"_neededVisualizationPackages",[]),(function(){
return smalltalk.send(self,"_begin",[]);
})]);
})]);
return self},
args: [],
source: "initialize\x0a\x09\x22Load my external JS\x22\x0a    idSeries := SerialNumber new.\x0a    GoogleLoader onLoadCallback:[self visualLoader loadPackages:(self class neededVisualizationPackages ) onLoadCallback:[self begin]]\x0a  ",
messageSends: ["new", "onLoadCallback:", "loadPackages:onLoadCallback:", "neededVisualizationPackages", "class", "begin", "visualLoader"],
referencedClasses: ["SerialNumber", "GoogleLoader"]
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
"_visualLoader",
smalltalk.method({
selector: "visualLoader",
category: 'init',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@visualLoader"]) == nil || $receiver == undefined){
self["@visualLoader"]=smalltalk.send((smalltalk.GoogleVisualization || GoogleVisualization),"_new",[]);
$1=self["@visualLoader"];
} else {
$1=self["@visualLoader"];
};
return $1;
},
args: [],
source: "visualLoader\x0a\x09\x22Return the loader\x22\x0a    ^visualLoader ifNil:[visualLoader := GoogleVisualization new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["GoogleVisualization"]
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
return smalltalk.send(chart,"_drawChartData_options_",[smalltalk.send(chart,"_makeData",[]),smalltalk.send(chart,"_makeOptions",[])]);
})]);
return $1;
},
args: ["chart", "element"],
source: "popUpChart: chart atDom: element\x0a\x09\x22Make the chart popup on click of an element\x22\x0a    ^self element: element clickBlock:[chart drawChartData: chart makeData options: chart makeOptions]\x0a\x09",
messageSends: ["element:clickBlock:", "drawChartData:options:", "makeData", "makeOptions"],
referencedClasses: []
}),
smalltalk.ChartButton.klass);


smalltalk.addClass('GoogleChart', smalltalk.Object, ['chart', 'chartId', 'chartType'], 'GoogleCharts');
smalltalk.addMethod(
"_chart",
smalltalk.method({
selector: "chart",
category: 'accessor',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@chart"]) == nil || $receiver == undefined){
self["@chart"]=smalltalk.send(self,"_makeChart_",[smalltalk.send(self,"_chartId",[])]);
$1=self["@chart"];
} else {
$1=self["@chart"];
};
return $1;
},
args: [],
source: "chart\x0a\x09^chart ifNil:[chart := self makeChart:self chartId]",
messageSends: ["ifNil:", "makeChart:", "chartId"],
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
"_drawChartData_options_",
smalltalk.method({
selector: "drawChartData:options:",
category: 'chart',
fn: function (data,options){
var self=this;
smalltalk.send(smalltalk.send(self,"_class",[]),"_drawChart_data_options_",[smalltalk.send(self,"_chart",[]),data,options]);
return self},
args: ["data", "options"],
source: "drawChartData: data options: options\x0a\x09self class drawChart:self chart data: data options:options\x0a   \x0a",
messageSends: ["drawChart:data:options:", "chart", "class"],
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
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_makeChartType_on_",[smalltalk.send(self,"_chartType",[]),id]);
return $1;
},
args: ["id"],
source: "makeChart: id\x0a\x22build a chart at specific element id in the DOM and return\x22\x0a\x0a    ^self class makeChartType:(self chartType) on: id",
messageSends: ["makeChartType:on:", "chartType", "class"],
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
"_allocateResourcesProvider_type_",
smalltalk.method({
selector: "allocateResourcesProvider:type:",
category: 'planning and allocate',
fn: function (aProvider,aType){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassresponsiblity",[]);
return $1;
},
args: ["aProvider", "aType"],
source: "allocateResourcesProvider: aProvider type: aType\x0a\x09^self subclassresponsiblity",
messageSends: ["subclassresponsiblity"],
referencedClasses: []
}),
smalltalk.GoogleChart.klass);

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
smalltalk.GoogleChart.klass);

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
source: "drawChart: chart data: data options: options\x0a\x0a     <chart.draw(data,options)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleChart.klass);

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
smalltalk.GoogleChart.klass);

smalltalk.addMethod(
"_makeChartType_on_",
smalltalk.method({
selector: "makeChartType:on:",
category: 'not yet classified',
fn: function (type,id){
var self=this;
var $1;
$1=smalltalk.send(self,"_type_element_",[type,smalltalk.send(self,"_getElementById_",[id])]);
return $1;
},
args: ["type", "id"],
source: "makeChartType: type on: id\x0a\x22build a chart at specific element id in the DOM and return\x22\x0a\x09^self type: type element: (self  getElementById:id)",
messageSends: ["type:element:", "getElementById:"],
referencedClasses: []
}),
smalltalk.GoogleChart.klass);

smalltalk.addMethod(
"_planResourcesProvider_type_",
smalltalk.method({
selector: "planResourcesProvider:type:",
category: 'planning and allocate',
fn: function (aProvider,aType){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassresponsiblity",[]);
return $1;
},
args: ["aProvider", "aType"],
source: "planResourcesProvider: aProvider type: aType\x0a\x09^self subclassresponsiblity",
messageSends: ["subclassresponsiblity"],
referencedClasses: []
}),
smalltalk.GoogleChart.klass);

smalltalk.addMethod(
"_type_element_",
smalltalk.method({
selector: "type:element:",
category: 'instance creation',
fn: function (type,e){
var self=this;
var $1;
$1=new google.visualization[type](e);
;
return $1;
},
args: ["type", "e"],
source: "type: type element: e\x0a\x22build a chart at specific element  in the DOM\x22\x0a\x0a    ^ <new google.visualization[type](e)>",
messageSends: [],
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



smalltalk.addClass('UniqueIdProvider', smalltalk.Object, ['prefix', 'serial'], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
self["@serial"]=smalltalk.send((smalltalk.SerialNumber || SerialNumber),"_new",[]);
self["@prefix"]="idxyz";
return self},
args: [],
source: "initialize\x0a\x09\x22Create a SerialNumber and Prefix\x22\x0a\x0a\x09serial := SerialNumber new .\x0a\x09prefix := 'idxyz'.",
messageSends: ["new"],
referencedClasses: ["SerialNumber"]
}),
smalltalk.UniqueIdProvider);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@prefix"],"__comma",[smalltalk.send(smalltalk.send(self["@serial"],"_next",[]),"_printString",[])]);
return $1;
},
args: [],
source: "next\x0a\x09^prefix ,serial next printString",
messageSends: [",", "printString", "next"],
referencedClasses: []
}),
smalltalk.UniqueIdProvider);



smalltalk.addClass('UnknownRequestError', smalltalk.Error, [], 'GoogleCharts');


