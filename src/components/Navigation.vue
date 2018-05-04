<template>
  <Menu mode="horizontal" :theme="darkTheme" active-name="1" :on-select="show">
    <Submenu name="1">
      <template  slot="title">
        <Icon type="ios-flame"></Icon>
        软装库
      </template>
      <Row class="navi-row">
        <Col span="8">
          <MenuGroup title="沙发">
            <MenuItem name="1-1">单人</MenuItem>
            <MenuItem name="1-2">多人</MenuItem>
            <MenuItem name="1-3">组合</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="床具">
            <MenuItem name="1-4">双人床</MenuItem>
            <MenuItem name="1-5">单人床</MenuItem>
            <MenuItem name="1-6">床头柜</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="椅子">
            <MenuItem name="1-7">餐椅组合</MenuItem>
            <MenuItem name="1-8">休闲椅</MenuItem>
            <MenuItem name="1-9">办公椅</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="柜具">
            <MenuItem name="1-10">电视柜</MenuItem>
            <MenuItem name="1-11">橱柜</MenuItem>
            <MenuItem name="1-12">衣柜</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="桌几">
            <MenuItem name="1-13">餐桌</MenuItem>
            <MenuItem name="1-14">书桌</MenuItem>
            <MenuItem name="1-15">茶几</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="灯具">
            <MenuItem name="1-16">吊灯</MenuItem>
            <MenuItem name="1-17">落地灯</MenuItem>
            <MenuItem name="1-18">壁灯</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="陈设用品">
            <MenuItem name="1-19">植物花草</MenuItem>
            <MenuItem name="1-20">五金/厨卫</MenuItem>
            <MenuItem name="1-21">人物/器材</MenuItem>
          </MenuGroup>
        </Col>
      </Row>
    </Submenu>
    <Submenu name="2">
      <template  slot="title">
        <Icon type="images"></Icon>
        场景库
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
        素材库
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
    <MenuItem name="4">
      <template>
        <Icon type="ios-download"></Icon>
        软件库
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
    </MenuItem>
    <MenuItem name="4">
      <template>
        <Icon type="ios-download"></Icon>
        教程库
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
