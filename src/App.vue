<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="item in currentRoutes"
        :key="item.name"
        :to="{ name: item.name }"
      >
        {{ item.label }}
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { routerLinks } from "./router/rounter-links";

export default {
  name: "App",

  computed: {
    currentRoutes() {
      return [
        { name: routerLinks.Products, label: "Products" },
        { name: routerLinks.Cart, label: "Cart" },
        { name: routerLinks.Favourite, label: "Favourite" },
      ];
    },
  },

  created() {
    this.fetchProducts();
  },

  methods: {
    ...mapActions("products", ["fetchProducts"]),
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
