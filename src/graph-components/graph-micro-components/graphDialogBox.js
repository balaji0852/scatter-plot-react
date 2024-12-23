import React from "react";
import logo from "../../logo.svg"
const GraphDialogBox = (props) => {

    const {value} = props;

    const modalDailog = {
        height: "40vh",
        width: "20vw",
        backgroundColor: "whitesmoke",
        // borderRadius: "25px",
        zIndex : 1000,
        position : "absolute",
        padding: "0px",
        boxShadow: "2px 2px lightblue",
        fontSize: "8px",
    }

    const description = {
        textAlign : "start",
        fontSize : "1vw"
    }

    const imageStyling = {
        maxHeight : "25vh",
        height : "auto",
        width : "20vw",
        margin : "0px",
        scale : "1"
    }
    const dataPointInfoStyle = {
        fontWeight : "bold",
        fontSize : "1vw" 
    }

   

    return <div style={modalDailog}>
        <img src={value.image} style={imageStyling}/>
        <div style={dataPointInfoStyle}>x: {value.xAxis} ,y: {value.yAxis}</div>
        <div style={description}>{value.desc}</div>
    </div>
}

export default GraphDialogBox;