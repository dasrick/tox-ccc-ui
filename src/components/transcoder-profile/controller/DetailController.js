'use strict';

/**
 * @ngInject
 *
 * @param transcoderProfile
 * @param $scope
 * @param $state
 * @param AlertService
 * @param $translate
 * @param TranscoderProfileResource
 */
module.exports = function (transcoderProfile, $scope, $state, AlertService, $translate, TranscoderProfileResource) {
  var vm = this;
  // functions
  vm.reset = reset;
  vm.create = create;
  vm.update = update;
  // variables
  vm.model = getModelPrepared(transcoderProfile);
  vm.originalModel = angular.copy(vm.model);
  vm.options = {};
  vm.fields = getFields();
  vm.originalFields = angular.copy(vm.fields);
  vm.underReview = (angular.isDefined(vm.model.reviewStatus) && vm.model.reviewStatus !== 'none');


  // public methods ////////////////////////////////////////////////////////////////////////////////////////////////////

  function reset() {
    vm.model = getModelPrepared(transcoderProfile);
    $scope.formTranscoderProfile.$setPristine(); // $scope ... nessesary for reset of form validation foo
  }

  function create() {
    var modelCleaned = getModelCleaned();
    console.log('create', modelCleaned);
    TranscoderProfileResource.save(modelCleaned).$promise.then(
      function () {
        AlertService.add('success', 'transcoder-profile.msg.create.success');
        $state.go('^', {}, {reload: true});
      }, function () {
        AlertService.add('danger', 'transcoder-profile.msg.create.error');
      }
    );
  }

  function update() {
    var modelCleaned = getModelCleaned();
    console.log('update', modelCleaned);
    TranscoderProfileResource.update({transcoderProfileId: modelCleaned.key}, modelCleaned).$promise.then(
      function () {
        AlertService.add('success', 'transcoder-profile.msg.update.success');
        $state.go('^', {}, {reload: true});
      }, function () {
        AlertService.add('danger', 'transcoder-profile.msg.update.error');
      }
    );
  }

  // private methods ///////////////////////////////////////////////////////////////////////////////////////////////////

  function getFields() {
    // case of reviewStatus
    var fieldGlobalDisabled = false;
    if (angular.isDefined(vm.model.reviewStatus) && vm.model.reviewStatus !== 'none') {
      fieldGlobalDisabled = true;
    }

    return [
      {
        noFormControl: true,
        template: '<h4  translate="transcoder-profile.form.section.general.headline"></h4>'
      },
      {
        key: 'keyPrefix',
        type: 'input',
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.key.label'),
          placeholder: $translate.instant('transcoder-profile.form.key.placeholder'),
          required: true
        },
        expressionProperties: {
          'templateOptions.disabled': function (viewValue, $modelValue, scope) {
            return angular.isDefined(scope.model.key);
          }
        }
      },
      {
        key: 'custom',
        type: 'checkbox',
        defaultValue: (angular.isDefined(vm.model.custom)),
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.custom.label'),
          disabled: fieldGlobalDisabled
        }
      },
      {
        key: 'quality',
        type: 'select',
        defaultValue: vm.model.quality,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.quality.label'),
          options: getOptionsQuality(),
          required: true,
          disabled: fieldGlobalDisabled
        }
      },
      {
        key: 'name',
        type: 'select',
        model: vm.model.container,
        defaultValue: vm.model.container.name,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.container.codec.label'),
          options: getOptionsContainerCodec(),
          required: true,
          disabled: fieldGlobalDisabled
        }
      },
      {
        key: 'videoExtension',
        type: 'select',
        defaultValue: vm.model.videoExtension,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.videoExtension.label'),
          options: getOptionsVideoExtension(),
          required: true,
          disabled: fieldGlobalDisabled
        }
      },
      {
        key: 'createStill',
        type: 'checkbox',
        defaultValue: (angular.isDefined(vm.model.createStill)),
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.createStill.label'),
          disabled: fieldGlobalDisabled
        }
      },
      {
        key: 'stillExtension',
        type: 'select',
        defaultValue: vm.model.stillExtension,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.stillExtension.label'),
          options: getOptionsStillExtension(),
          required: true,
          disabled: fieldGlobalDisabled
        },
        'hideExpression': '!model.createStill'
      },
      {
        noFormControl: true,
        template: '<hr><h4  translate="transcoder-profile.form.section.video.headline"></h4>'
      },
      {
        key: 'name',
        type: 'select',
        model: vm.model.video.codec,
        defaultValue: vm.model.video.codec.name,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.video.codec.label'),
          options: getOptionsVideoCodec(),
          required: true,
          disabled: fieldGlobalDisabled
        }
      },
      {
        key: 'preset',
        type: 'select',
        model: vm.model.video.codec.properties,
        defaultValue: vm.model.video.codec.properties.preset,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.video.codec.properties.preset.label'),
          options: getOptionsVideoPropertiesPreset(),
          required: true,
          disabled: fieldGlobalDisabled
        },
        'hideExpression': function ($viewValue, $modelValue, scope) {
          return scope.model.video.codec.name !== 'h264';
        }
      },
      {
        key: 'profile',
        type: 'select',
        model: vm.model.video.codec.properties,
        defaultValue: vm.model.video.codec.properties.profile,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.video.codec.properties.profile.label'),
          options: getOptionsVideoPropertiesProfile(),
          required: true,
          disabled: fieldGlobalDisabled
        },
        'hideExpression': function ($viewValue, $modelValue, scope) {
          return scope.model.video.codec.name !== 'h264';
        }
      },
      {
        key: 'width',
        type: 'input',
        model: vm.model.video.resolution,
        defaultValue: vm.model.video.resolution.width,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.video.resolution.width.label'),
          placeholder: $translate.instant('transcoder-profile.form.video.resolution.width.placeholder'),
          type: 'number',
          min: 1,
          addonRight: {
            text: 'px'
          },
          required: true
        }
      },
      {
        key: 'height',
        type: 'input',
        model: vm.model.video.resolution,
        defaultValue: vm.model.video.resolution.height,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.video.resolution.height.label'),
          placeholder: $translate.instant('transcoder-profile.form.video.resolution.height.placeholder'),
          type: 'number',
          min: 1,
          addonRight: {
            text: 'px'
          },
          required: true
        }
      },
      {
        key: 'keyFrame',
        type: 'input',
        model: vm.model.video,
        defaultValue: vm.model.video.keyFrame,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.video.keyFrame.label'),
          placeholder: $translate.instant('transcoder-profile.form.video.keyFrame.placeholder'),
          type: 'number',
          min: 1,
          required: true
        }
      },
      {
        key: 'frameRate',
        type: 'input',
        model: vm.model.video,
        defaultValue: vm.model.video.frameRate,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.video.frameRate.label'),
          placeholder: $translate.instant('transcoder-profile.form.video.frameRate.placeholder'),
          type: 'number',
          min: 1,
          addonRight: {
            text: 'fps'
          },
          required: true
        }
      },
      {
        key: 'bitRate',
        type: 'input',
        model: vm.model.video,
        defaultValue: vm.model.video.bitRate,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.video.bitRate.label'),
          placeholder: $translate.instant('transcoder-profile.form.video.bitRate.placeholder'),
          type: 'number',
          min: 1,
          addonRight: {
            text: 'kbit/s'
          },
          required: true
        }
      },
      {
        key: 'width',
        type: 'input',
        model: vm.model.video.aspectRatio,
        defaultValue: vm.model.video.aspectRatio.width,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.video.aspectRatio.width.label'),
          placeholder: $translate.instant('transcoder-profile.form.video.aspectRatio.width.placeholder'),
          type: 'number',
          min: 1,
          required: true
        }
      },
      {
        key: 'height',
        type: 'input',
        model: vm.model.video.aspectRatio,
        defaultValue: vm.model.video.aspectRatio.height,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.video.aspectRatio.height.label'),
          placeholder: $translate.instant('transcoder-profile.form.video.aspectRatio.height.placeholder'),
          type: 'number',
          min: 1,
          required: true
        }
      },
      {
        noFormControl: true,
        template: '<hr><h4  translate="transcoder-profile.form.section.audio.headline"></h4>'
      },
      {
        key: 'name',
        type: 'select',
        model: vm.model.audio.codec,
        defaultValue: vm.model.audio.codec.name,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.audio.codec.label'),
          options: getOptionsAudioCodec(),
          required: true,
          disabled: fieldGlobalDisabled
        }
      },
      {
        key: 'bitRate',
        type: 'input',
        model: vm.model.audio,
        defaultValue: vm.model.audio.bitRate,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.audio.bitRate.label'),
          placeholder: $translate.instant('transcoder-profile.form.audio.bitRate.placeholder'),
          type: 'number',
          min: 1,
          addonRight: {
            text: 'kbit/s'
          },
          required: true
        }
      },
      {
        key: 'sampleRate',
        type: 'input',
        model: vm.model.audio,
        defaultValue: vm.model.audio.sampleRate,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.audio.sampleRate.label'),
          placeholder: $translate.instant('transcoder-profile.form.audio.sampleRate.placeholder'),
          type: 'number',
          min: 1,
          addonRight: {
            text: 'Hz'
          },
          required: true
        }
      },
      {
        key: 'channels',
        type: 'input',
        model: vm.model.audio,
        defaultValue: vm.model.audio.channels,
        templateOptions: {
          label: $translate.instant('transcoder-profile.form.audio.channels.label'),
          placeholder: $translate.instant('transcoder-profile.form.audio.channels.placeholder'),
          type: 'number',
          min: 1,
          max: 2,
          required: true
        }
      }
    ];
  }

  function getOptionsQuality() {
    return [
      {name: '108p', value: '108p'},
      {name: '288p', value: '288p'},
      {name: '360p', value: '360p'},
      {name: '480p', value: '480p'},
      {name: '576p', value: '576p'},
      {name: '720p', value: '720p'},
      {name: '768p', value: '768p'},
      {name: '1080p', value: '1080p'}
    ];
  }

  function getOptionsContainerCodec() {
    return [
      {name: 'mp4', value: 'mp4'},
      {name: 'webm', value: 'webm'},
      {name: 'asf', value: 'asf'}
    ];
  }

  function getOptionsVideoExtension() {
    return [
      {name: 'mp4', value: 'mp4'},
      {name: 'webm', value: 'webm'},
      {name: 'wmv', value: 'wmv'}
    ];
  }

  function getOptionsStillExtension() {
    return [
      {name: 'jpg', value: 'jpg'},
      {name: 'jpeg', value: 'jpeg'},
      {name: 'png', value: 'png'}
    ];
  }

  function getOptionsVideoCodec() {
    return [
      {name: 'h264', value: 'h264'},
      {name: 'vp8', value: 'vp8'},
      {name: 'wmv2', value: 'wmv2'}
    ];
  }

  function getOptionsVideoPropertiesPreset() {
    return [
      {name: 'ultrafast', value: 'ultrafast'},
      {name: 'superfast', value: 'superfast'},
      {name: 'veryfast', value: 'veryfast'},
      {name: 'faster', value: 'faster'},
      {name: 'fast', value: 'fast'},
      {name: 'medium', value: 'medium'},
      {name: 'slow', value: 'slow'},
      {name: 'slower', value: 'slower'},
      {name: 'veryslow', value: 'veryslow'},
      {name: 'placebo', value: 'placebo'}
    ];
  }

  function getOptionsVideoPropertiesProfile() {
    return [
      {name: 'baseline', value: 'baseline'},
      {name: 'main', value: 'main'},
      {name: 'high', value: 'high'},
      {name: 'high10', value: 'high10'},
      {name: 'high422', value: 'high422'},
      {name: 'high444', value: 'high444'}
    ];
  }

  function getOptionsAudioCodec() {
    return [
      {name: 'aac', value: 'aac'},
      {name: 'vorbis', value: 'vorbis'},
      {name: 'wma2', value: 'wma2'}
    ];
  }

  function getModelPrepared(model) {
    /*jshint camelcase: false */

    var modelPrepared = {
      quality: model.quality,
      custom: model.custom,
      videoExtension: model.videoExtension,
      createStill: model.createStill
    };

    if (angular.isDefined(model.key)) {
      // it must be an existing transcoder profile - view/edit mode
      modelPrepared.key = model.key;  // um nicht den status zu verlieren ...
      modelPrepared.keyPrefix = model.key;
    }

    if (angular.isDefined(model.reviewStatus)) {
      modelPrepared.reviewStatus = model.reviewStatus;
    }

    if (model.createStill === true) {
      modelPrepared.stillExtension = model.stillExtension;
    }

    if (angular.isDefined(model.video)) {
      modelPrepared.video = model.video;
    } else {
      modelPrepared.video = {
        codec: {
          name: null,
          properties: {}
        },
        resolution: {
          width: null,
          height: null
        },
        keyFrame: null,
        frameRate: null,
        bitRate: null,
        aspectRatio: {
          width: null,
          height: null
        }
      };
    }

    if (angular.isDefined(model.audio)) {
      modelPrepared.audio = model.audio;
    } else {
      modelPrepared.audio = {
        codec: {
          name: null
        },
        bitRate: null,
        sampleRate: null,
        channels: null
      };
    }

    if (angular.isDefined(model.container)) {
      modelPrepared.container = model.container;
    } else {
      modelPrepared.container = {
        name: null
        //properties: {}
      };
    }

    /*jshint camelcase: true */
    return modelPrepared;
  }

  function getModelCleaned() {
    /*jshint camelcase: false */
    var modelCleaned = angular.copy(vm.model);

    // video.code.specials
    if (vm.model.video.codec.name !== 'h264') {
      delete modelCleaned.video.codec.properties;
    }

    // still
    if (vm.model.createStill !== true) {
      delete modelCleaned.stillExtension;
    }

    // allways
    delete modelCleaned.reviewStatus;
    delete modelCleaned.id;

    /*jshint camelcase: true */
    return modelCleaned;
  }
};
