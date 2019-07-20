Page({
    data: {
        loading: false,
        color: '#000',
        background: '#fff',
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
            color: 'red'
        })
    },
    changeBgColor() {
        this.setData({
            background: '#5152c0'
        })
    },
    toggleShow() {
        this.setData({
            show: !this.data.show
        })
    },
    toggleAnimated() {
        this.setData({
            animated: !this.data.animated
        })
    }
})