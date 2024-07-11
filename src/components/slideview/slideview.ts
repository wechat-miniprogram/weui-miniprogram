Component({
    /**
     * 组件的属性列表
     */
    options: {
        multipleSlots: true
    },
    properties: {
        extClass: {
            type: String,
            value: ''
        },
        buttons: {
            type: Array,
            value: [], // type, data, text, src, extClass
            observer() {
                this.addClassNameForButton()
            }
        },
        disable: {
            type: Boolean,
            value: false
        },
        icon: {
            // 是否是icon
            type: Boolean,
            value: false
        },
        show: {
            type: Boolean,
            value: false
        },
        duration: {
            type: Number,
            value: 350 // 动画市场，单位ms
        },
        throttle: {
            type: Number,
            value: 40
        },
        rebounce: {
            type: Number,
            value: 0 // 回弹距离
        }
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
        // @ts-ignore
        this.updateRight()
        this.addClassNameForButton()
        // 共享元素 this.st
        this.st = {
            movex: wx.worklet.shared(0),
            max: wx.worklet.shared(0),
            startX: wx.worklet.shared(0),
            startY: wx.worklet.shared(0),
            out: wx.worklet.shared(false), 
            isMoving: wx.worklet.shared(false), 
            disable: wx.worklet.shared(false), 
            firstAngle: wx.worklet.shared(0),
            size: {
                buttons: wx.worklet.shared([]),
            },
            transformx: wx.worklet.shared(0),
            transformTotal: wx.worklet.shared([])
        }
        this.initAnimate()
    },
    methods: {
        updateRight() {
            // 获取右侧滑动显示区域的宽度
            const data: any = this.data
            const query = this.createSelectorQuery()
            query
                .select('.left')
                .boundingClientRect((res) => {
                    const btnQuery = this.createSelectorQuery()
                    btnQuery
                        .selectAll('.btn')
                        .boundingClientRect((rects) => {
                            this.setData({
                                size: {
                                    buttons: rects,
                                    button: res,
                                    show: data.show,
                                    disable: data.disable,
                                    throttle: data.throttle,
                                    rebounce: data.rebounce
                                }
                            })
                        })
                        .exec()
                })
                .exec()
        },
        addClassNameForButton() {
            // @ts-ignore
            const { buttons, icon } = this.data
            buttons.forEach((btn) => {
                if (icon) {
                    btn.className = ''
                } else if (btn.type === 'warn') {
                    btn.className = 'weui-slideview__btn-group_warn'
                } else {
                    btn.className = 'weui-slideview__btn-group_default'
                }
            })
            this.setData({
                buttons
            })
        },
        buttonTapByWxs(data) {
            this.triggerEvent('buttontap', data, {})
        },
        hide() {
            this.triggerEvent('hide', {}, {})
        },
        show() {
            this.triggerEvent('show', {}, {})
        },
        transitionEnd() {},
        
        // 动画，从 wxs 迁移过来
        // 用 this.st 来存滑动状态
        initAnimate() {
            // 左侧动画
            this.applyAnimatedStyle('.weui-slideview__left', () => {
                'worklet';
                if (this.st.movex.value >= 0) {
                    console.log(this.st.movex.value)
                    // 往回滑
                    this.st.transformx.value = this.st.movex.value - this.st.max.value
                    if (!this.st.isMoving.value) this.st.transformx.value = 0
                } else {
                    this.st.transformx.value = this.st.movex.value
                    if (!this.st.isMoving.value) this.st.transformx.value = -this.st.max.value
                }
                return {
                    'transform': 'translateX(' + this.st.transformx.value + 'px)',
                    'transition': ''
                }   
            })

            // 按钮动画
            let transformTotal = 0
            this.createSelectorQuery().selectAll('.btn').boundingClientRect((rects) => {
                // 记录单个按钮最大值，总的最大值为所有按钮宽度的和
                var total = 0
                var buttons = []
                for (let i = rects.length - 1; i >= 0; i--) {
                    total += rects[i].width
                    buttons[i] = total
                    this.st[`transformTotal-${i}`] = wx.worklet.shared(0)
                }
                this.st.transformTotal.value = transformTotal
                this.st.size.buttons.value = buttons
                this.st.max.value = total
                
                for (let index = rects.length - 1; index >= 0; index--) {
                    this.applyAnimatedStyle(`.btn-${index}`, () => {
                        'worklet';
                        var transform = rects[index].width / this.st.max.value * this.st.movex.value
                        // 0 固定就是 0
                        var transformt = this.st[`transformTotal-${index}`].value

                        var transformx
                        
                        if (this.st.movex.value >= 0) {
                            // 往回滑
                            transformx = -(this.st.size.buttons.value[index] - Math.min(this.st.size.buttons.value[index], transform + transformt))
                            if (!this.st.isMoving.value) transformx = 0
                        } else {
                            transformx = Math.max(-this.st.size.buttons.value[index], transform + transformt)
                            if (!this.st.isMoving.value) transformx = -this.st.size.buttons.value[index]
                        }

                        // 计算下一个的值
                        if (index > 0) this.st[`transformTotal-${index - 1}`].value = this.st[`transformTotal-${index}`].value + transform

                        return {
                            'transform': `translateX(${transformx}px)`,
                            'transition': ''
                        }   

                    }) 
                    
                }
            }).exec()
        },
        touchstart(event) {
            'worklet';
            
            if (this.st.disable.value) return // disable的逻辑
            this.st.startX.value = event.touches[0].pageX
            this.st.startY.value = event.touches[0].pageY
            this.st.firstAngle.value = 0
        },
        touchmove(event) {
            'worklet';
            const pagex = event.touches[0].pageX - this.st.startX.value
            const pagey = event.touches[0].pageY - this.st.startY.value
            // 左侧45度角为界限，大于45度则允许水平滑动
            if (this.st.firstAngle.value === 0) {
                this.st.firstAngle.value = Math.abs(pagex) - Math.abs(pagey)
            }
            if (this.st.firstAngle.value < 0) {
                return
            }

            this.st.isMoving.value = true
            this.st.movex.value = pagex > 0 ? Math.min(this.st.max.value, pagex) : Math.max(-this.st.max.value, pagex)
            
            return false // 禁止垂直方向的滑动
        },
        touchend(event) {
            this.st.isMoving.value = false
        }
    }
})
