// pages/components/photobrowser/photobrowser.js

const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pics: { //导航栏标题
      type: Array,
      value: [], //默认
      observer: function(newVal, oldVal, changedPath) {
        if (!newVal) {
          let obj = {};
          obj[changedPath[0]] = oldVal;
          this.setData(obj);
        }
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    width: app.globalData.systemInfo.screenWidth,
    height: app.globalData.systemInfo.screenHeight,
    isPhotoBrowserHidden: false,
    isActionSheetHidden: true,
    cur: 0,//不使用current字段是因为：通过current修改swipe当前项会导致重复setdata异常（小程序已知bug）
    pics: [{
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
   * 组件的方法列表
   */
  methods: {
    onImageChange:function(e) {
      console.log('change:',e)
    },

    onImageScale:function(e) {
      console.log('scale:',e)
    },

    /**
     * 屏幕旋转，窗口尺寸变化
     */
    onResize: function(res) {
      console.log('onResize', res)
      this.setData({
        width:res.size.windowWidth,
        height:res.size.windowHeight
      })
    },

    //图片选项目录
    showActionSheet: function(e) {
      console.log(e.currentTarget.dataset)
      var h = false
      if (e.currentTarget != undefined) {
        let hid = e.currentTarget.dataset.hidden;
        h = hid.toString().toLowerCase() == 'true'
        if (e.currentTarget.dataset.current != undefined) {
          this.setData({
            cur: parseInt(e.currentTarget.dataset.current),
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
      var i = this.data.cur
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
        cur: e.detail.current,
      })
    },

    // 图片加载事件,可获取图片宽高
    eventhandle: function(e) {},

    // 显示/隐藏 图片浏览器
    showPhotoBrowser: function(e) {
      return

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
      if (h) {
        wx.navigateBack({})
      }
    },

    setPics: function(e) {
      this.setData({
        pics: e
      })
    }
  }
})