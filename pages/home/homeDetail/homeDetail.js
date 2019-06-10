// pages/home/homeDetail/homeDetail.js
Page({

  showAnswerResultsSheet: function() {
    // 方法返回 select index
    this.selectComponent('#answerresultssheet').showAnswerResultsSheet(false, function(callback) {
      console.log('answerresultssheet calback' + callback)
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

  pageImage: function() {
    var url = '/pages/photo/photo?key='+'11'
    wx.navigateTo({
      url: url,
    })
  },
  compImage: function() {

  },
  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      src: 'https://raw.githubusercontent.com/panmenglin/mp-photo-album/transform/common/images/Desert1.jpg', // 原图
      previewSrc: 'https://raw.githubusercontent.com/panmenglin/mp-photo-album/transform/common/images/Desert1_1280.jpg', // 预览大图
      listSrc: 'https://raw.githubusercontent.com/panmenglin/mp-photo-album/transform/common/images/Desert1_200.jpg', // 列表小图
      desc: '图片描述', // 图片描述
      check: false // 是否选中
    }],
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
        url: 'https://picbed.quantuminit.com/a0b02a68780c40ae.png',
        unstudied: false
      },
      {
        url: 'https://picbed.quantuminit.com/04dfde76b6e4410a.png',
        unstudied: false
      },
      {
        url: 'https://picbed.quantuminit.com/7b0aea9fa816411d.png',
        unstudied: false
      },
      {
        url: 'https://picbed.quantuminit.com/a0b02a68780c40ae.png',
        unstudied: false
      },
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