import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './views/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './views/Detail';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/product/:id">
            <Detail></Detail>
          </Route>
          <Route path="/">
            <Main></Main>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
