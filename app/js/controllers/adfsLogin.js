function AdfsLoginCtrl($state, me) {
  'ngInject';

  if (me) {
    $state.transitionTo('account');
  } else {
    $state.transitionTo('home');
  }
}

export default {
  name: 'AdfsLoginCtrl',
  fn: AdfsLoginCtrl
};