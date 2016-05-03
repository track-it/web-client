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
    console.log("asd");
    CommentService.store('proposals', vm.proposal.id, vm.comment.body)
      .then((response) => {
        vm.comments.push(response.data.data);
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
