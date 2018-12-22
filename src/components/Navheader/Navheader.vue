<template>
  <header id="header">
    <slot name="left"></slot>
    <span class="header-title">{{title?title:'正在定位...'}}</span>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    name: "Navheader",
    props:{
      title:String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  #header
    position: fixed
    top 0
    left 0
    z-index 700
    height:45px
    width 100%
    background-color #02a774
    line-height 45px
    text-align: center
    color white
    .header-search
      position: absolute
      top 0px
      left 25px
      i
        font-size 24px
    .header-title
      display: inline-block
      font-size 20px
      white-space nowrap
      max-width 200px
      overflow hidden
      text-overflow ellipsis
    .header-login
      position: absolute
      top 0px
      right 15px
      font-size 14px

</style>

