'use strict';
module.exports = {
  'CountryResource': {
    'url': '/api/common/countries/:theShort',
    'params': {
      'theShort': '@short', // the identifier is the lowercase ISO2
      'locale': '@locale' // to translate the name - default is english
    }
  }
};
