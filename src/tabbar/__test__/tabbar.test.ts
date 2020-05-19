import path from 'path'
import simulate from 'miniprogram-simulate'

describe('tabbar', () => {
    const tabbar = simulate.load(path.resolve(__dirname, '../tabbar'))

    test('basic', async () => {
        const comp = simulate.render(
            simulate.load({
                compiler: 'official',
                rootPath: __dirname,
                usingComponents: {
                    'mp-tabbar': tabbar
                },
                template: `
                    <mp-tabbar style="position:fixed;bottom:0;width:100%;left:0;right:0;" list="{{list}}" bindchange="tabChange"></mp-tabbar>
                `,
                data: {
                    list: [
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
                }
            })
        )
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
