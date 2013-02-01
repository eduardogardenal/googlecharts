smalltalk.addPackage('GoogleLoader', {});
smalltalk.addClass('GoogleLoader', smalltalk.Object, [], 'GoogleLoader');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return self}
}),
smalltalk.GoogleLoader);


smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
fn: function (){
var self=this;
var $1;
$1=typeof(google) !== 'undefined' && typeof(google.load)  == 'function';
;
return $1;
}
}),
smalltalk.GoogleLoader.klass);

smalltalk.addMethod(
"_load_",
smalltalk.method({
selector: "load:",
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_isLoaded",[]);
if(smalltalk.assert($1)){
smalltalk.send(aBlock,"_value",[]);
} else {
$.getScript("https://www.google.com/jsapi",aBlock);;
;
};
return self}
}),
smalltalk.GoogleLoader.klass);

smalltalk.addMethod(
"_onLoadCallback_",
smalltalk.method({
selector: "onLoadCallback:",
fn: function (aBlock){
var self=this;
var $1;
$1=smalltalk.send(self,"_isLoaded",[]);
if(smalltalk.assert($1)){
smalltalk.send(aBlock,"_value",[]);
} else {
$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:aBlock});;
;
};
return self}
}),
smalltalk.GoogleLoader.klass);


smalltalk.addClass('GoogleResource', smalltalk.ResourceProvider, ['name', 'version'], 'GoogleLoader');
smalltalk.addMethod(
"_loadPackages_onLoadCallback_",
smalltalk.method({
selector: "loadPackages:onLoadCallback:",
fn: function (packages,callback){
var self=this;
var n;
var v;
n=smalltalk.send(self,"_name",[]);
v=smalltalk.send(self,"_version",[]);
smalltalk.send((smalltalk.GoogleLoader || GoogleLoader),"_load_",[(function(){
return google.load(n,v,{"callback" : callback , "packages":packages});;
;
})]);
return self}
}),
smalltalk.GoogleResource);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return self["@name"];
}
}),
smalltalk.GoogleResource);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString){
var self=this;
self["@name"]=aString;
return self}
}),
smalltalk.GoogleResource);

smalltalk.addMethod(
"_version",
smalltalk.method({
selector: "version",
fn: function (){
var self=this;
return self["@version"];
}
}),
smalltalk.GoogleResource);

smalltalk.addMethod(
"_version_",
smalltalk.method({
selector: "version:",
fn: function (aString){
var self=this;
self["@version"]=aString;
return self}
}),
smalltalk.GoogleResource);



smalltalk.addClass('GoogleVisualization', smalltalk.GoogleResource, [], 'GoogleLoader');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_name_",["visualization"]);
smalltalk.send(self,"_version_",["1"]);
return self;
}
}),
smalltalk.GoogleVisualization);

smalltalk.addMethod(
"_isProvidingDataTable",
smalltalk.method({
selector: "isProvidingDataTable",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_satisfied",[]),"_isEmpty",[]),"_not",[]);
return $1;
}
}),
smalltalk.GoogleVisualization);

smalltalk.addMethod(
"_nativeProvideResources_callback_",
smalltalk.method({
selector: "nativeProvideResources:callback:",
fn: function (aSet,callback){
var self=this;
smalltalk.send(self,"_loadPackages_onCallback_",[aSet,(function(){
return smalltalk.send(callback,"_value_",[smalltalk.send(aSet,"_reject_",[(function(rs){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_nativeProvides",[]),"_contains",[]),"_rs",[]),"_not",[]);
})])]);
})]);
return self}
}),
smalltalk.GoogleVisualization);

smalltalk.addMethod(
"_nativeProvides",
smalltalk.method({
selector: "nativeProvides",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(["corechart","gauge","geochart","table","treemap"],"_asSet",[]);
return $1;
}
}),
smalltalk.GoogleVisualization);



