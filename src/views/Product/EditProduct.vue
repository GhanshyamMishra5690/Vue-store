<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4>Edit Product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                 <form v-if="product">
                    <div class="form-row">
                        <label class="mb-0">Category</label>
                        <select class="form-control" v-model="product.categoryId" required>
                            <option v-for="category in categories" :key="category.id"
                                    :value="category.id">{{ category.categoryName }}</option>
                        </select>
                    </div>
                    <div class="form-row mt-2">
                        <label class="mb-0">Name</label>
                        <input type="text" v-model="product.name" class="form-control" >
                    </div>
                    <div class="form-row mt-2">
                        <label class="mb-0">Description</label>
                        <input type="text" v-model="product.description" class="form-control" >
                    </div>
                    <div class="form-row mt-2">
                        <label class="mb-0">Image Url</label>
                        <input type="text"  v-model="product.imageURL" class="form-control" >
                    </div>
                    <div class="form-row mt-2">
                        <label class="mb-0">Price</label>
                        <input type="number" v-model="product.price" class="form-control" >
                    </div>
                    <button type="button" class="btn btn-primary mt-2" @click="editProduct">Update Product</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>

<!--        Form-->
    </div>
</template>
<script>
 import axios from 'axios'
 import swal from 'sweetalert'
     export default {
        data() {
             return {
                product : null,
                id:null
             }
        },
        props: ["baseURL", "categories","products"], 
        methods: {
           async editProduct(){
             await axios.post(`${this.baseURL}product/update/${this.id}`, this.product)
             .then(() => {
                this.$router.push({name :'ProductView'});
                swal({
                    text: "Product updated successfully",
                    icon: "success",
                }) ;  
             }).catch(err => console.log('err', err))
           }   
        } ,
        mounted(){
            this.id = this.$route.params.id;
            this.product = this.products.find(product => product.id = this.id)
        }
        
    }
</script>