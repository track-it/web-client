function NavCtrl(StorageService, AuthService, AccountService, AppSettings, $state, $rootScope) {
  'ngInject';

  // ViewModel
  const vm = this;
  const config = AppSettings;

  vm.config = config;

  vm.isAuthed = function () {
    return AuthService.isAuthed();
  };

  $rootScope.$on('login-occured', () => {
    vm.user = StorageService.get(config.USER);
  })

  $rootScope.$on('logout-occured', () => {
    vm.user = undefined;
  });

  vm.isActive = function (state) {
    return $state.is(state);
  };
}

export default {
  name: 'NavCtrl',
  fn: NavCtrl
};
