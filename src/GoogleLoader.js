define("amber-googlechartsexample/GoogleLoader", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('GoogleLoader');
$core.packages["GoogleLoader"].transport = {"type":"amd","amdNamespace":"amber-googlechartsexample"};

$core.addClass('GoogleJSAPI', $globals.Object, [], 'GoogleLoader');

$core.addMethod(
$core.method({
selector: "basicLoad:",
protocol: 'not yet classified',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$.getScript("https://www.google.com/jsapi",aBlock);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicLoad:",{aBlock:aBlock},$globals.GoogleJSAPI.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "basicLoad: aBlock\x0a\x09\x22Do the callback once jaspi is loaded\x22\x0a\x09<$.getScript(\x22https://www.google.com/jsapi\x22,aBlock);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GoogleJSAPI.klass);

$core.addMethod(
$core.method({
selector: "isLoaded",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return typeof(google) !== 'undefined' ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isLoaded",{},$globals.GoogleJSAPI.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLoaded\x0a\x09\x22Test that the google.load() function is defined.\x22\x0a\x09<return typeof(google) !== 'undefined' >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GoogleJSAPI.klass);


$core.addClass('GoogleLoader', $globals.Object, [], 'GoogleLoader');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.GoogleLoader.comment="I am load the Google JSAPI spec\x0a\x0ahttps://developers.google.com/loader/\x0a\x0aUsage:\x0a\x09GoogleLoader onLoadCallback: aBlock";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GoogleLoader);


$core.addMethod(
$core.method({
selector: "basicLoad:",
protocol: 'not yet classified',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$.getScript("https://www.google.com/jsapi",aBlock);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicLoad:",{aBlock:aBlock},$globals.GoogleLoader.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "basicLoad: aBlock\x0a\x09\x22Do the callback once jaspi is loaded\x22\x0a\x09<$.getScript(\x22https://www.google.com/jsapi\x22,aBlock);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GoogleLoader.klass);

$core.addMethod(
$core.method({
selector: "basicSetOnLoadCallback:",
protocol: 'not yet classified',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
google.setOnLoadCallback(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicSetOnLoadCallback:",{aBlock:aBlock},$globals.GoogleLoader.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "basicSetOnLoadCallback: aBlock\x0a\x09<google.setOnLoadCallback(aBlock)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GoogleLoader.klass);

$core.addMethod(
$core.method({
selector: "isLoaded",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return typeof(google) !== 'undefined' && typeof(google.load)  == 'function';
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isLoaded",{},$globals.GoogleLoader.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLoaded\x0a\x09\x22Test that the google.load() function is defined.\x22\x0a\x09<return typeof(google) !== 'undefined' && typeof(google.load)  == 'function'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GoogleLoader.klass);

$core.addMethod(
$core.method({
selector: "load:",
protocol: 'not yet classified',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._isLoaded();
if($core.assert($1)){
$recv(aBlock)._value();
} else {
self._basicLoad_(aBlock);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"load:",{aBlock:aBlock},$globals.GoogleLoader.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "load: aBlock\x0a\x09\x22Do the callback on load or immediately if already loaded.\x22\x0a    \x09self isLoaded \x0a        \x09ifTrue:[aBlock value]\x0a      \x09\x09ifFalse: [self basicLoad:aBlock]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isLoaded", "value", "basicLoad:"]
}),
$globals.GoogleLoader.klass);

});
