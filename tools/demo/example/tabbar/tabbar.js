Page({
    data: {
        list: [{
            "text": "对话",
            "iconPath": "/example/images/tabbar_icon_chat_default.png",
            "selectedIconPath": "/example/images/tabbar_icon_chat_active.png",
            dot: true
        },
        {
            "text": "设置",
            "iconPath": "/example/images/tabbar_icon_setting_default.png",
            "selectedIconPath": "/example/images/tabbar_icon_setting_active.png",
            badge: 'New'
        }]
    },
    tabChange(e) {
        console.log('tab change', e)
    }
});