function AdfsLoginCtrl(AppSettings, StorageService, $state, me) {
  'ngInject';

  const config = AppSettings;

  if (me) {
  	StorageService.put(config.API_TOKEN, me.api_token);

    $state.transitionTo('account');
  } else {
    $state.transitionTo('home');
  }
}

export default {
  name: 'AdfsLoginCtrl',
  fn: AdfsLoginCtrl
};