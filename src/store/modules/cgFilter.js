const state = {
    filters: {
      'softDecoration': [{
        fieldLabel: "软装小类", fields:
          ['全部', '木材', '石材', '布纹', '壁纸', '地毯', '皮革', '装饰画', '金属', '外景', '自然元素', '凹凸黑白', '地面',
            '纹理/肌理', '墙面', '屋面', '其它']
      }, {
        fieldLabel: "细分", fields:
          ['全部', '墙线腰线', '石材拼花', '透光石', '皮纹砖', '马赛克', '古典瓷砖', '瓷砖', '大理石', '仿古砖', '其它石材']
      }],
      'scenario': [{
        fieldLabel: "场景小类", fields:
          ['全部', '大堂', '客房', '过道', '接待区', '卫生间', '前台', '餐厅']
      }, {
        fieldLabel: "风格", fields:
          ['全部', '新中式', '中式', '现代', '简欧', '北欧', '新古典', '美式', '后现代', '工业风', '欧式', '古典', '东南亚',
            '法式', '地中海', '日式', '其它']
      }],
      'material': [{
        fieldLabel: "素材小类", fields:
          ['全部', '木材', '石材', '布纹', '壁纸', '地毯', '皮革', '装饰画', '金属', '外景', '自然元素', '凹凸黑白', '地面',
            '纹理/肌理', '墙面', '屋面', '其它']
      }, {
        fieldLabel: "细分", fields:
          ['全部', '墙线腰线', '石材拼花', '透光石', '皮纹砖', '马赛克', '古典瓷砖', '瓷砖', '大理石', '仿古砖', '其它石材']
      }],
      'software': [{
        fieldLabel: "软件小类", fields:
          ['全部', '3ds', 'AUTOCAD', 'Maya', 'Mudbox', 'Revit', 'Netfabb', 'VRED', '其它']
      }, {
        fieldLabel: "版本", fields:
          ['全部', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
      }],
      'tutorial': [{
        fieldLabel: "软件小类", fields:
          ['全部', '3ds', 'AUTOCAD', 'Maya', 'Mudbox', 'Revit', 'Netfabb', 'VRED', '其它']
      }, {
        fieldLabel: "细分", fields:
          ['全部', '建模', '材质', '渲染', '后期']
      }],
    }
  }
;

const getters = {
  getFilter: (state, getters, rootState) => {
    var firstLvlNavigation = rootState.selectedNavigation.split('-')[0];
    return state.filters[firstLvlNavigation]
  },
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}
