import FormValidator from '../form-validator'

describe('form-validator', () => {
    test('basic usage', async () => {
        const formValidator = new FormValidator(
            { username: 'bar' },
            {
                username: [
                    {
                        required: true
                    }
                ]
            }
        )
        const { isValid, errors } = await formValidator.validate()
        expect(isValid).toBe(true)
        expect(errors).toBe(undefined)
    })

    test('invalid', async () => {
        const formValidator = new FormValidator(
            { username: 'bar', password: '123', repeatPassword: '' },
            {
                username: [
                    {
                        required: true
                    },
                    {
                        minlength: 3
                    }
                ],
                password: [{ required: true }, { minlength: 6 }],
                repeatPassword: [{ required: true }, { equalTo: 'password' }]
            }
        )
        const { isValid, errors } = await formValidator.validate()
        expect(isValid).toBe(false)
        expect(errors).toStrictEqual({
            password: { message: '长度最少为6', rule: { minlength: 6, name: 'password' } },
            repeatPassword: {
                message: 'repeatPassword必填',
                rule: { name: 'repeatPassword', required: true }
            }
        })
    })
})
