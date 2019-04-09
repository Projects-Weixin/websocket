// components/votes/votes.js

const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    votes: [{
        option: 'A',
        num: 20,
        progress: 100,
        progressColor: ''
      },
      {
        option: 'B',
        num: 30,
        progress: 100,
        progressColor: ''
      },
      {
        option: 'C',
        num: 40,
        progress: 100,
        progressColor: ''

      },
      {
        option: 'D',
        num: 10,
        progress: 100,
        progressColor: ''

      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateProgress: function(e) {
      // 进度条显示的最大宽
      console.log(app.globalData.screen.width)
      var progress = app.globalData.screen.width / 2 + 50
      var votes = e
      //总人数
      var totalNum = 0
      //人员数组
      var nums = []

      for (var i = 0; i < votes.length; i++) {
        // 计算总的投票人数
        totalNum += votes[i].num
        nums.push(votes[i].num)
      }

      // 数组中 选出最多人数
      var maxnNum = Math.max.apply(null, nums)
      for (var i = 0; i < votes.length; i++) {
        // 每个选项投票人数 / 总投票人数 = 投票比例
        // 投票比例✖️最大宽 = 每天选项时间宽
        votes[i].progress = votes[i].num / totalNum * progress

        //设置最多人数 显示蓝色进度条
        if (votes[i].num == maxnNum) {
          votes[i].progressColor = '#038DFF'
        } else {
          votes[i].progressColor = '#999999'
        }
      }
      console.log('投票计算后' + votes)
      this.setData({
        votes: votes
      })
    }
  }
})