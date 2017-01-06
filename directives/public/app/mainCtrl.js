// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope, mainServ) {
  // VARIABLES
  // ==========================================================
  $scope.repoSortOrder = '-stargazers_count'
  // FUNCTIONS
  // ===========================================================
  var onUserCompelete = function(response){
    $scope.user = response;
    $scope.error = null;
    console.log(response.repos_url);
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

// this promise calls two functions
  $scope.search = function (username) {
    mainServ.gitHubUser(username).then(onUserCompelete, onError)
  };
});
