'use strict';
module.exports = {
  'InstanceResource': {
    'url': '/api/vmproinstance/:instanceId',
    'params': {
      'instanceId': '@id'
    },
    'actions': {
      'update': {
        method: 'PUT'
      }
    }
  }
};
