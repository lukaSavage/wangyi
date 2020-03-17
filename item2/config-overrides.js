const { override, fixBabelImports, addPostcssPlugins, addLessLoader } = require('customize-cra');

module.exports = override(
    addLessLoader({}),    // 注意，一定要放在最前面
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addPostcssPlugins([require('postcss-pxtorem')({
        rootValue: 16,
        propList: ['*']
        // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
        // propWhiteList: []
    })])
);