Smalltalk createPackage: 'GoogleCharts'!
Widget subclass: #ChartApp
	instanceVariableNames: 'nextId'
	package: 'GoogleCharts'!
!ChartApp commentStamp!
A ChartApp is a Widget which loads the google JSAPI and visualization API. 
	I coordinate all loading of Visualizaton packages. 
	My default renderOn: method is empty.
	I can produce a series of unique string for the use as HTML element id.!

!ChartApp methodsFor: 'accessing'!

nextId
	"Return the next unique id in the sequence."
	|rv|
    rv := 'id' , (nextId printString).
    nextId := nextId + 1.
    ^rv
! !

!ChartApp methodsFor: 'initialization'!

initialize
	"Load my external JS, start id sequence at 1."
    super initialize.
    nextId := 1.
    self class loadGoogleLoader:[ self class loadVisualization:[ self begin ]]
! !

!ChartApp methodsFor: 'rendering'!

renderBrowserButtonOn: html
    html
    	div
    		with:[ 
            	html button 
        			with:'Open IDE';
            		onClick:[Browser open]].
!

renderIDEButtonOn: html
    html
    	div
    		with:[ 
            	html button 
        			with:'Open IDE';
            		onClick:[self  class startIDE]].
!

renderLink: href content:content on: html

	html a
        href: href;
        with: content
! !

!ChartApp methodsFor: 'startup'!

begin
	"Start the executiong of the ChartApp."
	^self
! !

!ChartApp class methodsFor: 'loading'!

loadGoogleLoader: callback
	"Load the Google JSAPI,"
	<$.ajax({url:"https://www.google.com/jsapi",dataType:"script",success:callback});>
!

loadVisualization: callback
	"Load the needed Visualization packages."
    self loadVisualization: callback packages: self neededVisualizationPackages
!

loadVisualization: callback packages: packages
	"JS method to load Visualization packages."
	<google.load("visualization","1",{"callback" : callback , "packages":packages});>
!

startIDE
	<require(["amber-ide-starter-dialog"], function (dlg) { dlg.start(); });>
! !

!ChartApp class methodsFor: 'startup'!

neededVisualizationPackages
"This is a hook for subclasses to define which visualization packages to load.
Subclasses should:
		^super  neededVisualizationPackages addAll: addToSet
"
        ^{}
! !

Object subclass: #DataTable
	instanceVariableNames: 'data'
	package: 'GoogleCharts'!
!DataTable commentStamp!
DataTable is a proxy object for Google Visualization DataTable objects. It's main purpuse is to create an amber API over those objects.!

!DataTable methodsFor: 'accessing'!

data
	^data ifNil:[ data:= google visualization DataTable new]
!

data: obj
	data := obj
! !

!DataTable methodsFor: 'manipulation'!

addColumnType: aString name: name
	"Add a column to the DataTable."
	self data perform: #addColumn:  withArguments: (Array with: aString with: name)
!

addRows: array
	"Add rows to the DataTable."
   self data  perform: #addRows: withArguments: (Array with: array)
! !

!DataTable class methodsFor: 'not yet classified'!

jsDataTable: data
	"Build a DataTable proxy from an actual js DataTable object,"
    ^self new data:data;yourself
! !

Widget subclass: #GoogleChart
	instanceVariableNames: 'gChart chartId chartType'
	package: 'GoogleCharts'!
!GoogleChart commentStamp!
A GoogleChart is an abstract Widget which encapsulates the creation and drawing a Google Visualizations. I render a div with the chartId for myself.

    

Instance Vars:
	gChart which is the created visualization object.
	chartType (PieChart, LineChart etc) which is the type of the Visualization that is created.
	chartId which is the DOM id where the chart is placed.!

!GoogleChart methodsFor: 'abstraction'!

makeData
	"abstraction - return the data, as a DataTable, for a google chart."
  	 ^self subclassresponsibility
!

makeOptions
	"Abstract method - return option, a Dictionary object, for a Google Chart."
   ^	 self subclassresponsibility
! !

!GoogleChart methodsFor: 'accessing'!

chart
	"Return the gChart."
     ^gChart ifNil:[ gChart :=self makeGChart:self chartId]
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
! !

!GoogleChart methodsFor: 'data table'!

arrayToDataTable: array
	"Convert an array into a DataTable."
	^google visualization arrayToDataTable: array
!

arrayToDataTable: array firstRowAsData: aBool
	"Convert an array into a DataTable while setting the firstRowAsData flag."
	^google visualization perform: #arrayToDataTable:  withArguments:(Array with:array with:aBool)
! !

!GoogleChart methodsFor: 'drawing'!

drawChart
	"Draw the chart."
    self drawData: self makeData options: self makeOptions
!

drawData: data options: options
	"Draw the chart with data and options."
      self chart perform: #draw withArguments: (Array with:data with:options)
! !

!GoogleChart methodsFor: 'initialization'!

initialize
	^super initialize
! !

!GoogleChart methodsFor: 'rendering'!

getElementById: id
	"Find element by the id in the DOM."
    ^document getElementById: id
	"return document.getElementById(id)>"
!

makeGChart: id
	"Build a chart of a given type at a specific dom id."
    ^self makeVisualizationType: self chartType at: (self getElementById:id)
!

makeVisualizationType:type at: element
	"build the visualization of the type at an element."
	^(google visualization at:type) newValue:element
!

renderOn: html
	"Render the placeholder div for the chart."
	html 
    	div id:self chartId;
        	with:['Waiting to load']
! !

!GoogleChart class methodsFor: 'not yet classified'!

chartId: id
	"Create a GoogleChart at id"
	^self new chartId:id;yourself
! !

