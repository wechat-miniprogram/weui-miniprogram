Component({
    externalClasses: ['ext-class'],
    properties: {
        list: {
            type: Array,
            value: []
        },
        current: {
            type: Number,
            value: 0
        },
        reactive: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        tabChange(e) {
            const { index } = e.currentTarget.dataset
            if (index === this.data.current) {
                return
            }
            this.setData({
                current: index
            })
            this.triggerEvent('change', { index, item: this.data.list[index] })
        }
    }
})
