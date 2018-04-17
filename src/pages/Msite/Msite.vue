<template>
   <div class="info" ref="info">
    <div class="home_page">
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
      <span>
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
    <div class="header_nav swiper-container swiper-container-horizontal">
      <ul class="nav_ul swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-2160px, 0px, 0px);">
        <li class="nav_li swiper-slide" v-for="(homedata,index) in homeDatas.menus" :key="index">
          <a>
            <span>{{homedata.menu_name}}</span>
          </a>
        </li>



        <!--<li class="nav_li"><a><span>狗狗主粮</span></a></li>-->
        <!--<li class="nav_li"><a><span>零食</span></a></li>-->
        <!--<li class="nav_li"><a><span>医疗保健</span></a></li>-->
        <!--<li class="nav_li"><a><span>玩具</span></a></li>-->
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
    <!--轮播下面-->
    <div>
      <ul class="bander_ul">
        <li class="bander_li">
          <a>
            <img src="https://img1.epetbar.com/2018-03/28/16/148a8a0c14d85ee6b0229770385d8f9f.jpg@!water">
          </a>
        </li>
        <li class="bander_li">
          <a>
            <img src="https://img1.epetbar.com/2018-02/02/14/9d335309be26f610a043e3bcc1e84b31.jpg@!water">
          </a>
        </li>
        <li class="bander_li">
          <a>
            <img src="https://img1.epetbar.com/2018-02/02/14/f1d45afa77b1844883595df4be0b6b50.jpg@!water">
          </a>
        </li>
        <li class="bander_li">
          <a>
            <img src="https://img1.epetbar.com/2018-02/02/14/55231bc567328e7c57cde19809769d99.jpg@!water">
          </a>
        </li>
        <li class="bander_li">
          <a>
            <img src="https://img1.epetbar.com/2018-02/02/15/59043067d26a2e7a521394c796dfa571.jpg@!water">
          </a>
        </li>
        <li class="bander_li">
          <a>
            <img src="https://img1.epetbar.com/2018-03/28/16/148a8a0c14d85ee6b0229770385d8f9f.jpg@!water">
          </a>
        </li>
        <li class="bander_li">
          <a>
            <img src="https://img1.epetbar.com/2018-02/02/14/9d335309be26f610a043e3bcc1e84b31.jpg@!water">
          </a>
        </li>
        <li class="bander_li">
          <a>
            <img src="https://img1.epetbar.com/2018-02/02/14/f1d45afa77b1844883595df4be0b6b50.jpg@!water">
          </a>
        </li>
        <li class="bander_li">
          <a>
            <img src="https://img1.epetbar.com/2018-02/02/14/55231bc567328e7c57cde19809769d99.jpg@!water">
          </a>
        </li>
        <li class="bander_li">
          <a>
            <img src="https://img1.epetbar.com/2018-02/02/15/59043067d26a2e7a521394c796dfa571.jpg@!water">
          </a>
        </li>
      </ul>
    </div>
    <!--新人专享-->
    <div class="swiper-container2">
       <div class="swiper-wrapper2">
         <div class="swiper-slide2">
             <a href="https://sale.epet.com/m/1706/newWelfare.html?pet_type=dog&amp;fw=0" class="pointer">
               <img src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif" lazy="loaded" style="height: 120px;">
             </a>
           </div>
         </div>
       </div>
    <!-- 每日疯抢 -->
    <div class="home_suprise">
        <!-- 文字区域 -->
        <div class="home_suprise_text">
          <a href="###">
            <img src="./buyeveryday.png">
          </a>
          <span class="home_suprise_text_right">
              <span>本厂结束</span>
              <span>12</span>:
              <span>00</span>
              <span class="home_suprise_text_right_more">
                <img src="./more.png">
              </span>
            </span>
        </div>
        <!-- 图片区域 -->
        <div class="swiper-container swiper-container-horizontal swiper-container-ios" id="suprise_image">
          <div class="swiper-wrapper">
            <!-- 一页显示多张，利用swiper -->
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s1.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s2.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s3.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s4.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s5.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s6.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s7.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s8.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    <!--线-->
    <div style="height: 10px; background-color: #f1f1f1"></div>
    <!--e宠国际-->
    <div class="national_wrap">
      <div class="nation_left">
        <a href="http://wap.epetht.com/guide.html?pet_type=dog&amp;fw=0" class="default_bg"><img name="376x500" src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water" lazy="loaded" style="height: 250px;"></a>
      </div>
      <div class="nation_right">
        <a href="https://wap.epet.com/petschool/SchoolDetail.html?aid=116&amp;fw=0" class="default_bg">
          <img name="374x250" src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water" lazy="loaded" style="height: 125px;">
        </a>
        <a href="https://sale.epet.com/m/mould/fashion/detail.html?id=149&amp;fw=0" class="default_bg">
          <img name="374x250" src="https://img2.epetbar.com/nowater/2018-04/03/09/06273e732679cfcf9e4a5e98d1cc0e8c.jpg@!water" lazy="loaded" style="height: 125px;">
        </a>
      </div>
    </div>
    <!--线-->
    <div style="height: 10px; background-color: #f1f1f1"></div>
    <!--商品预告-->
    <div class="product_will_sell">
      <a>
        <img src="https://img2.epetbar.com/nowater/2018-04/09/09/cb1638292b794ab005e83f38e6c2d7bf.jpg@!water" lazy="loaded" style="height: 160px;">
      </a>
    </div>
    <!--线-->
    <div style="height: 10px; background-color: #f1f1f1"></div>
    <!--超频视频-->
    <div class="rela">
        <div class="leftimg titclass">
          <img src="https://img2.epetbar.com/nowater/2017-12/20/15/38688d8d92c7da7aae64eda8b8bb3a94.jpg"></div> <!----> <div>
        <div>
          <div class="more titclass">
          <a href="https://wap.epet.com/main.html?menu_param=121&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
            <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg"></a>
          </div></div> <!----></div>
      </div>
    <div class="fashion">
      <div>
        <ul class="cmVideoList cmVideoListIndex">
          <li>
            <a href="https://wap.epet.com/article/video/View.html?vid=16&amp;fw=0">
              <div class="relative imgBox overflow" style="height: 210.5px;">
                <img src="https://img1.epetbar.com/2018-04/15/22/822b52d6f9a909d5e427efe9cef5a91e.jpg?x-oss-process=style/waterfall&amp;$1=500" lazy="loaded">
              </div>
              <div class="ft12 c999 pad10 ftc">
                <div class="textover c333">SodaPup 易拉罐漏食狗玩具 口感软弹洁牙护牙</div>
                <div class="text">
                  <i>9274</i><span class="ml10 mr10">|</span>01:29
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--线-->
    <div style="height: 10px; background-color: #f1f1f1"></div>
    <!--愛寵vxingqiu -->
    <div class="aichong">
      <div class="left">
        <a href="https://wap.epet.com/vip/Main.html?fw=0" class="default_bg"><img name="376x199" src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water" lazy="loaded" style="height: 99.5px;"></a>
        <a href="https://wap.epet.com/vip/lottery/Main.html?fw=0" class="default_bg"><img name="376x201" src="https://img2.epetbar.com/nowater/2018-02/05/14/fa66a0c8437b6fb8137c58d9b6ccb1c6.jpg@!water" lazy="loaded" style="height: 100.5px;"></a>
      </div >
      <div class="right">
        <a href="http://wap.epet.com/vip/offline/CityIndex.html?fw=0" class="default_bg"><img name="374x199" src="https://img2.epetbar.com/nowater/2018-02/05/14/9aa462284ec8a79694fa5c9ce062d5ab.jpg@!water" lazy="loaded" style="height: 99.5px;"></a>
        <a href="https://wap.epet.com/vip/taste/Main.html?fw=0" class="default_bg"><img name="374x201" src="https://img2.epetbar.com/nowater/2018-02/05/14/6e3a2cb186e1028d481940c42fb54732.jpg@!water" lazy="loaded" style="height: 100.5px;"></a>
      </div>
    </div>
    <!--线-->
    <div style="height: 10px; background-color: #f1f1f1"></div>
    <!--品牌特賣-->
    <div class="rela">
      <div class="leftimg titclass">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/13/11acf905ca327ed7aae8f9b4851850a0.jpg"></div> <!----> <div>
      <div>
        <div class="more titclass">
          <a href="https://wap.epet.com/v2/brandsale.html?&fw=0">
            <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg"></a>
        </div></div> <!----></div>
    </div>
    <!--品牌特賣下面-->
    <div class="p_p_t_m">
      <ul>
        <li>
          <div class="divimg" style="width: 100%;">
            <a href="http://sale.epetht.com/m/mould/activity/ztMjc3NQ%3D%3D.html?tid=2775&amp;fw=0" class="default_bg">
              <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded" style="height: 160px;">
            </a>
          </div>
          <div style="height: 10px; background-color: #f1f1f1"></div>
        </li>
        <li>
          <div class="divimg" style="width: 100%;">
            <a href="http://sale.epetht.com/m/mould/activity/ztMjc3NQ%3D%3D.html?tid=2775&amp;fw=0" class="default_bg">
              <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded" style="height: 160px;">
            </a>
          </div>
          <div style="height: 10px; background-color: #f1f1f1"></div>
        </li>
        <li>
          <div class="divimg" style="width: 100%;">
            <a href="http://sale.epetht.com/m/mould/activity/ztMjc3NQ%3D%3D.html?tid=2775&amp;fw=0" class="default_bg">
              <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded" style="height: 160px;">
            </a>
          </div>
          <div style="height: 10px; background-color: #f1f1f1"></div>
        </li>
        <li>
          <div class="divimg" style="width: 100%;">
            <a href="http://sale.epetht.com/m/mould/activity/ztMjc3NQ%3D%3D.html?tid=2775&amp;fw=0" class="default_bg">
              <img name="750x320" src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water" lazy="loaded" style="height: 160px;">
            </a>
          </div>
          <div style="height: 10px; background-color: #f1f1f1"></div>
        </li>
      </ul>
    </div>
    <!--萌重説-->
    <div class="rela">
      <div class="leftimg titclass">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/14/77c0017136e51145788b7607a3a0914c.jpg"></div> <!----> <div>
      <div>
        <div class="more titclass">
          <a href="https://wap.epet.com/main.html?menu_param=121&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
            <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg"></a>
        </div></div> <!----></div>
    </div>
    <!--萌重説下面-->
    <div class="fashion">
      <div>
        <ul class="cmVideoList cmVideoListIndex">
          <li>
            <a href="https://wap.epet.com/article/video/View.html?vid=116&fw=0">
              <div class="relative imgBox overflow" style="height: 210.5px;">
                <img src="https://img1.epetbar.com/2017-12/13/16/5837d50b4993a5de2aff2b26ce8cf3d5.png?x-oss-process=style/waterfall&amp;$1=500" lazy="loaded">
              </div>
              <div class="ft12 c999 pad10 ftc">
                <div class="textover c333">第三期-汪星人你的大姨妈来了吗？</div>
                <div class="text">
                  <i>9274</i><span class="ml10 mr10">|</span>01:29
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--线-->
    <div style="height: 10px; background-color: #f1f1f1"></div>
    <!--小剧场-->
    <div class="rela">
      <div class="leftimg titclass">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/13/e747ca83834dbd4d1f9663f11f7bf146.jpg"></div> <!----> <div>
      <div>
        <div class="more titclass">
          <a href="https://wap.epet.com/article/video/List.html?do=AdorableVideo&fw=0">
            <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg"></a>
        </div></div> <!----></div>
    </div>
    <!--小剧场下面-->
    <div class="fashion">
      <div>
        <ul class="cmVideoList cmVideoListIndex">
          <li>
            <a href="https://wap.epet.com/article/video/View.html?vid=171&fw=0">
              <div class="relative imgBox overflow" style="height: 210.5px;">
                <img src="https://img1.epetbar.com/2018-04/10/16/98507cf93340adddcea4a44701891a4b.png?x-oss-process=style/waterfall&amp;$1=500" lazy="loaded">
              </div>
              <div class="ft12 c999 pad10 ftc">
                <div class="textover c333">一个位德艺双馨老艺术家（指的是就我）的日常</div>
                <div class="text">
                  <i>9274</i><span class="ml10 mr10">|</span>01:29
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--底部图片-->
    <div class="currency_ad">
      <div>
        <div class="currency-adcon">
          <div class="divboximg flex" style="background: #f3f4f5">
            <div class="divimg" style="width: 100%; padding-top: 10px;padding-bottom: 5px" >
              <a href="javascript:;" class="default_bg">
                <img name="750x61" src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water" lazy="loaded" style="height: 30.5px; ">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <div class="footer" style="display: block;">
      <div class="ft">
        <span class="bt" title="触屏版">触屏版</span>
        <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
        <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
        <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
      </div>
      <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:80px; font-size:12px">© wap.epet.com 版权：重庆易宠科技有限公司</div>
    </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'  // 引入swiper的js库
  import 'swiper/dist/css/swiper.min.css' // 引入swiper的样式文件
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['homeDatas'])
    },
    mounted() {
      this.$nextTick(() => {
        let swiper = new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          }
        })

        let newSwiper = new Swiper('#suprise_image', {
          slidesPerView: 4,
          spaceBetween: 30,
        })

        this.reascroll = new BScroll(this.$refs.info,{click:true})

      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_page
    width 100%
    height 100%
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
      .nav_ul
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
      height 176px
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
    .bander_ul
     width 100%
     height 198px

     .bander_li
       width 20%
       height 99.36px
       float left
       a
        width 100%
        height 100%
        img
          width 100%
          height 100%
    .new-exclusive
     width 414px
     height 132px
     a
      width 100%
      height 100%
      img
       width 100%
       height 100%
    .swiper-container2
      width 100%
      height 120px
      .swiper-wrapper2
        width 100%
        height 100%
        .swiper-slide2
          width 100%
          height 100%
          a
            width 100%
            height 100%
            img
              display inline-block
              width 100%
              height 100%
    .home_suprise
      width 100%
      height 170px
      .home_suprise_text
        width 100%
        height 40px
        padding 10px
        box-sizing border-box
        >a
          display block
          width 85px
          height 20px
          float left
          >img
            width 100%
            height 100%
        .home_suprise_text_right
          float right
          font-size 14px
          >span:nth-child(2)
            border:1px solid #ddd
            text-align center
          >span:nth-child(3)
            border:1px solid #ddd
            text-align center
          .home_suprise_text_right_more
            >img
              width: 67px
              height: 34px
              vertical-align: middle
      .swiper-container
        width 100%
        height 130px
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            >a
              display block
              width 100%
              height 100%
              >div
                height 84.5px
                width 84.5px
                >img
                  height 100%
                  width 100%

              >p
                text-align center
                line-height 22px
                &.price
                  color red
    .national_wrap
     width 100%
     height 250px
     display flex
     .nation_left
      flex 1
      background pink
      a
       img
        width 100%
     .nation_right
      flex 1
      a
       display block
       background-size: 120px auto;
       overflow: hidden;
       img
        width: 100%;

    .product_will_sell
     width 100%
     height 160px
     img
      width 100%
      height 100%
    .rela
      position relative
      img
        max-width 50%
        max-height 63px
        margin 0 auto
        margin-left  13px
      .more
        width 150px
        text-align  right
        right  0
        position absolute
        top 0px
        img
         width 100px

    .cmVideoList
     li
      a
       display block
       img
        width 100%
        height  100%
       .c999
        color  #999
       .ft12
        font-size  12px
       .pad10
        padding  10px
       .ftc
        text-align center
     .c333
      color  #333
     .textover
      overflow  hidden
      white-space  nowrap
      word-wrap  normal
      text-overflow  ellipsis
     .c333
      color  #333
     .text
      height 25px
      line-height 25px
    .aichong
     width 100%
     height 200px
     display flex
     .left
      flex 1
     .right
      flex 1
     a
      width 100%
      display block
      img
       height 100%

    .p_p_t_m
     width 100%
     height 100%
     a
      display block
      overflow hidden
      img
       width 100%
    .aa
      width 100%
      height 290px
      img
       width 100%
       height 100%
    .footer
     background #fff
     .ft
      text-align center
      padding 15px 0 5px
      .bt
        font-size 13px
        color red
       a
        font-size 13px
</style>
