<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4>Add New Product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    <div class="form-row">
                        <label class="mb-0">Category</label>
                        <select class="form-control" v-model="formData.categoryId" required>
                            <option v-for="category in categories" :key="category.id"
                                    :value="category.id">{{ category.categoryName }}</option>
                        </select>
                    </div>
                    <div class="form-row mt-2">
                        <label class="mb-0">Name</label>
                        <input type="text" v-model="formData.name" class="form-control" >
                    </div>
                    <div class="form-row mt-2">
                        <label class="mb-0">Description</label>
                        <input type="text" v-model="formData.description" class="form-control" >
                    </div>
                    <div class="form-row mt-2">
                        <label class="mb-0">Image Url</label>
                        <input type="text"  v-model="formData.imageURL" class="form-control" >
                    </div>
                    <div class="form-row mt-2">
                        <label class="mb-0">Price</label>
                        <input type="number" v-model="formData.price" class="form-control" >
                    </div>
                    <button type="button" class="btn btn-primary mt-2" @click="addProduct">Add Product</button>
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
        props: ["baseURL", "categories"],
        data() {
            return {
                formData :{
                     id: null,
                    categoryId: null,
                    name: null,
                    description: null,
                    imageURL: null,
                    price: null
                } 
            }
        },
        methods: {
            addProduct() {
                const newProduct = {
                    categoryId: this.formData.categoryId,
                    description: this.formData.description,
                    name: this.formData.name,
                    imageURL: this.formData.imageURL,
                    price: this.formData.price
                };

                axios.post(this.baseURL+"product/add", newProduct)
                .then(() => {
                    this.resetFormData();
                    this.$router.push({name: 'ProductView'});
                    swal({
                        text: "Product added",
                        icon: "success"
                    })
                }).catch((err)=> {
                    console.log("err", err);
                }) 
            },
            resetFormData() { 
            for (const key in this.formData) {
                this.formData[key] = '';
            }
        }
        } 
        
    }
</script>