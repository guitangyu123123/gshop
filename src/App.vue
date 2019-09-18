<template>
  <div id="app">
    <router-view/>
    <!-- v-show控制底部组件隐藏显示 -->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components:{
    FooterGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
