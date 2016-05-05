function ProjectService($http, $q, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.index = function () {
    return $http.get(config.api('projects'))
        .then(res => {
          return res.data.data;
        });
  };

  service.get = function (id) {
    return $http.get(config.api(`projects/${id}`))
      .then(res => {
        console.log(res.data.data);
        return res.data.data;
      });
  };

  return service;

}

export default {
  name: 'ProjectService',
  fn: ProjectService
};
