import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import Header from './components/header/header';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
