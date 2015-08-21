var app = angular.module('Meaniscule', ['ui.router', 'pascalprecht.translate', 'ngSanitize']);

app.config(function ($urlRouterProvider, $locationProvider, $translateProvider) {
  // This turns off hashbang urls (/#about) and changes it to something normal (/about)
  $locationProvider.html5Mode(true);
  // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
  $urlRouterProvider.otherwise('/');

  $translateProvider.useStaticFilesLoader({
    prefix: 'locale-',
    suffix: '.json'
  });

  $translateProvider
    .registerAvailableLanguageKeys(['en', 'ja'], {
      'en_US': 'en',
      'en_UK': 'en',
      'ja_JP': 'ja'
    })
    .determinePreferredLanguage();

  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
});