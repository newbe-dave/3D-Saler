<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header :style="{position: 'fixed', width: '100%', zIndex: '1'}">
          <Navigation></Navigation>
        </Header>
        <Content :style="{display: 'flex', justifyContent: 'center'}">
          <ContentList></ContentList>
        </Content>
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
      </Layout>
    </div>
  </div>
</template>

<script>
  import ContentList from './components/ContentList'

  export default {
    data () {
      return {
        contentStyle : {
          margin: '88px 20px',
          background: '#fff',
          minHeight: '500px',
          border: "1px solid #000"
        }
      }
    },
    name: "app",
    methods: {
      login() {
        let request = {
          name: "gxd",
          password: "888888"
        };

        this.$http
          .post("/auth/user", request)
          .then((res) => {
            if (res.data.success) {
              console.log("aaa");
              sessionStorage.setItem("cg-token", res.data.token);
              console.log(this);
              this.$http.defaults.headers.common["Authorization"] =
                "Bearer " + res.data.token;
              // this.$Message.message({
              //   type: "success",
              //   message: "login successfully"
              // });
              this.$Message.info("login successfully");
            } else {
              this.$Message.error(res.data.info);
              sessionStorage.setItem("cg-token", null);
            }
          })
          .catch((err) => {
            console.log(err);
            this.$Message.error("request error");
            sessionStorage.setItem("cg-token", null);
          });
      }
    },
    components: {
      ContentList
    }
  };
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-footer-center{
    text-align: center;
  }
  .layout-content{
    margin: 88px 20px 0;
    background: #fff;
    minHeight: 2000px
  }
</style>
<!--<style scoped>-->
<!--.layout {-->
<!--display: flex;-->
<!--flex-direction: column;-->
<!--justify-content: center;-->
<!--/*border: 1px solid #d7dde4;*/-->
<!--height: 100%;-->
<!--}-->
<!--.layout-ceiling {-->
<!--background: rgb(29, 29, 29);-->
<!--display: flex;-->
<!--justify-content: space-around;-->
<!--}-->
<!--.layout-ceiling-logo {-->
<!--flex-grow: 1;-->
<!--}-->
<!--.layout-ceiling-navi {-->
<!--flex-grow: 1;-->
<!--}-->
<!--.layout-ceiling-login {-->
<!--display: flex;-->
<!--flex-grow: 1;-->
<!--justify-content: center;-->
<!--/*margin-right: 300px;*/-->
<!--}-->
<!--.layout-ceiling-main a {-->
<!--color: #9ba7b5;-->
<!--}-->
<!--.container {-->
<!--width: 960px;-->
<!--/*height: 10000px;*/-->
<!--align-self: center;-->
<!--/*background-image: url("./assets/bodyBgImg.png");*/-->
<!--height: 100%;-->
<!--display: flex;-->
<!--/*justify-content: center;*/-->
<!--flex-direction: column;-->
<!--/*overflow:scroll;*/-->
<!--}-->
<!--.layout-footer {-->
<!--height: 100px;-->
<!--}-->
<!--.logo-container {-->
<!--height: 100%;-->
<!--width: 1350px;-->
<!--}-->
<!--.layout-logo {-->
<!--width: 300px;-->
<!--height: 50px;-->
<!--}-->
<!--.layout-header {-->
<!--height: 80px;-->
<!--box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);-->
<!--}-->
<!--.layout-copy {-->
<!--text-align: center;-->
<!--/* padding: 10px 0 20px; */-->
<!--color: #9ea7b4;-->
<!--}-->
<!--</style>-->


<style>
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
</style>
