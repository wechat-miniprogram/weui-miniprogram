const themeListeners = []

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
    // 自动监听 theme 切换
    onThemeChange(options) {
        this.themeChanged(options.theme)
    },
    // 这个看起来是手动操作
    themeChanged(theme) {
        this.globalData.theme = theme
        themeListeners.forEach((listener) => {
            listener(theme)
        })
    },
    watchThemeChange(listener) {
        if (themeListeners.indexOf(listener) < 0) {
            themeListeners.push(listener)
        }
    },
    unWatchThemeChange(listener) {
        const index = themeListeners.indexOf(listener)
        if (index > -1) {
            themeListeners.splice(index, 1)
        }
    },
    globalData: {
        hasLogin: false,
        theme: wx.getSystemInfoSync().theme, // 'light',
        GRID_DEMO_URL: '/example/index',
        iconTabbar: require('/example/images/icon_tabbar.png').default,
        // navigatorHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        navigatorScreenHeight: wx.getSystemInfoSync().screenHeight - wx.getSystemInfoSync().statusBarHeight - 44
    }
})
