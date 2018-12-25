<template>
  <ul class="shop-container" v-if="shops.length>0">
    <li class="shop" v-for="(shop,index) in shops" :key="index" @click="goShop">
      <div class="shop-img"><img :src="baseImgUrl+shop.image_path" alt=""/></div>
      <div class="shop-msg">
        <div class="top">
          <p class="intruction">{{shop.name}}</p>
          <div class="stars">
            <Star :rating="shop.rating"/>
            <span class="score">{{shop.rating}}</span>
            <span class="sell">月售{{shop.recent_order_num}}单</span>
          </div>
          <p class="give">
            <span>¥{{shop.float_minimum_order_amount}}起送</span>
            <span class="elis">/</span>
            <span>送费{{shop.float_delivery_fee}}元</span>
          </p>
        </div>
      </div>
      <div class="shop-others">
        <ul class="sure">
          <li v-for="(support,index) in shop.supports" :key="index">{{support.icon_name}}</li>
        </ul>
        <div  class="bird">{{shop.delivery_mode.text}}</div>&nbsp;
        <div class="on-time">准时达</div>
      </div>
    </li>
  </ul>
  <ul v-else>
    <li>
      <img src="./images/shop_back.svg" />
    </li>
    <li>
      <img src="./images/shop_back.svg" />
    </li>
    <li>
      <img src="./images/shop_back.svg" />
    </li>
    <li>
      <img src="./images/shop_back.svg" />
    </li>
  </ul>

</template>

<script>
  import {mapState} from 'vuex';
  export default {
    data () {
      return {
        baseImgUrl: 'https://fuss10.elemecdn.com'
      }
    },
    computed:{
      // ...mapState(['shops'])
      ...mapState({
        shops:state => state.msite.shops
      })

    },
    methods:{
      goShop(){
        this.$router.push('/shop')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .shop-container
    box-sizing border-box
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
          background-color: dodgerblue
          border: 1px solid dodgerblue
          font-size: 12px;
          border-radius: 2px;
          float left
          margin-top 27px
        .on-time
          float: right
          font-size: 12px
          border-radius: 2px
          color: dodgerblue;
          border: 1px solid dodgerblue;
          margin-top 13px


</style>
