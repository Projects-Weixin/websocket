使用：
1、需求文件json中引入组件路径：
"usingComponents": {
    "options": "/components/options/options"
}

2、需求文件wxml中引入组件标签, multiple是否是多选，默认单选
<view>
  <options id='options' multiple='true'></options>
</view>

3、需求文件JS中引入组件JS相关调用方法
 this.selectComponent('#options').updateOption(this.data.options,function(callback){
      console.log(callback)
    })

