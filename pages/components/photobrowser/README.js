/**
 *
图片浏览器组件使用：（支持新页面打开，当前页面打开）

1、需求文件json中引入组件路径
auto字段为屏幕自动旋转

"usingComponents": {
    "photobrowser": "/components/photobrowser/photobrowser"
}
 "pageOrientation": "auto"

2、需求文件wxml中引入组件标签,
<view>
    <photobrowser id='photobrowser' pics='{{pics}}'></photobrowser>
</view>

3、需求文件JS中引入组件JS相关调用方法
  屏幕旋转，更新页面
  onResize: function(res) {
    res.size.windowWidth // 新的显示区域宽度
    res.size.windowHeight // 新的显示区域高度
    console.log('onResize', res)
    this.selectComponent('#photobrowser').onResize(res)
  },

  下面方法可不使用
  
  pics：图片数据、数组类型
  this.selectComponent('#photobrowser').setPics(this.data.pics)

  false：是否隐藏图片浏览器
  this.selectComponent('#photobrowser').showPhotoBrowser(false)

 */