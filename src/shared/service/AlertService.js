'use strict';
/**
 * @ngInject
 */
module.exports = function ($rootScope, $timeout) {

  // create an array of alerts available globally
  $rootScope.alerts = [];

  var alertService = {
    add: add,
    closeAlert: closeAlert,
    closeAlertIdx: closeAlertIdx,
    clear: clear
  };

  return alertService;

  ////////////

  function add(type, msg, timeout) {
    $rootScope.alerts.push({
      type: type,
      msg: msg,
      close: function () {
        return alertService.closeAlert(this);
      }
    });
    if (timeout) {
      $timeout(function () {
        alertService.closeAlert(this);
      }, timeout);
    }
  }

  function closeAlert(alert) {
    return alertService.closeAlertIdx($rootScope.alerts.indexOf(alert));
  }

  function closeAlertIdx(index) {
    return $rootScope.alerts.splice(index, 1);
  }

  function clear() {
    $rootScope.alerts = [];
  }

};
