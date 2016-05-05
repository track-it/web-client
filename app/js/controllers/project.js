function ProjectCtrl(ProjectService, CommentService, AppSettings, $state, $scope, project, comments) {
  'ngInject';

  const config = AppSettings;
  const vm = this;

  vm.project = project;
  vm.comments = comments;
  vm.title = project.title;
  vm.config = config;

  vm.user = window.user;

  vm.comment = {};

  vm.postComment = () => {
    CommentService.store('projects', vm.project.id, vm.comment.body)
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
  name: 'ProjectCtrl',
  fn: ProjectCtrl
};
