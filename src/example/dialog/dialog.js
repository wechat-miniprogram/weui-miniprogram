import CustomPage from '../../base/CustomPage'

CustomPage({
    data: {
        dialogShow: false,
        showOneButtonDialog: false,
        showNotShowFooter: false,
        buttons: [{ text: '取消' }, { text: '确定' }],
        oneButton: [{ text: '确定' }]
    },
    openConfirm: function () {
        this.setData({
            dialogShow: true
        })
    },
    tapDialogButton(e) {
        this.setData({
            dialogShow: false,
            showOneButtonDialog: false,
            showNotShowFooter: false
        })
    },
    tapOneDialogButton(e) {
        this.setData({
            showOneButtonDialog: true
        })
    },
    tapNotShowFooter() {
        this.setData({
            showNotShowFooter: true
        })
    }
})
