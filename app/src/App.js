import './App.css';
// import ChartOne from './components/charts/chartOne';
// import ChartTwo from './components/charts/chartTwo';
import Parametr from './components/parametrs/parametrs';
import Buttons from './components/buttons/buttons';
import Charts1 from './components/charts/charts1/charts1';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Charts2 from './components/charts/charts2/charts2';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-grid">
        <Parametr />
        <Buttons />
        <Routes>
          <Route path='/chart1' element={<Charts1 />} />
          <Route path='/chart2' element={<Charts2 />} />
        </Routes>
        {/* <Charts1 /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
