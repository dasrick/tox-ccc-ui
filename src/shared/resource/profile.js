'use strict';
// TODO - richtig blöde idee, das profile auf einer route zu besorgen und auf einer anderen zu aktualisieren
module.exports = {
  'ProfileResource': {
    'url': '/api/profile'
  },
  'ProfileDataResource': {
    'url': '/api/profile/data',
    'actions': {
      'update': {
        method: 'PUT'
      }
    }
  },
  'ProfileSecurityResource': {
    'url': '/api/profile/password',
    'actions': {
      'update': {
        method: 'PUT'
      }
    }
  }
};
