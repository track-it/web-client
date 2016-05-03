function NavCtrl(AuthService, $state, $scope, $rootScope) {
  'ngInject';

  // ViewModel
  const vm = this;
  vm.authed = false;

  AuthService.check((status) => {
    if (status) vm.authed = true;
  });

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
