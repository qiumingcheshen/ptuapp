module.exports = {

    devServer: {
        proxy: {
            '/api': {
                target: 'http://testpt.huirw.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}