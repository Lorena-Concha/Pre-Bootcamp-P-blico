import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from './views/Main';
import CreateProject from './components/CreateProject';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create" exact>
            <CreateProject/>
          </Route>
          <Route path="/" exact>
            <Main/>
          </Route>



        </Switch>
      </Router>


    </div>
  );
}

export default App;
