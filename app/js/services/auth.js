function AuthService($http, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  let authed = false;

  service.isAuthenticated = function () {
    return authed;
  };

  service.check = function () {
    $http.get(config.api('auth/check'))
      .success((data) => {
        if (data.authed) authed = true;
      });
  };

  service.auth = function (username, password) {
    return new Promise((resolve, reject) => {
      $http.post(config.api('auth'), {
        username: username,
        password: password
      }).success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  return service;

}

export default {
  name: 'AuthService',
  fn: AuthService
};
