<template>
    <div class="container">
        <div class="">
        <div class="layout-header">
            <div class="layout-logo">
                <img src="../assets/cgTowerLogo.png"/>
            </div>
        </div>
        <div style="height: 100%">
            <div class="navigate">

            </div>
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
    .container {
        background-image: url("../assets/bodyBgImg.png");
        height: 200px;
        margin: 0 15% 0 300px;
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
        height: 100px;
        background: #fff 
    }
    .layout-header{
        height: 80px;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>

