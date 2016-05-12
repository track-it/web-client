function EditProposalCtrl(ProposalService, AttachmentService, $state) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.new = {};
  vm.title = 'Edit proposal';
  vm.files = [];
  vm.tags = [];

  vm.store = () => {
    vm.new.tags = parseTags(vm.tags);

    ProposalService.store(vm.new)
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
      for (var i = 0; i < vm.files.length; i++) {
        formData.append('files[' + i + ']', vm.files[i]);
      }
      return AttachmentService.store('proposals', id, formData)
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
