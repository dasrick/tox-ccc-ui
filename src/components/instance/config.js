'use strict';

module.exports = {
  'app.admin.instance': {
    url: '/instance',
    views: {
      'content@app.admin': {
        templateUrl: '/views/instance/list.html',
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
  'app.admin.instance.detail': {
    url: '/{instanceId:[0-9a-zA-Z]{1,}}',
    views: {
      'content@app.admin': {
        templateUrl: '/views/instance/detail.html',
        controller: 'InstanceDetailController as instanceDetailVm'
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
