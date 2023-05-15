import NavBar from './Navbar';
import Home from './Home';
// used in older versions... import React from 'react';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
      
    </div>
  );
}

export default App;
