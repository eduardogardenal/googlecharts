smalltalk.addPackage('ResourcesTests', {});
smalltalk.addClass('ResourceProviderFixture', smalltalk.ResourceProvider, ['traced'], 'ResourcesTests');
smalltalk.addMethod(
"_nativeProvideResources_callback_",
smalltalk.method({
selector: "nativeProvideResources:callback:",
category: 'not yet classified',
fn: function (aSet,callback){
var self=this;
var available;
available=smalltalk.send(self,"_nativeProvides",[]);
smalltalk.send(callback,"_value_",[smalltalk.send(aSet,"_reject_",[(function(rs){
return smalltalk.send(smalltalk.send(available,"_includes_",[rs]),"_not",[]);
})])]);
return self},
args: ["aSet", "callback"],
source: "nativeProvideResources: aSet callback: callback\x0a\x09\x22Simulate proving resouces\x22\x0a    | available|\x0a    available := self nativeProvides.\x0a    callback value: (aSet reject: [:rs| (available includes: rs)not]).",
messageSends: ["nativeProvides", "value:", "reject:", "not", "includes:"],
referencedClasses: []
}),
smalltalk.ResourceProviderFixture);

smalltalk.addMethod(
"_nativeProvides",
smalltalk.method({
selector: "nativeProvides",
category: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(["a","b","c","d","e"],"_asSet",[]);
return $1;
},
args: [],
source: "nativeProvides\x0a\x09\x22A Testing Fixture\x22\x0a\x09^ {'a' . 'b' . 'c' . 'd' . 'e'} asSet",
messageSends: ["asSet"],
referencedClasses: []
}),
smalltalk.ResourceProviderFixture);

smalltalk.addMethod(
"_traced",
smalltalk.method({
selector: "traced",
category: 'not yet classified',
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
},
args: [],
source: "traced\x0a\x09^traced ifNil:[traced := Set new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.ResourceProviderFixture);

smalltalk.addMethod(
"_traced_",
smalltalk.method({
selector: "traced:",
category: 'not yet classified',
fn: function (aSet){
var self=this;
self["@traced"]=aSet;
return self},
args: ["aSet"],
source: "traced: aSet\x0a\x09traced := aSet",
messageSends: [],
referencedClasses: []
}),
smalltalk.ResourceProviderFixture);

smalltalk.addMethod(
"_waitFor_callback_",
smalltalk.method({
selector: "waitFor:callback:",
category: 'not yet classified',
fn: function (aSet,aCallBack){
var self=this;
smalltalk.send(self,"_waitFor_callback_",[aSet,(function(){
smalltalk.send(smalltalk.send(self,"_traced",[]),"_addAll_",[aSet]);
return smalltalk.send(aCallBack,"_value",[]);
})],smalltalk.ResourceProvider);
return self},
args: ["aSet", "aCallBack"],
source: "waitFor: aSet callback: aCallBack\x0a\x09\x22comment stating purpose of message\x22\x0a\x09super waitFor: aSet callback:[self traced addAll:aSet. aCallBack value]",
messageSends: ["waitFor:callback:", "addAll:", "traced", "value"],
referencedClasses: []
}),
smalltalk.ResourceProviderFixture);



smalltalk.addClass('ResourceSequenceTests', smalltalk.TestCase, ['provider'], 'ResourcesTests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'not yet classified',
fn: function (){
var self=this;
self["@provider"]=smalltalk.send((smalltalk.ResourceProviderFixture || ResourceProviderFixture),"_new",[]);
return self},
args: [],
source: "setUp\x0a    provider := ResourceProviderFixture new\x0a\x09",
messageSends: ["new"],
referencedClasses: ["ResourceProviderFixture"]
}),
smalltalk.ResourceSequenceTests);

smalltalk.addMethod(
"_testSequencesCallbacks",
smalltalk.method({
selector: "testSequencesCallbacks",
category: 'not yet classified',
fn: function (){
var self=this;
var count;
count=(0);
smalltalk.send(self["@provider"],"_waitFor_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["a","c"]),(function(){
count=smalltalk.send(count,"__plus",[(1)]);
return count;
})]);
smalltalk.send(self["@provider"],"_waitFor_callback_",["b",(function(){
count=smalltalk.send(count,"__plus",[(2)]);
return count;
})]);
smalltalk.send(self["@provider"],"_waitFor_callback_",["c",(function(){
count=smalltalk.send(count,"__plus",[(4)]);
return count;
})]);
smalltalk.send(self["@provider"],"_waitFor_callback_",["d",(function(){
count=smalltalk.send(count,"__plus",[(8)]);
return count;
})]);
smalltalk.send(self["@provider"],"_waitFor_callback_",["e",(function(){
count=smalltalk.send(count,"__plus",[(16)]);
return count;
})]);
smalltalk.send(self["@provider"],"_produce_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_",["c"]),(function(){
smalltalk.send(self,"_assert_",[smalltalk.send(count,"__eq",[(4)])]);
return smalltalk.send(self["@provider"],"_produce_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["a","e"]),(function(){
smalltalk.send(self,"_assert_",[smalltalk.send(count,"__eq",[(21)])]);
return smalltalk.send(self["@provider"],"_produceAllRequested_",[(function(){
return smalltalk.send(self,"_assert_",[smalltalk.send(count,"__eq",[(31)])]);
})]);
})]);
})]);
return self},
args: [],
source: "testSequencesCallbacks\x0a\x09\x22create and execute a sequence\x22\x0a    |count|\x0a    count := 0.\x0a    provider waitFor:(Set with: 'a' with:'c') callback:[count := count + 1].\x0a    provider waitFor:'b' callback:[count := count + 2].\x0a    provider waitFor:'c' callback:[count := count + 4].\x0a    provider waitFor:'d' callback:[count := count + 8].\x0a    provider waitFor:'e' callback:[count := count + 16].\x0a    provider produce: (Set with:'c') callback:[\x0a      self assert:(count = 4).\x0a      provider produce:(Set with:'a' with:'e') callback:[\x0a      self assert:(count = 21).\x0a      provider produceAllRequested:[\x0a      self assert:(count = 31)]]]\x0a    ",
messageSends: ["waitFor:callback:", "with:with:", "+", "produce:callback:", "with:", "assert:", "=", "produceAllRequested:"],
referencedClasses: ["Set"]
}),
smalltalk.ResourceSequenceTests);



smalltalk.addClass('ResourceValidationTests', smalltalk.TestCase, ['provider'], 'ResourcesTests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'not yet classified',
fn: function (){
var self=this;
self["@provider"]=smalltalk.send((smalltalk.ResourceProviderFixture || ResourceProviderFixture),"_new",[]);
return self},
args: [],
source: "setUp\x0a    provider := ResourceProviderFixture new\x0a\x09",
messageSends: ["new"],
referencedClasses: ["ResourceProviderFixture"]
}),
smalltalk.ResourceValidationTests);

smalltalk.addMethod(
"_testAvailableResourceCallback",
smalltalk.method({
selector: "testAvailableResourceCallback",
category: 'not yet classified',
fn: function (){
var self=this;
var async;
async=false;
smalltalk.send(self,"_shouldnt_raise_",[(function(){
return smalltalk.send(self["@provider"],"_waitFor_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["a","b"]),(function(){
async=true;
return async;
})]);
}),(smalltalk.UnknownResource || UnknownResource)]);
smalltalk.send(self,"_shouldnt_raise_",[(function(){
return smalltalk.send(self["@provider"],"_produce_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["a","b"]),(function(){
return smalltalk.send(self,"_assert_",[true]);
})]);
}),(smalltalk.UnknownResource || UnknownResource)]);
smalltalk.send(self,"_assert_",[async]);
return self},
args: [],
source: "testAvailableResourceCallback\x0a\x09\x22Test available resource are not unknown\x22\x0a    |async|\x0a    async := false.\x0a    self shouldnt:[provider waitFor: (Set with:'a' with:'b')callback:[async := true]] raise: UnknownResource.\x0a\x09self shouldnt:[provider produce: (Set with:'a' with: 'b') callback:[self assert:true]] raise: UnknownResource.\x0a    self assert: async.\x0a",
messageSends: ["shouldnt:raise:", "waitFor:callback:", "with:with:", "produce:callback:", "assert:"],
referencedClasses: ["Set", "UnknownResource"]
}),
smalltalk.ResourceValidationTests);

smalltalk.addMethod(
"_testCanProvide",
smalltalk.method({
selector: "testCanProvide",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_assert_",[smalltalk.send(self["@provider"],"_canProvide_",[smalltalk.send((smalltalk.Set || Set),"_with_",["a"])])]);
smalltalk.send(self,"_deny_",[smalltalk.send(self["@provider"],"_canProvide_",[smalltalk.send((smalltalk.Set || Set),"_with_",["x"])])]);
return self},
args: [],
source: "testCanProvide\x0a\x09self assert:(provider canProvide:(Set with:'a')).\x0a    self deny:(provider canProvide:(Set with:'x')).",
messageSends: ["assert:", "canProvide:", "with:", "deny:"],
referencedClasses: ["Set"]
}),
smalltalk.ResourceValidationTests);

smalltalk.addMethod(
"_testSatisfyAll",
smalltalk.method({
selector: "testSatisfyAll",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self["@provider"],"_waitFor_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_",["a"]),(function(){
})]);
smalltalk.send(self["@provider"],"_waitFor_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_",["c"]),(function(){
})]);
smalltalk.send(self["@provider"],"_produceAllRequested_",[(function(){
smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(self["@provider"],"_traced",[]),"_includes_",["a"])]);
return smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(self["@provider"],"_traced",[]),"_includes_",["c"])]);
})]);
return self},
args: [],
source: "testSatisfyAll\x0a\x09\x22\x22\x0a    provider waitFor: (Set with:'a') callback:[].\x0a    provider waitFor: (Set with:'c') callback:[].\x0a    provider produceAllRequested:[\x0a    self assert:(provider traced includes:'a').\x0a    self assert:(provider traced includes:'c')].\x0a    ",
messageSends: ["waitFor:callback:", "with:", "produceAllRequested:", "assert:", "includes:", "traced"],
referencedClasses: ["Set"]
}),
smalltalk.ResourceValidationTests);

smalltalk.addMethod(
"_testUnavailableResource",
smalltalk.method({
selector: "testUnavailableResource",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self,"_should_raise_",[(function(){
return smalltalk.send(self["@provider"],"_waitFor_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["x","b"]),(function(){
return smalltalk.send(self,"_signalFailure_",["Should not execute!"]);
})]);
}),(smalltalk.UnknownResource || UnknownResource)]);
smalltalk.send(self,"_should_raise_",[(function(){
return smalltalk.send(self["@provider"],"_produce_callback_",[smalltalk.send((smalltalk.Set || Set),"_with_with_",["x","b"]),(function(){
return smalltalk.send(self,"_error_",["Callback should not complete!"]);
})]);
}),(smalltalk.UnknownResource || UnknownResource)]);
return self},
args: [],
source: "testUnavailableResource\x0a  \x22Testing Unavailable Resources\x22\x0a\x09self should:[provider waitFor: (Set with:'x' with: 'b') callback:[self signalFailure:'Should not execute!']] raise: UnknownResource.\x0a\x09self should:[provider produce: (Set with:'x' with: 'b') callback:[self error:'Callback should not complete!']] raise: UnknownResource.",
messageSends: ["should:raise:", "waitFor:callback:", "with:with:", "signalFailure:", "produce:callback:", "error:"],
referencedClasses: ["Set", "UnknownResource"]
}),
smalltalk.ResourceValidationTests);



