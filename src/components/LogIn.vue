<template>
  <div class="container">
    <div class="login-panel">
      <Layout>
        <Header>
          <span style="font-size: 20px; padding: 10px">
            登录
          </span>
          <hr>
        </Header>
        <Content>
          <div class="login-input">
            <Input v-model="userName" placeholder="请输入手机/邮箱/用户名" clearable/>
          </div>
          <div class="login-input">
            <Input type="password" v-model="password" placeholder="请输入登录密码" clearable/>
          </div>
          <div>
            <Button type="primary" style="width: 100%">登录</Button>
          </div>
        </Content>
        <Footer>

        </Footer>
      </Layout>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: 'dave',
        password: 123456
      }
    },
    name: "LogIn"
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 750px;
    /*height: 100%;*/
    width: 100%;
    margin-top: 60px;
  }

  .login-panel {
    width: 340px;
    height: 340px;
    padding: 20px;
    border: 1px solid black;
  }

  .login-input {
    margin: 10px 0;
  }
</style>
