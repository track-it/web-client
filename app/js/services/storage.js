function StorageService() {
  'ngInject';

  const service = {};
  const storage = localStorage;

  service.exists = function (key) {
    return !! storage[key];
  };

  service.get = function(key) {
    try {
      return JSON.parse(storage[key]);
    } catch (e) {
      return storage[key];
    }
  };

  service.put = function (key, value) {
    if (typeof value === 'object')
      value = JSON.stringify(value);

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
