<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Edit Category </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
         <form v-if="category">
          <div class="form-row ">
            <label>Category Name</label>
            <input type="text" class="form-control" v-model="category.categoryName"  required/>
          </div>
          <div class="form-row mt-3">
            <label>Description</label>
            <textarea type="text" class="form-control" v-model="category.description" required/>
          </div>
          <div class="form-row mt-3">
            <label>Image</label>
            <input type="text" class="form-control" v-model="category.imageUrl" />
          </div>
          <button type="button" class="btn btn-primary" @click="editCategory">
            Submit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script> 
import axios from 'axios'
import swal from 'sweetalert';
// import swal from 'sweetAlert'
export default {
   data() {
        return {
            category: null,
            id: null
        }
    },
  props: ["baseURL", "categories"],
  methods: {
    async editCategory(){
      delete this.category["products"];
      console.log(this.category);
      await axios.post(`${this.baseURL}category/update/${this.id}`, this.category)
      .then(() => {
        this.$emit("fetchData");
        swal({
            text: "Category updated successfully",
            icon: "success",
          }).then(() => {
            this.$router.push({name :'Category'});
          });
  

      }).catch(err => console.log('err', err))

     },
     resetFormData() { 
        for (const key in this.category) {
            this.category[key] = '';
        }
      }
  },
  mounted(){
    this.id = this.$route.params.id;
    this.category = this.categories.find(category => category.id == this.id)

  } 
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>