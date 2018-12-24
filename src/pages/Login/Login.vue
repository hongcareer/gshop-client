<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=!loginWay">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled='!getRightPhone || allSec > 0' class="get_verification"
                      :class="{on:getRightPhone}" @click.prevent="getCode">
                      {{allSec > 0?`已发送(${allSec})s`:'获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input :type="isShowPsw?'password':'text'" maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button " @click="isShowPsw =!isShowPsw" :class="isShowPsw?'on':'off'">
                  <div class="switch_circle"  :class="{right: isShowPsw}"></div>
                  <span class="switch_text">{{isShowPsw?'abc':''}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" ref='captcha' src="http://localhost:5000/captcha" alt="captcha" @click="getCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
  import {sendCode,reqUserLogin,reqSmsLogin} from '../../Api/index';
  import { MessageBox,Toast } from 'mint-ui';
  let result;
  export default {
    data(){
      return {
        loginWay:false,//true 短信登录 false 密码登录
        allSec:0,
        isShowPsw:true,
        name:'',//用户名
        phone:'',//电话号码
        code:'',//验证码
        pwd:'',//密码
        captcha:'',//图形验证码
      }
    },
    computed:{
      getRightPhone(){
        return (/^1[34578]\d{9}$/.test(this.phone))
      }
    },
    methods:{
      getCode(){
        this.allSec = 30;
        let intervalId = setInterval(()=>{
          this.allSec--
          console.log(this.allSec)
          if(this.allSec <= 0){
            clearInterval(intervalId)
          };
        },1000);
        sendCode(this.phone)
      },
      async login(){
        let {phone,code,name,pwd,captcha} = this;
        if(this.loginWay){
          result = await reqSmsLogin({phone,code})
          if(!/^1[34578]\d{9}$/.test(this.phone)){
            result.msg = '请输入正确的电话号码';
            Toast(result.msg)
          }else if(!code){
            result.msg = '请输入正确的密码';
            Toast(result.msg)
          }
        }else{
          result = await reqUserLogin({name,pwd,captcha})
          if(!name){
            result.msg = '请输入用户名';
            Toast(result.msg)
          }else if(!pwd){
            result.msg = '请输入密码';
            Toast(result.msg)
          }else if(!captcha){
            result.msg = '请输入验证码';
            Toast(result.msg)
          }
        };
        //提示错误信息
        //同步保存用户的登录名信息和电话信息到state中
        this.$store.dispatch('saveUser',result);
        //跳转的个人信息页面
        this.$router.replace('/profile')
      },
      getCaptcha(){
        this.$refs.captcha.src='http://localhost:5000/captcha?timer'+Date.now()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 667px
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.on
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(27px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
