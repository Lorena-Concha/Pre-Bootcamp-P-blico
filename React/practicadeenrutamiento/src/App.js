import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Localhome from './components/LocalHome';
import Localhello from './components/LocalHello';
import Localfour from './components/LocalFour';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Localhola from './components/LocalHola';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/home">home</Link></li>
            <li><Link to="/4">4</Link></li>
            <li><Link to="/hello">hello</Link></li>
            <li><Link to="/hola/azul/rojo">hola</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/hello" >
            <Localhello></Localhello>
          </Route>
          <Route path="/4" >
            <Localfour></Localfour>
          </Route>
          <Route path="/hola/azul/rojo">
            <Localhola></Localhola>
          </Route>
          <Route exact path="/home" >
            <Localhome></Localhome>
          </Route>
      
    </Switch>
    </Router>
    </div >
  );
}

export default App;
