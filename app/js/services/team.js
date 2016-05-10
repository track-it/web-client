function TeamService($http, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.store = (id, body) => {
    return $http.post(config.api(`proposals/${id}/teams`), body);
  };

  service.index = (id, params) => {
    return $http({
      url: config.api(`proposals/${id}/teams`),
      method: 'GET',
      params: params
    })
    .then(res => {
      return res.data.data;
    })
  }

  return service;
}

export default {
  name: 'TeamService',
  fn: TeamService
};
