<template>
  <div id="app" class="app">
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{name:'goods'}">商品</router-link>   
      </div>
      <div class="tab-item">
        <router-link :to="{name:'comment'}">评论</router-link> 
      </div>
      <div class="tab-item">
        <router-link :to="{name:'seller'}">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'

export default {
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.stylus"
a
  text-decoration: none
  font-size: 20px
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

.app
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgb(255,0,0))
    .tab-item
      flex:1
      text-align: center
</style>
