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
    case "is-favorite":
      const id = action.payload;
      if (state.favoriteProducts.includes(id)) {
        return {
          ...state,
          favoriteProducts: [
            ...state.favoriteProducts.filter((fav) => fav !== id),
          ],
        };
      } else {
        return { ...state, favoriteProducts: [...state.favoriteProducts, id] };
      }
    case "sign-in":
      return { ...action.payload };
    case "sign-out":
      const emptyState = {
        name: "",
        isSignedIn: false,
        favoriteProducts: [],
        shoppingCart: [],
      };
      return { ...emptyState };
    case "add-product":
      return {
        ...state,
        fullItemInventory: [...state.fullItemInventory, action.payload],
      };
    case "fetch-inventory-data":
      return {
        ...state,
        fullItemInventory: [...action.payload],
      };
    case "remove-product":
      const incomingId = action.payload;
      const updatedInventory = state.fullItemInventory.filter(
        (product) => product._id !== incomingId
      );
      return { ...state, fullItemInventory: updatedInventory };
    default:
      break;
  }
}
