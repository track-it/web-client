function AuthService(StorageService, AppSettings, $http, $rootScope) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.isAuthenticated = false;

  service.isAuthed = function () {
    return service.isAuthenticated;
  }

  service.check = (cb) => {
    $http.get(config.api('site'))
      .then(res => {
        cb(res.data.user);
      });
  }

  service.initialize = (apiToken) => {
    $http.defaults.headers.common.Authorization = 'Bearer ' + apiToken;

    return $http.get(config.api('site'))
      .then(res => {
        window.sitemap = res.data;

        if (res.data.user) {
          window.user = res.data.user;
          service.isAuthenticated = true;
        }

        $rootScope.$emit('login-occured');

        return res.data.user;
      });
  };

  service.auth = function (username, password) {
    return $http.post(config.api('auth/login'), {
      username: username,
      password: password
    });
  };

  service.register = function(user) {
    return $http.post(config.api('auth/register'), user);
  }

  service.logout = function () {
    StorageService.delete(config.API_TOKEN);
    delete $http.defaults.headers.common.Authorization;
    delete window.user;
    delete window.sitemap;
    service.isAuthenticated = false;

    $rootScope.$emit('logout-occured');
  };

  return service;

}

export default {
  name: 'AuthService',
  fn: AuthService
};
