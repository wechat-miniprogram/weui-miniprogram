import path from 'path'
import simulate from 'miniprogram-simulate'

describe('checkbox-group & checkbox', () => {
    let id

    beforeAll(() => {
        id = simulate.load(path.resolve(__dirname, './index'), { less: true })
    })

    test('basic checkbox', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))
        expect(container.toJSON()).toMatchSnapshot()
    })

    test('radio value', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))

        const radioGroup = container.querySelector('.radio-group')

        radioGroup.dispatchEvent('change', {
            detail: {
                value: '0'
            }
        })
        await simulate.sleep(10)
        expect(container.data.radioValue).toBe('0')

        radioGroup.dispatchEvent('change', {
            detail: {
                value: '1'
            }
        })
        await simulate.sleep(10)
        expect(container.data.radioValue).toBe('1')
    })

    test('checkbox value', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))

        const checkboxGroup = container.querySelector('.checkbox-group')

        checkboxGroup.dispatchEvent('change', {
            detail: {
                value: ['0', '1']
            }
        })
        await simulate.sleep(10)
        expect(container.data.checkboxValue).toBe('0,1')

        checkboxGroup.dispatchEvent('change', {
            detail: {
                value: ['1']
            }
        })
        await simulate.sleep(10)
        expect(container.data.checkboxValue).toBe('1')
    })
})
