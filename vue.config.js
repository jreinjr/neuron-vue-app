module.exports = {
  configureWebpack:{
    output: {
      filename: 'bundle.js'
    },
    optimization: {
      splitChunks: false
    }
  },
  filenameHashing:false,
  publicPath: "",
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    extract: false
  },
  runtimeCompiler: true
};
