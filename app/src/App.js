import './App.css';
import ChartOne from './components/charts/chartOne';
import ChartTwo from './components/charts/chartTwo';
import Parametr from './components/parametrs/parametrs';
import Buttons from './components/buttons/buttons';


function App() {
  return (
    <div className="app-grid">
      <Parametr />
      <Buttons />
      <div className='charts'>
        <ChartOne />
        <ChartTwo />
      </div>
    </div>
  );
}

export default App;
