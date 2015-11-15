'use strict';
/**
 * @ngInject
 */
module.exports = function ($translate, LocaleResource, $filter) {
  return {
    restrict: 'E',
    templateUrl: 'views/translate-model/translate-model.html',
    replace: true,
    scope: {
      ngModel: '=',
      languages: '=',
      defaultLanguage: '=',
      form: '='
    },
    link: function (scope) {
      // properties of scope
      //
      // ngModel
      // notUsedLanguages


      console.log('translateModel ngModel: ', scope.ngModel);
      console.log('translateModel languages: ', scope.languages);
      console.log('translateModel defaultLanguage: ', scope.defaultLanguage);
      console.log('translateModel form: ', scope.form);

      //var filter, language, params, _i, _len, _ref;
      if (scope.ngModel == null) {
        scope.ngModel = {};
      }
      //scope.notUsedLanguages = [];
      //if (scope.ngModel[scope.defaultLanguage] == null) {
      //  scope.ngModel[scope.defaultLanguage] = '';
      //}
      //_ref = scope.languages;
      //for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      //  language = _ref[_i];
      //  if (scope.ngModel[language] == null) {
      //    scope.notUsedLanguages.push(language);
      //  }
      //}
      //params = {
      //  locale: $translate.preferredLanguage()
      //};
      //filter = {
      //  where: {
      //    short: {
      //      'in': scope.languages
      //    }
      //  }
      //};

      // HINT FOR RICKLocaleResource: 'LocaleResource',
      //CurrentUserService: 'CurrentUserService',
      //  locales: function (LocaleResource, CurrentUserService) {
      //  var locale = CurrentUserService.getUser().locale;
      //  return LocaleResource.query({locale: locale}).$promise;
      //}
      // HINT FOR RICK
      //var locales = LocaleResource.query(params).$promise;
      //var filteredLocales = $filter('filter')(locales, {short: scope.languages}, true);

      //DS.findAll('locale', params);
      //scope.$watch(
      ////  function () {
      ////    DS.lastModified('locale');
      ////  },
      //  locales,
      //
      //
      //  function () {
      //    var locale, _j, _len1, _ref1, _results;
      //    scope.locales = {};
      //    //if (DS.filter('locale', filter).length > 0) {
      //    if (filteredLocales.length > 0) {
      //      //_ref1 = DS.filter('locale', filter);
      //      //_results = [];
      //      //for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      //      //  locale = _ref1[_j];
      //      //  _results.push(scope.locales[locale.short] = locale.name);
      //      //}
      //      //_results;
      //    }
      //  }
      //);
      //scope.addLanguage = function (lang) {
      //  var key, notUsed, _j, _len1, _ref1, _results;
      //  scope.ngModel[lang] = '';
      //  _ref1 = scope.notUsedLanguages;
      //  _results = [];
      //  for (key = _j = 0, _len1 = _ref1.length; _j < _len1; key = ++_j) {
      //    notUsed = _ref1[key];
      //    if (notUsed === lang) {
      //      _results.push(scope.notUsedLanguages.splice(key, 1));
      //    }
      //  }
      //  //return _results;
      //};
    }
  };
};
