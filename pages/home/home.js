const ws = require('../wsservice.js');

Page({

  playVideo: function() {
    wx.playVideo({
      url: 'http:127.0.0.1/login.mp4'
    })
  },
  uploadFile: function() {
    wx.chooseVideo({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://192.168.1.110/WebApplication1/upload.ashx', // 仅为示例，非真实的接口地址
          filePath: tempFilePaths,
          name: 'file',
          formData: {
            user: 'test'
          },
          success(res) {
            const data = res.data
            console.log('成功')
            // do something
          },
          fail(res) {
            console.log('失败' + res)
          }
        })
      }
    })
  },
  previewImage: function() {
    wx.previewImage({
      urls: ['http://sowcar.com/t6/695/1554286026x2362277776.jpg',
        'http://sowcar.com/t6/695/1554286071x1033062845.jpg',
        'http://sowcar.com/t6/695/1554286126x2890173921.png'
      ],
    })
  },
  openFile: function() {
    wx.downloadFile({
      url: 'http://127.0.0.1/pdf.pdf',
      success(res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath,
          success(res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },
  showModal: function() {
    wx.showModal({
      title: '1111',
      content: '222',
    })
  },
  showActionSheet: function() {
    wx.showActionSheet({
      itemList: ['1', '2', '3'],
    })
  },
  showLoading: function() {
    var self = this

    //btn loading
    this.setData({
      isloading: true
    })
    //导航条loading
    wx.showNavigationBarLoading()
    //弹窗loading
    wx.showLoading({
      title: '11',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    setTimeout(function() {
      self.setData({
        isloading: false
      })
      wx.hideNavigationBarLoading()
      wx.hideLoading()
      wx.showToast({
        title: 'loading complete',
      })
    }, 2000)
  },

  toggleDialogup: function() {
    this.selectComponent("#dialogup").showDialogup()
  },
  toggleToast: function() {
    this.toast.showToast(); 
    this.toast.hideToast();
  },

  inputTextChange: function(e) {
    this.setData({
      inputText: e.detail.value
    })
  },
  pickterDateChange: function(e) {
    this.setData({
      pickterDate: e.detail.value
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    lists: ['aaa', 'bbb'],
    isloading: false,
    pickterDate: '2016-09-01',
    inputText: '默认输入框内容',
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '我的主页', //导航栏 中间的标题
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // ws.onSocketMessage(function(handler) {
    //   console.log('home页面：' + handler)
    // })
    
    this.selectComponent("#navbar")
    this.toast = this.selectComponent("#toast");
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
    var pages = getCurrentPages()
    console.log('pages' + JSON.stringify(pages))

    for (var page in pages) {
      console.log('page' + page)
    }
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
    return {
      title: 'home',
      path: 'pages/home/home'
    }
  }
})