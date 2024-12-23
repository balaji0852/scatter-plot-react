import React from "react";
import ScatterPlotXAxisFrame from "./scatterplotXAxisFrame";
import XAxisLabel from "./xAxisLabel";

const ScatterPlotFrame = (props) => {
  const { i, j , dataPoints, xScale, XMaxLabelValue} = props;

  const frame = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    height: "90vh",
    width: "90vw",
    border: "red",
    justifyContent: "space-evenly",
  };

  //i ---> y axis , j -----. x axis
  console.log(dataPoints)
  return (
    <div style={frame}>
      {/* <div>x axis :{i} ,y axis :{j}</div> */}
      {Array.from({ length: i }, (_, index) => (
        <ScatterPlotXAxisFrame key={index} j={j} i={index} matrix={dataPoints} />
      )).reverse()}
      <XAxisLabel XMaxLabelValue={XMaxLabelValue} XScale={xScale}/>
    </div>
  );
};

export default ScatterPlotFrame;
