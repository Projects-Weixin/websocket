const url = require('pages/urlservice.js');
const ws = require('pages/wsservice.js');
const guid = require('./utils/guid.js');

//app.js
App({
  onShow: function() {
    console.log('app+show')
  },
  onHide: function() {
    console.log('app+hide')
  },

  onLaunch: function() {
    // socket 连接
    // ws.webSocket.connectSocket()

    // // socket 接收消息
    // ws.onSocketMessage(function (handler) {

    // })


    var pages = getCurrentPages()
    console.log('pages' + pages)

    for (var page in pages) {
      console.log('page' + page)
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
      fail: res => {
        console.log('getSetting' + JSON.stringify(res))
      }
    })

    // console.log(wx.getMenuButtonBoundingClientRect())


    var that = this
    // 获取系统信息
    wx.getSystemInfo({
      success: function(res) {
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        that.globalData.systemInfo = res
        that.globalData.screen.width = res.windowWidth
        that.globalData.screen.height = res.windowHeight
      },
    })
  },

  globalData: {
    systemInfo: {},
    userInfo: null,
    screen: {
      width: 0,
      height: 0
    }
  },
  //带参跳页
  urlParams: {},
  /**
   * 重写navigateTo方法（页面URL，参数）
   */
  navigateTo: function(url, param) {
    let strGuid = guid.newGuid();
    this.urlParams[strGuid] = param;
    wx.navigateTo({
      url: url + '?guid=' + strGuid,
    });
  },
  
  /**
   * 重写redirectTo方法（页面URL，参数）
   */
  redirectTo: function(url, param) {
    let strGuid = guid.newGuid();
    this.urlParams[strGuid] = param;
    wx.redirectTo({
      url: url + '?guid=' + strGuid,
    });
  },
  /**
   * onLoad中获取页面参数
   */
  getParam: function(query) {
    let strGuid = query.guid;
    return this.urlParams[strGuid];
  }


})