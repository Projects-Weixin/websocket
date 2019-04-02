// pages/commponents/options/options.js
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
      {
        option: 'E'
      },
      {
        option: 'F'
      },
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    optionClick: function () {

    },
    updateOption: function (e) {
      this.setData({
        options: e
      })
      console.log(this.data.options)
    }
  }
})