<template>
  <Layout :style="{'text-align': 'left', maxWidth: '960px', width: '960px'}">
    <Layout>
      <Breadcrumb :style="{margin: '88px 0 20px 20px', maxWidth: '960px'}">
        <BreadcrumbItem v-for="path in paths">{{path}}</BreadcrumbItem>
        <!--<BreadcrumbItem>沙发</BreadcrumbItem>-->
        <!--<BreadcrumbItem>北京， 上海</BreadcrumbItem>-->
      </Breadcrumb>
    </Layout>
    <Layout>
      <FilterRow/>
    </Layout>
    <Card :style="{padding: '0', minHeight: '900px', background: '#fff', maxWidth: '960px'}">
      <div class="show-sorted-list">
        <Sorter/>
      </div>
      <div class="show-content-list">
        <DisplayCard v-for="goods in lists" :id='goods.id' :name='goods.name' :favouriteState='goods.favouriteState'/>
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
        lists: [{id: 1, name: "aaa", favouriteState: false},
          {id: 2, name: 'bbb', favouriteState: false},
          {id: 3, name: 'ccc', favouriteState: false},
          {id: 4, name: 'ccc', favouriteState: false},
          {id: 5, name: 'ccc', favouriteState: false},
          {id: 6, name: 'ccc', favouriteState: false},
          {id: 7, name: 'ccc', favouriteState: false},
          {id: 8, name: 'ccc', favouriteState: false},
        ]
      }
    },
    computed: {
      ...mapGetters({
        paths: 'path'
      })
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
  .show-sorted-list {
    margin-bottom: 20px;
  }

  .show-content-list {
    /*width: 960px;*/
    display: flex;
    flex-wrap: wrap;
  }
</style>
