<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/msite'}" @click="go('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/classification'}" @click="go('/classification')">
    <span class="item_icon">
      <i class="iconfont icon-search"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shoppingCart'}" @click="go('/shoppingCart')">
    <span class="item_icon">
      <i class="iconfont icon-dingdan"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/personal'}" @click="go('/personal')">
    <span class="item_icon">
      <i class="iconfont icon-geren"></i>
    </span>
      <span>我的E宠</span>
    </a>
  </footer>

</template>

<script>
  export default {
    methods:{
     go(path){
       this.$router.replace(path)
     }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    width 100%
    height 50px
    background-color #fff
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
