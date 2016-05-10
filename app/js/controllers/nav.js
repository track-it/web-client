function NavCtrl(AuthService, $state, $rootScope) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.isAuthed = function () {
    return AuthService.isAuthed();
  };

  $rootScope.$on('login-occured', () => {
    vm.authed = true;
  })

  vm.isActive = function (state) {
    return $state.is(state);
  };
}

export default {
  name: 'NavCtrl',
  fn: NavCtrl
};
