'use strict';
module.exports = {
  'LocaleResource': {
    'url': '/api/common/locales/:theShort',
    'params': {
      'theShort': '@short',
      'locale': '@locale' // to translate the name into
    }
  }
};
