Component({
    options: {
        virtualHost: true,
        multipleSlots: true, // 在组件定义时的选项中启用多slot支持
        addGlobalClass: true
    } as any,
    properties: {
        closabled: {
            // 是否具有关闭标签
            type: Boolean,
            value: true
        },
        title: {
            // 标题，也可以通过 slot 自定义
            type: String,
            value: ''
        },
        subTitle: {
            // 副标题，也可以通过 slot 自定义
            type: String,
            value: ''
        },
        extClass: {
            // 弹窗 class
            type: String,
            value: ''
        },
        desc: {
            type: String,
            value: ''
        },
        tips: {
            type: String,
            value: ''
        },
        maskClosable: {
            type: Boolean,
            value: true
        },
        mask: {
            // 是否需要 遮罩层
            type: Boolean,
            value: true
        },
        show: {
            // 是否开启弹窗
            type: Boolean,
            value: false,
            observer: '_showChange'
        },
        buttons: {
            type: Array,
            value: [] // {text, extClass}
        },
        more: {
            // 是否展示右上角更多
            type: Boolean,
            value: false
        }
    },
    data: {
        wrapperShow: false,
        innerShow: false,
        paddingLeft: 0,
        paddingRight: 0
    },
    lifetimes: {
        ready() {
            const systemInfo = wx.getSystemInfoSync()
            this.setData({
                paddingLeft: systemInfo.safeArea.left,
                paddingRight: systemInfo.windowWidth - systemInfo.safeArea.right,
                paddingBottom: systemInfo.windowHeight - systemInfo.safeArea.bottom
            })
            this._showChange(this.data.show)
        }
    },
    methods: {
        _showChange(show) {
            if (show) {
                this.setData(
                    {
                        wrapperShow: true
                    },
                    () => {
                        this.setData({
                            innerShow: true
                        })
                    }
                )
            } else {
                this.setData({ innerShow: false })
                setTimeout(() => {
                    this.setData({ wrapperShow: false })
                }, 300)
            }
        },
        close(e) {
            const { type } = e.currentTarget.dataset
            if (this.data.maskClosable || type === 'close') {
                this.setData({
                    show: false
                })
                // 关闭弹窗回调事件
                this.triggerEvent('close')
            }
        },
        buttonTap(e) {
            const { index } = e.currentTarget.dataset
            this.triggerEvent('buttontap', { index, item: this.data.buttons[index] }, {})
        },
        onMaskMouseMove() {
            // do nothing
        },
        onDialogTouchMove(e) {
            e.preventDefault()
        }
    }
})
