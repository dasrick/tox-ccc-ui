'use strict';

module.exports = {
  'app.profile.review': {
    url: '/review',
    views: {
      'content@app.profile': {
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
