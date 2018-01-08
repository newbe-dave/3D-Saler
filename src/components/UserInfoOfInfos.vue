<template>
  <div class="user-info-container">
      <div class="info-user">
          <div class="info-user-line">
              <div class="info-user-line-word">
                  <span>{{userName}}，您好！</span>
              </div>
              <div class="info-button">
                  <span>普通会员</span>
              </div>
          </div>
          <div class="info-user-line">
              <div class="info-user-line-word">
                  <span>金点余额：{{remains}}金点</span>
              </div>
              <div class="info-button">
                  <span>充值</span>
              </div>
          </div>
      </div>
      <div class="info-detail">
          <span>您的ID是: {{userId}}</span>
          <span>注册时间: {{signUpTime}}</span>
          <span>最近登录时间: {{signInTime}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "CG TOWER",
      remains: 2,
      userId: "0000001",
      signUpTime: new Date(),
      signInTime: new Date()
    };
  }
};
</script>

<style scoped>
.user-info-container {
  font-family: "宋体";
  color: rgb(25, 105, 130);
  size: 12px;
}
.info-user {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}
.info-user-line {
  display: flex;
  /* justify-content: space-between; */
}
.info-user-line-word {
  width: 294px;
}
.info-button {
  display: flex;
  justify-content: center;
  width: 120px;
  height: 26px;
  line-height: 26px;
  background: url("../assets/infoTypeBg.png") no-repeat;
  background-size: 100%;
  color: rgb(119, 119, 119);
  margin-bottom: 8px;
  font-family: "宋体";
  color: rgb(255, 255, 255);
  size: 12px;
}
.info-detail {
  display: flex;
  flex-direction: column;
}
</style>

