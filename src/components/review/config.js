'use strict';

module.exports = {
  'profile.review': {
    url: '/review',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'profile.review.data': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/review/list.html',
        controller: 'ReviewListController as vm'
      }
    },
    resolve: {
      ReviewResource: 'ReviewResource',
      reviews: function (ReviewResource) {
        return ReviewResource.query().$promise;
      }
    }
  }
};
