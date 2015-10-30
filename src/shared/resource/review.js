'use strict';
module.exports = {
  'ReviewResource': {
    url: '/api/review/:token/:action',
    params: {
      'token': '@token'
    },
    'actions': {
      'query': {
        method: 'GET',
        isArray: false
      },
      'allow': {
        method: 'PUT',
        params: {
          'action': 'allow'
        }
      },
      'deny': {
        method: 'PUT',
        params: {
          'action': 'deny'
        }
      }
    }
  }
};
