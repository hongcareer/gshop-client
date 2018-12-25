<template>
  <div class="cartcontrol">
    <transition name="add">
      <div class="iconfont icon-remove_circle_outline" @click="changeFoodCount(false)" v-if="food.count>0"></div>
    </transition>
    <div class="cart-count" v-if="food.count>0">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click="changeFoodCount(true)"></div>
  </div>
</template>

<script>
  export default {
    name: "CartControl",
    props:{
      food:Object
    },
    methods:{
      changeFoodCount(isAdd){
        this.$store.dispatch('getFoodCount',{food:this.food,isAdd})
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color dodgerblue
      &.add-enter-active,&.add-leave-active
        transition all 0.5s
      &.add-enter,&.add-leave-to
        transform translateX(35px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color dodgerblue
</style>

