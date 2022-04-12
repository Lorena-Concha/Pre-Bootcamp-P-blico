import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Main></Main>
          </Route>


        </Switch>
      </Router>


    </div>
  );
}

export default App;
