'use strict';

module.exports = require('angular')
  .module('components', [
    require('./assignment').name,
    require('./common').name,
    require('./customer').name,
    require('./dashboard').name,
    require('./instance').name,
    require('./log').name,
    require('./plan').name,
    require('./player_skin').name,
    require('./product').name,
    require('./review').name,
    require('./security').name,
    require('./transcoder_profile').name,
    require('./user').name
  ]);
