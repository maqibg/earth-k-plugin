/*
* 此配置文件为系统使用，请勿修改，否则可能无法正常使用
*
* 如需自定义配置请复制修改上一级help_default.js
*
* */

export const helpCfg = {
  title: '土块帮助',
  subTitle: 'Yunzai-Bot & Earth-K-Plugin',
  columnCount: 3,
  colWidth: 265,
  theme: 'all',
  themeExclude: ['default'],
  style: {
    fontColor: '#ceb78b',
    descColor: '#eee',
    contBgColor: 'rgba(6, 21, 31, .5)',
    contBgBlur: 3,
    headerBgColor: 'rgba(6, 21, 31, .4)',
    rowBgColor1: 'rgba(6, 21, 31, .2)',
    rowBgColor2: 'rgba(6, 21, 31, .35)'
  }
}

export const helpList = [{
  group: '小工具',
  list: [{
    icon: 55,
    title: '#今日运势',
    desc: '查看今日运势'
  }, {
    icon: 57,
    title: '表情包合成',
    desc: '@人表情 #土块表情列表 #土块表情开启/关闭'
  }, {
    icon: 56,
    title: '#钢琴/#八音盒 等',
    desc: '示例：#钢琴1 2 3 1|200（需FFmpeg）'
  }]
}, {
  group: '土块原史功能',
  list: [{
    icon: 57,
    title: '#<角色>语音+数字',
    desc: '#<角色>语音列表 #角色语音汇总'
  }, {
    icon: 58,
    title: '#了解+<角色>',
    desc: '#了解刻晴 #了解宵宫'
  }, {
    icon: 55,
    title: '#角色视频(.*)',
    desc: '#角色视频列表 #角色视频+数字'
  }, {
    icon: 56,
    title: '过场动画(.*)',
    desc: '#过场动画列表 #过场动画+数字'
  },{
    icon: 59,
    title: '#原史+角色',
    desc: '原史(角色|武器|圣遗物|装备|书籍|任务|NPC) 目录/ID查询'
  }, {
    icon: 79,
    title: '#原史id+数字',
    desc: 'id范围0~3794'
  }]
}, {
  group: '系统与群友',
  list: [{
    icon: 22,
    title: '土块状态',
    desc: '查看系统与Bot状态'
  }, {
    icon: 55,
    title: '娶群友',
    desc: '娶群友 强娶@人 抢群友@人 闹离婚 #群对象列表 我对象呢'
  }]
}, {
  group: '管理命令，仅管理员可用',
  auth: 'master',
  list: [{
    icon: 95,
    title: '#土块(强制)更新',
    desc: '更新土块插件'
  }]
}]

export const isSys = true
