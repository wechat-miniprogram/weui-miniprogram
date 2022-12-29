import path from 'path'
import simulate from 'miniprogram-simulate'

describe('dialog', () => {
    let id

    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, './index'), { less: true })
    })

    test('basic dialog', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))
        expect(container.toJSON()).toMatchSnapshot()
    })

    test('buttons', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))

        const [cancelBtn, confirmBtn] = container.querySelectorAll('.dialog >>> .weui-dialog__btn')

        cancelBtn.dispatchEvent('tap')
        await simulate.sleep(10)
        expect(container.data.buttonValue).toBe('取消')

        confirmBtn.dispatchEvent('tap')
        await simulate.sleep(10)
        expect(container.data.buttonValue).toBe('确定')
    })

    test('close', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))

        container.querySelector('.dialog >>> .weui-mask').dispatchEvent('tap')
        await simulate.sleep(10)
        expect(container.data.closed).toBe(true)
        expect(container.toJSON()).toMatchSnapshot()
    })
})
