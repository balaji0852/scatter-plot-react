import React from "react";
import DataPoint from "./dataPoint";

const ScatterPlotXAxisFrame = (props) =>{
    const {i,j,matrix} = props;
    const xframe = {
        display : "flex",
        flexDirection : "row",
        flexWrap: "nowrap",
        // width:"90%",
        // height : "1px",
        // width : "1px",
        borderColor : "red",
        justifyContent : "space-evenly"
    };

    const dataSpaceStyling = {
        width : "2px",
        height : "2px",
    }

return <div style={xframe}>
        {
            Array.from({length : j}, (_, index) =>
                matrix[i][index]!=0?
            <DataPoint style={dataSpaceStyling} key={index} data={matrix[i][index]}/>
            :<div key={2*index} style={dataSpaceStyling}></div>
            )
        }
    </div>
}


export default ScatterPlotXAxisFrame;