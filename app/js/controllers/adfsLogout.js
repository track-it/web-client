function AdfsLogoutCtrl(AuthService, $state) {
  'ngInject';

  AuthService.logout();

  $state.go('login');
}

export default {
  name: 'AdfsLogoutCtrl',
  fn: AdfsLogoutCtrl
};