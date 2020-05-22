import path from 'path'
import simulate from 'miniprogram-simulate'

describe('grids', () => {
    const grids = simulate.load(path.resolve(__dirname, '../grids'), 'mp-grids')

    const id = simulate.load({
        template: `
            <mp-grids grids="{{grids}}"></mp-grids>
        `,
        usingComponents: {
            'mp-grids': grids
        },
        data: {
            grids: Array(9)
                .fill(null)
                .map((_, i) => ({
                    imgUrl: `/img-${i}.png`,
                    url: `/${i}`,
                    text: `Grid${i}`
                }))
        }
    })

    test('basic', async () => {
        const comp = simulate.render(id)
        comp.attach(document.createElement('parent-wrapper'))
        await simulate.sleep(0)
        expect(comp.toJSON()).toMatchSnapshot()
    })
})
