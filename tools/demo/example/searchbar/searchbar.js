Page({
    data: {
        inputShowed: false,
        inputVal: "",
    },
    onLoad() {
        this.setData({
            search: this.search.bind(this)
        })
    },
    search: function (value) {
        return new Promise((resolve, reject) => {
            if (value) {
                setTimeout(() => {
                    resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
                }, 200)
            } else {
                setTimeout(() => {
                    resolve([])
                }, 200)

            }
        })
    },
    selectResult: function (e) {
        console.log('select result', e.detail)
    },
});