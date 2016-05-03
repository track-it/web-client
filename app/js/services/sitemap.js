function SitemapService($http, $q, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.run = function () {
    window.api = {
      proposals: {
        index: '/proposals',
      },
      projects: {
        index: '/projects',
      }
    };

    window.user = {
      username: 'ae2922',
      name: 'Andreas Indal',
      role: config.ROLES.TEACHER,
      loggedIn: true,
    };
  };

  return service;
}

export default {
  name: 'SitemapService',
  fn: SitemapService
};
