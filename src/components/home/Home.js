import React, { Component } from "react";
import ProductsList from "../products/ProductsList";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null,
    };
  }
  componentDidMount = () => {
    this.getProducts();
  };

  getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      this.setState({
        products: data,
      });
    } catch (error) {
      this.setState({
        error: error,
      });
    }
  };

  render() {
    return (
      <div className="home">
        <header className="home-header">
          <h1 className="home-title">Eco project</h1>
        </header>
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}
