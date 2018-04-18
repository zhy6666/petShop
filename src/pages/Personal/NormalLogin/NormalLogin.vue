<template>
  <div>
    <div class="content">
      <div class="username">
         <span class="icon">
          <i class="iconfont icon-yonghu"></i>
        </span>
        <input type="text" class="write" placeholder="手机号/邮箱/用户名" v-model="name">
      </div>
      <div class="password">
        <span>
             <i class="iconfont icon-mima"></i>
          </span>
        <input type="password" placeholder="输入密码" v-model="pwd">
      </div>
      <div class="forget">
        <a>忘记密码？</a>
      </div>
      <div class="login_btn">
        <a href="javascript:;" @click="login()">登录</a>
      </div>
      <div class="enpty"></div>
      <div class="login_bottom">
        <div class="title">合作网站</div>
        <div class="pay_qq">
          <ul>
            <li>
              <a><img src="../Login/alipay.png"></a>
            </li>
            <li>
              <a><img src="../Login/qqlogin.png"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    width 100%
    height 100%
    .username
      width 100%
      padding 10px 0
      margin-left 10px
      border-bottom 1px solid #e2e2e2
      .icon
        i
          font-size 19px
    .password
      width 100%
      padding 10px 0
      margin-left 10px
      border-bottom 1px solid #e2e2e2
      .icon
        i
          font-size 19px
    .forget
      width 100%
      overflow hidden
      padding 10px 0
      a
        display block
        float right
        color #898989
        font-size 14px
    .login_btn
      width 100%
      margin 0 auto
      a
      display block
      width 90%
      height 38px
      text-align center
      line-height 38px
      border-radius 5px
      background #2ec975
      color #fff
      font-size 15px

    .enpty
      width 100%
      height 120px
    .login_bottom
      width 100%
      height 120px
      .title
        text-align center
        margin-bottom 10px
      .pay_qq
        width 100%
        ul
          li
            width 33.33%
            float left
            a
              display block
              width 100%
              padding 0 20px
              img
                display block
                width 60%



</style>
