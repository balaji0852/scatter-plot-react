import React from "react";
import DataPoint from "./dataPoint";

const ScatterPlotXAxisFrame = (props) =>{
    const {i,j,matrix} = props;
    const xframe = {
        display : "flex",
        flexDirection : "row",
        padding : 0,
        flexWrap: "nowrap",
        height : "100%",
        // width:"90%",
        // width : "1px",
        justifyContent : "space-evenly"
    };

    const dataSpaceStyling = {
        width : "100%",
        height : "100%",
    }

return <div style={xframe}>
        {
            Array.from({length : j}, (_, index) =>
                matrix[i][index]!==0?
            <DataPoint style={dataSpaceStyling} key={index===0?1:index*Math.random()} data={matrix[i][index]}/>
            :<div key={2*index} style={dataSpaceStyling}></div>
            )
        }
    </div>
}


export default ScatterPlotXAxisFrame;