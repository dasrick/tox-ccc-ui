'use strict';
/**
 * @ngInject
 */
module.exports = function (transcoderProfile, $scope, $state, AlertService, $translate) {
  var vm = this;
  // functions
  vm.reset = reset;
  vm.save = save;
  // variables
  vm.originalModel = angular.copy(transcoderProfile);
  vm.model = transcoderProfile;
  vm.options = {};
  vm.fields = getFields();
  vm.originalFields = angular.copy(vm.fields);
  vm.underReview = (angular.isDefined(vm.model.reviewStatus) && vm.model.reviewStatus !== 'none');

  //var response = {
  //  'key': 'mww1560',
  //  'quality': '480p',
  //  'custom': false,
  //  'active': true,
  //  'inUse': false,
  //  'videoExtension': 'wmv',
  //  'createStill': false,
  //  'video': {
  //    'codec': {'name': 'wmv2', 'properties': {}},
  //    'resolution': {'width': 854, 'height': 480},
  //    'keyFrame': 50,
  //    'frameRate': 25,
  //    'bitRate': 1400,
  //    'aspectRatio': {'width': 16, 'height': 9}
  //  },
  //  'audio': {'codec': {'name': 'wma2', 'properties': {}}, 'bitRate': 160, 'sampleRate': 44100, 'channels': 2},
  //  'container': {'name': 'asf', 'properties': {}},
  //  'reviewStatus': 'none'
  //};

  //////////

  function getFields() {
    // case of reviewStatus
    var fieldDisabled = false;
    if (angular.isDefined(vm.model.reviewStatus) && vm.model.reviewStatus !== 'none') {
      fieldDisabled = true;
    }

    return [
      {
        key: 'key',
        type: 'input',
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.key.label'),
          placeholder: $translate.instant('transcoder-profile.form.key.placeholder'),
          required: true,
          disabled: fieldDisabled
        }
      },
      {
        key: 'custom',
        type: 'checkbox',
        defaultValue: (angular.isDefined(vm.model.custom)),
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.custom.label'),
          disabled: fieldDisabled
        }
      },
      {
        key: 'quality',
        type: 'select',
        defaultValue: vm.model.quality,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.quality.label'),
          placeholder: 'hier gibts es einen placeholder?',
          options: [
            {name: '108p', value: '108p'},
            {name: '288p', value: '288p'},
            {name: '360p', value: '360p'},
            {name: '480p', value: '480p'},
            {name: '576p', value: '576p'},
            {name: '720p', value: '720p'},
            {name: '768p', value: '768p'},
            {name: '1080p', value: '1080p'}
          ],
          disabled: fieldDisabled
        }
      }
      // TODO die restlichen notwendigen Felder einpflegen
    ];
  }


  function reset() {
    vm.model = vm.originalModel;
    $scope.formTranscoderProfile.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function save() {
    if (angular.isDefined(transcoderProfile.id)) {
      console.log('it should be an UPDATE', transcoderProfile);
    } else {
      console.log('it should be a CREATE', transcoderProfile);
      //user.$save(); // MAYBE IT WORKS
      AlertService.add('success', 'user.msg.create.success');
      $state.go('^', {}, {reload: true});
    }
  }
};
