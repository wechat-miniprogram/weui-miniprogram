var base64 = require("../images/base64");
Page({
    onLoad: function(){
        this.setData({
            icon: base64.icon20,
            slideButtons: [{
              text: '普通',
              src: '', // icon的路径
            },{
              text: '普通',
              extClass: 'test',
              src: '', // icon的路径
            },{
              type: 'warn',
              text: '警示',
              extClass: 'test',
              src: '', // icon的路径
            }],
        });
    },
    slideButtonTap(e) {
        console.log('slide button tap', e.detail)
    }
});
