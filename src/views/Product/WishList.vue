.
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Your Wishlist</h4>
      </div>
    </div>
    <div class="row">
        <div v-for="product of products" :key="product.id" class="col-12  col-md-6 col-xl-4 py-2
        justify-content-round d-flex">
            <ProductBox :product="product"></ProductBox>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductBox from '../../components/ProductBox.vue'
export default {
    components:{ProductBox},
    data(){
        return {
            token:null,
            products: null
        }
    },
    props:["baseURL"],
    methods:{
        fetchWishList(){
            axios.get(`${this.baseURL}wishlist/${this.token}`)
            .then((res) => {
                this.products = res.data;
            }).catch((err) => {
                console.log("Error:", err);
            })
        }
    },
    mounted() {
        this.token = localStorage.getItem("token");
        this.fetchWishList();
    }
}
</script>
