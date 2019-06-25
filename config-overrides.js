const { override, fixBabelImports, addLessLoader,addWebpackAlias } = require('customize-cra');
const path=require('path');

module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   // 使用less 并且可以修改主题
   addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': 'red' },
   }),
   addWebpackAlias({
     '@':path.resolve(__dirname,'./src')
   })
 );