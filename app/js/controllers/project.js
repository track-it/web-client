function ProjectCtrl(ProjectService, CommentService, AppSettings, $state, $scope, project) {
  'ngInject';
  
  const config = AppSettings;
  const vm = this;

  vm.project = project;
  vm.title = project.title;
  vm.config = config;

  vm.user = window.user;

  vm.comment = {};

  vm.postComment = () => {
    CommentService.store('projects', vm.project.id, vm.comment.body)
      .then(() => {

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
