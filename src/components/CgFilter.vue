<template>
  <div class="show-sorted-list">
    <Layout>
      <Layout v-for="(item, index) in filterConfig">
        <Sider>{{item.fieldLabel}}:</Sider>
        <Content>
          <RadioGroup v-model="buttons[index]" type="button" size="small" value="全部">
            <Radio v-for="selection in item.fields" :label=selection></Radio>
          </RadioGroup>
        </Content>
        <Footer></Footer>
      </Layout>

      <!--<Layout>-->
        <!--<Sider>{{fieldLabel}}:</Sider>-->

        <!--<Content>-->
          <!--<RadioGroup v-model="button" type="button" size="small">-->
            <!--<Radio label="北京"></Radio>-->
            <!--<Radio label="上海"></Radio>-->
            <!--<Radio label="深圳"></Radio>-->
            <!--<Radio label="杭州"></Radio>-->
          <!--</RadioGroup>-->
        <!--</Content>-->
        <!--<Footer></Footer>-->
      <!--</Layout>-->

    </Layout>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    props: [
      'filterConfig'
    ],
    data() {
      return {
        buttons: ['button1', 'button2', 'button3']
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
.show-sorted-list {
  margin: 20px 20px;
}

/*:style="{'margin': '20px 20px'}"*/
</style>
