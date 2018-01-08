<template>
    <div class="recharge-container">
        <div class="recharge-qty-container">
            <div class="recharge-qty">
                <span>chong 100</span>
            </div>
            <div class="recharge-qty">
                <span>chong 300</span>
            </div>
            <div class="recharge-qty">
                <span>chong 500</span>
            </div>
        </div>
        <div></div>
        <div class="QRCode-container">
            <div>
                <img src="../assets/pay100.png" title="zhi fu bao 100">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.recharge-container {
    font-family: Arial, 'Microsoft YaHei', serif;
    color: rgb(119, 119, 119);
    size: 12px;
}
.recharge-qty-container {
    display: flex;
    flex-direction: column;
}
.recharge-qty {
    background: url("../assets/rechargeQtyBg.png") no-repeat;
    background-size: 100%;
    width: 100%;
    margin-bottom: 8px;
    height: 24px;
    display: flex;
    align-items: center
}
.QRCode-container {
    display: flex;
    justify-content: center;
}
</style>
