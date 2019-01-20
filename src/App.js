import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
