function NavCtrl(AuthService, $state) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.authed = AuthService.isAuthenticated()

  vm.isActive = function (state) {
    return $state.is(state);
  };
}

export default {
  name: 'NavCtrl',
  fn: NavCtrl
};
