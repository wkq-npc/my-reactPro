const path=require("path")
const { override, fixBabelImports,addWebpackResolve,
addWebpackAlias,addDecoratorsLegacy
} = require('customize-cra');
module.exports = override(
      fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style:"css",
      }),
      //resolve
      addWebpackResolve({
            extensions:[".js",".jsx",".json"]
      }),
      //给文件夹起别名
      addWebpackAlias({
            "@s":path.resolve(__dirname,"src/"),
            "@assets":path.resolve(__dirname,"src/assets/"),
            "@sh":path.resolve(__dirname,"src/Home"),
      }),
      addDecoratorsLegacy()
 );