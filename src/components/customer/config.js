'use strict';

module.exports = {
  // admin part ////////////////////////////////////////////////////////////////////////////////////////////////////////
  'app.admin.customer': {
    url: '/customer',
    views: {
      'content@app.admin': {
        templateUrl: '/views/customer/list.html',
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
      'content@app.admin': {
        templateUrl: '/views/customer/detail.html',
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
  'app.admin.customer.create': {
    views: {
      'content@app.admin': {
        templateUrl: '/views/customer/detail.html',
        controller: 'CustomerDetailController as customerDetailVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customer: function (CustomerResource) {
        return new CustomerResource();
      }
    }
  },
  // management part ///////////////////////////////////////////////////////////////////////////////////////////////////
  'app.management.customer': {
    url: '/customer',
    views: {
      'content@app.management': {
        templateUrl: '/views/customer/list.html',
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
      'content@app.management': {
        templateUrl: '/views/customer/detail.html',
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
  'app.management.customer.create': {
    views: {
      'content@app.management': {
        templateUrl: '/views/customer/detail.html',
        controller: 'CustomerDetailController as customerDetailVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customer: function (CustomerResource) {
        return new CustomerResource();
      }
    }
  },
  // profile part //////////////////////////////////////////////////////////////////////////////////////////////////////
  'app.profile.customer': {
    url: '/customer',
    views: {
      'content@app.profile': {
        templateUrl: '/views/customer/list.html'
      }
    }
  },
  'app.profile.customer.data': {
    url: '',
    views: {
      'content@app.profile': {
        templateUrl: '/views/customer/detail.html'
      }
    }
  }

};
