import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import ChartOne from './components/charts/chartOne';
import ChartTwo from './components/charts/chartTwo';
import Parametr from './components/parametrs/parametrs';

function App() {
  return (
    <div className="app-grid">
      <Parametr />
      <Button />
      <div className='charts'>
        <ChartOne />
        <ChartTwo />
      </div>
    </div>
  );
}

export default App;
