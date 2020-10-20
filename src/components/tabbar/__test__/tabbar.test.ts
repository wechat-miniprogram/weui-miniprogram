import path from 'path'
import simulate from 'miniprogram-simulate'

describe('tabbar', () => {
    const tabbar = simulate.load(path.resolve(__dirname, '../tabbar'), 'mp-tabbar')

    test('basic', async () => {
        const tabChange = jest.fn()
        const tablist = [
            {
                text: '微信',
                iconPath: '/icon',
                selectedIconPath: '/icon.selected',
                badge: '8'
            },
            {
                text: '通讯录',
                iconPath: '/icon',
                selectedIconPath: '/icon.selected'
            },
            {
                text: '发现',
                iconPath: '/icon',
                selectedIconPath: '/icon.selected',
                dot: true
            },
            {
                text: '我',
                iconPath: '/icon',
                selectedIconPath: '/icon.selected'
            }
        ]
        const comp = simulate.render(
            simulate.load({
                usingComponents: {
                    'mp-tabbar': tabbar
                },
                template: `
                    <mp-tabbar id="tabbar" style="position:fixed;bottom:0;width:100%;left:0;right:0;" list="{{list}}" bindchange="tabChange"></mp-tabbar>
                `,
                data: {
                    list: tablist
                },
                methods: {
                    tabChange
                }
            })
        )
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        const tabbarComp = comp.querySelector('#tabbar')
        const tabs = tabbarComp.querySelectorAll('.weui-tabbar__item')
        tabs[2].dispatchEvent('tap')
        await simulate.sleep(0)
        expect(tabbarComp.data.current).toBe(2)
        expect(tabChange).toBeCalledTimes(1)
        expect(tabChange.mock.calls[0][0].detail).toStrictEqual({ index: 2, item: tablist[2] })
    })
})
