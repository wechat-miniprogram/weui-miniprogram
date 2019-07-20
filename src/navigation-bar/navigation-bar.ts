
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    loadingSize: {
      type: Object,
      value: { width: 50, height: 50 }
    },
    background: {
      type: String,
      value: '#ffffff',
    },
    color: {
      type: String,
      value: '#000'
    },
    back: {
      type: Boolean,
      value: true
    },
    loading: {
      type: Boolean,
      value: false,
    },
    animated: { // 显示隐藏的时候
      type: Boolean,
      value: true,
    },
    show: {
      type: Boolean,
      value: true,
      observer: '_showChange'
    },
    // 返回的深度
    delta: {
      type: Number,
      value: 1,
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    displayStyle: ''
  },
  attached() {
    wx.getSystemInfo({
        success: res => {
          const ios = !!(res.system.toLowerCase().search('ios') + 1)
          /*
          苹果产品型号符合字符串排序规则
          ["iPhone 7 Plus", "iPhone X", "iPhone XS", "iPhone XS Max", "iPhone XR", "iPhone 6S", "iPhone 8 Plus"].sort() ->
          ["iPhone 6S", "iPhone 7 Plus", "iPhone 8 Plus", "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max"]
          */
          this.setData({ios, statusBarHeight: res.statusBarHeight})
      },
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _showChange(show) {
      const animated = this.data.animated
      let displayStyle = ''
      if (animated) {
        displayStyle = `opacity: ${show ? '1' : '0'};-webkit-transition:opacity 0.5s;transition:opacity 0.5s;`
      } else {
        displayStyle = `display: ${show ? '' : 'none'}`
      }
      this.setData({
        displayStyle
      })
    },
    back() {
      const data:any = this.data
      wx.navigateBack({
        delta: data.delta
      })
      this.triggerEvent('back', {delta: data.delta}, {})
    }
  }
})
