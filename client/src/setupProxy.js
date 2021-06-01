const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://apifaceless.wearemist.in',
      changeOrigin: true,
      headers: {
        "Connection": "keep-alive"
      },
    })
  );
};