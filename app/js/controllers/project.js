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
  vm.user = storage.get(config.USER);
  vm.token = storage.get(config.API_TOKEN);
  vm.comment = {};
  vm.status = project.status;

  vm.postComment = () => {
    CommentService.store('projects', vm.project.id, vm.comment.body)
      .then(res => {
        vm.comments.push(res.data.data);
        vm.comment.body = '';
      });
  };

  vm.isCommentable = () => {
    return (vm.user && (config.PROJECT_STATUSES.PUBLISHED != project.status || vm.user.role_id == config.ROLES.ADMINISTRATOR));
  };

  vm.userIsTeacher = () => {
    return vm.user.role_id == config.PROJECT_ROLES.TEACHER;
  };

  vm.userIsStudentInFinishedProject = () => {
    if (vm.user) {
      let projectUser = $filter('filter')(project.participants, { id : vm.user.id })[0];
      if (projectUser) {
        let userIsStudent = projectUser.pivot.project_role_id == config.PROJECT_ROLES.STUDENT;
        let projectIsFinished = (vm.project.status >= config.PROJECT_STATUSES.COMPLETED);
        return userIsStudent && projectIsFinished;
      }
    }

    return false;
  };

  vm.userCanPublish = () => {
    if (vm.user && vm.project.status >= config.PROJECT_STATUSES.COMPLETED) {
      if (vm.user.role_id == config.ROLES.ADMINISTRATOR) {
        return true;
      } else if (project.participants) {
        let projectUser = $filter('filter')(vm.project.participants, { id : vm.user.id })[0];
        if (projectUser) {
          return projectUser.pivot.project_role_id == config.PROJECT_ROLES.STUDENT;
        }
      }
    }
    return false;
  }

  vm.userCanEditProject = () => {
    if (vm.project.status != config.PROJECT_STATUSES.PUBLISHED) {
      if (vm.user.role_id == config.ROLES.ADMINISTRATOR) {
        return true;
      } else {
        let projectUser = $filter('filter')(project.participants, { id : vm.user.id })[0];
        if (projectUser) {
          let isTeacher = projectUser.pivot.project_role_id == config.PROJECT_ROLES.TEACHER;
          let isSupervisor = projectUser.pivot.project_role_id == config.PROJECT_ROLES.SUPERVISOR;
          return (isTeacher || isSupervisor);
        }
      }
    }
    return false;
  };

  vm.userCanManageProject = () => {
    let canEdit = vm.userCanEditProject();
    let canPublish = vm.userCanPublish();

    return (canEdit || canPublish);
  };

  vm.getAvailableStatuses = () => {
    let statuses = {};

    for (var key in config.PROJECT_STATUS_IDS) {
      let isTeacher = vm.userIsTeacher();
      if (config.PROJECT_STATUS_IDS.hasOwnProperty(key)
        && key != vm.project.status
        && !(key == config.PROJECT_STATUSES.PUBLISHED)) {
        statuses[key] = config.PROJECT_STATUS_IDS[key];
      }
    }
    return statuses;
  };

  vm.isPublished = () => {
    return vm.project.status == vm.config.PROJECT_STATUSES.PUBLISHED;
  };

  vm.isCompleted = () => {
    return vm.project.status == vm.config.PROJECT_STATUSES.COMPLETED;
  };

  vm.publish = (shouldPublish) => {
    ProjectService.publish(vm.project.id, shouldPublish)
      .then(project => {
        vm.project = project;
      })
  };

  vm.updateStatus = (setStatus) => {
    var payload = {
      status: setStatus
    };
    ProjectService.update(vm.project.id, payload)
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
