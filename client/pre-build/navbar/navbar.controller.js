app.controller('NavbarController', function($scope, $translate) {
  $scope.changeLanguage = function(languageKey) {
    $translate.use(languageKey);
  };
});