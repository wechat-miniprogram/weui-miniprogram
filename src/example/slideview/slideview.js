import base64 from '../images/base64'
import CustomPage from '../../base/CustomPage'

CustomPage({
    data: {
        worklet: '初始值'
    },
    onLoad: function () {
        this.setData({
            icon: base64.icon20,
            slideButtons: [
                {
                    text: '普通',
                    src: require('../cell/icon_love.svg').default // icon的路径
                },
                {
                    text: '普通',
                    extClass: 'test',
                    src: require('../cell/icon_star.svg').default // icon的路径
                },
                {
                    type: 'warn',
                    text: '警示',
                    extClass: 'test',
                    src: require('../cell/icon_del.svg').default // icon的路径
                }
            ]
        })
    },
    slideButtonTap(e) {
        console.log('slide button tap', e.detail)
    },
    // worklet 动画
    handHorizontal(gestureEvt) {
        "worklet";
        console.log('-----------worklet 动画');
        // this.setData({
        //     worklet: '触发成功'
        // })
    }
})
