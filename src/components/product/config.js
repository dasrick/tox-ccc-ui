'use strict';

module.exports = {
  'app.admin.product': {
    url: '/product',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'app.admin.product.list': {
    url: '',
    views: {
      'data-header': {
        templateUrl: '/views/product/list-header.html'
      },
      'data-body': {
        templateUrl: '/views/product/list-body.html',
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
      'data-header': {
        templateUrl: '/views/product/detail-header.html'
      },
      'data-body': {
        templateUrl: '/views/product/detail-body.html',
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
