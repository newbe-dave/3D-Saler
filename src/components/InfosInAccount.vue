<template>
  <div>
    <div class="info-container">
      <Tabs type="card"  :animated="false">
          <Tab-pane label="基础信息"><my-user/></Tab-pane>
          <Tab-pane label="充值中心"><my-recharge/></Tab-pane>
          <Tab-pane label="下载记录"><my-downloadRec/></Tab-pane>
          <Tab-pane label="收藏记录"><my-favouriteRec/></Tab-pane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .info-container {
    margin-right: 139px;
  }
</style>

<style>

  .info-container > .ivu-tabs.ivu-tabs-card >.ivu-tabs-bar .ivu-tabs-nav-wrap .ivu-tabs-tab {
    width: 102px;
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

  .info-container > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    height: 24px;
    color: #FFF !important;
  }

  .info-container > .ivu-tabs-card > .ivu-tabs-content {
     text-align: left;
  }
</style>



