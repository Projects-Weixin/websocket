var socketURL = 'ws://192.168.21.5:8082'
//socket任务
var socketTask
//定时器任务
var timerTask

var webSocket = {

  /*
  连接
  */
  connectSocket: function() {
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

    /**
     * 收到消息
     */
    // socketTask.onMessage(function(res) {
    //   console.log('接收消息', res)
    // })

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
  开启心跳包，小程序timer是延迟执行，所以这里使用了递归
  */
  startHeartBeat: function() {
    var that = this
    timerTask = setInterval(function() {
      that.sendSocketMessage('heart')
    }, 5000);

  },

  /*
  停止心跳包
  */
  stopHeartBeat: function() {
    if (timerTask) {
      clearInterval(timerTask)
      timerTask = null
    }
  }
}
/**
 * 获取新消息
 */
function onSocketMessage(handler) {
  socketTask.onMessage(function(res) {
    console.log('接收消息', res)
    handler && handler(JSON.stringify(res))
  })
}

module.exports = {
  webSocket: webSocket,
  onSocketMessage: onSocketMessage
}