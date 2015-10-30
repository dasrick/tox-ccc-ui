'use strict';

/**
 * @ngInject
 */
module.exports = function ($uibModal) {
  return {
    restrict: 'A',
    scope: {
      action: '&',
      exclude: '=',
      right: '@'
    },
    link: function (scope, elem) {
      elem.bind('click', function () {
        var modalInstance;
        modalInstance = $uibModal.open({
          templateUrl: 'views/reviewable/reviewable-modal.html',
          controller: 'ReviewableController as reviewableVM',
          resolve: {
            right: function () {
              return scope.right;
            },
            exclude: function () {
              return scope.exclude;
            }
          }
        });
        modalInstance.result.then(function (value) {
          scope.action({
            reviewer: value
          });
        });
      });
    }
  };
};
