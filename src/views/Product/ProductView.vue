<template>
    <div class="container">
        <div class="row">
            <div class="col-12 ">
                <h3 class="pt-3 ">Our Products</h3>
             <router-link :to="{ name: 'AddProduct' }">
              <button class="btn" style="float:right">Add Product</button>
            </router-link> 
        </div>
        </div>
        <div class="row">
           <div v-for="product of products" :key="product.id"
           class="col-md-6 col-12 pt-3 d-flex">
                <ProductBox :product="product" />
           </div>
        </div>
    </div>
</template>

<script>
import ProductBox from '../../components/ProductBox.vue'
 
export default {
    name :'ProductView',
    props:['products'],
    components:{ ProductBox }
}
</script>
<style scoped>
    .card-img-top {
        object-fit: cover;
    }
</style>