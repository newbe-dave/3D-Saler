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
              <div>selector</div>
              <div>
                <input type="text">
              </div>
              <div>
                download
              </div>
            </div>  
          </div>
          <div class="tab-download-link">
            <div class="tab-download-link-title">
              <img src="../assets/refresh.png" alt="">
              <span>HtperLink</span>
            </div>
            <div class="tab-download-link-body">
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
      title: 'Welcome to Your Vue.js App'
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
      justify-content: center;
    }
    .tab-logo-container {
      display: flex;
      align-self: flex-start;
    }

    .tab-logo-container > span {
      align-items: center;
    }
</style>

