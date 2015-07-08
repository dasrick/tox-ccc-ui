'use strict';

module.exports = {
  'app.profile.review': {
    url: '/review',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.profile.review.data': {
    url: '',
    views: {
      'data-body': {
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
