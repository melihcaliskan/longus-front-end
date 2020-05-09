const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    exportPathMap: async function(
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/index.js' },
        '/header': { page: '/pages/header.js' },
        '/issue': { page: '/pages/issue.js' },
        '/tabs': { page: '/pages/tabs.js' },
        '/detail': { page: '/pages/detail.js' },
      }
    },
  }