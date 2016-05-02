function ProposalsCtrl(proposals) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'Proposals';
  vm.new = {};
  vm.proposals = proposals;
}

export default {
  name: 'ProposalsCtrl',
  fn: ProposalsCtrl
};
