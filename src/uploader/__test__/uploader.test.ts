import path from 'path'
import simulate from 'miniprogram-simulate'
;(globalThis as any).wx = (globalThis as any).wx || {}
;(globalThis as any).wx.chooseImage = jest.fn(({ success }) => {
    setTimeout(() => {
        success &&
            success({ tempFilePaths: ['/a/b.png'], tempFiles: [{ path: '/a/b.png', size: 1024 }] })
    }, 0)
})
;(globalThis as any).wx.getFileSystemManager = jest.fn(() => ({
    readFileSync: jest.fn(() => new ArrayBuffer(1024))
}))
;(globalThis as any).wx.arrayBufferToBase64 = jest.fn((buffer: ArrayBuffer) => {
    let binary = ''
    const bytes = new Uint8Array(buffer)
    const len = bytes.byteLength
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
})

describe('uploader', () => {
    const gallery = simulate.load({ template: '<slot /> ' })

    const uploader = simulate.load(path.resolve(__dirname, '../uploader'), 'mp-uploader', {
        usingComponents: {
            'mp-gallery': gallery
        }
    })

    test('basic', async () => {
        const comp = simulate.render(
            simulate.load({
                usingComponents: {
                    'mp-uploader': uploader,
                    'mp-gallery': gallery
                },
                template: `
                    <mp-uploader id="uploader" upload="{{uploadFile}}" files="{{files}}" max-count="5" title="图片上传" tips="图片上传提示"></mp-uploader>
                `,
                data: {
                    files: []
                },
                ready() {
                    this.setData({
                        uploadFile: this.uploadFile.bind(this)
                    })
                },
                methods: {
                    uploadFile(files) {
                        return Promise.resolve({ urls: ['http://qq.com/b.png'] })
                    }
                }
            })
        )
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        const uploaderComp = comp.querySelector('#uploader')
        const chooseImg = uploaderComp.querySelector('.weui-uploader__input')
        chooseImg.dispatchEvent('tap')
        await simulate.sleep(100)
        expect(comp.toJSON()).toMatchSnapshot()
    })

    test('upload fail', async () => {
        const comp = simulate.render(
            simulate.load({
                usingComponents: {
                    'mp-uploader': uploader,
                    'mp-gallery': gallery
                },
                template: `
                    <mp-uploader id="uploader" upload="{{uploadFile}}" files="{{files}}" max-count="5" title="图片上传" tips="图片上传提示"></mp-uploader>
                `,
                data: {
                    files: []
                },
                ready() {
                    this.setData({
                        uploadFile: this.uploadFile.bind(this)
                    })
                },
                methods: {
                    uploadFile(files) {
                        return Promise.reject('error')
                    }
                }
            })
        )
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        const uploaderComp = comp.querySelector('#uploader')
        const chooseImg = uploaderComp.querySelector('.weui-uploader__input')
        chooseImg.dispatchEvent('tap')
        await simulate.sleep(100)
        expect(comp.toJSON()).toMatchSnapshot()
    })

    test('preview', async () => {
        const comp = simulate.render(uploader, {
            files: [
                {
                    url: 'http://qq.com/image.png'
                }
            ],
            maxCount: '5',
            title: '图片上传',
            tips: '图片上传提示'
        })
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        const files = comp.querySelectorAll('.weui-uploader__file')
        files[0].dispatchEvent('tap')
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        const gallery = comp.querySelector('.gallery')
        gallery.dispatchEvent('delete', { url: 'http://qq.com/image.png', index: 0 })
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
