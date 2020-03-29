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
            observer() {

            }
        }
    },
    data: {
        innerGrids: [],
        _defaultGridProps: {
            target: 'self',
            openType: 'navigate',
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
    ready() {

    },
    lifetimes: {
        attached() {
            if (this.data.grids) {
                this.setData({
                    innerGrids: this.data.grids.map((grid) => Object.assign({}, this.data._defaultGridProps, grid))
                })
                console.log(this.data.innerGrids)
            }
        }
    }
})
