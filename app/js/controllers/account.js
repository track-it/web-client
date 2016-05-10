function AccountCtrl(me, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const vm = this;

  vm.title = 'Account';
  vm.me = me;
  vm.config = config;

}

export default {
  name: 'AccountCtrl',
  fn: AccountCtrl
};