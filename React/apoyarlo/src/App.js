import './App.css';
import PersonalClassComponent from './components/Cardperson';
import SomeClassComponent from './Views/Home';

function App() {
  return (
    <div className="App">
      <SomeClassComponent></SomeClassComponent>
      <PersonalClassComponent firstName="Doe" lastName="Jane" age="45" hairColor="Black"></PersonalClassComponent>
      <PersonalClassComponent firstName="Smith" lastName="John" age="88" hairColor="Brown"></PersonalClassComponent>
      <PersonalClassComponent firstName="Fillmore" lastName="Millard" age="50" hairColor="Brown"></PersonalClassComponent>
      <PersonalClassComponent firstName="Smith" lastName="María" age="62" hairColor="Brown"></PersonalClassComponent>
      </div>
  );
}

export default App;
