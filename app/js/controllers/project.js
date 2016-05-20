function ProjectCtrl(ProjectService, CommentService, StorageService, AppSettings, $state, $scope, $rootScope, $filter, project) {
  'ngInject';

  $rootScope.$on('$stateChangeSuccess', function() {
     document.body.scrollTop = document.documentElement.scrollTop = 0;
  });

  const config = AppSettings;
  const storage = StorageService;
  const vm = this;

  vm.project = project;
  vm.comments = [];
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
    return (config.PROJECT_STATUSES.PUBLISHED != project.status || vm.user.role_id == config.ROLES.ADMINISTRATOR);
  };

  vm.userIsStudent = () => {
    let projectUser = $filter('filter')(project.participants, { id : vm.user.id })[0];
    return (projectUser.pivot.project_role_id == config.PROJECT_ROLES.STUDENT);
  };

  vm.projectIsCompleted = () => {
    return project.status == config.PROJECT_STATUSES.COMPLETED;
  };

  if (vm.user) {
    CommentService.get('projects', vm.project.id)
      .then(comments => {
        vm.comments = comments;
      })
  }
}

export default {
  name: 'ProjectCtrl',
  fn: ProjectCtrl
};
