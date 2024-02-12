import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory'
import EditCategory from '../views/Category/EditCategory'
import Category from '../views/Category/Category'
import ListProducts from '../views/Category/ListProducts'
import ProductView from '../views/Product/ProductView'
import AddProduct from '../views/Product/AddProduct'
import EditProduct from '../views/Product/EditProduct'
import ProductDetails from '../views/Product/ProductDetails'
import WishList from '../views/Product/WishList'
import AdminView from '../views/AdminView'
import SignupView from '../views/SignupView'
import LoginView from '../views/LoginView'
import CartView from '../views/CartView'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/addCategory/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  { 
    path: '/category/show/:id',
    name:'ListProducts',
    component: ListProducts
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView
  },
  {
    path: '/admin/product',
    name: 'ProductView',
    component: ProductView
  },
  {
    path: '/admin/addProduct/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/admin/show/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path:'/wishlist',
    name: 'WishList',
    component:WishList
  },
  {
    path:'/signup',
    name:'SignupView',
    component:SignupView
  },
  {
    path:'/signin',
    name:'LoginView',
    component:LoginView
  },
  {
    path:'/cart',
    name:'CartView',
    component:CartView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
