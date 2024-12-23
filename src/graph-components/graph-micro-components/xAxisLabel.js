import React, { useEffect, useState } from "react";

const XAxisLabel = (props) => {

    const [label, setLabel] = useState([]);
    useEffect(() => {
        let XMaxLabelValue = props.XMaxLabelValue;
        if (XMaxLabelValue > 1) {
            let localVal = Math.ceil(XMaxLabelValue / 10);
            prepareLabel(localVal);
        }
    }, [props])


    function prepareLabel(value) {
        let array = [...Array(10).keys()].map((_, index) => index === 0 ? value : (index+1) * value);
        setLabel(array);
    }

    const AxisStyling = {
        height: "2vw",
        width: "100%",
    }

    const labelStyling = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent : "space-evenly",
        marginRight : "2px",
    }

    const labelTextStyling = {
        display: "flex",
        flexDirection: "row",
        height : "100%",
        width : "100%",
        justifyContent : "flex-end",
        fontSize : "1vw",
    }


    return <div style={AxisStyling}>
        {/* <div style={line}>{value}</div> */}
        <div style={labelStyling}>{
            label.map((item,index) => <div key={index} style={labelTextStyling}>{item}</div>
            )
        }</div>
    </div>
}


export default XAxisLabel;