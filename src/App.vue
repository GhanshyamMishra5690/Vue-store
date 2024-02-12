<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NavbarVue />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view
    v-if="categories && products" style="min-height: 60vh"
    :baseURL="baseURL"
    :categories="categories"
    :products="products"
    @fetchData="fetchData"
  ></router-view>
  <FooterVue />
</template>

<script>
import NavbarVue from "./components/NavbarVue.vue";
import FooterVue from "./components/FooterVue.vue";
import axios from "axios";
export default {
  components: { NavbarVue, FooterVue },
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com/",
      products: null,
      categories: null,
    };
  },
  methods: {
    async fetchData() {
      //api call category data
      await axios
        .get(this.baseURL + "category/")
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => console.log(err));

      //api call products data
      await axios
        .get(this.baseURL + "product/")
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.fetchData();
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
