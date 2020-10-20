import path from 'path'
import simulate from 'miniprogram-simulate'

describe('navigation-bar', () => {
    const navigationBar = simulate.load(
        path.resolve(__dirname, '../navigation-bar'),
        'mp-navigation-bar'
    )

    test('basic', async () => {
        const comp = simulate.render(
            simulate.load({
                usingComponents: {
                    'mp-navigation-bar': navigationBar
                },
                template: `
                    <mp-navigation-bar loading="{{true}}" title="UI组件库" back="{{true}}"></mp-navigation-bar>
                `
            })
        )
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
