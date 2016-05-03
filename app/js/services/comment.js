function CommentService($http, AppSettings) {
  'ngInject';

  const config = AppSettings;
  const service = {};

  service.get = (commentable, id) => {
    return $http.get(config.api(`${commentable}/${id}/comments`))
      .then(res => {
        console.log(res);
        return res.data.data;
      });
  };

  service.store = (commentable, id, body) => {
    return $http.post(config.api(`${commentable}/${id}/comments`), { body });
  };

  return service;
}

export default {
  name: 'CommentService',
  fn: CommentService
};
