function ProjectsCtrl(projects) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'Projects';
  vm.new = {};
  vm.projects = projects;
}

export default {
  name: 'ProjectsCtrl',
  fn: ProjectsCtrl
};
