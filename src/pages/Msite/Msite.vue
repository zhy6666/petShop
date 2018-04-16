<template>
  <div>
    <!--首页置顶头部-->
    <div class="appdowimg">
      <a>
        <img class='placed_img' src="./headerAdv.jpg"/>
      </a>
      <img class="closeBtn" src="./closebtn.png"/>
    </div>
    <!--地址栏-->
    <div class="header-search-wrap">
     <div class="header-search">
      <span >
         <span>狗狗|重庆
         <i class="iconfont icon-sanjiao"></i>
         </span>
      </span>
      <span><input type="text" placeholder="搜索商品和品牌"/>
        <span><i class="iconfont icon-search"></i></span>
       </span>
      <span><i class="iconfont icon-xinxi"></i></span>
    </div>
    </div>
    <!--头部导航栏-->
    <div class="header_nav">
      <ul class="nav_ul">
        <li class="nav_li"><a><span>首页</span></a></li>
        <li class="nav_li"><a><span>狗狗主粮</span></a></li>
        <li class="nav_li"><a><span>零食</span></a></li>
        <li class="nav_li"><a><span>医疗保健</span></a></li>
        <li class="nav_li"><a><span>玩具</span></a></li>
      </ul>
    </div>
    <!--首页轮播-->
    <nav>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><a><img src="./slider1.jpg"></a></div>
          <div class="swiper-slide"><a><img src="./slider1.jpg"></a></div>
          <div class="swiper-slide"><a><img src="./slider1.jpg"></a></div>
        </div>

        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    mounted(){
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .appdowimg
   a
    .placed_img
      width 100%
   .closeBtn
     position fixed
     top 20px
     left 2%
     width 20px
     height 20px
     z-index: 100
  .header-search-wrap
   width 100%
   padding 5px 10px
   .header-search
    width 100%
    padding 8px 0px
    span:nth-child(1)
     font-size 14px
     color #898989
    span:nth-child(2)
     position relative
     input
      background #e9e9e9
      font-size 13px
      border-radius 4px
      height 25px
      width 70%
      text-indent 10px
     span
      position absolute
      right 5px
      top 5px


    span:nth-child(3)
     padding-top 2px
  .header_nav
   width 100%
   .nav_ul
    width 448px
    display flex
    .nav_li
     width 80px
     text-align center
     span
      width 64px
      text-align center
      font-size 14px
      height 36px
      line-height 36px
      color #666666


  .swiper-container
    width 100%
    height 150px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
       width 100%
       height 100%
       a
        width 100%
        height 100%
        img
         display inline-block
         width 100%
         height 100%


</style>
