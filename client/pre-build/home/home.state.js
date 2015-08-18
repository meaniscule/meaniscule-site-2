app.config(function($stateProvider, $translateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/pre-build/home/home.html',
        controller: 'HomeController'
    });

    $stateProvider.state('en', {
        url: '/en',
        templateUrl: '/pre-build/home/home.html',
        controller: 'HomeController',
        onEnter: function($translate) {
          $translate.use('en');
        }
    });

    $stateProvider.state('ja', {
        url: '/ja',
        templateUrl: '/pre-build/home/home.html',
        controller: 'HomeController',
        onEnter: function($translate) {
          $translate.use('ja');
        }
    });
});