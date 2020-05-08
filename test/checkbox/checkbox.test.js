import path from 'path'
import simulate from 'miniprogram-simulate'

describe('checkbox-group & checkbox', () => {
    const id = simulate.load(path.join(__dirname, './index'))
    test('basic checkbox', async () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))

        const radioGroup = container.querySelector('.radio-group')
        const checkboxGroup = container.querySelector('.checkbox-group')

        radioGroup.dispatchEvent('change', {
            detail: {
                value: '0'
            }
        })
        await simulate.sleep(10)
        expect(container.querySelector('.radio-value').dom.innerHTML).toBe('0')

        radioGroup.dispatchEvent('change', {
            detail: {
                value: '1'
            }
        })
        await simulate.sleep(10)
        expect(container.querySelector('.radio-value').dom.innerHTML).toBe('1')

        checkboxGroup.dispatchEvent('change', {
            detail: {
                value: ['0', '1']
            }
        })
        await simulate.sleep(10)
        expect(container.querySelector('.checkbox-value').dom.innerHTML).toBe('0,1')

        checkboxGroup.dispatchEvent('change', {
            detail: {
                value: ['1']
            }
        })
        await simulate.sleep(10)
        expect(container.querySelector('.checkbox-value').dom.innerHTML).toBe('1')
    })
})
