smalltalk.addPackage('GoogleCharts', {});
smalltalk.addClass('ChartApp', smalltalk.Object, ['visualLoader'], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
return self;
}
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_buildPieChartAt_data_options_",
smalltalk.method({
selector: "buildPieChartAt:data:options:",
fn: function (domID,data,options){
var self=this;
var chart;
chart=smalltalk.send((smalltalk.GoogleChart || GoogleChart),"_domId_type_data_options_",[domID,"PieChart",data,options]);
smalltalk.send(self,"_register_require_",[chart,["corechart"]]);
return chart;
}
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send((smalltalk.GoogleLoader || GoogleLoader),"_onLoadCallback_",[(function(){
return smalltalk.send(smalltalk.send(self,"_visualLoader",[]),"_loadPackages_onLoadCallback_",[smalltalk.send(smalltalk.send(self,"_class",[]),"_neededVisualizationPackages",[]),(function(){
return smalltalk.send(self,"_begin",[]);
})]);
})]);
return self}
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_register_",
smalltalk.method({
selector: "register:",
fn: function (aChartGadget){
var self=this;
return aChartGadget;
}
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_register_requires_onLoaded_",
smalltalk.method({
selector: "register:requires:onLoaded:",
fn: function (aChartGadget,anArray,aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_loader",[]),"_requires_onLoaded_",[anArray,aBlock]);
return self}
}),
smalltalk.ChartApp);

smalltalk.addMethod(
"_visualLoader",
smalltalk.method({
selector: "visualLoader",
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
}
}),
smalltalk.ChartApp);


smalltalk.addMethod(
"_loadVisualization_",
smalltalk.method({
selector: "loadVisualization:",
fn: function (callback){
var self=this;
var packages;
packages=smalltalk.send(self,"_neededVisualizationPackages",[]);
google.load("visualization","1",{"callback" : callback , "packages":packages});;
;
return self}
}),
smalltalk.ChartApp.klass);

smalltalk.addMethod(
"_neededVisualizationPackages",
smalltalk.method({
selector: "neededVisualizationPackages",
fn: function (){
var self=this;
var $1;
$1=[];
return $1;
}
}),
smalltalk.ChartApp.klass);


smalltalk.addClass('ChartButton', smalltalk.Object, ['element', 'clickBlock'], 'GoogleCharts');
smalltalk.addMethod(
"_activate",
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
var button;
button=smalltalk.send(smalltalk.send(self,"_element",[]),"_asJQuery",[]);
smalltalk.send(button,"_click_",[(function(){
return smalltalk.send(smalltalk.send(self,"_clickBlock",[]),"_value",[]);
})]);
return self}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock",
smalltalk.method({
selector: "clickBlock",
fn: function (){
var self=this;
return self["@clickBlock"];
}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_clickBlock_",
smalltalk.method({
selector: "clickBlock:",
fn: function (aBlock){
var self=this;
self["@clickBlock"]=aBlock;
return self}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element",
smalltalk.method({
selector: "element",
fn: function (){
var self=this;
return self["@element"];
}
}),
smalltalk.ChartButton);

smalltalk.addMethod(
"_element_",
smalltalk.method({
selector: "element:",
fn: function (aSymbol){
var self=this;
self["@element"]=aSymbol;
return self}
}),
smalltalk.ChartButton);


smalltalk.addMethod(
"_element_clickBlock_",
smalltalk.method({
selector: "element:clickBlock:",
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
}
}),
smalltalk.ChartButton.klass);

smalltalk.addMethod(
"_popUpChart_atDom_",
smalltalk.method({
selector: "popUpChart:atDom:",
fn: function (chart,element){
var self=this;
var $1;
$1=smalltalk.send(self,"_element_clickBlock_",[element,(function(){
return smalltalk.send(chart,"_drawChart",[]);
})]);
return $1;
}
}),
smalltalk.ChartButton.klass);


smalltalk.addClass('GoogleChart', smalltalk.Object, ['chart', 'chartId', 'chartType', 'dataBlock', 'optionsBlock'], 'GoogleCharts');
smalltalk.addMethod(
"_chart",
smalltalk.method({
selector: "chart",
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
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartId",
smalltalk.method({
selector: "chartId",
fn: function (){
var self=this;
return self["@chartId"];
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartId_",
smalltalk.method({
selector: "chartId:",
fn: function (aString){
var self=this;
self["@chartId"]=aString;
return self}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartType",
smalltalk.method({
selector: "chartType",
fn: function (){
var self=this;
return self["@chartType"];
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_chartType_",
smalltalk.method({
selector: "chartType:",
fn: function (aString){
var self=this;
self["@chartType"]=aString;
return self}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_dataBlock",
smalltalk.method({
selector: "dataBlock",
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
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_dataBlock_",
smalltalk.method({
selector: "dataBlock:",
fn: function (aBlock){
var self=this;
self["@dataBlock"]=aBlock;
return self}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_drawChart",
smalltalk.method({
selector: "drawChart",
fn: function (){
var self=this;
smalltalk.send(self,"_drawChartData_options_",[smalltalk.send(smalltalk.send(self,"_dataBlock",[]),"_value",[]),smalltalk.send(smalltalk.send(self,"_optionsBlock",[]),"_value",[])]);
return self}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_drawChartData_options_",
smalltalk.method({
selector: "drawChartData:options:",
fn: function (data,options){
var self=this;
smalltalk.send(smalltalk.send(self,"_class",[]),"_drawChart_data_options_",[smalltalk.send(self,"_chart",[]),data,options]);
return self}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return self;
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeChart_",
smalltalk.method({
selector: "makeChart:",
fn: function (id){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_makeChartType_on_",[smalltalk.send(self,"_chartType",[]),id]);
return $1;
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassresponsibility",[]);
return $1;
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassresponsibility",[]);
return $1;
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_optionsBlock",
smalltalk.method({
selector: "optionsBlock",
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
}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_optionsBlock_",
smalltalk.method({
selector: "optionsBlock:",
fn: function (aBlock){
var self=this;
self["@optionsBlock"]=aBlock;
return self}
}),
smalltalk.GoogleChart);


smalltalk.addMethod(
"_arrayToDataTable_",
smalltalk.method({
selector: "arrayToDataTable:",
fn: function (array){
var self=this;
var $1;
$1=google.visualization.arrayToDataTable(array);
;
return $1;
}
}),
smalltalk.GoogleChart.klass);

smalltalk.addMethod(
"_chartId_",
smalltalk.method({
selector: "chartId:",
fn: function (aString){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_chartId_",[aString]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.GoogleChart.klass);

smalltalk.addMethod(
"_domId_type_data_options_",
smalltalk.method({
selector: "domId:type:data:options:",
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
}
}),
smalltalk.GoogleChart.klass);

smalltalk.addMethod(
"_drawChart_data_options_",
smalltalk.method({
selector: "drawChart:data:options:",
fn: function (chart,data,options){
var self=this;
chart.draw(data,options);
;
return self}
}),
smalltalk.GoogleChart.klass);

smalltalk.addMethod(
"_getElementById_",
smalltalk.method({
selector: "getElementById:",
fn: function (id){
var self=this;
var $1;
$1=document.getElementById(id);
;
return $1;
}
}),
smalltalk.GoogleChart.klass);

smalltalk.addMethod(
"_makeChartType_on_",
smalltalk.method({
selector: "makeChartType:on:",
fn: function (type,id){
var self=this;
var $1;
var e;
e=smalltalk.send(self,"_getElementById_",[id]);
$1=new google.visualization[type](e);
;
return $1;
}
}),
smalltalk.GoogleChart.klass);


smalltalk.addClass('GaugeChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["Gauge"]);
return self;
}
}),
smalltalk.GaugeChart);



smalltalk.addClass('GeoChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["GeoChart"]);
return self;
}
}),
smalltalk.GeoChart);



smalltalk.addClass('PieChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["PieChart"]);
return self;
}
}),
smalltalk.PieChart);



smalltalk.addClass('ScatterChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.GoogleChart);
smalltalk.send(self,"_chartType_",["ScatterChart"]);
return self;
}
}),
smalltalk.ScatterChart);



smalltalk.addClass('LoadRequest', smalltalk.Object, ['packages', 'block'], 'GoogleCharts');
smalltalk.addMethod(
"_block",
smalltalk.method({
selector: "block",
fn: function (){
var self=this;
return self["@block"];
}
}),
smalltalk.LoadRequest);

smalltalk.addMethod(
"_block_",
smalltalk.method({
selector: "block:",
fn: function (aBlock){
var self=this;
self["@block"]=aBlock;
return self}
}),
smalltalk.LoadRequest);

smalltalk.addMethod(
"_isSatisfied",
smalltalk.method({
selector: "isSatisfied",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_packages",[]),"_isEmpty",[]);
return $1;
}
}),
smalltalk.LoadRequest);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
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
}
}),
smalltalk.LoadRequest);

smalltalk.addMethod(
"_packages_",
smalltalk.method({
selector: "packages:",
fn: function (aCollection){
var self=this;
self["@packages"]=smalltalk.send(aCollection,"_asSet",[]);
return self}
}),
smalltalk.LoadRequest);

smalltalk.addMethod(
"_removeLoaded_",
smalltalk.method({
selector: "removeLoaded:",
fn: function (aSet){
var self=this;
smalltalk.send(self,"_packages_",[smalltalk.send(smalltalk.send(self,"_packages",[]),"_reject_",[(function(item){
return smalltalk.send(aSet,"_includes_",[item]);
})])]);
return self}
}),
smalltalk.LoadRequest);



smalltalk.addClass('UnknownRequestError', smalltalk.Error, [], 'GoogleCharts');


