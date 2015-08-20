app.config(function($stateProvider, $translateProvider) {
    $stateProvider
        .state('deployer', {
            url: '/deployer',
            templateUrl: '/pre-build/deployer/deployer.html',
            controller: 'DeployerController'
        })
        .state('deployer.en', {
            url: '/en/deployer',
            templateUrl: '/pre-build/deployer/deployer.html',
            controller: 'DeployerController',
            onEnter: function($translate) {
              $translate.use('en');
            }
        })
        .state('deployer.ja', {
            url: '/ja/deployer',
            templateUrl: '/pre-build/deployer/deployer.html',
            controller: 'DeployerController',
            onEnter: function($translate) {
              $translate.use('ja');
            }
        });
});