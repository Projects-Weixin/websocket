// pages/components/photobrowser/photobrowser.js

const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    height: app.globalData.screen.height,
    isPhotoBrowserHidden: true,
    isActionSheetHidden: true,
    current: 0,
    pics: [{
        url: 'http://sowcar.com/t6/695/1554286026x2362277776.jpg',
        unstudied: false
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //图片选项目录
    showActionSheet: function(e) {
      console.log(e.currentTarget.dataset)
      var h = false
      if (e.currentTarget != undefined) {
        let hid = e.currentTarget.dataset.hidden;
        h = hid.toString().toLowerCase() == 'true'
        if (e.currentTarget.dataset.current != undefined) {
          this.setData({
            current: parseInt(e.currentTarget.dataset.current),
          })
        }
      } else {
        h = e
      }
      this.setData({
        isActionSheetHidden: h
      })
    },

    // 不懂事件
    unstudiedClick: function() {
      var i = this.data.current
      var pic = this.data.pics[i]
      // 如果已经点击了不懂
      if (pic.unstudied) {
        return
      }

      pic.unstudied = true
      this.data.pics[i] = pic
      this.setData({
        pics: this.data.pics
      })
    },

    // 图片翻页事件
    bindchange: function(e) {
      // 先把图片选择目录 隐藏
      if (!this.data.isActionSheetHidden) {
        this.setData({
          isActionSheetHidden: true
        })
      }

      this.setData({
        current: e.detail.current,
      })
    },

    // 图片加载事件,可获取图片宽高
    eventhandle: function(e) {},

    // 显示/隐藏 图片浏览器
    showPhotoBrowser: function(e) {
      // 先把图片选择目录 隐藏
      if (!this.data.isActionSheetHidden) {
        this.setData({
          isActionSheetHidden: true
        })
        return
      }

      console.log(e)
      var h = e
      if (e.currentTarget != undefined) {
        h = e.currentTarget.dataset.hidden
      }
      this.setData({
        isPhotoBrowserHidden: h
      })
    },

    setPics: function(e) {
      this.setData({
        pics: e
      })
    }
  }
})