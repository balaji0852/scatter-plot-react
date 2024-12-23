import ScatterPlot from './graph-components/scatterPlot.js';
import './App.css';
import { randomTest } from './graph-components/utility.js';


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
