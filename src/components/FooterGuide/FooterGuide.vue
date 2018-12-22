<template>
  <footer id="footer">
    <a href="javascript:;" class="guide-item" :class="{active:$route.path === '/msite'}" @click="goTo('/msite')" >
      <span><i class="iconfont icon-waimai"></i></span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide-item" :class="{active:$route.path === '/search'}" @click="goTo('/search')">
      <span><i class="iconfont icon-search"></i></span>
      <span>搜索 </span>
    </a>
    <a href="javascript:;" class="guide-item" :class="{active:$route.path === '/order'}" @click="goTo('/order')">
      <span><i class="iconfont icon-dingdan"></i></span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide-item" :class="{active:$route.path === '/profile'}" @click="goTo('/profile')">
      <span><i class="iconfont icon-geren"></i></span>
      <span>个人</span>
    </a>

  </footer>
</template>

<script>
  export default {
    name: "FooterGuide",
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'

  #footer
    top-border-1px(#ccc)
    background-color white
    position fixed
    bottom 0
    left 0
    z-index 1000
    height 50px
    width 100%
    display flex
    .guide-item
      flex 1
      display: flex
      flex-direction column
      align-items center
      span:first-child
        .iconfont
          font-size: 24px
        margin 3px 0
      span:last-child
        font-size: 16px
        margin 3px 0
      &.active
        color #02a774
</style>
