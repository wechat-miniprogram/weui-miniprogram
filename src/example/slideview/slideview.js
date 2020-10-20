import base64 from '../images/base64'
import CustomPage from '../../base/CustomPage'

CustomPage({
    onLoad: function () {
        this.setData({
            icon: base64.icon20,
            slideButtons: [
                {
                    text: '普通',
                    src: require('/example/cell/icon_love.svg').default // icon的路径
                },
                {
                    text: '普通',
                    extClass: 'test',
                    src: require('/example/cell/icon_star.svg').default // icon的路径
                },
                {
                    type: 'warn',
                    text: '警示',
                    extClass: 'test',
                    src: require('/example/cell/icon_del.svg').default // icon的路径
                }
            ]
        })
    },
    slideButtonTap(e) {
        console.log('slide button tap', e.detail)
    }
})
