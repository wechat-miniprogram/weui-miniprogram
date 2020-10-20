Component({
    data: {
        buttonValue: '',
        closed: false,
        buttons: [{ text: '取消' }, { text: '确定' }]
    },
    methods: {
        buttontap(e) {
            this.setData({
                buttonValue: e.detail.item.text
            })
        },
        close(e) {
            this.setData({
                closed: true
            })
        }
    }
})
