import path from 'path'
import simulate from 'miniprogram-simulate'

describe('grids', () => {
    const id = simulate.load({
        compiler: 'official',
        rootPath: __dirname,
        template: `
            <mp-half-screen-dialog show="{{show}}">
                <view slot="title">测试标题A</view>
                <view slot="desc">这是自定义描述区</view>
                <view slot="footer">
                    <button type="default" class="weui-btn">按钮A</button>
                    <button type="primary" class="weui-btn">按钮B</button>
                </view>
            </mp-half-screen-dialog>
        `,
        usingComponents: {
            'mp-half-screen-dialog': simulate.load(path.resolve(__dirname, '../half-screen-dialog'))
        },
        data: {
            show: false
        }
    })

    test('basic', async () => {
        const comp = simulate.render(id)
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        comp.setData({ show: true })
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
