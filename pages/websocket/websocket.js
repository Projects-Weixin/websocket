let socketTask
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  sendMsg:function () {
    socketTask.send({
      data: JSON.stringify('socket send message success--------来自小程序')
      // data:'socket send message success--------来自小程序'
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    socketTask = wx.connectSocket({
        url: 'ws://127.0.0.1:8080/',
        header: {
          'content-type': 'application/json'
        },
        method: 'POST',
        success: function(res) {
          console.log('socket连接成功：', res)
        },
        fail: function(res) {
          console.log('socket连接失败：', res)
        },
        complete: function(res) {
          console.log('socket连接完成：', res)
        },
      })
   
    socketTask.onOpen((header) => {
      console.log('socket已打开：' , header)
      this.sendMsg()

    })
    socketTask.onError((errMsg) => {
      console.log('socket出现错误：', errMsg)
    })
    socketTask.onClose((res) => {
      console.log('socket关闭：', res)
    })
    socketTask.onMessage((res) => {
      console.log('socket接收了消息：', res.data)
    })
      // wx.connectSocket({
      //   // url: 'ws://127.0.0.1:8080/',
      //   url: 'ws://192.168.1.102:8088/',
      // })
      // wx.onSocketOpen(function(res) {
      //   console.log('socket已打开：'+res)
      // })
      // wx.onSocketError(function(res) {
      //   console.log('socket出现错误：'+res)
      // })
      // wx.onSocketClose(function(res) {
      //   console.log('socket关闭：'+res)
      // })
      // wx.onSocketMessage(function(res){
      //   console.log('socket接收了消息：' +res)
      // })
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
    socketTask.close()
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