const { createProxyMiddleware } = require('http-proxy-middleware');
const URL = require('./config/key').URL;

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: URL,
            changeOrigin: true,
        })
    );
};