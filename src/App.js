import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Details from "./components/Details";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ProductList />
        <Product />
        <Details />
        <Cart />
      </React.Fragment>
    );
  }
}

export default App;
