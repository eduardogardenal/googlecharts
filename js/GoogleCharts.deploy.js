smalltalk.addPackage('GoogleCharts', {});
smalltalk.addClass('ChartApp', smalltalk.Object, [], 'GoogleCharts');
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
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_class",[]),"_loadGoogleLoader_",[(function(){
return smalltalk.send(smalltalk.send(self,"_class",[]),"_loadVisualization_",[(function(){
return smalltalk.send(self,"_begin",[]);
})]);
})]);
return self}
}),
smalltalk.ChartApp);


smalltalk.addMethod(
"_loadGoogleLoader_",
smalltalk.method({
selector: "loadGoogleLoader:",
fn: function (callback){
var self=this;
$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});;
;
return self}
}),
smalltalk.ChartApp.klass);

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


smalltalk.addClass('ExampleChartApp', smalltalk.ChartApp, [], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
var $1;
smalltalk.send(smalltalk.send((smalltalk.PieChart || PieChart),"_new",[]),"_begin",[]);
smalltalk.send(smalltalk.send((smalltalk.ScatterChart || ScatterChart),"_new",[]),"_begin",[]);
smalltalk.send(smalltalk.send((smalltalk.GaugeChart || GaugeChart),"_new",[]),"_begin",[]);
smalltalk.send(smalltalk.send((smalltalk.GeoChart || GeoChart),"_new",[]),"_begin",[]);
$1=smalltalk.send(self,"_begin",[],smalltalk.ChartApp);
return $1;
}
}),
smalltalk.ExampleChartApp);


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
smalltalk.ExampleChartApp.klass);


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
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.ChartButton.klass);


smalltalk.addClass('GoogleChart', smalltalk.Object, ['chartId', 'chartType'], 'GoogleCharts');
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
smalltalk.GoogleChart);

smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
var button;
smalltalk.send(self,"_connectToButton_",["#popPieChart"]);
return self}
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
"_connectToButton_",
smalltalk.method({
selector: "connectToButton:",
fn: function (aSym){
var self=this;
var button;
button=smalltalk.send((smalltalk.ChartButton || ChartButton),"_element_clickBlock_",[aSym,(function(){
return smalltalk.send(self,"_drawChart",[]);
})]);
smalltalk.send(button,"_activate",[]);
return self}
}),
smalltalk.GoogleChart);

smalltalk.addMethod(
"_drawChart",
smalltalk.method({
selector: "drawChart",
fn: function (){
var self=this;
var chart;
var data;
var options;
data=smalltalk.send(self,"_makeData",[]);
chart=smalltalk.send(self,"_makeChart_",[smalltalk.send(self,"_chartId",[])]);
options=smalltalk.send(self,"_makeOptions",[]);
smalltalk.send(self,"_drawChart_data_options_",[chart,data,options]);
return self}
}),
smalltalk.GoogleChart);

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
smalltalk.GoogleChart);

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
var e;
var t;
e=smalltalk.send(self,"_getElementById_",[id]);
t=smalltalk.send(self,"_chartType",[]);
$1=smalltalk.send(self,"_makeGoogle_id_",[t,id]);
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
"_makeGoogle_id_",
smalltalk.method({
selector: "makeGoogle:id:",
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



smalltalk.addClass('GaugeChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
var button;
smalltalk.send(self,"_connectToButton_",["#popGaugeChart"]);
return self}
}),
smalltalk.GaugeChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_chartId_",["gauge_chart_div"]);
smalltalk.send(self,"_chartType_",["Gauge"]);
return self;
}
}),
smalltalk.GaugeChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Label","Value"],["Memory",(80)],["CPU",(55)],["Network",(68)]]]);
return $1;
}
}),
smalltalk.GaugeChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
var $1;
$1={width:400, heigth:120,
   redFrom:90,redTo:100,
   yellowFrom:75,yellowTo:90,
   minorTicks:5};
;
return $1;
}
}),
smalltalk.GaugeChart);



smalltalk.addClass('GeoChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
var button;
smalltalk.send(self,"_connectToButton_",["#popGeoMarkersChart"]);
return self}
}),
smalltalk.GeoChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_chartId_",["geo_markers_chart_div"]);
smalltalk.send(self,"_chartType_",["GeoChart"]);
return self;
}
}),
smalltalk.GeoChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["City","Population","Area"],["Rome",(2761477),(1285.31)],["Milan",(1324110),(181.76)],["Naples",(959574),(117.27)],["Turin",(907563),(130.17)],["Palermo",(655875),(158.9)],["Genoa",(607906),(243.6)],["Bologna",(380181),(140.7)],["Florence",(371282),(102.41)],["Fiumicino",(67370),(213.44)],["Anzio",(52192),(43.43)],["Ciampino",(38262),(11)]]]);
return $1;
}
}),
smalltalk.GeoChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
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
}
}),
smalltalk.GeoChart);



smalltalk.addClass('PieChart', smalltalk.GoogleChart, ['chartId'], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
var button;
smalltalk.send(self,"_connectToButton_",["#popPieChart"]);
return self}
}),
smalltalk.PieChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_chartId_",["pie_chart_div"]);
smalltalk.send(self,"_chartType_",["PieChart"]);
return self;
}
}),
smalltalk.PieChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Task","Hours per Day"],["Work",(11)],["Eat",(2)],["Commute",(2)],["Watch TV",(2)],["Snooze",(7)]]]);
return $1;
}
}),
smalltalk.PieChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
fn: function (){
var self=this;
var $1;
$1={title: 'My Daily Activities'};
;
return $1;
}
}),
smalltalk.PieChart);



smalltalk.addClass('ScatterChart', smalltalk.GoogleChart, [], 'GoogleCharts');
smalltalk.addMethod(
"_begin",
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
var button;
smalltalk.send(self,"_connectToButton_",["#popScatterChart"]);
return self}
}),
smalltalk.ScatterChart);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_chartId_",["scatter_chart_div"]);
smalltalk.send(self,"_chartType_",["ScatterChart"]);
return self;
}
}),
smalltalk.ScatterChart);

smalltalk.addMethod(
"_makeData",
smalltalk.method({
selector: "makeData",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_arrayToDataTable_",[[["Age","Weight"],[(8),(11)],[(4),(5.5)],[(11),(14)],[(4),(5)],[(3),(3)],[(6.5),(7)]]]);
return $1;
}
}),
smalltalk.ScatterChart);

smalltalk.addMethod(
"_makeOptions",
smalltalk.method({
selector: "makeOptions",
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
}
}),
smalltalk.ScatterChart);



