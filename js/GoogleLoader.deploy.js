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
"_onLoadCallback_",
smalltalk.method({
selector: "onLoadCallback:",
fn: function (aBlock){
var self=this;
$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:aBlock});;
;
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
google.load(n,v,{"callback" : callback , "packages":packages});;
;
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
"_nativeProvideResources_",
smalltalk.method({
selector: "nativeProvideResources:",
fn: function (aSet){
var self=this;
var $1;
smalltalk.send(self,"_loadPackages_onCallback_",[aSet,(function(){
})]);
$1=smalltalk.send(self,"_aSet",[]);
return $1;
}
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



