import React from "react";
import ScatterPlotXAxisFrame from "./scatterplotXAxisFrame";

const ScatterPlotFrame = (props) => {
  const { i, j , dataPoints} = props;

  const frame = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    // backgroundColor: "yellow",
    height: "90vh",
    width: "90vw",
    border: "red",
    justifyContent: "space-evenly",
  };

  //i ---> y axis , j -----. x axis
  console.log(dataPoints)
  return (
    <div style={frame}>
      <div>x axis - {i} ,  {j}</div>
      {Array.from({ length: i }, (_, index) => (
        <ScatterPlotXAxisFrame key={index} j={j} i={index} matrix={dataPoints} />
      )).reverse()}
    </div>
  );
};

export default ScatterPlotFrame;
