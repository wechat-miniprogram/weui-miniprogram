Component({
    options: {
      multipleSlots: true, // 在组件定义时的选项中启用多slot支持
      addGlobalClass: true,
    },
    properties: {
      title: {  // 弹窗标题，也可以通过 slot 自定义
        type: String,
        value: ''
      },
      subTitle: {  // 弹窗标题，也可以通过 slot 自定义
        type: String,
        value: ''
      },
      extClass: { // 弹窗 class
        type: String,
        value: ''
      },
      maskClosable: {
        type: Boolean,
        value: true,
      },
      mask: { // 是否需要 遮罩层
        type: Boolean,
        value: true
      },
      show: { // 是否开启弹窗
        type: Boolean,
        value: false,
        observer: '_showChange'
      },
      buttons: {
        type: Array,
        value: [] // {text, extClass}
      }
    },
})
