import CustomPage from '../../base/CustomPage'

CustomPage({
    data: {
        loading: false,
        show: true,
        animated: false
    },
    toggleLoading() {
        this.setData({
            loading: !this.data.loading
        })
    },
    changeColor() {
        this.setData({
            color: '#07C160'
        })
    },
    changeBgColor() {
        this.setData({
            background: '#ededed'
        })
    },
    toggleShow() {
        this.setData({
            show: !this.data.show
        })
    },
    toggleAnimated() {
        this.setData({
            animated: !this.data.animated,
            show: !this.data.show
        })
    }
})