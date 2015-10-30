'use strict';

var ModuleName = 'reviewable';

module.exports = angular.module(ModuleName, [])

  .controller('ReviewableController', require('./controller/ReviewableController'))
  .directive('reviewable', require('./directive/Reviewable.js'))

  .config(function ($translatePartialLoaderProvider) {
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
