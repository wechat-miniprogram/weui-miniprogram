import path from 'path'
import simulate from 'miniprogram-simulate'

/**
 * TODO slideview 使用了 wxs 事件绑定，等待 j-component 支持
 */
describe.skip('slideview', () => {
    test('basic', async () => {
        const slideview = simulate.load(path.resolve(__dirname, '../slideview'), 'mp-slideview')
        const cell = simulate.load(path.resolve(__dirname, '../../cell/cell'), 'mp-cell')

        const comp = simulate.render(
            simulate.load({
                usingComponents: {
                    'mp-slideview': slideview,
                    'mp-cell': cell
                },
                template: `
                    <mp-slideview show="{{true}}" buttons="{{slideButtons}}" bindbuttontap="slideButtonTap">
                        <mp-cell value="左滑可以删除" footer="说明文字"></mp-cell>
                    </mp-slideview>
                `,
                data: {
                    slideButtons: [
                        {
                            text: '普通'
                        },
                        {
                            text: '普通'
                        },
                        {
                            type: 'warn',
                            text: '警示'
                        }
                    ]
                }
            })
        )
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(1000)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
