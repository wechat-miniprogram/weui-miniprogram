import CustomPage from '../../base/CustomPage'

CustomPage({
    data: {
        list: [
            {
                text: '微信',
                iconPath: global.isDemo
                    ? '/page/weui/example/images/icon_tabbar.png'
                    : '/example/images/icon_tabbar.png',
                selectedIconPath: global.isDemo
                    ? '/page/weui/example/images/icon_tabbar.png'
                    : '/example/images/icon_tabbar.png',
                badge: '8'
            },
            {
                text: '通讯录',
                iconPath: global.isDemo
                    ? '/page/weui/example/images/icon_tabbar.png'
                    : '/example/images/icon_tabbar.png',
                selectedIconPath: global.isDemo
                    ? '/page/weui/example/images/icon_tabbar.png'
                    : '/example/images/icon_tabbar.png'
            },
            {
                text: '发现',
                iconPath: global.isDemo
                    ? '/page/weui/example/images/icon_tabbar.png'
                    : '/example/images/icon_tabbar.png',
                selectedIconPath: global.isDemo
                    ? '/page/weui/example/images/icon_tabbar.png'
                    : '/example/images/icon_tabbar.png',
                dot: true
            },
            {
                text: '我',
                iconPath: global.isDemo
                    ? '/page/weui/example/images/icon_tabbar.png'
                    : '/example/images/icon_tabbar.png',
                selectedIconPath: global.isDemo
                    ? '/page/weui/example/images/icon_tabbar.png'
                    : '/example/images/icon_tabbar.png'
            }
        ]
    },
    tabChange(e) {
        console.log('tab change', e)
    }
})
