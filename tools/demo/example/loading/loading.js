Page({
  data: {
    tips: '请稍后',
    show: true,
    animated: true
  },
  onShow() {
    this.timer = setInterval(() => {
      this.setData({
        show: !this.data.show
      })
    }, 2000)
  },
  onUnload() {
    clearInterval(this.timer)
  }
})