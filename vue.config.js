module.exports = {
  configureWebpack: (config) => {
    config.module.rules = [
      {
        test: /\.worker\.js$/i,
        use: [
          {
            loader: 'worker-loader',
            options: {
              inline: 'no-fallback',
            },
          }
        ]
      },
      ...config.module.rules
    ]
  }
}
