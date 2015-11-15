'use strict';
/**
 * @ngInject
 */
module.exports = function ($translate) {
  return function (translateModel) {
    console.log('filter translateModel translateModel: ', translateModel);
    console.log('filter translateModel $translate.use(): ', $translate.use());

    return translateModel[$translate.use()];
  };
};
