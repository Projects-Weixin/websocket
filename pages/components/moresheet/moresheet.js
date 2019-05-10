// components/moresheet/moresheet.js

var handler = function(){}

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
    width: getApp().globalData.screen.width,
    height: getApp().globalData.screen.height,
    isHidden: true,
    items: [{
      image: './image/more-scan.png',
      title: "扫一扫"
    }, {
      image: './image/more-in-classroom.png',
      title: "加入课堂"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick: function(e) {
      var i = e.currentTarget.id
      handler(i)
      this.setData({
        isHidden: true
      })
    },
    showMoreSheet: function(e,callback) {
      handler = callback

      console.log(e)
      this.setData({
        isHidden: e
      })
    }
  }
})