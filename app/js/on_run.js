function OnRun($rootScope, $http, $state, AppSettings, AuthService, StorageService, SitemapService) {
  'ngInject';

  const config  = AppSettings;
  const auth    = AuthService;
  const storage = StorageService;

  SitemapService.run();

  if (storage.exists(config.API_TOKEN)) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + storage.get(config.API_TOKEN);
    auth.initialize();
  }

  // Redirect unauthenticated users if route is protected
  $rootScope.$on('$stateChangeStart', function (event, toState) {
    if (toState.authenticate && ! auth.isAuthenticated) {
      $state.transitionTo('login');
      event.preventDefault();
    }
  });

  // Redirected authenticated users if route is guest only
  $rootScope.$on('$stateChangeStart', function (event, toState) {
    if (toState.guest && auth.isAuthenticated) {
      $state.transitionTo('home');
      event.preventDefault();
    }
  });

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';

    if ( toState.title ) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += config.APP_NAME;
  });

}

export default OnRun;
