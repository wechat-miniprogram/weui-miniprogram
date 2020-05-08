Component({
    data: {
        radioItems: [
            { name: 'cell standard', value: '0' },
            { name: 'cell standard', value: '1' }
        ],
        checkboxItems: [
            { name: 'standard is dealt for u.', value: '0' },
            { name: 'standard is dealicient for u.', value: '1' }
        ],
        radioValue: '',
        checkboxValue: 0
    },
    methods: {
        radioChange(e) {
            this.setData({
                radioValue: e.detail.value
            })
        },
        checkboxChange(e) {
            this.setData({
                checkboxValue: e.detail.value.join(',')
            })
        }
    }
})
