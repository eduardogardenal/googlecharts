smalltalk.addPackage('GoogleLoader', {});
smalltalk.addClass('GoogleLoader', smalltalk.Object, [], 'GoogleLoader');
smalltalk.GoogleLoader.comment="I am load the Google JSAPI spec\x0a\x0ahttps://developers.google.com/loader/\x0a\x0aUsage:\x0a\x09GoogleLoader onLoadCallback: aBlock\x0a    \x0a    "
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return self},
args: [],
source: "initialize\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleLoader);


smalltalk.addMethod(
"_isLoaded",
smalltalk.method({
selector: "isLoaded",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=typeof(google) !== 'undefined' && typeof(google.load)  == 'function';
;
return $1;
},
args: [],
source: "isLoaded\x0a\x09\x22Test that the google.load() function is defined\x22\x0a\x09^<typeof(google) !== 'undefined' && typeof(google.load)  == 'function'>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleLoader.klass);

smalltalk.addMethod(
"_onLoadCallback_",
smalltalk.method({
selector: "onLoadCallback:",
category: 'not yet classified',
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
return self},
args: ["aBlock"],
source: "onLoadCallback: aBlock\x0a\x09\x22Do the callback once jaspi is loaded\x22\x0a    \x09self isLoaded \x0a        \x09ifTrue:[aBlock value]\x0a      \x09\x09ifFalse:[\x0a\x09\x09<$.ajax({url:\x22https://www.google.com/jsapi\x22,dataType:\x22script\x22,success:aBlock});>\x0a]",
messageSends: ["ifTrue:ifFalse:", "value", "isLoaded"],
referencedClasses: []
}),
smalltalk.GoogleLoader.klass);


smalltalk.addClass('GoogleResource', smalltalk.ResourceProvider, ['name', 'version'], 'GoogleLoader');
smalltalk.GoogleResource.comment="I am a ResourceProvider which can be loaded with a name and a version. "
smalltalk.addMethod(
"_loadPackages_onLoadCallback_",
smalltalk.method({
selector: "loadPackages:onLoadCallback:",
category: 'not yet classified',
fn: function (packages,callback){
var self=this;
var n;
var v;
n=smalltalk.send(self,"_name",[]);
v=smalltalk.send(self,"_version",[]);
smalltalk.send((smalltalk.GoogleLoader || GoogleLoader),"_onLoadCallback_",[(function(){
return google.load(n,v,{"callback" : callback , "packages":packages});;
;
})]);
return self},
args: ["packages", "callback"],
source: "loadPackages: packages onLoadCallback: callback\x0a\x09\x22Use GoogleLoader to load\x22\x0a    |n v|\x0a    n := self name.\x0a    v := self version.\x0a    GoogleLoader onLoadCallback: [\x0a      <google.load(n,v,{\x22callback\x22 : callback , \x22packages\x22:packages});>]",
messageSends: ["name", "version", "onLoadCallback:"],
referencedClasses: ["GoogleLoader"]
}),
smalltalk.GoogleResource);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function (){
var self=this;
return self["@name"];
},
args: [],
source: "name\x0a\x09\x22get the name\x22\x0a    ^name",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleResource);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'not yet classified',
fn: function (aString){
var self=this;
self["@name"]=aString;
return self},
args: ["aString"],
source: "name: aString\x0a\x09\x22set the name\x22\x0a    name := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleResource);

smalltalk.addMethod(
"_version",
smalltalk.method({
selector: "version",
category: 'not yet classified',
fn: function (){
var self=this;
return self["@version"];
},
args: [],
source: "version\x0a\x09\x22get the version\x22\x0a    ^version",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleResource);

smalltalk.addMethod(
"_version_",
smalltalk.method({
selector: "version:",
category: 'not yet classified',
fn: function (aString){
var self=this;
self["@version"]=aString;
return self},
args: ["aString"],
source: "version: aString\x0a\x09\x22set the version\x22\x0a    version := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleResource);



smalltalk.addClass('GoogleVisualization', smalltalk.GoogleResource, [], 'GoogleLoader');
smalltalk.GoogleVisualization.comment="I am the GoogleVisualization I am a JS library that draws graphs on HTML pages. I can provide 'corechart'.'gauge'.'geochart'.'table'.'treemap' packages."
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_name_",["visualization"]);
smalltalk.send(self,"_version_",["1"]);
return self;
},
args: [],
source: "initialize\x0a\x22Use visualization version 1\x22\x0a\x09self name: 'visualization'.\x0a    self version: '1'.\x0a    ^self",
messageSends: ["name:", "version:"],
referencedClasses: []
}),
smalltalk.GoogleVisualization);

smalltalk.addMethod(
"_nativeProvideResources_callback_",
smalltalk.method({
selector: "nativeProvideResources:callback:",
category: 'not yet classified',
fn: function (aSet,callback){
var self=this;
smalltalk.send(self,"_loadPackages_onCallback_",[aSet,(function(){
return smalltalk.send(callback,"_value_",[smalltalk.send(aSet,"_reject_",[(function(rs){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_nativeProvides",[]),"_contains",[]),"_rs",[]),"_not",[]);
})])]);
})]);
return self},
args: ["aSet", "callback"],
source: "nativeProvideResources: aSet callback: callback\x0a\x09self loadPackages: aSet onCallback:[ callback value: (aSet reject:[:rs|(self nativeProvides contains rs) not])].",
messageSends: ["loadPackages:onCallback:", "value:", "reject:", "not", "rs", "contains", "nativeProvides"],
referencedClasses: []
}),
smalltalk.GoogleVisualization);

smalltalk.addMethod(
"_nativeProvides",
smalltalk.method({
selector: "nativeProvides",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(["corechart","gauge","geochart","table","treemap"],"_asSet",[]);
return $1;
},
args: [],
source: "nativeProvides\x0a\x09^{'corechart'.'gauge'.'geochart'.'table'.'treemap'} asSet",
messageSends: ["asSet"],
referencedClasses: []
}),
smalltalk.GoogleVisualization);



