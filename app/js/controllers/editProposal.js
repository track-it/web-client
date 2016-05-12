function EditProposalCtrl(ProposalService, AttachmentService, proposal, $state) {
  'ngInject';

  // ViewModel
  const vm = this;
  vm.title = 'Edit proposal';

  vm.proposal = proposal;
  vm.deletedFilesIds = [];
  vm.newFiles = [];

  vm.update = () => {
    vm.proposal.tags = parseTags(vm.tags);

    ProposalService.update(vm.new)
      .then(res => {
        return deleteFiles(res.data.id);
      })
      .then(res => {
        return uploadFiles(res.data.id);
      })
      .then(() => {
        $state.transitionTo('proposals');
      });
  };

  vm.filesCount = () => {
    var count = [];
    for (var i = 0; i < vm.files.length + 1; i++) {
      count.push(i);
    }
    return count;
  }

  const uploadFiles = (id) => {
    return new Promise((resolve, reject) => {
      if (vm.files.length <= 0)
        return resolve();

      var formData = new FormData();
      for (var i = 0; i < vm.newFiles.length; i++) {
        formData.append('files[' + i + ']', vm.files[i]);
      }
      return AttachmentService.store('proposals', id, formData)
        .then(data => resolve(data))
        .catch((err, status) => reject(err, status));
    });
  }

  const deleteFiles = (id) => {
    return new Promise((resolve, reject) => {
      if (vm.deletedFilesIndexes.length <= 0)
        return resolve();

      return AttachmentService.delete(vm.deletedFilesIds)
        .then(data => resolve(data))
        .catch((err, status) => reject(err, status));
    });
  }
  const parseTags = tags => {
    var names = [];
    angular.forEach(tags, tag => {
      names.push(tag.text);
    });
    return names;
  }

}

export default {
  name: 'EditProposalCtrl',
  fn: EditProposalCtrl
};
