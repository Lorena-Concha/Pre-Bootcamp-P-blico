import './App.css';
import PersonCard from './Components/main';

function App() {
  return (
    <div className="App">
 <PersonCard firstName="Doe" lastName="Jane" age="45" hairColor="Black"></PersonCard>
 <PersonCard firstName="Smith" lastName="John" age="88" hairColor="Brown"></PersonCard>
      <PersonCard firstName="Fillmore" lastName="Millard" age="50" hairColor="Brown"></PersonCard>
      <PersonCard firstName="Smith" lastName="María" age="62" hairColor="Brown"></PersonCard>
    </div>
  );
}
export default App;
