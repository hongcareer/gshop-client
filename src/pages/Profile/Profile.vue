<template>
  <div class="forth">
    <Navheader :title="'个人中心'"/>
    <div class="forth-top">
      <div class="my-login" @click="goTo('/login')">
        <img src="./images/shop/2.jpg" alt="" class="headerImg">
        <div class="login">
          <p class="p1">登录/注册</p>
          <p class="p2">
                <span>
                  <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
            <span>暂无绑定手机号</span>
          </p>
        </div>
        <span class="login-go">
              <i class="iconfont icon-jiantou1"></i>
            </span>
      </div>
      <div class="my-things">
        <div class="yu-e">
          <p class="topP">
            <span class="span1">0.00</span>元
          </p>
          <p class="bP">
            我的余额
          </p>
        </div>
        <div class="line">
          <p>|</p>
        </div>
        <div class="you-hui">
          <p class="topP">
            <span class="span1">0</span>个
          </p>
          <p class="bP">
            我的优惠
          </p>
        </div>
        <div class="line">
          <p>|</p>
        </div>
        <div class="ji-fen">
          <p class="topP">
            <span class="span1">0</span>分
          </p>
          <p class="bP">
            我的积分
          </p>
        </div>
      </div>
    </div>
    <ul class="forth-others">
      <li>
            <span class="first">
              <i class="iconfont icon-order-s"></i>
            </span>
        <div class="second">
          <span>我的订单</span>
          <span>
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </li>
      <li>
            <span class="first">
              <i class="iconfont icon-jifen"></i>
            </span>
        <div class="second">
          <span>积分商城</span>
          <span>
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </li>
      <li>
            <span class="first">
              <i class="iconfont icon-vip"></i>
            </span>
        <div class="second">
          <span>硅谷外卖会员卡</span>
          <span>
                <i class="iconfont icon-jiantou1"></i>
              </span>
        </div>
      </li>
    </ul>
    <div class="forth-bottom">
          <span class="first">
              <i class="iconfont icon-fuwu"></i>
            </span>
      <div class="second">
        <span>服务中心</span>
        <span>
                <i class="iconfont icon-jiantou1"></i>
              </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    methods:{
      goTo(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .forth
    width 100%
    margin-top 45px
    overflow: hidden;
    .forth-top
      width 100%
      background-color: #fff
      .my-login
        box-sizing border-box
        margin-top 2px
        padding 22px 10px
        width 100%
        height 112px
        background-color: #02a774
        .headerImg
          float: left;
          height 70px
          width 70px
          border-radius 50%
          margin-right 15px
        .login
          float left
          margin-top: 10px;
          .p1
            font-weight: 700
            font-size: 18px
            color: #fff
          .p2
            font-size: 14px
            color: #fff
            margin-left: -15px;
            span
              &:last-child
                font-size 14px
                margin-left: -13px
              i
                font-size: 30px;
                vertical-align: middle
        .login-go
          margin-right 10px
          margin-top: 24px;
          float: right
          i
            color: #fff
            font-size: 5px

      .my-things
        width 100%
        height 90px
        bottom-border-1px(#ccc)
        .yu-e
          background-color: #fff
          width 122px
          height 90px
          position: relative
          float left
          p
            text-align: center
            &.topP
              margin-top 14px
              .span1
                font-size: 30px;
                color: #f90;
                font-weight: 700;
                line-height: 30px
            &.bP
              margin-top 14px
              font-size: 14px;
              color: #666;
              font-weight: 400;

        .you-hui
          background-color: #fff
          width 122px
          height 90px
          position: relative
          float left
          p
            text-align: center
            &.topP
              margin-top 14px
              .span1
                font-size: 30px;
                color: darkred;
                font-weight: 700;
                line-height: 30px
            &.bP
              margin-top 14px
              font-size: 14px;
              color: #666;
              font-weight: 400;
        .ji-fen
          background-color: #fff
          width 122px
          height 90px
          position: relative
          float left
          p
            text-align: center
            &.topP
              margin-top 14px
              .span1
                font-size: 30px;
                color: green;
                font-weight: 700;
                line-height: 30px
            &.bP
              margin-top 14px
              font-size: 14px;
              color: #666;
              font-weight: 400;

        .line
          float: left;
          width: 2px;
          line-height: 71px;
          p
            font-size: 82px;
            color: #ccc;
            margin-left: -14px;

    .forth-others
      top-border-1px(#ccc)
      margin-top 10px
      padding 0 10px
      height 156px
      width 100%
      background-color: #fff
      li
        &:nth-child(1)
          height 52px
          width 100%
          .first
            float left
            i
              font-size 30px
              color #02a774
              line-height: 48px;
          .second
            padding-top: 17px;
            box-sizing: border-box;
            float left
            width 89%
            height 52px
            span
              &:first-child
                float left
                font-size 16px
                color #333
              &:last-child
                float right
                margin-right 5px
                i
                  font-size: 10px
                  color: #bbb
            bottom-border-1px(#ccc)

        &:nth-child(2)
          height 52px
          width 100%
          .first
            float left
            i
              font-size 30px
              color red
              line-height: 48px;
          .second
            padding-top: 17px;
            box-sizing: border-box;
            float left
            width 89%
            height 52px
            span
              &:first-child
                float left
                font-size 16px
                color #333
              &:last-child
                float right
                margin-right 5px
                i
                  font-size: 10px
                  color: #bbb
            bottom-border-1px(#ccc)
        &:nth-child(3)
          height 52px
          width 100%
          .first
            float left
            i
              font-size 30px
              color #f90
              line-height: 48px;
          .second
            padding-top: 17px;
            box-sizing: border-box;
            float left
            width 89%
            height 52px
            span
              &:first-child
                float left
                font-size 16px
                color #333
              &:last-child
                float right
                margin-right 5px
                i
                  font-size: 10px
                  color: #bbb
            bottom-border-1px(#ccc)
    .forth-bottom
      margin-top: 10px;
      padding 0 10px
      background-color: #fff
      height 52px
      width 100%
      top-border-1px(#ccc)
      .first
        float left
        i
          font-size 30px
          color #02a774
          line-height: 48px;
      .second
        padding-top: 17px;
        box-sizing: border-box;
        float left
        width 89%
        height 52px
        span
          &:first-child
            float left
            font-size 16px
            color #333
          &:last-child
            float right
            margin-right 5px
            i
              font-size: 10px
              color: #bbb

</style>
