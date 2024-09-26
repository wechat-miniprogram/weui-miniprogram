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
            value: false,
            observer() {
                if (!this.st) return
                if (this.data.show) {
                    this.showButtons()
                } else {
                    this.hideButtons()
                }
            }
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
    data: {},

    /**
     * 组件的方法列表
     */
    ready() {
        this.addClassNameForButton()
        // 共享元素 this.st
        this.st = {
            movex: wx.worklet.shared(0),
            max: wx.worklet.shared(0),
            startX: wx.worklet.shared(0),
            startY: wx.worklet.shared(0),
            out: wx.worklet.shared(this.data.show),
            isMoving: wx.worklet.shared(false),
            firstAngle: wx.worklet.shared(0),
            buttons: wx.worklet.shared([])
        }
        this.initAnimate()
    },
    methods: {
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
        buttonTap(event) {
            this.hideButtons()
            const index = event.currentTarget.dataset.index
            this.triggerEvent(
                'buttontap',
                {
                    index,
                    data: this.data.buttons[index].data
                },
                {}
            )
        },
        transitionEnd() {},

        showButtons() {
            if (this.data.disable) return
            const { movex, max, out } = this.st
            if (out.value) return
            out.value = true
            movex.value = this.data.duration
                ? wx.worklet.timing(max.value, { duration: this.data.duration }, () => {})
                : max.value
            this.triggerEvent('show', {}, {})
        },

        hideButtons() {
            if (this.data.disable) return
            const { movex, out } = this.st
            if (!out.value) return
            out.value = false
            movex.value = this.data.duration
                ? wx.worklet.timing(0, { duration: this.data.duration }, () => {})
                : 0
            this.triggerEvent('hide', {}, {})
        },

        // 动画，从 wxs 迁移过来
        // 用 this.st 来存滑动状态
        initAnimate() {
            // 左侧动画
            this.applyAnimatedStyle('.weui-slideview__left', () => {
                'worklet'
                const { movex } = this.st
                return {
                    transform: `translateX(${-movex.value}px)`
                }
            })

            // 按钮动画
            this.createSelectorQuery()
                .selectAll('.btn')
                .boundingClientRect((rects) => {
                    // 记录单个按钮最大值，总的最大值为所有按钮宽度的和
                    let total = 0
                    const buttons = []
                    for (let i = rects.length - 1; i >= 0; i--) {
                        total += rects[i].width
                        buttons[i] = total
                    }
                    this.st.buttons.value = buttons
                    this.st.max.value = total
                    if (this.data.show) this.st.movex.value = total

                    for (let index = rects.length - 1; index >= 0; index--) {
                        this.applyAnimatedStyle(`.btn-${index}`, () => {
                            'worklet'
                            const { movex, max, buttons } = this.st
                            const leftWidth = buttons.value[index]
                            const transformx = (movex.value * leftWidth) / max.value

                            return {
                                transform: `translateX(${-transformx}px)`
                            }
                        })
                    }
                })
                .exec()
        },
        touchstart(event) {
            'worklet'

            if (this.data.disable) return // disable的逻辑
            const { startX, startY, firstAngle } = this.st
            startX.value = event.touches[0].pageX
            startY.value = event.touches[0].pageY
            firstAngle.value = 0
        },
        touchmove(event) {
            'worklet'
            if (this.data.disable) return // disable的逻辑
            const { startX, startY, firstAngle, isMoving, movex, max, out } = this.st
            const pagex = event.touches[0].pageX - startX.value
            const pagey = event.touches[0].pageY - startY.value
            // 左侧45度角为界限，大于45度则允许水平滑动
            if (firstAngle.value === 0) {
                firstAngle.value = Math.abs(pagex) - Math.abs(pagey)
            }
            if (firstAngle.value < 0) {
                return
            }

            isMoving.value = true
            if (out.value) {
                movex.value = Math.max(0, Math.min(max.value - pagex, max.value))
            } else {
                movex.value = Math.max(0, Math.min(-pagex, max.value))
            }

            return false // 禁止垂直方向的滑动
        },
        touchend(event) {
            'worklet'
            if (this.data.disable) return // disable的逻辑
            const { throttle } = this.data
            const { startX, isMoving } = this.st
            if (!isMoving.value) return

            const pagex = event.changedTouches[0].pageX - startX.value

            isMoving.value = false
            if (Math.abs(pagex) < throttle || pagex > 0) {
                this.hideButtons()
            } else {
                this.showButtons()
            }
        }
    }
})
