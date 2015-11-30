'use strict';
/**
 * @ngInject
 */

var angular = require('angular');

window.SockJS = require('sockjs-client');
window.Stomp = require('stompjs/lib/stomp.min').Stomp;

require('angular-cache');
require('angular-formly');
require('angular-formly-templates-bootstrap');
require('angular-jwt');
require('angular-loading-bar');
require('angular-resource');
require('angular-sanitize');
require('angular-translate');
require('angular-translate-loader-partial');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('angular-validation-match');
require('mi-angular-alert-service');
require('mi-angular-resource-builder');
require('ui-select');
var requires = [
  'angular-cache',
  'formly',
  'formlyBootstrap',
  'angular-jwt',
  'angular-loading-bar',
  'ngResource',
  'ngSanitize',
  'pascalprecht.translate',
  'ui.bootstrap',
  'ui.router',
  'validation.match',
  'mi.AlertService',
  'mi.ResourceBuilder',
  'ui.select',
  require('./shared').name,
  require('./components').name
];

angular.module('tox-ccc-ui-app', requires)

  // put jwt token into requests ///////////////////////////////////////////////////////////////////////////////////////
  //.config(function ($httpProvider, jwtInterceptorProvider) {
  //  jwtInterceptorProvider.tokenGetter = ['CurrentUserService', function (CurrentUserService) {
  //    //
  //    // CCC Frontend erweitern siehe
  //    // https://github.com/auth0/angular-jwt
  //    //
  //    // CCC Backend erweitern siehe
  //    // https://github.com/lexik/LexikJWTAuthenticationBundle/issues/37
  //    //
  //    return CurrentUserService.getAccessToken();
  //  }];
  //  $httpProvider.interceptors.push('jwtInterceptor');
  //})
  .config(function Config($httpProvider, jwtInterceptorProvider) {
    var refreshPromise;
    jwtInterceptorProvider.tokenGetter = ['$q', 'config', 'CurrentUserService', 'AuthService', '$state',
      function ($q, config, CurrentUserService, AuthService, $state) {
        var apiAuthRequired = config.url.indexOf('/api/') >= 0;

        //console.log('url: ', config.url);
        //console.log('apiAuthRequired: ', apiAuthRequired);

        var accessTokenAvailable = angular.isDefined(CurrentUserService.getAccessToken());

        //console.log('accessTokenAvailable: ', accessTokenAvailable);

        if (!accessTokenAvailable || !apiAuthRequired) {
          return null;
        }

        //console.log('auth needed for url: ', config.url);

        if (CurrentUserService.isExpired()) {

          console.log('access-token isExpired');

          // a refresh is currently in progress
          if (angular.isDefined(refreshPromise)) {

            console.log('refresh is currently in progress');

            return refreshPromise.promise;
          }

          console.log('refresh will be fired now');

          refreshPromise = $q.defer();
          AuthService.refresh(CurrentUserService.getRefreshToken()).then(
            function (response) {
              console.log('refresh call OK');

              CurrentUserService.setResponseData(response);
              refreshPromise.resolve(CurrentUserService.getAccessToken());
              refreshPromise = undefined;
            },
            function () {
              console.log('refresh call FAILED');

              refreshPromise.reject();
              refreshPromise = undefined;
              CurrentUserService.logout();
              $state.go('app.security.login', {}, {'reload': true});
            }
          );
          return refreshPromise.promise;
        } else {
          return CurrentUserService.getAccessToken();
        }
      }];
    $httpProvider.interceptors.push('jwtInterceptor');
  })

  // redirect for unknown routes ///////////////////////////////////////////////////////////////////////////////////////
  .config(function ($urlRouterProvider, $locationProvider, $resourceProvider, $httpProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      var $state, CurrentUserService;
      CurrentUserService = $injector.get('CurrentUserService');
      $state = $injector.get('$state');
      if (CurrentUserService.isLoggedIn()) {
        $state.go('app.management.dashboard');
      } else {
        CurrentUserService.logout();
        $state.go('app.security.login', {}, {'reload': true});
      }
    });
    //$locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('ResponseErrorInterceptor');
    $resourceProvider.defaults.stripTrailingSlashes = true;
  })

  // check routes for auth and redirect if needed //////////////////////////////////////////////////////////////////////
  .run(function ($rootScope, $injector) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      var requireAuth = toState.data.requireAuth;
      if (requireAuth !== false) {
        var $state, CurrentUserService;
        CurrentUserService = $injector.get('CurrentUserService');
        $state = $injector.get('$state');
        if (!CurrentUserService.getAccessToken()) {
          event.preventDefault();
          CurrentUserService.logout();
          $state.go('app.security.login', {}, {'reload': true});
        }
      }
    });
  })
  // ===================================================================================================================

  // translation stuff /////////////////////////////////////////////////////////////////////////////////////////////////
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

    var language = $translateProvider.preferredLanguage();
    if ((language !== null) || !language.match(/(de).*/)) {
      return $translateProvider.preferredLanguage('de');
    }
  })
  // ===================================================================================================================

  // angular-loading-bar ///////////////////////////////////////////////////////////////////////////////////////////////
  .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])
  // ===================================================================================================================

  // mi-angular-alert-service //////////////////////////////////////////////////////////////////////////////////////////
  .constant('ALERT_LEVELS', {
    danger: {timeout: 10000},
    warning: {timeout: 4000},
    success: {timeout: 2000},
    info: {timeout: 2000}
  })
  // ===================================================================================================================
;

angular.bootstrap(document, ['tox-ccc-ui-app']);
