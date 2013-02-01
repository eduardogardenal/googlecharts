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

load: aBlock
	"Do the callback once jaspi is loaded"
    	self isLoaded 
        	ifTrue:[aBlock value]
      		ifFalse: [<$.getScript("https://www.google.com/jsapi",aBlock);>]
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
A absract ResourceProvider which represent a module that GoogleLoader can load that is defined by a name and a version.

Subclasses  call loadPackages: aSet callback: aBlock   to load various packages!

!GoogleResource methodsFor: 'not yet classified'!

loadPackages: packages onLoadCallback: callback
	"Use GoogleLoader to load"
    |n v|
    n := self name.
    v := self version.
    GoogleLoader load: [
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
A GoogleResource for the Visualization API. 

I  provide 'corechart'.'gauge'.'geochart'.'table'.'treemap' packages.!

!GoogleVisualization methodsFor: 'not yet classified'!

initialize
"Use visualization version 1"
	self name: 'visualization'.
    self version: '1'.
    ^self
!

isProvidingDataTable
	"Check if any of the API have been loaded"
	^self satisfied isEmpty not
!

nativeProvideResources: aSet callback: callback
	self loadPackages: aSet onCallback:[ callback value: (aSet reject:[:rs|(self nativeProvides contains rs) not])].
!

nativeProvides
	^{'corechart'.'gauge'.'geochart'.'table'.'treemap'} asSet
! !

