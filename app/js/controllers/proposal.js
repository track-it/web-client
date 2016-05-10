function ProposalCtrl(ProposalService, CommentService, StorageService, AppSettings, $state, $scope, proposal, comments) {
  'ngInject';

  const config = AppSettings;
  const storage = StorageService;
  const vm = this;

  vm.proposal = proposal;
  vm.comments = comments;
  vm.title = proposal.title;
  vm.config = config;

  vm.user = window.user;

  vm.token = storage.get('api_token');

  vm.comment = {};

  vm.postComment = () => {
    CommentService.store('proposals', vm.proposal.id, vm.comment.body)
      .then(res => {
        vm.comments.push(res.data.data);
        vm.comment.body = '';
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
