
答题选项弹窗组件使用：

1、需求文件json中引入组件路径：
"usingComponents": {
    "answersheet": "../../components/answersheet/answersheet"
}

2、需求文件wxml中引入组件标签, pageDismiss：已经选择选项，页面是消失
<view>
    <answersheet id='answersheet' pageDismiss='true'></answersheet>
</view>

3、需求文件JS中引入组件JS相关调用方法,callback是选择选项的回调
 showAnswerSheet: function() {
    this.selectComponent('#answersheet').showAnswerSheet('', function(callback) {
      console.log('homedetail' + callback)
    })
  },

