function AccountCtrl(me) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'Account';
  vm.me = me;

}

export default {
  name: 'AccountCtrl',
  fn: AccountCtrl
};