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
    return $http({
      method: 'DELETE',
      url: config.api('attachments'),
      data: { attachment_ids: attachmentIds },
      headers: { "Content-Type": "application/json;charset=utf-8" }
    });
  };

  return service;
}

export default {
  name: 'AttachmentService',
  fn: AttachmentService
};
