import CustomPage from '../../base/CustomPage'

CustomPage({
    data: {
        show: false
    },
    showToptips() {
        this.setData({
            show: true
        })
    }
})
