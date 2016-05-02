function AuthService($http, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  let authed = false;

  service.isAuthenticated = function () {
    return authed;
  };

  service.check = function () {
    return $http.get(config.api('auth/check'))
      .then((res) => {
        if (res.data.authed) authed = true;
      });
  };

  service.auth = function (username, password) {
    return $http.post(config.api('auth'), {
      username: username,
      password: password
    });
  };

  return service;

}

export default {
  name: 'AuthService',
  fn: AuthService
};
