import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Product.css";

class Product extends React.Component {
  render() {
    return (
      <>
        <Header />
        {this.props.product ? (
          <div className="container">
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
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>Loading product....</div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = Number(ownProps.match.params.id);

  return {
    product: state.products.products.find((product) => product.id === id),
  };
};
export default connect(mapStateToProps)(Product);

// state = {
//   activeProduct: [],
// };
// // componentDidMount = async () => {
// //   const id = this.props.match.params.id;

// //   const res = await fetch(`https://fakestoreapi.com/products/${id}`);

// //   const data = await res.json();
// //   this.setState({ activeProduct: data });
// // };

// componentDidMount() {
//   const id = this.props.match.params.id;
//   // const promiseCall = new Promise((resolve, reject) => {
//   const fetchData = fetch(`https://fakestoreapi.com/products/${id}`)
//     .then((response) => response.json())
//     .then((res) => {
//       this.setState({
//         activeProduct: res,
//       });
//       // return resolve();
//     })
//     .catch((err) => {
//       // reject();
//     });
//   // });
// }
