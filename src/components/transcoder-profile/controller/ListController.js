'use strict';
/**
 * @ngInject
 */
module.exports = function (transcoderProfiles) {
  var vm = this;
  vm.transcoderProfiles = transcoderProfiles;
  vm.preparedDefaultList = [];
  vm.preparedCustomList = [];
  angular.forEach(vm.transcoderProfiles, function (transcoderProfile) {
    if (transcoderProfile.custom === true) {
      vm.preparedCustomList.push({
        id: transcoderProfile.key,
        state: (transcoderProfile.active) ? 'success' : 'default',
        inUse: transcoderProfile.inUse,
        reviewStatus: transcoderProfile.reviewStatus,
        title: transcoderProfile.key
      });
    } else {
      vm.preparedDefaultList.push({
        id: transcoderProfile.key,
        state: (transcoderProfile.active) ? 'success' : 'default',
        inUse: transcoderProfile.inUse,
        reviewStatus: transcoderProfile.reviewStatus,
        title: transcoderProfile.key
      });
    }
  });
};
