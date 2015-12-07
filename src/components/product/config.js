'use strict';

/**
 * @ngInject
 */
module.exports = {
  'app.admin.product': {
    url: '/product',
    views: {
      'content@app.admin': {
        templateUrl: '/views/product/list.html',
        controller: 'ProductListController as productListVm'
      }
    },
    resolve: {
      ProductResource: 'ProductResource',
      products: function (ProductResource) {
        return ProductResource.query().$promise;
      }
    }
  },
  'app.admin.product.detail': {
    url: '/{productId:[0-9a-zA-Z]{1,}}',
    views: {
      'content@app.admin': {
        templateUrl: '/views/product/detail.html',
        controller: 'ProductDetailController as productDetailVm'
      }
    },
    resolve: {
      ProductResource: 'ProductResource',
      product: function (ProductResource, $stateParams) {
        return ProductResource.get({productId: $stateParams.productId}).$promise;
      }
    }
  }
};
