function LoginCtrl(AuthService, AppSettings, StorageService, $state, $rootScope) {
  'ngInject';

  // ViewModel
  const vm = this;
  const config = AppSettings;

  vm.title = 'Authenticate';
  vm.error = false;

  vm.getAdfsUrl = function () {
    return config.API_URL + 'login?callback=https://trackit.albertkaaman.se/adfs/login';
  }

  vm.auth = function (username, password) {
    vm.error = false;
    AuthService.auth(username, password)
      .then(res => {
        StorageService.put(config.API_TOKEN, res.data.data.api_token);
        AuthService.initialize(StorageService.get(config.API_TOKEN));

        $state.transitionTo('home');
      })
      .catch(() => {
        vm.error = true;
      })
  }
}

export default {
  name: 'LoginCtrl',
  fn: LoginCtrl
};
