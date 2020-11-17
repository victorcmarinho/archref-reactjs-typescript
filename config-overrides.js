const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      paths: [
        {
          rootPathSuffix: 'src',
        },
        {
          rootPathPrefix: '@assets/',
          rootPathSuffix: 'src/assets',
        },
        {
          rootPathPrefix: '@components/',
          rootPathSuffix: 'src/components',
        },
        {
          rootPathPrefix: '@hooks/',
          rootPathSuffix: 'src/hooks',
        },
        {
          rootPathPrefix: '@pages/',
          rootPathSuffix: 'src/pages',
        },
        {
          rootPathPrefix: '@routes/',
          rootPathSuffix: 'src/routes',
        },
        {
          rootPathPrefix: '@services/',
          rootPathSuffix: 'src/services',
        },
        {
          rootPathPrefix: '@store/',
          rootPathSuffix: 'src/store',
        },
        {
          rootPathPrefix: '@styles/',
          rootPathSuffix: 'src/styles',
        },
        {
          rootPathPrefix: '@utils/',
          rootPathSuffix: 'src/utils',
        },
      ],
    },
  ]),
);
