function AdfsLogoutCtrl(AuthService, $state) {
  'ngInject';

  if (AuthService.isAuthed()) {
  	AuthService.logout();
  }

  $state.transitionTo('home');
}

export default {
  name: 'AdfsLogoutCtrl',
  fn: AdfsLogoutCtrl
};