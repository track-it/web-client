function EditProjectCtrl(ProjectService, AttachmentService, project, $state) {
  'ngInject';

  // ViewModel
  const vm = this;
  vm.title = 'Edit project';

  vm.project = project;
  vm.deletedAttachmentIds = [];
  vm.newFiles = [];

  vm.update = () => {
    ProjectService.update(vm.project.id, vm.project)
      .then(res => {
        return deleteFiles();
      })
      .then(res => {
        return uploadFiles();
      })
      .then(() => {
        $state.transitionTo('showProject', { id: vm.project.id });
      });
  };

  vm.attachmentCount = () => {
    var count = [];
    for (var i = 0; i < vm.project.attachments.length + 1; i++) {
      count.push(i);
    }
    return count;
  }

  const uploadFiles = () => {
    return new Promise((resolve, reject) => {
      if (vm.newFiles.length <= 0)
        return resolve();

      var formData = new FormData();
      for (var i = 0; i < vm.newFiles.length; i++) {
        formData.append('files[' + i + ']', vm.newFiles[i]._file);
      }

      return AttachmentService.store('projects', vm.project.id, formData)
        .then(data => resolve(data))
        .catch((err, status) => reject(err, status));
    });
  }

  const deleteFiles = () => {
    return new Promise((resolve, reject) => {
      if (vm.deletedAttachmentIds.length <= 0)
        return resolve();

      return AttachmentService.delete(vm.deletedAttachmentIds)
        .then(data => resolve(data))
        .catch((err, status) => reject(err, status));
    });
  }

  vm.deleteOldAttachment = (index) => {
    vm.deletedAttachmentIds.push(project.attachments[index].id);
    vm.project.attachments.splice(index, 1);
  }
}

export default {
  name: 'EditProjectCtrl',
  fn: EditProjectCtrl
};
