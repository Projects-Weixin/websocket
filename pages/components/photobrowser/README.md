
答题选项弹窗组件使用：

1、需求文件json中引入组件路径：
"usingComponents": {
    "photobrowser": "../../components/photobrowser/photobrowser"
}

2、需求文件wxml中引入组件标签, multiple是否是多选，默认单选
<view>
    <photobrowser id='photobrowser'></photobrowser>
</view>

3、需求文件JS中引入组件JS相关调用方法
  pics：图片数据、数组类型
  this.selectComponent('#photobrowser').setPics(this.data.pics)

  false：是否隐藏图片浏览器
  this.selectComponent('#photobrowser').showPhotoBrowser(false)

