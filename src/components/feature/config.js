'use strict';

/**
 * @ngInject
 */
module.exports = {
  'app.admin.feature': {
    url: '/feature',
    views: {
      'content@app.admin': {
        templateUrl: '/views/feature/list.html',
        controller: 'FeatureListController as featureListVm'
      }
    },
    resolve: {
      FeatureResource: 'FeatureResource',
      features: function (FeatureResource) {
        return FeatureResource.query().$promise;
      }
    }
  },
  'app.admin.feature.detail': {
    url: '/{featureId:[0-9a-zA-Z]{1,}}',
    views: {
      'content@app.admin': {
        templateUrl: '/views/feature/detail.html',
        controller: 'FeatureDetailController as featureDetailVm'
      }
    },
    resolve: {
      FeatureResource: 'FeatureResource',
      feature: function (FeatureResource, $stateParams) {
        return FeatureResource.get({featureId: $stateParams.featureId}).$promise;
      },
      LocaleResource: 'LocaleResource',
      CurrentUserService: 'CurrentUserService',
      locales: function (LocaleResource, CurrentUserService) {
        var locale = CurrentUserService.getUser().locale;
        return LocaleResource.query({locale: locale}).$promise;
      }
    }
  }
};
