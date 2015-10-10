'use strict';
module.exports = {
  'ReviewResource': {
    'url': '/api/review/:reviewId',
    'params': {
      'reviewId': '@id'
    },
    'actions': {
      'query': {
        method: 'GET',
        isArray: false
      }
    }
  }
};
