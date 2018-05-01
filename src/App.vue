<template>
  <div id="app">
    <div class="layout">
      <div class="layout-ceiling">
        <div class="layout-ceiling-main">
          <a href="#" @click="login">登录</a> |
          <a href="#">注册</a> |
        </div>
      </div>
      <div class="container">
        <Navigation></Navigation>
        <router-view/>
      </div>
      <div class="layout-ceiling">
        <div class="layout-ceiling-main">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  }
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #d7dde4;
  height: 100%;
}
.layout-ceiling {
  background-image: url("./assets/headerBgImg.png");
  padding: 6px 0;
  height: 31px;
  overflow: hidden;
  margin: 0 0 0 0;
}
.layout-ceiling-main {
  float: right;
  margin-right: 300px;
}
.layout-ceiling-main a {
  color: #9ba7b5;
}
.container {
  width: 960px;
  align-self: center;
  /*background-image: url("./assets/bodyBgImg.png");*/
  height: 100%;
  display: flex;
  /*justify-content: center;*/
  flex-direction: column;
}
.logo-container {
  height: 100%;
  width: 1350px;
}
.layout-logo {
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
  position: relative;
}
.layout-header {
  height: 80px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-copy {
  text-align: center;
  /* padding: 10px 0 20px; */
  color: #9ea7b4;
}
</style>


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
