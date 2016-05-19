function ProjectService($http, $q, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.index = function (page) {
    let url = page ? `projects?page=${page}` : 'projects';
    return $http.get(config.api(url))
        .then(res => {
          console.log(res.data);
          return res.data;
        });
  };

  service.search = function(searchInput) {
    return $http({
      url: config.api('projects'),
      method: 'GET',
      params: {
        search: searchInput
      }
    }).then(res => {
      return res.data;
    });
  }

  service.store = function (id, payload) {
    return $http.post(config.api(`proposals/${id}/projects`), payload)
      .then(res => {
        console.log(res.data.data);
        return res.data.data;
      });
  }

  service.get = function (id) {
    return $http.get(config.api(`projects/${id}`))
      .then(res => {
        console.log(res.data.data);
        return res.data.data;
      });
  };

  service.update = function (id, payload) {
    return $http.put(config.api(`projects/${id}`), payload)
      .then(res => {
        return res.data.data;
      });
  };

  service.publish = function (id, shouldPublish) {
    return $http.post(config.api(`projects/${id}/publish`), {publish: shouldPublish})
      .then(res => {
        return res.data.data;
      });
  };


  return service;

}

export default {
  name: 'ProjectService',
  fn: ProjectService
};
