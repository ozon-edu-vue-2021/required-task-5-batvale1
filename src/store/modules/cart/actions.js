import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCT_QUANTITY,
} from "./mutation-types";

export default {
  async addProduct({ commit }, payload) {
    commit(ADD_PRODUCT, payload);
  },

  async setProductQuantity({ commit }, payload) {
    commit(SET_PRODUCT_QUANTITY, payload);
  },

  async deleteProduct({ commit }, payload) {
    commit(DELETE_PRODUCT, payload);
  },
};
