import axios from "axios";
import {
  MARK_AS_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_PRODUCTS,
} from "./mutation-types";

const images = [
  require("@/assets/images/6123150777.webp"),
  require("@/assets/images/6126039472.webp"),
  require("@/assets/images/6126040354.webp"),
  require("@/assets/images/6128597660.webp"),
  require("@/assets/images/6134992334.webp"),
  require("@/assets/images/6136170572.webp"),
  require("@/assets/images/6136172483.webp"),
  require("@/assets/images/6140906765.webp"),
  require("@/assets/images/6142673815.webp"),
  require("@/assets/images/6142681673.webp"),
  require("@/assets/images/6142683276.webp"),
  require("@/assets/images/6148226736.webp"),
];

const prices = [10, 20, 30, 40, 50];

export default {
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
    commit(SET_PRODUCTS, { products: mappedData });
  },

  async markAsFavourite({ commit }, payload) {
    commit(MARK_AS_FAVOURITE, payload);
  },

  async removeFromFavourite({ commit }, payload) {
    commit(REMOVE_FROM_FAVOURITE, payload);
  },
};
