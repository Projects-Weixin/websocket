// pages/photo/photo.js
Page({
  onResize: function(res) {
    res.size.windowWidth // 新的显示区域宽度
    res.size.windowHeight // 新的显示区域高度
    console.log('onResize', res)
    this.selectComponent('#photobrowser').onResize(res)
  },

  /**
   * 页面的初始数据
   */
  data: {
    pics: [{
        url: 'https://picbed.quantuminit.com/2f5e2c92a9544a40.jpg',
        unstudied: false
      },
      {
        url: 'https://picbed.quantuminit.com/f744562123494154.jpg',
        unstudied: false
      },
      {
        url: 'https://picbed.quantuminit.com/7b0aea9fa816411d.png',
        unstudied: false
      },
      {
        url: 'https://picbed.quantuminit.com/55dc0eee4aec4e65.jpg',
        unstudied: false
      },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.selectComponent('#photobrowser').setPics(this.data.pics)
    // this.selectComponent('#photobrowser').showPhotoBrowser(false)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})