import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../components/header/Header";

import "./Cart.css";
export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cartProducts } = this.props;
    return (
      <>
        <Header />
        <div className="cart-container ">
          <div className="child-cart">
            <div className="alert alert-info">
              {cartProducts.length === "undefined" ? (
                "Basket is empty"
              ) : (
                <div>
                  You have {cartProducts.length} items in the basket. <hr />
                </div>
              )}
              {cartProducts.length > 0 ? (
                <div>
                  <ul style={{ marginLeft: -25 }}>
                    {cartProducts.map((item) => (
                      <li key={item.id}>
                        <b>{item.title}</b>
                        <button
                          style={{ float: "right" }}
                          className="btn primary btn-xs"
                        >
                          Add
                        </button>
                        <button
                          style={{ float: "right" }}
                          className="btn btn-danger btn-xs"
                        >
                          X
                        </button>
                        <br />
                      </li>
                    ))}
                  </ul>
                  <b>Sum: </b>
                  <br />
                  <Link to="/">
                    <button className="btn btn-primary">Home page</button>
                  </Link>
                </div>
              ) : (
                <Link to="/">
                  <button className="btn btn-primary">Home page</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.cart.cart.length == 0) {
    return {
      cartProducts: state.cart.cart,
    };
  } else {
    return {
      cartProducts: state.cart.cart,
      count: state.cart.cart.map((item) => item.count),
    };
  }
};

export default connect(mapStateToProps)(Cart);
