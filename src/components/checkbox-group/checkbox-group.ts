// import cells from "../cells/cells"

Component({
    options: {
        multipleSlots: true
    },
    properties: {
        multi: {
            type: Boolean,
            value: true,
            observer: '_multiChange'
        },
        extClass: {
            type: String,
            value: ''
        },
        prop: {
            type: String,
            value: ''
        }
    },
    data: {
        targetList: [],
        parentCell: null
    },
    relations: {
        '../checkbox/checkbox': {
            type: 'descendant',
            linked(target) {
                this.data.targetList.push(target)
                target.setMulti(this.data.multi)

                if (!this.data.firstItem) {
                    this.data.firstItem = target
                }
                if (target !== this.data.firstItem) {
                    target.setOuterClass('weui-cell_wxss')
                }
            },
            unlinked(target) {
                let index = -1
                this.data.targetList.forEach((item, idx) => {
                    if (item === target) {
                        index = idx
                    }
                })
                this.data.targetList.splice(index, 1)
                if (!this.data.targetList) {
                    this.data.firstItem = null
                }
            }
        },
        '../form/form': {
            type: 'ancestor'
        },
        '../cells/cells': {
            type: 'ancestor',
            // target: cells,
            linked(target) {
                if (!this.data.parentCell) {
                    this.data.parentCell = target
                }
                this.setParentCellsClass()
            },
            unlinked() {
                this.data.parentCell = null // 方便内存回收
            }
        }
    },
    methods: {
        checkedChange(checked, target) {
            if (this.data.multi) {
                const vals = []
                this.data.targetList.forEach((item) => {
                    if (item.data.disabled) return
                    if (item.data.checked) {
                        vals.push(item.data.value)
                    }
                })
                this.triggerEvent('change', { value: vals })
            } else {
                let val = ''
                this.data.targetList.forEach((item) => {
                    if (item.data.disabled) return
                    if (item === target) {
                        val = item.data.value
                    } else {
                        item.setData({
                            checked: false
                        })
                    }
                })
                this.triggerEvent('change', { value: val }, {})
            }
        },
        setParentCellsClass() {
            const className = this.data.multi ? 'weui-cells_checkbox' : 'weui-cells_radio'
            if (this.data.parentCell) {
                this.data.parentCell.setCellsClass(className)
            }
        },
        _multiChange(multi) {
            this.data.targetList.forEach((target) => {
                target.setMulti(multi)
            })
            if (this.data.parentCell) {
                this.data.parentCell.setCellMulti(multi)
            }
            return multi
        }
    }
})
