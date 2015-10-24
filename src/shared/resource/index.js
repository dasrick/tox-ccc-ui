'use strict';
var resource = {};

angular.extend(resource, require('./assignment'));
angular.extend(resource, require('./customer'));
angular.extend(resource, require('./country'));
angular.extend(resource, require('./instance'));
angular.extend(resource, require('./locale'));
angular.extend(resource, require('./log'));
angular.extend(resource, require('./plan'));
angular.extend(resource, require('./player-skin'));
angular.extend(resource, require('./product'));
angular.extend(resource, require('./profile'));
angular.extend(resource, require('./review'));
angular.extend(resource, require('./transcoder-profile'));
angular.extend(resource, require('./user'));

module.exports = resource;