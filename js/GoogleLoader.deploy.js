smalltalk.addPackage('GoogleLoader', {});
smalltalk.addClass('GoogleLoader', smalltalk.Object, [], 'GoogleLoader');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return self}
}),
smalltalk.GoogleLoader);


smalltalk.addMethod(
"_onLoadCallback_",
smalltalk.method({
selector: "onLoadCallback:",
fn: function (aBlock){
var self=this;
$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:aBlock});;
;
return self}
}),
smalltalk.GoogleLoader.klass);


