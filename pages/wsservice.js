const url = require('./urlservice.js');

/**
 * socketReadyState
 * 0：CONNECTING
 * 1：OPEN
 * 2：CLOSING
 * 3：CLOSED
 */
//socket任务
var socketTask
//定时器任务
var timerTask
//消息队列任务
var messageQueueTask = []

var webSocket = {

  /**
   * 收到消息，分发到页面
   * 找到页面中是否有定义的onCmd函数，如果没有则新增改函数
   */
  messageNotifyPage: function (res) {
    console.log('messageNotifyPage：', res)

    var pages = getCurrentPages()
    for (let i = 0; i < pages.length; i++) {
      let p = pages[i];

      var func = res.data.cmd
      func = func.slice(0, 1).toUpperCase() + func.slice(1)

      if (p["onCmd" + func] != undefined) {
        // 如果是顶层页面，显示弹窗
        var isTopPage = false
        if (i == pages.length - 1) {
          isTopPage = true
        }
        p["onCmd" + func](res, isTopPage);
      }
    }
  },

  /**
   * 发送消息
   * cmd：指令
   * msg：消息
   */
  sendMessage: function (cmd, msg) {
    /**
    if (!isOpen) {
      messageQueueTask.push({
        cmd: cmd,
        msg: msg
      })
      console.log('socket未打开,不能发送消息,已保存到临时消息队列中', messageQueueTask)
      return
    }
    *
     */

    var that = this
    socketTask.send({
      // wx.sendSocketMessage({
      data: JSON.stringify({
        "cmd": cmd,
      }),
      success: function (res) {
        console.log('发送成功', cmd, res)
      },
      fail: function (res) {
        console.log('发送失败', cmd, res, socketTask)
        if (socketTask.readyState != 1 || res.errMsg == 'sendSocketMessage:fail taskID not exist') {
          that.connectSocket()
        }
      },
    })
  },

  /**
   * 连接成功，打开回调callback
   */
  connectSocket: function (callback) {
    if (socketTask != undefined || socketTask != null) {
      socketTask.close()
      socketTask = null;
    }
    socketTask = wx.connectSocket({
      url: url.socketURL(),
      success: function (res) {
        console.log('socket连接成功：', res)
      },
      fail: function (res) {
        console.log('socket连接失败：', res)
        wx.hideLoading()
        wx.showToast({
          title: res.errMsg,
        })
      },
    })

    var that = this

    /**
     * socket打开
     */
    socketTask.onOpen(function (res) {
      // wx.onSocketOpen(function(res) {
      that.startHeartBeat()
      if (callback) {
        callback()
      }
      console.log('socket已打开：', res)

      /*
      // socket打开时，在消息队列中查找是否有未发送的消息
      for (var i = 0; i < messageQueueTask.length; i++) {
        var item = messageQueueTask[i]
        that.sendMessage(item.cmd, item.msg)
      }
      messageQueueTask = []
      */
    })

    /**
     * 收到消息
     */
    socketTask.onMessage(function (res) {
      // wx.onSocketMessage(function(res) {

      that.messageNotifyPage(JSON.parse(res.data))
    })

    socketTask.onError(function (res) {
      // wx.onSocketError(function(res) {
      console.log('socket出现错误：', res)
      wx.hideLoading()
    })
    socketTask.onClose(function (res) {
      // wx.onSocketClose(function(res) {
      console.log('socket关闭：', res)
      var code = res.code
      var reason = res.reason

      // 收到下课指令，小程序主动关闭
      if (code == 1000 && reason == "normal closure") {
        console.log('小程序主动断开webSocket连接')
      }
      // 小程序切换到后台，被微信杀掉，需要重连连接
      if (code == 1000 && reason == "interrupted") {
        console.log('webSocket服务被微信杀掉，需要重连')
      }
      // 后台把我踢掉
      if (code == 1001 && reason == "Stream end encountered") {

      }
      // 后台关掉服务
      if (code == 1006 && reason == "abnormal closure") {
        console.log('后台关闭了webSocket服务')
      }
    })
  },

  /*
  关闭连接
  */
  closeSocket: function () {
    // wx.closeSocket()
    socketTask.close()
  },

  /*
  开启心跳包
  */
  startHeartBeat: function () {
    var that = this
    if (!timerTask) {
      timerTask = setInterval(function () {
        that.sendMessage(url.cmd.heart, '')
      }, 10000);
    }
  },

  /*
  停止心跳包
  */
  stopHeartBeat: function () {
    // if (timerTask) {
    clearInterval(timerTask)
    timerTask = null
    // }
  }
}

module.exports = {
  webSocket: webSocket,
}