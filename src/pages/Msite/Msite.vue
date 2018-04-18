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
     <div class="header_nav" ref="pics">
      <ul class="nav_ul" ref="ul">
        <li class="nav_li" v-for="(menu,index) in homeDatas.menus" :key="index">
          <a>
            <span :class="menu.menu_name=='首页'?'titletextcolor':''">{{menu.menu_name}}</span>
            <i v-show="menu.menu_name=='首页'"></i>
          </a>
        </li>
      </ul>
    </div>
    <!--导航栏底部线-->
    <div></div>
    <!--首页轮播-->
    <nav>
      <div class="swiper-container" id="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  v-for="(dog_bannersrc,index) in homeDatas.dog_banner" :key="index">
            <a><img :src="dog_bannersrc"/></a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--轮播下面-->
    <div>
      <ul class="bander_ul">
        <li class="bander_li" v-for="(menusrc,index) in homeDatas.menu_list" :key="index">
          <a>
            <img :src="menusrc">
          </a>
        </li>

      </ul>
    </div>
    <!--新人专享-->
    <div class="swiper-container2">
       <div class="swiper-wrapper2">
         <div class="swiper-slide2">
             <a href="https://sale.epet.com/m/1706/newWelfare.html?pet_type=dog&amp;fw=0" class="pointer">
               <img :src="homeDatas.xinrenzhuanxiang" lazy="loaded" style="height: 120px;">
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
              <span>本场结束</span>
              <span>{{homeDatas.meirifengqiang.jieshushijian1}}</span>:
              <span>{{homeDatas.meirifengqiang.jieshushijian2}}</span>
              <span class="home_suprise_text_right_more">
                <img src="./more.png">
              </span>
            </span>
        </div>
        <!-- 图片区域 -->
        <div class="swiper-container swiper-container-horizontal swiper-container-ios" id="suprise_image">
          <div class="swiper-wrapper">
            <!-- 一页显示多张，利用swiper -->
            <div class="swiper-slide" v-for="(item,index) in homeDatas.meirifengqiang.foods">
              <a href="###">
                <div>
                  <img :src="item.imgurl">
                </div>
                <p class="price">￥{{item.price}}</p>
                <p style="font-size:8px; color:#999">省{{item.sheng}}</p>
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
        <a href="http://wap.epetht.com/guide.html?pet_type=dog&amp;fw=0" class="default_bg">
          <img name="376x500" :src="homeDatas.special_list[0]" lazy="loaded" style="height: 250px;"></a>
      </div>
      <div class="nation_right">
        <a href="https://wap.epet.com/petschool/SchoolDetail.html?aid=116&amp;fw=0" class="default_bg">
          <img name="374x250" :src="homeDatas.special_list[1]" lazy="loaded" style="height: 125px;">
        </a>
        <a href="https://sale.epet.com/m/mould/fashion/detail.html?id=149&amp;fw=0" class="default_bg">
          <img name="374x250" :src="homeDatas.special_list[2]" lazy="loaded" style="height: 125px;">
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
          <img :src="homeDatas.chaopinshipin.chaopinimg"></div> <!----> <div>
        <div>
          <div class="more titclass">
          <a href="https://wap.epet.com/main.html?menu_param=121&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
            <img :src="homeDatas.chaopinshipin.gengduoimg"></a>
          </div></div> <!----></div>
      </div>
    <div class="fashion">
      <div>
        <ul class="cmVideoList cmVideoListIndex">
          <li>
            <a :href="homeDatas.chaopinshipin.href">
              <div class="relative imgBox overflow" style="height: 210.5px;">
                <img :src="homeDatas.chaopinshipin.shipinimg" lazy="loaded">
              </div>
              <div class="ft12 c999 pad10 ftc">
                <div class="textover c333">{{homeDatas.chaopinshipin.miaoshu}}</div>
                <div class="text">
                  <i>{{homeDatas.chaopinshipin.leftmiaoshu}}</i><span class="ml10 mr10">|</span>{{homeDatas.chaopinshipin.rightmiaoshu}}
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--线-->
    <div style="height: 10px; background-color: #f1f1f1"></div>
    <!--爱宠星球 -->
    <div class="aichong">
      <div class="left">
        <a href="https://wap.epet.com/vip/Main.html?fw=0" class="default_bg">
          <img name="376x199" :src="homeDatas.vip_services[0]" lazy="loaded" style="height: 99.5px;"></a>
        <a href="https://wap.epet.com/vip/lottery/Main.html?fw=0" class="default_bg">
          <img name="376x201" :src="homeDatas.vip_services[1]" lazy="loaded" style="height: 100.5px;"></a>
      </div >
      <div class="right">
        <a href="http://wap.epet.com/vip/offline/CityIndex.html?fw=0" class="default_bg">
          <img name="374x199" :src="homeDatas.vip_services[2]" lazy="loaded" style="height: 99.5px;"></a>
        <a href="https://wap.epet.com/vip/taste/Main.html?fw=0" class="default_bg">
          <img name="374x201" :src="homeDatas.vip_services[3]" lazy="loaded" style="height: 100.5px;"></a>
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
        <li  v-for="(pinpaisrc,index) in homeDatas.pinpai_temai_list" :key="index">
          <div class="divimg" style="width: 100%;">
            <a :href="pinpaisrc.href" class="default_bg">
              <img name="750x320" :src="pinpaisrc.imgurl" lazy="loaded" style="height: 160px;">
            </a>
          </div>
          <div style="height: 10px; background-color: #f1f1f1"></div>
        </li>
      </ul>
    </div>
    <!--萌重説-->
    <div class="rela">
      <div class="leftimg titclass">
        <img :src="homeDatas.mengchongshuo.mengchongshuoimg"></div> <!----> <div>
      <div>
        <div class="more titclass">
          <a :href="homeDatas.mengchongshuo.href">
            <img :src="homeDatas.mengchongshuo.gengduoimg"></a>
        </div></div> <!----></div>
    </div>
    <!--萌重説下面-->
    <div class="fashion">
      <div>
        <ul class="cmVideoList cmVideoListIndex">
          <li>
            <a href="https://wap.epet.com/article/video/View.html?vid=116&fw=0">
              <div class="relative imgBox overflow" style="height: 210.5px;">
                <img :src="homeDatas.mengchongshuo.shipinimg" lazy="loaded">
              </div>
              <div class="ft12 c999 pad10 ftc">
                <div class="textover c333">{{homeDatas.mengchongshuo.miaoshu}}</div>
                <div class="text">
                  <i>{{homeDatas.mengchongshuo.leftmiaoshu}}</i><span class="ml10 mr10">|</span>{{homeDatas.mengchongshuo.rightmiaoshu}}
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
        <img :src="homeDatas.xiaojuchang.xiaojuchangimg"></div> <!----> <div>
      <div>
        <div class="more titclass">
          <a href="https://wap.epet.com/article/video/List.html?do=AdorableVideo&fw=0">
            <img :src="homeDatas.xiaojuchang.gengduoimg"></a>
        </div></div> <!----></div>
    </div>
    <!--小剧场下面-->
    <div class="fashion">
      <div>
        <ul class="cmVideoList cmVideoListIndex">
          <li>
            <a :href="homeDatas.xiaojuchang.href">
              <div class="relative imgBox overflow" style="height: 210.5px;">
                <img :src="homeDatas.xiaojuchang.shipinimg" lazy="loaded">
              </div>
              <div class="ft12 c999 pad10 ftc">
                <div class="textover c333">{{homeDatas.xiaojuchang.miaoshu}}</div>
                <div class="text">
                  <i>{{homeDatas.xiaojuchang.leftmiaoshu}}</i><span class="ml10 mr10">|</span>{{homeDatas.xiaojuchang.rightmiaoshu}}
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
      this.$store.dispatch('getHomeData', () => {
        this.$nextTick(() => {

          //轮播横向滑动
          let swiper = new Swiper('#swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay: {
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            },
            effect : 'cube',
          })

          //每日疯抢横向滑动
          let newSwiper = new Swiper('#suprise_image', {
            slidesPerView: 4,
            spaceBetween: 30,
          })

          //首页垂直滑动
          // this.reascroll = new BScroll(this.$refs.info,{click:true})

          //导航横向设置滑动
          this.picsScroll = new BScroll(this.$refs.pics, {click: true, scrollX: true})
          // 指定ul的样式宽度(前提是有数据)
          this.homeDatas.menus && this.setUlWidth()
        })
      })
    },

    methods: {
      /*
         导航设置宽度
        */
      setUlWidth () {
        const ul = this.$refs.ul
        const liWidth = 75
        const space = 6
        const size = this.homeDatas.menus.length
        ul.style.width = (liWidth + space) * size - space + 'px'
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_page
    width 100%
    height 100%
    .appdowimg
      position relative
      a
        .placed_img
          width 100%
      .closeBtn
        position absolute
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
      width 100%
      overflow: hidden
      white-space: nowrap
      .nav_ul
        font-size: 0
        .nav_li
          position relative
          display: inline-block
          width: 75px
          height: 36px
          text-align center
          span
            font-size 14px
            height 34px
            width 100%
            line-height 36px
            color #666666
          .titletextcolor
            color #e73f85
          i
            position absolute
            bottom 1px
            left -12%
            width 33.59px
            margin-left 29px
            background #e73f85
            height 2px
    .swiper-container
      width 100%
      height 160px
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
     height 180px
     .bander_li
       width 20%
       height 90px
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
     height 253px
     display flex
     .nation_left
      flex 1
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
