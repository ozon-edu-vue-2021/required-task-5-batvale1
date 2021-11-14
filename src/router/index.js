import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../views/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "products",
    component: Products,
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    path: "/favourite",
    name: "favourite",
    component: () =>
      import(/* webpackChunkName: "favourite" */ "../views/Favourite.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
