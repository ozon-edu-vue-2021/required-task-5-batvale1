<template>
  <div class="products">
    <h1>Products</h1>
    <div class="products__list">
      <div v-for="product in products" :key="product.id" class="product">
        <p class="product__title">{{ product.dish }}</p>
        <img class="product__img" :src="product.img" />
        <p class="product__desc">Description: {{ product.description }}</p>
        <p class="product__price">Price: {{ product.price }}</p>
        <label class="product__add-block">
          <span>Количество:</span>
          <select @change="setProductQuantity($event.target.value, product.id)">
            <option
              v-for="price in prices"
              :key="price.id"
              :value="price.value"
            >
              {{ price.value }}
            </option>
          </select>
        </label>
        <button class="product__add-btn" @click="addToCart(product)">
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { productQuantityPerStep } from "@/settings";

export default {
  name: "Products",

  data() {
    return {
      currentProductQuantity: {},
      prices: productQuantityPerStep,
    };
  },

  computed: {
    ...mapGetters("products", ["getProducts"]),

    products() {
      return this.getProducts;
    },
  },

  methods: {
    addToCart(product) {
      const quantity = this.currentProductQuantity[product.id]
        ? this.currentProductQuantity[product.id]
        : this.prices[0].value;

      this.$store.dispatch("cart/addProduct", { product, quantity });
    },
    setProductQuantity(quantity, productId) {
      this.$set(this.currentProductQuantity, productId, Number(quantity));
    },
  },
};
</script>

<style scoped>
.products__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product__add-block {
  display: block;
  width: 100%;
}

.product__add-btn {
  margin-top: 20px;
}

.product__desc {
  min-height: 56px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.product__img {
  width: 100%;
}
</style>
