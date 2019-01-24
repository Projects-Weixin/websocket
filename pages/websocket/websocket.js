Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  sendMsg:function () {
    wx.sendSocketMessage({
      data:'socket send message success--------来自小程序'
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.connectSocket({
        url: 'ws://127.0.0.1:8080/',
      })
      wx.onSocketOpen(function(res) {
        console.log('socket已打开：'+res)
      })
      wx.onSocketMessage(function(res){
        console.log('socket接收了消息：' +res)
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})