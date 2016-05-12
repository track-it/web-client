function ProposalsCtrl(proposals, AppSettings, AccountService) {
  'ngInject';

  // ViewModel
  const vm = this;
  const config = AppSettings;

  vm.title = 'Proposals';
  vm.new = {};
  vm.proposals = proposals;
  vm.config = config;

  AccountService.me()
    .then(me => {
      vm.user = me;
    });
}

export default {
  name: 'ProposalsCtrl',
  fn: ProposalsCtrl
};
