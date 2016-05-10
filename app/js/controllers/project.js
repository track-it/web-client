function ProjectCtrl(ProjectService, CommentService, StorageService, AppSettings, $state, $scope, project, comments) {
  'ngInject';

  const config = AppSettings;
  const storage = StorageService;
  const vm = this;

  vm.project = project;
  vm.comments = comments;
  vm.title = project.title;
  vm.config = config;

  vm.user = window.user;

  vm.token = storage.get('api_token');

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
