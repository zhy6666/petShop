<template>
  <div class="brand_wrap">
      <ul >
        <li class="brand_li" v-for="(item,index) in classafiyBrand" :key="index">
          <div class="li_content">
            <div class="tjpp">
             <span>-推荐品牌-</span>
           </div>
            <div class="content">
                <ul>
                  <li v-for="(c,index) in item.list" :key="index">
                    <div>
                      <img :src="c.logo">
                    </div>
                    <p style="font-size: 13px ;margin-top: 8px;color:#333">{{c.name}}</p>
                    <p style="font-size: 12px ;color: #999;margin-top: 8px">{{c.address}}</p>
                  </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['classafiyBrand'])
    },
    mounted(){
      this.$store.dispatch('getClassafiyBrand',()=>{
        console.log(this.classafiyBrand);
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.brand_wrap
 width 100%
 position absolute
 top 40px
 left 0
 bottom 50px
 .brand_li
  width 100%
  .li_content
   width 100%
   .tjpp
    height 20px
    background white
    padding-top 20px
    text-align center
    span
     font-size 14px
     color: #999
   .content
    width 100%
    ul
     overflow hidden
     li
      width 33.33%
      float left
      margin-top 15px
      text-align center
      img
       max-width: 90%;
       margin: 10px auto 0;
       height: 40px;
       right: 0;
       border: 1px solid #e2e2e2;
       padding 20px 10px 10px

</style>
