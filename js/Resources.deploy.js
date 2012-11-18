smalltalk.addPackage('Resources', {});
smalltalk.addClass('ResourceProvider', smalltalk.Object, ['requests', 'satisfied'], 'Resources');
smalltalk.addMethod(
"_canProvide_",
smalltalk.method({
selector: "canProvide:",
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
}
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_removeSatisfied_",
smalltalk.method({
selector: "removeSatisfied:",
fn: function (aSet){
var self=this;
var $1;
var s;
s=smalltalk.send(self,"_satisfied",[]);
$1=smalltalk.send(aSet,"_reject_",[(function(i){
return smalltalk.send(s,"_includes_",[i]);
})]);
return $1;
}
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_request_callback_",
smalltalk.method({
selector: "request:callback:",
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
return self}
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_requests",
smalltalk.method({
selector: "requests",
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
}
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_requests_",
smalltalk.method({
selector: "requests:",
fn: function (anArray){
var self=this;
self["@requests"]=anArray;
return self}
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_satisfied",
smalltalk.method({
selector: "satisfied",
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
}
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_satisfied_",
smalltalk.method({
selector: "satisfied:",
fn: function (aSet){
var self=this;
self["@satisfied"]=aSet;
return self}
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_satisfy_",
smalltalk.method({
selector: "satisfy:",
fn: function (aSet){
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
return self}
}),
smalltalk.ResourceProvider);

smalltalk.addMethod(
"_satisfyAll",
smalltalk.method({
selector: "satisfyAll",
fn: function (){
var self=this;
var all;
all=smalltalk.send((smalltalk.Set || Set),"_new",[]);
smalltalk.send(smalltalk.send(self,"_requests",[]),"_do_",[(function(request){
return smalltalk.send(all,"_addAll_",[smalltalk.send(request,"_required",[])]);
})]);
smalltalk.send(self,"_satisfy_",[all]);
return self}
}),
smalltalk.ResourceProvider);



smalltalk.addClass('ResourceRequest', smalltalk.Object, ['required', 'callback'], 'Resources');
smalltalk.addMethod(
"_blocked",
smalltalk.method({
selector: "blocked",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(self,"_required",[]),"_isEmpty",[]),"_not",[]);
return $1;
}
}),
smalltalk.ResourceRequest);

smalltalk.addMethod(
"_callback",
smalltalk.method({
selector: "callback",
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
}
}),
smalltalk.ResourceRequest);

smalltalk.addMethod(
"_callback_",
smalltalk.method({
selector: "callback:",
fn: function (aBlock){
var self=this;
self["@callback"]=aBlock;
return self}
}),
smalltalk.ResourceRequest);

smalltalk.addMethod(
"_provided_",
smalltalk.method({
selector: "provided:",
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
return self}
}),
smalltalk.ResourceRequest);

smalltalk.addMethod(
"_required",
smalltalk.method({
selector: "required",
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
}
}),
smalltalk.ResourceRequest);

smalltalk.addMethod(
"_required_",
smalltalk.method({
selector: "required:",
fn: function (aSet){
var self=this;
self["@required"]=aSet;
return self}
}),
smalltalk.ResourceRequest);



smalltalk.addClass('UnknownResource', smalltalk.Error, ['resourceSet'], 'Resources');
smalltalk.addMethod(
"_resourceSet",
smalltalk.method({
selector: "resourceSet",
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
}
}),
smalltalk.UnknownResource);

smalltalk.addMethod(
"_resourceSet_",
smalltalk.method({
selector: "resourceSet:",
fn: function (aSet){
var self=this;
self["@resourceSet"]=aSet;
return self}
}),
smalltalk.UnknownResource);



