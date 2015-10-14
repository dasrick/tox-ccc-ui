'use strict';
var resource = {};

// RESOURCES incl API URL SHITA ////////////////////////////////////////////////////////////////////////////////////////
var resourceMap = {
  'AssignmentResource': './assignment',
  'CustomerResource': './customer',
  'CountryResource': './country',
  'InstanceResource': './instance',
  'LocaleResource': './locale',
  'LogResource': './log',
  'PlanResource': './plan',
  'PlayerSkinResource': './player-skin',
  'ProductResource': './product',
  'ReviewResource': './review',
  'TranscoderProfileResource': './transcoder-profile',
  'UserResource': './user'
};
var apiUrl = 'https://ccc.mi24.dev';
//var apiUrl = 'https://ccc-qa.video-cdn.net';
//var apiUrl = '';
var requiredResource = {};
for (var resourceName in resourceMap) {
  if (resourceMap.hasOwnProperty(resourceName)) {
    requiredResource[resourceName] = require(resourceMap[resourceName]);
    requiredResource[resourceName][resourceName].url = apiUrl + requiredResource[resourceName][resourceName].url;
    angular.extend(resource, requiredResource[resourceName]);
  }
}
// =====================================================================================================================

// RESOURCES excl API FOO //////////////////////////////////////////////////////////////////////////////////////////////
//var AssignmentResource = require('./assignment');
//var CustomerResource = require('./customer');
//var InstanceResource = require('./instance');
//var LogResource = require('./log');

//angular.extend(resource, AssignmentResource);
//angular.extend(resource, CustomerResource);
//angular.extend(resource, InstanceResource);
//angular.extend(resource, LogResource);
// =====================================================================================================================

module.exports = resource;