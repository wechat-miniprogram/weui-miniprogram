Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        extClass: {
            type: String,
            value: ''
        },
        show: {
            // 默认显示出来
            type: Boolean,
            value: true
        },
        animated: {
            type: Boolean,
            value: false
        },
        duration: {
            // 过渡动画时间
            type: Number,
            value: 350
        },
        type: {
            type: String,
            value: 'dot-gray' // 取值dot-white、dot-gray、circle
        },
        tips: {
            // type是circle的时候才有效
            type: String,
            value: '加载中'
        }
    }
})
