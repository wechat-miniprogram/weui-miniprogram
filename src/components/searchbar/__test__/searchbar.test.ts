import path from 'path'
import simulate from 'miniprogram-simulate'

describe('searchbar', () => {
    const searchbar = simulate.load(path.resolve(__dirname, '../searchbar'), 'mp-searchbar')

    test('basic', async () => {
        const onSelectResult = jest.fn()

        const wrapper = simulate.render(
            simulate.load({
                usingComponents: {
                    'mp-searchbar': searchbar
                },
                template:
                    '<mp-searchbar id="searchbar" search="{{search}}" bindselectresult="onSelectResult"></mp-searchbar>',
                ready() {
                    this.setData({
                        search: this.search.bind(this)
                    })
                },
                methods: {
                    search(value: string) {
                        return Promise.resolve([{ text: '搜索结果' + value, value: value }])
                    },
                    onSelectResult
                }
            })
        )
        wrapper.attach(document.createElement('parent-wrapper'))
        const comp = wrapper.querySelector('#searchbar')
        await simulate.sleep(0)
        expect(wrapper.toJSON()).toMatchSnapshot()

        const label = comp.querySelector('.weui-search-bar__label')
        const input = comp.querySelector('.weui-search-bar__input')
        label.dispatchEvent('tap')
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        input.dispatchEvent('input', { detail: { value: '123' } })
        await simulate.sleep(1000)
        expect(comp.toJSON()).toMatchSnapshot()

        const results = comp.querySelectorAll('.result')
        results[0].dispatchEvent('tap')
        await simulate.sleep(100)
        expect(comp.toJSON()).toMatchSnapshot()
        expect(onSelectResult).toHaveBeenCalledTimes(1)
        expect(onSelectResult.mock.calls[0][0].detail).toStrictEqual({
            index: 0,
            item: { text: '搜索结果123', value: '123' }
        })

        const cancel = comp.querySelector('.weui-search-bar__cancel-btn')
        cancel.dispatchEvent('tap')
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()

        label.dispatchEvent('tap')
        await simulate.sleep(0)
        const clear = comp.querySelector('.weui-icon-clear')
        clear.dispatchEvent('tap')
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
