Smalltalk current createPackage: 'GoogleLoader' properties: #{}!
Object subclass: #GoogleLoader
	instanceVariableNames: ''
	package: 'GoogleLoader'!

!GoogleLoader methodsFor: 'not yet classified'!

initialize
! !

!GoogleLoader class methodsFor: 'not yet classified'!

onLoadCallback: aBlock
		<$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:aBlock});>
! !

ResourceProvider subclass: #GoogleResource
	instanceVariableNames: 'name version'
	package: 'GoogleLoader'!

!GoogleResource methodsFor: 'not yet classified'!

loadPackages: packages onLoadCallback: callback
	"Use GoogleLoader to load"
    |n v|
    n := self name.
    v := self version.
    
    <google.load(n,v,{"callback" : callback , "packages":packages});>
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

