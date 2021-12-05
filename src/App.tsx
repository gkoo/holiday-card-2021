import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Homepage from './components/Homepage';
import Builder from './components/Builder';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/builder" element={<Builder/>} />
      </Routes>
    </Router>
  );
}

export default App;
