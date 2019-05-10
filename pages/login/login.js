
var ac = 'litongxue'
var ps = '1'
// 是否重置所有页面
var reLaunch = false

Page({
  /**
   * 登录流程：
   * 1、http登录接口，返回userId、服务器时间等信息，根据服务器时间和手机本地时间计算时间差，并保存
   * 2、扫描考勤，返回classId、courseId、classroomId、上课时间、二维码失效时间
   * 3、调用http，校验学生是否在这个班级 
   * 4、判断二维码是否失效：手机当前时间-时间差 是否大于规定的二维码失效时间
   * 5、以上条件通过，连接websocket，发送websocket登录验证，进入主页面
   */
  loginClick: function () {
    if (this.data.account == '') {
      return
    }
    if (this.data.password == '') {
      return
    }
    
    wx.reLaunch({
      url: '/pages/home/home',
    })
  },
  

  /**
   * 更多弹窗
   */
  showMoreSheet: function () {
    this.selectComponent('#moresheet').showMoreSheet(false, function (callback) {
      //扫一扫
      if (callback == 0) {
        wx.scanCode({
          success(res) {
            console.log(res)
           
          }
        })
      }
      // 加入课堂
      else if (callback == 1) {
     
      }
    })
  },

  /**
   * 输入框 监听事件
   */
  eventhandle: function (e) {
    if (e.currentTarget.id == 'account') {
      this.setData({
        account: e.detail.value
      })
    } else if (e.currentTarget.id == 'password') {
      this.setData({
        password: e.detail.value
      })
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    h: getApp().globalData.screen.height,
    w: getApp().globalData.screen.width,
    account: '',
    password: '',
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 退出登录，重置所有页面
     * 先使用redirectTo，再reLaunch
     * 因为小程序在后台时reLaunch会失败，在前台有时也会
     */
    if (options.reLaunch != undefined) {
      reLaunch = true
      return
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    /**
        * 退出登录，重置所有页面
        * 先使用redirectTo，再reLaunch
        * 因为小程序在后台时reLaunch会失败，在前台有时也会
        */
    if (reLaunch) {
      wx.reLaunch({
        url: '/pages/login/login',
      })
      reLaunch = false
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '登录',
    })

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
    console.log('转发')

  }
})