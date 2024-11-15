Component({
    options: {
        virtualHost: true,
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        title: {
            // 弹窗标题，也可以通过 slot 自定义
            type: String,
            value: ''
        },
        extClass: {
            // 弹窗 class
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
        rootPortal: {
            // 是否使用 root-portal
            type: Boolean,
            value: false
        }
    },
    data: {
        wrapperShow: false,
        innerShow: false
    },
    ready() {
        const buttons = this.data.buttons
        const len = buttons.length
        buttons.forEach((btn, index) => {
            if (len === 1) {
                btn.className = 'weui-dialog__btn_primary'
            } else if (index === 0) {
                btn.className = 'weui-dialog__btn_default'
            } else {
                btn.className = 'weui-dialog__btn_primary'
            }
        })
        this.setData({
            buttons
        })
        this._showChange(this.data.show)
    },
    methods: {
        _showChange(show) {
            if (show) {
                this.setData({
                    wrapperShow: true,
                    innerShow: true
                })
            } else {
                this.setData({ innerShow: false })
                setTimeout(() => {
                    this.setData({ wrapperShow: false })
                }, 300)
            }
        },
        buttonTap(e) {
            const { index } = e.currentTarget.dataset
            this.triggerEvent('buttontap', { index, item: this.data.buttons[index] }, {})
        },
        close() {
            const data: any = this.data
            if (!data.maskClosable) return
            this.setData({
                show: false
            })
            this.triggerEvent('close', {}, {})
        },
        stopEvent() {}
    }
})
