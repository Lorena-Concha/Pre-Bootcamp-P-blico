import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from './views/Home';
import EditAuthor from './views/EditAuthor';
import AddAuthor from './views/AddAuthor';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" exact element={<Home />}/>
          <Route path="/edit/:id" exact element={<EditAuthor/>}/>
          <Route path="/create" exact element={<AddAuthor/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

