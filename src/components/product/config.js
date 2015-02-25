'use strict';

module.exports = {
  'admin.product': {
    url: '/product',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'admin.product.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/product/list.html',
        controller: 'ProductListController as vm'
      }
    },
    resolve: {
      ProductResource: 'ProductResource',
      products: function (ProductResource) {
        return ProductResource.query().$promise;
      }
    }
  },
  'admin.product.detail': {
    url: '/path-for-id',
    views: {
      'data': {
        templateUrl: '/views/product/detail.html',
        controller: 'ProductDetailController as vm'
      }
    }
  }
};
