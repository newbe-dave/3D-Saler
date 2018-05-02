<template>
  <Menu mode="horizontal" :theme="darkTheme" active-name="1" :on-select="show">
    <Submenu name="1">
      <template  slot="title">
        <Icon type="ios-flame"></Icon>
        精品推荐
      </template>
      <MenuItem name="1-1">新增和启动</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template  slot="title">
        <Icon type="images"></Icon>
        高清贴图
      </template>
      <Row class="navi-row">
        <Col span="8">
          <MenuGroup title="使用">
            <MenuItem name="2-1">新增和启动</MenuItem>
            <MenuItem name="2-2">活跃分析</MenuItem>
            <MenuItem name="2-3">时段分析</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="留存">
            <MenuItem name="2-4">用户留存</MenuItem>
            <MenuItem name="2-5">流失用户</MenuItem>
          </MenuGroup>
        </Col>
      </Row>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="stats-bars"></Icon>
        教程学习
      </template>
      <MenuGroup title="使用">
        <MenuItem name="3-1">新增和启动</MenuItem>
        <MenuItem name="3-2">活跃分析</MenuItem>
        <MenuItem name="3-3">时段分析</MenuItem>
      </MenuGroup>
      <MenuGroup title="留存">
        <MenuItem name="3-4">用户留存</MenuItem>
        <MenuItem name="3-5">流失用户</MenuItem>
      </MenuGroup>
    </Submenu>
    <MenuItem name="4">
      <Icon type="ios-download"></Icon>
      软件下载
    </MenuItem>
  </Menu>

</template>
<script>

  export default {
    data () {
      return {
        darkTheme: 'dark'
      }
    },
    methods: {
    },
    mounted () {
      Event.$on('on-select', name => {
        console.log(name);
        alert(name);
      })
    },
    components: {
    }
  }
</script>

<style scoped>
  .navi-row {
    width: 300px;
  }
</style>

<style>
  .navi-row .ivu-col .ivu-menu-item-group .ivu-menu-item {
    padding: 0px;
  }
</style>
