'use strict';

module.exports = require('angular')
  .module('components', [
    require('./common').name,
    require('./instance').name,
    require('./plan').name,
    require('./player_skin').name,
    require('./transcoder_profile').name
  ]);
