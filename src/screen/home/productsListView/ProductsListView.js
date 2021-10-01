import React from "react";
import { Link } from "react-router-dom";

export default function ProductsListView(props) {
  return (
    <div className="container" style={{ width: "60%" }}>
      <div className="row">
        {props.products.map((product) => {
          return (
            <div
              key={product.id}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <div className="products__box">
                <img
                  className="recipe__box-img"
                  src={product.image}
                  alt={product.title}
                />
                <div className="product__text">
                  <h5 className="product__title">
                    {product.title.length < 10
                      ? `${product.title}`
                      : `${product.title.substring(0, 15)}...`}
                  </h5>
                  <p className="product__subtitle">
                    Price: <span>{product.price}</span>
                  </p>
                </div>
                <button className="product_buttons">
                  <Link
                    to={{
                      pathname: `/product/${product.id}`,
                      state: { product: product.title },
                    }}
                  >
                    View product
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
