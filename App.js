import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Header';
import Checkout from "./Checkout";
import Products from './Products';
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/">
          <Header />
          <Products />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;