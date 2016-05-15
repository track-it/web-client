function ProjectsCtrl(projects, AppSettings, AccountService) {
  'ngInject';

  // ViewModel
  const vm = this;
  const config = AppSettings;

  vm.title = 'Projects';
  vm.new = {};
  vm.projects = projects;
  vm.config = config;
  vm.me = null;

  vm.userIsPartOf = (project) => {
    return vm.me && vm.me.projects.some(p => {
      return p.id == project.id;
    });
  }

  if (window.user) {
    AccountService.me()
      .then(me => {
        vm.me = me;
      });
  }

}

export default {
  name: 'ProjectsCtrl',
  fn: ProjectsCtrl
};
