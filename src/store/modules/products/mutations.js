import {
  MARK_AS_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_PRODUCTS,
} from "./mutation-types";
import Vue from "vue";

export default {
  [SET_PRODUCTS](state, { products }) {
    state.products = products;
  },

  [MARK_AS_FAVOURITE](state, { product }) {
    const foundProductIndex = state.products.findIndex(
      (item) => item.id === product.id
    );
    const foundProduct = state.products[foundProductIndex];

    Vue.set(foundProduct, "favourite", true);
  },

  [REMOVE_FROM_FAVOURITE](state, { product }) {
    const foundProductIndex = state.products.findIndex(
      (item) => item.id === product.id
    );
    const foundProduct = state.products[foundProductIndex];

    Vue.delete(foundProduct, "favourite", true);
  },
};
