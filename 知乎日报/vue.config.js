module.exports = {
  productionSourceMap: false,
  // 配置代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://news-at.zhihu.com',
        pathRewrite: {
          '^/api': ''
        },
      },
    },
  },
};
