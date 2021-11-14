<template>
  <div class="fav">
    <h1>Избранные товары</h1>
    <ol class="fav__list" v-if="favouriteProducts.length">
      <li v-for="item in favouriteProducts" :key="item.id">{{ item.dish }}</li>
    </ol>
    <h2 v-else>Список пуст</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Favourite",

  computed: {
    ...mapGetters("products", { products: "getProducts" }),

    favouriteProducts() {
      return this.products.filter((item) => item.favourite);
    },
  },
};
</script>

<style scoped>
.fav__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
