<template>
  <div class="container">
    <div class="login-panel">
      <Layout>
        <Header>
          <span style="font-size: 20px; padding: 10px">
            注册
          </span>
          <hr>
        </Header>
        <Content>
          <div class="register-input">
            <Input v-model="phone" placeholder="请输入手机号" clearable/>
          </div>
          <div class="register-input">
            <Input v-model="authCode" placeholder="请输入验证码">
              <Button slot="append" type="primary">发送验证码</Button>
            </Input>
          </div>
          <div class="register-input">
            <Input type="password" v-model="password" placeholder="设置密码，长度为6-16位字母数字组合" clearable/>
          </div>
          <div class="register-input">
            <Input type="password" v-model="passwordConfirm" placeholder="确认密码" clearable/>
          </div>
          <div>
            <Button type="primary" style="width: 100%">注册</Button>
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
        phone: '15996294544',
        authCode: 1242,
        password: '12345678',
        passwordConfirm: '12345678',
      }
    },
    name: "Register"
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

  .register-input {
    margin: 10px 0;
  }
</style>
