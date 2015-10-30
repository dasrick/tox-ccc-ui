'use strict';
/**
 * @ngInject
 */
module.exports = function (review, $state, AlertService, $translate, ReviewResource) {
  var vm = this;
  // functions
  vm.allow = allow;
  vm.deny = deny;
  // variables
  vm.review = review;
  vm.placebo = {
    opener: review.opener.firstName + ' ' + review.opener.lastName,
    action: $translate.instant('core.action.' + review.action + '.label'),
    type: $translate.instant(review.reviewObject.type + '.common.singular.title'),
    name: 'currently not part of response'
  };
  vm.originalModel = angular.copy(vm.placebo);
  vm.model = vm.placebo;
  vm.options = {};
  vm.fields = getFields();

  // public methods ////////////////////////////////////////////////////////////////////////////////////////////////////

  function allow() {
    ReviewResource.allow(review).$promise.then(function () {
      AlertService.add('success', 'review.msg.allow.success');
      $state.go('^', {}, {reload: true});
    });
  }

  function deny() {
    ReviewResource.deny(review).$promise.then(function () {
      AlertService.add('success', 'review.msg.deny.success');
      $state.go('^', {}, {reload: true});
    });
  }

  // private methods ///////////////////////////////////////////////////////////////////////////////////////////////////

  function getFields() {
    return [
      {
        key: 'opener',
        type: 'input',
        templateOptions: {
          label: $translate.instant('review.form.opener.label'),
          disabled: true
        }
      },
      {
        key: 'action',
        type: 'input',
        templateOptions: {
          label: $translate.instant('review.form.action.label'),
          disabled: true
        }
      },
      {
        key: 'type',
        type: 'input',
        templateOptions: {
          label: $translate.instant('review.form.type.label'),
          disabled: true
        }
      },
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: $translate.instant('review.form.name.label'),
          disabled: true
        }
      }
    ];
  }

};
