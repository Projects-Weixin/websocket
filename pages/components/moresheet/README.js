/**
 *
更多弹窗组件（moresheet）使用：

1、需求文件json中引入组件路径：
"usingComponents": {
    "moresheet": "/components/moresheet/moresheet"
}

2、需求文件wxml中引入组件标签, multiple是否是多选，默认单选
<view>
  <moresheet id='moresheet' ></moresheet>
</view>

3、需求文件JS中引入组件JS相关调用方法
 this.selectComponent('#moresheet').showMoreSheet(false, function (callback) {
      //扫一扫
      if (callback == 0) {

      }

      // 加入课堂
      else if (callback == 1) {

      }
    })
 */

