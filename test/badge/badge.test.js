import path from 'path'
import simulate from 'miniprogram-simulate'

describe('badge', () => {
    const id = simulate.load(path.join(__dirname, '../../miniprogram_dist/badge/badge'))
    test('badge with content', () => {
        const content = 'badge content'
        const comp = simulate.render(id, {
            content: content
        })

        const parent = document.createElement('parent-wrapper')
        comp.attach(parent)

        const view = comp.querySelector('.weui-badge')
        expect(view.dom.innerHTML).toBe(content)
    })

    test('badge without content', () => {
        const comp = simulate.render(id, {})

        const parent = document.createElement('parent-wrapper')
        comp.attach(parent)

        const view = comp.querySelector('.weui-badge')
        expect(view.dom.className.indexOf('weui-badge_dot')).toBeGreaterThan(-1)
    })
})
