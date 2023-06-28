const isAlreadyInCart = (user, newProduct) => {
  for (let i = 0; i < user.shoppingCart.length; i += 1) {
    const element = user.shoppingCart[i];
    if (element.id === newProduct.id) {
      return i;
    }
  }
  return -1;
};

export function reducer(state, action) {
  switch (action.type) {
    case "add-to-cart":
      const index = isAlreadyInCart(state, action.payload);
      if (index >= 0) {
        // if in cart increase quantity
        return {
          ...state,
          shoppingCart: [
            ...state.shoppingCart,
            (state.shoppingCart[index].quantity += 1),
          ],
        };
      } else {
        return {
          ...state,
          shoppingCart: [...state.shoppingCart, action.payload],
        };
      }
    case "remove-from-cart":
      const newCart = state.shoppingCart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        shoppingCart: [...newCart],
      };
    case "change-quantity":
      let currentProduct = state.shoppingCart[action.payload.index];
      currentProduct.quantity = action.payload.quantity;
      return {
        ...state,
        shoppingCart: [...state.shoppingCart],
      };
    case "add-favorite":
      break;
    case "remove-favorite":
      break;
    default:
      break;
  }
}
