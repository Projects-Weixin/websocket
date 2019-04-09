// pages/components/dialogup/dialogup.js
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
    isShowView:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDialogup: function() {
      this.setData({
        isShowView:true
      })
    },
    hideDialogup: function() {
      this.setData({
        isShowView:false
      })
    }
  }
})