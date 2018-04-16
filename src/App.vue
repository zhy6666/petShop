<template>
  <div>
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import Msite from './pages/Msite/Msite'
  import Classification from './pages/Classification/Classification'
  import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
  import Personal from './pages/Personal/Personal'
export default {
    components:{FooterGuide,Msite,Classification,ShoppingCart,Personal}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
