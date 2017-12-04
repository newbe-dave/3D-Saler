<template>
    <div class="tab-container">
        <div class="tab-logo-container">
          <img src="../assets/logoSmall.png" alt="">
          <span>welcome to CG Tower</span>
        </div>
        <div class="tab-opt-container">
          <div class="tab-download-ID">
            <div class="tab-download-ID-title">
              <img src="../assets/refresh.png" alt="">
              <span>ID</span>
            </div>
            <div class="tab-download-ID-body">
              <div class="downloadSourceSelector">
                <i-select :model.sync="selectedType">
                  <i-option v-for= "item in downloadSources" :value="item.value">{{ item.label }}</i-option>
                </i-select>
              </div>
              <div>
                <input type="text">
              </div>
              <div>
                download
              </div>
            </div>  
          </div>
          <div class="tab-download-link">
            <div class="tab-download-ID-title">
              <img src="../assets/refresh.png" alt="">
              <span>HtperLink</span>
            </div>
            <div class="tab-download-ID-body">
              <div>
                <input type="text">
              </div>
            </div>
          </div>
          <div>
            <div>
              <span>recomend</span>
            </div>
            <div>
              list
            </div>
          </div>
          <div>
            <p>blablablabla</p>
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
    }
    .tab-logo-container {
      display: flex;
    }
    .tab-logo-container > span {
      align-items: center;
    }
    .tab-opt-container {
      align-self: center;
      width: 600px;
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
      width: 100px;
      /* background: url("../assets/downloadTypeBgImg.png") no-repeat;
      background-size: 100%; */
    }

    .downloadSourceSelector > .ivu-select.ivu-select-single.ivu-select-visible div {
      width: 200px;
    }

    .downloadSourceSelector .ivu-select-dropdown {
      background-color: none;
    }

    .downloadSourceSelector .ivu-select-dropdown > .ivu-select-dropdown-list li {
      background: url("../assets/downloadTypeBgImg.png") no-repeat;
      background-size: 100%;
      /* color: #FFF; */
    }

    .downloadSourceSelector .ivu-select .ivu-select-selection {
      background: url("../assets/downloadTypeBgImg.png") no-repeat;
      background-size: 100%;
      color: #000;
    }
</style>

