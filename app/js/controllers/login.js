function LoginCtrl(AuthService) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'Authenticate';
  vm.error = false;

  vm.auth = function (username, password) {
    vm.error = false;
    AuthService.auth(username, password)
      .success(data => {
        console.log(data);
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
