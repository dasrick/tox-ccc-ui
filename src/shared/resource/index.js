'use strict';

/**
 * @ngInject
 */
var resource = {};

// TODO rename all resources - just do it via vm => git mv path/file.js path/File.js

angular.extend(resource, require('./assignment'));
angular.extend(resource, require('./customer'));
angular.extend(resource, require('./country'));
angular.extend(resource, require('./feature'));
angular.extend(resource, require('./instance'));
angular.extend(resource, require('./locale'));
angular.extend(resource, require('./log'));
angular.extend(resource, require('./plan'));
angular.extend(resource, require('./player-skin'));
angular.extend(resource, require('./product'));
angular.extend(resource, require('./profile'));
angular.extend(resource, require('./review'));
angular.extend(resource, require('./reviewer'));
angular.extend(resource, require('./transcoder-profile'));
angular.extend(resource, require('./user'));

module.exports = resource;