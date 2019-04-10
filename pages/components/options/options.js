// pages/components/options/options.js

// 保存回调函数
var handler = function() {}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否多选，默认单选
    multiple: {
      type: Boolean,
      value: false
    }
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
      var selectedOptions = []

      // 多选
      if (this.data.multiple) {
        var i = parseInt(e.currentTarget.id)
        var option = this.data.options[i]
        option.selected = !option.selected
        this.data.options[i] = option

        // 筛选出 选中的选项
        for (let i=0; i<this.data.options.length; i++) {
          var option = this.data.options[i]
          if (option.selected) {
            selectedOptions.push(option.option)
          }
        }
      }
      // 单选
      else {
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
        selectedOptions.push(item.option)
      }

      this.setData({
        options: this.data.options
      })

      console.log(selectedOptions)
      handler(selectedOptions)
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