// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("userCtrl", function($scope, mainServ, $stateParams) {
  // VARIABLES
  // ==========================================================

  $scope.repoSortOrder = '-stargazers_count';
  $scope.username = $stateParams.username;
  // FUNCTIONS
  // ===========================================================
  var onUserCompelete = function(response){
    $scope.user = response;
    $scope.error = null;
    (function() {
      mainServ.gitHubRepos($scope.user.repos_url).then(onRepos, onError)
    }())
  }

  var onRepos = function (response) {
    $scope.repos = response;
  }

  var onError = function (reason) {
    $scope.user = null;
    $scope.repos = null;
    $scope.error = "could not fetch the data";
  }

  mainServ.gitHubUser($scope.username).then(onUserCompelete, onError);

// this promise calls two functions
});
