import path from 'path'
import simulate from 'miniprogram-simulate'

describe('', () => {
    const id = simulate.load(path.join(__dirname, './index'))
    test('', () => {
        const container = simulate.render(id)
        container.attach(document.createElement('parent-wrapper'))

        // TODO: xxx
    })
})
