'use strict';

var angular = require('angular');

process.env.appversion = require('../package.json').version;

require('angular-bootstrap');
require('angular-cache');
require('angular-gravatar');
require('angular-jwt');
require('angular-loading-bar');
require('angular-resource');
require('angular-sanitize');
require('angular-translate');
require('angular-translate-loader-partial');
require('angular-ui-router');
require('mi-angular-alert-service');
require('ui-select');
var requires = [
  'ui.bootstrap',
  'angular-cache',
  'ui.gravatar',
  'angular-jwt',
  'angular-loading-bar',
  'ngResource',
  'ngSanitize',
  'pascalprecht.translate',
  'ui.router',
  'mi.AlertService',
  'ui.select',
  require('./shared').name,
  require('./components').name
];

angular.module('tox-ccc-ui-app', requires)

  // put jwt token into requests
  .config(function ($httpProvider, jwtInterceptorProvider) {
    jwtInterceptorProvider.tokenGetter = ['CurrentUserService', function (CurrentUserService) {
      //
      // CCC Frontend erweitern siehe
      // https://github.com/auth0/angular-jwt
      //
      // CCC Backend erweitern siehe
      // https://github.com/lexik/LexikJWTAuthenticationBundle/issues/37
      //
      return CurrentUserService.getAccessToken();
    }];
    $httpProvider.interceptors.push('jwtInterceptor');
  })

  // redirect for unknown routes
  .config(function ($urlRouterProvider, $locationProvider, $resourceProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      var $state, CurrentUserService;
      CurrentUserService = $injector.get('CurrentUserService');
      $state = $injector.get('$state');
      if (CurrentUserService.isLoggedIn() === true) {
        $state.go('app.management.dashboard');
      } else {
        CurrentUserService.logout();
        $state.go('app.security.login');
      }
    });
    $resourceProvider.defaults.stripTrailingSlashes = true;
  })

  // check routes for auth and redirect if needed
  .run(function ($rootScope, $injector) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      var requireAuth = toState.data.requireAuth;
      if (requireAuth === false) {
        return;
      } else {
        var $state, CurrentUserService;
        CurrentUserService = $injector.get('CurrentUserService');
        $state = $injector.get('$state');
        if (!CurrentUserService.getAccessToken()) {
          event.preventDefault();
          CurrentUserService.logout();
          $state.go('security.login', {}, {'reload': true});
        }
      }
    });
  })


  .config(function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escaped');
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
  .config(['gravatarServiceProvider', function (gravatarServiceProvider) {
    gravatarServiceProvider.defaults = {
      size: 100,
      'default': 'mm'  // Mystery man as default for missing avatars
    };

    // Use https endpoint
    gravatarServiceProvider.secure = true;

    // Force protocol
    //gravatarServiceProvider.protocol = 'my-protocol';
  }
  ])
  .constant('ALERT_LEVELS', {
    danger: {timeout: 10000},
    warning: {timeout: 5000},
    success: {timeout: 3000},
    info: {timeout: 3000}
  })
;

angular.bootstrap(document, ['tox-ccc-ui-app']);
