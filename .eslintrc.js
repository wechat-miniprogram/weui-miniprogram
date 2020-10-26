module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    env: {
        es6: true,
        browser: true,
        jest: true,
        commonjs: true,
        node: true
    },
    plugins: [
      '@typescript-eslint',
      'prettier'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
    ],
    globals: {
        wx: true,
        App: true,
        Page: true,
        Component: true
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': ["error", { allow: ["warn", "error"] } ],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off'
    }
}
