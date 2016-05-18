function ProposalService($http, $q, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.index = function () {
    return $http.get(config.api('proposals'))
        .then(res => {
          return res.data.data;
        });
  };

  service.search = function(searchInput) {
    return $http({
      url: config.api('proposals'),
      method: 'GET',
      params: {
        search: searchInput
      }
    }).then(res => {
      return res.data.data;
    });
  }

  service.get = function (id) {
    return $http.get(config.api(`proposals/${id}`))
      .then(res => {
        return res.data.data;
      });
  };

  service.store = function (payload) {
    return new Promise((resolve, reject) => {
      $http.post(config.api('proposals'), payload)
        .success((data) => resolve(data))
        .error((err, status) => reject(err, status));
    })
  };

  service.update = function (id, payload) {
    return $http.put(config.api(`proposals/${id}`), payload)
      .then(res => {
        return res.data.data;
      });
  };

  return service;

}

export default {
  name: 'ProposalService',
  fn: ProposalService
};
