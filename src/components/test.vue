<template>
<div>
  <div class='title'>{{title}}</div>
  
    <button @click="tiao()" >点击</button>
</div>  
</template>
<script>
  export default {
    data () {
      return {
        title: '我是test'
      }
    },
    methods: {
      tiao: function () {
        console.log(this)
        this.$router.push({name: 'Hello', params: { title: this.title }})
      }
    }
  }
</script>
<style scoped>
  div.title {
    font-size: 26px;
    color: #f00;
    height: 30px;
    line-height: 30px;
    margin: 30px auto;
  }
  button {
    width: 200px;
    height: 50px;
    text-align: center; 
    outline: none;
    background-color: #fff;
    border: 1px solid pink;
    color: #daa522;
    cursor: pointer;
  }
</style>