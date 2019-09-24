Component({
    options: {
      addGlobalClass: true,
    },
    properties: {
        extClass: {
          type: String,
          value: ''
        },
        focus: {
            type: Boolean,
            value: false,
        },
        placeholder: {
            type: String,
            value: '搜索'
        },
        value: {
            type: String,
            value: ''
        },
        search: { // 返回Promise的函数
        // @ts-ignore
            type: Function,
            value: null
        },
        throttle: { // 500ms内只会调用一次search函数
            type: Number,
            value: 500
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        cancel: {
            type: Boolean,
            value: true
        }
    },
    data: {
        result: [] // 搜索结果
    },
    lastSearch: Date.now(),
    lifetimes: {
        attached() {
            if (this.data.focus) {
                this.setData({
                    searchState: true,
                })
            }
        }
    },
    methods: {
        clearInput() {
            this.setData({
                value: '',
            })
            this.triggerEvent('clear')
            this.inputChange({detail: {value: ''}}, true)
        },
        inputFocus(e) {
            this.triggerEvent('focus', e.detail)
        },
        inputBlur(e) {
            this.setData({
                focus: false,
            })
            this.triggerEvent('blur', e.detail)
        },
        showInput() {
            this.setData({
                focus: true,
                searchState: true,
            })
        },
        hideInput() {
            this.setData({
                searchState: false,
            })
        },
        inputChange(e, dontTriggerInput) {
            this.setData({
                value: e.detail.value
            })
            if (!dontTriggerInput) {
                this.triggerEvent('input', e.detail)
            }
            if (Date.now() - this.lastSearch < this.data.throttle) {
                return
            }
            if (typeof this.data.search !== 'function') {
                return
            }
            this.lastSearch = Date.now()
            this.data.search(e.detail.value).then(json => {
                this.setData({
                    result: json
                })
            }).catch(err => {
                console.log('search error', err)
            })

        },
        selectResult(e) {
            const {index} = e.currentTarget.dataset
            const item = this.data.result[index]
            this.triggerEvent('selectresult', {index, item})
        }
    }
})
