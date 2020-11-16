import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home'
import Cart from './Components/Cart/Cart';
import ItemCount from './Components/ItemCount';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Cart">
            <Cart/>
          </Route>
          <Route path="/ItemCount">
            <ItemCount/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
