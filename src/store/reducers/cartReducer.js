const iniState = {
  cart: [],
};

export default function (state = iniState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: action.payload.cartProducts };
    default:
      return state;
  }
}
