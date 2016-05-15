function CreateProposalCtrl(ProposalService, AttachmentService, $state) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.new = {
    tags: []
  };
  vm.title = 'Submit proposal';
  vm.files = [];

  vm.store = () => {
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
        formData.append('files[' + i + ']', vm.files[i]._file);
      }
      return AttachmentService.store('proposals', id, formData)
        .then(data => resolve(data))
        .catch((err, status) => reject(err, status));
    });
  }
}

export default {
  name: 'CreateProposalCtrl',
  fn: CreateProposalCtrl
};
