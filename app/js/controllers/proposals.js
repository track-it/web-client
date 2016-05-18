function ProposalsCtrl(AppSettings, AccountService, ProposalService, proposals) {
  'ngInject';

  // ViewModel
  const vm = this;
  const config = AppSettings;

  vm.title = 'Proposals';
  vm.proposals = proposals;
  vm.config = config;
  vm.searchInput = '';
  vm.hasSearched = false;

  vm.search = () => {
    if (vm.searchInput) {
      ProposalService.search(vm.searchInput)
        .then(result => {
          vm.proposals = result;
          vm.hasSearched = true;
        });
    }
  }

  vm.clear = () => {
    ProposalService.index()
      .then(result => {
        vm.proposals = result;
        vm.hasSearched = false;
        vm.searchInput = '';
      });
  }

  AccountService.me()
    .then(me => {
      vm.user = me;
    });
}

export default {
  name: 'ProposalsCtrl',
  fn: ProposalsCtrl
};
