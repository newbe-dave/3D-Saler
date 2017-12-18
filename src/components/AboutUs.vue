<template>
  <div>
    <my-logo/>
    <div class="about-container">
      <Tabs type="card"  :animated="false">
          <Tab-pane label="关于我们">efasdffffffffffdfasdfasdfasdfasdfa vtrefctercvwryvrtyvetrcrtyv rtyuvretyuvytubtyu</Tab-pane>
          <Tab-pane label="联系我们">231122231123123123123213121231312313221231123512364541236512643451263645123645123645123541236456123564123564123451236512364451236564123</Tab-pane>
          <Tab-pane label="在线帮助">fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</br>ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</Tab-pane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .about-container {
    width: 100%;
    margin: 37px 139px 0px 139px;
  }
</style>

<style>
  .about-container > .ivu-tabs.ivu-tabs-card >.ivu-tabs-bar .ivu-tabs-nav-wrap .ivu-tabs-tab {
    width: 88px;
    height: 24px;
    line-height: 24px;
    margin: 0;
    background: url("../assets/aboutTabBgImg.png") no-repeat;
    background-size:100%;
    border: none;
    border-radius: 0px;
    color: rgb(119, 119, 119);
    font-size: 12px;
    padding: 0px;
  }

  .about-container > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar {
    height: 24px;
    margin-bottom: 32px;
  }

  .about-container > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    height: 24px;
    color: #FFF !important;
  }

  .about-container > .ivu-tabs-card > .ivu-tabs-content {
     text-align: left;
  }
</style>



