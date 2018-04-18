<template>
  <div>
    <header class="head">
      <div class="sort">
        <router-link to="/classification/sort">分类</router-link>
      </div>
      <div class="brand">
        <router-link to="/classification/brand">品牌</router-link>
      </div>

    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.head
  width 100%
  height 40px
  position fixed
  top 0
  left 0
  right 0
  z-index 11
  background #fff
  border-bottom 1px solid #cbcbcb
  div
   width 50%
   height 40px
   line-height 40px
   float left
   box-sizing border-box
   a
    font-weight 700
    padding 10px 5px
    &.router-link-active
     color #ed4044
     border-bottom 2px solid #ed4044
  .sort
    text-align right
    padding-right 5%
  .brand
    text-align left
    padding-left 5%
</style>
