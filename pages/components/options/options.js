// pages/components/options/options.js

// 保存回调函数
var handler = function() {}

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
        option: 'A',
        answered: true,
        selected: false,
      },
      {
        option: 'B',
        answered: true,
        selected: false,
      },
      {
        option: 'C',
        answered: false,
        selected: false,
      },
      {
        option: 'D',
        answered: false,
        selected: false,
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

    optionClick: function(e) {
      var item = e.currentTarget.dataset.item
      for (let i = 0; i < this.data.options.length; i++) {
        var option = this.data.options[i]
        // 按钮选中状态
        if (i == e.currentTarget.id) {
          option.selected = true
        } else {
          option.selected = false
        }
        this.data.options[i] = option
      }
      this.setData({
        options: this.data.options
      })

      console.log(this.data.options)
      handler(item.option)
    },

    updateOption: function(e, callback) {
      handler = callback
      this.setData({
        options: e
      })
      console.log(this.data.options)
    }
  }
})