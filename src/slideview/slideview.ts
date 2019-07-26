Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    buttons: {
      type: Array,
      value: [] // type, text, src
    },
    disable: {
      type: Boolean,
      value: false
    },
    icon: { // 是否是icon
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    size: null
  },

  /**
   * 组件的方法列表
   */
  ready() {
    //@ts-ignore
    this.updateRight()
    this.data.buttons.forEach(btn => {
      if (this.data.icon) {
        btn.className = ''
      } else if (btn.type === 'warn') {
        btn.className = 'weui-slideview__btn-group_warn'
      } else {
        btn.className = 'weui-slideview__btn-group_default'
      }
    });
    this.setData({
      buttons: this.data.buttons
    })
  },
  methods: {
    updateRight() {
      // 获取右侧滑动显示区域的宽度
      const query = wx.createSelectorQuery().in(this)
      query.select('.left').boundingClientRect((res) => {
        console.log('right res', res)
        const btnQuery = wx.createSelectorQuery().in(this)
        btnQuery.selectAll('.btn').boundingClientRect((rects) => {
          console.log('btn rects', rects)
          this.setData({
            size: {
              buttons: rects,
              button: res,
              // disable: this.data.disable
            }
          })
        }).exec()
      }).exec()
    },
      
    buttonTapByWxs(data) {
      this.triggerEvent('buttontap', data, {})
    },
    hide() {
      this.triggerEvent('hide', {}, {})
    },
    show() {
      this.triggerEvent('show', {}, {})
    }
  }
})
