function ProposalCtrl(ProposalService, CommentService, AppSettings, $state, $scope, proposal) {
  'ngInject';

  const config = AppSettings;
  const vm = this;

  vm.proposal = proposal;
  vm.title = proposal.title;
  vm.config = config;

  vm.user = window.user;

  vm.comment = {};

  vm.postComment = () => {
    CommentService.store('proposals', vm.proposal.id, vm.comment.body)
      .then(() => {

      });
  };

  vm.isCommentable = () => {
    return true;
  };
}

export default {
  name: 'ProposalCtrl',
  fn: ProposalCtrl
};
