import { close } from './dom/navigation.js';

function OnRun($rootScope, $http, $state, AppSettings, AuthService, StorageService, SitemapService, taOptions) {
  'ngInject';

  const config  = AppSettings;
  const auth    = AuthService;
  const storage = StorageService;

  SitemapService.run();

  if (storage.exists(config.API_TOKEN)) {
    auth.initialize(storage.get(config.API_TOKEN));
  }

  taOptions.toolbar = [
    ['h1', 'h2', 'h3'],
    ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],
    ['justifyLeft', 'justifyCenter', 'justifyRight'],
    ['html', 'insertImage','insertLink']
  ];

  // Redirect unauthenticated users if route is protected
  $rootScope.$on('$stateChangeStart', function (event, toState) {
    close();
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
