import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  render() {
    <ProductProvider.Provider value="hello context">
      {this.props.children}
    </ProductProvider.Provider>;
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
