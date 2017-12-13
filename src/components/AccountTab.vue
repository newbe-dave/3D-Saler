<template>
  <div >
    <my-logo/>
    <div class="tab-opt-container">
      <div class="personalInfo">
        <div>
          <img src="../assets/accountLogo.png" alt="">
        </div>
        <div class="input-type-container">
          <div class="one-input-type">
            <div class="input-content">
              <div class="type-logo">
                <img src="../assets/person.png" alt=""/>
              </div>
              <input type="text"/>
            </div>
          </div>
          <div>
            <img src="../assets/hori-line.png" alt="">
          </div>
          <div class="one-input-type">
            <div class="input-content">
              <div class="type-logo">
                <img src="../assets/phone.png" alt="">
              </div>
              <input type="text">
            </div>
            <div class="change-button">
              <span>修改</span>
            </div>
          </div>
          <div>
            <img src="../assets/hori-line.png" alt="">
          </div>
          <div class="one-input-type">
            <div class="input-content">
              <div class="type-logo">
                <img src="../assets/email.png" alt="">
              </div>
              <input type="text">
            </div>
            <div class="change-button">
              <span>修改</span>
            </div>
          </div>
          <div>
            <img src="../assets/hori-line.png" alt="">
          </div>
          <div class="one-input-type">
            <div class="input-content">
              <div class="type-logo">
                <img src="../assets/pwd.png" alt="">
              </div>
              <input type="text">
            </div>
            <div class="change-button">
              <span>修改</span>
            </div>
          </div>
          <div>
            <img src="../assets/hori-line.png" alt="">
          </div>
        </div>
        <div class="info-type-container">
          <div class="info-type">
            <span>基础信息</span>
          </div>
          <div class="info-type">
            <span>充值中心</span>
          </div>
          <div class="info-type">
            <span>下载记录</span>
          </div>
          <div class="info-type">
            <span>收藏记录</span>
          </div>
        </div>
      </div>
      <div class="mid-line">
        <img src="../assets/ver-line.png"/>
      </div>
      <div class="accountInfo">3</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .tab-opt-container {
    display: flex;
    justify-content: space-between;
    font-family: Arial, 'Microsoft YaHei', serif;
    color: rgb(25, 105, 130);
    size: 12px;
    margin-top: 44px; 
  }
  .personalInfo{
    display: flex;
    flex-direction: column;
    margin-left: 139px;
  }
  .input-type-container {
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
  .one-input-type {
    display: flex;
    height: 54px;;
    align-items: flex-end;
  }
  .input-content {
    display: flex;
    flex: auto;
  }
  .type-logo {
    flex-basis: 30px;
  }
  .input-content input {
    flex: auto;
    border: none;
    background: none;
    height: 26px;;
  }
  .change-button {
    /* display: flex; */
    flex-basis: 60px;
    width: 60px;
    height: 26px;
    background: url("../assets/buttonBg.png") no-repeat;
    background-size: 100%;
    color: rgb(119, 119, 119);
    line-height: 26px;
  }
  .mid-line {
    margin: 32px 60px 0 126px;
  }
  .accountInfo {
    flex: auto;
  }
  .info-type-container {
    display: flex;
    width: 410px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 60px;
  }
  .info-type {
    width: 120px;
    height: 26px;
    line-height: 26px;
    background: url("../assets/infoTypeBg.png") no-repeat;
    background-size: 100%;
    color: rgb(119, 119, 119);
    margin-bottom: 8px; 
  }
</style>

