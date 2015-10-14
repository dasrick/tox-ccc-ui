'use strict';
module.exports = {
  'LocaleResource': {
    'url': '/api/common/locales/:theShort',
    'params': {
      'theShort': '@short', // the identifier is the lowercase ISO2
      'locale': '@locale' // to translate the name - default is english
    }
  }
};
