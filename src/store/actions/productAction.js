export function fetchProducts() {
  return function (dispatch) {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_PRODUCTS_FULFILLED",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_PRODUCTS_REJECTED", payload: error });
      });
  };
}
