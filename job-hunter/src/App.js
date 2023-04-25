import './App.css';
import React from 'react';

import HomePage from './HomePage';

// import of routes
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return ( 
    <Router>

      <Routes>
      
        <Route exact path = "/" element={<HomePage />}/>  
        
        
      </Routes>
      
      
    
    
  </Router>
  );
}

export default App;
