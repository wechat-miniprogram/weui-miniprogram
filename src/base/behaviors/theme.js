module.exports = Behavior({
    data: {
        theme: 'light'
    },
    methods: {
        themeChanged(theme) {
            console.log('---------themeChanged', theme)
            this.setData({
                theme
            })
        }
    }
})
