function ProjectsCtrl(projects, AppSettings) {
  'ngInject';

  // ViewModel
  const vm = this;
  const config = AppSettings;

  vm.title = 'Projects';
  vm.new = {};
  vm.projects = projects;
  vm.config = config;
}

export default {
  name: 'ProjectsCtrl',
  fn: ProjectsCtrl
};
