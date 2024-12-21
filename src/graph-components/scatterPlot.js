import React from "react";
import { dataPointsPreprocessor, graphCategorizer, prepareDatapointMatrix } from "./utility";
import ScatterPlotFrame from "./graph-micro-components/scatterPlotFrame.js";

const ScatterPlot = (props)=>{

    const baseGraphStyle = {
        height : "90vh",
        width : "90vw",
        // backgroundColor : "Red",
        color : "black"
    }

    //props receives : x axis, y axis, color, image
    const { dataPoints = [] } = props.inputs;
    
    const {maxXValue, maxYValue} = dataPointsPreprocessor(dataPoints);

    //points, ceilinged
    //points build 2d array
    //points manages precision within the 1d array
 

    const xFrame = graphCategorizer(maxXValue);
    const yFrame = graphCategorizer(maxYValue);
    const xFrameMaxSize = xFrame.numberOfFrames;
    const yFrameMaxSize = yFrame.numberOfFrames;
    const xScale = xFrame.scale;
    const yScale = yFrame.scale;

    let matrix = prepareDatapointMatrix(yFrame,xFrame,dataPoints)

    return <div style={baseGraphStyle}>
        <ScatterPlotFrame j={xFrameMaxSize} i={yFrameMaxSize} dataPoints={matrix}/>
    </div>
}

export default ScatterPlot;