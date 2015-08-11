'use strict';

module.exports = {
  'app.admin.player-skin': {
    url: '/player-skin',
    views: {
      'content@app.admin': {
        templateUrl: '/views/player-skin/list.html',
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
  'app.admin.player-skin.detail': {
    url: '/{playerSkinId:[0-9a-zA-Z]{1,}}',
    views: {
      'content@app.admin': {
        templateUrl: '/views/player-skin/detail.html',
        controller: 'PlayerSkinDetailController as playerSkinDetailVm'
      }
    },
    resolve: {
      PlayerSkinResource: 'PlayerSkinResource',
      playerSkin: function (PlayerSkinResource, $stateParams) {
        return PlayerSkinResource.get({playerSkinId: $stateParams.playerSkinId}).$promise;
      }
    }
  }
};
