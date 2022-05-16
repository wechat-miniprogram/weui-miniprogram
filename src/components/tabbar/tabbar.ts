Component({
    options: {
        addGlobalClass: true,
        writeIdToDOM: true
    } as any,
    properties: {
        extClass: {
            type: String,
            value: ''
        },
        list: {
            type: Array,
            value: []
        },
        current: {
            type: Number,
            value: 0
        },
        reactive: {
            type: Boolean,
            value: true
        }
    },
    data: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0
    },
    lifetimes: {
        ready() {
            const systemInfo = wx.getSystemInfoSync()
            this.setData({
                paddingLeft: systemInfo.safeArea.left,
                paddingRight: systemInfo.windowWidth - systemInfo.safeArea.right,
                paddingBottom: systemInfo.windowHeight - systemInfo.safeArea.bottom
            })
        }
    },
    methods: {
        tabChange(e) {
            const { index } = e.currentTarget.dataset
            if (index === this.data.current) {
                return
            }
            this.setData({
                current: index
            })
            this.triggerEvent('change', { index, item: this.data.list[index] })
        }
    }
})
