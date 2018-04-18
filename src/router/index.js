import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Classification from '../pages/Classification/Classification'
import Personal from '../pages/Personal/Personal'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import Sort from '../pages/Classification/sort/Sort'
import Brand from '../pages/Classification/Brand/Brand'
import  PhoneLogin from '../pages/Personal/PhoneLogin/PhoneLogin'
import  NormalLogin from '../pages/Personal/NormalLogin/NormalLogin'
import  Login from '../pages/Personal/Login/Login'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:'/msite',
      component:Msite,
       meta:{
        showFooter:true
       }
    },
    {
      path:'/classification',
      component:Classification,
      children:[
        {
          path:'/classification/sort',
          component:Sort,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/classification/brand',
          component:Brand,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/',
          redirect:'/classification/sort'

        },


      ],


    },
    {
      path:'/shoppingcart',
      component:ShoppingCart,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/personal',
      component:Personal,

    },
    {
      path:'/login',
      component:Login,
      children:[
        {
          path:'/login/nomalLogin',
          component:NormalLogin
        },
        {
          path:'/login/phoneLogin',
          component:PhoneLogin
        },
        {
          path:'/',
          redirect:'/login/nomalLogin'
        }
      ]
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
