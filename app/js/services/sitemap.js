function SitemapService($http, $q, AppSettings) {
  'ngInject';

  // const config = AppSettings;
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
  };

  return service;
}

export default {
  name: 'SitemapService',
  fn: SitemapService
};
