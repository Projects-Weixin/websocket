// pages/my/my.js

const app = getApp()

Page({

  showAnswerSheet: function() {
    this.selectComponent('#answersheet').showAnswerSheet()
  },

  /**
   * 页面的初始数据
   */
  data: {
    votes: [{
        option: 'A',
        num: 20,
        progress: 100
      },
      {
        option: 'B',
        num: 30,
        progress: 100
      },
      {
        option: 'C',
        num: 40,
        progress: 100
      },
      {
        option: 'D',
        num: 10,
        progress: 100
      },
      {
        option: 'E',
        num: 70,
        progress: 100
      },
      {
        option: 'F',
        num: 100,
        progress: 100
      },
    ],
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.selectComponent('#votes').updateProgress(this.data.votes)
    this.selectComponent('#options').updateOption(this.data.options, function(callback) {
      console.log(callback)
    })
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