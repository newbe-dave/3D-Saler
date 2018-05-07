<template>
  <RadioGroup v-model="button6" type="button" size="small">
    <Radio label="北京"></Radio>
    <Radio label="上海"></Radio>
    <Radio label="深圳"></Radio>
    <Radio label="杭州"></Radio>
  </RadioGroup>
</template>

<script>
  export default {
    props: {

    },
    data () {
      return {
        button4: '北京',
        button5: '北京',
        button6: '北京'
      }
    }
  }
</script>

<style scoped>

</style>
