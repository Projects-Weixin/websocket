let socketTask
var sendMsgType

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
//发送单条消息
  sendMsg:function (msg) {
    sendMsgType = 'sendMsg'
    var m = msg.currentTarget.dataset.msg
    console.log(m)
    this.socketSend(m)
  },
// for循环发送消息
  sendMsgCyclic:function(msg) {
    sendMsgType = 'sendMsgCyclic'
    var m = msg.currentTarget.dataset.msg
    var mInt = 1
    mInt = parseInt(m)
    for (var i=0; i<mInt; i++) {
      // console.log(m)
      this.socketSend(i)
    }
  },
// socket
  socketSend:function(msg) {
    socketTask.send({
      data: msg
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    socketTask = wx.connectSocket({
      url: 'ws://192.168.1.109:8080/',
      success: function (res) {
        console.log('socket连接成功：', res)
      },
    })
    socketTask.onOpen((header) => {
      console.log('socket已打开：' , header)
    })
    socketTask.onError((errMsg) => {
      console.log('socket出现错误：', errMsg)
    })
    socketTask.onClose((res) => {
      console.log('socket关闭：', res)
    })
    socketTask.onMessage((res) => {
      console.log('小程序接收了消息：', res.data)
      if (sendMsgType == 'sendMsgCyclic') {
        return
      }
      wx.showModal({
        title: '提示',
        content: res.data,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
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