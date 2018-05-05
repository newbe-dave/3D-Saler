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
            <MenuItem name="1-1-1">单人</MenuItem>
            <MenuItem name="1-1-2">多人</MenuItem>
            <MenuItem name="1-1-3">组合</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="床具">
            <MenuItem name="1-2-1">双人床</MenuItem>
            <MenuItem name="1-2-2">单人床</MenuItem>
            <MenuItem name="1-2-3">床头柜</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="椅子">
            <MenuItem name="1-3-1">餐椅组合</MenuItem>
            <MenuItem name="1-3-2">休闲椅</MenuItem>
            <MenuItem name="1-3-3">办公椅</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="柜具">
            <MenuItem name="1-4-1">电视柜</MenuItem>
            <MenuItem name="1-4-2">橱柜</MenuItem>
            <MenuItem name="1-4-3">衣柜</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="桌几">
            <MenuItem name="1-5-1">餐桌</MenuItem>
            <MenuItem name="1-5-2">书桌</MenuItem>
            <MenuItem name="1-5-3">茶几</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="灯具">
            <MenuItem name="1-6-1">吊灯</MenuItem>
            <MenuItem name="1-6-2">落地灯</MenuItem>
            <MenuItem name="1-6-3">壁灯</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="陈设用品">
            <MenuItem name="1-7-1">植物花草</MenuItem>
            <MenuItem name="1-7-2">五金/厨卫</MenuItem>
            <MenuItem name="1-7-3">人物/器材</MenuItem>
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
          <MenuGroup title="酒店空间">
            <MenuItem name="2-1-1">大堂</MenuItem>
            <MenuItem name="2-1-2">餐厅</MenuItem>
            <MenuItem name="2-1-3">客房</MenuItem>
            <MenuItem name="2-1-4">卫生间</MenuItem>
            <MenuItem name="2-1-5">电视厅</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="家装空间">
            <MenuItem name="2-2-1">客厅</MenuItem>
            <MenuItem name="2-2-2">餐厅</MenuItem>
            <MenuItem name="2-2-3">卧室</MenuItem>
            <MenuItem name="2-2-4">卫生间</MenuItem>
            <MenuItem name="2-2-5">书房</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="商业空间">
            <MenuItem name="2-3-1">售楼处</MenuItem>
            <MenuItem name="2-3-2">展示区</MenuItem>
            <MenuItem name="2-3-3">商业零售</MenuItem>
          </MenuGroup>
        </Col>
      </Row>
      <Row class="navi-row">
        <Col span="8">
          <MenuGroup title="办公空间">
            <MenuItem name="2-4-1">办公室</MenuItem>
            <MenuItem name="2-4-2">会议室</MenuItem>
            <MenuItem name="2-4-3">大堂</MenuItem>
            <MenuItem name="2-4-4">休息区</MenuItem>
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
          <MenuGroup title="贴图分类">
            <MenuItem name="3-1-1">木材</MenuItem>
            <MenuItem name="3-1-2">石材</MenuItem>
            <MenuItem name="3-1-3">布纹</MenuItem>
            <MenuItem name="3-1-4">壁纸</MenuItem>
            <MenuItem name="3-1-5">地毯</MenuItem>
            <MenuItem name="3-1-6">皮革</MenuItem>
            <MenuItem name="3-1-7">金属</MenuItem>
            <MenuItem name="3-1-8">装饰画</MenuItem>
            <MenuItem name="3-1-9">外景</MenuItem>
            <MenuItem name="3-1-10">其它</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="VR材质">
            <MenuItem name="3-2-1">木材</MenuItem>
            <MenuItem name="3-2-2">石材</MenuItem>
            <MenuItem name="3-2-3">布纹</MenuItem>
            <MenuItem name="3-2-4">壁纸</MenuItem>
            <MenuItem name="3-2-5">地毯</MenuItem>
            <MenuItem name="3-2-6">皮革</MenuItem>
            <MenuItem name="3-2-7">金属</MenuItem>
            <MenuItem name="3-2-8">装饰画</MenuItem>
            <MenuItem name="3-2-9">外景</MenuItem>
            <MenuItem name="3-2-10">其它</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="光域网">
            <MenuItem name="3-3-1">筒灯</MenuItem>
            <MenuItem name="3-3-2">壁灯</MenuItem>
            <MenuItem name="3-3-3">射灯</MenuItem>
            <MenuItem name="3-3-4">其它</MenuItem>
          </MenuGroup>
        </Col>
      </Row>
    </Submenu>
    <Submenu name="4">
      <template slot="title">
        <Icon type="ios-download"></Icon>
        软件库
      </template>
      <Row class="navi-row">
        <Col span="8">
          <MenuGroup title="Autodesk">
            <MenuItem name="4-1-1">3ds Max</MenuItem>
            <MenuItem name="4-1-2">AUTOCAD</MenuItem>
            <MenuItem name="4-1-3">Maya</MenuItem>
            <MenuItem name="4-1-4">Mudbox</MenuItem>
            <MenuItem name="4-1-5">Revit</MenuItem>
            <MenuItem name="4-1-6">Netfabb</MenuItem>
            <MenuItem name="4-1-7">VRED</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="Adobe">
            <MenuItem name="4-2-1">Photoshop</MenuItem>
            <MenuItem name="4-2-2">After Effects</MenuItem>
            <MenuItem name="4-2-3">Media Encoder</MenuItem>
            <MenuItem name="4-2-4">Lightroom</MenuItem>
            <MenuItem name="4-2-5">Illustrator</MenuItem>
            <MenuItem name="4-2-6">InDesign</MenuItem>
            <MenuItem name="4-2-7">Elements</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="渲染器">
            <MenuItem name="4-3-1">VRay</MenuItem>
            <MenuItem name="4-3-2">CR</MenuItem>
          </MenuGroup>
        </Col>
      </Row>
      <Row class="navi-row">
        <Col span="8">
          <MenuGroup title="插件">
            <MenuItem name="4-4-1">Max插件</MenuItem>
            <MenuItem name="4-4-2">Maya插件</MenuItem>
            <MenuItem name="4-4-3">After Effects插件</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="其它软件">
            <MenuItem name="4-5-1">Sketchup</MenuItem>
            <MenuItem name="4-5-2">Marvelous</MenuItem>
          </MenuGroup>
        </Col>
      </Row>
    </Submenu>
    <Submenu name="5">
      <template slot="title">
        <Icon type="ios-download"></Icon>
        教程库
      </template>
      <Row class="navi-row">
        <Col span="8">
          <MenuGroup title="3D教程">
            <MenuItem name="5-1-1">3dsmax</MenuItem>
            <MenuItem name="5-1-2">AutoCAD MD</MenuItem>
            <MenuItem name="5-1-3">Maya Modo</MenuItem>
            <MenuItem name="5-1-4">Mudbox</MenuItem>
            <MenuItem name="5-1-5">Rhino</MenuItem>
            <MenuItem name="5-1-6">BIM</MenuItem>
            <MenuItem name="5-1-7">sketchup</MenuItem>
            <MenuItem name="5-1-8">Unity 3d</MenuItem>
            <MenuItem name="5-1-9">ZBrush</MenuItem>
            <MenuItem name="5-1-10">其它3D教程</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="2D教程">
            <MenuItem name="5-2-1">Photoshop</MenuItem>
            <MenuItem name="5-2-2">After Effects</MenuItem>
            <MenuItem name="5-2-3">Lightroom</MenuItem>
            <MenuItem name="5-2-4">Illustrator</MenuItem>
            <MenuItem name="5-2-5">InDesign</MenuItem>
            <MenuItem name="5-2-6">Premiere</MenuItem>
            <MenuItem name="5-2-7">其它2D教程</MenuItem>
          </MenuGroup>
        </Col>
        <Col span="8">
          <MenuGroup title="插画手绘">
            <MenuItem name="5-3-1">平面设计</MenuItem>
            <MenuItem name="5-3-2">摄影摄像</MenuItem>
            <MenuItem name="5-3-3">音频编辑</MenuItem>
          </MenuGroup>
        </Col>
      </Row>
    </Submenu>
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
    width: 400px;
  }
</style>

<style>
  .navi-row .ivu-col .ivu-menu-item-group .ivu-menu-item {
    padding: 2px 0px;
  }
</style>
