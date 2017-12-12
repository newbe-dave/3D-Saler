<template>
  <div >
    <my-logo/>
    <div class="tab-opt-container">
      <div class="personalInfo">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div>
        <img src="../assets/line.png"/>
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
  }
  .personalInfo{
    display: flex;
    flex-direction: column;
  }
</style>

