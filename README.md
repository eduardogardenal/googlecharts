#googlecharts

Google Charts API for Amber

##Author
Thomas W Rake

##Availability
Fork it at https://github.com/tomrake/googlecharts

This project is a subproject of https://github.com/NicolasPetton/amber
If you clone that project you should have this project as a subproject.

##Cloning
**You must** update sources if you obtain GoogleCharts as a submodules. If you clone the main [Amber sources](https://github.com/NicolasPetton/amber) or [GoogleCharts amber clone](https://github.com/tomrake/amber/) your must update the submodules to get the the source code. The following code should do that:

        git submodule init
        git submodule update



## What you need to know 

1. [Amber Getting Started](https://github.com/NicolasPetton/amber/wiki/Getting-started)
2. [Google Charts API](https://developers.google.com/chart/)

##Version 0.3
This API is likely to change in future versions.

## Recipe for creating your ChartApp

1) Base HTML document:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <html>
      <head>
        <title>Google Charts</title>
        <script src="../../js/amber.js" type="text/javascript"></script>
        <script type="text/javascript">
    		 loadAmber({
    			files: ['GoogleLoader.js','GoogleCharts.js','YourChart.js'],
    			prefix: 'examples/googlecharts/js', // path for js files i think
    			ready: function() {
    			  $(function() {
    				smalltalk.YourChartApp._new(); // Start the smalltalk App
    			  });
    		}}); 
    	</script>
      </head>
    
      <body>
      </body>
    </html>

2) Now Create YourChartApp and a Subclass of ChartApp in package YourChart

    YourChartApp subclass: #IndexChartApp
    instanceVariableNames: ''
    package: 'YourChart'

3) Add the following methods to YourChartApp

    begin
    	"Start the executiong of the YourChartApp."
        |yr id|
        "Add the YourChartApp to the HTML Page."
        self appendToJQuery:'body' asJQuery.
        "Create YourChart at a new id within the page and add that chart to the page."
        (yr := YourChart new chartId:(id := self nextId)) appendToJQuery: 'body' asJQuery.
        "Fix the width and height of the chart placement div."
        ( '#' , id ) asJQuery width:800;height:500.
        "Draw YourChart."
        yr drawChart.
        ^super begin


    renderOn: html
        "Other content on the page."
        html
             h1 with:'See YourChart'.
        html
            div
                with:[ 
                    html button 
            	         with:'class browser';
               	         onClick:[Browser open]].        

3) Create the following YourChartApp class method:

    neededVisualizationPackages
        "This App only needs a corechart package."
         ^{'corechart'}

4) Create a class YourChart, also in package YourChart as a subclass of PieChart, or see the ChartExample code for other options:

    PieChart subclass: #YourChart
        instanceVariableNames: ''
        package: 'YourChart'

5) Create a method in YourChart to supply the datafor the chart. See ChartExamples for other ways to create data.

    makeData
        "return a DataTable of example Pie Chart data"
         ^ self arrayToDataTable: { {'Task'.'Hours per Day'}.
                {'Work' . 11}.
                {'Eat'.2}.
                {'Commute'.2}.
                {'Watch TV'.2}.
                {'Snooze'.7}}

6) Create a method in YourChart to supply the options for the chart.

    makeOptions
        "Return a Dictionary of the options in this case only a title"
        ^#{'title' -> 'My Daily Activities'}

## Trips and traps

Be sure to include all of the packages needed by YourApp in your class method #neededVisualizationPackages, see how this is done in the PopupExampleApp.  Those packages are loaded before YourApp begin method is sent.

## Possible future changes

1. Extension of DataTable should allow dynamically draw charts. This  should allow better usability of Google Chart from amber. This enhancement is the first acheivable goal for the next release.
2. PieChart and all current subclasses of GoogleChart are likely to be removed and replace by a ChartApp factory method #buildChartType:id which will return a ChartApp. This is a geek level goal to eliminate subclasses.
3. The ChartApp method #drawChart is likely to be removed and can already be replaced by #drawData:options: .
3. **Automagic** loading, if implemented, could remove the need for specifically declare packages to load by #neededVisualizationPackages.



## On Meeting my design goals

1. Release often. 
2. Favor usability over geek factors; the #needVisualizationPackages method gives the user control over details; the **Automagic** package loading is deferred to the future release. The creation of numerous subclass of GoogleChart for each type of Chart is favored over the geek refactoring and subsequent design issues as a result of such refactoring.
3. DataTable manipulation should add to interactive usability but this has been deferred to a future version.


