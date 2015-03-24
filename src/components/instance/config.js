'use strict';

module.exports = {
  'admin.instance': {
    url: '/instance',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
        //controller: 'InstanceListController as vm'
      }
    }
  },
  'admin.instance.list': {
    url: '',
    views: {
      'data-header': {
        templateUrl: '/views/instance/list-header.html'
      },
      'data-body': {
        templateUrl: '/views/instance/list-body.html',
        controller: 'InstanceListController as vm'
      }
    },
    resolve: {
      // Get AngularJS resource to query
      InstanceResource: 'InstanceResource',
      // Use the resource to fetch data from the server
      instances: function (InstanceResource) {
        return InstanceResource.query().$promise;
      }
    }
  },
  'admin.instance.detail': {
    url: '/{instanceId:[0-9a-zA-Z]{1,}}',
    views: {
      'data-body': {
        templateUrl: '/views/instance/detail.html',
        controller: 'InstanceDetailController as vm'
      }
    },
    resolve: {
      InstanceResource: 'InstanceResource',
      instance: function (InstanceResource, $stateParams) {
        // Extract instance ID from $stateParams
        var instanceId = $stateParams.instanceId;
        // Return a promise to make sure the customer is completely
        // resolved before the controller is instantiated
        return InstanceResource.get({instanceId: instanceId}).$promise;
      }
    }
  }
};
