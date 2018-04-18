<template>
  <div class="sort_wrap">
    <div class="sort_left" ref="menuWrapper">
      <ul>
        <li class="menu-item"  v-for="(item,index) in classafiySort" :key="index"  :class="{current:currentIndex===index}"   @click="changeItem(index)">
          <span class="text border-1px">
            {{item.name}}
          </span>
      </li>
      </ul>
    </div>
    <div class="sort_right" ref="foodsWrapper">
      <ul>
        <li class="sort_li" v-for="(cate,index2) in classafiySort[currentIndex].cate_list" :key="index2">
          <div class="li_top">
            <span>{{cate.title}}</span>
            <span v-if="index===0">全部商品</span>
          </div>
          <div class="li_bottom">
            <ul class="bottom_ul">
              <li v-for="(a,index) in cate.list" :key="index">
                <img v-if='index2===0' :src="a.photo"/>
                <img v-else :src="a.logo"/>
                <span>{{a.name}}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        currentIndex:0
      }
    },
    mounted(){
      this.$store.dispatch('getClassafiySort',()=> {
        this.$nextTick(() => {

          new BScroll(this.$refs.menuWrapper, {
            click: true
          })

          new BScroll(this.$refs.foodsWrapper, {
            click: true
          })
        })

      })
    },
    computed:{
      ...mapState(['classafiySort'])
    },
    methods:{
      changeItem(index){
         this.currentIndex=index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
    .sort_wrap
      width 100%
      display flex
      position absolute
      top 40px
      left 0
      bottom 50px
      .sort_left
        flex 0 0 80px
        width 80px
        background #f3f5f7
        .menu-item
          display table
          height: 54px
          width: 56px
          padding 0 12px
          line-height 14px
          &.current
            background: #fff
            color red
          .text
            display: table-cell
            width: 56px
            vertical-align: middle
            bottom-border-1px(#f0f0f0)
            font-size: 12px
      .sort_right
        height 100%
        flex 1
        ul
         .sort_li
          height 100%
          .li_top
           position relative
           height 25px
           background #f1f1f1
           span
            font-size 12px
           span:nth-child(1)
            position absolute
            margin-left 8px
            left  0
            padding-top 8px
           span:nth-child(2)
            position absolute
            padding-top 8px
            margin-right 8px
            right 0
          .li_bottom
           .bottom_ul
            overflow hidden
            width 100%
            li
             width 33.33%
             float left
             text-align center
             img
              padding-top  20px
              width 90px
              height 90px
             span
              width 100%
              height 20px
              line-height 20px
              font-size 10px

</style>
