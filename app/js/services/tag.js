function TagService($http, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.get = (tagable, id) => {
    return $http.get(config.api(`${tagable}/${id}/tags`))
      .then(res => {
        console.log(res);
        return res.data.data;
      });
  };

  service.store = (tagable, id, tagName) => {
    return $http.post(config.api(`${tagable}/${id}/tags`), { tagName });
  };

  return service;
}

export default {
  name: 'TagService',
  fn: TagService
};
