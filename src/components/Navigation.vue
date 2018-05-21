<template>
  <Menu class="cg-menu" mode="horizontal" :theme="theme" active-name="1" @on-select="show">
    <div class="layout-logo">
      <img src="../assets/logoSmall.png"/>
    </div>
    <Submenu name="softDecoration">
      <template  slot="title">
        <Icon type="ios-flame"></Icon>
        软装库
      </template>
      <MenuItem name="softDecoration-sofa">沙发</MenuItem>
      <MenuItem name="softDecoration-bed">床具</MenuItem>
      <MenuItem name="softDecoration-chair">椅子</MenuItem>
      <MenuItem name="softDecoration-cabinet">柜具</MenuItem>
      <MenuItem name="softDecoration-desk">桌几</MenuItem>
      <MenuItem name="softDecoration-light">灯具</MenuItem>
      <MenuItem name="softDecoration-furnishing">陈设用品</MenuItem>
      <MenuItem name="softDecoration-plant">植物花草</MenuItem>
      <MenuItem name="softDecoration-Hardware">五金/厨卫</MenuItem>
      <MenuItem name="softDecoration-people">人物/器材</MenuItem>
    </Submenu>
    <Submenu name="scenario">
      <template  slot="title">
        <Icon type="images"></Icon>
        场景库
      </template>
      <MenuItem name="scenario-hotel">酒店空间</MenuItem>
      <MenuItem name="scenario-home">家装空间</MenuItem>
      <MenuItem name="scenario-business">商业空间</MenuItem>
      <MenuItem name="scenario-office">办公空间</MenuItem>
      <MenuItem name="scenario-public">公共空间</MenuItem>
      <MenuItem name="scenario-outdoor">户外建筑</MenuItem>
    </Submenu>
    <Submenu name="material">
      <template slot="title">
        <Icon type="stats-bars"></Icon>
        素材库
      </template>
      <MenuItem name="material-picture">贴图分类</MenuItem>
      <MenuItem name="material-VR">VR材质</MenuItem>
      <MenuItem name="material-opticalNetwork">光域网</MenuItem>
      <MenuItem name="material-others">其它</MenuItem>
    </Submenu>
    <Submenu name="software">
      <template slot="title">
        <Icon type="ios-download"></Icon>
        软件库
      </template>
      <MenuItem name="software-Autodesk">Autodesk</MenuItem>
      <MenuItem name="software-Adobe">Adobe</MenuItem>
      <MenuItem name="software-render">渲染器</MenuItem>
      <MenuItem name="software-plugin">插件</MenuItem>
      <MenuItem name="software-others">其它软件</MenuItem>
    </Submenu>
    <Submenu name="tutorial">
      <template slot="title">
        <Icon type="ios-download"></Icon>
        教程库
      </template>
      <MenuItem name="tutorial-3D">3D教程</MenuItem>
      <MenuItem name="tutorial-2D">2D教程</MenuItem>
      <MenuItem name="tutorial-painting">插画手绘</MenuItem>
      <MenuItem name="tutorial-graphic">平面设计</MenuItem>
      <MenuItem name="tutorial-camera">摄影摄像</MenuItem>
      <MenuItem name="tutorial-audio">音频编辑</MenuItem>
    </Submenu>
    <div class="layout-login">
      <a href="#" @click="login">登录</a> |
      <a href="#">注册</a> |
    </div>
  </Menu>

</template>
<script>

  export default {
    data () {
      return {
        theme: 'dark'
      }
    },
    methods: {
      show (name) {
        alert(name)
      }
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
.cg-menu {
  min-width: 500px;
}
  .layout-logo{
    width: 200px;
    height: 60px;
    float: left;
    position: relative;
    left: 20px;
    display: flex;
    /*flex-direction: column;*/
    align-items: center;
  }
  .layout-logo img{

  }
  .layout-login{
    display: flex;
    /*flex-grow: 1;*/
    justify-content: center
  }
</style>
