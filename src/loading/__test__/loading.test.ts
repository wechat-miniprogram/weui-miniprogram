import path from 'path'
import simulate from 'miniprogram-simulate'

describe('loading', () => {
    const loading = simulate.load(path.resolve(__dirname, '../loading'))

    test('basic', async () => {
        const comp = simulate.render(loading, { type: 'circle' })
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })

    // test('duration', async () => {
    //     const comp = simulate.render(loading, { type: 'dot-gray', duration: 100, show: true })
    //     comp.attach(document.createElement('parent-wrapper'))
    //     await simulate.sleep(0)
    //     expect(comp.toJSON()).toMatchSnapshot()
    //     await simulate.sleep(1000)
    //     comp.setData({ show: false })
    //     expect(comp.toJSON()).toMatchSnapshot()
    // })
})
