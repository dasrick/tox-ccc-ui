'use strict';

module.exports = {
  'admin.player_skin': {
    url: '/player-skin',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'admin.player_skin.list': {
    url: '',
    views: {
      'data': {
        templateUrl: '/views/player_skin/list.html'
        //controller: 'InstanceListController as vm'
      }
    }
  },
  'admin.player_skin.detail': {
    url: '/path-for-id',
    views: {
      'data': {
        templateUrl: '/views/player_skin/detail.html'
        //controller: 'InstanceDetailController as vm'
      }
    }
  }
};
