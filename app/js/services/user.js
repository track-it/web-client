function UserService($http, $q, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.index = function (params) {
    return $http({
      url: config.api('users'),
      method: 'GET',
      params: params
    })
    .then(res => {
      return res.data.data;
    });
  };

  return service;

}

export default {
  name: 'UserService',
  fn: UserService
};
