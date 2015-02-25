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
        templateUrl: '/views/player_skin/list.html',
        controller: 'PlayerSkinListController as vm'
      }
    },
    resolve: {
      PlayerSkinResource: 'PlayerSkinResource',
      playerSkins: function (PlayerSkinResource) {
        var type = 'all';
        return PlayerSkinResource.query({type: type}).$promise;
      }
    }
  },
  'admin.player_skin.detail': {
    url: '/path-for-id',
    views: {
      'data': {
        templateUrl: '/views/player_skin/detail.html',
        controller: 'PlayerSkinDetailController as vm'
      }
    }
  }
};
