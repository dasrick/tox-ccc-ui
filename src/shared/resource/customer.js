'use strict';
module.exports = {
  'CustomerResource': {
    'url': '/api/customers/:customerId',
    'params': {
      'customerId': '@id',
      'parent': '@parentId'
    },
    'actions': {
      'update': {
        method: 'PUT'
      }
    }
  }
};
