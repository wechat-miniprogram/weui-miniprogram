const defaultGridProps = {
    target: 'self',
    url: '',
    openType: 'navigate',
    delta: 1,
    appId: '',
    path: '',
    extraData: '',
    version: 'release',
    hoverClass: 'navigator-hover',
    hoverStopPropagation: false,
    hoverStartTime: 50,
    hoverStayTime: 600,
    bindsuccess: () => {},
    bindfail: () => {},
    bindcomplete: () => {}
}

Component({
    options: {
        addGlobalClass: true,
        pureDataPattern: /^_/
    },
    properties: {
        extClass: {
            type: String,
            value: ''
        },
        grids: {
            type: Array,
            value: [],
            observer: '_onGridsChange'
        }
    },
    data: {
        innerGrids: []
    },
    ready() {},
    methods: {
        _onGridsChange(grids): void {
            if (grids) {
                this.setData({
                    innerGrids: grids.map((grid) => Object.assign({}, defaultGridProps, grid))
                })
            }
        },
        // skyline <navigator> 改为 wx.navigateTo
        go (item) {
            wx.navigateTo({
                url: item.url,
                success: item.bindsuccess,
                fail: item.bindfail,
                complete: item.bindcomplete
            })
        }
    }
})
