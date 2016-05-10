function AuthService($http, $rootScope, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.isAuthenticated = false;

  service.check = (cb) => {
    $http.get(config.api('site'))
      .then(res => {
        cb(res.data.user);
      });
  }

  service.initialize = (apiToken) => {
    $http.defaults.headers.common.Authorization = 'Bearer ' + apiToken;

    $http.get(config.api('site'))
      .then(res => {
        window.sitemap = res.data;

        if (res.data.user) {
          window.user = res.data.user;
          service.isAuthenticated = true;
        }
      });
  };

  service.auth = function (username, password) {
    return $http.post(config.api('auth/login'), {
      username: username,
      password: password
    });
  };

  service.logout = function () {
      delete $http.defaults.headers.common.Authorization;
      delete window.user;
      service.isAuthenticated = false; 
  };

  return service;

}

export default {
  name: 'AuthService',
  fn: AuthService
};
