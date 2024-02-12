<template>
   <div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-10 col-md-offset-1">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th class="text-center">Price</th>
                        <!-- <th class="text-center">Total</th> -->
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cartItem in cartItems" :key="cartItem.id">
                        <td class="col-sm-8 col-md-6">
                        <div class="media">
                            <a class="thumbnail pull-left" href="#"> <img class="media-object"  :src="cartItem.product.imageURL" style="width: 150px; height: 100px;"> </a>
                            <div class="media-body">
                                <h5 class="media-heading text-left pl-3">{{ cartItem.product.name }}</h5>
                                <!-- <h5 class="media-heading"> by <a href="#">Brand name</a></h5> -->
                                <!-- <span class="text-left pl-3">Status: </span>
                                <span class="text-success"><strong>In Stock</strong></span> -->
                            </div>
                        </div></td>
                        <td class="col-sm-1 col-md-1" style="text-align: center">
                            <p class="mb-0">{{ cartItem.quantity }}</p>
                        </td>
                        <td class="col-sm-1 col-md-1 text-center"><strong>$ {{ cartItem.product.price }} per unit</strong></td>
                        <!-- <td class="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td> -->
                        <td class="col-sm-1 col-md-1">
                        <button type="button" class="btn btn-danger">
                            <span class="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td> 
                        <td><h3>Total</h3></td>
                        <td class="text-right"><h3><strong>${{ totalCost }}</strong></h3></td>
                    </tr> 
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cartItems: [],
      token: null,
      totalCost: 0,
    };
  },
  props: ["baseURL"],
  methods: {
    // fetch All items in cart
    listCartItems() {
      axios
        .get(`${this.baseURL}cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data;
          this.cartItems = result.cartItems;
          this.totalCost = result.totalCost;
        })
        .catch((err) => console.log("err", err));
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartItems();
  },
};
</script>