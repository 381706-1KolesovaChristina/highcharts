import './App.css';
import ChartOne from './components/charts/chartOne';
import ChartTwo from './components/charts/chartTwo';
import Parametr from './components/parametrs/parametrs';
import Buttons from './components/buttons/buttons';
//import ChartThree from './components/charts/chartThree';
import Charts from './components/charts/charts';

function App() {
  return (
    <div className="app-grid">
      <Parametr />
      <Buttons />
      <div className='charts'>
        <ChartOne />
        {/* <Charts /> */}
        <ChartTwo />
      </div>
    </div>
  );
}

export default App;
