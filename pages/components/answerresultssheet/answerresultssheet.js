// pages/components/answerresultssheet/answerresultssheet.js
const app = getApp()
var callback = function() {}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectIndex: {
      type: Number,
      value: 1
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    height: app.globalData.screen.height,
    isHidden: true,
    lists: [{
      correct: true
    }, {
      correct: false
    }, {
      correct: false
    }, {
      correct: true
    }, {
      correct: true
    }, {
      correct: true
    }, {
      correct: true
    }, {
      correct: true
    }, {
      correct: true
    }, {
      correct: true
    }, {
      correct: true
    }, {
      correct: true
    }, {
      correct: true
    }]
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
      callback = handler
      console.log(e)
      this.setData({
        isHidden: e
      })
    }
  }
})