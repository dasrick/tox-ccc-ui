'use strict';
/**
 * @ngInject
 */
var ModuleName = 'translateModel';

module.exports = angular.module(ModuleName, [])
  .directive('translateModel', require('./directive/TranslateModel'))
  .filter('translateModel', require('./filter/TranslateModel'))
;
