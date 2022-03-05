import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Navigation from './components/navegaction';

function App() {
  return (
    <div className="app">
    <Header></Header>
      <div>
      <Navigation></Navigation>
      <Main></Main>
      </div>
      </div>
      );
}
export default App;



