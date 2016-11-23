module.exports = {
    port: 8001,
    server: {
        baseDir: './doc',
        middleware: {
            1: require('connect-history-api-fallback')({index: '/index.html', verbose: true})
        }
    }
};