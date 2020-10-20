import path from 'path'
import simulate from 'miniprogram-simulate'

describe('gallery', () => {
    const gallery = simulate.load(path.resolve(__dirname, '../gallery'), 'mp-gallery')

    const onChange = jest.fn(function (e) {
        this.setData({
            current: e.detail.current
        })
    })

    const onDelete = jest.fn(function (e) {
        this.setData({
            imgUrls: e.detail.currentImgs
        })
    })

    const onHide = jest.fn(function () {
        this.setData({
            show: false
        })
    })

    const id = simulate.load({
        template: `
            <mp-gallery
                id="gallery"
                show="{{show}}"
                bindchange="onChange"
                binddelete="onDelete"
                bindhide="onHide"
                img-urls="{{imgUrls}}"
                delete
                hide-on-click="{{true}}"
                current="{{current}}"
            ></mp-gallery>
        `,
        usingComponents: {
            'mp-gallery': gallery
        },
        data: {
            imgUrls: ['http://qq.com/1.jpg', 'http://qq.com/2.jpg', 'http://qq.com/3.jpg'],
            current: 0,
            show: false
        },
        methods: {
            onChange,
            onDelete,
            onHide
        }
    })

    test('basic', async () => {
        const wrapper = simulate.render(id)
        wrapper.attach(document.createElement('parent-wrapper'))
        const comp = wrapper.querySelector('#gallery')
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        wrapper.setData({ show: true })
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        wrapper.setData({ current: 1 })
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        const deleteBtn = comp.querySelector('.weui-gallery__del')
        deleteBtn.dispatchEvent('tap')
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
        expect(onDelete).toBeCalledTimes(1)

        const imgWrap = comp.querySelector('.weui-gallery__img__wrp')
        imgWrap.dispatchEvent('tap')
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
        expect(onDelete).toBeCalledTimes(1)
    })
})
