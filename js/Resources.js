smalltalk.addPackage('Resources', {});
smalltalk.addClass('ResourceProvider', smalltalk.Object, ['requests', 'satisfied'], 'Resources');
smalltalk.ResourceProvider.comment="I am an Abstract framework that allows a set of resources to be requested and provided.\x0a\x0aSubclasses need to implement:\x0a\x09nativeProvides\x0a    \x09to a returns a Set of  all the resources that can be produced.\x0a        \x0a     nativeProvideResources: aSet  callback: aBlock \x0a     \x09 Where aSet is the resources requested to be provided and aBlock is called with a Set of the actual resources newly provided.\x0a         \x0a      Then semantics of resource provision are up to your implementation.\x0a         \x0a         \x0a      When you desire to force the production of resources  produce: aSet callback: aBlock will force your native routines to produce the resource.\x0a      \x0a      If you desire to have actions occur when a set of resources becomes available you can send waitFor: aSet callback: aBlock and the block will be called when the resources at some time in the future.\x0a    \x0a\x09"
smalltalk.addMethod(
"_canProvide_",
smalltalk.method({
selector: "canProvide:",
category: 'not yet classified',
fn: function (aSet){
var self=this;
var $1;
var $early={};
try {
var provides;
provides=smalltalk.send(self,"_nativeProvides",[]);
smalltalk.send(aSet,"_do_",[(function(resource){
$1=smalltalk.send(provides,"_includes_",[resource]);
if(! smalltalk.assert($1)){
throw $early=[false];
};
})]);
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
},
args: ["aSet"],
source: "canProvide: aSet\x0a    \x22Determine if a given set can be provided by this provider\x22\x0a\x09|provides|\x0a    provides := self nativeProvides.\x0a\x09aSet do:[:resource| (provides includes:resource) ifFalse:[^false]].\x0a    ^true",
messageSends: ["nativeProvides", "do:", "ifFalse:", "includes:"],
referencedClasses: []
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_notSatisfied_",
smalltalk.method({
selector: "notSatisfied:",
category: 'not yet classified',
fn: function (aSet){
var self=this;
var $1;
var s;
s=smalltalk.send(self,"_satisfied",[]);
$1=smalltalk.send(aSet,"_reject_",[(function(i){
return smalltalk.send(s,"_includes_",[i]);
})]);
return $1;
},
args: ["aSet"],
source: "notSatisfied: aSet\x0a   \x22Return the subset of a set with all satisfied packages removed\x22\x0a\x09|s|\x0a    s := self satisfied.\x0a\x09^ aSet reject:[:i | s includes: i]",
messageSends: ["satisfied", "reject:", "includes:"],
referencedClasses: []
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_produce_callback_",
smalltalk.method({
selector: "produce:callback:",
category: 'not yet classified',
fn: function (aSet,callback){
var self=this;
var $1;
var stillNeeded;
stillNeeded=smalltalk.send(self,"_notSatisfied_",[aSet]);
$1=smalltalk.send(self,"_canProvide_",[stillNeeded]);
if(! smalltalk.assert($1)){
smalltalk.send((smalltalk.UnknownResource || UnknownResource),"_signal_",["Can not provide resources"]);
};
smalltalk.send(self,"_nativeProvideResources_callback_",[stillNeeded,(function(justProvided){
smalltalk.send(self,"_satisfied_",[smalltalk.send(smalltalk.send(self,"_satisfied",[]),"__comma",[justProvided])]);
smalltalk.send(self,"_requests_",[smalltalk.send(smalltalk.send(self,"_requests",[]),"_reject_",[(function(req){
smalltalk.send(req,"_provided_",[justProvided]);
return smalltalk.send(smalltalk.send(req,"_blocked",[]),"_not",[]);
})])]);
return smalltalk.send(callback,"_value",[]);
})]);
return self},
args: ["aSet", "callback"],
source: "produce: aSet callback: callback\x0a\x09\x22Cause the production of the set of Resources and do the callback when completed.\x22\x0a    |stillNeeded|\x0a    stillNeeded := self notSatisfied: aSet.\x0a    (self canProvide: stillNeeded) ifFalse:[UnknownResource signal:'Can not provide resources'].\x0a    self nativeProvideResources: stillNeeded callback:[\x0a       \x09:justProvided |\x0a          self satisfied:(self satisfied, justProvided).\x0a          self requests:(self requests reject:[:req| req provided:justProvided. req blocked not]).\x0a          callback value]\x0a    \x0a    \x0a    ",
messageSends: ["notSatisfied:", "ifFalse:", "signal:", "canProvide:", "nativeProvideResources:callback:", "satisfied:", ",", "satisfied", "requests:", "reject:", "provided:", "not", "blocked", "requests", "value"],
referencedClasses: ["UnknownResource"]
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_produceAllRequested_",
smalltalk.method({
selector: "produceAllRequested:",
category: 'not yet classified',
fn: function (callback){
var self=this;
var all;
all=smalltalk.send((smalltalk.Set || Set),"_new",[]);
smalltalk.send(smalltalk.send(self,"_requests",[]),"_do_",[(function(request){
return smalltalk.send(all,"_addAll_",[smalltalk.send(request,"_required",[])]);
})]);
smalltalk.send(self,"_produce_callback_",[all,callback]);
return self},
args: ["callback"],
source: "produceAllRequested: callback\x0a\x09\x22Satisfy all Reqests now by providing all resource of all requests if possible.\x22\x0a\x09|all|\x0a    all := Set new.\x0a\x09self requests do:[:request| all addAll:request required].\x0a    self produce:all callback: callback\x0a    ",
messageSends: ["new", "do:", "addAll:", "required", "requests", "produce:callback:"],
referencedClasses: ["Set"]
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_requests",
smalltalk.method({
selector: "requests",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@requests"]) == nil || $receiver == undefined){
self["@requests"]=smalltalk.send((smalltalk.Array || Array),"_new",[]);
$1=self["@requests"];
} else {
$1=self["@requests"];
};
return $1;
},
args: [],
source: "requests\x0a\x09\x22Return all the ResourceRequests for this provider\x22\x0a\x09^requests ifNil:[requests := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_requests_",
smalltalk.method({
selector: "requests:",
category: 'not yet classified',
fn: function (anArray){
var self=this;
self["@requests"]=anArray;
return self},
args: ["anArray"],
source: "requests: anArray\x0a\x09\x22Set all the ResourceRequests for this provider\x22\x0a\x09requests := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_satisfied",
smalltalk.method({
selector: "satisfied",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@satisfied"]) == nil || $receiver == undefined){
self["@satisfied"]=smalltalk.send((smalltalk.Set || Set),"_new",[]);
$1=self["@satisfied"];
} else {
$1=self["@satisfied"];
};
return $1;
},
args: [],
source: "satisfied\x0a\x09\x22Return all the packages provided by this Provider at this time.\x22\x0a\x09^satisfied ifNil:[satisfied := Set new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_satisfied_",
smalltalk.method({
selector: "satisfied:",
category: 'not yet classified',
fn: function (aSet){
var self=this;
self["@satisfied"]=aSet;
return self},
args: ["aSet"],
source: "satisfied: aSet\x0a\x09\x22Set the set of packages that this provider provides at this time.\x22\x0a\x09satisfied := aSet",
messageSends: [],
referencedClasses: []
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_waitFor_callback_",
smalltalk.method({
selector: "waitFor:callback:",
category: 'not yet classified',
fn: function (aSet,aBlock){
var self=this;
var $1,$2,$3;
var request;
$1=smalltalk.send(self,"_canProvide_",[aSet]);
if(! smalltalk.assert($1)){
smalltalk.send((smalltalk.UnknownResource || UnknownResource),"_signal_",["Can not provide resources"]);
};
$2=smalltalk.send((smalltalk.ResourceRequest || ResourceRequest),"_new",[]);
smalltalk.send($2,"_required_",[aSet]);
$3=smalltalk.send($2,"_callback_",[aBlock]);
request=$3;
smalltalk.send(smalltalk.send(self,"_requests",[]),"_add_",[request]);
return self},
args: ["aSet", "aBlock"],
source: "waitFor: aSet callback: aBlock\x0a\x09\x22Request a resource and do the callback when it becomes available\x22\x0a    |request|\x0a    (self canProvide: aSet) ifFalse:[UnknownResource signal:'Can not provide resources'].\x0a    request := ResourceRequest new required: aSet; callback: aBlock.\x0a    self requests add: request.\x0a    \x0a    \x0a    ",
messageSends: ["ifFalse:", "signal:", "canProvide:", "required:", "new", "callback:", "add:", "requests"],
referencedClasses: ["UnknownResource", "ResourceRequest"]
}),
smalltalk.ResourceProvider);



smalltalk.addClass('ResourceRequest', smalltalk.Object, ['required', 'callback'], 'Resources');
smalltalk.ResourceRequest.comment="I am a unsatisfied request for a resource and have a callback for resources when they are provided (satisfied)."
smalltalk.addMethod(
"_blocked",
smalltalk.method({
selector: "blocked",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_required",[]),"_isEmpty",[]),"_not",[]);
return $1;
},
args: [],
source: "blocked\x0a\x09^self required isEmpty not",
messageSends: ["not", "isEmpty", "required"],
referencedClasses: []
}),
smalltalk.ResourceRequest);

smalltalk.addMethod(
"_callback",
smalltalk.method({
selector: "callback",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@callback"]) == nil || $receiver == undefined){
self["@callback"]=(function(){
});
$1=self["@callback"];
} else {
$1=self["@callback"];
};
return $1;
},
args: [],
source: "callback\x0a\x09^callback ifNil:[callback := []]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.ResourceRequest);

smalltalk.addMethod(
"_callback_",
smalltalk.method({
selector: "callback:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
self["@callback"]=aBlock;
return self},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.ResourceRequest);

smalltalk.addMethod(
"_provided_",
smalltalk.method({
selector: "provided:",
category: 'not yet classified',
fn: function (aSet){
var self=this;
var $1;
smalltalk.send(self,"_required_",[smalltalk.send(smalltalk.send(self,"_required",[]),"_reject_",[(function(r){
return smalltalk.send(aSet,"_includes_",[r]);
})])]);
$1=smalltalk.send(self,"_blocked",[]);
if(! smalltalk.assert($1)){
smalltalk.send(smalltalk.send(self,"_callback",[]),"_value",[]);
smalltalk.send(self,"_callback_",[(function(){
})]);
};
return self},
args: ["aSet"],
source: "provided: aSet\x0a\x09\x22This request is provided the set of Resources\x22\x0a\x09self required: (self required reject:[:r| aSet includes:r]).\x0a    (self blocked) ifFalse:[self callback value.self callback:[]].",
messageSends: ["required:", "reject:", "includes:", "required", "ifFalse:", "value", "callback", "callback:", "blocked"],
referencedClasses: []
}),
smalltalk.ResourceRequest);

smalltalk.addMethod(
"_required",
smalltalk.method({
selector: "required",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@required"]) == nil || $receiver == undefined){
self["@required"]=smalltalk.send((smalltalk.Set || Set),"_new",[]);
$1=self["@required"];
} else {
$1=self["@required"];
};
return $1;
},
args: [],
source: "required\x0a\x09^required ifNil:[required := Set new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.ResourceRequest);

smalltalk.addMethod(
"_required_",
smalltalk.method({
selector: "required:",
category: 'not yet classified',
fn: function (aSet){
var self=this;
self["@required"]=aSet;
return self},
args: ["aSet"],
source: "required: aSet\x0a\x09required := aSet",
messageSends: [],
referencedClasses: []
}),
smalltalk.ResourceRequest);



smalltalk.addClass('SerialNumber', smalltalk.Object, ['serial'], 'Resources');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
self["@serial"]=(1);
return self},
args: [],
source: "initialize\x0a\x09\x22Start the sequence with 1\x22\x0a\x09serial := 1",
messageSends: [],
referencedClasses: []
}),
smalltalk.SerialNumber);

smalltalk.addMethod(
"_next",
smalltalk.method({
selector: "next",
category: 'not yet classified',
fn: function (){
var self=this;
var v;
v=self["@serial"];
self["@serial"]=smalltalk.send(self["@serial"],"__plus",[(1)]);
return v;
},
args: [],
source: "next\x0a\x09\x22Return the next serial in the sequence\x22\x0a\x09|v|\x0a    v := serial.\x0a    serial := serial + 1.\x0a    ^v",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.SerialNumber);



smalltalk.addClass('UnknownResource', smalltalk.Error, ['resourceSet'], 'Resources');
smalltalk.UnknownResource.comment="I am an error to be thrown when a provides does not know about a specific resource that is requested."
smalltalk.addMethod(
"_resourceSet",
smalltalk.method({
selector: "resourceSet",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
if(($receiver = self["@resourceSet"]) == nil || $receiver == undefined){
self["@resourceSet"]=smalltalk.send((smalltalk.Set || Set),"_new",[]);
$1=self["@resourceSet"];
} else {
$1=self["@resourceSet"];
};
return $1;
},
args: [],
source: "resourceSet\x0a\x09^resourceSet  ifNil:[resourceSet := Set new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.UnknownResource);

smalltalk.addMethod(
"_resourceSet_",
smalltalk.method({
selector: "resourceSet:",
category: 'not yet classified',
fn: function (aSet){
var self=this;
self["@resourceSet"]=aSet;
return self},
args: ["aSet"],
source: "resourceSet: aSet\x0a\x09resourceSet := aSet",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownResource);



