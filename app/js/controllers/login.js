function LoginCtrl(AuthService, AppSettings, StorageService, $state, $rootScope) {
  'ngInject';

  // ViewModel
  const vm = this;
  const config = AppSettings;

  vm.title = 'Authenticate';
  vm.error = false;

  vm.auth = function (username, password) {
    vm.error = false;
    AuthService.auth(username, password)
      .then(res => {
        $rootScope.$emit('login-occured');

        StorageService.put(config.API_TOKEN, res.data.data.api_token);
        AuthService.initialize(StorageService.get(config.API_TOKEN));

        $state.transitionTo('home');
      })
      .catch((err, status) => {
        vm.error = true;
      })
  }
}

export default {
  name: 'LoginCtrl',
  fn: LoginCtrl
};
