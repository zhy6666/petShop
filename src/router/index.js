import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Classification from '../pages/Classification/Classification'
import Personal from '../pages/Personal/Personal'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import Sort from '../pages/Classification/sort/Sort'
import Brand from '../pages/Classification/Brand/Brand'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/classification',
      component:Classification,
      children:[
        {
          path:'/classification/sort',
          component:Sort
        },
        {
          path:'/classification/brand',
          component:Brand
        },
        {
          path:'/',
          redirect:'/classification/sort'

        }
      ]
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
