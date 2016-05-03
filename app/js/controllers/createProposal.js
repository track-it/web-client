function CreateProposalCtrl(ProposalService, $state) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.new = {};
  vm.title = 'Submit proposal';

  vm.store = () => {
    ProposalService.store(vm.new)
      .then(() => {
        $state.transitionTo('proposals');
      })
  };
}

export default {
  name: 'CreateProposalCtrl',
  fn: CreateProposalCtrl
};
