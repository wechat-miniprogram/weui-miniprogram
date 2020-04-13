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
            value: []
        }
    },
    data: {
        innerGrids: [],
        _defaultGridProps: {
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
            bindsuccess() {},
            bindfail() {},
            bindcomplete() {}
        }
    },
    ready() {},
    lifetimes: {
        attached() {
            if (this.data.grids) {
                this.setData({
                    innerGrids: this.data.grids.map((grid) =>
                        Object.assign({}, this.data._defaultGridProps, grid)
                    )
                })
            }
        }
    }
})
