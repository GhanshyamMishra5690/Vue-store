<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
     
      <div class="col-md-4 col-12">
        <img :src="product.imageURL" :alt="product.name" class="img-fluid" />
      </div>
       <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.name }}</h4>
        <h6 class="category font-italic">{{ category.categoryName }}</h6>
        <h6 class="font-weight-bold">$ {{ product.price }}</h6>
        <p>
          {{ product.description }}
        </p>
        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Quantity</span>
            </div>
            <input class="form-control" type="number" v-bind:value="quantity" />
          </div>

          <div class="input-group col-md-3 col-4 p-0">
            <button
              type="button"
              id="add-to-cart-button"
              class="btn"
              @click="addToCart(this.id)"
            >Add to Cart 
              <ion-icon name="cart-outline" v-pre></ion-icon>
            </button>
          </div>
        </div>

        <div class="features pt-3 text-left">
          <h5><strong>Features</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Officia quas, officiis eius magni error magnam voluptatem</li>
            <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
            <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
            <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
          </ul>
        </div>
         <button
          id="wishlist-button"
          class="btn mr-3 p-1 py-0" 
          @click="addToWishList()" >
          
          {{ wishlistString }}
        </button>
        <!-- <button
          id="show-cart-button"
          type="button"
          class="btn mr-3 p-1 py-0"
          @click="listCartItems()"
        >
          Show Cart

          <ion-icon name="cart-outline" v-pre></ion-icon>
        </button> -->
      </div> 
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';
export default {
  data() {
    return {
        product:{},
        category:{},
        quantity:1,
        wishlistString: "Add to Wishlist"
    }
  },
  props:['baseURL','products','categories'],
  methods:{
    addToWishList() {
      if(!this.token){
        swal({
          text: 'please log in to add item in wishlist',
          icon:'error',
        });
        return;
      }
      axios.post(`${this.baseURL}wishlist/add?token=${this.token}`, {
        id: this.product.id
      }).then((res) => {
          if(res.status === 201){
            this.wishlistString = "Added to Wishlist";
            swal({
              text: 'Added to Wishlist',
              icon:'success',
            });
          }
      }).catch((err) => {
        console.log("err = ", err);
      });
    },
    addToCart(){
      if(!this.token){
        swal({
          text: 'please log in to add item in cart',
          icon:'error',
        });
        return;
      }
      axios.post(`${this.baseURL}cart/add?token=${this.token}`, {
        "productId" : this.id,
        "quantity" : this.quantity,
      }).then((res) => {
        if(res.status==201){
          swal({
            text: "Product added to cart",
            icon: 'success',
          });
        }
      }).catch((err) => {
        console.log("err = ", err);
      })
    }
  },
  mounted(){
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categories.find(
      (category) => category.id == this.product.categoryId
    );
    this.token = localStorage.getItem("token");
  }
};
</script>

<style>
.category {
  font-weight: 400;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

#add-to-cart-button {
  background-color: #febd69;
}

#wishlist-button {
  background-color: #b9b9b9;
  border-radius: 0;
}

#show-cart-button {
  background-color: #131921;
  color: white;
  border-radius: 0;
}
</style>