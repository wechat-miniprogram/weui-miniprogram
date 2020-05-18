import Validators from '../validator'

describe('required', () => {
    test('success', () => {
        expect(Validators.required({ name: '姓名', required: true }, '张三')).toBe('')
    })

    test('empty should fail', () => {
        expect(Validators.required({ name: '姓名', required: true }, '')).toBe('姓名必填')
        expect(Validators.required({ name: '姓名', required: true }, null)).toBe('姓名必填')
        expect(Validators.required({ name: '姓名', required: true }, undefined)).toBe('姓名必填')
    })

    test('0 or false should success', () => {
        expect(Validators.required({ name: '姓名', required: true }, 0)).toBe('')
        expect(Validators.required({ name: '姓名', required: true }, false)).toBe('')
    })
})

describe('minlength', () => {
    test('success', () => {
        expect(Validators.minlength({ name: '姓名', minlength: 2 }, '张三')).toBe('')
    })

    test('fail', () => {
        expect(Validators.minlength({ name: '姓名', minlength: 2 }, '张')).toBe('长度最少为2')
    })
})

describe('maxlength', () => {
    test('success', () => {
        expect(Validators.maxlength({ name: '姓名', maxlength: 5 }, '张三张三张')).toBe('')
    })

    test('fail', () => {
        expect(Validators.maxlength({ name: '姓名', maxlength: 5 }, '张张张张张张')).toBe(
            '长度最大为5'
        )
    })
})

describe('rangelength', () => {
    test('success', () => {
        expect(Validators.rangelength({ name: '姓名', range: [2, 3] }, '张三')).toBe('')
    })

    test('fail', () => {
        expect(Validators.rangelength({ name: '姓名', range: [2, 3] }, '张')).toBe('长度在2和3之间')
        expect(Validators.rangelength({ name: '姓名', range: [2, 3] }, '张三张三')).toBe(
            '长度在2和3之间'
        )
    })
})

describe('min', () => {
    test('success', () => {
        expect(Validators.min({ name: '年龄', min: 0 }, 0)).toBe('')
    })

    test('fail', () => {
        expect(Validators.min({ name: '年龄', min: 0 }, -1)).toBe('值最小为0')
    })
})

describe('max', () => {
    test('success', () => {
        expect(Validators.max({ name: '年龄', max: 100 }, 100)).toBe('')
    })

    test('fail', () => {
        expect(Validators.max({ name: '年龄', max: 100 }, 101)).toBe('值最大为100')
    })
})

describe('range', () => {
    test('success', () => {
        expect(Validators.range({ name: '年龄', range: [0, 100] }, 0)).toBe('')
        expect(Validators.range({ name: '年龄', range: [0, 100] }, 100)).toBe('')
    })

    test('fail', () => {
        expect(Validators.range({ name: '年龄', range: [0, 100] }, -1)).toBe('值的范围为0和100之间')
        expect(Validators.range({ name: '年龄', range: [0, 100] }, 101)).toBe(
            '值的范围为0和100之间'
        )
    })
})

describe('mobile', () => {
    test('success', () => {
        expect(Validators.mobile({ name: '手机号' }, '12345678901')).toBe('')
    })
})

describe('email', () => {
    test('success', () => {
        expect(Validators.email({ name: '邮箱' }, '123@123.com')).toBe('')
    })

    test('fail', () => {
        expect(Validators.email({ name: '邮箱' }, '123@123')).toBe('请输入正确的电子邮件')
    })
})

describe('url', () => {
    test('success', () => {
        expect(Validators.url({ name: 'url' }, 'https://qq.com')).toBe('')
        expect(Validators.url({ name: 'url' }, 'weixin://qq.com')).toBe('')
    })

    test('fail', () => {
        expect(Validators.url({ name: 'url' }, 'https:/qq.com')).toBe('请输入正确的URL地址')
        expect(Validators.url({ name: 'url' }, 'weixin:// qq.com')).toBe('请输入正确的URL地址')
    })
})

describe('equalTo', () => {
    test('success', () => {
        expect(Validators.equalTo({ equalTo: 'b' }, 'foo', null, { b: 'foo' })).toBe('')
    })

    test('success', () => {
        expect(Validators.equalTo({ equalTo: 'b', name: 'B' }, 'foo', null, { b: 'bar' })).toBe(
            '值和字段B不相等'
        )
    })
})

describe('bytelength', () => {
    test('success', () => {
        expect(Validators.bytelength({ param: 3 }, 'foo', null)).toBe('')
        expect(Validators.bytelength({ param: 2 }, '蛤', null)).toBe('')
    })

    test('fail', () => {
        expect(Validators.bytelength({ param: 2 }, 'f蛤', null)).toBe('最多只能输入2个字')
    })
})
