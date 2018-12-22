<template>
  <div class="Msite">
    <Navheader :title="'啦啦啦啦啦啦斤斤计较军军军斤斤计较'">
      <span class="header-search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header-login" slot="right">
        登录|注册
      </span>
    </Navheader>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <ul class="swiper-slide">
          <li>
            <img src="./images/nav/1.jpg" alt="">
            <span>美食</span>
          </li>
          <li>
            <img src="./images/nav/2.jpg" alt="">
            <span>美食</span>
          </li>
          <li>
            <img src="./images/nav/3.jpg" alt="">
            <span>美食</span>
          </li>
          <li>
            <img src="./images/nav/4.jpg" alt="">
            <span>美食</span>
          </li>
          <li>
            <img src="./images/nav/5.jpg" alt="">
            <span>美食</span>
          </li>
          <li>
            <img src="./images/nav/6.jpg" alt="">
            <span>美食</span>
          </li>
          <li>
            <img src="./images/nav/7.jpg" alt="">
            <span>美食</span>
          </li>
          <li>
            <img src="./images/nav/8.jpg" alt="">
            <span>美食</span>
          </li>
        </ul>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--main-->
    <div class="main">
      <div class="nearly">
        <span><i class="iconfont icon-xuanxiang"></i></span>
        <span>附近商家</span>
      </div>
      <ShopList />
    </div>
  </div>
</template>

<script>
  import ShopList from '../../components/ShopList/ShopList'
  export default {
    name: "Msite",
    components:{
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Msite
    width:100%
    margin-top 45px
    .swiper-container
      height:200px
      width: 100%
      background-color white
      z-index 100
      .swiper-wrapper
        clearFix()
        height:201px
        width: 100%
        .swiper-slide
          height 100%
          li
            float left
            width:25%
            display flex
            flex-direction column
            align-items center
            img
              height 50px
              width 50px
              margin: 8px 0
            span
              font-size 14px
              margin: 5px 0
      .swiper-pagination-bullet-active
        background-color: #02a774
    .main
      top-border-1px(#ccc)
      background-color white
      width 100%
      margin-top 10px
      z-index 900
      .nearly
        box-sizing border-box
        padding 10px 0 0 10px
        height 30px
        span
          font-size 14px
          color #999
          i
            font-size 16px
            color #999

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
            .bird
              color: #fff
              background-color: #02a774
              border: 1px solid #02a774
              font-size: 12px;
              border-radius: 2px;
              float left
              margin-top 29px
            .on-time
              float: right
              font-size: 12px
              border-radius: 2px
              color: #02a774;
              border: 1px solid #02a774;
              margin-top 13px


</style>
