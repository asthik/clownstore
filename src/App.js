import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import { Route } from 'react-router-dom';

const HatsPage = (props) =>{
  return (
    <div><h1>hats page</h1></div>
  );
}

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
