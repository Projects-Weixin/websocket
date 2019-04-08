const url = require('pages/urlservice.js');
const ws = require('pages/wsservice.js');

//app.js
App({
  onLaunch: function () {
    // socket 连接
    ws.webSocket.connectSocket()

    // socket 接收消息
    ws.onSocketMessage(function (handler) {

    })

    // setTimeout(function(){
    //   let pages = JSON.stringify(getCurrentPages())
    //   console.log('app = pages' + getCurrentPages()[0], pages, pages.length)

      
    // },4000)

    var pages = getCurrentPages()
    console.log('pages'+pages)

    for (var page in pages) {
      console.log('page'+page)
    }

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // 登录
    wx.login({
      success: res => {
        console.log('login' + JSON.stringify(res))
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log('getSetting' + JSON.stringify(res))
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('getUserInfo' + JSON.stringify(res))
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      },
      fail:res => {
        console.log('getSetting' + JSON.stringify(res))
      }
    })

    var that = this
    // 获取系统信息
    wx.getSystemInfo({
      success: function(res) {
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);

        that.globalData.screen.width = res.windowWidth
        that.globalData.screen.height = res.windowHeight
      },
    })
  },

  globalData: {
    userInfo: null,
    screen:{
      width:0,
      height:0
    }
  }

})