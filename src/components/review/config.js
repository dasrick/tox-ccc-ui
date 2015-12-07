'use strict';

/**
 * @ngInject
 */
module.exports = {
  'app.profile.review': {
    url: '/review',
    views: {
      'content@app.profile': {
        templateUrl: '/views/review/list.html',
        controller: 'ReviewListController as reviewListVm'
      }
    },
    resolve: {
      ReviewResource: 'ReviewResource',
      reviews: function (ReviewResource) {
        return ReviewResource.query().$promise;
      }
    }
  },
  'app.profile.review.detail': {
    url: '/{token}',
    views: {
      'content@app.profile': {
        templateUrl: '/views/review/detail.html',
        controller: 'ReviewDetailController as reviewDetailVm'
      }
    },
    resolve: {
      ReviewResource: 'ReviewResource',
      review: function (ReviewResource, $stateParams) {
        return ReviewResource.get({token: $stateParams.token}).$promise;
      }
    }
  }
};
