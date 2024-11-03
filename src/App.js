import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnantnagDistrict from './components/AnantnagDistrict';
// import BijbeharaVillageList from './components/BijbeharaVillageList';
import BijbeharaVillageList from './components/v2/BijbeharaVillageList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnantnagDistrict />} />
        {/* <Route path="/villages/bijbehara" element={<BijbeharaVillageList />} /> */}
        <Route path="/villages/bijbehara" element={<BijbeharaVillageList />} />
      </Routes>
    </Router>
  );
}

export default App;
