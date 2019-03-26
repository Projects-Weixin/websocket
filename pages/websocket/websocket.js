// let socketTask
// var sendMsgType
const ws = require('../wsservice.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //发送单条消息
  sendMsg: function(msg) {
    // sendMsgType = 'sendMsg'
    var m = msg.currentTarget.dataset.msg
    console.log(m)
    this.socketSend(m)
  },
  // for循环发送消息
  sendMsgCyclic: function(msg) {
    // sendMsgType = 'sendMsgCyclic'
    var m = msg.currentTarget.dataset.msg
    var mInt = 1
    mInt = parseInt(m)
    for (var i = 0; i < mInt; i++) {
      // console.log(m)
      this.socketSend(i)
    }
  },
  closeSocket: function() {
    ws.webSocket.closeSocket()
  },
  // socket
  socketSend: function(msg) {
    ws.webSocket.sendSocketMessage(msg)
  },

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    ws.onSocketMessage(function (res) {
      console.log('socket页面：' + res)
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
    // socketTask.close()
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