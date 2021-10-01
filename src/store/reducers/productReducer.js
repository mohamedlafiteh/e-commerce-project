const initState = {
  products: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_FULFILLED": {
      return {
        ...state,
        products: action.payload,
      };
    }
  }
  return state;
};

export default productReducer;
