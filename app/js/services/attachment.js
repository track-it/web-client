function AttachmentService($http, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  const httpConfig = {
    headers: { 'Content-Type': undefined }
  };

  service.store = (attachmentable, id, files) => {
    console.log(files);
    return $http.post(config.api(`${attachmentable}/${id}/attachments`), files, httpConfig);
  };

  return service;
}

export default {
  name: 'AttachmentService',
  fn: AttachmentService
};
