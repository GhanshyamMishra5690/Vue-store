<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pt-3">
                
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-6">
                <h4 class="card-title mt-3 text-center">Create Account</h4>
                 <form @submit.prevent="loginUser">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                            </div>
                            <input v-model="email" class="form-control" placeholder="Email address" type="email" />
                        </div> 
                        <span class="text-danger error-span">{{msg.email}}</span>
                    </div>
                    <div class="form-group py-2">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                            </div>
                            <input v-model="password" class="form-control" placeholder="password" type="password" />
                        </div>
                        <span class="text-danger error-span">{{msg.password}}</span>
                    </div>                            
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
                    </div>   
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
     data(){
        return {
            email:'',
            password:'',
            msg: [],
        }
     },
     props:["baseURL"],
     methods:{
        loginUser(){
              const user = {
                email: this.email, 
                password: this.password,
              }
                 axios.post(`${this.baseURL}/user/signIn`, user)
                 .then((res) => {
                    console.log("success :", res);
                    localStorage.setItem("token",  res.data.token);
                    this.$router.replace('/');
                    swal({
                        text: 'User sign-in successfully.',
                        icon:'success'
                    });
                 }).catch((err) => {
                    console.log("error :", err)
                 })
             
        },
        validateEmail(value){
          if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value))
            {
                this.msg['email'] = '';
            } else{
                this.msg['email'] = 'Invalid Email Address';
            } 
        },
        validatePassword(value){
            let difference = 8 - value.length;
                if (value.length<8) {
                    this.msg['password'] = 'Must be 8 characters! '+ difference + ' characters left' ;
                } else {
                    this.msg['password'] = '';
                }
        }  
     },
     watch: {
        email(value){
        // binding this to the data value in the email input
        this.email = value;
        this.validateEmail(value);
        },
        password(value){
        this.password = value;
        this.validatePassword(value);
        }
    }
    
}
</script>
<style scoped>
.error-span{
    float: left !important;
}
</style>