Smalltalk current createPackage: 'GoogleCharts' properties: #{}!
Object subclass: #ChartApp
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!ChartApp commentStamp!
A chart app is an example App which loads the google JSAPI and visualization API.!

!ChartApp methodsFor: 'init'!

begin
	"Start the executiong of the ChartApp"
	^self
!

buildPieChartAt: domID data: data options: options
	""
	|chart|
    chart := GoogleChart domId: domID type: 'PieChart' data: data options: options.
    self register: chart require: {'corechart'}.
    ^chart
!

initialize
	"Load my external JS"
    self class loadGoogleLoader:[self class loadVisualization:[self begin]]
!

register: aChartGadget

	^aChartGadget
!

register: aChartGadget requires: anArray onLoaded: aBlock
	"Register aGadget with a callback when loading is complete."
	self loader requires:anArray onLoaded: aBlock
! !

!ChartApp class methodsFor: 'not yet classified'!

loadGoogleLoader: callback
	"Load the Google JSAPI - Use JQuery.ajax() since that is available"
	<$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});>
!

loadVisualization: callback
	"Use google.load() to load visualization and load the needed packages"
    |packages|
    packages := self neededVisualizationPackages.
    <google.load("visualization","1",{"callback" : callback , "packages":packages});>
!

neededVisualizationPackages
"This is a hook for subclasses to define which visualization packages to load."
	^{}
! !

Object subclass: #ChartButton
	instanceVariableNames: 'element clickBlock'
	package: 'GoogleCharts'!

!ChartButton methodsFor: 'not yet classified'!

activate
	|button|
	button := self element asJQuery.
    button click:[self clickBlock value]
!

clickBlock
	^clickBlock
!

clickBlock: aBlock
	clickBlock := aBlock
!

element
	^element
!

element: aSymbol
	element := aSymbol
! !

!ChartButton class methodsFor: 'not yet classified'!

element: elementSymbol clickBlock: clickBlock
	^self new element: elementSymbol; clickBlock: clickBlock; activate;yourself
!

popUpChart: chart atDom: element
	"Make the chart popup on click of an element"
    ^self element: element clickBlock:[chart drawChart]
! !

Object subclass: #GoogleChart
	instanceVariableNames: 'chartId chartType dataBlock optionsBlock app'
	package: 'GoogleCharts'!

!GoogleChart methodsFor: 'DOM'!

getElementById: id
	"Find element by the id in the DOM"
	^ <document.getElementById(id)>
! !

!GoogleChart methodsFor: 'abstraction'!

makeData
	"abstraction - return the data for a google chart"
  	 ^self subclassresponsibility
!

makeOptions
	"Abstract method - return options for a Google Chart"
   ^	 self subclassresponsibility
! !

!GoogleChart methodsFor: 'accessor'!

app
	"Return the app"
    ^app
!

app: anApp
	"Set the app"
    app := anApp.
!

chartId
	^chartId
!

chartId: aString
	chartId := aString
!

chartType
	^ chartType
!

chartType: aString
	chartType := aString
!

dataBlock
	"Return the dataBlock"
    ^dataBlock ifNil:[dataBlock := [self makeData]]
!

dataBlock: aBlock
	"Set the dataBlock"
    dataBlock := aBlock
!

optionsBlock
	"Return the optionsBlock"
    ^optionsBlock ifNil:[optionsBlock := [self makeOptions]]
!

optionsBlock: aBlock
	"Set the optionsBlock"
    optionsBlock := aBlock
! !

!GoogleChart methodsFor: 'chart'!

drawChart
    |  chart data options|
     data := self dataBlock value.
     chart :=self makeChart:self chartId.
     options :=self optionsBlock value.
     <chart.draw(data,options)>
!

makeChart: id
"build a chart at specific element id in the DOM and return"
	|e t|
    e := self getElementById:id.
    t := self chartType.
    ^ <new google.visualization[t](e)>
! !

!GoogleChart methodsFor: 'data table'!

arrayToDataTable: array

	^ <google.visualization.arrayToDataTable(array)>
! !

!GoogleChart methodsFor: 'init'!

initialize
	^self
! !

!GoogleChart class methodsFor: 'not yet classified'!

chartId: aString
	^self new chartId:aString;yourself
!

domId: aString type: typeString data: data options: options
	^self new chartId:aString;
       chartType:typeString;
       dataBlock:(data isKindOf:#BlockContext ifTrue:[data] ifFalse:[[data]]);
       optionsBlock:(options isKindOf:#BlockContext ifTrue:[options] ifFalse:[options]);
       yourself
! !

GoogleChart subclass: #GaugeChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!GaugeChart methodsFor: 'not yet classified'!

initialize
	" Create a Guage with the chartId that identifies the chart graphic placement and the chartType to be created at that id."
    super initialize.
    self chartType:'Gauge'.
	^self
! !

GoogleChart subclass: #GeoChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!GeoChart methodsFor: 'not yet classified'!

initialize
	" Create a Geo Chart"
    super initialize.
    self chartType:'GeoChart'.
	^self
! !

GoogleChart subclass: #PieChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!PieChart methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType:'PieChart'.
	^self
! !

GoogleChart subclass: #ScatterChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!ScatterChart methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType:'ScatterChart'.
	^self
! !

Object subclass: #GoogleLoader
	instanceVariableNames: 'requests loaded'
	package: 'GoogleCharts'!

!GoogleLoader methodsFor: 'not yet classified'!

filterRequests: rejectBlock
	"Filter all requests rejects those that rejectBlock returns true"
    self requests:(self requests reject:rejectBlock)
!

initialize
	loaded := Set new.
    requests := Array new.
!

packageNeeded
	"return all the packages that are need to be loaded"
	|rv|
    rv := Set new.
	requests do:[:request| rv := rv,request packages].
    ^rv
!

requestPackages: aCollection do: aBlock
    |newRequest|
    newRequest :=  LoadRequest new packages:aCollection; block: aBlock;yourself.
    self validateRequest: newRequest.
    (newRequest isSatisfied) 
    	ifTrue:[aBlock value] 
    	ifFalse:[self requests:(self requests,{newRequest})]
!

requests
	^requests ifNil:[requests := Array new]
!

requests: aCollection
	requests:= aCollection
!

satisfy: packages
	self googleLoad: packages.
    self filterRequests:[:request|
    	(request removeLoaded:packages;isSatisfied)
        	ifTrue:[request block value.true] 
            ifFalse:[false]]
!

validateRequest: aRequest
	|base|
    base := self class knownResources.
    aRequest packages do:[:item|
		(base includes:item) ifFalse:[UnknownRequestError new signal:('Unknown Request ',item asString).false]].
    aRequest removeLoaded: loaded.
	^true
! !

!GoogleLoader class methodsFor: 'not yet classified'!

knownResources
	"known resource for this loader"
	^{ 'corechart' .
    	'gauge' .
        'geochart'.
        'table'.
        'treemap'} asSet.
! !

Object subclass: #LoadRequest
	instanceVariableNames: 'packages block'
	package: 'GoogleCharts'!

!LoadRequest methodsFor: 'accessor'!

block
	"Return the block"
    ^block
!

block: aBlock
	"Set the block"
    block := aBlock
!

isSatisfied
	^self packages isEmpty
!

packages
   "return the packages"
    ^packages ifNil:[packages := Set new]
!

packages: aCollection
   "Set the packages"
    packages := aCollection asSet
!

removeLoaded: aSet
	self packages:(self packages reject:[:item|aSet includes:item])
! !

Error subclass: #UnknownRequestError
	instanceVariableNames: ''
	package: 'GoogleCharts'!

