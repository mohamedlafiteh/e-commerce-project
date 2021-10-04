import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="topnav">
      <Link to="/">
        <span className="a-tag">Home</span>
      </Link>
      <div className="topnav-right">
        <Link to="/signin">
          {" "}
          <span className="a-tag">Sign in</span>
        </Link>
        <Link to="/signup">
          {" "}
          <span className="a-tag">Sign up</span>
        </Link>
        <Link to="/cart">
          {" "}
          <span className="a-tag-cart">
            View Cart{" "}
            <h6 className="a-tag-cart-item">{props.cartCount} items</h6>
          </span>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartCount: state.cart.cart.length,
  };
};

export default connect(mapStateToProps)(Header);
