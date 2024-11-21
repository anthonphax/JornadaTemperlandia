import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import AlarmsManager from './components/AlarmsManager';
import ProductionOverview from './components/ProductionOverview';
import OrderManager from './components/OrderManager';
import PartManager from './components/PartManager';
import PartTracker from './components/PartTracker';
import LossGraphs from './components/LossGraphs';
import './styles/App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ProductionOverview />} />
          <Route path="/alarms" element={<AlarmsManager />} />
          <Route path="/orders" element={<OrderManager />} />
          <Route path="/parts" element={<PartManager />} />
          <Route path="/track" element={<PartTracker />} />
          <Route path="/loss-graphs" element={<LossGraphs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
