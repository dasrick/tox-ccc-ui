/* istanbul ignore next */
'use strict';

/**
 * @ngInject
 */
module.exports = function () {
  return {
    restrict: 'EA', //E = element, A = attribute, C = class, M = comment
    scope: {
      //@ reads the attribute value, = provides two-way binding, & works with functions
      item: '=rowListItem',
      route: '@rowListRoute'
    },
    templateUrl: '/views/template/row-list-item.html',
    replace: true
    //controller: controllerFunction, //Embed a custom controller in the directive
    //link: function ($scope, element, attrs) {
    //} //DOM manipulation
  };
};
