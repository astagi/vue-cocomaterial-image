module.exports = {
  configureWebpack: (config) => {
    config.module.rules = [
      {
        test: /\.worker\.js$/i,
        use: [
          {
            loader: 'worker-loader'
          }
        ]
      },
      ...config.module.rules
    ]
  }
}
