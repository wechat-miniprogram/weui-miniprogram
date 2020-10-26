import path from 'path'
import simulate from 'miniprogram-simulate'

describe('grids', () => {
    const halfScreenDialog = simulate.load(
        path.resolve(__dirname, '../half-screen-dialog'),
        'mp-half-screen-dialog'
    )

    test('basic', async () => {
        const onButtonTap = jest.fn()
        const onClose = jest.fn()

        const wrapper = simulate.render(
            simulate.load({
                usingComponents: {
                    'mp-half-screen-dialog': halfScreenDialog
                },
                template: `
                    <mp-half-screen-dialog id="dialog" show="{{show}}" buttons="{{buttons}}" bindbuttontap="onButtonTap" bindclose="onClose">
                        <view slot="title">测试标题A</view>
                        <view slot="desc">这是自定义描述区</view>
                    </mp-half-screen-dialog>
                `,
                data: {
                    show: false,
                    buttons: [
                        {
                            text: '按钮A',
                            type: 'default'
                        },
                        {
                            text: '按钮B',
                            type: 'primary'
                        }
                    ]
                },
                methods: {
                    onButtonTap,
                    onClose
                }
            })
        )
        wrapper.attach(document.createElement('parent-wrapper'))
        const comp = wrapper.querySelector('#dialog')
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        comp.setData({ show: true })
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        const buttons = comp.querySelectorAll('.weui-btn')
        buttons[1].dispatchEvent('tap')
        await simulate.sleep(0)
        expect(onButtonTap).toBeCalledTimes(1)
        expect(onButtonTap.mock.calls[0][0].detail).toStrictEqual({
            index: 1,
            item: {
                text: '按钮B',
                type: 'primary'
            }
        })

        const mask = comp.querySelector('.weui-mask')
        mask.dispatchEvent('tap')
        await simulate.sleep(0)
        expect(onClose).toBeCalledTimes(1)
    })
})
