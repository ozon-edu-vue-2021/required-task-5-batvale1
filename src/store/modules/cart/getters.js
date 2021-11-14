export default {
  getCart(state) {
    return state.cart;
  },

  getTotal(state) {
    return state.cart.reduce(
      (acc, item) => (acc += item.quantity * item.price),
      0
    );
  },
};
