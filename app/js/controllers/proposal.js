function ProposalCtrl(ProposalService, $state, $scope, proposal) {
  'ngInject';

  // ViewModel
  const vm = this;
  vm.proposal = proposal;

  vm.title = proposal.title;
}

export default {
  name: 'ProposalCtrl',
  fn: ProposalCtrl
};
