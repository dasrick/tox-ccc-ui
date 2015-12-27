'use strict';

/**
 * @ngInject
 *
 * @param {Object[]} transcoderProfiles - list of transcoder profiles
 */
module.exports = function (transcoderProfiles) {
  var vm = this;
  // functions
  // variables
  vm.transcoderProfiles = transcoderProfiles;
  vm.preparedDefaultList = [];
  vm.preparedCustomList = [];

  // public methods ////////////////////////////////////////////////////////////////////////////////////////////////////

  // private methods ///////////////////////////////////////////////////////////////////////////////////////////////////

  angular.forEach(vm.transcoderProfiles, function (transcoderProfile) {
    if (transcoderProfile.custom === true) {
      vm.preparedCustomList.push(getTranscoderProfileObject(transcoderProfile));
    } else {
      vm.preparedDefaultList.push(getTranscoderProfileObject(transcoderProfile));
    }
  });

  function getTranscoderProfileObject(transcoderProfile) {
    return {
      id: transcoderProfile.key,
      state: (transcoderProfile.active) ? 'success' : 'default',
      inUse: transcoderProfile.inUse,
      reviewStatus: transcoderProfile.reviewStatus,
      title: transcoderProfile.key
    };
  }
};
