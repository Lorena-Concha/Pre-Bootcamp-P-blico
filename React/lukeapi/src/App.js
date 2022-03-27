import './App.css';
import Home from './views/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Character from './views/Character';
import React from 'react';

function App() {



  return (
    <div className="App">

      <>
   <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/people/:id" component={Character} />
    </Switch>
  </Router>
 </>
    </div>
  );
}

export default App;
