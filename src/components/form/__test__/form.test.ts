import path from 'path'
import simulate from 'miniprogram-simulate'

describe('form', () => {
    let id: string

    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, './comp/index'), { less: true })
    })

    test('basic', async () => {
        const comp = simulate.render(id)
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        // const form = comp.querySelector('#form')
        const submit = comp.querySelector('.submit')

        submit.dispatchEvent('tap')
        await simulate.sleep(0)
        expect(comp.data.error).toBe('多选列表是必选项')
    })
})
