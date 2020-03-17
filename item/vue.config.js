// vue.config.js
// const path = require('path')
// function resolve(dir) {
//     // return path.join(__dirname, '..', dir)
//     return path.join(__dirname, dir)
// }
module.exports = {
    // 该配置会让vue-cli3.0可以使用vue-cli2.0的语法
    // configureWebpack: {
    //     resolve: {
    //         extensions: ['.js', '.vue', '.json'],
    //         alias: {
    //             'vue$': 'vue/dist/vue.esm.js',
    //             '@': resolve('src'),
    //         }
    //     }
    // },

    // 以下配置作为代理服务器
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3001', // 目标路径
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    '^/api': '' // 重写路径
                }
            }
        }
    }
}