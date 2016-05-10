function NavCtrl(AuthService, $state, $rootScope) {
  'ngInject';

  // ViewModel
  const vm = this;
  // vm.authed = false;

  // AuthService.check((status) => {
    // console.log("lllolololololol");
    // if (status) vm.authed = true;
    // }
  // });

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
