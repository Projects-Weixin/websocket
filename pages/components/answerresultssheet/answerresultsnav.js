// pages/components/answerresultssheet/answerresultsnav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /** 
     * 结果类型：
     * type:0--->正确、错误、对错、不知道
     * type:1--->正确、错误
     */
    type: {
      type: Number,
      value: 0
    },

    /**
     * 当前第几题
     */
    currentNum: {
      type: Number,
      value: 1
    },
    /**
     * 选择目录按钮是否可点击，默认不可点击
     */ 
    optionEnable: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   *  
   */
  data: {
    resultTypes: [{
        image: './image/as-success.png',
        num: '11',
      },
      {
        image: './image/as-fail.png',
        num: '12'
      },
      {
        image: './image/as-success-fail.png',
        num: '13'
      },
      {
        image: './image/as-unknow.png',
        num: '11'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    optionClick: function(callback) {
      if (!this.data.optionEnable) {
        return
      }
      callback()
    }
  }
})