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
      .success(response => {
        $rootScope.$emit('login-occured');

        window.user = response.data;
        StorageService.put(config.API_TOKEN, window.user.api_token);

        $state.transitionTo('home');
      })
      .error(() => {
        vm.error = true;
      })
  }
}

export default {
  name: 'LoginCtrl',
  fn: LoginCtrl
};
