function ProposalsService($http, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.index = function () {
    return new Promise((resolve, reject) => {
      $http.get(config.api('proposals'))
        .success((data) => resolve(data))
        .error((err, status) => reject(err, status));
    });
  };

  service.get = function (id) {
    return new Promise((resolve, reject) => {
      $http.get(config.api(`proposals/${id}`))
        .success((data) => resolve(data))
        .error((err, status) => reject(err, status));
    });
  };

  service.create = function (payload) {
    return new Promise((resolve, reject) => {
      $http.post(config.api('proposals'), payload)
        .success((data) => resolve(data))
        .error((err, status) => reject(err, status));
    })
  };

  service.update = function (id, payload) {
    return new Promise((resolve, reject) => {
      $http.put(config.api(`proposals/${id}`), payload)
        .success((data) => resolve(data))
        .error((err, status) => reject(err, status));
    });
  };

  return service;

}

export default {
  name: 'ProposalsService',
  fn: ProposalsService
};
