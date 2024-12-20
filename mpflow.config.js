const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    appId: 'wxe5f52902cf4de896',
    projectName: '小程序自定义组件',
    app: (mode) => (mode !== 'production' ? 'src/app' : undefined),
    pages: (mode) => (mode !== 'production' ? undefined : ['src/components/index']),
    sourceMap: (mode) => mode !== 'production',
    compileType: 'miniprogram',
    outputDir: 'miniprogram_dist',
    plugins: ['@mpflow/plugin-babel', '@mpflow/plugin-typescript', '@mpflow/plugin-css'],
    minimize: false,
    configureWebpackChain: (config) => {
        config.plugin('terser').use(TerserWebpackPlugin, [
            {
                terserOptions: {
                    compress: {
                        directives: false
                    }
                }
            }
        ])
    },
    settings: {
        urlCheck: true,
        es6: false,
        postcss: false,
        preloadBackgroundData: false,
        minified: false,
        newFeature: true,
        coverView: true,
        nodeModules: true,
        autoAudits: false,
        showShadowRootInWxmlPanel: true,
        scopeDataCheck: false,
        checkInvalidKey: true,
        checkSiteMap: true,
        uploadWithSourceMap: true,
        compileHotReLoad: false,
        babelSetting: {
            ignore: [],
            disablePlugins: [],
            outputPath: ''
        },
        useIsolateContext: true,
        useCompilerModule: false,
        userConfirmedUseCompilerModuleSwitch: false,
        compileWorklet: true,
        minifyWXSS: false
    }
}
