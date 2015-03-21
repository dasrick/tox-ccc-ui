'use strict';

var angular = require('angular');

process.env.appversion = require('../package.json').version;

require('angular-bootstrap');
require('angular-loading-bar');
require('angular-route');
require('angular-jwt');
require('angular-translate');
require('angular-translate-loader-partial');
require('angular-cache');
require('angular-resource');
//require('angular-ui-unique');
//require('ui-select');
var requires = [
  'ui.bootstrap',
  'angular-loading-bar',
  'ui.router',
  'angular-jwt',
  'pascalprecht.translate',
  'angular-cache',
  'ngResource',
  //'ui.select',
  //'ui.unique',
  require('./shared').name,
  require('./components').name
];

angular.module('tox-ccc-ui-app', requires)
  .config(function ($httpProvider, jwtInterceptorProvider) {
    jwtInterceptorProvider.tokenGetter = ['UserService', function (UserService) {
      return UserService.getToken();
    }];
    $httpProvider.interceptors.push('jwtInterceptor');
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AlertInterceptor');
  })
  .config(function ($urlRouterProvider, $locationProvider, $resourceProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      var $state, UserService;
      UserService = $injector.get('UserService');
      $state = $injector.get('$state');
      if (UserService.isLoggedIn() === true) {
        $state.go('customer.dashboard.list');
      } else {
        $state.go('security.login');
      }
    });
    $resourceProvider.defaults.stripTrailingSlashes = true;
    //$locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config(function ($translateProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '/i18n/{part}/{lang}.json'
    });
    // add translation table
    $translateProvider
      .registerAvailableLanguageKeys(['en', 'de'], {
        'en_*': 'en',
        'de_*': 'de'
      })
      .determinePreferredLanguage();

    /*
     The fallback language is not working ...
     $translateProvider.fallbackLanguage('en');
     The following workaround sets the preferred language to english,
     if the detection failed or the detected language is not known.
     */
    var language = $translateProvider.preferredLanguage();
    if ((language !== null) || !language.match(/(de).*/)) {
      return $translateProvider.preferredLanguage('de');
    }
  })
  .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])
;

angular.bootstrap(document, ['tox-ccc-ui-app']);
