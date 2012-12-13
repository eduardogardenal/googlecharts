Smalltalk current createPackage: 'GoogleCharts' properties: #{}!
Object subclass: #ChartApp
	instanceVariableNames: 'visualLoader'
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
    GoogleLoader onLoadCallback:[self visualLoader loadPackages:(self class neededVisualizationPackages ) onLoadCallback:[self begin]]
!

register: aChartGadget

	^aChartGadget
!

register: aChartGadget requires: anArray onLoaded: aBlock
	"Register aGadget with a callback when loading is complete."
	self loader requires:anArray onLoaded: aBlock
!

visualLoader
	"Return the loader"
    ^visualLoader ifNil:[visualLoader := GoogleVisualization new]
! !

!ChartApp class methodsFor: 'not yet classified'!

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
    ^self element: element clickBlock:[chart drawChartData: chart makeData options: chart makeOptions]
! !

Object subclass: #GoogleChart
	instanceVariableNames: 'chart chartId chartType dataBlock optionsBlock'
	package: 'GoogleCharts'!

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

chart
	^chart ifNil:[chart := self makeChart:self chartId]
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
	"Draw the chart"
     self drawChartData:(self dataBlock value) options: (self optionsBlock value)
!

drawChartData: data options: options
	self class drawChart:self chart data: data options:options
!

makeChart: id
"build a chart at specific element id in the DOM and return"

    ^self class makeChartType:(self chartType) on: id
! !

!GoogleChart methodsFor: 'init'!

initialize
	^self
! !

!GoogleChart class methodsFor: 'not yet classified'!

arrayToDataTable: array

	^ <google.visualization.arrayToDataTable(array)>
!

chartId: aString
	^self new chartId:aString;yourself
!

domId: aString type: typeString data: data options: options
	^self new chartId:aString;
       chartType:typeString;
       dataBlock:(data isKindOf:#BlockContext ifTrue:[data] ifFalse:[[data]]);
       optionsBlock:(options isKindOf:#BlockContext ifTrue:[options] ifFalse:[options]);
       yourself
!

drawChart: chart data: data options: options

     <chart.draw(data,options)>
!

getElementById: id
	"Find element by the id in the DOM"
	^ <document.getElementById(id)>
!

makeChartType: type on: id
"build a chart at specific element id in the DOM and return"
	|e|
    e := self  getElementById:id.
    ^ <new google.visualization[type](e)>
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

