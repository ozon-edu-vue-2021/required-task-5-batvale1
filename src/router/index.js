import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../views/Products.vue";
import { routerLinks } from "./rounter-links";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: routerLinks.Products,
    component: Products,
  },
  {
    path: "/cart",
    name: routerLinks.Cart,
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    path: "/favourite",
    name: routerLinks.Favourite,
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
