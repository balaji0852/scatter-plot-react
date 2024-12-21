import React, { useState } from "react";
import "./dataPoint.css";

export const DataPoint = (props) => {
    const { data } = props;
    const [hover, setHover] = useState(false);

    const dataPoint = {
        width: "3px",
        height: "3px",
        backgroundColor: data.color,
        color: "transparent",
        zIndex : 0
    }

    const modalDailog = {
        height : "150px",
        width : "150px",
        position : "absolute",
        zIndex : 1,
        backgroundColor : "white",
        borderRadius : "25px",
        padding : "10px",
        boxShadow : "2px 2px lightblue",
        fontSize : "8px"
    }

    const block = {
        width: "3px",
        height: "3px",
        width : "100vw",
        // display : "flex",
        position : "relative"
    }

    return <div>
        <div className="dataPoint" style={dataPoint}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}>
            .
        </div>
        {hover && <div style={modalDailog}>{data.xAxis}, {data.yAxis}, {data.color}, {data.desc}</div> }
    </div>
}

export default DataPoint;