app.config(function($stateProvider, $translateProvider) {
    $stateProvider.state('deployer', {
        url: '/deployer',
        templateUrl: '/pre-build/deployer/deployer.html',
        controller: 'DeployerController'
    });
});
