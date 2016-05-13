import angular from 'angular';

// angular modules
import config from './config';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-ui-router';
import 'ng-tags-input';
import 'textangular/dist/textAngular-sanitize';
import textAngular from 'textangular';
import 'nya-bootstrap-select';
import 'angular-bootstrap-show-errors';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

import './dom/navigation.js';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives',
  'ngTagsInput',
  textAngular,
  'nya.bootstrap.select',
  'ui.bootstrap.showErrors'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', config);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
