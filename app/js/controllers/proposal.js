function ProposalCtrl(ProposalService, CommentService, AppSettings, $state, $scope, proposal, comments) {
  'ngInject';

  const config = AppSettings;
  const vm = this;

  vm.proposal = proposal;
  vm.comments = comments;
  vm.title = proposal.title;
  vm.config = config;

  vm.user = window.user;

  vm.comment = {};

  vm.postComment = () => {
    CommentService.store('proposals', vm.proposal.id, vm.comment.body)
      .then(res => {
        vm.comments.push(res.data.data);
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
