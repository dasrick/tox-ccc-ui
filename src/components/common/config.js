'use strict';

module.exports = {
  'app': {
    url: '',
    abstract: true,
    views: {
      'app': {
        templateUrl: '/views/common/app.html'
      }
    }
  },
  'app.admin': {
    url: '/admin',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/common/sidebar-admin.html'
      },
      'header-left': {
        templateUrl: '/views/template/header-left.html',
        controller: 'HeaderLeftController as headerLeftVm'
      },
      'header-middle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'header-right': {
        templateUrl: '/views/common/header-right.html',
        controller: 'HeaderRightController as headerRightVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customers: function (CustomerResource) {
        return CustomerResource.query().$promise;
      //},
      //
      //CustomerService: 'CustomerService',
      //customer: function (CustomerResource, CustomerService) {
      //  var selectedCustomer = CustomerService.getSelectedCustomer();
      //  return CustomerResource.get({customerId: selectedCustomer.id}).$promise;
      }
    }
  },
  'app.management': {
    url: '/management/{selectedCustomerId:[0-9]{1,}}',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/common/sidebar-management.html'
      },
      'header-left': {
        templateUrl: '/views/template/header-left.html',
        controller: 'HeaderLeftController as headerLeftVm'
      },
      'header-middle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'header-right': {
        templateUrl: '/views/common/header-right.html',
        controller: 'HeaderRightController as headerRightVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customers: function (CustomerResource) {
        return CustomerResource.query().$promise;
      //},
      //customer: function (CustomerResource, $stateParams) {
      //  return CustomerResource.get({customerId: $stateParams.selectedCustomerId}).$promise;
      }
    }
  },
  'app.profile': {
    url: '/profile',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/common/sidebar-profile.html'
      },
      'header-left': {
        templateUrl: '/views/template/header-left.html',
        controller: 'HeaderLeftController as headerLeftVm'
      },
      'header-middle': {
        templateUrl: '/views/common/header-middle.html'
      },
      'header-right': {
        templateUrl: '/views/common/header-right.html',
        controller: 'HeaderRightController as headerRightVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customers: function (CustomerResource) {
        return CustomerResource.query().$promise;
      //},
      //CustomerService: 'CustomerService',
      //customer: function (CustomerResource, CustomerService) {
      //  var selectedCustomer = CustomerService.getSelectedCustomer();
      //  return CustomerResource.get({customerId: selectedCustomer.id}).$promise;
      }
    }
  },
  'app.security': {
    url: '',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/template/1col-centerbox.html'
      },
      'header-left': {
        templateUrl: '/views/template/header-left-noauh.html'
      }
    }
  }
};
