Smalltalk current createPackage: 'GoogleChartsExamples'!
GoogleChart subclass: #AreaChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!AreaChartExample methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType:  'AreaChart'.
    ^self
!

makeData
	^self arrayToDataTable: { 
          { 'Year' .  'Sales' .  'Expenses' } . 
          { '2004' .   1000 .       400 } . 
          { '2005' .   1170 .       460 } . 
          { '2006' .   660 .        1120 } . 
          { '2007' .   1030 .       540 }
         }
!

makeOptions
	^#{
		'title' -> 'Company Performance' .
		'hAxis' -> #{  'title' -> 'Year' .  'titleTextStyle' -> #{ 'color' -> 'red'}}
	}
! !

GoogleChart subclass: #BarChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!BarChartExample methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType: 'BarChart'.
    ^self
!

makeData
	^self arrayToDataTable:
    { 
          { 'Year' .  'Sales' .  'Expenses' } . 
          { '2004' .   1000 .       400 } . 
          { '2005' .   1170 .       460 } . 
          { '2006' .   660 .        1120 } . 
          { '2007' .   1030 .       540 }
         }
!

makeOptions
	^#{
    'title' -> 'Company Performance' .
    'vAxis' -> #{ 'title' -> 'Year' .  'titleTextStyle' -> #{ 'color' -> 'red'}}
    }
! !

GoogleChart subclass: #CandlestickChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!CandlestickChartExample methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType: 'CandlestickChart'.
    ^self
!

makeData
	^self arrayToDataTable:  { 
          { 'Mon' .  20 .  28 .  38 .  45 } . 
          { 'Tue' .  31 .  38 .  55 .  66 } . 
          { 'Wed' .  50 .  55 .  77 .  80 } . 
          { 'Thu' .  77 .  77 .  66 .  50 } . 
          { 'Fri' .  68 .  66 .  22 .  15 }
         }
    firstRowAsData: true
!

makeOptions
	^#{ 'legend' -> 'none' }
! !

Widget subclass: #ChartButton
	instanceVariableNames: 'element clickBlock text'
	package: 'GoogleChartsExamples'!
!ChartButton commentStamp!
A ChartButton is a Widget that renders a button with a click action. I have a text to show to the user and a clickBlock to perform for the user.!

!ChartButton methodsFor: 'accessing'!

clickBlock
	^clickBlock
!

clickBlock: aBlock
	clickBlock := aBlock
!

element
	^element
!

element: aString
	element := aString
!

text
	^text ifNil:[text := '']
!

text: aString
	text := aString
! !

!ChartButton methodsFor: 'rendering'!

renderOn: html
	"Render the button with text and click handler"
	html
    	button
        	with:self text;
            onClick:[self clickBlock value]
! !

!ChartButton methodsFor: 'startup'!

activate
	"install a click hander for the button"
	|button|
	button := ('#' , self element) asJQuery.
    button click:[self clickBlock value]
! !

!ChartButton class methodsFor: 'not yet classified'!

element: element clickBlock: clickBlock
	"Return new ChartButton with a element and clickBlock"
	^self new element: element; clickBlock: clickBlock; activate;yourself
!

popUpChart: chart atDom: element
	"Make the chart to draw on click of the ChartButton"
    ^self element: element clickBlock:[chart drawChart]
! !

GoogleChart subclass: #ColumnChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!ColumnChartExample methodsFor: 'not yet classified'!

initialize
    super initialize.
    self chartType: 'ColumnChart'.
    ^self
!

makeData
	^self arrayToDataTable: { 
          { 'Year' .  'Sales' .  'Expenses' } . 
          { '2004' .   1000 .       400 } . 
          { '2005' .   1170 .       460 } . 
          { '2006' .   660 .        1120 } . 
          { '2007' .   1030 .       540 }
         }
!

makeOptions

	^#{
		'title' -> 'Company Performance' .
		'hAxis' -> #{ 'title' -> 'Year' . 'titleTextStyle' -> #{ 'color' ->  'red'}}
	}
! !

GoogleChart subclass: #ComboChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!ComboChartExample methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType: 'ComboChart'.
    ^self
!

makeData
	^self arrayToDataTable:
	{ 
          { 'Month' .  'Bolivia' .  'Ecuador' .  'Madagascar' .  'Papua New Guinea' .  'Rwanda' .  'Average' } . 
          { '2004/05' .   165 .       938 .          522 .              998 .            450 .       614.6 } . 
          { '2005/06' .   135 .       1120 .         599 .              1268 .           288 .       682 } . 
          { '2006/07' .   157 .       1167 .         587 .              807 .            397 .       623 } . 
          { '2007/08' .   139 .       1110 .         615 .              968 .            215 .       609.4 } . 
          { '2008/09' .   136 .       691 .          629 .              1026 .           366 .       569.6 }
         }
!

makeOptions
	^ #{
          'title'->  'Monthly Coffee Production by Country'.
          'vAxis' -> #{'title' -> 'Cups' } .
          'hAxis' ->#{'title' -> 'Month' } .
          'seriesType' -> 'bars' .
          'series' -> #{ 5 -> #{ 'type' -> 'line' }}
          }
! !

GoogleChart subclass: #GaugeChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!GaugeChartExample methodsFor: 'not yet classified'!

initialize
	" Create a Guage with the chartId that identifies the chart graphic placement and the chartType to be created at that id."
    super initialize.
    self chartType:'Gauge'.
	^self
!

makeData
"Example Gauge Data"
  ^ self arrayToDataTable: { {'Label'.'Value'}.
    					{'Memory' . 80}.
                        {'CPU' . 55}.
                        {'Network' . 68}}
!

makeOptions
"Example Gauge options"
   ^#{'width' -> 400. 'heigth'->120.
   'redFrom' -> 90.'redTo' ->100.
   'yellowFrom' -> 75.'yellowTo' ->90.
   'minorTicks' ->5}
! !

GoogleChart subclass: #GeoChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!GeoChartExample methodsFor: 'not yet classified'!

initialize
	" Create a Geo Chart"
    super initialize.
    self chartType:'GeoChart'.
	^self
!

makeData
"Example Geo Data"
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
"Example Geo Options"

   ^#{
        'region' -> 'IT'.
        'displayMode' -> 'markers'.
        'colorAxis' -> #{'colors'-> {'green'.'blue'}}
      }
! !

ChartApp subclass: #IndexChartApp
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!IndexChartApp methodsFor: 'not yet classified'!

begin
	"Start the executiong of the ExampleChartApp by connecting each button/graphic pair"
     |pie id|
    self appendToJQuery:'body' asJQuery.
    (pie := PieChartExample new chartId:(id := self nextId)) appendToJQuery: 'body' asJQuery.
  	( '#' , id ) asJQuery width:800;height:500.
    pie drawChart.
    ^super begin
!

renderOn: html
	html
    	h1 with:'Google Charts'.
	self renderBrowserButtonOn: html.
    html
    	div with: [ 
        	html a
        		href: 'popcharts.html';
            	with: 'Try the Pop Charts!!'.
    html with:' example.'].
! !

!IndexChartApp class methodsFor: 'not yet classified'!

neededVisualizationPackages
"This App only needs a corechart package."
	^{'corechart'}
! !

GoogleChart subclass: #LineChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!LineChartExample methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType: 'LineChart'.
    ^self
!

makeData
	^self arrayToDataTable: { 
          { 'Year' .  'Sales' .  'Expenses' } . 
          { '2004' .   1000 .       400 } . 
          { '2005' .   1170 .       460 } . 
          { '2006' .   660 .        1120 } . 
          { '2007' .   1030 .       540 }
         }
!

makeOptions
	^#{  'title' -> 'Company Performance' }
! !

GoogleChart subclass: #PieChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!PieChartExample methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType:'PieChart'.
	^self
!

makeData
	"return a DataTable of example Pie Chart data"

  ^ self arrayToDataTable: { {'Task'.'Hours per Day'}.
    					{'Work' . 11}.
                        {'Eat'.2}.
                        {'Commute'.2}.
                        {'Watch TV'.2}.
                        {'Snooze'.7}}
!

makeOptions
	"Return a Dictionary of the options in this case only a title"
	^#{'title' -> 'My Daily Activities'}
! !

ChartApp subclass: #PopupChartApp
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!PopupChartApp methodsFor: 'not yet classified'!

addButton: text  forChart: chartClass
	"Add a popup button and chart."
    |id chart|
    id := self nextId.
    ( ChartButton popUpChart:(chart := chartClass chartId:id) atDom:id) text:text;appendToJQuery: 'body' asJQuery.
    chart appendToJQuery: 'body' asJQuery
!

begin
	self appendToJQuery: 'body' asJQuery.
    self addButton:'Pop PieChart' forChart:PieChartExample.
    self addButton:'Pop ScatterChart' forChart:ScatterChartExample.
	self addButton:'Pop GaugeChart' forChart:GaugeChartExample.
	self addButton:'Pop GeoChart' forChart:GeoChartExample.
    self addButton:'Pop TableChart' forChart:TableChartExample.
	self addButton:'Pop TreeMapChart' forChart:TreeMapChartExample.
	self addButton:'Pop ComboChart' forChart:ComboChartExample.
	self addButton:'Pop LineChart' forChart:LineChartExample.
	self addButton:'Pop BarChart' forChart:BarChartExample.
	self addButton:'Pop ColumnChart' forChart:ColumnChartExample.
	self addButton:'Pop AreaChart' forChart:AreaChartExample.
	self addButton:'Pop CandlestickChart' forChart:CandlestickChartExample.
    ^super begin
!

renderOn: html
	html
    	h1 with:'Press a Button to Popup a Chart!!'.
	self renderBrowserButtonOn: html
! !

!PopupChartApp class methodsFor: 'not yet classified'!

neededVisualizationPackages
"This is a hook for subclasses to define which visualization packages to load."
	^{'corechart'.'gauge'.'geochart'.'table'.'treemap'}
! !

GoogleChart subclass: #ScatterChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!ScatterChartExample methodsFor: 'not yet classified'!

initialize
	super initialize.
    self chartType:'ScatterChart'.
	^self
!

makeData
  "Return the example dataset"
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
"options for example dataset"
   ^#{
          'title' ->'Age vs. Weight comparison'.
          'hAxis' -> #{'title' -> 'Age'. 'minValue'-> 0. 'maxValue'-> 15}.
          'vAxis'-> #{'title' ->'Weight'. 'minValue'-> 0. 'maxValue'-> 15}.
          'legend' ->'none'
        }
! !

GoogleChart subclass: #TableChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!TableChartExample methodsFor: 'not yet classified'!

initialize
	super initialize.
	self chartType:'Table'.
    ^self
!

makeData
	|data|
    data := DataTable new.
    data addColumnType: 'string' name: 'Name' .
    data addColumnType: 'number' name: 'Salary'  .
    data addColumnType: 'boolean' name: 'Full Time Employee'  .
    data addRows: {
          { 'Mike' .  #{ 'v' -> 10000 .  'f' -> '$10,000' } . true } .
          { 'Jim' .   #{ 'v' -> 8000 .   'f' -> '$8,000'} .  false } .
          { 'Alice' . #{ 'v' -> 12500 . 'f' -> '$12,500'} . true } .
          {'Bob' .   #{ 'v' -> 7000 .  'f' -> '$7,000'} .  true }
        }.
        ^data data
!

makeOptions
	^ #{'showRowNumber' -> true}
! !

GoogleChart subclass: #TreeMapChartExample
	instanceVariableNames: ''
	package: 'GoogleChartsExamples'!

!TreeMapChartExample methodsFor: 'not yet classified'!

initialize
	super initialize.
	self chartType: 'TreeMap'.
    ^self
!

makeData
	^self arrayToDataTable: {
    
     {'Location' .  'Parent' . 'Market trade volume (size)' . 'Market increase/decrease (color)'} .
          { 'Global' .     null .                  0 .                                0} .
          { 'America' .    'Global' .              0 .                                0 } . 
          { 'Europe' .     'Global' .              0 .                                0 } . 
          { 'Asia' .       'Global' .              0 .                                0 } . 
          { 'Australia' .  'Global' .              0 .                                0 } . 
          { 'Africa' .     'Global' .              0 .                                0 } . 
          { 'Brazil' .     'America' .             11 .                               10 } . 
          { 'USA' .        'America' .             52 .                               31 } . 
          { 'Mexico' .     'America' .             24 .                               12 } . 
          { 'Canada' .     'America' .             16 .                               -23 } . 
          { 'France' .     'Europe' .              42 .                               -11 } . 
          { 'Germany' .    'Europe' .              31 .                               -2 } . 
          { 'Sweden' .     'Europe' .              22 .                               -13 } . 
          { 'Italy' .      'Europe' .              17 .                               4 } . 
          { 'UK' .         'Europe' .              21 .                               -5 } . 
          { 'China' .      'Asia' .                36 .                               4 } . 
          { 'Japan' .      'Asia' .                20 .                               -12 } . 
          { 'India' .      'Asia' .                40 .                               63 } . 
          { 'Laos' .       'Asia' .                4 .                                34 } . 
          { 'Mongolia' .   'Asia' .                1 .                                -5 } . 
          { 'Israel' .     'Asia' .                12 .                               24 } . 
          { 'Iran' .       'Asia' .                18 .                               13 } . 
          { 'Pakistan' .   'Asia' .                11 .                               -52 } . 
          { 'Egypt' .      'Africa' .              21 .                               0 } . 
          { 'S. Africa' .  'Africa' .              30 .                               43 } . 
          { 'Sudan' .      'Africa' .              12 .                               2 } . 
          { 'Congo' .      'Africa' .              10 .                               12 } . 
          { 'Zair' .       'Africa' .              8 .                                10 }
    }
!

makeOptions
	^#{  'minColor' -> '#f00' .
          'midColor' -> '#ddd' .
          'maxColor' -> '#0d0' .
          'headerHeight' -> 15 .
          'fontColor' -> 'black' .
          'showScale' ->  true}
! !

