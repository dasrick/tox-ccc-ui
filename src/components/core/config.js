'use strict';
/**
 * @ngInject
 */
module.exports = {
  'app': {
    url: '',
    abstract: true,
    data: {
      requireAuth: true
    },
    views: {
      'app': {
        //templateUrl: '/views/core/app.html',
        controller: 'CoreController as coreVm'
      }
    }
  },
  'app.admin': {
    url: '/admin',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/core/sidebar.html'
      },
      'header-left': {
        templateUrl: '/views/common/header-left.html',
        controller: 'HeaderLeftController as headerLeftVm'
      },
      'header-middle': {
        templateUrl: '/views/core/header-middle.html'
      },
      'header-right': {
        templateUrl: '/views/core/header-right.html',
        controller: 'HeaderRightController as headerRightVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customers: function (CustomerResource) {
        return CustomerResource.query().$promise;
      }
    }
  },
  'app.management': {
    url: '/management/{selectedCustomerId:[0-9]{1,}}',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/core/sidebar.html'
      },
      'header-left': {
        templateUrl: '/views/common/header-left.html',
        controller: 'HeaderLeftController as headerLeftVm'
      },
      'header-middle': {
        templateUrl: '/views/core/header-middle.html'
      },
      'header-right': {
        templateUrl: '/views/core/header-right.html',
        controller: 'HeaderRightController as headerRightVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customers: function (CustomerResource) {
        return CustomerResource.query().$promise;
      }
    }
  },
  'app.profile': {
    url: '/profile',
    abstract: true,
    views: {
      'main': {
        templateUrl: '/views/core/sidebar.html'
      },
      'header-left': {
        templateUrl: '/views/common/header-left.html',
        controller: 'HeaderLeftController as headerLeftVm'
      },
      'header-middle': {
        templateUrl: '/views/core/header-middle.html'
      },
      'header-right': {
        templateUrl: '/views/core/header-right.html',
        controller: 'HeaderRightController as headerRightVm'
      }
    },
    resolve: {
      CustomerResource: 'CustomerResource',
      customers: function (CustomerResource) {
        return CustomerResource.query().$promise;
      }
    }
  },
  'app.security': {
    url: '',
    abstract: true,
    data: {
      requireAuth: false
    },
    views: {
      'main': {
        templateUrl: '/views/common/1col-centerbox.html'
      },
      'header-left': {
        templateUrl: '/views/common/header-left-noauth.html'
      }
    }
  }
};
