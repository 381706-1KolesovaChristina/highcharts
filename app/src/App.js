import './App.css';
import Parametr from './components/parametrs/parametrs';
import Buttons from './components/buttons/buttons';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import PageGRR from './components/pages/pageGRR/pageGRR';
import PageCPP2D from './components/pages/pageCPP2D/pageCPP2D';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-grid">
        <Parametr />
        <Buttons />
        <Routes>
          <Route path='/chart1' element={<PageGRR data={props.data} />} />
          <Route path='/chart2' element={<PageCPP2D />} />
        </Routes>
        {/* <Charts1 /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
