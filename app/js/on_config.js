import Router from './router';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);
  Router($stateProvider);
  $urlRouterProvider.otherwise('/');
}

export default OnConfig;
