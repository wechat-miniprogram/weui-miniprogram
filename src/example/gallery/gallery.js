Page({
    data: {
        imgUrls: [
            'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
            'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
            'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        ],
        show: true
    },
    openGallery() {
        this.setData({ show: true })
    },
    change(e) {
        console.log('current index has changed', e.detail)
    },
    delete(e) {
        console.log('delete', e.detail)
    },
    hide() {
        console.log('component hide')
    }
});