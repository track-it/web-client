function AccountCtrl(me, AppSettings, StorageService, AuthService, $state, $controller, $window) {
  'ngInject';

  const config = AppSettings;
  const vm = this;

  vm.title = 'Account';
  vm.me = me;
  vm.config = config;

  vm.getAdfsLogoutUrl = function () {
    return config.API_URL + 'logout?callback=' + $state.href('login', {}, { absolute: true }) + '&api_token=' + vm.me.api_token;
  }

  vm.isStudent = () => {
    return vm.me.role_id == vm.config.ROLES.STUDENT;
  }

  vm.logout = function () {
    AuthService.logout();

    if (vm.me.type === config.USER_TYPES.LOCAL) {
      $state.transitionTo('login');
    } else if (vm.me.type === config.USER_TYPES.ADFS) {
      $window.location.href = vm.getAdfsLogoutUrl();
    }
  };
}

export default {
  name: 'AccountCtrl',
  fn: AccountCtrl
};
