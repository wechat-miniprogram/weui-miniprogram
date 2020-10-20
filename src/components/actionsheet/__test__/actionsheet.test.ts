import path from 'path'
import simulate from 'miniprogram-simulate'

describe('actionsheet', () => {
    let id: string

    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, './index'))
    })

    test('basic actionsheet', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))

        expect(container.toJSON()).toMatchSnapshot()
    })

    test('no cancel', async () => {
        const container = simulate.render(id, { showCancel: false })
        container.attach(document.createElement('parent-wrapper'))

        expect(container.toJSON()).toMatchSnapshot()
    })

    test('touch', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))
        const comp = container.querySelector('.comp')

        const menu = comp.querySelectorAll('.weui-actionsheet__menu .weui-actionsheet__cell')

        menu[2].dispatchEvent('touchstart')
        menu[2].dispatchEvent('touchend')
        await simulate.sleep(10)
        expect(container.data.tapValue).toBe(3)

        menu[1].dispatchEvent('touchstart')
        menu[1].dispatchEvent('touchend')
        await simulate.sleep(10)
        expect(container.data.tapValue).toBe(2)
    })

    test('close', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))
        const comp = container.querySelector('.comp')

        const cancel = comp.querySelector('.weui-actionsheet__action .weui-actionsheet__cell')

        cancel.dispatchEvent('touchstart')
        cancel.dispatchEvent('touchend')
        await simulate.sleep(10)
        expect(container.data.show).toBe(false)
        expect(comp.data.show).toBe(false)
    })
})
