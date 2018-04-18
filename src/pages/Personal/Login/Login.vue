<template>
  <div class="login_wrap">
    <div class="header_wrap">
      <div class="back_regi">
         <span class="back" @click="$router.replace('/msite')">
         <i class="iconfont icon-xiangzuo"></i>
         </span>
        <span>注册</span>
      </div>

      <div class="header_bottom">
        <ul>
          <li>
            <router-link to="/login/nomalLogin">普通登录</router-link>
            <i v-show="$route.path==='/login/nomalLogin'"></i>
          </li>
          <li>
            <router-link to="/login/phoneLogin">手机动态密码登录</router-link>
            <i v-show="$route.path==='/login/phoneLogin'"></i>
          </li>
        </ul>
      </div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import NormalLogin from '../NormalLogin/NormalLogin'
  import {reqLogin} from "../../../api";
  export default {
    data(){
      return{
        name:'',
        pwd:''
      }
    },
    methods:{
      async login(){
        const {name,pwd}=this
         const result = await reqLogin({name,pwd})
       //  this.$store.dispatch('recordLogin',{name,pwd})
      }
    },
    components:{NormalLogin}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .login_wrap
    width 100%
    height 100%
    .header_wrap
      width 100%
      height 174px
      background-image url("../login-bg.png")
      background-size 100% 100%
      background-repeat no-repeat
      position relative
      .back_regi
        position relative
        overflow  40px
        span:nth-child(1)
          position absolute
          left 10px
          top 10px
          i
            color white
        span:nth-child(2)
          position absolute
          right 10px
          top 10px
          color white

      .header_bottom
        width 100%
        height 44px
        position absolute
        bottom 0
        background rgba(255,255,255,0.5)
        ul
          li
            list-style none
            float left
            width 50%
            line-height 44px
            text-align center
            position relative
            i
              position absolute
              bottom 0px
              left 0
              right 0
              width 0
              height 0
              margin auto
              border-left 10px solid transparent
              border-right 10px solid transparent
              border-bottom 10px solid #fff


</style>
