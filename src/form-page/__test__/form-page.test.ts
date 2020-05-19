import path from 'path'
import simulate from 'miniprogram-simulate'

describe('form-page', () => {
    const id = simulate.load({
        compiler: 'official',
        rootPath: __dirname,
        template: `
            <mp-form-page title="表单结构" subtitle="展示表单页面的信息结构样式, 分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。">
                阅读并同意<navigator>《相关条款》</navigator>
                <view slot="button">
                    <button class="weui-btn" type="primary" bindtap="submitForm">确定</button>
                </view>
            </mp-form-page>
        `,
        usingComponents: {
            'mp-form-page': simulate.load(path.resolve(__dirname, '../form-page')),
            'mp-cells': simulate.load(path.resolve(__dirname, '../../cells/cells')),
            'mp-cell': simulate.load(path.resolve(__dirname, '../../cell/cell')),
            'mp-checkbox': simulate.load(path.resolve(__dirname, '../../checkbox/checkbox'))
        }
    })

    test('basic', async () => {
        const comp = simulate.render(id)
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
