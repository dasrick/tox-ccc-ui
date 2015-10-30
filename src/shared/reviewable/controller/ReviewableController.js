'use strict';

/**
 * @ngInject
 */
module.exports = function ($modalInstance, ReviewerResource, exclude, right) {

  var vm = this;
  // functions
  vm.cancel = cancel;
  vm.ok = ok;
  // variables
  vm.reviewer = null;
  vm.reviewerList = ReviewerResource.query({action: right});
  vm.isList = angular.isArray(vm.reviewerList) && vm.reviewerList.length > 0;

  //////////

  function cancel() {
    $modalInstance.dismiss();
  }

  function ok() {
    var ids;
    ids = [];
    angular.forEach(vm.reviewerList, function (reviewer) {
      ids.push(reviewer.id);
    });
    $modalInstance.close(ids);
  }

};
