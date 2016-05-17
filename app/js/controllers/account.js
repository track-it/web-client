function AccountCtrl(me, AppSettings, StorageService, AuthService, $state, $controller) {
  'ngInject';

  const config = AppSettings;
  const vm = this;

  vm.title = 'Account';
  vm.me = me;
  vm.config = config;

  vm.isStudent = () => {
    return vm.me.role_id == vm.config.ROLES.STUDENT;
  }

  vm.logout = function () {
    StorageService.delete(config.API_TOKEN);
    AuthService.logout();
    $state.transitionTo('login');
  };
}

export default {
  name: 'AccountCtrl',
  fn: AccountCtrl
};
