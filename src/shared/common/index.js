'use strict';

var ModuleName = 'common';

module.exports = angular.module(ModuleName, [])

  .config(function ($translatePartialLoaderProvider) {
    $translatePartialLoaderProvider.addPart(ModuleName);
  })
;
