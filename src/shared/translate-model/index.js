'use strict';
/**
 * @ngInject
 */
var ModuleName = 'translateModel';

module.exports = angular.module(ModuleName, [])
  .filter('translateModel', require('./filter/TranslateModel'))
;
