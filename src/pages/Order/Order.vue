<template>
  <div class="third">
    <Navheader :title="'订单列表'"/>
    <div class="order-list">
      <img src="./images/others/person.png" alt="">
      <h2>登录后查看订单</h2>
      <button>立即登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Order"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .third
    overflow hidden
    margin-top:45px
    width 100%
    height 270px
    .order-list
      width 225px
      height 270px
      position: absolute
      left: 50%
      top: 50%
      transform translateX(-50%) translateY(-50%)
      text-align: center
      img
        height 225px
        width 225px
      h2
        padding: 10px 0;
        font-size: 17px;
        color: #6a6a6a
      button
        display: inline-block;
        background: #02a774;
        font-size: 14px;
        color: #fff;
        border: 0;
        outline: none;
        border-radius: 5px;
        padding: 10px 20px;
</style>
