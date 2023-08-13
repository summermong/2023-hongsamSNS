const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("", {
      target: "https://0fa4-52-78-173-252.ngrok-free.app/",
      changeOrigin: true,
    })
  );
};
