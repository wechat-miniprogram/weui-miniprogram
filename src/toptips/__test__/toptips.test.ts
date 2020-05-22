import path from 'path'
import simulate from 'miniprogram-simulate'

describe('toptips', () => {
    const toptips = simulate.load(path.resolve(__dirname, '../toptips'), 'mp-toptips')

    test('basic', async () => {
        const comp = simulate.render(toptips, {
            extClass: 'top100',
            msg: '距离顶部100px',
            type: 'error',
            show: true
        })
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })

    test('auto hide', async () => {
        const comp = simulate.render(
            simulate.load({
                usingComponents: {
                    'mp-toptips': toptips
                },
                template: `
                    <mp-toptips msg="500ms后关闭" type="success" delay="{{500}}" show="{{show}}" />
                `,
                data: {
                    show: false
                }
            })
        )
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        comp.setData({ show: true })
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        await simulate.sleep(600)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
