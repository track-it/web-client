function NavCtrl(AuthService, AccountService, AppSettings, $state, $rootScope) {
  'ngInject';

  // ViewModel
  const vm = this;
  const config = AppSettings;

  vm.config = config;

  vm.isAuthed = function () {
    return AuthService.isAuthed();
  };

  $rootScope.$on('login-occured', () => {
    vm.authed = true;
    vm.user = window.user;
  })

  vm.isActive = function (state) {
    return $state.is(state);
  };
}

export default {
  name: 'NavCtrl',
  fn: NavCtrl
};
