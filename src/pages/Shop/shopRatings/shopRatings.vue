<template>
  <div>
    <div class="overview" style="pointer-events: auto;">
      <div class="overview-left">
        <h1 class="score">3.5</h1>
        <div class="title">综合评分</div>
        <div class="rank">高于周边商家69.2%</div>
      </div>
      <div class="overview-right">
        <div class="score-wrapper">
          <span class="title">服务态度</span>
          <div class="star star-36">
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item off"></span>
          </div>
          <span class="score">4.1</span>
        </div>
        <div class="score-wrapper">
          <span class="title">商品评分</span>
          <div class="star star-36">
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item off"></span>
          </div> <span class="score">4.3</span>
        </div>
        <div class="delivery-wrapper">
          <span class="title">送达时间</span>
          <span class="delivery">28分钟</span>
        </div>
      </div>
    </div>
    <div class="ratingselect">
      <div class="rating-type">
      <span class="block">
        全部
        <span class="count">1</span>
      </span>
        <span class="block active">
        推荐
        <span class="count">1</span>
      </span>
        <span class="block">
        吐槽
        <span class="count">0</span>
      </span>
      </div>
      <div class="switch on">
        <span class="iconfont icon-check_circle"></span>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>

  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .ratingselect
    background-color white
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
          color: $green
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
