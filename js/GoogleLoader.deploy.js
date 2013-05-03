smalltalk.addPackage('GoogleLoader');
smalltalk.addClass('GoogleJSAPI', smalltalk.Object, [], 'GoogleLoader');

smalltalk.addMethod(
smalltalk.method({
selector: "basicLoad:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$.getScript("https://www.google.com/jsapi",aBlock);;
return self}, function($ctx1) {$ctx1.fill(self,"basicLoad:",{aBlock:aBlock},smalltalk.GoogleJSAPI.klass)})},
messageSends: []}),
smalltalk.GoogleJSAPI.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isLoaded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return typeof(google) !== 'undefined' ;
return self}, function($ctx1) {$ctx1.fill(self,"isLoaded",{},smalltalk.GoogleJSAPI.klass)})},
messageSends: []}),
smalltalk.GoogleJSAPI.klass);


smalltalk.addClass('GoogleLoader', smalltalk.Object, [], 'GoogleLoader');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return self},
messageSends: []}),
smalltalk.GoogleLoader);


smalltalk.addMethod(
smalltalk.method({
selector: "basicLoad:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { $.getScript("https://www.google.com/jsapi",aBlock);;
return self}, function($ctx1) {$ctx1.fill(self,"basicLoad:",{aBlock:aBlock}, smalltalk.GoogleLoader.klass)})},
messageSends: []}),
smalltalk.GoogleLoader.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basicSetOnLoadCallback:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
google.setOnLoadCallback(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"basicSetOnLoadCallback:",{aBlock:aBlock},smalltalk.GoogleLoader.klass)})},
messageSends: []}),
smalltalk.GoogleLoader.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isLoaded",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return typeof(google) !== 'undefined' && typeof(google.load)  == 'function';
return self}, function($ctx1) {$ctx1.fill(self,"isLoaded",{}, smalltalk.GoogleLoader.klass)})},
messageSends: []}),
smalltalk.GoogleLoader.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "load:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._isLoaded();
if(smalltalk.assert($1)){
_st(aBlock)._value();
} else {
_st(self)._basicLoad_(aBlock);
};
return self}, function($ctx1) {$ctx1.fill(self,"load:",{aBlock:aBlock}, smalltalk.GoogleLoader.klass)})},
messageSends: ["ifTrue:ifFalse:", "value", "basicLoad:", "isLoaded"]}),
smalltalk.GoogleLoader.klass);


