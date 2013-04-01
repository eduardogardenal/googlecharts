Smalltalk current createPackage: 'GoogleCharts'!
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

GoogleChart subclass: #AreaChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!AreaChart commentStamp!
A GoogleChart which sets thechartType to 'AreaChart'.!

!AreaChart methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType:  'AreaChart'.
    ^self
! !

GoogleChart subclass: #BarChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!BarChart commentStamp!
A GoogleChart which sets the chartType to 'BarChart'.!

!BarChart methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType: 'BarChart'.
    ^self
! !

GoogleChart subclass: #CandlestickChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!CandlestickChart commentStamp!
I am a GoogleChart with a chartType of 'CandlestickChart'.!

!CandlestickChart methodsFor: 'initialization'!

initialize
	super initialize.
    self chartType: 'CandlestickChart'.
    ^self
! !

GoogleChart subclass: #ColumnChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!ColumnChart commentStamp!
A GoogleChart which sets the chartType to 'ColumnChart'.!

!ColumnChart methodsFor: 'initialization'!

initialize
    super initialize.
    self chartType: 'ColumnChart'.
    ^self
! !

GoogleChart subclass: #ComboChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!ComboChart commentStamp!
I am a GoogleChart that sets the chartType to 'ComboChart',!

!ComboChart methodsFor: 'initializaition'!

initialize
	super initialize.
    self chartType: 'ComboChart'.
    ^self
! !

GoogleChart subclass: #GaugeChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!GaugeChart commentStamp!
I am a GoogleChart that sets my chartType to 'Gauge'.!

!GaugeChart methodsFor: 'initialization'!

initialize
	" Create a Guage with the chartId that identifies the chart graphic placement and the chartType to be created at that id."
    super initialize.
    self chartType:'Gauge'.
	^self
! !

GoogleChart subclass: #GeoChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!GeoChart commentStamp!
I am a GoogleChart that sets my chartType to 'GeoChart'.!

!GeoChart methodsFor: 'initialization'!

initialize
	" Create a Geo Chart"
    super initialize.
    self chartType:'GeoChart'.
	^self
! !

GoogleChart subclass: #LineChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!LineChart commentStamp!
A GoogleChart which sets the chartType to 'LineChart'.!

!LineChart methodsFor: 'initialization'!

initialize
	super initialize.
    self chartType: 'ComboChart'.
    ^self
! !

GoogleChart subclass: #PieChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!PieChart commentStamp!
I am a GoogleChart that sets the chartType to 'PieChart'.!

!PieChart methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType:'PieChart'.
	^self
! !

GoogleChart subclass: #ScatterChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!ScatterChart commentStamp!
I am a GoogleChart that sets my chartType to 'ScatterChart'.!

!ScatterChart methodsFor: 'initialization'!

initialize
	super initialize.
    self chartType:'ScatterChart'.
	^self
! !

GoogleChart subclass: #TableChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!TableChart commentStamp!
I am a GoogleChart with a my chartType set to 'Table'.!

!TableChart methodsFor: 'not yet classified'!

initialize
	super initialize.
	self chartType:'Table'.
    ^self
! !

GoogleChart subclass: #TreeMapChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!TreeMapChart commentStamp!
A GoogleChart that has chartType set to 'TreeMap'.!

!TreeMapChart methodsFor: 'initialization'!

initialize
	super initialize.
	self chartType: 'TreeMap'.
    ^self
! !

