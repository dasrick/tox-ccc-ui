'use strict';
/**
 * @ngInject
 */
var ModuleName = 'rowList';

module.exports = angular.module(ModuleName, [])
  .directive('rowListItem', require('./directive/RowListItem'))
;
