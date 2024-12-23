import React, { useEffect, useState } from "react";

const YAxisLabel = (props) => {

    const [label, setLabel] = useState([]);
    useEffect(() => {
        let YMaxLabelValue = props.YMaxLabelValue;
        if (YMaxLabelValue > 1) {
            let localVal = Math.ceil(YMaxLabelValue / 10);
            prepareLabel(localVal);
        }
    }, [props])


    function prepareLabel(value) {
        let array = [...Array(10).keys()].map((_, index) => index === 0 ? value : (index+1) * value);
        setLabel(array);
    }

    const AxisStyling = {
        width: "3vw",
        height: "88vh",
        paddingBottom : "2vh"
    }

    const labelStyling = {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent : "space-evenly"
    }

    const labelTextStyling = {
        display: "flex",
        flexDirection: "column",
        height : "100%",
        justifyContent : "flex-start",
        fontSize : "1vw"
    }


    return <div style={AxisStyling}>
        {/* <div style={line}>{value}</div> */}
        <div style={labelStyling}>{
            label.map((item, index) => <div key={index} style={labelTextStyling}>{item}</div>
            ).reverse()
        }</div>
    </div>
}


export default YAxisLabel;