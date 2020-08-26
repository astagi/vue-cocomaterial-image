const WorkerPlugin = require('worker-plugin');

module.exports = {
  configureWebpack: (config) => {
    config.output.libraryExport = 'default'
    config.plugins = [new WorkerPlugin()]
    // config.module.rules = [
    //   {
    //     test: /\.worker\.js$/i,
    //     use: [
    //       {
    //         loader: 'worker-loader'
    //       }
    //     ]
    //   },
    //   ...config.module.rules
    // ]
  }
}
