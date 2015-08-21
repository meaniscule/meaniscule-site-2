app.controller('NavbarController', function($scope, $translate, $state) {
  $scope.changeLanguage = function(languageKey) {
    $translate.use(languageKey);
  };
});