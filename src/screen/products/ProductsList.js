import React from "react";
import PropTypes from "prop-types";
import ProductsListView from "../home/productsListView/ProductsListView";
import "./ProductsList.css";

const productsList = (props) => {
  return <ProductsListView products={props.products} />;
};
export default productsList;

productsList.propTypes = {
  products: PropTypes.array,
};
