import path from 'path'
import simulate from 'miniprogram-simulate'

describe('gallery', () => {
    const gallery = simulate.load(path.resolve(__dirname, '../gallery'))

    const id = simulate.load({
        compiler: 'official',
        rootPath: __dirname,
        template: `
            <mp-gallery show="{{show}}" bindchange="change" binddelete="delete" bindhide="hide" img-urls="{{imgUrls}}" delete hide-on-click="{{true}}" current="1"></mp-gallery>
        `,
        usingComponents: {
            'mp-gallery': gallery
        },
        data: {
            imgUrls: [
                'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
                'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
                'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg'
            ],
            show: true
        },
        methods: {
            change(e) {
                // console.log('current index has changed', e.detail)
            },
            delete(e) {
                // console.log('delete', e.detail)
            },
            hide() {
                // console.log('component hide')
                // this.setData({
                //     show: true
                // })
                // setTimeout(() => {
                //     // console.log('component show')
                //     this.setData({
                //         show: true
                //     })
                // }, 1000)
            }
        }
    })

    test('basic', async () => {
        const comp = simulate.render(id)
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
