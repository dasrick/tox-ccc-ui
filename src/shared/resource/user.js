'use strict';
module.exports = {
  'UserResource': {
    'url': '/api/users/:userId',
    'params': {
      'userId': '@id',
      'customer': '@customer'
    },
    'actions': {
      'update': {
        method: 'PUT'
      }
    }
  }
};
