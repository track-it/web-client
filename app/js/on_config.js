import Routes from './routes';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  Routes.setup($stateProvider);

  $urlRouterProvider.otherwise('/');
}

export default OnConfig;
