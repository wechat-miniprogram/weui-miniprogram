import path from 'path'
import simulate from 'miniprogram-simulate'

describe('badge', () => {
    let id

    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, '../badge'), { less: true })
    })

    test('badge with content', () => {
        const content = 'badge content'
        const comp = simulate.render(id, {
            content: content
        })
        comp.attach(document.createElement('parent-wrapper'))

        expect(comp.toJSON()).toMatchSnapshot()
    })

    test('badge without content', () => {
        const comp = simulate.render(id, {})
        comp.attach(document.createElement('parent-wrapper'))

        expect(comp.toJSON()).toMatchSnapshot()
    })
})
