Smalltalk current createPackage: 'GoogleCharts' properties: #{}!
Object subclass: #ChartApp
	instanceVariableNames: ''
	package: 'GoogleCharts'!
!ChartApp commentStamp!
A chart app is an example App which loads the google JSAPI and visualization API.!

!ChartApp methodsFor: 'not yet classified'!

begin
	"Start the executiong of the ChartApp"
	^self
!

initialize
	"Load my external JS"
    self class loadGoogleLoader:[self class loadVisualization:[self begin]]
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

ChartApp subclass: #ExampleChartApp
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!ExampleChartApp methodsFor: 'not yet classified'!

begin
	"Start the executiong of the ExampleChartApp by connecting each button/graphic pair"
    PieChart new begin.
    ScatterChart new begin.
    GaugeChart new begin.
    GeoChart new begin.
    ^super begin
! !

!ExampleChartApp class methodsFor: 'not yet classified'!

neededVisualizationPackages
"This is a hook for subclasses to define which visualization packages to load."
	^{'corechart'.'gauge'.'geochart'}
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
	^self new element: elementSymbol; clickBlock: clickBlock;yourself
! !

Object subclass: #GoogleChart
	instanceVariableNames: 'chartId chartType'
	package: 'GoogleCharts'!

!GoogleChart methodsFor: 'not yet classified'!

arrayToDataTable: array

	^ <google.visualization.arrayToDataTable(array)>
!

begin
    | button|
    self connectToButton:  '#popPieChart'.
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

connectToButton: aSym
    | button|
    button := ChartButton element: aSym clickBlock:[self drawChart].
    button activate
!

drawChart
    |  chart data options|
     data := self makeData.
     chart :=self makeChart:self chartId.
     options :=self makeOptions.
     self drawChart: chart data: data options: options
!

drawChart: chart data: data options: options
 	<chart.draw(data,options)>
!

getElementById: id

	^ <document.getElementById(id)>
!

initialize

	^self
!

makeChart: id
	|e t|
    e := self getElementById:id.
    t := self chartType.
	^ self makeGoogle:t id:id
!

makeData

  	 ^self subclassresponsibility
!

makeGoogle: type id: id
	|e|
    e := self getElementById:id.
	^ <new google.visualization[type](e)>
!

makeOptions
   ^	 self subclassresponsibility
! !

GoogleChart subclass: #GaugeChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!GaugeChart methodsFor: 'not yet classified'!

begin
   "Connect this object to handle a button with the given id"
    | button|
    self connectToButton:  '#popGaugeChart'.
!

initialize
	" Create a Guage with the chartId that identifies the chart graphic placement and the chartType to be created at that id."
	self chartId:'gauge_chart_div'.
    self chartType:'Gauge'.
	^self
!

makeData

  ^ self arrayToDataTable: { {'Label'.'Value'}.
    					{'Memory' . 80}.
                        {'CPU' . 55}.
                        {'Network' . 68}}
!

makeOptions
   ^<{width:400, heigth:120,
   redFrom:90,redTo:100,
   yellowFrom:75,yellowTo:90,
   minorTicks:5}>
! !

GoogleChart subclass: #GeoChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!GeoChart methodsFor: 'not yet classified'!

begin
    | button|
    self connectToButton:  '#popGeoMarkersChart'.
!

initialize
	" Create a Geo Chart"
	self chartId:'geo_markers_chart_div'.
    self chartType:'GeoChart'.
	^self
!

makeData

  ^ self arrayToDataTable: {
{'City'.   'Population' . 'Area'}.
        {'Rome'.      2761477 .    1285.31}.
        {'Milan'.     1324110 .    181.76}.
        {'Naples'.    959574 .    117.27}.
        {'Turin'.     907563 .     130.17}.
        {'Palermo'.   655875 .     158.9}.
        {'Genoa'.     607906 .   243.60}.
        {'Bologna'.   380181 .     140.7}.
        {'Florence'.  371282 .    102.41}.
        {'Fiumicino'. 67370 .      213.44}.
        {'Anzio'.     52192 .      43.43}.
        {'Ciampino'.  38262 .      11} 
        }
!

makeOptions


   ^<{
        region: 'IT',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']}
      }>
! !

GoogleChart subclass: #PieChart
	instanceVariableNames: 'chartId'
	package: 'GoogleCharts'!

!PieChart methodsFor: 'not yet classified'!

begin
    | button|
    self connectToButton:  '#popPieChart'.
!

initialize
	self chartId:'pie_chart_div'.
    self chartType:'PieChart'.
	^self
!

makeData

  ^ self arrayToDataTable: { {'Task'.'Hours per Day'}.
    					{'Work' . 11}.
                        {'Eat'.2}.
                        {'Commute'.2}.
                        {'Watch TV'.2}.
                        {'Snooze'.7}}
!

makeOptions
   ^<{title: 'My Daily Activities'}>
! !

GoogleChart subclass: #ScatterChart
	instanceVariableNames: ''
	package: 'GoogleCharts'!

!ScatterChart methodsFor: 'not yet classified'!

begin
    | button|
    self connectToButton:  '#popScatterChart'.
!

initialize
	self chartId:'scatter_chart_div'.
    self chartType:'ScatterChart'.
	^self
!

makeData
  
  ^ self arrayToDataTable: { 
  							{'Age'.'Weight'}.
                            {8 . 11} . 
                            { 4 . 5.5} . 
                            { 11 . 14 } . 
                            { 4 . 5}. 
                            {3 . 3} . 
                            {6.5 . 7}}
!

makeOptions
   ^<{
          title: 'Age vs. Weight comparison',
          hAxis: {title: 'Age', minValue: 0, maxValue: 15},
          vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
          legend: 'none'
        }>
! !

