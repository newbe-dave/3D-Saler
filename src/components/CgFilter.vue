<template>
  <Layout>
    <Layout>
      <Sider>{{fieldLabel}}:</Sider>
      <Content>
        <RadioGroup v-model="button6" type="button" size="small">
          <Radio label="北京"></Radio>
          <Radio label="上海"></Radio>
          <Radio label="深圳"></Radio>
          <Radio label="杭州"></Radio>
        </RadioGroup>
      </Content>
      <Footer></Footer>
    </Layout>

    <Layout >
      <Sider>{{fieldLabel}}:</Sider>

      <Content>
        <RadioGroup v-model="button" type="button" size="small">
          <Radio label="北京"></Radio>
          <Radio label="上海"></Radio>
          <Radio label="深圳"></Radio>
          <Radio label="杭州"></Radio>
        </RadioGroup>
      </Content>
      <Footer></Footer>
    </Layout>

  </Layout>
</template>

<script>
  export default {
    // props: {
    //
    // },
    data() {
      return {
        fieldLabel: 'city',
        button6: '北京',
        button: '上海'
      }
    }
  }
</script>

<style scoped>

</style>
