// pages/dialogup.js
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
    isShow: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showToast: function () {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    hideToast: function (e) {
      this.setData({
        isShow: !this.data.isShow
      });
    }
  }
})