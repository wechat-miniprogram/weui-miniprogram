import path from 'path'
import simulate from 'miniprogram-simulate'

describe('dialog', () => {
    const id = simulate.load(path.join(__dirname, './index'))
    test('basic dialog', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))

        const dialog = container.querySelector('.dialog')
        const buttons = dialog.querySelectorAll('.weui-dialog__btn')

        buttons[0].dispatchEvent('tap')
        await simulate.sleep(10)
        expect(container.querySelector('.button-value').dom.innerHTML).toBe('取消')

        buttons[1].dispatchEvent('tap')
        await simulate.sleep(10)
        expect(container.querySelector('.button-value').dom.innerHTML).toBe('确定')

        dialog.querySelector('.weui-mask').dispatchEvent('tap')
        await simulate.sleep(10)
        expect(container.querySelector('.close').dom.innerHTML).toBe('true')
        // dialog.setData({
        //     show: false
        // })
        await simulate.sleep(200)
        expect(dialog.querySelector('.weui-dialog')).toBe(undefined)
    })
})
