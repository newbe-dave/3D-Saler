<template>
  <div>
      <my-logo></my-logo>
      <div class="goods-list-container">
        <div>
            <div>
                <ul class="tab-lists">
                    <li v-if="currentTab < allTabs" class="tab-list">sha fa</li>
                    <li class="tab-list">zhuo ji</li>
                    <li class="tab-list">yi deng</li>
                    <li class="tab-list">chuang ju</li>
                    <li class="tab-list">deng ju</li>
                    <li class="tab-list">gui lei</li>
                    <li class="tab-list">chen she</li>
                    <li class="tab-list">zhi wu</li>
                    <li class="tab-list">chu wei</li>
                </ul>
            </div>
        </div>
        <div>

        </div>
        <div style="margin: 10px;overflow: hidden">
            <div class="recomend-page-split-container">
                <Page :total="total" :current="1" @on-change="changePage" class-name='page-style'></Page>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 38,
      currentTab: 1,
      allTabs: 9
    };
  }
};
</script>

<style scoped>
.goods-list-container {
  width: 100%;
  display: flex;
  font-family: Arial, "Microsoft YaHei", serif;
  color: rgb(119, 119, 119);
  size: 12px;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}
.recomend-page-split-container {
  display: flex;
  justify-content: center;
}
.tab-lists {
    align-self: flex-start;
  display: flex;
  justify-content: flex-start;
}
.tab-list {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 100px;
  background: url("../assets/listTabBg.png") no-repeat;
  background-size: 100%;
}
.tab-list:hover {
    cursor: pointer;
}
</style>

<style>
.recomend-page-split-container .page-style li {
  background: url("../assets/pageBg.png") no-repeat;
  background-size: 100%;
  min-width: 30px;
  height: 26px;
  border-radius: 0px;
}
.recomend-page-split-container .page-style li a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
}
</style>