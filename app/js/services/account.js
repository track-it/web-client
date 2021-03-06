function AccountService($http, $q, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.me = function () {
    return $http.get(config.api(`me`))
      .then(res => {
        console.log(res.data.data);
        return res.data.data;
      });
  };

  return service;

}

export default {
  name: 'AccountService',
  fn: AccountService
};
