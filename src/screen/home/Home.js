import React, { Component } from "react";
import ProductsList from "../products/ProductsList";
import SearchProduct from "../search/SearchProduct";
import Header from "../../components/header/Header";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      title: "",
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
  searchProduct = (inputTitle) => {
    const productSearchResult = this.state.products.filter((title) => {
      return title.title.toLowerCase().includes(inputTitle.toLowerCase());
    });

    this.setState({
      products: productSearchResult,
    });
  };

  render() {
    return (
      <div className="home">
        <Header />
        <SearchProduct searchProduct={this.searchProduct} />
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}
