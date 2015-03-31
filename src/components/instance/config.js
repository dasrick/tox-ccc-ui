'use strict';

module.exports = {
  'admin.instance': {
    url: '/instance',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'admin.instance.list': {
    url: '',
    views: {
      'data-header@admin.instance': {
        templateUrl: '/views/instance/list-header.html'
      },
      'data-body@admin.instance': {
        templateUrl: '/views/instance/list-body.html',
        controller: 'InstanceListController as instanceListVm'
      }
    },
    resolve: {
      InstanceResource: 'InstanceResource',
      instances: function (InstanceResource) {
        return InstanceResource.query().$promise;
      }
    }
  },
  'admin.instance.detail': {
    url: '/{instanceId:[0-9a-zA-Z]{1,}}',
    views: {
      'data-header@admin.instance': {
        templateUrl: '/views/instance/detail-header.html'
      },
      'data-body@admin.instance': {
        templateUrl: '/views/instance/detail-body.html',
        controller: 'InstanceDetailController as instanceDetailVm'
      }
    },
    resolve: {
      InstanceResource: 'InstanceResource',
      instance: function (InstanceResource, $stateParams) {
        return InstanceResource.get({instanceId: $stateParams.instanceId}).$promise;
      }
    }
  },
  'admin.instance.detail.edit': {
    url: '/edit',
    views: {
      'data-header@admin.instance': {
        templateUrl: '/views/instance/form-header.html'
      },
      'data-body@admin.instance': {
        templateUrl: '/views/instance/form-body.html',
        controller: 'InstanceEditController as instanceEditVm'
      }
    },
    resolve: {
      InstanceResource: 'InstanceResource',
      instance: function (InstanceResource, $stateParams) {
        return InstanceResource.get({instanceId: $stateParams.instanceId}).$promise;
      }
    }
  }
};
