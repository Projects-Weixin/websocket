使用：
1、需求文件json中引入组件路径：
"usingComponents": {
    "options": "/components/votes/votes"
}

2、需求文件wxml中引入组件标签, 
<view>
  <votes id='votes'></votes>
</view>

3、需求文件JS中引入组件JS相关调用方法
    this.selectComponent('#votes').updateProgress(this.data.votes)


