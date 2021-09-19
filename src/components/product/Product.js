import React from "react";

import { Link } from "react-router-dom";
import "./Product.css";

class Product extends React.Component {
  state = {
    activeProduct: [],
  };
  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await res.json();
    this.setState({ activeProduct: data });
    console.log(this.state.activeProduct);
  };
  render() {
    const product = this.state.activeProduct;
    return (
      <div className="container">
        <header className="home-header">
          <h1 className="home-title" style={{ textAlign: "center" }}>
            Eco project
          </h1>
        </header>
        {this.state.activeProduct.length !== 0 && (
          <div className="active-product">
            <img
              className="active-product__img"
              src={product.image}
              alt={product.title}
            />
            <h3 className="active-product__title">{product.title}</h3>
            <h4 className="active-product__price">
              Price: <span>{product.price}</span>
            </h4>
            <button className="active-product__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Product;
