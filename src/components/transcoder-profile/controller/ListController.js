'use strict';
/**
 * @ngInject
 */
module.exports = function (transcoderProfiles) {
  var vm = this;
  vm.transcoderProfiles = transcoderProfiles;
  vm.preparedList = [];
  angular.forEach(vm.transcoderProfiles, function (transcoderProfile) {
    vm.preparedList.push({
      id: transcoderProfile.key,
      active: transcoderProfile.active,
      inUse: transcoderProfile.inUse,
      custom: transcoderProfile.custom,
      reviewStatus: transcoderProfile.reviewStatus,
      title: transcoderProfile.key
    });
  });
};
