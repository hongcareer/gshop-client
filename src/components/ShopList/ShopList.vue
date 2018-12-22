<template>
  <ul class="shop-container">
    <li class="shop">
      <div class="shop-img"><img src="./images/shop/1.jpg" alt=""/></div>
      <div class="shop-msg">
        <div class="top">
          <p class="intruction">&nbsp;锄禾日当午，汗滴和下土</p>
          <div class="stars">
            <div class="star">
              <span class="on"></span>
              <span class="on"></span>
              <span class="on"></span>
              <span class="on"></span>
              <span class="on"></span>
            </div>
            <span class="score">3.6</span>
            <span class="sell">月售306单</span>
          </div>
          <p class="give">
            <span>¥20起送</span>
            <span class="elis">/</span>
            <span>免配送费</span>
          </p>
        </div>
      </div>
      <div class="shop-others">
        <ul class="sure">
          <li>保</li>
          <li>准</li>
          <li>票</li>
        </ul>
        <div  class="bird">蜂鸟专送</div>&nbsp;
        <div class="on-time">准时达</div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "shoplist"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .shop-container
    width 100%
    padding 0px 10px 0 10px
    .shop
      width 100%
      height 75px
      margin 12px 0 12px 0
      .shop-img
        margin-right 10px
        float left
        img
          height 100%
          width 75px
      .shop-msg
        float left
        width 155px
        height 100%
        .top
          .intruction
            font-size 16px
            font-weight bold
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            max-width 130px
            color #535353
            &::before
              content '品牌'
              display inline-block
              width 28px
              height: 14px
              line-height: 16px
              text-align: center
              background-color orange
              font-size 12px
          .stars
            margin:10px 0px 10px 0
            .star
              float left
              .on
                display inline-block
                width 10px
                height 10px
                bg-image("./images/stars/star24_on")
                background-size 10px 10px
              .off
                display inline-block
                width 10px
                height 10px
                bg-image("./images/stars/star24_off")
                background-size 10px 10px
              .half
                display inline-block
                width 10px
                height 10px
                bg-image("./images/stars/star24_half")
                background-size 10px 10px
            .score
              font-size: 10px
              color: #ff6000
              margin-left: 4px
            .sell
              font-size 10px
              color #666
          .give
            color #666
            font-size 12px
            .elis
              color #ccc
      .shop-others
        float right
        width 100px
        height 100%
        margin-right: 20px
        .sure
          font-size: 10px
          color: #999
          float right
          li
            float left
            border 1px solid gray
            border-radius 2px
            margin-left 2px
        .bird
          color: #fff
          background-color: #02a774
          border: 1px solid #02a774
          font-size: 12px;
          border-radius: 2px;
          float left
          margin-top 27px
        .on-time
          float: right
          font-size: 12px
          border-radius: 2px
          color: #02a774;
          border: 1px solid #02a774;
          margin-top 13px


</style>
