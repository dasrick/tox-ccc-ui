'use strict';
module.exports = {
  'PlanResource': {
    'url': '/api/plans/:planId',
    'params': {
      'planId': '@id'
    },
    'actions': {
      'update': {
        method: 'PUT'
      }
    }
  }
};
