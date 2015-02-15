'use strict';

module.exports = require('angular')
  .module('components', [
    require('./common').name,
    require('./instance').name
  ]);
