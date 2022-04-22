import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import Register from "./views/Register";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registro">Registro</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/registro" element={<Register></Register>} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;