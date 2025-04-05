
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './Routes/Allroutes';


function App() {
  return (
    <Router>
      <div>
        <h2 className="text-center my-4">Book Store</h2>
        <AllRoutes />
      </div>
    </Router>
  );
}

export default App;
