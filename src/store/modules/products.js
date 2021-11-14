import axios from "axios";
import Vue from "vue";

const images = [
  require("../../assets/images/6123150777.webp"),
  require("../../assets/images/6126039472.webp"),
  require("../../assets/images/6126040354.webp"),
  require("../../assets/images/6128597660.webp"),
  require("../../assets/images/6134992334.webp"),
  require("../../assets/images/6136170572.webp"),
  require("../../assets/images/6136172483.webp"),
  require("../../assets/images/6140906765.webp"),
  require("../../assets/images/6142673815.webp"),
  require("../../assets/images/6142681673.webp"),
  require("../../assets/images/6142683276.webp"),
  require("../../assets/images/6148226736.webp"),
];

const prices = [10, 20, 30, 40, 50];

export const state = {
  products: [],
};

export const getters = {
  getProducts(state) {
    return state.products;
  },
};

export const mutations = {
  setProducts(state, { products }) {
    state.products = products;
  },

  markAsFavourite(state, { product }) {
    const foundProductIndex = state.products.findIndex(
      (item) => item.id === product.id
    );
    const foundProduct = state.products[foundProductIndex];

    Vue.set(foundProduct, "favourite", true);
  },

  removeFromFavourite(state, { product }) {
    const foundProductIndex = state.products.findIndex(
      (item) => item.id === product.id
    );
    const foundProduct = state.products[foundProductIndex];

    Vue.delete(foundProduct, "favourite", true);
  },
};

export const actions = {
  async fetchProducts({ commit }) {
    const { data } = await axios.get(
      "https://random-data-api.com/api/food/random_food?size=30"
    );
    const mappedData = data.map((item) => {
      return {
        ...item,
        img: images[Math.floor(Math.random(0, 1) * images.length)],
        price: prices[Math.floor(Math.random(0, 1) * prices.length)],
      };
    });
    commit("setProducts", { products: mappedData });
  },

  async markAsFavourite({ commit }, payload) {
    commit("markAsFavourite", payload);
  },

  async removeFromFavourite({ commit }, payload) {
    commit("removeFromFavourite", payload);
  },
};

const products = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default products;
