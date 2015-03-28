'use strict';

module.exports = {
  'admin.customer': {
    url: '/customer',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'admin.customer.list': {
    url: '',
    views: {
      'data-header': {
        templateUrl: '/views/customer/list-header.html'
      },
      'data-body': {
        templateUrl: '/views/customer/list-body.html',
        controller: 'CustomerListController as customerListVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customers: function (CustomerResource) {
        return CustomerResource.query().$promise;
      }
    }
  },
  'customer.customer': {
    url: '/customer',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'customer.customer.list': {
    url: '',
    views: {
      'data-header': {
        templateUrl: '/views/customer/list-header.html'
      },
      'data-body': {
        templateUrl: '/views/customer/list-body.html',
        controller: 'CustomerListController as customerListVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customers: function (CustomerResource) {
        // ToDo: parentId muss dynamsiert werden
        var parentId = 2;
        return CustomerResource.query({parent: parentId}).$promise;
      }
    }
  },
  'profile.customer': {
    url: '/customer',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'profile.customer.data': {
    url: '',
    views: {
      'data-body': {
        templateUrl: '/views/customer/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  }

};
