Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        imgUrls: {
            type: Array,
            value: [],
            observer(newVal) {
                this.setData({ currentImgs: newVal })
            }
        },
        showDelete: {
            // 是否显示delete按钮
            type: Boolean,
            value: true
        },
        show: {
            type: Boolean,
            value: true,
            observer: '_showChange'
        },
        current: {
            type: Number,
            value: 0
        },
        hideOnClick: {
            type: Boolean,
            value: true
        },
        extClass: {
            type: String,
            value: ''
        }
    },
    data: {
        wrapperShow: false,
        innerShow: false,
        currentImgs: []
    },
    ready() {
        this._showChange(this.data.show)
        const data: any = this.data
        this.setData({ currentImgs: data.imgUrls })
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
        change(e) {
            this.setData({
                current: e.detail.current
            })
            this.triggerEvent('change', { current: e.detail.current }, {})
        },
        deleteImg() {
            const data: any = this.data
            const imgs = data.currentImgs
            const url = imgs.splice(data.current, 1)
            this.triggerEvent('delete', { url: url[0], index: data.current }, {})
            if (imgs.length === 0) {
                // @ts-ignore
                this.hideGallery()
                return
            }
            this.setData({
                current: 0,
                currentImgs: imgs
            })
        },
        hideGallery() {
            const data: any = this.data
            if (data.hideOnClick) {
                this.setData({
                    show: false
                })
                this.triggerEvent('hide', {}, {})
            }
        }
    }
})
