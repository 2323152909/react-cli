// 配置具体的修改规则
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // 配置按需引入样式
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 更改默认主题
  addLessLoader({
    lessOptions: {
      modifyVars: { '@primary-color': '#1DA57A' },
      javascriptEnabled: true,
    },
  }),
);