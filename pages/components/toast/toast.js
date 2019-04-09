// pages/components/toast/toast.js
Component({
  /**
  * 组件的属性列表
  */
  properties: {    //定义组件属性
    information: {   //用来显示提示信息
      type: String,   // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '提示信息'  // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    icon: {     //图标类型，我在images文件夹中存放了success和fail的两个图标
      type: String,
      value: 'success'
    },
    showTime: {    //弹窗开始显示的时间单位ms
      type: Number,
      value: 1000
    },
    hideTime: {    //弹窗开始隐藏的时间单位ms
      type: Number,
      value: 1000
    }
  },
  /**
  * 组件的初始数据
  */
  data: {
    isHidden: true
  },
  /**
  * 组件的方法列表
  */
  methods: {
    showToast: function () {
      this.setData({
        isHidden: false
      });
    },
    hideToast: function (e) {
      let that = this;
      setTimeout(function () {
        that.setData({
          isHidden: true
        });
      }, that.data.hideTime);
    }
  }
})
