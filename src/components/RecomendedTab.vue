<template>
  <div>
      <my-logo></my-logo>
      <div class="goods-list-container">
        <div class="tabs-container">
            <div>
                <ul class="tab-lists">
                    <li v-if="tabPage === 1 && currentTab !== 1" class="tab-list" @click="changeTab(1)">沙发</li>
                    <li v-if="tabPage === 1 && currentTab === 1" class="tab-list tab-list-active" @click="changeTab(1)">沙发</li>
                    <li v-if="tabPage === 1 && currentTab !== 2" class="tab-list"  @click="changeTab(2)">桌几</li>
                    <li v-if="tabPage === 1 && currentTab === 2" class="tab-list tab-list-active"  @click="changeTab(2)">桌几</li>
                    <li v-if="tabPage === 1 && currentTab !== 3" class="tab-list"  @click="changeTab(3)">椅凳</li>
                    <li v-if="tabPage === 1 && currentTab === 3" class="tab-list tab-list-active"  @click="changeTab(3)">椅凳</li>
                    <li v-if="tabPage === 1 && currentTab !== 4" class="tab-list"  @click="changeTab(4)">床具</li>
                    <li v-if="tabPage === 1 && currentTab === 4" class="tab-list tab-list-active"  @click="changeTab(4)">床具</li>
                    <li v-if="tabPage === 1 && currentTab !== 5" class="tab-list"  @click="changeTab(5)">灯具</li>
                    <li v-if="tabPage === 1 && currentTab === 5" class="tab-list tab-list-active"  @click="changeTab(5)">灯具</li>
                    <li v-if="tabPage === 1 && currentTab !== 6" class="tab-list"  @click="changeTab(6)">柜类</li>
                    <li v-if="tabPage === 1 && currentTab === 6" class="tab-list tab-list-active"  @click="changeTab(6)">柜类</li>
                    <li v-if="tabPage === 1 && currentTab !== 7" class="tab-list"  @click="changeTab(7)">陈设</li>
                    <li v-if="tabPage === 1 && currentTab === 7" class="tab-list tab-list-active"  @click="changeTab(7)">陈设</li>
                    <li v-if="(tabPage === 1 || tabPage === 2) && currentTab !== 8" class="tab-list"  @click="changeTab(8)">植物</li>
                    <li v-if="(tabPage === 1 || tabPage === 2) && currentTab === 8" class="tab-list tab-list-active"  @click="changeTab(8)">植物</li>
                    <li v-if="(tabPage === 1 || tabPage === 2) && currentTab !== 9" class="tab-list"  @click="changeTab(9)">厨卫</li>
                    <li v-if="(tabPage === 1 || tabPage === 2) && currentTab === 9" class="tab-list tab-list-active"  @click="changeTab(9)">厨卫</li>
                </ul>
            </div>
        </div>
        <div class="carouses-container">
          <Carousel v-model="value1">
            <template v-for="items in goodsList">
              <CarouselItem>
                <div class="goods-list-carouse">
                  <my-resourceCntr v-for="item in items"/>
                </div>
              </CarouselItem>
            </template>
          </Carousel>
        </div>
        <!-- <div style="margin: 10px;overflow: hidden">
            <div class="recomend-page-split-container">
                <Page :total="total" :current="1" @on-change="changePage" class-name='page-style'></Page>
            </div>
        </div> -->
    </div>
  </div>
</template>

<script>
const goodsType = {
  1: "sha fa",
  2: 'chu ju'
};

export default {
  data() {
    return {
      total: 38,
      currentTab: 1,
      tabPosition: 1,
      allTabs: 9,
      tabsToShow: 9,
      value1: 0,
      goodsList: []
    };
  },
  methods: {
    changeTab(pos) {
      if (pos === this.currentTab) {
        return;
      } else if (pos === this.allTabs) {
        this.currentTab = pos;
      } else {
        this.currentTab = pos;
        this.tabPosition = this.currentTab;
      }
    },
    searchGoods(type) {
      this.$http("/api/searchRecomendedGoods/" + type).then(response => {
        let tmp = _.groupBy(response.data, (key, value) => {
          return Math.floor(key / 8);
        });

        _.reduce(tmp, (result, value, key) => {
          return result.push(value);
        }, this.goodsList);
      }).catch(err => {
        alert("call: " + err);
      });
    }
  },
  mounted() {
    this.searchGoods(goodsType[this.currentTab] || "sha fa");
  },
  computed: {
    tabPage() {
      let tabPage;
      if (this.tabPosition < this.tabsToShow) {
        tabPage = 1;
      } else {
        tabPage =
          Math.floor(
            (this.tabPosition - this.tabsToShow) / (this.tabsToShow - 2) + 1
          ) + 1;
      }
      return tabPage;
    }
  },
  watch: {
    currentTab: function(val) {
      var type = goodsType[val];
      this.searchGoods(type);
    }
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
  margin-top: 20px;
}
.tabs-container {
  align-self: flex-start;
}
.recomend-page-split-container {
  display: flex;
  justify-content: center;
}
.tab-lists {
  width: 100%;
  margin: 0px 139px;
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
.tab-list-active {
  color: rgb(255, 255, 255);
}
.carouses-container {
  width: 1072px;
  height: 560px;
}
.goods-list-carouse {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
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