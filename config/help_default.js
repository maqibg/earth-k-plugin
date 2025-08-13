/*
* 请注意，系统不会读取help_default.js ！！！！
* 【请勿直接修改此文件，且可能导致后续冲突】
*
* 如需自定义可将文件【复制】一份，并重命名为 help.js
*
* */

// 帮助配置
export const helpCfg = {
  // 帮助标题
  title: '土块帮助',

  // 帮助副标题
  subTitle: 'Yunzai-Bot & Earth-K-Plugin',

  // 帮助表格列数，可选：2-5，默认3
  // 注意：设置列数过多可能导致阅读困难，请参考实际效果进行设置
  colCount: 3,

  // 单列宽度，默认265
  // 注意：过窄可能导致文字有较多换行，请根据实际帮助项设定
  colWidth: 265,

  // 皮肤选择，可多选，或设置为all
  // 皮肤包放置于 resources/help/theme
  // 皮肤名为对应文件夹名
  // theme: 'all', // 设置为全部皮肤
  // theme: ['default','theme2'], // 设置为指定皮肤
  theme: 'all',

  // 排除皮肤：在存在其他皮肤时会忽略该项内设置的皮肤
  // 默认忽略default：即存在其他皮肤时会忽略自带的default皮肤
  // 如希望default皮肤也加入随机池可删除default项
  themeExclude: ['default'],

  // 是否启用背景毛玻璃效果，若渲染遇到问题可设置为false关闭
  bgBlur: true
}

// 帮助菜单内容
export const helpList = [{
  group: '语音与视频',
  list: [{
    icon: 57,
    title: '#角色语音汇总',
    desc: '查看所有角色语音索引'
  }, {
    icon: 57,
    title: '#<角色>语音<序号>',
    desc: '播放指定语音，或发送“#<角色>语音列表”查看列表'
  }, {
    icon: 31,
    title: '#角色视频列表',
    desc: '原神角色 PV 列表，配合序号播放'
  }, {
    icon: 31,
    title: '#过场动画列表',
    desc: '过场动画列表，配合序号播放'
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
    icon: 59,
    title: '#原史+角色',
    desc: '了解角色故事'
  }, {
    icon: 21,
    title: '#原史+武器',
    desc: '了解武器故事'
  }, {
    icon: 39,
    title: '#原史+圣遗物',
    desc: '了解圣遗物故事'
  }, {
    icon: 55,
    title: '#原史+装备',
    desc: '了解装备故事'
  }, {
    icon: 52,
    title: '#原史+书籍',
    desc: '了解书籍故事'
  }, {
    icon: 76,
    title: '#原史+任务',
    desc: '了解任务故事'
  }, {
    icon: 78,
    title: '#原史+NPC',
    desc: '了解npc故事'
  }, {
    icon: 79,
    title: '#原史id+数字',
    desc: 'id范围0~3794'
  }]
}, {
  group: '土块原史目录列表',
  list: [{
    icon: 60,
    title: '#原史角色目录',
    desc: '#角色id列表'
  }, {
    icon: 21,
    title: '#原史武器目录',
    desc: '#武器id列表'
  }, {
    icon: 38,
    title: '#原史圣遗物目录',
    desc: '圣遗物id列表'
  }, {
    icon: 43,
    title: '#原史怪物目录',
    desc: '怪物id列表'
  }, {
    icon: 22,
    title: '#原史任务目录',
    desc: '任务id列表'
  }, {
    icon: 54,
    title: '#原史食物目录',
    desc: '食物id列表'
  }, {
    icon: 55,
    title: '#原史物品目录',
    desc: '物品id列表'
  }, {
    icon: 71,
    title: '#原史活动目录',
    desc: '活动id列表'
  }, {
    icon: 74,
    title: '#原史动物目录',
    desc: '动物id列表'
  }, {
    icon: 11,
    title: '#原史书籍目录',
    desc: '书籍id列表'
  }, {
    icon: 80,
    title: '#原史npc目录',
    desc: 'npc id列表'
  }]
}, {
  group: '了解人物与表情包',
  list: [{
    icon: 58,
    title: '#了解+<角色>',
    desc: '返回本地角色图，例如 #了解 刻晴'
  }, {
    icon: 76,
    title: '#土块表情列表',
    desc: '查看可用表情模板'
  }, {
    icon: 76,
    title: '#土块表情开启/关闭',
    desc: '开启或关闭表情功能（关键词触发）'
  }]
}, {
  group: '系统与状态',
  list: [{
    icon: 39,
    title: '#土块状态',
    desc: '系统/磁盘/网络等状态面板'
  }, {
    icon: 39,
    title: '#土块状态pro',
    desc: '多 Bot/更详细的状态视图'
  }]
}, {
  group: '小工具',
  list: [{
    icon: 33,
    title: '#今日运势',
    desc: '按 QQ 号返回今日运势'
  }, {
    icon: 52,
    title: '#弹琴帮助',
    desc: '查看乐器演奏说明（需本地 FFmpeg）'
  }, {
    icon: 52,
    title: '#钢琴/#八音盒/... <简谱>|<倍速>',
    desc: '示例：#钢琴1 2 3 1|200（需 FFmpeg 环境）'
  }, {
    icon: 46,
    title: '#(开启|关闭)表情合成',
    desc: '两表情合成，连续发送两个 Emoji 自动尝试'
  }]
}, {
  group: '群友结缘',
  list: [{
    icon: 95,
    title: '娶群友 / 强娶 @某人',
    desc: '随机/指定对象结缘（有概率失败）'
  }, {
    icon: 95,
    title: '抢群友 @某人',
    desc: '有概率抢走他人对象'
  }, {
    icon: 95,
    title: '#群对象列表',
    desc: '查看当前群的对象列表'
  }, {
    icon: 95,
    title: '闹离婚 / 我对象呢',
    desc: '解除关系 / 查询当前对象'
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
