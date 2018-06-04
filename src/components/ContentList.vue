<template>
  <Layout :style="{'text-align': 'left', maxWidth: '960px', width: '960px'}">
    <Layout>
      <Breadcrumb :style="{margin: '88px 0 20px 20px', maxWidth: '960px'}">
        <BreadcrumbItem v-for="path in paths">{{path}}</BreadcrumbItem>
      </Breadcrumb>
    </Layout>
    <Layout>
      <FilterRow :filterConfig=filterConfig />
    </Layout>
    <Card :style="{padding: '0', minHeight: '900px', background: '#fff', maxWidth: '960px'}">
      <div class="show-goods-container">
        <div class="show-sorted-list">
          <Sorter/>
        </div>
        <div class="show-content-list">
          <DisplayCard v-for="goods in goodsList" :id='goods.id' :name='goods.name' :favouriteState='goods.favouriteState'/>
        </div>
        <div class="show-page">
          <Page :total="20" show-elevator @on-change="changePage"></Page>
        </div>
      </div>
    </Card>
  </Layout>
</template>

<script>
  import FilterRow from './CgFilter'
  import Sorter from './CgSorter'
  import DisplayCard from './ResourceDisplayContainer'
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters({
        paths: 'path',
        filterConfig: 'getFilter',
        goodsList: 'getGoodsList'
      })
    },
    methods: {
      changePage: function (page) {
        this.$store.dispatch('searchPageData', page);
      }
    },
    name: "ContentList",
    components: {
      FilterRow,
      Sorter,
      DisplayCard
    }
  }
</script>

<style scoped>
  .show-goods-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*height: 900px;*/
  }

  .show-sorted-list {
    margin-bottom: 20px;
  }

  .show-content-list {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-grow: 1;
    float: left;
  }
  .show-page {
    align-self: center;
  }
</style>
