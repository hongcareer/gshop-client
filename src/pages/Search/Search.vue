<template>
  <div class="search ">
    <Navheader :title="'搜索'"/>
    <input type="text" placeholder="请输入商家进行搜索">
    <button>提交</button>
  </div>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search
    box-sizing border-box
    width 100%
    height 53px
    margin-top 45px
    background-color #fff
    padding 10px
    input
      width 278px
      height 35px
      background-color: #F2F2F2
      float left
      border-radius 1px
      outline none
    button
      float: right
      width 66px
      height 35px
      border-radius 1px
      background-color: #02A774
      font-size 16px
      line-height 23px
      text-align: center
      border: 4px solid #02a774
      color white
      outline none
</style>
