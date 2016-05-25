function ProposalsCtrl(AppSettings, AccountService, StorageService, ProposalService, proposals) {
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

  vm.nextPage = () => {
    ProposalService.index(vm.proposals.current_page + 1)
      .then(proposals => {
        vm.proposals = proposals;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
  }

  vm.previousPage = () => {
    ProposalService.index(vm.proposals.current_page - 1)
      .then(proposals => {
        vm.proposals = proposals;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
  }

  if (StorageService.exists(config.USER)) {
    AccountService.me()
      .then(me => {
        vm.user = me;
      });
  }
}

export default {
  name: 'ProposalsCtrl',
  fn: ProposalsCtrl
};
