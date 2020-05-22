import path from 'path'
import simulate from 'miniprogram-simulate'

describe('form-page', () => {
    const id = simulate.load(path.resolve(__dirname, './index'))

    test('basic', async () => {
        const comp = simulate.render(id)
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
