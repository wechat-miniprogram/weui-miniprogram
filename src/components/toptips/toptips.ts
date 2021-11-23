const typeClassMap = {
    warn: 'weui-toptips_warn',
    info: 'weui-toptips_info',
    success: 'weui-toptips_success',
    error: 'weui-toptips_error'
}

Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        type: {
            type: String,
            value: 'error',
            observer: '_typeChange'
        },
        show: {
            type: Boolean,
            value: false,
            observer: '_showChange'
        },
        msg: {
            type: String,
            value: ''
        },
        delay: {
            type: Number,
            value: 2000
        },
        extClass: {
            type: String,
            value: ''
        }
    },
    data: {
        wrapperShow: false,
        innerShow: false
    },
    lifetimes: {
        ready() {
            this._showChange(this.data.show)
        },
        attached() {
            this._typeChange(this.data.type)
        }
    },
    methods: {
        _typeChange(type) {
            this.setData({
                className: typeClassMap[type] || ''
            })
        },
        _showChange(show) {
            if (show) {
                this._showToptips()
            } else {
                this._hideToptips()
            }
        },
        _showToptips() {
            if (this.data.delay) {
                setTimeout(() => {
                    this._hideToptips()
                    this.setData(
                        {
                            show: false
                        },
                        () => {
                            // tooltips 隐藏了，触发 hide 事件
                            this.triggerEvent('hide', {}, {})
                        }
                    )
                }, this.data.delay)
            }
            this.setData({
                wrapperShow: true,
                innerShow: true
            })
        },
        _hideToptips() {
            if (!this.data.innerShow) return
            this.setData({ innerShow: false })
            setTimeout(() => {
                this.setData({ wrapperShow: false })
            }, 300)
        }
    }
})
