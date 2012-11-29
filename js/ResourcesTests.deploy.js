smalltalk.addPackage('ResourcesTests', {});
smalltalk.addClass('ResourceProviderFixture', smalltalk.ResourceProvider, ['traced'], 'ResourcesTests');
smalltalk.addMethod(
"_nativeProvideResources_",
smalltalk.method({
selector: "nativeProvideResources:",
fn: function (aSet){
var self=this;
var $1;
var available;
available=smalltalk.send(self,"_nativeProvides",[]);
$1=smalltalk.send(aSet,"_reject_",[(function(rs){
return smalltalk.send(smalltalk.send(available,"_includes_",[rs]),"_not",[]);
})]);
return $1;
}
}),
smalltalk.ResourceProviderFixture);

smalltalk.addMethod(
"_nativeProvides",
smalltalk.method({
selector: "nativeProvides",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(["a","b","c","d","e"],"_asSet",[]);
return $1;
}
}),
smalltalk.ResourceProviderFixture);

smalltalk.addMethod(
"_request_callback_",
smalltalk.method({
selector: "request:callback:",
fn: function (aSet,aCallBack){
var self=this;
smalltalk.send(self,"_request_callback_",[aSet,(function(){
smalltalk.send(smalltalk.send(self,"_traced",[]),"_addAll_",[aSet]);
return smalltalk.send(aCallBack,"_value",[]);
})],smalltalk.ResourceProvider);
return self}
}),
smalltalk.ResourceProviderFixture);

smalltalk.addMethod(
"_traced",
smalltalk.method({
selector: "traced",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@traced"]) == nil || $receiver == undefined){
self["@traced"]=smalltalk.send((smalltalk.Set || Set),"_new",[]);
$1=self["@traced"];
} else {
$1=self["@traced"];
};
return $1;
}
}),
smalltalk.ResourceProviderFixture);

smalltalk.addMethod(
"_traced_",
smalltalk.method({
selector: "traced:",
fn: function (aSet){
var self=this;
self["@traced"]=aSet;
return self}
}),
smalltalk.ResourceProviderFixture);



smalltalk.addClass('ResourceSequenceTests', smalltalk.TestCase, ['provider'], 'ResourcesTests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
self["@provider"]=smalltalk.send((smalltalk.ResourceProviderFixture || ResourceProviderFixture),"_new",[]);
return self}
}),
smalltalk.ResourceSequenceTests);

smalltalk.addMethod(
"_testSequencesCallbacks",
smalltalk.method({
selector: "testSequencesCallbacks",
fn: function (){
var self=this;
var count;
count=(0);
smalltalk.send(self["@provider"],"_request_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["a","c"]),(function(){
count=smalltalk.send(count,"__plus",[(1)]);
return count;
})]);
smalltalk.send(self["@provider"],"_request_callback_",["b",(function(){
count=smalltalk.send(count,"__plus",[(2)]);
return count;
})]);
smalltalk.send(self["@provider"],"_request_callback_",["c",(function(){
count=smalltalk.send(count,"__plus",[(4)]);
return count;
})]);
smalltalk.send(self["@provider"],"_request_callback_",["d",(function(){
count=smalltalk.send(count,"__plus",[(8)]);
return count;
})]);
smalltalk.send(self["@provider"],"_request_callback_",["e",(function(){
count=smalltalk.send(count,"__plus",[(16)]);
return count;
})]);
smalltalk.send(self["@provider"],"_satisfy_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_",["c"]),(function(){
smalltalk.send(self,"_assert_",[smalltalk.send(count,"__eq",[(4)])]);
return smalltalk.send(self["@provider"],"_satisfy_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["a","e"]),(function(){
smalltalk.send(self,"_assert_",[smalltalk.send(count,"__eq",[(21)])]);
return smalltalk.send(self["@provider"],"_satisfyAll_",[(function(){
return smalltalk.send(self,"_assert_",[smalltalk.send(count,"__eq",[(31)])]);
})]);
})]);
})]);
return self}
}),
smalltalk.ResourceSequenceTests);



smalltalk.addClass('ResourceValidationTests', smalltalk.TestCase, ['provider'], 'ResourcesTests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
self["@provider"]=smalltalk.send((smalltalk.ResourceProviderFixture || ResourceProviderFixture),"_new",[]);
return self}
}),
smalltalk.ResourceValidationTests);

smalltalk.addMethod(
"_testAvailableResourceCallback",
smalltalk.method({
selector: "testAvailableResourceCallback",
fn: function (){
var self=this;
var async;
async=false;
smalltalk.send(self,"_shouldnt_raise_",[(function(){
return smalltalk.send(self["@provider"],"_request_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["a","b"]),(function(){
async=true;
return async;
})]);
}),(smalltalk.UnknownResource || UnknownResource)]);
smalltalk.send(self,"_shouldnt_raise_",[(function(){
return smalltalk.send(self["@provider"],"_satisfy_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["a","b"]),(function(){
return smalltalk.send(self,"_assert_",[true]);
})]);
}),(smalltalk.UnknownResource || UnknownResource)]);
smalltalk.send(self,"_assert_",[async]);
return self}
}),
smalltalk.ResourceValidationTests);

smalltalk.addMethod(
"_testCanProvide",
smalltalk.method({
selector: "testCanProvide",
fn: function (){
var self=this;
smalltalk.send(self,"_assert_",[smalltalk.send(self["@provider"],"_canProvide_",[smalltalk.send((smalltalk.Set || Set),"_with_",["a"])])]);
smalltalk.send(self,"_deny_",[smalltalk.send(self["@provider"],"_canProvide_",[smalltalk.send((smalltalk.Set || Set),"_with_",["x"])])]);
return self}
}),
smalltalk.ResourceValidationTests);

smalltalk.addMethod(
"_testSatisfyAll",
smalltalk.method({
selector: "testSatisfyAll",
fn: function (){
var self=this;
smalltalk.send(self["@provider"],"_request_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_",["a"]),(function(){
})]);
smalltalk.send(self["@provider"],"_request_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_",["c"]),(function(){
})]);
smalltalk.send(self["@provider"],"_satisfyAll_",[(function(){
smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(self["@provider"],"_traced",[]),"_includes_",["a"])]);
return smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(self["@provider"],"_traced",[]),"_includes_",["c"])]);
})]);
return self}
}),
smalltalk.ResourceValidationTests);

smalltalk.addMethod(
"_testUnavailableResource",
smalltalk.method({
selector: "testUnavailableResource",
fn: function (){
var self=this;
smalltalk.send(self,"_should_raise_",[(function(){
return smalltalk.send(self["@provider"],"_request_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["x","b"]),(function(){
return smalltalk.send(self,"_signalFailure_",["Should not execute!"]);
})]);
}),(smalltalk.UnknownResource || UnknownResource)]);
smalltalk.send(self,"_should_raise_",[(function(){
return smalltalk.send(self["@provider"],"_satisfy_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["x","b"]),(function(){
return smalltalk.send(self,"_error_",["Callback should not complete!"]);
})]);
}),(smalltalk.UnknownResource || UnknownResource)]);
return self}
}),
smalltalk.ResourceValidationTests);



