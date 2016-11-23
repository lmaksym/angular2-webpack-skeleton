module.exports = {
  server: {
      port: 8000,
      baseDir: './public',
      middleware: {
          1: require('connect-history-api-fallback')({index: '/index.html', verbose: true})
      }
  }
};