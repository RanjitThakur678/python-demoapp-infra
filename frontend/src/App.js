// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated imports
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Home />} /> {/* Updated Route syntax */}
          {/* Add other routes here, e.g. statistics */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
