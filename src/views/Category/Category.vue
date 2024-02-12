<template>
  <div class="container">
     <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Categories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn" style="float:right">Add Category</button>
        </router-link>
      </div>
    </div>
     <div class="row">
         <div  v-for="category of categories.slice(0, 50)" :key="category.id" 
         class="col-xl-4 col-md-6 col-12 pt-3 d-flex" >
        <CategoryBox :category="category"> </CategoryBox>
      </div>
     </div>
  </div>
</template>

<script> 
import CategoryBox from "../../components/Category/CategoryBox.vue"
export default {
  name: 'CategoryVue',
  props:['categories'],
  components:{
    CategoryBox
  }  
   
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

#add-category {
  float: right;
  font-weight: 500;
}
</style>