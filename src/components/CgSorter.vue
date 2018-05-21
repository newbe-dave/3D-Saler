<template>
  <Layout>
      <Content>
        <RadioGroup v-model="button" type="button" size="small">
          <Radio label="综合"></Radio>
          <Radio label="人气"></Radio>
          <Radio label="日期"></Radio>
          <Radio label="哈哈"></Radio>
        </RadioGroup>
      </Content>
      <Footer></Footer>
    </Layout>
</template>

<script>
  export default {
    // props: {
    //
    // },
    data() {
      return {
        button: '综合',
      }
    }
  }
</script>

<style scoped>

</style>
