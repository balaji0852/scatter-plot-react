import ScatterPlot from './graph-components/scatterPlot.js';
import './App.css';
import { randomTest } from './graph-components/utility.js';

// const data = {
//    dataPoints :[
//     {
//      "xAxis": 31,
//      "yAxis": 300,
//      "color": "Red",
//      "image": "Na",
//      "desc": "recharge 423"
//     },
//     {
//      "xAxis": "31",
//      "yAxis": 35,
//      "color": "Red",
//      "image": "Na",
//      "desc": "fish food "
//     },
//     {
//      "xAxis": "31",
//      "yAxis": 136,
//      "color": "Red",
//      "image": "Na",
//      "desc": "cab to cont "
//     },
//     {
//      "xAxis": "31",
//      "yAxis": 471,
//      "color": "Red",
//      "image": "Na",
//      "desc": "train ticket "
//     },
//     {
//      "xAxis": "31",
//      "yAxis": 33,
//      "color": "Red",
//      "image": "Na",
//      "desc": "errands shopping "
//     },
//     {
//      "xAxis": "01",
//      "yAxis": 531,
//      "color": "Red",
//      "image": "Na",
//      "desc": "train tickets"
//     },
//     {
//      "xAxis": "02",
//      "yAxis": 431,
//      "color": "Red",
//      "image": "Na",
//      "desc": "utility bills"
//     },
//     {
//      "xAxis": "02",
//      "yAxis": 970,
//      "color": "Red",
//      "image": "Na",
//      "desc": "team lunch"
//     },
//     {
//      "xAxis": "03",
//      "yAxis": 1310,
//      "color": "Red",
//      "image": "Na",
//      "desc": "bus ticket chennai "
//     },
//     {
//      "xAxis": "03",
//      "yAxis": 4000,
//      "color": "Red",
//      "image": "Na",
//      "desc": "full payments for cupboard "
//     },
//     {
//      "xAxis": "03",
//      "yAxis": 180,
//      "color": "Red",
//      "image": "Na",
//      "desc": "petrol"
//     },
//     {
//      "xAxis": "04",
//      "yAxis": 300,
//      "color": "Red",
//      "image": "Na",
//      "desc": "recharge 485"
//     },
//     {
//      "xAxis": "05",
//      "yAxis": 40,
//      "color": "Red",
//      "image": "Na",
//      "desc": "bus ticket "
//     },
//     {
//      "xAxis": "05",
//      "yAxis": 60,
//      "color": "Red",
//      "image": "Na",
//      "desc": "breakfast chennai"
//     },
//     {
//      "xAxis": "05",
//      "yAxis": 1600,
//      "color": "Red",
//      "image": "Na",
//      "desc": "room rent"
//     },
//     {
//      "xAxis": "05",
//      "yAxis": 70,
//      "color": "Red",
//      "image": "Na",
//      "desc": "snacks "
//     },
//     {
//      "xAxis": "05",
//      "yAxis": 236,
//      "color": "Red",
//      "image": "Na",
//      "desc": "card reissue charge"
//     },
//     {
//      "xAxis": "05",
//      "yAxis": 567,
//      "color": "Red",
//      "image": "Na",
//      "desc": "food charge lunch , dinner "
//     },
//     {
//      "xAxis": "06",
//      "yAxis": 226,
//      "color": "Red",
//      "image": "Na",
//      "desc": "goat movie ticket "
//     },
//     {
//      "xAxis": "06",
//      "yAxis": 40,
//      "color": "Red",
//      "image": "Na",
//      "desc": "breakfast "
//     },
//     {
//      "xAxis": "06",
//      "yAxis": 300,
//      "color": "Red",
//      "image": "Na",
//      "desc": "atm withdrawal "
//     },
//     {
//      "xAxis": "06",
//      "yAxis": 2500,
//      "color": "Red",
//      "image": "Na",
//      "desc": " parents travel to chennai "
//     },
//     {
//      "xAxis": "06",
//      "yAxis": 2400,
//      "color": "Red",
//      "image": "Na",
//      "desc": "education loan emi"
//     },
//     {
//      "xAxis": "06",
//      "yAxis": 130,
//      "color": "Red",
//      "image": "Na",
//      "desc": "lunch"
//     },
//     {
//      "xAxis": "06",
//      "yAxis": 145,
//      "color": "Red",
//      "image": "Na",
//      "desc": "snacks "
//     },
//     {
//      "xAxis": "07",
//      "yAxis": 218,
//      "color": "Red",
//      "image": "Na",
//      "desc": "groceries snacks fish food "
//     },
//     {
//      "xAxis": "07",
//      "yAxis": 1225,
//      "color": "Red",
//      "image": "Na",
//      "desc": "tickets "
//     },
//     {
//      "xAxis": "07",
//      "yAxis": 140,
//      "color": "Red",
//      "image": "Na",
//      "desc": "biriyani "
//     },
//     {
//      "xAxis": "07",
//      "yAxis": 200,
//      "color": "Red",
//      "image": "Na",
//      "desc": "petrol"
//     },
//     {
//      "xAxis": "07",
//      "yAxis": 27,
//      "color": "Red",
//      "image": "Na",
//      "desc": "tea break"
//     },
//     {
//      "xAxis": "09",
//      "yAxis": 8500,
//      "color": "Red",
//      "image": "Na",
//      "desc": "house rent"
//     },
//     {
//      "xAxis": "10",
//      "yAxis": 199,
//      "color": "Red",
//      "image": "Na",
//      "desc": "Netflix charge "
//     },
//     {
//      "xAxis": "10",
//      "yAxis": 50,
//      "color": "Red",
//      "image": "Na",
//      "desc": "vmart"
//     },
//     {
//      "xAxis": "11",
//      "yAxis": 254,
//      "color": "Red",
//      "image": "Na",
//      "desc": "kfc roll, coffee church street, water bottle, alok place dinner "
//     },
//     {
//      "xAxis": "11",
//      "yAxis": 53,
//      "color": "Red",
//      "image": "Na",
//      "desc": "metro ticket "
//     },
//     {
//      "xAxis": "12",
//      "yAxis": 132,
//      "color": "Red",
//      "image": "Na",
//      "desc": "tatkal ticket "
//     },
//     {
//      "xAxis": "13",
//      "yAxis": 3839,
//      "color": "Red",
//      "image": "Na",
//      "desc": "bus ticket "
//     },
//     {
//      "xAxis": "13",
//      "yAxis": 332,
//      "color": "Red",
//      "image": "Na",
//      "desc": "train ticket "
//     },
//     {
//      "xAxis": "13",
//      "yAxis": 245,
//      "color": "Red",
//      "image": "Na",
//      "desc": "cab to tin factory "
//     },
//     {
//      "xAxis": "14",
//      "yAxis": 84,
//      "color": "Red",
//      "image": "Na",
//      "desc": "a2b coffee"
//     },
//     {
//      "xAxis": "14",
//      "yAxis": 100,
//      "color": "Red",
//      "image": "Na",
//      "desc": "breakfast "
//     },
//     {
//      "xAxis": "14",
//      "yAxis": 2880,
//      "color": "Red",
//      "image": "Na",
//      "desc": "zoom car:)"
//     },
//     {
//      "xAxis": "14",
//      "yAxis": 235,
//      "color": "Red",
//      "image": "Na",
//      "desc": "lunch , drink"
//     },
//     {
//      "xAxis": "14",
//      "yAxis": 3240,
//      "color": "Red",
//      "image": "Na",
//      "desc": "hospital charges "
//     },
//     {
//      "xAxis": "14",
//      "yAxis": 47,
//      "color": "Red",
//      "image": "Na",
//      "desc": "dinner"
//     },
//     {
//      "xAxis": "15",
//      "yAxis": 1050,
//      "color": "Red",
//      "image": "Na",
//      "desc": "petrol"
//     },
//     {
//      "xAxis": "15",
//      "yAxis": 84,
//      "color": "Red",
//      "image": "Na",
//      "desc": "sweets"
//     },
//     {
//      "xAxis": "15",
//      "yAxis": 50,
//      "color": "Red",
//      "image": "Na",
//      "desc": "hundi"
//     },
//     {
//      "xAxis": "16",
//      "yAxis": 260,
//      "color": "Red",
//      "image": "Na",
//      "desc": "barbeque chicken "
//     },
//     {
//      "xAxis": "17",
//      "yAxis": 200,
//      "color": "Red",
//      "image": "Na",
//      "desc": "petrol"
//     },
//     {
//      "xAxis": "18",
//      "yAxis": 180,
//      "color": "Red",
//      "image": "Na",
//      "desc": "utility bill "
//     },
//     {
//      "xAxis": "18",
//      "yAxis": 35000,
//      "color": "Red",
//      "image": "Na",
//      "desc": "debt"
//     },
//     {
//      "xAxis": "19",
//      "yAxis": 1002,
//      "color": "Red",
//      "image": "Na",
//      "desc": "train tickets"
//     },
//     {
//      "xAxis": "19",
//      "yAxis": 385,
//      "color": "Red",
//      "image": "Na",
//      "desc": "chaayos, kfc"
//     },
//     {
//      "xAxis": "20",
//      "yAxis": 3000,
//      "color": "Red",
//      "image": "Na",
//      "desc": "hospital charges "
//     },
//     {
//      "xAxis": "21",
//      "yAxis": 120,
//      "color": "Red",
//      "image": "Na",
//      "desc": "cubbon park - snacks"
//     },
//     {
//      "xAxis": "21",
//      "yAxis": 200,
//      "color": "Red",
//      "image": "Na",
//      "desc": "petrol"
//     },
//     {
//      "xAxis": "23",
//      "yAxis": 200,
//      "color": "Red",
//      "image": "Na",
//      "desc": "petrol "
//     },
//     {
//      "xAxis": "24",
//      "yAxis": 850,
//      "color": "Red",
//      "image": "Na",
//      "desc": "gas bill"
//     },
//     {
//      "xAxis": "24",
//      "yAxis": 120,
//      "color": "Red",
//      "image": "Na",
//      "desc": "dinner"
//     },
//     {
//      "xAxis": "27",
//      "yAxis": 3000,
//      "color": "Red",
//      "image": "Na",
//      "desc": "hospital charges "
//     },
//     {
//      "xAxis": "27",
//      "yAxis": 300,
//      "color": "Red",
//      "image": "Na",
//      "desc": "423 recharge "
//     },
//     {
//      "xAxis": "28",
//      "yAxis": 982,
//      "color": "Red",
//      "image": "Na",
//      "desc": "train ticket "
//     },
//     {
//      "xAxis": "28",
//      "yAxis": 200,
//      "color": "Red",
//      "image": "Na",
//      "desc": "petrol"
//     },
//     {
//      "xAxis": "28",
//      "yAxis": 27,
//      "color": "Red",
//      "image": "Na",
//      "desc": "Nandini - drink"
//     }
//    ]
// }

//x, y axis is mismatched
//0 datapoint is not displayed
//i = y axis

function App() {

  let testData = randomTest();

  return (
    <div className="App">
      <ScatterPlot inputs={testData}/>
      <div>Scatter plot</div>
    </div>
  );
}

export default App;
