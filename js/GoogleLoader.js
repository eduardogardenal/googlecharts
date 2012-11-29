smalltalk.addPackage('GoogleLoader', {});
smalltalk.addClass('GoogleLoader', smalltalk.Object, [], 'GoogleLoader');
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
"_onLoadCallback_",
smalltalk.method({
selector: "onLoadCallback:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:aBlock});;
;
return self},
args: ["aBlock"],
source: "onLoadCallback: aBlock\x0a\x09\x09<$.ajax({url:\x22https://www.google.com/jsapi\x22,dataType:\x22script\x22,success:aBlock});>",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleLoader.klass);


