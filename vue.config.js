module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    hot: true,
    port: 8080,
    host: 'localhost',
    open: false,
    disableHostCheck: true
  },
  publicPath: '/',
  productionSourceMap: false
}
