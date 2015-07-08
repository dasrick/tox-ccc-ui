'use strict';

module.exports = {
  'app.admin.customer': {
    url: '/customer',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.admin.customer.list': {
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
  'app.admin.customer.detail': {
    url: '/{customerId:[0-9a-zA-Z]{1,}}',
    views: {
      'data-header': {
        templateUrl: '/views/customer/detail-header.html'
      },
      'data-body': {
        templateUrl: '/views/customer/detail-body.html',
        controller: 'CustomerDetailController as customerDetailVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customer: function (CustomerResource, $stateParams) {
        return CustomerResource.get({customerId: $stateParams.customerId}).$promise;
      }
    }
  },
  'app.management.customer': {
    url: '/customer',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.management.customer.list': {
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
      customers: function (CustomerResource, $stateParams) {
        return CustomerResource.query({parent: $stateParams.selectedCustomerId}).$promise;
      }
    }
  },
  'app.management.customer.detail': {
    url: '/{customerId:[0-9a-zA-Z]{1,}}',
    views: {
      'data-header': {
        templateUrl: '/views/customer/detail-header.html'
      },
      'data-body': {
        templateUrl: '/views/customer/detail-body.html',
        controller: 'CustomerDetailController as customerDetailVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customer: function (CustomerResource, $stateParams) {
        return CustomerResource.get({customerId: $stateParams.customerId}).$promise;
      }
    }
  },
  'app.profile.customer': {
    url: '/customer',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.profile.customer.data': {
    url: '',
    views: {
      'data-body': {
        templateUrl: '/views/customer/list.html'
      }
    }
  }

};
