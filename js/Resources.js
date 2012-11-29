smalltalk.addPackage('Resources', {});
smalltalk.addClass('ResourceProvider', smalltalk.Object, ['requests', 'satisfied'], 'Resources');
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
source: "canProvide: aSet\x0a\x09|provides|\x0a    provides := self nativeProvides.\x0a\x09aSet do:[:resource| (provides includes:resource) ifFalse:[^false]].\x0a    ^true",
messageSends: ["nativeProvides", "do:", "ifFalse:", "includes:"],
referencedClasses: []
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_removeSatisfied_",
smalltalk.method({
selector: "removeSatisfied:",
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
source: "removeSatisfied: aSet\x0a\x09|s|\x0a    s := self satisfied.\x0a\x09^ aSet reject:[:i | s includes: i]",
messageSends: ["satisfied", "reject:", "includes:"],
referencedClasses: []
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_request_callback_",
smalltalk.method({
selector: "request:callback:",
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
source: "request: aSet callback: aBlock\x0a\x09\x22Request a Set of resources from the provider - syncronously\x22\x0a    |request|\x0a    (self canProvide: aSet) ifFalse:[UnknownResource signal:'Can not provide resources'].\x0a    request := ResourceRequest new required: aSet; callback: aBlock.\x0a    self requests add: request.\x0a    \x0a    \x0a    ",
messageSends: ["ifFalse:", "signal:", "canProvide:", "required:", "new", "callback:", "add:", "requests"],
referencedClasses: ["UnknownResource", "ResourceRequest"]
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
source: "requests\x0a\x09^requests ifNil:[requests := Array new]",
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
source: "requests: anArray\x0a\x09requests := anArray",
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
source: "satisfied\x0a\x09^satisfied ifNil:[satisfied := Set new]",
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
source: "satisfied: aSet\x0a\x09satisfied := aSet",
messageSends: [],
referencedClasses: []
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_satisfy_",
smalltalk.method({
selector: "satisfy:",
category: 'not yet classified',
fn: function (aSet){
var self=this;
smalltalk.send(self,"_satisfy_callback_",[aSet,(function(){
})]);
return self},
args: ["aSet"],
source: "satisfy: aSet\x0a\x09\x22Request a Set of resources from the provider - syncronous\x22\x0a   self satisfy: aSet callback:[]\x0a    \x0a    \x0a    ",
messageSends: ["satisfy:callback:"],
referencedClasses: []
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_satisfy_callback_",
smalltalk.method({
selector: "satisfy:callback:",
category: 'not yet classified',
fn: function (aSet,callback){
var self=this;
var $1;
var justProvided;
var needed;
needed=smalltalk.send(self,"_removeSatisfied_",[aSet]);
$1=smalltalk.send(self,"_canProvide_",[needed]);
if(! smalltalk.assert($1)){
smalltalk.send((smalltalk.UnknownResource || UnknownResource),"_signal_",["Can not provide resources"]);
};
justProvided=smalltalk.send(self,"_nativeProvideResources_",[needed]);
smalltalk.send(self,"_satisfied_",[smalltalk.send(smalltalk.send(self,"_satisfied",[]),"__comma",[justProvided])]);
smalltalk.send(self,"_requests_",[smalltalk.send(smalltalk.send(self,"_requests",[]),"_reject_",[(function(req){
smalltalk.send(req,"_provided_",[justProvided]);
return smalltalk.send(smalltalk.send(req,"_blocked",[]),"_not",[]);
})])]);
smalltalk.send(callback,"_value",[]);
return self},
args: ["aSet", "callback"],
source: "satisfy: aSet callback: callback\x0a\x09\x22Request a Set of resources from the provider - syncronous\x22\x0a    |justProvided needed|\x0a    needed := self removeSatisfied: aSet.\x0a    (self canProvide: needed) ifFalse:[UnknownResource signal:'Can not provide resources'].\x0a    self satisfied:(self satisfied,( justProvided := self nativeProvideResources: needed)).\x0a    self requests:(self requests reject:[:req| req provided:justProvided. req blocked not]).\x0a    callback value\x0a    \x0a    \x0a    ",
messageSends: ["removeSatisfied:", "ifFalse:", "signal:", "canProvide:", "satisfied:", ",", "nativeProvideResources:", "satisfied", "requests:", "reject:", "provided:", "not", "blocked", "requests", "value"],
referencedClasses: ["UnknownResource"]
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_satisfyAll",
smalltalk.method({
selector: "satisfyAll",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_satisfyAll_",[(function(){
})]);
return self},
args: [],
source: "satisfyAll\x0a     self satisfyAll:[]\x0a    ",
messageSends: ["satisfyAll:"],
referencedClasses: []
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_satisfyAll_",
smalltalk.method({
selector: "satisfyAll:",
category: 'not yet classified',
fn: function (callback){
var self=this;
var all;
all=smalltalk.send((smalltalk.Set || Set),"_new",[]);
smalltalk.send(smalltalk.send(self,"_requests",[]),"_do_",[(function(request){
return smalltalk.send(all,"_addAll_",[smalltalk.send(request,"_required",[])]);
})]);
smalltalk.send(self,"_satisfy_callback_",[all,callback]);
return self},
args: ["callback"],
source: "satisfyAll: callback\x0a\x09|all|\x0a    all := Set new.\x0a\x09self requests do:[:request| all addAll:request required].\x0a    self satisfy:all callback: callback\x0a    ",
messageSends: ["new", "do:", "addAll:", "required", "requests", "satisfy:callback:"],
referencedClasses: ["Set"]
}),
smalltalk.ResourceProvider);



smalltalk.addClass('ResourceRequest', smalltalk.Object, ['required', 'callback'], 'Resources');
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



smalltalk.addClass('UnknownResource', smalltalk.Error, ['resourceSet'], 'Resources');
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



