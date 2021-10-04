import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <>
        <Header />
        {this.props.product ? (
          <div className="container" style={{ marginBottom: "30px" }}>
            <div className="active-product">
              <img
                className="active-product__img"
                src={this.props.product.image}
                alt={this.props.product.title}
              />
              <h3 className="active-product__title">
                {this.props.product.title}
              </h3>
              <h4 className="active-product__price">
                Price: <span>{this.props.product.price}</span>
              </h4>
              <button className="active-product__button">
                <Link to="/">Go Home</Link>
              </button>
              <button
                onClick={(e) =>
                  this.props.addToCart(
                    this.props.cartProducts,
                    this.props.product
                  )
                }
                className="cart_b"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>Loading product....</div>
        )}
      </>
    );
  }
}

Product.defaultProps = {
  cartProducts: {},
};
const mapStateToProps = (state, ownProps) => {
  let id = Number(ownProps.match.params.id);
  console.log(
    "--------------- > list view map " + JSON.stringify(ownProps.state)
  );

  if (state.cart.cart.length == 0) {
    return {
      product: state.products.products.find((product) => product.id === id),
      cartProducts: state.cart.cart,
    };
  } else {
    return {
      product: state.products.products.find((product) => product.id === id),
      cartProducts: state.cart.cart,
      //   added: state.cart.cart
      //     .map((item) => {
      //       return item.id;
      //     })
      //     .includes(ownProps.products.id),
    };
  }
};
export default connect(mapStateToProps, { addToCart })(Product);
