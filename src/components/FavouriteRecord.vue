<template>
  <div class="favourite-container">
    <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
        <div class="favourite-page-split-container">
            <Page :total="total" :current="1" @on-change="changePage" class-name='page-style'></Page>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData1: this.mockTableData1(),
      tableColumns1: [
        {
          title: "ID",
          key: "id",
          width: 178,
          className: "table-header1",
          align: "center"
        },
        {
          title: "金点",
          key: "goldenPoints",
          width: 115,
          className: "table-header2",
          align: "center"
        },
        {
          title: "收藏日期",
          key: "favouriteTime",
          width: 178,
          className: "table-header1",
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              this.formatDate(this.tableData1[params.index].favouriteTime)
            );
          }
        }
      ],
      total: 200
    };
  },
  methods: {
    mockTableData1() {
      let data = [];
      for (let i = 0; i < 12; i++) {
        data.push({
          id: Math.floor(Math.random() * 10 + 1),
          goldenPoints: Math.floor(Math.random() * 100 + 1),
          favouriteTime: new Date()
        });
        console.log(data);
      }
      return data;
    },
    formatDate(date) {
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    changePage() {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      this.tableData1 = this.mockTableData1();
    }
  }
};
</script>

<style scoped>
.favourite-page-split-container {
  display: flex;
  justify-content: center;
}
</style>

<style>
.favourite-container .table-header1 {
  height: 26px !important;
}
.favourite-container .table-header2 {
  height: 26px !important;
}
.favourite-container .ivu-table th.table-header1 {
  background: url("../assets/tbHeader1.png") no-repeat;
  background-size: 100%;
  height: 25px;
}
.favourite-container .ivu-table th.table-header2 {
  background: url("../assets/tbHeader2.png") no-repeat;
  background-size: 100%;
  height: 25px;
}
.favourite-page-split-container .page-style li {
  background: url("../assets/pageBg.png") no-repeat;
  background-size: 100%;
  min-width: 30px;
  height: 26px;
  border-radius: 0px;
}
 .favourite-page-split-container .page-style li a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
}
</style>

