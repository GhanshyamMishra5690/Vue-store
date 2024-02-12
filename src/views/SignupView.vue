<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pt-3">
                
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-6">
                <h4 class="card-title mt-3 text-center">Create Account</h4>
                 <form @submit.prevent="signUp">
                    <div class="form-group mb-2">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                            </div>
                            <input v-model="formData.email" class="form-control" placeholder="Email address" type="email" /> 
                        </div> 
                        <!-- <span v-if="submitted && !formData.lastName" class="text-danger error-span " >Email is required.</span> -->
                    </div> <!-- form-group// --> 
                    <div class="form-row ">
                        <div class="col-6">
                            <div class="form-group ">
                                <div class="input-group">
                                     <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                                    </div>
                                    <input v-model="formData.firstName" class="form-control" placeholder="Full Name" type="text" />    
                                </div> 
                                <!-- <span v-if="!formData.firstName"  class="text-danger error-span">firstName is required.</span> -->
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <div class="input-group">
                                    <input v-model="formData.lastName" class="form-control" placeholder="Last Name" type="text" />
                                </div>
                                <!-- <span v-if="!formData.lastName" class="text-danger error-span">lastName is required.</span> -->
                            </div>
                        </div>
                    </div>
                    <div class="form-group input-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                            </div>
                            <input  v-model="formData.password" class="form-control" placeholder="password" type="password" />
                        </div>
                        <!-- <span v-if="!formData.password" class="text-danger error-span">Password is required.</span> -->
                    </div> 
                    <div class="form-group ">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                            </div>
                            <input v-model="formData.confirm_password"  class="form-control" placeholder="Confirm password" type="password" />
                        </div>
                        <!-- <span v-if="!formData.password" class="text-danger error-span">Username is required.</span> -->
                    </div>                              
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
                    </div> <!-- form-group// -->      
                    <p class="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
    props:["baseURL"],
    data(){
        return {
           formData :{
            firstName:'',
            lastName:'',
            password:'',
            confirm_password:'',
           }
        }
    } ,
    methods:{
       async signUp(){
           if(this.formData.password == this.formData.confirm_password){
              const user = {
                email: this.formData.email,
                firstName: this.formData.firstName,
                lastName: this.formData.lastName,
                password: this.formData.password,
              }
              console.log("user", user);
              await axios.post(`${this.baseURL}user/signup`, user)
              .then(() => {
                  this.$router.replace('/');
                swal({
                    text: 'User signup successfully. please login',
                    icon:'success'
                });
              }).catch(err => console.log("error", err));
           } else {
            swal({
                    text: 'Password not match.',
                    icon:'error'
                });
           }
        } 
    }
}
</script>
<style scoped>
.error-span{
    float: left !important;
}
</style>