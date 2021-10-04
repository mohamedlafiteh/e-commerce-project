export const addToCart = (products, product) => (dispatch) => {
  const cartProducts = products;
  console.log(
    "--------------- > from cart action " +
      JSON.stringify(products) +
      "======= product " +
      JSON.stringify(product)
  );

  let productAlreadyInCart = false;

  cartProducts.forEach((cp) => {
    if (cp.id === product.id) {
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartProducts.push({ ...product, count: 1 });
  }

  dispatch({ type: "ADD_TO_CART", payload: { cartProducts } });
};
