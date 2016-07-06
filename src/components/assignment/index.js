'use strict';

var ModuleName = 'assignment',
  RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])

  .controller('AssignmentListController', require('./controller/list'))
  .controller('AssignmentDetailController', require('./controller/detail'))
  .config(function ($stateProvider, $translatePartialLoaderProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    $translatePartialLoaderProvider.addPart(ModuleName);
  })

  // datepicker template
  .run(function ($templateCache) {
    $templateCache.put('mi/template/datepicker.html',
      '<p class="input-group"><input  type="text" id="{{::id}}" name="{{::id}}" ' +
      'ng-model="model[options.key]" class="form-control" ng-click="datepicker.open($event)" ' +
      'uib-datepicker-popup="{{to.datepickerOptions.format}}" is-open="datepicker.opened"' +
      ' datepicker-options="to.datepickerOptions" /><span class="input-group-btn"><button type="button" ' +
      'class="btn btn-default" ng-click="datepicker.open($event)" ng-disabled="to.disabled"><i ' +
      'class="glyphicon glyphicon-calendar"></i></button></span></p>'
    );

    $templateCache.put('mi/template/timepicker.html',
      '<uib-timepicker show-meridian="false" ng-model="model[options.key]"></uib-timepicker>'
    );
  })

  .run(function (formlyConfig) {
    var attributes = [
      'current-text',
      'clear-text',
      'datepicker-popup',
      'close-text',
      'show-weeks',
      'starting-day'
    ];
    var bindings = [
      'min-date',
      'max-date'
    ];
    var ngModelAttrs = {};

    angular.forEach(attributes, function (attr) {
      ngModelAttrs[camelize(attr)] = {attribute: attr};
    });
    angular.forEach(bindings, function (binding) {
      ngModelAttrs[camelize(binding)] = {bound: binding};
    });

    formlyConfig.setType({
      name: 'datepicker',
      templateUrl: 'mi/template/datepicker.html',
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      defaultOptions: {
        ngModelAttrs: ngModelAttrs
      },
      controller: ['$scope', function ($scope) {
        $scope.datepicker = {};
        $scope.datepicker.opened = false;
        $scope.datepicker.open = function () {
          $scope.datepicker.opened = !$scope.datepicker.opened;
        };
      }]
    });

    // formlyConfig.setType({
    //   name: 'button',
    //   template: '<button class="btn btn-primary"' +
    //   ' ng-click="options.templateOptions.onClick()">{{options.templateOptions.label}}</button>'
    // });

    // formlyConfig.setType({
    //   name: 'timepicker',
    //   templateUrl: 'mi/template/timepicker.html',
    //   wrapper: ['bootstrapLabel', 'bootstrapHasError']
    // });

    function camelize(string) {
      string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
      // Ensure 1st char is always lowercase
      return string.replace(/^([A-Z])/, function (match, chr) {
        return chr ? chr.toLowerCase() : '';
      });
    }
  })
;
