import path from 'path'
import simulate from 'miniprogram-simulate'

test('components/index', () => {
    const id = simulate.load(path.join(__dirname, '../miniprogram_dist/badge/badge')) // 此处必须传入绝对路径
    const comp = simulate.render(id, {
        content: 'davidysxue'
    }) // 渲染成自定义组件树实例

    const parent = document.createElement('parent-wrapper') // 创建父亲节点
    comp.attach(parent) // attach 到父亲节点上，此时会触发自定义组件的 attached 钩子

    const view = comp.querySelector('.weui-badge') // 获取子组件 view
    expect(view.dom.innerHTML).toBe('davidysxue') // 测试渲染结果
    // expect(window.getComputedStyle(view.dom).color).toBe('green') // 测试渲染结果
})