'use strict';
/**
 * @ngInject
 */
module.exports = function (reviews, $translate) {
  var vm = this;
  vm.preparedOpenerList = [];
  angular.forEach(reviews.opener, function (item) {
    vm.preparedOpenerList.push({
      title: $translate.instant(item.reviewObject.type + '.common.singular.title'),
      subtitle: $translate.instant('core.action.' + item.action + '.label'),
      token: item.token
    });
  });
  vm.preparedReviewerList = [];
  angular.forEach(reviews.reviewer, function (item) {
    vm.preparedReviewerList.push({
      state: 'warning',
      title: $translate.instant(item.reviewObject.type + '.common.singular.title'),
      subtitle: $translate.instant('core.action.' + item.action + '.label'),
      token: item.token
    });
  });
};
