# Scatter plot graph component

Here’s a simple React.js component that serves as a scatter plot and takes a JSON object as input.

### var dataInput =  {
    dataPoints : [ 
      {
          xAxis : 3,
          yAxis : 1083.6,
          color : "brown",
          image : "https://imageurl/testData1.jpg",
          desc : "test Data 1"
      },
      {
          xAxis : 50,
          yAxis : 150,
          color : "red",
          image : "https://imageurl/testData2.jpg",
          desc : "test Data 2"
      }
    ]
}


Inorder to use the component just clone this repo and copy the "graph-components" folder to your react project.

Later import and use the "ScatterPlot" component within your desired component present in your react project, like shown below :
 
### 
    <ScatterPlot inputs={dataInput}/>

### ScatterPlot Component Features:

* Scales to 90% in height and 80% in width to your viewport.
* Takes in description(desc) and image as input for each data points , and the same is displayed in modal dailog
   when hovered over the point.
* Takes in color to encode the dataPoint.


Demo for ScatterPlot component can be seen here ---> [DemoLink](https://demograph-e3azduajbzc5dfhr.southindia-01.azurewebsites.net/).

