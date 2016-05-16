function autofocus($timeout) {
  'ngInject';

  return {
    restrict: 'A',
    link : function($scope, $element) {
      $timeout(function() {
        $element[0].focus();
      });
    }
  };
}

export default {
  name: 'autofocus',
  fn: autofocus
}
