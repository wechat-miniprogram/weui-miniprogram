import path from 'path'
import simulate from 'miniprogram-simulate'

describe('cells & cell', () => {
    let id

    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, './index'), { less: true })
    })

    test('basic cells & cell', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))
        expect(container.toJSON()).toMatchSnapshot()
    })
})
