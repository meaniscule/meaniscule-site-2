var app = angular.module('Meaniscule', ['ui.router', 'pascalprecht.translate', 'ngSanitize', 'ngCookies']);

app.config(function ($urlRouterProvider, $locationProvider, $translateProvider) {
  // This turns off hashbang urls (/#about) and changes it to something normal (/about)
  $locationProvider.html5Mode(true);
  // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
  $urlRouterProvider.otherwise('/');


  // i18n SETTINGS
  
  // Tell translateProvider what translation file names to look for
  // Used by $translateProvider.useStaticFilesLoader()
  var fileNameConvention = {
    prefix: 'locale-',
    suffix: '.json'
  };

  // Map browser language codes (`navigator.languages[0]`) to our app's language codes
  // Used by $translateProvider.registerAvailableLanguageKeys()
  var langMap = {
      'en_AU': 'en',
      'en_CA': 'en',
      'en_NZ': 'en',
      'en_PH': 'en',
      'en_UK': 'en',
      'en_US': 'en',
      'ja_JP': 'ja'
  };

  $translateProvider
    .useStaticFilesLoader(fileNameConvention)
    .registerAvailableLanguageKeys(['en', 'ja'], langMap)
    .determinePreferredLanguage() // Get the user's system language
    .fallbackLanguage(['en']) // If their system uses a lang we don't support, fall back to this lang
    .useCookieStorage() // Store the user's lang preference
    .useSanitizeValueStrategy('sanitizeParameters'); // Prevent hacking of interpoloated strings
});