import React, { useState } from "react";
import "./dataPoint.css";
import GraphDialogBox from "./graphDialogBox";

export const DataPoint = (props) => {
    const { data } = props;
    const [hover, setHover] = useState(false);

    const dataPoint = {
        width: "5px",
        height: "5px",
        backgroundColor: data.color,
        color: "transparent",
        zIndex : -1,
        overflow : "hidden"
    }

    

    const block = {
        backgroundColor : "blue",
        marginTop : "auto"
    }

    return <div style={block}>
        <div className="dataPoint" style={dataPoint}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}>
            .
        </div>
        {hover && <GraphDialogBox value={data}/> }
    </div>
}

export default DataPoint;