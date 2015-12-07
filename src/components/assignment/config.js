'use strict';
/**
 * @ngInject
 */
module.exports = {
  'app.management.assignment': {
    url: '/assignment',
    views: {
      'content@app.management': {
        templateUrl: '/views/assignment/list.html',
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
      'content@app.management': {
        templateUrl: '/views/assignment/detail.html',
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
'use strict';
