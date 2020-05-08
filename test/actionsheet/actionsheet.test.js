import path from 'path'
import simulate from 'miniprogram-simulate'

describe('actionsheet', () => {
    const id = simulate.load(path.join(__dirname, './index'))
    test('basic actionsheet', async () => {
        const container = simulate.render(id)
        const comp = container.querySelector('.comp')

        const parent = document.createElement('parent-wrapper')
        container.attach(parent)

        const title = comp.querySelector('.weui-actionsheet__title-text')
        const mask = comp.querySelector('.weui-mask')
        const menu = comp.querySelectorAll('.weui-actionsheet__menu .weui-actionsheet__cell')
        const cancel = comp.querySelector('.weui-actionsheet__action .weui-actionsheet__cell')

        expect(title.dom.innerHTML).toBe('actionsheet title')
        expect(mask.dom.className.indexOf('weui-mask_hidden')).toBe(-1)
        expect(mask.dom.className.indexOf('customer-mask-class')).toBeGreaterThan(-1)
        expect(menu.length).toBe(3)
        expect(menu[2].dom.className.indexOf('weui-actionsheet__cell_warn')).toBeGreaterThan(-1)
        expect(cancel.dom.innerHTML).toBe('actionsheet cancel text')

        menu[2].dispatchEvent('touchstart')
        menu[2].dispatchEvent('touchend')
        await simulate.sleep(10)
        expect(container.querySelector('.tapvalue').dom.innerHTML).toBe('3')

        menu[1].dispatchEvent('touchstart')
        menu[1].dispatchEvent('touchend')
        await simulate.sleep(10)
        expect(container.querySelector('.tapvalue').dom.innerHTML).toBe('2')

        cancel.dispatchEvent('touchstart')
        cancel.dispatchEvent('touchend')
        await simulate.sleep(10)
        expect(container.querySelector('.close').dom.innerHTML).toBe('true')
    })
})
