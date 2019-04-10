// pages/home/homeDetail/homeDetail.js
Page({

  showAnswerResultsSheet:function() {
    // 方法返回 select index
    this.selectComponent('#answerresultssheet').showAnswerResultsSheet(false,function(callback) {
      console.log('answerresultssheet calback'+callback)
    })
  },

  showAnswerSheet: function() {
    this.selectComponent('#answersheet').showAnswerSheet('', function(callback) {
      console.log('homedetail' + callback)
    })
  },

  customPreviewImage: function() {
    this.selectComponent('#photobrowser').setPics(this.data.pics)
    this.selectComponent('#photobrowser').showPhotoBrowser(false)
  },
  /**
   * 页面的初始数据
   */
  data: {
    options: [{
        option: 'A'
      },
      {
        option: 'B'
      },
      {
        option: 'C'
      },
      {
        option: 'D'
      },
      {
        option: 'E'
      },
      // {
      //   option: 'F'
      // },
    ],
    pics: [{
        url: 'http://sowcar.com/t6/695/1554286026x2362277776.jpg',
        unstudied: false
      },
      {
        url: 'http://sowcar.com/t6/695/1554286071x1033062845.jpg',
        unstudied: false
      },
      {
        url: 'http://sowcar.com/t6/695/1554286126x2890173921.png',
        unstudied: false
      },
      {
        url: 'http://sowcar.com/t6/695/1554286071x1033062845.jpg',
        unstudied: false
      },
      {
        url: 'http://sowcar.com/t6/695/1554286126x2890173921.png',
        unstudied: false
      },
      {
        url: 'http://sowcar.com/t6/695/1554286071x1033062845.jpg',
        unstudied: false
      },
      {
        url: 'http://sowcar.com/t6/695/1554286126x2890173921.png',
        unstudied: false
      },
      {
        url: 'http://sowcar.com/t6/695/1554286071x1033062845.jpg',
        unstudied: false
      },
      {
        url: 'http://sowcar.com/t6/695/1554286126x2890173921.png',
        unstudied: false
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  }
})