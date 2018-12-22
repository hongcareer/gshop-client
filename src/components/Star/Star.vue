<template>
  <div class="star">
    <span v-for="(a,index) in creatOn" :key="index" :class="a"></span>
  </div>
</template>

<script>
  export default {
    name: "Star",
    props:{
      rating:Number
    },
    computed:{
      //on
      creatOn(){
        let sarr=[];
        let score = this.rating
        let OnNumber = Math.floor(score);
        for (let i = 0; i < OnNumber; i++) {
          sarr.push('on')
        };
        let half= score*10-OnNumber*10
        if(half>5){
          sarr.push('half')
        }
        while(sarr.length<5){
          sarr.push('off')
        }
        return sarr;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .star
    float left
    .on
      display inline-block
      width 10px
      height 10px
      bg-image("images/stars/star24_on")
      background-size 10px 10px
    .off
      display inline-block
      width 10px
      height 10px
      bg-image("images/stars/star24_off")
      background-size 10px 10px
    .half
      display inline-block
      width 10px
      height 10px
      bg-image("images/stars/star24_half")
      background-size 10px 10px
</style>
