import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Homepage from './components/Homepage';
import Builder from './components/Builder';
import Tester from './components/Tester';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/builder" element={<Builder/>} />
          <Route path="/tester" element={<Tester/>} />
          <Route path="/" element={<Homepage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
