import React, { useEffect, useState } from "react";

const YAxisLabel = (props) => {

    const [value, setValue] = useState(0);
    const [label, setLabel] = useState([]);
    useEffect(() => {
        let YMaxLabelValue = props.YMaxLabelValue;
        console.log(props.YMaxLabelValue)
        if (props.YMaxLabelValue > 1) {
            let scale = props.YScale;
            let localVal = Math.ceil(props.YMaxLabelValue / 10);
            setValue(localVal);
            console.log("value %d", localVal);
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

    const line = {
        backgroundColor: "black",
        color: "transparent"
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
            label.map((item) => <div style={labelTextStyling}>{item}</div>
            ).reverse()
        }</div>
    </div>
}


export default YAxisLabel;