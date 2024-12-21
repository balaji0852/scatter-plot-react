import logo from './logo.svg';
import ScatterPlot from './graph-components/scatterPlot.js';
import './App.css';
import { randomTest } from './graph-components/utility.js';

const data = {
   dataPoints :[
    {
      xAxis : 3,
      yAxis : 1083.6,
      color : "brown",
      image : "na",
      desc : "train ticket to chennai"
    },
    {
      xAxis : 4,
      yAxis : 200,
      color : "red",
      image : "na",
      desc : "petrol charge"
    }
    ,
    {
      xAxis : 4,
      yAxis : 80,
      color : "green",
      image : "na",
      desc : "vegetables"
    },
    {
      xAxis : 5,
      yAxis : 379,
      color : "blue",
      image : "na",
      desc : "recharge 4485"
    },
    {
      xAxis : 5,
      yAxis : 5000,
      color : "purple",
      image : "na",
      desc : "sip"
    },
    {
      xAxis : 6,
      yAxis : 320,
      color : "red",
      image : "na",
      desc : "petrol charge"
    },
    {
      xAxis : 6,
      yAxis : 20,
      color : "blue",
      image : "na",
      desc : "parking charge"
    },
    {
      xAxis : 7,
      yAxis : 129,
      color : "orange",
      image : "na",
      desc : "boba coffee"
    },
    {
      xAxis : 7,
      yAxis : 165,
      color : "orange",
      image : "na",
      desc : "olive restaurant "
    },
    {
      xAxis : 7,
      yAxis : 2411,
      color : "purple",
      image : "na",
      desc : "education loan emi"
    },
    {
      xAxis : 8,
      yAxis : 80,
      color : "orange",
      image : "na",
      desc : "snacks"
    },
    {
      xAxis : 8,
      yAxis : 58.8,
      color : "orange",
      image : "na",
      desc : "icecream "
    },
    {
      xAxis : 9,
      yAxis : 1500,
      color : "green",
      image : "na",
      desc : "house expenses"
    },
    {
      xAxis : 10,
      yAxis : 70,
      color : "orange",
      image : "na",
      desc : "dinner"
    },
    {
      xAxis : 10,
      yAxis : 8500,
      color : "green",
      image : "na",
      desc : "house rent "
    },
    {
      xAxis : 10,
      yAxis : 835,
      color : "red",
      image : "na",
      desc : "secret santa gift"
    },
    {
      xAxis : 12,
      yAxis : 4000,
      color : "green",
      image : "na",
      desc : "hospital expenses "
    },
    {
      xAxis : 12,
      yAxis : 298,
      color : "blue",
      image : "na",
      desc : "water Bill "
    },
    {
      xAxis : 12,
      yAxis : 754.5,
      color : "red",
      image : "na",
      desc : "train ticket "
    },
    {
      xAxis : 6,
      yAxis : 320,
      color : "red",
      image : "na",
      desc : "petrol charge"
    },
    {
      xAxis : 13,
      yAxis : 110,
      color : "red",
      image : "na",
      desc : "petrol charge"
    },
    {
      xAxis : 14,
      yAxis : 220,
      color : "red",
      image : "na",
      desc : "petrol charge"
    },
    {
      xAxis : 14,
      yAxis : 269,
      color : "red",
      image : "na",
      desc : "petrol charge"
    }
  ]
}

//x, y axis is mismatched
//0 datapoint is not displayed
//i = y axis

function App() {

  let testData = randomTest();

  return (
    <div className="App">
      <ScatterPlot inputs={data}/>
      <div>hello</div>
    </div>
  );
}

export default App;
