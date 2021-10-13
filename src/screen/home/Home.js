import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import ProductsList from "../products/ProductsList";
import SearchProduct from "../../widget/search/SearchProduct";
import Header from "../../components/header/Header";
import { fetchProducts } from "../../store/actions/productAction";
import "./Home.css";

class Home extends PureComponent {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { products } = this.props;

    return (
      <div className="home">
        <Header />
        <SearchProduct />
        <ProductsList products={products} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(Home);

// constructor(props) {
//   super(props);
//   this.state = {
//     products: [],
//     title: "",
//     error: null,
//   };
// }
// componentDidMount = () => {
//   this.getProducts();
// };

// getProducts = async () => {
//   try {
//     const res = await fetch("https://fakestoreapi.com/products/");
//     const data = await res.json();
//     this.setState({
//       products: data,
//     });
//   } catch (error) {
//     this.setState({
//       error: error,
//     });
//   }
// };
// searchProduct = (inputTitle) => {
//   const productSearchResult = this.state.products.filter((title) => {
//     return title.title.toLowerCase().includes(inputTitle.toLowerCase());
//   });

//   this.setState({
//     products: productSearchResult,
//   });
// };
