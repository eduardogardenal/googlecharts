smalltalk.addPackage('GoogleChartsTests', {});
smalltalk.addClass('GoogleLoaderFixture', smalltalk.GoogleLoader, ['packages'], 'GoogleChartsTests');
smalltalk.addMethod(
"_googleLoad_",
smalltalk.method({
selector: "googleLoad:",
fn: function (p){
var self=this;
self["@packages"]=p;
return self}
}),
smalltalk.GoogleLoaderFixture);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return self["@packages"];
}
}),
smalltalk.GoogleLoaderFixture);



smalltalk.addClass('GoogleLoaderTest', smalltalk.TestCase, [], 'GoogleChartsTests');
smalltalk.addMethod(
"_testFixturePackageTracking",
smalltalk.method({
selector: "testFixturePackageTracking",
fn: function (){
var self=this;
var loader;
loader=smalltalk.send((smalltalk.GoogleLoaderFixture || GoogleLoaderFixture),"_new",[]);
smalltalk.send(loader,"_googleLoad_",[smalltalk.send(["gump"],"_asSet",[])]);
smalltalk.send(self,"_deny_",[smalltalk.send(smalltalk.send(loader,"_packages",[]),"_isNil",[])]);
smalltalk.send(self,"_assert_",[smalltalk.send(smalltalk.send(loader,"_packages",[]),"_includes_",["gump"])]);
return self}
}),
smalltalk.GoogleLoaderTest);

smalltalk.addMethod(
"_testThreeBlock",
smalltalk.method({
selector: "testThreeBlock",
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
return self}
}),
smalltalk.GoogleLoaderTest);

smalltalk.addMethod(
"_testValidate",
smalltalk.method({
selector: "testValidate",
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
return self}
}),
smalltalk.GoogleLoaderTest);



