App({
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        hasLogin: false,
        GRID_DEMO_URL: '/example/index',
        iconTabbar: require('/example/images/icon_tabbar.png').default
    }
})
