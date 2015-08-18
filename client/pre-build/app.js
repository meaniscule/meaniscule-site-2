var app = angular.module('Meaniscule', ['ui.router', 'pascalprecht.translate']);

app.config(function ($urlRouterProvider, $locationProvider, $translateProvider) {
  // This turns off hashbang urls (/#about) and changes it to something normal (/about)
  $locationProvider.html5Mode(true);
  // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
  $urlRouterProvider.otherwise('/');

  // Translations!
  $translateProvider.translations('en', {
    'BRANDING_AND_NAV': {
      'TITLE': 'Meaniscule',
      'TAG-LINE': 'Meaniscule = miniscule + MEAN stack generator'
    }
  });
 
  $translateProvider.translations('ja', {
    'BRANDING_AND_NAV': {
      'TITLE': 'ミーナスキュール',
      'TAG-LINE': 'ミーナスキュール = miniscule (ちっこい) + MEAN スタック・ジェネレーター'
    }
  });

  $translateProvider.preferredLanguage('en');

  $translateProvider.useSanitizeValueStrategy('escape');
});