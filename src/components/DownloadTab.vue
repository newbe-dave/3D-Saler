<template>
    <div class="tab-container">
        <div class="tab-logo-container">
          <img src="../assets/logoSmall.png" alt="">
          <span>欢迎来到CG TOWER模型素材下载！</span>
        </div>
        <div class="tab-opt-container">
          <div class="tab-download-ID">
            <div class="tab-download-ID-title">
              <img src="../assets/refresh.png" alt="">
              <span>模型素材ID：</span>
            </div>
            <div class="tab-download-ID-body">
              <div class="downloadSourceSelector">
                <i-select :model.sync="selectedType">
                  <i-option v-for= "item in downloadSources" :value="item.value">{{ item.label }}</i-option>
                </i-select>
              </div>
              <div class="id-input-container">
                <input class="id-input" type="text">
              </div>
              <div class="downloadBtn">
                下载
              </div>
            </div>  
          </div>
          <div class="tab-download-link">
            <div class="tab-download-ID-title">
              <img src="../assets/refresh.png" alt="">
              <span>模型下载链接：</span>
            </div>
            <div class="tab-download-ID-body">
              <div class="link-input-container">
                <input class="id-input" type="text">
              </div>
            </div>
          </div>
          <div class="recomendedGoods-container">
            <div class="recomended-title">
              <span>精品推荐：</span>
            </div>
            <div class="goods-list-container">
              list
            </div>
          </div>
          <div class="cg-instruction">
            <p>本站是针对设计、建筑、艺术、软件行业的网络收藏网站，用户可以添加自己喜欢的CG网站博客、微博、空间的链接，通过审核就可以放在页面上，用户也可以评价本站服务。</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      selectedType: '',
      downloadSources: [{
        value: 'cgTower',
        label: 'CG TOWER'
      }, {
        value: '3d66',
        label: '3D66'
      }, {
        value: 'om',
        label: 'OM'
      }, {
        value: 'justEasy',
        label: 'Justeasy'
      }]
    }
  },
  methods: {
    showServer: function () {
      this.$http.get('/api/hello/id=123').then((res) => {
        this.msg = res.data
      }).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>

<style scoped>
    .tab-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-family: "宋体";
      color: rgb(25, 105, 130);
      size: 12px;
    }
    .tab-logo-container {
      display: flex;
    }
    .tab-logo-container > span {
      align-items: center;
      height: 24px;
      line-height: 24px;
    }
    .tab-opt-container {
      align-self: center;
      width: 900px;
    }
    .tab-download-ID {
      margin-top: 102px;
      margin-bottom: 58px;
    }
    .tab-download-link {
      margin-bottom: 58px;
    }
    .tab-download-ID-title {
      display: flex;
      justify-content: flex-start;
      margin-left: -16px;
    }
    .tab-download-ID-body {
      display: flex;
      flex-direction: row;
    }
    .downloadSourceSelector {
      width: 145px;
      height: 30px;
    }
    .id-input-container {
      flex-grow: 1;
      height: 35px;
      margin: 0 8px;
    }
    .link-input-container {
      flex-grow: 1;
      height: 35px;
    }
    .id-input {
      background: url("../assets/downloadInputBgImg.png");
      background-size: 100%;
      width: 100%;
      height: 35px;
      color: #FFF;
      border: 0;
    }
    .downloadBtn {
      background: url("../assets/downloadBtnBgImg.png");
      background-size: 100%;
      width: 145px;
      height: 35px;
      line-height: 35px;
      color: #FFF;
    }
    .recomendedGoods-container {
      margin-top: 80px;
    }
    .recomended-title {
      display: flex;
      justify-content: flex-start;
    }
    .goods-list-container {
      width: 100%;
      height: 324px;
      border: 1px solid #000;
    }
    .cg-instruction {
      margin-top: 10px;
      word-wrap:break-word;
    }
</style>

<style>
    .downloadSourceSelector .ivu-select-dropdown > .ivu-select-dropdown-list li {
      background: url("../assets/downloadSourceBgImg.png");
      background-size: 100%;
      color: #FFF;
      height: 26px;
    }
    .downloadSourceSelector > .ivu-select > .ivu-select-dropdown {
      padding: 0;
      margin: 0;
      border-radius: 0;
    }
    .downloadSourceSelector > .ivu-select > .ivu-select-selection {
      background: url("../assets/downloadSourceBgImg.png");
      background-size: 100%;
      background-color: none;
      border-radius: 0;
      border:  none;
      height: 35px;
    }
    .downloadSourceSelector > .ivu-select > .ivu-select-selection > .ivu-select-placeholder {
      height: 35px;
      line-height: 35px;
      color: #FFF;
    }

    .downloadSourceSelector > .ivu-select > .ivu-select-selection > .ivu-select-selected-value {
      color: #ffffff;
    }
</style>