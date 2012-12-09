Smalltalk current createPackage: 'GoogleLoader' properties: #{}!
Object subclass: #GoogleLoader
	instanceVariableNames: ''
	package: 'GoogleLoader'!
!GoogleLoader commentStamp!
I am load the Google JSAPI spec

https://developers.google.com/loader/

Usage:
	GoogleLoader onLoadCallback: aBlock!

!GoogleLoader methodsFor: 'not yet classified'!

initialize
! !

!GoogleLoader class methodsFor: 'not yet classified'!

isLoaded
	"Test that the google.load() function is defined"
	^<typeof(google) !!== 'undefined' && typeof(google.load)  == 'function'>
!

onLoadCallback: aBlock
	"Do the callback once jaspi is loaded"
    	self isLoaded 
        	ifTrue:[aBlock value]
      		ifFalse:[
		<$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:aBlock});>
]
! !

ResourceProvider subclass: #GoogleResource
	instanceVariableNames: 'name version'
	package: 'GoogleLoader'!
!GoogleResource commentStamp!
I am a ResourceProvider which can be loaded with a name and a version.!

!GoogleResource methodsFor: 'not yet classified'!

loadPackages: packages onLoadCallback: callback
	"Use GoogleLoader to load"
    |n v|
    n := self name.
    v := self version.
    GoogleLoader onLoadCallback: [
      <google.load(n,v,{"callback" : callback , "packages":packages});>]
!

name
	"get the name"
    ^name
!

name: aString
	"set the name"
    name := aString
!

version
	"get the version"
    ^version
!

version: aString
	"set the version"
    version := aString
! !

GoogleResource subclass: #GoogleVisualization
	instanceVariableNames: ''
	package: 'GoogleLoader'!
!GoogleVisualization commentStamp!
I am the GoogleVisualization I am a JS library that draws graphs on HTML pages. I can provide 'corechart'.'gauge'.'geochart'.'table'.'treemap' packages.!

!GoogleVisualization methodsFor: 'not yet classified'!

initialize
"Use visualization version 1"
	self name: 'visualization'.
    self version: '1'.
    ^self
!

nativeProvideResources: aSet callback: callback
	self loadPackages: aSet onCallback:[ callback value: (aSet reject:[:rs|(self nativeProvides contains rs) not])].
!

nativeProvides
	^{'corechart'.'gauge'.'geochart'.'table'.'treemap'} asSet
! !

