function CreateProjectCtrl(ProjectService, AttachmentService, $state, proposal, teams) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.proposal = proposal;
  vm.teams = teams;
  vm.new = {
    title: proposal.title,
    description: proposal.description,
    tags: []
  };
  vm.title = 'Submit Project';
  vm.files = [];
  vm.selectedTeam = 0;

  vm.store = () => {
    vm.new.team_id = vm.selectedTeam;

    ProjectService.store(vm.proposal.id, vm.new)
      .then(project => {
        return uploadFiles(project.id);
      })
      .then(() => {
        $state.transitionTo('projects');
      });
  };

  vm.getClass = teamId => {
    return vm.selectedTeam == teamId ? 'active' : '';
  }

  vm.setTeam = teamId => {
    vm.selectedTeam = teamId;
  }

  vm.teamFilter = item => {
    return !item.project;
  };

  const uploadFiles = (id) => {
    return new Promise((resolve, reject) => {
      if (vm.files.length <= 0)
        return resolve();

      var formData = new FormData();
      for (var i = 0; i < vm.files.length; i++) {
        formData.append('files[' + i + ']', vm.files[i]._file);
      }
      return AttachmentService.store('projects', id, formData)
        .then(data => resolve(data))
        .catch((err, status) => reject(err, status));
    });
  }
}

export default {
  name: 'CreateProjectCtrl',
  fn: CreateProjectCtrl
};
