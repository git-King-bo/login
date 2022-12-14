const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false ,// 如果为false，就是取消eslint规则的检查
  devServer:{
    proxy:{
      '/jeecg-boot':{
        target: 'http://39.104.67.64:4001/jeecg-boot',
        changeOrigin: true,
        pathRewrite: { '^/jeecg-boot' : '' }
      }
    }
  }
});
