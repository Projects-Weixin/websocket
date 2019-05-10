
var url = 'http://cdn.zoeservers.com/testaudio/Don%27t%20Cry%20%28Original%29-Guns%20N%27%20Roses.'

Page({
  openUrl: function(e) {
    var url = e.currentTarget.dataset.index
    getApp().globalData.url = url

    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  data: {
    urls: [{
        'type': 'aac',
        'url': url + 'aac'
      },
      {
        'type': 'ac3',
        'url': url + 'ac3'
      },
      {
        'type': 'amr',
        'url': url + 'amr'
      },
      {
        'type': 'ape',
        'url': url + 'ape'
      },
      {
        'type': 'flac',
        'url': url + 'flac'
      },
      {
        'type': 'mmf',
        'url': url + 'mmf'
      },
      {
        'type': 'mp2',
        'url': url + 'mp2'
      },
      {
        'type': 'mp3',
        'url': url + 'mp3'
      },
      {
        'type': 'ogg',
        'url': url + 'ogg'
      },
      {
        'type': 'wav',
        'url': url + 'wav'
      },
      {
        'type': 'wma',
        'url': url + 'wma'
      },
      {
        'type': 'wv',
        'url': url + 'wv'
      },
    ],

  },

})