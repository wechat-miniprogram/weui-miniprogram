import path from 'path'
import simulate from 'miniprogram-simulate'

describe('searchbar', () => {
    const searchbar = simulate.load(path.resolve(__dirname, '../searchbar'))

    test('basic', async () => {
        const comp = simulate.render(searchbar, {
            search(value: string) {
                return Promise.resolve([{ text: '搜索结果' + value, value: value }])
            }
        })
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        const label = comp.querySelector('.weui-search-bar__label')
        const input = comp.querySelector('.weui-search-bar__input')
        label.dispatchEvent('tap')
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        input.dispatchEvent('input', { detail: { value: '123' } })
        await simulate.sleep(1000)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
