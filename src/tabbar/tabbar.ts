Component({
    options: {
        addGlobalClass: true,
    },
    properties: {
        list: {
            type: Array,
            value: []
        },
        selected: {
            type: Number,
            value: 0
        }
    },
    methods: {
        tabChange(e) {
            const {index} = e.currentTarget.dataset
            if (index === this.data.selected) {
                return
            }
            this.setData({
                selected: index
            })
            this.triggerEvent('change', {index, item: this.data.list[index]})
        }
    }
})
