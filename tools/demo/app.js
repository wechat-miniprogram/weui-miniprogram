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
        theme: 'light',
        GRID_DEMO_URL: '/example/index',
        iconTabbar: '/example/images/icon_tabbar.png'
    }
})
