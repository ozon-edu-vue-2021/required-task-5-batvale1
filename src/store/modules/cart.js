export const state = {
  cart: [],
};

export const getters = {
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

export const mutations = {
  addProduct(state, { quantity, product }) {
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

  setProductQuantity(state, { product, quantity }) {
    const foundProduct = state.cart.find(
      (item) => item.productId === product.id
    );

    foundProduct.quantity = quantity;
  },

  deleteProduct(state, { product }) {
    const foundProductIndex = state.cart.findIndex(
      (item) => item.productId === product.id
    );

    state.cart.splice(foundProductIndex, 1);
  },
};

export const actions = {
  async addProduct({ commit }, payload) {
    commit("addProduct", payload);
  },

  async setProductQuantity({ commit }, payload) {
    commit("setProductQuantity", payload);
  },

  async deleteProduct({ commit }, payload) {
    commit("deleteProduct", payload);
  },
};

const cart = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default cart;
