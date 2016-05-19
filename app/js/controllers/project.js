function ProjectCtrl(ProjectService, CommentService, StorageService, AppSettings, $state, $scope, $filter, project) {
  'ngInject';

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
    return false;
  };

  vm.userCanPublish = () => {
    let userIsStudent;
    let projectUser;
    let canPublish;
    if (project.participants) {
      projectUser = $filter('filter')(project.participants, { id : vm.user.id })[0];
      if (projectUser) {
        canPublish = projectUser.pivot.project_role_id == config.PROJECT_ROLES.STUDENT
              && (project.status == config.PROJECT_STATUSES.COMPLETED || project.status == config.PROJECT_STATUSES.PUBLISHED);
      }
    }
    console.log("canPublish: " + (canPublish));
    return canPublish;
  }

  vm.userCanEditProject = () => {
    let isAdmin = (vm.user.role_id == config.ROLES.ADMINISTRATOR);
    let isTeacher;
    let isSupervisor;

    if (!isAdmin) {
      let projectUser = $filter('filter')(project.participants, { id : vm.user.id })[0];
      if (projectUser) {
        isTeacher = projectUser.pivot.project_role_id == config.PROJECT_ROLES.TEACHER;
        isSupervisor = projectUser.pivot.project_role_id == config.PROJECT_ROLES.SUPERVISOR;
      }
    }

    return (isAdmin || isTeacher || isSupervisor);
  };

  vm.userCanManageProject = () => {
    let canEdit = vm.userCanEditProject();
    let canPublish = vm.userCanPublish();
    console.log("userCanManageProject: " + (canEdit || canPublish));

    return (canEdit || canPublish);
  };

  vm.getAvailableStatuses = () => {
    let statuses = {};

    for (var key in config.PROJECT_STATUS_IDS) {
      if (config.PROJECT_STATUS_IDS.hasOwnProperty(key) && key != vm.project.status) {
        statuses[key] = config.PROJECT_STATUS_IDS[key];
      }
    }
    return statuses;
  };

  vm.updateStatus = () => {
    var payload = {
      status: vm.status
    };
    ProjectService.update(vm.project.id, payload)
      .then(project => {
        vm.project = project;
      })
  };

  vm.isPublished = () => {
    console.log("isPublished: "  + (vm.project.status == vm.config.PROJECT_STATUSES.PUBLISHED));
    return vm.project.status == vm.config.PROJECT_STATUSES.PUBLISHED;
  };

  vm.publish = (shouldPublish) => {
    ProjectService.publish(vm.project.id, shouldPublish)
      .then(project => {
        vm.project = project;
      })
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
