<template>
  <div class="ratingselect">
    <div class="rating-type">
      <span class="block" @click="changeSelectType(2)" :class="{active:selectType === 2}">
        全部<span class="count">{{ratings.length}}</span>
      </span>
      <span class="block" @click="changeSelectType(0)" :class="{active:selectType === 0}">
        推荐<span class="count">{{satisfied.length}}</span>
      </span>
      <span class="block" @click="changeSelectType(1)" :class="{active:selectType === 1}">
        吐槽<span class="count">{{nagtive.length}}</span>
      </span>
    </div>
    <div class="switch" :class="{on:onlyText}">
      <span class="iconfont icon-check_circle" @click="toggleShowText"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props:{
      selectType:Number,
      onlyText:Boolean,
      toggleShowText:Function,
      changeSelectType:Function
    },
    computed:{
      ...mapState({
        ratings:state => state.shop.ratings
      }),
      satisfied(){
        return this.ratings.filter((rating,index)=>{
          return rating.rateType === 0
        })
      },
      nagtive(){
        return this.ratings.filter((rating,index)=>{
          return rating.rateType === 1
        })
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        line-height: 16px
        border-radius: 1px
        font-size: 12px
        color: rgb(77, 85, 93)
        background: rgba(77, 85, 93, 0.2)
        &.active
          background: dodgerblue
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      color: rgb(147, 153, 159)
      font-size: 0
      &.on
        .icon-check_circle
          color: dodgerblue
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        display: inline-block
        vertical-align: top
        font-size: 12px
</style>

