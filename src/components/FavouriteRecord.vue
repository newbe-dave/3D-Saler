<template>
  <div>
    <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData1: this.mockTableData1(),
                tableColumns1: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '金点',
                        key: 'goldenPoints'
                    },
                    {
                        title: '收藏日期',
                        key: 'favouriteTime',
                        render: (h, params) => {
                          return h('div', this.formatDate(this.tableData1[params.index].favouriteTime))
                        }
                    },
                    // {
                    //     title: 'People',
                    //     key: 'people',
                    //     render: (h, params) => {
                    //         return h('Poptip', {
                    //             props: {
                    //                 trigger: 'hover',
                    //                 title: params.row.people.length + 'customers',
                    //                 placement: 'bottom'
                    //             }
                    //         }, [
                    //             h('Tag', params.row.people.length),
                    //             h('div', {
                    //                 slot: 'content'
                    //             }, [
                    //                 h('ul', this.tableData1[params.index].people.map(item => {
                    //                     return h('li', {
                    //                         style: {
                    //                             textAlign: 'center',
                    //                             padding: '4px'
                    //                         }
                    //                     }, item.n + '：' + item.c + 'People')
                    //                 }))
                    //             ])
                    //         ]);
                    //     }
                    // },
                ]
            }
        },
        methods: {
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 3; i++) {
                    data.push({
                        id: Math.floor(Math.random () * 10 + 1),
                        goldenPoints: Math.floor(Math.random () * 100 + 1),
                        favouriteTime: new Date()
                    })
              console.log(data);

                }
                return data;
            },
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            changePage () {
                // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
                this.tableData1 = this.mockTableData1();
            }
        }
    }

</script>

<style scoped>

</style>
