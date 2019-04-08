// pages/commponents/answersheet/answersheet.js

Component({

  properties: {
    // 选项 选中时，隐藏当前页面
    tapDismiss: {
      type: Boolean,
      value: false
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isHidden: true,
    options: [{
        option: '1',
        answered: false
      },
      {
        option: '2',
        answered: false
      },
      {
        option: '3',
        answered: false
      },
      {
        option: '4',
        answered: false
      },
      {
        option: '5',
        answered: false
      },
    ]
  },

  methods: {
    cancelClick: function() {
      this.setData({
        isHidden: true
      })
    },

    showAnswerSheet: function(e, handler) {
      var that = this
      // 调用封装的选项组件
      this.selectComponent('#options').updateOption(this.data.options, function(callback) {
        console.log('answersheet' + callback)
        handler(callback)
        if (that.data.tapDismiss) {
          that.setData({
            isHidden:true
          })
        }
      })

      this.setData({
        isHidden: false
      })
    },
  }
})