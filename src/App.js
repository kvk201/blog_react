import NavBar from './Navbar';
import Home from './Home';
// used in older versions... import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/">
                <Home />
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
