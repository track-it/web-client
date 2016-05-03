function ProjectCtrl(ProjectService, $state, $scope, project) {
  'ngInject';

  // ViewModel
  const vm = this;
  vm.project = project;

  vm.title = project.title;
}

export default {
  name: 'ProjectCtrl',
  fn: ProjectCtrl
};
