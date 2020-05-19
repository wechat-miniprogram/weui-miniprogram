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
    const uploader = simulate.load(path.resolve(__dirname, '../uploader'))

    test('basic', async () => {
        const comp = simulate.render(
            simulate.load({
                compiler: 'official',
                rootPath: __dirname,
                usingComponents: {
                    'mp-uploader': uploader
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
})
