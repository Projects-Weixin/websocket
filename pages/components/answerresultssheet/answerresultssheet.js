// pages/components/answerresultssheet/answerresultssheet.js
const app = getApp()
var callback = function() {}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentNum: {
      type: Number,
      value: 1
    }

  },

  /**
   * 组件的初始数据
   * answertype:0-正确，1-错误，2-对错，3不知道
   */
  data: {
    height: app.globalData.screen.height,
    isHidden: true,
    lists: [{
      answertype: 0
    }, {
      answertype: 1
    }, {
      answertype: 2
    }, {
      answertype: 3
    }, {
      answertype: 1
    }, {
      answertype: 2
    }, {
      answertype: 1
    }, {
      answertype: 0
    }, {
      answertype: 2
    }, {
      answertype: 3
    }, {
      answertype: 0
    }, {
      answertype: 1
    }, , {
      answertype: 1
    }, {
      answertype: 2
    }, {
      answertype: 3
    }, {
      answertype: 1
    }, {
      answertype: 2
    }, {
      answertype: 1
    }, {
      answertype: 0
    }, {
      answertype: 2
    }, {
      answertype: 3
    }, {
      answertype: 0
    }, {
      answertype: 1
    },],
    images: [
      './image/as-success.png',
      './image/as-fail.png',
      './image/as-success-fail.png',
      './image/as-unknow.png',
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 选择某题
    selectedItem: function(e) {
      callback(e.currentTarget.dataset.index)
      this.cancelClick()
    },
    cancelClick: function() {
      this.setData({
        isHidden: true
      })
    },

    showAnswerResultsSheet: function(e, handler) {
      this.selectComponent('#answerresultsnav')

      callback = handler
      console.log(e)
      this.setData({
        isHidden: e
      })
    }
  }
})