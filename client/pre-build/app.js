var app = angular.module('Meaniscule', ['ui.router', 'pascalprecht.translate']);

app.config(function ($urlRouterProvider, $locationProvider, $translateProvider) {
   // This turns off hashbang urls (/#about) and changes it to something normal (/about)
   $locationProvider.html5Mode(true);
   // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
   $urlRouterProvider.otherwise('/');

   $translateProvider.useSanitizeValueStrategy('escape');
});