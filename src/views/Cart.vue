<template>
  <div class="cart">
    <h1>Cart. Total {{ getTotal }}</h1>
    <button v-if="cart.length" class="cart__submit-btn" @click="submitOrder">
      Оформить заказ
    </button>
    <div class="cart__list">
      <div v-for="product in cart" :key="product.id" class="cart__product">
        <div class="cart__left">
          <p class="product__title">{{ product.dish }}</p>
          <img class="cart__product-image" :src="product.img" />
          <p class="product__text">Description: {{ product.description }}</p>
          <p class="product__text">Price: {{ product.price }}</p>
          <p class="product__text">Quantity: {{ product.quantity }}</p>
          <p v-if="product.favourite" class="product__text">В избранном</p>
        </div>
        <div class="cart__right">
          <p>Количество:</p>
          <input
            type="number"
            :value="product.quantity"
            @input="setProductQuantity($event.target.value, product)"
          />
          <p>Цена: {{ product.price }}</p>
          <button class="cart__action-btn" @click="deleteProduct(product)">
            Удалить товар
          </button>
          <button
            class="cart__action-btn"
            @click="handleFavouriteClick(product)"
          >
            {{ product.favouriteActionTitle }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { productQuantityPerStep } from "../settings";

export default {
  name: "Cart",

  data() {
    return {
      prices: productQuantityPerStep,
    };
  },

  computed: {
    ...mapGetters("cart", ["getCart"]),
    ...mapGetters("cart", ["getTotal"]),
    ...mapGetters("products", ["getProducts"]),
    cart() {
      return this.getCart.map((cartItem) => {
        const productData = this.getProducts.find(
          (productItem) => productItem.id === cartItem.productId
        );
        const isFavourite = Boolean(productData.favourite);
        const favouriteActionTitle = isFavourite
          ? "Убрать из избранного"
          : "Добавить в избранное";

        return {
          ...productData,
          isFavourite,
          favouriteActionTitle,
          quantity: cartItem.quantity,
        };
      });
    },
  },

  methods: {
    setProductQuantity(quantity, product) {
      this.$store.dispatch("cart/setProductQuantity", { quantity, product });
    },

    submitOrder() {
      alert(
        this.cart.reduce(
          (acc, item) => (acc += `${item.dish} ${item.quantity} шт. \n`),
          ""
        )
      );
    },

    deleteProduct(product) {
      this.$store.dispatch("cart/deleteProduct", { product });
    },

    handleFavouriteClick(product) {
      product.isFavourite
        ? this.removeFromFavourite(product)
        : this.markAsFavourite(product);
    },

    markAsFavourite(product) {
      this.$store.dispatch("products/markAsFavourite", { product });
    },

    removeFromFavourite(product) {
      this.$store.dispatch("products/removeFromFavourite", { product });
    },
  },
};
</script>

<style scoped>
.cart__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart__product {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  border: 1px solid grey;
}

.cart__submit-btn {
  margin: 20px 0;
}

.cart__product-image {
  width: 200px;
}

.cart__right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
