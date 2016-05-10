function StorageService() {
  'ngInject';

  const service = {};
  const storage = localStorage;

  service.exists = function (key) {
    return !! storage[key];
  };

  service.get = function(key) {
    return storage[key];
  };

  service.put = function (key, value) {
    storage[key] = value;
  };

  service.delete = function (key) {
    storage[key] = null;
  }

  return service;
}

export default {
  name: 'StorageService',
  fn: StorageService
};
