import CustomPage from '../../base/CustomPage'

CustomPage({
    data: {
        imgUrls: [
            'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
            'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
            'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg'
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