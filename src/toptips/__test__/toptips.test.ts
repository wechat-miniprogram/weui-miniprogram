import path from 'path'
import simulate from 'miniprogram-simulate'

describe('toptips', () => {
    const toptips = simulate.load(path.resolve(__dirname, '../toptips'))

    test('basic', async () => {
        const comp = simulate.render(
            simulate.load({
                compiler: 'official',
                rootPath: __dirname,
                usingComponents: {
                    'mp-toptips': toptips
                },
                template: `
                    <mp-toptips ext-class="top100" msg="距离顶部100px" type="error" show="{{true}}"></mp-toptips>
                `,
            })
        )
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
