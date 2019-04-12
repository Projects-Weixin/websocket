
一：答题结果题目选择弹窗组件（answerresultssheet）使用：

1、需求文件json中引入组件路径：
"usingComponents": {
    "answerresultssheet":"../../components/answerresultssheet/answerresultssheet"
}

2、需求文件wxml中引入组件标签, currentNum当前选择的哪一题，默认currentNum=1
<view>
    <answerresultssheet id='answerresultssheet' currentNum='1'></answerresultssheet>
</view>

3、需求文件JS中引入组件JS相关调用方法，callback是选择哪一题的回调
 showAnswerResultsSheet:function() {
    // 方法返回 select index
    this.selectComponent('#answerresultssheet').showAnswerResultsSheet(false,function(callback) {
      console.log('answerresultssheet calback'+callback)
    })
  },


二：答题结果页面导航条组件（answerresultsnav）使用：


1、需求文件json中引入组件路径：
"usingComponents": {
    "answerresultsnav":"./answerresultsnav"
}

2、需求文件wxml中引入组件标签,
 currentNum:当前选择的哪一题，默认currentNum=1，
 type：1：答题结果类型：正确、错误、对错、不知道，2：答题结果类型：正确、错误，默认type=1
 optionEnable:选择目录按钮是否可点击，默认optionEnable=false
<view>
    <answerresultsnav id='answerresultsnav' type='1' optionEnable='false' currentNum='{{currentNum}}'></answerresultsnav>
</view>

3、需求文件JS中引入组件JS相关调用方法，callback为点击选择答题目录按钮的回调
 showAnswerResultsSheet:function() {
    // 方法返回 select index
    this.selectComponent('#answerresultsnav').optionClick(function(callback) {
      
    })
  },