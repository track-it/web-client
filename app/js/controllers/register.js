function RegisterCtrl(AuthService, AppSettings, $state, $rootScope) {
  'ngInject';

  // ViewModel
  const vm = this;
  const config = AppSettings;

  vm.error = false;
  vm.registered = false;
  vm.user = {};

  vm.register = function (user) {
    vm.error = false;
    AuthService.register(user)
      .then(res => {
        console.log(res);
        vm.user = res.data.data;
        vm.registered = true;
      })
      .catch(() => {
        vm.error = true;
      });
  }

  vm.isRegistered = () => {
    return vm.registered;
  }
}

export default {
  name: 'RegisterCtrl',
  fn: RegisterCtrl
};
