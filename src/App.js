import React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Cursor from "./components/Cursor/Cursor"
import Info from './components/Info/Info';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App" id="App">
      <Cursor />
      <Router>
        <Switch>
          <Route exact path="/info" component={Info} />
          <Route path="/slider" component={Gallery} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
