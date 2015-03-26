'use strict';

module.exports = {
  'admin.player-skin': {
    url: '/player-skin',
    abstract: true,
    views: {
      'content': {
        templateUrl: '/views/template/base.html'
      }
    }
  },
  'admin.player-skin.list': {
    url: '',
    views: {
      'data-header': {
        templateUrl: '/views/player-skin/list-header.html'
      },
      'data-body': {
        templateUrl: '/views/player-skin/list-body.html',
        controller: 'PlayerSkinListController as playerSkinListVm'
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
  'admin.player-skin.detail': {
    url: '/{playerSkinId:[0-9a-zA-Z]{1,}}',
    views: {
      'data-header': {
        templateUrl: '/views/player-skin/detail-header.html'
      },
      'data-body': {
        templateUrl: '/views/player-skin/detail-body.html',
        controller: 'PlayerSkinDetailController as playerSkinDetailVm'
      }
    }
  }
};
