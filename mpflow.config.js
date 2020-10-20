module.exports = {
    appId: 'wx69718f08e51eebf9',
    projectName: '小程序自定义组件',
    app: (mode) => (mode !== 'production' ? 'src/app' : undefined),
    pages: (mode) => (mode !== 'production' ? undefined : ['src/components/index']),
    sourceMap: (mode) => mode !== 'production',
    compileType: 'miniprogram',
    outputDir: 'miniprogram_dist',
    plugins: ['@mpflow/plugin-babel', '@mpflow/plugin-typescript', '@mpflow/plugin-css'],
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
        userConfirmedUseCompilerModuleSwitch: false
    }
}
