import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Classification from '../pages/Classification/Classification'
import Personal from '../pages/Personal/Personal'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/classification',
      component:Classification
    },
    {
      path:'/shoppingcart',
      component:ShoppingCart
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
