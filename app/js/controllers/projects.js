function ProjectsCtrl(AppSettings, AccountService, ProjectService, projects) {
  'ngInject';

  // ViewModel
  const vm = this;
  const config = AppSettings;

  vm.title = 'Projects';
  vm.projects = projects;
  vm.config = config;
  vm.me = null;
  vm.searchInput = '';
  vm.hasSearched = false;

  vm.search = () => {
    if (vm.searchInput) {
      ProjectService.search(vm.searchInput)
        .then(result => {
          vm.projects = result;
          vm.hasSearched = true;
        });
    }
  }

  vm.clear = () => {
    ProjectService.index()
      .then(result => {
        vm.projects = result;
        vm.hasSearched = false;
        vm.searchInput = '';
      });
  }


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
