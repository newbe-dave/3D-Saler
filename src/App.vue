<template>
  <div id="app">
    <div class="layout">
      <div class="layout-ceiling">
        <div class="layout-ceiling-main">
          <a href="#">登录</a> |
          <a href="#">注册</a> |
        </div>
      </div> 
      <div class="container">
        <router-view/>
      </div>
      <div class="layout-copy">
        2017-2018 &copy; CGTower
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  .layout{
      border: 1px solid #d7dde4;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      height: 100%;
  }
  .layout-ceiling{
      background-image: url("./assets/headerBgImg.png");
      padding: 10px 0;
      height: 31px;
      overflow: hidden;
      margin-bottom: 0px
  }
  .layout-ceiling-main{
      float: right;
      margin-right: 15px;
  }
  .layout-ceiling-main a{
      color: #9ba7b5;
  }
  .container {
    background-image: url("./assets/bodyBgImg.png");
  }
</style>
