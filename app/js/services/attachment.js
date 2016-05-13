function AttachmentService($http, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  const httpConfig = {
    headers: { 'Content-Type': undefined }
  };

  service.store = (attachmentable, id, files) => {
    return $http.post(config.api(`${attachmentable}/${id}/attachments`), files, httpConfig);
  };

  service.delete = (attachmentIds) => {
    //Right now backend does not support one DELETE request with multiple attachments. So this won't work.
    return $http.delete(config.api(`attachments/`), { 'attachment_ids': attachmentIds }, httpConfig);
  };

  return service;
}

export default {
  name: 'AttachmentService',
  fn: AttachmentService
};
