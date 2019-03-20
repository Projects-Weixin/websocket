var socketURL = 'ws://192.168.1.109:8080/'
//socket任务
var socketTask
//定时器任务
var timerTask

var webSocket = {

  /*
  连接
  */
  connectSocket: function(handler) {
    socketTask = wx.connectSocket({
      url: socketURL,
      success: function(res) {
        console.log('socket连接成功：', res)
      },
      fail: function(res) {
        console.log('socket连接失败：', res)
      },
    })

    var that = this
    /*
    socket打开
    */
    socketTask.onOpen(function(res) {
      console.log('socket已打开：', res)
      that.startHeartBeat()
    })
    socketTask.onError(function(res) {
      console.log('socket出现错误：', res)
    })
    socketTask.onClose(function(res) {
      console.log('socket关闭：', res)
    })
  },

  /*
  发送消息
  */
  sendSocketMessage: function(msg) {
    socketTask.send({
      data: JSON.stringify({
        'msg': msg
      }),
      success: function(res) {},
      fail: function(res) {},
    })
  },

  /*
  关闭连接
  */
  closeSocket: function() {
    socketTask.close()
    this.stopHeartBeat()
  },

  /*
  接收消息
  */
  socketMessage: function(res) {
    socketTask.onMessage(function(res) {
      console.log('接收消息', res)
    })
  },

  /*
  开启心跳包，小程序timer是延迟执行，所以这里使用了递归
  */
  startHeartBeat: function() {
    this.sendSocketMessage('heart')
    var that = this
    timerTask = setTimeout(function() {
      that.startHeartBeat()
    }, 5000);

  },

  /*
  停止心跳包
  */
  stopHeartBeat: function() {
    if (timerTask) {
      clearTimeout(timerTask)
      timerTask = nil
    }
  }
}

module.exports = webSocket;