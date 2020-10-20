import path from 'path'
import simulate from 'miniprogram-simulate'

describe('grids', () => {
    const icon = simulate.load(path.resolve(__dirname, '../icon'))

    async function testIcon(options: {
        type?: string
        icon: string
        size?: number
        color?: string
    }): Promise<void> {
        const iconComp = simulate.render(icon, options)
        iconComp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(iconComp.toJSON()).toMatchSnapshot()
    }

    test('basic', async () => {
        await testIcon({ icon: 'add' })
        await testIcon({ type: 'filled', icon: 'album' })
        await testIcon({ size: 20, icon: 'cellphone' })
        await testIcon({ color: 'rgba(255, 255, 255, .8)', icon: 'cellphone' })
    })
})
