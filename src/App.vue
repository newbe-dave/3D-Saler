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
        <div class="logo-container">
          <div class="">
            <div class="layout-header">
              <div class="layout-logo">
                  <img src="./assets/cgTowerLogo.png"/>
              </div>
            </div>
            <div style="height: 100%">
              <div class="navigate">
                <Tabs type="card"  :animated="false">
                    <Tab-pane label="模型下载"><my-download/></Tab-pane>
                    <Tab-pane label="精品推荐"><router-view/></Tab-pane>
                    <Tab-pane label="我的账户">标签三的内容</Tab-pane>
                    <Tab-pane label="关于我们">标签三的内容</Tab-pane>
                    <Tab-pane label="使用条款">标签三的内容</Tab-pane>
                </Tabs>
              </div>
              <div class="layout-copy">
                2017-2018 &copy; CGTower
              </div>
            </div>
          </div>
        </div>
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
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
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
      padding: 6px 0;
      height: 31px;
      overflow: hidden;
      margin: 0 0 0 0
  }
  .layout-ceiling-main{
      float: right;
      margin-right: 300px;
  }
  .layout-ceiling-main a{
      color: #9ba7b5;
  }
  .container {
      background-image: url("./assets/bodyBgImg.png");
      height: 100%;
      overflow:scroll;
  }
  .logo-container {
      height: 100%;
      width: 1350px;
  }
  .layout-logo{
      width: 300px;
      height: 50px;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 15px;
      left: 20px;
  }
  .navigate {
      height: 800px;
  }
  .layout-header{
      height: 80px;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-copy{
      text-align: center;
      /* padding: 10px 0 20px; */
      color: #9ea7b4;
  }

  .navigate > .ivu-tabs-card {
    height: 100%;
  }

  .navigate > .ivu-tabs-card > .ivu-tabs-bar {
    border: none;
  }

  .navigate > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-nav {
    width: 100%;
    display: flex;
  }

  .navigate > .ivu-tabs-card > .ivu-tabs-content {
      height: 100%;
      margin-top: -16px;
      background: url("./assets/naviBgImg.png") no-repeat;
      background-size:100%;
  }

  .navigate > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
      padding: 16px;
  }

  .navigate > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
      border-color: transparent;
      flex-grow: 1;
      background: url("./assets/tabBgImg.png") no-repeat;
      background-size:100%;
  }

  .navigate > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
      border-color: #fff;
      color: #FFF
  }
</style>
