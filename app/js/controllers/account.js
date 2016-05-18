function AccountCtrl(me, AppSettings, StorageService, AuthService, $state, $controller) {
  'ngInject';

  const config = AppSettings;
  const vm = this;

  vm.title = 'Account';
  vm.me = me;
  vm.config = config;

  vm.getAdfsLogoutUrl = function () {
    return config.API_URL + 'logout?callback=' + $state.href('adfsLogout', {}, { absolute: true }) + '&api_token=' + me.api_token;
  }

  vm.isStudent = () => {
    return vm.me.role_id == vm.config.ROLES.STUDENT;
  }

  vm.logout = function () {
    AuthService.logout();
    $state.transitionTo('login');
  };
}

export default {
  name: 'AccountCtrl',
  fn: AccountCtrl
};
