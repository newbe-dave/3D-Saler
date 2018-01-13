<template>
  <div>
    <Table :data="data" :columns="columns" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
        <div class="page-split-container">
            <Page :total="total" :current="1" @on-change="changePage" class-name='page-style'></Page>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    total: {
        type: Number,
        default() {
            return 1;
        }
    }
  },
  methods: {
      chahgePage() {
          alert('on-change');
          this.$emit('change-page');
      },
      afterClick() {
          alert('on-click');
          this.$emit('change-page');
      }
  }
};
</script>

<style scoped>
.page-split-container {
  display: flex;
  justify-content: center;
}
</style>

<style>
.table-header1 {
  height: 26px !important;
}
.table-header2 {
  height: 26px !important;
}
.ivu-table th.table-header1 {
  background: url("../assets/tbHeader1.png") no-repeat;
  background-size: 100%;
  height: 25px;
}
.ivu-table th.table-header2 {
  background: url("../assets/tbHeader2.png") no-repeat;
  background-size: 100%;
  height: 25px;
}
.page-style li {
  background: url("../assets/pageBg.png") no-repeat;
  background-size: 100%;
  min-width: 30px;
  height: 26px;
  border-radius: 0px;
}
.page-style li a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
}
</style>

