import React, { useEffect, useState } from "react";

const XAxisLabel = (props) => {

    const [value, setValue] = useState(0);
    const [label, setLabel] = useState([]);
    useEffect(() => {
        let XMaxLabelValue = props.XMaxLabelValue;
        console.log("x",props.XMaxLabelValue)
        if (props.XMaxLabelValue > 1) {
            let scale = props.XScale;
            let localVal = Math.ceil(props.XMaxLabelValue / 10);
            setValue(localVal);
            console.log("xvalue %d", localVal);
            prepareLabel(localVal);
        }
    }, [props])


    function prepareLabel(value) {
        console.log(value);
        let array = [...Array(10).keys()].map((_, index) => index == 0 ? value : (index+1) * value);
        console.log("label", array);
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

    const line = {
        backgroundColor: "black",
        color: "transparent",
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
            label.map((item) => <div style={labelTextStyling}>{item}</div>
            )
        }</div>
    </div>
}


export default XAxisLabel;