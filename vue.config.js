const path = require('path')

const addStyleResource = (rule) => {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/service_mobile.scss'),
                path.resolve(__dirname, './src/styles/base/_reset.scss'),
                path.resolve(__dirname, './src/styles/localFont.scss')
            ]
        })
}

module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',

    chainWebpack: (config) => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach((type) => addStyleResource(config.module.rule('scss').oneOf(type)))

        config.plugin('html').tap((args) => {
            args[0].title = "MUST'IT UX Design"
            return args
        })
    },

    devServer: {
        proxy: {
            '/facade-api': {
                target: process.env.FACADE_API_URL,
                changeOrigin: true,
                pathRewrite: {
                    '^/facade-api': ''
                }
            }
        }
    }
}
