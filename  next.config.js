/*
const data = require('./helpers/projectsData');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function () {
    const { projects } = data;
    const paths = {
      '/': { page: '/' },
    };

    projects.forEach((project) => {
      paths[`/detail/${project.slug}`] = {
        page: '/detail/[path]',
        query: { path: project.slug },
      };
    });

    return paths;
  },
};
*/