import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCT_QUANTITY,
} from "./mutation-types";

export default {
  [ADD_PRODUCT](state, { quantity, product }) {
    const foundProduct = state.cart.find(
      (item) => item.productId === product.id
    );
    if (foundProduct) {
      foundProduct.quantity += quantity;
    } else {
      state.cart.push({
        productId: product.id,
        quantity,
        price: product.price,
      });
    }
  },

  [SET_PRODUCT_QUANTITY](state, { product, quantity }) {
    const foundProduct = state.cart.find(
      (item) => item.productId === product.id
    );

    foundProduct.quantity = quantity;
  },

  [DELETE_PRODUCT](state, { product }) {
    const foundProductIndex = state.cart.findIndex(
      (item) => item.productId === product.id
    );

    state.cart.splice(foundProductIndex, 1);
  },
};
