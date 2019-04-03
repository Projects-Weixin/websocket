// pages/commponents/options/options.js

// 保存回调函数
var handler=function(){}

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
    options: [{
        option: 'A'
      },
      {
        option: 'B'
      },
      {
        option: 'C'
      },
      {
        option: 'D'
      },
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {

    optionClick: function (e) {
      var item = e.currentTarget.dataset.item
      console.log(e.currentTarget.dataset.item)
      handler(item.option)
    },

    updateOption: function (e,callback) {
      handler = callback
      this.setData({
        options: e
      })
      console.log(this.data.options)
    }
  }
})