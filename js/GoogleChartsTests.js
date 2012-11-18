smalltalk.addPackage('GoogleChartsTests', {});
smalltalk.addClass('GoogleLoaderFixture', smalltalk.GoogleLoader, ['packages'], 'GoogleChartsTests');
smalltalk.addMethod(
"_googleLoad_",
smalltalk.method({
selector: "googleLoad:",
category: 'not yet classified',
fn: function (p){
var self=this;
self["@packages"]=p;
return self},
args: ["p"],
source: "googleLoad: p\x0a\x09packages := p.\x0a\x09\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleLoaderFixture);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
category: 'not yet classified',
fn: function (){
var self=this;
return self["@packages"];
},
args: [],
source: "packages\x0a\x09^packages",
messageSends: [],
referencedClasses: []
}),
smalltalk.GoogleLoaderFixture);



smalltalk.addClass('GoogleLoaderTest', smalltalk.TestCase, [], 'GoogleChartsTests');
smalltalk.addMethod(
"_testFixturePackageTracking",
smalltalk.method({
selector: "testFixturePackageTracking",
category: 'not yet classified',
fn: function (){
var self=this;
var loader;
loader=smalltalk.send((smalltalk.GoogleLoaderFixture || GoogleLoaderFixture),"_new",[]);
smalltalk.send(loader,"_googleLoad_",[smalltalk.send(["gump"],"_asSet",[])]);
smalltalk.send(self,"_deny_",[smalltalk.send(smalltalk.send(loader,"_packages",[]),"_isNil",[])]);
smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(loader,"_packages",[]),"_includes_",["gump"])]);
return self},
args: [],
source: "testFixturePackageTracking\x0a\x09|loader|\x0a    loader := GoogleLoaderFixture new.\x0a    loader googleLoad: {'gump'} asSet.\x0a    self deny: (loader packages isNil).\x0a    self assert:(loader packages includes:'gump').",
messageSends: ["new", "googleLoad:", "asSet", "deny:", "isNil", "packages", "assert:", "includes:"],
referencedClasses: ["GoogleLoaderFixture"]
}),
smalltalk.GoogleLoaderTest);

smalltalk.addMethod(
"_testThreeBlock",
smalltalk.method({
selector: "testThreeBlock",
category: 'not yet classified',
fn: function (){
var self=this;
var loader;
var count;
loader=smalltalk.send((smalltalk.GoogleLoaderFixture || GoogleLoaderFixture),"_new",[]);
count=(0);
smalltalk.send(loader,"_requestPackages_do_",[["corechart","gauge","treemap","geochart"],(function(){
count=count;
return count;
})]);
smalltalk.send(loader,"_requestPackages_do_",[["corechart"],(function(){
count=smalltalk.send(count,"__plus",[(1)]);
return count;
})]);
smalltalk.send(loader,"_requestPackages_do_",[["gauge","corechart","treemap"],(function(){
count=smalltalk.send(count,"__plus",[(1)]);
return count;
})]);
smalltalk.send(loader,"_requestPackages_do_",[["treemap"],(function(){
count=smalltalk.send(count,"__plus",[(1)]);
return count;
})]);
smalltalk.send(loader,"_satisfy_",[["treemap"]]);
smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(loader,"_packages",[]),"_includes_",["treemap"])]);
smalltalk.send(self,"_assert_",[smalltalk.send(count,"__eq_eq",[(1)])]);
smalltalk.send(loader,"_satisfy_",[["corechart"]]);
smalltalk.send(self,"_assert_",[smalltalk.send(count,"__eq_eq",[(2)])]);
smalltalk.send(loader,"_satisfy_",[["gauge"]]);
smalltalk.send(self,"_assert_",[smalltalk.send(count,"__eq_eq",[(3)])]);
return self},
args: [],
source: "testThreeBlock\x0a\x09|loader count|\x0a    loader := GoogleLoaderFixture new.\x0a    count := 0.\x0a    loader requestPackages:{'corechart'.'gauge'.'treemap'.'geochart'} do:[count := count].\x0a    loader requestPackages:{'corechart'} do:[count  := count + 1].\x0a    loader requestPackages:{'gauge'.'corechart'.'treemap'} do:[count := count +1].\x0a    loader requestPackages: {'treemap'} do:[count := count +1].\x0a    loader satisfy:{'treemap'}.\x0a    self assert:(loader packages includes:'treemap').\x0a\x09self assert:(count == 1).\x0a    loader satisfy:{'corechart'}.\x0a    self assert:(count == 2).\x0a    loader satisfy:{'gauge'}.\x0a    self assert:(count ==3).",
messageSends: ["new", "requestPackages:do:", "+", "satisfy:", "assert:", "includes:", "packages", "=="],
referencedClasses: ["GoogleLoaderFixture"]
}),
smalltalk.GoogleLoaderTest);

smalltalk.addMethod(
"_testValidate",
smalltalk.method({
selector: "testValidate",
category: 'not yet classified',
fn: function (){
var self=this;
var $1,$2,$3,$4;
var loader;
loader=smalltalk.send((smalltalk.GoogleLoaderFixture || GoogleLoaderFixture),"_new",[]);
smalltalk.send(self,"_should_raise_",[(function(){
$1=smalltalk.send((smalltalk.LoadRequest || LoadRequest),"_new",[]);
smalltalk.send($1,"_packages_",[smalltalk.send(["bogus"],"_asSet",[])]);
smalltalk.send($1,"_block_",[(function(){
})]);
$2=smalltalk.send($1,"_yourself",[]);
return smalltalk.send(loader,"_validateRequest_",[$2]);
}),(smalltalk.UnknownRequestError || UnknownRequestError)]);
smalltalk.send(self,"_shouldnt_raise_",[(function(){
$3=smalltalk.send((smalltalk.LoadRequest || LoadRequest),"_new",[]);
smalltalk.send($3,"_packages_",[smalltalk.send(["treemap","corechart"],"_asSet",[])]);
smalltalk.send($3,"_block_",[(function(){
})]);
$4=smalltalk.send($3,"_yourself",[]);
return smalltalk.send(loader,"_validateRequest_",[$4]);
}),(smalltalk.UnknownRequestError || UnknownRequestError)]);
return self},
args: [],
source: "testValidate\x0a\x09|loader |\x0a    loader := GoogleLoaderFixture new.\x0a   \x22Test of an invalid package\x22\x0a   self should:[ loader  validateRequest:(LoadRequest new packages:{'bogus'} asSet; block:[];yourself)] raise: UnknownRequestError.\x0a   \x22Test of a valid package\x22\x0a   self shouldnt:[ loader validateRequest:(LoadRequest new packages:{'treemap'.'corechart'} asSet; block:[];yourself)] raise:UnknownRequestError .",
messageSends: ["new", "should:raise:", "validateRequest:", "packages:", "asSet", "block:", "yourself", "shouldnt:raise:"],
referencedClasses: ["GoogleLoaderFixture", "LoadRequest", "UnknownRequestError"]
}),
smalltalk.GoogleLoaderTest);



