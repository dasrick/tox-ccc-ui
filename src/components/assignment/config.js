'use strict';

module.exports = {
  'app.management.assignment': {
    url: '/assignment',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.management.assignment.list': {
    url: '',
    views: {
      'data-header': {
        templateUrl: '/views/assignment/list-header.html'
      },
      'data-body': {
        templateUrl: '/views/assignment/list-body.html',
        controller: 'AssignmentListController as assignmentListVm'
      }
    },
    resolve: {
      AssignmentResource: 'AssignmentResource',
      assignments: function (AssignmentResource, $stateParams) {
        return AssignmentResource.query({customer: $stateParams.selectedCustomerId}).$promise;
      }
    }
  },
  'app.management.assignment.detail': {
    url: '/{assignmentId:[0-9a-zA-Z]{1,}}',
    views: {
      'data-header': {
        templateUrl: '/views/assignment/detail-header.html'
      },
      'data-body': {
        templateUrl: '/views/assignment/detail-body.html',
        controller: 'AssignmentDetailController as assignmentDetailVm'
      }
    },
    resolve: {
      AssignmentResource: 'AssignmentResource',
      assignment: function (AssignmentResource, $stateParams) {
        return AssignmentResource.get({assignmentId: $stateParams.assignmentId}).$promise;
      }
    }
  }
};
