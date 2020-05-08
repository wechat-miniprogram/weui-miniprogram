import path from 'path'
import simulate from 'miniprogram-simulate'

describe('cells & cell', () => {
    const id = simulate.load(path.join(__dirname, './index'))
    test('basic cells & cell', () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))

        const cells = container.querySelector('.cells')
        expect(cells.querySelector('.weui-cells__title').dom.innerHTML).toBe('带图标、说明的列表项')
        expect(cells.querySelector('.weui-cells__tips').dom.innerHTML).toBe('底部说明文字')

        const cell1 = container.querySelector('.cell1')
        const cell2 = container.querySelector('.cell2')
        expect(cell1.querySelector('.weui-cell__bd').dom.innerHTML).toBe('标题文字')
        expect(cell1.querySelector('.weui-cell__ft').dom.innerHTML).toBe('说明文字')
        expect(cell1.querySelector('.weui-cell__icon').dom.innerHTML).toBe('')
        expect(cell2.querySelector('.weui-cell__icon')).toBe(undefined)
    })
})
