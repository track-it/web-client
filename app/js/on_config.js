import Routes from './routes';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, tagsInputConfigProvider) {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  Routes.setup($stateProvider);

  $urlRouterProvider.otherwise('/');

  tagsInputConfigProvider.setDefaults('tagsInput', {
    placeholder: 'New tag',
    minLength: 1,
    maxLength: 20,
    allowedTagsPattern: /^[a-zA-ZåäöÅÄÖ]{1}[\w\#åäöÅÄÖ]+$/,
    maxTags: 20,
    addOnEnter: true,
    addOnSpace: true,
    addOnComma: true,
    enableEditingLastTag: true,
  });
}

export default OnConfig;
