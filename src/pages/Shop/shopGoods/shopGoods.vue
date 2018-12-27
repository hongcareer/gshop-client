<template>
  <div>
    <div>
      <div class="goods">
        <div class="menu-wrapper">
          <ul ref="leftFood">
            <li class="menu-item" v-for="(good,index) in goods" :key='index'
                :class="{current:currentIndex === index}" @click="clickFoods(index)">
              <span class="text bottom-border-1px">
                 <img class="icon" :src="good.icon" v-if="good.icon"/>
                {{good.name}}
              </span>
            </li>
          </ul>
        </div>
        <div class="foods-wrapper">
          <ul ref="rightFood">
            <li class="food-list-hook" v-for="(good,index) in goods" :key="index">
              <h1 class="title">{{good.name}}</h1>
              <ul>
                <li class="food-item bottom-border-1px"
                    v-for="(food,index) in good.foods"
                    :key="index" @click.stop="toggleShow(food)">
                  <div class="icon">
                    <img width="57" height="57" :src="food.icon">
                  </div>
                  <div class="content">
                    <h2 class="name">{{food.name}}</h2>
                    <p class="desc">{{food.description}}</p>
                    <div class="extra">
                      <span class="count">月售{{food.sellCount}}份</span>
                      <span>好评率{{food.rating}}%</span></div>
                    <div class="price">
                      <span class="now">￥{{food.price}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                      <CartControl :food="food"/>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ShopCart />
      </div>
      <Food ref=food :food="food"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  import Food from'../../../components/Food/Food';
  import ShopCart from '../../../components/ShopCart/ShopCart'
  export default {
    name: "shopGoods",
    data(){
      return {
        tops:[],
        scrollY:0,
        food:{}
      }
    },
    mounted(){
      this.$store.dispatch('getShopGoods',()=>{
        this.$nextTick(()=>{
          //页面更新完成之后，获取scroll的值
          this._initScroll()
          //页面更新完成之后，获取top值
          this._initTop()
        })
      })
    },
    computed:{
      ...mapState({
        goods:state => state.shop.goods
      }),
      currentIndex(){
        const {tops,scrollY} = this;
        const index = tops.findIndex((top,index)=>{
          return scrollY>=top && scrollY<tops[index+1]
        });
        //scrollToElement(el, time, offsetX, offsetY, easing)，滚动到指定的元素
        //currentIndex的显示时机是页面初始化渲染及发生变化的时候，
        //在页面初始化渲染的时候，this.leftScroll还没有被实例，数据更新完成之后才有
        if(index != this.index && this.leftScroll){
          //上次的index和当前index不相等的时候，滚动到当前的元素
          this.index = index
          let el = this.$refs.leftFood.children[index];
          this.leftScroll.scrollToElement(el,500)
        }
        return index;
      }
    },
    methods:{
      //获取scroll的值，实现滚动
      _initScroll(){
        let leftScroll = new BScroll('.menu-wrapper',{
          click:true
        });
        let rightScroll = new BScroll('.foods-wrapper',{
          click:true,
          probeType:1
        });
        this.rightScroll = rightScroll;
        this.leftScroll = leftScroll;

        //数据更新之后,获取scrollY的值,监视右侧滚动的距离
        this.rightScroll.on('scroll',({x,y})=>{
          this.scrollY = Math.abs(y)
        })
        //监视滚动结束的值
        rightScroll.on('scrollEnd',({x,y})=>{
          this.scrollY = Math.abs(y)
        })

      },
      _initTop(){
        //获取每一个li的高度到数组中
        const lis = this.$refs.rightFood.children
        let ItemHeight = 0;
        this.tops.push(ItemHeight)
        Array.prototype.slice.call(lis).forEach((li,index)=>{
          ItemHeight += li.offsetHeight;
          this.tops.push(ItemHeight)
        });

      },
      clickFoods(index){
        //点击左侧的分类栏，右侧的食品联动
        let y = this.tops[index];
        this.scrollY = y;
        //数据更新之后,获取scrollY的值,监视右侧滚动的距离
        this.rightScroll.scrollTo(0,-y,1000)
      },
      //点击食物是否显示食物详情
      toggleShow(food){
        this.food = food;
        this.$refs.food.toggleFoodShow(food)
      }
    },
    components:{
      Food,
      ShopCart
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 225px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: dodgerblue
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px

</style>
